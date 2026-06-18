import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const setupYear = new Date().getFullYear();

const specs = [
  {
    label: "Laptop",
    title: "Lenovo Legion 5 Slim",
    items: [
      "CPU: AMD Ryzen 7 7840HS",
      "GPU: NVIDIA GeForce RTX 4060 (8GB GDDR6)",
      'Skærm: 14,5" WQXGA+ OLED',
      "Ram: 16GB LPDDR5x-6400mhz",
      "Lagring: 1TB NVMe SSD",
    ],
  },
  {
    label: "Gear",
    title: "Streaming og content",
    items: [
      "Mikrofon: Elgato Wave DX",
      "Audio Interface: Elgato Wave XLR",
      "Webcam: Elgato Facecam Neo",
      "Headset: Steelseries Arctis Nova 7 Gen 2",
      "Mus: Steelseries Aerox 3",
      "Tastatur: Steelseries Apex 7",
      "Streaming software: OBS Studio, Larix Screencaster (mobil)",
      "Stream Deck: Elgato Stream Deck +",
      "Kamera: Dji Osmo Action 6",
      "Mobil: Samsung Galaxy S25 FE",
    ],
  },
  {
    label: "Consoles",
    title: "Til gaming og indhold",
    items: ["Xbox Series X", "Pokémon-venligt setup til både streaming og casual gaming."],
  },
];

export default function SetupPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>MIT SETUP {setupYear}</p>
          <h1>Mit daglige workflow og gaming-setup.</h1>
          <p className={styles.lead}>
            Et samlet overblik over mit setup til udvikling, streaming og content creation — holdt i samme rene og
            professionelle stil som resten af sitet.
          </p>

          <div className={styles.metaRow}>
            <div className={styles.metaCard}>
              <span>Opdateret</span>
              <strong>{setupYear}</strong>
            </div>
            <div className={styles.metaCard}>
              <span>Fokus</span>
              <strong>Content, TCG og streaming</strong>
            </div>
            <div className={styles.metaCard}>
              <span>Stil</span>
              <strong>Ren, funktionel og klar</strong>
            </div>
          </div>

          <Link className={styles.cta} href="/kontakt">
            Kontakt mig
          </Link>
        </div>

        <div className={styles.imageWrap}>
          <Image
            src="/setup.jpg"
            alt="Morten Winther setup"
            fill
            priority
            className={styles.image}
            sizes="(max-width: 960px) 100vw, 560px"
          />
        </div>
      </section>

      <section className={styles.sectionGrid}>
        {specs.map((spec) => (
          <article key={spec.title} className={styles.specCard}>
            <p className={styles.sectionLabel}>{spec.label}</p>
            <h2>{spec.title}</h2>
            <ul>
              {spec.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className={styles.footerCard}>
        <div>
          <p className={styles.sectionLabel}>MERE INFORMATION</p>
          <h2>Mit setup udvikler sig løbende fra år til år.</h2>
          <p>
            Når året skifter, følger siden automatisk med, så overskriften altid viser det aktuelle setup-år.
          </p>
        </div>

        <Link className={styles.secondaryCta} href="/">
          Tilbage til forsiden
        </Link>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Setup | Morten Winther",
  description:
    "Se Morten Winthers aktuelle setup til streaming, content creation, udvikling og gaming med gear og workflow.",
  alternates: {
    canonical: "/setup",
  },
};