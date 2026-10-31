import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import CookieBanner from "../components/CookieBanner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mortenrwinther.dk";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Morten Winther | Content Creator på YouTube & Twitch",
  description:
    "Morten Winther er content creator og streamer på YouTube og Twitch. Se videoer og livestreams, læs om mit setup, og kontakt mig om samarbejder og branded content.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Morten Winther",
    locale: "da_DK",
    images: [
      {
        url: "/banner.png",
        width: 1672,
        height: 941,
        alt: "Morten Winther, content creator på YouTube og Twitch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Morten Winther",
  url: siteUrl,
  image: `${siteUrl}/mig2.0.png`,
  jobTitle: "Content creator og streamer",
  description:
    "Content creator og streamer med fokus på YouTube-videoer, Twitch-livestreams, storytelling og brandsamarbejder.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nørresundby",
    addressCountry: "DK",
  },
  knowsAbout: [
    "Content creation",
    "YouTube-videoer",
    "Twitch-livestreams",
    "Branded content",
    "Video storytelling",
    "Online community building",
  ],
  sameAs: [
    "https://www.youtube.com/@mortenrwinther",
    "https://www.twitch.tv/mortenrwinther",
    "https://www.instagram.com/mrwpulls/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "mortenrwinther.dk",
  url: siteUrl,
  inLanguage: "da-DK",
  publisher: {
    "@id": `${siteUrl}/#person`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <SiteNav />
        {children}
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
