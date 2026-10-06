# Mimari

## 1. Site mimarisi (URL haritası)

```
/                                   Ana sayfa (conversion engine)
├─ /kurumsal-etkinlik-organizasyonu   ← ana ticari hizmet (head term)
├─ /team-building
├─ /sirket-motivasyon-etkinlikleri
├─ /kurumsal-outdoor-aktiviteler
├─ /incentive-organizasyonu
├─ /corporate-retreat
├─ /gala-organizasyonu                (ödül törenleri dahil)
├─ /bayi-toplantisi-organizasyonu
├─ /lansman-organizasyonu
├─ /kongre-konferans-organizasyonu
├─ /etkinlik-personeli
├─ /kurumsal-etkinlik-mekanlari       (mekân bulma hizmeti)
├─ /antalya/…  kurumsal-etkinlik · team-building · incentive · corporate-retreat
│              · kurumsal-outdoor-aktiviteler · kurumsal-etkinlik-mekanlari · event-staff
├─ /belek/…    kurumsal-etkinlik · team-building · incentive · corporate-retreat
│              · kurumsal-etkinlik-mekanlari · gala-organizasyonu
├─ /rehberler/                         18 bilgi amaçlı rehber (topical authority)
├─ /teklif-al                          Ayrı teklif sayfası (noindex)
└─ /gizlilik-kvkk                      Aydınlatma metni (noindex — hukuki onaya kadar)
```

- `/antalya` ve `/belek` kökleri ayrı (ince) hub sayfası **değildir**; birincil sayfaya 308 yönlenir. Breadcrumb'daki "Antalya"/"Belek" de o sayfaya gider.
- Her sayfa ayrı arama niyetine hizmet eder (bkz. SEO.md). Şehir sayfaları şehir adı değiştirilmiş kopya değildir: Antalya = şehir/destinasyon çeşitliliği (Kaleiçi, Köprüçay, Kemer…), Belek = resort/golf/incentive/F&B-ses kuralları.

## 2. Bileşen mimarisi

```
src/
  app/                    Rotalar (App Router). Yalnızca ince kabuk: metadata + şablon çağrısı
    [slug]/               12 hizmet sayfası      (generateStaticParams, dynamicParams=false)
    antalya/[slug]/       7 sayfa     belek/[slug]/  6 sayfa
    rehberler/[slug]/     18 rehber   rehberler/    indeks
    api/lead/route.ts     Teklif formu API'si
    sitemap.ts · robots.ts · not-found.tsx · layout.tsx
  components/
    PageTemplate.tsx      Hizmet/destinasyon şablonu: hero → bölümler → ilgili hizmet/rehber → SSS → teklif
    GuideTemplate.tsx     Makale şablonu: TOC, satır içi ticari CTA, ilgili hizmetler → SSS → teklif
    Sections.tsx          9 bölüm tipi (split, index, steps, scenarios, table, pull, checklist, links…)
    home/HomePage.tsx     Ana sayfaya özgü kompozisyon (mozaik, çark, staffing…)
    QuoteForm.tsx         İki aşamalı form (client)    QuoteSection.tsx  Form bölümü (#teklif)
    Header/Footer/StickyCta/Faq/Breadcrumbs/Cta/Media/JsonLd/RichText/Analytics/TrackingListener
    art/Scene.tsx         12 özgün SVG sahne (fotoğraf gelene kadar yer tutucu)
  content/
    types.ts              Tüm içerik şemaları (PageContent, Guide, Section…)
    tr/*.ts               Türkçe içerik (hizmetler, Antalya, Belek, rehberler, ana sayfa, nav, görsel manifesti)
    tr/registry.ts        Tek kayıt defteri → rota, sitemap, ilişkiler buradan üretilir
  lib/                    site.ts (config) · seo.ts · schema.ts · analytics.ts · lead.ts · i18n.ts · slug.ts
  styles/                 tokens · fonts · base · layout · sections · forms · home
```

**Prensipler**
- *İçerik = veri, şablon = sunum.* Sayfa iskeleti aynı kalır ama her sayfa kendi **bölüm dizisini** taşır; bu yüzden sayfalar birbirinin kelime değiştirilmiş kopyası olmaz (audit: sayfalar arası tekrar ≈ %3).
- *Sunucu bileşeni varsayılan.* İstemci JS yalnızca: Header (menü), StickyCta, QuoteForm, TrackingListener. SSS `<details>`, tablolar, bölümler JS'siz.
- *Tek izleme sözleşmesi.* Sunucu bileşenleri `data-track*` niteliği ekler; tek delegated dinleyici olayları gönderir (bkz. ANALYTICS.md).

## 3. Çok dilli mimari (İngilizce hazırlığı)

`src/lib/i18n.ts` yol önekini ve hreflang üretimini soyutlar; `seo.ts` zaten `alternates.languages` üretecek biçimde bağlı (tek dil varken boş).

İngilizce (`/en/`) eklemek için:
1. `locales`'e `"en"` ekleyin → `prefixFor("en") = "/en"`.
2. `src/content/en/` altında aynı tipli (`types.ts`) içerik dosyalarını üretin; slug'ları İngilizce yapın (ör. `/en/corporate-events-antalya`).
3. `app/en/...` rotaları aynı `PageTemplate`/`GuideTemplate` bileşenlerini İngilizce registry ile çağırır; şablonlardaki sabit Türkçe etiketler (ör. "Etkinliğiniz İçin Teklif Alın", "Ne yapıyoruz") `content/<locale>/ui.ts` sözlüğüne taşınmalıdır (bu işin ana kalemi).
4. Sitemap'e dil alternatifleri ve her sayfada karşılıklı `hreflang` (tr-TR ↔ en) eklenir; konumlandırma: *Corporate Events in Antalya & Belek*.

## 4. Teknik kararlar

| Konu | Karar | Gerekçe |
|---|---|---|
| Render | Statik üretim (51 sayfa) + tek dinamik API | CWV, SEO, düşük hata yüzeyi |
| CSS | Saf CSS + token; `experimental.inlineCss` | Render-blocking stylesheet yok, kütüphane yok |
| Font | Self-host, TR alt kümeli (67 KB), preload | LCP; Türkçe glifler (ğ ş İ) garanti |
| Görsel | `Media` + manifest; AVIF/WebP, `sizes`, `priority` | Foto geldiğinde tek satırlık entegrasyon |
| Lead | `/api/lead` → Resend e-posta ve/veya webhook | CRM'e bağımsız; kanal yoksa 503 (sessiz kayıp yok) |
| Bot koruması | Honeypot + minimum süre + IP başına hız sınırı | Captcha sürtünmesi olmadan |
