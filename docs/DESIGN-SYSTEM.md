# Tasarım sistemi

## 1. Referans analizi (eklenen ekran görüntüleri: TeamBonding ana sayfası)

> Eklenen materyal 5 ekran görüntüsüdür; ayrı bir CSS dosyası paketin içinde yoktu. Analiz görsellerden yapıldı. Hiçbir kod, görsel, metin veya marka öğesi alınmadı.

| Alan | Referansta gözlenen | Bizim yorumumuz |
|---|---|---|
| Layout | Tam genişlik mavi hero + mozaik fotoğraf; ardından logo şeridi, 3'lü kart sırası, fotoğraf üstü panel, 4 adım, referans videoları | Editoryal, asimetrik düzen; hero'da kemer (arch) kırpmalı tek güçlü görsel + yuvarlak ikinci kadraj |
| Section sırası | Hero → "Chosen by" logoları → öne çıkan deneyimler → fayda listesi → video referanslar → 4 adım → CTA | Hero → çalışma ilkeleri şeridi → 8 etkinlik türü mozaiği → destinasyon → 5 adım → aktivite dizini → mekân → modüller → neden Antalya/Belek → staffing → örnek senaryolar → SSS → teklif |
| Güven kanıtı | Büyük marka logoları, video yorumlar | **Kullanılmadı** (gerçek müşteri yok). Yerine: çalışma ilkeleri + açıkça "referans değildir" etiketli örnek senaryolar |
| Hero | Güçlü H1, tek cümle kanıt, tek CTA, gerçek insan fotoğrafları | H1 = hedef anahtar kelime; tek birincil CTA + ikincil bağlantı; fotoğraf gelene kadar özgün SVG sahne |
| Tipografi | Kalın geometrik sans, çok büyük başlıklar | Serif display (Fraunces) + hümanist sans (Manrope): "premium kurumsal" okunuşu, jenerik SaaS görünümünden uzak |
| Kartlar | Kalın renkli çerçeveli, yuvarlak köşe + renkli daire, 3 sütun | **Tekrar eden 3'lü kart yok.** Mozaik, numaralı editoryal liste, zaman çizelgesi, tablo, çark; her bölüm farklı yapı |
| CTA | Sürekli sabit "Contact Us" + kırmızı/turuncu hap buton | Tek CTA metni ("Etkinliğiniz İçin Teklif Alın"), kil rengi, her önemli bölümde; mobilde sticky |
| Navigasyon | Sticky mavi bar, açılır menüler, arama | Sticky açık bar, 12 hizmetli mega menü, Antalya/Belek menüleri, tek CTA |
| Renk | Doygun mavi + sarı/mor vurgular | Deniz mürekkebi + Akdeniz yeşilmavisi + kum + kil (terracotta) — sakin, premium, destinasyona özgü |
| Eksik/zayıf yön | Yoğun mavi zemin uzun sayfada yorucu; form akışı görünmüyor | Zemin ritmi (kağıt/kum/mürekkep) ve her sayfada gömülü iki adımlı form |

## 2. İlke ve yasaklar

1. Her bölümün **görsel amacı ve conversion rolü** vardır; dekor için bölüm yok.
2. Premium = boşluk, tipografi hiyerarşisi, kısıtlı palet; gradient/animasyon değil. Animasyon yok (yalnızca 0.18–0.6 sn hover geçişleri; `prefers-reduced-motion` saygılı).
3. Yasak: sahte yorum/logo/istatistik, anahtar kelime doldurma, jenerik ikon ızgarası, birbirinin aynı kart bölümleri, metin duvarı.

## 3. Token'lar (`src/styles/tokens.css`)

| Token | Değer | Kullanım | Kontrast |
|---|---|---|---|
| `--ink` | #0B1D25 | Metin başlığı, koyu zemin | beyaz üstü 17.3:1 |
| `--text` / `--muted` | #1A2B31 / #4A5B61 | Gövde / ikincil metin | kağıt üstü 13.7 / 6.6:1 |
| `--paper` / `--sand` | #FAF7F1 / #F1E9DC | Zeminler | — |
| `--clay` | #B5481F | CTA | beyaz metin 5.37:1 |
| `--clay-dark` | #A63F18 | Hover, eyebrow | kum üstü 5.2:1 |
| `--sea` / `--sea-2` | #1C5B63 / #3C8A8C | Link, vurgu, sahneler | kağıt üstü 7.2:1 |
| `--gold` | #D9B06A | Yalnızca koyu zeminde vurgu | mürekkep üstü 10.8:1 |

Boşluk: bölüm `clamp(56px, 8vw, 112px)`; container 1240 px, gutter `clamp(16px, 4vw, 40px)`. Köşe: 4 px (buton/kart) · 14 px (büyük kart) · 999 px (kemer, çip).

## 4. Tipografi

- Display: **Fraunces Variable** (500). H1 `clamp(2.3rem…4.5rem)`, H2 `clamp(1.75rem…3rem)`.
- Gövde: **Manrope Variable** 17 px / 1.65. Eyebrow: 0.86 rem, bold, harf aralığı .04em (Türkçe `text-transform:uppercase` İngilizce terimlerde "BUİLDİNG" hatası ürettiği için eyebrow'da kullanılmaz).
- Self-host, `latin` + yalnızca `ğ Ğ ş Ş İ` içeren `tr` alt kümesi (toplam ≈ 67 KB).

## 5. Bileşen ve bölüm kataloğu

| Bileşen | Rolü |
|---|---|
| Hero (ana sayfa) | H1 + lead + birincil CTA + "Ne planlıyorsunuz?" hızlı seçim çipleri (8 hizmet sayfası) |
| Çalışma ilkeleri şeridi | "Tek operasyon noktası" + 4 ilke (sahte logo yerine) |
| Mozaik | 8 etkinlik türü, farklı hücre boyutları, görsel kart |
| Destinasyon panelleri | Antalya / Belek, kaydırmalı asimetrik yerleşim |
| `steps` | Zaman çizelgesi (süreç) |
| `index` | Numaralı editoryal liste (sticky başlıklı) |
| `table` | Karar/format tabloları; mobilde kart yığını |
| `scenarios` | "Örnek senaryo · referans değildir" kartları |
| `split` | Metin + kemerli/dikdörtgen görsel |
| `checklist`, `links`, `pull` | Kontrol listesi, çapraz bağlantı satırları, vurgu cümlesi |
| Çark (`wheel`) | Tek brief → 6 operasyon modülü (wallet share) |
| Teklif formu | İki adımlı; çip seçimli etkinlik türü; ilerleme çubuğu |
| Sticky mobil CTA | Teklif Al + (varsa) WhatsApp/Telefon; form görünürken gizlenir |

## 6. Erişilebilirlik

Skip link; tek H1; landmark'lar (`header/nav/main/footer`); `aria-expanded` menüler, Escape ile kapanma; odak halkası 3 px; form etiketleri + `aria-invalid`/`aria-describedby`; hata odağı ilk geçersiz alana; tablolar `scope` ve klavyeyle kaydırılabilir; `prefers-reduced-motion`; dekoratif SVG `aria-hidden`. Lighthouse a11y: **100** (tüm test edilen sayfalar).
