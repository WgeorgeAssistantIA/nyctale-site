import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { activerLicence } from "@/lib/api/license";

// Endpoint HTTP simple (pas createServerFn -- voir jeton-licence.server.ts)
// appele directement par l'app Nyctale (Python) en POST JSON. Doit rester
// une route de fichier classique avec des handlers explicites : createServerFn
// utilise un protocole RPC interne pas destine a des clients externes.

const CorpsRequete = z.object({
  cle: z.string().min(8),
  nomInstance: z.string().min(1).max(200),
});

export const Route = createFileRoute("/api/license/activate")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let corps: unknown;
        try {
          corps = await request.json();
        } catch {
          return Response.json({ succes: false, erreur: "corps JSON invalide" }, { status: 400 });
        }

        const analyse = CorpsRequete.safeParse(corps);
        if (!analyse.success) {
          return Response.json({ succes: false, erreur: "paramètres invalides" }, { status: 400 });
        }

        try {
          const resultat = await activerLicence(analyse.data.cle, analyse.data.nomInstance);
          return Response.json(resultat, { status: resultat.succes ? 200 : 400 });
        } catch (erreur) {
          console.error("license/activate:", erreur);
          return Response.json({ succes: false, erreur: "erreur serveur" }, { status: 500 });
        }
      },
    },
  },
});
