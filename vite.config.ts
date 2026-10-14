// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
    routeRules: {
      // Installeurs hebergés sur GitHub Releases (le stockage de deploiement Vercel Hobby est limite a 10 Go).
      "/downloads/Nyctale-Setup-1.0.3.exe": { redirect: { to: "https://github.com/WgeorgeAssistantIA/nyctale-downloads/releases/download/v1.0.3/Nyctale-Setup-1.0.3.exe", statusCode: 302 } },
      "/downloads/Nyctale-Portable-1.0.3.zip": { redirect: { to: "https://github.com/WgeorgeAssistantIA/nyctale-downloads/releases/download/v1.0.3/Nyctale-Portable-1.0.3.zip", statusCode: 302 } },
      "/downloads/Nyctale-Setup-1.0.0.exe": { redirect: { to: "https://github.com/WgeorgeAssistantIA/nyctale-downloads/releases/download/v1.0.0/Nyctale-Setup-1.0.0.exe", statusCode: 302 } },
      "/downloads/Nyctale-x86_64.AppImage": { redirect: { to: "https://github.com/WgeorgeAssistantIA/nyctale-downloads/releases/download/v1.0.2/Nyctale-x86_64.AppImage", statusCode: 302 } },
      "/downloads/Nyctale-1.0.2-linux-x86_64.tar.gz": { redirect: { to: "https://github.com/WgeorgeAssistantIA/nyctale-downloads/releases/download/v1.0.2/Nyctale-1.0.2-linux-x86_64.tar.gz", statusCode: 302 } },
      "/downloads/Nyctale-Setup-1.0.2.exe": { redirect: { to: "https://github.com/WgeorgeAssistantIA/nyctale-downloads/releases/download/v1.0.3/Nyctale-Setup-1.0.3.exe", statusCode: 302 } },
      "/**": {
        headers: {
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "SAMEORIGIN",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
        },
      },
    },
  },
});
