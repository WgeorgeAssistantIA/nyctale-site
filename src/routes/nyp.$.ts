import { createFileRoute } from "@tanstack/react-router";

// Proxy same-origin vers PostHog EU (voir src/lib/analytics.ts). Les bloqueurs
// de pub coupent les appels directs a *.posthog.com ; relayes par nyctale.fr,
// ils passent. Meme principe que le proxy /vsp de VidScope.
// L'IP du visiteur n'est volontairement PAS transmise : PostHog ne voit que
// celle du serveur Vercel (mesure anonyme, cf. politique de confidentialite).
const HOTE_API = "https://eu.i.posthog.com";
const HOTE_STATIQUE = "https://eu-assets.i.posthog.com";

async function relayer({ request, params }: { request: Request; params: { _splat?: string } }) {
  const chemin = params._splat ?? "";
  const url = new URL(request.url);
  const hote = chemin.startsWith("static/") ? HOTE_STATIQUE : HOTE_API;
  const cible = `${hote}/${chemin}${url.search}`;

  const entetes = new Headers();
  for (const nom of ["content-type", "content-encoding", "user-agent", "accept"]) {
    const valeur = request.headers.get(nom);
    if (valeur) entetes.set(nom, valeur);
  }

  const reponse = await fetch(cible, {
    method: request.method,
    headers: entetes,
    body:
      request.method === "GET" || request.method === "HEAD"
        ? undefined
        : await request.arrayBuffer(),
  });

  const sortie = new Headers();
  for (const nom of ["content-type", "cache-control"]) {
    const valeur = reponse.headers.get(nom);
    if (valeur) sortie.set(nom, valeur);
  }
  return new Response(reponse.body, { status: reponse.status, headers: sortie });
}

export const Route = createFileRoute("/nyp/$")({
  server: {
    handlers: {
      GET: relayer,
      POST: relayer,
    },
  },
});
