# Yayın öncesi kontrol listesi

Aşağıdakiler **kod dışı** veya işletmeye özgü bilgi gerektirdiği için bilerek boş bırakılmıştır.

## Zorunlu
- [ ] **İletişim bilgileri:** `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_PHONE`, `NEXT_PUBLIC_WHATSAPP_NUMBER` (boşsa ilgili buton/alan görünmez; mobil sticky CTA yalnızca "Teklif Alın" gösterir).
- [ ] **Lead teslimatı:** Resend (`RESEND_API_KEY`, `LEAD_FROM_EMAIL` doğrulanmış domain, `LEAD_TO_EMAIL`) ve/veya CRM `LEAD_WEBHOOK_URL`. Üretimde ikisi de yoksa form 503 verir (lead sessizce kaybolmaz). Yayın sonrası gerçek bir test talebi gönderin.
- [ ] **KVKK aydınlatma metni:** `/gizlilik-kvkk` taslaktır, **veri sorumlusu unvanı/adresi/VERBİS bilgisi yoktur**; hukuk onayından sonra `noindex`'i kaldırın ve footer/form linkini doğrulayın. Çerez politikası + CMP (bkz. ANALYTICS §1.3).
- [ ] **Gerçek fotoğraflar:** `docs/IMAGE-BRIEF.md` (öncelik: `home-hero`, hero'lar, `card-*`, `dest-*`). Fotoğraf gelene kadar SVG sahneler görünür; kişi izinleri alınmalı.
- [ ] **Domain / hosting:** Vercel (veya Node 20+). `NEXT_PUBLIC_SITE_URL=https://kurumsaletkinlikajansi.com`; www→apex yönlendirmesi; HTTPS.
- [ ] **Search Console:** Domain mülkü doğrula → `sitemap.xml` gönder → URL denetimi (ana sayfa + 5 çekirdek sayfa).
- [ ] **GTM/GA4:** ID'ler, `generate_lead` key event, Consent Mode.

- [ ] **Otel kapasite teyidi:** her otelin MICE fact-sheet'i/satış ekibi yazılı teyidi → `hotels.ts`'te `pendingClaims` ve `trade-listing` kaynakları `official`'a çevrilir (docs/HOTEL-DATA.md). Teyitsiz rakam yayınlanmaz; 2.000 kişilik sayfa bu yüzden yayında değil.
- [ ] **Otellerle ilişki beyanı:** resmî ortaklık yoksa şeffaflık notu aynen kalır; varsa metin ve marka kullanım şartları hukukçuyla güncellenir.

## Güçlü öneri
- [ ] Google Business Profile (hizmet bölgesi: Antalya, Belek) ve tutarlı NAP; ardından `lib/schema.ts` → `LocalBusiness` + adres/geo/saat.
- [ ] Gerçek vaka çalışmaları geldikçe "Örnek senaryo" kartlarının yanına **etiketli, gerçek** vaka bölümü (müşteri onayıyla). Sahte referans/logo eklemeyin.
- [ ] `SITE.updated` (`src/lib/site.ts`) ve sayfa metinleri güncellendikçe sitemap `lastmod`.
- [ ] Başlık testi: ana H1 alternatifi *"Kurumsal Etkinlikleri Deneyime Dönüştürüyoruz"* (A/B için `home.ts` → `hero.h1`; SEO için mevcut H1 önerilir).
- [ ] Rate limit: çok instance'lı üretimde bellek-içi sınır yerine Upstash/Vercel KV.
- [ ] Sunucu tarafı e-posta için SPF/DKIM/DMARC.

## Yayın günü hızlı test
```bash
npm run audit:content && npm run typecheck && npm run lint && npm run build
scripts/serve.sh && node scripts/qa-crawl.mjs http://localhost:3100
node scripts/test-form.mjs http://localhost:3100   # webhook ile birlikte
```
