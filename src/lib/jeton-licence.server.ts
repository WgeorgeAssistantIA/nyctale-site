import crypto from "node:crypto";

// Signature des jetons de licence Nyctale (Ed25519).
//
// La cle privee ne vit QUE dans la variable d'environnement Vercel
// LICENSE_SIGNING_PRIVATE_KEY (base64, 32 octets bruts) -- jamais commitee.
// La cle publique correspondante est embarquee en clair dans l'app
// (Nyctale/app/jeton_licence.py, CLE_PUBLIQUE_B64) : c'est elle qui
// verifie, cote client, que le jeton n'a pas ete falsifie.
//
// Format du jeton : <charge-utile-b64url>.<signature-b64url>
// Charge utile (JSON compact) : {"palier","instance_id","iat","exp"}

const DUREE_VALIDITE_SECONDES = 30 * 24 * 3600; // 30 jours, voir memoire nyctale-licence-jeton-signe-plan

export type Palier = "reparation" | "surveillance_annuelle" | "surveillance_mensuelle" | "pro";

// Variant ID Lemon Squeezy -> palier (voir memoire nyctale-lemonsqueezy-identifiants)
export const VARIANT_VERS_PALIER: Record<string, Palier> = {
  "1996568": "reparation",
  "1996576": "surveillance_annuelle",
  "1996579": "surveillance_mensuelle",
  "1996583": "pro",
};

function base64UrlEncode(buf: Buffer): string {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function clePriveeDepuisEnv(): crypto.KeyObject {
  const brut = process.env.LICENSE_SIGNING_PRIVATE_KEY;
  if (!brut) {
    throw new Error("LICENSE_SIGNING_PRIVATE_KEY manquante (variable d'environnement Vercel)");
  }
  const d = Buffer.from(brut, "base64");
  if (d.length !== 32) {
    throw new Error(`LICENSE_SIGNING_PRIVATE_KEY invalide : ${d.length} octets au lieu de 32`);
  }
  // Node exige un champ 'x' (partie publique) dans le JWK mais ignore sa
  // valeur pour la signature -- il derive la vraie cle publique depuis 'd'.
  // Verifie empiriquement le 08/08/2026 : un 'x' bidon produit la meme
  // signature qu'un 'x' correct. Evite de stocker/deriver la partie
  // publique separement.
  return crypto.createPrivateKey({
    key: { kty: "OKP", crv: "Ed25519", d: base64UrlEncode(d), x: base64UrlEncode(Buffer.alloc(32)) },
    format: "jwk",
  });
}

export function signerJeton(palier: Palier, instanceId: string): string {
  const maintenant = Math.floor(Date.now() / 1000);
  const chargeUtile = {
    palier,
    instance_id: instanceId,
    iat: maintenant,
    exp: maintenant + DUREE_VALIDITE_SECONDES,
  };
  const chargeBrute = Buffer.from(JSON.stringify(chargeUtile), "utf-8");
  const signature = crypto.sign(null, chargeBrute, clePriveeDepuisEnv());
  return `${base64UrlEncode(chargeBrute)}.${base64UrlEncode(signature)}`;
}
