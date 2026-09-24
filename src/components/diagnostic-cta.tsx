import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXE_URL, STORE_URL, trackDownload, trackStoreDownload } from "@/lib/download";
import type { Lang } from "@/lib/lang";

const TEXTES = {
  fr: {
    milieuTitre: "Vous voulez connaître la cause sur votre PC ?",
    milieuTexte:
      "Nyctale fait ce diagnostic à votre place en 19 secondes, et vous l'explique sans jargon. Gratuit, en lecture seule, rien n'est envoyé en ligne.",
    finTitre: "Arrêtez de deviner : faites le diagnostic",
    finTexte:
      "Nyctale analyse votre ordinateur en 19 secondes et dit en clair ce qui le ralentit ou le fait chauffer — y compris quand aucun logiciel ne peut le réparer.",
    store: "Installer depuis le Microsoft Store",
    exe: "ou télécharger l'installeur Windows (.exe)",
    note: "Gratuit · Windows 10 et 11 · aucune inscription",
    alt: "Verdict réel de Nyctale : le problème ne vient pas d'un logiciel, mais du refroidissement",
  },
  en: {
    milieuTitre: "Want to know the cause on your own PC?",
    milieuTexte:
      "Nyctale runs this diagnostic for you in 19 seconds and explains it without jargon. Free, read-only, nothing is sent online.",
    finTitre: "Stop guessing: run the diagnostic",
    finTexte:
      "Nyctale scans your computer in 19 seconds and tells you in plain words what is slowing it down or heating it up — even when no software can fix it.",
    store: "Get it from the Microsoft Store",
    exe: "or download the Windows installer (.exe)",
    note: "Free · Windows 10 and 11 · no sign-up",
    alt: "Real Nyctale verdict: the problem is not software, it is the cooling",
  },
} satisfies Record<Lang, unknown>;

type Props = { lang: Lang; variante: "milieu" | "fin"; slug: string };

export function DiagnosticCta({ lang, variante, slug }: Props) {
  const t = TEXTES[lang];
  const origine = `blog_${variante}_${slug}`;
  const fin = variante === "fin";

  return (
    <aside
      className={`not-prose rounded-xl border border-primary/40 bg-card p-6 ${fin ? "md:p-8" : ""}`}
    >
      <p className={`font-semibold tracking-tight ${fin ? "text-2xl" : "text-lg"}`}>
        {fin ? t.finTitre : t.milieuTitre}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {fin ? t.finTexte : t.milieuTexte}
      </p>
      {fin && (
        <img
          src={`/verdict-${lang}.webp`}
          alt={t.alt}
          width={lang === "fr" ? 1236 : 1140}
          height={1050}
          loading="lazy"
          className="mt-6 w-full rounded-lg border border-border"
        />
      )}
      <div className="mt-5 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
        <a
          href={STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackStoreDownload(origine)}
        >
          <Button className="gap-2">
            {t.store} <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
        <a
          href={EXE_URL}
          onClick={() => trackDownload(origine)}
          className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          {t.exe}
        </a>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{t.note}</p>
    </aside>
  );
}
