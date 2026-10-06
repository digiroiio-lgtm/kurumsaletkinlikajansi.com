# Analytics ve dönüşüm ölçümü

Ana KPI: **nitelikli kurumsal etkinlik talebi** = `generate_lead`. Trafik, sıralama ve tıklama yardımcı göstergedir.

## 1. Kurulum

1. GTM kapsayıcısı açın → `NEXT_PUBLIC_GTM_ID` (öneri). GTM yoksa `NEXT_PUBLIC_GA_ID` ile gtag doğrudan yüklenir. İkisi de boşsa üçüncü taraf script **hiç** yüklenmez.
2. Scriptler `lazyOnload` ile yüklenir (Lighthouse etkisi minimum).
3. **KVKK/GDPR:** analitik çerezler için açık rıza gerekir. GTM içinde Consent Mode v2 + bir CMP (Cookiebot, Usercentrics vb.) kurun; `analytics_storage` varsayılan *denied*. Site şu an çerez bandı içermez (bilinçli: onay aracı seçimi işletme kararıdır) — yayın öncesi zorunlu madde (LAUNCH-CHECKLIST).
4. GA4 → Admin → Events: `generate_lead` ve `quote_form_submit` olaylarını **key event** işaretleyin.

## 2. Olay sözlüğü (`src/lib/analytics.ts`)

| Olay | Ne zaman | Parametreler |
|---|---|---|
| `cta_click` | Herhangi bir CTA/çip/kart tıklaması (`data-track="cta_click"`) | `cta_id`, `cta_text`, `destination` |
| `quick_pick_click` | Hero "Ne planlıyorsunuz?" çipleri | `cta_id`, `event_type` |
| `guide_to_service_click` | Rehberden hizmete geçiş (callout, TOC, ilgili hizmet) | `guide`, `cta_id`, `destination` |
| `quote_form_start` | Forma ilk odak | `form_id` |
| `quote_form_step_complete` | Adım 1 tamam | `form_id`, `step`, `event_type`, `participants_bucket` |
| `quote_form_error` | Doğrulama/sunucu/ağ hatası | `form_id`, `reason` |
| `quote_form_submit` | Gönderim denemesi | `form_id` |
| **`generate_lead`** | **API başarılı döndü** | `form_id`, `event_type`, `event_location`, `participants_bucket`, `budget_range` |
| `phone_click` · `whatsapp_click` · `email_click` | `tel:` / `wa.me` / `mailto:` | `link_url`, `location` (header/footer/sticky/content) |
| `faq_toggle` | SSS açılışı | `question` |

Tüm olaylar `page_path` içerir. `form_id` formun bulunduğu sayfayı ifade eder (`quote_team-building`, `quote_guide_…`, `quote_home`, `quote_page`) → hangi sayfanın lead ürettiği doğrudan görülür.

## 3. Lead kalite verisi (CRM'e giden alanlar)

`/api/lead` webhook/e-posta yükü: ad, şirket, telefon, e-posta, etkinlik türü, lokasyon, tarih (+esnek), katılımcı, bütçe aralığı, notlar ve **kaynak**: `page`, `referrer`, `utm_source/medium/campaign/term/content`, `gclid` (oturum boyunca saklanır). Böylece hangi anahtar kelime/kampanya/sayfanın hangi büyüklükte lead getirdiği CRM'de görülür.

## 4. Önerilen GA4 / GTM raporları

- Hunim: `page_view` → `cta_click` → `quote_form_start` → `quote_form_step_complete` → `generate_lead` (sayfa grubu: hizmet / destinasyon / rehber).
- Rehber → hizmet geçiş oranı: `guide_to_service_click` / rehber oturumu.
- Lead'in `participants_bucket` ve `budget_range` kırılımı (nitelik göstergesi).
- Search Console'dan sorgu → sayfa → `generate_lead` ilişkisi (GA4–GSC bağlantısı).

## 5. Test

`node scripts/test-form.mjs <url>` formu uçtan uca çalıştırır, `dataLayer` olaylarını yazdırır ve (webhook ayarlıysa) yükü doğrulatır. `node scripts/test-ui.mjs <url>` CTA/SSS/rehber izleme olaylarını doğrular.
