import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Lang } from "@/lib/lang";

interface VideoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoSrc: string;
  subtitleSrc?: string;
  poster?: string;
  title: string;
  subtitle?: string;
  lang?: Lang;
}

export function VideoDialog({
  open,
  onOpenChange,
  videoSrc,
  subtitleSrc,
  poster,
  title,
  subtitle,
  lang = "fr",
}: VideoDialogProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    } else {
      const timer = setTimeout(() => {
        videoRef.current?.play().catch(() => {
          // Autoplay with sound may be blocked until user gesture, controls allow direct playback
        });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl border-border/80 bg-background/95 p-3 sm:p-6 shadow-2xl backdrop-blur-xl">
        <DialogHeader className="mb-2 text-left pr-8">
          <DialogTitle className="text-lg sm:text-xl font-bold tracking-tight">{title}</DialogTitle>
          {subtitle && (
            <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
              {subtitle}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-black shadow-inner">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-contain"
          >
            {subtitleSrc && (
              <track
                kind="subtitles"
                src={subtitleSrc}
                srcLang={lang}
                label={lang === "fr" ? "Français" : "English"}
                default
              />
            )}
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
}
