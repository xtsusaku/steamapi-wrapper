import fs from "fs";
import path from "path";

const SCHEMA_URL = "https://raw.githubusercontent.com/xPaw/SteamWebAPIDocumentation/master/api.json";
const OUTPUT_FILE = path.join(process.cwd(), "index.d.ts");
const METADATA_FILE = path.join(process.cwd(), "metadata.js");

function mapType(rawType) {
  if (!rawType) return "any";
  const isArray = rawType.endsWith("[]");
  const baseType = isArray ? rawType.slice(0, -2) : rawType;

  let tsType = "any";
  if (baseType === "bool") {
    tsType = "boolean";
  } else if (baseType === "string") {
    tsType = "string";
  } else if (["uint32", "int32", "fixed32", "float", "double"].includes(baseType)) {
    tsType = "number";
  } else if (["uint64", "int64", "fixed64", "bytes"].includes(baseType)) {
    tsType = "string | number";
  } else {
    tsType = "any"; // Fallback for complex structs or enum typings
  }

  return isArray ? `${tsType}[]` : tsType;
}

async function main() {
  console.log(`Fetching latest Steam API schema from ${SCHEMA_URL}...`);
  const res = await fetch(SCHEMA_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch schema: ${res.statusText}`);
  }
  const apiData = await res.json();
  console.log("Schema fetched successfully. Generating files...");

  let output = "";

  // 1. Generate Header and Options
  output += `// Auto-generated types for steamapi-xpaw client library
// Source: https://steamapi.xpaw.me/

export interface SteamAPIOptions {
  /** Your Steam Web API Key */
  apiKey?: string;
  /** Alternate name for apiKey */
  key?: string;
  /** Your Steamworks Publisher Web API Key */
  partnerKey?: string;
  /** Steam Access Token for Store/Community APIs */
  accessToken?: string;
  /** Alternate name for accessToken */
  access_token?: string;
  /** Base URL for Steam Web API (default: https://api.steampowered.com) */
  baseUrl?: string;
  /** Response format (default: json) */
  format?: string;
  /** Additional custom HTTP headers to send with the request */
  headers?: Record<string, string>;
}

export interface SteamAppDetailsResponse {
  [appid: string]: {
    success: boolean;
    data?: SteamAppDetails;
  };
}

export interface SteamAppPricingResponse {
  [appid: string]: {
    success: boolean;
    data?: {
      price_overview?: PriceOverview;
    };
  };
}

export interface SteamAppDetails {
  type: string;
  name: string;
  steam_appid: number;
  required_age: number | string;
  is_free: boolean;
  dlc?: number[];
  detailed_description: string;
  about_the_game: string;
  short_description: string;
  supported_languages: string;
  reviews?: string;
  header_image: string;
  capsule_image: string;
  capsule_imagev5: string;
  website: string | null;
  pc_requirements?: Requirements | any[];
  mac_requirements?: Requirements | any[];
  linux_requirements?: Requirements | any[];
  developers?: string[];
  publishers?: string[];
  demos?: Demo[];
  price_overview?: PriceOverview;
  packages?: number[];
  package_groups?: PackageGroup[];
  platforms: Platforms;
  categories?: CategoryOrGenre[];
  genres?: CategoryOrGenre[];
  screenshots?: Screenshot[];
  movies?: Movie[];
  recommendations?: Recommendations;
  achievements?: Achievements;
  release_date: ReleaseDate;
  support_info: SupportInfo;
  background: string;
  background_raw: string;
  content_descriptors: ContentDescriptors;
  ratings?: Ratings;
}

export interface Requirements {
  minimum?: string;
  recommended?: string;
}

export interface Demo {
  appid: number;
  description: string;
}

export interface PriceOverview {
  currency: string;
  initial: number;
  final: number;
  discount_percent: number;
  initial_formatted: string;
  final_formatted: string;
}

export interface PackageGroup {
  name: string;
  title: string;
  description: string;
  selection_text: string;
  save_text: string;
  display_type: number;
  is_recurring_subscription: string | boolean;
  subs: PackageSub[];
}

export interface PackageSub {
  packageid: number;
  percent_savings_text: string;
  percent_savings: number;
  option_text: string;
  option_description: string;
  can_get_free_license: string | boolean;
  is_free_license: boolean;
  price_in_cents_with_discount: number;
}

export interface Platforms {
  windows: boolean;
  mac: boolean;
  linux: boolean;
}

export interface CategoryOrGenre {
  id: number | string;
  description: string;
}

export interface Screenshot {
  id: number;
  path_thumbnail: string;
  path_full: string;
}

export interface Movie {
  id: number;
  name: string;
  thumbnail: string;
  dash_av1?: string;
  dash_h264?: string;
  hls_h264?: string;
  highlight: boolean;
}

export interface Recommendations {
  total: number;
}

export interface Achievement {
  name: string;
  localized_name: string;
  icon: string;
  path: string;
}

export interface Achievements {
  total: number;
  highlighted?: Achievement[];
}

export interface ReleaseDate {
  coming_soon: boolean;
  date: string;
}

export interface SupportInfo {
  url: string;
  email: string;
}

export interface ContentDescriptors {
  ids: number[];
  notes: string | null;
}

export interface Ratings {
  [system: string]: {
    rating: string;
    descriptors: string;
    use_age_gate?: string | boolean;
    required_age?: string | number;
    rating_generated?: string | number;
    banned?: string | number;
  };
}
\n`;

  const interfaces = Object.keys(apiData).sort();
  const versions = {};
  const publisherOnly = [];

  // 2. Generate each Interface definition
  for (const interfaceName of interfaces) {
    output += `export interface ${interfaceName} {\n`;
    const methods = apiData[interfaceName];

    for (const methodName of Object.keys(methods).sort()) {
      const methodData = methods[methodName];
      const desc = methodData.description ? methodData.description.replace(/\r?\n/g, " ") : "";
      const pathKey = `${interfaceName}/${methodName}`;

      // Extract metadata
      if (methodData.version && methodData.version > 1) {
        versions[pathKey] = methodData.version;
      }
      if (methodData._type === "publisher_only") {
        publisherOnly.push(pathKey);
      }

      output += `  /**\n`;
      if (desc) {
        output += `   * ${desc}\n`;
      }
      output += `   * \n`;
      output += `   * Version: ${methodData.version || 1}\n`;
      output += `   * HTTP Method: ${methodData.httpmethod || "GET"}\n`;
      if (methodData._type === "publisher_only") {
        output += `   * Note: Publisher-only API (requires partnerKey)\n`;
      }
      output += `   */\n`;
      output += `  ${methodName}(params?: {\n`;

      const seenFields = new Set();
      if (methodData.parameters) {
        for (const param of methodData.parameters) {
          let name = param.name;
          const type = param.type;
          const description = param.description ? param.description.replace(/\r?\n/g, " ") : "";
          const required = param.optional === false;

          let isArrayField = false;
          if (name.endsWith("[0]")) {
            name = name.slice(0, -3);
            isArrayField = true;
          }

          if (seenFields.has(name)) continue;
          seenFields.add(name);

          // Api key/token are injected by client, make them optional
          const isApiKeyOrToken = name === "key" || name === "access_token" || name === "accessToken" || name === "format";
          const isOptional = !required || isApiKeyOrToken;

          const tsType = mapType(type || (isArrayField ? "uint32[]" : "any"));
          const reqStr = required ? "Yes" : "No";

          output += `    /** ${description} (Type: ${type || "any"}, Required: ${reqStr}) */\n`;
          output += `    "${name}"${isOptional ? "?" : ""}: ${tsType};\n`;
        }
      }

      // Add default metadata parameters for overrides
      output += `    /** Override API version */\n`;
      output += `    _version?: number;\n`;
      output += `    /** Override HTTP method */\n`;
      output += `    _httpMethod?: "GET" | "POST";\n`;

      output += `  }): Promise<any>;\n\n`;
    }
    output += `}\n\n`;
  }

  // 3. Generate SteamStoreAPI and SteamAPI Class definitions
  output += `/**\n`;
  output += ` * Steam Storefront / Big Picture Store API\n`;
  output += ` */\n`;
  output += `export class SteamStoreAPI {\n`;
  output += `  constructor(client: SteamAPI);\n\n`;
  output += `  /**\n`;
  output += `   * Get details for one or more Steam applications using the Steam Store API.\n`;
  output += `   * \n`;
  output += `   * @param appids Array of Steam Application IDs or a single ID\n`;
  output += `   * @param code Optional 2-letter country/language code\n`;
  output += `   * @param language Optional full language name (e.g. 'japanese', 'thai')\n`;
  output += `   * @param filters Optional filter or array of filters to apply\n`;
  output += `   */\n`;
  output += `  getAppDetails(appids: (number | string)[] | number | string, code?: string, language?: string, filters?: string[] | string): Promise<SteamAppDetailsResponse | SteamAppPricingResponse>;\n\n`;
  output += `  /**\n`;
  output += `   * Get pricing details for one or more Steam applications.\n`;
  output += `   * \n`;
  output += `   * @param appids Array of Steam Application IDs or a single ID\n`;
  output += `   * @param code Optional 2-letter country/language code\n`;
  output += `   */\n`;
  output += `  getAppPricingDetails(appids: (number | string)[] | number | string, code?: string): Promise<SteamAppPricingResponse>;\n\n`;
  output += `  /**\n`;
  output += `   * Get apps featured on the storefront.\n`;
  output += `   * \n`;
  output += `   * @param code Optional 2-letter country/language code\n`;
  output += `   * @param language Optional full language name\n`;
  output += `   */\n`;
  output += `  getFeatured(code?: string, language?: string): Promise<any>;\n\n`;
  output += `  /**\n`;
  output += `   * Get featured categories on the storefront.\n`;
  output += `   * \n`;
  output += `   * @param code Optional 2-letter country/language code\n`;
  output += `   * @param language Optional full language name\n`;
  output += `   * @param options Additional optional parameters\n`;
  output += `   */\n`;
  output += `  getFeaturedCategories(code?: string, language?: string, options?: { trailer?: boolean | number | string; extra?: string }): Promise<any>;\n\n`;
  output += `  /**\n`;
  output += `   * Get information about apps and users in the context of the logged-in user session.\n`;
  output += `   * \n`;
  output += `   * @param appids Array of Steam Application IDs or a single ID\n`;
  output += `   * @param code Optional 2-letter country/language code\n`;
  output += `   * @param language Optional full language name\n   */\n`;
  output += `  getAppUserDetails(appids: (number | string)[] | number | string, code?: string, language?: string): Promise<any>;\n\n`;
  output += `  /**\n`;
  output += `   * Get Big Picture mode store messages.\n`;
  output += `   * \n`;
  output += `   * @param gids ID or array of IDs of the messages\n`;
  output += `   * @param code Optional 2-letter country/language code\n`;
  output += `   * @param language Optional full language name\n   */\n`;
  output += `  getMessages(gids: string[] | string, code?: string, language?: string): Promise<any>;\n\n`;
  output += `  /**\n`;
  output += `   * Get details for storefront packages.\n`;
  output += `   * \n`;
  output += `   * @param packageids Array of package IDs or a single ID\n`;
  output += `   * @param code Optional 2-letter country/language code\n`;
  output += `   * @param language Optional full language name\n   */\n`;
  output += `  getPackageDetails(packageids: (number | string)[] | number | string, code?: string, language?: string): Promise<any>;\n\n`;
  output += `  /**\n`;
  output += `   * Get details of a sale page.\n`;
  output += `   * \n`;
  output += `   * @param id ID of the sale\n`;
  output += `   * @param code Optional 2-letter country/language code\n`;
  output += `   * @param language Optional full language name\n   */\n`;
  output += `  getSalePage(id: string | number, code?: string, language?: string): Promise<any>;\n`;
  output += `}\n\n`;
  output += `/**\n`;
  output += ` * SteamAPI client dynamically mapped using JavaScript Proxies.\n`;
  output += ` * Supports calling all 200+ interfaces and thousands of endpoints documented on steamapi.xpaw.me\n`;
  output += ` */\n`;
  output += `export class SteamAPI {\n`;
  output += `  constructor(options?: SteamAPIOptions);\n\n`;
  output += `  apiKey: string;\n`;
  output += `  partnerKey: string;\n`;
  output += `  accessToken: string;\n`;
  output += `  baseUrl: string;\n`;
  output += `  format: string;\n`;
  output += `  headers: Record<string, string>;\n`;
  output += `  /** Access the Steam Storefront / Big Picture Store API */\n`;
  output += `  SteamStoreAPI: SteamStoreAPI;\n\n`;

  // Define properties for all interfaces
  for (const interfaceName of interfaces) {
    output += `  /** Interface endpoints for ${interfaceName} */\n`;
    output += `  ${interfaceName}: ${interfaceName};\n`;
  }

  // Dynamic index signature fallback
  output += `\n  /** Fallback index signature for dynamic access to undocumented interfaces */\n`;
  output += `  [interfaceName: string]: any;\n`;
  output += `}\n`;

  // Write index.d.ts
  fs.writeFileSync(OUTPUT_FILE, output, "utf-8");
  console.log(`TypeScript declaration file generated successfully at ${OUTPUT_FILE}`);

  // Write metadata.js
  let metadataContent = `// Auto-generated metadata for steamapi-xpaw client library\n// Source: https://steamapi.xpaw.me/\n\n`;
  metadataContent += `export const METHOD_VERSIONS = ${JSON.stringify(versions, null, 2)};\n\n`;
  metadataContent += `export const PUBLISHER_ONLY = new Set(${JSON.stringify(publisherOnly, null, 2)});\n`;

  fs.writeFileSync(METADATA_FILE, metadataContent, "utf-8");
  console.log(`Metadata module generated successfully at ${METADATA_FILE}`);
}

main().catch(err => {
  console.error("Error generating index.d.ts:", err);
  process.exit(1);
});
