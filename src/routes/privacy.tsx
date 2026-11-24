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
      { property: "og:url", content: "https://nyctale.fr/privacy" },
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
    updated: "Dernière mise à jour : 24 novembre 2026",
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
            text: "Nyctale lit les informations techniques de votre ordinateur (processeur, mémoire, disque, batterie, programmes en cours et lancés au démarrage, journaux Windows, réglage d'économie de mémoire du navigateur) directement sur votre machine, pour produire son diagnostic. Il n'ouvre ni vos documents, ni votre historique de navigation. Ces informations ne sont jamais envoyées vers un serveur, un cloud ou un tiers : elles ne quittent pas votre ordinateur.",
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
            text: "L'application enregistre quelques fichiers sur votre ordinateur : rapports d'analyse, clé de licence, compteur d'usage, préférences. Sous Windows, ils se trouvent dans %LOCALAPPDATA%\\Nyctale. Avec la version portable, la licence et les réglages sont rangés à côté du programme, mais les rapports restent dans %LOCALAPPDATA%\\Nyctale. Si vous activez la surveillance continue, elle utilise aussi C:\\ProgramData\\Nyctale. Ces fichiers ne nous sont pas transmis, à l'exception des données de licence décrites au point 3. Vous pouvez supprimer les rapports à tout moment.",
          },
        ],
      },
      {
        h: "3. Licences et achats",
        blocks: [
          {
            type: "p",
            text: "Le diagnostic complet est gratuit et illimité : aucune donnée de paiement n'est nécessaire pour l'utiliser. Les fonctionnalités payantes optionnelles (réparation, surveillance, palier Pro) sont vendues sur nyctale.fr par l'intermédiaire de Lemon Squeezy.",
          },
          {
            type: "p",
            text: "Lemon Squeezy traite la commande, le paiement et la facturation, conformément à sa propre politique de confidentialité. Nous avons accès aux informations de la commande (nom, adresse email, produit, montant) pour assurer le suivi et le support, mais jamais à votre numéro de carte bancaire.",
          },
          {
            type: "p",
            text: "Si vous saisissez une clé de licence, l'application l'envoie à nyctale.fr avec le nom de votre ordinateur, pour l'activer ; nyctale.fr les transmet à Lemon Squeezy, qui vérifie la clé et compte les ordinateurs activés. Pour renouveler la licence, l'application envoie ensuite la clé et l'identifiant de cette activation. Aucune information de diagnostic n'est jointe. Sans clé de licence, l'application n'envoie rien.",
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
            text: "Pour savoir quels boutons sont utiles, nous utilisons aussi PostHog (hébergement dans l'Union européenne) en mode anonyme : il enregistre les pages vues et les clics sur les boutons d'installation, de téléchargement et d'achat, sans cookie ni stockage sur votre appareil, sans enregistrement de session et sans profil individuel. Ces données transitent par nyctale.fr, qui ne transmet pas votre adresse IP à PostHog.",
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
            text: "Le site n'utilise aucun cookie de suivi, publicitaire ou de mesure d'audience : nos outils de statistiques (Vercel Web Analytics et PostHog en mode anonyme) fonctionnent sans cookie. Aucun consentement aux cookies n'est donc requis pour le consulter.",
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
            text: `Pour exercer ces droits, écrivez-nous à ${CONTACT}. Pour les données traitées dans le cadre d'un achat, vous pouvez également vous adresser directement à Lemon Squeezy. Vous avez par ailleurs le droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).`,
          },
        ],
      },
      {
        h: "7. Conservation des données",
        blocks: [
          {
            type: "p",
            text: "Nous ne tenons pas de base de données d'utilisateurs de l'application. Les données liées à un achat et aux activations de licence sont conservées par Lemon Squeezy, conformément à sa propre politique. Si vous installez Nyctale depuis le Microsoft Store, Microsoft traite les données de cette installation selon sa propre politique.",
          },
        ],
      },
      {
        h: "8. Transferts hors Union européenne",
        blocks: [
          {
            type: "p",
            text: "Certains de nos prestataires (Lemon Squeezy, Microsoft, Vercel) peuvent être établis en dehors de l'Union européenne, notamment aux États-Unis. Le cas échéant, ces transferts sont encadrés par les garanties prévues par le RGPD (clauses contractuelles types ou mécanismes équivalents).",
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
    updated: "Last updated: November 24, 2026",
    back: "Back to home",
    intro:
      "Nyctale is a PC diagnostic tool designed to run entirely locally on your computer. Respect for your privacy is built into its design. This policy explains what data is — and is not — processed when you use the Nyctale application and the nyctale.fr website.",
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
            text: "Nyctale reads your computer's technical information (processor, memory, disk, battery, running and startup programs, Windows logs, the browser's memory-saving setting) directly on your machine to produce its diagnostic. It opens neither your documents nor your browsing history. This information is never sent to a server, the cloud, or any third party: it never leaves your computer.",
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
            text: "The application stores a few files on your computer: analysis reports, license key, usage counter, preferences. On Windows, they are in %LOCALAPPDATA%\\Nyctale. With the portable version, the license and settings are kept next to the program, but reports stay in %LOCALAPPDATA%\\Nyctale. If you turn on continuous monitoring, it also uses C:\\ProgramData\\Nyctale. These files are not transmitted to us, except for the license data described in section 3. You can delete the reports at any time.",
          },
        ],
      },
      {
        h: "3. Licenses and purchases",
        blocks: [
          {
            type: "p",
            text: "The full diagnostic is free and unlimited: no payment data is required to use it. Optional paid features (repair, monitoring, Pro tier) are sold on nyctale.fr through Lemon Squeezy.",
          },
          {
            type: "p",
            text: "Lemon Squeezy processes the order, payment and billing, in accordance with its own privacy policy. We can see the order details (name, email address, product, amount) for follow-up and support, but never your card number.",
          },
          {
            type: "p",
            text: "If you enter a license key, the application sends it to nyctale.fr together with your computer's name in order to activate it; nyctale.fr passes them on to Lemon Squeezy, which checks the key and counts the activated computers. To renew the license, the application then sends the key and the identifier of that activation. No diagnostic information is included. Without a license key, the application sends nothing.",
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
            text: "To learn which buttons are useful, we also use PostHog (hosted in the European Union) in anonymous mode: it records page views and clicks on the install, download and purchase buttons, with no cookie or storage on your device, no session recording and no individual profile. This data goes through nyctale.fr, which does not pass your IP address on to PostHog.",
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
            text: "The website uses no tracking, advertising, or audience-measurement cookies: our analytics tools (Vercel Web Analytics and PostHog in anonymous mode) are cookieless. No cookie consent is therefore required to browse it.",
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
            text: `To exercise these rights, write to us at ${CONTACT}. For data processed as part of a purchase, you may also contact Lemon Squeezy directly. You also have the right to lodge a complaint with your local data protection authority (in France, the CNIL — www.cnil.fr).`,
          },
        ],
      },
      {
        h: "7. Data retention",
        blocks: [
          {
            type: "p",
            text: "We do not maintain a user database for the application. Data related to a purchase and to license activations is retained by Lemon Squeezy, in accordance with its own policy. If you install Nyctale from the Microsoft Store, Microsoft processes the data of that installation under its own policy.",
          },
        ],
      },
      {
        h: "8. Transfers outside the European Union",
        blocks: [
          {
            type: "p",
            text: "Some of our providers (Lemon Squeezy, Microsoft, Vercel) may be established outside the European Union, in particular in the United States. Where applicable, such transfers are governed by the safeguards provided for by the GDPR (standard contractual clauses or equivalent mechanisms).",
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

        <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-border pt-8 text-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> {c.back}
          </Link>
          <Link to="/legal" className="text-muted-foreground hover:text-foreground transition-colors">
            {lang === "fr" ? "Mentions légales" : "Legal notice"}
          </Link>
          <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
            {lang === "fr" ? "CGU/CGV" : "Terms"}
          </Link>
        </div>
      </div>
    </main>
  );
}
