import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import CookieBanner from "../components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Morten Winther | TCG, Pokémon GO, YouTube & Twitch",
  description: "Pokémon-inspireret landingpage for Morten Winther med fokus på TCG collector content, Pokémon GO, YouTube uploads og Twitch livestreams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
