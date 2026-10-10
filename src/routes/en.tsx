import { createFileRoute } from "@tanstack/react-router";
import { Home, T } from "./index";
import { MICROSOFT_STORE_ID } from "@/lib/download";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: "Slow or overheating PC? Find the cause and fix it – Nyctale" },
      {
        name: "description",
        content:
          "Nyctale finds in 19 seconds why your PC is slow or overheating, and helps you fix it. Free diagnostic, full version €24.99 one-time. Windows 10 and 11.",
      },
      {
        property: "og:title",
        content: "Slow computer? Run the diagnostic before replacing it",
      },
      {
        property: "og:description",
        content:
          "Nyctale finds in 19 seconds why your PC is slow or overheating, and helps you fix it. 100% local, no subscription.",
      },
      { property: "og:url", content: "https://nyctale.fr/en" },
    ],
    links: [
      { rel: "canonical", href: "https://nyctale.fr/en" },
      { rel: "alternate", hrefLang: "fr", href: "https://nyctale.fr/" },
      { rel: "alternate", hrefLang: "en", href: "https://nyctale.fr/en" },
      { rel: "alternate", hrefLang: "x-default", href: "https://nyctale.fr/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Nyctale",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Windows, Linux",
          description:
            "PC Diagnostic and repair: Nyctale explains in plain language why your computer overheats or slows down, and helps you fix it. 100% local and private.",
          url: "https://nyctale.fr/en",
          sameAs: [
            "https://www.wikidata.org/wiki/Q141656931",
            `https://apps.microsoft.com/detail/${MICROSOFT_STORE_ID}`,
          ],
          image: "https://nyctale.fr/nyctale_logo.png",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "34",
            bestRating: "5",
            worstRating: "1",
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "EUR",
            lowPrice: "0",
            highPrice: "29.99",
            offerCount: "3",
            offers: [
              { "@type": "Offer", name: "Nyctale Diagnostic", price: "0", priceCurrency: "EUR" },
              {
                "@type": "Offer",
                name: "Nyctale Full version",
                price: "24.99",
                priceCurrency: "EUR",
              },
              {
                "@type": "Offer",
                name: "Nyctale Pro (technicians)",
                price: "29.99",
                priceCurrency: "EUR",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "29.99",
                  priceCurrency: "EUR",
                  unitCode: "MON",
                },
              },
            ],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "La Fabrik Numérique",
          url: "https://www.lafabriknumerique.fr",
          founder: { "@type": "Person", name: "William GEORGE", jobTitle: "Founder", url: "https://www.lafabriknumerique.fr" },
          logo: "https://nyctale.fr/nyctale_logo.png",
          sameAs: [`https://apps.microsoft.com/detail/${MICROSOFT_STORE_ID}`],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Nyctale",
          url: "https://nyctale.fr/en",
          inLanguage: "en",
          description: "PC diagnostic: Nyctale explains why your computer is slow or overheating and helps you fix it.",
          publisher: { "@type": "Organization", name: "La Fabrik Numérique", url: "https://www.lafabriknumerique.fr" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: T.en.faq.map((item: { q: string; r: string }) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.r,
            },
          })),
        }),
      },
    ],
  }),
  component: () => <Home forceLang="en" />,
});
