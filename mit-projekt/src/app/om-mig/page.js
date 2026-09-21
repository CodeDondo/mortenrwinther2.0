import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const birthDate = new Date(1996, 0, 18); // 18. januar 1996 (måneder er 0-indekserede)

function calculateAge(referenceDate = new Date()) {
  let age = referenceDate.getFullYear() - birthDate.getFullYear();
  const monthDelta = referenceDate.getMonth() - birthDate.getMonth();
  const dayDelta = referenceDate.getDate() - birthDate.getDate();

  if (monthDelta < 0 || (monthDelta === 0 && dayDelta < 0)) {
    age -= 1;
  }

  return age;
}

export default function AboutPage() {
  const age = calculateAge();

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Om mig</p>
          <h1>Morten Winther</h1>
          <p className={styles.lead}>
            Jeg er {age} år og bor i Nørresundby sammen med min lille familie. Jeg arbejder med content creation,
            storytelling og branded video, hvor fokus ligger på at skabe indhold, der både er autentisk, professionelt
            og engagerende for målgrupperne.
          </p>

          <div className={styles.metaGrid}>
            <article className={styles.metaCard}>
              <span>Født</span>
              <strong>18. januar 1996</strong>
            </article>
            <article className={styles.metaCard}>
              <span>Base</span>
              <strong>Nørresundby</strong>
            </article>
            <article className={styles.metaCard}>
              <span>Fokus</span>
              <strong>Content creation & video</strong>
            </article>
          </div>
        </div>

        <div className={styles.heroImageWrap}>
          <Image
            src="/mig2.0.png"
            alt="Morten Winther"
            fill
            priority
            className={styles.heroImage}
            sizes="(max-width: 960px) 100vw, 520px"
          />
        </div>
      </section>

      <section className={styles.storyGrid}>
        <article className={styles.storyCard}>
          <p className={styles.sectionLabel}>Hvem jeg er</p>
          <p>
            Jeg bygger mit univers omkring autentisk storytelling, videoindhold og samarbejder, der skaber værdi for
            både publikum og brands. Min tilgang er at skabe indhold, der føles professionelt, engagerende og troværdigt
            på tværs af platforme.
          </p>
        </article>

        <article className={styles.storyCard}>
          <p className={styles.sectionLabel}>Det jeg laver</p>
          <p>
            Mit content spænder fra YouTube-videoer og live streams til branded storytelling, community-building og
            strategi for creator-led markedsføring. Jeg fokuserer på at kombinere enkel kommunikation med stærk visuel
            kvalitet og en naturlig tilstedeværelse i sociale medier.
          </p>
        </article>

        <article className={styles.storyCard}>
          <p className={styles.sectionLabel}>Min retning</p>
          <p>
            Jeg vil skabe et brand, der kan vokse med tiden og give virksomheder en stærk partner inden for video,
            samarbejder og community engagement. Målet er at kombinere indhold, samarbejder og værdi i ét samlet univers.
          </p>
        </article>
      </section>

      <section className={styles.friendSection}>
        <div className={styles.friendCopy}>
          <p className={styles.kicker}>Creator network</p>
          <h2>Et professionelt og engageret community omkring video, brand og live content.</h2>
          <p>
            Jeg arbejder på at bygge et stærkt fællesskab omkring indhold, samarbejder og relevante partnerskaber,
            hvor både publikum og brands kan finde værdi i at følge med og være en del af udviklingen.
          </p>
          <Link className={styles.friendButton} href="https://www.youtube.com/@mortenrwinther" target="_blank" rel="noreferrer">
            Se mere af mit univers
          </Link>
        </div>

        <div className={styles.friendCard}>
          <Image
            src="/mig.jpg"
            alt="Morten Winther"
            fill
            className={styles.friendImage}
            sizes="(max-width: 960px) 100vw, 420px"
          />
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Om mig | Morten Winther",
  description:
    "Læs om Morten Winther, hans baggrund som content creator, videoudvikler og samarbejdspartner inden for branded storytelling og online community.",
  alternates: {
    canonical: "/om-mig",
  },
};