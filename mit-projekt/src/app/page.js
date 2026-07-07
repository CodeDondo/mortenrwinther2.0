import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import AutoRefresh from "./auto-refresh";

const youtubeChannelUrl = "https://www.youtube.com/@mortenrwinther/videos";
const youtubeWatchBaseUrl = "https://www.youtube.com/watch?v=";
const youtubeThumbnailBaseUrl = "https://i.ytimg.com/vi";

const highlights = [
  {
    title: "TCG collector vibes",
    text: "Rare pulls, binders, opening reactions og et kurateret univers for samlere.",
  },
  {
    title: "Pokémon GO energi",
    text: "Raids, event days og den slags content der holder feedet levende på farten.",
  },
  {
    title: "Live fra Twitch",
    text: "Community, gameplay og live drops direkte fra din kanal, når der sker noget.",
  },
];

const stats = [
  { value: "TCG", label: "collector content" },
  { value: "GO", label: "mobile adventures" },
  { value: "LIVE", label: "stream moments" },
];

const featuredPages = [
  {
    title: "Northway GO",
    href: "/northway-go",
    text: "Lokal Pokémon GO-gruppe med raids, events og fællesskab i Aalborg og omegn.",
  },
  {
    title: "Mediepakker",
    href: "/mediepakker",
    text: "Samarbejdsmuligheder til brands, der vil ramme Pokémon, TCG og creator-content.",
  },
  {
    title: "Om mig",
    href: "/om-mig",
    text: "Baggrunden, focus og brandet bag Morten Winther og hans content-univers.",
  },
  {
    title: "Setup",
    href: "/setup",
    text: "Mit aktuelle streaming- og content-setup med gear, laptop og workflow.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Vigtige undersider på mortenrwinther.dk",
  itemListElement: featuredPages.map((page, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: page.title,
    url: `https://www.mortenrwinther.dk${page.href}`,
  })),
};

