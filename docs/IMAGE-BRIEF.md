# Görsel çekim ve yerleştirme brief'i

> Bu dosya `scripts/gen-image-brief.ts` ile üretilir (`src/content/tr/images.ts` kaynağından).

## İlkeler
- **Gerçek etkinlik atmosferi.** Stok kurumsal poz (el sıkışan takım elbiseliler, cam toplantı odası) kullanmayın. Hedef: gerçek çekim ya da gerçek etkinliklerden kareler; yaşanmışlık, doğal ışık, hareket.
- **Premium corporate destination.** Antalya/Belek turist broşürü gibi değil: resort, plaj, golf, antik mekân; ama *iş yapan insanlarla* (toplantı, gala, ekip görevi).
- **Kişi gizliliği.** Tanınabilir kişiler için yazılı görsel kullanım izni alın (KVKK). Çocuk görseli için ayrıca veli izni.
- **Sahte referans yok.** Gerçek müşteri etkinliği değilse "referans" olarak etiketlenmez; örnek senaryo kartları bunu açıkça belirtir.
- **Teknik.** JPG/PNG/WebP yükleyin; Next.js AVIF/WebP'ye dönüştürür. `width`/`height` gerçek piksel değerleri olmalı (CLS için). Hero görseli `priority` ile preload edilir (otomatik).
- **Alt metin.** Görseli betimleyin (kim, ne yapıyor, nerede). Anahtar kelime doldurmayın.

## Nasıl takılır?
1. Dosyayı `public/images/<ad>.jpg` olarak koyun.
2. `src/content/tr/images.ts` içinde ilgili yuvaya `src: "/images/<ad>.jpg", width: 1200, height: 1500` ekleyin ve `alt` metnini gerçek görsele göre güncelleyin.
3. `npm run build` — yuva anında SVG sahne yerine fotoğrafı gösterir.

## Ana sayfa (13)
Ana sayfa hero'su en kritik görseldir (LCP). Dikey 4:5, en az 1200×1500 px; kart görselleri 4:3, en az 1200×900.

| Yuva | Çekim brief'i (alt metin taslağı) | Yer tutucu sahne |
|---|---|---|
| `home-hero` | Antalya sahilinde gün batımında kurumsal bir grup; ufukta Toros dağları | coast |
| `home-hero-inset` | Özel teknede güneşli bir deniz günü; ekip güvertede | sail |
| `home-venues` | Kemerli taş avluda hazırlanmış akşam yemeği masaları | arches |
| `card-team` | Plajda takım yarışması sırasında gülen çalışanlar | team |
| `card-incentive` | Ödül grubu tekne güvertesinde kadeh kaldırıyor | sail |
| `card-retreat` | Orman kenarında açık havada çalışma masası ve sakin bir ortam | wellness |
| `card-gala` | Işıklarla süslenmiş gala salonu, yuvarlak masalar | gala |
| `card-motivation` | Çalışan günü etkinliğinde plajda ortak yemek | coast |
| `card-outdoor` | Nehir kenarında rafting ekipmanı ve kask takmış ekip | outdoor |
| `card-dealer` | Konferans salonunda bayi toplantısı, ekranda sunum | meeting |
| `card-launch` | Spot ışıkları altında lansman sahnesi | stage |
| `dest-antalya` | Kaleiçi'nde taş sokak ve eski liman manzarası | arches |
| `dest-belek` | Belek'te golf sahası, çam ağaçları ve uzakta deniz | golf |

## Hizmet ve destinasyon hero'ları (25)
Dikey kemer kırpma (4:5), en az 1200×1500 px. Konu merkezde, üst %25 boş bırakılabilir (kemer kırpar).

