import { useEffect, useState } from "react";

export type Lang = "fr" | "en";

const STORAGE_KEY = "nyctale-lang";

/**
 * Meme mecanisme que privacy.tsx/legal.tsx (deja en prod) : la langue vit
 * dans localStorage, pas dans l'URL. Un seul hook partage pour ne pas
 * dupliquer ce boilerplate sur chaque page (accueil, blog, articles).
 */
export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Lang | null;
    if (saved === "en" || saved === "fr") setLang(saved);
  }, []);

  const changeLang = (l: Lang) => {
    setLang(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // tant pis, le choix vaudra pour cette session seulement
    }
  };

  return [lang, changeLang];
}
