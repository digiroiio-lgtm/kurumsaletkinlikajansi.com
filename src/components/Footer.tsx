import Link from "next/link";
import { footerNav } from "@/content/tr/nav";
import { SITE, phoneHref, whatsappHref } from "@/lib/site";
import { Logo } from "./Logo";

function Col({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="footer__col">
      <p className="footer__title">{title}</p>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const { email } = SITE.contact;
  const wa = whatsappHref();
  const tel = phoneHref();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo light />
            <p>
              Antalya ve Belek'te kurumsal etkinlikleri konseptten saha operasyonuna, tek muhatapla yöneten etkinlik ajansı.
            </p>
            <ul className="footer__contact">
              <li>
                <Link href="/teklif-al" className="footer__quote">
                  Etkinliğiniz İçin Teklif Alın →
                </Link>
              </li>
              {email && (
                <li>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              )}
              {tel && (
                <li>
                  <a href={tel}>{SITE.contact.phone}</a>
                </li>
              )}
              {wa && (
                <li>
                  <a href={wa} rel="noopener" target="_blank">
                    WhatsApp ile yazın
                  </a>
                </li>
              )}
            </ul>
          </div>
          <Col title="Hizmetler" links={footerNav.hizmetler} />
          <Col title="Antalya" links={footerNav.antalya} />
          <Col title="Belek" links={footerNav.belek} />
          <Col title="Rehberler" links={footerNav.rehberler} />
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.</p>
          <ul>
            <li>
              <Link href="/gizlilik-kvkk">Gizlilik & KVKK</Link>
            </li>
            <li>
              <Link href="/teklif-al">Teklif Al</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
