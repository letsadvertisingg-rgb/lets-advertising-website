// Downloads all pay.com assets referenced in docs/research/discovery.json,
// the raw HTML, and the Webflow CSS into public/.
import fs from "node:fs";
import path from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const discovery = JSON.parse(fs.readFileSync(path.join(ROOT, "docs/research/discovery.json"), "utf8"));
const html = fs.readFileSync(path.join(ROOT, "docs/research/pay-home.html"), "utf8");

const urls = new Set();

// Images from live DOM (currentSrc picks the best srcset candidate)
for (const img of discovery.images) {
  if (img.src && img.src.startsWith("http")) urls.add(img.src.split("?")[0]);
}
// Highest-res srcset candidates + any src in raw HTML
for (const m of html.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\s,)]+\.(?:png|jpe?g|webp|avif|svg|gif)/g)) {
  urls.add(m[0]);
}
// Lottie JSONs
for (const m of html.matchAll(/data-path="([^"]+)"/g)) urls.add(m[1]);
// Fonts
for (const f of [
  "https://cdn.prod.website-files.com/69d4c843fed879b1761cec61/6a0c267cce76208e25d30ec7_GoogleSans-400.woff2",
  "https://cdn.prod.website-files.com/69d4c843fed879b1761cec61/6a0c267c27c1c44654575021_GoogleSans-500.woff2",
  "https://cdn.prod.website-files.com/69d4c843fed879b1761cec61/6a0c267c34c7391144f868b7_GoogleSans-600.woff2",
  "https://cdn.prod.website-files.com/69d4c843fed879b1761cec61/6a0c267c160846fe1f277819_GoogleSans-700.woff2",
]) urls.add(f);
// Favicons
for (const f of discovery.favicons) if (f.href) urls.add(f.href);
if (discovery.ogImage) urls.add(discovery.ogImage);

function destFor(url) {
  const u = new URL(url);
  let name = decodeURIComponent(path.basename(u.pathname));
  // strip webflow hash prefix for readability but keep uniqueness via the hash
  if (/\.woff2$/.test(name)) return path.join("public/fonts", name.replace(/^[0-9a-f]{24}_/, ""));
  if (/\.json$/.test(name)) return path.join("public/lottie", name.replace(/^[0-9a-f]{24}_/, "").replace(/\s+/g, "-").toLowerCase());
  if (/favicon|icon/i.test(name)) return path.join("public/seo", name.replace(/^[0-9a-f]{24}_/, "").replace(/\s+/g, "-").toLowerCase());
  return path.join("public/images", name.replace(/^[0-9a-f]{24}_/, "").replace(/\s+/g, "-").replace(/%20/g, "-").toLowerCase());
}

const manifest = {};
const list = [...urls];
console.log("downloading", list.length, "assets...");
let ok = 0, fail = 0;
for (let i = 0; i < list.length; i += 6) {
  await Promise.all(
    list.slice(i, i + 6).map(async (url) => {
      const dest = path.join(ROOT, destFor(url));
      try {
        if (!fs.existsSync(dest)) {
          const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
          if (!res.ok) throw new Error(res.status);
          fs.mkdirSync(path.dirname(dest), { recursive: true });
          fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
        }
        manifest[url] = destFor(url).replace(/^public/, "");
        ok++;
      } catch (e) {
        fail++;
        console.error("FAIL", url, e.message);
      }
    })
  );
}
fs.writeFileSync(path.join(ROOT, "docs/research/asset-manifest.json"), JSON.stringify(manifest, null, 2));
console.log("done. ok:", ok, "fail:", fail);
