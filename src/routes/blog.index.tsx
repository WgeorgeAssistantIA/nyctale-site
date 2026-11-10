import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { articlesForLang } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Guides Dépannage & Diagnostic PC (Windows 10/11) — Blog Nyctale" },
      {
        name: "description",
        content:
          "Guides pratiques sans jargon pour diagnostiquer et réparer un PC lent, un ventilateur bruyant, un disque à 100 %, un écran bleu ou des redémarrages sous Windows 10 et 11.",
      },
      { property: "og:title", content: "Guides Dépannage & Diagnostic PC (Windows 10/11) — Blog Nyctale" },
      {
        property: "og:description",
        content:
          "Guides pratiques sans jargon pour diagnostiquer et réparer un PC lent, un ventilateur bruyant, un disque à 100 %, un écran bleu ou des redémarrages sous Windows 10 et 11.",
      },
      { property: "og:url", content: "https://nyctale.fr/blog" },
    ],
    links: [{ rel: "canonical", href: "https://nyctale.fr/blog" }],
  }),
  component: BlogIndex,
});

const TEXTES = {
  fr: {
    titre: "Guides & Diagnostics PC",
    sousTitre:
      "Comprendre ce qui ralentit, fait chauffer ou fait planter votre ordinateur sous Windows 10 et 11 — sans jargon et sans logiciel inutile.",
    back: "Retour à l'accueil",
    lire: "Lire le guide",
    minutes: "min de lecture",
    otherLangTitle: "Guides in English (Windows 10 & 11 Troubleshooting)",
  },
  en: {
    titre: "PC Diagnostic & Troubleshooting Guides",
    sousTitre:
      "Understand in plain English what is slowing down, overheating or crashing your Windows 10 or 11 computer — and how to fix it.",
    back: "Back to home",
    lire: "Read guide",
    minutes: "min read",
    otherLangTitle: "Guides en français (Dépannage Windows 10 et 11)",
  },
};

function BlogIndex() {
  const [lang, setLang] = useLang();
  const t = TEXTES[lang];
  const posts = articlesForLang(lang);
  const otherPosts = articlesForLang(lang === "fr" ? "en" : "fr");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
          <Link to={lang === "en" ? "/en" : "/"} className="flex items-center gap-2">
            <img src="/nyctale_logo.png" alt="Nyctale" className="h-9 w-9 rounded-lg" />
            <span className="text-lg font-semibold tracking-tight">Nyctale</span>
          </Link>
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
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <Link to={lang === "en" ? "/en" : "/"} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> {t.back}
        </Link>

        <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">{t.titre}</h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">{t.sousTitre}</p>

        <div className="mt-12 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <h2 className="text-xl font-semibold tracking-tight">{post.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                {t.lire} <ArrowRight className="h-3.5 w-3.5" />
                <span className="ml-2 text-xs font-normal text-muted-foreground">
                  · {post.readMin} {t.minutes}
                </span>
              </p>
            </Link>
          ))}
        </div>

        {/* Section secondaire indexable pour le maillage interne bilingue (Googlebot decouvre 100 % des articles FR + EN depuis /blog) */}
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-lg font-semibold tracking-tight text-muted-foreground">{t.otherLangTitle}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {otherPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  onClick={() => setLang(post.lang)}
                  className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-6 px-6">
          <Link to={lang === "en" ? "/en" : "/"} className="hover:text-foreground">
            {t.back}
          </Link>
          <Link to="/diagnostic-crash-pc" className="hover:text-foreground">
            {lang === "fr" ? "Diagnostic Crash & Kernel-Power 41" : "PC Crash & Kernel-Power 41"}
          </Link>
          <Link to="/terms" className="hover:text-foreground">
            {lang === "fr" ? "CGU / CGV" : "Terms"}
          </Link>
          <Link to="/legal" className="hover:text-foreground">
            {lang === "fr" ? "Mentions légales" : "Legal notice"}
          </Link>
          <Link to="/privacy" className="hover:text-foreground">
            {lang === "fr" ? "Confidentialité" : "Privacy"}
          </Link>
        </div>
      </footer>
    </main>
  );
}
