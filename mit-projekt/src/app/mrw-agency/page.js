import Link from "next/link";
import styles from "./page.module.css";

const services = [
  {
    title: "Webdesign",
    text: "Professionelle layouts, der giver din virksomhed et stærkt online førsteindtryk og skaber tillid hos de rigtige kunder.",
  },
  {
    title: "Webudvikling",
    text: "Moderne, hurtige og mobile-first websites, der er bygget til performance, skalerbarhed og enkel drift.",
  },
  {
    title: "SEO & synlighed",
    text: "Teknisk SEO, struktur og indhold, der gør det lettere at blive fundet af de kunder, du ønsker at arbejde med.",
  },
  {
    title: "UGC & SoMe content",
    text: "Autentisk indhold til sociale medier, der skaber engagement, synlighed og stærkere brand-genkendelse.",
  },
];

const process = [
  {
    number: "01",
    title: "Afklaring",
    text: "Vi kortlægger mål, målgruppe og behov, så løsningen passer til din virksomheds reelle ambitioner.",
  },
  {
    number: "02",
    title: "Design & indhold",
    text: "Vi skaber et moderne brand- og webunivers, der taler direkte til dine kunder og styrker dit omdømme.",
  },
  {
    number: "03",
    title: "Launch & videreudvikling",
    text: "Vi lancerer løsningen og kan hjælpe videre med drift, content, optimering og strategisk udvikling.",
  },
];

const clients = ["Salon Jozi", "Creators i Mod", "Nordic Retro"];

export default function MrwAgencyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>MRW Agency</p>
          <h1>Websites og content, der får din virksomhed til at se skarp ud online.</h1>
          <p className={styles.lead}>
            Vi hjælper små og mellemstore virksomheder med moderne websites, branding og content, så du står stærkere
            digitalt og får flere relevante henvendelser.
          </p>

          <div className={styles.ctaRow}>
            <Link className={styles.primaryCta} href="https://www.mrwagency.dk" target="_blank" rel="noreferrer">
              Besøg MRW Agency
            </Link>
            <Link
              className={styles.secondaryCta}
              href="mailto:kontakt@mrwagency.dk?subject=MRW%20Agency%20-%20Uforpligtende%20snak"
            >
              Book en uforpligtende snak
            </Link>
          </div>

          <div className={styles.metaRow}>
            <div className={styles.metaCard}>
              <span>Fokus</span>
              <strong>Webdesign & udvikling</strong>
            </div>
            <div className={styles.metaCard}>
              <span>Speciale</span>
              <strong>Brand & SoMe</strong>
            </div>
            <div className={styles.metaCard}>
              <span>Kontakt</span>
              <strong>kontakt@mrwagency.dk</strong>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.badge}>Digital vækst • Branding • Content</div>
          <div className={styles.visualPanel}>
            <div className={styles.visualHeader}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <div className={styles.visualBody}>
              <div className={styles.statLarge}>MRW</div>
              <div className={styles.statGrid}>
                <div>
                  <span>Design</span>
                  <strong>Professionel</strong>
                </div>
                <div>
                  <span>Web</span>
                  <strong>Hurtig</strong>
                </div>
                <div>
                  <span>SEO</span>
                  <strong>Synlig</strong>
                </div>
                <div>
                  <span>Content</span>
                  <strong>Engagerende</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Ydelser</p>
          <h2>Det kan vi hjælpe dig med.</h2>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article key={service.title} className={styles.serviceCard}>
              <p className={styles.serviceTitle}>{service.title}</p>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Proces</p>
          <h2>En enkel proces fra idé til færdig løsning.</h2>
        </div>

        <div className={styles.processGrid}>
          {process.map((step) => (
            <article key={step.number} className={styles.processCard}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.clientsSection}>
        <div className={styles.clientText}>
          <p className={styles.sectionLabel}>Samarbejde</p>
          <h2>Virksomheder vi har arbejdet sammen med.</h2>
        </div>

        <div className={styles.clientRow}>
          {clients.map((client) => (
            <div key={client} className={styles.clientBadge}>{client}</div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div>
          <p className={styles.sectionLabel}>Få et tilbud</p>
          <h2>Bliv matchet med den rigtige løsning til din virksomhed.</h2>
          <p>
            Svar på kortet om din virksomhed, dit behov og dit budget, så får du et konkret forslag til, hvad der vil
            være mest værdiskabende for dig.
          </p>
        </div>

        <Link className={styles.primaryCta} href="https://www.mrwagency.dk" target="_blank" rel="noreferrer">
          Få mit forslag
        </Link>
      </section>
    </main>
  );
}

export const metadata = {
  title: "MRW Agency | Websites & content",
  description:
    "MRW Agency hjælper virksomheder med webdesign, webudvikling, SEO og SoMe content creation. Se løsningerne og book en uforpligtende snak.",
  alternates: {
    canonical: "/mrw-agency",
  },
};
