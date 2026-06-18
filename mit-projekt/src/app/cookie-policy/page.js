import styles from "../../components/Policy.module.css";

export const metadata = {
  title: "Cookiepolitik | Morten Winther",
  description:
    "Læs cookiepolitikken for mortenrwinther.dk og se hvordan cookies og tracking bruges på sitet.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.eyebrow}>Cookiepolitik</p>
        <h1>Cookiepolitik for mortenrwinther.dk</h1>

        <p className={styles.description}>
          Denne side beskriver, hvordan og hvorfor vi bruger cookies og lignende teknologier på mortenrwinther.dk.
          Indholdet er skrevet med henblik på overholdelse af persondatareglerne (GDPR) og danske krav. Dette er ikke
          juridisk rådgivning — kontakt venligst en advokat hvis du har brug for bindende rådgivning.
        </p>

        <h2>Hvad er cookies?</h2>
        <p>
          Cookies er små tekstfiler, der gemmes på din enhed for at forbedre brugeroplevelsen, huske præferencer og
          indsamle statistik. Nogle cookies er nødvendige for at siden fungerer, andre bruges til analyse eller
          personlige tilpasninger.
        </p>

        <h2>Hvilke typer cookies bruger vi?</h2>
        <ul>
          <li>Nødvendige cookies: Gør det muligt at navigere og bruge grundlæggende funktioner.</li>
          <li>Statistik/analytics: Indsamler anonymiseret data om besøg og brugeradfærd (fx Google Analytics).</li>
          <li>Funktionelle cookies: Husker valg og præferencer for at forbedre oplevelsen.</li>
        </ul>

        <h2>Google Analytics</h2>
        <p>
          Vi bruger Google Analytics til at indsamle anonymiseret statistik. Google behandler data på vegne af os.
          Indstillinger for tracking kan styres via cookie-banneret på siden; du kan til enhver tid trække samtykket
          tilbage via cookie-ikonet i nederste højre hjørne.
        </p>

        <h2>Behandlingsansvarlig</h2>
        <p>
          Behandlingsansvarlig for websitets persondata er Morten Winther.
          Kontakt: kontakt@mortenrwinther.dk
        </p>

        <h2>Dine rettigheder</h2>
        <p>
          Du har rettigheder i forhold til dine personoplysninger: indsigt, berigtigelse, sletning, begrænsning,
          indsigelse og dataportabilitet. Kontakt os på ovenstående email for at øve dine rettigheder.
        </p>

        <h2>Ændringer</h2>
        <p>Vi kan opdatere denne politik. Ændringer offentliggøres på denne side med en opdateret dato.</p>
      </section>
    </main>
  );
}
