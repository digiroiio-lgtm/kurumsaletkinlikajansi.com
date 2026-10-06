import type { Guide } from "../types";

const PUB = "2026-10-06";

export const guidesPlanning: Guide[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "sirket-etkinligi-nasil-planlanir",
    category: "Planlama",
    intent: "informational",
    metaTitle: "Şirket Etkinliği Nasıl Planlanır? Adım Adım Takvim ve Liste",
    metaDescription:
      "Şirket etkinliği planlama rehberi: hedef belirleme, bütçe, mekân, katılımcı iletişimi ve etkinlik günü için haftalara bölünmüş takvim ve kontrol listesi.",
    h1: "Şirket Etkinliği Nasıl Planlanır? Adım Adım Takvim",
    lead:
      "Şirket etkinliği planlamak, çok sayıda küçük kararın doğru sırayla verilmesidir. Bu rehber hedeften etkinlik sonrası değerlendirmeye kadar adımları haftalara bölerek anlatır.",
    heroMedia: "guide-planning",
    published: PUB,
    defaultEventType: "diger",
    sections: [
      {
        h2: "1. Hedefi ve ölçüyü yazın",
        paras: [
          "Planlamanın ilk adımı etkinliğin neden yapıldığını tek cümleyle yazmaktır: ‘Yeni ekibin birbirini tanımasını sağlamak’, ‘satış hedefini aşan ekibi ödüllendirmek’, ‘yeni ürünü bayilere tanıtmak’. Bu cümle, sonraki bütün kararların ölçüsüdür.",
          "Hedefin yanına bir ölçü ekleyin: katılım oranı, memnuniyet puanı veya etkinlik sonrası iş sonucu. Ölçü olmayan etkinlik değerlendirilemez ve geliştirilemez.",
        ],
      },
      {
        h2: "2. Temel çerçeveyi belirleyin",
        paras: ["Bütçe ve mekân araştırmasına başlamadan önce şu beş soruya cevap verin:"],
        bullets: [
          "**Kim katılacak?** Sayı, profil, yurt dışından gelen var mı?",
          "**Ne zaman?** Tarih esnek mi, mevsim ve tatil dönemleri hesaba katıldı mı?",
          "**Ne kadar sürecek?** Yarım gün, bir gün, çok günlük?",
          "**Nerede?** Şehir içi mi, resort mu, belirsiz mi? Karar için [Antalya mı, Belek mi?](/rehberler/antalya-mi-belek-mi) rehberine bakın.",
          "**Bütçe çerçevesi:** Toplam veya kişi başı yaklaşık değer. Bkz. [bütçe nasıl hazırlanır](/rehberler/kurumsal-etkinlik-butcesi-nasil-hazirlanir).",
        ],
      },
      {
        h2: "3. Geri sayım takvimi",
        paras: ["Aşağıdaki takvim orta ölçekli, prodüksiyonlu bir etkinlik içindir. Küçük etkinliklerde süreler kısalır."],
        table: {
          head: ["Zaman", "Yapılacaklar"],
          rows: [
            ["10–12 hafta önce", "Hedef, bütçe, tarih aralığı ve katılımcı sayısı; ajans veya tedarikçi seçimi; mekân araştırması."],
            ["8–10 hafta önce", "Mekân ve konaklama opsiyonları; konsept önerisi; ana tedarikçilerin teklifleri."],
            ["6–8 hafta önce", "Karar ve rezervasyonlar: mekân, otel, prodüksiyon, catering; sözleşme ve ödeme planı."],
            ["4–6 hafta önce", "Program detayı, davet ve kayıt, transfer ve oda listeleri, konuşmacı ve içerik hazırlığı."],
            ["2–3 hafta önce", "Katılımcı iletişimi (program, kıyafet, ulaşım), teknik şartname, yedek plan."],
            ["Son hafta", "Prova, brifingler, son katılımcı sayısı ve diyet bilgisi, hava ve risk kontrolü."],
            ["Etkinlik günü", "Saha yönetimi, zamanlama, iletişim hattı."],
            ["Sonrası (1–2 hafta)", "Geri bildirim anketi, değerlendirme toplantısı, ödemeler ve içeriklerin paylaşımı."],
          ],
        },
      },
      {
        h2: "4. Mekân ve lokasyon seçimi",
        paras: [
          "Mekân seçimi etkinliğin biçimini belirler; kapasite, ses ve saat kısıtları, yiyecek-içecek şartları ve ulaşım gibi unsurlar baştan netleştirilmelidir. Antalya ve Belek için ayrıntılı rehberlerimiz: [Antalya mekân seçimi](/rehberler/antalya-kurumsal-etkinlik-mekani-secimi) ve [Belek mekân seçimi](/rehberler/belek-kurumsal-etkinlik-mekani-secimi).",
        ],
      },
      {
        h2: "5. Katılımcı deneyimini unutmayın",
        paras: [
          "Etkinlik deneyimi kapıdan değil, davetten başlar. Net bir davet, kolay kayıt, ulaşım bilgisi, program özeti ve kıyafet notu; etkinliğe gelmeden katılımcının güvenini artırır. Diyet, alerji ve erişilebilirlik bilgisini kayıtta toplayın.",
        ],
      },
      {
        h2: "6. Yedek plan ve etkinlik günü",
        paras: [
          "Hava, gecikme, teknik arıza ve tedarikçi sorunu için yedek senaryolar planlayın. Etkinlik günü tek karar merkezi (supervisor veya proje yöneticisi) ve net iletişim hattı olması gerekir. Bu rolleri tek ekibe vermek isterseniz [kurumsal etkinlik organizasyonu](/kurumsal-etkinlik-organizasyonu) hizmetimizi inceleyin.",
        ],
      },
    ],
    faq: [
      {
        q: "Şirket etkinliği için ne kadar önceden planlama başlamalı?",
        a: "Küçük etkinlikler için 3–4 hafta, prodüksiyonlu etkinlikler için 8–12 hafta, incentive ve büyük gala'lar için 3–6 ay uygundur. Yüksek sezon ve bayram dönemlerinde süre daha uzun olmalıdır.",
      },
      {
        q: "Planlamayı kendimiz mi yapmalıyız, ajansla mı?",
        a: "Küçük ve basit etkinlikleri iç ekip yönetebilir. Prodüksiyon, çok sayıda tedarikçi, konaklama ve transfer gerektiren etkinliklerde ajans koordinasyon yükünü ve riski azaltır. Seçim kriterleri için [etkinlik ajansı nasıl seçilir](/rehberler/etkinlik-ajansi-nasil-secilir) rehberine bakın.",
      },
    ],
    primaryService: {
      href: "/kurumsal-etkinlik-organizasyonu",
      label: "Kurumsal etkinlik organizasyonu",
      pitch: "Takvimi tek başınıza yönetmek zorunda değilsiniz. Brief'inizi paylaşın; geri sayım takvimini, tedarikçileri ve sahadaki yönetimi biz üstlenelim.",
    },
    related: ["/kurumsal-etkinlik-organizasyonu", "/kurumsal-etkinlik-mekanlari", "/team-building", "/etkinlik-personeli"],
    relatedGuides: ["kurumsal-etkinlik-butcesi-nasil-hazirlanir", "etkinlik-ajansi-nasil-secilir", "antalya-mi-belek-mi"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "team-building-etkinligi-nasil-secilir",
    category: "Planlama",
    intent: "informational",
    metaTitle: "Team Building Etkinliği Nasıl Seçilir? 7 Kriter ve Karar Tablosu",
    metaDescription:
      "Team building etkinliği seçimi: hedef, grup büyüklüğü, süre, fiziksel uygunluk, kültür, mevsim ve bütçe kriterleri. Karar tablosu ve sağlayıcıya sorulacak sorular.",
    h1: "Team Building Etkinliği Nasıl Seçilir? Yedi Kriter",
    lead:
      "Yanlış seçilmiş team building etkinliği zaman ve bütçe kaybından da öteye, ekibin etkinliklere olan güvenini zedeler. Doğru seçim yedi kriter üzerinden yapılır.",
    heroMedia: "guide-select-team",
    published: PUB,
    defaultEventType: "team-building",
    sections: [
      {
        h2: "1. Hedef: Neyi değiştirmek istiyorsunuz?",
        paras: [
          "İletişim, güven, yaratıcılık, liderlik ve kaynaşma farklı formatlar gerektirir. Hedef net değilse etkinlik ‘eğlenceli ama etkisiz’ kalır. Önce ekibin yaşadığı sorunu bir cümleyle yazın.",
        ],
      },
      {
        h2: "2. Grup büyüklüğü ve yapısı",
        paras: [
          "On beş kişilik bir ekip için kurulan mutfak atölyesi, yüz elli kişilik bir grup için lojistik zorluktur. Grup büyüklüğünün yanında ekip içi yapı (yöneticiler, yeni katılanlar, farklı departmanlar) da formatı etkiler.",
        ],
      },
      {
        h2: "3. Süre ve zamanlama",
        paras: [
          "Mesai içinde yapılan 2–3 saatlik etkinlikler katılımı artırır; yarım veya tam gün için daha kapsamlı formatlar gerekir. Aktiviteyi sığdırmak için süreyi kısaltmayın; yoğun gün, sıkıştırılmış etkinlikten daha kötüdür.",
        ],
      },
      {
        h2: "4. Fiziksel uygunluk ve kapsayıcılık",
        paras: [
          "Ekibin yaş, kondisyon ve sağlık durumuna uygun, herkesin anlamlı bir rol alabildiği formatı seçin. Aşırı fiziksel zorluk ya da alkol merkezli programlar bazı çalışanları dışarıda bırakır.",
        ],
      },
      {
        h2: "5. Şirket kültürü",
        paras: [
          "Kültürü resmî ve temkinli olan bir ekip için aşırı gösterişli bir oyun tersine etki yaratabilir; samimi ve enerjik bir ekip için fazla ciddi bir atölye ilgisiz kalır. Formatı kültürle uyumlu seçin, gerekirse biraz zorlayın.",
        ],
      },
      {
        h2: "6. Mevsim ve mekân",
        paras: [
          "Açık hava formatlarında hava ve sıcaklık planı kritik. Mevsime göre kapalı alan alternatifi, saat kaydırma ve ulaşım planı yapın. Antalya ve Belek özelinde fikirler için [Belek'te team building fikirleri](/rehberler/belekte-team-building-fikirleri) ve [Antalya'da şirket etkinliği fikirleri](/rehberler/antalyada-sirket-etkinligi-fikirleri) rehberlerine bakın.",
        ],
      },
      {
        h2: "7. Bütçe",
        paras: [
          "Kişi başı değil toplam maliyete bakın: ekipman, rehber, mekân, yiyecek-içecek, transfer ve sigorta dahil mi? Daha ucuz görünen teklif eksik kalemler içerebilir.",
        ],
        table: {
          head: ["Soru", "İyi cevap", "Uyarı işareti"],
          rows: [
            ["Hedefimi nasıl soruyorsunuz?", "Brief görüşmesi ve sorular", "Hazır paket sunma"],
            ["Güvenlik ve sigorta nasıl?", "Net plan, belgeler ve acil durum prosedürü", "Belirsiz ya da ‘sorun olmaz’"],
            ["Hava kötüyse ne olur?", "Önceden tanımlı alternatif", "Karar etkinlik günü verilir"],
            ["Sonunda değerlendirme var mı?", "Kısa debrief ve geri bildirim", "Etkinlik biter, konuşma yok"],
            ["Referans ve örnek içerik", "Örnek program ve içerik paylaşımı", "Yalnızca fotoğraf galerisi"],
          ],
        },
      },
    ],
    faq: [
      {
        q: "Team building etkinliği için en iyi format hangisi?",
        a: "Herkese uyan tek format yoktur. Yeni ekipler için sakin atölyeler ve keşif oyunları, büyük gruplar için plaj olimpiyatları, liderlik gelişimi için meydan okuma formatları daha uygundur. Fikir listesi için [team building fikirleri](/rehberler/team-building-fikirleri) rehberine bakın.",
      },
      {
        q: "Çalışanlar katılmak istemezse ne yapılabilir?",
        a: "Zorunlu katılım yerine seçenekli program, mesai içi saat ve uygun ulaşım katılımı artırır. Planlamaya birkaç çalışanı dahil etmek de sahiplenmeyi güçlendirir.",
      },
    ],
    primaryService: {
      href: "/team-building",
      label: "Team building hizmeti",
      pitch: "Yedi kriteri birlikte değerlendirelim: hedef, grup, süre, mekân ve bütçeye göre ekibinize uygun formatı öneririz.",
    },
    related: ["/team-building", "/antalya/team-building", "/belek/team-building", "/kurumsal-outdoor-aktiviteler"],
    relatedGuides: ["team-building-fikirleri", "kurumsal-oyun-ornekleri", "etkinlik-ajansi-nasil-secilir"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kurumsal-etkinlik-butcesi-nasil-hazirlanir",
    category: "Planlama",
    intent: "informational",
    metaTitle: "Kurumsal Etkinlik Bütçesi Nasıl Hazırlanır? Kalemler ve İpuçları",
    metaDescription:
      "Kurumsal etkinlik bütçesi hazırlama rehberi: ana gider kalemleri, bütçeyi etkileyen faktörler, rezerv payı ve tasarruf yolları; teklif karşılaştırma kontrol listesi.",
    h1: "Kurumsal Etkinlik Bütçesi Nasıl Hazırlanır?",
    lead:
      "Etkinlik bütçesi tek bir rakam değil, birbirini etkileyen kalemlerin toplamıdır. Doğru bütçe, kalemleri tanımak, öncelikleri belirlemek ve değişkenleri yönetmekle hazırlanır.",
    heroMedia: "guide-budget",
    published: PUB,
    defaultEventType: "diger",
    sections: [
      {
        h2: "Önce ölçeği ve öncelikleri belirleyin",
        paras: [
          "Bütçe çalışmasına başlamadan önce üç şeyi netleştirin: katılımcı sayısı, etkinliğin süresi ve en önemli deneyim anı. Bütçenin büyük kısmını etkinliğin değerini en çok yaratan kaleme ayırın; diğerlerinde sadeleşin.",
        ],
      },
      {
        h2: "Ana gider kalemleri",
        paras: ["Aşağıdaki kalemler çoğu kurumsal etkinlik bütçesinin omurgasını oluşturur:"],
        table: {
          head: ["Kalem", "Neye bağlı?", "Tasarruf yolu"],
          rows: [
            ["Mekân ve konaklama", "Tarih, sezon, kapasite, otel sınıfı", "Omuz sezon, tarih esnekliği, grup oda tahsisi"],
            ["Yiyecek-içecek", "Kişi başı menü, servis stili, bar", "Menü sadeleştirme, bar paketi"],
            ["Prodüksiyon", "Sahne, ışık, ses, LED, dekor", "Mekânın altyapısını kullanan kurgu"],
            ["Aktivite ve içerik", "Aktivite türü, rehber, ekipman", "Grup başına paylaşılan ekipman"],
            ["Transfer", "Mesafe, araç sayısı, vardiya", "Uçuş saatlerini gruplamak"],
            ["Personel", "Rol, sayı, süre", "Doğru oran ve vardiya"],
            ["Eğlence", "Sanatçı, DJ, gösteri", "Yerel sanatçı, kısa gösteri"],
            ["Fotoğraf-video", "Kapsam ve teslimat", "Tek ekip, kısa teslimat"],
            ["Ajans yönetimi", "Proje kapsamı, süre", "Net kapsam ve değişiklik yönetimi"],
          ],
        },
      },
      {
        h2: "Bütçeyi en çok etkileyen dört faktör",
        paras: [],
        bullets: [
          "**Tarih ve sezon:** Aynı etkinlik yüksek sezon ve omuz sezonda çok farklı maliyetlenebilir.",
          "**Katılımcı sayısı:** Sabit kalemler (prodüksiyon) ile kişi başı kalemlerin (yemek) dengesi değişir.",
          "**Lokasyon:** Şehir içi mi, resort mu? Ayrıntılar için [Antalya mı, Belek mi?](/rehberler/antalya-mi-belek-mi).",
          "**Öngörülemeyen değişiklikler:** Son dakika kapsam artışı, hava, tedarikçi sorunları.",
        ],
      },
      {
        h2: "Rezerv payı ve kur riski",
        paras: [
          "Yaygın uygulama, beklenmeyen giderler için bütçenin yaklaşık yüzde 10'u kadar bir rezerv ayırmaktır. Ayrıca farklı para birimleriyle yapılan sözleşmelerde (özellikle dövizli otel teklifleri) kur riskini yazılı olarak yönetin: kur sabitleme tarihi ve ödeme planı netleştirilmelidir.",
        ],
      },
      {
        h2: "Teklifleri karşılaştırırken",
        paras: ["Farklı tekliflerin toplam rakamına değil içeriğine bakın:"],
        bullets: [
          "Hangi kalemler dahil, hangileri hariç?",
          "Vergiler ve servis bedelleri teklife dahil mi?",
          "İptal, tarih değişikliği ve ödeme koşulları neler?",
          "Kişi sayısı değiştiğinde fiyat nasıl değişiyor?",
          "Tedarikçi seçimi ve alternatifler ne kadar şeffaf?",
        ],
      },
      {
        h2: "Bütçeden teklife",
        paras: [
          "Bütçe çerçevenizi paylaşın; uygun formatları, alternatifleri ve kalem kalem teklifi birlikte çıkaralım. Süreç için [kurumsal etkinlik organizasyonu](/kurumsal-etkinlik-organizasyonu) sayfasına bakabilirsiniz.",
        ],
      },
    ],
    faq: [
      {
        q: "Kişi başı bütçe nasıl hesaplanır?",
        a: "Toplam bütçeyi değil, kalemleri iki gruba ayırın: sabit kalemler (prodüksiyon, ajans yönetimi) ve kişi başına değişen kalemler (yemek, konaklama, transfer). Katılımcı sayısı değiştikçe yalnızca ikinci grup oynar.",
      },
      {
        q: "Bütçe düşükse hangi kalemlerden tasarruf edilir?",
        a: "Önce omuz sezon ve tarih esnekliği, ardından menü ve prodüksiyon sadeleştirme düşünün. Katılımcı deneyiminin en kritik anlarına dokunmadan, gösterişli ama etkisiz kalemleri çıkarın.",
      },
    ],
    primaryService: {
      href: "/kurumsal-etkinlik-organizasyonu",
      label: "Kurumsal etkinlik organizasyonu",
      pitch: "Bütçe çerçevenizi paylaşın; kalemleri ayrı gösteren, alternatifli bir teklif hazırlayalım.",
    },
    related: ["/kurumsal-etkinlik-organizasyonu", "/incentive-organizasyonu", "/gala-organizasyonu", "/kurumsal-etkinlik-mekanlari"],
    relatedGuides: ["sirket-etkinligi-nasil-planlanir", "etkinlik-ajansi-nasil-secilir", "antalya-mi-belek-mi"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "etkinlik-ajansi-nasil-secilir",
    category: "Planlama",
    intent: "commercial-investigation",
    metaTitle: "Kurumsal Etkinlik Organizasyon Şirketi Nasıl Seçilir? 12 Soru",
    metaDescription:
      "Kurumsal etkinlik organizasyon şirketi seçerken sorulması gereken 12 soru, ajans türleri, teklif karşılaştırma ölçütleri ve dikkat edilmesi gereken uyarı işaretleri.",
    h1: "Kurumsal Etkinlik Organizasyon Şirketi Nasıl Seçilir? 12 Soru",
    lead:
      "Doğru etkinlik ajansı seçimi, etkinliğin kaderini belirler. Fiyat teklifinin ötesinde bakılması gereken ölçütleri ve ajansa sorulacak soruları aşağıda topladık.",
    heroMedia: "guide-agency",
    published: PUB,
    defaultEventType: "diger",
    sections: [
      {
        h2: "Ajans türlerini ayırt edin",
        paras: ["Piyasada farklı yapıda şirketler ‘etkinlik ajansı’ olarak anılır:"],
        table: {
          head: ["Tür", "Güçlü yanı", "Dikkat"],
          rows: [
            ["Tam hizmet ajans", "Konseptten operasyona tek muhatap", "Küçük işlerde yönetim maliyeti artabilir"],
            ["Yerel destinasyon uzmanı", "Bölge, tedarikçi ve mekân bilgisi güçlü", "Başka şehirlerde sınırlı"],
            ["Prodüksiyon odaklı firma", "Teknik kalite ve sahne", "Konsept ve lojistik ayrıca gerekebilir"],
            ["Tedarikçi ve aracı", "Hızlı ve ekonomik temin", "Koordinasyon sorumluluğu sizde kalabilir"],
          ],
        },
      },
      {
        h2: "Sorulacak 12 soru",
        paras: [],
        bullets: [
          "**Brief'i nasıl ele alıyorsunuz?** Soru soruyor mu, hazır paket mi sunuyor?",
          "**Etkinlikte benim muhatabım kim?** Tek bir sorumlu kişi var mı?",
          "**Saha ekibiniz kimlerden oluşuyor?** Etkinlik günü sorumlu net mi?",
          "**Bütçe kalemlerini ayrı gösteriyor musunuz?**",
          "**Ücretlendirme modeliniz nedir?** Yönetim ücreti, marj veya paket?",
          "**Mekân ve tedarikçilerle ilişkiniz nasıl?** Hangi koşullarda çalışıyorsunuz?",
          "**Hava ve risk için yedek planınız nedir?**",
          "**Benzer ölçekte örnek program paylaşabilir misiniz?**",
          "**Sözleşme ve iptal koşulları nelerdir?**",
          "**Değişiklik taleplerini nasıl yönetiyorsunuz?**",
          "**Etkinlik sonrası ne sunuyorsunuz?** Geri bildirim, rapor, içerik?",
          "**Bölgeyi ne kadar tanıyorsunuz?** Antalya ve Belek özelinde deneyim.",
        ],
      },
      {
        h2: "Uyarı işaretleri",
        paras: [],
        bullets: [
          "Brief'ten önce fiyat ve paket sunulması",
          "Bütçe kalemlerinin tek rakamda toplanması",
          "Referans yerine yalnızca stok görsel kullanılması",
          "Yedek plan sorulduğunda belirsiz cevap",
          "Etkinlik günü sorumlunun belirsizliği",
        ],
      },
      {
        h2: "Tekliflerin karşılaştırılması",
        paras: [
          "Tekliflerin toplam rakamına değil kapsam, şeffaflık ve risk yönetimine bakın. Daha düşük bir teklif, eksik kalemler veya kalite farkı içeriyor olabilir. Bütçe yapısı için [bütçe nasıl hazırlanır](/rehberler/kurumsal-etkinlik-butcesi-nasil-hazirlanir) rehberine bakın.",
        ],
      },
      {
        h2: "Biz nasıl çalışıyoruz?",
        paras: [
          "Antalya ve Belek odaklı çalışıyor, brief ile başlıyor, kalemleri ayrı gösteriyor ve etkinlik günü sahada yönetimi üstleniyoruz. Hizmet kapsamımız için [kurumsal etkinlik organizasyonu](/kurumsal-etkinlik-organizasyonu) sayfasına bakabilir, doğrudan teklif isteyebilirsiniz.",
        ],
      },
    ],
    faq: [
      {
        q: "Etkinlik ajansı ile çalışmak maliyeti artırır mı?",
        a: "Ajansın yönetim bedeli vardır; ancak doğru ajans tedarikçi pazarlığı, hata ve zaman kaybının önlenmesi ile bu maliyeti dengeleyebilir. Karar için kapsam, risk ve iç ekip kapasitesine bakın.",
      },
      {
        q: "Birden fazla ajanstan teklif almak gerekir mi?",
        a: "İki–üç teklif karşılaştırma imkânı sunar. Tüm ajanslara aynı brief'i vermek, teklifleri kıyaslanabilir kılar.",
      },
    ],
    primaryService: {
      href: "/kurumsal-etkinlik-organizasyonu",
      label: "Kurumsal etkinlik organizasyonu",
      pitch: "Brief'inizi paylaşın; yaklaşımımızı, kalem kalem bütçeyi ve yedek planı görerek karşılaştırın.",
    },
    related: ["/kurumsal-etkinlik-organizasyonu", "/etkinlik-personeli", "/kurumsal-etkinlik-mekanlari", "/antalya/kurumsal-etkinlik"],
    relatedGuides: ["sirket-etkinligi-nasil-planlanir", "kurumsal-etkinlik-butcesi-nasil-hazirlanir", "antalya-mi-belek-mi"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "antalya-kurumsal-etkinlik-mekani-secimi",
    category: "Destinasyon",
    intent: "informational",
    metaTitle: "Antalya'da Kurumsal Etkinlik Mekanı Nasıl Seçilir? Bölge Rehberi",
    metaDescription:
      "Antalya'da kurumsal etkinlik mekanı seçimi: Kaleiçi, Konyaaltı, Lara ve Kemer bölgeleri; mekân tiplerinin karşılaştırması, kontrol listesi ve karar ipuçları.",
    h1: "Antalya'da Kurumsal Etkinlik Mekânı Nasıl Seçilir?",
    lead:
      "Antalya'da mekân seçimi bölge seçimidir. Kaleiçi, Konyaaltı, Lara ve Kemer farklı atmosfer ve lojistik sunar; doğru seçim etkinliğin formatına ve katılımcı profiline bağlıdır.",
    heroMedia: "guide-venues-antalya",
    published: PUB,
    defaultEventType: "diger",
    sections: [
      {
        h2: "Önce formatı belirleyin",
        paras: [
          "Mekân aramaya başlamadan önce etkinliğin formatını ve kapasitesini netleştirin: oturmalı yemek mi, ayakta kokteyl mi, toplantı mı, açık hava mı? Her format farklı mekân tipini işaret eder.",
        ],
      },
      {
        h2: "Bölgelere göre mekân karakteri",
        paras: [],
        table: {
          head: ["Bölge", "Karakter", "Uygun format", "Dikkat"],
          rows: [
            ["Kaleiçi", "Tarihî avlular, butik oteller", "Akşam yemeği, kokteyl, küçük gala", "Araç erişimi ve yük taşıma"],
            ["Konyaaltı", "Beach club, sahil restoranları", "Gün batımı etkinliği, plaj günü", "Rüzgâr ve ses sınırı"],
            ["Lara", "Geniş otel hattı, beach club", "Toplantı, bayi buluşması", "Şehir merkezine trafik süresi"],
            ["Kemer", "Orman, koy, marina", "Tekne, retreat, doğa programı", "Merkezden transfer süresi"],
          ],
        },
      },
      {
        h2: "Mekân tiplerini karşılaştırın",
        paras: [],
        bullets: [
          "**Şehir oteli:** Toplantı + konaklama, kolay ulaşım; dış mekân sınırlı.",
          "**Beach club:** Atmosfer ve gün batımı; hava ve ses riski.",
          "**Tarihî avlu veya restoran:** Özgün, küçük gruplara uygun; kapasite ve teknik zorluk.",
          "**Fuar-kongre alanı:** Büyük kapasite ve teknik altyapı; atmosfer için dekor gerekir.",
          "**Marina ve tekne:** Farklı bir deneyim; kapasite sınırlı, hava planı şart.",
        ],
      },
      {
        h2: "Karar öncesi kontrol listesi",
        paras: ["Mekâna şunları sorun:"],
        bullets: [
          "Kapasite sertifikası ve oturma düzenine göre gerçek kapasite",
          "Ses seviyesi ve kapanış saati",
          "Yiyecek-içecek şartı ve dış catering imkânı",
          "Yük giriş, kurulum ve söküm saatleri",
          "Hava alternatifi (kapalı alan veya çadır)",
          "Otopark, transfer aracı girişi ve erişilebilirlik",
          "Opsiyon süresi ve iptal koşulları",
        ],
      },
      {
        h2: "Ulaşım ve zamanlama",
        paras: [
          "Antalya'da şehir içi trafik ve ilçeler arası mesafe etkinlik akışını etkiler. Otelden mekâna transfer süresini, geç saatte dönüş ihtiyacını ve havalimanı bağlantısını hesaplayın. Bu detaylar genellikle mekân seçiminde göz ardı edilir.",
          "Antalya'daki mekân seçeneklerini ve ulaşım notlarını [Antalya etkinlik mekânları](/antalya/kurumsal-etkinlik-mekanlari) sayfasında; hizmet olarak mekân bulmayı ise [kurumsal etkinlik mekânları](/kurumsal-etkinlik-mekanlari) sayfasında bulabilirsiniz.",
        ],
      },
    ],
    faq: [
      {
        q: "Antalya'da mekân için kaç ay önceden rezervasyon gerekir?",
        a: "Yüksek sezonda ve bayram dönemlerinde 4–6 ay; omuz sezonlarında 2–3 ay genellikle yeterlidir. Küçük mekânlarda süre daha kısa olabilir.",
      },
      {
        q: "Antalya mı Belek mi seçmeliyim?",
        a: "Şehir dokusu ve çeşitlilik için Antalya; resort ve golf için Belek. Detaylı karşılaştırma için [Antalya mı, Belek mi?](/rehberler/antalya-mi-belek-mi) rehberine bakın.",
      },
    ],
    primaryService: {
      href: "/antalya/kurumsal-etkinlik-mekanlari",
      label: "Antalya etkinlik mekânları",
      pitch: "Formatınızı ve tarihinizi paylaşın; Antalya'da size uygun mekânların kısa listesini ve karşılaştırmasını hazırlayalım.",
    },
    related: ["/antalya/kurumsal-etkinlik-mekanlari", "/kurumsal-etkinlik-mekanlari", "/gala-organizasyonu", "/antalya/kurumsal-etkinlik"],
    relatedGuides: ["belek-kurumsal-etkinlik-mekani-secimi", "antalya-mi-belek-mi", "sirket-etkinligi-nasil-planlanir"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "belek-kurumsal-etkinlik-mekani-secimi",
    category: "Destinasyon",
    intent: "informational",
    metaTitle: "Belek'te Kurumsal Etkinlik Mekanı Seçimi: Resort Rehberi",
    metaDescription:
      "Belek'te kurumsal etkinlik mekanı seçimi: resort salonları, plaj ve golf alanları, yiyecek-içecek kuralları, ses sınırları ve resort karşılaştırma kontrol listesi.",
    h1: "Belek'te Kurumsal Etkinlik Mekânı Seçimi: Resort Rehberi",
    lead:
      "Belek'te mekân seçimi çoğunlukla bir resort seçimidir. Resort'ların salon yapısı kadar yiyecek-içecek şartları, ses sınırları ve grup yönetimi de karar verirken belirleyicidir.",
    heroMedia: "guide-venues-belek",
    published: PUB,
    defaultEventType: "diger",
    sections: [
      {
        h2: "Belek'te mekân yapısı",
        paras: [
          "Belek, resort'ların aynı kuşakta yer aldığı bir turizm merkezidir. Etkinlik için konaklama, toplantı salonu, plaj ve yemek alanı çoğunlukla aynı resort içindedir; bu nedenle mekân seçimi ile otel seçimi büyük ölçüde birlikte yapılır.",
        ],
      },
      {
        h2: "Resort'ta mekân seçenekleri",
        paras: [],
        bullets: [
          "**Balo ve konferans salonu:** Toplantı, bayi toplantısı, gala yemeği.",
          "**Bahçe ve havuz başı:** Kokteyl ve hafif gala.",
          "**Plaj:** Gün batımı gala, ödül gecesi, plaj aktivitesi.",
          "**Golf kulübü alanı:** Turnuva ödül yemeği, küçük toplantı.",
        ],
      },
      {
        h2: "Karar veren üç kural",
        paras: [],
        table: {
          head: ["Kural", "Neden önemli?", "Ne sormalı?"],
          rows: [
            ["Yiyecek-içecek", "Çoğu resort kendi mutfağından hizmet verir", "Dış catering kabul ediliyor mu? Kişi başı menü fiyatı?"],
            ["Ses ve saat", "Diğer misafirleri rahatsız etmemek için sınır var", "Müzik kapanış saati ve desibel sınırı?"],
            ["Grup yönetimi", "Aynı anda başka gruplar olabilir", "Ayrı salon, ayrı yemek alanı, gizlilik?"],
          ],
        },
      },
      {
        h2: "Resort karşılaştırma kontrol listesi",
        paras: [],
        bullets: [
          "Salon kapasitesi ve oturma düzenine göre gerçek yerleşim",
          "Sahne, ses, ışık altyapısı ve dış tedarikçiye kapı",
          "Plaj veya bahçe alanı kullanım koşulları",
          "Oda sayısı ve grup oda tahsisi",
          "Havalimanına transfer süresi",
          "Sezon ve tarihe göre doluluk riski",
          "Yedek plan: kapalı alan veya çadır alternatifi",
        ],
      },
      {
        h2: "Tarih ve fiyat esnekliği",
        paras: [
          "Belek'te fiyatlar sezona göre belirgin değişir. Yüksek sezonda doluluk ve fiyatlar zirvede olur; ilkbahar, sonbahar ve kış aylarında daha esnek koşullar mümkündür. Tarih esnekliği ciddi bir bütçe avantajıdır.",
          "Belek'teki seçenekler için [Belek etkinlik mekânları](/belek/kurumsal-etkinlik-mekanlari) sayfasına; destinasyon seçimi için [Antalya mı, Belek mi?](/rehberler/antalya-mi-belek-mi) rehberine bakın.",
        ],
      },
    ],
    faq: [
      {
        q: "Belek'te resort seçerken ilk bakılacak kriter nedir?",
        a: "Grup büyüklüğü, program türü ve yiyecek-içecek kuralı. Bu üç kriter bir resort'un etkinliğe uygun olup olmadığını hızla ortaya koyar.",
      },
      {
        q: "Resort'larda ses sınırlaması gala'yı engeller mi?",
        a: "Engellemez ancak kurgusunu etkiler. Müzik seviyesi ve kapanış saati bu sınırlara göre planlanır; bu nedenle mekân seçiminde ilk sorulan sorulardandır.",
      },
    ],
    primaryService: {
      href: "/belek/kurumsal-etkinlik-mekanlari",
      label: "Belek etkinlik mekânları",
      pitch: "Grup büyüklüğünüzü ve tarihinizi paylaşın; Belek'te uygun resort ve alanları karşılaştırmalı sunalım.",
    },
    related: ["/belek/kurumsal-etkinlik-mekanlari", "/belek/gala-organizasyonu", "/kurumsal-etkinlik-mekanlari", "/belek/kurumsal-etkinlik"],
    relatedGuides: ["antalya-kurumsal-etkinlik-mekani-secimi", "antalya-mi-belek-mi", "sirket-etkinligi-nasil-planlanir"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "antalya-mi-belek-mi",
    category: "Destinasyon",
    intent: "commercial-investigation",
    metaTitle: "Antalya mı, Belek mi? Kurumsal Etkinlik İçin Karşılaştırma",
    metaDescription:
      "Kurumsal etkinlik için Antalya mı Belek mi? Ulaşım, mekân yapısı, çeşitlilik, mevsim, bütçe ve etkinlik türüne göre karşılaştırma tablosu ve karar rehberi.",
    h1: "Antalya mı, Belek mi? Kurumsal Etkinlik İçin Karşılaştırma",
    lead:
      "Her ikisi de aynı havalimanını kullanır ve kurumsal etkinliklere ev sahipliği yapar; ancak karakterleri farklıdır. Etkinlik türüne, grup yapısına ve önceliklerinize göre seçim rehberi aşağıda.",
    heroMedia: "guide-antalya-belek",
    published: PUB,
    defaultEventType: "diger",
    sections: [
      {
        h2: "Kısaca fark",
        paras: [
          "Antalya şehir, tarih ve doğa çeşitliliği sunan bir destinasyondur: Kaleiçi, sahil, kanyonlar ve antik kentler. Belek ise planlanmış bir turizm merkezidir: resort'lar, golf sahaları, çam ormanı ve geniş bir plaj aynı kuşakta bulunur. Biri çeşitlilik, diğeri bütünlük sunar.",
        ],
      },
      {
        h2: "Karşılaştırma tablosu",
        paras: [],
        table: {
          head: ["Kriter", "Antalya", "Belek"],
          rows: [
            ["Yapı", "Şehir, ilçeler ve çevre doğa", "Resort merkezli turizm bölgesi"],
            ["Konaklama–toplantı–gala", "Farklı mekânlara dağılır", "Çoğunlukla tek resort içinde"],
            ["Transfer ihtiyacı", "Daha fazla; bölgelere göre", "Minimum; program resort içinde"],
            ["Çeşitlilik", "Yüksek: şehir, tarih, deniz, dağ, nehir", "Odaklı: golf, plaj, orman, resort"],
            ["Golf ve spa", "Sınırlı", "Güçlü"],
            ["Atmosfer", "Özgün ve şehirli", "Konforlu ve sakin"],
            ["Yüksek sezon yoğunluğu", "Yüksek; şehir kalabalık", "Yüksek; resort doluluğu"],
            ["Omuz ve düşük sezon", "Aktif; kültür ve şehir programları", "Sakin; retreat ve golf için avantajlı"],
          ],
        },
      },
      {
        h2: "Etkinlik türüne göre öneri",
        paras: [],
        table: {
          head: ["Etkinlik", "Öneri", "Neden?"],
          rows: [
            ["Team building (kültür, şehir)", "Antalya", "Kaleiçi görevi, mutfak atölyesi, antik alanlar"],
            ["Team building (golf, plaj)", "Belek", "Aktivite resort yanında; transfer gerekmez"],
            ["Incentive (çeşitlilik)", "Antalya", "Her gün farklı deneyim"],
            ["Incentive (konfor ve gala)", "Belek", "Resort, golf, plaj gala'sı tek yerleşkede"],
            ["Bayi toplantısı (büyük grup)", "Belek veya Antalya", "Tek resort pratik; şehir tercih edilirse kongre alanları"],
            ["Corporate retreat", "Belek (odaklı) / Antalya (butik)", "Sakin dönemde resort; küçük ekipler için butik otel"],
            ["Outdoor etkinlik (doğa)", "Antalya", "Köprüçay, kanyon, Toros yakın"],
          ],
        },
      },
      {
        h2: "Karar için üç soru",
        paras: [],
        bullets: [
          "**Katılımcılar daha önce bölgeyi gördü mü?** Evetse Antalya'nın çeşitliliği tazelik katar.",
          "**Program tek yerleşkede mi geçmeli?** Evetse Belek lojistiği sadeleştirir.",
          "**Golf veya spa merkezde mi?** Evetse Belek açık ara öndedir.",
        ],
      },
      {
        h2: "İkisini birleştirmek",
        paras: [
          "Birçok grup konaklamayı Belek'te yapıp bir günü Antalya'nın tarihî merkezine veya antik kentlere ayırır; böylece resort konforu ve şehir deneyimi aynı programda buluşur. Detaylar için [Antalya kurumsal etkinlik](/antalya/kurumsal-etkinlik) ve [Belek kurumsal etkinlik](/belek/kurumsal-etkinlik) sayfalarına bakın.",
        ],
      },
    ],
    faq: [
      {
        q: "Havalimanından hangi destinasyon daha yakın?",
        a: "Antalya şehir merkezi havalimanına daha yakındır; Belek ise genellikle 30–45 dakikalık bir transferle ulaşılır. Her ikisi de grup transferiyle kolay erişilebilir.",
      },
      {
        q: "Hangisi daha ekonomik?",
        a: "Sezona ve otel sınıfına göre değişir; tek bir cevap yok. Belek resort'larında konaklama ve etkinlik birlikte fiyatlanabilir, Antalya'da ise mekân ve konaklama ayrı seçilerek bütçe optimize edilebilir. İki destinasyondan da teklif almak karşılaştırma sağlar.",
      },
    ],
    primaryService: {
      href: "/kurumsal-etkinlik-organizasyonu",
      label: "Kurumsal etkinlik organizasyonu",
      pitch: "Etkinlik türünüzü, grup büyüklüğünüzü ve tarihinizi paylaşın; Antalya ve Belek için karşılaştırmalı bir öneri hazırlayalım.",
    },
    related: ["/antalya/kurumsal-etkinlik", "/belek/kurumsal-etkinlik", "/incentive-organizasyonu", "/corporate-retreat"],
    relatedGuides: ["antalya-kurumsal-etkinlik-mekani-secimi", "belek-kurumsal-etkinlik-mekani-secimi", "sirket-etkinligi-nasil-planlanir"],
  },
];
