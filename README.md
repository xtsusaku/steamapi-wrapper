# Steam Web API Client (steamapi-xpaw)

A lightweight, zero-dependency, Bun-first client library for the Steam Web API. This library uses modern JavaScript `Proxy` objects to dynamically route calls to all 200+ Steam API interfaces and thousands of methods documented on [steamapi.xpaw.me](https://steamapi.xpaw.me/), while providing rich TypeScript autocomplete and documentation matching xPaw's site.

## Features

- **Bun-first / Native ESM**: Works out of the box in Bun, Node.js (18+), and standard browsers via native ES Module exports and the built-in `fetch` API. No dependencies.
- **Dynamic Proxy Mapping**: Allows you to call any documented or undocumented Steam API interface (e.g. `steam.IPlayerService.GetOwnedGames` or even publisher-only/custom APIs) dynamically without library updates.
- **Auto-formatting of Services**: Automatically groups parameters inside the `input_json` query/body parameters for interfaces ending in `"Service"`, following the official Steam Web API guidelines.
- **Array Parameter Handling**: Automatically translates JS arrays (e.g. `appids: [440, 570]`) into the zero-indexed format expected by non-Service Steam endpoints (`appids[0]=440&appids[1]=570`).
- **Rich Typings**: Includes inline TypeScript definitions and JSDoc annotations directly mimicking xPaw's documentation (type, required status, descriptions) for popular endpoints.

## Installation

```bash
# Using Bun
bun add ./path/to/steamapi-xpaw

# Using npm
npm install ./path/to/steamapi-xpaw
```

## Usage

### Basic Initialization
```javascript
import { SteamAPI } from "steamapi-xpaw";

const steam = new SteamAPI({
  apiKey: "YOUR_STEAM_WEB_API_KEY" // Can be obtained from https://steamcommunity.com/dev/apikey
});
```

### Retrieving Owned Games (`IPlayerService`)
All Service-based endpoints automatically format parameters using `input_json` under the hood.

```javascript
const ownedGames = await steam.IPlayerService.GetOwnedGames({
  steamid: "76561197960287930",
  include_appinfo: true,
  include_played_free_games: true
});

console.log(ownedGames.response.games);
```

### Retrieving Player Summaries (`ISteamUser`)
```javascript
const summaries = await steam.ISteamUser.GetPlayerSummaries({
  steamids: ["76561197960287930", "76561198000000000"] // Automatically mapped to steamids[0] and steamids[1]
});

console.log(summaries.response.players);
```

### Dynamic / Undocumented Endpoints Fallback
If there is a new or undocumented interface not listed in the TypeScript typings, you can still call it directly! The Proxy pattern will resolve it dynamically:

```javascript
// Call any interface dynamically; type safety falls back to `any` for unknown interfaces
const appDetails = await steam.IStoreService.GetAppList({
  include_games: true,
  max_results: 10
});
```

### Overriding Versions & HTTP Methods
By default, the library detects if a method is a POST (e.g., if it starts with `Set`, `Add`, `Remove`, `Create`, etc.) and determines the correct API version (defaulting to `v1`). If you need to override these defaults:

```javascript
const response = await steam.ISteamNews.GetNewsForApp({
  appid: 440,
  count: 3,
  
  // Custom metadata controls (stripped out before sending parameters to Steam)
  version: 2,        // Forces /v2/ instead of /v1/
  httpMethod: "POST" // Forces POST method instead of GET
});
```

## Configuration Options

The `SteamAPI` constructor accepts the following options:

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `apiKey` | `string` | `""` | Your Steam Web API Key |
| `accessToken` | `string` | `""` | Steam Access Token (for Store/Community APIs) |
| `baseUrl` | `string` | `"https://api.steampowered.com"` | Base API host (e.g. change to `https://partner.steam-api.com` for publisher key) |
| `format` | `string` | `"json"` | Response format (`json`, `xml`, `vdf`) |
| `headers` | `object` | `{}` | Custom headers to pass with every fetch call |
