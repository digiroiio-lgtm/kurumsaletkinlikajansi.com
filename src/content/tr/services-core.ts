import type { PageContent } from "../types";

const AREA = ["Antalya", "Belek"];

export const servicesCore: PageContent[] = [
  /* ------------------------------------------------------------------ */
  {
    path: "/kurumsal-etkinlik-organizasyonu",
    kind: "service",
    metaTitle: "Kurumsal Etkinlik Organizasyonu | Konseptten Operasyona",
    metaDescription:
      "Kurumsal etkinlik organizasyonunda konsept, mekân, prodüksiyon, catering, transfer ve personeli tek ekiple yönetiyoruz. Antalya ve Belek'te teklif alın.",
    h1: "Kurumsal Etkinlik Organizasyonu: Konseptten Operasyona Tek Ekip",
    eyebrow: "Hizmet · Kurumsal etkinlik yönetimi",
    lead:
      "Şirket etkinliğinizin fikrini, mekânını, prodüksiyonunu ve sahadaki yönetimini tek ekipte topluyoruz. Antalya ve Belek merkezli bir etkinlik ajansı olarak, tek bir gala da olsa çok günlük bir program da olsa sorumluluğu paylaşmak yerine üstleniyoruz.",
    heroMedia: "hero-corporate",
    crumbs: [{ label: "Kurumsal Etkinlik Organizasyonu", href: "/kurumsal-etkinlik-organizasyonu" }],
    serviceType: "Kurumsal etkinlik organizasyonu ve yönetimi",
    areaServed: AREA,
    sections: [
      {
        kind: "split",
        eyebrow: "Ajansın asıl işi",
        title: "Mekân kiralamak değil, iş hedefine hizmet eden bir deneyim tasarlamak",
        body: [
          "Kurumsal etkinliğin arkasında genellikle birden fazla ekibin beklentisi vardır: İK çalışan bağlılığını, satış ekibi motivasyonu, pazarlama marka algısını, yönetim ise bütçe disiplinini ister. Bu beklentileri tek bir brief'te toplamak ve etkinliğe dönüştürmek ajansın temel görevidir.",
          "Biz de işe kataloglardan değil sorulardan başlıyoruz: Etkinlik bittiğinde ne değişmiş olmalı? Katılımcılar kimler, nereden geliyor, neye ihtiyaç duyuyor?",
        ],
        bullets: [
          "**Hedef ve ölçü:** Etkinliğin başarısını hangi göstergeyle değerlendireceğiz?",
          "**Katılımcı yolculuğu:** Karşılamadan dönüş transferine kadar her an tasarlanır.",
          "**Risk yönetimi:** Hava, kapasite, tedarikçi ve zaman riskleri için yedek senaryolar.",
          "**Bütçe disiplini:** Kalemler ayrı görünür, değişiklikler birlikte onaylanır.",
        ],
        media: "media-corporate-brief",
        arch: true,
      },
      {
        kind: "index",
        eyebrow: "Yönettiğimiz alanlar",
        title: "Bir etkinliğin sekiz operasyon başlığı",
        intro: "Hepsini birlikte ya da yalnızca ihtiyacınız olanları ayrı ayrı alabilirsiniz.",
        items: [
          { title: "Konsept ve yaratıcı yönetim", text: "Tema, akış, katılımcı deneyimi ve mesaj hiyerarşisi. Etkinliğin neden yapıldığını sahneye ve programa taşırız." },
          { title: "Mekân ve otel seçimi", text: "Kapasite, ulaşım, ses ve saat kısıtları, yiyecek-içecek şartları. Ayrıntılar için [etkinlik mekânları](/kurumsal-etkinlik-mekanlari) sayfası.", href: "/kurumsal-etkinlik-mekanlari" },
          { title: "Prodüksiyon", text: "Sahne, ses, ışık, LED ekran, dekor, teknik yönetim ve prova planı. Gece programları için [gala organizasyonu](/gala-organizasyonu).", href: "/gala-organizasyonu" },
          { title: "Catering ve servis", text: "Menü kurgusu, servis akışı, bar yönetimi, özel diyet ve alerjen planı." },
          { title: "Transfer ve lojistik", text: "Havalimanı karşılama, grup transferi, vardiyalı araç planı, bagaj ve oda dağıtımı koordinasyonu." },
          { title: "Eğlence ve sunum", text: "Sunucu, DJ, canlı müzik, gösteri ve interaktif içerik; salonun ve kitlenin diline uygun seçim." },
          { title: "Etkinlik personeli", text: "Karşılama, kayıt, servis ve operasyon ekipleri. Ayrıntılar için [etkinlik personeli](/etkinlik-personeli).", href: "/etkinlik-personeli" },
          { title: "Fotoğraf, video ve içerik", text: "Etkinlik içeriği, kısa video ve sosyal medya paylaşımına uygun çekimler; iç iletişimde yeniden kullanım." },
        ],
      },
      {
        kind: "table",
        eyebrow: "Format rehberi",
        title: "Hangi etkinlik hangi yapıyı gerektirir?",
        intro: "Aşağıdaki aralıklar planlamaya başlamak için yaklaşık referanstır; gerçek kapsam brief'e göre belirlenir.",
        head: ["Etkinlik", "Tipik grup", "Süre", "Operasyonun ağırlık noktası"],
        rows: [
          ["[Team building](/team-building)", "15–200 kişi", "Yarım gün – 1 gün", "Aktivite kurgusu, saha güvenliği, ekipman"],
          ["[Incentive](/incentive-organizasyonu)", "20–300 kişi", "2–5 gün", "Konaklama, program yoğunluğu, ödül anı"],
          ["[Corporate retreat](/corporate-retreat)", "8–60 kişi", "2–3 gün", "Çalışma düzeni, mekân atmosferi, kolaylaştırma"],
          ["[Gala ve ödül töreni](/gala-organizasyonu)", "80–600 kişi", "Akşam", "Sahne-ses-ışık, akış, servis"],
          ["[Bayi toplantısı](/bayi-toplantisi-organizasyonu)", "50–400 kişi", "1–2 gün", "İçerik akışı, kayıt, ağırlama"],
          ["[Lansman](/lansman-organizasyonu)", "50–500 kişi", "Yarım gün – akşam", "Sahne anlatısı, medya, içerik"],
        ],
        note: "Katılımcı sayısı ve süre; mekân, mevsim ve prodüksiyon düzeyine göre değişir.",
      },
      { kind: "pull", text: "Etkinlik günü sorunsuz geçiyorsa, işin büyük kısmı haftalar önce doğru yapılmıştır." },
      {
        kind: "steps",
        eyebrow: "Teklif sonrası",
        title: "Brief'ten kapanışa süreç",
        items: [
          { title: "Brief görüşmesi", text: "Formdaki bilgilerle başlar; hedef, tarih ve bütçe çerçevesi gerekirse kısa bir görüşmeyle netleşir." },
          { title: "Konsept ve bütçe önerisi", text: "Yönü, lokasyonu ve kalem kalem bütçe çerçevesini içeren ilk öneri; alternatiflerle birlikte." },
          { title: "Onay ve rezervasyonlar", text: "Seçilen mekân, tedarikçi ve personel için opsiyonlar bağlanır; sözleşmeler ve ödeme planı netleşir." },
          { title: "Hazırlık dönemi", text: "Run-of-show, teknik çizimler, katılımcı iletişimi, transfer ve oda listeleri hazırlanır." },
          { title: "Etkinlik ve değerlendirme", text: "Sahada yönetim, ardından geri bildirim ve kapanış değerlendirmesi; bir sonraki etkinlik için notlar." },
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Hazırlık",
        title: "Teklif için elinizde bulunması yeterli olanlar",
        intro: "Eksik bilgi sorun değil; yaklaşık değerlerle başlayıp birlikte netleştiririz.",
        items: [
          "Etkinliğin amacı ve hedef kitlesi",
          "Tarih aralığı ve esneklik durumu",
          "Yaklaşık katılımcı sayısı ve profili (yurt dışından gelen var mı?)",
          "Lokasyon tercihi: Antalya, Belek ya da henüz belirsiz",
          "Yaklaşık bütçe aralığı veya kişi başı beklenti",
          "Konaklama, transfer ve yiyecek-içecek gereksinimleri",
          "Özel talepler: erişilebilirlik, diyet, protokol, gizlilik",
        ],
      },
    ],
    faq: [
      {
        q: "Kurumsal etkinlik organizasyon şirketi seçerken nelere bakmalıyım?",
        a: "Referanstan önce brief'i nasıl ele aldıklarına bakın: soru soruyorlar mı, yoksa hazır paket mi sunuyorlar? Bütçe kalemlerinin ayrı görünmesi, yedek senaryo ve sahadaki sorumlu kişinin net olması da önemli ölçütlerdir. Ayrıntılı kontrol listesi için [etkinlik ajansı nasıl seçilir](/rehberler/etkinlik-ajansi-nasil-secilir) rehberine bakın.",
      },
      {
        q: "Ajans ücreti nasıl belirlenir?",
        a: "Sektörde proje bazlı yönetim ücreti, kalem bazlı marj veya sabit paket gibi farklı modeller kullanılır. Hangisi seçilirse seçilsin teklifte kalemlerin ayrı yazılmasını isteyin. Biz kalemleri ayrı gösteririz; kapsam değiştikçe teklif birlikte güncellenir.",
      },
      {
        q: "Küçük ekipler için de hizmet veriyor musunuz?",
        a: "Evet. On beş kişilik bir yönetim toplantısından yüzlerce kişilik organizasyonlara kadar çalışıyoruz; yalnızca ölçeğe uygun format ve bütçe önerisi değişir.",
      },
      {
        q: "Antalya ve Belek dışındaki şehirlerde etkinlik yapıyor musunuz?",
        a: "Operasyonumuz Antalya ve Belek odaklıdır; en iyi hizmeti bu bölgede veririz. Farklı bir lokasyon düşünüyorsanız önce formda belirtin, uygunluğu birlikte değerlendirelim.",
      },
      {
        q: "Kendi tedarikçilerimizle çalışabilir miyiz?",
        a: "Evet. Sözleşmeli bir mekânınız, prodüksiyon firmanız veya catering ortağınız varsa onları sürece dâhil eder, koordinasyonu biz üstleniriz.",
      },
    ],
    related: ["/team-building", "/incentive-organizasyonu", "/gala-organizasyonu", "/kurumsal-etkinlik-mekanlari", "/etkinlik-personeli"],
    guides: ["etkinlik-ajansi-nasil-secilir", "sirket-etkinligi-nasil-planlanir", "kurumsal-etkinlik-butcesi-nasil-hazirlanir"],
    defaultEventType: "diger",
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/team-building",
    kind: "service",
    metaTitle: "Team Building Etkinlikleri | Kurumsal Ekip Deneyimleri",
    metaDescription:
      "Hedefe bağlı team building etkinlikleri: takım yarışları, keşif oyunları, atölyeler ve CSR formatları. Grup ve süreye göre kurgulanır; Antalya ve Belek'te teklif alın.",
    h1: "Team Building Etkinlikleri: Hedefe Bağlı Ekip Deneyimleri",
    eyebrow: "Hizmet · Team building",
    lead:
      "Team building'in işe yaraması için eğlenceli olması yetmez; ekibin ihtiyacıyla eşleşmesi gerekir. Önce hedefi, sonra grubu, sonra formatı seçiyor; etkinliği bir değerlendirme konuşmasıyla kapatıyoruz.",
    heroMedia: "hero-team",
    crumbs: [{ label: "Team Building", href: "/team-building" }],
    serviceType: "Kurumsal team building etkinlikleri",
    areaServed: AREA,
    defaultEventType: "team-building",
    sections: [
      {
        kind: "split",
        eyebrow: "Yaklaşım",
        title: "Önce hedef, sonra oyun",
        body: [
          "Aynı aktivite bir ekipte kaynaşma yaratırken diğerinde ilgisizlik yaratabilir. Fark, aktivitenin değil hedefle eşleşmenin sonucudur. Bu yüzden her programa kısa bir hedef görüşmesiyle başlarız.",
        ],
        bullets: [
          "**İletişim:** Departmanlar arası duvarların inceltilmesi, dinleme ve netlik",
          "**Güven:** Yeni kurulan veya yeniden yapılanan ekiplerde ilk bağ",
          "**Onboarding:** Yeni katılanların ekiple hızlı tanışması",
          "**Birleşme sonrası kaynaşma:** İki kültürün ortak bir deneyim kurması",
          "**Liderlik ve rol paylaşımı:** Baskı altında karar alma ve görev dağıtımı",
          "**Yaratıcı problem çözme:** Ortak bir ürün veya çözüm üretme",
        ],
        media: "media-team-goal",
        mediaSide: "left",
      },
      {
        kind: "table",
        eyebrow: "Format seçimi",
        title: "Hedefe ve gruba göre team building formatları",
        head: ["Format", "Grup büyüklüğü", "Süre", "En çok işe yaradığı hedef"],
        rows: [
          ["Takım yarışları (plaj veya saha olimpiyatı)", "30–300 kişi", "2–4 saat", "Enerji, sağlıklı rekabet, geniş grup kaynaşması"],
          ["Keşif oyunu (treasure hunt)", "15–200 kişi", "2–3 saat", "İletişim, birlikte karar alma, mekân keşfi"],
          ["Mutfak ve bar atölyeleri", "12–80 kişi", "2–3 saat", "Güven, rol paylaşımı, rahat sohbet"],
          ["Yaratıcı üretim (müzik, resim, inşa)", "20–150 kişi", "2–4 saat", "Ortak ürün, yaratıcılık, katılımın eşitlenmesi"],
          ["CSR ve sosyal sorumluluk", "20–200 kişi", "Yarım gün", "Anlam, aidiyet, ortak amaç"],
          ["Meydan okuma parkurları", "15–120 kişi", "Yarım gün", "Güven, liderlik, fiziksel enerji"],
        ],
        note: "Fikir arayışındaysanız [team building fikirleri](/rehberler/team-building-fikirleri) ve [kurumsal oyun örnekleri](/rehberler/kurumsal-oyun-ornekleri) rehberlerine bakın.",
      },
      {
        kind: "scenarios",
        title: "Üç farklı hedef, üç farklı kurgu",
        items: [
          { title: "Yeni kurulan yönetim ekibi", text: "Ekibin birbirini iş dışında tanıdığı, kısa yönlendirmeli bir şehir görevi ve ardından masa başında değerlendirme konuşması.", group: "30 kişi", duration: "Yarım gün", format: "Keşif oyunu + debrief", media: "scenario-team-city" },
          { title: "Büyük satış ekibi", text: "Takımlara bölünmüş plaj olimpiyatı, ardından ortak akşam yemeği; rekabetin sertleşmesini önleyen puanlama kuralları.", group: "120 kişi", duration: "1 gün", format: "Takım yarışları", media: "scenario-team-beach" },
          { title: "Birleşen iki departman", text: "Karışık takımlarla mutfak atölyesi; her takım ortak bir menü hazırlar ve masayı birlikte kurar.", group: "40 kişi", duration: "3 saat", format: "Atölye", media: "scenario-team-cooking" },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Süreç",
        title: "Team building nasıl yürür?",
        items: [
          { title: "Hedef görüşmesi", text: "Ekibin durumu, beklenen değişim ve kaçınılması gerekenler (ör. aşırı rekabet, fiziksel zorluk) konuşulur." },
          { title: "Format ve zorluk düzeyi", text: "Hedefe uygun formatlar önerilir; fiziksel ve zihinsel zorluk, ekibin yaş ve kondisyon dağılımına göre ayarlanır." },
          { title: "Kapsayıcı tasarım", text: "Herkesin anlamlı bir rol alabildiği görevler tasarlanır; alkolsüz seçenekler ve erişilebilirlik planlanır." },
          { title: "Uygulama ve değerlendirme", text: "Etkinlik sahada yönetilir; kapanışta kısa bir değerlendirme konuşması deneyimi iş hayatına bağlar." },
        ],
      },
      {
        kind: "split",
        eyebrow: "Tasarım ilkesi",
        title: "Herkesin katılabildiği etkinlik, işe yarayan etkinliktir",
        body: [
          "Team building'de en sık yapılan hata, aktiviteyi en enerjik katılımcıya göre kurmaktır. Sessiz, yeni veya fiziksel olarak sınırlı biri kenarda kalırsa etkinlik tersine çalışır.",
          "Görevleri farklı yetkinliklere alan açacak biçimde, takım içi rolleri değiştirerek ve yarışmayı puan yerine ortak hedefe bağlayarak tasarlıyoruz.",
        ],
        media: "media-team-inclusive",
        arch: true,
        tone: "sand",
      },
      {
        kind: "links",
        eyebrow: "Lokasyon",
        title: "Antalya ve Belek'te team building",
        intro: "Aynı hedef için şehir dokusunda ya da resort bütünlüğünde farklı kurgular mümkün.",
        items: [
          { label: "Antalya team building", href: "/antalya/team-building", text: "Kaleiçi, sahil ve Akdeniz mutfağı etrafında kurgular." },
          { label: "Belek team building", href: "/belek/team-building", text: "Resort, golf ve çam ormanı içinde tek yerleşkede programlar." },
          { label: "Kurumsal outdoor aktiviteler", href: "/kurumsal-outdoor-aktiviteler", text: "Deniz, nehir ve dağda güvenlik planlı açık hava seçenekleri." },
          { label: "Şirket motivasyon etkinlikleri", href: "/sirket-motivasyon-etkinlikleri", text: "Yıl boyunca çalışan bağlılığı için etkinlik ritmi." },
        ],
      },
    ],
    faq: [
      {
        q: "Team building etkinliği ne kadar sürmeli?",
        a: "Hedefe ve gruba göre değişir. Keşif oyunları ve atölyeler 2–3 saatte etkili olur; yarışma ve outdoor formatları yarım gün ister. Birden fazla hedefi olan programlar tam güne yayılabilir; ancak uzun programlarda mola ve ara dinlenme planlamak şarttır.",
      },
      {
        q: "Çok kalabalık gruplarda team building mümkün mü?",
        a: "Evet; 100 kişiyi aşan gruplar küçük takımlara bölünür, her takıma bir saha lideri atanır. Büyük grupta kritik olan istasyon planı, zamanlama ve ses yönetimidir.",
      },
      {
        q: "Hava kötü olursa ne olur?",
        a: "Her outdoor formatın kapalı alan alternatifi veya saat kaydırma planı hazırlanır. Karar kriterlerini önceden birlikte belirleriz; böylece etkinlik günü belirsizlik yaşanmaz.",
      },
      {
        q: "Yönetici ve çalışanlar aynı takımda mı olmalı?",
        a: "Hedefe bağlı. Güven ve erişilebilirlik kurmak istiyorsanız yöneticileri karışık takımlara dağıtmak etkilidir; yönetim ekibinin kendi dinamiğini çalışıyorsanız ayrı bir program daha doğrudur.",
      },
      {
        q: "Etkinlik sonunda sonuç ölçülebilir mi?",
        a: "Kısa bir anket ve kapanış konuşmasıyla katılım, deneyim ve ekip algısı değerlendirilebilir. Daha derin bir ölçüm istiyorsanız etkinlik öncesi ve birkaç hafta sonrası kısa bir kıyas önerebiliriz.",
      },
    ],
    related: ["/sirket-motivasyon-etkinlikleri", "/kurumsal-outdoor-aktiviteler", "/corporate-retreat", "/antalya/team-building", "/belek/team-building"],
    guides: ["team-building-fikirleri", "team-building-etkinligi-nasil-secilir", "kurumsal-oyun-ornekleri"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/sirket-motivasyon-etkinlikleri",
    kind: "service",
    metaTitle: "Şirket Motivasyon Etkinlikleri | Çalışan Bağlılığı Programı",
    metaDescription:
      "Şirket motivasyon etkinlikleri: takdir, aidiyet ve yıl boyu etkinlik ritmi. Ofis, saha ve satış ekiplerine uygun formatlar; Antalya ve Belek'te teklif alın.",
    h1: "Şirket Motivasyon Etkinlikleri: Takdir ve Aidiyet İçin Etkinlik Ritmi",
    eyebrow: "Hizmet · Çalışan motivasyonu",
    lead:
      "Motivasyon tek bir büyük etkinlikle değil, düzenli ve anlamlı anlarla oluşur. Çalışanı takdir eden, ekibi bir araya getiren ve yıl boyu hatırlanan bir etkinlik takvimi tasarlıyoruz.",
    heroMedia: "hero-motivation",
    crumbs: [{ label: "Şirket Motivasyon Etkinlikleri", href: "/sirket-motivasyon-etkinlikleri" }],
    serviceType: "Şirket motivasyon ve çalışan bağlılığı etkinlikleri",
    areaServed: AREA,
    defaultEventType: "diger",
    sections: [
      {
        kind: "split",
        eyebrow: "Yaklaşım",
        title: "Motivasyon bir günlük etkinlik değil, ritimdir",
        body: [
          "Yılda tek bir büyük gece, çalışanın gün be gün yaşadığı deneyimi telafi etmez. Motivasyon etkinliği, kurumun çalışanına verdiği değerin görünür olduğu birkaç anın doğru yerleştirilmesiyle çalışır.",
          "Bu sayfa takdir, aidiyet ve ortak kutlama odaklıdır. Ekip içi iletişim ve iş birliği hedefleyen oyun ve görev formatları için [team building](/team-building) sayfasına bakın.",
        ],
        bullets: [
          "**Takdir:** Somut, kişiye özel ve topluluk önünde",
          "**Aidiyet:** Ortak anı, ortak dil, ortak ritüel",
          "**Geri bildirim:** Çalışanın sesinin duyulduğu alanlar",
          "**Kutlama:** Hedeflerin ve dönüm noktalarının görünür kılınması",
        ],
        media: "media-motivation-ritual",
        arch: true,
      },
      {
        kind: "index",
        eyebrow: "Yıllık takvim",
        title: "Yıla yayılan beş etkinlik anı",
        intro: "Her şirketin takvimi farklıdır; aşağıdaki çerçeve konuşmaya başlamak için örnek bir ritimdir.",
        items: [
          { title: "Yeni yıl açılışı ve hedef paylaşımı", tag: "Ocak – Şubat", text: "Yılın hedeflerini sahneye taşıyan, ekipleri aynı hikâyede buluşturan kısa ve enerjik bir buluşma." },
          { title: "Bahar çıkışı", tag: "Nisan – Mayıs", text: "Hava ısındığında ofis dışında bir gün: piknik, spor turnuvası veya doğa yürüyüşü. Aileler de katılabilir." },
          { title: "Yaz ortası ara buluşma", tag: "Haziran – Temmuz", text: "Yıl yarısı değerlendirmesi ve kısa bir serinleme: deniz ve gün batımı odaklı, düşük yoğunluklu program." },
          { title: "Sonbahar atölye günü", tag: "Eylül – Ekim", text: "Mutfak, bar veya yaratıcı atölyelerle hafif bir iş birliği günü; yeni sezon öncesi toparlanma." },
          { title: "Yıl sonu takdir gecesi", tag: "Aralık – Ocak", text: "Başarıların ve yıl boyunca iz bırakan kişilerin anıldığı ödül ve kutlama gecesi. Prodüksiyon detayları için [gala organizasyonu](/gala-organizasyonu)." },
        ],
      },
      {
        kind: "table",
        eyebrow: "Hedef kitle",
        title: "Çalışan gruplarına göre doğru format",
        head: ["Kitle", "Tipik zorluk", "Uygun format", "Planlama notu"],
        rows: [
          ["Ofis çalışanları", "Ekip dışı etkileşimin azlığı", "Atölye, keşif oyunu, piknik", "Mesai içi yarım gün daha yüksek katılım getirir"],
          ["Saha ve üretim vardiyaları", "Herkesi aynı anda toplamanın zorluğu", "Vardiyalı turnuva, mini festival", "Vardiyalara yayılmış oturumlar, ulaşım desteği"],
          ["Satış ekipleri", "Hedef baskısı ve rekabet", "Takdir gecesi, ortak başarı kutlaması", "Bireysel kadar takım başarısını da ödüllendirin"],
          ["Yönetici ekipleri", "Yoğun gündem, az bağlantı", "Sakin tempolu retreat", "Bkz. [corporate retreat](/corporate-retreat)"],
          ["Aile katılımlı etkinlikler", "Farklı yaş grupları", "Gün boyu festival, plaj günü", "Çocuk alanı, gölge ve güvenlik planı"],
        ],
      },
      {
        kind: "scenarios",
        title: "Üç örnek motivasyon kurgusu",
        items: [
          { title: "Yıl sonu çalışan günü", text: "Sahil boyunda gün boyu açık hava programı: turnuvalar, canlı müzik ve akşam ödül töreni. Aileler için ayrı bir alan.", group: "200 kişi", duration: "1 gün", format: "Plaj festivali + ödül", media: "scenario-motivation-beach" },
          { title: "Vardiyalı spor turnuvası", text: "Üç vardiyaya yayılan futbol ve voleybol turnuvası; finalde bütün vardiyaların bir araya geldiği kutlama.", group: "150 kişi", duration: "2 gün", format: "Turnuva + final", media: "scenario-motivation-sports" },
          { title: "Hedef kutlaması", text: "Satış hedefini aşan ekip için sürpriz bir akşam: bar atölyesi, kısa gösteri ve teşekkür konuşmaları.", group: "35 kişi", duration: "Akşam", format: "Atölye + kutlama", media: "scenario-motivation-cocktail" },
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Ölçü",
        title: "İyi bir motivasyon etkinliğinin işaretleri",
        items: [
          "Katılım zorunlulukla değil, merakla gerçekleşir.",
          "Hiyerarşi bir süreliğine esner; yöneticiler de oyuna dâhil olur.",
          "Takdir somut ve kişiye özeldir; genel övgü değildir.",
          "Vardiya, erişilebilirlik ve diyet ihtiyaçları baştan planlanır.",
          "Etkinlikten sonra paylaşılabilir anı ve içerik kalır.",
          "Bütçe, etkinliğin sıklığıyla dengelenir; tek büyük harcama yerine ritim tercih edilir.",
        ],
      },
      {
        kind: "links",
        title: "Devamında bakabileceğiniz sayfalar",
        items: [
          { label: "Team building", href: "/team-building", text: "Ekip iş birliğini hedefleyen formatlar." },
          { label: "Incentive organizasyonu", href: "/incentive-organizasyonu", text: "Performansı destinasyon deneyimiyle ödüllendiren programlar." },
          { label: "Kurumsal outdoor aktiviteler", href: "/kurumsal-outdoor-aktiviteler", text: "Açık havada güvenlik planlı programlar." },
          { label: "Motivasyon etkinliği fikirleri", href: "/rehberler/sirket-motivasyon-etkinlik-fikirleri", text: "Bütçeye göre sınıflandırılmış fikir listesi." },
        ],
      },
    ],
    faq: [
      {
        q: "Motivasyon etkinliği ile team building arasındaki fark nedir?",
        a: "Team building ekip içi iş birliğini ve iletişimi bir görev veya oyun üzerinden geliştirmeyi hedefler. Motivasyon etkinliği ise çalışanı takdir etmeyi, aidiyeti güçlendirmeyi ve ortak başarıyı kutlamayı amaçlar. Pratikte ikisi birleşebilir: gün boyu sürecek bir programda sabah team building, akşam takdir gecesi yer alabilir.",
      },
      {
        q: "Sınırlı bütçeyle etkili bir motivasyon etkinliği yapılabilir mi?",
        a: "Evet. Bütçe düşükse büyük bir geceyi bırakıp daha küçük ve sık etkinlikleri tercih etmek genellikle daha verimlidir: öğle yemeği atölyeleri, piknik, kısa turnuvalar. [Fikir rehberimizde](/rehberler/sirket-motivasyon-etkinlik-fikirleri) bütçe seviyelerine göre örnekler var.",
      },
      {
        q: "Vardiyalı çalışanları nasıl dâhil edersiniz?",
        a: "Etkinliği tek bir saate sıkıştırmak yerine vardiyalara yayarız; ulaşım, yemek ve ücretli çalışma saati gibi katılımı kolaylaştıran detayları programa ekleriz. Final buluşmasıyla bütün vardiyalar kutlamada birleşebilir.",
      },
      {
        q: "Aileler de katılabilir mi?",
        a: "Evet. Aile katılımlı etkinliklerde çocuk alanı, gölgelik, ilk yardım ve ulaşım planı ayrıca tasarlanır. Plaj ve açık hava günleri bu format için uygundur.",
      },
    ],
    related: ["/team-building", "/gala-organizasyonu", "/incentive-organizasyonu", "/kurumsal-outdoor-aktiviteler"],
    guides: ["sirket-motivasyon-etkinlik-fikirleri", "sosyal-etkinlik-fikirleri", "sirket-etkinligi-nasil-planlanir"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/kurumsal-outdoor-aktiviteler",
    kind: "service",
    metaTitle: "Kurumsal Outdoor Aktiviteler | Güvenlik Planlı Açık Hava",
    metaDescription:
      "Deniz, nehir, dağ ve resort alanında kurumsal outdoor aktiviteler: yelken, rafting, jeep safari, oryantiring. Güvenlik planı ve hava alternatifiyle; teklif alın.",
    h1: "Kurumsal Outdoor Aktiviteler: Güvenlik Planıyla Yönetilen Açık Hava",
    eyebrow: "Hizmet · Outdoor aktiviteler",
    lead:
      "Açık havada kurumsal etkinlik, doğru arazi, doğru rehber ve doğru güvenlik planıyla hem enerjik hem de sorunsuz olur. Aktiviteyi seçmeden önce sahayı, mevsimi ve grubu değerlendiriyoruz.",
    heroMedia: "hero-outdoor",
    crumbs: [{ label: "Kurumsal Outdoor Aktiviteler", href: "/kurumsal-outdoor-aktiviteler" }],
    serviceType: "Kurumsal outdoor aktivite organizasyonu",
    areaServed: AREA,
    defaultEventType: "outdoor",
    sections: [
      {
        kind: "split",
        eyebrow: "Önce güvenlik",
        title: "Outdoor programı güvenlik planıyla başlar",
        body: [
          "Kurumsal gruplarda yaş, kondisyon ve deneyim çok çeşitlidir. Bu yüzden aktivite seçiminden önce saha, rehber ve acil durum planını netleştiririz; program ancak bunlar yerindeyse kesinleşir.",
        ],
        bullets: [
          "Aktivite sağlayıcısının ilgili izin ve belgelerinin kontrolü",
          "Eğitimli rehber ve gruba uygun rehber-katılımcı oranı",
          "Ekipman kontrolü ve katılımcıya uygun beden/ölçü planı",
          "Katılımcı bilgilendirmesi ve gerektiğinde sağlık beyanı",
          "İlk yardım, saha içi iletişim ve acil durumda tahliye planı",
          "Hava, su seviyesi ve rüzgâra bağlı iptal veya erteleme kriterleri",
        ],
        media: "media-outdoor-safety",
        arch: true,
      },
      {
        kind: "index",
        eyebrow: "Arazi türü",
        title: "Antalya ve Belek'te araziye göre aktiviteler",
        items: [
          { title: "Deniz ve kıyı", text: "Yelken regatası, SUP ve kano turnuvaları, snorkeling, plaj olimpiyatı, özel tekne turu. Akdeniz'in sakin koyları gruplar için uygundur." },
          { title: "Nehir ve kanyon", text: "Köprüçay'da rafting, kanyon yürüyüşleri ve nehir kenarı mola noktalarıyla takım görevleri. Su seviyesi mevsime göre değişir." },
          { title: "Dağ ve orman", text: "Toros eteklerinde jeep safari, oryantiring, halat parkuru ve orman içi takım görevleri." },
          { title: "Resort ve golf alanı", text: "Golf kliniği ve scramble, bisiklet turu, tenis ve plaj voleybolu. Belek'te konaklama ve aktivite aynı alanda olur." },
          { title: "Şehir ve tarih", text: "Kaleiçi ve çevresinde yönlendirmeli şehir oyunları, antik kent gezileri ve fotoğraf görevleri." },
        ],
      },
      {
        kind: "table",
        eyebrow: "Takvim",
        title: "Mevsime göre planlama notları",
        head: ["Dönem", "Öne çıkanlar", "Dikkat"],
        rows: [
          ["İlkbahar (Mart – Mayıs)", "Doğa yürüyüşü, rafting, golf, bisiklet", "Yağış ve su seviyesi dalgalanabilir; hava alternatifi şart"],
          ["Yaz (Haziran – Ağustos)", "Deniz aktiviteleri, gün batımı ve akşam programları", "Gündüz sıcaklığı yüksek; erken saat veya akşam, gölge ve su planı"],
          ["Sonbahar (Eylül – Kasım)", "Bütün aktivite türleri için verimli dönem", "Kasım'a doğru yağış artabilir; esnek takvim"],
          ["Kış (Aralık – Şubat)", "Golf, şehir ve kültür programları, kapalı alan atölyeleri", "Deniz aktiviteleri sınırlı; yağışa karşı yedek plan"],
        ],
        note: "Genel mevsim eğilimleridir; etkinlik haftasının tahmini ve saha koşulları yakından izlenir.",
      },
      {
        kind: "steps",
        eyebrow: "Saha akışı",
        title: "Bir outdoor etkinlik nasıl yönetilir?",
        items: [
          { title: "Risk değerlendirmesi", text: "Saha, rota, katılımcı profili ve mevsim birlikte değerlendirilir; uygun olmayan aktiviteler baştan elenir." },
          { title: "Bilgilendirme", text: "Katılımcılara kıyafet, ayakkabı, sağlık ve program bilgisi önceden iletilir." },
          { title: "Ekipman ve rehber koordinasyonu", text: "Aktivite sağlayıcıları, transfer ve ilk yardım ekibi aynı zaman çizelgesinde birleştirilir." },
          { title: "Sahada yönetim", text: "Supervisor ekibi zamanlamayı izler; hava veya saha koşulu değişirse önceden belirlenen alternatife geçilir." },
        ],
      },
      {
        kind: "scenarios",
        title: "Örnek outdoor kurguları",
        items: [
          { title: "Köprüçay'da ekip rafting günü", text: "Sabah transferi, güvenlik brifingi, rafting ve nehir kenarı öğle yemeği; dönüşte kısa değerlendirme.", group: "40 kişi", duration: "1 gün", format: "Nehir + öğle yemeği", media: "scenario-outdoor-rafting" },
          { title: "Kıyıda yelken regatası", text: "Takımlara bölünmüş küçük teknelerle eğitim ve yarış; kıyıda plaj servisi.", group: "60 kişi", duration: "Yarım gün", format: "Deniz + plaj", media: "scenario-outdoor-sail" },
          { title: "Orman oryantiring ve jeep", text: "Takımlar harita ve ipuçlarıyla noktaları bulur; araç konvoyu ve piknik molası.", group: "80 kişi", duration: "1 gün", format: "Dağ + konvoy", media: "scenario-outdoor-jeep" },
        ],
      },
      {
        kind: "links",
        title: "Lokasyona özel outdoor sayfaları",
        items: [
          { label: "Antalya kurumsal outdoor aktiviteler", href: "/antalya/kurumsal-outdoor-aktiviteler", text: "Köprüçay, Toros, Kemer ve şehir çevresi." },
          { label: "Belek team building", href: "/belek/team-building", text: "Resort, golf ve çam ormanında açık hava formatları." },
          { label: "Team building", href: "/team-building", text: "Aktiviteyi hedefe bağlayan format seçimi." },
          { label: "Outdoor aktivite fikirleri", href: "/rehberler/kurumsal-outdoor-aktivite-fikirleri", text: "Grup büyüklüğüne göre fikir rehberi." },
        ],
      },
    ],
    faq: [
      {
        q: "Outdoor etkinliklerde sigorta ve güvenlik nasıl sağlanır?",
        a: "Aktivite sağlayıcılarının izin ve belgelerini, ekipman durumunu ve rehber yeterliliğini kontrol ederiz; katılımcı sayısı ve aktiviteye uygun sigorta ve ilk yardım planı etkinlik öncesi netleştirilir. Kapsam aktiviteye göre değiştiği için ayrıntı teklifte yazılır.",
      },
      {
        q: "Hava koşulları uygun değilse etkinlik iptal olur mu?",
        a: "Her outdoor programa kapalı alan alternatifi veya saat kaydırma planı eklenir. İptal kriterleri (yağış, rüzgâr, su seviyesi, sıcaklık) etkinlikten önce sizinle birlikte yazılı olarak belirlenir.",
      },
      {
        q: "Fiziksel kısıtı olan katılımcılar nasıl dâhil edilir?",
        a: "Aktivite içinde farklı fiziksel yoğunlukta roller tasarlanır (hakem, strateji, navigasyon, zamanlama gibi) ve gerekirse paralel bir alternatif sunulur. Bu ihtiyacı formda belirtmeniz planı kolaylaştırır.",
      },
      {
        q: "Rafting için yıl içinde uygun zaman var mı?",
        a: "Rafting için koşullar mevsime ve nehrin su seviyesine göre değişir; uygun dönemleri ve alternatifleri etkinlik tarihine göre değerlendiririz. Tarihiniz belliyse formda yazmanız yeterli.",
      },
      {
        q: "Kaç kişilik gruplara outdoor program yapabiliyorsunuz?",
        a: "On beş kişilik ekiplerden birkaç yüz kişilik gruplara kadar çalışıyoruz. Büyük gruplarda katılımcılar takımlara bölünür ve istasyon sistemiyle yönetilir.",
      },
    ],
    related: ["/team-building", "/antalya/kurumsal-outdoor-aktiviteler", "/sirket-motivasyon-etkinlikleri", "/corporate-retreat"],
    guides: ["kurumsal-outdoor-aktivite-fikirleri", "team-building-fikirleri", "antalyada-sirket-etkinligi-fikirleri"],
  },
];
