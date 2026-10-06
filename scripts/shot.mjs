// Kullanım: node scripts/shot.mjs <url> <out.png> [genişlik] [yükseklik] [fullPage=1]
import { createRequire } from "node:module";
const require = createRequire("/opt/node22/lib/node_modules/");
const { chromium } = require("playwright");
const [url, out, w = "1440", h = "900", full = "1", scrollY = "0"] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome", args: ["--no-sandbox", "--no-proxy-server", "--disable-background-networking", "--disable-component-update"] });
const ctx = await b.newContext({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1, reducedMotion: "reduce" });
const p = await ctx.newPage();
const errs = [];
p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
p.on("pageerror", (e) => errs.push(String(e)));
await p.goto(url, { waitUntil: "load" });
await p.evaluate((y) => window.scrollTo(0, y), +scrollY);
await p.waitForTimeout(600);
await p.screenshot({ path: out, fullPage: full === "1" });
if (errs.length) console.log("CONSOLE ERRORS:", errs);
await b.close();
