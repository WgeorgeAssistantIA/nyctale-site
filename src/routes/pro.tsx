import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  FileText,
  HardDrive,
  MonitorCheck,
  Usb,
  Wrench,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLang, type Lang } from "@/lib/lang";
import { suivre } from "@/lib/analytics";

// Lien de checkout Lemon Squeezy du palier Pro (meme lien que la carte Pro de
// l'accueil, voir index.tsx).
const CHECKOUT_PRO =
  "https://voxcut-pro.lemonsqueezy.com/checkout/buy/e8823d08-19d4-4c32-8c99-7bd315f800e7";
const PORTABLE_URL = "/downloads/Nyctale-Portable-1.0.3.zip";

// Chaque promesse de cette page correspond a une fonction reelle du palier
// Pro dans l'app (licence.est_pro, export_rapport.exporter_pdf,
// parametres_pro.py, licence.dossier_donnees) -- ne rien ajouter ici qui ne
// soit pas code.
const T = {
  fr: {
    retour: "Accueil",
    badge: "Pour les dépanneurs et techniciens informatiques",
    titre: "Le diagnostic PC que vos clients comprennent",
    sous: "Nyctale Pro analyse le PC de votre client en 19 secondes, lui explique le problème sans jargon sur son propre écran, puis vous laisse un rapport PDF à votre nom, avec le bilan avant/après de votre intervention.",
    cta: "Passer à Nyctale Pro",
    prixCourt: "29,99 € / mois",
    portable: "Télécharger la version portable (clé USB)",
    beneficesTitre: "Pourquoi les dépanneurs l'utilisent",
    benefices: [
      {
        titre: "Un diagnostic qui justifie votre intervention",
        texte:
          "Le client voit la cause nommée sur son écran (un programme, le disque, le refroidissement), pas un vague « il est vieux ». Votre devis devient évident.",
      },
      {
        titre: "Une preuve de travail à remettre",
        texte:
          "Relancez l'analyse après l'intervention : le rapport PDF montre ce qui a été résolu et ce qui reste à faire. Le client repart avec un document, pas une promesse.",
      },
      {
        titre: "Votre marque, pas la nôtre",
        texte:
          "Le nom de votre entreprise et votre logo en en-tête du PDF, le nom du client en tête du rapport. C'est votre document professionnel.",
      },
    ],
    exempleTitre: "Exemple de rapport remis au client",
    exempleLegende:
      "Généré avec l'app : 3 points avant l'intervention, 1 après. Le refroidissement reste signalé, parce qu'aucun logiciel ne le règle, et le rapport le dit.",
    exempleAlt:
      "Rapport PDF Nyctale Pro : en-tête de l'atelier, nom du client, bilan avant/après l'intervention",
    deroulementTitre: "Comment ça se passe chez le client",
    etapes: [
      "Branchez votre clé USB et lancez Nyctale, sans rien installer.",
      "Montrez le verdict au client, sur son propre écran.",
      "Intervenez, puis relancez l'analyse.",
      "Exportez le rapport PDF avant/après, à son nom et au vôtre.",
    ],
    terrainTitre: "Pensé pour le terrain",
    terrain: [
      {
        icon: Usb,
        texte:
          "Version portable : Nyctale se lance depuis une clé USB, sans installation sur le PC du client.",
      },
      {
        icon: HardDrive,
        texte:
          "Votre licence et vos réglages (nom, logo) restent sur la clé : rien de personnel ne reste chez le client.",
      },
      {
        icon: FileText,
        texte:
          "Détail technique complet en plus du verdict grand public : programme et identifiant de processus, état du disque, valeurs mesurées.",
      },
      {
        icon: MonitorCheck,
        texte:
          "Diagnostic en lecture seule et hors ligne : rien n'est modifié sans votre accord, aucune donnée du client ne quitte sa machine.",
      },
    ],
    tarifTitre: "Nyctale Pro",
    tarifPrix: "29,99 €",
    tarifPeriode: "par mois",
    tarifPoints: [
      "Rapport PDF avant/après à remettre au client",
      "En-tête à votre nom, avec votre logo",
      "Détail technique complet",
      "Version portable sur clé USB, sans anti-copie",
      "Réparations accompagnées et surveillance incluses",
    ],
    particulier: "Vous êtes un particulier ? La version complète coûte 24,99 € une seule fois.",
    particulierLien: "Voir les tarifs",
    faqTitre: "Questions fréquentes des dépanneurs",
    faq: [
      {
        q: "Puis-je utiliser Nyctale Pro sur les PC de tous mes clients ?",
        r: "Oui, c'est l'usage prévu : la version portable se lance depuis votre clé USB sur chaque PC que vous dépannez, et votre licence voyage avec la clé.",
      },
      {
        q: "Est-ce que quelque chose reste installé chez le client ?",
        r: "Non : la version portable ne s'installe pas, et votre licence comme vos réglages restent sur votre clé. Seule exception : si vous activez la surveillance continue sur le PC d'un client, Nyctale demande une confirmation explicite, car elle reste active après votre départ.",
      },
      {
        q: "Que contient le rapport PDF ?",
        r: "Le nom et le logo de votre entreprise en en-tête, le nom du client, la date et le modèle de la machine, chaque constat expliqué sans jargon avec l'action recommandée et le détail technique. Si vous avez relancé l'analyse après votre intervention, il ajoute le bilan avant/après avec ce qui a été résolu.",
      },
      {
        q: "Mon client peut-il utiliser Nyctale lui-même ?",
        r: "Oui, le diagnostic est gratuit pour tout le monde. C'est même un bon point de départ : le client voit le problème sur son écran, vous apportez l'intervention et le rapport.",
      },
      {
        q: "Faut-il une connexion internet ?",
        r: "Pas pour le diagnostic. La licence Pro se vérifie hors ligne et se renouvelle en ligne tous les 30 jours.",
      },
    ],
    finTitre: "Prêt à remettre un vrai rapport à vos clients ?",
  },
  en: {
    retour: "Home",
    badge: "For computer repair technicians",
    titre: "The PC diagnostic your clients understand",
    sous: "Nyctale Pro scans your client's PC in 19 seconds, explains the problem without jargon on their own screen, then leaves you a PDF report under your name, with the before/after of your intervention.",
    cta: "Get Nyctale Pro",
    prixCourt: "€29.99 / month",
    portable: "Download the portable version (USB drive)",
    beneficesTitre: "Why repair technicians use it",
    benefices: [
      {
        titre: "A diagnostic that justifies your work",
        texte:
          'The client sees the cause named on their screen (a program, the drive, the cooling), not a vague "it\'s old". Your quote becomes obvious.',
      },
      {
        titre: "Proof of work to hand over",
        texte:
          "Run the scan again after your intervention: the PDF report shows what was fixed and what remains. The client leaves with a document, not a promise.",
      },
      {
        titre: "Your brand, not ours",
        texte:
          "Your company name and logo in the PDF header, the client's name at the top of the report. It's your professional document.",
      },
    ],
    exempleTitre: "Example of a report handed to the client",
    exempleLegende:
      "Generated with the app: 3 issues before the intervention, 1 after. The cooling issue is still flagged, because no software can fix it, and the report says so.",
    exempleAlt:
      "Nyctale Pro PDF report: workshop header, client name, before/after summary of the intervention",
    deroulementTitre: "How it goes at the client's",
    etapes: [
      "Plug in your USB drive and launch Nyctale, nothing to install.",
      "Show the client the verdict, on their own screen.",
      "Do your work, then run the scan again.",
      "Export the before/after PDF report, with their name and yours.",
    ],
    terrainTitre: "Built for fieldwork",
    terrain: [
      {
        icon: Usb,
        texte:
          "Portable version: Nyctale runs from a USB drive, with nothing installed on the client's PC.",
      },
      {
        icon: HardDrive,
        texte:
          "Your license and settings (name, logo) stay on the drive: nothing personal is left on the client's machine.",
      },
      {
        icon: FileText,
        texte:
          "Full technical detail on top of the consumer verdict: program and process ID, drive health, measured values.",
      },
      {
        icon: MonitorCheck,
        texte:
          "Read-only, offline diagnostic: nothing is changed without your consent, and no client data leaves their machine.",
      },
    ],
    tarifTitre: "Nyctale Pro",
    tarifPrix: "€29.99",
    tarifPeriode: "per month",
    tarifPoints: [
      "Before/after PDF report to hand to the client",
      "Header with your name and logo",
      "Full technical detail",
      "Portable version on a USB drive, no anti-copy",
      "Guided repairs and monitoring included",
    ],
    particulier: "Just for your own PC? The full version costs €24.99, once.",
    particulierLien: "See pricing",
    faqTitre: "Frequently asked questions from technicians",
    faq: [
      {
        q: "Can I use Nyctale Pro on all my clients' PCs?",
        r: "Yes, that's what it's for: the portable version runs from your USB drive on every PC you work on, and your license travels with the drive.",
      },
      {
        q: "Is anything left installed on the client's PC?",
        r: "No: the portable version doesn't install, and your license and settings stay on your drive. One exception: if you turn on ongoing monitoring on a client's PC, Nyctale asks for explicit confirmation, because it stays active after you leave.",
      },
      {
        q: "What does the PDF report contain?",
        r: "Your company name and logo in the header, the client's name, the date and machine model, each finding explained without jargon with the recommended action and technical detail. If you ran the scan again after your intervention, it adds the before/after summary of what was fixed.",
      },
      {
        q: "Can my client use Nyctale themselves?",
        r: "Yes, the diagnostic is free for everyone. It's actually a good starting point: the client sees the problem on their screen, you bring the fix and the report.",
      },
      {
        q: "Is an internet connection required?",
        r: "Not for the diagnostic. The Pro license is checked offline and renewed online every 30 days.",
      },
    ],
    finTitre: "Ready to hand your clients a real report?",
  },
} satisfies Record<Lang, unknown>;

