import type { PageContent } from "../types";

const AREA = ["Belek"];
const base = [{ label: "Belek", href: "/belek/kurumsal-etkinlik" }];

export const belekPages: PageContent[] = [
  /* ------------------------------------------------------------------ */
  {
    path: "/belek/kurumsal-etkinlik",
    kind: "destination",
    metaTitle: "Belek Kurumsal Etkinlik | Resort, Golf ve Plaj Bir Arada",
    metaDescription:
      "Belek'te kurumsal etkinlik: konaklama, toplantı, gala ve aktivite tek yerleşkede. Resort, golf ve plaj merkezli Belek event agency olarak teklif alın.",
    h1: "Belek'te Kurumsal Etkinlik: Konaklama, Toplantı ve Aktivite Tek Yerleşkede",
    eyebrow: "Belek · Kurumsal etkinlik ajansı",
    lead:
      "Belek, kurumsal grupların aynı yerleşke içinde konakladığı, toplandığı ve eğlendiği bir turizm merkezidir. Resort, golf sahası, çam ormanı ve plajın iç içe olduğu bu yapıyı, transferi minimuma indiren etkinlik programlarına dönüştürüyoruz.",
    heroMedia: "hero-belek",
    crumbs: [...base],
    serviceType: "Belek kurumsal etkinlik organizasyonu",
    areaServed: AREA,
    defaultEventType: "diger",
    sections: [
      {
        kind: "split",
        eyebrow: "Destinasyon",
        title: "Belek bir şehir değil, planlanmış bir turizm merkezidir",
        body: [
          "Antalya'nın doğusunda, Serik ilçesine bağlı Belek; resort'ların, golf sahalarının ve geniş bir kumsalın aynı kuşakta yer aldığı bir turizm merkezi olarak gelişti. Şehir çeşitliliğinden çok, konfor ve süreklilik sunar.",
          "Havalimanından genellikle 30–45 dakikalık bir transferle ulaşılan bu yapı, uluslararası katılımcı gruplar için pratiktir. Daha geniş şehir ve tarih çeşitliliği için [Antalya kurumsal etkinlik](/antalya/kurumsal-etkinlik) sayfasına bakabilirsiniz.",
        ],
        media: "media-belek-resort",
        mediaSide: "left",
        arch: true,
      },
      {
        kind: "index",
        eyebrow: "Tek yerleşkede",
        title: "Belek'te bir resort'un içinde kurgulanabilenler",
        items: [
          { title: "Toplantı ve konferans", text: "Resort'ların balo ve konferans salonları, break-out odaları ve teknik altyapısı. Bayi toplantısı ve içerik odaklı programlar için pratik." },
          { title: "Gala ve ödül gecesi", text: "Plajda, bahçede veya balo salonunda; detaylar için [Belek gala organizasyonu](/belek/gala-organizasyonu).", href: "/belek/gala-organizasyonu" },
          { title: "Team building ve aktiviteler", text: "Plaj, golf, bisiklet, orman ve resort içi su sporları; ayrıntı için [Belek team building](/belek/team-building).", href: "/belek/team-building" },
          { title: "Incentive programları", text: "Konaklama, spa, golf ve gala'yı birleştiren ödül programları; [Belek incentive](/belek/incentive).", href: "/belek/incentive" },
          { title: "Retreat", text: "Sakin dönemlerde yönetim ekipleri için odaklı çalışma ortamı; [Belek corporate retreat](/belek/corporate-retreat).", href: "/belek/corporate-retreat" },
        ],
      },
      {
        kind: "table",
        eyebrow: "Dengeli bakış",
        title: "Resort merkezli etkinliğin avantajı ve sınırı",
        head: ["Avantaj", "Sınır", "Nasıl yönetiriz?"],
        rows: [
          ["Transfer ihtiyacı minimum; zaman kazanılır", "Şehir dokusu ve çeşitlilik sınırlı", "Gerekirse Aspendos veya Antalya çıkışı ekleriz"],
          ["Konaklama, toplantı, yemek bir arada", "Yiyecek-içecek çoğunlukla otel üzerinden", "Menü ve fiyatı baştan pazarlık ederiz"],
          ["Golf, plaj ve spa aynı yerde", "Yüksek sezonda kapasite ve fiyatlar sıkışık", "Omuz sezonlarında planlamayı öneririz"],
          ["Güvenlik ve gizlilik yüksek", "Ses ve saat kısıtları otele bağlı", "Programı bu sınırlara göre kurarız"],
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Planlama",
        title: "Belek'te etkinlik planlarken akılda tutulacaklar",
        items: [
          "Yüksek sezonda (yaz) otel doluluğu erkendir; ilkbahar ve sonbahar hem sakin hem uygun maliyetlidir.",
          "Golf, ilkbahar ve sonbahar/kış aylarında özellikle popülerdir; takvime erken yerleşin.",
          "Resort'ların kurumsal satış ekipleriyle tarih, kapasite ve menü fiyatı netleştirilmelidir.",
          "Dış tedarikçi (prodüksiyon, catering) kullanımı otelin kurallarına bağlıdır; önceden sorulmalıdır.",
          "Ses ve kapanış saati kısıtları gala ve müzik planını belirler.",
          "Plaj ve bahçe etkinlikleri için rüzgâr ve yağışa karşı kapalı alan alternatifi hazırlanmalıdır.",
        ],
      },
      {
        kind: "scenarios",
        title: "Belek için örnek kurgular",
        items: [
          { title: "Resort'ta iki günlük bayi toplantısı", text: "Sabah genel oturum, öğleden sonra paralel atölyeler, akşam plajda ödül gecesi; konaklama ve transfer tek yerde.", group: "120 kişi", duration: "2 gün", format: "Toplantı + gala", media: "scenario-dealer-belek" },
          { title: "Golf ve toplantı birleşik program", text: "Sabah toplantı, öğleden sonra golf kliniği ve scramble, akşam yemeği; yönetim ekibi için dengeli program.", group: "30 kişi", duration: "2 gün", format: "Toplantı + golf", media: "scenario-belek-golf" },
        ],
      },
    ],
    faq: [
      {
        q: "Belek ile Antalya arasında nasıl seçim yapmalıyım?",
        a: "Konaklama, toplantı ve gala'nın aynı yerleşkede olmasını istiyorsanız veya golf/spa içeren bir program planlıyorsanız Belek; şehir dokusu, kültür çıkışları ve çeşitlilik arıyorsanız Antalya daha uygundur. Ayrıntılı karşılaştırma için [Antalya mı, Belek mi?](/rehberler/antalya-mi-belek-mi) rehberine bakın.",
      },
      {
        q: "Belek'te en uygun etkinlik mevsimi hangisi?",
        a: "Sakin ve odaklı programlar ile golf için ilkbahar ve sonbahar; kış aylarında ise toplantı ve retreat uygundur. Yaz aylarında deniz ve plaj etkinlikleri güçlü olsa da doluluk ve fiyatlar yüksek olur.",
      },
      {
        q: "Resort dışından tedarikçi (catering, prodüksiyon) getirilebilir mi?",
        a: "Bu otelin kurallarına bağlıdır. Birçok resort yiyecek-içeceği kendi bünyesinde sağlar; prodüksiyon için ise çoğunlukla dış tedarikçi kabul edilir. Bu konuyu mekân seçiminde ilk netleştirdiğimiz konulardan biridir.",
      },
      {
        q: "Belek'te kaç kişilik gruplara hizmet verebiliyorsunuz?",
        a: "Küçük yönetim ekiplerinden yüzlerce kişilik bayi ve incentive gruplarına kadar çalışıyoruz. Üst sınır, seçilen resort'un kapasitesine bağlıdır; çok büyük gruplarda birden fazla otelin birlikte kullanımı da değerlendirilebilir.",
      },
    ],
    related: ["/kurumsal-etkinlik-organizasyonu", "/antalya/kurumsal-etkinlik", "/belek/team-building", "/belek/incentive", "/belek/kurumsal-etkinlik-mekanlari"],
    guides: ["antalya-mi-belek-mi", "belek-kurumsal-etkinlik-mekanlari", "belekte-team-building-fikirleri"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/belek/team-building",
    kind: "destination",
    metaTitle: "Belek Team Building | Golf, Plaj ve Orman İçinde Programlar",
    metaDescription:
      "Belek'te team building: golf kliniği ve scramble, plaj olimpiyatı, çam ormanında oryantiring ve bisiklet turu. Resort içinde, transfersiz team building programları.",
    h1: "Belek Team Building: Resort İçinde, Transfersiz Takım Programları",
    eyebrow: "Belek · Team building",
    lead:
      "Belek'te team building programının en büyük avantajı mesafe olmamasıdır: golf sahası, plaj ve çam ormanı resort'un hemen yanında. Katılımcı aktivite yerine yürüyerek gider, gün zamanı kaybetmeden kullanılır.",
    heroMedia: "hero-belek-team",
    crumbs: [...base, { label: "Team Building", href: "/belek/team-building" }],
    serviceType: "Belek team building etkinlikleri",
    areaServed: AREA,
    defaultEventType: "team-building",
    sections: [
      {
        kind: "split",
        eyebrow: "Golf",
        title: "Golf bilmeyenler için de takım oyunu: scramble",
        body: [
          "Belek, golf merkezi olarak bilinir; ancak golf deneyimi gerektirmeyen kurumsal formatlar vardır. Scramble formatında takımın her oyuncusu vuruş yapar, en iyi vuruş seçilir ve takım olarak oyun devam eder; böylece başlangıç seviyesi bir katılımcı da takıma katkı sağlar.",
          "Programı bir golf antrenörü eşliğinde 45–60 dakikalık bir klinikle başlatır, ardından kısa bir turnuva ve ödül anıyla bitiririz. Genel team building mantığı için [team building](/team-building) sayfasına bakın.",
        ],
        bullets: [
          "Başlangıç klinikleri ve ekipman desteği",
          "Takımlar arası skor ve eğlenceli yan yarışmalar (en uzak vuruş, en yakın vuruş)",
          "Turnuva sonrası kulüp binasında ödül töreni",
        ],
        media: "media-belek-golf",
        arch: true,
      },
      {
        kind: "index",
        eyebrow: "Belek formatları",
        title: "Resort çevresinde beş team building kurgusu",
        items: [
          { title: "Golf kliniği ve scramble", text: "Yarım gün; eşit seviye ve eğlence dengesiyle golf sahasında takım oyunu." },
          { title: "Plaj olimpiyatı", text: "Resort'un plajında takım yarışları, halat çekme ve su oyunları; gün batımında ortak akşam." },
          { title: "Çam ormanı oryantiring", text: "Orman içinde harita ve ipuçlarıyla görev rotaları; sakin ve zihinsel ağırlıklı." },
          { title: "Bisiklet turu", text: "Resort çevresinde kolay bisiklet rotaları, mola noktalarında takım görevleri." },
          { title: "Resort içi su sporları", text: "SUP, kano ve tekne ile takım yarışları; yaz sezonunda özellikle popüler." },
        ],
      },
      {
        kind: "table",
        eyebrow: "Format seçimi",
        title: "Gruba göre Belek team building",
        head: ["Format", "Grup", "Süre", "Not"],
        rows: [
          ["Golf scramble", "12–80 kişi", "3–4 saat", "Sahanın doluluğu ve rezervasyon planına bağlı"],
          ["Plaj olimpiyatı", "40–300 kişi", "3–5 saat", "Sıcak ve rüzgâr için sabah veya akşamüstü"],
          ["Orman oryantiring", "15–100 kişi", "2–3 saat", "Zemin ve ayakkabı bilgilendirmesi"],
          ["Bisiklet turu", "10–60 kişi", "2–3 saat", "Bisiklet kiralama ve kask planı"],
        ],
      },
      {
        kind: "scenarios",
        title: "Örnek Belek team building kurguları",
        items: [
          { title: "Satış ekibi golf günü", text: "Sabah klinik, öğleden sonra scramble turnuvası ve kulüp binasında ödüllü akşam yemeği.", group: "48 kişi", duration: "1 gün", format: "Golf + akşam yemeği", media: "scenario-belek-golf" },
          { title: "Plaj olimpiyatı ve gala", text: "Gündüz plajda takım yarışları, akşam aynı plajda yemek ve ödül töreni.", group: "150 kişi", duration: "1 gün", format: "Plaj + gala", media: "scenario-team-beach" },
        ],
      },
      {
        kind: "links",
        title: "Belek programını tamamlayacaklar",
        items: [
          { label: "Belek kurumsal etkinlik", href: "/belek/kurumsal-etkinlik", text: "Belek'te tek yerleşkeli etkinlik yapısı." },
          { label: "Antalya team building", href: "/antalya/team-building", text: "Şehir dokusu ve Akdeniz mutfağı atölyeleri." },
          { label: "Belek'te team building fikirleri", href: "/rehberler/belekte-team-building-fikirleri", text: "Geniş fikir listesi." },
          { label: "Kurumsal outdoor aktiviteler", href: "/kurumsal-outdoor-aktiviteler", text: "Açık hava güvenlik ve planlama çerçevesi." },
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Hazırlık",
        title: "Belek'te team building gününden önce netleştirilenler",
        items: [
          "Golf sahası ve plaj alanı için saat rezervasyonu",
          "Antrenör, ekipman ve bisiklet/su sporları ekipmanı sayısı",
          "Takım sayısı, saha lideri ataması ve puanlama sistemi",
          "Su, gölge, güneş koruması ve mola planı (özellikle yaz)",
          "Yağmur veya rüzgâr durumunda kapalı alan alternatifi",
          "Katılımcıların kıyafet, ayakkabı ve sağlık bilgilendirmesi",
        ],
      },
    ],
    faq: [
      {
        q: "Golf bilmeyen çalışanlar da katılabilir mi?",
        a: "Evet. Scramble formatı ve kısa klinik, başlangıç seviyesindeki katılımcıların da takıma katkı yapmasını sağlar. Golf istemeyenler için aynı gün paralel bir aktivite (plaj, bisiklet) sunmak da mümkündür.",
      },
      {
        q: "Belek'te team building için transfer gerekir mi?",
        a: "Resort içinde veya yürüme/kısa araç mesafesindeki alanlarda yapılan aktiviteler için transfer ihtiyacı minimumdur. Aspendos gibi çevre noktalarına çıkış istenirse ayrıca planlanır.",
      },
      {
        q: "Yaz aylarında sıcaklık team building'i etkiler mi?",
        a: "Evet; yazın gündüz saatlerinde açık hava aktiviteleri yerine sabah erken veya akşamüstü saatler tercih edilir. Gölge, su ve mola planı programa eklenir.",
      },
    ],
    related: ["/team-building", "/antalya/team-building", "/belek/kurumsal-etkinlik", "/kurumsal-outdoor-aktiviteler"],
    guides: ["belekte-team-building-fikirleri", "team-building-etkinligi-nasil-secilir", "kurumsal-oyun-ornekleri"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/belek/incentive",
    kind: "destination",
    metaTitle: "Belek Incentive Programları | Resort, Golf ve Plaj Gala",
    metaDescription:
      "Belek incentive programları: resort konaklaması, golf, spa, plaj gala'sı ve ödül töreni tek yerleşkede. Uluslararası ve yerel satış grupları için konfor odaklı organizasyon.",
    h1: "Belek Incentive Programları: Konforun Odak Olduğu Ödül Seyahati",
    eyebrow: "Belek · Incentive",
    lead:
      "Belek incentive'inde odak konfordur: katılımcı havalimanından resort'a kısa sürede ulaşır, programın büyük kısmı aynı yerleşkede geçer ve her gün özenle kurgulanmış bir deneyim yaşar. Çeşitlilikten çok kusursuz ağırlama arayan gruplar için ideal.",
    heroMedia: "hero-belek-incentive",
    crumbs: [...base, { label: "Incentive", href: "/belek/incentive" }],
    serviceType: "Belek incentive (ödül seyahati) organizasyonu",
    areaServed: AREA,
    defaultEventType: "incentive",
    sections: [
      {
        kind: "split",
        eyebrow: "Belek'in farkı",
        title: "Programın büyük kısmı tek yerleşkede geçer",
        body: [
          "Belek'te incentive'in en güçlü yanı transferin azlığıdır. Katılımcı aktiviteye yürüyerek veya kısa bir araç mesafesiyle ulaşır; zaman kaybı olmaz, program yoğunluğu rahatlıkla artırılabilir.",
          "Daha geniş destinasyon çeşitliliği için [Antalya incentive](/antalya/incentive) sayfasına; genel program mantığı için [incentive organizasyonu](/incentive-organizasyonu) sayfasına bakabilirsiniz.",
        ],
        bullets: [
          "Havalimanından kısa transferle resort'a hızlı varış",
          "Golf, spa, plaj ve gala'nın aynı yerleşkede olması",
          "Yüksek servis standardı ve gizlilik",
          "Programa isteğe bağlı kültür çıkışları (ör. Aspendos) eklenebilmesi",
        ],
        media: "media-belek-incentive",
        arch: true,
        mediaSide: "left",
      },
      {
        kind: "index",
        eyebrow: "Gün akışı",
        title: "Üç günlük Belek incentive örneği",
        items: [
          { tag: "Gün 1", title: "Karşılama ve açılış akşamı", text: "Havalimanında isimli karşılama, resort'a transfer, hoş geldin içeceği ve plajda sakin bir açılış yemeği." },
          { tag: "Gün 2", title: "Aktivite günü", text: "Golf kliniği ve turnuva, spa ve deniz aktiviteleri seçenekleriyle serbest tempolu gün; akşam ödül töreni ve gala." },
          { tag: "Gün 3", title: "Kültür çıkışı ve veda", text: "İsteğe bağlı Aspendos kültür turu; öğle yemeği ve havalimanı transferleri." },
        ],
      },
      {
        kind: "table",
        eyebrow: "Program yatırımı",
        title: "Belek incentive'inde yatırımın yoğunlaştığı alanlar",
        head: ["Alan", "Neden önemli", "Genel yaklaşım"],
        rows: [
          ["Konaklama sınıfı", "Ödül hissinin temel taşı", "Katılımcıya özel oda tahsisi ve varış karşılaması"],
          ["Gala ve ödül akşamı", "Programın en akılda kalan anı", "Plajda veya özel alanda tek prodüksiyonlu gece"],
          ["Özel deneyim", "Katılımcıya 'özel erişim' hissi", "Golf, tekne, şef masası, spa gibi tek seferlik anlar"],
          ["Karşılama ve veda", "İlk ve son izlenim", "Hızlı check-in, hediye, kişiye özel mesaj"],
        ],
        note: "Bütçe yapısı için [kurumsal etkinlik bütçesi nasıl hazırlanır](/rehberler/kurumsal-etkinlik-butcesi-nasil-hazirlanir) rehberine bakın.",
      },
      {
        kind: "scenarios",
        title: "Belek incentive örnekleri",
        items: [
          { title: "Seçkin satış ekibi için üç günlük program", text: "Üç gün, golf turnuvası ve plaj gala'sı; her katılımcıya özel karşılama ve hediye.", group: "60 kişi", duration: "3 gün · 2 gece", format: "Golf + plaj gala", media: "scenario-belek-incentive" },
          { title: "Eşli katılımlı bayi incentive'i", text: "Eşler için ayrı spa ve kültür günü, ortak akşam gala'sı; iki akış tek lojistik planı altında.", group: "90 kişi", duration: "3 gün · 2 gece", format: "Resort + eş programı", media: "scenario-belek-spouse" },
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Resort seçimi",
        title: "Incentive için resort'a sorulan kritik sorular",
        items: [
          "Grup için özel karşılama alanı ve hızlı check-in düzeni var mı?",
          "Katılımcıya oda yükseltme veya özel oda tahsisi yapılabiliyor mu?",
          "Plaj gala'sı için alan, ses sınırı ve kapanış saati nedir?",
          "Golf, spa ve restoran rezervasyonları grup için garanti edilebilir mi?",
          "Aynı dönemde otelde başka büyük grup bulunacak mı?",
          "Dış prodüksiyon ve kendi sanatçı/DJ'imizi getirme kuralları neler?",
        ],
      },
    ],
    faq: [
      {
        q: "Belek incentive için en uygun mevsim hangisi?",
        a: "İlkbahar ve sonbahar, golf ve açık hava için ideal; kış aylarında spa ve sakin program öne çıkar. Yaz plaj ve deniz için güçlüdür ancak doluluk ve fiyatlar yüksektir.",
      },
      {
        q: "Resort'ta birden fazla grup olursa gizlilik nasıl sağlanır?",
        a: "Ayrı toplantı salonu, özel plaj alanı veya ayrı yemek bölümü gibi ayrıştırmalar mekân seçiminde talep edilir. Grubunuzun gizlilik beklentisini mekâna baştan iletiriz.",
      },
      {
        q: "Belek'te Antalya ile kombine program yapılabilir mi?",
        a: "Evet. Konaklama Belek'te kalırken bir gününü Antalya'nın tarihî merkezi veya Aspendos'a ayırmak yaygındır. Böylece resort konforu ve şehir deneyimi aynı programda birleşir.",
      },
    ],
    related: ["/incentive-organizasyonu", "/antalya/incentive", "/belek/gala-organizasyonu", "/belek/kurumsal-etkinlik"],
    guides: ["incentive-organizasyonu-nedir", "antalya-mi-belek-mi", "belekte-team-building-fikirleri"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/belek/corporate-retreat",
    kind: "destination",
    metaTitle: "Belek Corporate Retreat | Resort, Spa ve Golf Arasında",
    metaDescription:
      "Belek'te corporate retreat: resort'ta çalışma salonu, spa, golf ve yürüyüş alanı bir arada. Yönetim ve proje ekipleri için sakin dönemlerde odaklı retreat organizasyonu.",
    h1: "Belek Corporate Retreat: Çalışma, Spa ve Golf Aynı Yerleşkede",
    eyebrow: "Belek · Corporate retreat",
    lead:
      "Belek, retreat için ideal bir kombinasyon sunar: toplantı salonu, spa, golf ve yürüyüş alanı aynı yerleşkede. Özellikle sakin dönemlerde yönetim ekibinin kalabalıksız ve odaklı çalışabileceği bir ortam yaratıyoruz.",
    heroMedia: "hero-belek-retreat",
    crumbs: [...base, { label: "Corporate Retreat", href: "/belek/corporate-retreat" }],
    serviceType: "Belek corporate retreat organizasyonu",
    areaServed: AREA,
    defaultEventType: "corporate-retreat",
    sections: [
      {
        kind: "split",
        eyebrow: "Retreat için Belek",
        title: "Sakin dönemlerde Belek, bir odak ortamıdır",
        body: [
          "Yüksek sezonda hareketli olan Belek, ilkbahar başı, sonbahar ve kış aylarında çok daha sakin bir yapıya bürünür. Bu dönemler, kalabalıktan uzak çalışmak isteyen yönetim ekipleri için avantajdır.",
          "Küçük, butik ve şehir temelli seçenekler için [Antalya corporate retreat](/antalya/corporate-retreat) sayfasına; retreat türleri ve temel çerçeve için [corporate retreat](/corporate-retreat) sayfasına bakabilirsiniz.",
        ],
        media: "media-belek-retreat",
        arch: true,
      },
      {
        kind: "index",
        eyebrow: "Günlük ritim",
        title: "Belek retreat'inde bir günün örnek akışı",
        items: [
          { tag: "Sabah", title: "Çalışma oturumu", text: "Gün ışıklı salonda 2–3 saatlik odaklı oturum; kısa kahve molaları." },
          { tag: "Öğle", title: "Hafif yemek ve yürüyüş", text: "Ortak öğle yemeği ve çam ormanı veya sahil boyunda kısa yürüyüş." },
          { tag: "Öğleden sonra", title: "Atölye veya golf kliniği", text: "Küçük gruplarda uygulama oturumu ya da golf kliniği; seçenekli program." },
          { tag: "Akşam", title: "Spa ve ortak yemek", text: "Spa veya serbest zaman, ardından düşük tempolu ortak yemek ve gün değerlendirmesi." },
        ],
      },
      {
        kind: "table",
        eyebrow: "Mevsim",
        title: "Mevsime göre Belek retreat karakteri",
        head: ["Dönem", "Atmosfer", "Retreat için uygunluk"],
        rows: [
          ["Kış (Aralık – Şubat)", "Sakin, düşük doluluk, ılıman günlerde yürüyüş", "Strateji ve odak retreat'leri için yüksek"],
          ["İlkbahar (Mart – Mayıs)", "Hava ısınır, golf sezonu canlanır", "Dengeli: çalışma + golf, yüksek uygunluk"],
          ["Yaz (Haziran – Ağustos)", "Yoğun, sıcak, plaj hareketli", "Yenilenme ve deniz odaklı kısa retreat'ler"],
          ["Sonbahar (Eylül – Kasım)", "Hava ılıman, doluluk azalır", "Genel olarak en verimli dönemlerden biri"],
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Resort'a sorular",
        title: "Retreat için resort'a sorduğumuz sorular",
        items: [
          "Toplantı salonunun gün ışığı ve kapı dışı gürültü durumu",
          "Break-out için ek oda veya açık alan imkânı",
          "Spa, golf ve yürüyüş alanına erişim saatleri ve ek ücretler",
          "Grup için ayrı yemek alanı veya düzeni",
          "Aynı dönemde otelde başka büyük grup var mı?",
          "Wi-Fi hızı ve toplantı odalarında kablolu bağlantı",
        ],
      },
      {
        kind: "scenarios",
        title: "Belek retreat örnekleri",
        items: [
          { title: "Yönetim ekibi strateji retreat'i", text: "Kış aylarında üç gün: sabah çalışma, öğleden sonra yürüyüş ve spa, akşam ortak yemek.", group: "18 kişi", duration: "3 gün · 2 gece", format: "Çalışma + spa", media: "scenario-retreat-strategy" },
          { title: "İnovasyon atölyesi", text: "Sonbaharda iki gün: atölye odaklı çalışma, golf kliniği ve gün batımı oturumu.", group: "30 kişi", duration: "2 gün", format: "Atölye + golf", media: "scenario-belek-golf" },
        ],
      },
      {
        kind: "split",
        eyebrow: "Denge",
        title: "Golf ve spa çalışmayı bölmeden nasıl dengelenir?",
        body: [
          "Retreat'te golf veya spa, çalışma gününün kesintisi değil dinlenme anıdır. En verimli yapı, çalışma oturumlarını sabah saatlerine yoğunlaştırıp öğleden sonrayı isteğe bağlı aktiviteye ayırmaktır: bir grup golf kliniğine, diğeri spa veya yürüyüşe gidebilir.",
          "Akşam yemeği ortak tutulur; böylece ekip yeniden bir araya gelir ve gün sonu değerlendirmesi doğal olarak yapılır. Aktivite seçeneklerini önceden netleştirmek ve rezervasyonu grup adına yapmak gün içi karmaşayı önler.",
        ],
        tone: "sand",
      },
    ],
    faq: [
      {
        q: "Belek'te retreat için en az kaç kişilik grup uygun?",
        a: "Resort'lar genellikle orta ve büyük gruplara göre kurulduğundan 15–20 kişiden itibaren verimli olur; daha küçük gruplar için Antalya'da butik otel veya villa seçenekleri daha uygun olabilir.",
      },
      {
        q: "Retreat sırasında diğer misafirlerden izole olmak mümkün mü?",
        a: "Sakin dönemlerde çok daha rahattır. Yüksek sezonda ise ayrı salon, ayrı yemek düzeni gibi çözümler mekâna baştan talep edilir.",
      },
      {
        q: "Retreat'te golf zorunlu mu?",
        a: "Hayır. Golf, spa, yürüyüş ve bisiklet gibi seçeneklerden ekibe uygun olanı seçilir; hiçbiri zorunlu değildir.",
      },
    ],
    related: ["/corporate-retreat", "/antalya/corporate-retreat", "/belek/kurumsal-etkinlik-mekanlari", "/belek/incentive"],
    guides: ["corporate-retreat-nedir", "antalya-mi-belek-mi", "belek-kurumsal-etkinlik-mekanlari"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/belek/kurumsal-etkinlik-mekanlari",
    kind: "destination",
    metaTitle: "Belek Kurumsal Etkinlik Mekanları | Resort ve Golf Kulübü",
    metaDescription:
      "Belek'te kurumsal etkinlik mekanları: resort balo ve konferans salonları, golf kulübü, plaj alanları. Yiyecek-içecek ve ses kuralları dahil seçim rehberi.",
    h1: "Belek Kurumsal Etkinlik Mekânları: Resort Salonlarından Golf Kulübüne",
    eyebrow: "Belek · Etkinlik mekânları",
    lead:
      "Belek'te mekân seçimi çoğunlukla bir resort seçimidir; çünkü toplantı, konaklama ve yemek aynı çatı altındadır. Mekân seçerken resort'un salon yapısı kadar yiyecek-içecek kuralları, ses sınırları ve grup yönetimi de belirleyicidir.",
    heroMedia: "hero-belek-venues",
    crumbs: [...base, { label: "Etkinlik Mekânları", href: "/belek/kurumsal-etkinlik-mekanlari" }],
    serviceType: "Belek kurumsal etkinlik mekânı seçimi",
    areaServed: AREA,
    defaultEventType: "diger",
    sections: [
      {
        kind: "split",
        eyebrow: "Mekân yapısı",
        title: "Belek'te mekân resort'un içindedir",
        body: [
          "Antalya şehir merkezindeki bağımsız mekânların aksine, Belek'te etkinlik çoğunlukla bir resort'un balo salonunda, bahçesinde veya plajında gerçekleşir. Bu, tek muhatap ve düşük transfer demektir; fakat yiyecek-içecek ve ses konularında otelin kurallarına tabi olmak da demektir.",
          "Şehir merkezindeki bağımsız mekânlar için [Antalya etkinlik mekânları](/antalya/kurumsal-etkinlik-mekanlari) sayfasına, genel mekân bulma hizmeti için [kurumsal etkinlik mekânları](/kurumsal-etkinlik-mekanlari) sayfasına bakın.",
        ],
        media: "media-belek-venues",
        mediaSide: "left",
        arch: true,
      },
      {
        kind: "table",
        eyebrow: "Mekân tipleri",
        title: "Belek'teki başlıca mekân grupları",
        head: ["Mekân", "Kapasite (yaklaşık)", "Uygun format", "Dikkat"],
        rows: [
          ["Resort balo ve konferans salonu", "50–1.000+ kişi", "Toplantı, bayi toplantısı, gala yemeği", "Salon altyapısı ve fiyatı resort'a göre değişir"],
          ["Resort bahçesi ve havuz başı", "30–500 kişi", "Kokteyl, açılış, hafif gala", "Hava ve ses sınırı"],
          ["Plaj alanı", "60–600 kişi", "Gün batımı gala, ödül gecesi, plaj etkinliği", "Rüzgâr, zemin, alan kullanım izni, kapalı alan alternatifi"],
          ["Golf kulübü binası", "20–200 kişi", "Golf turnuvası ödül yemeği, küçük toplantı", "Sahanın günlük kullanımına bağlı"],
          ["Açık hava / orman alanları", "30–300 kişi", "Team building, piknik, outdoor program", "Altyapı kurulum gereksinimi"],
        ],
        note: "Kapasite aralıkları genel referanstır; kesin değer her resort'un yazılı teklifinde yer alır.",
      },
      {
        kind: "index",
        eyebrow: "Karar noktaları",
        title: "Belek'te mekân seçerken belirleyici üç konu",
        items: [
          { title: "Yiyecek-içecek kuralı", text: "Birçok resort etkinlikte yiyecek-içeceği kendi bünyesinde sağlar. Dışarıdan catering kabul edilip edilmediği, menü seçenekleri ve kişi başı fiyat baştan netleştirilmelidir." },
          { title: "Ses ve kapanış saati", text: "Misafirlerin rahatsız edilmemesi için ses seviyesi ve müzik kapanış saati sınırlıdır. Gala ve konser programları bu sınırlara göre kurgulanır." },
          { title: "Grup yönetimi ve gizlilik", text: "Aynı dönemde başka gruplar da bulunabilir; ayrı salon, ayrı yemek alanı ve giriş-çıkış yönetimi gizlilik açısından önemlidir." },
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Karşılaştırma",
        title: "Resort'ları karşılaştırırken kullandığımız ölçütler",
        items: [
          "Salon kapasitesi ve oturma düzenine göre gerçek yerleşim",
          "Sahne, ses, ışık altyapısı ve dış tedarikçiye kapı",
          "Menü kalitesi ve kişi başı fiyat",
          "Plaj veya bahçe alanı kullanım koşulları",
          "Oda kapasitesi ve grup oda tahsisi",
          "Havalimanına transfer süresi ve konum",
          "Sezon ve tarihlere göre doluluk riski",
        ],
      },
      {
        kind: "steps",
        eyebrow: "Müzakere",
        title: "Resort ile görüşme akışı",
        items: [
          { title: "Talep özeti", text: "Tarih, grup, program ve beklentiler tek sayfalık bir brief olarak birden fazla resort'a eş zamanlı iletilir." },
          { title: "Teklif karşılaştırma", text: "Gelen teklifler aynı kalemlerle (oda, salon, menü, ekipman) tabloya alınır; eksik ve gizli maliyetler çıkarılır." },
          { title: "Saha ziyareti", text: "Kısa listedeki resort'larda salon, plaj/bahçe ve servis akışı yerinde değerlendirilir." },
          { title: "Pazarlık ve opsiyon", text: "Menü fiyatı, salon ücreti, oda tahsisi ve iptal koşulları pazarlık edilir; opsiyon yazılı bağlanır." },
        ],
      },
    ],
    faq: [
      {
        q: "Belek'te bir resort seçerken en önemli kriter nedir?",
        a: "Grup büyüklüğü, program türü ve yiyecek-içecek kuralıdır. Etkinlik için salon, plaj ve bahçe imkânı ile otelin dış tedarikçiye yaklaşımı birlikte değerlendirilmelidir. Seçim detayları için [Belek'te mekân seçimi rehberi](/rehberler/belek-kurumsal-etkinlik-mekanlari) yardımcı olur.",
      },
      {
        q: "Resort'ların fiyatları sezona göre ne kadar değişir?",
        a: "Belirgin biçimde değişir; yüksek sezonda doluluk ve fiyat artar, omuz sezonlarında daha esnek koşullar mümkün olur. Tarih esnekliği ciddi bütçe avantajı sağlar.",
      },
      {
        q: "Aspendos gibi tarihî alanlarda etkinlik yapılabilir mi?",
        a: "Tarihî alanlarda etkinlik izin ve kısıtlara tabidir. Ziyaret ve kültür çıkışı için uygundur; prodüksiyonlu etkinlik için uygunluk ve izin süreci ayrıca değerlendirilir.",
      },
    ],
    related: ["/kurumsal-etkinlik-mekanlari", "/antalya/kurumsal-etkinlik-mekanlari", "/belek/gala-organizasyonu", "/belek/kurumsal-etkinlik"],
    guides: ["belek-kurumsal-etkinlik-mekanlari", "antalya-mi-belek-mi", "sirket-etkinligi-nasil-planlanir"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/belek/gala-organizasyonu",
    kind: "destination",
    metaTitle: "Belek Gala Organizasyonu | Plaj, Resort ve Golf Alanında",
    metaDescription:
      "Belek'te gala organizasyonu: plaj, resort bahçesi, balo salonu ve golf alanında ödül gecesi ve kurumsal gala. Prodüksiyon kurulum, ses kuralları ve hava planı.",
    h1: "Belek Gala Organizasyonu: Resort'ta Prodüksiyonlu Geceler",
    eyebrow: "Belek · Gala organizasyonu",
    lead:
      "Belek'te gala, plajın gün batımından resort'un balo salonuna kadar geniş seçenekle kurulabilir. Resort ortamının kuralları (ses, saat, dış tedarikçi) prodüksiyonu belirlediği için gala'yı mekânla birlikte tasarlıyoruz.",
    heroMedia: "hero-belek-gala",
    crumbs: [...base, { label: "Gala Organizasyonu", href: "/belek/gala-organizasyonu" }],
    serviceType: "Belek gala ve ödül töreni organizasyonu",
    areaServed: AREA,
    defaultEventType: "gala",
    sections: [
      {
        kind: "split",
        eyebrow: "Resort ortamı",
        title: "Resort gala'sında prodüksiyon, kurallarla birlikte tasarlanır",
        body: [
          "Resort'ta gala yapmak mekân bulma kolaylığı sunar; ancak yük giriş saatleri, ses sınırı, elektrik kapasitesi ve dış tedarikçi kuralları gibi konular önceden netleşmelidir. Bu sınırlar yaratıcı kurgunun çerçevesini belirler.",
          "Gala'nın genel mantığı ve ödül töreni yönetimi için [gala organizasyonu](/gala-organizasyonu) sayfasına bakın; bu sayfa Belek'in özel koşullarını ele alır.",
        ],
        media: "media-belek-gala",
        arch: true,
      },
      {
        kind: "table",
        eyebrow: "Alan seçimi",
        title: "Belek'te gala için alan karşılaştırması",
        head: ["Alan", "Kapasite (yaklaşık)", "Güçlü yanı", "Prodüksiyon notu"],
        rows: [
          ["Plaj", "60–600 kişi", "Gün batımı, atmosfer, fotoğraf", "Zemin, rüzgâr, ses; kapalı alan alternatifi şart"],
          ["Resort bahçesi", "50–400 kişi", "Peyzaj, kontrol edilebilir ortam", "Sulama ve zemin; ses sınırı"],
          ["Balo salonu", "50–1.000 kişi", "Hava bağımsız, teknik altyapı hazır", "Atmosfer için dekor yatırımı gerekir"],
          ["Golf kulübü alanı", "30–250 kişi", "Özel, seçkin atmosfer", "Kapasite sınırlı, saha kullanımı"],
        ],
      },
      {
        kind: "steps",
        eyebrow: "Kurulum",
        title: "Resort'ta prodüksiyon kurulum günü",
        items: [
          { title: "Yük girişi", text: "Servis girişinden araç ve ekipman girişi, resort kuralları ve misafir yoğunluğuna göre saat planı." },
          { title: "Zemin ve elektrik", text: "Sahne zemini, kablolama güvenliği ve gerekirse jeneratör; plajda kum ve rüzgâr için sabitleme." },
          { title: "Ses ve ışık prova", text: "Resort'un ses sınırlarına uygun ses seviyesi ayarı ve gün batımı ışığıyla uyumlu aydınlatma programlaması." },
          { title: "Servis ve karşılama", text: "Servis personeli yerleşimi, bar noktaları ve karşılama alanı son kontrolü." },
          { title: "Gece yönetimi ve söküm", text: "Gece boyunca akış yönetimi; kapanıştan sonra sessiz ve hızlı söküm." },
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Hava ve güvenlik",
        title: "Plaj gala'sı için yedek plan listesi",
        items: [
          "Kapalı alan (balo salonu veya çadır) alternatifi ve karar saati",
          "Rüzgâra dayanıklı sahne, dekor ve ışık sabitleme",
          "Zemin ve yürüyüş yolları (yüksek topuk, engelli erişimi)",
          "Sivrisinek ve akşam serinliği için önlemler",
          "Misafir yönlendirme ve acil durum planı",
          "Havai fişek veya özel gösteri için izin ve mekân kuralı kontrolü",
        ],
      },
      {
        kind: "scenarios",
        title: "Belek gala örnekleri",
        items: [
          { title: "Plajda 250 kişilik ödül gecesi", text: "Gün batımında karşılama, oturmalı yemek, ödül töreni, konser; hava için salon alternatifi hazır.", group: "250 kişi", duration: "Akşam", format: "Plaj + ödül", media: "scenario-gala-beach" },
          { title: "Resort bahçesinde 120 kişilik kokteyl gala'sı", text: "Bahçede ayakta kokteyl, kısa konuşma, canlı müzik; hafif prodüksiyon ve hızlı kurulum.", group: "120 kişi", duration: "Akşam", format: "Bahçe + kokteyl", media: "scenario-belek-garden" },
        ],
      },
      {
        kind: "split",
        eyebrow: "Servis",
        title: "Gala'da menü ve servis akışı resort mutfağıyla kurulur",
        body: [
          "Belek'te gala yemeği çoğunlukla resort mutfağından gelir. Bu, servis hızını ve kalitesini mutfak kapasitesine bağlar: aynı anda yüzlerce tabağın çıkabilmesi için menü, servis noktası ve personel sayısı önceden planlanır.",
          "Oturmalı menüde program anlarıyla (konuşma, ödül, müzik) servis akışı çakışmamalıdır; bu yüzden run-of-show'u mutfak şefiyle birlikte saat saat yazarız. Özel diyet ve alerji listeleri masa bazında servis ekibine verilir.",
        ],
        tone: "sand",
      },
    ],
    faq: [
      {
        q: "Plaj gala'sında ses sınırı problem olur mu?",
        a: "Resort'ların ses ve saat sınırı vardır; müzik seviyesi ve kapanış saati bunlara göre ayarlanır. Bu sınırlar mekân seçiminde ilk öğrendiğimiz konular arasındadır.",
      },
      {
        q: "Dış prodüksiyon firması kullanılabilir mi?",
        a: "Çoğu resort prodüksiyon için dış tedarikçiye izin verir; kurallar (giriş saatleri, sigorta, elektrik) otelden otele değişir. Yiyecek-içecek ise genellikle otel üzerinden sağlanır.",
      },
      {
        q: "Gala için en erken ne zaman planlamaya başlamalıyım?",
        a: "Yüksek sezonda 4–6 ay önce başlamak güvenlidir. Omuz sezonlarında bu süre kısalabilir, ancak otel ve prodüksiyon kapasitesi için erken karar yine avantaj sağlar.",
      },
    ],
    related: ["/gala-organizasyonu", "/belek/kurumsal-etkinlik-mekanlari", "/belek/incentive", "/etkinlik-personeli"],
    guides: ["belek-kurumsal-etkinlik-mekanlari", "antalya-mi-belek-mi", "sirket-etkinligi-nasil-planlanir"],
  },
];
