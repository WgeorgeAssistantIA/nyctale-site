import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertOctagon,
  ShieldAlert,
  Flame,
  HardDrive,
  Cpu,
  CheckCircle2,
  Download,
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  FileText,
  Search,
  Clock,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import { MICROSOFT_STORE_ID } from "@/lib/download";

type Lang = "fr" | "en";

export const Route = createFileRoute("/diagnostic-crash-pc")({
  head: () => ({
    meta: [
      { title: "Diagnostic Crash PC & Kernel-Power 41 — Nyctale" },
      {
        name: "description",
        content:
          "Identifiez la vraie cause des redémarrages brusques (Kernel-Power 41, écran bleu, disque lent) sur Windows en 19 secondes, en français sans jargon.",
      },
      {
        property: "og:title",
        content: "Diagnostic Crash PC & Kernel-Power 41 — Nyctale",
      },
      {
        property: "og:description",
        content:
          "Identifiez la vraie cause des redémarrages brusques (Kernel-Power 41, écran bleu, disque lent) sur Windows en 19 secondes, en français sans jargon.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://nyctale.fr/diagnostic-crash-pc",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://nyctale.fr/diagnostic-crash-pc",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Nyctale", item: "https://nyctale.fr/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Diagnostic Crash PC & Kernel-Power 41",
              item: "https://nyctale.fr/diagnostic-crash-pc",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Diagnostic Crash PC & Écran Bleu Kernel-Power 41",
          description:
            "Logiciel de diagnostic crash PC, écran bleu et redémarrages inattendus Kernel-Power 41 sur Windows en français sans jargon.",
          url: "https://nyctale.fr/diagnostic-crash-pc",
          isPartOf: { "@type": "WebSite", name: "Nyctale", url: "https://nyctale.fr/" },
          about: { "@type": "SoftwareApplication", name: "Nyctale" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Qu'est-ce que l'erreur critique Kernel-Power 41 dans Windows ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "L'événement Kernel-Power 41 (BugCheckCode) signifie que Windows a redémarré sans s'être arrêté proprement au préalable. Cela survient lorsque le PC subit une coupure d'alimentation soudaine, un appui prolongé sur le bouton Marche/Arrêt, une surchauffe extrême provoquant une coupure de sécurité, ou un crash matériel sévère.",
              },
            },
            {
              "@type": "Question",
              name: "Quelle est la différence entre les événements 41, 6008 et 1001 ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "L'événement 41 signale la coupure brute sans avertissement. L'événement 6008 enregistre que l'arrêt précédent était inattendu. L'événement 1001 (BugCheck) correspond à un écran bleu (BSOD), consignant le code d'arrêt précis et l'écriture d'un fichier mémoire Minidump.",
              },
            },
            {
              "@type": "Question",
              name: "Pourquoi utiliser Nyctale plutôt que l'Observateur d'événements Windows ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "L'Observateur d'événements Windows contient des milliers de lignes de logs cryptiques et d'alertes anodines sans explication. Nyctale extrait en 19 secondes uniquement les incidents réels des 30 derniers jours, croise les codes critiques avec la santé physique du disque (SMART) et la charge thermique, et vous donne un verdict en français clair.",
              },
            },
            {
              "@type": "Question",
              name: "Nyctale envoie-t-il mes données ou mes journaux système sur Internet ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Non. Nyctale est 100 % local et respecte votre vie privée. L'analyse s'exécute entièrement sur votre processeur, sans aucune télémétrie ni envoi de fichiers sur un serveur distant.",
              },
            },
            {
              "@type": "Question",
              name: "Que faire si Nyctale détecte une défaillance de disque dur ou SSD ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Si l'état HealthStatus de votre disque signale une dégradation matérielle (secteurs défectueux), la priorité absolue est de sauvegarder immédiatement vos documents importants sur support externe ou cloud avant toute tentative de réparation logicielle.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: DiagnosticCrashPc,
});

const STORE_URL = `https://apps.microsoft.com/detail/${MICROSOFT_STORE_ID}?mode=direct`;
const DOWNLOAD_EXE = "https://github.com/WgeorgeAssistantIA/nyctale-downloads/releases/download/v1.0.4/Nyctale-Setup-1.0.4.exe";

function DiagnosticCrashPc() {
  const [lang, setLang] = useState<Lang>("fr");

  const t = {
    fr: {
      badge: "Diagnostic Système & Événements Windows",
      h1: "Logiciel Diagnostic Crash PC et Écran Bleu Kernel-Power 41 sans Jargon",
      lead: "Identifiez la vraie cause des redémarrages brusques (Kernel-Power 41, écran bleu 1001, arrêt inattendu 6008, disque défaillant) sur Windows 10 et 11 en 19 secondes, en français sans jargon et 100% localement sans télémétrie.",
      ctaStore: "Télécharger Nyctale sur le Microsoft Store",
      ctaExe: "Installateur direct Windows (.exe)",
      reassurance: "Diagnostic gratuit · Aucun compte requis · 100% Hors ligne",
      codesTitle: "Les 3 codes critiques de plantage analysés par Nyctale",
      codesIntro:
        "Lorsque votre ordinateur s'éteint tout seul, redémarre en plein jeu ou fige sur un écran bleu (BSOD), Windows consigne l'incident dans ses journaux système. Nyctale décode instantanément ces 3 événements :",
      codes: [
        {
          code: "Événement 41",
          source: "Kernel-Power",
          color: "rose",
          titre: "Coupure brutale d'alimentation ou surchauffe",
          desc: "Le système a redémarré sans s'arrêter proprement au préalable. Ce crash se produit lors d'une coupure électrique, d'un bloc d'alimentation défaillant, d'un faux contact, ou d'une mise en sécurité thermique immédiate.",
        },
        {
          code: "Événement 6008",
          source: "EventLog",
          color: "amber",
          titre: "Arrêt inattendu du système",
          desc: "Windows constate au démarrage suivant que la session précédente s'est terminée de manière anormale. Nyctale comptabilise la fréquence de ces arrêts sur les 30 derniers jours pour distinguer l'incident isolé de la panne matérielle répétée.",
        },
        {
          code: "Événement 1001",
          source: "BugCheck (BSOD)",
          color: "blue",
          titre: "Écran bleu avec fichier Minidump",
          desc: "Un écran bleu de la mort a forcé Windows à s'arrêter pour protéger vos données. L'événement consigne le code d'arrêt STOP (ex: KERNEL_SECURITY_CHECK_FAILURE, IRQL_NOT_LESS_OR_EQUAL) et l'adresse mémoire du pilote en cause.",
        },
      ],
      stepsTitle: "Comment Nyctale diagnostique votre PC en 19 secondes",
      steps: [
        {
          num: "01",
          titre: "Lecture de l'historique d'incidents (41, 6008, 1001)",
          desc: "Nyctale interroge le journal système Windows pour identifier le nombre exact de plantages et d'écrans bleus survenus au cours du dernier mois.",
        },
        {
          num: "02",
          titre: "Contrôle de santé du disque physique (SMART)",
          desc: "Exécution de Get-PhysicalDisk HealthStatus pour vérifier si vos SSD ou disques durs rencontrent des défaillances de lecture ou des secteurs réalloués.",
        },
        {
          num: "03",
          titre: "Mesure de la charge thermique et des ressources",
          desc: "Vérification des alertes de régulation thermique du processeur (throttling), de la saturation de la mémoire vive (RAM) et des programmes au démarrage.",
        },
        {
          num: "04",
          titre: "Verdict en français clair et conseils ciblés",
          desc: "Traduction immédiate sans jargon technique : vous savez enfin s'il s'agit d'un problème d'alimentation, d'un disque en fin de vie ou d'un simple pilote à réinstaller.",
        },
      ],
      compareTitle: "Comparatif : Nyctale vs Observateur d'événements vs WhoCrashed vs BlueScreenView",
      compareHeaders: [
        "Fonctionnalité",
        "Nyctale",
        "Observateur d'événements",
        "WhoCrashed",
        "BlueScreenView",
      ],
      compareRows: [
        [
          "Explications en français sans jargon",
          "Oui (Explications claires)",
          "Non (Codes hexadécimaux bruts)",
          "Anglais technique",
          "Anglais technique brut",
        ],
        [
          "Diagnostic complet en 19 secondes",
          "Oui (1 clic automatique)",
          "Non (Fouille manuelle longue)",
          "Analyse minidump uniquement",
          "Tableau brut de dumps",
        ],
        [
          "Santé physique SSD / Disque dur",
          "Oui (Get-PhysicalDisk SMART)",
          "Non intégré",
          "Non",
          "Non",
        ],
        [
          "Détection Kernel-Power 41 & coupures",
          "Oui (Synthèse sur 30 jours)",
          "Oui (Noyé dans des milliers de logs)",
          "Non (BSOD uniquement)",
          "Non (BSOD uniquement)",
        ],
        [
          "Respect de la vie privée & Zéro télémétrie",
          "100% Local (Sans envoi)",
          "Local (Avec télémétrie Windows)",
          "Local",
          "Local",
        ],
      ],
      faqTitle: "Foire Aux Questions sur le Diagnostic Crash PC",
      guidesTitle: "Guides dépannage et articles recommandés",
      proCtaTitle: "Vous êtes dépanneur ou technicien informatique ?",
      proCtaDesc: "Découvrez Nyctale Pro : version portable sur clé USB sans installation avec génération de rapports d'intervention PDF personnalisés à votre nom pour vos clients.",
      proCtaBtn: "Découvrir Nyctale Pro pour les techniciens →",
    },
    en: {
      badge: "System Diagnostics & Windows Event Logs",
      h1: "Windows PC Crash Analyzer & Kernel-Power 41 Plain English Diagnostic",
      lead: "Pinpoint the real root cause behind sudden reboots (Kernel-Power 41, blue screen 1001, unexpected shutdown 6008, failing disk) on Windows 10 and 11 in 19 seconds, in plain language and 100% offline without telemetry.",
      ctaStore: "Get Nyctale from Microsoft Store",
      ctaExe: "Direct Windows installer (.exe)",
      reassurance: "Free diagnostic · No account required · 100% Offline",
      codesTitle: "The 3 critical Windows crash events decoded by Nyctale",
      codesIntro:
        "When your PC suddenly restarts, blacks out during gaming, or freezes on a Blue Screen of Death (BSOD), Windows records event logs. Nyctale immediately extracts and translates these 3 vital indicators:",
      codes: [
        {
          code: "Event 41",
          source: "Kernel-Power",
          color: "rose",
          titre: "Sudden power cut or thermal cutoff",
          desc: "The system rebooted without cleanly shutting down first. This occurs when power fails, a PSU is faulty, a power switch is forced, or thermal protection triggers an instant shutdown.",
        },
        {
          code: "Event 6008",
          source: "EventLog",
          color: "amber",
          titre: "Previous shutdown was unexpected",
          desc: "Windows discovers on boot that the prior session did not close orderly. Nyctale analyzes failure frequency over the last 30 days to separate rare software glitches from repetitive hardware faults.",
        },
        {
          code: "Event 1001",
          source: "BugCheck (BSOD)",
          color: "blue",
          titre: "Blue Screen crash dump saved",
          desc: "A fatal Blue Screen error forced Windows to halt to prevent data corruption. The log records the STOP code (e.g., KERNEL_SECURITY_CHECK_FAILURE) and memory dump references.",
        },
      ],
      stepsTitle: "How Nyctale diagnoses your computer in 19 seconds",
      steps: [
        {
          num: "01",
          titre: "Crash history scan (41, 6008, 1001)",
          desc: "Nyctale scans Windows Event Logs to tally unexpected shutdowns and blue screens over the past 30 days.",
        },
        {
          num: "02",
          titre: "Physical disk health check (SMART)",
          desc: "Queries Get-PhysicalDisk HealthStatus to verify whether your NVMe SSD or hard drives have bad sectors or read degradation.",
        },
        {
          num: "03",
          titre: "Thermal throttling and memory load",
          desc: "Monitors CPU thermal regulation warnings, high RAM consumption, and heavy startup apps.",
        },
        {
          num: "04",
          titre: "Plain English verdict & prioritized fix plan",
          desc: "Provides clear explanations without cryptic jargon: know if you're dealing with failing power hardware, a dying disk, or a faulty GPU driver.",
        },
      ],
      compareTitle: "Comparison: Nyctale vs Event Viewer vs WhoCrashed vs BlueScreenView",
      compareHeaders: [
        "Feature",
        "Nyctale",
        "Windows Event Viewer",
        "WhoCrashed",
        "BlueScreenView",
      ],
      compareRows: [
        [
          "Plain language explanations",
          "Yes (Clear & Human)",
          "No (Raw hex codes)",
          "Technical English",
          "Raw technical dump data",
        ],
        [
          "Full diagnostic in 19 seconds",
          "Yes (1-click automated)",
          "No (Slow manual log hunt)",
          "Minidump analysis only",
          "Minidump table only",
        ],
        [
          "Physical SSD / HDD health test",
          "Yes (SMART HealthStatus)",
          "Not integrated",
          "No",
          "No",
        ],
        [
          "Kernel-Power 41 & power drop detection",
          "Yes (30-day overview)",
          "Yes (Buried under noisy logs)",
          "No (BSOD crashes only)",
          "No (BSOD crashes only)",
        ],
        [
          "Privacy & Zero Telemetry",
          "100% Local (No cloud)",
          "Local (With Windows telemetry)",
          "Local",
          "Local",
        ],
      ],
      faqTitle: "PC Crash Diagnostics FAQ",
      guidesTitle: "Troubleshooting guides & recommended articles",
      proCtaTitle: "Are you an IT technician or computer repair shop?",
      proCtaDesc: "Discover Nyctale Pro: run directly from a USB stick without installation and generate branded before/after PDF diagnostic reports for your clients.",
      proCtaBtn: "Explore Nyctale Pro for Technicians →",
    },
  }[lang];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/nyctale_logo.png" alt="Nyctale" className="h-8 w-8 rounded-lg" />
            <span className="text-lg font-bold tracking-tight">Nyctale</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang("fr")}
              className={`rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition ${
                lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        {/* Eyebrow & H1 */}
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-500">
          <AlertOctagon className="h-3.5 w-3.5" />
          <span>{t.badge}</span>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {t.h1}
        </h1>

        <p className="mt-4 text-base text-muted-foreground leading-relaxed sm:text-lg">
          {t.lead}
        </p>

        {/* CTA Hero Card */}
        <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center sm:p-8">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90"
          >
            <Download className="h-5 w-5" />
            <span>{t.ctaStore}</span>
          </a>
          <div className="mt-3">
            <a
              href={DOWNLOAD_EXE}
              className="text-xs text-muted-foreground hover:text-foreground transition underline underline-offset-4"
            >
              {t.ctaExe}
            </a>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {t.reassurance}
          </p>
        </div>

        {/* SECTION 1 : LES 3 CODES D'ERREUR */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">{t.codesTitle}</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.codesIntro}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {t.codes.map((c, i) => (
              <div key={i} className="rounded-xl border border-border bg-card/60 p-5 shadow-sm">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-primary">{c.code}</span>
                  <span className="text-muted-foreground">{c.source}</span>
                </div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{c.titre}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 : ÉTAPES DU DIAGNOSTIC */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">{t.stepsTitle}</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.steps.map((st, i) => (
              <div key={i} className="rounded-xl border border-border bg-card/40 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-xs font-bold text-primary">
                    {st.num}
                  </span>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{st.titre}</h3>
                </div>
                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed sm:text-sm pl-11">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 : TABLEAU COMPARATIF */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">{t.compareTitle}</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-card/70">
                <tr>
                  {t.compareHeaders.map((h, i) => (
                    <th key={i} className="px-3.5 py-2.5 font-semibold text-xs sm:text-sm">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.compareRows.map((row, i) => (
                  <tr key={i} className="border-t border-border/60">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-3.5 py-2.5 text-xs sm:text-sm ${
                          j === 0
                            ? "font-medium text-foreground"
                            : j === 1
                            ? "text-primary font-semibold"
                            : "text-muted-foreground"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 4 : PRO BANNER */}
        <section className="mt-14 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <ShieldCheck className="h-4 w-4" />
            <span>Édition Professionnelle</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
            {t.proCtaTitle}
          </h3>
          <p className="mt-2 text-xs text-muted-foreground sm:text-sm leading-relaxed">
            {t.proCtaDesc}
          </p>
          <div className="mt-5">
            <Link
              to="/pro"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-md shadow-primary/20"
            >
              <span>{t.proCtaBtn}</span>
            </Link>
          </div>
        </section>

        {/* SECTION 5 : FAQ */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">{t.faqTitle}</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-border bg-card/40 p-5">
              <h3 className="font-semibold text-foreground">
                {lang === "fr"
                  ? "Qu'est-ce que l'erreur critique Kernel-Power 41 dans Windows ?"
                  : "What is the critical Kernel-Power 41 event in Windows?"}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                {lang === "fr"
                  ? "L'événement Kernel-Power 41 signifie que Windows a redémarré sans s'être arrêté proprement au préalable. Cela survient lors d'une coupure d'alimentation soudaine, d'un bloc d'alimentation défectueux, d'un appui prolongé sur le bouton Marche/Arrêt, ou d'une surchauffe extrême déclenchant la sécurité thermique de la carte mère."
                  : "Kernel-Power event 41 indicates the system rebooted without cleanly shutting down first. This is triggered by power cuts, faulty power supplies, holding down the power button, or extreme thermal shutoffs."}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/40 p-5">
              <h3 className="font-semibold text-foreground">
                {lang === "fr"
                  ? "Quelle est la différence entre les événements 41, 6008 et 1001 ?"
                  : "What is the difference between events 41, 6008, and 1001?"}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                {lang === "fr"
                  ? "L'événement 41 signale la coupure brute sans avertissement. L'événement 6008 enregistre au démarrage suivant que l'arrêt précédent était inattendu. L'événement 1001 (BugCheck) correspond à un écran bleu (BSOD), avec le code d'arrêt précis et l'écriture d'un fichier Minidump."
                  : "Event 41 notes an abrupt power drop. Event 6008 flags that the previous shutdown was dirty. Event 1001 (BugCheck) marks a BSOD Blue Screen with a specific stop code and minidump writing."}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/40 p-5">
              <h3 className="font-semibold text-foreground">
                {lang === "fr"
                  ? "Pourquoi utiliser Nyctale plutôt que l'Observateur d'événements ?"
                  : "Why use Nyctale instead of Windows Event Viewer?"}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                {lang === "fr"
                  ? "L'Observateur d'événements Windows contient des milliers de lignes de logs cryptiques et d'alertes anodines sans explication. Nyctale extrait en 19 secondes uniquement les incidents réels des 30 derniers jours, croise les codes critiques avec la santé physique du disque (SMART) et la charge thermique, et vous donne un verdict en français clair."
                  : "Event Viewer floods you with thousands of noisy, cryptic warnings. Nyctale analyzes real crash incidents over the last 30 days in 19 seconds, correlates them with disk health and heat, and explains the root cause in plain English."}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/40 p-5">
              <h3 className="font-semibold text-foreground">
                {lang === "fr"
                  ? "Nyctale envoie-t-il mes données ou mes journaux système sur Internet ?"
                  : "Does Nyctale upload my data or logs online?"}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                {lang === "fr"
                  ? "Non. Nyctale est 100 % local et respecte votre vie privée. L'analyse s'exécute entièrement sur votre processeur, sans aucune télémétrie ni envoi de fichiers sur un serveur distant."
                  : "No. Nyctale is 100% offline and respects your privacy. Analysis runs entirely on your local CPU with zero telemetry and zero server uploads."}
              </p>
            </div>
          </div>
        </section>

        {/* Guides de maillage interne */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">{t.guidesTitle}</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="/blog/ecran-bleu-windows-11"
                className="text-primary hover:underline underline-offset-4 text-sm"
              >
                {lang === "fr"
                  ? "Écran bleu sous Windows 11 : comment identifier la cause et le réparer"
                  : "Windows 11 Blue Screen: How to identify the cause and fix it"}
              </Link>
            </li>
            <li>
              <Link
                to="/blog/disque-dur-va-lacher-signes"
                className="text-primary hover:underline underline-offset-4 text-sm"
              >
                {lang === "fr"
                  ? "Disque dur ou SSD qui va lâcher : les 7 signes avant-coureurs"
                  : "Hard drive or SSD about to fail: 7 warning signs"}
              </Link>
            </li>
            <li>
              <Link
                to="/blog/meilleurs-logiciels-gratuits-diagnostic-pc"
                className="text-primary hover:underline underline-offset-4 text-sm"
              >
                {lang === "fr"
                  ? "Les meilleurs logiciels gratuits de diagnostic PC (comparatif)"
                  : "Best free PC diagnostic software compared"}
              </Link>
            </li>
          </ul>
        </section>

        {/* Footer Link */}
        <div className="mt-14 border-t border-border/50 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {lang === "fr" ? "Retour à l'accueil Nyctale" : "Back to Nyctale Home"}
          </Link>
        </div>
      </div>
    </main>
  );
}
