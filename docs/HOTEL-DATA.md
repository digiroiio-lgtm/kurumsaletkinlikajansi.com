# Otel ve kapasite verisi — doğrulanmış veri kapısı

Site, Antalya + Belek MICE destinasyon rehberi olarak otel adlarını, salon alanlarını ve kapasiteleri indeksler. Yanlış kapasite hem güveni hem hukuki durumu zedelediği için **yalnızca kaynağı olan veri yayınlanır.**

## Kurallar
1. `src/content/tr/hotels.ts` içindeki her salon (`Hall`) `status: "verified"` ise **kaynak URL + `retrievedAt` tarihi** taşımak zorundadır. Aksi hâlde `npm run audit:content` hata verir.
2. `verified` salon en az bir sayısal alan taşır (`areaM2` veya `capacity`). "Bölünebilir" gibi sayısal olmayan bilgiler `facts` (olgu) olarak, kaynakla birlikte girilir.
3. Doğrulanamayan veya kaynaklar arasında **çelişen** rakamlar `pendingClaims` içinde tutulur; sayfada **gösterilmez**. (Örn. Regnum Carya "Carya salonu 2.000 kişi tiyatro": resmî sayfa özeti convention centre için "1.500 kişiye kadar" diyor → yayında değil.)
4. Kaynak türü: `official` (otelin kendi sayfası) veya `trade-listing` (AMI/MIT/Meetings & Conventions gibi MICE listeleri). Tabloda "Otel" / "MICE listesi" olarak etiketlenir; `trade-listing` bağlantıları `nofollow`'dur.
5. Tarih: 12 aydan eski kaynak uyarı üretir; teklif sürecinde her rakam otelden **yazılı** teyit edilir (sayfa altındaki not bunu söyler).

## Yayın kapıları (`src/content/tr/registry.ts`)
| Sayfa türü | Yayın koşulu |
|---|---|
| Otel profili (`kind: "hotel"`) | Doğrulanmış satır sayısı (salon + olgu) ≥ `HOTEL_INDEX_THRESHOLD` (2) |
| Kapasite/etkinlik türü rehberi (`kind: "capacity"`) | İlk `hotelBlock` filtresini sağlayan doğrulanmış otel sayısı ≥ `minVerifiedHotels` (3) |

Eşik altındaki sayfa **üretilmez** (thin/noindex sayfa bırakmaz). Şu an: `2000-kisilik-kongre-salonlari-antalya` yayında değil (tek salonda 2.000 kişi doğrulanan otel yok). Veri doğrulanınca otomatik yayına girer.

## Yeni otel / yeni veri eklemek
1. `hotels.ts`'e `Hotel` ekleyin: `facts`, `halls` (kaynaklı), `pendingClaims`, `editorial` (≥2 özgün paragraf; 3 senaryo).
2. `hotel-guides.ts` otel profilini otomatik üretir; slug `…-kurumsal-etkinlik`.
3. `npm run audit:content` — hata 0 olmalı; otel profilleri arası benzerlik ≤ %28 (uyarı > %20).
4. Kapasite sayfaları veriden otomatik güncellenir (`hotelBlock` filtreleri).

## Mevcut durum (6 Ekim 2026)
Resmî otel siteleri bu geliştirme ortamından erişime kapalıydı; rakamlar web arama özetlerinden (resmî + MICE listeleri) derlendi. **Her otelin satış ekibinden/MICE fact-sheet'inden teyit gelince** `pending` iddialar ve `trade-listing` kaynaklar `official` olarak güncellenmelidir. Kullanıcının sağladığı, doğrulanamayan rakamlar (ör. Titanic Pasific 2.000 m² / 1.650 tiyatro, Cornelia "12 alan" ve NEST ölçüleri, Calista "üçe bölünür", Regnum fuaye 750 m²) `pendingClaims`'tedir.

## Marka ve hukuki duruş
- Bağımsız etkinlik ajansıyız; otellerin resmî temsilcisi/iş ortağı değiliz. Her otel/kapasite sayfasında şeffaflık notu görünür.
- Otel logosu ve fotoğrafı kullanılmaz (telif/marka). Görseller özgün SVG sahnelerdir; gerçek foto için kendi çekimleriniz veya izinli görseller gerekir.
- Otel adı nominatif kullanımdır; "resmî", "yetkili" gibi ifadeler kullanılmaz.
- Yayın öncesi otellerle ticari ilişki varsa/yoksa beyan ve marka kullanım şartları hukukçuyla gözden geçirilmelidir.
