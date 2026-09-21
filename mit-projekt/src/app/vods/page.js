import SectionPage from "../../components/SectionPage";

export default function VodsPage() {
  return (
    <SectionPage
      eyebrow="Vods"
      title="Clips, uploads og highlights fra kanalen."
      description="Et hjem for videoer, livestream-highlights og indhold, der viser min tilgang til storytelling, community og branded content."
      points={[
        "Highlights fra livestreams og videoer, der er værd at se igen.",
        "Indhold der kombinerer personlig stil med professionel brand-tilstedeværelse.",
        "Nye uploads kan sættes frem her, når du udvider sitet senere.",
      ]}
      ctaLabel="Se på YouTube"
      ctaHref="https://www.youtube.com/@mortenrwinther/playlists"
    />
  );
}

export const metadata = {
  title: "Vods | Morten Winther",
  description:
    "Find videoer, highlights og uploads fra Morten Winther med creator-content, live moments og branded storytelling.",
  alternates: {
    canonical: "/vods",
  },
};