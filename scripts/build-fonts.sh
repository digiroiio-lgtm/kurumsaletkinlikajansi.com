#!/usr/bin/env bash
# Fontsource kaynak dosyalarından Türkçe için optimize edilmiş alt kümeleri üretir (public/fonts).
#   *-latin.woff2 → Basic Latin + Latin-1 + noktalama (fontsource "latin" alt kümesi, olduğu gibi)
#   *-tr.woff2    → yalnızca Türkçe'ye özgü ğ Ğ ş Ş İ (≈ birkaç KB)
# Gereksinim: pip install fonttools brotli   |   kaynak: npm i @fontsource-variable/{fraunces,manrope}
set -euo pipefail
SRC=node_modules/@fontsource-variable
OUT=public/fonts
mkdir -p "$OUT"
for fam in fraunces manrope; do
  cp "$SRC/$fam/files/$fam-latin-wght-normal.woff2" "$OUT/$fam-latin.woff2"
  pyftsubset "$SRC/$fam/files/$fam-latin-ext-wght-normal.woff2" \
    --unicodes="U+011E,U+011F,U+015E,U+015F,U+0130" --flavor=woff2 --layout-features='*' \
    --output-file="$OUT/$fam-tr.woff2"
done
ls -l "$OUT"