| Yuva | Çekim brief'i (alt metin taslağı) | Yer tutucu sahne |
|---|---|---|
| `hero-corporate` | Kurumsal etkinlik için hazırlanmış sahne ve salon düzeni | stage |
| `hero-team` | Takım görevi sırasında birlikte çalışan çalışanlar | team |
| `hero-motivation` | Plajda çalışan günü; ortak masada gülen ekip | coast |
| `hero-outdoor` | Dağ ve nehir manzarasında outdoor grup | outdoor |
| `hero-incentive` | Incentive grubu özel tekne turunda | sail |
| `hero-retreat` | Sakin bir ortamda çalışma masası ve doğa görünümü | wellness |
| `hero-gala` | Gala gecesi, ışıklı salon ve servise hazır masalar | gala |
| `hero-dealer` | Bayi toplantısı; salon düzeni ve sahne | meeting |
| `hero-launch` | Lansman sahnesi ve ışık tasarımı | stage |
| `hero-congress` | Kongre salonu, tiyatro düzeni ve ekran | meeting |
| `hero-staff` | Etkinlik personeli ekibi, brifing sırasında | staff |
| `hero-venues` | Kemerli bir etkinlik mekânı, akşam ışığında | arches |
| `hero-antalya` | Antalya sahil şeridi ve Toros dağları | coast |
| `hero-antalya-team` | Kaleiçi'nde şehir görevi yapan takımlar | team |
| `hero-antalya-incentive` | Antalya'da tekne turunda incentive grubu | sail |
| `hero-antalya-retreat` | Kemer çam ormanında sakin bir retreat ortamı | wellness |
| `hero-antalya-outdoor` | Köprüçay'da rafting yapan ekip | outdoor |
| `hero-antalya-venues` | Kaleiçi avlusunda kurumsal akşam yemeği | arches |
| `hero-antalya-staff` | Antalya'da çok dilli etkinlik personeli | staff |
| `hero-belek` | Belek'te resort, golf sahası ve plaj | golf |
| `hero-belek-team` | Belek'te golf kliniğinde takımlar | golf |
| `hero-belek-incentive` | Belek'te resort plajında incentive grubu | sail |
| `hero-belek-retreat` | Belek'te resort bahçesinde sakin bir çalışma ortamı | wellness |
| `hero-belek-venues` | Belek'te resort konferans salonu | meeting |
| `hero-belek-gala` | Belek'te plajda kurulu gala masaları, gün batımı | gala |

## Bölüm görselleri (28)
4:3 veya 4:5, en az 1200 px genişlik.

| Yuva | Çekim brief'i (alt metin taslağı) | Yer tutucu sahne |
|---|---|---|
| `media-corporate-brief` | Brief toplantısında etkinlik ekibi ve müşteri | meeting |
| `media-team-goal` | Takım görevinde birlikte karar veren ekip | team |
| `media-team-inclusive` | Farklı rollerde birlikte çalışan çok çeşitli bir ekip | team |
| `media-motivation-ritual` | Takdir anında alkışlayan çalışanlar | coast |
| `media-outdoor-safety` | Güvenlik brifingi veren rehber ve ekip | outdoor |
| `media-incentive-reward` | Ödül gecesinde kadeh kaldıran grup | gala |
| `media-incentive-international` | Havalimanında isimli karşılama masası | staff |
| `media-retreat-working` | Doğal ışıklı çalışma salonunda atölye | wellness |
| `media-gala-layers` | Gala salonunda sahne, ışık ve masa düzeni | gala |
| `media-gala-awards` | Ödül töreninde sahne ve ışık | stage |
| `media-dealer-flow` | Bayi toplantısında genel oturum | meeting |
| `media-launch-reveal` | Lansman açılış anı; sahne ışıkları | stage |
| `media-congress-ops` | Kongre kayıt masası ve salon girişi | meeting |
| `media-staff-role` | Etkinlik personeli, karşılama masasında | staff |
| `media-venue-search` | Mekân saha ziyareti; kemerli avlu | arches |
| `media-antalya-oldtown` | Kaleiçi'nde taş sokak ve avlu | arches |
| `media-antalya-citytask` | Kaleiçi'nde şehir görevi yapan takım | arches |
| `media-antalya-incentive-days` | Antalya sahilinde gün batımı | coast |
| `media-antalya-retreat-mood` | Kaleiçi butik otel avlusunda sakin sabah | wellness |
| `media-antalya-route` | Toros yolunda jeep konvoyu | outdoor |
| `media-antalya-venues` | Konyaaltı'nda beach club gün batımı | arches |
| `media-antalya-staff` | Antalya'da etkinlik personeli | staff |
| `media-belek-resort` | Belek'te resort ve golf sahası | golf |
| `media-belek-golf` | Golf kliniğinde takımlar | golf |
| `media-belek-incentive` | Belek plajında incentive grubu | sail |
| `media-belek-retreat` | Resort bahçesinde sabah yürüyüşü | wellness |
| `media-belek-venues` | Belek resort balo salonu | meeting |
| `media-belek-gala` | Belek plajında gala kurulumu | gala |

