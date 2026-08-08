import { createFileRoute, Link } from "@tanstack/react-router";
import { track } from "@vercel/analytics";
import {
  Activity,
  ArrowRight,
  Check,
  Gauge,
  HardDrive,
  Lock,
  MonitorCog,
  ShieldCheck,
  ThermometerSun,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang, type Lang } from "@/lib/lang";

function trackDownload() {
  track("download");
}
function trackStoreDownload() {
  track("store_download");
}
function trackCrossLink(target: string) {
  track("cross_link_click", { target });
}
function trackAchat(palier: string) {
  track("achat_click", { palier });
}

// Liens de checkout Lemon Squeezy (buy_now_url officiel de chaque produit,
// voir memoire nyctale-lemonsqueezy-identifiants) -- ouverts dans un nouvel
// onglet, l'utilisateur revient sur nyctale.fr apres paiement.
const CHECKOUT = {
  reparation: "https://voxcut-pro.lemonsqueezy.com/checkout/buy/a697285b-7c3b-416a-b7ef-d4929cbc95e9",
  surveillanceAnnuelle: "https://voxcut-pro.lemonsqueezy.com/checkout/buy/cfe51d12-4ab5-40a9-96ad-75423494d291",
  surveillanceMensuelle: "https://voxcut-pro.lemonsqueezy.com/checkout/buy/88e3ac93-d948-49cf-9786-2dbd16f99266",
  pro: "https://voxcut-pro.lemonsqueezy.com/checkout/buy/e8823d08-19d4-4c32-8c99-7bd315f800e7",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nyctale — PC Diagnostic | Comprenez ce qui ralentit votre PC" },
      {
        name: "description",
        content:
          "Diagnostic PC gratuit et illimité : Nyctale explique en clair pourquoi votre ordinateur chauffe ou ralentit, et ce qu'il faut faire. Application Windows, 100% locale.",
      },
      { property: "og:title", content: "Nyctale — PC Diagnostic" },
      {
        property: "og:description",
        content: "Avant de remplacer votre PC, faites le diagnostic. Gratuit et illimité.",
      },
    ],
    links: [{ rel: "canonical", href: "https://nyctale.fr/" }],
  }),
  component: Home,
});

