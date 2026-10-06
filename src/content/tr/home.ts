import type { QA, Section } from "../types";

export const homeMeta = {
  title: "Antalya & Belek Kurumsal Etkinlik Ajansı | Teklif Alın",
  description:
    "Antalya ve Belek'te kurumsal etkinlik, team building, incentive, toplantı, gala ve outdoor organizasyonlarını konseptten saha operasyonuna tek ekiple yönetiyoruz. Teklif alın.",
};

export const hero = {
  eyebrow: "Antalya & Belek · Kurumsal Etkinlikler",
  h1: "Antalya & Belek Kurumsal Etkinlik Ajansı",
  lead:
    "Antalya ve Belek'te şirket etkinlikleri, team building, incentive programları, toplantılar, gala geceleri ve kurumsal organizasyonları konseptten saha operasyonuna kadar yönetiyoruz.",
  primary: "Etkinliğiniz İçin Teklif Alın",
  secondary: { label: "Etkinlik Fikirlerini Keşfedin", href: "/rehberler/kurumsal-etkinlik-fikirleri" },
};

export const quickPicks = [
  { label: "Team Building", href: "/team-building" },
  { label: "Incentive", href: "/incentive-organizasyonu" },
  { label: "Gala", href: "/gala-organizasyonu" },
  { label: "Corporate Retreat", href: "/corporate-retreat" },
  { label: "Toplantı", href: "/bayi-toplantisi-organizasyonu" },
  { label: "Outdoor Activities", href: "/kurumsal-outdoor-aktiviteler" },
  { label: "Lansman", href: "/lansman-organizasyonu" },
  { label: "Event Staffing", href: "/etkinlik-personeli" },
];

export const principles = [
  { t: "Tek muhatap", d: "Mekân, prodüksiyon, transfer ve personel tek ekipte toplanır." },
  { t: "Şeffaf bütçe", d: "Kalemler baştan görünür; kapsam değiştikçe teklif birlikte güncellenir." },
  { t: "Sahada yönetim", d: "Etkinlik günü supervisor ekibi ve tedarikçi koordinasyonu bizde." },
  { t: "Yedek senaryo", d: "Hava, kapasite ve zaman riskleri için B planı baştan hazırlanır." },
];

export const eventTypes = [
  { title: "Team Building", text: "Ekiplerin birbirini yeniden keşfettiği, hedefe bağlı oyun ve görev kurgusu.", href: "/team-building", slot: "card-team" },
  { title: "Incentive", text: "Satış ve performans başarılarını destinasyon deneyimiyle ödüllendiren programlar.", href: "/incentive-organizasyonu", slot: "card-incentive" },
  { title: "Corporate Retreat", text: "Strateji ve yenilenmeyi aynı çatı altında buluşturan çok günlük buluşmalar.", href: "/corporate-retreat", slot: "card-retreat" },
  { title: "Gala Dinner", text: "Sahne, ışık, ses ve servisle kurgulanan, akışı dakika dakika yönetilen geceler.", href: "/gala-organizasyonu", slot: "card-gala" },
  { title: "Şirket Motivasyon Etkinlikleri", text: "Çalışanı takdir eden, aidiyeti güçlendiren yıl içi etkinlik ritmi.", href: "/sirket-motivasyon-etkinlikleri", slot: "card-motivation" },
  { title: "Outdoor Activities", text: "Deniz, dağ ve nehirde güvenlik planıyla yönetilen kurumsal aktiviteler.", href: "/kurumsal-outdoor-aktiviteler", slot: "card-outdoor" },
  { title: "Bayi Toplantıları", text: "İçerik, ağırlama ve ağ kurma dengesini gözeten satış ağı buluşmaları.", href: "/bayi-toplantisi-organizasyonu", slot: "card-dealer" },
  { title: "Lansmanlar", text: "Ürün ve marka açılışlarını anlatıya, sahneye ve içeriğe dönüştüren organizasyon.", href: "/lansman-organizasyonu", slot: "card-launch" },
];

