// Uçtan uca form testi: node scripts/test-form.mjs <baseUrl>
import { createRequire } from "node:module";
const require = createRequire("/opt/node22/lib/node_modules/");
const { chromium } = require("playwright");
const base = process.argv[2] ?? "http://localhost:3100";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome", args: ["--no-sandbox", "--no-proxy-server"] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" })).newPage();
await p.addInitScript(() => { window.dataLayer = []; });
await p.goto(`${base}/teklif-al?tur=team-building&kisi=500&lokasyon=Belek&utm_source=test&utm_campaign=qa`, { waitUntil: "load" });
await p.waitForTimeout(800);
console.log("step1 tür önseçili:", await p.locator('input[name="eventType"]:checked').getAttribute("value"));
console.log("kisi/lokasyon önseçimi:", await p.getByLabel("Tahmini katılımcı sayısı").inputValue(), await p.getByLabel("Etkinlik lokasyonu").inputValue());
await p.getByLabel("Tahmini katılımcı sayısı").fill("60");
await p.getByLabel("Etkinlik lokasyonu").selectOption("Belek");
await p.getByRole("button", { name: /Devam/ }).click();
// Boş step2 gönder → hata
await p.getByRole("button", { name: /Teklif Talebimi Gönder/ }).click();
console.log("hata sayısı (boş form):", await p.locator(".field__error").count());
await p.getByLabel("Ad Soyad *").fill("Test Kullanıcı");
await p.getByLabel("Şirket *").fill("Test A.Ş.");
await p.getByLabel("Telefon *").fill("+90 555 000 00 00");
await p.getByLabel("E-posta *").fill("test@example.com");
await p.getByLabel("Tahmini bütçe").selectOption({ index: 3 });
await p.getByLabel("Ek notlar").fill("Otomatik test");
await p.locator('input[name="consent"]').check();
await p.waitForTimeout(2600); // elapsed > 2500ms
p.on("response", async (r) => r.url().includes("/api/lead") && console.log("API", r.status(), await r.text()));
await p.getByRole("button", { name: /Teklif Talebimi Gönder/ }).click();
await p.waitForSelector(".quote--done", { timeout: 8000 });
console.log("başarı ekranı:", (await p.locator(".quote__done-title").innerText()).trim());
const events = await p.evaluate(() => window.dataLayer.map((e) => e.event).filter(Boolean));
console.log("dataLayer olayları:", events.join(", "));
await b.close();
