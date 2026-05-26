"use client";
import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

const COOKIE_NAME = "cookie_consent";
const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID;

function readCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return decodeURIComponent(match[2]);
  return null;
}

function writeCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function removeCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
}

function injectGtag() {
  if (!GTAG_ID) {
    // GTAG not configured; do nothing.
    if (typeof window !== "undefined") console.warn("NEXT_PUBLIC_GTAG_ID is not set - skipping gtag injection");
    return;
  }
  if (window && window.__gtag_loaded) return;
  const s = document.createElement("script");
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
  s.async = true;
  s.dataset.gtag = "1";
  document.head.appendChild(s);

  const inline = document.createElement("script");
  inline.dataset.gtagInit = "1";
  inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GTAG_ID}', { anonymize_ip: true });`;
  document.head.appendChild(inline);
  if (window) window.__gtag_loaded = true;
}

function removeGtag() {
  const s = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
  if (s) s.remove();
  const inline = document.querySelector('script[data-gtag-init], script[data-gtaginit], script[data-gtag]');
  if (inline) inline.remove();
  try {
    if (window) {
      delete window.gtag;
      delete window.dataLayer;
      delete window.__gtag_loaded;
    }
  } catch (e) {}
}

export default function CookieBanner() {
  const [consent, setConsent] = useState(() => {
    try {
      if (typeof document !== "undefined") {
        return readCookie(COOKIE_NAME) || localStorage.getItem(COOKIE_NAME) || null;
      }
    } catch (e) {
      return null;
    }
    return null;
  });

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (consent === "granted") {
      injectGtag();
    } else if (consent === "denied") {
      removeGtag();
    }
  }, [consent]);

  function acceptAll() {
    writeCookie(COOKIE_NAME, "granted");
    localStorage.setItem(COOKIE_NAME, "granted");
    setConsent("granted");
    setOpen(false);
  }

  function declineAll() {
    writeCookie(COOKIE_NAME, "denied");
    localStorage.setItem(COOKIE_NAME, "denied");
    setConsent("denied");
    setOpen(false);
  }

  function revoke() {
    removeCookie(COOKIE_NAME);
    localStorage.removeItem(COOKIE_NAME);
    removeGtag();
    setConsent(null);
    setOpen(true);
  }

  // Avoid rendering any UI on server to prevent hydration mismatches.
  if (!mounted) return null;

  if (!consent) {
    return (
      <div className={styles.banner} role="dialog" aria-live="polite">
        <div className={styles.inner}>
          <div className={styles.copy}>
            <p className={styles.title}>Vi bruger cookies</p>
            <p className={styles.desc}>
              Vi bruger cookies til at forbedre oplevelsen og til statistik via Google Analytics. Du kan give eller trække
              dit samtykke tilbage når som helst.
            </p>
          </div>

          <div className={styles.actions}>
            <button className={styles.ghost} onClick={declineAll}>
              Afvis
            </button>
            <button className={styles.primary} onClick={acceptAll}>
              Accepter alle
            </button>
          </div>
        </div>
        <button className={styles.manage} onClick={() => setOpen(true)} aria-label="Cookie indstillinger">
          Indstillinger
        </button>
      </div>
    );
  }

  return (
    <>
      <div className={styles.pill} onClick={() => setOpen(true)} role="button" tabIndex={0}>
        Cookie
      </div>

      {open && (
        <div className={styles.modal} role="dialog" aria-modal="true">
          <div className={styles.modalInner}>
            <h3>Cookieindstillinger</h3>
            <p>Her kan du administrere dit samtykke til analytics-cookies.</p>

            <div className={styles.modalActions}>
              <button className={styles.ghost} onClick={declineAll}>
                Afvis statistik
              </button>
              <button className={styles.primary} onClick={acceptAll}>
                Accepter statistik
              </button>
              <button className={styles.link} onClick={revoke}>
                Fjern samtykke helt
              </button>
            </div>

            <button className={styles.close} onClick={() => setOpen(false)} aria-label="Luk">
              Luk
            </button>
          </div>
        </div>
      )}
    </>
  );
}