export const destinations = [
  {
    name: "Antalya",
    kicker: "Şehir, tarih ve çeşitlilik",
    text: "Kaleiçi'nin taş sokaklarından Konyaaltı sahiline, Kemer'in çam ormanlarından Toros eteklerine uzanan bir sahne. Aynı hafta içinde şehir, deniz, kanyon ve antik kent kurgulanabilir.",
    points: ["Kaleiçi'nde şehir macerası ve akşam yemeği", "Konyaaltı ve Lara'da plaj organizasyonları", "Köprülü Kanyon'da rafting ve Toros'ta jeep safari", "Kemer'de özel tekne ve gün batımı programları"],
    href: "/antalya/kurumsal-etkinlik",
    cta: "Antalya'da kurumsal etkinlik",
    slot: "dest-antalya",
  },
  {
    name: "Belek",
    kicker: "Resort, golf ve incentive",
    text: "Konaklama, toplantı salonu ve etkinlik alanının aynı yerleşkede buluştuğu bir turizm merkezi. Golf sahaları, çam ormanı ve uzun kumsalıyla incentive ve retreat programlarının doğal adresi.",
    points: ["Golf deneyimi, klinik ve turnuva formatları", "Plaj ve resort bahçesinde gala geceleri", "Orman ve sahil parkurlarında takım yarışları", "Aspendos'a kültür çıkışı ve akşam programı"],
    href: "/belek/kurumsal-etkinlik",
    cta: "Belek'te kurumsal etkinlik",
    slot: "dest-belek",
  },
];

export const processSection: Section = {
  kind: "steps",
  eyebrow: "Nasıl çalışıyoruz?",
  title: "Brief'ten etkinlik gününe beş net adım",
  intro: "Her adımın çıktısı belli; neyi, ne zaman onayladığınızı her zaman bilirsiniz.",
  items: [
    { title: "Brief", text: "Hedefi, katılımcı profilini, tarihi ve bütçe çerçevesini birlikte netleştiririz. Etkinliğin neden yapıldığını anlamadan format önermeyiz." },
    { title: "Konsept", text: "Brief'i etkinlik fikrine çeviririz: tema, akış, katılımcı yolculuğu ve deneyimin ana anları." },
    { title: "Mekân & aktivite seçimi", text: "Kapasite, ulaşım ve mevsim koşullarına göre resort, mekân ve aktivite kısa listesi hazırlar; karar için karşılaştırma sunarız." },
    { title: "Operasyon planlama", text: "Prodüksiyon, catering, transfer, personel ve güvenlik planı; saat saat akış (run-of-show) ve tedarikçi takvimi oluşturulur." },
    { title: "Etkinlik günü yönetimi", text: "Sahada tek karar merkezi: supervisor ekibi, tedarikçi koordinasyonu, zamanlama ve yedek senaryoların yönetimi." },
  ],
};

export const activities = {
  eyebrow: "Aktivite fikirleri",
  title: "Programa eklenebilecek 12 deneyim",
  intro: "Her aktivite hedefe, grup büyüklüğüne ve mevsime göre uyarlanır. Başlık seçtiğiniz formatın detay sayfasına götürür.",
  items: [
    { label: "Beach Olympics", text: "Plajda takım yarışları ve turnuva akışı.", href: "/team-building" },
    { label: "Sailing", text: "Takım halinde yelken ve regata formatı.", href: "/kurumsal-outdoor-aktiviteler" },
    { label: "Rafting", text: "Köprüçay'da ekip halinde nehir parkuru.", href: "/antalya/kurumsal-outdoor-aktiviteler" },
    { label: "Jeep Safari", text: "Toros etekleri ve yaylalarda konvoy görevleri.", href: "/kurumsal-outdoor-aktiviteler" },
    { label: "Outdoor Challenges", text: "Halat parkuru, oryantiring, zorluk istasyonları.", href: "/kurumsal-outdoor-aktiviteler" },
    { label: "Cooking Experience", text: "Akdeniz mutfağında takım halinde yemek.", href: "/antalya/team-building" },
    { label: "Cocktail Workshop", text: "Bar şefi eşliğinde ekip atölyesi.", href: "/sirket-motivasyon-etkinlikleri" },
    { label: "Treasure Hunt", text: "Şehir veya resort içinde yönlendirmeli keşif oyunu.", href: "/team-building" },
    { label: "Golf Experience", text: "Başlangıç kliniği ve scramble turnuvası.", href: "/belek/team-building" },
    { label: "Yacht Events", text: "Özel tekne ile gün batımı veya akşam programı.", href: "/antalya/incentive" },
    { label: "Wellness Experiences", text: "Yoga, nefes, spa ve sakin saatler.", href: "/corporate-retreat" },
    { label: "Sports Tournaments", text: "Şirket olimpiyatı, futbol ve voleybol turnuvaları.", href: "/sirket-motivasyon-etkinlikleri" },
  ],
};

