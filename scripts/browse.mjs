// Headless Chrome harness for site inspection (fallback for browser MCP).
// Usage: node scripts/browse.mjs <command> [args...]
import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const TARGET = process.env.TARGET_URL || "https://pay.com/";
const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

async function withPage(viewport, fn) {
  const browser = await chromium.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: true,
    args: ["--no-sandbox", "--disable-blink-features=AutomationControlled"],
  });
  const ctx = await browser.newContext({
    viewport,
    userAgent: UA,
    deviceScaleFactor: 1,
    locale: "en-US",
  });
  const page = await ctx.newPage();
  try {
    await page.goto(TARGET, {
      waitUntil: process.env.WAIT_UNTIL || "networkidle",
      timeout: 60000,
    });
    await page.waitForTimeout(2500);
    return await fn(page);
  } finally {
    await browser.close();
  }
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 600;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 120);
    });
  });
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
}

const cmd = process.argv[2];

if (cmd === "screenshot") {
  const width = parseInt(process.argv[3] || "1440", 10);
  const out = process.argv[4];
  await withPage({ width, height: 900 }, async (page) => {
    await autoScroll(page);
    await page.screenshot({ path: out, fullPage: true });
    console.log("saved", out, "pageHeight:", await page.evaluate(() => document.body.scrollHeight));
  });
} else if (cmd === "eval") {
  // node scripts/browse.mjs eval <scriptfile> [width] [outfile]
  const scriptFile = process.argv[3];
  const width = parseInt(process.argv[4] || "1440", 10);
  const outFile = process.argv[5];
  const code = fs.readFileSync(scriptFile, "utf8");
  await withPage({ width, height: 900 }, async (page) => {
    await autoScroll(page);
    const result = await page.evaluate(code);
    const text = typeof result === "string" ? result : JSON.stringify(result, null, 2);
    if (outFile) {
      fs.writeFileSync(outFile, text);
      console.log("saved", outFile, text.length, "chars");
    } else {
      console.log(text);
    }
  });
} else {
  console.error("unknown command:", cmd);
  process.exit(1);
}
