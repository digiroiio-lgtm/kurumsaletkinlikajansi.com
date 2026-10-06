import Link from "next/link";
import { Cta } from "@/components/Cta";

export default function NotFound() {
  return (
    <section className="section section--sand" style={{ minHeight: "60vh" }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <p className="eyebrow">404</p>
        <h1 className="h1 h1--guide">Aradığınız sayfa bulunamadı</h1>
        <p className="lead lead--hero">Adres değişmiş ya da yanlış yazılmış olabilir. Aşağıdaki sayfalardan devam edebilirsiniz.</p>
        <ul className="dash-list" style={{ marginBottom: 32 }}>
          <li><Link href="/kurumsal-etkinlik-organizasyonu" className="textlink">Kurumsal etkinlik organizasyonu</Link></li>
          <li><Link href="/team-building" className="textlink">Team building</Link></li>
          <li><Link href="/antalya/kurumsal-etkinlik" className="textlink">Antalya kurumsal etkinlik</Link></li>
          <li><Link href="/belek/kurumsal-etkinlik" className="textlink">Belek kurumsal etkinlik</Link></li>
          <li><Link href="/rehberler" className="textlink">Rehberler</Link></li>
        </ul>
        <Cta href="/teklif-al" id="404_quote" size="lg">Etkinliğiniz İçin Teklif Alın</Cta>
      </div>
    </section>
  );
}
