import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Nyctale" },
      {
        name: "description",
        content:
          "Comment Nyctale traite vos données. Le diagnostic fonctionne 100% en local — les informations sur votre ordinateur ne quittent jamais votre machine.",
      },
      { property: "og:title", content: "Politique de confidentialité — Nyctale" },
    ],
    links: [{ rel: "canonical", href: "https://nyctale.fr/privacy" }],
  }),
  component: Privacy,
});

type Lang = "en" | "fr";

type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };
type Section = { h: string; blocks: Block[] };

const CONTACT = "contact@nyctale.fr";

const pp: Record<Lang, { title: string; updated: string; back: string; intro: string; sections: Section[] }> = {
  fr: {
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : 8 août 2026",
    back: "Retour à l'accueil",
    intro:
      "Nyctale est un logiciel de diagnostic PC conçu pour fonctionner intégralement en local sur votre ordinateur. Le respect de votre vie privée est au cœur de sa conception. Cette politique explique quelles données sont — ou ne sont pas — traitées lorsque vous utilisez l'application Nyctale et le site nyctale.fr.",
    sections: [
      {
        h: "1. Éditeur et responsable du traitement",
        blocks: [
          {
            type: "p",
            text: "Le site nyctale.fr et le logiciel Nyctale sont édités par William GEORGE, entrepreneur individuel exerçant sous le nom commercial « Nyctale » (SIRET : 518 251 897 00048 — adresse : 18 rue de l'Oiseau Blanc, 42155 Saint-Léger-sur-Roanne), ci-après « nous » ou « Nyctale ».",
          },
          {
            type: "p",
            text: `Pour toute question relative à vos données ou à cette politique, vous pouvez nous contacter à : ${CONTACT}.`,
          },
        ],
      },
      {
        h: "2. Le principe : un traitement 100 % local",
        blocks: [
          {
            type: "p",
            text: "Nyctale lit les informations techniques de votre ordinateur (processeur, mémoire, disque, programmes en cours, historique d'arrêts) directement sur votre machine, pour produire son diagnostic. Ces informations ne sont jamais envoyées vers un serveur, un cloud ou un tiers : elles ne quittent pas votre ordinateur.",
          },
          {
            type: "ul",
            items: [
              "Aucune information de diagnostic n'est téléversée ni stockée en ligne.",
              "Aucune mesure d'audience (analytics), aucun mouchard ni télémétrie n'est intégré à l'application.",
              "L'application fonctionne entièrement hors connexion : elle n'a besoin d'internet à aucun moment pour établir un diagnostic.",
            ],
          },
          {
            type: "p",
            text: "L'application enregistre quelques fichiers techniques localement dans le dossier de données utilisateur de votre ordinateur (sous Windows : %APPDATA%\\Nyctale) — clé de licence, compteur d'usage, préférences. Ces fichiers restent sur votre machine et ne nous sont jamais transmis.",
          },
        ],
      },
      {
        h: "3. Licences et achats",
        blocks: [
          {
            type: "p",
            text: "Le diagnostic complet est gratuit et illimité : aucune donnée de paiement n'est nécessaire pour l'utiliser. Les fonctionnalités payantes optionnelles (réparation, surveillance, palier Pro) sont achetées comme produits intégrés depuis le Microsoft Store.",
          },
          {
            type: "p",
            text: "Ces achats sont entièrement gérés par Microsoft : la transaction, vos informations de paiement et de facturation sont traitées par Microsoft, conformément à sa propre politique de confidentialité. Nous n'avons jamais accès à votre numéro de carte bancaire.",
          },
          {
            type: "p",
            text: "L'application enregistre localement, dans le dossier de données utilisateur de votre ordinateur, l'état de votre licence (palier actif, compteur d'usage). Ces informations restent sur votre machine et ne nous sont jamais transmises.",
          },
        ],
      },
      {
        h: "4. Le site nyctale.fr",
        blocks: [
          {
            type: "p",
            text: "Le site est une vitrine de présentation. Nous utilisons Vercel Web Analytics, un outil de mesure d'audience respectueux de la vie privée et sans cookie, qui comptabilise de manière agrégée et anonyme la fréquentation et les téléchargements (pages vues, pays, type d'appareil) sans déposer de cookie ni collecter de donnée permettant de vous identifier. Le site n'utilise aucun cookie publicitaire ni traceur tiers.",
          },
          {
            type: "p",
            text: "Le site est hébergé par Vercel Inc. et le nom de domaine est géré par OVH. Comme tout hébergeur, Vercel peut consigner dans ses journaux techniques des données de connexion standard (par exemple l'adresse IP) à des fins de sécurité et de bon fonctionnement du service.",
          },
        ],
      },
      {
        h: "5. Cookies",
        blocks: [
          {
            type: "p",
            text: "Le site n'utilise aucun cookie de suivi, publicitaire ou de mesure d'audience : notre outil de statistiques (Vercel Web Analytics) fonctionne sans cookie. Aucun consentement aux cookies n'est donc requis pour le consulter.",
          },
        ],
      },
      {
        h: "6. Vos droits",
        blocks: [
          {
            type: "p",
            text: "Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité concernant vos données personnelles.",
          },
          {
            type: "p",
            text: `Pour exercer ces droits, écrivez-nous à ${CONTACT}. Pour les données traitées dans le cadre d'un achat via le Microsoft Store, vous pouvez également vous adresser directement à Microsoft. Vous avez par ailleurs le droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).`,
          },
        ],
      },
      {
        h: "7. Conservation des données",
        blocks: [
          {
            type: "p",
            text: "Nous ne tenons pas de base de données d'utilisateurs. Les données liées à un achat effectué via le Microsoft Store sont conservées par Microsoft, conformément à sa propre politique.",
          },
        ],
      },
      {
        h: "8. Transferts hors Union européenne",
        blocks: [
          {
            type: "p",
            text: "Certains de nos prestataires (Microsoft, Vercel) peuvent être établis en dehors de l'Union européenne, notamment aux États-Unis. Le cas échéant, ces transferts sont encadrés par les garanties prévues par le RGPD (clauses contractuelles types ou mécanismes équivalents).",
          },
        ],
      },
      {
        h: "9. Mineurs",
        blocks: [
          {
            type: "p",
            text: "Nyctale n'est pas destiné aux personnes de moins de 15 ans et nous ne collectons pas sciemment de données les concernant.",
          },
        ],
      },
      {
        h: "10. Modifications de cette politique",
        blocks: [
          {
            type: "p",
            text: "Cette politique peut être mise à jour pour refléter une évolution du produit ou de la réglementation. La date de dernière mise à jour figure en haut de cette page.",
          },
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: August 8, 2026",
    back: "Back to home",
    intro:
      "Nyctale is a PDF mail merge tool designed to run entirely locally on your computer. Respect for your privacy is built into its design. This policy explains what data is — and is not — processed when you use the Nyctale application and the nyctale.fr website.",
    sections: [
      {
        h: "1. Publisher and data controller",
        blocks: [
          {
            type: "p",
            text: "The nyctale.fr website and the Nyctale software are published by William GEORGE, a sole trader operating under the commercial name “Nyctale” (business registration (SIRET): 518 251 897 00048 — address: 18 rue de l'Oiseau Blanc, 42155 Saint-Léger-sur-Roanne, France), referred to below as “we” or “Nyctale”.",
          },
          {
            type: "p",
            text: `For any question regarding your data or this policy, you can contact us at: ${CONTACT}.`,
          },
        ],
      },
      {
        h: "2. The core principle: 100% local processing",
        blocks: [
          {
            type: "p",
            text: "Nyctale reads your computer's technical information (processor, memory, disk, running programs, shutdown history) directly on your machine to produce its diagnostic. This information is never sent to a server, the cloud, or any third party: it never leaves your computer.",
          },
          {
            type: "ul",
            items: [
              "No diagnostic information is uploaded or stored online.",
              "No analytics, tracker, or telemetry is built into the application.",
              "The application works entirely offline: it never needs an internet connection to produce a diagnostic.",
            ],
          },
          {
            type: "p",
            text: "The application stores a few technical files locally in your computer's user data folder (on Windows: %APPDATA%\\Nyctale) — license status, usage counter, preferences. These files stay on your machine and are never transmitted to us.",
          },
        ],
      },
      {
        h: "3. Licenses and purchases",
        blocks: [
          {
            type: "p",
            text: "The full diagnostic is free and unlimited: no payment data is required to use it. Optional paid features (repair, monitoring, Pro tier) are purchased as in-app products through the Microsoft Store.",
          },
          {
            type: "p",
            text: "These purchases are entirely handled by Microsoft: the transaction and your payment and billing information are processed by Microsoft, in accordance with its own privacy policy. We never have access to your card number.",
          },
          {
            type: "p",
            text: "The application stores your license status (active tier, usage counter) locally in your computer's user data folder. This information stays on your machine and is never transmitted to us.",
          },
        ],
      },
      {
        h: "4. The nyctale.fr website",
        blocks: [
          {
            type: "p",
            text: "The website is a presentation showcase. We use Vercel Web Analytics, a privacy-friendly, cookieless analytics tool that measures traffic and downloads in an aggregated, anonymous way (page views, country, device type) without setting any cookie or collecting data that identifies you. The website uses no advertising cookie or third-party tracker.",
          },
          {
            type: "p",
            text: "The website is hosted by Vercel Inc. and the domain name is managed by OVH. Like any host, Vercel may record standard connection data (such as the IP address) in its technical logs, for security and proper operation of the service.",
          },
        ],
      },
      {
        h: "5. Cookies",
        blocks: [
          {
            type: "p",
            text: "The website uses no tracking, advertising, or audience-measurement cookies: our analytics tool (Vercel Web Analytics) is cookieless. No cookie consent is therefore required to browse it.",
          },
        ],
      },
      {
        h: "6. Your rights",
        blocks: [
          {
            type: "p",
            text: "Under the General Data Protection Regulation (GDPR) and applicable data protection law, you have the right to access, rectify, erase, restrict, object to, and port your personal data.",
          },
          {
            type: "p",
            text: `To exercise these rights, write to us at ${CONTACT}. For data processed as part of a Microsoft Store purchase, you may also contact Microsoft directly. You also have the right to lodge a complaint with your local data protection authority (in France, the CNIL — www.cnil.fr).`,
          },
        ],
      },
      {
        h: "7. Data retention",
        blocks: [
          {
            type: "p",
            text: "We do not maintain a user database. Data related to a Microsoft Store purchase is retained by Microsoft, in accordance with its own policy.",
          },
        ],
      },
      {
        h: "8. Transfers outside the European Union",
        blocks: [
          {
            type: "p",
            text: "Some of our providers (Microsoft, Vercel) may be established outside the European Union, in particular in the United States. Where applicable, such transfers are governed by the safeguards provided for by the GDPR (standard contractual clauses or equivalent mechanisms).",
          },
        ],
      },
      {
        h: "9. Minors",
        blocks: [
          {
            type: "p",
            text: "Nyctale is not intended for individuals under the age of 15, and we do not knowingly collect data about them.",
          },
        ],
      },
      {
        h: "10. Changes to this policy",
        blocks: [
          {
            type: "p",
            text: "This policy may be updated to reflect changes to the product or to applicable regulations. The date of the latest update appears at the top of this page.",
          },
        ],
      },
    ],
  },
};

function Privacy() {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("nyctale-lang")) as Lang | null;
    if (saved === "en" || saved === "fr") setLang(saved);
  }, []);

  const changeLang = (l: Lang) => {
    setLang(l);
    try {
      localStorage.setItem("nyctale-lang", l);
    } catch {
      // ignore
    }
  };

  const c = pp[lang];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/nyctale_logo.png" alt="Nyctale" className="h-9 w-9 rounded-lg" />
            <span className="text-lg font-semibold tracking-tight">Nyctale</span>
          </Link>
          <div className="inline-flex items-center rounded-full border border-border bg-secondary p-0.5 text-xs font-medium">
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => changeLang(l)}
                className={`cursor-pointer rounded-full px-3 py-1 transition ${
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> {c.back}
        </Link>

        <header className="mt-8 mb-10 border-b border-border pb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{c.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{c.updated}</p>
          <p className="mt-5 text-muted-foreground leading-relaxed">{c.intro}</p>
        </header>

        <div className="space-y-10">
          {c.sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-xl font-semibold tracking-tight">{s.h}</h2>
              <div className="mt-3 space-y-3">
                {s.blocks.map((b, i) =>
                  b.type === "p" ? (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {b.text}
                    </p>
                  ) : (
                    <ul key={i} className="ml-5 list-disc space-y-2 text-muted-foreground leading-relaxed">
                      {b.items.map((it, j) => (
                        <li key={j}>{it}</li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> {c.back}
          </Link>
        </div>
      </div>
    </main>
  );
}