export const Route = createFileRoute("/pro")({
  head: () => ({
    meta: [
      { title: "Logiciel de diagnostic PC pour dépanneurs – Nyctale Pro" },
      {
        name: "description",
        content:
          "Nyctale Pro : diagnostic PC en 19 secondes depuis une clé USB, compréhensible par le client, et rapport PDF avant/après à votre nom et avec votre logo. 29,99 €/mois.",
      },
      {
        property: "og:title",
        content: "Nyctale Pro – le diagnostic PC que vos clients comprennent",
      },
      {
        property: "og:description",
        content:
          "Diagnostic sur clé USB, rapport PDF avant/après à votre nom. Pour les dépanneurs et techniciens informatiques.",
      },
    ],
    links: [{ rel: "canonical", href: "https://nyctale.fr/pro" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Nyctale Pro",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Windows 10, Windows 11",
          description:
            "Logiciel de diagnostic PC pour dépanneurs : version portable sur clé USB, verdict compréhensible par le client, rapport PDF avant/après personnalisé.",
          url: "https://nyctale.fr/pro",
          image: "https://nyctale.fr/rapport-pro-exemple-fr.webp",
          offers: {
            "@type": "Offer",
            price: "29.99",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "29.99",
              priceCurrency: "EUR",
              unitCode: "MON",
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: T.fr.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.r },
          })),
        }),
      },
    ],
  }),
  component: PagePro,
});

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-secondary p-0.5 text-xs font-medium">
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`cursor-pointer rounded-full px-3 py-1 transition ${
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function BoutonsAchat({ t, origine }: { t: (typeof T)[Lang]; origine: string }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      <a
        href={CHECKOUT_PRO}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => suivre("achat_click", { palier: "pro", origine })}
      >
        <Button size="lg" className="gap-2">
          {t.cta} · {t.prixCourt} <ArrowRight className="h-4 w-4" />
        </Button>
      </a>
      <a
        href={PORTABLE_URL}
        onClick={() => suivre("portable_download", { origine })}
        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
      >
        {t.portable}
      </a>
    </div>
  );
}

function PagePro() {
  const [lang, setLang] = useLang();
  const t = T[lang];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/nyctale_logo.png" alt="Nyctale" className="h-9 w-9 rounded-lg" />
            <span className="text-lg font-semibold tracking-tight max-[359px]:hidden">
              Nyctale <span className="text-primary">Pro</span>
            </span>
          </Link>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-14 text-center md:pt-24">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
          <Wrench className="h-3.5 w-3.5" /> {t.badge}
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{t.titre}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t.sous}
        </p>
        <div className="mt-8">
          <BoutonsAchat t={t} origine="pro_hero" />
        </div>
      </section>

      {/* BENEFICES */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">{t.beneficesTitre}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.benefices.map((b) => (
              <Card key={b.titre} className="p-6">
                <BadgeCheck className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{b.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.texte}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EXEMPLE DE RAPPORT */}
      <section className="py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight">{t.exempleTitre}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.exempleLegende}</p>
            <h3 className="mt-8 font-semibold">{t.deroulementTitre}</h3>
            <ol className="mt-3 ml-5 list-decimal space-y-2 text-sm leading-relaxed text-muted-foreground">
              {t.etapes.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ol>
          </div>
          <figure className="md:col-span-3">
            <img
              src={`/rapport-pro-exemple-${lang}.webp`}
              alt={t.exempleAlt}
              width={1160}
              height={lang === "fr" ? 1055 : 1028}
              loading="lazy"
              className="w-full rounded-xl border border-border bg-white shadow-2xl shadow-primary/20"
            />
          </figure>
        </div>
      </section>

      {/* TERRAIN */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">{t.terrainTitre}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.terrain.map((item) => (
              <div key={item.texte} className="flex items-start gap-3">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIF */}
      <section className="py-16">
        <div className="mx-auto max-w-md px-6">
          <Card className="border-primary p-8 shadow-lg">
            <div className="flex items-center gap-2">
              <Wrench className="h-4 w-4 text-primary" />
              <h2 className="text-lg font-semibold">{t.tarifTitre}</h2>
            </div>
            <p className="mt-2 text-4xl font-bold">
              {t.tarifPrix}{" "}
              <span className="text-base font-normal text-muted-foreground">{t.tarifPeriode}</span>
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {t.tarifPoints.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <BoutonsAchat t={t} origine="pro_tarif" />
            </div>
          </Card>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {t.particulier}{" "}
            <Link
              to="/"
              hash="tarifs"
              className="underline underline-offset-4 hover:text-foreground"
            >
              {t.particulierLien}
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">{t.faqTitre}</h2>
          <Accordion type="single" collapsible className="mt-10">
            {t.faq.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-left text-base">{item.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {item.r}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FIN */}
      <section className="border-t border-border bg-secondary/30 py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">{t.finTitre}</h2>
          <div className="mt-8">
            <BoutonsAchat t={t} origine="pro_fin" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">
          ← {t.retour}
        </Link>
      </footer>
    </main>
  );
}
