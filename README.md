# kurumsaletkinlikajansi.com

Antalya & Belek'te kurumsal etkinlik, team building, incentive, toplantı, gala ve outdoor organizasyonları arayan şirketlerin yüksek niyetli Google trafiğini yakalayıp **nitelikli teklif talebine (lead)** dönüştüren site.

**Kapsam:** ajans sitesi + Antalya/Belek MICE destinasyon rehberi (otel → salon → kapasite → etkinlik türü → teklif).
**Stack:** Next.js 16 (App Router, statik üretim) · TypeScript · saf CSS (token tabanlı) · self-host font · JS bütçesi minimum.
**Ana KPI:** trafik değil, `generate_lead` olayı (nitelikli kurumsal etkinlik talebi).

## Hızlı başlangıç

```bash
npm install
cp .env.example .env.local        # iletişim, analytics ve lead teslimat ayarları
npm run dev                       # http://localhost:3000
npm run build && npm start        # üretim derlemesi
```

| Komut | Ne yapar |
|---|---|
| `npm run audit:content` | İç link, görsel yuvası, title/description, benzersizlik ve sayfalar arası tekrar denetimi (0 hata ile geçmeli) |
| `npm run typecheck` · `npm run lint` | TS ve ESLint |
| `scripts/serve.sh` | Yerel prod sunucusunu yeniden başlatır |
| `node scripts/qa-crawl.mjs <url>` | Tüm sitemap URL'lerinde 3 viewport'ta H1, taşma, alt, canonical, JSON-LD, kırık link taraması |
| `node scripts/test-form.mjs <url>` · `scripts/test-ui.mjs <url>` | Form ve etkileşim uçtan uca testleri |
| `scripts/lighthouse.sh <url> <ad> [mobile\|desktop]` | Lighthouse (rapor `lighthouse-reports/`) |
| `scripts/build-fonts.sh` · `scripts/build-og.mjs` · `scripts/gen-image-brief.ts` | Font alt kümeleri, OG görseli, görsel brief'i |

## Dokümantasyon

| Belge | İçerik |
|---|---|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Site mimarisi (URL haritası), bileşen mimarisi, içerik modeli, İngilizce hazırlığı |
| [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) | Referans analizi, tasarım ilkeleri, token'lar, bileşenler, erişilebilirlik |
| [docs/SEO.md](docs/SEO.md) | Entity/intent haritası, ticari–bilgi ayrımı, iç link hunisi, schema, teknik SEO |
| [docs/ANALYTICS.md](docs/ANALYTICS.md) | Olay sözlüğü, GTM/GA4 kurulumu, lead kalite alanları |
| [docs/HOTEL-DATA.md](docs/HOTEL-DATA.md) | **Otel/kapasite veri kapısı**: doğrulama kuralları, yayın eşikleri, yeni otel ekleme, marka duruşu |
| [docs/IMAGE-BRIEF.md](docs/IMAGE-BRIEF.md) | 127 görsel yuvasının çekim brief'i ve yerleştirme adımları |
| [docs/QA.md](docs/QA.md) | Mobil QA ve Lighthouse sonuçları |
| [docs/LAUNCH-CHECKLIST.md](docs/LAUNCH-CHECKLIST.md) | **Yayın öncesi yapılması gerekenler** (gerçek iletişim bilgisi, fotoğraf, KVKK, env, GSC) |

## İçerik nasıl eklenir/değiştirilir?

- Sayfa içeriği `src/content/tr/*.ts` içinde **tipli veridir** (`src/content/types.ts`); şablonlar yalnızca render eder. Yeni hizmet/destinasyon sayfası = ilgili dosyaya bir `PageContent` nesnesi; yeni rehber = `Guide` nesnesi. Rota, sitemap, breadcrumb, schema ve iç link kontrolü otomatik gelir.
- Metinlerde `[etiket](/yol)` iç link, `**kalın**` desteklenir. Yeni içerikten sonra `npm run audit:content` çalıştırın.
- Gerçek fotoğraf: `src/content/tr/images.ts` içindeki yuvaya `src/width/height` ekleyin (bkz. IMAGE-BRIEF).

## Bilinçli kararlar

- **Sahte kanıt yok:** müşteri logosu, yorum, istatistik veya geçmiş proje iddiası kullanılmaz. Güven bölümü çalışma ilkelerinden, referans yerine "Örnek etkinlik senaryoları" (açıkça *referans değildir* etiketli) kullanılır.
- **Uydurma iletişim bilgisi yok:** telefon/WhatsApp/e-posta/adres yalnızca ortam değişkeni verildiğinde görünür (`.env.example`).
- **Lead kaybı yok:** `/api/lead` üretimde hiçbir teslimat kanalı (Resend/webhook) tanımlı değilse başarılı dönmez, 503 verir.
