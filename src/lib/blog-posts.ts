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
};

export const articles: Article[] = [
  // -------------------------------------------------------------------
  // FR 1 / EN 1 — PC lent
  // -------------------------------------------------------------------
  {
    slug: "pc-qui-rame-sans-raison",
    lang: "fr",
    traduction: "slow-computer-no-obvious-reason",
    title: "Mon ordinateur rame et je ne comprends pas pourquoi",
    seoTitle: "Ordinateur qui rame : pourquoi, et comment trouver la cause",
    excerpt:
      "Un PC qui devient lent sans raison apparente, ça n'existe pas. Il y a toujours une cause — voici comment la trouver avant de penser à changer de machine.",
    date: "2026-08-08",
    readMin: 5,
    blocks: [
      {
        type: "p",
        text: "Un PC qui ralentit progressivement a toujours une cause précise, logicielle dans l'immense majorité des cas — ce n'est jamais un phénomène de vieillissement aléatoire.",
      },
      {
        type: "p",
        text: "Le scénario est presque toujours le même. Il y a un an, l'ordinateur démarrait en quelques secondes. Aujourd'hui, ouvrir un simple navigateur prend un temps qui semble absurde. Rien n'a été installé de particulier, rien n'a « cassé » visiblement — et pourtant, tout est plus lent.",
      },
      {
        type: "p",
        text: "C'est une des situations les plus frustrantes en informatique : un problème réel, mesurable, mais invisible. On ne voit pas de message d'erreur. On ne sait pas par où commencer. Et la tentation la plus naturelle — se dire que l'ordinateur est « vieux » et qu'il faut le remplacer — est rarement la bonne réponse.",
      },
      { type: "h2", text: "Pourquoi mon PC ralentit-il sans raison apparente ?" },
      {
        type: "p",
        text: "Un PC ne perd pas de vitesse avec le temps comme une pile qui s'use. Chaque ralentissement a une cause identifiable, et dans l'immense majorité des cas, cette cause est logicielle, pas matérielle. Les suspects les plus fréquents :",
      },
      {
        type: "ul",
        items: [
          "Un programme démarré automatiquement avec Windows, qui tourne en arrière-plan sans jamais s'arrêter.",
          "Un navigateur avec des dizaines d'onglets ouverts qui saturent la mémoire vive.",
          "Le « démarrage rapide » de Windows, qui empêche certains blocages de se résoudre même après un redémarrage.",
          "Un disque dur (pas un SSD) proche de la fin de sa durée de vie, qui ralentit avant de lâcher complètement.",
        ],
      },
      {
        type: "p",
        text: "Le problème, c'est que ces causes ne se voient pas à l'œil nu. Le Gestionnaire des tâches de Windows donne une photo instantanée, mais ne dit pas ce qui se passe sur la durée, ni pourquoi tel programme consomme autant.",
      },
      { type: "h2", text: "Pourquoi deviner coûte-t-il plus cher que vérifier ?" },
      {
        type: "p",
        text: "Beaucoup de gens tentent un premier réflexe — désinstaller un logiciel au hasard, vider la corbeille, redémarrer plusieurs fois — sans savoir si ça touche vraiment la cause. Résultat : le problème revient, et la conclusion devient « il faut un nouveau PC ». C'est souvent une dépense de 300 à 800 € pour un problème qui aurait pu se corriger en quelques minutes.",
      },
      {
        type: "p",
        text: "C'est exactement le rôle d'un diagnostic : remplacer la supposition par une réponse précise. Nyctale a été conçu pour ça — analyser un ordinateur, et dire en langage clair ce qui le ralentit vraiment, sans jargon technique et sans rien modifier sans accord.",
      },
      {
        type: "p",
        text: "Avant de vous résigner à racheter un PC, prenez 19 secondes pour savoir ce qui se passe réellement sur le vôtre.",
      },
    ],
  },
  {
    slug: "slow-computer-no-obvious-reason",
    lang: "en",
    traduction: "pc-qui-rame-sans-raison",
    title: "My computer is slow and I don't understand why",
    seoTitle: "Slow computer for no reason? How to find the real cause",
    excerpt:
      "A PC that slows down for no apparent reason doesn't exist. There's always a cause — here's how to find it before you start thinking about a new machine.",
    date: "2026-08-08",
    readMin: 5,
    blocks: [
      {
        type: "p",
        text: "A computer that gradually slows down always has a precise cause, software-related in the vast majority of cases — it's never a random aging effect.",
      },
      {
        type: "p",
        text: "The scenario is almost always the same. A year ago, the computer started up in a few seconds. Today, opening a plain browser window takes an absurd amount of time. Nothing unusual was installed, nothing visibly \"broke\" — and yet everything is slower.",
      },
      {
        type: "p",
        text: "It's one of the most frustrating situations in computing: a real, measurable problem that's completely invisible. No error message. No obvious starting point. And the most natural temptation — assuming the computer is just \"old\" and needs replacing — is rarely the right answer.",
      },
      { type: "h2", text: "Why does my PC slow down for no apparent reason?" },
      {
        type: "p",
        text: "A PC doesn't lose speed over time the way a battery wears out. Every slowdown has an identifiable cause, and in the vast majority of cases, that cause is software, not hardware. The usual suspects:",
      },
      {
        type: "ul",
        items: [
          "A program set to launch automatically with Windows that keeps running in the background forever.",
          "A browser with dozens of open tabs saturating memory.",
          "Windows' \"fast startup\", which can prevent certain stuck states from resolving even after a restart.",
          "A hard drive (not an SSD) nearing the end of its life, slowing down before failing completely.",
        ],
      },
      {
        type: "p",
        text: "The problem is that none of these causes are visible to the naked eye. Windows Task Manager gives you a snapshot, but it doesn't tell you what's happening over time, or why a given program is consuming so much.",
      },
      { type: "h2", text: "Why does guessing cost more than checking?" },
      {
        type: "p",
        text: "Many people try a first instinct — uninstalling a random program, emptying the recycle bin, restarting a few times — without knowing whether it actually addresses the cause. The result: the problem comes back, and the conclusion becomes \"I need a new PC.\" That's often €300 to €800 spent on a problem that could have been fixed in minutes.",
      },
      {
        type: "p",
        text: "That's exactly what a diagnostic is for: replacing guesswork with a precise answer. Nyctale was built for this — it analyzes a computer and explains, in plain language, what's actually slowing it down, no technical jargon, and it never changes anything without your consent.",
      },
      {
        type: "p",
        text: "Before you resign yourself to buying a new PC, take 19 seconds to find out what's really going on with yours.",
      },
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
    title: "Avant d'acheter un PC neuf, une question à se poser",
    seoTitle: "PC lent : faut-il vraiment acheter un ordinateur neuf ?",
    excerpt:
      "\"Il faut changer votre ordinateur\" est parfois vrai — et parfois une phrase qui arrange surtout celui qui la prononce. Voici comment savoir de quel côté vous êtes.",
    date: "2026-08-08",
    readMin: 5,
    blocks: [
      {
        type: "p",
        text: "Un diagnostic indépendant et gratuit permet de vérifier, avant tout achat ou réparation coûteuse, si le remplacement d'un PC est réellement justifié.",
      },
      {
        type: "p",
        text: "Un ordinateur qui rame, et une personne en face qui dit : « à ce stade, il vaut mieux en racheter un ». C'est une scène courante en magasin ou en dépannage à domicile, et c'est un conseil qui peut être parfaitement honnête. Le problème, c'est qu'il peut aussi ne pas l'être — et rien, dans l'instant, ne permet de faire la différence.",
      },
      {
        type: "p",
        text: "Ce n'est pas une question de confiance envers les professionnels du dépannage informatique, dont la majorité fait un travail sérieux. C'est une question d'asymétrie : celui qui pose le diagnostic est aussi, souvent, celui qui vend la solution. Ce n'est pas une accusation, c'est juste une situation qui mérite un point de contrôle indépendant.",
      },
      { type: "h2", text: "Comment vérifier un diagnostic avant de décider ?" },
      {
        type: "p",
        text: "Avant d'accepter un diagnostic — remplacement, réparation payante, ou simple nettoyage — la question à se poser est concrète : quel est le problème précis, et est-ce que ça se voit ailleurs que dans la bouche de la personne qui me le dit ?",
      },
      {
        type: "ul",
        items: [
          "Un diagnostic sérieux nomme une cause précise (un programme, un composant, une pièce), pas une impression générale (« il est vieux », « il est saturé »).",
          "Un vrai problème matériel (disque en fin de vie, par exemple) se vérifie objectivement, pas seulement à l'oreille ou au ressenti.",
          "Le prix d'un diagnostic indépendant est toujours inférieur au prix d'un PC neuf inutile.",
        ],
      },
      { type: "h2", text: "Comment obtenir un deuxième avis gratuit en 19 secondes ?" },
      {
        type: "p",
        text: "Nyctale a été conçu précisément pour ce moment-là : un scan complet prend environ 19 secondes et donne, chez soi, un diagnostic indépendant et gratuit avant de prendre une décision coûteuse. Le rapport dit ce qui ne va pas, dans quelle mesure c'est grave, et si un remplacement est réellement justifié — ou si un simple réglage suffit.",
      },
      {
        type: "p",
        text: "Ça ne remplace pas un professionnel pour les cas qui dépassent le logiciel. Mais ça vous donne, avant toute décision, une base sur laquelle juger ce qu'on vous propose — au lieu de devoir faire confiance les yeux fermés.",
      },
    ],
  },
  {
    slug: "before-buying-a-new-pc",
    lang: "en",
    traduction: "avant-dacheter-un-pc-neuf",
    title: "Before buying a new PC, one question worth asking",
    seoTitle: "Slow PC: do you really need to buy a new computer?",
    excerpt:
      '"You need to replace your computer" is sometimes true — and sometimes a line that mostly benefits the person saying it. Here\'s how to tell which side you\'re on.',
    date: "2026-08-08",
    readMin: 5,
    blocks: [
      {
        type: "p",
        text: "An independent, free diagnostic lets you check, before any costly purchase or repair, whether replacing a PC is actually justified.",
      },
      {
        type: "p",
        text: "A slow computer, and someone across the counter saying: \"at this point, you're better off buying a new one.\" It's a common scene in a shop or during an at-home repair visit, and it can be perfectly honest advice. The problem is it can also not be — and in the moment, there's no way to tell the difference.",
      },
      {
        type: "p",
        text: "This isn't about distrusting computer repair professionals, most of whom do serious, honest work. It's about an asymmetry: the person making the diagnosis is often also the one selling the solution. That's not an accusation, it's simply a situation that deserves an independent checkpoint.",
      },
      { type: "h2", text: "How do you check a diagnosis before deciding?" },
      {
        type: "p",
        text: "Before accepting a diagnosis — a replacement, a paid repair, or a simple cleaning — the question worth asking is concrete: what exactly is the problem, and can it be seen anywhere other than in the words of the person telling you about it?",
      },
      {
        type: "ul",
        items: [
          "A serious diagnosis names a precise cause (a program, a component, a part), not a general impression (\"it's old\", \"it's clogged up\").",
          "A genuine hardware issue (a drive nearing end of life, for example) can be verified objectively, not just by ear or by feel.",
          "The cost of an independent diagnostic is always lower than the cost of an unnecessary new PC.",
        ],
      },
      { type: "h2", text: "How do you get a free second opinion in 19 seconds?" },
      {
        type: "p",
        text: "Nyctale was built exactly for this moment: a full scan takes about 19 seconds and gives you an independent, free diagnostic at home before making a costly decision. The report says what's wrong, how serious it is, and whether a replacement is actually justified — or whether a simple fix is enough.",
      },
      {
        type: "p",
        text: "It doesn't replace a professional for cases that go beyond software. But it gives you, before any decision, a basis to judge what you're being told — instead of having to trust blindly.",
      },
    ],
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
    seoTitle: "PC lent au démarrage : causes et solutions",
    excerpt:
      "Votre ordinateur met plusieurs minutes à devenir utilisable ? Programmes au démarrage, démarrage rapide, disque : voici comment trouver ce qui le ralentit, sans rien casser.",
    date: "2026-09-24",
    readMin: 7,
    blocks: [
      {
        type: "p",
        text: "Un PC lent au démarrage est presque toujours encombré par des programmes qui se lancent tout seuls avec Windows. Viennent ensuite un disque dur mécanique ou trop plein, et des mises à jour qui attendent un vrai redémarrage. Ces causes se vérifient en quelques minutes, et la plupart se corrigent sans rien désinstaller.",
      },
      {
        type: "p",
        text: "Le bureau apparaît, mais l'ordinateur reste inutilisable pendant plusieurs minutes : le curseur tourne, les fenêtres s'ouvrent au ralenti. C'est souvent là que se joue l'impression d'un PC « fatigué ». En réalité, Windows est simplement en train de lancer beaucoup de choses en même temps.",
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
        text: "Le démarrage consiste surtout à lire des milliers de petits fichiers. Un disque dur à plateaux le fait lentement, et un disque presque plein laisse moins de place à Windows pour travailler. Sous 10 % d'espace libre, tout ralentit, démarrage compris.",
      },
      { type: "h3", text: "4. Des mises à jour qui attendent" },
      {
        type: "p",
        text: "Une mise à jour installée mais pas encore finalisée peut reprendre son travail à chaque allumage, tant que l'ordinateur n'a pas été vraiment redémarré. Le démarrage paraît alors lent, jour après jour.",
      },
      { type: "h2", text: "Comment trouver ce qui ralentit votre démarrage ?" },
      {
        type: "ol",
        items: [
          "Ouvrez le Gestionnaire des tâches (Ctrl + Maj + Échap), puis l'onglet « Applications de démarrage » (« Démarrage » sur Windows 10).",
          "La colonne « Impact du démarrage » classe chaque programme de « Faible » à « Élevé ». Commencez par ceux à impact élevé que vous n'utilisez pas tous les jours.",
          "Faites un clic droit puis « Désactiver ». Le programme reste installé et fonctionne normalement quand vous l'ouvrez vous-même : il ne se lance simplement plus tout seul.",
          "Redémarrez (« Redémarrer », pas « Arrêter ») et comparez.",
        ],
      },
      {
        type: "p",
        text: "Pour mesurer précisément, Windows note la durée de chaque démarrage dans l'Observateur d'événements : journal « Applications et services > Microsoft > Windows > Diagnostics-Performance > Opérationnel », événement 100.",
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
        text: "En cas de doute, désactivez un programme à la fois : c'est réversible en un clic dans la même liste.",
      },
      { type: "h2", text: "Ce que Nyctale vérifie en 19 secondes" },
      {
        type: "p",
        text: "Nyctale compte les programmes lancés au démarrage, vérifie si l'ordinateur a vraiment redémarré récemment ou seulement été « arrêté » avec le démarrage rapide, et contrôle la place libre et la santé du disque. Il vous dit lequel de ces points ralentit votre démarrage, et ouvre directement la bonne liste pour agir.",
      },
    ],
    faq: [
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
    ],
  },

  // -------------------------------------------------------------------
  // FR 6 / EN 6 — Windows 11 lent après une mise à jour
  // -------------------------------------------------------------------
  {
    slug: "windows-11-lent-apres-mise-a-jour",
    lang: "fr",
    traduction: "windows-11-slow-after-update",
    title: "Windows 11 lent après une mise à jour : que faire ?",
    seoTitle: "Windows 11 lent après une mise à jour : que faire ?",
    excerpt:
      "Tout allait bien, puis une mise à jour et plus rien ne répond ? Dans la plupart des cas, Windows termine simplement son travail. Voici comment savoir si c'est temporaire ou s'il faut agir.",
    date: "2026-09-24",
    readMin: 7,
    blocks: [
      {
        type: "p",
        text: "Un Windows 11 lent juste après une mise à jour est le plus souvent un ralentissement temporaire : Windows termine en arrière-plan le travail commencé par la mise à jour. Il faut s'en inquiéter si la lenteur dure plusieurs jours, et dans ce cas les causes se vérifient une par une.",
      },
      { type: "h2", text: "Pourquoi Windows est-il lent après une mise à jour ?" },
      { type: "h3", text: "1. Le travail d'après mise à jour" },
      {
        type: "p",
        text: "Une fois la mise à jour installée, Windows a encore de quoi faire : finaliser des composants (TiWorker, TrustedInstaller), optimiser des bibliothèques de programmes, réindexer vos fichiers pour la recherche (SearchIndexer) et relancer une analyse antivirus (MsMpEng). Pendant 30 minutes à quelques heures, le processeur et le disque sont très occupés.",
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
      { type: "h3", text: "5. Des fichiers système abîmés" },
      {
        type: "p",
        text: "Plus rarement, une mise à jour interrompue (coupure de courant, ordinateur éteint en plein milieu) laisse des fichiers de Windows endommagés. Les symptômes sont alors déroutants : lenteurs, fenêtres qui ne s'ouvrent plus, mises à jour qui échouent en boucle.",
      },
      { type: "h2", text: "Que faire, dans l'ordre ?" },
      {
        type: "ol",
        items: [
          "Laissez l'ordinateur allumé et branché 30 à 60 minutes, sans le mettre en veille, pour que Windows termine son travail.",
          "Choisissez « Redémarrer » (et non « Arrêter ») dans le menu Démarrer.",
          "Dans Paramètres > Windows Update, installez les éventuelles mises à jour restantes : un correctif suit souvent une mise à jour problématique.",
          "Dans Paramètres > Windows Update > Historique des mises à jour, vérifiez si un pilote a été mis à jour. Si oui, installez la version du site du fabricant de votre ordinateur ou de la carte graphique.",
          "Si la lenteur est apparue avec une mise à jour précise et dure depuis plusieurs jours, la même page propose « Désinstaller des mises à jour ».",
          "En dernier recours, la réparation intégrée de Windows remet d'aplomb les fichiers système abîmés : dans un terminal ouvert en tant qu'administrateur, tapez DISM /Online /Cleanup-Image /RestoreHealth, puis sfc /scannow.",
        ],
      },
      {
        type: "p",
        text: "Une mise à jour lente n'est pas une raison de changer d'ordinateur : dans l'immense majorité des cas, tout rentre dans l'ordre en quelques heures ou après un vrai redémarrage.",
      },
      { type: "h2", text: "Ce que Nyctale vérifie en 19 secondes" },
      {
        type: "p",
        text: "Nyctale reconnaît les tâches Windows qui travaillent en arrière-plan (installation de mise à jour, analyse antivirus, indexation) et vous dit simplement de patienter quand c'est le cas. Il vérifie aussi si l'ordinateur a vraiment redémarré, compte les programmes au démarrage et, lancé en administrateur, contrôle l'intégrité des fichiers de Windows.",
      },
    ],
    faq: [
      {
        q: "Combien de temps Windows reste-t-il lent après une mise à jour ?",
        r: "En général de 30 minutes à quelques heures, le temps de terminer l'installation, l'optimisation et la réindexation. Au-delà de quelques jours, il y a une autre cause à chercher.",
      },
      {
        q: "Faut-il désinstaller la dernière mise à jour ?",
        r: "Seulement si la lenteur est apparue avec elle, dure depuis plusieurs jours et résiste à un vrai redémarrage. Windows la réinstallera plus tard, souvent dans une version corrigée.",
      },
      {
        q: "Pourquoi « Arrêter » ne suffit pas après une mise à jour ?",
        r: "Avec le démarrage rapide, activé par défaut, « Arrêter » met Windows en veille prolongée partielle au lieu de le fermer complètement. Certaines mises à jour ont besoin d'un redémarrage complet : choisissez « Redémarrer ».",
      },
    ],
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
    seoTitle: "Slow PC startup: causes and fixes",
    excerpt:
      "Your computer takes minutes to become usable? Startup programs, fast startup, the disk: here's how to find what's slowing it down, without breaking anything.",
    date: "2026-09-24",
    readMin: 7,
    blocks: [
      {
        type: "p",
        text: "A slow PC startup is almost always caused by programs that launch on their own with Windows. Next come a mechanical or nearly full hard drive, and updates waiting for a real restart. These causes can be checked in a few minutes, and most can be fixed without uninstalling anything.",
      },
      {
        type: "p",
        text: "The desktop appears, but the computer stays unusable for several minutes: the cursor spins, windows open in slow motion. That's often where a PC starts to feel \"tired\". In reality, Windows is simply launching a lot of things at once.",
      },
      { type: "h2", text: "Why does a PC become slow to start?" },
      { type: "h3", text: "1. Too many startup programs" },
      {
        type: "p",
        text: "Every piece of software wants to \"start with Windows\": messaging apps, game launchers, printer tools, update helpers, cloud storage. One by one they're light; all together they fight over the disk and memory exactly when the computer needs them most. Beyond a dozen or so, you really feel it.",
      },
      { type: "h3", text: "2. A \"fast startup\" that isn't quite what it seems" },
      {
        type: "p",
        text: "With Windows fast startup, on by default, \"Shut down\" doesn't fully close the system: Windows goes into a partial hibernation to start faster. It works, but small glitches pile up from day to day since nothing is ever truly reset. Only \"Restart\" starts from a clean slate.",
      },
      { type: "h3", text: "3. A mechanical or nearly full hard drive" },
      {
        type: "p",
        text: "Starting up is mostly reading thousands of small files. A spinning hard drive does this slowly, and a nearly full disk leaves Windows less room to work. Below 10% free space, everything slows down, start-up included.",
      },
      { type: "h3", text: "4. Pending updates" },
      {
        type: "p",
        text: "An update that's installed but not yet finalised can resume its work at every start-up, until the computer is really restarted. Start-up then feels slow, day after day.",
      },
      { type: "h2", text: "How to find what slows down your startup" },
      {
        type: "ol",
        items: [
          "Open Task Manager (Ctrl + Shift + Esc), then the \"Startup apps\" tab (\"Startup\" on Windows 10).",
          "The \"Startup impact\" column rates each program from \"Low\" to \"High\". Start with the high-impact ones you don't use every day.",
          "Right-click, then \"Disable\". The program stays installed and works normally when you open it yourself: it just no longer launches on its own.",
          "Restart (\"Restart\", not \"Shut down\") and compare.",
        ],
      },
      {
        type: "p",
        text: "To measure precisely, Windows records the duration of each start-up in Event Viewer: \"Applications and Services Logs > Microsoft > Windows > Diagnostics-Performance > Operational\", event 100.",
      },
      { type: "h2", text: "What not to disable" },
      {
        type: "ul",
        items: [
          "Your antivirus, including Microsoft Defender.",
          "Manufacturer drivers and utilities for the keyboard, touchpad or sound, if you don't know what they do.",
          "Programs you genuinely need right after switching on (a work messaging app, for example).",
        ],
      },
      {
        type: "p",
        text: "When in doubt, disable one program at a time: it can be undone in one click in the same list.",
      },
      { type: "h2", text: "What Nyctale checks in 19 seconds" },
      {
        type: "p",
        text: "Nyctale counts the programs launched at startup, checks whether the computer was really restarted recently or only \"shut down\" with fast startup, and checks the free space and health of the drive. It tells you which of these is slowing down your startup, and opens the right list so you can act.",
      },
    ],
    faq: [
      {
        q: "How many startup programs is too many?",
        r: "There's no hard limit, but beyond a dozen programs launching with Windows, the effect on a modest computer becomes noticeable. Keep the ones you need right away and disable the rest.",
      },
      {
        q: "Does disabling a startup program delete it?",
        r: "No. It stays installed and works normally when you open it. It just no longer launches automatically, and you can turn it back on at any time.",
      },
      {
        q: "Should I turn off Windows fast startup?",
        r: "Not necessarily. It genuinely speeds up start-up. Just choose \"Restart\" now and then, for example once a week, to start from a clean system. If the computer keeps accumulating glitches, turning it off is an option.",
      },
      {
        q: "Does an SSD speed up startup?",
        r: "Yes, dramatically, if the computer still has a mechanical hard drive. It's often the difference between several minutes and a few seconds.",
      },
    ],
  },
  {
    slug: "windows-11-slow-after-update",
    lang: "en",
    traduction: "windows-11-lent-apres-mise-a-jour",
    title: "Windows 11 slow after an update: what to do",
    seoTitle: "Windows 11 slow after an update: what to do",
    excerpt:
      "Everything was fine, then an update and nothing responds? In most cases Windows is just finishing its work. Here's how to tell whether it's temporary or whether you need to act.",
    date: "2026-09-24",
    readMin: 7,
    blocks: [
      {
        type: "p",
        text: "Windows 11 being slow right after an update is most often a temporary slowdown: Windows is finishing, in the background, the work the update started. It's worth worrying about if the slowness lasts several days, and in that case the causes can be checked one by one.",
      },
      { type: "h2", text: "Why is Windows slow after an update?" },
      { type: "h3", text: "1. Post-update work" },
      {
        type: "p",
        text: "Once the update is installed, Windows still has work to do: finalising components (TiWorker, TrustedInstaller), optimising program libraries, re-indexing your files for search (SearchIndexer) and running a new antivirus scan (MsMpEng). For 30 minutes to a few hours, the processor and disk are very busy.",
      },
      { type: "h3", text: "2. A restart that didn't really happen" },
      {
        type: "p",
        text: "Some updates are only complete after a real restart. But with Windows fast startup, \"Shut down\" and switching back on is not a full restart. The update stays half-applied, and the computer can remain slow until you choose \"Restart\".",
      },
      { type: "h3", text: "3. A replaced driver" },
      {
        type: "p",
        text: "An update can replace the graphics, Wi-Fi or storage driver with a generic version. The result: choppy display, slow network, or a computer that lags in a new way. The update history shows whether a driver was changed.",
      },
      { type: "h3", text: "4. New startup programs" },
      {
        type: "p",
        text: "Updates to Windows or other software sometimes add items that launch at startup. They weigh down start-up without you installing anything.",
      },
      { type: "h3", text: "5. Damaged system files" },
      {
        type: "p",
        text: "More rarely, an interrupted update (power cut, computer switched off halfway) leaves damaged Windows files behind. The symptoms are then confusing: slowdowns, windows that won't open, updates failing over and over.",
      },
      { type: "h2", text: "What to do, in order" },
      {
        type: "ol",
        items: [
          "Leave the computer on and plugged in for 30 to 60 minutes, without putting it to sleep, so Windows can finish its work.",
          "Choose \"Restart\" (not \"Shut down\") from the Start menu.",
          "In Settings > Windows Update, install any remaining updates: a fix often follows a problematic update.",
          "In Settings > Windows Update > Update history, check whether a driver was updated. If so, install the version from your computer or graphics card manufacturer's website.",
          "If the slowness came with a specific update and has lasted several days, the same page offers \"Uninstall updates\".",
          "As a last resort, Windows' built-in repair fixes damaged system files: in a terminal opened as administrator, type DISM /Online /Cleanup-Image /RestoreHealth, then sfc /scannow.",
        ],
      },
      {
        type: "p",
        text: "A slow update is not a reason to replace your computer: in the vast majority of cases, everything is back to normal within a few hours or after a real restart.",
      },
      { type: "h2", text: "What Nyctale checks in 19 seconds" },
      {
        type: "p",
        text: "Nyctale recognises Windows tasks working in the background (update installation, antivirus scan, indexing) and simply tells you to wait when that's the case. It also checks whether the computer was really restarted, counts startup programs and, when run as administrator, checks the integrity of Windows files.",
      },
    ],
    faq: [
      {
        q: "How long does Windows stay slow after an update?",
        r: "Usually from 30 minutes to a few hours, the time needed to finish installing, optimising and re-indexing. Beyond a few days, there's another cause to look for.",
      },
      {
        q: "Should I uninstall the latest update?",
        r: "Only if the slowness came with it, has lasted several days and survives a real restart. Windows will reinstall it later, often in a fixed version.",
      },
      {
        q: "Why isn't \"Shut down\" enough after an update?",
        r: "With fast startup, on by default, \"Shut down\" puts Windows into partial hibernation instead of fully closing it. Some updates need a full restart: choose \"Restart\".",
      },
    ],
  },
];

export function articlesForLang(lang: Lang): Article[] {
  return articles.filter((a) => a.lang === lang).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function articleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
