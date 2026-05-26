import Link from "next/link";
import styles from "./SectionPage.module.css";

export default function SectionPage({ eyebrow, title, description, points, ctaLabel, ctaHref }) {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.description}>{description}</p>

        <div className={styles.points}>
          {points.map((point) => (
            <div key={point} className={styles.point}>
              {point}
            </div>
          ))}
        </div>

        <Link className={styles.cta} href={ctaHref}>
          {ctaLabel}
        </Link>
      </section>
    </main>
  );
}