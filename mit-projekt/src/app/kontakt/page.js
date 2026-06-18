import SectionPage from "../../components/SectionPage";

export const metadata = {
  title: "Kontakt | Morten Winther",
  description:
    "Kontakt Morten Winther om sponsorater, collabs, events eller creator content med Pokémon, TCG, tech og fitness.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function ContactPage() {
  return (
    <SectionPage
      eyebrow="Kontakt"
      title="Lad os bygge noget sammen."
      description="Hvis du vil tale sponsorater, collabs, events eller content med TCG, Pokémon, tech eller fitness, så er mailen det hurtigste sted at starte."
      points={[
        "Samarbejde: kontakt@mortenrwinther.dk",
        "Sociale kanaler: Twitch, YouTube, Instagram og Discord",
        "Fokus på brand-safe, målrettet og engageret creator content",
      ]}
      ctaLabel="Send en mail"
      ctaHref="mailto:kontakt@mortenrwinther.dk?subject=Samarbejde%20med%20Morten%20Winther"
    />
  );
}