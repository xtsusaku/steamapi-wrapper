import { SteamAPI } from ".";

const s = new SteamAPI({ apiKey: "B0A94D99AD60E10A8CCB49157FF176CE" });

s.SteamStoreAPI.getAppDetails(570);
