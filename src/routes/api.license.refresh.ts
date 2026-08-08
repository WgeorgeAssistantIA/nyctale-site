import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { rafraichirLicence } from "@/lib/api/license";

const CorpsRequete = z.object({
  cle: z.string().min(8),
  instanceId: z.string().min(1),
});

export const Route = createFileRoute("/api/license/refresh")({
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
          const resultat = await rafraichirLicence(analyse.data.cle, analyse.data.instanceId);
          return Response.json(resultat, { status: resultat.succes ? 200 : 400 });
        } catch (erreur) {
          console.error("license/refresh:", erreur);
          return Response.json({ succes: false, erreur: "erreur serveur" }, { status: 500 });
        }
      },
    },
  },
});
