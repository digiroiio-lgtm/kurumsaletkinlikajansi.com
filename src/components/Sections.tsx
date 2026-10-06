import Link from "next/link";
import type { ReactNode } from "react";
import type { Section, Tone } from "@/content/types";
import { Media } from "./Media";
import { RichText } from "./RichText";
import { Cta } from "./Cta";

const Head = ({ eyebrow, title, intro, light }: { eyebrow?: string; title: string; intro?: string; light?: boolean }) => (
  <header className="sec-head">
    {eyebrow && <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>{eyebrow}</p>}
    <h2 className={`h2${light ? " h2--light" : ""}`}>{title}</h2>
    {intro && (
      <p className={`lead${light ? " lead--light" : ""}`}>
        <RichText text={intro} />
      </p>
    )}
  </header>
);

const Shell = ({ tone, children, className = "" }: { tone: Tone; children: ReactNode; className?: string }) => (
  <section className={`section section--${tone} ${className}`.trim()}>
    <div className="container">{children}</div>
  </section>
);

export function SectionView({ s, tone }: { s: Section; tone: Tone }) {
  const t = ("tone" in s && s.tone) || tone;
  const light = t === "ink";

  switch (s.kind) {
    case "split": {
      const right = s.mediaSide !== "left";
      return (
        <Shell tone={t} className="split-sec">
          <div className={`split${right ? "" : " split--rev"}${s.media ? "" : " split--text"}`}>
            <div className="split__text">
              {s.eyebrow && <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>{s.eyebrow}</p>}
              <h2 className={`h2${light ? " h2--light" : ""}`}>{s.title}</h2>
              {s.body.map((p, i) => (
                <p key={i} className={`prose${light ? " prose--light" : ""}`}>
                  <RichText text={p} />
                </p>
              ))}
              {s.bullets && (
                <ul className={`dash-list${light ? " dash-list--light" : ""}`}>
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <RichText text={b} />
                    </li>
                  ))}
                </ul>
              )}
              {s.cta && (
                <p className="split__cta">
                  <Link href={s.cta.href} className={`arrow-link${light ? " arrow-link--light" : ""}`}>
                    {s.cta.label}
                  </Link>
                </p>
              )}
            </div>
            {s.media && (
              <div className="split__media">
                <Media slot={s.media} arch={s.arch} ratio={s.arch ? "4/5" : "4/3"} sizes="(min-width: 960px) 46vw, 92vw" />
              </div>
            )}
          </div>
        </Shell>
      );
    }

    case "index":
      return (
        <Shell tone={t} className="index-sec">
          <div className="index">
            <div className="index__head">
              <Head eyebrow={s.eyebrow} title={s.title} intro={s.intro} light={light} />
            </div>
            <ol className="index__list">
              {s.items.map((it, i) => (
                <li key={it.title} className="index__row">
                  <span className="index__no" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="index__body">
                    <h3 className="h3">
                      {it.href ? <Link href={it.href}>{it.title}</Link> : it.title}
                      {it.tag && <span className="tag">{it.tag}</span>}
                    </h3>
                    <p>
                      <RichText text={it.text} />
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Shell>
      );

    case "steps":
      return (
        <Shell tone={t} className="steps-sec">
          <Head eyebrow={s.eyebrow} title={s.title} intro={s.intro} light={light} />
          <ol className="steps">
            {s.items.map((it, i) => (
              <li key={it.title} className="steps__item">
                <span className="steps__no" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="h3">{it.title}</h3>
                  <p>
                    <RichText text={it.text} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Shell>
      );

    case "scenarios":
      return (
        <Shell tone={t} className="scen-sec">
          <Head eyebrow={s.eyebrow ?? "Örnek etkinlik senaryoları"} title={s.title} intro={s.intro} light={light} />
          <ul className="scen">
            {s.items.map((it) => (
              <li key={it.title} className="scen__card">
                <Media slot={it.media ?? "scenario-generic"} ratio="3/2" sizes="(min-width: 960px) 30vw, 92vw" />
                <div className="scen__body">
                  <p className="scen__flag">Örnek senaryo · referans değildir</p>
                  <h3 className="h3">{it.title}</h3>
                  <p>
                    <RichText text={it.text} />
                  </p>
                  <dl className="scen__meta">
                    <div>
                      <dt>Grup</dt>
                      <dd>{it.group}</dd>
                    </div>
                    <div>
                      <dt>Süre</dt>
                      <dd>{it.duration}</dd>
                    </div>
                    <div>
                      <dt>Format</dt>
                      <dd>{it.format}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        </Shell>
      );

    case "table":
      return (
        <Shell tone={t} className="table-sec">
          <Head eyebrow={s.eyebrow} title={s.title} intro={s.intro} light={light} />
          <div className="table-wrap" tabIndex={0} role="region" aria-label={s.title}>
            <table className="table">
              <thead>
                <tr>
                  {s.head.map((h) => (
                    <th key={h} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.rows.map((r) => (
                  <tr key={r[0]}>
                    {r.map((c, i) =>
                      i === 0 ? (
                        <th key={i} scope="row">
                          <RichText text={c} />
                        </th>
                      ) : (
                        <td key={i} data-label={s.head[i]}>
                          <RichText text={c} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {s.note && <p className="table-note">{s.note}</p>}
        </Shell>
      );

    case "pull":
      return (
        <section className={`section section--${s.tone ?? "ink"} pull-sec`}>
          <div className="container">
            <blockquote className="pull">
              <p>
                <RichText text={s.text} />
              </p>
            </blockquote>
          </div>
        </section>
      );

    case "checklist":
      return (
        <Shell tone={t} className="check-sec">
          <Head eyebrow={s.eyebrow} title={s.title} intro={s.intro} light={light} />
          <ul className="ticks">
            {s.items.map((it) => (
              <li key={it}>
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
                  <path d="M3 9.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                <span>
                  <RichText text={it} />
                </span>
              </li>
            ))}
          </ul>
        </Shell>
      );

    case "links":
      return (
        <Shell tone={t} className="links-sec">
          <Head eyebrow={s.eyebrow} title={s.title} intro={s.intro} light={light} />
          <ul className="linkrows">
            {s.items.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="linkrow">
                  <span className="linkrow__label">{l.label}</span>
                  <span className="linkrow__text">{l.text}</span>
                  <span className="linkrow__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Shell>
      );
  }
}

/** Bölümleri sırayla render eder; ritim için zemin tonunu otomatik dönüştürür ve araya ince bir CTA bandı ekler. */
export function Sections({ sections, ctaAfter = 2, ctaText }: { sections: Section[]; ctaAfter?: number; ctaText?: string }) {
  let flip = 0;
  return (
    <>
      {sections.map((s, i) => {
        const explicit = "tone" in s && s.tone;
        const auto: Tone = flip % 2 === 0 ? "paper" : "sand";
        if (!explicit && s.kind !== "pull") flip++;
        return (
          <div key={`${s.kind}-${i}`}>
            <SectionView s={s} tone={auto} />
            {i === ctaAfter - 1 && (
              <div className="midcta">
                <div className="container midcta__in">
                  <p>{ctaText ?? "Etkinliğinizin kapsamını birlikte netleştirelim."}</p>
                  <Cta id="midpage_quote" variant="primary">
                    Etkinliğiniz İçin Teklif Alın
                  </Cta>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
