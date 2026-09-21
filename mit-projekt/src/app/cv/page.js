import styles from "./page.module.css";

const contactInfo = [
  { label: "Telefon", value: "+45 30 25 03 44" },
  { label: "E-mail", value: "Morten@mortenrwinther.dk" },
  { label: "Bopæl", value: "Nørresundby" },
  { label: "Født", value: "18. januar 1996" },
];

const languages = ["Engelsk", "Dansk", "Norsk", "Svensk"];

const qualifications = [
  "Fotografering",
  "Projektstyring",
  "Videoredigering",
  "Kassebetjening",
  "Kundeservice",
  "Serviceminded",
  "Front-end udvikling",
  "Webdesign",
];

const skillGroups = [
  {
    title: "Design & kreativ produktion",
    items: ["Figma", "Photoshop", "Webdesign", "Content Creating", "Video creating", "SoMe"],
  },
  {
    title: "Udvikling",
    items: ["React", "Next.js", "HTML", "CSS", "JavaScript", "SCSS", "Styled-components", "Node.js"],
  },
  {
    title: "Teknologi & drift",
    items: ["Cloudflare", "Vercel", "SaaS", "VS Code"],
  },
  {
    title: "Kørsel",
    items: ["Kørekort AM, B"],
  },
];

const education = [
  {
    period: "2024 - 2025",
    title: "Webudvikler",
    school: "Tech College",
    description: "Fokus på front-end udvikling, delvist back-end og webdesign.",
  },
  {
    period: "2021 - 2024",
    title: "Social- og special pædagogik",
    school: "Professionshøjskolen UCN",
    description: "Tre års pædagogisk læring uden bachelor-eksamen.",
  },
  {
    period: "2018",
    title: "Fitness instruktør",
    school: "DGI-fitness",
    description: "Basisuddannelse i fitnessinstruktion.",
  },
  {
    period: "2016",
    title: "Charter guide",
    school: "Service & Co",
    description: "Certificeret charter guide inden for service og gæstebetjening.",
  },
  {
    period: "2014 - 2016",
    title: "Almen HF",
    school: "Nørresundby Gymnasium & HF",
    description: "Valgfag inden for Matematik B, Idræt B og Musik C.",
  },
  {
    period: "2001 - 2013",
    title: "Folkeskole",
    school: "Aabybro Skole",
    description: "Almen folkeskole fra 0.-10. klasse.",
  },
];

const workExperience = [
  {
    period: "2026",
    title: "Butiksmedarbejder",
    workplace: "7-Eleven Aalborg",
    bullets: [
      "Nattearbejde med primær drift og daglig service.",
      "Rengøring, gulv- og overfladevask samt vedligeholdelse af udstyr.",
      "Kassebetjening, salg og kundevurdering.",
      "Konflikthåndtering og selvstændigt arbejde i travle perioder.",
    ],
  },
  {
    period: "2026",
    title: "Bartender",
    workplace: "The Old Irish Pub Aalborg",
    bullets: [
      "Servicebetjening, kundekontakt og ansvar for natklubdrift.",
      "Rengøring, åbnings- og lukkeopgaver samt inventarhåndtering.",
      "Servering af drikkevarer, cocktails, flasker og fadøl.",
    ],
  },
  {
    period: "2025",
    title: "Selvstændig",
    workplace: "3Dmanden",
    bullets: [
      "Front-end udvikler og ansvarlig for hele hjemmesiden i React.",
      "3D print-service med PLA og PETG-filament.",
      "SoMe videokreatør med fokus på organisk markedsføring.",
      "3D-modellering, slicing og webshopdrift.",
    ],
  },
  {
    period: "2025",
    title: "Front-end udvikler praktikant",
    workplace: "Datamarked Nørresundby",
    bullets: [
      "Front-end udvikling og optimering af eksisterende hjemmeside.",
      "Skabelse af template til 35 domæner.",
      "Udvikling i React, SCSS, JavaScript og moderne frontend-praksis.",
    ],
  },
  {
    period: "2022 - 2025",
    title: "Bartender",
    workplace: "Karaoke Bar Aalborg",
    bullets: [
      "Serviceminded kundebetjening og konflikthåndtering.",
      "Ansvar for drift, rengøring og åbning/lukning af natklub.",
      "Servering af drikkevarer samt ansvar for professionel gæstebetjening.",
    ],
  },
  {
    period: "2023 - 2024",
    title: "Selvstændig",
    workplace: "JustDondo",
    bullets: [
      "Content Creating, kampagner, livestreaming og SoMe-platforme.",
      "SoMe-videokreatør med fokus på networking og collabs.",
      "Eventbaseret indhold og samarbejder med forskellige aktører.",
    ],
  },
  {
    period: "2022 - 2023",
    title: "Natteravn",
    workplace: "Natteravn Aalborg",
    bullets: [
      "Gået ture med team for at skabe tryghed i nattelivet.",
      "Samarbejde om sikkerhed, støtte og observation i gade- og bymiljø.",
    ],
  },
  {
    period: "2022",
    title: "Frivillig",
    workplace: "Roskilde Festival / Headspace Aalborg",
    bullets: [
      "Spredt budskabet om Headspace under festivalen.",
      "Støttet til at skabe kontakt og tilgængelighed for målgruppen.",
    ],
  },
  {
    period: "2020 - 2022",
    title: "Formidler",
    workplace: "Headspace Aalborg",
    bullets: [
      "Formidlet foredrag med fokus på unge og rådgivning.",
      "Samarbejde omkring kommunikation, støtte og målgruppeservice.",
    ],
  },
  {
    period: "2020 - 2022",
    title: "Udbringer",
    workplace: "Wolt",
    bullets: [
      "Levering af mad og udførelse af service i samarbejde med kunder.",
      "Ansvarlig for effektiv, sikker og professionel levering.",
    ],
  },
  {
    period: "2020",
    title: "Lagermedarbejder",
    workplace: "Coolshop",
    bullets: [
      "Pakning og plukning af varer samt opfyldning af ordrer.",
      "Arbejde med effektiv lagerdrift og opsætning i travle perioder.",
    ],
  },
  {
    period: "2018",
    title: "Lagermedarbejder",
    workplace: "Bodyman",
    bullets: [
      "Pakning og plukning af varer samt opfyldning.",
      "Medarbejder med ansvar for hurtig og præcis lagerdrift.",
    ],
  },
  {
    period: "2012 - 2014",
    title: "Opvasker",
    workplace: "Klausen Fisk & Skaldyr",
    bullets: [
      "Startede som opvasker og blev senere brugt i flere funktioner.",
      "Vedligeholdelse af køkken, panering af fisk og øvrige småjobs.",
    ],
  },
  {
    period: "2009 - 2010",
    title: "Avisbud",
    workplace: "Aabybro",
    bullets: [
      "Distribution af aviser i lokalområdet med ansvar for levering.",
      "Arbejder i en selvstændig og struktureret hverdag.",
    ],
  },
];