export const venues = {
  eyebrow: "Mekân bulma",
  title: "Doğru mekân, etkinliğin yarısıdır",
  body: [
    "Antalya ve Belek'te seçenekler çok; ancak kapasite, ses ve saat kısıtları, yiyecek-içecek şartları, ulaşım ve hava planı her mekânda farklı. Kısa listeyi sizin için hazırlar, karşılaştırmalı sunarız.",
    "Mekân seçimi etkinliğin biçimini de belirler; bu yüzden mekân aramaya konseptle birlikte, brief aşamasında başlarız.",
  ],
  types: [
    "Resort ve tatil köyü salonları",
    "Şehir otelleri ve toplantı salonları",
    "Kongre ve toplantı mekânları",
    "Beach club'lar",
    "Açık hava mekânları (bahçe, orman, plato)",
    "Restoranlar ve rooftop'lar",
    "Özel etkinlik mekânları (villa, çiftlik, tarihi alan)",
  ],
  cta: { label: "Etkinlik mekânı seçeneklerini inceleyin", href: "/kurumsal-etkinlik-mekanlari" },
};

export const modules = {
  eyebrow: "Tek brief, altı operasyon modülü",
  title: "Etkinliğin bütün parçaları aynı masada",
  intro:
    "Modüllerden yalnızca birini de alabilirsiniz; tamamını tek ekibe vermek ise koordinasyonu, zamanlamayı ve sorumluluğu sadeleştirir.",
  items: [
    { t: "Mekân", d: "Resort, otel, beach club ve özel alan seçimi; saha ziyareti ve pazarlık desteği.", href: "/kurumsal-etkinlik-mekanlari" },
    { t: "Transfer", d: "Havalimanı karşılama, grup transferi, vardiyalı araç planı.", href: "/kurumsal-etkinlik-organizasyonu" },
    { t: "Prodüksiyon", d: "Sahne, ses, ışık, LED ekran, dekor ve teknik yönetim.", href: "/gala-organizasyonu" },
    { t: "Catering", d: "Menü kurgusu, servis akışı, bar ve özel diyet yönetimi.", href: "/kurumsal-etkinlik-organizasyonu" },
    { t: "Eğlence", d: "DJ, canlı müzik, sunucu, şov ve interaktif içerik.", href: "/gala-organizasyonu" },
    { t: "Personel", d: "Host/hostes, servis, supervisor ve operasyon ekipleri.", href: "/etkinlik-personeli" },
  ],
};

export const whyDestination: Section = {
  kind: "index",
  eyebrow: "Neden Antalya & Belek?",
  title: "Kurumsal etkinlik için kurulmuş bir destinasyon",
  intro: "Turizm altyapısı, ulaşım ve doğal çeşitlilik tek bir hedefte buluşuyor. Bunlar etkinliğin bütçesine ve riskine doğrudan yansır.",
  items: [
    { title: "Havalimanına yakınlık", text: "Antalya Havalimanı hem şehre hem Belek'e kısa transfer mesafesinde; birçok şehirden doğrudan uçuş seçeneği katılımcı lojistiğini sadeleştirir." },
    { title: "Mevsime yayılan takvim", text: "Etkinlik yalnızca yaz aylarına bağlı kalmaz; ilkbahar ve sonbahar outdoor ve golf için, kış ise toplantı ve retreat için verimli dönemlerdir." },
    { title: "Aynı hedefte deniz, dağ ve tarih", text: "Plaj, kanyon, antik kent ve şehir dokusu birkaç saatlik mesafede; tek programda birden fazla karakter kurgulanabilir." },
    { title: "Kurumsal altyapı", text: "Resort balo salonları, kongre alanları, ses-ışık-sahne tedarik zinciri ve deneyimli hizmet sektörü; büyük gruplar için kapasite sunar." },
    { title: "Misafirperverlik ve dil", text: "Turizm ekosistemi çok dilli personel ve yüksek servis standardı demektir; uluslararası katılımcıları olan etkinliklerde fark yaratır." },
  ],
};

export const staffing = {
  eyebrow: "Event staffing",
  title: "Etkinliğin yüzü olan ekip",
  body: [
    "Misafirin ilk karşılaştığı kişi, etkinliğin kalitesini belirler. Antalya ve Belek'te host/hostes, servis, kayıt ve operasyon personelini; briefing, kıyafet ve yönetim ile birlikte sağlıyoruz.",
    "Personel hizmetini tek başına da alabilirsiniz; başka bir ajansın ya da kendi organizasyonunuzun yanında çalışırız.",
  ],
  roles: ["Host / hostes", "Karşılama ve kayıt ekibi", "Servis personeli", "Bar ve catering ekibi", "Supervisor ve saha lideri", "Operasyon personeli", "VIP refakat ve transfer koordinasyonu", "Çok dilli bilgi masası"],
  links: [
    { label: "Etkinlik personeli hizmeti", href: "/etkinlik-personeli" },
    { label: "Antalya event staff", href: "/antalya/event-staff" },
  ],
};

