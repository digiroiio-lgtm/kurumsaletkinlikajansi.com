import type { PageContent } from "../types";

const AREA = ["Antalya", "Belek"];

export const servicesOps: PageContent[] = [
  /* ------------------------------------------------------------------ */
  {
    path: "/etkinlik-personeli",
    kind: "service",
    metaTitle: "Etkinlik Personeli Temini | Host, Hostes ve Servis Ekibi",
    metaDescription:
      "Kurumsal etkinlikler için host, hostes, karşılama, servis, bar ve supervisor ekipleri; briefing, kıyafet ve saha yönetimiyle. Antalya ve Belek'te etkinlik personeli temini.",
    h1: "Etkinlik Personeli: Host, Hostes, Servis ve Operasyon Ekipleri",
    eyebrow: "Hizmet · Event staffing",
    lead:
      "Misafirin ilk karşılaştığı kişi, etkinliğin kalitesini belirler. Antalya ve Belek'te host/hostes, karşılama, servis, bar ve operasyon ekiplerini; seçim, briefing, kıyafet ve sahada yönetimle birlikte sağlıyoruz.",
    heroMedia: "hero-staff",
    crumbs: [{ label: "Etkinlik Personeli", href: "/etkinlik-personeli" }],
    serviceType: "Etkinlik personeli (event staffing) temini ve yönetimi",
    areaServed: AREA,
    defaultEventType: "diger",
    sections: [
      {
        kind: "split",
        eyebrow: "Rol",
        title: "Personel etkinliğin yüzüdür; yönetimi de işin yarısıdır",
        body: [
          "Etkinlik personeli temini yalnızca doğru sayıda kişiyi sahaya göndermek değildir. Profil, dil, deneyim, kıyafet ve görev dağılımı birlikte kurulmadığında en iyi dekor bile eksik kalır.",
          "Personeli tek başına da alabilirsiniz; başka bir ajansın veya kurumunuzun organizasyonunda çalışırız. Tam hizmet [kurumsal etkinlik organizasyonu](/kurumsal-etkinlik-organizasyonu) içinde ise personel planı programla birlikte kurulur.",
        ],
        bullets: [
          "Etkinliğin tonuna uygun profil ve dil",
          "Brief, rol tanımı ve zaman çizelgesi ile hazırlanmış ekip",
          "Sahada sorumlu bir supervisor ve net iletişim hattı",
          "Gün içi mola, görev değişimi ve yedek personel planı",
        ],
        media: "media-staff-role",
        arch: true,
      },
      {
        kind: "table",
        eyebrow: "Roller",
        title: "Sağlayabildiğimiz roller ve görevleri",
        head: ["Rol", "Görev", "Tipik kullanım"],
        rows: [
          ["Host / hostes", "Konuk karşılama, yönlendirme, bilgi verme", "Kongre, lansman, gala, fuar standı"],
          ["Karşılama ve kayıt ekibi", "Kayıt masası, yaka kartı, liste yönetimi", "Bayi toplantısı, kongre, konferans"],
          ["Servis personeli", "Masa servisi, tabak ve içecek akışı", "Oturmalı yemek, gala"],
          ["Bar ve catering ekibi", "Bar hazırlığı, ikram, kokteyl servisi", "Kokteyl, açılış, beach etkinlikleri"],
          ["Supervisor / saha lideri", "Ekip yönetimi, zamanlama, sorun çözümü", "Her ölçekten etkinlikte saha yöneticisi"],
          ["Operasyon personeli", "Kurulum, malzeme ve yük taşıma, saha düzeni", "Prodüksiyon, outdoor etkinlik"],
          ["VIP refakat ve transfer koordinatörü", "Özel konuk karşılama, araç ve program takibi", "İncentive, uluslararası gruplar"],
          ["Çok dilli bilgi masası", "Yabancı katılımcılar için yönlendirme", "Uluslararası kongre, incentive"],
        ],
      },
      {
        kind: "steps",
        eyebrow: "Süreç",
        title: "Personel nasıl planlanır ve yönetilir?",
        items: [
          { title: "İhtiyaç analizi", text: "Etkinliğin türü, saati, katılımcı sayısı ve mekânın yapısına göre rol ve kişi sayısı çıkarılır." },
          { title: "Profil ve seçim", text: "Dil, deneyim, görünüm ve etkinliğin tonuna uygun adaylar seçilir; gerekirse görüntülü tanışma yapılır." },
          { title: "Briefing ve kıyafet", text: "Etkinlik öncesi toplantıda program, görev dağılımı ve iletişim kuralları anlatılır; kıyafet ve ayakkabı standardı belirlenir." },
          { title: "Sahada yönetim", text: "Supervisor ekibi izler, mola ve vardiya düzenini yönetir; sorunlarda tek karar noktası olur." },
          { title: "Kapanış ve geri bildirim", text: "Etkinlik sonrası kısa bir değerlendirme yapılır; bir sonraki etkinlikte ekip performansı dikkate alınır." },
        ],
      },
      {
        kind: "table",
        eyebrow: "Planlama referansı",
        title: "Kadro planlamasında kullanılan yaklaşık oranlar",
        intro: "Oranlar mekânın yapısına, menüye ve servis stiline göre değişir. Aşağıdaki değerler ilk planlama için referanstır.",
        head: ["Alan", "Yaklaşık oran", "Not"],
        rows: [
          ["Oturmalı yemekte servis", "8–12 konuğa 1 servis personeli", "Fine dining ve çok servisli menülerde oran düşer"],
          ["Ayakta kokteylde servis", "15–25 konuğa 1 servis personeli", "Bar sayısı ve ikram çeşidi etkiler"],
          ["Kayıt masası", "100 katılımcıya 1–2 görevli", "Yoğun dakikalarda ek masa açılır"],
          ["Supervisor", "15–20 personele 1 supervisor", "Birden fazla alanda çalışılıyorsa ek lider"],
        ],
        note: "Kesin kadro, saha ziyareti ve menü/akış netleştikten sonra teklifte yazılır.",
      },
      {
        kind: "checklist",
        eyebrow: "Brief",
        title: "Etkinlik öncesi personelle paylaşılanlar",
        items: [
          "Etkinliğin amacı, kitle ve protokol notları",
          "Saat bazlı akış ve görev dağılımı",
          "Mekân planı, giriş-çıkış ve servis yolları",
          "Önemli konuklar ve özel talepler",
          "İletişim kuralları, telsiz veya mesaj grubu",
          "Kıyafet, bakım ve davranış standardı",
          "Acil durum, ilk yardım ve çıkış bilgisi",
        ],
      },
      {
        kind: "links",
        title: "Lokasyona özel personel ve ilişkili hizmetler",
        items: [
          { label: "Antalya event staff", href: "/antalya/event-staff", text: "Antalya'da yerel kadro, çok dilli personel ve hızlı temin." },
          { label: "Gala organizasyonu", href: "/gala-organizasyonu", text: "Servis ve prodüksiyonla birlikte gece yönetimi." },
          { label: "Kongre ve konferans organizasyonu", href: "/kongre-konferans-organizasyonu", text: "Kayıt, karşılama ve salon görevlileri." },
          { label: "Kurumsal etkinlik organizasyonu", href: "/kurumsal-etkinlik-organizasyonu", text: "Tam hizmet etkinlik yönetimi." },
        ],
      },
    ],
    faq: [
      {
        q: "Yalnızca personel hizmeti alabilir miyim?",
        a: "Evet. Etkinliği başka bir ajans veya kendi ekibiniz yönetiyor olsa bile yalnızca personel (host/hostes, servis, supervisor) hizmeti alabilirsiniz. Bu durumda program akışını sizden alıp ekibi buna göre hazırlarız.",
      },
      {
        q: "Personel için kıyafet nasıl belirlenir?",
        a: "Etkinliğin tonuna göre (resmî, şık, casual, tema) birlikte karar verilir. Kıyafetin bir kısmını biz, bir kısmını marka kendi sağlayabilir; standardı baştan netleştiririz.",
      },
      {
        q: "Yabancı dil bilen personel sağlayabiliyor musunuz?",
        a: "Turizm bölgesinde çok dilli personel bulmak mümkün: İngilizce başta olmak üzere Almanca ve Rusça gibi dillerde adaylar değerlendirilir. Hangi dil ve seviye gerektiğini brief'te belirtmeniz yeterli.",
      },
      {
        q: "Son dakika personel ihtiyacı için hızlı çözüm var mı?",
        a: "Takvime ve sezona bağlı olarak değişir. Yüksek sezonda erken planlama önemlidir; acil ihtiyaç durumunda form üzerinden tarih ve ihtiyacı yazarak hızlıca iletişime geçin.",
      },
      {
        q: "Personelin çalışma ve sigorta süreçleri nasıl yürür?",
        a: "Çalışma ve sigorta düzenlemelerini teklif aşamasında netleştirir, sözleşmede yazılı hale getiririz; hangi tarafın hangi sorumluluğu üstlendiği baştan bellidir.",
      },
    ],
    related: ["/antalya/event-staff", "/gala-organizasyonu", "/kongre-konferans-organizasyonu", "/kurumsal-etkinlik-organizasyonu"],
    guides: ["sirket-etkinligi-nasil-planlanir", "kurumsal-etkinlik-butcesi-nasil-hazirlanir", "etkinlik-ajansi-nasil-secilir"],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "/kurumsal-etkinlik-mekanlari",
    kind: "service",
    metaTitle: "Kurumsal Etkinlik Mekanları | Mekân Bulma ve Seçim Desteği",
    metaDescription:
      "Kurumsal etkinlik için resort, otel, beach club, açık hava ve özel mekân seçimi: kısa liste, saha ziyareti, teklif karşılaştırma ve pazarlık desteği. Antalya ve Belek.",
    h1: "Kurumsal Etkinlik Mekânları: Mekân Bulma ve Seçim Desteği",
    eyebrow: "Hizmet · Mekân bulma (venue sourcing)",
    lead:
      "Doğru mekân etkinliğin yarısıdır; yanlış mekân bütçeyi, akışı ve atmosferi aynı anda bozar. Brief'inize uygun mekânların kısa listesini çıkarıyor, saha ziyaretlerini yönetiyor ve teklifleri karşılaştırmanıza yardımcı oluyoruz.",
    heroMedia: "hero-venues",
    crumbs: [{ label: "Kurumsal Etkinlik Mekânları", href: "/kurumsal-etkinlik-mekanlari" }],
    serviceType: "Kurumsal etkinlik mekânı bulma ve seçim desteği",
    areaServed: AREA,
    defaultEventType: "diger",
    sections: [
      {
        kind: "split",
        eyebrow: "Hizmet",
        title: "Liste vermek değil, karar vermeyi kolaylaştırmak",
        body: [
          "İnternette mekân bulmak kolaydır; zor olan, brief'e gerçekten uyan, belirtilen tarihte müsait ve bütçeye oturan mekânı doğru koşullarla seçmektir. Biz bu süreci sizin adınıza yürütürüz.",
          "Mekân seçimini konseptten ayırmayız; çünkü kapasite, ses, hava ve servis koşulları etkinliğin biçimini belirler.",
        ],
        bullets: [
          "Brief'e uygun, filtrelenmiş kısa liste",
          "Gerektiğinde saha ziyareti ve teknik değerlendirme",
          "Teklif ve koşulların karşılaştırmalı özeti",
          "Opsiyon ve sözleşme sürecinde koordinasyon",
        ],
        media: "media-venue-search",
        arch: true,
      },
      {
        kind: "index",
        eyebrow: "Mekân tipleri",
        title: "Antalya ve Belek'te çalıştığımız yedi mekân grubu",
        items: [
          { title: "Resort ve tatil köyü salonları", text: "Konaklama, toplantı ve yemek tek yerde; büyük gruplar ve incentive için pratik. Yiyecek-içecek çoğunlukla otel üzerinden sağlanır." },
          { title: "Şehir otelleri ve toplantı salonları", text: "Şehir merkezinde ulaşım kolaylığı ve çok sayıda salon seçeneği; kısa toplantılar ve bayi buluşmaları için uygun." },
          { title: "Kongre ve toplantı mekânları", text: "Büyük kapasiteli, teknik altyapısı güçlü salonlar; kongre ve geniş katılımlı etkinlikler. Bkz. [kongre organizasyonu](/kongre-konferans-organizasyonu)." },
          { title: "Beach club'lar", text: "Sahilde gündüz ve gün batımı etkinlikleri; sosyal, rahat ve görsel olarak güçlü atmosfer." },
          { title: "Açık hava mekânları", text: "Bahçe, orman, plato ve sahil alanları; outdoor etkinlikler ve geniş gruplar için esnek, hava planı gerektirir." },
          { title: "Restoranlar ve rooftop'lar", text: "Küçük ve orta gruplar, akşam yemekleri ve özel davetler için; şehir manzarası ve butik servis." },
          { title: "Özel etkinlik mekânları", text: "Villa, çiftlik, tarihi alan veya eski bina; özgün atmosfer, ancak altyapı ve izin gereksinimi daha fazla." },
        ],
      },
      {
        kind: "table",
        eyebrow: "Karar matrisi",
        title: "Mekân tipine göre güçlü yan ve dikkat noktası",
        head: ["Mekân tipi", "Uygun grup", "Güçlü yan", "Dikkat"],
        rows: [
          ["Resort salonu", "50–800 kişi", "Konaklama + toplantı + yemek bir arada", "F&B ve ses/saat kısıtları otel kurallarına bağlı"],
          ["Şehir oteli", "20–400 kişi", "Merkezî ulaşım, çok salon", "Dış mekân ve plaj imkânı sınırlı"],
          ["Kongre merkezi", "300+ kişi", "Teknik altyapı, çoklu salon", "Atmosfer için ek dekor gerekir"],
          ["Beach club", "40–400 kişi", "Atmosfer, gün batımı, rahat tempo", "Rüzgâr, ses sınırı, kapalı alan alternatifi"],
          ["Açık hava / bahçe", "30–500 kişi", "Esneklik, doğal ambiyans", "Hava, zemin, altyapı kurulumu"],
          ["Özel / tarihi mekân", "20–200 kişi", "Özgünlük ve fotoğraf değeri", "Kapasite sınırı, izinler, teknik zorluk"],
        ],
        note: "Kapasite aralıkları genel referanstır; her mekân için kesin değer yazılı teklifte alınır.",
      },
      {
        kind: "steps",
        eyebrow: "Süreç",
        title: "Mekân bulma süreci",
        items: [
          { title: "Brief ve filtre", text: "Tarih, grup, bütçe, format ve ulaşım kriterleri yazılı hale getirilir." },
          { title: "Kısa liste", text: "Üç ila beş uygun mekân; avantajları ve riskleriyle birlikte karşılaştırmalı sunulur." },
          { title: "Saha ziyareti", text: "Seçilen mekânlarda teknik, servis ve hava planı birlikte değerlendirilir." },
          { title: "Teklif ve pazarlık", text: "Kalem kalem teklif karşılaştırılır; opsiyon süresi ve iptal koşulları netleştirilir." },
          { title: "Opsiyon ve sözleşme", text: "Seçilen mekân için opsiyon bağlanır ve sözleşme koşulları (kapasite, saat, ödeme) doğrulanır." },
        ],
      },
      {
        kind: "checklist",
        eyebrow: "Mekâna soracaklarımız",
        title: "Her mekâna sorduğumuz on temel soru",
        items: [
          "Kapasite sertifikası ve oturma düzenlerine göre gerçek kapasite",
          "Ses seviyesi ve kapanış saati sınırları",
          "Yiyecek-içecek şartı: kendi catering'imizi getirebilir miyiz?",
          "Kurulum ve söküm saatleri, yük giriş-çıkış yolu",
          "Elektrik kapasitesi ve jeneratör gereksinimi",
          "Hava alternatifi: kapalı alan veya çadır seçenekleri",
          "Otopark, transfer aracı giriş-çıkışı ve erişilebilirlik",
          "Sigorta, izin ve güvenlik gereksinimleri",
          "Opsiyon süresi, iptal ve tarih değişikliği koşulları",
          "Aynı gün/gece başka etkinlik veya misafirle çakışma",
        ],
      },
      {
        kind: "links",
        eyebrow: "Lokasyon",
        title: "Antalya ve Belek'e özel mekân sayfaları",
        items: [
          { label: "Antalya kurumsal etkinlik mekânları", href: "/antalya/kurumsal-etkinlik-mekanlari", text: "Şehir otelleri, Kaleiçi, beach club ve tarihi alanlar." },
          { label: "Belek kurumsal etkinlik mekânları", href: "/belek/kurumsal-etkinlik-mekanlari", text: "Resort salonları, golf kulübü ve plaj alanları." },
          { label: "Antalya kurumsal etkinlik mekânları rehberi", href: "/rehberler/antalya-kurumsal-etkinlik-mekanlari", text: "Karar kriterleri ve karşılaştırma." },
          { label: "Belek kurumsal etkinlik mekânları rehberi", href: "/rehberler/belek-kurumsal-etkinlik-mekanlari", text: "Resort seçiminde dikkat edilecekler." },
        ],
      },
    ],
    faq: [
      {
        q: "Mekân bulma hizmeti için ayrıca ücret ödenir mi?",
        a: "Ücretlendirme kapsama göre değişir. Teklifte mekân bulma ve yönetim bedelini ayrı ve açık gösteririz; mekân kiralarını ise mekânın kendi teklifleriyle birebir yansıtırız.",
      },
      {
        q: "Otel yiyecek-içecek zorunluluğu getirirse ne yapılır?",
        a: "Birçok resort ve otelde yiyecek-içecek hizmeti otel üzerinden alınır. Bu durumda otelin menü ve servis kalitesini değerlendirir, kişi başı fiyatı ve opsiyonları birlikte pazarlık ederiz.",
      },
      {
        q: "Mekân için opsiyon süresi ne kadar olur?",
        a: "Mekâna ve sezona göre değişir; genellikle kısa süreli bir opsiyon verilir. Yoğun dönemlerde karar sürecini hızlı tutmak ve opsiyonları doğru yönetmek önemlidir.",
      },
      {
        q: "Mekân ziyaretine siz de eşlik ediyor musunuz?",
        a: "Evet. Antalya ve Belek içinde saha ziyaretlerini organize eder ve teknik değerlendirmeyi sizinle birlikte yaparız. Uzaktan karar vermek isterseniz detaylı fotoğraf, plan ve video ile karşılaştırmalı özet de sunabiliriz.",
      },
    ],
    related: ["/antalya/kurumsal-etkinlik-mekanlari", "/belek/kurumsal-etkinlik-mekanlari", "/kurumsal-etkinlik-organizasyonu", "/gala-organizasyonu"],
    guides: ["antalya-kurumsal-etkinlik-mekanlari", "belek-kurumsal-etkinlik-mekanlari", "sirket-etkinligi-nasil-planlanir"],
  },
];
