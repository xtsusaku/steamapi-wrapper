import { METHOD_VERSIONS, PUBLISHER_ONLY } from "./metadata.js";

// Known verbs that imply an HTTP POST method in the Steam Web API
const POST_VERBS = [
  "set",
  "add",
  "remove",
  "delete",
  "post",
  "create",
  "update",
  "validate",
  "approve",
  "lock",
  "unlock",
  "record",
  "fire",
  "submit",
  "report",
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
    this.SteamStoreAPI = new SteamStoreAPI(this);

    // Return a Proxy that wraps the instance to allow dynamic interface matching
    return new Proxy(this, {
      get(target, interfaceName) {
        // If the property exists on the class instance, return it directly
        if (interfaceName in target) {
          return target[interfaceName];
        }

        // Otherwise, return a nested Proxy representing the Steam Interface (e.g. IPlayerService)
        return new Proxy(
          {},
          {
            get(_, methodName) {
              // Return an async function for the Steam Web API method call
              return (params) =>
                target.callApi(interfaceName, methodName, params);
            },
          },
        );
      },
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
        `Method "${interfaceName}.${methodName}" is a publisher-only API and requires a "partnerKey" to be provided in the SteamAPI constructor options.`,
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
      const isKnownPost = POST_VERBS.some((verb) =>
        lowerMethod.startsWith(verb),
      );
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
      headers: { ...this.headers },
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
      fetchOptions.headers["Content-Type"] =
        "application/x-www-form-urlencoded";
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

/**
 * Steam Storefront / Big Picture Store API
 */
export class SteamStoreAPI {
  constructor(client) {
    this.client = client;
  }

  /**
   * Internal helper to make Storefront API requests
   */
  async _fetchStore(endpoint, params = {}) {
    const urlParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        urlParams.set(key, value);
      }
    }
    const queryString = urlParams.toString();
    const fetchUrl = `https://store.steampowered.com/api/${endpoint}/${queryString ? "?" + queryString : ""}`;

    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: { ...this.client.headers },
    });

    if (!response.ok) {
      const errorMsg = `Steam Store API returned status ${response.status}`;
      const err = new Error(errorMsg);
      err.status = response.status;
      throw err;
    }

    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  }

  /**
   * Get details for one or more Steam applications using the Steam Store API
   *
   * @param {number[]|string[]|number|string} appids - Array of Steam Application IDs or a single ID
   * @param {string} [code] - Optional 2-letter country/language code
   * @param {string} [language] - Optional full language name (e.g. 'japanese', 'thai')
   * @param {string[]|string} [filters] - Optional filter or array of filters to apply
   * @returns {Promise<any>} The API response from Steam
   */
  async getAppDetails(appids, code, language, filters) {
    if (!appids || (Array.isArray(appids) && appids.length === 0)) {
      throw new Error("appids is required for getAppDetails");
    }
    const isMultiple = Array.isArray(appids) || (typeof appids === "string" && appids.includes(","));
    const appidsParam = Array.isArray(appids) ? appids.join(",") : appids;
    const params = { appids: appidsParam };
    if (code) params.cc = code;
    if (language) params.l = language;
    if (isMultiple) {
      params.filters = "price_overview";
    } else if (filters) {
      params.filters = Array.isArray(filters) ? filters.join(",") : filters;
    }
    return this._fetchStore("appdetails", params);
  }

  /**
   * Get pricing details for one or more Steam applications
   *
   * @param {number[]|string[]|number|string} appids - Array of Steam Application IDs or a single ID
   * @param {string} [code] - Optional 2-letter country/language code
   * @returns {Promise<any>} The API response from Steam
   */
  async getAppPricingDetails(appids, code) {
    if (!appids || (Array.isArray(appids) && appids.length === 0)) {
      throw new Error("appids is required for getAppPricingDetails");
    }
    const appidsParam = Array.isArray(appids) ? appids.join(",") : appids;
    const params = { appids: appidsParam, filters: "price_overview" };
    if (code) params.cc = code;
    return this._fetchStore("appdetails", params);
  }

  /**
   * Get apps featured on the storefront
   *
   * @param {string} [code] - Optional 2-letter country/language code
   * @param {string} [language] - Optional full language name
   * @returns {Promise<any>} The API response from Steam
   */
  async getFeatured(code, language) {
    const params = {};
    if (code) params.cc = code;
    if (language) params.l = language;
    return this._fetchStore("featured", params);
  }

  /**
   * Get featured categories on the storefront
   *
   * @param {string} [code] - Optional 2-letter country/language code
   * @param {string} [language] - Optional full language name
   * @param {Object} [options] - Additional optional parameters (e.g., trailer, extra)
   * @returns {Promise<any>} The API response from Steam
   */
  async getFeaturedCategories(code, language, options = {}) {
    const params = { ...options };
    if (code) params.cc = code;
    if (language) params.l = language;
    return this._fetchStore("featuredcategories", params);
  }

  /**
   * Get information about apps and users in the context of the logged-in user session
   *
   * @param {number[]|string[]|number|string} appids - Array of Steam Application IDs or a single ID
   * @param {string} [code] - Optional 2-letter country/language code
   * @param {string} [language] - Optional full language name
   * @returns {Promise<any>} The API response from Steam
   */
  async getAppUserDetails(appids, code, language) {
    if (!appids || (Array.isArray(appids) && appids.length === 0)) {
      throw new Error("appids is required for getAppUserDetails");
    }
    const appidsParam = Array.isArray(appids) ? appids.join(",") : appids;
    const params = { appids: appidsParam };
    if (code) params.cc = code;
    if (language) params.l = language;
    return this._fetchStore("appuserdetails", params);
  }

  /**
   * Get Big Picture mode store messages
   *
   * @param {string[]|string} gids - ID or array of IDs of the messages
   * @param {string} [code] - Optional 2-letter country/language code
   * @param {string} [language] - Optional full language name
   * @returns {Promise<any>} The API response from Steam
   */
  async getMessages(gids, code, language) {
    if (!gids || (Array.isArray(gids) && gids.length === 0)) {
      throw new Error("gids is required for getMessages");
    }
    const gidsParam = Array.isArray(gids) ? gids.join(",") : gids;
    const params = { gids: gidsParam };
    if (code) params.cc = code;
    if (language) params.l = language;
    return this._fetchStore("messages", params);
  }

  /**
   * Get details for storefront packages
   *
   * @param {number[]|string[]|number|string} packageids - Array of package IDs or a single ID
   * @param {string} [code] - Optional 2-letter country/language code
   * @param {string} [language] - Optional full language name
   * @returns {Promise<any>} The API response from Steam
   */
  async getPackageDetails(packageids, code, language) {
    if (!packageids || (Array.isArray(packageids) && packageids.length === 0)) {
      throw new Error("packageids is required for getPackageDetails");
    }
    const packageidsParam = Array.isArray(packageids)
      ? packageids.join(",")
      : packageids;
    const params = { packageids: packageidsParam };
    if (code) params.cc = code;
    if (language) params.l = language;
    return this._fetchStore("packagedetails", params);
  }

  /**
   * Get details of a sale page
   *
   * @param {string|number} id - ID of the sale
   * @param {string} [code] - Optional 2-letter country/language code
   * @param {string} [language] - Optional full language name
   * @returns {Promise<any>} The API response from Steam
   */
  async getSalePage(id, code, language) {
    if (!id) {
      throw new Error("id is required for getSalePage");
    }
    const params = { id };
    if (code) params.cc = code;
    if (language) params.l = language;
    return this._fetchStore("salepage", params);
  }
}
