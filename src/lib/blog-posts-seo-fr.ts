import type { Article } from "./blog-posts";

// Cluster « plantages / disque / outils » (FR). Versions EN dans blog-posts-seo-en.ts.
export const seoFrArticles: Article[] = [
  {
    slug: "ecran-bleu-windows-11",
    lang: "fr",
    traduction: "windows-11-blue-screen-fix",
    title: "Écran bleu sous Windows 11 : comprendre le code d'erreur et corriger la cause",
    seoTitle: "Écran bleu Windows 11 : causes, code d'erreur et solutions",
    excerpt:
      "Un écran bleu fait peur, mais c'est une protection de Windows, pas un verdict de fin de vie. Comment lire le code d'erreur, les 6 causes les plus fréquentes et la méthode pour trouver la vôtre.",
    date: "2026-10-01",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "Un écran bleu sous Windows 11 est une mesure de protection : Windows s'arrête volontairement parce qu'il a détecté une erreur qu'il ne sait pas corriger sans risque pour vos fichiers. Dans la majorité des cas, la cause est un pilote défectueux, un fichier système abîmé ou une mémoire qui déraille, et elle se règle sans remplacer l'ordinateur.",
      },
      {
        type: "p",
        text: "Le scénario est toujours le même : tout fonctionne, puis l'écran passe au bleu avec un smiley triste, un code d'erreur incompréhensible, et l'ordinateur redémarre. Le plus gênant est l'incertitude : est-ce un accident isolé, ou le début d'une panne ? Selon la version de Windows 11, l'écran peut d'ailleurs s'afficher en noir plutôt qu'en bleu : il s'agit du même mécanisme.",
      },
      { type: "h2", text: "En bref : les 3 questions à se poser" },
      {
        type: "ol",
        items: [
          "Est-ce arrivé une seule fois ? Un écran bleu isolé n'a rien d'alarmant : redémarrez, laissez Windows se mettre à jour et surveillez.",
          "Est-ce arrivé juste après une mise à jour, une installation de pilote ou de logiciel ? Alors la cause est presque certaine : annulez ce changement.",
          "Se répète-t-il, même sans rien de nouveau ? Notez le code d'erreur et suivez la méthode ci-dessous : la cause est probablement matérielle (mémoire, disque, chauffe).",
        ],
      },
      { type: "h2", text: "Que signifie un écran bleu, et que dit le code d'erreur ?" },
      {
        type: "p",
        text: "Quand le cœur de Windows rencontre une situation qu'il ne peut pas gérer, par exemple un pilote qui écrit au mauvais endroit en mémoire, il préfère tout arrêter plutôt que de risquer d'abîmer vos données. Il affiche alors un code d'arrêt, en majuscules, et redémarre. Ce code est votre meilleure piste : il oriente vers la famille de cause.",
      },
      {
        type: "ul",
        items: [
          "DRIVER_IRQL_NOT_LESS_OR_EQUAL, SYSTEM_SERVICE_EXCEPTION, KERNEL_SECURITY_CHECK_FAILURE : un pilote ou un logiciel système fautif. Pensez à ce qui a été installé ou mis à jour récemment.",
          "MEMORY_MANAGEMENT, PAGE_FAULT_IN_NONPAGED_AREA : la mémoire vive (barrette défectueuse) ou un pilote qui l'utilise mal.",
          "CRITICAL_PROCESS_DIED, INACCESSIBLE_BOOT_DEVICE, NTFS_FILE_SYSTEM : fichiers système abîmés ou disque en difficulté.",
          "DPC_WATCHDOG_VIOLATION, CLOCK_WATCHDOG_TIMEOUT : un composant ne répond plus à temps, souvent un pilote de stockage ou de carte graphique.",
        ],
      },
      {
        type: "p",
        text: "Le code seul ne fait pas le diagnostic : un même code peut avoir plusieurs origines. Mais il évite de partir dans toutes les directions. Si vous n'avez pas eu le temps de le lire, Windows le garde en mémoire, comme nous le verrons plus bas.",
      },
      {
        type: "p",
        text: "Sous Windows 11, l'écran affiche un message du type « Votre appareil a rencontré un problème » avec un pourcentage qui monte, un code QR et le code d'arrêt en bas. Le redémarrage est automatique, ce qui est pratique mais vous empêche parfois de lire le code. Pour le garder à l'écran, ouvrez Paramètres système avancés > Démarrage et récupération, puis décochez « Redémarrer automatiquement ». Au prochain plantage, l'écran restera affiché et vous aurez le temps de noter le code ou de le photographier.",
      },
      {
        type: "p",
        text: "Le code QR renvoie vers une page d'aide générale de Microsoft. Il est rarement plus utile que le code d'arrêt lui-même : c'est ce dernier que vous chercherez dans un moteur de recherche, en y ajoutant le modèle de votre ordinateur.",
      },
      { type: "h2", text: "Les 6 causes les plus fréquentes d'un écran bleu" },
      { type: "h3", text: "1. Un pilote défectueux ou incompatible" },
      {
        type: "p",
        text: "C'est la cause numéro un. Un pilote est un petit programme qui fait dialoguer Windows avec un composant (carte graphique, Wi-Fi, stockage). Un pilote mal écrit, trop ancien ou installé de travers fait planter tout le système. Les pilotes de cartes graphiques et de cartes réseau sont les plus souvent en cause après une mise à jour.",
      },
      { type: "h3", text: "2. Une mise à jour de Windows mal passée" },
      {
        type: "p",
        text: "Une mise à jour peut remplacer un pilote sans prévenir ou laisser des fichiers à moitié installés. Si les écrans bleus commencent le jour d'une mise à jour, désinstaller cette dernière (Paramètres > Windows Update > Historique des mises à jour > Désinstaller les mises à jour) est la première chose à tester.",
      },
      { type: "h3", text: "3. Une mémoire vive défaillante" },
      {
        type: "p",
        text: "Une barrette de mémoire qui commet des erreurs provoque des écrans bleus apparemment aléatoires, avec des codes différents à chaque fois. C'est le signe classique : si les codes changent d'un plantage à l'autre, pensez à la mémoire. Windows intègre un outil de test (Diagnostic de mémoire Windows, à lancer en tapant mdsched dans la recherche).",
      },
      { type: "h3", text: "4. Des fichiers système abîmés" },
      {
        type: "p",
        text: "Après une coupure de courant, un arrêt forcé ou un disque en difficulté, des fichiers de Windows peuvent être corrompus. Deux commandes, lancées dans une invite de commandes en administrateur, les réparent dans la plupart des cas : sfc /scannow, puis DISM /Online /Cleanup-Image /RestoreHealth.",
      },
      { type: "h3", text: "5. Un disque en fin de vie" },
      {
        type: "p",
        text: "Un disque qui a du mal à lire ses données fait planter Windows, surtout au démarrage. Si l'écran bleu apparaît pendant l'allumage, ou s'accompagne de ralentissements et de blocages, vérifiez l'état du disque avant toute autre chose. Notre guide sur les signes d'un disque dur qui va lâcher détaille la marche à suivre.",
      },
      { type: "h3", text: "6. La chaleur" },
      {
        type: "p",
        text: "Un processeur ou une carte graphique qui surchauffe peut provoquer des plantages, souvent sous charge (jeu, montage vidéo, grosse mise à jour). Si le ventilateur s'emballe juste avant l'écran bleu, la piste du refroidissement est sérieuse : poussière, pâte thermique usée ou aération bouchée.",
      },
      {
        type: "p",
        text: "Un mot sur les pilotes, qui sont la première piste. Pour la carte graphique, téléchargez le pilote directement sur le site de son fabricant (NVIDIA, AMD ou Intel) plutôt que par un logiciel tiers. Pour le reste, Windows Update propose parfois des « mises à jour facultatives » (Paramètres > Windows Update > Options avancées) qui contiennent des pilotes plus récents. Méfiez-vous en revanche des programmes qui promettent de mettre à jour tous vos pilotes en un clic : ils installent régulièrement le mauvais, et c'est une bonne façon de créer un écran bleu plutôt que d'en réparer un.",
      },
      {
        type: "p",
        text: "Si vous soupçonnez la mémoire et que l'ordinateur contient plusieurs barrettes, retirez-en une et testez avec l'autre, puis inversez. Une barrette fautive provoque les plantages, l'autre non. Éteignez et débranchez toujours l'ordinateur avant d'ouvrir le boîtier, et touchez une pièce métallique pour vous décharger de l'électricité statique.",
      },
      { type: "h2", text: "Comment trouver la cause vous-même, étape par étape" },
      {
        type: "ol",
        items: [
          "Notez le code d'arrêt, avec une photo de l'écran au prochain plantage, ou retrouvez-le dans l'Observateur d'événements (Journaux Windows > Système, événement 1001 ou 41).",
          "Repensez au dernier changement : mise à jour, nouveau pilote, nouveau logiciel, nouveau périphérique branché. Débranchez les périphériques inutiles (clé USB, imprimante, disque externe).",
          "Désinstallez la mise à jour ou le pilote récent, ou utilisez la Restauration du système pour revenir quelques jours en arrière.",
          "Lancez sfc /scannow puis DISM /Online /Cleanup-Image /RestoreHealth pour réparer les fichiers système.",
          "Testez la mémoire avec le Diagnostic de mémoire Windows, puis vérifiez l'état du disque.",
          "Si le plantage empêche de démarrer, passez par le mode sans échec (maintenez Maj en cliquant sur Redémarrer) pour effectuer ces vérifications.",
        ],
      },
      {
        type: "p",
        text: "Windows enregistre aussi un fichier de vidage à chaque plantage, dans C:\\Windows\\Minidump. Des outils gratuits savent le lire et désignent souvent le pilote fautif par son nom. C'est une aide précieuse quand le code d'arrêt est trop vague.",
      },
      {
        type: "p",
        text: "Pour éviter de revivre la situation, deux habitudes valent la peine. La première est de laisser Windows créer des points de restauration avant les mises à jour importantes, ce qui permet de revenir en arrière en quelques minutes. La seconde est de sauvegarder vos fichiers régulièrement : un écran bleu est rarement dangereux pour les données, mais un disque qui lâche l'est toujours.",
      },
      { type: "h2", text: "Quand faut-il s'inquiéter, et quand réinstaller Windows ?" },
      {
        type: "ul",
        items: [
          "Un seul écran bleu, puis plus rien pendant des semaines : ne faites rien de particulier, mettez simplement Windows et les pilotes à jour.",
          "Plusieurs écrans bleus par semaine, avec des codes différents : testez la mémoire et le disque, c'est le profil d'un problème matériel.",
          "Écrans bleus à chaque démarrage : sauvegardez vos fichiers sans attendre, le disque peut être en cause.",
          "Réinitialiser Windows (Paramètres > Système > Récupération) est la solution la plus lourde : elle règle un problème logiciel, mais ne change rien à une barrette ou à un disque défaillant.",
        ],
      },
      {
        type: "p",
        text: "Dans presque aucun de ces cas l'ordinateur n'est « bon à jeter » : une barrette de mémoire se remplace pour quelques dizaines d'euros, un disque aussi, et la majorité des écrans bleus viennent d'un pilote.",
      },
      { type: "h2", text: "Ce que Nyctale vérifie en 19 secondes" },
      {
        type: "p",
        text: "Nyctale relit à votre place le journal de Windows : combien d'arrêts brutaux et de plantages sont survenus sur les 30 derniers jours, et si l'état du disque est signalé en alerte. Il croise ces indices avec ce qui occupe l'ordinateur, puis nomme la cause probable. Quand le problème est matériel, il vous le dit franchement, plutôt que de vous faire courir après un réglage inutile.",
      },
    ],
    faq: [
      {
        q: "Un écran bleu veut-il dire que mon PC est mort ?",
        r: "Non. C'est une protection : Windows s'arrête pour ne pas abîmer vos fichiers. La plupart des écrans bleus viennent d'un pilote ou d'une mise à jour et se corrigent sans remplacer l'ordinateur.",
      },
      {
        q: "Pourquoi ai-je un écran bleu sans raison apparente ?",
        r: "Sans changement récent, les suspects sont la mémoire vive, le disque et la chaleur. Si les codes d'erreur varient d'un plantage à l'autre, la mémoire est la première piste.",
      },
      {
        q: "Peut-on perdre ses fichiers à cause d'un écran bleu ?",
        r: "Rarement : le principe même de l'écran bleu est de protéger les données. Le risque réel concerne un disque défaillant, d'où l'intérêt de sauvegarder dès que les plantages se répètent.",
      },
      {
        q: "Où retrouver le code d'un écran bleu passé ?",
        r: "Dans l'Observateur d'événements, Journaux Windows > Système : l'événement 1001 (BugCheck) indique le code d'arrêt, et l'événement 41 (Kernel-Power) signale le redémarrage inattendu.",
      },
      {
        q: "Nyctale peut-il corriger un écran bleu ?",
        r: "Nyctale repère les signes dans le journal de Windows et nomme la cause probable. Quand elle est logicielle, il vous guide pour la corriger ; quand elle est matérielle, il vous le dit, car aucun logiciel ne remplace une barrette ou un disque.",
      },
    ],
    liens: ["disque-dur-va-lacher-signes", "pc-qui-rame-sans-raison", "ventilateur-qui-ne-sarrete-plus"],
  },
  {
    slug: "disque-dur-va-lacher-signes",
    lang: "fr",
    traduction: "failing-hard-drive-signs",
    title: "Comment savoir si votre disque dur va lâcher : les signes et le test SMART",
    seoTitle: "Disque dur qui va lâcher : signes, test SMART et que faire",
    excerpt:
      "Un disque dur prévient rarement avant de lâcher, mais il laisse des indices. Les signes qui doivent alerter, comment lire l'état SMART gratuitement et quoi faire en priorité : sauvegarder.",
    date: "2026-10-01",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "Un disque dur ou un SSD qui va lâcher laisse presque toujours des signes avant la panne : lenteurs inexpliquées, blocages, fichiers qui ne s'ouvrent plus, bruits de clics sur un disque mécanique, ou erreurs signalées par l'outil de surveillance SMART. La bonne réaction n'est pas de réparer, mais de sauvegarder immédiatement vos fichiers.",
      },
      {
        type: "p",
        text: "Quand un disque lâche, ce ne sont pas des réglages qui sont perdus, ce sont vos photos, vos documents et des années de fichiers. Savoir repérer les signes avant-coureurs et vérifier l'état du disque en quelques minutes peut vous éviter une vraie catastrophe. Voici comment faire, sans logiciel payant.",
      },
      { type: "h2", text: "En bref : la règle d'or" },
      {
        type: "ol",
        items: [
          "Un seul signe suspect (ralentissements, bruit, fichiers illisibles) justifie de sauvegarder dès maintenant, avant tout diagnostic.",
          "L'état SMART se lit gratuitement en quelques minutes ; une alerte « Attention » ou « Mauvais » doit être prise au sérieux.",
          "Un disque défaillant ne se répare pas : on le remplace, après avoir copié vos données.",
        ],
      },
      { type: "h2", text: "Les 7 signes qui doivent alerter" },
      { type: "h3", text: "1. Des ralentissements sans cause logicielle" },
      {
        type: "p",
        text: "Le disque est lent à répondre, l'ordinateur se fige quelques secondes en ouvrant un dossier, l'indicateur de disque du Gestionnaire des tâches reste à 100 % sans programme gourmand. Ce symptôme a de nombreuses causes, mais un disque qui peine à lire ses données en fait partie.",
      },
      { type: "h3", text: "2. Des bruits de clics, de grincements ou de ronronnements anormaux" },
      {
        type: "p",
        text: "Sur un disque dur mécanique, des clics répétés ou un grincement signalent souvent un problème de tête de lecture ou de moteur. Si vous entendez un tel bruit, arrêtez d'utiliser le disque autant que possible et copiez l'essentiel de vos données sans tarder. Les SSD, eux, sont silencieux et n'ont pas ce signal.",
      },
      { type: "h3", text: "3. Des fichiers qui deviennent illisibles ou corrompus" },
      {
        type: "p",
        text: "Un document qui ne s'ouvre plus, une photo à moitié affichée, une archive signalée comme corrompue : si cela touche plusieurs fichiers sans raison, le disque a peut-être des secteurs défectueux.",
      },
      { type: "h3", text: "4. Des écrans bleus ou des plantages au démarrage" },
      {
        type: "p",
        text: "Des écrans bleus récurrents, surtout au démarrage, peuvent venir d'un disque en difficulté. Notre article sur l'écran bleu sous Windows 11 explique comment distinguer ce cas d'un simple pilote défectueux.",
      },
      { type: "h3", text: "5. Un démarrage très long ou un disque qui disparaît" },
      {
        type: "p",
        text: "Un ordinateur qui met plusieurs minutes à démarrer, ou un disque secondaire qui disparaît de l'explorateur puis revient, signale souvent un problème de lecture ou de connexion. Pensez aussi au câble ou au port USB avant de condamner le disque.",
      },
      { type: "h3", text: "6. Des erreurs lors d'une vérification de disque" },
      {
        type: "p",
        text: "Si l'outil de vérification de Windows (chkdsk) signale des secteurs défectueux ou des erreurs répétées, le disque vieillit mal. Une erreur isolée sur un fichier se corrige, des erreurs qui reviennent sont un mauvais signe.",
      },
      { type: "h3", text: "7. Une alerte SMART" },
      {
        type: "p",
        text: "C'est le signe le plus objectif, expliqué dans la section suivante. Il peut apparaître avant tout symptôme visible.",
      },
      {
        type: "p",
        text: "Un détail sur la façon d'interpréter les valeurs. Les attributs SMART affichent une valeur « brute » et une valeur « normalisée » que le fabricant fait descendre à mesure que l'état se dégrade. Ce qui compte n'est pas la valeur en elle-même, mais son évolution : un compteur de secteurs réalloués qui passe de 0 à 8 puis à 40 en quelques semaines est bien plus préoccupant qu'un compteur stable à 8 depuis deux ans. Relevez donc l'état une première fois, puis revérifiez de temps en temps pour voir la tendance.",
      },
      { type: "h2", text: "Qu'est-ce que le SMART, et comment le lire gratuitement ?" },
      {
        type: "p",
        text: "SMART est un système d'auto-surveillance intégré à presque tous les disques durs et SSD. Le disque mesure en permanence son propre état (secteurs réalloués, erreurs de lecture, température, usure) et peut signaler qu'il est en mauvaise santé. Ce n'est pas infaillible : un disque peut lâcher sans alerte SMART, et une alerte ne veut pas dire panne immédiate. Mais c'est le meilleur indicateur disponible.",
      },
      {
        type: "p",
        text: "Pour le lire, la méthode la plus simple est un utilitaire gratuit comme CrystalDiskInfo : il affiche l'état global (Bon, Attention, Mauvais) et le détail de chaque attribut. Windows donne aussi un état de santé synthétique : dans PowerShell, la commande Get-PhysicalDisk indique « Healthy » (sain), « Warning » ou « Unhealthy » pour chaque disque.",
      },
      {
        type: "ul",
        items: [
          "Secteurs réalloués : le disque a dû remplacer des zones défectueuses. Quelques-uns sont normaux, une hausse rapide est inquiétante.",
          "Secteurs en attente et secteurs non corrigeables : des zones que le disque n'arrive plus à lire. C'est un signal sérieux.",
          "Température : un disque régulièrement trop chaud vieillit plus vite.",
          "Pour un SSD : le pourcentage d'usure et le niveau de réserve disponible indiquent combien de vie reste au disque.",
        ],
      },
      {
        type: "p",
        text: "Si le disque est déjà très atteint, au point de ne plus démarrer ou de ne plus être reconnu, la prudence change de nature. Évitez de le rebrancher en boucle : chaque tentative peut aggraver les choses. Un service de récupération de données en laboratoire peut parfois sauver des fichiers, mais il coûte en général plusieurs centaines d'euros, ce qui rend la sauvegarde préventive infiniment plus rentable.",
      },
      {
        type: "p",
        text: "Si le disque fait des bruits, ne le secouez pas, ne le mettez pas au congélateur (une légende tenace) et n'ouvrez jamais un disque dur mécanique : la poussière suffit à le détruire. Copiez ce que vous pouvez, en commençant par les fichiers les plus précieux plutôt que par les plus volumineux, car si le disque lâche en cours de copie, vous aurez au moins sauvé l'essentiel.",
      },
      { type: "h2", text: "Que faire si le disque donne des signes de faiblesse ?" },
      {
        type: "ol",
        items: [
          "Sauvegardez d'abord. Copiez vos fichiers importants (photos, documents, mails) vers un disque externe ou un stockage en ligne. Faites-le avant toute vérification qui sollicite le disque.",
          "Évitez les opérations lourdes : défragmentation, analyse complète, réinstallation. Elles font travailler le disque et peuvent précipiter la panne.",
          "Vérifiez le câble et le port si le disque est externe, avant de conclure à une panne.",
          "Si l'alerte est confirmée, remplacez le disque. Un SSD de 500 Go se trouve généralement entre 40 et 70 €, c'est une dépense modeste comparée à la perte de vos données.",
          "Pour changer de disque sans tout réinstaller, un outil de clonage copie l'ancien disque vers le nouveau, système compris.",
        ],
      },
      {
        type: "p",
        text: "Gardez en tête qu'une bonne sauvegarde suit la règle du 3-2-1 : trois copies de vos données, sur deux supports différents, dont une hors de la maison. Un seul exemplaire sur le disque de l'ordinateur n'est pas une sauvegarde.",
      },
      {
        type: "p",
        text: "Pour un SSD, la durée de vie annoncée par les fabricants s'exprime en quantité de données écrites. Un usage bureautique ou familial n'en approche presque jamais la limite : les pannes de SSD viennent plus souvent d'un défaut du contrôleur ou d'un micrologiciel que de l'usure des cellules. C'est la raison pour laquelle un SSD peut paraître en parfaite santé selon SMART, puis disparaître d'un coup. Là encore, la sauvegarde reste la seule vraie protection.",
      },
      {
        type: "p",
        text: "Les disques externes méritent la même attention. Un disque externe qu'on déplace souvent, qu'on débranche sans l'éjecter et qu'on laisse tomber de temps en temps vit plus dangereusement qu'un disque interne. Si vos seuls exemplaires de photos de famille se trouvent sur un tel disque, il est temps d'en faire une deuxième copie.",
      },
      { type: "h2", text: "Disque dur ou SSD : lequel vieillit le mieux ?" },
      {
        type: "p",
        text: "Un disque dur mécanique est sensible aux chocs et à l'usure des pièces mobiles. Il prévient parfois par des bruits, mais lâche aussi sans avertir. Un SSD n'a pas de pièces mobiles, il résiste mieux aux chocs, mais son usure dépend du volume de données écrites, et une panne peut être brutale. Dans les deux cas, la surveillance SMART et la sauvegarde sont indispensables.",
      },
      {
        type: "p",
        text: "Un disque mécanique de plus de quatre ou cinq ans, qui ralentit l'ordinateur, est un bon candidat au remplacement par un SSD : l'ordinateur retrouve de la vivacité, et vous réduisez le risque de panne.",
      },
      { type: "h2", text: "Ce que Nyctale vérifie en 19 secondes" },
      {
        type: "p",
        text: "Nyctale interroge Windows sur l'état de santé de vos disques et vous signale clairement si l'un d'eux est en alerte. Il le croise avec les plantages récents et l'activité du disque, pour distinguer un simple ralentissement logiciel d'un vrai problème matériel. Si le disque est en cause, il vous le dit franchement : aucun logiciel ne répare un disque qui s'use, il faut sauvegarder et le remplacer.",
      },
    ],
    faq: [
      {
        q: "Comment savoir si mon disque dur est en train de mourir ?",
        r: "Surveillez les ralentissements inexpliqués, les blocages, les fichiers corrompus, les bruits de clics et les alertes SMART. Un seul signe justifie déjà de sauvegarder vos fichiers.",
      },
      {
        q: "Comment vérifier l'état SMART de mon disque gratuitement ?",
        r: "Avec un utilitaire gratuit comme CrystalDiskInfo, qui affiche l'état Bon, Attention ou Mauvais. Dans PowerShell, la commande Get-PhysicalDisk donne aussi l'état de santé (Healthy, Warning, Unhealthy).",
      },
      {
        q: "Un disque peut-il lâcher sans aucun signe ?",
        r: "Oui, notamment les SSD, dont la panne peut être brutale. C'est pourquoi la sauvegarde régulière compte plus que la surveillance.",
      },
      {
        q: "Peut-on réparer un disque dur défaillant ?",
        r: "Non, pas durablement. On peut corriger des erreurs logicielles, mais un disque qui accumule des secteurs défectueux doit être remplacé après sauvegarde de vos données.",
      },
      {
        q: "Combien coûte le remplacement d'un disque ?",
        r: "Un SSD de 500 Go se trouve généralement entre 40 et 70 €. Chez un réparateur, comptez en plus la pose et éventuellement le clonage ou la réinstallation de Windows.",
      },
    ],
    liens: ["ecran-bleu-windows-11", "disque-a-100-pourcent-windows", "pc-lent-au-demarrage"],
  },
  {
    slug: "meilleurs-logiciels-gratuits-diagnostic-pc",
    lang: "fr",
    traduction: "best-free-pc-diagnostic-tools",
    title: "Les meilleurs logiciels gratuits pour diagnostiquer un PC (et quoi en attendre)",
    seoTitle: "Meilleurs logiciels gratuits de diagnostic PC : notre sélection",
    excerpt:
      "Windows intègre déjà de bons outils, et quelques utilitaires gratuits complètent la boîte. La sélection utile pour le processeur, la mémoire, le disque et la chauffe, et les limites de chacun.",
    date: "2026-10-01",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "Pour diagnostiquer un PC gratuitement, vous disposez déjà d'une bonne partie des outils dans Windows : le Gestionnaire des tâches, le Moniteur de ressources, l'Observateur d'événements et le Diagnostic de mémoire. Quelques utilitaires gratuits comme CrystalDiskInfo, HWiNFO ou Autoruns complètent la boîte à outils pour le disque, les températures et le démarrage.",
      },
      {
        type: "p",
        text: "Le choix est vaste, et beaucoup de programmes promettent d'« optimiser » ou de « réparer » votre PC en un clic. La vérité est plus modeste : un bon diagnostic consiste à poser la bonne question à chaque composant, puis à interpréter la réponse. Voici les outils qui valent le détour, ce qu'ils mesurent et leurs limites.",
      },
      { type: "h2", text: "En bref : quel outil pour quel symptôme ?" },
      {
        type: "ol",
        items: [
          "PC lent ou qui se fige : Gestionnaire des tâches, puis Moniteur de ressources.",
          "Écrans bleus ou redémarrages : Observateur d'événements et Diagnostic de mémoire Windows.",
          "Soupçon sur le disque : CrystalDiskInfo.",
          "Ventilateur bruyant ou chauffe : HWiNFO pour lire les températures.",
          "Démarrage lent : Autoruns, ou l'onglet Applications de démarrage du Gestionnaire des tâches.",
        ],
      },
      {
        type: "p",
        text: "Avant d'ouvrir le moindre outil, pensez à la méthode : un bon diagnostic va du plus simple au plus technique, et du plus fréquent au plus rare. On commence donc par regarder ce qui occupe le processeur, la mémoire et le disque, puis on consulte le journal des événements si le problème a laissé des traces, et seulement ensuite on sort les outils spécialisés pour le disque, les températures ou la mémoire. Cet ordre évite de passer une heure sur un test de mémoire alors qu'un programme bloqué était le vrai coupable.",
      },
      { type: "h2", text: "Les outils déjà intégrés à Windows" },
      { type: "h3", text: "Le Gestionnaire des tâches" },
      {
        type: "p",
        text: "Ouvert avec Ctrl + Maj + Échap, il montre en direct ce qui occupe le processeur, la mémoire, le disque et le réseau. Le tri par colonne désigne en quelques secondes le programme coupable d'un ralentissement. C'est l'outil à ouvrir en premier, et il suffit dans une grande partie des cas.",
      },
      { type: "h3", text: "Le Moniteur de ressources" },
      {
        type: "p",
        text: "Accessible depuis l'onglet Performances du Gestionnaire des tâches, il détaille l'activité du disque fichier par fichier et de la mémoire. Utile quand le disque est saturé à 100 % : il montre quel programme lit ou écrit.",
      },
      { type: "h3", text: "L'Observateur d'événements" },
      {
        type: "p",
        text: "C'est le journal de bord de Windows. Il enregistre les plantages, les arrêts brutaux, les ralentissements de protection thermique du processeur et les erreurs de disque. Il est très riche, mais austère : il faut savoir quoi chercher, par exemple l'événement 41 pour un redémarrage inattendu.",
      },
      { type: "h3", text: "Le Diagnostic de mémoire Windows" },
      {
        type: "p",
        text: "Lancé en tapant mdsched dans la recherche, il teste la mémoire vive au prochain redémarrage. Précieux face à des écrans bleus aux codes variables. Un test complet de plusieurs passes est plus fiable qu'un test rapide.",
      },
      { type: "h3", text: "La Sécurité Windows" },
      {
        type: "p",
        text: "Il intègre un antivirus et une vérification de l'état de l'appareil. Pour la majorité des particuliers, il suffit : un deuxième antivirus ralentit souvent plus qu'il ne protège.",
      },
      {
        type: "p",
        text: "Pour interpréter HWiNFO, quelques repères aident. Au repos, un processeur se situe généralement entre 35 et 60 °C selon la machine et la saison. Sous forte charge, des valeurs proches de 90 °C ou plus sont trop élevées et peuvent déclencher un ralentissement de protection. Un écart brutal entre le repos et la charge, avec une montée très rapide, évoque souvent une pâte thermique usée ou un radiateur encrassé. Ces repères sont indicatifs : la plage normale dépend du modèle.",
      },
      {
        type: "p",
        text: "Windows propose aussi un « moniteur de fiabilité », accessible en tapant perfmon /rel dans la recherche. Il affiche sur une frise chronologique les plantages d'applications, les échecs de mise à jour et les arrêts anormaux, jour par jour. C'est l'un des outils les moins connus et l'un des plus parlants pour comprendre quand un problème a commencé.",
      },
      { type: "h2", text: "Les utilitaires gratuits qui complètent la boîte à outils" },
      {
        type: "ul",
        items: [
          "CrystalDiskInfo : lit l'état SMART des disques et SSD (Bon, Attention, Mauvais). Simple et fiable pour surveiller l'usure.",
          "HWiNFO : affiche capteurs, températures, fréquences et tensions. Utile pour confirmer une surchauffe, mais dense : on y noie facilement.",
          "Autoruns (Microsoft Sysinternals) : liste tout ce qui démarre avec Windows, y compris les entrées que le Gestionnaire des tâches ne montre pas. Puissant, à manier avec prudence.",
          "Process Explorer (Sysinternals) : un Gestionnaire des tâches très détaillé, qui montre à quel programme appartient chaque processus.",
          "MemTest86 : test de mémoire très poussé, lancé depuis une clé USB, pour les cas où le test intégré ne tranche pas.",
          "CrystalDiskMark : mesure la vitesse du disque, utile pour comparer avant et après un changement de disque.",
        ],
      },
      {
        type: "p",
        text: "Une précaution : téléchargez ces outils uniquement depuis le site de leur éditeur. Les moteurs de recherche affichent parfois en tête de fausses pages de téléchargement bourrées de logiciels indésirables.",
      },
      { type: "h2", text: "Les « nettoyeurs » et « optimiseurs » : à éviter" },
      {
        type: "p",
        text: "Les programmes qui promettent de « booster » votre PC en un clic sont rarement utiles. Windows intègre déjà le nettoyage du disque et la gestion du démarrage. Beaucoup de ces logiciels tournent eux-mêmes en arrière-plan et poussent à acheter une version payante après avoir affiché des centaines de « problèmes » sans gravité. Un nettoyage de registre n'a pratiquement aucun effet mesurable sur la vitesse.",
      },
      {
        type: "p",
        text: "Le bon réflexe est inverse : d'abord comprendre la cause, ensuite agir. Un diagnostic qui nomme un coupable précis vaut mieux qu'un nettoyage à l'aveugle.",
      },
      {
        type: "p",
        text: "Certains constructeurs fournissent leurs propres outils de diagnostic (Dell, HP, Lenovo, ASUS). Ils sont utiles pour tester les composants spécifiques de votre modèle, mais ils sont souvent livrés avec des offres commerciales ou des notifications. Utilisez-les s'ils vous servent, sans leur confier plus de droits que nécessaire.",
      },
      {
        type: "p",
        text: "Gardez aussi un œil sur la confidentialité. Un outil de diagnostic lit beaucoup d'informations sur votre machine. Préférez les éditeurs connus, téléchargez-les depuis leur site officiel, et lisez ce qui est envoyé en ligne si le programme communique avec un serveur.",
      },
      { type: "h2", text: "Les limites des outils gratuits" },
      {
        type: "p",
        text: "Chaque outil répond à une question précise, mais aucun ne dit « voilà pourquoi votre PC est lent ». C'est à vous de croiser les résultats : un Gestionnaire des tâches calme avec un disque à 100 %, un journal d'événements qui signale des ralentissements thermiques, un état SMART en alerte. Savoir lire ces indices demande de l'expérience, et les outils gratuits ne la fournissent pas.",
      },
      {
        type: "p",
        text: "Le temps est l'autre limite : ouvrir cinq programmes, noter les valeurs, chercher ce que signifie un code, cela prend facilement une heure pour quelqu'un qui n'a pas l'habitude. C'est précisément ce travail de croisement que cherche à automatiser Nyctale.",
      },
      { type: "h2", text: "Ce que fait Nyctale en 19 secondes" },
      {
        type: "p",
        text: "Nyctale interroge les mêmes sources que ces outils (processus, journal de Windows, état des disques) et les croise pour nommer la cause probable, en français clair. L'analyse est offerte ; la version complète, qui guide la correction, coûte 24,99 € une fois, sans abonnement. Quand le problème est matériel, il vous le dit plutôt que de vous faire courir après un réglage.",
      },
    ],
    faq: [
      {
        q: "Quel est le meilleur logiciel gratuit pour diagnostiquer un PC ?",
        r: "Il n'y en a pas un seul : le Gestionnaire des tâches pour le ralentissement, CrystalDiskInfo pour le disque, HWiNFO pour les températures et le Diagnostic de mémoire Windows pour la RAM. Chacun répond à une question précise.",
      },
      {
        q: "Peut-on diagnostiquer un PC sans rien installer ?",
        r: "Oui, en grande partie : le Gestionnaire des tâches, le Moniteur de ressources, l'Observateur d'événements et le Diagnostic de mémoire sont déjà dans Windows.",
      },
      {
        q: "Les logiciels de nettoyage de PC sont-ils utiles ?",
        r: "Rarement. Windows fait déjà l'essentiel, et beaucoup de ces programmes poussent à acheter une version payante après avoir exagéré les problèmes détectés.",
      },
      {
        q: "Comment tester la mémoire vive de son PC ?",
        r: "Tapez mdsched dans la recherche Windows et lancez le test au redémarrage. Pour un test plus poussé, MemTest86 se lance depuis une clé USB.",
      },
      {
        q: "En quoi Nyctale diffère-t-il de ces outils ?",
        r: "Il croise plusieurs sources (processus, journal Windows, état du disque) pour nommer une cause probable en français, au lieu de laisser interpréter chiffres et codes. L'analyse est offerte, la version complète coûte 24,99 € une fois.",
      },
    ],
    liens: ["ecran-bleu-windows-11", "disque-dur-va-lacher-signes", "pc-qui-rame-sans-raison"],
  },
];
