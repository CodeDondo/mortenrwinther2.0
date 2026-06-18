import styles from "../../components/Policy.module.css";

export const metadata = {
  title: "Privatlivspolitik | Morten Winther",
  description:
    "Læs privatlivspolitikken for mortenrwinther.dk og forstå hvordan personoplysninger behandles.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.eyebrow}>Privatliv</p>
        <h1>Privatlivspolitik for mortenrwinther.dk</h1>

        <p className={styles.description}>
          Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger og beskytter personoplysninger i forbindelse
          med vores services. Indholdet er vejledende og udgør ikke juridisk rådgivning.
        </p>

        <h2>Dataansvarlig</h2>
        <p>
          Dataansvarlig: Morten Winther.
          Kontakt: kontakt@mortenrwinther.dk
        </p>

        <h2>Hvilke oplysninger indsamler vi?</h2>
        <p>Vi kan indsamle oplysninger som navn, email (hvis du kontakter os), tekniske data (IP, user-agent), og
        anonymiseret statistik via tredjepartsværktøjer.</p>

        <h2>Formål og grundlag</h2>
        <p>Formål kan inkludere: drift af hjemmesiden, kommunikation, analyse og forbedring af indhold. Behandlingsgrundlag
        varierer: kontrakt, samtykke (fx analytics), og legitim interesse (fx sikkerhed og platformadministration).</p>

        <h2>Tredjepart</h2>
        <p>Vi benytter tredjepartsleverandører (fx Google for analytics). Disse leverandører kan behandle data i overensstemmelse
        med deres politikker. Se deres respektive betingelser for mere information.</p>

        <h2>Lagring og sletning</h2>
        <p>Personoplysninger opbevares kun så længe det er nødvendigt til formålet eller i henhold til lovbestemte krav.
        Kontakt os hvis du ønsker sletning eller begrænsning.</p>

        <h2>Dine rettigheder</h2>
        <p>Du har ret til indsigt, berigtigelse, sletning, begrænsning, indsigelse og dataportabilitet. Send en anmodning
        til kontakt@mail eller den angivne email for at gøre brug af dine rettigheder.</p>

        <h2>Kontakt</h2>
        <p>Kontakt: kontakt@mortenrwinther.dk</p>
      </section>
    </main>
  );
}
