import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Conditions Générales d'Utilisation et de Vente — Nyctale" },
      {
        name: "description",
        content: "CGU/CGV de Nyctale : diagnostic gratuit, réparation ponctuelle, surveillance, licence Pro.",
      },
      { property: "og:title", content: "Conditions Générales d'Utilisation et de Vente — Nyctale" },
    ],
    links: [{ rel: "canonical", href: "https://nyctale.fr/terms" }],
  }),
  component: Terms,
});

type Lang = "en" | "fr";

type Section = { h: string; lines: string[] };

const CONTACT = "contact@nyctale.fr";

const ln: Record<Lang, { title: string; sub: string; updated: string; back: string; disclaimer: string; sections: Section[] }> = {
  fr: {
    title: "Conditions Générales d'Utilisation et de Vente",
    sub: "Applicables à l'usage de Nyctale et à l'achat d'une licence.",
    updated: "Dernière mise à jour : août 2026",
    back: "Retour à l'accueil",
    disclaimer:
      "Modèle rédigé pour couvrir les points structurants d'un logiciel combinant usage gratuit, achat ponctuel et abonnements. À faire valider par un juriste avant toute contestation ou litige réel.",
    sections: [
      {
        h: "1. Objet",
        lines: [
          `Les présentes conditions générales d'utilisation et de vente (« CGU/CGV ») régissent l'usage du logiciel Nyctale, édité par William GEORGE, entrepreneur individuel (SIRET 518 251 897 00048), ci-après « Nyctale ». Nyctale est un logiciel de diagnostic informatique qui analyse un ordinateur, explique en langage simple ce qui ne va pas, et propose des corrections.`,
          "Toute utilisation du logiciel, gratuite ou payante, implique l'acceptation pleine et entière des présentes CGU/CGV.",
        ],
      },
      {
        h: "2. Diagnostic gratuit",
        lines: [
          "Le diagnostic est gratuit, complet et illimité dans le temps et dans l'usage, pour tout le monde, sans exception. Une première réparation est offerte à chaque utilisateur.",
        ],
      },
      {
        h: "3. Deux usages, deux licences",
        lines: [
          "Usage personnel : vous utilisez Nyctale pour diagnostiquer et réparer votre propre ordinateur, ou celui d'un proche, à titre non professionnel et non rémunéré. Au-delà de la première réparation offerte, les réparations suivantes nécessitent une licence particulier : 24,99 € en paiement unique (réparation ponctuelle), ou un abonnement de surveillance continue à 19 €/an ou 2 €/mois.",
          "Usage professionnel : constitue un usage professionnel le fait d'utiliser Nyctale dans le cadre d'une activité rémunérée de dépannage, maintenance ou support informatique, ou de produire à partir de Nyctale un rapport destiné à être remis à un client dans ce cadre. Un tel usage nécessite une licence Nyctale Pro, à 29,99 €/mois, qui inclut un rapport avant/après et un export PDF avec en-tête personnalisé — l'export gratuit reste utilisable mais n'est pas conçu pour être remis à un tiers dans un cadre commercial.",
        ],
      },
      {
        h: "4. Prix et paiement",
        lines: [
          "Les prix sont indiqués en euros, toutes taxes comprises. Le paiement est traité par Lemon Squeezy, agissant en tant que revendeur officiel (« Merchant of Record ») : la facture est émise par Lemon Squeezy au nom de l'acheteur. Nyctale n'a à aucun moment accès aux coordonnées bancaires complètes de l'acheteur.",
        ],
      },
      {
        h: "5. Abonnements (surveillance, Pro)",
        lines: [
          "Les formules de surveillance et la licence Pro sont des abonnements sans engagement de durée, résiliables à tout moment depuis le portail client Lemon Squeezy, avec effet à la fin de la période déjà payée.",
          "Une clé de licence Pro est personnelle : elle identifie un abonnement, pas une machine. Le partage d'une même clé entre plusieurs professionnels distincts n'est pas autorisé.",
        ],
      },
      {
        h: "6. Droit de rétractation",
        lines: [
          "Pour la licence particulier (réparation ponctuelle) : conformément à l'article L221-28 13° du Code de la consommation, le droit de rétractation ne s'applique pas aux contenus numériques dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement à son droit de rétractation. En activant sa licence, l'acheteur consent expressément à cette exécution immédiate.",
          "Pour la licence Pro (usage professionnel) : le droit de rétractation du Code de la consommation ne s'applique en principe pas entre professionnels ; l'abonnement résiliable à tout moment (article 5) offre une flexibilité équivalente.",
        ],
      },
      {
        h: "7. Confidentialité et fonctionnement local",
        lines: [
          "Aucune donnée du diagnostic n'est transmise à un serveur : l'analyse s'exécute entièrement en local sur l'ordinateur analysé, y compris pour la licence Pro. Voir la politique de confidentialité pour le détail du traitement des données liées à l'achat d'une licence.",
        ],
      },
      {
        h: "8. Ce que Nyctale ne fait pas — Responsabilité",
        lines: [
          "Le diagnostic est informatif : il ne remplace pas l'expertise d'un professionnel pour les cas qu'il identifie lui-même comme hors de portée d'un logiciel (panne matérielle, par exemple). Nyctale ne garantit pas la résolution de tous les problèmes détectés.",
          "Les actions de réparation proposées demandent toujours une confirmation explicite avant exécution ; aucune modification n'est apportée à l'ordinateur sans cet accord de l'utilisateur.",
          "Le logiciel est fourni « en l'état ». La responsabilité de Nyctale, si elle devait être engagée, est limitée au montant effectivement payé par l'utilisateur au titre des trois derniers mois de licence.",
        ],
      },
      {
        h: "9. Résiliation de la licence",
        lines: [
          "Nyctale se réserve le droit de révoquer une licence en cas d'usage frauduleux avéré (partage massif de clé, rétro-ingénierie, revente non autorisée), sans remboursement.",
        ],
      },
      {
        h: "10. Droit applicable",
        lines: [
          "Les présentes CGU/CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité ; à défaut, les tribunaux français compétents seront seuls saisis.",
        ],
      },
      {
        h: "Contact",
        lines: [`Pour toute question : ${CONTACT}`],
      },
    ],
  },
  en: {
    title: "Terms of Use and Sale",
    sub: "Applicable to using Nyctale and purchasing a license.",
    updated: "Last updated: August 2026",
    back: "Back to home",
    disclaimer:
      "Drafted to cover the key points of software combining free use, one-time purchase and subscriptions. Should be reviewed by a lawyer before being relied on in any real dispute.",
    sections: [
      {
        h: "1. Purpose",
        lines: [
          `These terms of use and sale (“Terms”) govern the use of the Nyctale software, published by William GEORGE, a sole trader (SIRET 518 251 897 00048), referred to below as “Nyctale”. Nyctale is a computer diagnostic tool that analyzes a computer, explains what's wrong in plain language, and suggests fixes.`,
          "Any use of the software, free or paid, implies full acceptance of these Terms.",
        ],
      },
      {
        h: "2. Free diagnostic",
        lines: [
          "The diagnostic is free, complete and unlimited in time and use, for everyone, without exception. A first repair is offered to every user.",
        ],
      },
      {
        h: "3. Two uses, two licenses",
        lines: [
          "Personal use: you use Nyctale to diagnose and repair your own computer, or a relative's, on a non-professional, unpaid basis. Beyond the first free repair, further repairs require a personal license: €24.99 as a one-time payment (single repair), or a continuous-monitoring subscription at €19/year or €2/month.",
          "Professional use: using Nyctale as part of a paid computer repair, maintenance or support activity, or producing a report from Nyctale intended for a client in that context, constitutes professional use. Such use requires a Nyctale Pro license, at €29.99/month, which includes a before/after report and PDF export with a custom letterhead — the free export remains usable but is not designed to be handed to a third party in a commercial context.",
        ],
      },
      {
        h: "4. Price and payment",
        lines: [
          "Prices are shown in euros, all taxes included. Payments are processed by Lemon Squeezy, acting as the Merchant of Record: the invoice is issued by Lemon Squeezy in the buyer's name. Nyctale never has access to the buyer's full payment card details.",
        ],
      },
      {
        h: "5. Subscriptions (monitoring, Pro)",
        lines: [
          "The monitoring plans and the Pro license are subscriptions with no fixed term, cancellable at any time from the Lemon Squeezy customer portal, with effect at the end of the period already paid for.",
          "A Pro license key is personal: it identifies a subscription, not a machine. Sharing the same key between several distinct professionals is not permitted.",
        ],
      },
      {
        h: "6. Right of withdrawal",
        lines: [
          "For the personal license (one-time repair): under French consumer law (Art. L221-28 13° of the Consumer Code), the statutory right of withdrawal does not apply to digital content whose delivery has begun with the consumer's prior express consent and waiver of that right. By activating the license, the buyer expressly consents to this immediate delivery.",
          "For the Pro license (professional use): the consumer-law right of withdrawal generally does not apply between professionals; the ability to cancel at any time (section 5) offers equivalent flexibility.",
        ],
      },
      {
        h: "7. Privacy and local operation",
        lines: [
          "No diagnostic data is sent to a server: the analysis runs entirely locally on the computer being scanned, including for the Pro license. See the privacy policy for details on data processing related to purchasing a license.",
        ],
      },
      {
        h: "8. What Nyctale doesn't do — Liability",
        lines: [
          "The diagnostic is informational: it does not replace a professional's expertise for cases it identifies itself as beyond a software's reach (a hardware failure, for example). Nyctale does not guarantee that every detected issue will be resolved.",
          "Proposed repair actions always require explicit confirmation before execution; no change is made to the computer without the user's agreement.",
          "The software is provided “as is”. Nyctale's liability, if engaged, is limited to the amount actually paid by the user over the last three months of license.",
        ],
      },
      {
        h: "9. License termination",
        lines: [
          "Nyctale reserves the right to revoke a license in case of proven fraudulent use (mass key sharing, reverse engineering, unauthorized resale), without refund.",
        ],
      },
      {
        h: "10. Governing law",
        lines: [
          "These Terms are governed by French law. In the event of a dispute, an amicable solution will be sought first; failing that, the competent French courts shall have exclusive jurisdiction.",
        ],
      },
      {
        h: "Contact",
        lines: [`For any question: ${CONTACT}`],
      },
    ],
  },
};

function Terms() {
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

  const c = ln[lang];

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

        <header className="mt-8 mb-6 border-b border-border pb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{c.title}</h1>
          <p className="mt-3 text-muted-foreground">{c.sub}</p>
          <p className="mt-1 text-sm text-muted-foreground">{c.updated}</p>
        </header>

        <div className="mb-10 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-600 dark:text-amber-400">
          ⚠️ {c.disclaimer}
        </div>

        <div className="space-y-10">
          {c.sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-xl font-semibold tracking-tight">{s.h}</h2>
              <div className="mt-3 space-y-3">
                {s.lines.map((line, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                ))}
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
          <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
            {lang === "fr" ? "Politique de confidentialité" : "Privacy policy"}
          </Link>
        </div>
      </div>
    </main>
  );
}