## Örnek senaryo kartları (26)
3:2, en az 1200×800. Not: bunlar *örnek senaryo* görselleridir; gerçek müşteri etkinliği olarak etiketlenmez.

| Yuva | Çekim brief'i (alt metin taslağı) | Yer tutucu sahne |
|---|---|---|
| `scenario-generic` | Örnek etkinlik senaryosu | coast |
| `scenario-belek-incentive` | Belek'te golf turnuvası sonrası plaj akşamı | golf |
| `scenario-antalya-team` | Kaleiçi'nde takım şehir görevi | arches |
| `scenario-dealer` | Bayi toplantısı genel oturumu | meeting |
| `scenario-dealer-belek` | Belek resort'unda bölge toplantısı | meeting |
| `scenario-antalya-incentive` | Antalya sahilinde incentive günü | coast |
| `scenario-antalya-boat` | Kemer'de tekne ve koy günü | sail |
| `scenario-antalya-meeting` | Şehir otelinde yönetim toplantısı | meeting |
| `scenario-team-city` | Şehir görevi sırasında takımlar | arches |
| `scenario-team-beach` | Plaj olimpiyatında takımlar | coast |
| `scenario-team-cooking` | Mutfak atölyesinde takımlar | table |
| `scenario-motivation-beach` | Yıl sonu çalışan günü plajda | coast |
| `scenario-motivation-sports` | Vardiyalı spor turnuvasında maç anı | outdoor |
| `scenario-motivation-cocktail` | Kokteyl atölyesinde ekip | table |
| `scenario-outdoor-rafting` | Köprüçay'da rafting | outdoor |
| `scenario-outdoor-sail` | Kıyıda yelken regatası | sail |
| `scenario-outdoor-jeep` | Orman yolunda jeep konvoyu | outdoor |
| `scenario-retreat-strategy` | Strateji retreat'i çalışma oturumu | wellness |
| `scenario-retreat-boutique` | Butik otel avlusunda atölye | arches |
| `scenario-gala-beach` | Plajda ödül gecesi | gala |
| `scenario-gala-oldtown` | Tarihî avluda gala kokteyli | arches |
| `scenario-launch-antalya` | Antalya'da müşteri lansmanı | stage |
| `scenario-launch-belek` | Belek'te bayi lansmanı | stage |
| `scenario-belek-spouse` | Eşler için spa ve kültür günü | wellness |
| `scenario-belek-golf` | Golf scramble turnuvası | golf |
| `scenario-belek-garden` | Resort bahçesinde kokteyl gala'sı | table |

## Rehber kapakları (18)
3:2, en az 1200×800.

| Yuva | Çekim brief'i (alt metin taslağı) | Yer tutucu sahne |
|---|---|---|
| `guide-ideas` | Etkinlik fikirleri için ekip çalışması | team |
| `guide-motivation` | Çalışan motivasyonu etkinliği | coast |
| `guide-team` | Takım oyunu sırasında ekip | team |
| `guide-games` | Kurumsal oyun sırasında takımlar | team |
| `guide-outdoor` | Doğada kurumsal aktivite | outdoor |
| `guide-social` | Ofis dışında sosyal etkinlik | table |
| `guide-antalya-ideas` | Antalya'da şirket etkinliği | coast |
| `guide-belek-team` | Belek'te team building | golf |
| `guide-planning` | Etkinlik planlama toplantısı | meeting |
| `guide-select-team` | Team building seçimi | team |
| `guide-budget` | Etkinlik bütçesi planlaması | meeting |
| `guide-agency` | Ajans ile brief toplantısı | meeting |
| `guide-venues-antalya` | Antalya'da etkinlik mekânı | arches |
| `guide-venues-belek` | Belek'te resort salonu | meeting |
| `guide-antalya-belek` | Antalya ve Belek karşılaştırması | coast |
| `guide-incentive` | Incentive ödül seyahati | sail |
| `guide-retreat` | Corporate retreat | wellness |
| `guide-dealer` | Bayi toplantısı | meeting |

