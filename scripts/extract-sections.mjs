// Splits pay-home.html into per-section HTML fragments and extracts the CSS
// rules relevant to each fragment from the Webflow stylesheets.
import fs from "node:fs";
import * as cheerio from "cheerio";
import csslib from "css";

const html = fs.readFileSync("docs/research/pay-home.html", "utf8");
const $ = cheerio.load(html);

const sections = [
  { name: "navbar", sel: "div.navigation" },
  { name: "hero", sel: "section.hero" },
  { name: "marquee", sel: "section.marquee" },
  { name: "get-back", sel: "section.get-back" },
  { name: "scale", sel: "section.scale" },
  { name: "sticky-features", sel: ".section-track" },
  { name: "case-studies", sel: "section.case-studies" },
  { name: "top-companies", sel: "section.top-comapnies" },
  { name: "roi", sel: "section.roi" },
  { name: "platform", sel: "section.platform" },
  { name: "faq", sel: "section.faq" },
  { name: "insights", sel: "section.insigts" },
  { name: "cta", sel: "section.cta" },
  { name: "footer", sel: "footer.footer-section" },
];

// Parse both webflow css files
const cssText =
  fs.readFileSync("docs/research/webflow-shared.css", "utf8") +
  "\n" +
  fs.readFileSync("docs/research/webflow-page.css", "utf8");
const ast = csslib.parse(cssText, { silent: true });
const rules = ast.stylesheet.rules;

function rulesForClasses(classSet) {
  const out = [];
  const collect = (ruleList, mediaQuery) => {
    for (const r of ruleList) {
      if (r.type === "rule") {
        const matched = r.selectors.filter((sel) => {
          const classMatches = sel.match(/\.[A-Za-z0-9_-]+/g) || [];
          return classMatches.length > 0 && classMatches.every((c) => classSet.has(c.slice(1)));
        });
        if (matched.length) {
          const decl = r.declarations
            .filter((d) => d.type === "declaration")
            .map((d) => `  ${d.property}: ${d.value};`)
            .join("\n");
          out.push({ mediaQuery, css: `${matched.join(", ")} {\n${decl}\n}` });
        }
      } else if (r.type === "media") {
        collect(r.rules, `@media ${r.media}`);
      }
    }
  };
  collect(rules, null);
  // group by media
  const grouped = new Map();
  for (const { mediaQuery, css } of out) {
    const key = mediaQuery || "";
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(css);
  }
  let result = "";
  for (const [mq, list] of grouped) {
    if (mq) result += `\n${mq} {\n${list.join("\n\n")}\n}\n`;
    else result += list.join("\n\n") + "\n";
  }
  return result;
}

fs.mkdirSync("docs/research/sections", { recursive: true });

for (const { name, sel } of sections) {
  const el = $(sel).first();
  if (!el.length) {
    console.error("NOT FOUND:", name, sel);
    continue;
  }
  const fragment = $.html(el);
  fs.writeFileSync(`docs/research/sections/${name}.html`, fragment);

  // collect all classes used in fragment
  const classSet = new Set();
  const f$ = cheerio.load(fragment);
  f$("*").each((_, node) => {
    const cls = f$(node).attr("class");
    if (cls) cls.split(/\s+/).filter(Boolean).forEach((c) => classSet.add(c));
  });
  const cssOut = rulesForClasses(classSet);
  fs.writeFileSync(`docs/research/sections/${name}.css`, cssOut);
  console.log(
    name.padEnd(16),
    "html:", String(fragment.length).padStart(7),
    "classes:", String(classSet.size).padStart(4),
    "css:", String(cssOut.length).padStart(7)
  );
}
