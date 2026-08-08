import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/lib/lang";
import { articleBySlug } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Nyctale` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `https://nyctale.fr/blog/${loaderData.slug}` }] : [],
  }),
  component: BlogArticle,
});

const TEXTES = {
  fr: { back: "Retour au blog" },
  en: { back: "Back to blog" },
};

function BlogArticle() {
  const article = Route.useLoaderData();
  const [lang, setLang] = useLang();
  const t = TEXTES[article.lang];

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

      <article className="mx-auto max-w-2xl px-6 py-16 md:py-20">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> {t.back}
        </Link>

        <header className="mt-8 mb-10 border-b border-border pb-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{article.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {new Date(article.date).toLocaleDateString(article.lang === "fr" ? "fr-FR" : "en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {article.readMin} {article.lang === "fr" ? "min de lecture" : "min read"}
          </p>
        </header>

        <div className="space-y-5">
          {article.blocks.map((b, i) => {
            if (b.type === "h2") {
              return (
                <h2 key={i} className="pt-4 text-xl font-semibold tracking-tight">
                  {b.text}
                </h2>
              );
            }
            if (b.type === "ul") {
              return (
                <ul key={i} className="ml-5 list-disc space-y-2 text-muted-foreground leading-relaxed">
                  {b.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {b.text}
              </p>
            );
          })}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> {t.back}
          </Link>
        </div>
      </article>
    </main>
  );
}
