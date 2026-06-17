"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./SiteNav.module.css";

const navItems = [
  { label: "Forside", href: "/" },
  { label: "Northway GO", href: "/northway-go" },
  { label: "Mediepakker", href: "/mediepakker" },
  { label: "Setup", href: "/setup" },
  { label: "Vods", href: "/vods" },
  { label: "Om mig", href: "/om-mig" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label="Gå til forsiden">
          <span className={styles.brandMark} aria-hidden="true">
            <Image src="/logo.png" alt="" fill sizes="42px" className={styles.brandLogo} priority />
          </span>
          <span className={styles.brandCopy}>
            <strong>Morten Winther</strong>
            <span>TCG, Pokémon GO, YouTube & Twitch</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.burger}
          aria-label={menuOpen ? "Luk navigation" : "Åbn navigation"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-navigation" className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}