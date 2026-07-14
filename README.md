# Steam Web API Client (@xtsusaku/steamapi-wrapper)

A lightweight, zero-dependency, Bun-first client library for the Steam Web API. This library uses modern JavaScript `Proxy` objects to dynamically route calls to all 200+ Steam API interfaces and thousands of methods documented on [steamapi.xpaw.me](https://steamapi.xpaw.me/), while providing rich TypeScript autocomplete and documentation matching xPaw's site.

## Features

- **Bun-first / Native ESM**: Works out of the box in Bun, Node.js (18+), and standard browsers via native ES Module exports and the built-in `fetch` API. No dependencies.
- **Dynamic Proxy Mapping**: Allows you to call any documented or undocumented Steam API interface (e.g. `steam.IPlayerService.GetOwnedGames` or even publisher-only/custom APIs) dynamically without library updates.
- **Auto-formatting of Services**: Automatically groups parameters inside the `input_json` query/body parameters for interfaces ending in `"Service"`, following the official Steam Web API guidelines.
- **Service-Aware Array Serialization**: Preserves arrays as JSON arrays inside `input_json` for Service interfaces, and flattens arrays into the zero-indexed format (e.g. `steamids[0]=...`) only for standard/legacy endpoints.
- **Automatic Partner API Routing**: Securely routes publisher-only endpoints (e.g. `IOnlinePlayService.GetCoPlayStatus`) to the Steam partner domain (`https://partner.steam-api.com`) when a `partnerKey` is provided.
- **Complete Typings**: Includes inline TypeScript definitions and JSDoc annotations directly mimicking xPaw's documentation (type, required status, descriptions) for all 200+ interfaces and thousands of endpoints.

## Installation

```bash
# Using Bun
bun add @xtsusaku/steamapi-wrapper

# Using npm
npm install @xtsusaku/steamapi-wrapper
```

## Usage

### Basic Initialization

```javascript
import { SteamAPI } from "@xtsusaku/steamapi-wrapper";

const steam = new SteamAPI({
  apiKey: "YOUR_STEAM_WEB_API_KEY", // Can be obtained from https://steamcommunity.com/dev/apikey
  partnerKey: "YOUR_PUBLISHER_KEY", // Optional: required for publisher-only endpoints
});
```

### Retrieving Owned Games (`IPlayerService`)

All Service-based endpoints automatically format parameters using `input_json` under the hood.

```javascript
const ownedGames = await steam.IPlayerService.GetOwnedGames({
  steamid: "76561198341746656",
  include_appinfo: true,
  include_played_free_games: true,
});

console.log(ownedGames.response.games);
```

### Retrieving Player Summaries (`ISteamUser`)

Arrays are automatically flattened to `steamids[0]`, `steamids[1]`, etc., since `ISteamUser` is a non-Service interface.

```javascript
const summaries = await steam.ISteamUser.GetPlayerSummaries({
  steamids: ["76561198341746656", "76561197960287930"],
});

console.log(summaries.response.players);
```

### Partner & Publisher-Only Endpoints

Publisher-only endpoints are automatically routed to `https://partner.steam-api.com` using the `partnerKey` query parameter. If a developer attempts to call a publisher-only method without providing a `partnerKey` in the constructor options, a validation error is thrown instantly.

Additionally, if **only** `partnerKey` is provided (without an `apiKey`), the library defaults to routing **all** API calls (even those that do not normally require a publisher key) to the secure partner host `https://partner.steam-api.com` using the publisher key.

```javascript
// Automatically routed to https://partner.steam-api.com/?key=YOUR_PUBLISHER_KEY
const coplayStatus = await steam.IOnlinePlayService.GetCoPlayStatus({
  steamid: "76561198341746656",
  steamid2: "76561197960287930",
  appid: 440,
  time_range_begin: 1700000000,
  time_range_end: 1710000000,
});
```

### Dynamic / Undocumented Endpoints Fallback

If there is a new or undocumented interface not listed in the TypeScript typings, you can still call it directly! The Proxy pattern will resolve it dynamically:

```javascript
// Call any interface dynamically; type safety falls back to `any` for unknown interfaces
const appDetails = await steam.IStoreService.GetAppList({
  include_games: true,
  max_results: 10,
});
```

### Overriding Versions & HTTP Methods

By default, the library detects if a method is a POST (e.g., if it starts with `Set`, `Add`, `Remove`, `Create`, etc.) and determines the correct API version (defaulting to `v1`). If you need to override these defaults, use prefixed underscore parameters:

```javascript
const response = await steam.ISteamNews.GetNewsForApp({
  appid: 440,
  count: 3,

  // Custom metadata controls (stripped out before sending parameters to Steam)
  _version: 2, // Forces /v2/ instead of /v1/
  _httpMethod: "POST", // Forces POST method instead of GET
});
```

## Configuration Options

The `SteamAPI` constructor accepts the following options:

| Option        | Type     | Default                          | Description                                                                     |
| :------------ | :------- | :------------------------------- | :------------------------------------------------------------------------------ |
| `apiKey`      | `string` | `""`                             | Your Steam Web API Key (for user-level queries)                                 |
| `partnerKey`  | `string` | `""`                             | Your Steamworks Publisher Web API Key (required for publisher-only endpoints)   |
| `accessToken` | `string` | `""`                             | Steam Access Token (for Store/Community APIs)                                   |
| `baseUrl`     | `string` | `"https://api.steampowered.com"` | Base API host (automatically changed to secure partner host for publisher APIs) |
| `format`      | `string` | `"json"`                         | Response format (`json`, `xml`, `vdf`)                                          |
| `headers`     | `object` | `{}`                             | Custom headers to pass with every fetch call                                    |

## License

This project is licensed under the GNU Affero General Public License v3.0 or later - see the [LICENSE](file:///d:/Projects/SteamAPI/LICENSE) file for details.

## Contributing

Please read [CONTRIBUTING.md](file:///d:/Projects/SteamAPI/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.
