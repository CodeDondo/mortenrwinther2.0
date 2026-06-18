import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const inviteUrl =
  "https://campfire.onelink.me/eBr8?af_dp=campfire://&af_force_deeplink=true&deep_link_sub1=cj1jbHVicyZjPTc5NjIzNTdiLWIyNjQtNDlkOS1hYmVjLTUwNTgwNTgwMjM3MyZpPXRydWU=";

const highlights = [
  "Meetups og hyggelige samlinger i Aalborg og omegn.",
  "Raids sammen, events og community-dage hvor vi mødes i spillet.",
  "Byttedage med Pokémon kort, små aktiviteter og god stemning.",
];

const details = [
  { label: "Hovedkvarter", value: "Aalborg omegn, Danmark" },
  { label: "Fokus", value: "Pokémon GO, events og fællesskab" },
  { label: "Platform", value: "Niantic Campfire" },
];

export const metadata = {
  title: "Northway GO | Pokémon GO gruppe i Aalborg",
  description:
    "Northway GO er en Pokémon GO gruppe med base i Aalborg omegn, hvor der arrangeres meetups, raids, events og byttedage i Campfire.",
  alternates: {
    canonical: "/northway-go",
  },
};

export default function NorthwayGoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Northway GO</p>
          <h1>En lokal Pokémon GO gruppe for Aalborg og omegn.</h1>
          <p className={styles.lead}>
            Northway GO samler spillere, der vil mødes til raids, events, trades og sociale Pokémon-oplevelser i
            og omkring Aalborg. Gruppen er lavet til både casual og dedikerede trænere, som gerne vil være en del af
            et aktivt fællesskab i Niantic Campfire.
          </p>

          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href={inviteUrl} target="_blank" rel="noreferrer">
              Join Campfire-gruppen
            </a>
            <Link className={styles.secondaryCta} href="/kontakt">
              Kontakt mig
            </Link>
          </div>
        </div>

        <div className={styles.logoCard}>
          <div className={styles.logoWrap}>
            <Image src="/NorthwayGO.png" alt="Northway GO logo" fill priority className={styles.logo} sizes="280px" />
          </div>
          <div className={styles.logoMeta}>
            <p className={styles.metaLabel}>Niantic Campfire</p>
            <p>
              Et samlingspunkt for lokale trænere, der vil holde sig opdateret på raids, events og community-dage.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.infoGrid} aria-label="Om gruppen">
        {details.map((item) => (
          <article key={item.label} className={styles.infoCard}>
            <p className={styles.cardLabel}>{item.label}</p>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <section className={styles.contentGrid}>
        <article className={styles.panel}>
          <p className={styles.cardLabel}>Hvad vi laver</p>
          <h2>Aktiviteter der samler spillerne omkring fælles oplevelser.</h2>
          <ul className={styles.list}>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className={styles.panelAccent}>
          <p className={styles.cardLabel}>Fællesskabet</p>
          <h2>Et sted hvor lokale spillere kan mødes uden at det bliver tungt eller formelt.</h2>
          <p>
            Ideen er enkel: gøre det nemt at finde andre spillere, koordinere raids, arrangere meetups og holde gang
            i et positivt fællesskab med plads til både Pokémon GO og Pokémon kort.
          </p>
          <a className={styles.inlineCta} href={inviteUrl} target="_blank" rel="noreferrer">
            Åbn invitationen
          </a>
        </article>
      </section>
    </main>
  );
}