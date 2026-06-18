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
  title: "Morten Winther | TCG, Pokémon GO, YouTube & Twitch",
  description: "Pokémon-inspireret landingpage for Morten Winther med fokus på TCG collector content, Pokémon GO, YouTube uploads og Twitch livestreams.",
  alternates: {
    canonical: "/",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Morten Winther",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  sameAs: [
    "https://www.youtube.com/@mortenrwinther",
    "https://www.twitch.tv/mortenrwinther",
    "https://www.instagram.com/mrwpulls/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "mortenrwinther.dk",
  url: siteUrl,
  inLanguage: "da-DK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <SiteNav />
        {children}
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
