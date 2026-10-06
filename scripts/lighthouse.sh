#!/usr/bin/env bash
# Kullanım: scripts/lighthouse.sh <url> <ad> [mobile|desktop]
URL=$1; NAME=$2; MODE=${3:-mobile}
FLAGS=(--output=json --output-path="lighthouse-reports/$NAME-$MODE.json" --quiet
  --chrome-flags="--headless=new --no-sandbox --no-proxy-server --disable-gpu")
[ "$MODE" = "desktop" ] && FLAGS+=(--preset=desktop)
CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome npx --yes lighthouse "$URL" "${FLAGS[@]}" >/dev/null 2>&1
node -e '
const r=require("./lighthouse-reports/'"$NAME-$MODE"'.json");
const c=r.categories, a=r.audits;
console.log("'"$NAME ($MODE)"'".padEnd(34),
 "perf",Math.round(c.performance.score*100),"a11y",Math.round(c.accessibility.score*100),"bp",Math.round(c["best-practices"].score*100),"seo",Math.round(c.seo.score*100),
 "| LCP",a["largest-contentful-paint"].displayValue,"CLS",a["cumulative-layout-shift"].displayValue,"TBT",a["total-blocking-time"].displayValue);
'
