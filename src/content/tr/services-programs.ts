import type { PageContent } from "../types";

const AREA = ["Antalya", "Belek"];

export const servicesPrograms: PageContent[] = [
  /* ------------------------------------------------------------------ */
  {
    path: "/incentive-organizasyonu",
    kind: "service",
    metaTitle: "Incentive Organizasyonu | Ödül Programı Tasarımı Antalya",
    metaDescription:
      "Satış ve performans başarısını destinasyon deneyimiyle ödüllendiren incentive programları: karşılama, konaklama, aktivite, gala ve transfer. Antalya ve Belek'te teklif alın.",
    h1: "Incentive Organizasyonu: Başarıyı Destinasyon Deneyimine Dönüştürün",
    eyebrow: "Hizmet · Incentive & MICE",
    lead:
      "Incentive, bir hedefi aşan ekibe 'teşekkürler' demenin en akılda kalıcı yoludur. Karşılamadan veda akşamına kadar katılımcının kendini ödüllendirilmiş hissettiği bir program tasarlıyor ve sahada yönetiyoruz.",
    heroMedia: "hero-incentive",
    crumbs: [{ label: "Incentive Organizasyonu", href: "/incentive-organizasyonu" }],
    serviceType: "Incentive (ödül seyahati) organizasyonu",
    areaServed: AREA,
    defaultEventType: "incentive",
    sections: [
      {
        kind: "split",
        eyebrow: "Tanım",
        title: "Incentive, kazanılmış bir deneyimdir",
        body: [
          "Incentive programı; satış, bayi veya performans hedefini aşan kişileri seyahat ve deneyimle ödüllendiren, çoğunlukla birkaç günlük kurumsal programdır. Başarılı olması için katılımcının 'ödül hak ettim' duygusunu yaşaması gerekir; sıradan bir tatil veya toplantı gibi hissettiren program amacına ulaşmaz.",
          "Kavramın ayrıntısı için [incentive organizasyonu nedir](/rehberler/incentive-organizasyonu-nedir) rehberine bakabilirsiniz.",
        ],
        bullets: [
          "**Kazanma kriteri ile uyum:** Program, hedefin zorluğuna denk bir ödül hissi vermelidir.",
          "**Özel erişim:** Herkesin gidemeyeceği mekân ve deneyimler programın değerini yükseltir.",
          "**Ortak anı:** Katılımcılar arasında ağ ve aidiyet oluşturan paylaşımlı anlar.",
          "**Sorunsuz lojistik:** Katılımcı hiçbir pratik detayı düşünmek zorunda kalmamalıdır.",
        ],
        media: "media-incentive-reward",
        mediaSide: "left",
        arch: true,
      },
      {
        kind: "index",
        eyebrow: "Örnek akış",
        title: "Dört günlük bir incentive'in iskeleti",
        intro: "Her program kitleye ve destinasyona göre yeniden kurulur; aşağıdaki akış tasarım mantığını gösterir.",
        items: [
          { tag: "Gün 1", title: "Varış ve karşılama", text: "Havalimanında isimli karşılama, bagaj ve transfer koordinasyonu, otelde hızlı check-in ve akşam için sakin bir açılış yemeği." },
          { tag: "Gün 2", title: "Destinasyon deneyimi", text: "Gruba uygun ana aktivite: golf, tekne, tarih turu veya açık hava. Katılımcılara seçenekli programlar sunmak memnuniyeti artırır." },
          { tag: "Gün 3", title: "Serbest zaman ve gala akşamı", text: "Gün boyu esneklik, akşam ise ödül töreni ve gala. Sahne, ses, ışık ve servisle bütünleşik bir gece; ayrıntılar [gala organizasyonu](/gala-organizasyonu) sayfasında." },
          { tag: "Gün 4", title: "Veda ve dönüş", text: "Geç çıkış, bagaj ve transfer planı, havalimanına vardiyalı dönüş. Son izlenim programın hatırlanmasını belirler." },
        ],
      },
      { kind: "pull", text: "İyi bir incentive'in ölçüsü, katılımcının eve dönünce 'tatil yaptım' değil 'ödüllendirildim' demesidir." },
      {
        kind: "table",
        eyebrow: "Bütçe",
        title: "Incentive bütçesini belirleyen ana kalemler",
        head: ["Kalem", "Bütçeye etkisi", "Optimizasyon yolu"],
        rows: [
          ["Konaklama", "Genellikle en büyük kalem; sezon ve otel sınıfına göre değişir", "Omuz sezonları (ilkbahar, sonbahar) tarih esnekliği"],
          ["Program yoğunluğu", "Aktivite sayısı ve özel erişim maliyeti", "Az ama etkili anlar; seçenekli aktivite günü"],
          ["Gala ve prodüksiyon", "Sahne, ışık, ses, eğlence ve servis düzeyi", "Mekânın mevcut altyapısını kullanan kurgu"],
          ["Transfer ve karşılama", "Grup büyüklüğü ve vardiya sayısı", "Uçuş saatlerini gruplamak"],
          ["Personel ve yönetim", "Saha ekibi ve supervisor sayısı", "Program yoğunluğuna uygun kadrolama"],
        ],
        note: "Genel bütçe çerçevesi için [kurumsal etkinlik bütçesi nasıl hazırlanır](/rehberler/kurumsal-etkinlik-butcesi-nasil-hazirlanir) rehberine bakın.",
      },
      {
        kind: "split",
        eyebrow: "Uluslararası gruplar",
        title: "Yurt dışından gelen katılımcılar için ek koordinasyon",
        body: [
          "Birçok incentive grubu farklı ülkelerden aynı destinasyonda buluşur. Uçuş saatleri dağınık olduğunda karşılama ve transfer en kırılgan halka haline gelir.",
          "Isimli karşılama masası, uçuş saatlerine göre gruplanmış transferler, çok dilli personel ve kültürel hassasiyetlere (diyet, program saatleri) göre menü ve program uyarlamasıyla bu riski azaltırız.",
        ],
        media: "media-incentive-international",
        tone: "sand",
      },
      {
        kind: "scenarios",
        title: "Örnek incentive kurguları",
        items: [
          { title: "Belek'te üç günlük satış incentive'i", text: "Resort içinde konaklama, golf kliniği ve turnuva, plaj gala'sı ve ödül töreni. Tek yerleşke sayesinde transfer ihtiyacı çok azdır.", group: "80 kişi", duration: "3 gün · 2 gece", format: "Resort + golf + gala", media: "scenario-belek-incentive" },
          { title: "Antalya'da kültür ve deniz karması", text: "Kaleiçi akşamı, tekneyle koy turu ve Aspendos çıkışı; geniş bir program arayan gruplar için çeşitlilik odaklı.", group: "60 kişi", duration: "4 gün · 3 gece", format: "Şehir + deniz + tarih", media: "scenario-antalya-incentive" },
        ],
      },
      {
        kind: "links",
        eyebrow: "Lokasyon",
        title: "Incentive için iki destinasyon",
        items: [
          { label: "Antalya incentive", href: "/antalya/incentive", text: "Şehir, tarih ve deniz çeşitliliğiyle geniş programlar." },
          { label: "Belek incentive", href: "/belek/incentive", text: "Resort, golf ve plaj merkezli konforlu programlar." },
          { label: "Gala organizasyonu", href: "/gala-organizasyonu", text: "Ödül gecesi için prodüksiyon ve servis." },
          { label: "Antalya mı, Belek mi?", href: "/rehberler/antalya-mi-belek-mi", text: "Destinasyon seçimi için karşılaştırma." },
        ],
      },
    ],
    faq: [
      {
        q: "Incentive programı için ne kadar önceden planlama yapılmalı?",
        a: "Özellikle yüksek sezonda otel ve mekân kapasitesi için 4–6 ay önceden başlamak güvenlidir. Omuz sezonlarında bu süre kısalabilir. Tarih esnekliği hem seçenekleri hem bütçeyi olumlu etkiler.",
      },
      {
        q: "Incentive ile corporate retreat arasındaki fark nedir?",
        a: "Incentive ödül odaklıdır; katılımcılar belirli bir hedefi aşarak hak kazanır ve program keyfe odaklanır. [Corporate retreat](/corporate-retreat) ise çalışma, strateji ve yenilenme odaklıdır; katılımcılar genellikle kendi ekibidir.",
      },
      {
        q: "Eş ve partner katılımı mümkün mü?",
        a: "Evet. Eş katılımlı programlarda ayrı program akışı ve ek konaklama kalemleri planlanır. Bu, bütçeyi ve transfer planını etkilediği için formda belirtilmesi önerilir.",
      },
      {
        q: "Uçuş ve vize işlemlerini de üstleniyor musunuz?",
        a: "Programın yer üstü bileşenlerini (karşılama, konaklama, transfer, aktivite, gala) yönetiriz. Uçuş ve vize süreçleri için kurumun mevcut seyahat ortağıyla koordinasyon sağlarız.",
      },
      {
        q: "Program içeriğini katılımcılar seçebilir mi?",
        a: "Evet. Birden fazla aktivite sunup katılımcıya seçim hakkı vermek memnuniyeti artırır. Bunu yönetmek için kayıt ve gruplama sistemini önceden kurarız.",
      },
    ],
    related: ["/gala-organizasyonu", "/corporate-retreat", "/antalya/incentive", "/belek/incentive", "/etkinlik-personeli"],
    guides: ["incentive-organizasyonu-nedir", "antalya-mi-belek-mi", "kurumsal-etkinlik-butcesi-nasil-hazirlanir"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/corporate-retreat",
    kind: "service",
    metaTitle: "Corporate Retreat Organizasyonu | Strateji ve Yenilenme",
    metaDescription:
      "Yönetim ve ekipler için çok günlük corporate retreat: çalışma oturumları, kolaylaştırma, yenilenme ve sosyal program. Antalya ve Belek'te mekân ve operasyon desteği.",
    h1: "Corporate Retreat Organizasyonu: İş ve Yenilenme Bir Arada",
    eyebrow: "Hizmet · Corporate retreat",
    lead:
      "Retreat, ekibi gündelik akıştan çıkarıp stratejiye, birbirine ve kendine zaman ayırabileceği bir ortama taşır. Çalışma düzenini, mekân atmosferini ve boş zamanı aynı bütün içinde tasarlıyoruz.",
    heroMedia: "hero-retreat",
    crumbs: [{ label: "Corporate Retreat", href: "/corporate-retreat" }],
    serviceType: "Corporate retreat (kurumsal off-site) organizasyonu",
    areaServed: AREA,
    defaultEventType: "corporate-retreat",
    sections: [
      {
        kind: "split",
        eyebrow: "Retreat nedir?",
        title: "Çalışmak için uzaklaşmak, yenilenmek için çalışmak",
        body: [
          "Corporate retreat, çoğunlukla 8–60 kişilik yönetim veya proje ekiplerinin 2–3 gün boyunca ofis dışında çalışma ve dinlenmeyi birleştirdiği buluşmadır. Incentive'in aksine ödül değil çalışma ana eksendir; team building'in aksine tek bir aktivite değil bütün bir program söz konusudur.",
          "Kavramı daha geniş anlatan [corporate retreat nedir](/rehberler/corporate-retreat-nedir) rehberini de okuyabilirsiniz.",
        ],
        bullets: [
          "Strateji ve planlama oturumları için sessiz, gün ışıklı çalışma alanı",
          "Küçük grup çalışmaları için ayrı oda veya açık alan",
          "Oturumlar arasında yürüyüş, spor, spa gibi yenilenme alanları",
          "Akşamları ekip bağını güçlendiren, düşük tempolu sosyal program",
        ],
        media: "media-retreat-working",
        arch: true,
      },
      {
        kind: "table",
        eyebrow: "Retreat türleri",
        title: "Amaca göre retreat kurgusu",
        head: ["Tür", "Odak", "Oturum / sosyal denge", "Mekân ihtiyacı"],
        rows: [
          ["Strateji retreat'i", "Yıllık hedef, yol haritası, öncelik belirleme", "Yüksek çalışma, akşam sosyal", "Sessiz salon, panolar, break-out odaları"],
          ["Liderlik retreat'i", "Yönetim ekibinin birlikte çalışma biçimi", "Dengeli; kolaylaştırıcı eşliğinde", "Dairesel oturma, doğal ışık"],
          ["Ekip kurma retreat'i", "Yeni veya birleşen ekibin ilişkisi", "Daha fazla ortak deneyim", "Açık hava alanı, esnek salon"],
          ["Yaratıcılık / inovasyon", "Fikir üretimi ve prototip", "Atölye ağırlıklı", "Hareketli mobilya, malzeme alanı"],
          ["Yenilenme retreat'i", "Tükenmişlik ve enerji toparlama", "Düşük çalışma, yüksek dinlenme", "Spa, sakin doğa, yoga alanı"],
        ],
      },
      {
        kind: "steps",
        eyebrow: "Örnek gün",
        title: "Bir çalışma gününün ritmi",
        intro: "Yoğunluk sabah yüksek, öğleden sonra düşük tutulduğunda verim genellikle artar. Aşağıdaki akış örnektir.",
        items: [
          { title: "Sabah oturumu", text: "En zor konu için en iyi saat. Kolaylaştırıcı eşliğinde 2–3 saatlik çalışma; kısa ara ve kahve molaları." },
          { title: "Öğle ve hareket", text: "Ortak öğle yemeği ve kısa yürüyüş. Çalışmanın dışında, doğal sohbet için alan." },
          { title: "Öğleden sonra atölyesi", text: "Küçük gruplarda uygulama odaklı çalışma; sonuçlar kısa sunumlarla paylaşılır." },
          { title: "Akşam", text: "Düşük tempolu ortak yemek, canlı müzik veya sahilde gün batımı; gün sonu değerlendirme için gayriresmî ortam." },
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Mekân kriterleri",
        title: "Retreat mekânında aradığımız on işaret",
        items: [
          "Doğal ışık alan, dış gürültüden yalıtılmış çalışma salonu",
          "Break-out için ek oda veya açık alan",
          "Stabil internet ve ses/görüntü altyapısı",
          "Yürüyüş ve nefes alma alanı (bahçe, orman, sahil)",
          "Sağlıklı ve esnek yemek seçenekleri",
          "Spor, spa veya yoga imkânı",
          "Konaklama ile çalışma alanı arasında kısa mesafe",
          "Sezona uygun sakinlik: yüksek sezonda kalabalık retreat'in düşmanıdır",
          "Gizlilik: toplantı salonuna dışarıdan erişimin kontrolü",
          "Ulaşım: havalimanına makul transfer süresi",
        ],
      },
      {
        kind: "scenarios",
        title: "Örnek retreat kurguları",
        items: [
          { title: "Yönetim ekibinin strateji buluşması", text: "Belek'te sakin bir resort'ta iki gün çalışma, öğleden sonra golf kliniği veya yürüyüş, akşam ortak yemek.", group: "20 kişi", duration: "3 gün · 2 gece", format: "Resort + çalışma + golf", media: "scenario-retreat-strategy" },
          { title: "Proje ekibi atölyesi", text: "Antalya'da küçük bir butik otelde iki günlük atölye; Kaleiçi'nde akşam yemeği ve kısa şehir turu.", group: "12 kişi", duration: "2 gün", format: "Butik otel + atölye", media: "scenario-retreat-boutique" },
        ],
      },
      {
        kind: "links",
        eyebrow: "Lokasyon",
        title: "Retreat için lokasyon seçenekleri",
        items: [
          { label: "Belek corporate retreat", href: "/belek/corporate-retreat", text: "Resort, golf ve spa ile tek yerleşkede retreat." },
          { label: "Antalya corporate retreat", href: "/antalya/corporate-retreat", text: "Butik otel, çam ormanı ve Toros eteği seçenekleri." },
          { label: "Kurumsal etkinlik mekânları", href: "/kurumsal-etkinlik-mekanlari", text: "Mekân bulma hizmeti." },
          { label: "Incentive organizasyonu", href: "/incentive-organizasyonu", text: "Ödül odaklı program arayanlar için." },
        ],
      },
    ],
    faq: [
      {
        q: "Retreat'ler için hangi mevsim en uygun?",
        a: "Sessizlik ve odak arıyorsanız yüksek sezon dışındaki dönemler (ilkbahar, sonbahar ve kış) daha uygundur: mekânlar daha sakin, fiyatlar çoğunlukla daha makuldür. Yaz retreat'leri deniz ve açık hava imkânı sağlasa da kalabalık ve sıcaklık planlama gerektirir.",
      },
      {
        q: "Retreat için bir kolaylaştırıcı (facilitator) bulabilir misiniz?",
        a: "Evet, ihtiyacınıza uygun kolaylaştırıcı veya eğitmenle çalışmak üzere koordinasyon yaparız. İçeriği kolaylaştırıcı ve kurumunuz birlikte belirler; bizim rolümüz mekân, akış ve lojistiktir.",
      },
      {
        q: "En az kaç kişilik grup için retreat düzenlenebilir?",
        a: "Sekiz-on kişilik ekipler için bile uygun mekânlar mevcut. Küçük gruplarda butik otel, villa veya resort'un küçük toplantı salonu daha verimli olabilir.",
      },
      {
        q: "Retreat'te alkol ve sosyal program zorunlu mu?",
        a: "Hayır. Program ve içecek seçenekleri ekibin kültürüne göre tasarlanır; alkolsüz, sakin ve kapsayıcı sosyal program da kolayca kurgulanabilir.",
      },
    ],
    related: ["/incentive-organizasyonu", "/team-building", "/kurumsal-etkinlik-mekanlari", "/belek/corporate-retreat", "/antalya/corporate-retreat"],
    guides: ["corporate-retreat-nedir", "sirket-etkinligi-nasil-planlanir", "antalya-mi-belek-mi"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/gala-organizasyonu",
    kind: "service",
    metaTitle: "Gala Organizasyonu ve Ödül Töreni | Prodüksiyon & Servis",
    metaDescription:
      "Kurumsal gala ve ödül törenlerinde konsept, sahne-ses-ışık, servis, eğlence ve akış yönetimini birlikte kuruyoruz. Antalya ve Belek'te gala için teklif alın.",
    h1: "Gala Organizasyonu ve Ödül Törenleri: Akışı Yönetilen Geceler",
    eyebrow: "Hizmet · Gala & ödül töreni",
    lead:
      "Gala geceleri, kurumun yıl boyunca biriken enerjisini tek bir akşamda toplar. Dekordan sahneye, menüden müzik akışına her ayrıntıyı dakika dakika yönetilen bir programa bağlıyoruz.",
    heroMedia: "hero-gala",
    crumbs: [{ label: "Gala Organizasyonu", href: "/gala-organizasyonu" }],
    serviceType: "Kurumsal gala ve ödül töreni organizasyonu",
    areaServed: AREA,
    defaultEventType: "gala",
    sections: [
      {
        kind: "split",
        eyebrow: "Yaklaşım",
        title: "Bir gala üç katmanda kurulur",
        body: [
          "İyi bir gala, hem misafirin hem yönetimin hatırlayacağı tek bir akışa sahiptir. Bunu sağlayan şey bütçeden çok birbirine bağlı üç katmandır: anlatı, prodüksiyon ve servis.",
        ],
        bullets: [
          "**Anlatı:** Gecenin teması, kurum mesajı, konuşma ve ödül anlarının sırası",
          "**Prodüksiyon:** Sahne, ışık, ses, LED, dekor ve teknik ekip",
          "**Servis:** Karşılama, menü, servis hızı ve personel yönetimi",
        ],
        media: "media-gala-layers",
        arch: true,
      },
      {
        kind: "index",
        eyebrow: "Akış",
        title: "Bir gecenin run-of-show bileşenleri",
        items: [
          { title: "Karşılama ve kokteyl", text: "Kayıt, masa yönlendirmesi, karşılama içeceği ve fotoğraf alanı. İlk 30 dakika gecenin tonunu belirler." },
          { title: "Açılış ve konuşmalar", text: "Sunucu, yönetim konuşması ve kısa video. Konuşmaların uzunluğu ve ses seviyesi önceden prova edilir." },
          { title: "Yemek ve servis akışı", text: "Menü sırası, servis saatleri ve program anlarının çakışmaması için servis ekibiyle senkron planlama." },
          { title: "Ödül töreni", text: "Ödül sırası, sahne yönetimi, görsel içerik ve fotoğraf çekimi. Detay aşağıda." },
          { title: "Eğlence ve kapanış", text: "Canlı müzik, DJ veya gösteri; dans alanının açılması ve kapanış saati planı." },
        ],
      },
      {
        kind: "table",
        eyebrow: "Format",
        title: "Gala formatları ve teknik notlar",
        head: ["Format", "Uygun kapasite", "Güçlü yönü", "Teknik not"],
        rows: [
          ["Oturmalı yemekli gala", "80–600 kişi", "Resmî ve ödül odaklı gecelere uygun", "Masa düzeni, servis koridoru, sahne görünürlüğü"],
          ["Ayakta kokteyl", "50–400 kişi", "Ağ kurma ve rahat sohbet", "Yeterli oturma noktası ve bar sayısı"],
          ["Konser + yemek", "100–800 kişi", "Katılım enerjisi yüksek", "Sahne boyutu, ses yalıtımı ve çıkış saati"],
          ["Plaj veya açık hava gala'sı", "60–500 kişi", "Atmosfer ve fotoğraf değeri", "Rüzgâr, zemin, ses kısıtları, yedek plan"],
        ],
        note: "Kapasiteler mekâna göre değişir; kesin sayılar saha ziyaretinde netleşir.",
      },
      {
        kind: "split",
        eyebrow: "Ödül törenleri",
        title: "Ödül töreni gecenin kalbidir; en çok bu bölüm bozulur",
        body: [
          "Ödül töreninde zamanlama, ses ve içerik uyumu belirleyicidir. Yanlış ödül, kayıp isim ve yanlış sırayla yapılan teşekkür gecenin geri kalanını gölgeler.",
          "Bu yüzden ödül listesi, isim ve unvan yazımları, görsel içerik ve sahne giriş çıkışları provayla kontrol edilir. Ödüller için bir yedek kopya ve sahne arkasında sorumlu kişi atanır.",
        ],
        media: "media-gala-awards",
        tone: "sand",
        mediaSide: "left",
      },
      {
        kind: "checklist",
        eyebrow: "Teknik kontrol",
        title: "Gece öncesi tamamlanan kontrol listesi",
        items: [
          "Ses ve mikrofon provası, yedek mikrofon ve yedek ekipman",
          "Işık ve sahne programlamasının yönetim akışıyla uyumu",
          "Elektrik kapasitesi ve gerekirse jeneratör planı",
          "Servis personeli brifingi ve çalışma bölgeleri",
          "Konuşmacı ve sunucu metinlerinin son kontrolü",
          "Hava, rüzgâr ve yağış için kapalı alan veya çadır alternatifi",
          "Otel veya mekânın ses ve saat sınırlarının doğrulanması",
          "Acil durum çıkışları, ilk yardım ve güvenlik",
        ],
      },
      {
        kind: "scenarios",
        title: "Örnek gala kurguları",
        items: [
          { title: "Belek'te plajda ödül gecesi", text: "Gün batımında karşılama, oturmalı yemek, ödül töreni ve konserle kapanış. Hava için kapalı salon alternatifi hazır.", group: "250 kişi", duration: "Akşam", format: "Plaj + ödül", media: "scenario-gala-beach" },
          { title: "Antalya'da tarihi mekânda yıl sonu galası", text: "Taş avlulu bir mekânda kokteyl, kısa yönetim konuşması ve canlı müzik; mekâna uygun hafif prodüksiyon.", group: "120 kişi", duration: "Akşam", format: "Tarihi mekân + kokteyl", media: "scenario-gala-oldtown" },
        ],
      },
      {
        kind: "links",
        title: "Gala ile birlikte planlananlar",
        items: [
          { label: "Belek gala organizasyonu", href: "/belek/gala-organizasyonu", text: "Resort ve golf alanı merkezli geceler." },
          { label: "Etkinlik personeli", href: "/etkinlik-personeli", text: "Servis, karşılama ve operasyon ekibi." },
          { label: "Kurumsal etkinlik mekânları", href: "/kurumsal-etkinlik-mekanlari", text: "Gala için mekân seçenekleri." },
          { label: "Lansman organizasyonu", href: "/lansman-organizasyonu", text: "Ürün ve marka açılışları için sahne kurgusu." },
        ],
      },
    ],
    faq: [
      {
        q: "Açık hava gala'larında hava riskini nasıl yönetiyorsunuz?",
        a: "Her açık hava gala'sı için kapalı alan veya çadır alternatifi ve karar saati planlanır. Rüzgâr ve yağış tahmini etkinlik haftasında yakından izlenir; geçiş sürecinde ekip ve tedarikçilerle ortak bir senaryo uygulanır.",
      },
      {
        q: "Ses ve saat sınırlamaları gala'yı nasıl etkiler?",
        a: "Resort ve otellerde konukları rahatsız etmemek için ses seviyesi ve kapanış saati sınırları olabilir. Bu bilgi mekân seçiminde ilk sorduğumuz konulardan biridir; program akışı ve müzik planı bu sınırlara göre kurulur.",
      },
      {
        q: "Sunucu, DJ ve sanatçı temini yapıyor musunuz?",
        a: "Evet. Etkinliğin tonuna ve kitleye uygun sunucu, DJ, canlı müzik ve gösteri önerileri sunarız. Seçim öncesinde örnek içerik ve referans çalışmalar paylaşılır.",
      },
      {
        q: "Menü ve diyet ihtiyaçlarını nasıl yönetiyorsunuz?",
        a: "Katılımcıların diyet ve alerji bilgileri kayıt aşamasında toplanır, mutfakla paylaşılır ve servis sırasında masa bazında kontrol edilir.",
      },
      {
        q: "Gala için minimum katılımcı sayısı var mı?",
        a: "Resmî bir alt sınır yok; ancak küçük gruplarda (50 kişi altı) genellikle kokteyl veya özel yemek formatı daha etkili ve ekonomiktir.",
      },
    ],
    related: ["/belek/gala-organizasyonu", "/lansman-organizasyonu", "/etkinlik-personeli", "/kurumsal-etkinlik-mekanlari", "/incentive-organizasyonu"],
    guides: ["sirket-etkinligi-nasil-planlanir", "kurumsal-etkinlik-butcesi-nasil-hazirlanir", "belek-kurumsal-etkinlik-mekanlari"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/bayi-toplantisi-organizasyonu",
    kind: "service",
    metaTitle: "Bayi Toplantısı Organizasyonu | Satış Ağı Buluşmaları",
    metaDescription:
      "Bayi, distribütör ve satış ağı toplantıları: içerik akışı, ürün alanı, ödül gecesi, konaklama ve transfer tek planda. Antalya ve Belek'te bayi toplantısı için teklif alın.",
    h1: "Bayi Toplantısı Organizasyonu: Satış Ağını Bir Araya Getiren Programlar",
    eyebrow: "Hizmet · Bayi & satış toplantısı",
    lead:
      "Bayi toplantısı, markanın satış ağıyla ilişkisini güçlendiren yılın en önemli buluşmalarından biridir. İçerik, ağırlama ve ağ kurma dengesini kurarak bayilerin hem bilgi hem motivasyonla ayrılmasını sağlıyoruz.",
    heroMedia: "hero-dealer",
    crumbs: [{ label: "Bayi Toplantısı", href: "/bayi-toplantisi-organizasyonu" }],
    serviceType: "Bayi, distribütör ve satış toplantısı organizasyonu",
    areaServed: AREA,
    defaultEventType: "toplanti",
    sections: [
      {
        kind: "split",
        eyebrow: "Yaklaşım",
        title: "İçerik öne, ağırlama arkaya değil: ikisi birlikte",
        body: [
          "Bayi toplantılarında en sık görülen hata, bütün sunumları bir güne sıkıştırıp akşamı eğlenceye bırakmaktır. Bayi; yeni ürünü, satış hedeflerini ve markanın yönünü anlamak ister, fakat aynı zamanda tanınmak ve ağ kurmak ister.",
          "Bu yüzden programı içerik bloklarıyla serbest ağ kurma anlarını dengeleyen bir akış olarak kuruyoruz. [Nasıl organize edilir?](/rehberler/bayi-toplantisi-nasil-organize-edilir) rehberinde adımları ayrıntılı anlattık.",
        ],
        bullets: [
          "Genel oturum ve ürün sunumları kısa, görsel ve net olur.",
          "Bölge veya ürün gruplarına göre paralel oturumlar kurulur.",
          "Ürün deneyim alanı bayiye ürünü dokunarak tanıtır.",
          "Bayi başarıları ödül anıyla görünür kılınır.",
        ],
        media: "media-dealer-flow",
        arch: true,
      },
      {
        kind: "table",
        eyebrow: "Örnek akış",
        title: "İki günlük bayi toplantısı iskeleti",
        head: ["Zaman", "Gün 1", "Gün 2"],
        rows: [
          ["Sabah", "Kayıt, açılış konuşması, pazar ve strateji sunumu", "Ürün ve satış atölyeleri (paralel oturumlar)"],
          ["Öğle", "Ayakta öğle yemeği ve ürün deneyim alanı", "Ortak öğle yemeği, bölge bazlı masalar"],
          ["Öğleden sonra", "Yeni ürün tanıtımı, bayi panelleri", "Kısa kapanış oturumu, geri bildirim"],
          ["Akşam", "Ödül töreni ve gala yemeği", "Serbest zaman veya isteğe bağlı aktivite"],
        ],
        note: "Akış, katılımcı sayısı ve içerik yoğunluğuna göre yeniden kurulur.",
      },
      {
        kind: "index",
        eyebrow: "Katılımcı lojistiği",
        title: "Programın dışında yönetilen ayrıntılar",
        items: [
          { title: "Kayıt ve yaka kartı", text: "Önceden online kayıt, yaka kartı, oturum seçimi ve katılımcı listesi; kapıda bekleme süresi minimumda tutulur." },
          { title: "Konaklama ve oda dağıtımı", text: "Otel bloklaması, check-in akışı, oda listeleri ve geç gelen katılımcılar için plan." },
          { title: "Transfer", text: "Havalimanı, otel ve mekân arası vardiyalı transferler; uçuş saatlerine göre gruplama." },
          { title: "Teknik altyapı", text: "Sahne, ses, ışık, LED ekran, simültane çeviri ve anket/oylama sistemleri." },
          { title: "Ağırlama ve servis", text: "Öğle yemekleri, kahve molaları ve akşam servisi; program anlarıyla senkron." },
        ],
      },
      {
        kind: "scenarios",
        title: "Örnek bayi toplantısı kurguları",
        items: [
          { title: "Kemer'de iki günlük bayi buluşması", text: "Sabah genel oturum ve ürün alanı, öğleden sonra aktivite seçenekleri, akşam ödül töreni ve konserle kapanış.", group: "150 kişi", duration: "2 gün", format: "Toplantı + ödül gecesi", media: "scenario-dealer" },
          { title: "Belek'te bölge toplantısı", text: "Resort'un konferans salonunda tek günlük içerik programı; öğle yemeği, akşam yemeği ve geceleme tek yerleşkede.", group: "70 kişi", duration: "1 gün + gece", format: "Resort toplantısı", media: "scenario-dealer-belek" },
        ],
      },
      {
        kind: "links",
        title: "Bayi toplantısıyla birlikte planlananlar",
        items: [
          { label: "Gala organizasyonu", href: "/gala-organizasyonu", text: "Ödül gecesi için prodüksiyon ve servis." },
          { label: "Lansman organizasyonu", href: "/lansman-organizasyonu", text: "Yeni ürün tanıtımı için sahne." },
          { label: "Etkinlik personeli", href: "/etkinlik-personeli", text: "Kayıt, karşılama ve servis ekibi." },
          { label: "Kongre ve konferans organizasyonu", href: "/kongre-konferans-organizasyonu", text: "Büyük katılımlı programlar için operasyon." },
        ],
      },
    ],
    faq: [
      {
        q: "Bayi toplantısı kaç gün sürmeli?",
        a: "İçerik yoğunluğuna bağlıdır. Tek günlük toplantı kısa ürün ve strateji güncellemesi için yeterlidir; ürün lansmanı, ödül gecesi ve ağ kurma beklentisi varsa iki gün daha verimlidir.",
      },
      {
        q: "Bayi toplantısı için mekân Antalya mı Belek mi olmalı?",
        a: "Konaklama, toplantı ve gala'nın aynı yerde olması istenirse Belek'teki resort'lar pratiktir; şehir dokusu ve geniş aktivite çeşitliliği isteniyorsa Antalya uygundur. Karar için [Antalya mı, Belek mi?](/rehberler/antalya-mi-belek-mi) rehberine bakın.",
      },
      {
        q: "Katılımcı kaydını sizin üstlenmeniz mümkün mü?",
        a: "Evet. Online kayıt formu, katılımcı listesi, yaka kartı ve sahada kayıt masasını kurar ve yönetiriz; veriler sizinle paylaşılır.",
      },
      {
        q: "Toplantı ile birlikte aktivite eklemek mümkün mü?",
        a: "Evet. Toplantı sonrası kısa bir aktivite (plaj, tekne, golf, yemek atölyesi) ağ kurmayı destekler; [team building](/team-building) formatlarından bayi grubuna uygun olanlar seçilebilir.",
      },
    ],
    related: ["/gala-organizasyonu", "/lansman-organizasyonu", "/kongre-konferans-organizasyonu", "/etkinlik-personeli", "/belek/kurumsal-etkinlik"],
    guides: ["bayi-toplantisi-nasil-organize-edilir", "sirket-etkinligi-nasil-planlanir", "antalya-mi-belek-mi"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/lansman-organizasyonu",
    kind: "service",
    metaTitle: "Lansman Organizasyonu | Ürün ve Marka Açılış Etkinlikleri",
    metaDescription:
      "Ürün ve marka lansmanlarında anlatı, sahne, medya ve içerik üretimini birlikte kuruyoruz. Antalya ve Belek'te lansman organizasyonu için teklif alın.",
    h1: "Lansman Organizasyonu: Ürün ve Marka Açılışları İçin Sahne",
    eyebrow: "Hizmet · Lansman",
    lead:
      "Lansman, ürünün ya da markanın ilk izlenimidir ve ikinci şansı yoktur. Anlatıyı, sahneyi, konuk yönetimini ve içerik üretimini aynı takvimde birleştirerek lansmanı bir ana dönüştürüyoruz.",
    heroMedia: "hero-launch",
    crumbs: [{ label: "Lansman Organizasyonu", href: "/lansman-organizasyonu" }],
    serviceType: "Ürün ve marka lansmanı organizasyonu",
    areaServed: AREA,
    defaultEventType: "lansman",
    sections: [
      {
        kind: "split",
        eyebrow: "Yaklaşım",
        title: "Lansman bir sunum değil, bir anlatıdır",
        body: [
          "İyi bir lansmanın merkezinde tek bir an vardır: açılış (reveal). Salon, ışık, ses, konuşma ve konuk sırası bu ana doğru ilerler; sonrasında konuklar ürünü deneyimleyerek kalıcı bir izlenim edinir.",
          "Bu yüzden lansmanı bir tanıtım programı değil, başı-ortası-sonu olan bir hikâye olarak kurguluyoruz.",
        ],
        bullets: [
          "**Anlatı:** Ürünün neden önemli olduğunu tek cümlede kuran ana mesaj",
          "**Reveal:** Sahne, ışık, ses ve zamanlama ile kurulan açılış anı",
          "**Deneyim alanları:** Ürünle dokunsal ve görsel temas",
          "**İçerik:** Lansmanın sonrasını taşıyacak foto, video ve sosyal içerik",
        ],
        media: "media-launch-reveal",
        arch: true,
        mediaSide: "left",
      },
      {
        kind: "index",
        eyebrow: "Bileşenler",
        title: "Lansmanın beş parçası",
        items: [
          { title: "Davet ve konuk yönetimi", text: "Davet listesi, RSVP, kayıt, protokol ve VIP karşılama; konuk deneyimi kapıdan başlar." },
          { title: "Sahne ve reveal", text: "Sahne tasarımı, LED içerik, ışık programlaması ve konuşmaların süre yönetimi." },
          { title: "Demo ve deneyim alanları", text: "Ürünün tanıtıldığı etkileşimli köşeler; ekip eğitimi ve ürün uzmanı yönlendirmesi." },
          { title: "Medya ve influencer", text: "Basın kiti, röportaj alanı, medya ve içerik üreticilerinin yönetimi; hedef kitleye uygun seçim." },
          { title: "İçerik üretimi", text: "Etkinliği kaydeden foto ve video ekibi; lansman sonrası kullanılacak kısa içerikler." },
        ],
      },
      {
        kind: "table",
        eyebrow: "Lansman türleri",
        title: "Hedefe göre lansman yapısı",
        head: ["Tür", "Ana kitle", "Süre", "Vurgu"],
        rows: [
          ["Basın ve medya lansmanı", "Gazeteciler, yorumcular", "Yarım gün", "Basın kiti, röportaj, haber değeri"],
          ["Bayi ve iş ortağı lansmanı", "Satış ağı", "1 gün", "Satış mesajı, ürün eğitimi, sipariş heyecanı"],
          ["Müşteri deneyim lansmanı", "Davetli müşteriler", "Akşam", "Deneyim, atmosfer, kişisel temas"],
          ["Hibrit lansman", "Salon + çevrim içi izleyici", "1–2 saat canlı", "Yayın kalitesi, etkileşim, sahne-kamera uyumu"],
        ],
      },
      {
        kind: "steps",
        eyebrow: "Geri sayım",
        title: "Lansman takvimi",
        items: [
          { title: "8–10 hafta önce", text: "Brief, anlatı, mekân ve tarih; ana tedarikçilerin opsiyonları." },
          { title: "5–6 hafta önce", text: "Sahne tasarımı, içerik üretim planı, davet listesi ve medya stratejisi." },
          { title: "2–3 hafta önce", text: "Davetler, RSVP takibi, prova planı, teknik kesinleştirme." },
          { title: "Son hafta", text: "Teknik prova, konuşmacı provası, brifingler ve yedek plan doğrulaması." },
          { title: "Lansman günü", text: "Saha yönetimi, canlı kayıt ve konuk yönetimi; ertesi gün içerik ve kapanış raporu." },
        ],
      },
      {
        kind: "scenarios",
        title: "Örnek lansman kurguları",
        items: [
          { title: "Antalya'da müşteri deneyim lansmanı", text: "Davetli müşterilere özel akşam: reveal, deneyim köşeleri ve kapanışta canlı müzik; tüm içerik video olarak derlenir.", group: "120 kişi", duration: "Akşam", format: "Davetli lansman", media: "scenario-launch-antalya" },
          { title: "Belek'te bayi lansmanı", text: "Resort'ta sabah ürün sunumu, öğleden sonra eğitim oturumları; akşam gala'sı ile sipariş heyecanı.", group: "200 kişi", duration: "1 gün + gece", format: "Lansman + gala", media: "scenario-launch-belek" },
        ],
      },
      {
        kind: "links",
        title: "Lansmanla ilişkili hizmetler",
        items: [
          { label: "Gala organizasyonu", href: "/gala-organizasyonu", text: "Lansman sonrası akşam programı." },
          { label: "Bayi toplantısı organizasyonu", href: "/bayi-toplantisi-organizasyonu", text: "Satış ağına dönük tanıtım toplantısı." },
          { label: "Kurumsal etkinlik mekânları", href: "/kurumsal-etkinlik-mekanlari", text: "Lansman için mekân seçenekleri." },
          { label: "Etkinlik personeli", href: "/etkinlik-personeli", text: "Konuk karşılama ve organizasyon ekibi." },
        ],
      },
    ],
    faq: [
      {
        q: "Lansman için ne kadar önceden planlamaya başlanmalı?",
        a: "Sahne ve prodüksiyonu olan bir lansman için 8–10 hafta önce başlamak sağlıklıdır. Daha kısa sürelerde (3–4 hafta) de çalışabiliriz; bu durumda tasarım ve tedarik seçenekleri daralır, kararların hızlı verilmesi gerekir.",
      },
      {
        q: "Lansmanı canlı yayınlamak mümkün mü?",
        a: "Evet. Hibrit lansmanda salon ve çevrim içi izleyici aynı program akışına bağlanır; kamera, ses ve internet altyapısı salonun sahne kurgusuyla birlikte tasarlanır ve önceden denenir.",
      },
      {
        q: "Basın ve influencer davetlerini yönetiyor musunuz?",
        a: "Davet, kayıt ve ağırlama süreçlerini yönetiriz. Medya ve içerik üreticisi listesinin kurum stratejisine göre belirlenmesi için markanızın iletişim ekibiyle birlikte çalışırız.",
      },
      {
        q: "Otomotiv veya dış mekân gerektiren lansmanlar mümkün mü?",
        a: "Evet. Test sürüşü, açık hava sergisi veya saha gösterisi gibi formatlar için güvenlik, zemin, izin ve ses planı önceden değerlendirilir.",
      },
    ],
    related: ["/gala-organizasyonu", "/bayi-toplantisi-organizasyonu", "/kurumsal-etkinlik-mekanlari", "/etkinlik-personeli"],
    guides: ["sirket-etkinligi-nasil-planlanir", "kurumsal-etkinlik-butcesi-nasil-hazirlanir", "etkinlik-ajansi-nasil-secilir"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/kongre-konferans-organizasyonu",
    kind: "service",
    metaTitle: "Kongre ve Konferans Organizasyonu | Operasyon Yönetimi",
    metaDescription:
      "Kongre ve konferanslar için kayıt, salon düzeni, simültane çeviri, hibrit yayın, konaklama ve transfer operasyonu. Antalya'da kongre organizasyonu için teklif alın.",
    h1: "Kongre ve Konferans Organizasyonu: Operasyonun Görünmeyen Gücü",
    eyebrow: "Hizmet · Kongre & konferans",
    lead:
      "Kongre ve konferans, bilimsel veya sektörel içeriği doğru kişilere doğru zamanda ulaştırma işidir. İçeriği siz belirlersiniz; kayıttan salon düzenine, çeviriden yayına, konaklamadan transfere operasyonu biz yürütürüz.",
    heroMedia: "hero-congress",
    crumbs: [{ label: "Kongre & Konferans", href: "/kongre-konferans-organizasyonu" }],
    serviceType: "Kongre ve konferans operasyon yönetimi",
    areaServed: AREA,
    defaultEventType: "kongre",
    sections: [
      {
        kind: "split",
        eyebrow: "Kapsam",
        title: "Kongre operasyonu neleri kapsar?",
        body: [
          "Kongre ve konferansın başarısı çoğu zaman gözle görülmeyen operasyona bağlıdır: doğru kayıt akışı, çalışan teknik sistem, salonlar arası zamanlama ve kolay ulaşılabilir bilgi.",
          "İçerik (bilimsel program, bildiri seçimi, konuşmacı davetleri) kurumunuzda ya da bilimsel komitede kalır; biz bunları operasyona bağlayan lojistik ve teknik yapıyı kurar ve sahada yönetiriz.",
        ],
        bullets: [
          "Katılımcı kayıt sistemi, rozet ve sahada kayıt masası",
          "Salon planı, break-out odaları ve fuaye / sponsor alanı",
          "Ses, görüntü, simültane çeviri ve hibrit yayın",
          "Konuşmacı ve moderatör koordinasyonu",
          "Konaklama bloklaması, transfer ve sosyal program",
        ],
        media: "media-congress-ops",
        arch: true,
      },
      {
        kind: "table",
        eyebrow: "Salon planı",
        title: "Oturma düzenine göre alan ihtiyacı",
        intro: "Salon düzeni kapasiteyi ve katılımcı deneyimini doğrudan belirler. Aşağıdaki değerler yaklaşık referanstır; kesin ölçü mekâna ve mobilyaya göre netleşir.",
        head: ["Düzen", "Uygun kullanım", "Kişi başı yaklaşık alan"],
        rows: [
          ["Tiyatro", "Genel oturum, açılış ve konuşmalar", "0,8 – 1 m²"],
          ["Sınıf (classroom)", "Not alınan oturum, eğitim", "1,5 – 2 m²"],
          ["U düzeni", "Küçük çalışma grubu, görüşme", "2 – 3 m²"],
          ["Banket", "Yemek ve gala oturumları", "1,5 – 2 m²"],
          ["Kokteyl / ayakta", "Fuaye, ağ kurma, sponsor alanı", "0,7 – 1 m²"],
        ],
        note: "Sahne, ekran, ses ve sirkülasyon alanı ek yer ihtiyacı doğurur; saha ziyaretinde kontrol edilir.",
      },
      {
        kind: "checklist",
        eyebrow: "Teknik şartname",
        title: "Salon seçerken sorduğumuz teknik sorular",
        items: [
          "Tavan yüksekliği ve ekran görünürlüğü (arka sıralar)",
          "Sütun veya engel olmadan görüş hattı",
          "Salonun ses yalıtımı ve komşu salonlarla etkileşim",
          "İnternet bant genişliği ve yedekli bağlantı",
          "Simültane çeviri kabinleri için yer ve kablolama",
          "Yük giriş-çıkışı, sahne kurulum süresi ve saat kısıtları",
          "Engelli erişimi, acil çıkış ve güvenlik kapasitesi",
          "Fuaye alanı, kahve molası kapasitesi ve sirkülasyon",
        ],
      },
      {
        kind: "index",
        eyebrow: "Hibrit ve dijital",
        title: "Salon dışına açılan kongre",
        items: [
          { title: "Canlı yayın ve kayıt", text: "Çok kameralı yayın, slayt entegrasyonu ve oturum kayıtları; sonradan erişim için içerik arşivi." },
          { title: "Etkileşim araçları", text: "Anket, soru-cevap, oylama ve moderatör paneli; hem salon hem çevrim içi izleyiciyi kapsayacak şekilde." },
          { title: "Çok dilli erişim", text: "Simültane çeviri veya altyazı çözümleri; uluslararası katılımcı oranına göre seçim." },
        ],
      },
      {
        kind: "links",
        title: "İlgili hizmetler",
        items: [
          { label: "Bayi toplantısı organizasyonu", href: "/bayi-toplantisi-organizasyonu", text: "Satış ağı odaklı toplantılar." },
          { label: "Kurumsal etkinlik mekânları", href: "/kurumsal-etkinlik-mekanlari", text: "Kongre salonu ve otel seçenekleri." },
          { label: "Etkinlik personeli", href: "/etkinlik-personeli", text: "Kayıt, karşılama ve salon görevlileri." },
          { label: "Gala organizasyonu", href: "/gala-organizasyonu", text: "Kongre gala yemeği ve ödül anı." },
        ],
      },
    ],
    faq: [
      {
        q: "Kongre organizasyonu için mekân seçerken nelere bakılır?",
        a: "Kapasite ve oturma düzeni, salon sayısı, break-out odaları, ses ve görüntü altyapısı, internet, fuaye alanı ve konaklama kapasitesi ana ölçütlerdir. Ayrıca havalimanına mesafe ve transfer akışı uluslararası katılımcılar için önemlidir.",
      },
      {
        q: "Bilimsel program ve bildiri sürecini de yönetiyor musunuz?",
        a: "İçeriğin kendisi (bilimsel program, bildiri seçimi) kurumunuzun veya bilimsel komitenin sorumluluğundadır. Biz içerik akışını operasyona bağlayan kayıt, salon ve zaman yönetimini üstleniriz.",
      },
      {
        q: "Hibrit kongre için ek ekip gerekir mi?",
        a: "Evet. Hibrit formatta yayın yönetmeni, kamera ve ses ekibi ile çevrim içi moderatör gerekir. Bu ekibin salonun teknik ekibiyle koordine çalışması için önceden prova yapılır.",
      },
      {
        q: "Kongre katılımcıları için sosyal program da hazırlıyor musunuz?",
        a: "Evet. Karşılama kokteyli, gala yemeği, şehir turu ve eş programı gibi sosyal programlar kongre ile birlikte tasarlanabilir.",
      },
    ],
    related: ["/bayi-toplantisi-organizasyonu", "/kurumsal-etkinlik-mekanlari", "/etkinlik-personeli", "/gala-organizasyonu"],
    guides: ["sirket-etkinligi-nasil-planlanir", "kurumsal-etkinlik-butcesi-nasil-hazirlanir", "antalya-kurumsal-etkinlik-mekanlari"],
  },
];