const interests = [
  "Fitness | Power lift & hypertrofi",
  "Bøger | Finans & psykologi/filosofi",
  "3D printing",
  "Basketball",
  "Webdesign",
  "Content creating",
  "Video creating",
  "SoMe",
];

const birthDate = new Date(1996, 0, 18);

function calculateAge(referenceDate = new Date()) {
  let age = referenceDate.getFullYear() - birthDate.getFullYear();
  const monthDelta = referenceDate.getMonth() - birthDate.getMonth();
  const dayDelta = referenceDate.getDate() - birthDate.getDate();

  if (monthDelta < 0 || (monthDelta === 0 && dayDelta < 0)) {
    age -= 1;
  }

  return age;
}

export default function CvPage() {
  const age = calculateAge();

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroMain}>
          <p className={styles.kicker}>CV</p>
          <h1>Morten R. Winther</h1>
          <p className={styles.subtitle}>Content creator • Webudvikler • Serviceorienteret professionel</p>
        </div>

        <div className={styles.heroMeta}>
          <p>Mobil</p>
          <a href="tel:+4530250344">+45 30 25 03 44</a>
          <p>E-mail</p>
          <a href="mailto:morten@mortenrwinther.dk">Morten@mortenrwinther.dk</a>
        </div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <section className={styles.card}>
            <h2>Kontakt</h2>
            <ul className={styles.list}>
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.card}>
            <h2>Sprog</h2>
            <ul className={styles.pillList}>
              {languages.map((language) => (
                <li key={language} className={styles.pill}>{language}</li>
              ))}
            </ul>
          </section>

          <section className={styles.card}>
            <h2>Kvalifikationer</h2>
            <ul className={styles.pillList}>
              {qualifications.map((qualification) => (
                <li key={qualification} className={styles.pill}>{qualification}</li>
              ))}
            </ul>
          </section>

          <section className={styles.card}>
            <h2>Interesser</h2>
            <ul className={styles.pillList}>
              {interests.map((interest) => (
                <li key={interest} className={styles.pill}>{interest}</li>
              ))}
            </ul>
          </section>
        </aside>

        <div className={styles.mainContent}>
          <section className={styles.card}>
            <h2>Profil</h2>
            <p className={styles.profileText}>
              Jeg er {age} år, bosat i Nørresundby med min lille familie. Jeg er uddannet front-end developer, men 8 timer
              på kontor er ikke lige mig; jeg kan godt lide, når det er lidt hybrid. Jeg elsker at være fysisk aktiv, og
              det ser jeg også gerne i min hverdag samt i mit arbejde.
            </p>
            <p className={styles.profileText}>
              Derudover er jeg en haj i servicebranchen, især inden for produktion, salg og lager. Jeg kombinerer en
              stærk kundeforståelse med evnen til at tage ansvar, skabe flow og leve op til høje standarder i både
              service og drift.
            </p>
          </section>

          <section className={styles.card}>
            <h2>Kompetencer</h2>
            <div className={styles.skillGrid}>
              {skillGroups.map((group) => (
                <div key={group.title} className={styles.skillGroup}>
                  <h3>{group.title}</h3>
                  <ul className={styles.skillList}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.card}>
            <h2>Uddannelseshistorik</h2>
            <div className={styles.timeline}>
              {education.map((item) => (
                <article key={`${item.period}-${item.title}`} className={styles.timelineItem}>
                  <span className={styles.period}>{item.period}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className={styles.school}>{item.school}</p>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.card}>
            <h2>Erhvervserfaring</h2>
            <div className={styles.timeline}>
              {workExperience.map((item) => (
                <article key={`${item.period}-${item.title}-${item.workplace}`} className={styles.timelineItem}>
                  <span className={styles.period}>{item.period}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className={styles.school}>{item.workplace}</p>
                    <ul className={styles.bulletList}>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export const dynamic = "force-dynamic";

export const metadata = {
  title: "CV | Morten Winther",
  description:
    "CV for Morten Winther med erfaring inden for service, webudvikling, content creation og samarbejder med brands og virksomheder.",
  alternates: {
    canonical: "/cv",
  },
};
