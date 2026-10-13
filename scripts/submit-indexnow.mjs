import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const sitemapPath = path.join(rootDir, "public", "sitemap.xml");

const host = "nyctale.fr";
const key = "7aa167b1b7f04bcda77458634d400abe";
const keyLocation = `https://${host}/${key}.txt`;

const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
const urlList = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (m) => m[1]
);

if (urlList.length === 0) {
  console.error("No URLs found in sitemap.xml");
  process.exit(1);
}

const payload = JSON.stringify({
  host,
  key,
  keyLocation,
  urlList,
});

function post(endpointHost, endpointPath) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: endpointHost,
        path: endpointPath,
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          console.log(`[${endpointHost}${endpointPath}] HTTP ${res.statusCode}: ${body || "OK"}`);
          resolve(res.statusCode);
        });
      }
    );
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

async function run() {
  console.log(`Submitting ${urlList.length} URLs to IndexNow (${host})...`);
  try {
    await post("api.indexnow.org", "/IndexNow");
    await post("www.bing.com", "/IndexNow");
    console.log("IndexNow submission completed successfully.");
  } catch (err) {
    console.error("IndexNow submission failed:", err);
  }
}

run();
