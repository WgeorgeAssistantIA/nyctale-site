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
