import type { Lang } from "./lang";

export type Bloc = { type: "p"; text: string } | { type: "h2"; text: string } | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  lang: Lang;
  title: string;
  excerpt: string;
  date: string;
  readMin: number;
  blocks: Bloc[];
};

export const articles: Article[] = [
  // -------------------------------------------------------------------
  // FR 1 / EN 1 — PC lent
  // -------------------------------------------------------------------
  {
    slug: "pc-qui-rame-sans-raison",
    lang: "fr",
    title: "Mon ordinateur rame et je ne comprends pas pourquoi",
    excerpt:
      "Un PC qui devient lent sans raison apparente, ça n'existe pas. Il y a toujours une cause — voici comment la trouver avant de penser à changer de machine.",
    date: "2026-08-08",
    readMin: 5,
    blocks: [
      {
        type: "p",
        text: "Le scénario est presque toujours le même. Il y a un an, l'ordinateur démarrait en quelques secondes. Aujourd'hui, ouvrir un simple navigateur prend un temps qui semble absurde. Rien n'a été installé de particulier, rien n'a « cassé » visiblement — et pourtant, tout est plus lent.",
      },
      {
        type: "p",
        text: "C'est une des situations les plus frustrantes en informatique : un problème réel, mesurable, mais invisible. On ne voit pas de message d'erreur. On ne sait pas par où commencer. Et la tentation la plus naturelle — se dire que l'ordinateur est « vieux » et qu'il faut le remplacer — est rarement la bonne réponse.",
      },
      { type: "h2", text: "Un ordinateur ne ralentit jamais « pour rien »" },
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
      { type: "h2", text: "Pourquoi deviner coûte plus cher que vérifier" },
      {
        type: "p",
        text: "Beaucoup de gens tentent un premier réflexe — désinstaller un logiciel au hasard, vider la corbeille, redémarrer plusieurs fois — sans savoir si ça touche vraiment la cause. Résultat : le problème revient, et la conclusion devient « il faut un nouveau PC ». C'est souvent une dépense de plusieurs centaines d'euros pour un problème qui aurait pu se corriger en quelques minutes.",
      },
      {
        type: "p",
        text: "C'est exactement le rôle d'un diagnostic : remplacer la supposition par une réponse précise. Nyctale a été conçu pour ça — analyser un ordinateur, et dire en langage clair ce qui le ralentit vraiment, sans jargon technique et sans rien modifier sans accord.",
      },
      {
        type: "p",
        text: "Avant de vous résigner à racheter un PC, prenez huit secondes pour savoir ce qui se passe réellement sur le vôtre.",
      },
    ],
  },
  {
    slug: "slow-computer-no-obvious-reason",
    lang: "en",
    title: "My computer is slow and I don't understand why",
    excerpt:
      "A PC that slows down for no apparent reason doesn't exist. There's always a cause — here's how to find it before you start thinking about a new machine.",
    date: "2026-08-08",
    readMin: 5,
    blocks: [
      {
        type: "p",
        text: "The scenario is almost always the same. A year ago, the computer started up in a few seconds. Today, opening a plain browser window takes an absurd amount of time. Nothing unusual was installed, nothing visibly \"broke\" — and yet everything is slower.",
      },
      {
        type: "p",
        text: "It's one of the most frustrating situations in computing: a real, measurable problem that's completely invisible. No error message. No obvious starting point. And the most natural temptation — assuming the computer is just \"old\" and needs replacing — is rarely the right answer.",
      },
      { type: "h2", text: "A computer never slows down \"for no reason\"" },
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
      { type: "h2", text: "Why guessing costs more than checking" },
      {
        type: "p",
        text: "Many people try a first instinct — uninstalling a random program, emptying the recycle bin, restarting a few times — without knowing whether it actually addresses the cause. The result: the problem comes back, and the conclusion becomes \"I need a new PC.\" That's often a few hundred euros spent on a problem that could have been fixed in minutes.",
      },
      {
        type: "p",
        text: "That's exactly what a diagnostic is for: replacing guesswork with a precise answer. Nyctale was built for this — it analyzes a computer and explains, in plain language, what's actually slowing it down, no technical jargon, and it never changes anything without your consent.",
      },
      {
        type: "p",
        text: "Before you resign yourself to buying a new PC, take eight seconds to find out what's really going on with yours.",
      },
    ],
  },

  // -------------------------------------------------------------------
  // FR 2 / EN 2 — Ventilateur bruyant
  // -------------------------------------------------------------------
  {
    slug: "ventilateur-qui-ne-sarrete-plus",
    lang: "fr",
    title: "Le ventilateur qui tourne sans arrêt : faut-il s'inquiéter ?",
    excerpt:
      "Un ventilateur bruyant en permanence n'est pas normal, mais ce n'est pas forcément grave non plus. Voici comment savoir si c'est un vrai problème ou juste une tâche mal identifiée.",
    date: "2026-08-08",
    readMin: 4,
    blocks: [
      {
        type: "p",
        text: "C'est un bruit qu'on finit par ne plus entendre, jusqu'à ce qu'un proche fasse la remarque : « ton PC souffle comme un avion ». Un ventilateur qui tourne à plein régime en permanence, même quand vous ne faites rien de particulier, n'est pas normal. Mais ce n'est pas forcément le signe d'une panne matérielle non plus.",
      },
      { type: "h2", text: "Ce que le bruit du ventilateur signifie vraiment" },
      {
        type: "p",
        text: "Un ventilateur accélère pour une seule raison : le processeur chauffe. La question à se poser n'est donc pas « le ventilateur est-il cassé ? » mais « pourquoi le processeur travaille-t-il autant ? ». Dans la grande majorité des cas, la réponse est logicielle :",
      },
      {
        type: "ul",
        items: [
          "Un composant Windows bloqué dans une boucle, qui consomme du processeur sans rien faire d'utile.",
          "Un programme oublié en arrière-plan, sans fenêtre ouverte, dont vous ignorez l'existence.",
          "Une mise à jour ou une analyse programmée qui tourne au mauvais moment.",
          "De la poussière accumulée dans le boîtier, qui empêche la chaleur de s'évacuer normalement — un vrai problème matériel, mais qui se résout avec un nettoyage, pas un nouvel achat.",
        ],
      },
      {
        type: "p",
        text: "Dans ce dernier cas seulement, il s'agit d'un vrai problème physique. Dans tous les autres, le ventilateur ne fait que réagir correctement à une situation logicielle anormale — il n'est pas la cause, il est le symptôme.",
      },
      { type: "h2", text: "Pourquoi identifier le coupable change tout" },
      {
        type: "p",
        text: "La différence est énorme en termes de coût et d'effort. Fermer un programme mal identifié prend dix secondes. Dépoussiérer un boîtier prend vingt minutes. Remplacer un ordinateur parce qu'« il chauffe trop » coûte plusieurs centaines d'euros — pour un problème qui, une fois sur deux, ne venait pas du matériel.",
      },
      {
        type: "p",
        text: "Nyctale identifie précisément quel programme fait tourner le ventilateur, et fait la distinction entre un vrai signe de surchauffe matérielle et un simple processus mal comportant. Le rapport nomme le coupable — pas juste « votre PC chauffe ».",
      },
    ],
  },
  {
    slug: "fan-that-never-stops-spinning",
    lang: "en",
    title: "The fan that never stops spinning: should you worry?",
    excerpt:
      "A fan that's constantly loud isn't normal, but it isn't necessarily serious either. Here's how to tell if it's a real problem or just a misidentified process.",
    date: "2026-08-08",
    readMin: 4,
    blocks: [
      {
        type: "p",
        text: "It's a sound you stop noticing, until someone points out: \"your PC sounds like an airplane.\" A fan running at full speed constantly, even when you're not doing anything demanding, isn't normal. But it isn't necessarily a sign of hardware failure either.",
      },
      { type: "h2", text: "What fan noise actually means" },
      {
        type: "p",
        text: "A fan speeds up for one reason: the processor is heating up. So the question isn't \"is the fan broken?\" but \"why is the processor working so hard?\" In the vast majority of cases, the answer is software-related:",
      },
      {
        type: "ul",
        items: [
          "A Windows component stuck in a loop, consuming processor power without doing anything useful.",
          "A program forgotten in the background, with no open window, that you don't even know is running.",
          "An update or scheduled scan running at the wrong time.",
          "Dust built up inside the case, preventing heat from escaping normally — a real hardware issue, but one that's fixed with a cleaning, not a new purchase.",
        ],
      },
      {
        type: "p",
        text: "Only in that last case is it a genuine physical problem. In every other case, the fan is simply reacting correctly to an abnormal software situation — it isn't the cause, it's the symptom.",
      },
      { type: "h2", text: "Why identifying the culprit changes everything" },
      {
        type: "p",
        text: "The difference is huge in terms of cost and effort. Closing a misidentified program takes ten seconds. Dusting out a case takes twenty minutes. Replacing a computer because \"it overheats\" costs several hundred euros — for a problem that, half the time, had nothing to do with the hardware.",
      },
      {
        type: "p",
        text: "Nyctale identifies precisely which program is spinning up the fan, and distinguishes a genuine hardware overheating signal from a simple misbehaving process. The report names the culprit — not just \"your PC is hot.\"",
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
    excerpt:
      "\"Il faut changer votre ordinateur\" est parfois vrai — et parfois une phrase qui arrange surtout celui qui la prononce. Voici comment savoir de quel côté vous êtes.",
    date: "2026-08-08",
    readMin: 5,
    blocks: [
      {
        type: "p",
        text: "Un ordinateur qui rame, et une personne en face qui dit : « à ce stade, il vaut mieux en racheter un ». C'est une scène courante en magasin ou en dépannage à domicile, et c'est un conseil qui peut être parfaitement honnête. Le problème, c'est qu'il peut aussi ne pas l'être — et rien, dans l'instant, ne permet de faire la différence.",
      },
      {
        type: "p",
        text: "Ce n'est pas une question de confiance envers les professionnels du dépannage informatique, dont la majorité fait un travail sérieux. C'est une question d'asymétrie : celui qui pose le diagnostic est aussi, souvent, celui qui vend la solution. Ce n'est pas une accusation, c'est juste une situation qui mérite un point de contrôle indépendant.",
      },
      { type: "h2", text: "Le réflexe simple : vérifier avant de décider" },
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
      { type: "h2", text: "Un deuxième avis, gratuit et en cinq minutes" },
      {
        type: "p",
        text: "Nyctale a été conçu précisément pour ce moment-là : obtenir, chez soi, un diagnostic indépendant et gratuit avant de prendre une décision coûteuse. Le rapport dit ce qui ne va pas, dans quelle mesure c'est grave, et si un remplacement est réellement justifié — ou si un simple réglage suffit.",
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
    excerpt:
      '"You need to replace your computer" is sometimes true — and sometimes a line that mostly benefits the person saying it. Here\'s how to tell which side you\'re on.',
    date: "2026-08-08",
    readMin: 5,
    blocks: [
      {
        type: "p",
        text: "A slow computer, and someone across the counter saying: \"at this point, you're better off buying a new one.\" It's a common scene in a shop or during an at-home repair visit, and it can be perfectly honest advice. The problem is it can also not be — and in the moment, there's no way to tell the difference.",
      },
      {
        type: "p",
        text: "This isn't about distrusting computer repair professionals, most of whom do serious, honest work. It's about an asymmetry: the person making the diagnosis is often also the one selling the solution. That's not an accusation, it's simply a situation that deserves an independent checkpoint.",
      },
      { type: "h2", text: "The simple habit: check before deciding" },
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
      { type: "h2", text: "A second opinion, free and in five minutes" },
      {
        type: "p",
        text: "Nyctale was built exactly for this moment: getting an independent, free diagnostic at home before making a costly decision. The report says what's wrong, how serious it is, and whether a replacement is actually justified — or whether a simple fix is enough.",
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
