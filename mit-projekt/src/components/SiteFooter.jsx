import Image from "next/image";
import styles from "./SiteFooter.module.css";

const footerLinks = [
  {
    label: "Forside",
    value: "mortenrwinther.dk",
    href: "/",
  },
  {
    label: "Om mig",
    value: "Morten Winther",
    href: "/om-mig",
  },
  {
    label: "Cookiepolitik",
    value: "Cookiepolitik",
    href: "/cookie-policy",
  },
  {
    label: "Privatliv",
    value: "Privatlivspolitik",
    href: "/privacy-policy",
  },
  {
    label: "Email",
    value: "kontakt@mortenrwinther.dk",
    href: "mailto:kontakt@mortenrwinther.dk?subject=Samarbejde%20med%20Morten%20Winther",
  },
  {
    label: "Twitch",
    value: "twitch.tv/mortenrwinther",
    href: "https://www.twitch.tv/mortenrwinther",
  },
  {
    label: "YouTube",
    value: "@mortenrwinther",
    href: "https://www.youtube.com/@mortenrwinther",
  },
  {
    label: "Instagram",
    value: "@tcgtradeshop",
    href: "https://www.instagram.com/tcgtradeshop/",
  },
];

const footerPillars = [
  "Video strategy",
  "Brand storytelling",
  "Live community building",
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.brandBlock}>
            <div className={styles.logoWrap}>
              <Image src="/MRWLogo.png" alt="Morten Winther logo" fill sizes="72px" className={styles.logo} />
            </div>

            <div className={styles.brandCopy}>
              <p className={styles.kicker}>Samarbejde & content</p>
              <h2>Byg noget stærkt omkring video, storytelling og live engagement.</h2>
              <p>
                Denne side samler min tilstedeværelse på tværs af YouTube, Twitch, community og samarbejdsmuligheder for
                brands, der vil være i kontakt med en engageret og målrettet publikum.
              </p>
              <div className={styles.pillRow}>
                {footerPillars.map((pillar) => (
                  <span key={pillar} className={styles.pill}>
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.contactCard}>
            <p className={styles.cardLabel}>Kontakt</p>
            <a className={styles.emailLink} href="mailto:kontakt@mortenrwinther.dk?subject=Samarbejde%20med%20Morten%20Winther">
              kontakt@mortenrwinther.dk
            </a>
            <p className={styles.cardText}>
              Perfekt til samarbejder inden for content strategy, creator partnerships, branded storytelling og
              live video-aktiveringer på YouTube, Twitch og sociale medier.
            </p>
            <p className={styles.cardText}>CVR 44231662 · Øvrige oplysninger findes i footerens links.</p>
            <p className={styles.cardLabel}>Undersider</p>
            <div className={styles.linkRow}>
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  className={styles.inlineLink}
                  href={link.href}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.discordCard}>
            <p className={styles.cardLabel}>Discord community</p>
            <h3>Hop ind i serveren</h3>
            <p className={styles.cardText}>
              Et godt sted til community-snak, samarbejder, livestreams og relevante samtaler omkring creator-content
              og brand engagement.
            </p>
            <div className={styles.discordFrame}>
              <iframe
                src="https://discord.com/widget?id=1425637564622176298&theme=dark"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                title="Discord server widget"
                loading="lazy"
                className={styles.discordWidget}
              />
            </div>
            <a
              className={styles.discordButton}
              href="https://discord.com/widget?id=1425637564622176298&theme=dark"
              target="_blank"
              rel="noreferrer"
            >
              Open Discord
            </a>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p>mortenrwinther.dk · CVR 44231662</p>
          <p>Professionel creator platform med fokus på video, branding og live community.</p>
        </div>
      </div>
    </footer>
  );
}