export const scenarios: Section = {
  kind: "scenarios",
  eyebrow: "Örnek etkinlik senaryoları",
  title: "Brief'ler böyle şekillenebilir",
  intro:
    "Aşağıdakiler planlama örneğidir; gerçek müşteri referansı veya geçmiş proje değildir. Format, süre ve kapsam her brief'e göre yeniden kurgulanır.",
  items: [
    { title: "Belek'te satış ekibi incentive'i", text: "Karşılama, golf kliniği ve scramble turnuvası, plajda gala akşamı ve ödül töreni. Katılımcılar tek resort içinde kalır; transfer ihtiyacı minimumdur.", group: "80 kişi", duration: "3 gün · 2 gece", format: "Resort + golf + plaj gala", media: "scenario-belek-incentive" },
    { title: "Antalya'da yönetim ekibi team building'i", text: "Kaleiçi'nde yönlendirmeli şehir görevi, öğleden sonra Akdeniz mutfağı atölyesi ve tarihi mekânda akşam yemeği. Hedef: yeni kurulan ekibin birbirini tanıması.", group: "45 kişi", duration: "1 gün", format: "Şehir + atölye + akşam yemeği", media: "scenario-antalya-team" },
    { title: "Kemer'de bayi toplantısı ve gala", text: "Sabah genel oturum ve ürün alanı, öğleden sonra aktivite seçenekleri, akşam ödül töreni ve konserle kapanış. Konaklama ve transfer programa dahil.", group: "150 kişi", duration: "2 gün", format: "Toplantı + ödül gecesi", media: "scenario-dealer" },
  ],
};

export const homeFaq: QA[] = [
  {
    q: "Antalya ve Belek'te kurumsal etkinlik için ne kadar önceden iletişime geçmeliyim?",
    a: "Küçük ekip etkinlikleri için genellikle 3–4 hafta yeterlidir. Gala, incentive ve 100 kişiyi aşan gruplarda ise 3–6 ay önceden başlamak mekân ve otel kapasitesi açısından güvenlidir. Mayıs–Ekim sezonu ve bayram haftalarında kapasite hızla daralır. Tarih esnekse bunu formda belirtmeniz seçenekleri artırır.",
  },
  {
    q: "Hangi hizmetleri tek ekipten alabilirim?",
    a: "Konsept, mekân seçimi, aktivite kurgusu, sahne-ses-ışık prodüksiyonu, catering, transfer, eğlence ve etkinlik personeli tek ekipten yönetilir. Bunların yalnızca bir kısmına ihtiyacınız varsa modüler de çalışabiliriz; örneğin yalnızca [etkinlik personeli](/etkinlik-personeli) veya yalnızca [mekân bulma](/kurumsal-etkinlik-mekanlari).",
  },
  {
    q: "Etkinlik bütçesi neye göre oluşur?",
    a: "Katılımcı sayısı, süre, mekân ve konaklama, prodüksiyon düzeyi, yiyecek-içecek, transfer ve personel ana kalemlerdir; sezon ve tarih de fiyatı belirgin biçimde etkiler. Teklifte kalemleri ayrı gösteririz. Ayrıntı için [bütçe hazırlama rehberine](/rehberler/kurumsal-etkinlik-butcesi-nasil-hazirlanir) bakabilirsiniz.",
  },
  {
    q: "Yurt dışından gelen gruplar için hizmet veriyor musunuz?",
    a: "Evet. Havalimanı karşılama, grup transferi, çok dilli personel ve konaklama koordinasyonunu içeren uluslararası grup programlarını planlıyoruz. [Incentive organizasyonu](/incentive-organizasyonu) sayfasında program yapısını bulabilirsiniz.",
  },
  {
    q: "Teklif sürecinde neler olur?",
    a: "Formu doldurduktan sonra brief'iniz bir etkinlik uzmanı tarafından incelenir; gerekirse kısa bir netleştirme görüşmesi yapılır. Ardından konsept yönü, lokasyon önerisi ve bütçe çerçevesini içeren ilk öneri size iletilir. Form sizi herhangi bir taahhüde bağlamaz.",
  },
  {
    q: "Hava koşulları outdoor etkinlikleri etkiler mi?",
    a: "Antalya'da outdoor etkinlikler için uygun gün sayısı yüksektir; yine de sağanak, rüzgâr veya aşırı sıcak risk oluşturabilir. Her outdoor programa kapalı alan alternatifi veya saat kaydırma planı ekleriz. Ayrıntılar [kurumsal outdoor aktiviteler](/kurumsal-outdoor-aktiviteler) sayfasında.",
  },
];
