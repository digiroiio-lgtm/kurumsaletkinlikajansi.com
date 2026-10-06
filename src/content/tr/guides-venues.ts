import type { Guide, QA } from "../types";

const PUB = "2026-10-06";

/** Tüm otel/kapasite rehberlerinde ortak SSS: veri kaynağı şeffaflığı */
const SOURCE_FAQ: QA = {
  q: "Bu sayfadaki kapasite rakamları güvenilir mi?",
  a: "Rakamlar yayımlanmış tesis ve MICE listesi verilerinden derlenir; her satırın kaynağı tablodadır, doğrulanamayanlar yayınlanmaz. Yine de kararı tek kaynağa dayandırmayın: gereken düzenin kapasitesini otelden yazılı olarak teyit edin.",
};

export const guidesVenues: Guide[] = [
  /* ================================================================== */
  /* 1 — Antalya mekanlar hub'ı (eski 'mekân seçimi' rehberi buraya katıldı) */
  {
    slug: "antalya-kurumsal-etkinlik-mekanlari",
    category: "Destinasyon",
    kind: "hub",
    intent: "commercial-investigation",
    metaTitle: "Antalya Kurumsal Etkinlik Mekanları: Otel, Salon ve Bölge Rehberi",
    metaDescription:
      "Antalya'da kurumsal etkinlik mekanları: bölgeye göre mekân tipleri, kongre ve toplantı otellerinin doğrulanmış salon kapasiteleri, ses/izin kuralları ve seçim kontrol listesi.",
    h1: "Antalya Kurumsal Etkinlik Mekânları: Otel, Salon ve Bölge Rehberi",
    lead:
      "Antalya'da mekân seçimi iki katmanlıdır: önce bölge (Kaleiçi, Konyaaltı, Lara, Kemer, Belek), sonra mekân tipi (otel salonu, beach club, avlu, kongre merkezi). Bu rehber ikisini birlikte ele alır ve büyük otellerin doğrulanmış salon kapasitelerini tek tabloda gösterir. Bu rehberde Antalya'ya Belek de dahildir.",
    heroMedia: "guide-venue-hub",
    published: PUB,
    defaultEventType: "diger",
    quoteDefaults: { location: "Antalya (şehir merkezi)" },
    ctaHeading: "Etkinliğiniz için otel, salon ve operasyon teklifini tek noktadan alın",
    ctaText: "Tarihinizi ve kişi sayınızı paylaşın; uygun mekânların kısa listesini, kapasite teyidini ve prodüksiyon-operasyon teklifini birlikte hazırlayalım.",
    sections: [
      {
        h2: "Önce formatı belirleyin",
        paras: [
          "Mekân aramaya başlamadan önce etkinliğin formatını ve katılımcı sayısını netleştirin: oturmalı yemek mi, ayakta kokteyl mi, toplantı mı, açık hava mı? Her format farklı mekân tipini işaret eder ve aynı salonun kapasitesi formata göre çarpıcı biçimde değişir.",
          "Kararın tamamı için [şirket etkinliği nasıl planlanır](/rehberler/sirket-etkinligi-nasil-planlanir) rehberindeki geri sayım takvimini de kullanabilirsiniz.",
        ],
      },
      {
        h2: "Bölgelere göre mekân karakteri",
        paras: ["Her bölge farklı bir atmosfer ve lojistik sunar:"],
        table: {
          head: ["Bölge", "Karakter", "Uygun format", "Dikkat"],
          rows: [
            ["Kaleiçi", "Tarihî avlular, butik oteller", "Akşam yemeği, kokteyl, küçük gala", "Araç erişimi ve yük taşıma kısıtlı"],
            ["Konyaaltı", "Beach club, sahil restoranları", "Gün batımı etkinliği, plaj günü", "Rüzgâr ve ses sınırı"],
            ["Lara", "Geniş otel hattı, beach club", "Toplantı, bayi buluşması, konferans", "Şehir merkezine trafik süresi"],
            ["Kemer", "Orman, koy, marina", "Tekne, retreat, doğa programı", "Merkezden transfer süresi"],
            ["Belek", "Resort merkezli kongre/golf bölgesi", "Kongre, bayi toplantısı, incentive, gala", "Yiyecek-içecek çoğunlukla otel üzerinden"],
          ],
        },
      },
      {
        h2: "Büyük otellerin doğrulanmış salon kapasiteleri",
        paras: [
          "Aşağıdaki tablo, Belek ve Lara'daki başlıca kongre/toplantı otellerinde kaynağı doğrulanabilen salonları listeler. Her otelin ayrıntılı profiline ismine tıklayarak ulaşabilirsiniz.",
        ],
        hotelBlock: { mode: "halls", filter: {}, layouts: ["theatre", "banquet", "cocktail"] },
      },
      {
        h2: "Mekân tiplerini karşılaştırın",
        paras: [],
        bullets: [
          "**Resort/otel salonu:** Konaklama, toplantı ve yemek tek yerde; büyük gruplar için pratik. Yiyecek-içecek şartı ve ses sınırı otele bağlıdır.",
          "**Beach club:** Atmosfer ve gün batımı; hava ve ses riski.",
          "**Tarihî avlu veya restoran:** Özgün, küçük gruplara uygun; kapasite ve teknik zorluk.",
          "**Fuar-kongre alanı:** Büyük kapasite ve teknik altyapı; atmosfer için dekor gerekir.",
          "**Marina ve tekne:** Farklı bir deneyim; kapasite sınırlı, hava planı şart.",
        ],
      },
      {
        h2: "Ses, izin ve komşuluk",
        paras: [
          "Şehir içi mekânlarda ses ve çevre ilişkisi belirleyicidir. Konut veya otel komşuları, kapanış saati ve açık alan izinleri etkinliğin kurgusunu doğrudan etkiler. Bunları mekâna sormadan sözleşme yapmayın; özellikle müzik ve havai fişek için yazılı onay alın.",
          "Açık havada kurulacak her etkinlik için kapalı alan alternatifi şarttır; karar saatini, alternatif mekânı ve kurulum süresini sözleşmede netleştirin.",
        ],
      },
      {
        h2: "Karar öncesi kontrol listesi",
        paras: ["Her mekâna şunları sorun:"],
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
        h2: "Etkinlik türüne göre nereye bakmalı?",
        paras: ["Etkinlik türünüz belliyse doğrudan ilgili listeye geçin:"],
        table: {
          head: ["Etkinlik", "Önce bakılacak rehber"],
          rows: [
            ["Kongre / konferans", "[Antalya kongre otelleri](/rehberler/antalya-kongre-otelleri) · [Belek kongre otelleri](/rehberler/belek-kongre-otelleri)"],
            ["Bayi toplantısı", "[Antalya](/rehberler/antalya-bayi-toplantisi-otelleri) · [Belek](/rehberler/belek-bayi-toplantisi-otelleri)"],
            ["Gala ve ödül gecesi", "[Antalya gala mekânları](/rehberler/antalya-gala-mekanlari) · [Belek gala mekânları](/rehberler/belek-gala-mekanlari)"],
            ["500 kişilik etkinlik", "[500 kişilik mekânlar](/rehberler/500-kisilik-etkinlik-mekanlari-antalya)"],
            ["1.000 kişilik kongre", "[1.000 kişilik kongre otelleri](/rehberler/1000-kisilik-kongre-otelleri-antalya)"],
            ["MICE genel bakış", "[Antalya MICE rehberi](/rehberler/antalya-mice-rehberi)"],
          ],
        },
      },
      {
        h2: "Ulaşım ve zamanlama",
        paras: [
          "Antalya'da şehir içi trafik ve ilçeler arası mesafe etkinlik akışını etkiler. Otelden mekâna transfer süresini, geç saatte dönüş ihtiyacını ve havalimanı bağlantısını hesaplayın; bu detaylar mekân seçiminde sık göz ardı edilir. Yüksek sezonda ve bayram dönemlerinde mekânlar için 4–6 ay, omuz sezonlarında 2–3 ay önceden başlamak genellikle yeterlidir.",
        ],
      },
    ],
    faq: [
      {
        q: "Antalya'da büyük bir kongre için en uygun mekân tipi nedir?",
        a: "Yüzlerce kişilik toplantılar için kongre merkezli resort'lar ve fuar-kongre alanları uygundur. Konaklama ve toplantının aynı yerde olması isteniyorsa Belek'teki resort'lar pratiktir. Seçenekler için [Antalya kongre otelleri](/rehberler/antalya-kongre-otelleri) rehberine bakın.",
      },
      {
        q: "Kaleiçi'nde etkinlik düzenlemek zor mu?",
        a: "Araç erişimi ve yük taşıma kısıtları nedeniyle planlama gerektirir; doğru kurguyla küçük ve orta gruplar için çok özgün bir atmosfer sunar. Ayrıntılar için [Antalya etkinlik mekânları](/antalya/kurumsal-etkinlik-mekanlari) sayfasına bakın.",
      },
      SOURCE_FAQ,
    ],
    primaryService: {
      href: "/antalya/kurumsal-etkinlik-mekanlari",
      label: "Antalya etkinlik mekânları hizmeti",
      pitch: "Formatınızı ve tarihinizi paylaşın; Antalya'da size uygun mekânların kısa listesini, kapasite teyidini ve karşılaştırmasını hazırlayalım.",
    },
    related: ["/antalya/kurumsal-etkinlik-mekanlari", "/kurumsal-etkinlik-mekanlari", "/gala-organizasyonu", "/antalya/kurumsal-etkinlik"],
    relatedGuides: ["belek-kurumsal-etkinlik-mekanlari", "antalya-kongre-otelleri", "antalya-mice-rehberi"],
  },

  /* ================================================================== */
  /* 2 — Belek mekanlar hub'ı */
  {
    slug: "belek-kurumsal-etkinlik-mekanlari",
    category: "Destinasyon",
    kind: "hub",
    intent: "commercial-investigation",
    metaTitle: "Belek Kurumsal Etkinlik Mekanları: Resort ve Salon Rehberi",
    metaDescription:
      "Belek'te kurumsal etkinlik mekanları: resort balo ve konferans salonları, doğrulanmış kapasiteler, yiyecek-içecek ve ses kuralları, resort karşılaştırma kontrol listesi ve otel profilleri.",
    h1: "Belek Kurumsal Etkinlik Mekânları: Resort ve Salon Rehberi",
    lead:
      "Belek'te mekân seçimi çoğunlukla bir resort seçimidir; çünkü toplantı, konaklama ve yemek aynı çatı altındadır. Salon yapısı kadar yiyecek-içecek şartları, ses sınırları ve grup yönetimi de belirleyicidir. Bu rehber Belek'in başlıca kongre otellerini doğrulanmış verilerle karşılaştırır.",
    heroMedia: "guide-venue-hub-belek",
    published: PUB,
    defaultEventType: "diger",
    quoteDefaults: { location: "Belek" },
    ctaHeading: "Belek etkinliğiniz için otel, salon ve operasyon teklifini tek noktadan alın",
    ctaText: "Tarih ve kişi sayınızı paylaşın; Belek'teki uygun otellerden teklif toplayıp salon kapasitelerini yazılı olarak teyit edelim, prodüksiyon ve operasyonu birlikte planlayalım.",
    sections: [
      {
        h2: "Belek'te mekân yapısı",
        paras: [
          "Belek, resort'ların aynı kuşakta yer aldığı bir turizm merkezidir. Etkinlik için konaklama, toplantı salonu, plaj ve yemek alanı çoğunlukla aynı resort içindedir; bu yüzden mekân seçimi ile otel seçimi büyük ölçüde birlikte yapılır.",
          "Şehir merkezindeki bağımsız mekânlar için [Antalya kurumsal etkinlik mekânları](/rehberler/antalya-kurumsal-etkinlik-mekanlari) rehberine, destinasyon seçimi için [Antalya mı, Belek mi?](/rehberler/antalya-mi-belek-mi) rehberine bakın.",
        ],
      },
      {
        h2: "Belek'teki başlıca otellerin doğrulanmış salonları",
        paras: ["Aşağıdaki tablo, Belek'teki kongre/toplantı otellerinde kaynağı doğrulanabilen salonları büyükten küçüğe sıralar."],
        hotelBlock: { mode: "halls", filter: { region: "belek" }, layouts: ["theatre", "banquet", "cocktail"] },
      },
      {
        h2: "Otel profilleri",
        paras: ["Her otel için ayrı bir planlama rehberimiz var:"],
        bullets: [
          "[Regnum Carya](/rehberler/regnum-carya-kurumsal-etkinlik) — büyük convention + golf",
          "[Titanic Deluxe Golf Belek](/rehberler/titanic-deluxe-golf-belek-kurumsal-etkinlik) — kongre merkezi + fuaye",
          "[Susesi Luxury Resort](/rehberler/susesi-luxury-resort-kurumsal-etkinlik) — convention odaklı resort",
          "[Calista Luxury Resort](/rehberler/calista-luxury-resort-kurumsal-etkinlik) — ballroom + farklı boyutlarda odalar",
          "[Cornelia Diamond](/rehberler/cornelia-diamond-kurumsal-etkinlik) — convention + golf",
          "[Gloria Golf Resort](/rehberler/gloria-golf-resort-kurumsal-etkinlik) — resort + golf + spor",
          "[Kempinski The Dome Belek](/rehberler/kempinski-the-dome-belek-kurumsal-etkinlik) — butik premium",
          "[Maxx Royal Belek](/rehberler/maxx-royal-belek-kurumsal-etkinlik) — ultra premium",
          "[Rixos Premium Belek](/rehberler/rixos-premium-belek-kurumsal-etkinlik) — resort ve eğlence ekosistemi",
        ],
      },
      {
        h2: "Karar veren üç kural",
        paras: [],
        table: {
          head: ["Kural", "Neden önemli?", "Ne sormalı?"],
          rows: [
            ["Yiyecek-içecek", "Çoğu resort kendi mutfağından hizmet verir", "Dış catering kabul ediliyor mu? Kişi başı menü fiyatı?"],
            ["Ses ve saat", "Diğer misafirleri rahatsız etmemek için sınır var", "Müzik kapanış saati ve ses sınırı?"],
            ["Grup yönetimi", "Aynı anda başka gruplar olabilir", "Ayrı salon, ayrı yemek alanı, gizlilik?"],
          ],
        },
      },
      {
        h2: "Gruba göre resort tipi",
        paras: [
          "Küçük ve odaklı gruplar için daha sakin, düşük yoğunluklu resort'lar; büyük bayi ve incentive grupları için geniş kongre ve balo salonu olan resort'lar uygundur. Aile katılımlı etkinliklerde çocuk alanı ve aile odaları ön plana çıkar. Resort'un kendi kitlesi (aile, golf, wellness) etkinlik atmosferini etkiler; grubunuzla uyumlu bir resort seçin.",
        ],
      },
      {
        h2: "Sözleşmede kontrol edilecek maddeler",
        paras: [],
        bullets: [
          "Oda ve salon tahsisi, serbest bırakma (release) tarihi",
          "Yiyecek-içecek minimum harcaması ve menü fiyatları",
          "Prodüksiyon kuralları: giriş saati, ses sınırı, elektrik",
          "İptal, tarih değişikliği ve kısmi iptal koşulları",
          "Ödeme planı ve kur sabitleme tarihi",
          "Alternatif alan (hava) hakkı",
        ],
      },
      {
        h2: "Tarih ve fiyat esnekliği",
        paras: [
          "Belek'te fiyatlar sezona göre belirgin değişir. Yüksek sezonda doluluk ve fiyatlar zirvede olur; ilkbahar, sonbahar ve kış aylarında daha esnek koşullar mümkündür. Tarih esnekliği ciddi bir bütçe avantajıdır.",
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
        a: "Engellemez ancak kurgusunu etkiler. Müzik seviyesi ve kapanış saati bu sınırlara göre planlanır; bu yüzden mekân seçiminde ilk sorulan sorulardandır. Gala için [Belek gala mekânları](/rehberler/belek-gala-mekanlari) rehberine bakın.",
      },
      SOURCE_FAQ,
    ],
    primaryService: {
      href: "/belek/kurumsal-etkinlik-mekanlari",
      label: "Belek etkinlik mekânları hizmeti",
      pitch: "Grup büyüklüğünüzü ve tarihinizi paylaşın; Belek'te uygun resort ve alanları karşılaştırmalı sunalım.",
    },
    related: ["/belek/kurumsal-etkinlik-mekanlari", "/belek/gala-organizasyonu", "/kurumsal-etkinlik-mekanlari", "/belek/kurumsal-etkinlik"],
    relatedGuides: ["antalya-kurumsal-etkinlik-mekanlari", "belek-kongre-otelleri", "antalya-mi-belek-mi"],
  },

  /* ================================================================== */
  /* 3 — Antalya kongre otelleri */
  {
    slug: "antalya-kongre-otelleri",
    category: "Oteller",
    kind: "capacity",
    minVerifiedHotels: 3,
    intent: "commercial-investigation",
    metaTitle: "Antalya Kongre Otelleri: Salon Kapasiteleri ve Karşılaştırma",
    metaDescription:
      "Antalya ve Belek kongre otelleri: doğrulanmış salon alanları ve tiyatro/banket/kokteyl kapasiteleri, kongre oteli seçim ölçütleri ve ölçek sınıflarına göre karşılaştırma.",
    h1: "Antalya Kongre Otelleri: Salon Kapasiteleri ve Karşılaştırma",
    lead:
      "Kongre oteli seçimi, salon büyüklüğünden fazlasıdır: paralel oturum odaları, fuaye, teknik altyapı ve konaklama kapasitesi birlikte değerlendirilir. Aşağıda Antalya (Belek ve Lara dahil) kongre otellerinin kaynağı doğrulanmış salonları karşılaştırılıyor.",
    heroMedia: "guide-congress-hotels",
    published: PUB,
    defaultEventType: "kongre",
    quoteDefaults: { location: "Belek" },
    ctaHeading: "Kongreniz için otel, salon ve operasyon teklifini tek noktadan alın",
    ctaText: "Katılımcı sayınızı ve tarihinizi paylaşın; uygun kongre otellerinden teklif alalım, salon kapasitelerini yazılı teyit edelim ve kayıt-teknik-operasyonu birlikte planlayalım.",
    sections: [
      {
        h2: "Kongre otellerinin karşılaştırması",
        paras: [
          "Tabloda tek bir salonda en az 250 kişilik tiyatro/oditoryum düzeni doğrulanmış salonlar yer alır. Daha küçük toplantı odaları için [Antalya toplantı otelleri](/rehberler/antalya-toplanti-otelleri) rehberine bakın.",
        ],
        hotelBlock: { mode: "halls", filter: { minCapacity: { layout: "theatre", n: 250 } }, layouts: ["theatre", "banquet", "cocktail"] },
      },
      {
        h2: "Kongre oteli seçerken aranacaklar",
        paras: ["Salon kapasitesi ilk filtredir; ikinci filtre kongre akışını destekleyen unsurlardır:"],
        bullets: [
          "**Paralel oturum odaları:** Ana salonun yanında yeterli sayıda orta ölçekli oda",
          "**Fuaye:** Kayıt, sponsor standı ve kahve molası için gün ışıklı geniş alan",
          "**Salonun bölünebilirliği:** Ana salonun üç bölüme ayrılabilmesi oturum esnekliği sağlar",
          "**Teknik altyapı:** Tavan yüksekliği, ekran görüş hattı, internet ve çeviri kabini imkânı",
          "**Konaklama:** Katılımcıların tamamını barındıran oda kapasitesi",
          "**Dış prodüksiyon kuralları:** Dış tedarikçi, yük giriş saati, ses sınırı",
        ],
      },
      {
        h2: "Ölçek sınıflarına göre yaklaşım",
        paras: [],
        table: {
          head: ["Katılımcı", "Yaklaşım", "Dikkat"],
          rows: [
            ["300–500 kişi", "Orta-büyük bir salon yeterli; paralel oturum için küçük odalar", "Birçok otel bu ölçeği tek salonda rahat karşılar"],
            ["500–1.000 kişi", "Büyük salon + fuaye + paralel odalar", "Banket düzeninde kapasite belirgin düşer; gala için ek alan"],
            ["1.000 kişi ve üzeri", "Yalnızca birkaç otel tek salonda karşılayabilir", "Düzen bazında yazılı teyit ve yedek salon planı şart. Bkz. [1.000 kişilik kongre otelleri](/rehberler/1000-kisilik-kongre-otelleri-antalya)"],
          ],
        },
      },
      {
        h2: "Kongre operasyonunu kim yönetir?",
        paras: [
          "Otel salonu ve konaklamayı sağlar; kayıt sistemi, konuşmacı koordinasyonu, çeviri, teknik prodüksiyon, transfer ve sosyal program ise ayrıca yönetilmelidir. Bu rolü tek ekibe vermek koordinasyonu sadeleştirir; ayrıntılar için [kongre ve konferans organizasyonu](/kongre-konferans-organizasyonu) sayfasına bakın.",
        ],
      },
      {
        h2: "Belek mi, Lara mı?",
        paras: [
          "Belek'te kongre, konaklama ve gala aynı yerleşkede olur; havalimanından kısa transferle resort'a ulaşılır. Lara'daki oteller ise Antalya şehir merkezine daha yakındır ve toplantıdan sonra şehir programı eklemeyi kolaylaştırır. Belek seçenekleri için [Belek kongre otelleri](/rehberler/belek-kongre-otelleri) rehberine bakın.",
        ],
      },
    ],
    faq: [
      {
        q: "Antalya'da 1.000 kişilik kongre için hangi oteller uygun?",
        a: "Tek salonda 1.000 kişilik tiyatro düzenini yayımlanmış verilerle karşılayan sınırlı sayıda otel vardır; güncel liste [1.000 kişilik kongre otelleri](/rehberler/1000-kisilik-kongre-otelleri-antalya) rehberinde. Kesin kapasite için yazılı teyit şarttır.",
      },
      {
        q: "Kongre oteli seçerken en kritik üç kriter nedir?",
        a: "İstenen düzende (tiyatro/banket) salon kapasitesi, paralel oturum odalarının sayısı ve fuaye/teknik altyapıdır. Bunlar sağlanmadan konaklama ve fiyat karşılaştırması anlamlı olmaz.",
      },
      SOURCE_FAQ,
    ],
    primaryService: {
      href: "/kongre-konferans-organizasyonu",
      label: "Kongre ve konferans organizasyonu",
      pitch: "Katılımcı sayınızı ve takviminizi paylaşın; otel seçiminden kayıt, teknik prodüksiyon ve transfere kadar kongre operasyonunu tek noktadan planlayalım.",
    },
    related: ["/kongre-konferans-organizasyonu", "/bayi-toplantisi-organizasyonu", "/kurumsal-etkinlik-mekanlari", "/etkinlik-personeli"],
    relatedGuides: ["belek-kongre-otelleri", "antalya-kurumsal-etkinlik-mekanlari", "1000-kisilik-kongre-otelleri-antalya"],
  },

  /* ================================================================== */
  /* 4 — Belek kongre otelleri */
  {
    slug: "belek-kongre-otelleri",
    category: "Oteller",
    kind: "capacity",
    minVerifiedHotels: 3,
    intent: "commercial-investigation",
    metaTitle: "Belek Kongre Otelleri: Salon Kapasiteleri ve Seçim Rehberi",
    metaDescription:
      "Belek kongre otelleri: doğrulanmış salon alanları ve kapasiteler, tek yerleşkede kongre-konaklama-gala avantajı, resort kuralları ve kongre oteli seçim kontrol listesi.",
    h1: "Belek Kongre Otelleri: Salon Kapasiteleri ve Seçim Rehberi",
    lead:
      "Belek, Türkiye'de kongre oteli yoğunluğu en yüksek bölgelerden biridir: kongre, konaklama ve gala aynı yerleşkede kurulabilir. Bu rehber Belek'teki kongre otellerinin doğrulanmış salonlarını karşılaştırır ve seçimde karar veren noktaları açıklar.",
    heroMedia: "guide-congress-belek",
    published: PUB,
    defaultEventType: "kongre",
    quoteDefaults: { location: "Belek" },
    ctaHeading: "Belek kongreniz için otel, salon ve operasyon teklifini tek noktadan alın",
    ctaText: "Katılımcı sayınızı ve tarihinizi paylaşın; Belek'teki uygun kongre otellerinden teklif toplayalım, salon kapasitelerini yazılı teyit edelim.",
    sections: [
      {
        h2: "Belek kongre otelleri karşılaştırması",
        paras: ["Tabloda Belek'te tek salonda en az 400 kişilik tiyatro düzeni doğrulanmış salonlar büyükten küçüğe sıralanır."],
        hotelBlock: { mode: "halls", filter: { region: "belek", minCapacity: { layout: "theatre", n: 400 } }, layouts: ["theatre", "banquet", "cocktail"] },
      },
      {
        h2: "Belek'te kongrenin avantajı: tek yerleşke",
        paras: [
          "Belek'te katılımcılar konakladıkları otelde toplanır; transfer, gecikme ve günlük sapma riski çok azalır. Bu, özellikle çok günlü kongrelerde ve oturum aralarında dinlenme gereken programlarda belirgin bir avantajdır.",
          "Karşılığında yiyecek-içecek çoğunlukla otel üzerinden alınır ve ses/saat kuralları otele bağlıdır; bu iki konu fiyat ve program esnekliğini belirler.",
        ],
      },
      {
        h2: "Hangi otel hangi ölçek için?",
        paras: [],
        bullets: [
          "**Çok büyük tek salon ihtiyacı:** Cornelia Diamond, Rixos Premium ve Gloria gibi tek salonda 1.200 ve üzeri tiyatro kapasitesi yayımlayan oteller öne çıkar — [Cornelia](/rehberler/cornelia-diamond-kurumsal-etkinlik), [Rixos](/rehberler/rixos-premium-belek-kurumsal-etkinlik), [Gloria](/rehberler/gloria-golf-resort-kurumsal-etkinlik).",
          "**Çok sayıda oda ve geniş fuaye:** [Susesi](/rehberler/susesi-luxury-resort-kurumsal-etkinlik) ve [Titanic](/rehberler/titanic-deluxe-golf-belek-kurumsal-etkinlik) paralel oturumlu kongre yapıları için değerlendirilir.",
          "**Ballroom ağırlıklı etkinlik:** [Calista](/rehberler/calista-luxury-resort-kurumsal-etkinlik) lansman ve gala formatlarında güçlüdür.",
          "**Butik ve premium gruplar:** [Kempinski The Dome](/rehberler/kempinski-the-dome-belek-kurumsal-etkinlik) 400 kişiye kadar toplantılar için.",
        ],
      },
      {
        h2: "Sözleşmede dikkat edilecekler",
        paras: [],
        bullets: [
          "Oda tahsisi ve serbest bırakma tarihi (release)",
          "Salon ücreti ile yiyecek-içecek minimumunun ilişkisi",
          "Dış prodüksiyon, çeviri kabini ve ekran/sahne kurulum saatleri",
          "Aynı dönemde otelde başka büyük grup bulunup bulunmadığı",
          "İptal ve katılımcı sayısı azalma koşulları",
        ],
      },
    ],
    faq: [
      {
        q: "Belek'te kongre için en uygun mevsim hangisi?",
        a: "Sakin ve uygun maliyetli koşullar için ilkbahar başı, sonbahar ve kış aylarındaki omuz/düşük sezon genellikle avantajlıdır. Yaz yüksek doluluk ve fiyat demektir; erken rezervasyon önemlidir.",
      },
      {
        q: "Belek'te kongre ile birlikte aktivite eklenebilir mi?",
        a: "Evet. Golf, plaj turnuvası veya takım etkinliği kongre programına eklenebilir; seçenekler için [Belek team building](/belek/team-building) sayfasına bakın.",
      },
      SOURCE_FAQ,
    ],
    primaryService: {
      href: "/kongre-konferans-organizasyonu",
      label: "Kongre ve konferans organizasyonu",
      pitch: "Belek kongreniz için otel seçiminden kayıt ve teknik prodüksiyona kadar tüm operasyonu tek noktadan planlayalım.",
    },
    related: ["/kongre-konferans-organizasyonu", "/belek/kurumsal-etkinlik-mekanlari", "/belek/kurumsal-etkinlik", "/etkinlik-personeli"],
    relatedGuides: ["antalya-kongre-otelleri", "belek-kurumsal-etkinlik-mekanlari", "belek-toplanti-otelleri"],
  },

  /* ================================================================== */
  /* 5 — Antalya toplantı otelleri */
  {
    slug: "antalya-toplanti-otelleri",
    category: "Oteller",
    kind: "capacity",
    minVerifiedHotels: 3,
    intent: "commercial-investigation",
    metaTitle: "Antalya Toplantı Otelleri: Salon Düzenleri ve Seçim Rehberi",
    metaDescription:
      "Antalya ve Belek toplantı otelleri: yönetim toplantısı, eğitim ve workshop için doğrulanmış toplantı odaları, tiyatro/sınıf kapasiteleri ve oda düzeni seçim rehberi.",
    h1: "Antalya Toplantı Otelleri: Salon Düzenleri ve Seçim Rehberi",
    lead:
      "Toplantı oteli seçerken ilk soru kaç kişi değil, hangi oturma düzenidir: yönetim toplantısı U düzeni, eğitim sınıf düzeni, sunum tiyatro düzeni ister. Aşağıda Antalya ve Belek'te kaynağı doğrulanmış toplantı salonları düzen bazında listelenir.",
    heroMedia: "guide-meeting-hotels",
    published: PUB,
    defaultEventType: "toplanti",
    quoteDefaults: { location: "Antalya (şehir merkezi)" },
    ctaHeading: "Toplantınız için otel ve operasyon teklifini tek noktadan alın",
    ctaText: "Toplantı türünü, katılımcı sayısını ve tarihi paylaşın; uygun otelleri, oda düzenini ve teknik ihtiyacı birlikte planlayalım.",
    sections: [
      {
        h2: "Toplantı salonları ve düzenleri",
        paras: ["Tabloda doğrulanmış toplantı salonları tiyatro, banket ve sınıf kapasiteleriyle gösterilir."],
        hotelBlock: { mode: "halls", filter: {}, layouts: ["theatre", "classroom", "banquet"] },
      },
      {
        h2: "Toplantı türüne göre oturma düzeni",
        paras: [],
        table: {
          head: ["Toplantı türü", "Önerilen düzen", "Neden?"],
          rows: [
            ["Yönetim kurulu / board", "U düzeni veya yuvarlak masa", "Göz teması ve tartışma"],
            ["Eğitim ve workshop", "Sınıf düzeni veya grup masaları", "Not alma ve grup çalışması"],
            ["Sunum ve genel bilgilendirme", "Tiyatro düzeni", "En yüksek kapasite, sahne odaklı"],
            ["Bayi veya satış toplantısı", "Tiyatro + banket", "Sunum ve ortak yemek aynı gün"],
          ],
        },
      },
      {
        h2: "Toplantı oteli seçerken aranacaklar",
        paras: [],
        bullets: [
          "İstenen düzende gerçek kapasite ve oda ölçüleri",
          "Gün ışığı, ses yalıtımı ve oda sıcaklık kontrolü",
          "Ekran, projeksiyon, ses ve internet altyapısı",
          "Kahve molası ve yemek akışı (aynı kat veya yakın alan)",
          "Break-out için ek oda",
          "Konaklama ve toplantı arasındaki mesafe",
        ],
      },
      {
        h2: "Şehir mi, resort mu?",
        paras: [
          "Şehir merkezi veya Lara'daki oteller kısa toplantılar ve şehir programıyla kombine günler için pratiktir. Belek resort'ları çok günlü, odaklı programlar için avantajlıdır. Belek seçenekleri için [Belek toplantı otelleri](/rehberler/belek-toplanti-otelleri), büyük kongreler için [Antalya kongre otelleri](/rehberler/antalya-kongre-otelleri) rehberlerine bakın.",
        ],
      },
    ],
    faq: [
      {
        q: "Yönetim toplantısı için hangi otel tipi uygun?",
        a: "Küçük ve odaklı toplantılar için butik veya sakin dönemdeki resort'lar uygundur; ayrı oda ve gizlilik önemlidir. Premium küçük ölçek için [Kempinski The Dome Belek](/rehberler/kempinski-the-dome-belek-kurumsal-etkinlik) profilindeki yapıya bakabilirsiniz.",
      },
      SOURCE_FAQ,
      {
        q: "Toplantı otelinden teklif alırken ne istemeliyim?",
        a: "İstediğiniz oturma düzenini, katılımcı sayısını, ekipman ihtiyacını, yemek akışını ve konaklamayı yazılı brief olarak gönderin; oda ücreti, ekipman ve yiyecek-içecek kalemlerini ayrı ayrı isteyin.",
      },
    ],
    primaryService: {
      href: "/kurumsal-etkinlik-mekanlari",
      label: "Kurumsal etkinlik mekânları hizmeti",
      pitch: "Toplantı türünüzü ve tarihinizi paylaşın; uygun otelleri ve oda düzenlerini karşılaştırmalı sunalım.",
    },
    related: ["/kurumsal-etkinlik-mekanlari", "/corporate-retreat", "/bayi-toplantisi-organizasyonu", "/etkinlik-personeli"],
    relatedGuides: ["belek-toplanti-otelleri", "antalya-kongre-otelleri", "antalya-kurumsal-etkinlik-mekanlari"],
  },

  /* ================================================================== */
  /* 6 — Belek toplantı otelleri */
  {
    slug: "belek-toplanti-otelleri",
    category: "Oteller",
    kind: "capacity",
    minVerifiedHotels: 3,
    intent: "commercial-investigation",
    metaTitle: "Belek Toplantı Otelleri: Salonlar, Düzenler ve Seçim Rehberi",
    metaDescription:
      "Belek toplantı otelleri: yönetim toplantısı, eğitim ve workshop için doğrulanmış toplantı salonları, düzen bazında kapasiteler ve resort'ta toplantı planlama notları.",
    h1: "Belek Toplantı Otelleri: Salonlar, Düzenler ve Seçim Rehberi",
    lead:
      "Belek'te toplantı, konaklama ve dinlenme aynı yerleşkede olduğu için odaklı, çok günlü toplantılar için ideal bir bölgedir. Bu rehber Belek'teki toplantı salonlarını düzen bazında karşılaştırır ve resort'ta toplantı planlarken dikkat edilecek noktaları anlatır.",
    heroMedia: "guide-meeting-belek",
    published: PUB,
    defaultEventType: "toplanti",
    quoteDefaults: { location: "Belek" },
    ctaHeading: "Belek toplantınız için otel ve operasyon teklifini tek noktadan alın",
    ctaText: "Toplantı türünü, kişi sayısını ve tarihi paylaşın; Belek'teki uygun otelleri ve salon düzenlerini birlikte karşılaştıralım.",
    sections: [
      {
        h2: "Belek'teki toplantı salonları",
        paras: ["Tabloda Belek'teki otellerde doğrulanmış toplantı salonları ve düzen bazlı kapasiteleri yer alır."],
        hotelBlock: { mode: "halls", filter: { region: "belek" }, layouts: ["theatre", "classroom", "banquet"] },
      },
      {
        h2: "Resort'ta toplantının avantajları",
        paras: [],
        bullets: [
          "Katılımcılar aynı yerleşkede kalır: transfer ve gecikme sorunu yoktur",
          "Oturum araları için bahçe, plaj veya golf alanı: odak ve enerji dengesi",
          "Akşam yemeği ve sosyal program aynı resort'ta, kolay lojistik",
          "Yüksek servis standardı ve gizlilik",
        ],
      },
      {
        h2: "Resort'ta toplantının dikkat noktaları",
        paras: [
          "Yüksek sezonda otel çok kalabalık olabilir ve toplantı salonuna ulaşım, yemek alanlarında yoğunluk yaşanabilir. Sakin dönemlerde (ilkbahar başı, sonbahar, kış) toplantı çok daha odaklı geçer. Ayrıca yiyecek-içecek ve ses kuralları otele bağlıdır.",
        ],
      },
      {
        h2: "Toplantıyı etkinlikle birleştirmek",
        paras: [
          "Belek'te toplantıyı golf kliniği, plaj turnuvası veya bahçede atölyeyle birleştirmek yaygındır. Bu tür günler için [Belek team building](/belek/team-building) ve [Belek corporate retreat](/belek/corporate-retreat) sayfalarına bakabilirsiniz.",
        ],
      },
    ],
    faq: [
      {
        q: "Belek'te küçük bir yönetim toplantısı için hangi otel uygun?",
        a: "Küçük ve odaklı toplantılar için daha az kalabalık dönemler ve butik/premium yapılar tercih edilir; seçenekler için [Kempinski The Dome Belek](/rehberler/kempinski-the-dome-belek-kurumsal-etkinlik) ve [Maxx Royal Belek](/rehberler/maxx-royal-belek-kurumsal-etkinlik) profillerine bakın.",
      },
      SOURCE_FAQ,
      {
        q: "Belek mi, Antalya mı seçmeliyim?",
        a: "Odaklı, çok günlü ve tek yerleşkeli toplantılar için Belek; şehir programıyla kombine kısa toplantılar için Antalya. Ayrıntılı karşılaştırma için [Antalya mı, Belek mi?](/rehberler/antalya-mi-belek-mi).",
      },
    ],
    primaryService: {
      href: "/belek/kurumsal-etkinlik-mekanlari",
      label: "Belek etkinlik mekânları hizmeti",
      pitch: "Toplantınızın formatını ve tarihini paylaşın; Belek'te uygun otel ve salon düzenlerini karşılaştırmalı sunalım.",
    },
    related: ["/belek/kurumsal-etkinlik-mekanlari", "/belek/corporate-retreat", "/belek/kurumsal-etkinlik", "/kurumsal-etkinlik-mekanlari"],
    relatedGuides: ["antalya-toplanti-otelleri", "belek-kongre-otelleri", "belek-kurumsal-etkinlik-mekanlari"],
  },

  /* ================================================================== */
  /* 7 — Antalya bayi toplantısı otelleri */
  {
    slug: "antalya-bayi-toplantisi-otelleri",
    category: "Oteller",
    kind: "capacity",
    minVerifiedHotels: 3,
    intent: "commercial-investigation",
    metaTitle: "Antalya'da Bayi Toplantısı Yapılabilecek En İyi Oteller",
    metaDescription:
      "Antalya ve Belek'te bayi toplantısı yapılabilecek oteller: tiyatro ve banket kapasiteleri, bayi toplantısı için otel seçim ölçütleri, ödül gecesi ve konaklama planı.",
    h1: "Antalya'da Bayi Toplantısı Yapılabilecek En İyi Oteller",
    lead:
      "Bayi toplantısı için otel seçerken üç şey birlikte aranır: genel oturumu taşıyan salon, ödül gecesini taşıyan banket kapasitesi ve katılımcıların tamamını barındıran konaklama. Aşağıdaki tablo bu üçlü için doğrulanmış verileri gösterir.",
    heroMedia: "guide-dealer-hotels",
    published: PUB,
    defaultEventType: "toplanti",
    quoteDefaults: { location: "Belek" },
    ctaHeading: "Bayi toplantınız için otel, salon ve operasyon teklifini alın",
    ctaText: "Bayi sayınızı ve tarihinizi paylaşın; salon, konaklama, transfer, ödül gecesi ve teknik prodüksiyonu tek planda toplayalım.",
    sections: [
      {
        h2: "Bayi toplantısına uygun oteller",
        paras: ["Tabloda bayi toplantısı için uygun görülen oteller; tiyatro (genel oturum) ve banket (ödül/yemek) kapasiteleriyle listelenir."],
        hotelBlock: { mode: "halls", filter: { tag: "bayi-toplantisi", minCapacity: { layout: "theatre", n: 200 } }, layouts: ["theatre", "banquet"] },
      },
      {
        h2: "Bayi toplantısı için otel seçim ölçütleri",
        paras: [],
        bullets: [
          "**Genel oturum salonu:** Bütün bayileri tek oturumda toplayabilecek tiyatro kapasitesi",
          "**Ödül gecesi:** Aynı kişi sayısını oturtabilecek banket kapasitesi veya ek alan",
          "**Ürün deneyim alanı:** Fuaye veya yan salon; ürün sergisi ve demo için",
          "**Paralel atölye odaları:** Bölge veya ürün grubuna göre oturumlar için",
          "**Konaklama kapasitesi:** Tüm katılımcıların aynı otelde kalabilmesi",
          "**Transfer ve havalimanı mesafesi:** Uçuş saatlerine dağınık varışlar için",
        ],
      },
      {
        h2: "Tiyatro ve banket kapasitesi arasındaki fark",
        paras: [
          "Bayi toplantılarında en sık yapılan planlama hatası, genel oturumun (tiyatro) kapasitesine bakıp ödül gecesinin (banket) kapasitesini unutmaktır. Yayımlanmış verilerde banket kapasitesi, tiyatro kapasitesinin yaklaşık beşte biri ile üçte biri kadar daha düşüktür; örneğin tiyatroda 700 kişiyi alan bir salon banket düzeninde yaklaşık 500–550 kişiye düşebilir. Geri kalan bayiler için ikinci bir salon veya açık alan gerekir.",
          "Programın tamamını nasıl kurabileceğinizi [bayi toplantısı nasıl organize edilir](/rehberler/bayi-toplantisi-nasil-organize-edilir) rehberinde anlattık.",
        ],
      },
      {
        h2: "Belek mi, şehir mi?",
        paras: [
          "Belek'te salon, konaklama ve gala tek yerleşkede olduğu için lojistik sadedir; bayilerin tamamı aynı otelde kalır. Lara'daki oteller ise şehir programı eklemeyi kolaylaştırır. Belek seçenekleri için [Belek bayi toplantısı otelleri](/rehberler/belek-bayi-toplantisi-otelleri) rehberine bakın.",
        ],
      },
    ],
    faq: [
      {
        q: "Bayi toplantısı için en az kaç ay önce otel ayırtmalıyım?",
        a: "Yüksek sezonda 4–6 ay, omuz sezonlarında 3 ay genellikle güvenlidir. Büyük bayi toplantılarında oda blokajı için erken karar önemlidir.",
      },
      SOURCE_FAQ,
      {
        q: "Bayi toplantısında ödül gecesi aynı otelde yapılabilir mi?",
        a: "Genellikle evet; banket kapasitesi katılımcı sayısına yetmiyorsa plaj veya bahçe gibi ek alanlar kullanılır. Ayrıntı için [gala organizasyonu](/gala-organizasyonu) sayfasına bakın.",
      },
    ],
    primaryService: {
      href: "/bayi-toplantisi-organizasyonu",
      label: "Bayi toplantısı organizasyonu",
      pitch: "Bayi sayınızı ve tarihinizi paylaşın; otel, salon, konaklama, transfer ve ödül gecesini tek planda yönetelim.",
    },
    related: ["/bayi-toplantisi-organizasyonu", "/gala-organizasyonu", "/kongre-konferans-organizasyonu", "/etkinlik-personeli"],
    relatedGuides: ["belek-bayi-toplantisi-otelleri", "bayi-toplantisi-nasil-organize-edilir", "antalya-kongre-otelleri"],
  },

  /* ================================================================== */
  /* 8 — Belek bayi toplantısı otelleri */
  {
    slug: "belek-bayi-toplantisi-otelleri",
    category: "Oteller",
    kind: "capacity",
    minVerifiedHotels: 3,
    intent: "commercial-investigation",
    metaTitle: "Belek'te Bayi Toplantısı Yapılabilecek Oteller ve Salonlar",
    metaDescription:
      "Belek'te bayi toplantısı için oteller: genel oturum ve ödül gecesi kapasiteleri, resort'ta bayi toplantısının avantajları, konaklama ve transfer planı.",
    h1: "Belek'te Bayi Toplantısı Yapılabilecek Oteller ve Salonlar",
    lead:
      "Belek, bayi toplantısı için tek yerleşkede çözüm sunar: genel oturum, ürün alanı, ödül gecesi ve konaklama aynı resort'ta toplanır. Bu rehber Belek'teki uygun otelleri kaynaklı kapasite verileriyle karşılaştırır.",
    heroMedia: "guide-dealer-belek",
    published: PUB,
    defaultEventType: "toplanti",
    quoteDefaults: { location: "Belek" },
    ctaHeading: "Belek bayi toplantınız için teklif alın",
    ctaText: "Bayi sayınızı ve tarihinizi paylaşın; Belek'te otel, salon, transfer, ödül gecesi ve teknik prodüksiyonu birlikte planlayalım.",
    sections: [
      {
        h2: "Belek'te bayi toplantısı otelleri",
        paras: ["Tabloda Belek'te bayi toplantısına uygun görülen otellerin doğrulanmış salonları listelenir."],
        hotelBlock: { mode: "halls", filter: { region: "belek", tag: "bayi-toplantisi", minCapacity: { layout: "theatre", n: 200 } }, layouts: ["theatre", "banquet"] },
      },
      {
        h2: "Belek'te bayi toplantısının avantajları",
        paras: [],
        bullets: [
          "Bayilerin tamamı aynı resort'ta kalır; ortak yemek ve ağ kurma doğal gerçekleşir",
          "Toplantı sonrası plaj, golf veya bahçe aktivitesi eklemek kolaydır",
          "Ödül gecesi plajda veya bahçede kurulabilir",
          "Havalimanına kısa transferle toplu karşılama planlanabilir",
        ],
      },
      {
        h2: "Program akışı örneği",
        paras: [],
        table: {
          head: ["Zaman", "Gün 1", "Gün 2"],
          rows: [
            ["Sabah", "Kayıt, açılış, strateji sunumu", "Paralel ürün/satış atölyeleri"],
            ["Öğleden sonra", "Yeni ürün tanıtımı, ürün alanı", "Kapanış ve eylem planı"],
            ["Akşam", "Ödül töreni ve gala", "Serbest zaman veya golf/plaj aktivitesi"],
          ],
        },
      },
      {
        h2: "Seçerken sorulacak sorular",
        paras: [],
        bullets: [
          "Genel oturum ve ödül gecesi aynı salonda yapılabiliyor mu?",
          "Ürün sergisi için fuaye veya yan salon var mı?",
          "Oda blokajı ve serbest bırakma tarihi nedir?",
          "Dış prodüksiyon ve çeviri kabini kabul ediliyor mu?",
          "Aynı dönemde otelde başka büyük grup var mı?",
        ],
      },
      {
        h2: "Ek kaynaklar",
        paras: [
          "Genel bayi toplantısı planlaması için [bayi toplantısı nasıl organize edilir](/rehberler/bayi-toplantisi-nasil-organize-edilir) rehberine, Antalya geneli için [Antalya bayi toplantısı otelleri](/rehberler/antalya-bayi-toplantisi-otelleri) rehberine bakın.",
        ],
      },
    ],
    faq: [
      {
        q: "Belek'te bayi toplantısı için hangi sezon uygun?",
        a: "Sakin ve uygun maliyetli koşullar için ilkbahar başı ve sonbahar; yaz plaj ve gala için güçlü ancak yoğundur. Bayilerin satış sezonuyla çakışmayan dönemi seçmek önemlidir.",
      },
      SOURCE_FAQ,
      {
        q: "Bayi toplantısında golf etkinliği eklenebilir mi?",
        a: "Evet. Birçok Belek resort'unda golf sahası bulunur; kliniği veya turnuvayı toplantı sonrasına eklemek yaygındır. Bkz. [Belek team building](/belek/team-building).",
      },
    ],
    primaryService: {
      href: "/bayi-toplantisi-organizasyonu",
      label: "Bayi toplantısı organizasyonu",
      pitch: "Belek'te bayi toplantınızı otel seçiminden ödül gecesine kadar tek ekiple planlayalım.",
    },
    related: ["/bayi-toplantisi-organizasyonu", "/belek/kurumsal-etkinlik-mekanlari", "/belek/gala-organizasyonu", "/belek/incentive"],
    relatedGuides: ["antalya-bayi-toplantisi-otelleri", "belek-kongre-otelleri", "bayi-toplantisi-nasil-organize-edilir"],
  },

  /* ================================================================== */
  /* 9 — Antalya gala mekanları */
  {
    slug: "antalya-gala-mekanlari",
    category: "Destinasyon",
    kind: "capacity",
    minVerifiedHotels: 3,
    intent: "commercial-investigation",
    metaTitle: "Antalya Gala Mekânları: Otel Salonları, Plaj ve Avlular",
    metaDescription:
      "Antalya gala mekânları: otel balo salonlarının banket ve kokteyl kapasiteleri, plaj, beach club ve tarihî avlu seçenekleri; gala mekânı seçerken kontrol listesi.",
    h1: "Antalya Gala Mekânları: Otel Salonları, Plaj ve Avlular",
    lead:
      "Gala mekânı seçimi iki soruyla başlar: oturmalı mı, ayakta mı? Aynı salon banket düzeninde ayakta kokteyle göre belirgin daha az kişiyi taşır. Bu rehber Antalya'daki otel balo salonlarını ve alternatif açık hava mekânlarını karşılaştırır.",
    heroMedia: "guide-gala-venues",
    published: PUB,
    defaultEventType: "gala",
    quoteDefaults: { location: "Antalya (şehir merkezi)" },
    ctaHeading: "Gala geceniz için mekân, prodüksiyon ve servis teklifini alın",
    ctaText: "Davetli sayınızı ve formatı paylaşın; uygun mekânları, sahne-ışık-ses prodüksiyonunu ve servis akışını tek planda hazırlayalım.",
    sections: [
      {
        h2: "Otel balo salonlarının gala kapasiteleri",
        paras: ["Tabloda gala etkinlikleri için uygun görülen otellerin banket (oturmalı) ve kokteyl (ayakta) kapasiteleri yer alır."],
        hotelBlock: { mode: "halls", filter: { tag: "gala", minCapacity: { layout: "banquet", n: 300 } }, layouts: ["banquet", "cocktail", "theatre"] },
      },
      {
        h2: "Gala için mekân tipleri",
        paras: [],
        bullets: [
          "**Otel balo salonu:** Hava bağımsız, teknik altyapı hazır; atmosfer için dekor gerekir.",
          "**Plaj ve beach club:** Gün batımı ve atmosfer; rüzgâr, ses sınırı ve yedek plan.",
          "**Tarihî avlu:** Özgün ve fotoğrafik; kapasite sınırlı, yük taşıma zorlu.",
          "**Marina ve tekne:** Farklı deneyim; küçük gruplar için.",
        ],
      },
      {
        h2: "Gala planlamasında sık yapılan hatalar",
        paras: [],
        bullets: [
          "Banket yerine kokteyl kapasitesine bakarak mekân seçmek",
          "Sahne ve ışık için tavan yüksekliğini ve kolonları kontrol etmemek",
          "Ses ve kapanış saatini sözleşmeden önce sormamak",
          "Açık hava için kapalı alan alternatifi hazırlamamak",
          "Servis personeli sayısını mekân yapısına göre planlamamak",
        ],
      },
      {
        h2: "Gala prodüksiyonu ve servisi",
        paras: [
          "Gala'nın başarısı mekân kadar prodüksiyona ve servis akışına bağlıdır. Sahne, ışık, ses, program akışı ve ödül töreni yönetimi için [gala organizasyonu](/gala-organizasyonu) sayfasına, Belek özelinde [Belek gala mekânları](/rehberler/belek-gala-mekanlari) rehberine bakın.",
        ],
      },
    ],
    faq: [
      {
        q: "Plajda gala için hangi riskler var?",
        a: "Rüzgâr, zemin, ses sınırı ve hava durumu ana risklerdir. Kapalı alan alternatifi ve karar saati sözleşme aşamasında planlanır. Ayrıntılar için [Belek gala organizasyonu](/belek/gala-organizasyonu) sayfasına bakın.",
      },
      SOURCE_FAQ,
      {
        q: "Gala için kaç ay önce planlamaya başlamalıyım?",
        a: "Yüksek sezonda 4–6 ay, omuz sezonlarında 2–3 ay genellikle uygundur. Prodüksiyonlu geceler için erken karar mekân ve tedarikçi kapasitesi açısından avantaj sağlar.",
      },
    ],
    primaryService: {
      href: "/gala-organizasyonu",
      label: "Gala organizasyonu",
      pitch: "Davetli sayınızı ve formatı paylaşın; mekândan sahne prodüksiyonuna ve servise kadar gala'nızı tek noktadan planlayalım.",
    },
    related: ["/gala-organizasyonu", "/belek/gala-organizasyonu", "/antalya/kurumsal-etkinlik-mekanlari", "/etkinlik-personeli"],
    relatedGuides: ["belek-gala-mekanlari", "antalya-kurumsal-etkinlik-mekanlari", "500-kisilik-etkinlik-mekanlari-antalya"],
  },

  /* ================================================================== */
  /* 10 — Belek gala mekanları */
  {
    slug: "belek-gala-mekanlari",
    category: "Destinasyon",
    kind: "capacity",
    minVerifiedHotels: 3,
    intent: "commercial-investigation",
    metaTitle: "Belek Gala Mekânları: Resort Balo Salonları ve Plaj Alanları",
    metaDescription:
      "Belek gala mekânları: resort balo salonlarının banket ve kokteyl kapasiteleri, plaj ve bahçe gala seçenekleri, ses/saat kuralları ve gala mekânı seçim kontrol listesi.",
    h1: "Belek Gala Mekânları: Resort Balo Salonları ve Plaj Alanları",
    lead:
      "Belek'te gala çoğunlukla bir resort'un balo salonunda, bahçesinde veya plajında kurulur. Seçimde salonun banket kapasitesi kadar resort'un ses, saat ve dış tedarikçi kuralları da belirleyicidir.",
    heroMedia: "guide-gala-belek",
    published: PUB,
    defaultEventType: "gala",
    quoteDefaults: { location: "Belek" },
    ctaHeading: "Belek gala geceniz için mekân ve prodüksiyon teklifi alın",
    ctaText: "Davetli sayınızı ve formatı paylaşın; Belek'te uygun resort alanlarını, sahne prodüksiyonunu ve servis akışını birlikte planlayalım.",
    sections: [
      {
        h2: "Belek'te balo salonları",
        paras: ["Tabloda Belek'te gala için uygun görülen otellerin doğrulanmış salonları banket ve kokteyl kapasiteleriyle listelenir."],
        hotelBlock: { mode: "halls", filter: { region: "belek", tag: "gala", minCapacity: { layout: "banquet", n: 300 } }, layouts: ["banquet", "cocktail", "theatre"] },
      },
      {
        h2: "Plaj gala'sının koşulları",
        paras: [
          "Plajda gala, gün batımı ve atmosfer açısından en güçlü seçenektir; ancak zemin, rüzgâr ve ses sınırı açısından planlama gerektirir. Resort'lar çoğunlukla plaj alanı kullanımı için izin ve saat koşulu uygular; kapalı alan alternatifi her zaman hazır olmalıdır.",
          "Belek'in plaj gala kurulum süreci ve hava planı için [Belek gala organizasyonu](/belek/gala-organizasyonu) sayfasına bakın.",
        ],
      },
      {
        h2: "Resort gala'sında üç kural",
        paras: [],
        table: {
          head: ["Konu", "Neden önemli?", "Ne sormalı?"],
          rows: [
            ["Ses ve saat", "Diğer misafirler için sınır", "Müzik kapanış saati nedir?"],
            ["Yiyecek-içecek", "Gala menüsü genelde otel mutfağından", "Menü seçenekleri ve kişi başı fiyat?"],
            ["Prodüksiyon girişi", "Yük giriş saati ve elektrik", "Dış prodüksiyon ve jeneratör kuralı?"],
          ],
        },
      },
      {
        h2: "Gala için doğru alan",
        paras: [],
        bullets: [
          "**100–300 kişi, atmosfer önemli:** Plaj veya bahçe + kapalı alan alternatifi",
          "**300–800 kişi, ödül töreni:** Balo salonu banket düzeni",
          "**800+ kişi:** Birden fazla salon veya salon + açık alan kombinasyonu",
        ],
      },
    ],
    faq: [
      {
        q: "Belek'te plaj gala'sı yaz dışında yapılabilir mi?",
        a: "Omuz sezonlarında hava ılıman olduğu için yapılabilir; ancak akşam serinliği ve yağış ihtimali nedeniyle kapalı alan alternatifi ve ısıtma planı yapılmalıdır.",
      },
      SOURCE_FAQ,
      {
        q: "Gala için dış sanatçı ve DJ getirilebilir mi?",
        a: "Çoğu resort izin verir; ancak giriş saati, ses sınırı ve sigorta şartları otelden otele değişir. Bu bilgiyi mekân seçiminde ilk sorulan konulardan biri olarak ele alıyoruz.",
      },
    ],
    primaryService: {
      href: "/belek/gala-organizasyonu",
      label: "Belek gala organizasyonu",
      pitch: "Belek'te gala'nızı mekân seçiminden prodüksiyon ve servise kadar tek noktadan planlayalım.",
    },
    related: ["/belek/gala-organizasyonu", "/gala-organizasyonu", "/belek/kurumsal-etkinlik-mekanlari", "/belek/incentive"],
    relatedGuides: ["antalya-gala-mekanlari", "belek-kurumsal-etkinlik-mekanlari", "belek-bayi-toplantisi-otelleri"],
  },

  /* ================================================================== */
  /* 11 — 500 kişilik */
  {
    slug: "500-kisilik-etkinlik-mekanlari-antalya",
    category: "Kapasite & Etkinlik Türü",
    kind: "capacity",
    minVerifiedHotels: 3,
    intent: "commercial-investigation",
    metaTitle: "Antalya'da 500 Kişilik Etkinlik ve Toplantı Salonları",
    metaDescription:
      "Antalya ve Belek'te 500 kişilik toplantı ve etkinlik salonları: tek salonda en az 500 kişilik tiyatro kapasitesi doğrulanmış oteller, 500 kişilik banket gerçeği ve seçim rehberi.",
    h1: "Antalya'da 500 Kişilik Etkinlik ve Toplantı Salonları",
    lead:
      "500 kişilik bir etkinlik için arama yapan biri çoğunlukla brief aşamasındadır: hangi otel, hangi salon, hangi düzen? Aşağıdaki tablo, tek salonda en az 500 kişilik tiyatro düzeni kaynaklı olarak doğrulanmış salonları listeler.",
    heroMedia: "guide-capacity-500",
    published: PUB,
    defaultEventType: "toplanti",
    quoteDefaults: { participants: 500 },
    ctaHeading: "500 kişilik etkinliğiniz için otel, salon, teknik prodüksiyon ve operasyon teklifini tek noktadan alın",
    ctaText: "Tarih ve formatı paylaşın; 500 kişilik düzen için uygun otelleri karşılaştırıp salon kapasitesini yazılı teyit edelim.",
    sections: [
      {
        h2: "500 kişiyi tek salonda ağırlayan oteller",
        paras: ["Tabloda tiyatro düzeninde en az 500 kişilik doğrulanmış salonlar yer alır. Aynı salonların banket (oturmalı yemek) kapasitesi tiyatro kapasitesinden düşüktür; banket sütununa ayrıca bakın."],
        hotelBlock: { mode: "halls", filter: { minCapacity: { layout: "theatre", n: 500 } }, layouts: ["theatre", "banquet", "cocktail"] },
      },
      {
        h2: "500 kişilik etkinlik: düzene göre gerçek",
        paras: [
          "500 kişilik bir sunum tiyatro düzeninde yapılabilir; ancak aynı grup oturmalı yemekte genellikle daha geniş alan ister. Programınız hem oturum hem yemek içeriyorsa banket kapasitesini ayrı kontrol edin; yetmiyorsa ek salon, plaj veya bahçe alanı planlayın.",
        ],
        table: {
          head: ["Format", "500 kişi için ne gerekir?", "Not"],
          rows: [
            ["Konferans / sunum", "Tiyatro düzeninde ≥ 500 kişilik salon", "Tablodaki oteller bu ölçütü sağlar"],
            ["Oturmalı gala yemeği", "Banket düzeninde ≥ 500 kişilik salon veya ek alan", "Banket kapasitesi tabloda ayrı sütunda"],
            ["Ayakta kokteyl", "Kokteyl düzeninde ≥ 500 kişi", "Fuaye ve bahçe ile birleştirilebilir"],
            ["Workshop (paralel oturum)", "Ana salon + 3–4 orta oda", "Oda sayısı otelden teyit edilir"],
          ],
        },
      },
      {
        h2: "500 kişilik etkinlikte bütçe ve operasyon",
        paras: [
          "Bu ölçekte sahne, ışık, ses, kayıt ve transfer ayrı kalemler olarak planlanır; servis personeli ve host/hostes ihtiyacı da belirgin artar. Bütçe çerçevesi için [kurumsal etkinlik bütçesi nasıl hazırlanır](/rehberler/kurumsal-etkinlik-butcesi-nasil-hazirlanir) rehberine bakın.",
        ],
      },
      {
        h2: "Belek mi, Antalya mı?",
        paras: [
          "500 kişilik gruplarda Belek resort'ları konaklama + toplantı + gala'yı tek yerde toplar. Şehir merkezinde ise 500 kişiyi tek çatı altında ağırlayacak otel sayısı sınırlıdır. Karşılaştırma için [Antalya mı, Belek mi?](/rehberler/antalya-mi-belek-mi) rehberine bakın.",
        ],
      },
    ],
    faq: [
      {
        q: "500 kişilik gala yemeği için hangi salon yeter?",
        a: "Oturmalı yemekte banket düzeni kapasitesine bakılmalıdır; tablodaki banket sütunu bu bilgiyi verir. Banket kapasitesi 500'ün altındaysa ek alan veya ikinci salon gerekir.",
      },
      SOURCE_FAQ,
      {
        q: "500 kişilik etkinlik için kaç ay önceden başlamalıyım?",
        a: "Yüksek sezonda 4–6 ay, omuz sezonlarında 3 ay genellikle güvenlidir; salon ve oda blokajı bu ölçekte çabuk dolar.",
      },
    ],
    primaryService: {
      href: "/kurumsal-etkinlik-organizasyonu",
      label: "Kurumsal etkinlik organizasyonu",
      pitch: "500 kişilik etkinliğiniz için otel, salon, teknik prodüksiyon ve operasyonu tek noktadan planlayalım.",
    },
    related: ["/kurumsal-etkinlik-organizasyonu", "/bayi-toplantisi-organizasyonu", "/gala-organizasyonu", "/kongre-konferans-organizasyonu"],
    relatedGuides: ["1000-kisilik-kongre-otelleri-antalya", "antalya-kongre-otelleri", "antalya-bayi-toplantisi-otelleri"],
  },

  /* ================================================================== */
  /* 12 — 1000 kişilik */
  {
    slug: "1000-kisilik-kongre-otelleri-antalya",
    category: "Kapasite & Etkinlik Türü",
    kind: "capacity",
    minVerifiedHotels: 3,
    intent: "commercial-investigation",
    metaTitle: "Antalya'da 1.000 Kişilik Kongre Otelleri ve Salonları",
    metaDescription:
      "Antalya ve Belek'te 1.000 kişilik kongre salonları: tek salonda 1.000 ve üzeri tiyatro kapasitesi doğrulanmış oteller, ölçek riskleri ve 1.000 kişilik kongre planlama rehberi.",
    h1: "Antalya'da 1.000 Kişilik Kongre Otelleri ve Salonları",
    lead:
      "1.000 kişilik kongre, otel seçimi açısından bir eşiktir: yalnızca sınırlı sayıda otel bu ölçeği tek salonda karşılar. Aşağıdaki tablo, tiyatro düzeninde en az 1.000 kişilik kapasitesi kaynaklı olarak doğrulanmış salonları listeler.",
    heroMedia: "guide-capacity-1000",
    published: PUB,
    defaultEventType: "kongre",
    quoteDefaults: { participants: 1000, location: "Belek" },
    ctaHeading: "1.000 kişilik kongreniz için otel, salon ve operasyon teklifini tek noktadan alın",
    ctaText: "Tarihinizi paylaşın; 1.000 kişilik düzen için uygun otelleri karşılaştıralım, salon kapasitesini yazılı teyit edelim ve kayıt-teknik-operasyonu birlikte planlayalım.",
    sections: [
      {
        h2: "1.000 kişilik tek salonlar",
        paras: ["Tabloda tiyatro düzeninde en az 1.000 kişilik doğrulanmış salonlar yer alır."],
        hotelBlock: { mode: "halls", filter: { minCapacity: { layout: "theatre", n: 1000 } }, layouts: ["theatre", "banquet", "cocktail"] },
      },
      {
        h2: "1.000 kişilikte neler değişir?",
        paras: [],
        bullets: [
          "**Kayıt akışı:** Tek masa yetmez; ön kayıt ve çoklu kayıt masası gerekir",
          "**Fuaye:** Kahve molasında 1.000 kişinin akışı için geniş fuaye şart",
          "**Çıkış ve güvenlik:** Acil çıkış kapasitesi ve güvenlik planı daha sıkı",
          "**Teknik:** Ekran sayısı, ses dağılımı ve yayın kalitesi",
          "**Banket:** Gala yemeği için ek salon veya açık alan",
          "**Transfer:** Çok sayıda araç ve vardiyalı transfer planı",
        ],
      },
      {
        h2: "Düzen farkı: tiyatro ve banket",
        paras: [
          "Yayımlanmış verilerde banket kapasitesi tiyatro kapasitesinden yaklaşık beşte bir ile üçte bir oranında daha düşüktür; yani tiyatroda 1.000 kişiyi alan bir salon oturmalı yemekte çoğunlukla 700–800 kişiye iner. Kalan katılımcılar için ikinci bir salon veya açık alan gerekir; bu fark gala planının en kritik noktasıdır.",
        ],
      },
      {
        h2: "Alternatif: iki salonlu kurgu",
        paras: [
          "Tek bir 1.000 kişilik salon yerine iki salonu birleştirmek veya paralel oturumlarla programı bölmek, bazı otellerde esneklik yaratır. Bu seçenek salonların bölme ve birleştirme koşullarının yazılı teyidini gerektirir.",
        ],
      },
      {
        h2: "Operasyon ve bütçe",
        paras: [
          "Bu ölçekte kongre, bir operasyon projesidir: kayıt, çeviri, teknik, transfer ve personel birlikte planlanmalıdır. Bkz. [kongre ve konferans organizasyonu](/kongre-konferans-organizasyonu) ve [bütçe nasıl hazırlanır](/rehberler/kurumsal-etkinlik-butcesi-nasil-hazirlanir).",
        ],
      },
    ],
    faq: [
      {
        q: "2.000 kişilik kongre için salon var mı?",
        a: "Tek salonda 2.000 kişilik tiyatro düzenini kaynaklı olarak doğrulayabildiğimiz otel sayısı sınırlıdır; tek salonda 2.000 kişilik düzen doğrulanan otel sayısı yeterli olduğunda ayrı bir rehber yayınlanacaktır. Bu ölçekte birden fazla salon veya birden fazla otel birlikte değerlendirilebilir.",
      },
      SOURCE_FAQ,
      {
        q: "1.000 kişilik kongre için en az kaç ay önce planlamalıyım?",
        a: "Yüksek sezonda 6–9 ay, omuz sezonlarında 4–6 ay önceden başlamak güvenlidir; bu ölçekte salon, oda ve tedarikçi kapasitesi çok erken dolar.",
      },
    ],
    primaryService: {
      href: "/kongre-konferans-organizasyonu",
      label: "Kongre ve konferans organizasyonu",
      pitch: "1.000 kişilik kongreniz için otel, salon, kayıt, teknik prodüksiyon ve transferi tek noktadan planlayalım.",
    },
    related: ["/kongre-konferans-organizasyonu", "/belek/kurumsal-etkinlik-mekanlari", "/etkinlik-personeli", "/gala-organizasyonu"],
    relatedGuides: ["antalya-kongre-otelleri", "500-kisilik-etkinlik-mekanlari-antalya", "belek-kongre-otelleri"],
  },

  /* ================================================================== */
  /* 13 — 2000 kişilik (veri kapısı: yeterli doğrulanmış otel yok → yayınlanmaz) */
  {
    slug: "2000-kisilik-kongre-salonlari-antalya",
    category: "Kapasite & Etkinlik Türü",
    kind: "capacity",
    minVerifiedHotels: 3,
    intent: "commercial-investigation",
    metaTitle: "Antalya'da 2.000 Kişilik Kongre Salonları ve Otelleri",
    metaDescription:
      "Antalya ve Belek'te 2.000 kişilik kongre salonları: tek salonda 2.000 ve üzeri tiyatro kapasitesi doğrulanmış oteller, çok salonlu kurgular ve ölçek planlaması.",
    h1: "Antalya'da 2.000 Kişilik Kongre Salonları ve Otelleri",
    lead:
      "2.000 kişilik kongre, Antalya'da yalnızca birkaç büyük kongre merkezi ve resort'un konuşabildiği bir ölçektir. Bu rehber, tek salonda 2.000 kişilik tiyatro kapasitesi doğrulanan oteller için hazırlandı.",
    heroMedia: "guide-capacity-2000",
    published: PUB,
    defaultEventType: "kongre",
    quoteDefaults: { participants: 2000, location: "Belek" },
    ctaHeading: "2.000 kişilik kongreniz için teklif alın",
    ctaText: "Tarihinizi paylaşın; bu ölçek için uygun otel ve salon kombinasyonlarını yazılı teyitle birlikte planlayalım.",
    sections: [
      {
        h2: "2.000 kişilik tek salonlar",
        paras: ["Tabloda tiyatro düzeninde en az 2.000 kişilik doğrulanmış salonlar yer alır."],
        hotelBlock: { mode: "halls", filter: { minCapacity: { layout: "theatre", n: 2000 } }, layouts: ["theatre", "banquet", "cocktail"] },
      },
      {
        h2: "2.000 kişilik kongrede planlama",
        paras: ["Bu ölçekte kongre, çok salonlu ve çok otelli bir operasyondur; kayıt, güvenlik, çeviri, teknik ve transfer ayrı ekiplerle yönetilir."],
      },
    ],
    faq: [SOURCE_FAQ, { q: "2.000 kişilik kongre için kaç ay önce başlanmalı?", a: "Yüksek sezonda 9–12 ay önce başlamak güvenlidir; salon, oda ve tedarikçi kapasitesi çok erken dolar." }],
    primaryService: {
      href: "/kongre-konferans-organizasyonu",
      label: "Kongre ve konferans organizasyonu",
      pitch: "2.000 kişilik kongreniz için otel ve salon kombinasyonlarını ve operasyonu birlikte planlayalım.",
    },
    related: ["/kongre-konferans-organizasyonu", "/kurumsal-etkinlik-mekanlari", "/etkinlik-personeli"],
    relatedGuides: ["1000-kisilik-kongre-otelleri-antalya", "antalya-kongre-otelleri", "belek-kongre-otelleri"],
  },

  /* ================================================================== */
  /* 14 — Belek ürün lansmanı otelleri */
  {
    slug: "belek-urun-lansmani-otelleri",
    category: "Kapasite & Etkinlik Türü",
    kind: "capacity",
    minVerifiedHotels: 3,
    intent: "commercial-investigation",
    metaTitle: "Belek'te Ürün Lansmanı İçin Oteller ve Salonlar",
    metaDescription:
      "Belek'te ürün lansmanı için oteller: balo salonu kapasiteleri (tiyatro ve kokteyl), lansman akışı, sahne ve fuaye gereksinimleri ve lansman mekânı seçim ölçütleri.",
    h1: "Belek'te Ürün Lansmanı İçin Oteller ve Salonlar",
    lead:
      "Ürün lansmanı mekânından üç şey beklenir: etkileyici bir giriş (fuaye), sahne kurulabilen bir salon ve davetli akışını taşıyan kokteyl alanı. Aşağıda Belek'te lansman için uygun görülen otellerin doğrulanmış salonları listelenir.",
    heroMedia: "guide-launch-hotels",
    published: PUB,
    defaultEventType: "lansman",
    quoteDefaults: { location: "Belek" },
    ctaHeading: "Lansmanınız için mekân, sahne ve operasyon teklifini alın",
    ctaText: "Davetli sayınızı ve lansman formatını paylaşın; Belek'te uygun mekânları, sahne-içerik prodüksiyonunu ve davetli yönetimini birlikte planlayalım.",
    sections: [
      {
        h2: "Lansmana uygun salonlar",
        paras: ["Tabloda lansman için uygun görülen oteller; tiyatro (sunum) ve kokteyl (karşılama/ayakta) kapasiteleriyle listelenir."],
        hotelBlock: { mode: "halls", filter: { region: "belek", tag: "urun-lansmani" }, layouts: ["theatre", "cocktail", "banquet"] },
      },
      {
        h2: "Lansman salonundan beklentiler",
        paras: [],
        bullets: [
          "Tavan yüksekliği ve kolonsuz alan: sahne, LED ve ışık için",
          "Karartma imkânı: reveal anı için salonun ışıktan yalıtılması",
          "Fuaye: karşılama, ürün deneyim alanı ve basın köşesi",
          "Yük giriş yolu: araç, ürün ve sahne ekipmanı için",
          "Ayrı bir arka alan: hazırlık, konuşmacı ve basın için",
        ],
      },
      {
        h2: "Lansmanı mekâna göre kurgulamak",
        paras: [
          "Lansman, mekânın bir fonu değil, anlatının parçası olmalıdır. Çok büyük bir balo salonunda 150 davetli kaybolur; bölünmüş bir alan ve fuaye ile atmosfer kontrol edilebilir. Lansman akışı ve takvimi için [lansman organizasyonu](/lansman-organizasyonu) sayfasına bakın.",
        ],
      },
      {
        h2: "Lansmandan sonra",
        paras: [
          "Lansman akşamı plajda veya bahçede kokteyl, ardından gala yemeği ile devam edebilir. Gece programı için [Belek gala mekânları](/rehberler/belek-gala-mekanlari) rehberine bakın.",
        ],
      },
    ],
    faq: [
      {
        q: "Lansman için en az kaç kişilik salon gerekir?",
        a: "Davetli sayınıza ve formatınıza bağlıdır; ayakta kokteyl formatında salonun kokteyl kapasitesi, oturmalı sunumda tiyatro kapasitesi belirleyicidir. Tabloda her iki düzen ayrı gösterilir.",
      },
      SOURCE_FAQ,
      {
        q: "Lansman için dış prodüksiyon getirilebilir mi?",
        a: "Çoğu resort izin verir; yük giriş saati, elektrik ve ses sınırı gibi koşullar otelden otele değişir ve mekân seçiminde ilk netleştirilen konulardandır.",
      },
    ],
    primaryService: {
      href: "/lansman-organizasyonu",
      label: "Lansman organizasyonu",
      pitch: "Lansmanınızı mekân seçiminden sahne, içerik ve davetli yönetimine kadar tek ekiple planlayalım.",
    },
    related: ["/lansman-organizasyonu", "/belek/gala-organizasyonu", "/belek/kurumsal-etkinlik-mekanlari", "/etkinlik-personeli"],
    relatedGuides: ["belek-gala-mekanlari", "belek-kongre-otelleri", "belek-kurumsal-etkinlik-mekanlari"],
  },

  /* ================================================================== */
  /* 15 — Antalya MICE rehberi (pillar) */
  {
    slug: "antalya-mice-rehberi",
    category: "Destinasyon",
    kind: "hub",
    intent: "commercial-investigation",
    metaTitle: "Antalya MICE Rehberi: Kongre, Incentive, Toplantı ve Oteller",
    metaDescription:
      "Antalya ve Belek MICE rehberi: toplantı, incentive, kongre ve etkinlik bileşenleri, bölgelere göre otel seçenekleri, doğrulanmış salon kapasiteleri ve planlama yol haritası.",
    h1: "Antalya MICE Rehberi: Toplantı, Incentive, Kongre ve Etkinlik",
    lead:
      "MICE (Meetings, Incentives, Conferences, Exhibitions), toplantı, ödül seyahati, kongre ve sergi bileşenlerinin toplamıdır. Antalya ve Belek bu dört bileşen için de altyapı sunar. Bu pillar rehber, ilgili alt rehberlere ve doğrulanmış otel verilerine giriş noktasıdır.",
    heroMedia: "guide-mice",
    published: PUB,
    defaultEventType: "diger",
    quoteDefaults: { location: "Belek" },
    ctaHeading: "MICE programınız için otel, salon ve operasyon teklifini tek noktadan alın",
    ctaText: "Programınızın bileşenlerini (toplantı, incentive, kongre, gala) paylaşın; otel seçiminden saha operasyonuna kadar tek planda toplayalım.",
    sections: [
      {
        h2: "MICE'ın dört bileşeni ve Antalya karşılıkları",
        paras: [],
        table: {
          head: ["Bileşen", "Antalya / Belek'te karşılığı", "Başlangıç rehberi"],
          rows: [
            ["Meetings (toplantı)", "Resort ve şehir otellerinde toplantı salonları, bayi ve yönetim toplantıları", "[Antalya toplantı otelleri](/rehberler/antalya-toplanti-otelleri) · [Bayi toplantısı otelleri](/rehberler/antalya-bayi-toplantisi-otelleri)"],
            ["Incentives (ödül seyahati)", "Resort konforu, golf, plaj gala'sı, şehir ve doğa çıkışları", "[Incentive nedir?](/rehberler/incentive-organizasyonu-nedir) · [Belek incentive](/belek/incentive) · [Antalya incentive](/antalya/incentive)"],
            ["Conferences (kongre)", "Büyük salonlu kongre otelleri", "[Antalya kongre otelleri](/rehberler/antalya-kongre-otelleri) · [Belek kongre otelleri](/rehberler/belek-kongre-otelleri)"],
            ["Exhibitions (sergi)", "Fuar-kongre alanları ve geniş fuayeli oteller", "[Antalya etkinlik mekânları](/rehberler/antalya-kurumsal-etkinlik-mekanlari)"],
          ],
        },
      },
      {
        h2: "Otel seçeneklerine genel bakış",
        paras: ["Aşağıdaki tablo, kongre/toplantı otellerinde kaynağı doğrulanan en büyük salonları gösterir; her otelin profili için ismine tıklayın."],
        hotelBlock: { mode: "hotels", filter: {}, layouts: ["theatre", "banquet", "cocktail"] },
      },
      {
        h2: "Neden Antalya MICE için güçlü bir destinasyon?",
        paras: [],
        bullets: [
          "Antalya Havalimanı şehre ve Belek'e kısa transfer mesafesindedir; çok sayıda şehirden doğrudan uçuş seçeneği vardır.",
          "Belek'te kongre, konaklama, golf ve gala aynı yerleşkede kurulabilir.",
          "Şehir, tarih, deniz ve doğa tek programda birleştirilebilir.",
          "Etkinlik takvimi yalnızca yaz aylarına bağlı değildir; omuz sezonlar sakin ve uygun maliyetlidir.",
        ],
      },
      {
        h2: "Planlama yol haritası",
        paras: [],
        bullets: [
          "**Brief:** Hedef, kişi sayısı, tarih, bütçe çerçevesi",
          "**Mekân ve otel:** Format ve düzene göre kısa liste; kapasite teyidi",
          "**Program:** Toplantı, aktivite, gala ve serbest zaman dengesi",
          "**Operasyon:** Transfer, kayıt, teknik prodüksiyon ve personel",
          "**Uygulama:** Sahada yönetim ve yedek plan",
        ],
      },
      {
        h2: "Aktivite ve team building ile birleştirme",
        paras: [
          "MICE programlarının değerini çoğunlukla toplantı dışındaki deneyimler belirler. Belek'te golf ve plaj, Antalya'da şehir ve doğa seçenekleri için [team building](/team-building) ve [kurumsal outdoor aktiviteler](/kurumsal-outdoor-aktiviteler) sayfalarına bakın.",
        ],
      },
    ],
    faq: [
      {
        q: "MICE ne demek?",
        a: "Meetings (toplantılar), Incentives (ödül seyahatleri), Conferences (kongreler) ve Exhibitions (sergi/fuarlar) ifadesinin kısaltmasıdır; kurumsal etkinlik sektörünün toplu adıdır.",
      },
      SOURCE_FAQ,
      {
        q: "MICE programı için Antalya mı Belek mi?",
        a: "Tek yerleşkede konaklama-toplantı-gala için Belek; şehir ve kültür çeşitliliği için Antalya. Ayrıntı için [Antalya mı, Belek mi?](/rehberler/antalya-mi-belek-mi) rehberine bakın.",
      },
    ],
    primaryService: {
      href: "/kurumsal-etkinlik-organizasyonu",
      label: "Kurumsal etkinlik organizasyonu",
      pitch: "MICE programınızın bileşenlerini paylaşın; otel, salon, program ve operasyonu tek planda birleştirelim.",
    },
    related: ["/kurumsal-etkinlik-organizasyonu", "/incentive-organizasyonu", "/kongre-konferans-organizasyonu", "/antalya/kurumsal-etkinlik"],
    relatedGuides: ["antalya-kurumsal-etkinlik-mekanlari", "antalya-kongre-otelleri", "antalya-mi-belek-mi"],
  },
];
