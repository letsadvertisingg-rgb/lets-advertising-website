// Compact DOM tree view of a section fragment: classes, text, images.
import fs from "node:fs";
import * as cheerio from "cheerio";

const name = process.argv[2];
const maxDepth = parseInt(process.argv[3] || "99", 10);
const html = fs.readFileSync(`docs/research/sections/${name}.html`, "utf8");
const $ = cheerio.load(html, { xmlMode: false });

function walk(node, depth) {
  if (depth > maxDepth) return;
  const $n = $(node);
  if (node.type === "text") {
    const t = node.data.trim();
    if (t) console.log("  ".repeat(depth) + JSON.stringify(t.slice(0, 300)));
    return;
  }
  if (node.type !== "tag") return;
  if (["script", "style"].includes(node.name)) {
    console.log("  ".repeat(depth) + `<${node.name}> (${$n.html().length} chars omitted)`);
    return;
  }
  const cls = $n.attr("class") ? `.${$n.attr("class").split(/\s+/).join(".")}` : "";
  const id = $n.attr("id") ? `#${$n.attr("id")}` : "";
  const attrs = [];
  for (const a of ["src", "href", "alt", "data-path", "data-tab-index", "data-w-tab", "data-headline", "data-text", "data-image", "data-anim", "loading", "sizes", "placeholder", "value", "type"]) {
    const v = $n.attr(a);
    if (v !== undefined) attrs.push(`${a}=${JSON.stringify(v.slice(0, 140))}`);
  }
  if (node.name === "svg") {
    console.log("  ".repeat(depth) + `<svg${cls}> (inline, ${$.html(node).length} chars)`);
    return;
  }
  console.log("  ".repeat(depth) + `<${node.name}${id}${cls}${attrs.length ? " " + attrs.join(" ") : ""}>`);
  node.children?.forEach((c) => walk(c, depth + 1));
}

walk($("body").children().get(0) || $.root().children().get(0), 0);
