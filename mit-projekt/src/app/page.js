import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import AutoRefresh from "./auto-refresh";

const youtubeChannelUrl = "https://www.youtube.com/@mortenrwinther/videos";
const youtubeWatchBaseUrl = "https://www.youtube.com/watch?v=";
const youtubeThumbnailBaseUrl = "https://i.ytimg.com/vi";

const highlights = [
  {
    title: "Video strategy",
    text: "Content der kombinerer klare mål, stærk storytelling og en naturlig brand-tilstedeværelse.",
  },
  {
    title: "Creator-led storytelling",
    text: "Personlig, troværdig kommunikation, der skaber engagement på tværs af YouTube, Twitch og sociale medier.",
  },
  {
    title: "Live community building",
    text: "Fællesskab, real-time engagement og brand-safe indhold i et professionelt creator-univers.",
  },
];

const stats = [
  { value: "YT", label: "video content" },
  { value: "LIVE", label: "stream moments" },
  { value: "BRAND", label: "creator partnerships" },
];

const featuredPages = [
  {
    title: "Om mig",
    href: "/om-mig",
    text: "Baggrunden, fokus og brandet bag Morten Winther som content creator og samarbejdspartner.",
  },
  {
    title: "Setup",
    href: "/setup",
    text: "Mit streaming- og content-setup, der understøtter kvalitet, effektivitet og professionel levering.",
  },
  {
    title: "Kontakt",
    href: "/kontakt",
    text: "Lad os diskutere samarbejder, kampagner, events og indhold, der skaber værdi for dit brand.",
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
                  src="/MRWLogo.png"
                  alt="Morten Winther logo"
                  width={96}
                  height={96}
                  priority
                  className={styles.logo}
                />
              </div>
              <div>
                <p className={styles.kicker}>mortenrwinther.dk</p>
                <p className={styles.subkicker}>Content creator med fokus på video, storytelling og live brand engagement</p>
              </div>
            </div>

            <h1 className={styles.title}>Professionel content creation med fokus på video, brand og community.</h1>

            <p className={styles.lead}>
              Morten Winther skaber indhold, der kombinerer personligt brand med stærke samarbejder, engagerende
              storytelling og en tydelig tilstedeværelse på YouTube og Twitch for virksomheder og publikum.
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
                <p className={styles.profileText}>Content creator. YouTube & Twitch. Brand storytelling.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.highlightsSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>Content focus</p>
            <h2>Et creator-univers bygget til værdiskabende indhold og engagerede samarbejder.</h2>
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
            <h2>De vigtigste sider samlet ét sted til brands, samarbejdspartnere og nye følgere.</h2>
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
              Videoer, creator-storytelling, livestreams og platformens vigtigste indhold. Siden henter de nyeste
              videoer direkte fra kanalen, så den altid viser det mest aktuelle materiale.
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
                Her kan du hoppe direkte fra landingpage til live streaming, hvor content, community og real-time
                engagement mødes i én og samme kanal.
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
