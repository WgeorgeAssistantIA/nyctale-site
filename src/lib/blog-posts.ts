import type { Lang } from "./lang";

export type Bloc =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "img"; src: string; alt: string; caption?: string };

export type Article = {
  slug: string;
  lang: Lang;
  title: string;
  // Balise <title> : calee sur les requetes reelles de la Search Console
  // (« ordinateur qui rame », « ventilateur pc a fond »...) quand le titre
  // affiche dans la page est plus editorial.
  seoTitle?: string;
  // Slug de la meme page dans l'autre langue : balises hreflang.
  traduction?: string;
  excerpt: string;
  date: string;
  updated?: string;
  readMin: number;
  blocks: Bloc[];
  faq?: { q: string; r: string }[];
  // Slugs d'articles de la meme langue, affiches en « A lire aussi ».
  liens?: string[];
};

export const articles: Article[] = [
  // -------------------------------------------------------------------
  // FR 1 / EN 1 — PC lent
  // -------------------------------------------------------------------
  {
    slug: "pc-qui-rame-sans-raison",
    lang: "fr",
    traduction: "slow-computer-no-obvious-reason",
    title: "Ordinateur qui rame : 9 causes fréquentes et comment trouver la vôtre",
    seoTitle: "Ordinateur qui rame : causes et solutions (Windows 10 et 11)",
    excerpt:
      "Un PC qui rame a toujours une cause précise, logicielle dans la plupart des cas. Les 9 causes les plus fréquentes, la méthode pour trouver la vôtre en 10 minutes, et les solutions.",
    date: "2026-08-08",
    updated: "2026-09-25",
    readMin: 10,
    blocks: [
      {
        type: "p",
        text: "Un ordinateur qui rame n'est pas « usé » : il a toujours une cause précise. Dans la grande majorité des cas, elle est logicielle (programmes au démarrage, navigateur, mémoire saturée, Windows qui travaille en arrière-plan) et se corrige gratuitement, sans racheter de machine.",
      },
      {
        type: "p",
        text: "Le scénario est presque toujours le même. Il y a un an, l'ordinateur démarrait en quelques secondes. Aujourd'hui, ouvrir un simple navigateur prend un temps absurde. Rien n'a été installé de particulier, rien n'a visiblement « cassé », et pourtant tout est plus lent. Ce guide passe en revue les causes les plus fréquentes, du plus probable au plus rare, puis donne une méthode simple pour trouver la vôtre.",
      },
      { type: "h2", text: "En bref : par où commencer ?" },
      {
        type: "ol",
        items: [
          "Redémarrez vraiment l'ordinateur (« Redémarrer », pas « Arrêter ») : c'est gratuit et ça règle plus de cas qu'on ne le croit.",
          "Ouvrez le Gestionnaire des tâches (Ctrl + Maj + Échap) et regardez ce qui occupe le processeur, la mémoire et le disque.",
          "Vérifiez qu'il reste au moins 15 % d'espace libre sur le disque C:.",
          "Si rien ne ressort, regardez le type de disque (SSD ou disque dur) et son état : un vieux disque dur est souvent le vrai frein.",
        ],
      },
      { type: "h2", text: "Pourquoi un ordinateur se met-il à ramer ?" },
      {
        type: "p",
        text: "Un PC ne perd pas de vitesse comme une pile qui s'use. Il ralentit parce qu'une ressource est saturée : le processeur, la mémoire vive ou le disque. Trouver laquelle, c'est déjà trouver la moitié de la solution. Voici les neuf causes qu'on rencontre le plus souvent.",
      },
      { type: "h3", text: "1. Trop de programmes lancés au démarrage" },
      {
        type: "p",
        text: "Chaque logiciel installé veut « démarrer avec Windows » : messagerie, lanceur de jeux, utilitaire d'imprimante, outil de synchronisation... Chacun prend un peu de mémoire et de processeur en permanence. Au bout de quelques années, une dizaine de programmes tournent en arrière-plan sans que vous les ayez jamais ouverts. C'est la cause la plus fréquente d'un PC lent dès l'allumage.",
      },
      { type: "h3", text: "2. Le navigateur et ses onglets" },
      {
        type: "p",
        text: "Un navigateur moderne consomme énormément de mémoire : chaque onglet est presque un petit programme. Trente onglets ouverts, une vidéo oubliée ou une extension mal écrite suffisent à ralentir tout l'ordinateur. Sur un PC de 8 Go de mémoire, c'est souvent la première cause de lenteur au fil de la journée.",
      },
      { type: "h3", text: "3. La mémoire vive saturée" },
      {
        type: "p",
        text: "Quand la mémoire vive est pleine, Windows déplace une partie de son contenu sur le disque, beaucoup plus lent. Tout devient poussif : changer de fenêtre, ouvrir un fichier, taper un texte. En 2026, 8 Go suffisent pour un usage bureautique léger ; avec un navigateur chargé et quelques applications ouvertes, 16 Go deviennent confortables.",
      },
      { type: "h3", text: "4. Un disque presque plein" },
      {
        type: "p",
        text: "Windows a besoin d'espace libre pour ses fichiers temporaires, ses mises à jour et sa mémoire d'appoint. En dessous d'environ 10 à 15 % d'espace libre sur le disque C:, les ralentissements et les mises à jour qui échouent deviennent fréquents.",
      },
      { type: "h3", text: "5. Un disque dur mécanique, ou en fin de vie" },
      {
        type: "p",
        text: "Beaucoup de PC vendus avant 2019 ont encore un disque dur mécanique (HDD), des dizaines de fois plus lent qu'un SSD pour les petites lectures dont Windows a besoin en permanence. Un disque dur qui vieillit ralentit aussi avant de tomber en panne. C'est la seule cause de cette liste qui soit vraiment matérielle, et la bonne nouvelle, c'est qu'un SSD coûte aujourd'hui peu cher.",
      },
      { type: "h3", text: "6. Windows qui travaille en arrière-plan" },
      {
        type: "p",
        text: "Mises à jour, analyse antivirus, indexation des fichiers pour la recherche, synchronisation OneDrive : après l'allumage, et surtout après plusieurs jours sans utilisation, Windows rattrape son retard. Ces lenteurs sont temporaires et disparaissent en 20 à 40 minutes. Si elles reviennent à chaque démarrage, une mise à jour est probablement bloquée.",
      },
      { type: "h3", text: "7. Un ordinateur qui n'a jamais vraiment redémarré" },
      {
        type: "p",
        text: "Avec le « démarrage rapide », activé par défaut, « Arrêter » ne remet pas Windows à zéro : il met une partie du système en veille prolongée. Un programme bloqué ou une fuite de mémoire peuvent donc survivre à des semaines d'arrêts. Seul « Redémarrer » repart vraiment de zéro.",
      },
      { type: "h3", text: "8. Un processeur qui chauffe et se bride" },
      {
        type: "p",
        text: "Quand le processeur chauffe trop (poussière, aération bouchée, pâte thermique usée), il réduit volontairement sa vitesse pour se protéger. L'ordinateur devient lent, souvent accompagné d'un ventilateur bruyant. Notre guide sur le ventilateur qui tourne à fond détaille ce cas.",
      },
      { type: "h3", text: "9. Des fichiers système abîmés ou des logiciels indésirables" },
      {
        type: "p",
        text: "Une mise à jour interrompue ou une coupure de courant peuvent abîmer des fichiers de Windows et provoquer lenteurs et plantages. Les « optimiseurs », « nettoyeurs » et barres d'outils installés au passage font souvent plus de mal que de bien, tout comme deux antivirus actifs en même temps.",
      },
      { type: "h2", text: "Comment trouver la cause vous-même en 10 minutes ?" },
      {
        type: "ol",
        items: [
          "Redémarrez avec « Redémarrer », attendez cinq minutes, puis ouvrez le Gestionnaire des tâches avec Ctrl + Maj + Échap (cliquez sur « Plus de détails » si la fenêtre est réduite).",
          "Dans l'onglet « Processus », triez par « Processeur », puis par « Mémoire », puis par « Disque ». Un programme qui reste durablement en tête de l'une de ces colonnes est votre premier suspect.",
          "Regardez l'onglet « Performances » : si la mémoire est utilisée à plus de 85-90 % en usage normal, la mémoire est le goulot. Si le disque est à 100 % en permanence, consultez notre guide sur le disque à 100 %.",
          "Toujours dans « Performances » > « Disque », la ligne « Type » indique SSD ou HDD. HDD signifie disque dur mécanique.",
          "Ouvrez l'onglet « Applications de démarrage » et repérez les programmes marqués d'un impact « Élevé » dont vous n'avez pas besoin à l'allumage.",
          "Ouvrez l'Explorateur de fichiers > « Ce PC » : si la barre du disque C: est rouge, l'espace libre manque.",
        ],
      },
      { type: "h2", text: "Que faire selon la cause ?" },
      {
        type: "ul",
        items: [
          "Programmes au démarrage : dans Gestionnaire des tâches > « Applications de démarrage », faites un clic droit puis « Désactiver ». Le programme reste installé, il ne se lance simplement plus tout seul.",
          "Navigateur : fermez les onglets inutiles, supprimez les extensions que vous n'utilisez pas et activez l'économiseur de mémoire (Chrome, Edge).",
          "Mémoire saturée : si la mémoire est pleine même avec peu de choses ouvertes, ajouter une barrette (de 8 à 16 Go) coûte environ 30 à 60 € selon le modèle, et c'est souvent l'amélioration la plus visible.",
          "Disque plein : Paramètres > Système > Stockage, puis « Recommandations de nettoyage ». Désinstallez les programmes inutiles et déplacez photos et vidéos sur un disque externe.",
          "Disque dur mécanique : le remplacer par un SSD (environ 40 à 70 € pour 500 Go, plus la main-d'œuvre si vous le faites faire) rend un vieux PC méconnaissable. C'est souvent le meilleur rapport gain/prix.",
          "Windows en arrière-plan : laissez l'ordinateur allumé et branché 30 à 40 minutes, puis redémarrez. Si une mise à jour échoue en boucle, consultez notre guide sur Windows 11 lent après une mise à jour.",
          "Démarrage rapide : prenez l'habitude de « Redémarrer » au moins une fois par semaine, ou désactivez le démarrage rapide (Panneau de configuration > Options d'alimentation > « Choisir l'action des boutons d'alimentation »).",
          "Surchauffe : dépoussiérez les grilles, posez le portable sur une surface dure, ou faites faire un nettoyage complet (environ 50 à 80 €).",
          "Fichiers système : dans une invite de commandes lancée en administrateur, exécutez DISM /Online /Cleanup-Image /RestoreHealth, puis sfc /scannow. Désinstallez aussi les « optimiseurs » et gardez un seul antivirus.",
        ],
      },
      { type: "h2", text: "Quand faut-il envisager de changer d'ordinateur ?" },
      {
        type: "p",
        text: "Rarement pour une simple lenteur. Un changement devient raisonnable quand plusieurs signaux se cumulent : un processeur qui ne peut pas passer à Windows 11, une réparation qui coûterait plus du tiers du prix d'un PC équivalent, ou un appareil qui ne correspond plus du tout à votre usage. Notre article « Changer de PC ou le réparer ? » propose une grille de décision complète.",
      },
      { type: "h2", text: "Ce que Nyctale vérifie en 19 secondes" },
      {
        type: "p",
        text: "Nyctale fait ce tour d'horizon à votre place : programmes qui occupent le processeur et la mémoire, état et type du disque, espace libre, chauffe et bridage du processeur, arrêts brutaux, fichiers système. Il explique en langage clair ce qui ralentit réellement votre PC, sans rien modifier sans votre accord. Le diagnostic est gratuit et illimité.",
      },
    ],
    faq: [
      {
        q: "Pourquoi mon ordinateur rame alors qu'il est récent ?",
        r: "Sur un PC récent, la cause est presque toujours logicielle : programmes au démarrage, navigateur chargé, mise à jour en cours ou programme bloqué. Le Gestionnaire des tâches (Ctrl + Maj + Échap) montre en quelques secondes ce qui occupe le processeur, la mémoire ou le disque.",
      },
      {
        q: "Est-ce que réinstaller Windows accélère un PC ?",
        r: "Souvent oui, mais c'est la solution la plus lourde : il faut sauvegarder ses fichiers et réinstaller tous ses logiciels. Mieux vaut d'abord trouver la cause. Si elle est matérielle (disque dur mécanique, mémoire insuffisante), une réinstallation n'y changera rien.",
      },
      {
        q: "Les logiciels « nettoyeurs de PC » sont-ils utiles ?",
        r: "Rarement. Windows intègre déjà le nettoyage du disque et la gestion du démarrage. Beaucoup de ces logiciels tournent eux-mêmes en permanence en arrière-plan et poussent à acheter une version payante. Un diagnostic qui nomme la cause est plus utile qu'un nettoyage à l'aveugle.",
      },
      {
        q: "Combien de mémoire vive faut-il en 2026 ?",
        r: "8 Go suffisent pour la bureautique et la navigation légère. Avec un navigateur aux nombreux onglets, la visioconférence ou la retouche photo, 16 Go sont nettement plus confortables.",
      },
      {
        q: "Remplacer un disque dur par un SSD vaut-il le coup ?",
        r: "Oui, c'est souvent la meilleure amélioration possible sur un PC de plus de cinq ans : démarrage et ouverture des programmes plusieurs fois plus rapides, pour environ 40 à 70 € de pièce.",
      },
    ],
    liens: [
      "pc-lent-au-demarrage",
      "disque-a-100-pourcent-windows",
      "windows-11-lent-apres-mise-a-jour",
      "avant-dacheter-un-pc-neuf",
    ],
  },
  {
    slug: "slow-computer-no-obvious-reason",
    lang: "en",
    traduction: "pc-qui-rame-sans-raison",
    title: "Slow computer: 9 common causes and how to find yours",
    seoTitle: "Slow computer? Causes and fixes for Windows 10 and 11",
    excerpt:
      "A slow PC always has a precise cause, usually software. The 9 most common causes, a 10-minute method to find yours, and how to fix each one.",
    date: "2026-08-08",
    updated: "2026-09-25",
    readMin: 10,
    blocks: [
      {
        type: "p",
        text: "A slow computer isn't 'worn out': there is always a specific cause. In the vast majority of cases it's software (startup programs, the browser, full memory, Windows working in the background) and can be fixed for free, without buying a new machine.",
      },
      {
        type: "p",
        text: "The scenario is almost always the same. A year ago, the computer started in a few seconds. Today, opening a browser takes an absurd amount of time. Nothing special was installed, nothing visibly broke, and yet everything is slower. This guide goes through the most common causes, from most to least likely, then gives a simple method to find yours.",
      },
      { type: "h2", text: "In short: where should you start?" },
      {
        type: "ol",
        items: [
          "Do a real restart ('Restart', not 'Shut down'): it's free and solves more cases than you'd think.",
          "Open Task Manager (Ctrl + Shift + Esc) and look at what's using the processor, memory and disk.",
          "Check that at least 15% of your C: drive is free.",
          "If nothing stands out, check the drive type (SSD or hard drive) and its health: an old hard drive is often the real bottleneck.",
        ],
      },
      { type: "h2", text: "Why does a computer become slow?" },
      {
        type: "p",
        text: "A PC doesn't lose speed like a battery wearing out. It slows down because one resource is saturated: the processor, the memory or the disk. Finding which one is half of the solution. Here are the nine causes we see most often.",
      },
      { type: "h3", text: "1. Too many programs launching at startup" },
      {
        type: "p",
        text: "Every installed program wants to 'start with Windows': chat apps, game launchers, printer utilities, sync tools... Each one permanently takes a bit of memory and processor. After a few years, a dozen programs run in the background that you never actually open. It's the most common cause of a PC that's slow right from startup.",
      },
      { type: "h3", text: "2. The browser and its tabs" },
      {
        type: "p",
        text: "A modern browser uses a huge amount of memory: each tab is almost a small program. Thirty open tabs, a forgotten video or a badly written extension is enough to slow down the whole computer. On a PC with 8 GB of memory, it's often the main cause of a PC that gets slower through the day.",
      },
      { type: "h3", text: "3. Memory (RAM) is full" },
      {
        type: "p",
        text: "When memory is full, Windows moves part of its content to the disk, which is far slower. Everything becomes sluggish: switching windows, opening a file, typing. In 2026, 8 GB is enough for light office work; with a busy browser and a few apps open, 16 GB becomes comfortable.",
      },
      { type: "h3", text: "4. An almost full drive" },
      {
        type: "p",
        text: "Windows needs free space for temporary files, updates and virtual memory. Below roughly 10 to 15% free space on the C: drive, slowdowns and failed updates become common.",
      },
      { type: "h3", text: "5. A mechanical hard drive, or one near the end of its life" },
      {
        type: "p",
        text: "Many PCs sold before 2019 still use a mechanical hard drive (HDD), dozens of times slower than an SSD for the small reads Windows constantly needs. An aging hard drive also slows down before it fails. It's the only truly hardware cause on this list, and the good news is that SSDs are now cheap.",
      },
      { type: "h3", text: "6. Windows working in the background" },
      {
        type: "p",
        text: "Updates, antivirus scans, file indexing for search, OneDrive sync: after startup, and especially after several days unused, Windows catches up. These slowdowns are temporary and disappear within 20 to 40 minutes. If they come back at every startup, an update is probably stuck.",
      },
      { type: "h3", text: "7. A computer that never truly restarts" },
      {
        type: "p",
        text: "With 'fast startup', enabled by default, 'Shut down' doesn't reset Windows: it hibernates part of the system. A stuck program or a memory leak can survive weeks of shutdowns. Only 'Restart' truly starts from scratch.",
      },
      { type: "h3", text: "8. An overheating processor that throttles itself" },
      {
        type: "p",
        text: "When the processor gets too hot (dust, blocked vents, dried thermal paste), it deliberately reduces its speed to protect itself. The computer becomes slow, often with a noisy fan. Our guide on the fan that always runs at full speed covers this case.",
      },
      { type: "h3", text: "9. Damaged system files or unwanted software" },
      {
        type: "p",
        text: "An interrupted update or a power cut can damage Windows files and cause slowdowns and crashes. 'Optimizers', 'cleaners' and toolbars installed along the way often do more harm than good, as do two antivirus programs running at the same time.",
      },
      { type: "h2", text: "How can you find the cause yourself in 10 minutes?" },
      {
        type: "ol",
        items: [
          "Use 'Restart', wait five minutes, then open Task Manager with Ctrl + Shift + Esc (click 'More details' if the window is compact).",
          "In the 'Processes' tab, sort by 'CPU', then 'Memory', then 'Disk'. A program that stays at the top of one of these columns is your first suspect.",
          "Look at the 'Performance' tab: if memory is over 85-90% used during normal use, memory is the bottleneck. If the disk sits at 100%, see our guide on disk at 100%.",
          "Still in 'Performance' > 'Disk', the 'Type' line says SSD or HDD. HDD means a mechanical hard drive.",
          "Open the 'Startup apps' tab and spot programs with a 'High' impact that you don't need at startup.",
          "Open File Explorer > 'This PC': if the C: drive bar is red, you're short on free space.",
        ],
      },
      { type: "h2", text: "What to do depending on the cause" },
      {
        type: "ul",
        items: [
          "Startup programs: in Task Manager > 'Startup apps', right-click and choose 'Disable'. The program stays installed; it just no longer launches by itself.",
          "Browser: close unneeded tabs, remove extensions you don't use and turn on memory saver (Chrome, Edge).",
          "Full memory: if memory is full even with little open, adding a module (8 to 16 GB) costs roughly €30 to €60 depending on the model, and it's often the most noticeable upgrade.",
          "Full drive: Settings > System > Storage, then 'Cleanup recommendations'. Uninstall unused programs and move photos and videos to an external drive.",
          "Mechanical hard drive: replacing it with an SSD (about €40 to €70 for 500 GB, plus labour if a shop does it) transforms an old PC. It's often the best value upgrade.",
          "Windows in the background: leave the computer on and plugged in for 30 to 40 minutes, then restart. If an update keeps failing, see our guide on Windows 11 slow after an update.",
          "Fast startup: get into the habit of using 'Restart' at least once a week, or turn off fast startup (Control Panel > Power Options > 'Choose what the power buttons do').",
          "Overheating: dust the vents, put the laptop on a hard surface, or have it professionally cleaned (about €50 to €80).",
          "System files: in a command prompt run as administrator, run DISM /Online /Cleanup-Image /RestoreHealth, then sfc /scannow. Also uninstall 'optimizers' and keep a single antivirus.",
        ],
      },
      { type: "h2", text: "When should you consider replacing your computer?" },
      {
        type: "p",
        text: "Rarely for slowness alone. Replacing makes sense when several signals add up: a processor that can't run Windows 11, a repair that would cost more than a third of an equivalent PC, or a device that no longer fits your needs at all. Our article 'Replace or repair your PC?' gives a full decision checklist.",
      },
      { type: "h2", text: "What Nyctale checks in 19 seconds" },
      {
        type: "p",
        text: "Nyctale does this whole check for you: programs using the processor and memory, drive type and health, free space, processor heat and throttling, sudden shutdowns, system files. It explains in plain language what is really slowing your PC down, and never changes anything without your consent. The diagnosis is free and unlimited.",
      },
    ],
    faq: [
      {
        q: "Why is my computer slow even though it's new?",
        r: "On a recent PC, the cause is almost always software: startup programs, a heavy browser, an update in progress or a stuck program. Task Manager (Ctrl + Shift + Esc) shows within seconds what's using the processor, memory or disk.",
      },
      {
        q: "Does reinstalling Windows speed up a PC?",
        r: "Often yes, but it's the heaviest option: you have to back up your files and reinstall all your software. It's better to find the cause first. If it's hardware (a mechanical hard drive, not enough memory), reinstalling won't change anything.",
      },
      {
        q: "Are 'PC cleaner' programs useful?",
        r: "Rarely. Windows already includes disk cleanup and startup management. Many of these programs run permanently in the background themselves and push you towards a paid version. A diagnosis that names the cause is more useful than blind cleaning.",
      },
      {
        q: "How much RAM do you need in 2026?",
        r: "8 GB is enough for office work and light browsing. With many browser tabs, video calls or photo editing, 16 GB is much more comfortable.",
      },
      {
        q: "Is replacing a hard drive with an SSD worth it?",
        r: "Yes, it's often the single best upgrade for a PC older than five years: startup and program launches several times faster, for about €40 to €70 in parts.",
      },
    ],
    liens: [
      "slow-pc-startup",
      "disk-100-percent-windows",
      "windows-11-slow-after-update",
      "before-buying-a-new-pc",
    ],
  },

  // -------------------------------------------------------------------
  // FR 2 / EN 2 — Ventilateur bruyant
  // -------------------------------------------------------------------
  {
    slug: "ventilateur-qui-ne-sarrete-plus",
    lang: "fr",
    traduction: "fan-that-never-stops-spinning",
    title: "Ventilateur de PC qui tourne à fond en permanence : causes et solutions",
    seoTitle: "Ventilateur PC qui tourne à fond : causes et solutions",
    excerpt:
      "Un ventilateur qui souffle en permanence n'est pas normal, mais c'est rarement grave. Les 7 causes les plus fréquentes, comment trouver la vôtre en 5 minutes, et quand il faut vraiment s'inquiéter.",
    date: "2026-08-08",
    updated: "2026-09-24",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "Un ventilateur de PC qui tourne à fond en permanence signale presque toujours un processeur sollicité en continu : par un programme dans la majorité des cas, par de la poussière ou une aération bouchée sinon. Dans les deux cas, la solution coûte beaucoup moins cher qu'un ordinateur neuf.",
      },
      {
        type: "p",
        text: "C'est un bruit qu'on finit par ne plus entendre, jusqu'à ce qu'un proche fasse la remarque : « ton PC souffle comme un avion ». Un ventilateur qui tourne à plein régime même quand vous ne faites rien de particulier n'est pas normal. Mais ce n'est pas forcément le signe d'une panne non plus.",
      },
      { type: "h2", text: "En bref : les 3 questions à se poser" },
      {
        type: "ol",
        items: [
          "Le bruit a-t-il commencé juste après l'allumage ou une mise à jour ? Si oui, patientez 20 à 40 minutes : c'est souvent Windows qui travaille en arrière-plan.",
          "Un programme occupe-t-il beaucoup le processeur ? Le Gestionnaire des tâches répond en dix secondes (méthode détaillée plus bas).",
          "Le ventilateur souffle-t-il même quand rien ne tourne ? Alors la cause est physique : poussière, aération bouchée ou pâte thermique usée.",
        ],
      },
      { type: "h2", text: "Pourquoi un ventilateur de PC se met-il à tourner à fond ?" },
      {
        type: "p",
        text: "Un ventilateur n'accélère que pour une raison : la température monte. Le vrai sujet n'est donc pas le ventilateur, mais ce qui fait chauffer le processeur. Il n'existe que deux familles de causes : un composant qui travaille trop (cause logicielle), ou une chaleur qui s'évacue mal (cause physique). Voici les sept situations qu'on rencontre le plus souvent.",
      },
      { type: "h3", text: "1. Un programme qui tourne en boucle" },
      {
        type: "p",
        text: "C'est la cause la plus fréquente. Un programme ou un composant de Windows se bloque et occupe un cœur du processeur en permanence, sans rien faire d'utile. Exemple réel, courant sous Windows 11 : le composant « Clavier tactile et saisie » (TextInputHost) qui grimpe à 80 % d'un cœur alors qu'aucun clavier tactile n'est utilisé. Fermer le programme en cause suffit : le ventilateur ralentit en une à deux minutes.",
      },
      {
        type: "p",
        text: "Un programme inconnu, que vous n'avez jamais installé et qui consomme beaucoup de processeur en continu, mérite en revanche une analyse antivirus : certains logiciels malveillants utilisent la puissance de votre ordinateur à votre insu.",
      },
      { type: "h3", text: "2. Windows qui travaille en arrière-plan" },
      {
        type: "p",
        text: "Après l'allumage, et surtout après quelques jours sans utilisation, Windows rattrape son retard. Ces tâches sont normales et temporaires ; si le bruit s'arrête de lui-même au bout de 20 à 40 minutes, il n'y a rien à faire. Les noms à reconnaître dans le Gestionnaire des tâches :",
      },
      {
        type: "ul",
        items: [
          "TiWorker ou TrustedInstaller : installation d'une mise à jour Windows.",
          "MsMpEng : analyse antivirus de Microsoft Defender.",
          "SearchIndexer : indexation de vos fichiers pour la recherche.",
          "OneDrive ou Dropbox : synchronisation de vos fichiers.",
        ],
      },
      { type: "h3", text: "3. Le navigateur et ses onglets" },
      {
        type: "p",
        text: "Des dizaines d'onglets ouverts, une vidéo oubliée en arrière-plan, une page chargée de publicités animées ou une extension mal écrite suffisent à faire travailler le processeur sans arrêt. Le navigateur est d'ailleurs la cause la plus fréquente d'un ordinateur qui devient lent et bruyant au fil de la journée.",
      },
      { type: "h3", text: "4. La poussière dans les grilles et le radiateur" },
      {
        type: "p",
        text: "Avec les années, la poussière s'accumule dans les grilles d'aération et entre les ailettes du radiateur. L'air circule moins bien, la chaleur s'évacue mal, et le ventilateur compense en tournant plus vite. C'est la cause numéro un des PC de plus de trois ou quatre ans qui soufflent même au repos.",
      },
      { type: "h3", text: "5. Une aération bouchée" },
      {
        type: "p",
        text: "Un ordinateur portable posé sur un lit, un canapé, un coussin ou sur les genoux aspire souvent son air par-dessous : le tissu bouche les entrées d'air. Le même portable posé sur une table redevient fréquemment silencieux en quelques minutes.",
      },
      { type: "h3", text: "6. Une pâte thermique usée" },
      {
        type: "p",
        text: "Entre le processeur et son radiateur, une fine couche de pâte thermique assure le passage de la chaleur. Elle sèche avec le temps, en général après quatre à six ans. Le processeur chauffe alors plus vite, même avec peu de travail. Aucun logiciel ne peut corriger ce point, mais un réparateur remplace la pâte lors d'un nettoyage.",
      },
      { type: "h3", text: "7. Un mode d'alimentation trop agressif" },
      {
        type: "p",
        text: "Le mode « Meilleures performances » garde le processeur à haute fréquence plus souvent, donc plus chaud. Sur un ordinateur de bureau ou un portable branché, repasser sur « Équilibré » calme souvent le ventilateur sans différence de rapidité visible au quotidien.",
      },
      { type: "h2", text: "Comment trouver la cause vous-même en 5 minutes ?" },
      {
        type: "ol",
        items: [
          "Attendez cinq minutes après l'allumage, puis ouvrez le Gestionnaire des tâches avec Ctrl + Maj + Échap.",
          "Dans l'onglet « Processus », cliquez sur la colonne « Processeur » pour trier les programmes du plus gourmand au moins gourmand.",
          "Si un programme dépasse durablement 20 à 30 %, c'est très probablement lui. S'il fait partie de la liste des tâches Windows ci-dessus, patientez ; sinon, faites un clic droit sur sa ligne puis « Fin de tâche ».",
          "Écoutez le ventilateur pendant une ou deux minutes. S'il ralentit, vous tenez le coupable.",
          "Si aucun programme ne dépasse quelques pour cent et que le ventilateur souffle quand même, la cause est physique : poussière, aération ou pâte thermique.",
        ],
      },
      {
        type: "p",
        text: "Un indice supplémentaire se trouve dans l'Observateur d'événements de Windows : chaque fois que le processeur a dû ralentir pour se protéger de la chaleur, Windows l'enregistre dans le journal Système (événement 37, source Kernel-Processor-Power). Plusieurs de ces événements alors que la machine ne faisait presque rien signent un problème de refroidissement.",
      },
      { type: "h2", text: "Ce que Nyctale vérifie en 19 secondes" },
      {
        type: "p",
        text: "Nyctale fait ce raisonnement à votre place. Il mesure quels programmes occupent le processeur, lit dans le journal de Windows combien de fois le processeur a dû se brider, puis croise les deux. Quand l'ordinateur chauffe alors qu'il ne fait presque rien, il le dit clairement, y compris qu'aucun logiciel ne pourra régler ce problème-là.",
      },
      {
        type: "img",
        src: "/verdict-fr.webp",
        alt: "Verdict Nyctale : le problème ne vient pas d'un logiciel, mais du refroidissement",
        caption:
          "Un vrai verdict : 10 ralentissements de protection avec seulement 3,5 % de charge, sur un portable de 4,7 ans.",
      },
      { type: "h2", text: "Que faire selon la cause ?" },
      {
        type: "ul",
        items: [
          "Programme bloqué : fermez-le depuis le Gestionnaire des tâches (« Fin de tâche »), ou redémarrez l'ordinateur. Choisissez bien « Redémarrer » et non « Arrêter » : avec le démarrage rapide de Windows, un arrêt ne remet pas tout à zéro.",
          "Mise à jour ou analyse antivirus : laissez l'ordinateur allumé et branché 20 à 40 minutes, sans le mettre en veille.",
          "Navigateur : fermez les onglets inutiles et activez l'économiseur de mémoire (Chrome, Edge) ou la mise en veille des onglets inactifs.",
          "Poussière : ordinateur éteint et débranché, soufflez les grilles avec une bombe à air sec, par petites pressions et de préférence à l'extérieur. Maintenez les pales immobiles (avec un coton-tige, par exemple) pour qu'elles ne s'emballent pas sous le jet d'air.",
          "Aération bouchée : posez le portable sur une surface dure et plate ; un support ventilé aide en été.",
          "Pâte thermique et nettoyage complet : un réparateur démonte l'ordinateur, nettoie le radiateur et remplace la pâte, généralement pour 50 à 80 €. C'est souvent ce qui rend un portable de cinq ans de nouveau silencieux.",
          "Mode d'alimentation : Paramètres > Système > Alimentation (ou « Alimentation et batterie »), puis « Mode d'alimentation » sur « Équilibré ».",
        ],
      },
      { type: "h2", text: "Quand faut-il vraiment s'inquiéter ?" },
      {
        type: "ul",
        items: [
          "Un bruit de frottement, de grincement ou de claquement : le roulement du ventilateur s'use. La pièce se remplace et coûte peu, mais mieux vaut ne pas attendre qu'elle lâche.",
          "Le ventilateur ne tourne plus du tout alors que l'ordinateur chauffe : évitez les tâches lourdes et faites-le vérifier rapidement.",
          "L'ordinateur s'éteint tout seul, sans prévenir : c'est souvent une protection contre la surchauffe. Faites vérifier le refroidissement avant d'envisager un remplacement.",
        ],
      },
      {
        type: "p",
        text: "Dans aucun de ces cas l'ordinateur n'est « bon à jeter » : un ventilateur neuf ou un nettoyage coûte une fraction du prix d'un PC neuf (300 à 800 €).",
      },
      { type: "h2", text: "Faut-il un logiciel pour contrôler le ventilateur ?" },
      {
        type: "p",
        text: "Rarement. Des logiciels permettent de régler la vitesse des ventilateurs, mais forcer un ventilateur à ralentir alors que le processeur chauffe revient à couper l'alarme sans éteindre le feu. Et aucun « nettoyeur » ni « optimiseur » ne retire de la poussière : méfiez-vous de tout programme qui promet de rendre un PC silencieux en un clic.",
      },
    ],
    faq: [
      {
        q: "Est-ce grave si le ventilateur de mon PC tourne tout le temps ?",
        r: "Rarement. C'est un symptôme, pas une panne : le processeur chauffe parce qu'un programme le sollicite ou parce que la chaleur s'évacue mal. Il faut trouver la cause, mais dans la grande majorité des cas elle se règle sans racheter d'ordinateur.",
      },
      {
        q: "Pourquoi le ventilateur de mon portable tourne à fond alors que je ne fais rien ?",
        r: "Soit un programme travaille en arrière-plan sans fenêtre visible (mise à jour, antivirus, programme bloqué), soit la chaleur s'évacue mal (poussière, portable posé sur un tissu). Le Gestionnaire des tâches, ouvert avec Ctrl + Maj + Échap, permet de trancher en quelques secondes.",
      },
      {
        q: "Combien coûte un nettoyage de PC chez un réparateur ?",
        r: "En général 50 à 80 € pour un nettoyage complet avec remplacement de la pâte thermique. C'est souvent la bonne solution pour un portable de plus de quatre ans qui souffle même au repos.",
      },
      {
        q: "Un ventilateur bruyant peut-il abîmer mon ordinateur ?",
        r: "Le bruit lui-même, non. En revanche, une surchauffe prolongée oblige le processeur à ralentir et peut, à la longue, provoquer des arrêts brutaux. Mieux vaut traiter la cause rapidement.",
      },
      {
        q: "Nyctale peut-il réduire le bruit du ventilateur ?",
        r: "Nyctale trouve la cause et aide à la corriger quand elle est logicielle : fermer un programme bloqué, régler le navigateur, repasser en mode Équilibré. Quand la cause est physique, il vous le dit franchement : aucun logiciel ne remplace un dépoussiérage.",
      },
    ],
  },
  {
    slug: "fan-that-never-stops-spinning",
    lang: "en",
    traduction: "ventilateur-qui-ne-sarrete-plus",
    title: "PC fan always running at full speed: causes and fixes",
    seoTitle: "PC fan always running at full speed: causes and fixes",
    excerpt:
      "A fan that roars nonstop isn't normal, but it's rarely serious. The 7 most common causes, how to find yours in 5 minutes, and when you should actually worry.",
    date: "2026-08-08",
    updated: "2026-09-24",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "A PC fan running at full speed all the time almost always means the processor is being kept busy nonstop: by a program in most cases, otherwise by dust or a blocked air vent. Either way, the fix costs far less than a new computer.",
      },
      {
        type: "p",
        text: "It's a sound you stop noticing, until someone points out: \"your PC sounds like an airplane.\" A fan running flat out even when you're not doing anything demanding isn't normal. But it isn't necessarily a sign of failure either.",
      },
      { type: "h2", text: "In short: 3 questions to ask yourself" },
      {
        type: "ol",
        items: [
          "Did the noise start right after switching on or after an update? If so, wait 20 to 40 minutes: Windows is often catching up in the background.",
          "Is one program keeping the processor busy? Task Manager tells you in ten seconds (method below).",
          "Does the fan roar even when nothing is running? Then the cause is physical: dust, a blocked vent or worn thermal paste.",
        ],
      },
      { type: "h2", text: "Why does a PC fan spin up to full speed?" },
      {
        type: "p",
        text: "A fan speeds up for one reason only: the temperature is rising. So the real question isn't the fan, it's what is heating up the processor. There are just two families of causes: a component working too hard (software), or heat that can't escape (physical). Here are the seven situations you'll run into most often.",
      },
      { type: "h3", text: "1. A program stuck in a loop" },
      {
        type: "p",
        text: "This is the most common cause. A program or a Windows component gets stuck and keeps one processor core busy permanently, without doing anything useful. A real example, common on Windows 11: the \"touch keyboard and text input\" component (TextInputHost) climbing to 80% of a core while no touch keyboard is in use. Closing the culprit is enough: the fan slows down within a minute or two.",
      },
      {
        type: "p",
        text: "An unknown program you never installed, using a lot of processor power nonstop, deserves an antivirus scan though: some malware uses your computer's power without you knowing.",
      },
      { type: "h3", text: "2. Windows working in the background" },
      {
        type: "p",
        text: "After you switch on, and especially after a few days without use, Windows catches up. These tasks are normal and temporary; if the noise stops on its own after 20 to 40 minutes, there's nothing to do. The names to recognise in Task Manager:",
      },
      {
        type: "ul",
        items: [
          "TiWorker or TrustedInstaller: a Windows update being installed.",
          "MsMpEng: a Microsoft Defender antivirus scan.",
          "SearchIndexer: your files being indexed for search.",
          "OneDrive or Dropbox: your files being synced.",
        ],
      },
      { type: "h3", text: "3. The browser and its tabs" },
      {
        type: "p",
        text: "Dozens of open tabs, a video forgotten in the background, a page full of animated ads or a badly written extension are enough to keep the processor busy nonstop. The browser is also the most common reason a computer gets slower and louder as the day goes on.",
      },
      { type: "h3", text: "4. Dust in the vents and the heatsink" },
      {
        type: "p",
        text: "Over the years, dust builds up in the air vents and between the fins of the heatsink. Air flows less freely, heat escapes poorly, and the fan compensates by spinning faster. It's the number one cause for PCs older than three or four years that roar even at rest.",
      },
      { type: "h3", text: "5. A blocked air vent" },
      {
        type: "p",
        text: "A laptop resting on a bed, a sofa, a cushion or your lap often draws air from underneath: the fabric blocks the air intakes. The same laptop placed on a table often goes quiet again within minutes.",
      },
      { type: "h3", text: "6. Worn thermal paste" },
      {
        type: "p",
        text: "Between the processor and its heatsink, a thin layer of thermal paste carries the heat away. It dries out over time, usually after four to six years. The processor then heats up faster, even under light load. No software can fix this, but a repair shop replaces the paste during a cleaning.",
      },
      { type: "h3", text: "7. An aggressive power mode" },
      {
        type: "p",
        text: "The \"Best performance\" power mode keeps the processor at high frequency more often, so it runs hotter. On a desktop or a plugged-in laptop, switching back to \"Balanced\" often calms the fan with no noticeable difference in everyday speed.",
      },
      { type: "h2", text: "How to find the cause yourself in 5 minutes" },
      {
        type: "ol",
        items: [
          "Wait five minutes after switching on, then open Task Manager with Ctrl + Shift + Esc.",
          "In the \"Processes\" tab, click the \"CPU\" column to sort programs from the most to the least demanding.",
          "If one program stays above 20 to 30%, it's very likely the culprit. If it's one of the Windows tasks listed above, wait; otherwise, right-click its line and choose \"End task\".",
          "Listen to the fan for a minute or two. If it slows down, you've found the culprit.",
          "If no program goes above a few percent and the fan still roars, the cause is physical: dust, ventilation or thermal paste.",
        ],
      },
      {
        type: "p",
        text: "One more clue lives in the Windows Event Viewer: every time the processor had to slow down to protect itself from heat, Windows logs it in the System log (event 37, source Kernel-Processor-Power). Several of these events while the machine was doing almost nothing point to a cooling problem.",
      },
      { type: "h2", text: "What Nyctale checks in 19 seconds" },
      {
        type: "p",
        text: "Nyctale does this reasoning for you. It measures which programs keep the processor busy, reads from the Windows log how many times the processor had to throttle itself, then cross-checks the two. When the computer heats up while doing almost nothing, it says so plainly, including that no software can fix that particular problem.",
      },
      {
        type: "img",
        src: "/verdict-en.webp",
        alt: "Nyctale verdict: the problem is not software, it is the cooling",
        caption:
          "A real verdict: 10 protective slowdowns at only 3.5% load, on a 4.7-year-old laptop.",
      },
      { type: "h2", text: "What to do, depending on the cause" },
      {
        type: "ul",
        items: [
          "Stuck program: close it from Task Manager (\"End task\"), or restart the computer. Choose \"Restart\", not \"Shut down\": with Windows fast startup, shutting down doesn't reset everything.",
          "Update or antivirus scan: leave the computer on and plugged in for 20 to 40 minutes, without putting it to sleep.",
          "Browser: close unused tabs and turn on the memory saver (Chrome, Edge) or sleeping tabs.",
          "Dust: with the computer switched off and unplugged, blow out the vents with a can of compressed air, in short bursts and preferably outdoors. Hold the fan blades still (with a cotton swab, for example) so they don't overspin in the airflow.",
          "Blocked vent: put the laptop on a hard, flat surface; a cooling stand helps in summer.",
          "Thermal paste and full cleaning: a repair shop opens the computer, cleans the heatsink and replaces the paste, usually for 50 to 80 euros. It's often what makes a five-year-old laptop quiet again.",
          "Power mode: Settings > System > Power (or \"Power & battery\"), then set \"Power mode\" to \"Balanced\".",
        ],
      },
      { type: "h2", text: "When should you actually worry?" },
      {
        type: "ul",
        items: [
          "A rubbing, grinding or clicking noise: the fan bearing is wearing out. The part is cheap to replace, but better not to wait until it fails.",
          "The fan doesn't spin at all while the computer heats up: avoid heavy tasks and get it checked quickly.",
          "The computer shuts down on its own without warning: this is often an overheating protection. Get the cooling checked before considering a replacement.",
        ],
      },
      {
        type: "p",
        text: "In none of these cases is the computer ready for the bin: a new fan or a cleaning costs a fraction of a new PC (€300 to €800).",
      },
      { type: "h2", text: "Do you need software to control the fan?" },
      {
        type: "p",
        text: "Rarely. Some tools let you set fan speeds, but forcing a fan to slow down while the processor is hot is like switching off the alarm without putting out the fire. And no \"cleaner\" or \"optimiser\" removes dust: be wary of any program that promises to make a PC quiet in one click.",
      },
    ],
    faq: [
      {
        q: "Is it bad if my PC fan runs all the time?",
        r: "Rarely. It's a symptom, not a failure: the processor is hot because a program keeps it busy or because heat can't escape. You need to find the cause, but in the vast majority of cases it can be fixed without buying a new computer.",
      },
      {
        q: "Why is my laptop fan running at full speed when I'm not doing anything?",
        r: "Either a program is working in the background with no visible window (update, antivirus, stuck program), or heat can't escape (dust, laptop resting on fabric). Task Manager, opened with Ctrl + Shift + Esc, settles it in seconds.",
      },
      {
        q: "How much does a PC cleaning cost at a repair shop?",
        r: "Usually 50 to 80 euros for a full cleaning with fresh thermal paste. It's often the right fix for a laptop over four years old that roars even at rest.",
      },
      {
        q: "Can a loud fan damage my computer?",
        r: "The noise itself, no. But prolonged overheating forces the processor to slow down and can eventually cause sudden shutdowns. It's best to deal with the cause quickly.",
      },
      {
        q: "Can Nyctale reduce fan noise?",
        r: "Nyctale finds the cause and helps fix it when it's software: closing a stuck program, adjusting the browser, switching back to Balanced mode. When the cause is physical, it tells you plainly: no software replaces a good dusting.",
      },
    ],
  },

  // -------------------------------------------------------------------
  // FR 3 / EN 3 — Méfiance envers le dépanneur / scareware
  // -------------------------------------------------------------------
  {
    slug: "avant-dacheter-un-pc-neuf",
    lang: "fr",
    traduction: "before-buying-a-new-pc",
    title: "Changer de PC ou le réparer ? 6 questions à se poser avant d'acheter",
    seoTitle: "Faut-il changer son PC ? La grille pour décider avant d'acheter",
    excerpt:
      "Un PC lent se répare souvent pour une fraction du prix d'un neuf. 6 questions concrètes (Windows 11, SSD, mémoire, batterie, coût) pour décider sans se tromper.",
    date: "2026-08-08",
    updated: "2026-09-25",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "Un ordinateur lent n'a pas forcément besoin d'être remplacé : dans la majorité des cas, un réglage, un SSD ou de la mémoire en plus coûtent entre 0 et 150 €, contre 500 à 800 € pour un PC neuf équivalent. Le remplacement se justifie surtout quand le PC ne peut pas passer à Windows 11 ou quand la réparation dépasse environ un tiers du prix du neuf.",
      },
      {
        type: "p",
        text: "« À ce stade, il vaut mieux en racheter un. » C'est une phrase qu'on entend souvent en magasin ou lors d'un dépannage, et elle peut être parfaitement honnête. Mais celui qui pose le diagnostic est aussi, souvent, celui qui vend la solution. Ce n'est pas une accusation : c'est une raison de vérifier soi-même avant de dépenser. Voici les six questions qui permettent de trancher.",
      },
      { type: "h2", text: "En bref : la grille de décision" },
      {
        type: "ul",
        items: [
          "Cause logicielle identifiée (programmes, navigateur, mise à jour) : on règle, 0 €.",
          "Disque dur mécanique ou mémoire insuffisante, PC compatible Windows 11 : on améliore, environ 40 à 150 €.",
          "Batterie usée ou ventilateur bruyant sur un PC par ailleurs sain : on répare, environ 50 à 120 €.",
          "PC incompatible avec Windows 11, ou réparation supérieure à un tiers du prix d'un équivalent neuf : le remplacement devient raisonnable.",
        ],
      },
      { type: "h2", text: "1. Quel est le problème, précisément ?" },
      {
        type: "p",
        text: "C'est la question qui compte le plus. Un diagnostic sérieux nomme une cause précise : un programme, un composant, une pièce. « Il est vieux » ou « il est saturé » ne sont pas des diagnostics, ce sont des impressions. Tant que la cause n'est pas nommée, impossible de savoir si un PC neuf réglerait le problème, ou si le même problème vous suivrait sur la nouvelle machine (un navigateur surchargé ou trop de programmes au démarrage ralentiront aussi un PC neuf).",
      },
      {
        type: "p",
        text: "Notre guide « Ordinateur qui rame » détaille les neuf causes les plus fréquentes et une méthode pour trouver la vôtre en dix minutes.",
      },
      { type: "h2", text: "2. Mon PC peut-il passer à Windows 11 ?" },
      {
        type: "p",
        text: "C'est devenu le critère décisif. Le support de Windows 10 a pris fin le 14 octobre 2025, et le programme de mises à jour de sécurité étendues (ESU) pour les particuliers s'arrête le 13 octobre 2026. Après cette date, un PC sous Windows 10 ne reçoit plus aucun correctif de sécurité.",
      },
      {
        type: "p",
        text: "Pour vérifier, installez l'application gratuite « Contrôle d'intégrité du PC » de Microsoft. Les exigences principales : un processeur assez récent (en général Intel de 8e génération ou AMD Ryzen 2000 et plus récents), une puce TPM 2.0, le démarrage sécurisé, 4 Go de mémoire et 64 Go de stockage. Un PC compatible mérite presque toujours d'être amélioré plutôt que remplacé. Un PC incompatible peut encore servir sous Linux, mais pour un usage courant sous Windows, son remplacement devient logique.",
      },
      { type: "h2", text: "3. Mon PC a-t-il un SSD ou un disque dur ?" },
      {
        type: "p",
        text: "Ouvrez le Gestionnaire des tâches (Ctrl + Maj + Échap), onglet « Performances », puis « Disque » : la ligne « Type » indique SSD ou HDD. Un HDD, c'est un disque dur mécanique, la cause matérielle de lenteur la plus fréquente sur les PC de plus de cinq ans. Le remplacer par un SSD (environ 40 à 70 € pour 500 Go, plus 40 à 80 € de main-d'œuvre si vous le faites faire) rend souvent un vieux PC plus rapide qu'au premier jour.",
      },
      { type: "h2", text: "4. A-t-il assez de mémoire vive ?" },
      {
        type: "p",
        text: "Toujours dans « Performances », regardez « Mémoire ». Si elle dépasse régulièrement 85-90 % en usage normal, ajouter de la mémoire (passer de 8 à 16 Go) coûte environ 30 à 60 €. Attention : sur certains portables fins, la mémoire est soudée et ne peut pas être augmentée. Un réparateur ou la fiche technique du modèle vous le dira.",
      },
      { type: "h2", text: "5. La batterie tient-elle encore ?" },
      {
        type: "p",
        text: "Sur un portable, une autonomie qui s'effondre pousse souvent à racheter alors qu'une batterie neuve coûte en général 50 à 120 €. Pour connaître son état, ouvrez une invite de commandes et tapez powercfg /batteryreport : le rapport compare la capacité d'origine (« Design capacity ») à la capacité actuelle (« Full charge capacity »). En dessous d'environ 60 %, le remplacement de la batterie se justifie.",
      },
      { type: "h2", text: "6. Combien coûterait la réparation, comparée au neuf ?" },
      {
        type: "p",
        text: "Une règle simple : si la réparation ou l'amélioration coûte moins d'un tiers du prix d'un PC neuf équivalent, et que le PC est compatible Windows 11, réparez. Au-delà, ou si plusieurs pannes se cumulent (écran, clavier, charnières, batterie), le remplacement devient raisonnable. Pensez aussi à l'impact : prolonger un ordinateur de deux ou trois ans est de loin le geste le plus efficace pour réduire son empreinte numérique.",
      },
      { type: "h2", text: "Quand faut-il vraiment changer de PC ?" },
      {
        type: "ul",
        items: [
          "Le processeur est incompatible avec Windows 11 et vous voulez rester sous Windows avec des mises à jour de sécurité.",
          "Plusieurs composants lâchent en même temps, pour un total supérieur au tiers du prix du neuf.",
          "L'usage a changé : montage vidéo, jeux récents ou logiciels professionnels que la machine ne peut objectivement pas faire tourner.",
          "La carte mère ou le processeur sont en panne : sur un portable, la réparation coûte alors souvent presque le prix d'un neuf.",
        ],
      },
      { type: "h2", text: "Comment vérifier un diagnostic avant de décider ?" },
      {
        type: "p",
        text: "Si un professionnel vous conseille de remplacer votre ordinateur, demandez-lui la cause précise et comment elle a été mesurée. Un vrai problème matériel se vérifie objectivement : l'état d'un disque se lit dans ses données SMART, une surchauffe se voit dans le journal de Windows, une batterie usée dans son rapport de capacité. Un deuxième avis coûte toujours moins cher qu'un PC neuf inutile.",
      },
      { type: "h2", text: "Un deuxième avis gratuit en 19 secondes" },
      {
        type: "p",
        text: "Nyctale a été conçu pour ce moment-là. En 19 secondes, il analyse votre PC chez vous et dit en langage clair ce qui ne va pas, à quel point c'est grave, et si le problème se règle par un simple réglage ou demande une intervention matérielle. Il ne remplace pas un professionnel pour une panne physique, mais il vous donne une base solide pour juger ce qu'on vous propose, au lieu de faire confiance les yeux fermés.",
      },
    ],
    faq: [
      {
        q: "À partir de quel âge faut-il changer un ordinateur ?",
        r: "Il n'y a pas d'âge fixe. Un PC de six ou sept ans compatible Windows 11, équipé d'un SSD et de 16 Go de mémoire, reste parfaitement utilisable pour la bureautique et Internet. C'est la compatibilité Windows 11 et le coût des réparations qui décident, pas l'âge.",
      },
      {
        q: "Que faire d'un PC incompatible avec Windows 11 ?",
        r: "Après le 13 octobre 2026, il ne reçoit plus de correctifs de sécurité sous Windows 10. Vous pouvez installer une distribution Linux légère, qui le gardera sûr et rapide pour Internet et la bureautique, ou le remplacer si vous tenez à rester sous Windows.",
      },
      {
        q: "Combien coûte le passage à un SSD ?",
        r: "Environ 40 à 70 € pour un SSD de 500 Go, auxquels s'ajoutent 40 à 80 € de main-d'œuvre si un réparateur fait le transfert. C'est souvent l'amélioration la plus rentable sur un PC de plus de cinq ans.",
      },
      {
        q: "Un PC reconditionné est-il une bonne alternative ?",
        r: "Oui, à condition de choisir un modèle compatible Windows 11, avec SSD, et vendu avec une garantie d'au moins un an. C'est souvent 30 à 50 % moins cher qu'un neuf pour un usage équivalent.",
      },
      {
        q: "Comment savoir si un dépanneur me conseille bien ?",
        r: "Un bon diagnostic nomme une cause précise et vérifiable (disque, batterie, surchauffe, programme), pas une impression générale. Demandez comment elle a été mesurée, et n'hésitez pas à obtenir un deuxième avis avant une dépense importante.",
      },
    ],
    liens: [
      "pc-qui-rame-sans-raison",
      "disque-a-100-pourcent-windows",
      "ventilateur-qui-ne-sarrete-plus",
    ],
  },
  {
    slug: "before-buying-a-new-pc",
    lang: "en",
    traduction: "avant-dacheter-un-pc-neuf",
    title: "Replace or repair your PC? 6 questions to ask before buying",
    seoTitle: "Should you replace your PC? A checklist before buying",
    excerpt:
      "A slow PC can often be fixed for a fraction of the price of a new one. 6 concrete questions (Windows 11, SSD, RAM, battery, cost) to decide without regret.",
    date: "2026-08-08",
    updated: "2026-09-25",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "A slow computer doesn't necessarily need replacing: in most cases, a settings fix, an SSD or more memory costs between €0 and €150, versus €500 to €800 for an equivalent new PC. Replacement is mainly justified when the PC can't run Windows 11, or when the repair would cost more than about a third of a new one.",
      },
      {
        type: "p",
        text: "'At this point, you're better off buying a new one.' It's a line you often hear in a shop or during a repair visit, and it can be perfectly honest. But the person making the diagnosis is often also the one selling the solution. That's not an accusation: it's a reason to check for yourself before spending. Here are the six questions that settle it.",
      },
      { type: "h2", text: "In short: the decision checklist" },
      {
        type: "ul",
        items: [
          "Software cause identified (programs, browser, update): fix it, €0.",
          "Mechanical hard drive or not enough memory, Windows 11 compatible PC: upgrade it, roughly €40 to €150.",
          "Worn battery or noisy fan on an otherwise healthy PC: repair it, roughly €50 to €120.",
          "PC incompatible with Windows 11, or repair above a third of the price of an equivalent new PC: replacing becomes reasonable.",
        ],
      },
      { type: "h2", text: "1. What exactly is the problem?" },
      {
        type: "p",
        text: "This is the question that matters most. A serious diagnosis names a precise cause: a program, a component, a part. 'It's old' or 'it's clogged up' aren't diagnoses, they're impressions. Until the cause is named, you can't know whether a new PC would fix the problem, or whether the same problem would follow you to the new machine (an overloaded browser or too many startup programs will slow down a new PC too).",
      },
      {
        type: "p",
        text: "Our 'Slow computer' guide covers the nine most common causes and a method to find yours in ten minutes.",
      },
      { type: "h2", text: "2. Can my PC run Windows 11?" },
      {
        type: "p",
        text: "This has become the deciding factor. Windows 10 support ended on October 14, 2025, and the Extended Security Updates (ESU) programme for consumers ends on October 13, 2026. After that date, a Windows 10 PC no longer receives any security fixes.",
      },
      {
        type: "p",
        text: "To check, install Microsoft's free 'PC Health Check' app. The main requirements: a recent enough processor (generally Intel 8th generation or AMD Ryzen 2000 and newer), a TPM 2.0 chip, Secure Boot, 4 GB of memory and 64 GB of storage. A compatible PC is almost always worth upgrading rather than replacing. An incompatible one can still serve under Linux, but for everyday use on Windows, replacing it becomes logical.",
      },
      { type: "h2", text: "3. Does my PC have an SSD or a hard drive?" },
      {
        type: "p",
        text: "Open Task Manager (Ctrl + Shift + Esc), 'Performance' tab, then 'Disk': the 'Type' line says SSD or HDD. HDD means a mechanical hard drive, the most common hardware cause of slowness on PCs older than five years. Replacing it with an SSD (about €40 to €70 for 500 GB, plus €40 to €80 of labour if a shop does it) often makes an old PC faster than it was on day one.",
      },
      { type: "h2", text: "4. Does it have enough memory?" },
      {
        type: "p",
        text: "Still in 'Performance', look at 'Memory'. If it regularly goes above 85-90% during normal use, adding memory (from 8 to 16 GB) costs about €30 to €60. Note that on some thin laptops, memory is soldered and can't be upgraded. A repair shop or the model's spec sheet will tell you.",
      },
      { type: "h2", text: "5. Does the battery still hold up?" },
      {
        type: "p",
        text: "On a laptop, collapsing battery life often pushes people to buy a new one, when a new battery generally costs €50 to €120. To check its health, open a command prompt and type powercfg /batteryreport: the report compares the original capacity ('Design capacity') with the current one ('Full charge capacity'). Below about 60%, replacing the battery is justified.",
      },
      { type: "h2", text: "6. How much would the repair cost compared with a new PC?" },
      {
        type: "p",
        text: "A simple rule: if the repair or upgrade costs less than a third of an equivalent new PC, and the PC is Windows 11 compatible, repair it. Beyond that, or if several faults add up (screen, keyboard, hinges, battery), replacing becomes reasonable. Consider the impact too: keeping a computer two or three years longer is by far the most effective way to reduce its footprint.",
      },
      { type: "h2", text: "When should you really replace your PC?" },
      {
        type: "ul",
        items: [
          "The processor is incompatible with Windows 11 and you want to stay on Windows with security updates.",
          "Several components fail at once, for a total above a third of the price of a new PC.",
          "Your needs have changed: video editing, recent games or professional software the machine objectively can't run.",
          "The motherboard or processor has failed: on a laptop, the repair then often costs almost as much as a new one.",
        ],
      },
      { type: "h2", text: "How do you check a diagnosis before deciding?" },
      {
        type: "p",
        text: "If a professional advises you to replace your computer, ask for the precise cause and how it was measured. A real hardware problem can be verified objectively: a drive's health is read from its SMART data, overheating shows up in the Windows log, a worn battery in its capacity report. A second opinion always costs less than an unnecessary new PC.",
      },
      { type: "h2", text: "A free second opinion in 19 seconds" },
      {
        type: "p",
        text: "Nyctale was built for exactly this moment. In 19 seconds, it analyses your PC at home and explains in plain language what's wrong, how serious it is, and whether the problem can be fixed with a simple setting or needs a hardware repair. It doesn't replace a professional for a physical fault, but it gives you a solid basis to judge what you're being offered, instead of trusting blindly.",
      },
    ],
    faq: [
      {
        q: "At what age should you replace a computer?",
        r: "There is no fixed age. A six or seven year old PC that is Windows 11 compatible, with an SSD and 16 GB of memory, is perfectly usable for office work and the internet. Windows 11 compatibility and repair costs decide, not age.",
      },
      {
        q: "What can you do with a PC that can't run Windows 11?",
        r: "After October 13, 2026, it no longer receives security fixes on Windows 10. You can install a lightweight Linux distribution, which will keep it safe and fast for browsing and office work, or replace it if you want to stay on Windows.",
      },
      {
        q: "How much does switching to an SSD cost?",
        r: "About €40 to €70 for a 500 GB SSD, plus €40 to €80 of labour if a repair shop does the transfer. It's often the most cost-effective upgrade for a PC older than five years.",
      },
      {
        q: "Is a refurbished PC a good alternative?",
        r: "Yes, as long as you choose a Windows 11 compatible model with an SSD, sold with at least a one-year warranty. It's often 30 to 50% cheaper than new for the same use.",
      },
      {
        q: "How can I tell if a repair technician is advising me well?",
        r: "A good diagnosis names a precise, verifiable cause (drive, battery, overheating, program), not a general impression. Ask how it was measured, and don't hesitate to get a second opinion before a significant expense.",
      },
    ],
    liens: ["slow-computer-no-obvious-reason", "disk-100-percent-windows", "fan-that-never-stops-spinning"],
  },

  // -------------------------------------------------------------------
  // FR 4 / EN 4 — Disque à 100 %
  // -------------------------------------------------------------------
  {
    slug: "disque-a-100-pourcent-windows",
    lang: "fr",
    traduction: "disk-100-percent-windows",
    title: "Disque à 100 % dans le Gestionnaire des tâches : pourquoi, et comment le calmer",
    seoTitle: "Disque à 100 % sous Windows : causes et solutions",
    excerpt:
      "Le disque affiche 100 % et tout devient lent ? Ce n'est pas un disque plein, c'est un disque débordé. Les causes les plus fréquentes et comment trouver la vôtre.",
    date: "2026-09-24",
    readMin: 8,
    blocks: [
      {
        type: "p",
        text: "Un disque à 100 % dans le Gestionnaire des tâches signifie que le disque travaille sans arrêt, pas qu'il est plein. Tant qu'il est saturé, chaque action attend son tour : ouvrir un dossier, lancer un programme, afficher une page. Sur un vieil ordinateur équipé d'un disque dur mécanique, c'est la cause la plus fréquente d'un PC qui « rame » alors que le processeur ne fait presque rien.",
      },
      { type: "h2", text: "100 % d'activité ou disque plein : ne pas confondre" },
      {
        type: "p",
        text: "Deux problèmes différents se cachent derrière la même impression de lenteur. Le pourcentage affiché dans la colonne « Disque » du Gestionnaire des tâches mesure l'activité : la part du temps pendant laquelle le disque est occupé à lire ou écrire. Un disque presque vide peut être à 100 %. À l'inverse, un disque plein à 95 % peut être très calme ; il pose alors un autre problème, celui du manque de place pour Windows.",
      },
      { type: "h2", text: "Pourquoi le disque est-il à 100 % ?" },
      { type: "h3", text: "1. Windows qui travaille après l'allumage" },
      {
        type: "p",
        text: "Dans les minutes qui suivent l'allumage, Windows installe des mises à jour (TiWorker, TrustedInstaller), lance une analyse antivirus (MsMpEng), indexe vos fichiers pour la recherche (SearchIndexer) et précharge les programmes que vous utilisez souvent (service SysMain). Sur un disque dur mécanique, tout cela en même temps suffit à le saturer. C'est normal et temporaire : le calme revient en général au bout de 20 à 40 minutes.",
      },
      { type: "h3", text: "2. Une mémoire vive trop petite, qui déborde sur le disque" },
      {
        type: "p",
        text: "C'est la cause la plus sournoise. Quand les programmes ouverts réclament plus de mémoire que l'ordinateur n'en possède, Windows range le surplus sur le disque (fichier d'échange) et le relit en permanence. Le disque tourne alors à plein régime pour compenser le manque de mémoire. C'est typique d'un PC de 4 ou 8 Go avec un navigateur chargé d'onglets.",
      },
      { type: "h3", text: "3. Un disque dur mécanique" },
      {
        type: "p",
        text: "Un disque dur à plateaux (HDD) est des dizaines de fois plus lent qu'un SSD pour les petits accès que Windows multiplie. Il atteint 100 % très facilement, là où un SSD absorberait la même charge sans broncher.",
      },
      { type: "h3", text: "4. Un disque en fin de vie" },
      {
        type: "p",
        text: "Un disque qui commence à avoir des secteurs défectueux relit plusieurs fois les mêmes zones avant de réussir. Il devient lent, puis de plus en plus lent, souvent avant de tomber en panne. C'est le seul cas où il faut agir vite : sauvegarder d'abord, diagnostiquer ensuite.",
      },
      { type: "h3", text: "5. La synchronisation de fichiers" },
      {
        type: "p",
        text: "OneDrive, Dropbox ou Google Drive qui rattrapent des milliers de fichiers, par exemple après une réinstallation ou un nouveau dossier photos, peuvent occuper le disque pendant des heures.",
      },
      { type: "h2", text: "Comment trouver le coupable en 5 minutes ?" },
      {
        type: "ol",
        items: [
          "Ouvrez le Gestionnaire des tâches avec Ctrl + Maj + Échap, onglet « Processus ».",
          "Cliquez sur la colonne « Disque » pour trier les programmes du plus actif au moins actif.",
          "Si c'est une tâche Windows de la liste ci-dessus, laissez l'ordinateur allumé 20 à 40 minutes. Si c'est un programme dont vous n'avez pas besoin, fermez-le.",
          "Onglet « Performance », puis « Disque » : le type (HDD ou SSD) est indiqué. Un HDD à 100 % en permanence est un bon candidat au remplacement par un SSD.",
          "Toujours dans « Performance », regardez « Mémoire » : si la mémoire utilisée frôle le maximum, le disque compense un manque de RAM.",
        ],
      },
      {
        type: "p",
        text: "Pour aller plus loin, le Moniteur de ressources (tapez « resmon » dans la recherche Windows), onglet « Disque », montre même les fichiers lus et écrits en temps réel.",
      },
      { type: "h2", text: "Que faire selon la cause ?" },
      {
        type: "ul",
        items: [
          "Tâches Windows après l'allumage : patience, ordinateur branché. Évitez de l'éteindre en plein milieu d'une mise à jour.",
          "Mémoire saturée : fermez les onglets et programmes inutiles. Si le problème revient chaque jour, ajouter de la mémoire vive (quand l'ordinateur le permet) règle la situation durablement.",
          "Disque dur mécanique : le remplacer par un SSD est la meilleure amélioration possible pour un vieux PC. Un SSD coûte quelques dizaines d'euros, et un réparateur peut transférer vos données.",
          "Disque en fin de vie : sauvegardez vos documents immédiatement sur un disque externe ou une clé USB, puis faites-le remplacer.",
          "Synchronisation : laissez-la finir une fois, ou mettez-la en pause pendant que vous travaillez.",
        ],
      },
      {
        type: "p",
        text: "Méfiez-vous des « astuces » qui consistent à désactiver en bloc des services Windows ou l'antivirus : elles masquent le symptôme, rarement la cause, et certaines affaiblissent la sécurité de l'ordinateur.",
      },
      { type: "h2", text: "Ce que Nyctale vérifie, et ce qu'il ne mesure pas" },
      {
        type: "p",
        text: "Nyctale ne mesure pas le pourcentage d'activité du disque. Il vérifie en revanche les causes qui l'expliquent le plus souvent : une mémoire vive qui déborde sur le disque, l'état de santé du disque tel que Windows le signale, et la place libre restante. Il vous dit laquelle est en cause, et si c'est un simple réglage ou un vrai problème matériel.",
      },
    ],
    faq: [
      {
        q: "Est-ce grave si mon disque est à 100 % ?",
        r: "Pas forcément. Quelques minutes après l'allumage ou une mise à jour, c'est normal. Si c'est permanent, c'est souvent un manque de mémoire vive ou un disque dur mécanique trop lent. Ça devient urgent seulement si le disque est en fin de vie : dans ce cas, sauvegardez tout de suite.",
      },
      {
        q: "Un disque à 100 % veut-il dire que mon disque est plein ?",
        r: "Non. Le pourcentage mesure l'activité du disque, pas son remplissage. Un disque presque vide peut être à 100 %, et un disque presque plein peut être au repos.",
      },
      {
        q: "Remplacer le disque dur par un SSD règle-t-il le problème ?",
        r: "Sur un ordinateur équipé d'un disque dur mécanique, c'est généralement l'amélioration la plus spectaculaire : démarrage et ouverture des programmes plusieurs fois plus rapides. Si la cause est un manque de mémoire vive, il faut aussi regarder de ce côté.",
      },
      {
        q: "Faut-il désactiver le service SysMain ?",
        r: "Ce n'est à tenter qu'en dernier recours, sur un disque dur mécanique, et en observant l'effet. SysMain accélère le lancement des programmes habituels ; le désactiver n'a d'intérêt que s'il sature réellement le disque de façon durable.",
      },
    ],
  },

  // -------------------------------------------------------------------
  // FR 5 / EN 5 — PC lent au démarrage
  // -------------------------------------------------------------------
  {
    slug: "pc-lent-au-demarrage",
    lang: "fr",
    traduction: "slow-pc-startup",
    title: "PC lent au démarrage : les vraies causes et comment les corriger",
    seoTitle: "PC lent au démarrage : causes et solutions (Windows 10 et 11)",
    excerpt:
      "Votre ordinateur met plusieurs minutes à devenir utilisable ? Les 7 causes d'un démarrage lent, comment mesurer le vôtre, et comment le corriger sans rien casser.",
    date: "2026-09-24",
    updated: "2026-09-25",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "Un PC lent au démarrage est presque toujours encombré par des programmes qui se lancent tout seuls avec Windows. Viennent ensuite un disque dur mécanique ou trop plein, et des mises à jour qui attendent un vrai redémarrage. Ces causes se vérifient en quelques minutes, et la plupart se corrigent sans rien désinstaller.",
      },
      {
        type: "p",
        text: "Le bureau apparaît, mais l'ordinateur reste inutilisable pendant plusieurs minutes : le curseur tourne, les fenêtres s'ouvrent au ralenti. C'est souvent là que se joue l'impression d'un PC « fatigué ». En réalité, Windows est simplement en train de lancer beaucoup de choses en même temps.",
      },
      { type: "h2", text: "En bref : les 4 réflexes" },
      {
        type: "ol",
        items: [
          "Faites un vrai « Redémarrer » (pas « Arrêter ») pour terminer les mises à jour en attente.",
          "Désactivez les programmes de démarrage inutiles dans le Gestionnaire des tâches (Ctrl + Maj + Échap).",
          "Vérifiez qu'il reste au moins 15 % d'espace libre sur le disque C:.",
          "Si l'ordinateur a encore un disque dur mécanique, un SSD divise le temps de démarrage par trois ou plus.",
        ],
      },
      { type: "h2", text: "Quel temps de démarrage est normal ?" },
      {
        type: "p",
        text: "Sur un PC équipé d'un SSD, le bureau doit apparaître en 10 à 30 secondes, et l'ordinateur doit être utilisable moins d'une minute après. Avec un disque dur mécanique, compter 1 à 3 minutes n'a rien d'anormal. Au-delà de 3 à 5 minutes avant de pouvoir travailler, il y a clairement une cause à chercher.",
      },
      {
        type: "p",
        text: "Attention à la différence entre les deux étapes : si l'écran reste noir ou affiche le logo du fabricant longtemps, c'est le démarrage matériel (le BIOS) qui traîne ; si c'est après l'apparition du bureau, ce sont les programmes et Windows lui-même.",
      },
      { type: "h2", text: "Pourquoi un PC devient-il lent au démarrage ?" },
      { type: "h3", text: "1. Trop de programmes au démarrage" },
      {
        type: "p",
        text: "Chaque logiciel installé veut « démarrer avec Windows » : messageries, lanceurs de jeux, outils d'imprimante, assistants de mise à jour, stockage en ligne. Pris un par un, ils sont légers ; tous ensemble, ils se disputent le disque et la mémoire au moment où l'ordinateur en a le plus besoin. Au-delà d'une dizaine, l'effet se sent nettement.",
      },
      { type: "h3", text: "2. Un « démarrage rapide » qui n'en est pas vraiment un" },
      {
        type: "p",
        text: "Avec le démarrage rapide de Windows, activé par défaut, « Arrêter » ne ferme pas complètement le système : Windows se met en veille prolongée partielle pour redémarrer plus vite. C'est efficace, mais les petits blocages s'accumulent d'un jour à l'autre, puisque rien n'est jamais vraiment remis à zéro. Seul « Redémarrer » repart d'une page blanche.",
      },
      { type: "h3", text: "3. Un disque dur mécanique ou presque plein" },
      {
        type: "p",
        text: "Le démarrage consiste surtout à lire des milliers de petits fichiers. Un disque dur à plateaux le fait lentement, et un disque presque plein laisse moins de place à Windows pour travailler. Sous 10 % d'espace libre, tout ralentit, démarrage compris. Un disque dur qui commence à faiblir rallonge aussi le démarrage, parfois bien avant de tomber en panne.",
      },
      { type: "h3", text: "4. Des mises à jour qui attendent" },
      {
        type: "p",
        text: "Une mise à jour installée mais pas encore finalisée peut reprendre son travail à chaque allumage, tant que l'ordinateur n'a pas été vraiment redémarré. Le démarrage paraît alors lent, jour après jour.",
      },
      { type: "h3", text: "5. Les programmes de mise à jour en arrière-plan" },
      {
        type: "p",
        text: "Beaucoup de logiciels installent leur propre service de mise à jour (navigateurs, suites bureautiques, lecteurs PDF, logiciels du fabricant). Ils ne figurent pas toujours dans la liste des applications de démarrage, car ils passent par des services ou des tâches planifiées, et se réveillent tous à l'allumage pour vérifier s'il existe une nouvelle version.",
      },
      { type: "h3", text: "6. Un antivirus lourd, ou deux antivirus" },
      {
        type: "p",
        text: "Un antivirus analyse les fichiers au moment où ils sont ouverts, donc massivement au démarrage. Certains antivirus tiers sont nettement plus lourds que Microsoft Defender, intégré et suffisant pour un usage courant. Deux antivirus actifs en même temps se gênent mutuellement et ralentissent fortement l'allumage.",
      },
      { type: "h3", text: "7. Un périphérique ou une connexion qui se fait attendre" },
      {
        type: "p",
        text: "Un disque externe, une clé USB oubliée, une imprimante réseau ou un lecteur réseau à reconnecter peuvent faire attendre Windows plusieurs secondes, voire plus, pendant l'ouverture de session. Débrancher les périphériques non indispensables permet de le vérifier en un redémarrage.",
      },
      { type: "h2", text: "Comment trouver ce qui ralentit votre démarrage ?" },
      {
        type: "ol",
        items: [
          "Ouvrez le Gestionnaire des tâches (Ctrl + Maj + Échap), puis l'onglet « Applications de démarrage » (« Démarrage » sur Windows 10).",
          "En haut à droite, « Dernier temps BIOS » indique la durée de la phase matérielle. Au-delà de 15 à 20 secondes, regardez du côté du BIOS ou des périphériques branchés plutôt que de Windows.",
          "La colonne « Impact du démarrage » classe chaque programme de « Faible » à « Élevé ». Commencez par ceux à impact élevé que vous n'utilisez pas tous les jours.",
          "Faites un clic droit puis « Désactiver ». Le programme reste installé et fonctionne normalement quand vous l'ouvrez vous-même : il ne se lance simplement plus tout seul.",
          "Dans l'onglet « Performances » > « Disque », vérifiez le type (SSD ou HDD) et, dans l'Explorateur de fichiers, l'espace libre sur le disque C:.",
          "Redémarrez (« Redémarrer », pas « Arrêter ») et comparez.",
        ],
      },
      {
        type: "p",
        text: "Pour mesurer précisément, Windows note la durée de chaque démarrage dans l'Observateur d'événements : journal « Applications et services > Microsoft > Windows > Diagnostics-Performance > Opérationnel », événement 100. Les événements 101 à 110 du même journal nomment les programmes et pilotes qui ont ralenti le démarrage.",
      },
      { type: "h2", text: "Que faire selon la cause ?" },
      {
        type: "ul",
        items: [
          "Programmes au démarrage : désactivez-les dans le Gestionnaire des tâches, ou dans Paramètres > Applications > Démarrage.",
          "Démarrage rapide : choisissez « Redémarrer » au moins une fois par semaine. Si les blocages reviennent souvent, désactivez-le : Panneau de configuration > Options d'alimentation > « Choisir l'action des boutons d'alimentation ».",
          "Disque plein : Paramètres > Système > Stockage, puis « Recommandations de nettoyage ». Gardez au moins 15 % d'espace libre.",
          "Disque dur mécanique : un SSD de 500 Go coûte environ 40 à 70 €, plus 40 à 80 € de main-d'œuvre si vous le faites installer. C'est la meilleure amélioration possible pour un démarrage lent.",
          "Mises à jour en attente : Paramètres > Windows Update, installez tout ce qui reste, puis « Redémarrer ».",
          "Services de mise à jour tiers : désinstallez les logiciels que vous n'utilisez plus, c'est le moyen le plus sûr de supprimer leur service de mise à jour.",
          "Antivirus : n'en gardez qu'un seul. Microsoft Defender suffit pour la plupart des usages domestiques.",
          "Périphériques : débranchez disques externes et clés USB avant d'allumer, et supprimez les lecteurs réseau qui n'existent plus.",
        ],
      },
      { type: "h2", text: "Ce qu'il ne faut pas désactiver" },
      {
        type: "ul",
        items: [
          "Votre antivirus, y compris Microsoft Defender.",
          "Les pilotes et utilitaires du fabricant liés au clavier, au pavé tactile ou au son, si vous ne savez pas à quoi ils servent.",
          "Les programmes dont vous avez réellement besoin dès l'allumage (une messagerie professionnelle, par exemple).",
        ],
      },
      {
        type: "p",
        text: "En cas de doute, désactivez un programme à la fois : c'est réversible en un clic dans la même liste. Méfiez-vous des logiciels « d'accélération du démarrage » : Windows fournit déjà tout ce qu'il faut, gratuitement.",
      },
      { type: "h2", text: "Quand faut-il s'inquiéter ?" },
      {
        type: "ul",
        items: [
          "Le démarrage s'allonge de semaine en semaine sans raison, avec des bruits de cliquetis : un disque dur qui faiblit. Sauvegardez vos fichiers sans attendre.",
          "Windows affiche « Préparation de la réparation automatique » à chaque allumage : des fichiers système sont probablement abîmés.",
          "L'écran reste noir ou bloqué sur le logo du fabricant plusieurs minutes : le problème se situe avant Windows (matériel ou BIOS), un avis professionnel est utile.",
        ],
      },
      { type: "h2", text: "Ce que Nyctale vérifie en 19 secondes" },
      {
        type: "p",
        text: "Nyctale compte les programmes lancés au démarrage, vérifie si l'ordinateur a vraiment redémarré récemment ou seulement été « arrêté » avec le démarrage rapide, et contrôle la place libre et la santé du disque. Il vous dit lequel de ces points ralentit votre démarrage, et ouvre directement la bonne liste pour agir.",
      },
    ],
    faq: [
      {
        q: "Combien de temps doit durer le démarrage d'un PC ?",
        r: "Avec un SSD, le bureau apparaît en 10 à 30 secondes et l'ordinateur est utilisable en moins d'une minute. Avec un disque dur mécanique, 1 à 3 minutes restent normales. Au-delà, il y a une cause à chercher.",
      },
      {
        q: "Combien de programmes au démarrage, c'est trop ?",
        r: "Il n'y a pas de seuil absolu, mais au-delà d'une dizaine de programmes qui se lancent avec Windows, l'effet sur un ordinateur modeste devient sensible. L'important est de garder ceux dont vous avez besoin dès l'allumage et de désactiver les autres.",
      },
      {
        q: "Désactiver un programme au démarrage le supprime-t-il ?",
        r: "Non. Il reste installé et fonctionne normalement quand vous l'ouvrez. Il ne se lance simplement plus automatiquement, et vous pouvez le réactiver à tout moment.",
      },
      {
        q: "Faut-il désactiver le démarrage rapide de Windows ?",
        r: "Pas forcément. Il accélère réellement l'allumage. Il suffit de choisir « Redémarrer » de temps en temps, par exemple une fois par semaine, pour repartir d'un système propre. Si l'ordinateur accumule les blocages, le désactiver est une option.",
      },
      {
        q: "Un SSD accélère-t-il le démarrage ?",
        r: "Oui, nettement, si l'ordinateur a encore un disque dur mécanique. C'est souvent la différence entre plusieurs minutes et quelques secondes.",
      },
      {
        q: "Que signifie « Dernier temps BIOS » dans le Gestionnaire des tâches ?",
        r: "C'est la durée de la phase matérielle du démarrage, avant que Windows ne prenne la main. Quelques secondes sont normales ; au-delà de 15 à 20 secondes, un périphérique branché ou un réglage du BIOS est en cause, pas Windows.",
      },
    ],
    liens: ["pc-qui-rame-sans-raison", "disque-a-100-pourcent-windows", "windows-11-lent-apres-mise-a-jour"],
  },

  // -------------------------------------------------------------------
  // FR 6 / EN 6 — Windows 11 lent après une mise à jour
  // -------------------------------------------------------------------
  {
    slug: "windows-11-lent-apres-mise-a-jour",
    lang: "fr",
    traduction: "windows-11-slow-after-update",
    title: "Windows 11 lent après une mise à jour : que faire ?",
    seoTitle: "Windows 11 lent après une mise à jour : causes et solutions",
    excerpt:
      "Tout allait bien, puis une mise à jour et plus rien ne répond ? Le plus souvent, Windows termine son travail. Comment savoir si c'est temporaire, et les solutions dans l'ordre.",
    date: "2026-09-24",
    updated: "2026-09-25",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "Un Windows 11 lent juste après une mise à jour est le plus souvent un ralentissement temporaire : Windows termine en arrière-plan le travail commencé par la mise à jour. Il faut s'en inquiéter si la lenteur dure plusieurs jours, et dans ce cas les causes se vérifient une par une.",
      },
      { type: "h2", text: "En bref : que faire tout de suite ?" },
      {
        type: "ol",
        items: [
          "Laissez l'ordinateur allumé et branché 30 à 60 minutes, sans le mettre en veille.",
          "Choisissez « Redémarrer », pas « Arrêter ».",
          "Installez les mises à jour restantes dans Windows Update : un correctif suit souvent une mise à jour problématique.",
          "Si la lenteur dure plus de quelques jours, suivez la méthode pas à pas plus bas.",
        ],
      },
      { type: "h2", text: "Mise à jour mensuelle ou mise à jour annuelle : quelle différence ?" },
      {
        type: "p",
        text: "Windows 11 reçoit deux types de mises à jour. Les mises à jour cumulatives, publiées chaque mois (le deuxième mardi), corrigent des failles et des bugs : elles sont rapides à installer et ralentissent rarement l'ordinateur plus de quelques heures. Les mises à jour de fonctionnalités, une fois par an (par exemple 24H2 puis 25H2), réinstallent une grande partie du système : c'est après elles que les lenteurs sont les plus fréquentes et les plus longues. Pour savoir laquelle vous avez reçue, ouvrez Paramètres > Windows Update > Historique des mises à jour.",
      },
      { type: "h2", text: "Pourquoi Windows est-il lent après une mise à jour ?" },
      { type: "h3", text: "1. Le travail d'après mise à jour" },
      {
        type: "p",
        text: "Une fois la mise à jour installée, Windows a encore de quoi faire : finaliser des composants (TiWorker, TrustedInstaller), optimiser des bibliothèques de programmes, réindexer vos fichiers pour la recherche (SearchIndexer) et relancer une analyse antivirus (MsMpEng). Pendant 30 minutes à quelques heures, le processeur et le disque sont très occupés. Sur un PC équipé d'un disque dur mécanique, cette phase peut durer toute une journée.",
      },
      { type: "h3", text: "2. Un redémarrage qui n'a pas vraiment eu lieu" },
      {
        type: "p",
        text: "Certaines mises à jour ne sont complètes qu'après un vrai redémarrage. Or, avec le démarrage rapide de Windows, « Arrêter » puis rallumer n'est pas un redémarrage complet. La mise à jour reste à moitié appliquée, et l'ordinateur peut rester lent tant que vous n'avez pas choisi « Redémarrer ».",
      },
      { type: "h3", text: "3. Un pilote remplacé" },
      {
        type: "p",
        text: "Une mise à jour peut remplacer le pilote de la carte graphique, du Wi-Fi ou du disque par une version générique. Résultat : un affichage saccadé, un réseau lent ou un ordinateur qui « rame » d'une façon nouvelle. L'historique des mises à jour indique si un pilote a été changé.",
      },
      { type: "h3", text: "4. De nouveaux programmes au démarrage" },
      {
        type: "p",
        text: "Les mises à jour de Windows ou d'autres logiciels ajoutent parfois des éléments qui se lancent au démarrage. Ils alourdissent l'allumage sans que vous ayez rien installé.",
      },
      { type: "h3", text: "5. Un disque soudain presque plein" },
      {
        type: "p",
        text: "Après une mise à jour de fonctionnalités, Windows conserve l'ancienne version dans un dossier « Windows.old », qui occupe souvent 15 à 30 Go, pour permettre un retour en arrière. Sur un petit disque, cela suffit à passer sous la barre des 10 % d'espace libre, et tout ralentit.",
      },
      { type: "h3", text: "6. Des réglages remis à zéro" },
      {
        type: "p",
        text: "Une grosse mise à jour peut réactiver des fonctions que vous aviez coupées (applications au démarrage, synchronisation, effets visuels) ou modifier le mode d'alimentation. Un ordinateur passé en mode économie d'énergie paraît nettement plus lent.",
      },
      { type: "h3", text: "7. Des fichiers système abîmés" },
      {
        type: "p",
        text: "Plus rarement, une mise à jour interrompue (coupure de courant, ordinateur éteint en plein milieu) laisse des fichiers de Windows endommagés. Les symptômes sont alors déroutants : lenteurs, fenêtres qui ne s'ouvrent plus, mises à jour qui échouent en boucle.",
      },
      { type: "h2", text: "Comment savoir si c'est temporaire ?" },
      {
        type: "p",
        text: "Ouvrez le Gestionnaire des tâches (Ctrl + Maj + Échap) et triez les processus par « Processeur » puis par « Disque ». Si vous voyez en tête TiWorker, TrustedInstaller, SearchIndexer, MsMpEng ou « Service Windows Update », Windows termine son travail : patientez. Si ces noms ont disparu et que l'ordinateur reste lent, la cause est ailleurs.",
      },
      { type: "h2", text: "Que faire, dans l'ordre ?" },
      {
        type: "ol",
        items: [
          "Laissez l'ordinateur allumé et branché 30 à 60 minutes, sans le mettre en veille, pour que Windows termine son travail.",
          "Choisissez « Redémarrer » (et non « Arrêter ») dans le menu Démarrer.",
          "Dans Paramètres > Windows Update, installez les éventuelles mises à jour restantes : un correctif suit souvent une mise à jour problématique.",
          "Vérifiez le mode d'alimentation : Paramètres > Système > Alimentation (ou « Alimentation et batterie »), réglé sur « Équilibré » ou « Meilleures performances ».",
          "Vérifiez l'espace libre : Paramètres > Système > Stockage > Fichiers temporaires. Une fois sûr que tout fonctionne, « Installations précédentes de Windows » libère l'espace de Windows.old.",
          "Dans Paramètres > Windows Update > Historique des mises à jour, vérifiez si un pilote a été mis à jour. Si oui, installez la version du site du fabricant de votre ordinateur ou de la carte graphique.",
          "Si la lenteur est apparue avec une mise à jour précise et dure depuis plusieurs jours, la même page propose « Désinstaller des mises à jour ».",
          "Après une mise à jour de fonctionnalités, Paramètres > Système > Récupération > « Revenir en arrière » ramène à la version précédente pendant 10 jours.",
          "En dernier recours, la réparation intégrée de Windows remet d'aplomb les fichiers système abîmés : dans un terminal ouvert en tant qu'administrateur, tapez DISM /Online /Cleanup-Image /RestoreHealth, puis sfc /scannow. Sur Windows 11 récent, Paramètres > Système > Récupération propose aussi « Résoudre les problèmes à l'aide de Windows Update », qui réinstalle Windows en gardant vos fichiers et applications.",
        ],
      },
      {
        type: "p",
        text: "Une mise à jour lente n'est pas une raison de changer d'ordinateur : dans l'immense majorité des cas, tout rentre dans l'ordre en quelques heures ou après un vrai redémarrage.",
      },
      { type: "h2", text: "Peut-on éviter le problème la prochaine fois ?" },
      {
        type: "ul",
        items: [
          "Lancez les mises à jour quand vous n'avez pas besoin de l'ordinateur, par exemple le soir, branché sur secteur.",
          "Ne l'éteignez jamais pendant l'installation, même si elle semble bloquée : c'est ainsi que les fichiers système s'abîment.",
          "Gardez au moins 20 à 30 Go d'espace libre avant une mise à jour de fonctionnalités.",
          "Windows Update permet de suspendre les mises à jour une semaine à la fois, jusqu'à cinq semaines : pratique avant une période chargée. Ne les bloquez pas plus longtemps, elles corrigent des failles de sécurité.",
        ],
      },
      { type: "h2", text: "Quand faut-il s'inquiéter ?" },
      {
        type: "ul",
        items: [
          "La même mise à jour échoue et se réinstalle à chaque démarrage.",
          "Windows affiche « Préparation de la réparation automatique » en boucle, ou un écran noir après la connexion.",
          "La lenteur dure plus d'une semaine malgré les étapes ci-dessus : la cause n'est probablement pas la mise à jour elle-même, mais un problème qu'elle a révélé (disque fatigué, mémoire insuffisante).",
        ],
      },
      { type: "h2", text: "Ce que Nyctale vérifie en 19 secondes" },
      {
        type: "p",
        text: "Nyctale reconnaît les tâches Windows qui travaillent en arrière-plan (installation de mise à jour, analyse antivirus, indexation) et vous dit simplement de patienter quand c'est le cas. Il vérifie aussi si l'ordinateur a vraiment redémarré, compte les programmes au démarrage, contrôle l'espace libre et, lancé en administrateur, l'intégrité des fichiers de Windows.",
      },
    ],
    faq: [
      {
        q: "Combien de temps Windows reste-t-il lent après une mise à jour ?",
        r: "En général de 30 minutes à quelques heures, le temps de terminer l'installation, l'optimisation et la réindexation. Sur un disque dur mécanique, jusqu'à une journée après une mise à jour de fonctionnalités. Au-delà de quelques jours, il y a une autre cause à chercher.",
      },
      {
        q: "Faut-il désinstaller la dernière mise à jour ?",
        r: "Seulement si la lenteur est apparue avec elle, dure depuis plusieurs jours et résiste à un vrai redémarrage. Windows la réinstallera plus tard, souvent dans une version corrigée.",
      },
      {
        q: "Pourquoi « Arrêter » ne suffit pas après une mise à jour ?",
        r: "Avec le démarrage rapide, activé par défaut, « Arrêter » met Windows en veille prolongée partielle au lieu de le fermer complètement. Certaines mises à jour ont besoin d'un redémarrage complet : choisissez « Redémarrer ».",
      },
      {
        q: "Peut-on supprimer le dossier Windows.old ?",
        r: "Oui, une fois que vous êtes sûr que la nouvelle version fonctionne bien, via Paramètres > Système > Stockage > Fichiers temporaires > « Installations précédentes de Windows ». Vous perdez alors la possibilité de revenir en arrière. Windows le supprime de toute façon automatiquement après quelques semaines.",
      },
      {
        q: "Peut-on revenir à la version précédente de Windows 11 ?",
        r: "Oui, pendant 10 jours après une mise à jour de fonctionnalités : Paramètres > Système > Récupération > « Revenir en arrière ». Pour une mise à jour mensuelle, utilisez « Désinstaller des mises à jour » dans Windows Update.",
      },
    ],
    liens: ["pc-lent-au-demarrage", "pc-qui-rame-sans-raison", "disque-a-100-pourcent-windows"],
  },
  {
    slug: "disk-100-percent-windows",
    lang: "en",
    traduction: "disque-a-100-pourcent-windows",
    title: "Disk at 100% in Task Manager: why, and how to calm it down",
    seoTitle: "Disk at 100% on Windows: causes and fixes",
    excerpt:
      "Your disk shows 100% and everything crawls? That's not a full disk, it's an overwhelmed one. The most common causes, and how to find yours.",
    date: "2026-09-24",
    readMin: 8,
    blocks: [
      {
        type: "p",
        text: "A disk at 100% in Task Manager means the disk is busy nonstop, not that it's full. While it's saturated, every action waits its turn: opening a folder, launching a program, loading a page. On an older computer with a mechanical hard drive, it's the most common reason a PC feels sluggish while the processor is barely doing anything.",
      },
      { type: "h2", text: "100% activity vs. a full disk: don't mix them up" },
      {
        type: "p",
        text: "Two different problems hide behind the same feeling of slowness. The percentage in Task Manager's \"Disk\" column measures activity: the share of time the disk is busy reading or writing. An almost empty disk can sit at 100%. Conversely, a disk that is 95% full can be completely idle; it then has a different problem, not enough room for Windows to work.",
      },
      { type: "h2", text: "Why is the disk at 100%?" },
      { type: "h3", text: "1. Windows working after you switch on" },
      {
        type: "p",
        text: "In the minutes after start-up, Windows installs updates (TiWorker, TrustedInstaller), runs an antivirus scan (MsMpEng), indexes your files for search (SearchIndexer) and preloads the programs you use often (the SysMain service). On a mechanical hard drive, all of that at once is enough to saturate it. It's normal and temporary: things usually calm down after 20 to 40 minutes.",
      },
      { type: "h3", text: "2. Too little memory, spilling over onto the disk" },
      {
        type: "p",
        text: "This is the sneakiest cause. When open programs need more memory than the computer has, Windows moves the excess to the disk (the page file) and reads it back constantly. The disk then runs flat out to make up for the missing memory. It's typical of a 4 or 8 GB PC with a browser full of tabs.",
      },
      { type: "h3", text: "3. A mechanical hard drive" },
      {
        type: "p",
        text: "A spinning hard drive (HDD) is dozens of times slower than an SSD at the small reads Windows performs constantly. It hits 100% very easily, where an SSD would absorb the same load without a sweat.",
      },
      { type: "h3", text: "4. A drive nearing the end of its life" },
      {
        type: "p",
        text: "A drive starting to develop bad sectors re-reads the same areas several times before succeeding. It gets slow, then slower, often before failing. This is the one case where you must act fast: back up first, diagnose second.",
      },
      { type: "h3", text: "5. File syncing" },
      {
        type: "p",
        text: "OneDrive, Dropbox or Google Drive catching up on thousands of files, after a reinstall or a new photo folder for example, can keep the disk busy for hours.",
      },
      { type: "h2", text: "How to find the culprit in 5 minutes" },
      {
        type: "ol",
        items: [
          "Open Task Manager with Ctrl + Shift + Esc, \"Processes\" tab.",
          "Click the \"Disk\" column to sort programs from most to least active.",
          "If it's one of the Windows tasks above, leave the computer on for 20 to 40 minutes. If it's a program you don't need, close it.",
          "In the \"Performance\" tab, select \"Disk\": the type (HDD or SSD) is shown. An HDD stuck at 100% is a good candidate for an SSD upgrade.",
          "Still in \"Performance\", check \"Memory\": if memory in use is close to the maximum, the disk is making up for missing RAM.",
        ],
      },
      {
        type: "p",
        text: "To dig deeper, Resource Monitor (type \"resmon\" in Windows search), \"Disk\" tab, even shows the files being read and written in real time.",
      },
      { type: "h2", text: "What to do, depending on the cause" },
      {
        type: "ul",
        items: [
          "Windows tasks after start-up: be patient, keep the computer plugged in. Avoid shutting it down in the middle of an update.",
          "Saturated memory: close unused tabs and programs. If it happens every day, adding memory (when the computer allows it) fixes it for good.",
          "Mechanical hard drive: replacing it with an SSD is the best possible upgrade for an old PC. An SSD costs a few dozen euros, and a repair shop can transfer your data.",
          "Drive nearing end of life: back up your documents right away to an external drive or USB stick, then have it replaced.",
          "Syncing: let it finish once, or pause it while you work.",
        ],
      },
      {
        type: "p",
        text: "Be wary of \"tips\" that switch off Windows services or the antivirus wholesale: they hide the symptom, rarely the cause, and some weaken your computer's security.",
      },
      { type: "h2", text: "What Nyctale checks, and what it doesn't measure" },
      {
        type: "p",
        text: "Nyctale doesn't measure the disk activity percentage. It does check the causes that most often explain it: memory spilling over onto the disk, the drive's health as reported by Windows, and the free space left. It tells you which one is at fault, and whether it's a simple setting or a real hardware problem.",
      },
    ],
    faq: [
      {
        q: "Is it bad if my disk is at 100%?",
        r: "Not necessarily. A few minutes after start-up or an update, it's normal. If it's permanent, it's often a lack of memory or a mechanical hard drive that's too slow. It only becomes urgent if the drive is failing: in that case, back up right away.",
      },
      {
        q: "Does 100% disk mean my disk is full?",
        r: "No. The percentage measures disk activity, not how full it is. An almost empty disk can be at 100%, and an almost full disk can be idle.",
      },
      {
        q: "Will replacing the hard drive with an SSD fix it?",
        r: "On a computer with a mechanical hard drive, it's usually the most dramatic improvement: start-up and program launches several times faster. If the cause is a lack of memory, look into that too.",
      },
      {
        q: "Should I disable the SysMain service?",
        r: "Only as a last resort, on a mechanical hard drive, and while watching the effect. SysMain speeds up launching your usual programs; disabling it only helps if it really saturates the disk for long periods.",
      },
    ],
  },
  {
    slug: "slow-pc-startup",
    lang: "en",
    traduction: "pc-lent-au-demarrage",
    title: "Slow PC startup: the real causes and how to fix them",
    seoTitle: "Slow PC startup: causes and fixes (Windows 10 and 11)",
    excerpt:
      "Your computer takes several minutes to become usable? The 7 causes of a slow startup, how to measure yours, and how to fix it without breaking anything.",
    date: "2026-09-24",
    updated: "2026-09-25",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "A slow PC startup is almost always caused by programs that launch automatically with Windows. Next come a mechanical or nearly full hard drive, and updates waiting for a real restart. These causes can be checked in a few minutes, and most can be fixed without uninstalling anything.",
      },
      {
        type: "p",
        text: "The desktop appears, but the computer stays unusable for several minutes: the cursor spins, windows open in slow motion. That's often where the feeling of a 'tired' PC comes from. In reality, Windows is simply launching a lot of things at the same time.",
      },
      { type: "h2", text: "In short: the 4 first steps" },
      {
        type: "ol",
        items: [
          "Do a real 'Restart' (not 'Shut down') to finish pending updates.",
          "Disable unneeded startup programs in Task Manager (Ctrl + Shift + Esc).",
          "Check that at least 15% of the C: drive is free.",
          "If the computer still has a mechanical hard drive, an SSD cuts startup time by three or more.",
        ],
      },
      { type: "h2", text: "What startup time is normal?" },
      {
        type: "p",
        text: "On a PC with an SSD, the desktop should appear within 10 to 30 seconds, and the computer should be usable less than a minute later. With a mechanical hard drive, 1 to 3 minutes is nothing unusual. Beyond 3 to 5 minutes before you can work, there's clearly a cause to find.",
      },
      {
        type: "p",
        text: "Note the difference between the two stages: if the screen stays black or shows the manufacturer's logo for a long time, the hardware stage (the BIOS) is dragging; if it's after the desktop appears, it's the programs and Windows itself.",
      },
      { type: "h2", text: "Why does a PC become slow to start?" },
      { type: "h3", text: "1. Too many startup programs" },
      {
        type: "p",
        text: "Every installed program wants to 'start with Windows': chat apps, game launchers, printer tools, update assistants, cloud storage. One by one they're light; together, they fight over the disk and memory at the very moment the computer needs them most. Beyond about ten, the effect is clearly noticeable.",
      },
      { type: "h3", text: "2. A 'fast startup' that isn't really one" },
      {
        type: "p",
        text: "With Windows fast startup, enabled by default, 'Shut down' doesn't fully close the system: Windows goes into partial hibernation to start faster next time. It works, but small glitches accumulate from day to day, since nothing is ever truly reset. Only 'Restart' starts from a clean slate.",
      },
      { type: "h3", text: "3. A mechanical or nearly full hard drive" },
      {
        type: "p",
        text: "Starting up mostly means reading thousands of small files. A spinning hard drive does this slowly, and a nearly full drive leaves Windows less room to work. Below 10% free space, everything slows down, startup included. A hard drive that is starting to fail also lengthens startup, sometimes long before it breaks down.",
      },
      { type: "h3", text: "4. Updates waiting to finish" },
      {
        type: "p",
        text: "An update that's installed but not yet finalised can resume its work at every power-on, as long as the computer hasn't been truly restarted. Startup then feels slow, day after day.",
      },
      { type: "h3", text: "5. Background update programs" },
      {
        type: "p",
        text: "Many programs install their own update service (browsers, office suites, PDF readers, manufacturer software). They don't always appear in the startup apps list, because they run as services or scheduled tasks, and they all wake up at startup to check for a new version.",
      },
      { type: "h3", text: "6. A heavy antivirus, or two antiviruses" },
      {
        type: "p",
        text: "An antivirus scans files as they're opened, so massively at startup. Some third-party antiviruses are much heavier than Microsoft Defender, which is built in and sufficient for everyday use. Two antiviruses running at the same time get in each other's way and slow startup down considerably.",
      },
      { type: "h3", text: "7. A device or connection that keeps Windows waiting" },
      {
        type: "p",
        text: "An external drive, a forgotten USB stick, a network printer or a network drive to reconnect can make Windows wait several seconds or more while you sign in. Unplugging non-essential devices lets you check this in a single restart.",
      },
      { type: "h2", text: "How do you find what's slowing your startup?" },
      {
        type: "ol",
        items: [
          "Open Task Manager (Ctrl + Shift + Esc), then the 'Startup apps' tab ('Startup' on Windows 10).",
          "At the top right, 'Last BIOS time' shows how long the hardware stage took. Beyond 15 to 20 seconds, look at the BIOS or connected devices rather than Windows.",
          "The 'Startup impact' column ranks each program from 'Low' to 'High'. Start with high-impact programs you don't use every day.",
          "Right-click and choose 'Disable'. The program stays installed and works normally when you open it yourself: it just no longer launches on its own.",
          "In the 'Performance' tab > 'Disk', check the type (SSD or HDD) and, in File Explorer, the free space on the C: drive.",
          "Restart ('Restart', not 'Shut down') and compare.",
        ],
      },
      {
        type: "p",
        text: "For a precise measurement, Windows records the duration of every startup in Event Viewer: log 'Applications and Services > Microsoft > Windows > Diagnostics-Performance > Operational', event 100. Events 101 to 110 in the same log name the programs and drivers that slowed startup down.",
      },
      { type: "h2", text: "What to do depending on the cause" },
      {
        type: "ul",
        items: [
          "Startup programs: disable them in Task Manager, or in Settings > Apps > Startup.",
          "Fast startup: choose 'Restart' at least once a week. If glitches keep coming back, turn it off: Control Panel > Power Options > 'Choose what the power buttons do'.",
          "Full drive: Settings > System > Storage, then 'Cleanup recommendations'. Keep at least 15% free.",
          "Mechanical hard drive: a 500 GB SSD costs about €40 to €70, plus €40 to €80 of labour if you have it installed. It's the best possible upgrade for a slow startup.",
          "Pending updates: Settings > Windows Update, install everything left, then 'Restart'.",
          "Third-party update services: uninstall software you no longer use; it's the safest way to remove its update service.",
          "Antivirus: keep only one. Microsoft Defender is enough for most home use.",
          "Devices: unplug external drives and USB sticks before powering on, and remove network drives that no longer exist.",
        ],
      },
      { type: "h2", text: "What you shouldn't disable" },
      {
        type: "ul",
        items: [
          "Your antivirus, including Microsoft Defender.",
          "Manufacturer drivers and utilities for the keyboard, touchpad or sound, if you don't know what they do.",
          "Programs you genuinely need right after startup (a work messaging app, for example).",
        ],
      },
      {
        type: "p",
        text: "When in doubt, disable one program at a time: it's reversible in one click in the same list. Be wary of 'startup booster' software: Windows already provides everything you need, for free.",
      },
      { type: "h2", text: "When should you worry?" },
      {
        type: "ul",
        items: [
          "Startup gets longer week after week for no reason, with clicking noises: a failing hard drive. Back up your files without waiting.",
          "Windows shows 'Preparing Automatic Repair' at every power-on: system files are probably damaged.",
          "The screen stays black or stuck on the manufacturer's logo for several minutes: the problem is before Windows (hardware or BIOS), and a professional opinion is useful.",
        ],
      },
      { type: "h2", text: "What Nyctale checks in 19 seconds" },
      {
        type: "p",
        text: "Nyctale counts the programs launched at startup, checks whether the computer has truly restarted recently or only been 'shut down' with fast startup, and checks free space and drive health. It tells you which of these is slowing your startup, and opens the right list directly so you can act.",
      },
    ],
    faq: [
      {
        q: "How long should a PC take to start?",
        r: "With an SSD, the desktop appears in 10 to 30 seconds and the computer is usable in under a minute. With a mechanical hard drive, 1 to 3 minutes is still normal. Beyond that, there's a cause to find.",
      },
      {
        q: "How many startup programs is too many?",
        r: "There's no absolute threshold, but beyond about ten programs launching with Windows, the effect on a modest computer becomes noticeable. The key is to keep the ones you need right after startup and disable the rest.",
      },
      {
        q: "Does disabling a startup program delete it?",
        r: "No. It stays installed and works normally when you open it. It simply no longer launches automatically, and you can re-enable it at any time.",
      },
      {
        q: "Should you turn off Windows fast startup?",
        r: "Not necessarily. It really does speed up power-on. Just choose 'Restart' from time to time, for example once a week, to start from a clean system. If the computer keeps accumulating glitches, turning it off is an option.",
      },
      {
        q: "Does an SSD speed up startup?",
        r: "Yes, dramatically, if the computer still has a mechanical hard drive. It's often the difference between several minutes and a few seconds.",
      },
      {
        q: "What does 'Last BIOS time' mean in Task Manager?",
        r: "It's the duration of the hardware stage of startup, before Windows takes over. A few seconds is normal; beyond 15 to 20 seconds, a connected device or a BIOS setting is to blame, not Windows.",
      },
    ],
    liens: ["slow-computer-no-obvious-reason", "disk-100-percent-windows", "windows-11-slow-after-update"],
  },
  {
    slug: "windows-11-slow-after-update",
    lang: "en",
    traduction: "windows-11-lent-apres-mise-a-jour",
    title: "Windows 11 slow after an update: what to do",
    seoTitle: "Windows 11 slow after an update: causes and fixes",
    excerpt:
      "Everything was fine, then an update and nothing responds? Most of the time, Windows is just finishing its work. How to tell if it's temporary, and the fixes in order.",
    date: "2026-09-24",
    updated: "2026-09-25",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "Windows 11 running slowly right after an update is usually a temporary slowdown: Windows is finishing, in the background, the work started by the update. It's worth worrying about if the slowness lasts several days, and in that case the causes can be checked one by one.",
      },
      { type: "h2", text: "In short: what to do right now" },
      {
        type: "ol",
        items: [
          "Leave the computer on and plugged in for 30 to 60 minutes, without putting it to sleep.",
          "Choose 'Restart', not 'Shut down'.",
          "Install any remaining updates in Windows Update: a fix often follows a problematic update.",
          "If the slowness lasts more than a few days, follow the step-by-step method below.",
        ],
      },
      { type: "h2", text: "Monthly update or annual update: what's the difference?" },
      {
        type: "p",
        text: "Windows 11 gets two kinds of updates. Cumulative updates, released every month (on the second Tuesday), fix security holes and bugs: they install quickly and rarely slow the computer for more than a few hours. Feature updates, once a year (for example 24H2 then 25H2), reinstall a large part of the system: slowdowns after them are the most common and the longest. To see which one you received, open Settings > Windows Update > Update history.",
      },
      { type: "h2", text: "Why is Windows slow after an update?" },
      { type: "h3", text: "1. Post-update work" },
      {
        type: "p",
        text: "Once the update is installed, Windows still has work to do: finalising components (TiWorker, TrustedInstaller), optimising program libraries, re-indexing your files for search (SearchIndexer) and running a new antivirus scan (MsMpEng). For 30 minutes to a few hours, the processor and disk are very busy. On a PC with a mechanical hard drive, this phase can last a whole day.",
      },
      { type: "h3", text: "2. A restart that didn't really happen" },
      {
        type: "p",
        text: "Some updates are only complete after a real restart. But with Windows fast startup, 'Shut down' then powering on again is not a full restart. The update stays half-applied, and the computer can remain slow until you choose 'Restart'.",
      },
      { type: "h3", text: "3. A replaced driver" },
      {
        type: "p",
        text: "An update can replace the graphics, Wi-Fi or disk driver with a generic version. The result: choppy display, slow network, or a computer that lags in a new way. Update history shows whether a driver was changed.",
      },
      { type: "h3", text: "4. New startup programs" },
      {
        type: "p",
        text: "Updates to Windows or other software sometimes add items that launch at startup. They weigh down power-on without you installing anything.",
      },
      { type: "h3", text: "5. A suddenly nearly full drive" },
      {
        type: "p",
        text: "After a feature update, Windows keeps the previous version in a 'Windows.old' folder, often 15 to 30 GB, so you can roll back. On a small drive, that's enough to drop below 10% free space, and everything slows down.",
      },
      { type: "h3", text: "6. Settings reset" },
      {
        type: "p",
        text: "A big update can re-enable features you had turned off (startup apps, sync, visual effects) or change the power mode. A computer switched to an energy-saving mode feels noticeably slower.",
      },
      { type: "h3", text: "7. Damaged system files" },
      {
        type: "p",
        text: "More rarely, an interrupted update (power cut, computer switched off mid-install) leaves Windows files damaged. The symptoms are then confusing: slowness, windows that no longer open, updates failing in a loop.",
      },
      { type: "h2", text: "How can you tell if it's temporary?" },
      {
        type: "p",
        text: "Open Task Manager (Ctrl + Shift + Esc) and sort processes by 'CPU' then by 'Disk'. If you see TiWorker, TrustedInstaller, SearchIndexer, MsMpEng or 'Windows Update service' at the top, Windows is finishing its work: be patient. If those names are gone and the computer is still slow, the cause lies elsewhere.",
      },
      { type: "h2", text: "What to do, in order" },
      {
        type: "ol",
        items: [
          "Leave the computer on and plugged in for 30 to 60 minutes, without putting it to sleep, so Windows can finish its work.",
          "Choose 'Restart' (not 'Shut down') from the Start menu.",
          "In Settings > Windows Update, install any remaining updates: a fix often follows a problematic update.",
          "Check the power mode: Settings > System > Power (or 'Power & battery'), set to 'Balanced' or 'Best performance'.",
          "Check free space: Settings > System > Storage > Temporary files. Once you're sure everything works, 'Previous Windows installation(s)' frees the space used by Windows.old.",
          "In Settings > Windows Update > Update history, check whether a driver was updated. If so, install the version from your computer or graphics card manufacturer's website.",
          "If the slowness started with a specific update and has lasted several days, the same page offers 'Uninstall updates'.",
          "After a feature update, Settings > System > Recovery > 'Go back' returns to the previous version for 10 days.",
          "As a last resort, Windows' built-in repair fixes damaged system files: in a terminal opened as administrator, type DISM /Online /Cleanup-Image /RestoreHealth, then sfc /scannow. On recent Windows 11, Settings > System > Recovery also offers 'Fix problems using Windows Update', which reinstalls Windows while keeping your files and apps.",
        ],
      },
      {
        type: "p",
        text: "A slow update is not a reason to replace your computer: in the vast majority of cases, everything goes back to normal within a few hours or after a real restart.",
      },
      { type: "h2", text: "Can you avoid the problem next time?" },
      {
        type: "ul",
        items: [
          "Run updates when you don't need the computer, for example in the evening, plugged into mains power.",
          "Never switch it off during installation, even if it seems stuck: that's how system files get damaged.",
          "Keep at least 20 to 30 GB free before a feature update.",
          "Windows Update lets you pause updates one week at a time, up to five weeks: handy before a busy period. Don't block them longer, they fix security holes.",
        ],
      },
      { type: "h2", text: "When should you worry?" },
      {
        type: "ul",
        items: [
          "The same update fails and reinstalls at every startup.",
          "Windows shows 'Preparing Automatic Repair' in a loop, or a black screen after signing in.",
          "The slowness lasts more than a week despite the steps above: the cause is probably not the update itself, but a problem it revealed (a tired drive, not enough memory).",
        ],
      },
      { type: "h2", text: "What Nyctale checks in 19 seconds" },
      {
        type: "p",
        text: "Nyctale recognises Windows tasks working in the background (update installation, antivirus scan, indexing) and simply tells you to wait when that's the case. It also checks whether the computer has truly restarted, counts startup programs, checks free space and, when run as administrator, the integrity of Windows files.",
      },
    ],
    faq: [
      {
        q: "How long does Windows stay slow after an update?",
        r: "Usually from 30 minutes to a few hours, the time needed to finish installation, optimisation and re-indexing. On a mechanical hard drive, up to a day after a feature update. Beyond a few days, there's another cause to find.",
      },
      {
        q: "Should you uninstall the latest update?",
        r: "Only if the slowness started with it, has lasted several days and survives a real restart. Windows will reinstall it later, often in a fixed version.",
      },
      {
        q: "Why isn't 'Shut down' enough after an update?",
        r: "With fast startup, enabled by default, 'Shut down' puts Windows into partial hibernation instead of closing it completely. Some updates need a full restart: choose 'Restart'.",
      },
      {
        q: "Can you delete the Windows.old folder?",
        r: "Yes, once you're sure the new version works well, via Settings > System > Storage > Temporary files > 'Previous Windows installation(s)'. You then lose the ability to roll back. Windows deletes it automatically after a few weeks anyway.",
      },
      {
        q: "Can you go back to the previous version of Windows 11?",
        r: "Yes, for 10 days after a feature update: Settings > System > Recovery > 'Go back'. For a monthly update, use 'Uninstall updates' in Windows Update.",
      },
    ],
    liens: ["slow-pc-startup", "slow-computer-no-obvious-reason", "disk-100-percent-windows"],
  },
];

export function articlesForLang(lang: Lang): Article[] {
  return articles.filter((a) => a.lang === lang).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function articleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
