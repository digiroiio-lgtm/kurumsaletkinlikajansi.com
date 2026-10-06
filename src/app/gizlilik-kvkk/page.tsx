import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gizlilik ve KVKK Aydınlatma Metni | Kurumsal Etkinlik Ajansı",
  description: "Teklif formu üzerinden toplanan kişisel verilerin işlenme amacı, hukuki sebebi, saklama süresi ve KVKK kapsamındaki haklarınız.",
  path: "/gizlilik-kvkk",
  noindex: true, // hukuki incelemeden geçene kadar indekslenmez — docs/LAUNCH-CHECKLIST.md
});

const sections: { h: string; p: string[] }[] = [
  {
    h: "1. Veri sorumlusu",
    p: [
      `Bu site ${SITE.name} tarafından işletilmektedir. 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu, teklif talebinizi alan ${SITE.name}'dır.`,
      SITE.contact.email ? `İletişim: ${SITE.contact.email}` : "İletişim: teklif formu veya sitede yayımlanan iletişim kanalları.",
    ],
  },
  {
    h: "2. İşlenen kişisel veriler",
    p: [
      "Teklif formunda paylaştığınız ad soyad, şirket, telefon, e-posta, etkinlik türü, lokasyon, tarih, katılımcı sayısı, bütçe aralığı ve notlar. Ayrıca sayfa yolu, yönlendiren site ve kampanya parametreleri (utm) gibi teknik kaynak bilgileri.",
    ],
  },
  {
    h: "3. İşleme amaçları ve hukuki sebepler",
    p: [
      "Verileriniz; teklif talebinizi değerlendirmek, size dönüş yapmak, teklif ve sözleşme öncesi görüşmeleri yürütmek ve hizmet kalitesini ölçmek amaçlarıyla işlenir.",
      "Hukuki sebepler KVKK m.5/2-c (bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması), m.5/2-f (meşru menfaat) ve gerekli hâllerde açık rızanızdır. Analitik çerezleri yalnızca onayınız doğrultusunda kullanılır.",
    ],
  },
  {
    h: "4. Aktarım",
    p: [
      "Verileriniz; barındırma, e-posta ve CRM gibi altyapı hizmet sağlayıcılarına ve teklifin hazırlanması için gerekli olduğunda mekân, otel ve tedarikçilere, yalnızca ilgili amaçla sınırlı olarak aktarılabilir. Verileriniz satılmaz.",
    ],
  },
  {
    h: "5. Saklama süresi",
    p: ["Veriler, talebin değerlendirilmesi ve olası ticari ilişkinin gerektirdiği süre boyunca; ilgili mevzuatın öngördüğü süreler dolduğunda silinir, yok edilir veya anonim hâle getirilir."],
  },
  {
    h: "6. Haklarınız",
    p: [
      "KVKK m.11 uyarınca verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltme, silme veya yok etme isteme, aktarım yapılan üçüncü kişileri öğrenme, itiraz etme ve zarar hâlinde tazminat talep etme haklarına sahipsiniz.",
      "Başvurularınızı yukarıdaki iletişim kanalı üzerinden iletebilirsiniz.",
    ],
  },
];

export default function Page() {
  return (
    <section className="section section--paper">
      <div className="container">
        <Breadcrumbs crumbs={[{ label: "Gizlilik & KVKK", href: "/gizlilik-kvkk" }]} />
        <h1 className="h1 h1--guide">Gizlilik ve KVKK aydınlatma metni</h1>
        <div className="article" style={{ marginTop: 32 }}>
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="h2 h2--article">{s.h}</h2>
              {s.p.map((t) => (
                <p key={t} className="prose">
                  {t}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
