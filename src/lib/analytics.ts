import { track } from "@vercel/analytics";
import posthog from "posthog-js";

// Projet PostHog partage par toutes les apps de La Fabrik Numerique (VoxCut,
// VectorPop, InOneShot, VidScope...) : chaque evenement porte `app` pour
// pouvoir filtrer (voir memoire posthog-shared-project-app-tag-pitfall).
// Cle publique d'ingestion (phc_) : elle ne permet que d'envoyer, pas de lire.
const POSTHOG_KEY = "phc_yfH9dmW8EbueysuiXcL8yAam7yATkfFCfguT3e63bEcq";
// Proxy same-origin (src/routes/nyp.$.ts) : les bloqueurs de pub coupent les
// appels directs a *.posthog.com.
const POSTHOG_HOST = "/nyp";
const APP = "nyctale_site";

let initialise = false;

export function initAnalytics() {
  if (initialise || typeof window === "undefined") return;
  // Pas de mesure en local ni sur les previews Vercel : seul nyctale.fr compte.
  if (window.location.hostname !== "nyctale.fr") return;
  initialise = true;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    ui_host: "https://eu.posthog.com",
    // Sans cookie ni stockage local : la politique de confidentialite promet
    // une mesure d'audience sans cookie, donc sans bandeau de consentement.
    persistence: "memory",
    person_profiles: "identified_only",
    capture_pageview: "history_change",
    capture_pageleave: false,
    autocapture: false,
    disable_session_recording: true,
    disable_surveys: true,
    advanced_disable_decide: true,
  });
  posthog.register({ app: APP });
}

/** Evenement de conversion : PostHog, et Vercel (qui ne l'enregistre que sur
 *  le plan Pro, mais ne coute rien a garder). */
export function suivre(evenement: string, proprietes: Record<string, string> = {}) {
  track(evenement, proprietes);
  if (initialise) posthog.capture(evenement, { app: APP, ...proprietes });
}

/** Engagement automatique, sans toucher aux composants : profondeur de
 *  defilement, temps actif, sections vues et clics sortants. Se reinitialise
 *  a chaque changement de page (navigation cote client). */
export function initEngagement() {
  if (typeof window === "undefined" || window.location.hostname !== "nyctale.fr") return;
  if ((window as unknown as { __nyEng?: boolean }).__nyEng) return;
  (window as unknown as { __nyEng?: boolean }).__nyEng = true;

  let chemin = "";
  let paliers = new Set<number>();
  let sections = new Set<string>();
  let secondes = 0;
  let actifs = new Set<number>();
  let observer: IntersectionObserver | null = null;
  let dernierSigne = Date.now();
  const marquer = () => (dernierSigne = Date.now());
  for (const e of ["scroll", "mousemove", "keydown", "touchstart", "click"]) {
    window.addEventListener(e, marquer, { passive: true });
  }

  const base = () => ({ page: window.location.pathname });

  const observerSections = () => {
    observer?.disconnect();
    observer = new IntersectionObserver(
      (entrees) => {
        for (const en of entrees) {
          const id = en.target.id;
          if (en.isIntersecting && id && !sections.has(id)) {
            sections.add(id);
            suivre("section_vue", { ...base(), section: id });
          }
        }
      },
      { threshold: 0.4 },
    );
    document.querySelectorAll("section[id]").forEach((s) => observer?.observe(s));
  };

  const reinitialiser = () => {
    chemin = window.location.pathname;
    paliers = new Set();
    sections = new Set();
    secondes = 0;
    actifs = new Set();
    setTimeout(observerSections, 800);
  };
  reinitialiser();

  window.addEventListener(
    "scroll",
    () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const pct = ((window.scrollY / total) * 100) | 0;
      for (const p of [25, 50, 75, 90]) {
        if (pct >= p && !paliers.has(p)) {
          paliers.add(p);
          suivre("scroll_profondeur", { ...base(), pourcent: String(p) });
        }
      }
    },
    { passive: true },
  );

  // Temps actif : une seconde compte seulement si l'onglet est visible et
  // qu'il y a eu une interaction dans les 15 dernieres secondes.
  setInterval(() => {
    if (window.location.pathname !== chemin) reinitialiser();
    if (document.visibilityState !== "visible" || Date.now() - dernierSigne > 15000) return;
    secondes += 1;
    for (const s of [30, 60, 120]) {
      if (secondes >= s && !actifs.has(s)) {
        actifs.add(s);
        suivre("temps_actif", { ...base(), secondes: String(s) });
      }
    }
  }, 1000);

  document.addEventListener(
    "click",
    (ev) => {
      const a = (ev.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      try {
        const u = new URL(a.href, window.location.href);
        if (u.hostname && u.hostname !== window.location.hostname) {
          suivre("lien_sortant", { ...base(), hote: u.hostname });
        } else if (u.hash) {
          suivre("nav_ancre", { ...base(), ancre: u.hash.slice(1) });
        }
      } catch {
        /* lien invalide : ignore */
      }
    },
    true,
  );
}
