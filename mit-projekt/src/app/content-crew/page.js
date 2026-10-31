import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mortenrwinther.dk";

const crewMembers = [
  {
    name: "Morten Winther",
    role: "Content creator · YouTube · Twitch",
    image: "/mig2.0.png",
    alt: "Morten Winther, content creator på YouTube og Twitch",
    description:
      "Jeg laver videoer på YouTube og livestreams på Twitch. Mit content samler mig og mit community på tværs af platformene, og jeg er også åben for relevante samarbejder med brands.",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/@mortenrwinther" },
      { label: "Twitch", href: "https://www.twitch.tv/mortenrwinther" },
    ],
  },
  {
    name: "Astrid (Aparika)",
    role: "Content creator · Twitch",
    image: "/aparika.png",
    alt: "Astrid, content creator og Twitch-streamer kendt som Aparika",
    description:
      "Astrid er content creator og streamer på Twitch under navnet Aparika. Hun er en del af Content Crew og skaber sit eget indhold og fællesskab på platformen.",
    links: [{ label: "Twitch", href: "https://www.twitch.tv/aparika" }],
  },
];

const crewSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Content Crew",
  description: "Content creators og streamere på YouTube og Twitch.",
  itemListElement: crewMembers.map((member, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      image: new URL(member.image, siteUrl).toString(),
      description: member.description,
    },
  })),
};

export default function ContentCrewPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Mortenrwinther · YouTube · Twitch</p>
        <h1>Content Crew</h1>
        <p className={styles.intro}>
          Et creator-univers med indhold på YouTube og Twitch. Mød dem, der står bag Content Crew, og læs mere om
          vores kanaler og content.
        </p>
        <div className={styles.platforms} aria-label="Content Crew-platforme">
          <a href="https://www.youtube.com/@mortenrwinther" target="_blank" rel="noopener noreferrer">
            <span>YouTube</span>
            <span>Videoer og indhold fra Mortenrwinther</span>
          </a>
          <a href="https://www.twitch.tv/mortenrwinther" target="_blank" rel="noopener noreferrer">
            <span>Twitch</span>
            <span>Livestreams og fællesskab</span>
          </a>
        </div>
      </section>

      <section className={styles.crewSection} aria-labelledby="crew-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Mød holdet</p>
          <h2 id="crew-heading">Personerne i Content Crew</h2>
          <p>Vælg et medlem for at læse mere.</p>
        </div>

        <div className={styles.memberGrid}>
          {crewMembers.map((member) => (
            <details className={styles.memberCard} key={member.name}>
              <summary className={styles.memberSummary}>
                <span className={styles.portrait}>
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1040px) 50vw, 560px"
                    className={styles.portraitImage}
                  />
                </span>
                <span className={styles.memberCaption}>
                  <span className={styles.memberIdentity}>
                    <span className={styles.memberName}>{member.name}</span>
                    <span className={styles.memberRole}>{member.role}</span>
                  </span>
                  <span className={styles.memberAction}>Læs mere</span>
                </span>
              </summary>
              <div className={styles.memberDetails}>
                <p>{member.description}</p>
                {member.links.length > 0 && (
                  <div className={styles.memberLinks} aria-label={`Kanaler for ${member.name}`}>
                    {member.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                        Besøg {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.contact}>
        <div>
          <p className={styles.eyebrow}>Bliv en del af holdet</p>
          <h2>Vil du ansøge om at blive en del af Content Crew?</h2>
          <p>
            Send os en besked via kontaktsiden, og fortæl lidt om dig selv og det content, du laver.
          </p>
        </div>
        <Link className={styles.contactLink} href="/kontakt">
          Ansøg om at blive en del af crewet
        </Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crewSchema) }} />
    </main>
  );
}

export const metadata = {
  title: "Content Crew | Mortenrwinther på YouTube og Twitch",
  description:
    "Mød Content Crew: Mortenrwinther og Astrid (Aparika). Læs om contentet vi laver på YouTube og Twitch, vores livestreams, videoer og fællesskab.",
  alternates: {
    canonical: "/content-crew",
  },
  openGraph: {
    title: "Content Crew | Mortenrwinther på YouTube og Twitch",
    description:
      "Mød Mortenrwinther og Astrid (Aparika), og læs om Content Crew på YouTube og Twitch.",
    images: [
      {
        url: "/mig2.0.png",
        width: 1024,
        height: 1536,
        alt: "Morten Winther fra Content Crew",
      },
    ],
  },
};
