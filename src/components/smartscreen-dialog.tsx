import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { suivre } from "@/lib/analytics";
import { STORE_URL, trackStoreDownload } from "@/lib/download";
import { ArrowRight, CheckCircle2, Store } from "lucide-react";
import type { Lang } from "@/lib/lang";

interface SmartScreenDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lang: Lang;
}

const T = {
  fr: {
    title: "Téléchargement lancé !",
    subtitle: "Si Windows affiche un écran bleu « Windows a protégé votre ordinateur » :",
    explanation:
      "C'est normal : Nyctale est un logiciel récent et indépendant. Windows Defender applique un principe de précaution tant qu'un grand nombre d'exemplaires n'a pas été téléchargé.",
    step1Title: "Étape 1",
    step1Desc: "Cliquez sur « Informations complémentaires » (le petit texte sous le message).",
    step2Title: "Étape 2",
    step2Desc: "Cliquez sur le bouton « Exécuter quand même » qui vient d'apparaître.",
    storeAltTitle: "Vous préférez éviter cet avertissement ?",
    storeAltDesc: "Le Microsoft Store installe Nyctale directement, avec la signature officielle Microsoft et sans aucun écran d'alerte.",
    storeCta: "Installer via le Microsoft Store",
    close: "J'ai compris",
  },
  en: {
    title: "Download started!",
    subtitle: "If Windows displays a blue “Windows protected your PC” screen:",
    explanation:
      "This is completely normal: Nyctale is a new independent application. Windows Defender shows this precaution until the app builds download reputation.",
    step1Title: "Step 1",
    step1Desc: "Click “More info” (the small link under the message).",
    step2Title: "Step 2",
    step2Desc: "Click the “Run anyway” button that appears.",
    storeAltTitle: "Prefer to skip this warning entirely?",
    storeAltDesc: "The Microsoft Store installs Nyctale directly with official Microsoft signing and zero security screens.",
    storeCta: "Install from Microsoft Store",
    close: "Got it",
  },
};

export function SmartScreenDialog({ open, onOpenChange, lang }: SmartScreenDialogProps) {
  const t = T[lang];

  useEffect(() => {
    if (open) suivre("smartscreen_dialog_vue", { lang });
  }, [open, lang]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md sm:max-w-lg">
        <DialogHeader>
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <DialogTitle className="text-center text-xl font-bold">{t.title}</DialogTitle>
          <DialogDescription className="text-center text-sm font-medium text-foreground">
            {t.subtitle}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <p className="text-xs leading-relaxed text-muted-foreground bg-secondary/50 p-3 rounded-lg border border-border">
            {t.explanation}
          </p>

          <div className="space-y-2.5">
            <div className="flex items-start gap-3 rounded-lg border border-border p-3 bg-card">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                1
              </div>
              <div className="text-xs">
                <p className="font-semibold text-foreground">{t.step1Title}</p>
                <p className="text-muted-foreground mt-0.5">{t.step1Desc}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-border p-3 bg-card">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                2
              </div>
              <div className="text-xs">
                <p className="font-semibold text-foreground">{t.step2Title}</p>
                <p className="text-muted-foreground mt-0.5">{t.step2Desc}</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-primary/20 bg-primary/5 p-3.5 text-center">
            <p className="text-xs font-semibold text-foreground flex items-center justify-center gap-1.5">
              <Store className="h-4 w-4 text-primary" /> {t.storeAltTitle}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{t.storeAltDesc}</p>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackStoreDownload("smartscreen_dialog");
                onOpenChange(false);
              }}
              className="mt-2.5 inline-block w-full"
            >
              <Button size="sm" variant="default" className="w-full gap-1.5 text-xs">
                {t.storeCta} <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)}>
            {t.close}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
