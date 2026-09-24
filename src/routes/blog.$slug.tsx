import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/lib/lang";
import { articleBySlug } from "@/lib/blog-posts";
import { DiagnosticCta } from "@/components/diagnostic-cta";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.seoTitle ?? `${loaderData.title} — Nyctale` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.seoTitle ?? loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
        ]
      : [],
    links: loaderData
      ? [
          { rel: "canonical", href: `https://nyctale.fr/blog/${loaderData.slug}` },
          // hreflang : relie les versions FR et EN d'un meme article (le FR
          // sert de version par defaut).
          ...(loaderData.traduction
            ? (() => {
                const url = (slug: string) => `https://nyctale.fr/blog/${slug}`;
                const fr = loaderData.lang === "fr" ? loaderData.slug : loaderData.traduction;
                const en = loaderData.lang === "en" ? loaderData.slug : loaderData.traduction;
                return [
                  { rel: "alternate", hrefLang: "fr", href: url(fr) },
                  { rel: "alternate", hrefLang: "en", href: url(en) },
                  { rel: "alternate", hrefLang: "x-default", href: url(fr) },
                ];
              })()
            : []),
        ]
      : [],
    scripts: loaderData
      ? [
          ...(loaderData.faq
            ? [
                {
                  type: "application/ld+json",
                  children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: loaderData.faq.map((item) => ({
                      "@type": "Question",
                      name: item.q,
                      acceptedAnswer: { "@type": "Answer", text: item.r },
                    })),
                  }),
                },
              ]
            : []),
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: loaderData.title,
              description: loaderData.excerpt,
              datePublished: loaderData.date,
              dateModified: loaderData.updated ?? loaderData.date,
              author: { "@type": "Organization", name: "La Fabrik Numérique" },
              publisher: {
                "@type": "Organization",
                name: "La Fabrik Numérique",
                logo: {
                  "@type": "ImageObject",
                  url: "https://nyctale.fr/nyctale_logo.png",
                },
              },
              mainEntityOfPage: `https://nyctale.fr/blog/${loaderData.slug}`,
              url: `https://nyctale.fr/blog/${loaderData.slug}`,
            }),
          },
        ]
      : [],
  }),
  component: BlogArticle,
});

const TEXTES = {
  fr: { back: "Retour au blog", majLe: "mis à jour le", faq: "Questions fréquentes" },
  en: { back: "Back to blog", majLe: "updated", faq: "Frequently asked questions" },
};

function dateLisible(iso: string, lang: "fr" | "en") {
  return new Date(iso).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogArticle() {
  const article = Route.useLoaderData();
  const [lang, setLang] = useLang();
  const t = TEXTES[article.lang];
  const intertitres = article.blocks.flatMap((b, i) => (b.type === "h2" ? [i] : []));
  const indexMilieu = intertitres[1] ?? -1;

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
            {dateLisible(article.date, article.lang)}
            {article.updated && ` (${t.majLe} ${dateLisible(article.updated, article.lang)})`} ·{" "}
            {article.readMin} {article.lang === "fr" ? "min de lecture" : "min read"}
          </p>
        </header>

        <div className="space-y-5">
          {article.blocks.map((b, i) => {
            if (b.type === "h2") {
              // Encart d'appel au milieu : juste avant le 2e intertitre, quand
              // le lecteur a compris la cause mais pas encore comment la trouver.
              const milieu = i === indexMilieu;
              return (
                <div key={i} className="space-y-5">
                  {milieu && (
                    <div className="py-4">
                      <DiagnosticCta lang={article.lang} variante="milieu" slug={article.slug} />
                    </div>
                  )}
                  <h2 className="pt-4 text-xl font-semibold tracking-tight">{b.text}</h2>
                </div>
              );
            }
            if (b.type === "h3") {
              return (
                <h3 key={i} className="pt-2 text-lg font-semibold tracking-tight">
                  {b.text}
                </h3>
              );
            }
            if (b.type === "ul" || b.type === "ol") {
              const Liste = b.type;
              return (
                <Liste
                  key={i}
                  className={`ml-5 space-y-2 text-muted-foreground leading-relaxed ${
                    b.type === "ol" ? "list-decimal" : "list-disc"
                  }`}
                >
                  {b.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </Liste>
              );
            }
            if (b.type === "img") {
              return (
                <figure key={i} className="py-2">
                  <img
                    src={b.src}
                    alt={b.alt}
                    loading="lazy"
                    className="w-full rounded-lg border border-border"
                  />
                  {b.caption && (
                    <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                      {b.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }
            return (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {b.text}
              </p>
            );
          })}
        </div>

        {article.faq && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight">{t.faq}</h2>
            <div className="mt-5 space-y-5">
              {article.faq.map((item) => (
                <div key={item.q}>
                  <h3 className="font-semibold">{item.q}</h3>
                  <p className="mt-1 text-muted-foreground leading-relaxed">{item.r}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12">
          <DiagnosticCta
            lang={article.lang}
            variante="fin"
            slug={article.slug}
            avecCapture={!article.blocks.some((b) => b.type === "img")}
          />
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
