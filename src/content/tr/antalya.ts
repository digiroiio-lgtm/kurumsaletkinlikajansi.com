import type { PageContent } from "../types";

const AREA = ["Antalya"];
const base = [{ label: "Antalya", href: "/antalya/kurumsal-etkinlik" }];

export const antalyaPages: PageContent[] = [
  /* ------------------------------------------------------------------ */
  {
    path: "/antalya/kurumsal-etkinlik",
    kind: "destination",
    metaTitle: "Antalya Kurumsal Etkinlik Organizasyonu | Şehir ve Sahil",
    metaDescription:
      "Antalya'da kurumsal etkinlik: Kaleiçi, Konyaaltı, Lara, Kemer ve Side çevresinde team building, toplantı, gala ve incentive organizasyonu. Teklif alın.",
    h1: "Antalya'da Kurumsal Etkinlik: Şehir, Sahil ve Tarih Bir Arada",
    eyebrow: "Antalya · Kurumsal etkinlik ajansı",
    lead:
      "Antalya, kurumsal etkinlik için tek bir mekân değil, birbirine yakın birkaç karakterin toplamıdır: tarihî şehir dokusu, geniş sahil şeridi, çam ormanları ve Toros eteği. Etkinliğinize uygun karakteri seçmenize yardım ediyor ve operasyonu yönetiyoruz.",
    heroMedia: "hero-antalya",
    crumbs: [...base],
    serviceType: "Antalya kurumsal etkinlik organizasyonu",
    areaServed: AREA,
    defaultEventType: "diger",
    sections: [
      {
        kind: "split",
        eyebrow: "Destinasyon",
        title: "Antalya'yı kurumsal etkinlikte güçlü yapan şey çeşitlilik",
        body: [
          "Aynı şehirde sabah antik bir kentte yürüyüş, öğleden sonra sahilde takım yarışması ve akşam Kaleiçi'nde tarihî bir avluda yemek planlanabilir. Bu çeşitlilik, farklı beklentileri olan gruplar için tek destinasyonda çok katmanlı program kurmayı mümkün kılar.",
          "Antalya Havalimanı şehir merkezine ve çevre ilçelere kısa transfer mesafesindedir; uluslararası katılımcılar için pratik bir giriş kapısıdır. Resort odaklı, tek yerleşkeli programlar için ise [Belek kurumsal etkinlik](/belek/kurumsal-etkinlik) sayfasına bakabilirsiniz.",
        ],
        media: "media-antalya-oldtown",
        arch: true,
      },
      {
        kind: "table",
        eyebrow: "Alt bölgeler",
        title: "Antalya'da hangi bölge hangi etkinliğe uygun?",
        head: ["Bölge", "Karakter", "Uygun formatlar", "Dikkat"],
        rows: [
          ["Şehir merkezi (Kaleiçi, Konyaaltı, Lara)", "Tarihî doku, sahil, şehir otelleri", "Şehir oyunları, akşam yemekleri, toplantı ve bayi buluşmaları", "Trafik, otopark, Kaleiçi'nde araç erişim kısıtları"],
          ["Kemer", "Çam ormanı, koylar, marina", "Tekne etkinlikleri, retreat, doğa programları", "Merkezden transfer süresi; yaz yoğunluğu"],
          ["Side – Manavgat", "Antik şehir, uzun kumsal, nehir", "Kültür günleri, plaj etkinlikleri, tekne turu", "Merkezden daha uzun transfer"],
          ["Köprülü Kanyon çevresi", "Nehir, kanyon, Toros eteği", "Rafting, outdoor, doğa günü", "Transfer ve gün planlaması; mevsimsel su seviyesi"],
        ],
        note: "Belek ayrı bir turizm merkezi olarak [Belek sayfalarında](/belek/kurumsal-etkinlik) ele alınmıştır.",
      },
      {
        kind: "index",
        eyebrow: "Format ve mekân",
        title: "Antalya'da kurumsal etkinlik türleri",
        items: [
          { title: "Team building ve motivasyon", text: "Kaleiçi görevleri, sahil olimpiyatları ve Akdeniz mutfağı atölyeleri. Ayrıntı: [Antalya team building](/antalya/team-building).", href: "/antalya/team-building" },
          { title: "Incentive ve gala", text: "Şehir, deniz ve tarih karması programlar; tarihî mekânlarda veya sahilde ödül akşamları. Ayrıntı: [Antalya incentive](/antalya/incentive).", href: "/antalya/incentive" },
          { title: "Retreat ve toplantı", text: "Butik otel, çam ormanı ve Toros eteğinde sakin çalışma ortamları. Ayrıntı: [Antalya corporate retreat](/antalya/corporate-retreat).", href: "/antalya/corporate-retreat" },
          { title: "Outdoor aktiviteler", text: "Rafting, jeep safari, tekne ve yürüyüş rotaları. Ayrıntı: [Antalya outdoor aktiviteler](/antalya/kurumsal-outdoor-aktiviteler).", href: "/antalya/kurumsal-outdoor-aktiviteler" },
          { title: "Mekân seçimi", text: "Şehir otelleri, beach club'lar ve tarihî avlular. Ayrıntı: [Antalya etkinlik mekânları](/antalya/kurumsal-etkinlik-mekanlari).", href: "/antalya/kurumsal-etkinlik-mekanlari" },
          { title: "Etkinlik personeli", text: "Çok dilli host, servis ve operasyon ekipleri. Ayrıntı: [Antalya event staff](/antalya/event-staff).", href: "/antalya/event-staff" },
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Planlama",
        title: "Antalya'da etkinlik planlarken akılda tutulacaklar",
        items: [
          "Yaz aylarında gündüz sıcaklığı yüksektir; açık hava programlarını sabaha veya akşama alın.",
          "Yüksek sezonda (yaz, bayram haftaları) otel ve mekân kapasitesi erken dolar.",
          "İlkbahar ve sonbahar, outdoor ve şehir programları için en verimli dönemlerdir.",
          "Şehir içi trafik ve uzak ilçeler arası transfer süresi program akışına yansıtılmalıdır.",
          "Kış aylarında toplantı, retreat ve kültür programları sakin ve ekonomik bir seçenek sunar.",
          "Açık alan etkinliklerinde belediye ve mekân izinleri önceden alınmalıdır.",
        ],
      },
      {
        kind: "scenarios",
        title: "Antalya için örnek kurgular",
        items: [
          { title: "Şehir merkezinde yönetim toplantısı + akşam", text: "Şehir otelinde yarım gün toplantı, ardından Kaleiçi'nde yönlendirmeli yürüyüş ve tarihî avluda akşam yemeği.", group: "40 kişi", duration: "1 gün", format: "Toplantı + şehir + yemek", media: "scenario-antalya-meeting" },
          { title: "Kemer'de tekne ve koy günü", text: "Sabah özel tekneyle koylar, öğle yemeği teknede, akşam Kemer'de serbest zaman ve ortak akşam yemeği.", group: "70 kişi", duration: "1 gün", format: "Tekne + yemek", media: "scenario-antalya-boat" },
        ],
      },
    ],
    faq: [
      {
        q: "Antalya'da kurumsal etkinlik için hangi bölge seçilmeli?",
        a: "Şehir dokusu, çeşitlilik ve kolay ulaşım arıyorsanız şehir merkezi; çam ormanı ve koylar için Kemer; kültür ve plaj için Side–Manavgat uygundur. Tek yerleşkede konaklama ve toplantı isteniyorsa Belek daha pratik olabilir; karşılaştırma için [Antalya mı, Belek mi?](/rehberler/antalya-mi-belek-mi) rehberine bakın.",
      },
      {
        q: "Antalya'da etkinlik için en uygun mevsim hangisi?",
        a: "Outdoor ve şehir programları için ilkbahar ve sonbahar en verimli dönemlerdir. Yaz deniz etkinlikleri için cazip ancak sıcak ve yoğundur; kış toplantı ve retreat için sakin ve uygun maliyetlidir.",
      },
      {
        q: "Havalimanı karşılama ve transfer hizmetini de sağlıyor musunuz?",
        a: "Evet. Uçuş saatlerine göre gruplanmış karşılama ve transfer planı programın parçasıdır; uluslararası gruplarda isimli karşılama masası kurulur.",
      },
      {
        q: "Antalya'da kaç kişiye kadar etkinlik yönetebiliyorsunuz?",
        a: "Küçük yönetim toplantılarından yüzlerce kişilik gala ve bayi toplantılarına kadar çalışıyoruz. Çok büyük gruplarda mekân kapasitesi ve tedarikçi sayısı planlamanın belirleyici unsurudur.",
      },
    ],
    related: ["/kurumsal-etkinlik-organizasyonu", "/belek/kurumsal-etkinlik", "/antalya/team-building", "/antalya/incentive", "/kurumsal-etkinlik-mekanlari"],
    guides: ["antalyada-sirket-etkinligi-fikirleri", "antalya-mi-belek-mi", "antalya-kurumsal-etkinlik-mekanlari"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/antalya/team-building",
    kind: "destination",
    metaTitle: "Antalya Team Building | Kaleiçi, Sahil ve Akdeniz Mutfağı",
    metaDescription:
      "Antalya'da team building: Kaleiçi şehir görevleri, sahil olimpiyatları, Akdeniz mutfağı atölyeleri ve Düden çevresinde doğa programları. Teklif alın.",
    h1: "Antalya Team Building: Şehrin Kendisi Bir Oyun Alanı",
    eyebrow: "Antalya · Team building",
    lead:
      "Antalya'da team building için hazır bir sahne var: taş sokaklı Kaleiçi, geniş sahil, zengin mutfak ve kolay ulaşılan doğa. Hedefe göre bu sahnelerden birini ya da hepsini bir program içinde birleştiriyoruz.",
    heroMedia: "hero-antalya-team",
    crumbs: [...base, { label: "Team Building", href: "/antalya/team-building" }],
    serviceType: "Antalya team building etkinlikleri",
    areaServed: AREA,
    defaultEventType: "team-building",
    sections: [
      {
        kind: "split",
        eyebrow: "Şehir görevi",
        title: "Kaleiçi'nde yönlendirmeli şehir macerası",
        body: [
          "Kaleiçi'nin dar sokakları, Hadrian Kapısı çevresi, eski liman ve avlulu mekânlar, şehir temalı keşif oyunları için doğal bir harita sunar. Takımlar ipuçlarını çözer, fotoğraf görevlerini tamamlar ve yerel esnafla küçük etkileşimlere girer.",
          "Oyun akışı hem mekâna saygılı hem de dar sokaklara uygun grup büyüklüklerinde (küçük takımlar halinde) tasarlanır. Genel team building mantığı ve diğer formatlar için [team building](/team-building) sayfasına bakın.",
        ],
        bullets: [
          "Takım başına kısa rota, yedek rota ve acil durum iletişim hattı",
          "Fotoğraf, bulmaca ve sözlü görev karışımı; herkese rol",
          "Finişte ortak mekânda değerlendirme ve ödül anı",
        ],
        media: "media-antalya-citytask",
        mediaSide: "left",
      },
      {
        kind: "index",
        eyebrow: "Antalya'ya özgü formatlar",
        title: "Beş farklı Antalya team building kurgusu",
        items: [
          { title: "Akdeniz mutfağı atölyesi", text: "Takımlar yerel lezzetlerden (piyaz, hibeş, zeytinyağlılar, ızgara) oluşan bir menüyü şef eşliğinde hazırlar ve birlikte yer. Rol paylaşımı ve zamanlama gerektirir." },
          { title: "Konyaaltı plaj olimpiyatı", text: "Kumda voleybol, halat çekme, su balonu ve takım yarışları; sonrasında sahilde ortak yemek veya gün batımı." },
          { title: "Düden çevresi doğa ve görev günü", text: "Şelale çevresinde yürüyüş, takımlar arası yönlendirmeli görevler ve piknik. Yarım gün veya tam gün." },
          { title: "Tekne ve koy günü", text: "Kemer veya Antalya limanından kalkan özel tekneyle koy turu; takım içi görevler ve deniz aktiviteleri." },
          { title: "Tarih ve fotoğraf oyunu", text: "Perge veya Aspendos gibi antik alanlara düzenlenen kültür çıkışında fotoğraf ve bilgi görevleri." },
        ],
      },
      {
        kind: "table",
        eyebrow: "Seçim",
        title: "Hedefe göre Antalya formatı",
        head: ["Hedef", "Önerilen format", "Süre", "Grup"],
        rows: [
          ["Yeni ekip tanışması", "Kaleiçi şehir görevi", "3–4 saat", "15–60 kişi"],
          ["Büyük grupla enerji", "Konyaaltı plaj olimpiyatı", "3–5 saat", "50–300 kişi"],
          ["Güven ve rol paylaşımı", "Akdeniz mutfağı atölyesi", "3 saat", "12–60 kişi"],
          ["Yönetim ekibi kaynaşması", "Tekne ve koy günü", "Gün boyu", "10–60 kişi"],
          ["Kültür ve ortak merak", "Antik alan fotoğraf oyunu", "Yarım gün", "20–120 kişi"],
        ],
      },
      {
        kind: "scenarios",
        title: "Örnek Antalya team building senaryoları",
        items: [
          { title: "Yeni kurulan departman için şehir günü", text: "Sabah Kaleiçi görevi, öğle yemeği rotanın sonunda, öğleden sonra yarım saatlik değerlendirme.", group: "35 kişi", duration: "Yarım gün", format: "Şehir görevi", media: "scenario-antalya-team" },
          { title: "Satış ekibi için mutfak günü", text: "Antalya mutfağından beş tabak; her takım bir tabaktan sorumlu, ortak masada buluşur.", group: "50 kişi", duration: "Akşamüstü", format: "Mutfak atölyesi", media: "scenario-team-cooking" },
        ],
      },
      {
        kind: "links",
        title: "Devamında bakabilecekleriniz",
        items: [
          { label: "Belek team building", href: "/belek/team-building", text: "Resort, golf ve çam ormanı içinde programlar." },
          { label: "Antalya outdoor aktiviteler", href: "/antalya/kurumsal-outdoor-aktiviteler", text: "Rafting, jeep ve tekne seçenekleri." },
          { label: "Kurumsal oyun örnekleri", href: "/rehberler/kurumsal-oyun-ornekleri", text: "Uygulanabilir oyun fikirleri." },
          { label: "Antalya'da şirket etkinliği fikirleri", href: "/rehberler/antalyada-sirket-etkinligi-fikirleri", text: "Geniş fikir listesi." },
        ],
      },
    ],
    faq: [
      {
        q: "Kaleiçi şehir görevi ne kadar sürer ve kaç kişiye uygundur?",
        a: "Genellikle 3–4 saat sürer. Dar sokaklar nedeniyle büyük gruplar küçük takımlara bölünür ve takımlar farklı rotalardan başlatılır; böylece hem akış hem mekân sakin kalır.",
      },
      {
        q: "Mutfak atölyesi için mekân gerekir mi?",
        a: "Evet. Atölye için profesyonel veya yarı profesyonel bir mutfak, açık bahçe ya da restoran alanı kullanılır; ekipman, şef ve malzemeyi biz organize ederiz.",
      },
      {
        q: "Yağış durumunda şehir görevi ne olur?",
        a: "Şehir görevi için kapalı mekân alternatifi veya saat kaydırma planı hazırlanır. Antalya'da yağış genellikle kısa sürelidir; kriterleri önceden birlikte belirleriz.",
      },
      {
        q: "Alkolsüz atölye mümkün mü?",
        a: "Elbette. Mocktail atölyesi, kahve tadımı veya yemek atölyesi gibi alkolsüz formatlar tamamen kapsayıcı ve yaygın bir seçenektir.",
      },
    ],
    related: ["/team-building", "/belek/team-building", "/antalya/kurumsal-outdoor-aktiviteler", "/antalya/kurumsal-etkinlik"],
    guides: ["team-building-fikirleri", "kurumsal-oyun-ornekleri", "antalyada-sirket-etkinligi-fikirleri"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/antalya/incentive",
    kind: "destination",
    metaTitle: "Antalya Incentive Programları | Şehir, Deniz ve Tarih",
    metaDescription:
      "Antalya incentive programları: Kaleiçi akşamı, tekne günü, antik kent gezisi ve gala. Çeşitlilik arayan satış ve bayi grupları için ödül seyahati organizasyonu.",
    h1: "Antalya Incentive Programları: Çeşitliliğin Ödül Olduğu Destinasyon",
    eyebrow: "Antalya · Incentive",
    lead:
      "Antalya incentive programlarında en güçlü kart çeşitliliktir: aynı seyahatte tarih, deniz, doğa ve gastronomi bir arada. Katılımcıya 'her gün farklı bir deneyim' hissi veren, ancak lojistiği tek ekipte toplanmış programlar kuruyoruz.",
    heroMedia: "hero-antalya-incentive",
    crumbs: [...base, { label: "Incentive", href: "/antalya/incentive" }],
    serviceType: "Antalya incentive (ödül seyahati) organizasyonu",
    areaServed: AREA,
    defaultEventType: "incentive",
    sections: [
      {
        kind: "split",
        eyebrow: "Antalya'nın farkı",
        title: "Bir destinasyonda dört farklı gün",
        body: [
          "Resort merkezli, tek yerleşkeli incentive'lerde program resort'un sınırları içinde şekillenir. Antalya'da ise konaklama bir merkezdir ve her gün bir başka yöne çıkış yapılır: şehir, antik kent, sahil, doğa.",
          "Bu yapı, daha önce başka destinasyonları görmüş ve 'yeni bir şey' bekleyen gruplar için uygundur. Resort konforu odaklı programlar için [Belek incentive](/belek/incentive) sayfasını inceleyin; genel yapı için [incentive organizasyonu](/incentive-organizasyonu) sayfası var.",
        ],
        media: "media-antalya-incentive-days",
        arch: true,
      },
      {
        kind: "index",
        eyebrow: "Gün seçenekleri",
        title: "Program günlerine yerleştirilebilecek deneyimler",
        items: [
          { tag: "Kültür", title: "Antik kent günü", text: "Perge, Aspendos veya Side çevresinde rehberli gezi, yerel öğle yemeği ve akşam kapanışı. Günün sonunda uyku dostu bir transfer planlanır." },
          { tag: "Deniz", title: "Tekne ve koy günü", text: "Özel tekneyle koylar, yüzme ve öğle yemeği; Kemer veya Antalya limanından çıkış." },
          { tag: "Doğa", title: "Toros ve kanyon günü", text: "Jeep safari, kanyon yürüyüşü veya Köprüçay'da rafting; grup yapısına ve kondisyona göre alternatifli." },
          { tag: "Gastronomi", title: "Kaleiçi akşamı", text: "Taş avluda yerel menü, canlı müzik ve rehberli yürüyüş; şehrin akşam atmosferi." },
          { tag: "Yükseklik", title: "Tahtalı'da gün batımı", text: "Teleferikle dağa çıkış ve gün batımı; deniz ve şehri tepeden gören özel akşam." },
        ],
      },
      {
        kind: "table",
        eyebrow: "Program",
        title: "Üç, dört ve beş günlük Antalya incentive iskeletleri",
        head: ["Süre", "Gün akışı", "Uygun hedef kitle"],
        rows: [
          ["3 gün · 2 gece", "Karşılama + şehir akşamı → tekne günü → gala ve dönüş", "Yüksek performanslı satış ekibi, 30–80 kişi"],
          ["4 gün · 3 gece", "Karşılama → kültür günü → doğa günü → gala + dönüş", "Bayi ağı, 60–150 kişi"],
          ["5 gün · 4 gece", "Karşılama → şehir → tekne → serbest gün → gala + dönüş", "Üst düzey bayiler, uluslararası grup"],
        ],
        note: "Katılımcıya seçenekli günler sunmak memnuniyeti artırır; kayıt ve gruplama sistemini önceden kurarız.",
      },
      { kind: "pull", text: "Çeşitlilik, ancak lojistik görünmezken ödüldür; katılımcı yalnızca deneyimi yaşamalıdır." },
      {
        kind: "scenarios",
        title: "Örnek Antalya incentive kurguları",
        items: [
          { title: "Dört günlük bayi incentive'i", text: "Karşılama akşamı, Aspendos ve Side kültür günü, tekne günü ve ödül gecesi.", group: "100 kişi", duration: "4 gün · 3 gece", format: "Kültür + deniz + gala", media: "scenario-antalya-incentive" },
          { title: "Üst düzey satış ekibi için üç gün", text: "Kaleiçi akşamı, özel tekne günü ve gün batımında yemekli ödül töreni.", group: "30 kişi", duration: "3 gün · 2 gece", format: "Şehir + tekne + ödül", media: "scenario-antalya-boat" },
        ],
      },
    ],
    faq: [
      {
        q: "Antalya incentive için hangi otel bölgeleri öne çıkar?",
        a: "Şehir merkezi ve Lara/Konyaaltı hatları şehir programları için; Kemer çam ormanı ve koy deneyimi için uygundur. Grup büyüklüğü, ulaşım ve bütçe dengesine göre bölge seçimi birlikte yapılır.",
      },
      {
        q: "Aynı programda birden fazla otel kullanılabilir mi?",
        a: "Evet; ancak her otel değişimi lojistik karmaşıklığı artırır. Çoğu grup için tek merkez otel ve günlük çıkışlar daha pratiktir.",
      },
      {
        q: "Incentive ile Belek karşılaştırması nasıl yapılır?",
        a: "Çeşitlilik ve şehir dokusu için Antalya, resort konforu ve golf için Belek tercih edilir. Ayrıntılı karşılaştırma için [Antalya mı, Belek mi?](/rehberler/antalya-mi-belek-mi) rehberine bakın.",
      },
    ],
    related: ["/incentive-organizasyonu", "/belek/incentive", "/gala-organizasyonu", "/antalya/kurumsal-etkinlik"],
    guides: ["incentive-organizasyonu-nedir", "antalya-mi-belek-mi", "antalyada-sirket-etkinligi-fikirleri"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/antalya/corporate-retreat",
    kind: "destination",
    metaTitle: "Antalya Corporate Retreat | Butik Otel, Orman ve Toros",
    metaDescription:
      "Antalya'da corporate retreat: Kaleiçi butik otelleri, Kemer çam ormanı, Olympos çevresi ve Toros eteği. Küçük yönetim ekipleri için sakin, odaklı çalışma ortamları.",
    h1: "Antalya Corporate Retreat: Sakin Ortamlarda Odaklı Çalışma",
    eyebrow: "Antalya · Corporate retreat",
    lead:
      "Büyük resort'lar dışında da Antalya'nın çok sayıda sakin köşesi var: Kaleiçi'nin butik otelleri, Kemer'in çam ormanı, Olympos çevresi ve Toros eteğindeki sakin yerleşimler. Küçük ekipler için kalabalıksız, odaklı retreat ortamları kuruyoruz.",
    heroMedia: "hero-antalya-retreat",
    crumbs: [...base, { label: "Corporate Retreat", href: "/antalya/corporate-retreat" }],
    serviceType: "Antalya corporate retreat organizasyonu",
    areaServed: AREA,
    defaultEventType: "corporate-retreat",
    sections: [
      {
        kind: "split",
        eyebrow: "Ruh hali",
        title: "Retreat'in ruh hali mekânı seçtirir",
        body: [
          "Aynı yönetim ekibi için bir strateji retreat'i ile bir yenilenme retreat'i çok farklı mekânlar ister. Antalya'da bu ayrım şehirden dağa uzanan geniş seçenekle yapılabilir.",
          "Genel retreat çerçevesi ve türleri için [corporate retreat](/corporate-retreat) sayfasına, resort ve golf odaklı alternatif için [Belek corporate retreat](/belek/corporate-retreat) sayfasına bakın.",
        ],
        media: "media-antalya-retreat-mood",
        mediaSide: "left",
        arch: true,
      },
      {
        kind: "table",
        eyebrow: "Ortam seçimi",
        title: "Ortama göre retreat karakteri",
        head: ["Ortam", "Karakter", "Uygun retreat", "Grup"],
        rows: [
          ["Kaleiçi butik otelleri", "Tarihî avlular, sakin akşamlar, yürünebilir şehir", "Strateji, liderlik, ekip kurma", "8–30 kişi"],
          ["Kemer çam ormanı", "Orman, koy, marina, doğal serinlik", "Yenilenme, yaratıcılık, yönetim ekibi", "10–60 kişi"],
          ["Olympos – Çıralı çevresi", "Sade, doğa içinde, ağaç evler ve pansiyonlar", "Yaratıcı atölye, dijital detoks", "6–25 kişi"],
          ["Toros yaylaları", "Yaz aylarında serin hava, açık manzara", "Yaz stratejisi, yürüyüşlü retreat", "10–40 kişi"],
        ],
        note: "Çıralı gibi bazı bölgelerde konaklama kapasitesi ve toplantı altyapısı sınırlı olabilir; ayrıntılar saha ziyaretinde netleşir.",
      },
      {
        kind: "index",
        eyebrow: "Program fikirleri",
        title: "Çalışmayı destekleyen yan program fikirleri",
        items: [
          { title: "Sabah yürüyüşü", text: "Kaleiçi sokakları, sahil boyu veya orman patikasında 30–40 dakikalık sessiz yürüyüş; günün başlangıcı için sade bir ritüel." },
          { title: "Yerel mutfak akşamı", text: "Küçük masa düzeniyle yerel menü; konuşma temposu çalışma günündekinden farklı." },
          { title: "Gün batımı oturumu", text: "Gün sonu değerlendirmesini dışarıda, doğal ışıkta yapmak enerjiyi yeniden toplar." },
          { title: "Yarım gün serbest zaman", text: "Retreat'in ortasında yarım günlük serbest zaman, çalışmayı taze tutar; yoga, yüzme veya şehir keşfi seçenek olabilir." },
        ],
      },
      {
        kind: "scenarios",
        title: "Örnek Antalya retreat kurguları",
        items: [
          { title: "Kaleiçi'nde yönetim stratejisi", text: "Butik otelde iki günlük çalışma, akşamları tarihî avluda yemek, sabahları kısa yürüyüş.", group: "15 kişi", duration: "2 gün · 1 gece", format: "Butik otel + çalışma", media: "scenario-retreat-boutique" },
          { title: "Kemer'de yaratıcılık atölyesi", text: "Çam ormanında bir otelde atölye günü, öğleden sonra tekne turu ve akşam grup yemeği.", group: "25 kişi", duration: "2 gün", format: "Orman + atölye + tekne", media: "scenario-antalya-boat" },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Hazırlık",
        title: "Retreat'e sekiz haftalık hazırlık",
        items: [
          { title: "8 hafta önce", text: "Hedef, katılımcı listesi ve tarih aralığı; mekân tipi (butik otel, orman, yayla) belirlenir ve müsaitlik sorulur." },
          { title: "5–6 hafta önce", text: "Mekân kesinleşir; gündem taslağı, kolaylaştırıcı ihtiyacı ve yemek-sosyal program planı hazırlanır." },
          { title: "2–3 hafta önce", text: "Katılımcıya gündem, ulaşım ve kıyafet bilgisi gönderilir; hazırlık soruları paylaşılır." },
          { title: "Retreat günleri", text: "Çalışma, mola ve sosyal program akışı yönetilir; çıktılar (karar, eylem listesi) kayıt altına alınır." },
        ],
      },
    ],
    faq: [
      {
        q: "Antalya'da retreat için hangi aylar daha uygun?",
        a: "Sessizlik arıyorsanız ilkbahar, sonbahar ve kış daha uygundur. Yaz aylarında Toros yaylaları serin bir alternatif olabilir; deniz kıyısında ise sıcaklık ve yoğunluk planlama gerektirir.",
      },
      {
        q: "Küçük bir ekip için bile retreat organize edilebilir mi?",
        a: "Evet; 8–10 kişilik ekipler için butik otel veya villa seçenekleri hem verimli hem ekonomik olabilir. Ekip sayısı küçüldükçe mekânın atmosferi ve esnekliği daha önemli hale gelir.",
      },
      {
        q: "Retreat'te toplantı ekipmanı sağlanır mı?",
        a: "Evet. Projeksiyon, ekran, ses, whiteboard ve internet altyapısını mekâna göre sağlar veya tamamlarız.",
      },
    ],
    related: ["/corporate-retreat", "/belek/corporate-retreat", "/antalya/kurumsal-etkinlik-mekanlari", "/antalya/kurumsal-etkinlik"],
    guides: ["corporate-retreat-nedir", "antalya-mi-belek-mi", "antalya-kurumsal-etkinlik-mekanlari"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/antalya/kurumsal-outdoor-aktiviteler",
    kind: "destination",
    metaTitle: "Antalya Kurumsal Outdoor Aktiviteler | Rafting, Jeep, Tekne",
    metaDescription:
      "Antalya'da kurumsal outdoor aktiviteler: Köprüçay rafting, Toros jeep safari, Kemer tekne turu, Göynük Kanyonu ve Phaselis yürüyüşü. Rota, süre ve transfer bilgileriyle.",
    h1: "Antalya Kurumsal Outdoor Aktiviteler: Rota, Süre ve Transfer Planıyla",
    eyebrow: "Antalya · Outdoor aktiviteler",
    lead:
      "Antalya çevresinde nehir, kanyon, orman, koy ve dağ bir saatlik mesafelerde iç içedir. Hangi aktivitenin hangi güzergâhta, hangi sürede ve hangi grup için uygun olduğunu bilmek programın başarısını belirler.",
    heroMedia: "hero-antalya-outdoor",
    crumbs: [...base, { label: "Kurumsal Outdoor Aktiviteler", href: "/antalya/kurumsal-outdoor-aktiviteler" }],
    serviceType: "Antalya kurumsal outdoor aktivite organizasyonu",
    areaServed: AREA,
    defaultEventType: "outdoor",
    sections: [
      {
        kind: "split",
        eyebrow: "Rota mantığı",
        title: "Aktiviteyi seçmeden önce güzergâhı hesaplıyoruz",
        body: [
          "Antalya'da etkinlik günü uzun transferlerle harcanabilir. Aktivite süresi, transfer süresi ve yemek molasını birlikte planlamak, katılımcının günün sonunda yorgun değil memnun dönmesini sağlar.",
          "Güvenlik, ekipman ve hava planı için genel çerçeve [kurumsal outdoor aktiviteler](/kurumsal-outdoor-aktiviteler) sayfasındadır; bu sayfa Antalya bölgesine özgü rotaları anlatır.",
        ],
        media: "media-antalya-route",
        arch: true,
      },
      {
        kind: "table",
        eyebrow: "Rota karşılaştırması",
        title: "Antalya çevresinde öne çıkan outdoor seçenekler",
        head: ["Aktivite", "Bölge", "Süre", "Zorluk", "Merkezden yaklaşık transfer"],
        rows: [
          ["Rafting", "Köprüçay, Köprülü Kanyon çevresi", "Yarım gün – tam gün", "Orta", "Yaklaşık 1,5–2 saat"],
          ["Kanyon yürüyüşü", "Göynük Kanyonu, Kemer çevresi", "Yarım gün", "Kolay – orta", "Yaklaşık 1 saat"],
          ["Jeep safari", "Toros eteği, yaylalar", "Yarım gün – tam gün", "Kolay", "Rotaya göre 45 dk – 1,5 saat"],
          ["Tekne ve koy turu", "Kemer, Antalya limanı", "Yarım gün – tam gün", "Kolay", "30 dk – 1 saat"],
          ["Doğa yürüyüşü", "Phaselis – Olympos çevresi (Likya Yolu etrafı)", "Yarım gün", "Orta", "Yaklaşık 1–1,5 saat"],
          ["SUP / kano", "Konyaaltı, Kemer koyları", "2–3 saat", "Kolay", "Şehirden kısa"],
        ],
        note: "Süreler trafik ve mevsime göre değişir; plan yapılırken çıkış-dönüş saatleri tampon payıyla hesaplanır.",
      },
      {
        kind: "index",
        eyebrow: "Aktivite notları",
        title: "Rota bazlı kısa notlar",
        items: [
          { title: "Köprüçay rafting", text: "Köprülü Kanyon bölgesinde yapılan rafting, doğal manzarası ve takım kürek çekme gerektiren yapısıyla gruplar için güçlü bir deneyimdir. Su seviyesi mevsime göre değişir; uygunluk tarihe göre değerlendirilir." },
          { title: "Göynük Kanyonu", text: "Kemer yakınındaki kanyon, suyun serinliği ve kısa yürüyüş rotasıyla yaz aylarında uygun bir alternatiftir." },
          { title: "Phaselis ve Olympos", text: "Antik kent kalıntıları, koy ve orman yürüyüşünü birleştiren rota; kültür ve doğa için tek günlük program." },
          { title: "Toros jeep safari", text: "Araç konvoyu, yayla molası ve ormanda piknik; fiziksel yük az, görsel etki yüksek. Takım görevleri eklenebilir." },
          { title: "Tekne turu", text: "Kemer veya Antalya limanından kalkan özel tekne; yüzme, snorkeling ve takım yarışları mümkündür." },
        ],
      },
      {
        kind: "scenarios",
        title: "Örnek Antalya outdoor kurguları",
        items: [
          { title: "Rafting + yayla yemeği", text: "Sabah transfer, rafting, nehir kenarı yemek ve dönüş. Kapanışta kısa değerlendirme.", group: "40 kişi", duration: "1 gün", format: "Nehir", media: "scenario-outdoor-rafting" },
          { title: "Kemer koy günü", text: "Sabah tekneyle koylar, öğle yüzme molası, öğleden sonra SUP; dönüşte sahilde gün batımı.", group: "60 kişi", duration: "1 gün", format: "Deniz", media: "scenario-antalya-boat" },
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Katılımcı hazırlığı",
        title: "Antalya'da outdoor güne çıkmadan önce katılımcıya iletilenler",
        items: [
          "Kapalı ve rahat ayakkabı; suyla temas edecek aktivitelerde yedek kıyafet",
          "Güneş kremi, şapka, güneş gözlüğü ve kişisel su şişesi",
          "Sağlık durumu, alerji ve ilaç bilgisi (gerekli aktivitelerde yazılı beyan)",
          "Buluşma noktası, saat ve transfer aracı bilgisi",
          "Telefon ve değerli eşyalar için su geçirmez kılıf veya emanet planı",
          "Hava ve program değişikliği olursa iletişim kanalı",
        ],
      },
    ],
    faq: [
      {
        q: "Antalya'da rafting için en uygun dönem hangisi?",
        a: "Rafting koşulları su seviyesine ve mevsime bağlı olarak değişir. Etkinlik tarihinize göre uygunluğu ve alternatifleri değerlendirir, gerekirse aktiviteyi başka bir güne veya formata kaydırırız.",
      },
      {
        q: "Tek günde birden fazla aktivite yapılabilir mi?",
        a: "Evet; ancak bunun transfer sürelerine bağlı olduğunu unutmayın. Aynı bölgede iki aktivite (ör. Kemer'de tekne ve kanyon) tek güne sığar; farklı yönlerdeki iki aktivite genellikle yorucu olur.",
      },
      {
        q: "Aktivite günü için hava kötüyse ne yapılır?",
        a: "Aktivite türüne göre tarih değişikliği, saat kaydırma veya kapalı alan alternatifi planlanır. İptal koşulları aktivite sağlayıcısıyla önceden netleştirilir.",
      },
    ],
    related: ["/kurumsal-outdoor-aktiviteler", "/antalya/team-building", "/antalya/kurumsal-etkinlik", "/belek/team-building"],
    guides: ["kurumsal-outdoor-aktivite-fikirleri", "antalyada-sirket-etkinligi-fikirleri", "team-building-fikirleri"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/antalya/kurumsal-etkinlik-mekanlari",
    kind: "destination",
    metaTitle: "Antalya Kurumsal Etkinlik Mekanları | Otel, Beach Club, Tarihî",
    metaDescription:
      "Antalya'da kurumsal etkinlik mekanları: şehir otelleri, Kaleiçi avluları, Konyaaltı ve Lara beach club'ları, marina ve fuar-kongre alanları. Bölge ve ulaşım notlarıyla.",
    h1: "Antalya Kurumsal Etkinlik Mekânları: Bölgeye Göre Seçenekler",
    eyebrow: "Antalya · Etkinlik mekânları",
    lead:
      "Antalya'da mekân seçimi bölge seçimidir: Kaleiçi'nin tarihî avluları, Konyaaltı ve Lara'nın beach club'ları, şehir otelleri ve marina çevresi farklı grup ve formatlara hitap eder. Ulaşım ve izin gibi şehre özgü ayrıntıları baştan hesaba katıyoruz.",
    heroMedia: "hero-antalya-venues",
    crumbs: [...base, { label: "Etkinlik Mekânları", href: "/antalya/kurumsal-etkinlik-mekanlari" }],
    serviceType: "Antalya kurumsal etkinlik mekânı seçimi",
    areaServed: AREA,
    defaultEventType: "diger",
    sections: [
      {
        kind: "split",
        eyebrow: "Şehir mekânları",
        title: "Antalya'da mekân, bölgenin karakteridir",
        body: [
          "Kaleiçi'nde restore edilmiş avlular, Konyaaltı ve Lara'da denize açılan alanlar ve şehir merkezindeki oteller etkinliğe farklı tonlar verir. Belek'teki resort yapısından farklı olarak Antalya'da çoğu mekân tek başına bir tesis olmaktan çok bir bölgenin parçasıdır.",
          "Genel mekân bulma hizmeti için [kurumsal etkinlik mekânları](/kurumsal-etkinlik-mekanlari) sayfasına; resort salonları için [Belek mekânları](/belek/kurumsal-etkinlik-mekanlari) sayfasına bakabilirsiniz.",
        ],
        media: "media-antalya-venues",
        mediaSide: "left",
      },
      {
        kind: "table",
        eyebrow: "Bölge matrisi",
        title: "Bölgeye göre mekân tipi ve notlar",
        head: ["Bölge", "Mekân tipi", "Uygun format", "Ulaşım ve not"],
        rows: [
          ["Kaleiçi", "Restore avlular, butik oteller, restoranlar", "Akşam yemeği, kokteyl, küçük gala", "Araç erişimi kısıtlı; yürüyüş mesafeleri ve yük taşıma planı gerekir"],
          ["Konyaaltı", "Beach club'lar, sahil restoranları, oteller", "Gün batımı etkinliği, plaj günü, gala", "Rüzgâr ve ses sınırı; yaz yoğunluğu"],
          ["Lara", "Geniş otel hattı, beach club'lar", "Toplantı, bayi buluşması, plaj etkinliği", "Şehir merkezinden trafik süresi; otel yoğunluğu"],
          ["Marina ve liman", "Tekne, rooftop, liman restoranları", "Tekne etkinliği, kokteyl, küçük grup", "Kapasite ve iskele koşulları"],
          ["Fuar ve kongre alanları", "Büyük salonlar, geniş otopark", "Kongre, lansman, büyük bayi toplantısı", "Teknik altyapı güçlü; atmosfer için dekor gerekir"],
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Şehre özgü kontrol",
        title: "Antalya şehir içinde mekân seçerken ek sorular",
        items: [
          "Kaleiçi'ne araç ve ekipman girişi için izin ve saat kısıtı var mı?",
          "Beach club'ta ses sınırı ve kapanış saati nedir?",
          "Etkinlik gününe rastlayan şehir etkinliği veya trafik yoğunluğu var mı?",
          "Katılımcıların otelden mekâna transfer süresi ne kadar?",
          "Açık alan kullanımı için belediye veya mekân izni gerekiyor mu?",
          "Park ve servis araçları için alan yeterli mi?",
        ],
      },
      {
        kind: "scenarios",
        title: "Örnek mekân kurguları",
        items: [
          { title: "Kaleiçi avlusunda 60 kişilik akşam", text: "Taş avlu, canlı müzik ve oturmalı menü; ekipman gün içinde yaya taşıma planıyla getirilir.", group: "60 kişi", duration: "Akşam", format: "Avlu yemeği", media: "scenario-gala-oldtown" },
          { title: "Konyaaltı'nda gün batımı kokteyli", text: "Beach club'ta ayakta kokteyl, kısa konuşma ve DJ; hava için kapalı alan alternatifi.", group: "150 kişi", duration: "Akşamüstü", format: "Beach club", media: "scenario-gala-beach" },
        ],
      },
      {
        kind: "index",
        eyebrow: "Şehir maliyetleri",
        title: "Şehir içi mekân bütçesini etkileyen dört unsur",
        items: [
          { title: "Ulaşım ve transfer", text: "Otel ile mekân arası mesafe, trafik yoğunluğu ve geç saat dönüş ihtiyacı araç sayısını ve vardiyayı belirler." },
          { title: "Ekipman taşıma", text: "Kaleiçi gibi erişimi kısıtlı bölgelerde ekipman daha fazla işgücü ve zaman gerektirir; bu maliyet teklife yansır." },
          { title: "İzin ve resmî süreçler", text: "Açık alan, müzik ve kapanış saati için gerekli izinler baştan planlanmalıdır; geç alınan izin programı değiştirebilir." },
          { title: "Sezon ve gün", text: "Hafta içi ve düşük sezonda aynı mekân belirgin biçimde daha uygun şartlarla kullanılabilir." },
        ],
      },
    ],
    faq: [
      {
        q: "Antalya'da büyük bir bayi toplantısı için en uygun mekân tipi nedir?",
        a: "Yüzlerce kişiyi bir araya getiren toplantılar için fuar-kongre alanları veya büyük otel salonları uygundur. Konaklama ile toplantı aynı yerde olması isteniyorsa Belek resort'ları da düşünülebilir.",
      },
      {
        q: "Kaleiçi'nde etkinlik düzenlemek zor mu?",
        a: "Araç erişimi ve yük taşıma kısıtları nedeniyle planlama gerektirir; ancak doğru kurguyla küçük ve orta gruplar için çok özgün bir atmosfer sunar.",
      },
      {
        q: "Beach club'larda etkinlik için hangi riskler var?",
        a: "Rüzgâr, ses sınırı ve kapanış saati ana risklerdir. Kapalı alan alternatifi ve ses planı baştan netleştirilir.",
      },
    ],
    related: ["/kurumsal-etkinlik-mekanlari", "/belek/kurumsal-etkinlik-mekanlari", "/gala-organizasyonu", "/antalya/kurumsal-etkinlik"],
    guides: ["antalya-kurumsal-etkinlik-mekanlari", "sirket-etkinligi-nasil-planlanir", "antalya-mi-belek-mi"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/antalya/event-staff",
    kind: "destination",
    metaTitle: "Antalya Event Staff | Çok Dilli Host, Hostes ve Servis",
    metaDescription:
      "Antalya'da event staff: çok dilli host/hostes, servis, kayıt ve supervisor ekipleri. Şehir, Kemer, Side ve Belek'e sevk; sezon ve kısa süreli ihtiyaçlar için planlama.",
    h1: "Antalya Event Staff: Çok Dilli ve Sezona Hazır Etkinlik Ekipleri",
    eyebrow: "Antalya · Event staff",
    lead:
      "Antalya, Türkiye'nin en geniş hizmet sektörü deneyimine sahip şehirlerinden biri. Çok dilli, etkinlik temposuna alışkın ekiplerle şehir merkezi, Kemer, Side ve Belek'teki etkinliklerinize personel sağlıyoruz.",
    heroMedia: "hero-antalya-staff",
    crumbs: [...base, { label: "Event Staff", href: "/antalya/event-staff" }],
    serviceType: "Antalya etkinlik personeli temini",
    areaServed: AREA,
    defaultEventType: "diger",
    sections: [
      {
        kind: "split",
        eyebrow: "Yerel avantaj",
        title: "Turizm kenti olmanın etkinlik personeline katkısı",
        body: [
          "Antalya'da otel, restoran ve organizasyon sektörünün yoğunluğu; farklı dillerde çalışan, uluslararası misafirle iletişime alışkın personel havuzu anlamına gelir. Bu birikim, uluslararası katılımcıların olduğu kongre, incentive ve gala'larda fark yaratır.",
          "Roller ve süreçlerin genel çerçevesi [etkinlik personeli](/etkinlik-personeli) sayfasındadır; bu sayfa Antalya'ya özgü planlama ve sevk konularına odaklanır.",
        ],
        media: "media-antalya-staff",
        arch: true,
      },
      {
        kind: "table",
        eyebrow: "Dil ve profil",
        title: "Dil ve rol kombinasyonları",
        head: ["Dil", "Uygun roller", "Tipik etkinlik"],
        rows: [
          ["Türkçe + İngilizce", "Host/hostes, kayıt, bilgi masası, servis", "Çoğu kurumsal etkinlik ve uluslararası kongre"],
          ["Almanca", "Karşılama, VIP refakat, bilgi masası", "Almanya ve Avusturya pazarından gelen gruplar"],
          ["Rusça", "Karşılama, bilgi masası, transfer koordinasyonu", "Rusça konuşan pazarlardan gelen gruplar"],
          ["Diğer diller", "Gerektiğinde ek araştırma ile", "Küçük uluslararası gruplar"],
        ],
        note: "Dil seviyesi ve rol dağılımı etkinliğe göre netleştirilir; gerektiğinde kısa bir görüşme ile profil doğrulanır.",
      },
      {
        kind: "index",
        eyebrow: "Bölgeye sevk",
        title: "Antalya merkezli ekiplerin sevk edildiği bölgeler",
        items: [
          { title: "Şehir merkezi, Lara ve Konyaaltı", text: "Kısa mesafe, hızlı planlama; son dakika taleplerinde en esnek bölge." },
          { title: "Kemer", text: "Şehirden sevk ile günü birlik veya konaklamalı ekipler; transfer planı vardiya saatleriyle uyumlu." },
          { title: "Side – Manavgat", text: "Daha uzun transfer nedeniyle konaklamalı ekip veya erken çıkış planı önerilir." },
          { title: "Belek", text: "Resort etkinlikleri için konaklamalı veya günlük sevk; [Belek etkinlikleri](/belek/kurumsal-etkinlik) için bölgeye uygun planlama." },
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Planlama",
        title: "Antalya'da personel planlarken dikkat edilecekler",
        items: [
          "Yüksek sezonda (yaz, bayram) personel temini için erken planlama gerekir.",
          "Uzak ilçelere sevk için transfer ve vardiya saatleri programa eklenmelidir.",
          "Uluslararası gruplarda dil ihtiyacı roller bazında belirtilmelidir.",
          "Açık hava etkinliklerinde sıcaklık için mola, gölge ve su planı yapılmalıdır.",
          "Gece etkinliklerinde personelin dönüş transferi planlanmalıdır.",
        ],
      },
      {
        kind: "steps",
        eyebrow: "Süreç",
        title: "Talepten sahaya dört adım",
        items: [
          { title: "Talep", text: "Etkinlik tarihi, saat, rol ve kişi sayısı, dil ihtiyacı ve kıyafet beklentisi formda iletilir." },
          { title: "Profil önerisi", text: "Rol ve etkinliğin tonuna uygun adaylar önerilir; gerekirse kısa görüşme veya fotoğraf onayı yapılır." },
          { title: "Brifing", text: "Etkinlikten önce program, mekân planı ve kurallar anlatılır; kıyafet ve buluşma saati teyit edilir." },
          { title: "Sahada yönetim", text: "Supervisor ekibi yönetir; mola, görev değişimi ve gün sonu kapanışı koordine edilir." },
        ],
      },
    ],
    faq: [
      {
        q: "Antalya'da son dakikada personel bulmak mümkün mü?",
        a: "Sezona ve tarihe bağlıdır. Düşük sezonda kısa sürede ekip kurmak kolaydır; yüksek sezonda ve bayram haftalarında erken planlama önemlidir. İhtiyacınızı form üzerinden iletmeniz yeterli.",
      },
      {
        q: "Personel nereden sevk edilir ve ulaşım nasıl sağlanır?",
        a: "Ekipler Antalya merkezli çalışır; etkinlik bölgesine sevk ve dönüş transferi teklifte ayrıca planlanır.",
      },
      {
        q: "Çok dilli personelin dil seviyesi nasıl doğrulanır?",
        a: "Rol için gereken seviyeye göre kısa bir görüşme veya deneme ile doğrulama yapılır. Brief'te dil ve rol ihtiyacını belirtmeniz yeterlidir.",
      },
    ],
    related: ["/etkinlik-personeli", "/antalya/kurumsal-etkinlik", "/gala-organizasyonu", "/kongre-konferans-organizasyonu"],
    guides: ["sirket-etkinligi-nasil-planlanir", "kurumsal-etkinlik-butcesi-nasil-hazirlanir", "etkinlik-ajansi-nasil-secilir"],
  },
];
