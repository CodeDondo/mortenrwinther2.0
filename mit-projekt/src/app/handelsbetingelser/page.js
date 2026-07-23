import styles from "../../components/Policy.module.css";

export const metadata = {
  title: "Handelsbetingelser | Morten Winther",
  description:
    "Læs handelsbetingelserne for køb af mediepakker, sponsorater og samarbejder hos Morten Winther.",
  alternates: {
    canonical: "/handelsbetingelser",
  },
};

export default function HandelsbetingelserPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.eyebrow}>Handelsbetingelser</p>
        <h1>Handelsbetingelser for mediepakker og samarbejder</h1>

        <p className={styles.description}>
          Disse handelsbetingelser gælder for køb af mediepakker, sponsorater og andre aftaler indgået med Morten
          Winther.
        </p>

        <div className={styles.callout}>
          <strong>Virksomhedsoplysninger</strong>
          <br />
          Morten Winther
          <br />
          CVR 44231662
          <br />
          Kontakt:{" "}
          <a
            className={styles.mailLink}
            href="mailto:kontakt@mortenrwinther.dk?subject=Handelsbetingelser%20og%20samarbejde"
          >
            kontakt@mortenrwinther.dk
          </a>
        </div>

        <h2>Anvendelsesområde</h2>
        <p>
          Ydelser sælges som udgangspunkt til erhvervsdrivende. Hvis en aftale indgås med en forbruger, gælder de
          ufravigelige regler i dansk og EU-ret, herunder regler om oplysning, fortrydelsesret og reklamation, i det
          omfang de finder anvendelse.
        </p>

        <h2>Tilbud og aftale</h2>
        <p>
          Et tilbud er først bindende, når det er skriftligt accepteret af begge parter, typisk via email. Vi kan
          justere leverance, timing og omfang, indtil aftalen er bekræftet.
        </p>

        <h2>Priser og moms</h2>
        <p>
          Alle priser på mediepakker og samarbejder er angivet eksklusive moms, medmindre andet er skrevet direkte i en
          aftale eller faktura. Eventuelle ekstra omkostninger aftales på forhånd.
        </p>

        <h2>Betaling</h2>
        <p>
          Betalingsfrist og betalingsmetode fremgår af den konkrete faktura eller aftale. Ved for sen betaling kan der
          pålægges renter og rykkergebyrer efter gældende regler.
        </p>

        <h2>Levering og godkendelse</h2>
        <p>
          Leveringstid aftales særskilt for hver opgave. Hvis der indgår korrekturer eller godkendelse af indhold,
          gælder de tidsfrister og ændringsønsker, som fremgår af den konkrete aftale. Ekstra arbejde, der ligger ud
          over det aftalte, faktureres særskilt.
        </p>

        <h2>Fortrydelsesret</h2>
        <p>
          Ved erhvervskøb gælder der som udgangspunkt ingen lovbestemt fortrydelsesret. Hvis der indgås aftale med en
          forbruger, kan der i visse tilfælde være 14 dages fortrydelsesret efter reglerne i forbrugeraftaleloven.
          Retten kan bortfalde helt eller delvist, hvis levering af en tjenesteydelse er påbegyndt med udtrykkeligt
          samtykke og anerkendelse af konsekvensen, eller hvis loven undtager den konkrete ydelse.
        </p>

        <h2>Annullering og ændringer</h2>
        <p>
          Hvis en aftale annulleres, efter at arbejdet er påbegyndt, kan der opkræves betaling for allerede udført
          arbejde, reserveret tid og dokumenterede udgifter. Ændringer til en bekræftet aftale kan medføre en ny pris
          eller ny leveringstid.
        </p>

        <h2>Rettigheder til indhold</h2>
        <p>
          Medmindre andet er aftalt skriftligt, bevarer Morten Winther rettighederne til produceret indhold, råfiler og
          konceptmateriale. Kunden får kun den brugsret, der udtrykkeligt er aftalt i den konkrete samarbejdsaftale.
        </p>

        <h2>Markedsføring og lovgivning</h2>
        <p>
          Sponsoreret indhold og kommercielle samarbejder skal mærkes i overensstemmelse med gældende regler og
          platformkrav. Begge parter forpligter sig til at levere korrekte oplysninger og materiale, som ikke krænker
          tredjeparts rettigheder eller bryder dansk lovgivning og relevant EU-ret.
        </p>

        <h2>Reklamation og mangler</h2>
        <p>
          Hvis en leverance ikke svarer til det aftalte, skal det meddeles hurtigst muligt og inden for rimelig tid, så
          vi kan finde en løsning. Eventuelle fejl og mangler vurderes ud fra den konkrete aftale og de leverede
          specifikationer.
        </p>

        <h2>Persondata</h2>
        <p>
          Behandling af personoplysninger sker i overensstemmelse med privatlivspolitikken på sitet. Persondata bruges
          kun, når det er nødvendigt for at håndtere henvendelser, aftaler og levering af ydelser.
        </p>

        <h2>Lovvalg og værneting</h2>
        <p>
          Aftaler er underlagt dansk ret. Eventuelle tvister forsøges løst i mindelighed først og derefter efter de
          almindelige regler om værneting.
        </p>

        <p className={styles.note}>
          Har du spørgsmål til en konkret aftale, så skriv til{' '}
          <a
            className={styles.mailLink}
            href="mailto:kontakt@mortenrwinther.dk?subject=Handelsbetingelser%20og%20samarbejde"
          >
            kontakt@mortenrwinther.dk
          </a>{" "}
          før der bestilles eller underskrives noget.
        </p>
      </section>
    </main>
  );
}