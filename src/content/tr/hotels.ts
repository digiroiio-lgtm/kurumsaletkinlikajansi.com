import type { Hotel, Source } from "../types";

/**
 * OTEL / SALON VERİSİ — "doğrulanmış veri kapısı" (docs/HOTEL-DATA.md)
 *
 * Kural: Sayfada yalnızca `status: "verified"` ve kaynak URL + tarih taşıyan satırlar yayınlanır.
 * Doğrulanamayan veya kaynaklar arasında çelişen rakamlar `pendingClaims` içinde tutulur (sayfada GÖSTERİLMEZ).
 *
 * Toplama yöntemi (2026-10-06): otellerin resmî siteleri bu ortamdan erişime kapalıydı; rakamlar web arama
 * özetlerindeki resmî ve MICE-listeleme sayfalarından alındı. `trade-listing` = üçüncü taraf MICE/venue rehber
 * listesi. Hiçbir rakam teklife temel yapılmadan önce otelin satış ekibiyle teyit edilmelidir.
 */
const D = "2026-10-06";
const src = (type: Source["type"], label: string, url: string): Source => ({ type, label, url, retrievedAt: D });

const AMI = "https://www.amimagazine.global/Meeting-Event-Venues/Belek-Turkey/Convention-Hotel";

const S = {
  regnum: src("official", "Regnum Carya — Convention Centre", "https://www.regnumhotels.com/en/meeting-and-events/meeting/convention-centre"),
  titanicOfficial: src("official", "Titanic Deluxe Golf Belek — Meetings & Events", "https://www.titanic.com.tr/titanic-deluxe-golf-belek/meetings-events"),
  titanicTrade: src("trade-listing", "AMI Magazine — Titanic Deluxe Belek", `${AMI}/Titanic-Deluxe-Belek-p58043877`),
  susesiOfficial: src("official", "Susesi Luxury Resort — Congress & Meeting", "https://www.susesihotel.com/en/convention-center/"),
  susesiTrade: src("trade-listing", "AMI Magazine — SuSesi Luxury Resort", `${AMI}/SuSesi-Luxury-Resort-p57961313`),
  calista: src("trade-listing", "AMI Magazine — Calista Luxury Resort", `${AMI}/Calista-Luxury-Resort-p58043366`),
  corneliaOfficial: src("official", "Cornelia Diamond — Meeting Rooms and Capacities", "https://www.corneliaresort.com/EN/Cornelia-Diamond-Luxury-Golf-Resort-Spa-Hotel-Belek-Antalya/documents-mice"),
  corneliaTrade: src("trade-listing", "AMI Magazine — Cornelia Diamond", `${AMI}/Cornelia-Diamond-Golf-Resort-Spa-p57952700`),
  gloria: src("trade-listing", "AMI Magazine — Gloria Golf Resort", `${AMI}/Gloria-Golf-Resort-Hotel-p57980321`),
  kempinski: src("official", "Kempinski Hotel The Dome — Meetings & Events", "https://www.kempinski.com/en/hotel-the-dome/meetings-events"),
  laraBarut: src("trade-listing", "Meetings & Conventions — Lara Barut Collection", "https://www.meetings-conventions.com/Meeting-Event-Venues/Lara-Turkey/Convention-Hotel/Lara-Barut-Collection-p59062957"),
  maxx: src("trade-listing", "AMI Magazine — Maxx Royal Belek Golf Resort", `${AMI}/Maxx-Royal-Belek-Golf-Resort-p57920828`),
  rixos: src("trade-listing", "AMI Magazine — Rixos Premium Belek", `${AMI}/Rixos-Premium-Belek-p57918748`),
};

