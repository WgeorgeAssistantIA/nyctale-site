// Texte de l'encart « milieu d'article », adapté au problème de l'article.
// Mesure PostHog au 10/11/2026 : 1 % des lecteurs du blog cliquaient sur
// l'encart générique, contre ~9 % des visiteurs de l'accueil. L'encart
// reprend donc la question que se pose le lecteur à cet endroit.
// N'y promettre que ce que Nyctale vérifie réellement (liste des contrôles
// de la page d'accueil) ; sans entrée, l'encart garde son texte générique.

export type CtaArticle = { titre: string; texte: string };

export const CTA_ARTICLES: Record<string, CtaArticle> = {
  // --- FR ---
  "ventilateur-qui-ne-sarrete-plus": {
    titre: "Poussière ou programme qui tourne en fond ?",
    texte:
      "Nyctale fait la différence en 19 secondes : il regarde la charge réelle du processeur, ce qui la provoque et si la machine surchauffe, puis vous dit en clair si c'est un nettoyage ou un réglage qu'il faut.",
  },
  "windows-11-lent-apres-mise-a-jour": {
    titre: "Votre PC est plus lent depuis la mise à jour ?",
    texte:
      "Nyctale vérifie en 19 secondes ce qui a changé : programmes au démarrage, disque, mémoire et fichiers système de Windows. Vous savez si c'est passager ou s'il faut corriger quelque chose.",
  },
  "disque-a-100-pourcent-windows": {
    titre: "Qu'est-ce qui occupe votre disque à 100 % ?",
    texte:
      "Nyctale vous le dit en 19 secondes : le programme qui sollicite le disque, l'espace libre restant et l'état de santé du disque lui-même. Vous savez si c'est un réglage ou un disque qui fatigue.",
  },
  "memoire-ram-saturee-comment-la-lire": {
    titre: "Qui consomme votre mémoire, vraiment ?",
    texte:
      "Nyctale lit la mémoire à votre place en 19 secondes et vous montre ce qui l'occupe, navigateur compris, sans chiffres à interpréter. Vous savez si fermer des onglets suffit ou si le PC manque de RAM.",
  },
  "pc-qui-redemarre-tout-seul": {
    titre: "Pourquoi votre PC a-t-il redémarré ?",
    texte:
      "Nyctale lit pour vous le journal de Windows (événements 41, 6008 et 1001), compte les vrais redémarrages sans doublons et vérifie la surchauffe et le disque. Le tout en 19 secondes, sans ouvrir l'Observateur d'événements.",
  },
  "disque-dur-va-lacher-signes": {
    titre: "Votre disque montre-t-il des signes de fatigue ?",
    texte:
      "Nyctale lit l'état de santé du disque en 19 secondes et vous le traduit en clair : tout va bien, à surveiller, ou sauvegarde à faire maintenant.",
  },
  "pc-lent-au-demarrage": {
    titre: "Qu'est-ce qui ralentit votre démarrage ?",
    texte:
      "Nyctale liste en 19 secondes les programmes lancés au démarrage et vérifie le disque et la charge de la machine. Vous savez quoi désactiver sans risquer de toucher à l'essentiel.",
  },
  "programmes-au-demarrage-lesquels-desactiver": {
    titre: "Lesquels désactiver sur votre PC ?",
    texte:
      "Nyctale passe en revue vos programmes au démarrage en 19 secondes et vous dit lesquels pèsent vraiment, en français et sans jargon.",
  },
  "temperature-normale-processeur-carte-graphique": {
    titre: "Votre PC chauffe-t-il trop ?",
    texte:
      "Nyctale relève la température et la charge en 19 secondes, et vous dit si c'est normal pour votre machine ou si un nettoyage s'impose.",
  },
  "pc-qui-rame-sans-raison": {
    titre: "Il y a toujours une raison. Trouvez la vôtre.",
    texte:
      "Nyctale vérifie en 19 secondes la charge, la mémoire, le disque, la surchauffe et les programmes au démarrage, puis vous dit en clair ce qui ralentit votre PC.",
  },
  "pc-qui-freeze-materiel-ou-logiciel": {
    titre: "Matériel ou logiciel : tranchez en 19 secondes",
    texte:
      "Nyctale relève les plantages enregistrés par Windows, la santé du disque, la surchauffe et la mémoire. Vous savez s'il faut réparer un logiciel ou surveiller une pièce.",
  },
  "ecran-bleu-windows-11": {
    titre: "Votre écran bleu a-t-il laissé des traces ?",
    texte:
      "Nyctale retrouve en 19 secondes les plantages enregistrés par Windows, y compris les écrans bleus que le redémarrage automatique vous a cachés, et vérifie le disque et la surchauffe.",
  },

  "batterie-de-portable-qui-se-vide-vite": {
    titre: "Batterie usée ou réglage à corriger ?",
    texte:
      "Nyctale calcule en 19 secondes l'usure de la batterie de votre portable et vous dit en clair si elle est usée. Il repère aussi un programme qui occupe le processeur en continu ou trop de programmes au démarrage.",
  },

  // --- EN ---
  "fan-that-never-stops-spinning": {
    titre: "Dust or a program running in the background?",
    texte:
      "Nyctale tells the two apart in 19 seconds: it checks real CPU load, what is causing it and whether the machine is overheating, then tells you in plain words whether you need a clean-out or a setting change.",
  },
  "windows-11-slow-after-update": {
    titre: "Slower since the update?",
    texte:
      "Nyctale checks what changed in 19 seconds: startup programs, disk, memory and Windows system files. You will know whether it is temporary or something needs fixing.",
  },
  "disk-100-percent-windows": {
    titre: "What is keeping your disk at 100%?",
    texte:
      "Nyctale tells you in 19 seconds: the program hammering the disk, the free space left and the health of the disk itself. You will know whether it is a setting or a tiring drive.",
  },
  "ram-full-how-to-read-memory-usage": {
    titre: "What is really using your memory?",
    texte:
      "Nyctale reads memory usage for you in 19 seconds and shows what is filling it, browser included, with no numbers to decode. You will know whether closing tabs is enough or the PC is short on RAM.",
  },
  "pc-restarts-by-itself": {
    titre: "Why did your PC restart?",
    texte:
      "Nyctale reads the Windows log for you (events 41, 6008 and 1001), counts real restarts without duplicates and checks overheating and the disk. All in 19 seconds, without opening Event Viewer.",
  },
  "failing-hard-drive-signs": {
    titre: "Is your drive showing signs of wear?",
    texte:
      "Nyctale reads your disk's health in 19 seconds and translates it into plain words: all good, keep an eye on it, or back up now.",
  },
  "slow-pc-startup": {
    titre: "What is slowing down your startup?",
    texte:
      "Nyctale lists the programs launched at startup in 19 seconds and checks the disk and overall load. You will know what to disable without touching anything essential.",
  },
  "startup-programs-which-ones-to-disable": {
    titre: "Which ones should you disable on your PC?",
    texte:
      "Nyctale reviews your startup programs in 19 seconds and tells you which ones really weigh on your PC, in plain words.",
  },
  "normal-cpu-gpu-temperatures": {
    titre: "Is your PC running too hot?",
    texte:
      "Nyctale checks temperature and load in 19 seconds and tells you whether it is normal for your machine or a clean-out is due.",
  },
  "slow-computer-no-obvious-reason": {
    titre: "There is always a reason. Find yours.",
    texte:
      "Nyctale checks load, memory, disk, overheating and startup programs in 19 seconds, then tells you in plain words what is slowing your PC down.",
  },
  "pc-freezes-hardware-or-software": {
    titre: "Hardware or software: settle it in 19 seconds",
    texte:
      "Nyctale reads the crashes Windows recorded, disk health, overheating and memory. You will know whether to fix a program or watch a component.",
  },
  "windows-11-blue-screen-fix": {
    titre: "Did your blue screen leave traces?",
    texte:
      "Nyctale finds the crashes Windows recorded in 19 seconds, including blue screens hidden by automatic restart, and checks the disk and overheating.",
  },
  "laptop-battery-draining-fast": {
    titre: "Worn battery or a setting to fix?",
    texte:
      "Nyctale computes your laptop battery's wear in 19 seconds and tells you plainly whether it is worn. It also spots a program keeping the processor busy or too many startup programs.",
  },
};
