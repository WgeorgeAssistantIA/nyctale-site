import { signerJeton, VARIANT_VERS_PALIER } from "../jeton-licence.server";

// API License Keys de Lemon Squeezy -- endpoints publics, ne demandent PAS
// la cle API du compte (contrairement au reste de leur API). Meme URL que
// VoxCut/desktop/voxcut/license.py, meme raison d'etre : on n'a besoin que
// de la cle de licence elle-meme pour activer/valider une instance.
const LS_API = "https://api.lemonsqueezy.com/v1/licenses";

type LsActivateReponse = {
  activated?: boolean;
  error?: string;
  instance?: { id: string };
  meta?: { variant_id?: number };
};

type LsValidateReponse = {
  valid?: boolean;
  error?: string;
  meta?: { variant_id?: number };
};

function palierDepuisVariant(variantId: number | undefined): string | null {
  if (variantId === undefined) return null;
  return VARIANT_VERS_PALIER[String(variantId)] ?? null;
}

// Une panne ou une limite de debit cote Lemon Squeezy (5xx, 429) n'est PAS
// un refus de licence : on leve une exception pour que la route reponde 503
// et que l'app ne marque pas la licence comme refusee (elle traite tout 4xx
// comme un refus).
function verifierDisponibiliteLs(reponse: Response) {
  if (reponse.status >= 500 || reponse.status === 429) {
    throw new Error(`Lemon Squeezy indisponible (HTTP ${reponse.status})`);
  }
}

export async function activerLicence(cle: string, nomInstance: string) {
  const reponse = await fetch(`${LS_API}/activate`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ license_key: cle.trim(), instance_name: nomInstance }),
    signal: AbortSignal.timeout(8000),
  });
  verifierDisponibiliteLs(reponse);
  const resultat = (await reponse.json()) as LsActivateReponse;

  if (!resultat.activated || !resultat.instance) {
    return { succes: false as const, erreur: resultat.error ?? "clé de licence invalide" };
  }

  const palier = palierDepuisVariant(resultat.meta?.variant_id);
  if (!palier) {
    // Cle Lemon Squeezy valide mais rattachee a un produit qu'on ne
    // reconnait pas (ex. VoxCut/InOneShot/VectorPop, meme compte LS) --
    // ne JAMAIS signer un jeton pour un palier inconnu.
    return { succes: false as const, erreur: "cette clé ne correspond à aucun palier Nyctale" };
  }

  const jeton = signerJeton(palier as Parameters<typeof signerJeton>[0], resultat.instance.id);
  return { succes: true as const, jeton, instanceId: resultat.instance.id };
}

export async function rafraichirLicence(cle: string, instanceId: string) {
  const reponse = await fetch(`${LS_API}/validate`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ license_key: cle.trim(), instance_id: instanceId }),
    signal: AbortSignal.timeout(8000),
  });
  verifierDisponibiliteLs(reponse);
  const resultat = (await reponse.json()) as LsValidateReponse;

  if (!resultat.valid) {
    return { succes: false as const, erreur: resultat.error ?? "licence invalide ou révoquée" };
  }

  const palier = palierDepuisVariant(resultat.meta?.variant_id);
  if (!palier) {
    return { succes: false as const, erreur: "cette clé ne correspond à aucun palier Nyctale" };
  }

  const jeton = signerJeton(palier as Parameters<typeof signerJeton>[0], instanceId);
  return { succes: true as const, jeton };
}
