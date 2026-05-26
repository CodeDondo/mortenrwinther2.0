import Image from "next/image";
import styles from "./SiteFooter.module.css";

const footerLinks = [
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
    value: "@mrwpulls",
    href: "https://www.instagram.com/mrwpulls/",
  },
];

const footerPillars = [
  "TCG collector content",
  "Pokémon GO & live adventures",
  "Daily vlogs, tech, fitness og creator collabs",
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.brandBlock}>
            <div className={styles.logoWrap}>
              <Image src="/logo.png" alt="Morten Winther logo" fill sizes="72px" className={styles.logo} />
            </div>

            <div className={styles.brandCopy}>
              <p className={styles.kicker}>Samarbejde & community</p>
              <h2>Byg noget stærkt omkring content, collectors og live community.</h2>
              <p>
                Denne side er lavet til at samle din tilstedeværelse på tværs af YouTube, Twitch, Discord og de
                kommende sider på mortenrwinther.dk. Hvis du vil samarbejde om sponsorater, produkter, events eller
                creator-content, så er du velkommen til at skrive.
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
              Perfekt til samarbejder inden for TCG, gaming, Pokémon, tech, fitness og content der rammer en engageret
              community på tværs af YouTube, Twitch og Instagram.
            </p>
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
              Et godt sted til community-snak, pulls, raiddage, livestreams og alt det, der samler folk omkring din
              verden.
            </p>
            <div className={styles.discordFrame}>
              <iframe
                src="https://discord.com/widget?id=1490642776466133072&theme=dark"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                title="Discord server widget"
                loading="lazy"
                className={styles.discordWidget}
              />
            </div>
            <a
              className={styles.discordButton}
              href="https://discord.com/widget?id=1490642776466133072&theme=dark"
              target="_blank"
              rel="noreferrer"
            >
              Open Discord
            </a>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p>mortenrwinther.dk</p>
          <p>Pokémon-inspireret creator platform med fokus på samlerkultur, community og live content.</p>
        </div>
      </div>
    </footer>
  );
}