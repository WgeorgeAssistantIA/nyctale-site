import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { articlesForLang } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Nyctale" },
      {
        name: "description",
        content: "Conseils pour comprendre et résoudre les problèmes les plus fréquents d'un ordinateur qui rame, chauffe ou inquiète.",
      },
    ],
    links: [{ rel: "canonical", href: "https://nyctale.fr/blog" }],
  }),
  component: BlogIndex,
});

const TEXTES = {
  fr: { titre: "Blog", back: "Retour à l'accueil", lire: "Lire l'article", minutes: "min de lecture" },
  en: { titre: "Blog", back: "Back to home", lire: "Read article", minutes: "min read" },
};

function BlogIndex() {
  const [lang, setLang] = useLang();
  const t = TEXTES[lang];
  const posts = articlesForLang(lang);

  return (
    <main className="min-h-screen bg-background text-foreground">
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
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> {t.back}
        </Link>

        <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">{t.titre}</h1>

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
      </div>
    </main>
  );
}
