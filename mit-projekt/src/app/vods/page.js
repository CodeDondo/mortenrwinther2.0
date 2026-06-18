import SectionPage from "../../components/SectionPage";

export default function VodsPage() {
  return (
    <SectionPage
      eyebrow="Vods"
      title="Clips, uploads og highlights fra kanalen."
      description="Et hjem for videoer med daily vlogs, TCG, Pokémon content, tech og fitness, samlet så nye seere hurtigt forstår bredden i dit univers."
      points={[
        "Highlights fra livestreams og videoer, der er værd at se igen.",
        "Content der blander collector energi med personlig creator-stil.",
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
    "Find videoer, highlights og uploads fra Morten Winther med TCG, Pokémon content, tech, fitness og live moments.",
  alternates: {
    canonical: "/vods",
  },
};