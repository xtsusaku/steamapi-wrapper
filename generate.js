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

  // 3. Generate main SteamAPI Class definition
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
  output += `  headers: Record<string, string>;\n\n`;

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
