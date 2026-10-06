import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Media } from "@/components/Media";
import { QuoteSection } from "@/components/QuoteSection";
import { RichText } from "@/components/RichText";
import { SectionView } from "@/components/Sections";
import {
  activities, destinations, eventTypes, hero, homeFaq, modules, principles, processSection,
  quickPicks, scenarios, staffing, venues, whyDestination,
} from "@/content/tr/home";

export function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <section className="hhero">
        <div className="container hhero__grid">
          <div className="hhero__copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="h1 hhero__h1">{hero.h1}</h1>
            <p className="lead lead--hero">{hero.lead}</p>
            <div className="phero__cta">
              <Cta id="hero_quote" size="lg">
                {hero.primary}
              </Cta>
              <Link href={hero.secondary.href} className="arrow-link" data-track="cta_click" data-track-id="hero_secondary_ideas">
                {hero.secondary.label}
              </Link>
            </div>
          </div>
          <div className="hhero__media" aria-hidden={false}>
            <Media slot="home-hero" arch priority ratio="4/5" sizes="(min-width: 960px) 38vw, 86vw" />
            <div className="hhero__inset">
              <Media slot="home-hero-inset" ratio="1/1" sizes="(min-width: 960px) 14vw, 36vw" />
            </div>
          </div>
        </div>
        <div className="container">
          <nav className="quick" aria-label="Hızlı seçim">
            <p className="quick__label">Ne planlıyorsunuz?</p>
            <ul className="quick__list">
              {quickPicks.map((q) => (
                <li key={q.label}>
                  <Link href={q.href} className="quick__chip" data-track="quick_pick_click" data-track-id={`quick_${q.label.toLowerCase().replace(/\s+/g, "_")}`} data-track-event-type={q.label}>
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* 2 — Güven / hızlı positioning */}
      <section className="pstrip" aria-label="Çalışma ilkelerimiz">
        <div className="container pstrip__grid">
          <p className="pstrip__lead">Antalya ve Belek'te kurumsal etkinlikler için tek operasyon noktası.</p>
          <ul className="pstrip__list">
            {principles.map((p) => (
              <li key={p.t}>
                <strong>{p.t}</strong>
                <span>{p.d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 — Etkinlik türleri */}
      <section className="section section--paper">
        <div className="container">
          <header className="sec-head">
            <p className="eyebrow">Etkinlik türleri</p>
            <h2 className="h2">Hedefinize göre kurgulanan sekiz format</h2>
            <p className="lead">Her biri ayrı bir amaca, ayrı bir katılımcı profiline ve ayrı bir operasyon planına hizmet eder.</p>
          </header>
          <ul className="mosaic">
            {eventTypes.map((e) => (
              <li key={e.title} className="mosaic__item">
                <Link href={e.href} className="mosaic__card" data-track="cta_click" data-track-id={`etype_${e.slot}`}>
                  <Media slot={e.slot} ratio="4/3" className="mosaic__media" sizes="(min-width: 960px) 30vw, 92vw" />
                  <span className="mosaic__shade" aria-hidden="true" />
                  <span className="mosaic__text">
                    <span className="mosaic__title">{e.title}</span>
                    <span className="mosaic__desc">{e.text}</span>
                    <span className="mosaic__go" aria-hidden="true">
                      İncele →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 — Antalya & Belek deneyimleri */}
      <section className="section section--sand">
        <div className="container">
          <header className="sec-head">
            <p className="eyebrow">Antalya & Belek deneyimleri</p>
            <h2 className="h2">İki destinasyon, iki farklı etkinlik karakteri</h2>
            <p className="lead">
              <RichText text="Şehir dokusu ve çeşitlilik mi, yoksa tek yerleşkede resort, golf ve incentive mi? Karar için [Antalya mı, Belek mi?](/rehberler/antalya-mi-belek-mi) rehberine de göz atın." />
            </p>
          </header>
          <div className="dest">
            {destinations.map((d) => (
              <article key={d.name} className="dest__card">
                <Media slot={d.slot} ratio="3/2" sizes="(min-width: 960px) 46vw, 92vw" />
                <div className="dest__body">
                  <p className="dest__kicker">{d.kicker}</p>
                  <h3 className="dest__name">{d.name}</h3>
                  <p className="prose">{d.text}</p>
                  <ul className="dash-list">
                    {d.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <p className="split__cta">
                    <Link href={d.href} className="arrow-link" data-track="cta_click" data-track-id={`dest_${d.name.toLowerCase()}`}>
                      {d.cta}
                    </Link>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Nasıl çalışıyoruz */}
      <SectionView s={processSection} tone="paper" />

      {/* 6 — Aktivite fikirleri */}
      <section className="section section--sand">
        <div className="container">
          <header className="sec-head">
            <p className="eyebrow">{activities.eyebrow}</p>
            <h2 className="h2">{activities.title}</h2>
            <p className="lead">{activities.intro}</p>
          </header>
          <ul className="acts">
            {activities.items.map((a) => (
              <li key={a.label}>
                <Link href={a.href} className="acts__item" data-track="cta_click" data-track-id={`activity_${a.label.toLowerCase().replace(/\s+/g, "_")}`}>
                  <span className="acts__name">{a.label}</span>
                  <span className="acts__text">{a.text}</span>
                  <span className="acts__arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7 — Venue sourcing */}
      <section className="section section--paper">
        <div className="container split">
          <div className="split__text">
            <p className="eyebrow">{venues.eyebrow}</p>
            <h2 className="h2">{venues.title}</h2>
            {venues.body.map((b) => (
              <p key={b} className="prose">
                <RichText text={b} />
              </p>
            ))}
            <ul className="dash-list">
              {venues.types.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="split__cta">
              <Link href={venues.cta.href} className="arrow-link" data-track="cta_click" data-track-id="home_venues">
                {venues.cta.label}
              </Link>
            </p>
          </div>
          <div className="split__media">
            <Media slot="home-venues" arch ratio="4/5" sizes="(min-width: 960px) 40vw, 90vw" />
          </div>
        </div>
      </section>

      {/* 8 — Full-service capability */}
      <section className="section section--sand">
        <div className="container">
          <header className="sec-head">
            <p className="eyebrow">{modules.eyebrow}</p>
            <h2 className="h2">{modules.title}</h2>
            <p className="lead">{modules.intro}</p>
          </header>
          <div className="wheel">
            <div className="wheel__core">
              <span className="wheel__core-kicker">Başlangıç</span>
              <span className="wheel__core-title">Brief</span>
              <span className="wheel__core-text">Tek görüşme, tek plan</span>
            </div>
            <ul className="wheel__mods">
              {modules.items.map((m, i) => (
                <li key={m.t}>
                  <Link href={m.href} className="wheel__mod" data-track="cta_click" data-track-id={`module_${i + 1}`}>
                    <span className="wheel__no">{String(i + 1).padStart(2, "0")}</span>
                    <span className="wheel__t">{m.t}</span>
                    <span className="wheel__d">{m.d}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 9 — Neden Antalya / Belek */}
      <SectionView s={whyDestination} tone="paper" />

      {/* 10 — Event staffing */}
      <section className="section section--ink staffing">
        <div className="container staffing__grid">
          <div>
            <p className="eyebrow eyebrow--light">{staffing.eyebrow}</p>
            <h2 className="h2 h2--light">{staffing.title}</h2>
            {staffing.body.map((b) => (
              <p key={b} className="prose prose--light">
                {b}
              </p>
            ))}
            <div className="staffing__links">
              {staffing.links.map((l) => (
                <Link key={l.href} href={l.href} className="arrow-link arrow-link--light" data-track="cta_click" data-track-id="home_staffing">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <ul className="roles" aria-label="Personel rolleri">
            {staffing.roles.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11 — Örnek etkinlik senaryoları (referans değil) */}
      <SectionView s={scenarios} tone="sand" />

      {/* 12 — SSS + 13 — Teklif */}
      <Faq items={homeFaq} />
      <QuoteSection formId="quote_home" />
    </>
  );
}