export const hotels: Hotel[] = [
  /* ------------------------------------------------------------------ */
  {
    id: "regnum-carya",
    slug: "regnum-carya-kurumsal-etkinlik",
    name: "Regnum Carya",
    region: "belek",
    segment: "Premium resort · büyük ölçekli convention · golf",
    positioning: ["Çok büyük convention alanı, premium resort konforu ve golf bir arada", "Büyük kongre, CEO zirvesi, lansman, incentive ve gala için aday"],
    eventTags: ["kongre", "konferans", "bayi-toplantisi", "urun-lansmani", "gala", "kokteyl", "incentive", "golf-etkinligi", "board-meeting"],
    outdoor: ["Golf turnuvası ve golf kliniği", "Resort bahçesi ve plajda açık hava programları"],
    facts: [{ label: "Convention Centre", value: "Sekiz toplantı alanı, 38 m² ile 2.100 m² arası", source: S.regnum }],
    halls: [{ name: "Carya salonu", areaM2: 2100, divisible: "Üç ayrı alana bölünebilir", status: "verified", source: S.regnum }],
    pendingClaims: [
      "Carya salonu tiyatro düzeninde 2.000 kişi (doğrulanamadı: resmî sayfa özeti convention centre için 'en fazla 1.500 kişi' diyor)",
      "Fuaye 750 m² (doğrulanamadı)",
      "Kurumsal yemek, konser, lansman ve golf turnuvalarının otel tarafından event senaryosu olarak sunulması (otelin sayfasından teyit edilecek)",
    ],
    editorial: {
      intro: [
        "Regnum Carya, Belek'te ölçek arayan kurumsal etkinlikler için ilk bakılacak adreslerden biridir: convention alanı, premium resort altyapısı ve golf aynı yerleşkede toplanır. Tek bir salonun 2.100 m² olması, bu alanın bölünerek birden fazla oturum için de kullanılabileceği anlamına gelir.",
        "Bu rehber, Regnum Carya'yı bir etkinlik planlayıcısının gözüyle değerlendirir: hangi etkinlik türüne uygun, nelere dikkat edilmeli, 100, 300 ve 1.000 kişilik bir program nasıl kurgulanır.",
      ],
      indoor: [
        "Convention Centre'ın en büyük alanı Carya salonudur. Üç ayrı alana bölünebildiği için sabah genel oturum, öğleden sonra paralel atölye kurgusu aynı salonda yönetilebilir. Fuaye kullanımı (sponsor alanı, kayıt, kahve molaları) kongre ve lansman tasarımında kritik bir yardımcıdır; fuaye ölçüleri otelle ayrıca teyit edilmelidir.",
      ],
      outdoor: [
        "Resort'un açık alanları ve golf sahası, programı salon dışına taşımak için kullanılabilir: kokteyl, açılış akşamı veya turnuva ödül töreni gibi. Açık hava kurgusunun her zaman kapalı alan alternatifiyle birlikte planlanması gerekir.",
      ],
      teamBuilding: [
        "Golf kliniği ve scramble formatı, golf deneyimi olmayan katılımcıların da takıma katıldığı sade bir team building seçeneğidir. Plaj ve bahçe alanlarında takım yarışları aynı gün içinde eklenebilir.",
      ],
      gala: [
        "Büyük salon, oturmalı gala ve ödül töreni için ölçek sunar; konser veya sahne prodüksiyonu için otelin teknik kuralları (yük giriş saati, ses sınırı, dış tedarikçi) önceden netleştirilmelidir.",
      ],
      access: "Belek turizm merkezinde yer alır; Antalya Havalimanı'ndan transfer süresi ve güzergâh grup uçuş planına göre netleştirilir.",
      scenarios: [
        { size: 100, text: "Salonun tamamı yerine bölünmüş bir alan, aynı katta kahve molası ve akşam yemeği: yönetim zirvesi veya bölge toplantısı için daha yakın bir atmosfer." },
        { size: 300, text: "Tek oturumlu genel toplantı, paralel iki atölye alanı ve plaj/bahçe kokteyli; konaklama ve toplantı aynı yerleşkede olduğu için transfer ihtiyacı çok azdır." },
        { size: 1000, text: "Tam salon kullanımı, fuayede sponsor/ürün alanı, golf turnuvası veya incentive programı ile birleşen çok günlü kongre. Bu ölçekte salon kapasitesinin düzen bazında yazılı teyidi şarttır." },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "titanic-deluxe-golf-belek",
    slug: "titanic-deluxe-golf-belek-kurumsal-etkinlik",
    name: "Titanic Deluxe Golf Belek",
    region: "belek",
    segment: "Büyük kongre merkezi · fuaye · golf ve doğa",
    positioning: ["Büyük kongre kapasitesi, fuaye alanları ve golf/doğa", "Kongre, bayi toplantısı, gala, workshop ve sergi için aday"],
    eventTags: ["kongre", "konferans", "bayi-toplantisi", "gala", "workshop", "fuar", "yonetim-toplantisi", "golf-etkinligi"],
    outdoor: ["Plaj ve spor alanlarında takım etkinlikleri", "Golf ve doğa programları"],
    facts: [
      { label: "Kongre merkezi", value: "15 toplantı odası", source: S.titanicTrade },
      { label: "Pasific ana salon", value: "Üç bölüme ayrılabilir (alan ve kapasite verisi doğrulanamadı)", source: S.titanicTrade },
    ],
    halls: [
      { name: "Marmara I", areaM2: 152, capacity: { theatre: 80, banquet: 60 }, status: "verified", source: S.titanicTrade },
      { name: "Marmara II–VIII (her biri)", areaM2: 72, capacity: { theatre: 40, banquet: 30 }, status: "verified", source: S.titanicTrade },
    ],
    pendingClaims: [
      "Pasific ana salon: 2.000 m²; tiyatro 1.650, banket 1.500, kokteyl 1.750 (kullanıcı verisi, doğrulanamadı)",
      "Listelemede geçen '2.450 kişilik balo salonu' ifadesi hangi düzen/salon olduğu belirsiz",
      "Plaj futbolu, plaj voleybolu, kano ve basketbol aktivite altyapısı (otel beyanı, teyit edilecek)",
    ],
    editorial: {
      intro: [
        "Titanic Deluxe Golf Belek, kongre merkezi ve çok sayıda toplantı odasıyla Belek'in büyük kongre otellerinden biri olarak konumlanır. Ana salonun bölünebilmesi ve çok sayıda küçük oda, hem genel oturum hem paralel atölye gerektiren programlar için esneklik sağlar.",
        "Bu rehber otelin toplantı ve etkinlik alanlarını, hangi etkinlik türleri için güçlü olduğunu ve plajdan golfa uzanan aktivite seçeneklerinin programa nasıl eklenebileceğini planlama gözüyle ele alır.",
      ],
      indoor: [
        "Pasific ana salonun üç bölüme ayrılabilmesi, aynı anda birden fazla oturum gerektiren bayi toplantısı ve workshop programlarında önemlidir. Marmara serisi gibi küçük odalar break-out, yönetim toplantısı ve eğitim için kullanışlıdır; her odanın düzen bazlı kapasitesi tabloda doğrulanmış satırlarla gösterilir.",
      ],
      outdoor: [
        "Otelin plaj, spor ve doğa alanları, toplantı günlerini aktiviteyle dengelemek için kullanılabilir. Hangi aktivitenin hangi mevsimde ve hangi grup büyüklüğüyle sunulabildiği otelle teyit edilmelidir.",
      ],
      teamBuilding: [
        "Plaj olimpiyatı, kano veya takım turnuvası gibi formatlar, toplantı sonrası ekibi bir araya getirmek için uygundur. Büyük gruplarda takım sayısına göre saha lideri ve ekipman planı yapılır.",
      ],
      gala: [
        "Büyük salon, kongre kapanış yemeği ve gala için ölçek sağlayabilir; ödül töreni için sahne ve ışık prodüksiyonunun salonun yüksekliği ve kolonlarına göre planlanması gerekir.",
      ],
      access: "Belek'te yer alır; Antalya Havalimanı'ndan grup transferi planına göre ulaşım süresi netleştirilir.",
      scenarios: [
        { size: 100, text: "Salonun bir bölümü veya orta ölçekli oda; sabah oturumu, öğle yemeği ve öğleden sonra plaj aktivitesi." },
        { size: 300, text: "Ana salonun bölünmüş yarısı genel oturum için, küçük odalar paralel atölye için; akşam gala yemeği." },
        { size: 1000, text: "Tüm salon ve fuaye alanlarını kullanan kongre veya bayi toplantısı; kayıt, sponsor alanı ve çoklu oturum yönetimi. Düzen bazında yazılı kapasite teyidi şarttır." },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "susesi-luxury-resort",
    slug: "susesi-luxury-resort-kurumsal-etkinlik",
    name: "Susesi Luxury Resort",
    region: "belek",
    segment: "Convention odaklı resort",
    positioning: ["Büyük bir kongre merkezi olan convention odaklı resort", "Kongre, konferans, kurumsal toplantı ve gala için aday"],
    eventTags: ["kongre", "konferans", "yonetim-toplantisi", "bayi-toplantisi", "gala", "fuar", "workshop"],
    outdoor: ["Resort bahçesi ve plaj alanı", "Toplantı salonlarından otel olanaklarına doğrudan erişim"],
    facts: [
      { label: "Kongre merkezi", value: "17 toplantı odası", source: S.susesiOfficial },
      { label: "Fuaye", value: "3.600 m², gün ışıklı", source: S.susesiTrade },
    ],
    halls: [{ name: "Maxi salonu", areaM2: 1100, capacity: { theatre: 800 }, status: "verified", source: S.susesiTrade }],
    pendingClaims: [
      "Kongre merkezi toplam alanı: kaynaklar arasında 6.600 m² / yaklaşık 7.000 m² çelişkisi var",
      "'En büyük salon 1.800 m²' ifadesi tek kaynaklı, Maxi salonuyla ilişkisi belirsiz",
      "Toplam toplantı kapasitesi 4.340 kişi (13 oda) — oda sayısı resmî sayfadaki 17 ile uyuşmuyor",
    ],
    editorial: {
      intro: [
        "Susesi Luxury Resort, Belek'te kongre merkezi odaklı yapısıyla öne çıkar. Çok sayıda toplantı odası ve geniş, gün ışıklı bir fuaye, konferans ve fuar benzeri programlar için avantajlı bir planlama zemini sunar.",
        "Bu rehber, otelin kongre yapısını ve hangi etkinlik türlerine uyduğunu bir etkinlik planlayıcısının bakışıyla özetler.",
      ],
      indoor: [
        "Çok sayıda oda, paralel oturum gerektiren kongre ve eğitim programlarında esneklik sağlar. Geniş fuaye; kayıt, sponsor standları ve kahve molası için doğal bir akış yaratır. Salon düzeni ve kapasitesi yazılı teklifte netleştirilmelidir.",
      ],
      outdoor: [
        "Kongre günlerinin arasında bahçe ve plaj kullanımı, katılımcıların toparlanmasını ve ağ kurmasını destekler. Açık hava etkinliği için kapalı alan alternatifi hazırlanmalıdır.",
      ],
      teamBuilding: [
        "Toplantı sonrası kısa team building formatları (plaj yarışları, atölye) kongreyi tek düze olmaktan çıkarır; gruba göre 60–120 dakikalık bölümler yeterlidir.",
      ],
      gala: [
        "Kongre kapanış yemeği veya gala için salon düzeni, servis akışı ve sahne yerleşimi teknik ekiple birlikte planlanır; otelin dış prodüksiyon ve ses kuralları önceden sorulur.",
      ],
      access: "Belek'te yer alır; havalimanı transferi ve katılımcı varış saatleri programın ilk gününü belirler.",
      scenarios: [
        { size: 100, text: "Orta ölçekli bir salon veya iki oda; kayıt fuayede, öğle yemeği ortak." },
        { size: 300, text: "Genel oturum bir büyük salonda, paralel oturumlar küçük odalarda; fuayede sponsor alanı." },
        { size: 1000, text: "Geniş salon + paralel odalar + fuaye: çok oturumlu kongre. Salon kapasitesi düzen bazında yazılı olarak teyit edilmelidir." },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "calista-luxury-resort",
    slug: "calista-luxury-resort-kurumsal-etkinlik",
    name: "Calista Luxury Resort",
    region: "belek",
    segment: "Ballroom + farklı boyutlarda toplantı odaları",
    positioning: ["Büyük bir balo salonu ve farklı boyutlarda toplantı odaları", "Lansman, gala, orta/büyük konferans ve yönetim toplantısı için aday"],
    eventTags: ["urun-lansmani", "gala", "kokteyl", "konferans", "yonetim-toplantisi", "bayi-toplantisi", "odul-toreni"],
    outdoor: ["Resort bahçesi ve plaj", "Açık hava kokteyl ve gala alanları"],
    facts: [
      { label: "Toplantı alanı", value: "5 toplantı odası, toplam 1.422 m²", source: S.calista },
      { label: "Konaklama", value: "600 oda", source: S.calista },
      { label: "Mesafe", value: "Havalimanına 27 km, Antalya şehir merkezine 35 km", source: S.calista },
    ],
    halls: [{ name: "Candor Hall", areaM2: 1070, capacity: { cocktail: 1250, banquet: 800, theatre: 900 }, status: "verified", source: S.calista }],
    pendingClaims: ["Candor Hall'ın üçe bölünebilmesi (kullanıcı verisi, doğrulanamadı)", "280 kişilik sinema/sunum formatlı küçük salon (doğrulanamadı)"],
    editorial: {
      intro: [
        "Calista Luxury Resort, tek ve büyük bir balo salonuyla birlikte farklı ölçekte toplantı odaları sunduğu için lansman ve gala ağırlıklı kurumsal programlarda dikkat çeker. Salon, ayakta kokteyl formatında en yüksek kapasiteyi verir.",
        "Aşağıda salon kapasiteleri yalnızca kaynaklı verilerle gösterilir; üç düzende (kokteyl, banket, tiyatro) farklı kişi sayıları programı belirleyen en kritik unsurdur.",
      ],
      indoor: [
        "Candor Hall, kokteylde 1.250 kişiye kadar çıkan ancak oturmalı yemekte 800 kişiye düşen bir alandır: aynı salonda gala yemeği ile ayakta lansman arasındaki kapasite farkı bütçe ve davetli sayısı planında belirleyicidir. Daha küçük odalar yönetim toplantısı ve workshop için ayrılabilir.",
      ],
      outdoor: [
        "Resort bahçesi ve plaj; lansman öncesi kokteyl veya gala sonrası eğlence için kullanılabilir. Açık havada ses ve saat kuralları resort tarafından belirlenir.",
      ],
      teamBuilding: [
        "Toplantı günü sonunda plajda kısa turnuva veya bahçede atölye, lansman veya konferans katılımcılarını gevşetmek için pratik bir kapanıştır.",
      ],
      gala: [
        "Banket düzeninde 800 kişilik oturmalı gala, kokteylde 1.250 kişilik ayakta davet, tiyatro düzeninde 900 kişilik sahne programı: aynı salonda üç farklı etkinlik formatı kurmak mümkündür.",
      ],
      access: "Resort'un havalimanına yaklaşık 27 km, Antalya şehir merkezine yaklaşık 35 km mesafede olduğu yayımlanmıştır (kaynak: tabloda).",
      scenarios: [
        { size: 100, text: "Salonun tamamı gerekmez; küçük bir toplantı odası ve plaj akşamı daha etkili ve ekonomik olabilir." },
        { size: 300, text: "Banket düzeninde oturmalı gala veya tiyatro düzeninde lansman; salonun kapasitesi bu ölçek için rahat." },
        { size: 1000, text: "Ayakta kokteyl veya lansman formatı salonun kapasite sınırına yaklaşır (1.250); oturmalı yemek için ek alan gerekir." },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "cornelia-diamond-golf-resort",
    slug: "cornelia-diamond-kurumsal-etkinlik",
    name: "Cornelia Diamond Golf Resort & Spa",
    region: "belek",
    segment: "Convention · NEST erişimi · golf",
    positioning: ["Convention merkezi, NEST etkinlik alanına erişim ve golf bir arada", "Sergi, kongre, fuar ve gala için aday"],
    eventTags: ["kongre", "konferans", "fuar", "gala", "workshop", "golf-etkinligi", "bayi-toplantisi"],
    outdoor: ["Golf sahası", "Resort bahçesi ve plaj alanı"],
    facts: [
      { label: "Toplantı alanı", value: "9 toplantı odası, toplam 2.628 m²", source: S.corneliaTrade },
      { label: "Yayımlanan toplam kapasite beyanı", value: "Toplantı alanlarında 2.000 kişiye kadar grup", source: S.corneliaTrade },
    ],
    halls: [{ name: "Ana konferans salonu", areaM2: 1475, capacity: { theatre: 1400 }, divisible: "Üç bölüme ayrılabilir", status: "verified", source: S.corneliaTrade }],
    pendingClaims: [
      "'12 farklı toplantı alanı' (kaynaklarda 7–9 oda ve 6 workshop odası farklı biçimlerde geçiyor)",
      "NEST: 15.000 m² kapalı + 5.000 m² açık alan (doğrulanamadı)",
    ],
    editorial: {
      intro: [
        "Cornelia Diamond, Belek'te kongre merkezi ve golf sahasını aynı yerleşkede sunan resort'lardandır. Ana konferans salonunun üç bölüme ayrılabilmesi ve çok sayıda yardımcı oda, kongre ve sergi türü programlar için esneklik sağlar.",
        "Otelin NEST etkinlik alanına erişim bilgisi, fuar ve sergi türü etkinlik planlayanlar için ayrıca değerlendirilmelidir; ölçüler ve kullanım koşulları otel veya alan işletmecisiyle teyit edilmelidir.",
      ],
      indoor: [
        "Ana konferans salonu tiyatro düzeninde 1.400 kişiye kadar kapasite sunar ve üç bölüme ayrılabilir. Bu, sabah genel oturum, öğleden sonra eş zamanlı üç ayrı oturum kurgusuna imkân tanır. Daha küçük odalar workshop ve yönetim toplantıları için kullanışlıdır.",
      ],
      outdoor: [
        "Golf sahası, toplantı dışı zamanı dolduran en güçlü aktivitedir: klinik, scramble veya turnuva. Plaj ve bahçe alanları kokteyl ve gala için ek seçenektir.",
      ],
      teamBuilding: [
        "Kongre katılımcılarına yönelik 90 dakikalık golf kliniği ya da bahçede takım atölyesi, programı hareketlendirir; sergi katılımcıları için kısa ağ kurma etkinlikleri de eklenebilir.",
      ],
      gala: [
        "Salon düzeni (banket/kokteyl) ve sahne yerleşimi kongre gala'sı için ön planlama gerektirir; fuar türü programlarda stand alanlarının akışı ayrıca tasarlanır.",
      ],
      access: "Belek'te yer alır; havalimanı transferi ve katılımcıların varış saatleri programın başlangıcını belirler.",
      scenarios: [
        { size: 100, text: "Salonun bir bölümü veya orta oda; öğleden sonra golf kliniği, akşam bahçede yemek." },
        { size: 300, text: "Ana salonun bölünmüş kısmında genel oturum, paralel odalarda atölye; akşam banket." },
        { size: 1000, text: "Ana salonun tamamı (tiyatro 1.400 kişiye kadar), fuaye ve ek odalarla kongre; fuar bileşeni için ek alan ihtiyacı otelle netleştirilir." },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "gloria-golf-resort",
    slug: "gloria-golf-resort-kurumsal-etkinlik",
    name: "Gloria Golf Resort",
    region: "belek",
    segment: "Resort · golf · spor altyapısı",
    positioning: ["Resort, geniş golf kulübü ve spor imkânları bir arada", "Incentive, team building, golf etkinliği ve toplantı için aday"],
    eventTags: ["incentive", "team-building", "golf-etkinligi", "yonetim-toplantisi", "bayi-toplantisi", "konferans", "gala", "kick-off"],
    outdoor: ["45 delikli golf kulübü", "Tenis kortları, aquapark ve spor imkânları", "Plaj ve su sporları"],
    facts: [
      { label: "Toplantı alanı", value: "7 toplantı odası, toplam 2.072 m²", source: S.gloria },
      { label: "Toplam toplantı kapasitesi", value: "2.200 kişi", source: S.gloria },
      { label: "Golf", value: "45 delikli kulüp: iki 18 delik şampiyona sahası ve 9 delik akademi sahası", source: S.gloria },
    ],
    halls: [{ name: "Manyas salonu", areaM2: 1056, capacity: { theatre: 1200, banquet: 800 }, status: "verified", source: S.gloria }],
    pendingClaims: [],
    editorial: {
      intro: [
        "Gloria Golf Resort, Belek'te toplantı alanını geniş bir golf ve spor altyapısıyla birleştirdiği için incentive ve takım odaklı programlarda öne çıkar. 45 delikli golf kulübü, kurumsal golf turnuvası düzenlemek isteyenler için geniş bir saha sunar.",
        "Bu rehberde otelin salon kapasiteleri yalnızca kaynaklı verilerle gösterilir; golf ve spor aktiviteleri ise program tasarımında nasıl kullanılabileceği açısından ele alınır.",
      ],
      indoor: [
        "Manyas salonu 1.056 m² alanıyla tiyatro düzeninde 1.200, banket düzeninde 800 kişiye kadar kapasite verir. Bu, orta büyüklükte bayi toplantısı ve konferans için yeterli, çok büyük kongreler için ise sınırda bir salondur. Toplam 7 toplantı odası eş zamanlı oturumları destekler.",
      ],
      outdoor: [
        "Golf kulübü, tenis, aquapark ve plaj; toplantı öncesi veya sonrası aktivite günü kurmayı kolaylaştırır. Takım turnuvası, scramble ve kliniğin yanında pool games ve plaj voleybolu gibi formatlar eklenebilir.",
      ],
      teamBuilding: [
        "Golf kliniği + scramble, tenis veya padel turnuvası, plaj olimpiyatı: aynı resort içinde farklı yoğunluklarda takım etkinlikleri tasarlanabilir. Hangi tesislerin grup rezervasyonuna açık olduğu otelle teyit edilir.",
      ],
      gala: [
        "Banket düzenindeki 800 kişilik salon veya bahçe/plaj alanı, turnuva ödül yemeği ve gala için uygundur; golf günü sonrası ödül töreninin kulüp çevresinde kurgulanması da seçenektir.",
      ],
      access: "Belek'te yer alır; havalimanı transferi ve golf başlangıç saatleri birlikte planlanır.",
      scenarios: [
        { size: 100, text: "Golf günü + kısa toplantı: sabah oturum, öğleden sonra scramble, akşam ödül yemeği." },
        { size: 300, text: "Salonda konferans, ardından tenis ve plaj turnuvaları; akşam banket gala." },
        { size: 1000, text: "Manyas salonunun tiyatro kapasitesi (1.200) sınırına yakın olduğundan çok oturumlu veya fuar bileşenli programlar için ek alan gerekir." },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "kempinski-the-dome-belek",
    slug: "kempinski-the-dome-belek-kurumsal-etkinlik",
    name: "Kempinski Hotel The Dome Belek",
    region: "belek",
    segment: "Butik premium toplantı deneyimi",
    positioning: ["Daha küçük ölçekli, üst segment gruplar için toplantı deneyimi", "Yönetim retreat'i, board meeting ve VIP incentive için aday"],
    eventTags: ["yonetim-toplantisi", "board-meeting", "retreat", "incentive", "workshop", "gala", "kokteyl", "konferans"],
    outdoor: ["Kapalı ve plajda/açık havada etkinlik alanları", "Sahile erişimli açık hava kurguları"],
    facts: [{ label: "Fonksiyon alanı", value: "7 fonksiyon alanı; konferans formatında 400 kişiye kadar", source: S.kempinski }],
    halls: [{ name: "Karatay salonu", areaM2: 573, capacity: { theatre: 400, banquet: 300, classroom: 190 }, status: "verified", source: S.kempinski }],
    pendingClaims: [],
    editorial: {
      intro: [
        "Kempinski Hotel The Dome Belek, büyük ölçekli convention otellerinin tersine, üst segment ve küçük-orta büyüklükteki gruplara hitap eden bir toplantı deneyimi sunar. Yedi fonksiyon alanı ve konferans formatında 400 kişiye kadar kapasite, bu ölçeğin sınırlarını da belirler.",
        "Bu nedenle yönetim kurulu toplantıları, executive retreat ve VIP incentive programları öne çıkar; 1.000 kişilik kongre gibi etkinlikler için uygun bir adres değildir.",
      ],
      indoor: [
        "Karatay salonu 573 m² alanıyla tiyatro düzeninde 400, banket düzeninde 300, sınıf düzeninde 190 kişiye kadar kapasite verir. Daha küçük fonksiyon alanları board meeting ve workshop için, kapalı ve açık hava seçenekleri ise özel akşam yemekleri için kullanılabilir.",
      ],
      outdoor: [
        "Otelin sahile erişimli açık hava alanları, kokteyl, kısa bir açık havada oturum veya akşam yemeği için özel bir atmosfer yaratır. Rüzgâr ve ses sınırları için kapalı alan alternatifi hazır tutulur.",
      ],
      teamBuilding: [
        "Büyük turnuvalar yerine küçük grup deneyimleri uygundur: şef eşliğinde yemek atölyesi, gün batımı tekne turu, sakin bir golf günü. Üst düzey gruplarda deneyim sayısından çok kalitesi önemlidir.",
      ],
      gala: [
        "300 kişiye kadar oturmalı yemek mümkündür; özel gala, ödül akşamı veya CEO yemeği için butik bir atmosfer arayanlar bu ölçeği avantaj olarak değerlendirebilir.",
      ],
      access: "Belek'te yer alır; VIP gruplar için havalimanında karşılama ve özel transfer planı programın ilk izlenimini belirler.",
      scenarios: [
        { size: 100, text: "Karatay salonunun bir kısmı veya iki fonksiyon alanı; sabah çalışma, akşam özel yemek." },
        { size: 300, text: "Karatay salonunda banket düzeninde gala veya tiyatro düzeninde sunum; kapasiteye yakın bir kullanım." },
        { size: 1000, text: "Otelin ölçeği bu büyüklük için uygun değildir; benzer ölçekli etkinlikler için büyük convention otelleri değerlendirilmelidir." },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lara-barut-collection",
    slug: "lara-barut-collection-kurumsal-etkinlik",
    name: "Lara Barut Collection",
    region: "antalya-lara",
    segment: "Antalya/Lara erişimi · bayi toplantısı ve eğitim",
    positioning: ["Antalya şehir erişimi olan Lara bölgesinde toplantı kapasitesi", "Bayi toplantısı, konferans, eğitim ve gala için aday"],
    eventTags: ["bayi-toplantisi", "konferans", "egitim", "satis-toplantisi", "yonetim-toplantisi", "gala", "workshop"],
    outdoor: ["Lara sahili ve otel bahçesi", "Antalya şehrine kısa mesafe sayesinde şehir çıkışları"],
    facts: [{ label: "Toplantı alanı", value: "7 toplantı odası, toplam toplantı kapasitesi 1.200 kişi", source: S.laraBarut }],
    halls: [{ name: "Toros 3", areaM2: 283, capacity: { theatre: 250, classroom: 200, banquet: 550 }, status: "verified", source: S.laraBarut }],
    pendingClaims: ["'Toros Salonu maksimum 1.200 kişi' (kullanıcı verisi): kaynaklarda 1.200 değeri tüm toplantı odalarının toplam kapasitesi olarak geçiyor, tek salon değil"],
    editorial: {
      intro: [
        "Lara Barut Collection, Belek dışındaki Antalya/Lara kümesinde yer alır ve şehir merkezine daha yakın bir toplantı oteli arayanlar için ilginç bir alternatiftir. Toplam toplantı kapasitesi 1.200 kişi olarak yayımlanmıştır; bu rakam tek bir salonun değil, 7 toplantı odasının toplamıdır.",
        "Bu fark planlama için önemlidir: büyük bir tek oturumdan çok, birden fazla orta ölçekli oturumun yönetildiği bayi toplantısı, eğitim ve konferans formatları için uygundur.",
      ],
      indoor: [
        "Toros serisi odalardan Toros 3, 283 m² alanıyla tiyatro düzeninde 250, sınıf düzeninde 200, banket düzeninde 550 kişiye kadar kullanılabilir. Birden fazla Toros salonunun birlikte kullanımı ve toplam kapasite için otelin yazılı teyidi gerekir.",
      ],
      outdoor: [
        "Lara sahili ve bahçe, toplantı sonrası kokteyl ve kısa aktivite için kullanılabilir. Şehir merkezine yakınlık, Kaleiçi akşamı veya tarihî mekân çıkışı eklemeyi kolaylaştırır.",
      ],
      teamBuilding: [
        "Sahilde plaj olimpiyatı, akşam Kaleiçi şehir görevi veya tekne turu gibi şehir ve deniz karması formatlar uygundur.",
      ],
      gala: [
        "Banket düzeninde 550 kişiye kadar tek salon seçeneği; daha büyük gala için birden fazla salon veya açık alan gerekir.",
      ],
      access: "Antalya'nın Lara bölgesindedir; şehir merkezi ve havalimanına Belek'e göre daha kısa mesafededir (süre trafik durumuna göre değişir).",
      scenarios: [
        { size: 100, text: "Toros odalarından biri eğitim veya bayi toplantısı için; öğle yemeği ve akşam şehirde." },
        { size: 300, text: "İki Toros salonu birleşik veya banket düzeninde tek salon; paralel odalarda atölye." },
        { size: 1000, text: "Toplam kapasite 1.200 sınırına yakın olduğundan, 1.000 kişilik tek oturum için uygun değildir; çok oturumlu bölge toplantısı ya da başka bir otel düşünülmelidir." },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "maxx-royal-belek-golf-resort",
    slug: "maxx-royal-belek-kurumsal-etkinlik",
    name: "Maxx Royal Belek Golf Resort",
    region: "belek",
    segment: "Ultra premium resort",
    positioning: ["Ultra premium konumlandırma ve geniş bir convention alanı", "VIP incentive, executive retreat ve premium kurumsal etkinlik için aday"],
    eventTags: ["incentive", "retreat", "kongre", "konferans", "gala", "urun-lansmani", "yonetim-toplantisi", "golf-etkinligi"],
    outdoor: ["Golf sahası", "Resort bahçesi ve plajı"],
    facts: [
      { label: "Toplantı alanı", value: "11 toplantı odası, toplam 3.558 m²", source: S.maxx },
      { label: "Toplam toplantı kapasitesi", value: "3.625 kişi (tüm odaların toplamı)", source: S.maxx },
      { label: "Fuaye", value: "Ana fuaye 1.904 m², üst fuaye 1.128 m²", source: S.maxx },
    ],
    halls: [
      { name: "Dante II", areaM2: 623, capacity: { theatre: 635, banquet: 510, classroom: 370 }, status: "verified", source: S.maxx },
      { name: "Dante III", capacity: { theatre: 679, banquet: 545, classroom: 396 }, status: "verified", source: S.maxx },
    ],
    pendingClaims: ["Dante I'in bölünebilir düzeni ve kapasitesi (kaynakta yalnızca 'bölünebilir' ifadesi var)"],
    editorial: {
      intro: [
        "Maxx Royal Belek Golf Resort, ultra premium konumlandırmasıyla bilinir; ancak iki katlı convention merkezi ve geniş fuaye alanlarıyla ciddi toplantı kapasitesine de sahiptir. VIP incentive ve executive programlar için lüks, konferans ve gala için ise altyapı sunar.",
        "Yayımlanan veriler tek tek salonlarda 700 kişi civarına, toplam toplantı kapasitesinde ise 3.600 kişiyi aşan bir toplam rakama işaret eder; bu iki rakam birbirinden ayrı okunmalıdır.",
      ],
      indoor: [
        "Dante II ve Dante III salonları tiyatro düzeninde 600–700 kişi bandına, banket düzeninde 500–550 kişiye kadar çıkar. Geniş iki katlı fuaye; kayıt, sponsor alanı ve kokteyl için etkileyici bir giriş yaratır.",
      ],
      outdoor: [
        "Golf sahası ve resort bahçesi, VIP deneyim kurgusu için kullanılabilir: özel golf günü, plajda akşam yemeği, gün batımı kokteyli.",
      ],
      teamBuilding: [
        "Premium gruplarda büyük turnuvadan çok özel deneyimler: golf kliniği, yemek atölyesi, tekne ve gün batımı deneyimleri öne çıkar.",
      ],
      gala: [
        "Dante salonlarında banket düzeninde 500+ kişilik gala; fuaye, karşılama kokteyli için ayrı bir alan olarak kullanılabilir.",
      ],
      access: "Belek'te yer alır; VIP gruplar için karşılama ve transfer planı ayrıca tasarlanır.",
      scenarios: [
        { size: 100, text: "Tek bir Dante bölümü veya küçük oda; özel akşam yemeği ve golf günü." },
        { size: 300, text: "Dante II tiyatro düzeninde genel oturum; fuayede kokteyl ve plajda akşam." },
        { size: 1000, text: "Tek salon tiyatro kapasitesi 1.000'in altındadır; Dante salonlarının birleşik kullanımı veya fuaye desteği için otelin yazılı onayı gerekir." },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "rixos-premium-belek",
    slug: "rixos-premium-belek-kurumsal-etkinlik",
    name: "Rixos Premium Belek",
    region: "belek",
    segment: "Resort ve eğlence ekosistemi",
    positioning: ["Büyük bir resort; The Land of Legends'ın yakınında", "Incentive, şirket partisi ve eğlence ağırlıklı etkinlik için aday"],
    eventTags: ["incentive", "konferans", "kongre", "gala", "kokteyl", "urun-lansmani", "bayi-toplantisi", "team-building"],
    outdoor: ["Resort bahçesi ve plajı", "The Land of Legends çevresi (yakınlık)"],
    facts: [
      { label: "Toplantı alanı", value: "5 toplantı odası, toplam 1.765 m²", source: S.rixos },
      { label: "Toplam toplantı kapasitesi", value: "1.990 kişi (tüm odaların toplamı)", source: S.rixos },
    ],
    halls: [{ name: "Diamond Hall", areaM2: 1350, capacity: { theatre: 1400 }, status: "verified", source: S.rixos }],
    pendingClaims: ["'Land of Legends erişimi': kaynaklar yalnızca yakınlığı belirtiyor; erişim/biletleme koşulları teyit edilecek"],
    editorial: {
      intro: [
        "Rixos Premium Belek, büyük bir resort olmanın yanında eğlence ekosistemine yakınlığıyla da öne çıkar. 1.350 m² Diamond Hall, tiyatro düzeninde 1.400 kişiye kadar kapasiteyle büyük bir toplantı veya lansman için dikkate değerdir.",
        "Eğlence ağırlıklı kurumsal etkinlik ve incentive programlarında resort'un çevresindeki eğlence alanı programa eklenebilir; bu çıkışların koşulları ayrıca netleştirilmelidir.",
      ],
      indoor: [
        "Diamond Hall 6 metre tavan yüksekliğiyle, sahne ve ışık kurulumuna uygun bir alan sunar. Green, Pink ve Yellow gibi diğer salonlar break-out ve paralel oturumlar için kullanılabilir.",
      ],
      outdoor: [
        "Bahçe, plaj ve çevre eğlence alanı; şirket partisi, açık hava lansman akşamı ve incentive deneyimi için çeşitlilik yaratır. Dışarı çıkışlarda transfer ve giriş koşulları önceden planlanır.",
      ],
      teamBuilding: [
        "Resort içinde plaj ve havuz oyunları, eğlence alanında takım görevleri gibi programlar aile ve geniş çalışan gruplarına hitap eder.",
      ],
      gala: [
        "Diamond Hall'da oturmalı gala veya ayakta lansman; konser veya DJ ağırlıklı eğlence akşamı için sahne ve ses kurulumu otelle önceden netleştirilir.",
      ],
      access: "Belek'te yer alır; The Land of Legends'a yakın konumdadır.",
      scenarios: [
        { size: 100, text: "Küçük bir salon ve plajda akşam; ertesi gün eğlence alanı çıkışı." },
        { size: 300, text: "Diamond Hall'un bir bölümünde lansman veya bayi toplantısı; bahçede kokteyl." },
        { size: 1000, text: "Diamond Hall tiyatro düzeninde 1.400 kişiye kadar yayımlanmıştır; 1.000 kişilik oturum için düzen bazlı yazılı teyit ve ek alan planı gerekir." },
      ],
    },
  },
];
