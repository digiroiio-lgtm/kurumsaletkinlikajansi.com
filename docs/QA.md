# QA sonuçları

Ortam: yerel `next start` (üretim derlemesi), Chromium 141 (Playwright), Lighthouse 13 — mobil profil (Moto G Power, simüle yavaş 4G) ve masaüstü profil. Tarih: 2026-10-06.

## Lighthouse

| Sayfa | Profil | Performans | Erişilebilirlik | Best Practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| `/` | mobil | 96 | 100 | 100 | 100 | 2.7 s | 0 | 60 ms |
| `/kurumsal-etkinlik-organizasyonu` | mobil | 97 | 100 | 100 | 100 | 2.6 s | 0 | 50 ms |
| `/team-building` | mobil | 97 | 100 | 100 | 100 | 2.6 s | 0 | 50 ms |
| `/belek/kurumsal-etkinlik` | mobil | 96 | 100 | 100 | 100 | 2.7 s | 0 | 60 ms |
| `/antalya/kurumsal-etkinlik` | mobil | 99 | 100 | 100 | 100 | 2.0 s | 0 | 50 ms |
| `/rehberler/antalya-mi-belek-mi` | mobil | 99 | 100 | 100 | 100 | 2.0 s | 0 | 50 ms |
| `/` | masaüstü | 100 | 100 | 100 | 100 | 0.6 s | 0 | 0 ms |

Hedef (Perf ≥ 95, SEO 100, A11y ≥ 95, BP ≥ 95) **tüm ölçülen sayfalarda karşılandı.** Notlar:
- `/teklif-al` SEO skoru 66'dır — bilinçli `noindex` nedeniyle ("sayfa indekslemeyi engelliyor"); sitemap dışındadır.
- Bu ölçümde LCP öğesi metindir (fotoğraf yok). **Gerçek hero fotoğrafı eklendiğinde** `priority` preload ile yeniden ölçün; LCP'nin 2.5 s altında kalması için hero görseli ≤ 150 KB (AVIF/WebP) olmalıdır.
- Perf'i yukarı çeken kararlar: kritik CSS inline (`experimental.inlineCss`), TR alt kümeli self-host font + preload (109 KB → 67 KB, keşif zinciri yok), modern `browserslist`, animasyon yok, JS yalnızca 4 küçük client bileşen.
- Perf'in önünü kesen şey Next/React çalışma zamanı (~115 KB gz). Ana sayfada 95–96 bandındadır; hero'ya ağır görsel/video eklemek bu payı hızla tüketir.

## Tarama ve davranış testleri (hepsi geçti)

| Test | Kapsam | Sonuç |
|---|---|---|
| `qa-crawl` | 47 URL × 360/768/1440 px: HTTP 200, tek H1, yatay taşma, alt'sız img, canonical, JSON-LD, konsol hatası, iç link | **0 sorun** (47 benzersiz iç link doğrulandı) |
| `audit:content` | 44 içerik sayfası (+ ana sayfa): kırık link, görsel yuvası, title/description, benzersizlik, tekrar | **0 hata**, sayfalar arası benzerlik ≤ %3 |
| `test-form` | `?tur=` ön seçimi, boş doğrulama (5 hata), 2 adım, API, webhook yükü (UTM dahil), başarı ekranı | **Geçti** — 5 analytics olayı doğrulandı |
| `test-ui` | Mega menü (tık/hover/Escape), mobil çekmece, sticky CTA gizlenmesi, `cta_click`/`guide_to_service_click`/`faq_toggle`, 404, `/antalya`→308 | **13/13 geçti** |
| `tsc` · `eslint` | Tip ve lint | Temiz |

## Mobil QA (360 / 390 / 768 px)

- Yatay kaydırma yok (47 sayfa); sticky CTA `safe-area-inset-bottom` ile; dokunma hedefleri ≥ 44 px (butonlar 46–56 px, çipler 44 px).
- Tablolar ≤ 720 px'de etiketli kart yığınına dönüşür; geniş tablolar klavyeyle kaydırılabilir.
- Hamburger çekmece: `<details>` akordiyon, kaydırma kilidi, Escape ile kapanır.
- Form: `inputMode`/`autocomplete` doğru (tel, email, numeric); hata sonrası ilk geçersiz alana odak.

## Henüz yapılmadı / sınırlar (dürüst liste)

- **Gerçek fotoğraf yok** → görsel kalite referans seviyesinin altında; en büyük tek iyileştirme budur.
- Gerçek cihazda (iOS Safari/Android Chrome) ve gerçek ağda test yapılmadı; ölçümler sentetik.
- Canlı alan adında CrUX/PageSpeed Insights verisi henüz yok.
- Form gerçek e-posta sağlayıcısına karşı denenmedi (webhook ile doğrulandı); Resend yolu kodlandı, ortam değişkenleri verilince test edilmeli.
- Rehberler 400–600 kelime; SEO'da rekabetçi olmak için 700–1000'e çıkarılmalı ve uzman/gerçek örnek içermeli.
