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
];

export function articlesForLang(lang: Lang): Article[] {
  return articles.filter((a) => a.lang === lang).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function articleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
