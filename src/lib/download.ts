import { track } from "@vercel/analytics";

// Le Microsoft Store est le canal principal : il installe sans l'avertissement
// SmartScreen que declenche l'installeur .exe non signe. `mode=direct` ouvre
// directement l'appli Store sous Windows (meme comportement que le badge
// officiel en window-mode="direct").
export const MICROSOFT_STORE_ID = "XPFP6ZVQDT5MSH";
export const STORE_URL = `https://apps.microsoft.com/detail/${MICROSOFT_STORE_ID}?mode=direct`;
export const EXE_URL = "/downloads/Nyctale-Setup-1.0.2.exe";

export function trackStoreDownload(origine: string) {
  track("store_download", { origine });
}
export function trackDownload(origine: string) {
  track("download", { origine });
}
