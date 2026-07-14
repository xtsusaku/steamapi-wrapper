import { METHOD_VERSIONS, PUBLISHER_ONLY } from "./metadata.js";

// Known verbs that imply an HTTP POST method in the Steam Web API
const POST_VERBS = [
  "set", "add", "remove", "delete", "post", "create",
  "update", "validate", "approve", "lock", "unlock",
  "record", "fire", "submit", "report"
];

/**
 * SteamAPI Client class using dynamic JavaScript Proxies.
 * Allows calling any interface and method listed on steamapi.xpaw.me
 */
export class SteamAPI {
  /**
   * Create a new SteamAPI instance
   * 
   * @param {Object} options - Configuration options
   * @param {string} [options.apiKey] - Your Steam Web API Key
   * @param {string} [options.key] - Alternate name for apiKey
   * @param {string} [options.partnerKey] - Your Steamworks Publisher Web API Key
   * @param {string} [options.accessToken] - Steam Access Token for Store/Community APIs
   * @param {string} [options.access_token] - Alternate name for accessToken
   * @param {string} [options.baseUrl] - Base URL (default: https://api.steampowered.com)
   * @param {string} [options.format] - Response format (default: json)
   * @param {Object} [options.headers] - Additional custom HTTP headers to send
   */
  constructor(options = {}) {
    this.apiKey = options.apiKey || options.key || "";
    this.partnerKey = options.partnerKey || "";
    this.accessToken = options.accessToken || options.access_token || "";
    this.baseUrl = options.baseUrl || "https://api.steampowered.com";
    this.format = options.format || "json";
    this.headers = options.headers || {};

    // Return a Proxy that wraps the instance to allow dynamic interface matching
    return new Proxy(this, {
      get(target, interfaceName) {
        // If the property exists on the class instance, return it directly
        if (interfaceName in target) {
          return target[interfaceName];
        }

        // Otherwise, return a nested Proxy representing the Steam Interface (e.g. IPlayerService)
        return new Proxy({}, {
          get(_, methodName) {
            // Return an async function for the Steam Web API method call
            return (params) => target.callApi(interfaceName, methodName, params);
          }
        });
      }
    });
  }

  /**
   * Internal method to dispatch the API request
   */
  async callApi(interfaceName, methodName, params = {}) {
    const keyPath = `${interfaceName}/${methodName}`;
    const isPublisherOnly = PUBLISHER_ONLY.has(keyPath);

    // Enforce partnerKey for publisher-only APIs
    if (isPublisherOnly && !this.partnerKey) {
      throw new Error(
        `Method "${interfaceName}.${methodName}" is a publisher-only API and requires a "partnerKey" to be provided in the SteamAPI constructor options.`
      );
    }

    // 1. Determine HTTP method (GET vs POST)
    let httpMethod = "GET";
    const userParams = { ...params };

    if (userParams._httpMethod) {
      httpMethod = userParams._httpMethod;
      delete userParams._httpMethod;
    } else {
      const lowerMethod = methodName.toLowerCase();
      const isKnownPost = POST_VERBS.some(verb => lowerMethod.startsWith(verb));
      if (isKnownPost) {
        httpMethod = "POST";
      }
    }

    // 2. Determine API Version
    let version = 1;
    if (userParams._version) {
      version = userParams._version;
      delete userParams._version;
    } else {
      if (METHOD_VERSIONS[keyPath]) {
        version = METHOD_VERSIONS[keyPath];
      }
    }

    // 3. Steam Web API "Service" conventions:
    // Interfaces ending with "Service" group parameters inside a stringified "input_json" parameter,
    // whereas "key" and "format" are passed directly in the URL query string.
    const isService = interfaceName.endsWith("Service");

    // 4. Format parameters
    // For Service endpoints, keep arrays as standard JSON arrays.
    // For standard/legacy endpoints, flatten arrays into zero-indexed notation (e.g., steamids[0], steamids[1]).
    const formattedParams = {};
    for (const [key, value] of Object.entries(userParams)) {
      if (Array.isArray(value)) {
        if (isService) {
          formattedParams[key] = value;
        } else {
          value.forEach((item, index) => {
            formattedParams[`${key}[${index}]`] = item;
          });
        }
      } else {
        formattedParams[key] = value;
      }
    }

    // 5. Select correct API host and API Key based on endpoint level and provided credentials
    let activeBaseUrl = this.baseUrl;
    let activeKey = this.apiKey;

    // If only partnerKey is provided, route all APIs to the partner domain by default
    const onlyPartnerKeyProvided = !this.apiKey && this.partnerKey;

    if (isPublisherOnly || onlyPartnerKeyProvided) {
      if (activeBaseUrl === "https://api.steampowered.com") {
        activeBaseUrl = "https://partner.steam-api.com";
      }
      activeKey = this.partnerKey;
    }

    const urlParams = new URLSearchParams();
    if (activeKey) urlParams.set("key", activeKey);
    if (this.accessToken) urlParams.set("access_token", this.accessToken);
    if (this.format) urlParams.set("format", this.format);

    let fetchUrl = `${activeBaseUrl}/${interfaceName}/${methodName}/v${version}/`;
    let fetchOptions = {
      method: httpMethod,
      headers: { ...this.headers }
    };

    if (httpMethod === "POST") {
      let bodyData;
      if (isService) {
        const bodyParams = new URLSearchParams();
        bodyParams.set("input_json", JSON.stringify(formattedParams));
        bodyData = bodyParams.toString();
      } else {
        const bodyParams = new URLSearchParams();
        for (const [k, v] of Object.entries(formattedParams)) {
          bodyParams.set(k, v);
        }
        bodyData = bodyParams.toString();
      }

      fetchUrl += `?${urlParams.toString()}`;
      fetchOptions.headers["Content-Type"] = "application/x-www-form-urlencoded";
      fetchOptions.body = bodyData;
    } else {
      // GET Request
      if (isService) {
        if (Object.keys(formattedParams).length > 0) {
          urlParams.set("input_json", JSON.stringify(formattedParams));
        }
      } else {
        for (const [k, v] of Object.entries(formattedParams)) {
          urlParams.set(k, v);
        }
      }
      fetchUrl += `?${urlParams.toString()}`;
    }

    // 6. Execute Request using native fetch (Bun, Node 18+, Browsers)
    const response = await fetch(fetchUrl, fetchOptions);

    if (!response.ok) {
      let errorMsg = `Steam API returned status ${response.status}`;
      try {
        const errJson = await response.json();
        if (errJson && errJson.response && errJson.response.error) {
          errorMsg += `: ${errJson.response.error}`;
        }
      } catch (e) {
        // Fallback to text if body is not JSON
      }
      const err = new Error(errorMsg);
      err.status = response.status;
      err.eresult = response.headers.get("x-eresult");
      throw err;
    }

    // 7. Return typed response
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  }
}