const T = {
  fr: {
    nav: { download: "Télécharger", blog: "Blog", fonctions: "Fonctions", tarifs: "Prix", faq: "FAQ" },
    hero: {
      badge: "100% local — rien n'est envoyé en ligne",
      titleLine1: "Avant de remplacer votre PC,",
      titleLine2: "faites le diagnostic",
      subtitle:
        "Nyctale explique en clair pourquoi votre ordinateur chauffe ou ralentit — et ce qu'il faut réellement faire. Le diagnostic complet est gratuit et illimité.",
      cta: "Télécharger gratuitement",
      ctaSecondary: "Comment ça marche",
      note: "Windows 10 et 11 — aucune inscription requise",
    },
    problemesTitle: "Ce que Nyctale regarde",
    problemesSubtitle: "Un ordinateur qui rame a toujours une cause. Nyctale la trouve, au lieu de vous laisser deviner.",
    problemes: [
      {
        icon: ThermometerSun,
        titre: "Pourquoi il chauffe",
        texte: "Un composant tourne en boucle, un programme travaille en arrière-plan sans que vous le voyiez : Nyctale identifie lequel.",
      },
      {
        icon: Gauge,
        titre: "Pourquoi il rame",
        texte: 'Mémoire saturée, navigateur trop gourmand, démarrage encombré : le diagnostic dit precisément ce qui ralentit la machine, pas juste "votre PC est vieux".',
      },
      {
        icon: HardDrive,
        titre: "Ce qui est vraiment cassé",
        texte: "Disque en fin de vie, arrêts anormaux répétés : Nyctale distingue un vrai problème matériel d'un simple réglage à corriger.",
      },
    ],
    etapesTitle: "Comment ça marche",
    etapes: [
      { n: "1", titre: "Lancez l'analyse", texte: "Un clic. Aucune donnée n'est envoyée nulle part — tout reste sur votre ordinateur." },
      { n: "2", titre: "Lisez le verdict", texte: "Pas de jargon technique : chaque point est expliqué comme à quelqu'un qui n'y connaît rien." },
      { n: "3", titre: "Agissez, ou pas", texte: "Si tout va bien, vous économisez un achat inutile. Si un point bloque, Nyctale dit quoi faire." },
    ],
    confiance: {
      t1: "Rien ne quitte votre ordinateur",
      d1: "Nyctale lit les informations de votre machine et les analyse sur place. Aucune connexion internet n'est nécessaire pour établir un diagnostic.",
      t2: "Lecture seule",
      d2: "Le diagnostic ne modifie rien sur votre système. Il lit, il analyse, il explique — la décision reste toujours la vôtre.",
    },
    pro: {
      badge: "Pour les professionnels",
      titre: "Vous dépannez des PC ? Nyctale devient votre outil de diagnostic client.",
      texte:
        "Un diagnostic que le client comprend sans jargon, un rapport avant/après qui justifie l'intervention, et une licence qui vous suit sur toutes vos machines d'intervention — même depuis une clé USB, sans connexion internet obligatoire.",
      points: [
        "Rapport avant/après à remettre au client, en votre nom",
        "Export PDF avec votre en-tête et votre logo d'entreprise",
        "Détail technique complet, pas juste le verdict grand public",
        "Licence dépanneur : lancez Nyctale depuis une clé USB sur le PC du client, sans rien installer",
      ],
      cta: "Voir le tarif Pro",
      quote:
        '"Le diagnostic gratuit, c\'est ce que vous montrez au client sur son propre écran pour qu\'il comprenne ce qui cloche. Le palier Pro, c\'est ce qui transforme cette explication en document professionnel que vous lui laissez."',
      quoteAttr: "— Philosophie du palier Pro",
    },
    tarifsTitle: "Tarifs",
    tarifsSubtitle: "Le diagnostic complet est toujours gratuit. Les paliers ci-dessous ne concernent que l'accompagnement à la réparation.",
    tarifs: {
      free: { titre: "Diagnostic", prix: "Gratuit", sous: "Illimité, pour toujours", pts: ["Analyse complète du système", "Explications en langage clair", "Une première réparation offerte"] },
      mid: {
        titre: "Réparation / surveillance",
        prix: "24,99 €",
        sous: "réparation ponctuelle, ou 19 €/an · 2 €/mois pour la surveillance continue",
        pts: ["Correction accompagnée des problèmes détectés", "Détail technique complet", "Suivi dans le temps"],
      },
      pro: { titre: "Pro (dépanneurs)", prix: "29,99 €", sous: "par mois", pts: ["Rapport avant/après pour le client", "Export PDF avec en-tête personnalisé", "Sans anti-copie, licence USB"] },
      acheter: "Choisir ce palier",
      acheterAnnuel: "ou 19 €/an",
      acheterMensuel: "2 €/mois",
      acheterGratuit: "Télécharger",
    },
    telecharger: {
      titre: "Prêt à savoir ce qui se passe ?",
      sous: "Windows 10 et 11 · Installation en moins d'une minute",
      cta: "Télécharger pour Windows",
      store: "Bientôt disponible sur le Microsoft Store.",
    },
    faqTitle: "Questions fréquentes",
    faq: [
      {
        q: "Le diagnostic est-il vraiment gratuit ?",
        r: "Oui, sans limite de temps ni d'usage. L'analyse complète, les explications et une première réparation sont gratuites. Seules les réparations suivantes ou la surveillance continue sont payantes.",
      },
      {
        q: "Nyctale fonctionne-t-il sur un vieux PC ?",
        r: "Oui. Nyctale est volontairement léger et fonctionne sur Windows 10 et 11, quelle que soit la puissance de la machine — c'est même sur les PC les plus anciens qu'il est le plus utile.",
      },
      {
        q: "Est-ce que Nyctale modifie quelque chose sur mon ordinateur ?",
        r: "Non. Le diagnostic est en lecture seule : il analyse et explique, mais ne touche à aucun réglage sans votre accord explicite pour chaque action proposée.",
      },
      {
        q: "Mes données sont-elles envoyées quelque part ?",
        r: "Non, jamais. Nyctale lit les informations de votre ordinateur et les analyse localement. Aucune connexion internet n'est nécessaire pour établir un diagnostic.",
      },
      {
        q: "Quelle est la différence avec le palier Pro ?",
        r: "Le palier Pro (29,99 €/mois) est pensé pour les dépanneurs informatiques : rapport avant/après à remettre au client, export PDF avec votre en-tête, et une licence utilisable depuis une clé USB sur les PC de vos clients.",
      },
      {
        q: "Nyctale va-t-il essayer de me vendre un nouveau PC ?",
        r: "Non — c'est même l'inverse de sa raison d'être. Nyctale existe pour vous dire si un remplacement est vraiment justifié, ou si un simple réglage suffit.",
      },
    ],
    footer: {
      tagline: "Nyctale — La Fabrik Numérique",
      legal: "Mentions légales",
      privacy: "Confidentialité",
      madeBy: "Un logiciel La Fabrik Numérique",
      voxcut: "Découvrez aussi VoxCut",
    },
  },
  en: {
    nav: { download: "Download", blog: "Blog", fonctions: "Features", tarifs: "Pricing", faq: "FAQ" },
    hero: {
      badge: "100% local — nothing is sent online",
      titleLine1: "Before replacing your PC,",
      titleLine2: "run the diagnostic",
      subtitle:
        "Nyctale explains in plain language why your computer overheats or slows down — and what to actually do about it. The full diagnostic is free and unlimited.",
      cta: "Download for free",
      ctaSecondary: "How it works",
      note: "Windows 10 and 11 — no sign-up required",
    },
    problemesTitle: "What Nyctale looks at",
    problemesSubtitle: "A slow computer always has a cause. Nyctale finds it, instead of leaving you to guess.",
    problemes: [
      {
        icon: ThermometerSun,
        titre: "Why it overheats",
        texte: "A component stuck in a loop, a program working in the background without you seeing it: Nyctale identifies which one.",
      },
      {
        icon: Gauge,
        titre: "Why it's slow",
        texte: 'Saturated memory, a memory-hungry browser, a cluttered startup: the diagnostic states precisely what\'s slowing the machine down, not just "your PC is old".',
      },
      {
        icon: HardDrive,
        titre: "What's actually broken",
        texte: "A drive nearing end of life, repeated abnormal shutdowns: Nyctale tells apart a real hardware issue from a simple setting to fix.",
      },
    ],
    etapesTitle: "How it works",
    etapes: [
      { n: "1", titre: "Run the scan", texte: "One click. No data is sent anywhere — everything stays on your computer." },
      { n: "2", titre: "Read the verdict", texte: "No technical jargon: every point is explained as if to someone who knows nothing about computers." },
      { n: "3", titre: "Act, or don't", texte: "If everything's fine, you just saved yourself an unnecessary purchase. If something's wrong, Nyctale tells you what to do." },
    ],
    confiance: {
      t1: "Nothing leaves your computer",
      d1: "Nyctale reads your computer's information and analyzes it on the spot. No internet connection is needed to produce a diagnostic.",
      t2: "Read-only",
      d2: "The diagnostic never changes anything on your system. It reads, it analyzes, it explains — the decision is always yours.",
    },
    pro: {
      badge: "For professionals",
      titre: "You repair PCs? Nyctale becomes your client diagnostic tool.",
      texte:
        "A diagnostic your client understands without jargon, a before/after report that justifies the intervention, and a license that follows you across every machine you work on — even from a USB drive, no internet connection required.",
      points: [
        "Before/after report to hand to your client, under your name",
        "PDF export with your own letterhead and company logo",
        "Full technical detail, not just the consumer-facing verdict",
        "Technician license: run Nyctale from a USB drive on the client's PC, nothing to install",
      ],
      cta: "See Pro pricing",
      quote:
        '"The free diagnostic is what you show the client on their own screen so they understand what\'s wrong. The Pro tier is what turns that explanation into a professional document you leave behind."',
      quoteAttr: "— Philosophy of the Pro tier",
    },
    tarifsTitle: "Pricing",
    tarifsSubtitle: "The full diagnostic is always free. The tiers below only cover assisted repair.",
    tarifs: {
      free: { titre: "Diagnostic", prix: "Free", sous: "Unlimited, forever", pts: ["Full system analysis", "Plain-language explanations", "First repair included"] },
      mid: {
        titre: "Repair / monitoring",
        prix: "€24.99",
        sous: "one-time repair, or €19/year · €2/month for ongoing monitoring",
        pts: ["Assisted fix for detected issues", "Full technical detail", "Tracking over time"],
      },
      pro: { titre: "Pro (technicians)", prix: "€29.99", sous: "per month", pts: ["Before/after report for the client", "PDF export with custom letterhead", "No anti-copy, USB license"] },
      acheter: "Choose this tier",
      acheterAnnuel: "or €19/year",
      acheterMensuel: "€2/month",
      acheterGratuit: "Download",
    },
    telecharger: {
      titre: "Ready to find out what's going on?",
      sous: "Windows 10 and 11 · Install in under a minute",
      cta: "Download for Windows",
      store: "Coming soon to the Microsoft Store.",
    },
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "Is the diagnostic really free?",
        r: "Yes, with no time or usage limit. The full analysis, explanations, and a first repair are free. Only further repairs or ongoing monitoring are paid.",
      },
      {
        q: "Does Nyctale work on an old PC?",
        r: "Yes. Nyctale is deliberately lightweight and runs on Windows 10 and 11, regardless of how powerful the machine is — it's actually on the oldest PCs that it's most useful.",
      },
      {
        q: "Does Nyctale change anything on my computer?",
        r: "No. The diagnostic is read-only: it analyzes and explains, but never touches any setting without your explicit consent for each proposed action.",
      },
      {
        q: "Is my data sent anywhere?",
        r: "No, never. Nyctale reads your computer's information and analyzes it locally. No internet connection is needed to produce a diagnostic.",
      },
      {
        q: "What's the difference with the Pro tier?",
        r: "The Pro tier (€29.99/month) is built for computer repair technicians: a before/after report to hand to the client, PDF export with your letterhead, and a license usable from a USB drive on client machines.",
      },
      {
        q: "Will Nyctale try to sell me a new PC?",
        r: "No — that's actually the opposite of its purpose. Nyctale exists to tell you whether a replacement is genuinely justified, or whether a simple fix is enough.",
      },
    ],
    footer: {
      tagline: "Nyctale — La Fabrik Numérique",
      legal: "Legal notice",
      privacy: "Privacy",
      madeBy: "A La Fabrik Numérique software",
      voxcut: "Also check out VoxCut",
    },
  },
} satisfies Record<Lang, unknown>;

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-secondary p-0.5 text-xs font-medium">
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`cursor-pointer rounded-full px-3 py-1 transition ${
            lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Home() {
  const [lang, setLang] = useLang();
  const t = T[lang];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/nyctale_logo.png" alt="Nyctale" className="h-9 w-9 rounded-lg" />
            <span className="text-lg font-semibold tracking-tight">Nyctale</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#fonctions" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.nav.fonctions}
            </a>
            <a href="#tarifs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.nav.tarifs}
            </a>
            <a href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.nav.faq}
            </a>
            <Link to="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.nav.blog}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground md:hidden">
              {t.nav.blog}
            </Link>
            <LangToggle lang={lang} setLang={setLang} />
            <a href="#telecharger">
              <Button size="sm">{t.nav.download}</Button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/video/hero-poster.jpg"
        >
          <source src="/video/hero-loop.webm" type="video/webm" />
          <source src="/video/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/75" />

        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 text-center md:pt-28 md:pb-24">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5" /> {t.hero.badge}
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {t.hero.titleLine1}
            <br className="hidden md:block" /> {t.hero.titleLine2}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#telecharger" onClick={trackDownload}>
              <Button size="lg" className="gap-2">
                {t.hero.cta} <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#comment-ca-marche">
              <Button size="lg" variant="outline">
                {t.hero.ctaSecondary}
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{t.hero.note}</p>
        </div>
      </section>

      {/* PROBLEMES */}
      <section id="fonctions" className="border-t border-border bg-secondary/30 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">{t.problemesTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">{t.problemesSubtitle}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.problemes.map((p) => (
              <Card key={p.titre} className="p-6">
                <p.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{p.titre}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.texte}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT CA MARCHE */}
      <section id="comment-ca-marche" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">{t.etapesTitle}</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {t.etapes.map((e) => (
              <div key={e.n} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {e.n}
                </div>
                <h3 className="mt-4 font-semibold">{e.titre}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIANCE */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="mx-auto grid max-w-4xl gap-8 px-6 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <Lock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">{t.confiance.t1}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.confiance.d1}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MonitorCog className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">{t.confiance.t2}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.confiance.d2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRO / DEPANNEURS */}
      <section id="pro" className="py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <Wrench className="h-3.5 w-3.5" /> {t.pro.badge}
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">{t.pro.titre}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t.pro.texte}</p>
            <ul className="mt-6 space-y-3 text-sm">
              {t.pro.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {pt}
                </li>
              ))}
            </ul>
            <a href="#tarifs" className="mt-8 inline-block">
              <Button size="lg" className="gap-2">
                {t.pro.cta} <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
          <Card className="border-primary/40 p-8">
            <Wrench className="h-8 w-8 text-primary" />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.pro.quote}</p>
            <p className="mt-4 text-xs font-medium text-muted-foreground">{t.pro.quoteAttr}</p>
          </Card>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">{t.tarifsTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">{t.tarifsSubtitle}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <h3 className="text-lg font-semibold">{t.tarifs.free.titre}</h3>
              <p className="mt-1 text-3xl font-bold">{t.tarifs.free.prix}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.tarifs.free.sous}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.tarifs.free.pts.map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> {pt}
                  </li>
                ))}
              </ul>
              <a href="#telecharger" className="mt-6 block" onClick={trackDownload}>
                <Button variant="outline" className="w-full">
                  {t.tarifs.acheterGratuit}
                </Button>
              </a>
            </Card>
            <Card className="border-primary p-6 shadow-lg">
              <h3 className="text-lg font-semibold">{t.tarifs.mid.titre}</h3>
              <p className="mt-1 text-3xl font-bold">{t.tarifs.mid.prix}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.tarifs.mid.sous}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.tarifs.mid.pts.map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> {pt}
                  </li>
                ))}
              </ul>
              <a
                href={CHECKOUT.reparation}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block"
                onClick={() => trackAchat("reparation")}
              >
                <Button className="w-full">{t.tarifs.acheter}</Button>
              </a>
              <div className="mt-3 flex items-center justify-center gap-3 text-xs text-muted-foreground">
                <a
                  href={CHECKOUT.surveillanceAnnuelle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                  onClick={() => trackAchat("surveillance_annuelle")}
                >
                  {t.tarifs.acheterAnnuel}
                </a>
                <span>·</span>
                <a
                  href={CHECKOUT.surveillanceMensuelle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                  onClick={() => trackAchat("surveillance_mensuelle")}
                >
                  {t.tarifs.acheterMensuel}
                </a>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-primary" />
                <h3 className="text-lg font-semibold">{t.tarifs.pro.titre}</h3>
              </div>
              <p className="mt-1 text-3xl font-bold">{t.tarifs.pro.prix}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.tarifs.pro.sous}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.tarifs.pro.pts.map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> {pt}
                  </li>
                ))}
              </ul>
              <a
                href={CHECKOUT.pro}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block"
                onClick={() => trackAchat("pro")}
              >
                <Button variant="outline" className="w-full">
                  {t.tarifs.acheter}
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">{t.faqTitle}</h2>
          <Accordion type="single" collapsible className="mt-10">
            {t.faq.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-left text-base">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{item.r}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* TELECHARGEMENT */}
      <section id="telecharger" className="border-t border-border bg-secondary/30 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Activity className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight">{t.telecharger.titre}</h2>
          <p className="mt-3 text-muted-foreground">{t.telecharger.sous}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="/downloads/Nyctale-Setup-1.0.0.exe" onClick={trackDownload}>
              <Button size="lg" className="gap-2">
                {t.telecharger.cta} <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            {t.telecharger.store}{" "}
            <span onClick={trackStoreDownload} className="cursor-default">
              &nbsp;
            </span>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <img src="/nyctale_logo.png" alt="Nyctale" className="h-6 w-6 rounded" />
            <span>{t.footer.tagline}</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/blog" className="hover:text-foreground transition-colors">
              {t.nav.blog}
            </Link>
            <Link to="/legal" className="hover:text-foreground transition-colors">
              {t.footer.legal}
            </Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-5xl px-6 text-center text-xs text-muted-foreground">
          <a
            href="https://www.lafabriknumerique.fr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCrossLink("lafabriknumerique")}
            className="underline transition-colors hover:text-foreground"
          >
            {t.footer.madeBy}
          </a>
          {" · "}
          <a
            href="https://voxcutpro.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCrossLink("voxcut")}
            className="underline transition-colors hover:text-foreground"
          >
            {t.footer.voxcut}
          </a>
          {" · "}
          <a
            href="https://inoneshot.fr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCrossLink("inoneshot")}
            className="underline transition-colors hover:text-foreground"
          >
            InOneShot
          </a>
          {" · "}
          <a
            href="https://vectorpop.fr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCrossLink("vectorpop")}
            className="underline transition-colors hover:text-foreground"
          >
            VectorPop
          </a>
        </div>
      </footer>
    </main>
  );
}
