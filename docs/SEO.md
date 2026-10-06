# SEO stratejisi

**Primary entity:** Kurumsal Etkinlik Ajansı · **Topikal entity'ler:** Corporate Events, Team Building, MICE, Incentive, Corporate Retreat, Event Staffing, Corporate Activities, Event Venues, Antalya, Belek.
Anahtar kelime doldurma yok; her sayfa tek bir niyetin cevabıdır ve semantik komşu terimleri doğal kullanır.

## 1. Arama niyeti haritası

| Sorgu / niyet | Tür | Ana sayfa | Destekleyen | Huni |
|---|---|---|---|---|
| kurumsal etkinlik organizasyon şirketleri / ajansı | **Yüksek ticari** | `/kurumsal-etkinlik-organizasyonu` | `/rehberler/etkinlik-ajansi-nasil-secilir` (ticari araştırma) | → #teklif |
| kurumsal şirket etkinlikleri | Ticari | `/kurumsal-etkinlik-organizasyonu`, `/` | `/rehberler/kurumsal-etkinlik-fikirleri` | → hizmet → teklif |
| kurumsal etkinlik mekanları | Ticari (hizmet) / bilgi (seçim) | `/kurumsal-etkinlik-mekanlari`, `/antalya/…mekanlari`, `/belek/…mekanlari` | `/rehberler/antalya-…-mekani-secimi`, `/belek-…-mekani-secimi` | rehber → mekân hizmeti |
| şirket motivasyon etkinlikleri | Ticari | `/sirket-motivasyon-etkinlikleri` | `/rehberler/sirket-motivasyon-etkinlik-fikirleri`, `/sosyal-etkinlik-fikirleri` | rehber → hizmet |
| kurumsal outdoor aktiviteler | Ticari | `/kurumsal-outdoor-aktiviteler`, `/antalya/…outdoor…` | `/rehberler/kurumsal-outdoor-aktivite-fikirleri` | rehber → hizmet |
| **kurumsal oyun örnekleri** | **Bilgi amaçlı** | `/rehberler/kurumsal-oyun-ornekleri` | `/rehberler/team-building-fikirleri` | **rehber → `/team-building` → teklif** |
| sosyal etkinlik fikirleri | Bilgi | `/rehberler/sosyal-etkinlik-fikirleri` | — | → `/sirket-motivasyon-etkinlikleri` |
| değişik etkinlik fikirleri | Bilgi | `/rehberler/kurumsal-etkinlik-fikirleri` (§ "Değişik ve sıradışı") | — | → `/kurumsal-etkinlik-organizasyonu` |
| antalya/belek kurumsal etkinlik, team building, incentive, retreat, gala… | Yerel ticari | 13 destinasyon sayfası | `/rehberler/antalya-mi-belek-mi`, `/antalyada-…`, `/belekte-…` | → #teklif |

**Kannibalizasyon kuralları**
- Genel hizmet sayfası = *tanım, kapsam, format, süreç*; şehir sayfası = *o şehre özgü mekân, rota, kural, mevsim*. Aynı paragraf iki yerde yok (denetim: sayfalar arası benzerlik ≈ %3).
- Mekân: *hizmet* sayfası ticari, *rehber* "nasıl seçilir" bilgi amaçlıdır.
- Rehber başlıkları ticari sayfanın title'ını tekrar etmez; "…nasıl", "…fikirleri", "…nedir" kalıpları bilgi niyetini taşır.

## 2. İç link hunisi

`Rehber` (bilgi) → gövdede doğal ticari link (≥2) → satır içi "Fikri etkinliğe dönüştürün" callout → `primaryService` → `#teklif`.
`Hizmet sayfası` → ilgili hizmetler (5) + ilgili rehberler (3) → SSS → teklif formu. `Destinasyon sayfası` ↔ genel hizmet sayfası karşılıklı bağlıdır. Tüm linkler `audit:content` ile doğrulanır (kırık link = hata).

## 3. Sayfa başına standart (uygulanmış)

Benzersiz title (≤ 65 karakter) ve description (≈ 110–175) · benzersiz H1 · niyete uygun giriş · hizmet kapsamı · kullanım senaryoları · süreç · lokasyon avantajı · SSS (3–5) · CTA · breadcrumb. Canonical `buildMetadata` ile mutlak URL; `noindex` yalnızca `/teklif-al` ve `/gizlilik-kvkk`.

## 4. Structured data

| Tür | Nerede | Not |
|---|---|---|
| Organization + ProfessionalService | Tüm sayfalar (`layout`) | `areaServed`: Antalya, Belek. **Adres/telefon/e-posta yalnızca env verilirse** |
| WebSite | Tüm sayfalar | |
| BreadcrumbList | Tüm iç sayfalar | Görünen breadcrumb ile aynı |
| Service | 25 hizmet/destinasyon sayfası | `provider` → Organization, `areaServed` |
| FAQPage | Yalnızca **sayfada görünen** SSS olan sayfalar | Aynı veriden render edilir, sapma imkânsız |
| Article | Rehberler | `author/publisher` = Organization |
| CollectionPage | `/rehberler` | |

> `LocalBusiness` alt tipi için fiziksel adres, çalışma saati ve telefon gerekir; gerçek bilgiler gelince `lib/schema.ts` içinde `ProfessionalService` yerine `LocalBusiness`/ilgili alt tip + `address`, `geo`, `openingHours` eklenmeli ve Google Business Profile ile eşleşmelidir.

## 5. Teknik

- `sitemap.xml` (registry'den üretilir, 45 URL) · `robots.txt` (`/api/` kapalı, sitemap bildirimi) · `lastmod` = `SITE.updated` (içerik değiştikçe güncelleyin).
- Statik HTML; kritik içerik JS'siz görünür. Hero LCP: fotoğraf geldiğinde `priority` + `fetchPriority="high"` ile preload; şu an LCP metindir.
- Görsel: AVIF/WebP, `sizes`, açık `width/height`, lazy (hero hariç), açıklayıcı alt.
- Güvenlik başlıkları, `poweredByHeader` kapalı, `hreflang` altyapısı hazır (tek dil).
- Yayın sonrası: Search Console'a site + sitemap ekleyin, `generate_lead` olayını GA4'te *key event* yapın, Business Profile açın.

## 6. İçerik genişletme planı (sonraki dalga)

Öncelik sırası `Master Prompt`'a göre: ① mevcut 12+13 ticari sayfaya **gerçek** vaka/fotoğraf ekleyin (E-E-A-T'nin en büyük kaldıraçı) → ② rehberleri 700–1000 kelimeye çıkarın (şu an 400–600) → ③ long-tail: *kurumsal yılbaşı etkinliği Antalya, Antalya yat turu kurumsal, Belek golf turnuvası kurumsal, Antalya yaz sezonu şirket pikniği, Kemer team building, Side kurumsal etkinlik* → ④ İngilizce `/en/`.
