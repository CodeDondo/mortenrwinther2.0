import Link from "next/link";
import styles from "./page.module.css";

const mediaPackages = [
  {
    title: "YouTube Short",
    span: "15-60 sek sponsor",
    price: "150-300 kr",
    detail: "Perfekt til quick hits, produkt teasers og kampagner med lav friktion.",
  },
  {
    title: "Integreret sponsor",
    span: "Vlog eller stream-segment",
    price: "300-500 kr",
    detail: "Indlejret naturligt i content, hvor brandet bliver en del af historien.",
  },
  {
    title: "Dedikeret video",
    span: "Fuld fokus på produktet",
    price: "500-1.000 kr",
    detail: "Størst rum til demo, unboxing, test og call to action med mere dybde.",
  },
];

const collaborationTargets = [
  "Pokémon butikker",
  "TCG webshops",
  "3D-print virksomheder",
  "Sleeves og deckbox producenter",
  "Pokémon GO tilbehør",
  "Powerbanks",
  "Kameraudstyr til vlogging",
];

const sellingPoints = [
  "Tydelig creator-vinkel med TCG, Pokémon GO, YouTube og Twitch i samme univers.",
  "Indhold der kan aktiveres på tværs af short-form, vlog og live streams.",
  "En kontaktflade der gør det nemt at teste små samarbejder før større kampagner.",
];

const emailAddress = "kontakt@mortenrwinther.dk";

export const metadata = {
  title: "Mediepakker | Morten Winther",
  description:
    "Se Morten Winthers mediepakker, samarbejdsmuligheder og relevante brancher at kontakte for Pokémon, TCG, vlogging og creator content.",
};

export default function MediepakkerPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Mediepakker</p>
          <h1>Samarbejder der føles naturlige, tydelige og nemme at gå til.</h1>
          <p className={styles.lead}>
            Her er en enkel oversigt over mine standardpakker. Tanken er at gøre det let for virksomheder at vælge
            den form for eksponering, der passer til deres produkt, budget og ambitionsniveau.
          </p>

          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href={`mailto:${emailAddress}?subject=Samarbejde%20med%20Morten%20Winther`}>
              Send en mail
            </a>
            <Link className={styles.secondaryCta} href="/kontakt">
              Gå til kontakt
            </Link>
          </div>
        </div>

        <aside className={styles.heroAside}>
          <p className={styles.asideLabel}>Kontakt</p>
          <a className={styles.mailLink} href={`mailto:${emailAddress}`}>
            {emailAddress}
          </a>
          <p className={styles.asideText}>
            Jeg leder primært efter samarbejder med brands, der passer ind i Pokémon, TCG, tech og creator-udstyr.
          </p>
        </aside>
      </section>

      <section className={styles.packageBoard} aria-label="Mediepakker">
        {mediaPackages.map((packageItem) => (
          <article key={packageItem.title} className={styles.packageRow}>
            <div>
              <p className={styles.packageTitle}>{packageItem.title}</p>
              <p className={styles.packageSpan}>{packageItem.span}</p>
              <p className={styles.packageDetail}>{packageItem.detail}</p>
            </div>
            <p className={styles.packagePrice}>{packageItem.price}</p>
          </article>
        ))}
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <p className={styles.sectionLabel}>Jeg leder efter</p>
          <h2>Virksomheder der giver mening i mit content-univers.</h2>
          <div className={styles.chips}>
            {collaborationTargets.map((item) => (
              <span key={item} className={styles.chip}>
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className={styles.card}>
          <p className={styles.sectionLabel}>Tvist</p>
          <h2>Små samarbejder først, større partnerskaber bagefter.</h2>
          <ul className={styles.list}>
            {sellingPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.footerCard}>
        <div>
          <p className={styles.sectionLabel}>Næste skridt</p>
          <h2>Hvis du vil teste et samarbejde, så send bare en kort idé.</h2>
          <p>
            Skriv gerne hvad du sælger, hvem du vil ramme, og hvilken type eksponering du er interesseret i. Jeg
            svarer hurtigt tilbage på {emailAddress}.
          </p>
        </div>

        <a className={styles.primaryCta} href={`mailto:${emailAddress}?subject=Mediepakke%20og%20samarbejde`}>
          Kontakt mig
        </a>
      </section>
    </main>
  );
}