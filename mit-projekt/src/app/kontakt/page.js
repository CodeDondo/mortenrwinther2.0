import SectionPage from "../../components/SectionPage";

export const metadata = {
  title: "Kontakt | Morten Winther",
  description:
    "Kontakt Morten Winther om brand-samarbejder, creator partnerships, events og professionel content creation.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function ContactPage() {
  return (
    <SectionPage
      eyebrow="Kontakt"
      title="Lad os bygge noget sammen."
      description="Hvis du vil tale om partnerships, events, branded content eller markedsføring gennem video og community, er mailen det hurtigste sted at starte."
      points={[
        "Samarbejde: kontakt@mortenrwinther.dk",
        "Sociale kanaler: Twitch, YouTube, Instagram og Discord",
        "Fokus på professionelt, målrettet og engagerende creator content",
      ]}
      ctaLabel="Send en mail"
      ctaHref="mailto:kontakt@mortenrwinther.dk?subject=Samarbejde%20med%20Morten%20Winther"
    />
  );
}