function decodeHtmlEntities(value) {
  return value
    .replaceAll("\\u0026", "&")
    .replaceAll("\\/", "/")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

function decodeJsonString(value) {
  try {
    return JSON.parse(`"${value.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`);
  } catch {
    return value;
  }
}

function extractConsentFields(html) {
  const fields = {};
  const pattern = /<input[^>]+name="([^"]+)"[^>]+value="([^"]*)"/g;

  for (const match of html.matchAll(pattern)) {
    const [, name, value] = match;
    if (name in fields) {
      continue;
    }

    fields[name] = value;
  }

  return {
    bl: fields.bl || "",
    x: fields.x || "",
    gl: fields.gl || "DK",
    m: fields.m || "0",
    app: fields.app || "0",
    pc: fields.pc || "yt",
    continue: fields.continue || `${youtubeChannelUrl}?cbrd=1`,
    hl: fields.hl || "da",
    cm: fields.cm || "2",
    escs: fields.escs || "",
    set_eom: "false",
    set_ytc: "true",
    set_apyt: "true",
  };
}

function parseLatestVideos(html) {
  const videos = [];
  const seen = new Set();

  const itemPattern = /"videoId":"([^"]+)"[\s\S]{0,5000}?"lockupMetadataViewModel":\{"title":\{"content":"([^"]+)"/g;

  for (const match of html.matchAll(itemPattern)) {
    const videoId = match[1];

    if (seen.has(videoId)) {
      continue;
    }

    const title = decodeJsonString(decodeHtmlEntities(match[2]));

    videos.push({
      id: videoId,
      title,
      thumbnail: `${youtubeThumbnailBaseUrl}/${videoId}/hqdefault.jpg`,
      url: `${youtubeWatchBaseUrl}${videoId}`,
    });

    seen.add(videoId);

    if (videos.length === 3) {
      break;
    }
  }

  return videos;
}

async function fetchLatestYouTubeVideos() {
  const requestHeaders = {
    "User-Agent": "Mozilla/5.0",
    "Accept-Language": "da-DK,da;q=0.9,en;q=0.8",
  };

  const initialResponse = await fetch(youtubeChannelUrl, {
    headers: requestHeaders,
    cache: "no-store",
  });

  let html = await initialResponse.text();

  if (html.includes("consent.youtube.com/save")) {
    const consentFields = extractConsentFields(html);
    const consentResponse = await fetch("https://consent.youtube.com/save", {
      method: "POST",
      headers: {
        ...requestHeaders,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(consentFields).toString(),
      cache: "no-store",
      redirect: "follow",
    });

    html = await consentResponse.text();

    if (!html.includes("ytInitialData")) {
      const unlockedResponse = await fetch(youtubeChannelUrl, {
        headers: requestHeaders,
        cache: "no-store",
      });

      html = await unlockedResponse.text();
    }
  }

  return parseLatestVideos(html);
}

function getTwitchParentHosts() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mortenrwinther.dk";

  try {
    const hostname = new URL(siteUrl).hostname;
    const hosts = new Set([
      hostname,
      hostname.startsWith("www.") ? hostname.slice(4) : `www.${hostname}`,
      "localhost",
      "127.0.0.1",
    ]);

    return Array.from(hosts);
  } catch {
    return ["mortenrwinther.dk", "www.mortenrwinther.dk", "localhost", "127.0.0.1"];
  }
}

export default async function Home() {
  const latestVideos = await fetchLatestYouTubeVideos().catch(() => []);
  const twitchParents = getTwitchParentHosts();
  const twitchEmbedSrc = `https://player.twitch.tv/?channel=mortenrwinther${twitchParents
    .map((parent) => `&parent=${encodeURIComponent(parent)}`)
    .join("")}`;

  return (
    <div className={styles.page}>
      <AutoRefresh />
      <div className={styles.orbA} aria-hidden="true" />
      <div className={styles.orbB} aria-hidden="true" />
      <div className={styles.gridGlow} aria-hidden="true" />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.brandRow}>
              <div className={styles.logoWrap}>
                <Image
                  src="/logo.png"
                  alt="Morten Winther logo"
                  width={96}
                  height={96}
                  priority
                  className={styles.logo}
                />
              </div>
              <div>
                <p className={styles.kicker}>mortenrwinther.dk</p>
                <p className={styles.subkicker}>Pokémon-inspireret TCG collector og Pokémon GO creator</p>
              </div>
            </div>

            <h1 className={styles.title}>Et univers bygget til pulls, raids og live community moments.</h1>

            <p className={styles.lead}>
              En landingpage til din verden omkring card openings, collector stories og Pokémon GO content,
              pakket ind i et farverigt hero-univers med streaming fokus og tydelig personlig branding.
            </p>

            <div className={styles.ctaRow}>
              <a className={styles.primaryCta} href="https://www.twitch.tv/mortenrwinther" target="_blank" rel="noreferrer">
                Se live på Twitch
              </a>
              <a className={styles.secondaryCta} href="#livestream">
                Jump til stream
              </a>
            </div>

            <div className={styles.statsRow} aria-label="Højdepunkter">
              {stats.map((item) => (
                <article key={item.label} className={styles.statCard}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.bannerFrame}>
              <Image
                src="/banner.png"
                alt="Pokémon inspireret banner"
                fill
                priority
                className={styles.bannerImage}
                sizes="(max-width: 900px) 100vw, 560px"
              />
            </div>

            <div className={styles.profileCard}>
              <div className={styles.profileImageWrap}>
                <Image
                  src="/mig.jpg"
                  alt="Morten Winther"
                  fill
                  className={styles.profileImage}
                  sizes="(max-width: 900px) 80vw, 320px"
                />
              </div>
              <div className={styles.profileMeta}>
                <p className={styles.profileName}>Morten Winther</p>
                <p className={styles.profileText}>TCG collector. Pokémon GO creator. Live på Twitch.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.highlightsSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>Content focus</p>
            <h2>Alt samlet i et setup der føles som et samlerbord med energi.</h2>
          </div>

          <div className={styles.highlightGrid}>
            {highlights.map((item) => (
              <article key={item.title} className={styles.highlightCard}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.routesSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>Undersider</p>
            <h2>De vigtigste sider samlet ét sted for både brugere og søgemaskiner.</h2>
          </div>

          <div className={styles.routeGrid}>
            {featuredPages.map((page) => (
              <article key={page.href} className={styles.routeCard}>
                <h3>{page.title}</h3>
                <p>{page.text}</p>
                <Link className={styles.routeLink} href={page.href}>
                  Læs mere
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.youtubeSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>YouTube</p>
            <h2>Seneste uploads fra kanalen, opdateret automatisk.</h2>
          </div>

          <div className={styles.youtubeMeta}>
            <p>
              Daily vlogs, TCG, Pokémon content, tech, fitness og mere. Siden henter de nyeste videoer direkte fra
              min kanal, så indholdet skifter, når der uploades nyt.
            </p>
            <a className={styles.inlineLink} href="https://www.youtube.com/@mortenrwinther" target="_blank" rel="noreferrer">
              Besøg YouTube-kanalen
            </a>
          </div>

          {latestVideos.length > 0 ? (
            <div className={styles.videoGrid} aria-label="Seneste YouTube videoer">
              {latestVideos.map((video) => (
                <article key={video.id} className={styles.videoCard}>
                  <a href={video.url} target="_blank" rel="noreferrer" className={styles.videoThumbLink}>
                    <div className={styles.videoThumbWrap}>
                      {video.thumbnail ? (
                        <Image
                          className={styles.videoThumb}
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          sizes="(max-width: 980px) 100vw, 33vw"
                        />
                      ) : (
                        <div className={styles.videoThumbFallback} aria-hidden="true" />
                      )}
                    </div>
                  </a>
                  <div className={styles.videoCopy}>
                    <p className={styles.videoTag}>YouTube upload</p>
                    <h3>{video.title}</h3>
                    <a className={styles.inlineLink} href={video.url} target="_blank" rel="noreferrer">
                      Se video
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.videoEmptyState}>
              <p>Jeg kunne ikke hente de seneste videoer lige nu, så her er kanallinket som fallback.</p>
              <a className={styles.inlineLink} href="https://www.youtube.com/@mortenrwinther" target="_blank" rel="noreferrer">
                Åbn kanalen
              </a>
            </div>
          )}
        </section>

        <section className={styles.streamSection} id="livestream">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>Livestream</p>
            <h2>Indbygget Twitch-oplevelse til dine live sessions.</h2>
          </div>

          <div className={styles.streamLayout}>
            <div className={styles.streamCopy}>
              <p>
                Her kan du besøge min kanal, du kan hoppe fra landingpage til stream med ét klik.
                Perfekt til live openings, Pokémon GO sessions og samlerchats.
              </p>

              <a
                className={styles.inlineLink}
                href="https://www.twitch.tv/mortenrwinther"
                target="_blank"
                rel="noreferrer"
              >
                Åbn kanalen i Twitch
              </a>
            </div>

            <div className={styles.embedShell}>
              <iframe
                title="Twitch livestream fra Morten Winther"
                src={twitchEmbedSrc}
                allowFullScreen
                scrolling="no"
                loading="lazy"
                className={styles.embed}
              />
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      </main>
    </div>
  );
}
