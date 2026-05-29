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
            Jeg er {age} år og bor i Nørresundby sammen med min lille familie. Jeg er indehaver af MRW Agency og min fritid kredser
            omkring cards, community og content - især inden for Pokémon, TCG og Pokémon GO.
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
              <strong>TCG + Pokémon GO content</strong>
            </article>
          </div>
        </div>

        <div className={styles.heroImageWrap}>
          <Image
            src="/omMig.jpg"
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
            Jeg bygger mit univers omkring en ægte interesse for Pokémon og samlerkultur. Jeg er TCG collector og
            bruger meget af min energi på at åbne, samle og dele oplevelser fra kortverdenen, mens jeg samtidig laver
            content omkring Pokémon GO og livet som creator.
          </p>
        </article>

        <article className={styles.storyCard}>
          <p className={styles.sectionLabel}>Det jeg laver</p>
          <p>
            Mit content spænder fra collectors, gameplay og live-streams til mere personlige ting som daily vlogs,
            tech, fitness og andet creator-indhold. Det vigtigste for mig er, at det føles autentisk, engagerende og
            let at gå til for dem, der følger med.
          </p>
        </article>

        <article className={styles.storyCard}>
          <p className={styles.sectionLabel}>Min retning</p>
          <p>
            Jeg vil gerne bygge et brand, der kan vokse med tiden og samle folk på tværs af YouTube, Twitch, Discord
            og sociale medier. Målet er at skabe et univers, hvor både content, community og samarbejder giver mening.
          </p>
        </article>
      </section>

      <section className={styles.partnerSection}>
        <div className={styles.partnerCopy}>
          <p className={styles.kicker}>Webudvikling & partnerskab</p>
          <h2>Jeg arbejder også som webudvikler og er partner hos Creators imod mobning.</h2>
          <p>
            Ved siden af mit content arbejder jeg med webudvikling, hvor jeg gerne skaber løsninger, der både ser
            professionelle ud og fungerer godt i praksis. Jeg er også partner hos Creators imod mobning, fordi jeg
            gerne vil støtte et initiativ, der gør en reel forskel for community, trivsel og online kultur.
          </p>
          <a
            className={styles.partnerButton}
            href="https://www.creatorsimod.dk"
            target="_blank"
            rel="noreferrer"
          >
            Besøg creatorsimod.dk
          </a>
        </div>

        <div className={styles.partnerCard}>
          <Image
            src="/creatorsimod.png"
            alt="Creators imod mobning"
            fill
            className={styles.partnerImage}
            sizes="(max-width: 960px) 100vw, 420px"
          />
        </div>
      </section>

      <section className={styles.friendSection}>
        <div className={styles.friendCopy}>
          <p className={styles.kicker}>Pokémon GO vennekode</p>
          <h2>Tilføj mig i Pokémon GO og vær med på raids, events og samler-snak.</h2>
          <p>
            Her kan du nemt finde min vennekode, hvis du spiller Pokémon GO. Jeg sætter pris på fællesskabet omkring
            raids, gifts og de små ting, der gør spillet sjovt at følge med i sammen.
          </p>
          <Link className={styles.friendButton} href="https://www.youtube.com/@mortenrwinther" target="_blank" rel="noreferrer">
            Se mere af mit univers
          </Link>
        </div>

        <div className={styles.friendCard}>
          <Image
            src="/pokemonGoFriend.jpg"
            alt="Pokémon GO vennekode"
            fill
            className={styles.friendImage}
            sizes="(max-width: 960px) 100vw, 420px"
          />
        </div>
      </section>
    </main>
  );
}