/*
 * Questionnaire : positions des candidats
 *
 * Échelle : 2 = tout à fait d'accord, 1 = plutôt d'accord, 0 = position nuancée,
 * -1 = plutôt pas d'accord, -2 = pas du tout d'accord, null = position inconnue
 * (la question est alors ignorée pour ce candidat).
 *
 * Ces positions sont une interprétation des programmes et déclarations publiques
 * (voir js/data.js). Elles sont discutables par nature : toute proposition de
 * correction sourcée est bienvenue.
 */

(function () {
  // Ordre des colonnes de chaque ligne "p"
  var ordre = [
    "le-pen", "melenchon", "glucksmann", "tondelier", "roussel", "ruffin",
    "attal", "philippe", "retailleau", "zemmour", "arthaud", "dupont-aignan"
  ];

  var questions = [
    { theme: "travail", texte: "L'âge légal de départ à la retraite doit être ramené à 60 ans.",
      contexte: "La réforme de 2023 a reporté progressivement l'âge légal de 62 à 64 ans.",
      p: [1, 2, 0, 1, 2, 1, -2, -2, -2, -1, 2, 1] },
    { theme: "travail", texte: "Il faut aller vers la semaine de 32 heures.",
      contexte: "La durée légale du travail est de 35 heures par semaine depuis 2000.",
      p: [-2, 1, -1, 2, 2, 1, -2, -2, -2, -2, 2, -2] },
    { theme: "economie", texte: "Le SMIC doit être nettement augmenté par décision de l'État.",
      contexte: "Le SMIC est revalorisé chaque année selon l'inflation, avec des « coups de pouce » possibles.",
      p: [-1, 2, 1, 1, 2, 2, -1, -2, -2, -1, 2, 0] },
    { theme: "economie", texte: "Il faut taxer davantage les très grands patrimoines (ISF, taxe sur les milliardaires).",
      contexte: "L'ISF a été remplacé en 2018 par l'impôt sur la fortune immobilière (IFI).",
      p: [1, 2, 2, 2, 2, 2, -1, -1, -2, -2, 2, 0] },
    { theme: "economie", texte: "Il faut fortement réduire la dépense publique, même si cela touche certains services publics.",
      contexte: "La dette publique dépasse 115 % du PIB et le déficit reste au-dessus de la règle européenne des 3 %.",
      p: [-1, -2, -1, -2, -2, -2, 1, 2, 2, 1, -2, 0] },
    { theme: "economie", texte: "L'État doit nationaliser des secteurs stratégiques (énergie, autoroutes…).",
      contexte: "EDF est redevenue 100 % publique en 2023 ; les autoroutes sont concédées à des sociétés privées.",
      p: [1, 2, 0, 1, 2, 1, -2, -2, -2, -1, 2, 1] },
    { theme: "economie", texte: "Il faut taxer davantage les importations venant de pays hors Union européenne pour protéger la production française.",
      contexte: "La politique commerciale (droits de douane) relève de la compétence de l'Union européenne.",
      p: [2, 1, 1, 1, 1, 2, 0, -1, 0, 1, -1, 2] },
    { theme: "social", texte: "Certaines aides sociales et l'accès au logement social doivent être réservés en priorité aux Français.",
      contexte: "C'est le principe de « priorité nationale », aujourd'hui contraire à la Constitution selon la plupart des juristes.",
      p: [2, -2, -2, -2, -2, -2, -2, -1, 0, 2, -2, 1] },
    { theme: "social", texte: "L'aide médicale d'État (AME) pour les étrangers en situation irrégulière doit être limitée aux soins urgents.",
      contexte: "L'AME prend en charge les soins des étrangers sans titre de séjour résidant en France depuis plus de trois mois.",
      p: [2, -2, -2, -2, -2, -1, 0, 1, 2, 2, -2, 2] },
    { theme: "education", texte: "Il faut instaurer une tenue uniforme obligatoire à l'école.",
      contexte: "Une expérimentation a été lancée dans plusieurs établissements à partir de 2024.",
      p: [2, -1, -1, -1, 0, 0, 1, 0, 2, 2, null, 1] },
    { theme: "ecologie", texte: "La France doit construire de nouveaux réacteurs nucléaires.",
      contexte: "Un programme de six nouveaux réacteurs EPR2 a été annoncé en 2022.",
      p: [2, -2, 1, -2, 2, null, 2, 2, 2, 2, null, 2] },
    { theme: "ecologie", texte: "Il faut arrêter le développement des éoliennes.",
      contexte: "L'éolien représente environ 10 % de la production électrique française.",
      p: [2, -2, -2, -2, -1, -1, -1, -1, 1, 2, null, 2] },
    { theme: "ecologie", texte: "La lutte contre le réchauffement climatique doit primer, même si elle impose des contraintes importantes.",
      contexte: "La France s'est engagée à atteindre la neutralité carbone en 2050.",
      p: [-1, 2, 1, 2, 1, 1, 0, 0, -1, -2, null, -1] },
    { theme: "immigration", texte: "L'immigration doit être fortement réduite.",
      contexte: "Environ 330 000 premiers titres de séjour ont été délivrés en 2024.",
      p: [2, -2, -1, -2, -1, 0, 1, 1, 2, 2, -2, 2] },
    { theme: "immigration", texte: "Les travailleurs sans papiers doivent pouvoir être régularisés.",
      contexte: "Des régularisations au cas par cas existent, notamment dans les métiers en tension.",
      p: [-2, 2, 1, 2, 2, 1, -1, -1, -2, -2, 2, -2] },
    { theme: "immigration", texte: "Il faut supprimer le droit du sol.",
      contexte: "Un enfant né en France de parents étrangers peut devenir français à sa majorité sous conditions de résidence.",
      p: [2, -2, -2, -2, -2, -2, -1, -1, 1, 2, -2, 2] },
    { theme: "securite", texte: "Il faut instaurer des peines minimales obligatoires (peines planchers).",
      contexte: "Des peines planchers ont existé de 2007 à 2014 pour les récidivistes.",
      p: [2, -2, -1, -2, -1, -1, 1, 1, 2, 2, -2, 2] },
    { theme: "securite", texte: "Les mineurs auteurs de faits graves doivent pouvoir être jugés comme des majeurs.",
      contexte: "L'« excuse de minorité » réduit en principe de moitié la peine encourue par un mineur.",
      p: [2, -2, -1, -2, -1, -1, 2, 1, 2, 2, -2, 2] },
    { theme: "europe", texte: "L'Union européenne doit se doter d'une défense commune.",
      contexte: "Les États membres ont lancé en 2025 un plan de réarmement européen financé en partie par l'emprunt.",
      p: [-2, -2, 2, 2, -1, -1, 2, 2, 0, -2, -2, -2] },
    { theme: "europe", texte: "La France doit maintenir ou renforcer son aide militaire à l'Ukraine.",
      contexte: "La France fournit une aide militaire à l'Ukraine depuis l'invasion russe de février 2022.",
      p: [-1, -1, 2, 2, -1, 0, 2, 2, 1, -1, -2, -1] },
    { theme: "europe", texte: "Le droit français doit primer sur le droit européen.",
      contexte: "Selon les traités et la jurisprudence européenne, le droit de l'Union prime sur le droit national.",
      p: [2, 1, -2, -2, 1, 1, -2, -2, 1, 2, null, 2] },
    { theme: "europe", texte: "La France doit quitter le commandement intégré de l'OTAN.",
      contexte: "La France a réintégré le commandement intégré de l'OTAN en 2009.",
      p: [1, 2, -2, -2, 2, null, -2, -2, -2, 2, 2, 2] },
    { theme: "institutions", texte: "Il faut instaurer la proportionnelle aux élections législatives.",
      contexte: "Les députés sont élus au scrutin majoritaire à deux tours par circonscription.",
      p: [1, 2, 2, 2, 2, 1, 0, -1, -1, 1, null, 1] },
    { theme: "institutions", texte: "Il faut créer un référendum d'initiative citoyenne (RIC).",
      contexte: "Le référendum d'initiative partagée actuel exige 185 parlementaires et 4,8 millions de signatures.",
      p: [2, 2, -1, 0, 1, 1, -1, -1, -1, 1, null, 2] }
  ];

  window.GUIDE.questionnaire = {
    echelle: [
      { valeur: 2, label: "Tout à fait d'accord" },
      { valeur: 1, label: "Plutôt d'accord" },
      { valeur: -1, label: "Plutôt pas d'accord" },
      { valeur: -2, label: "Pas du tout d'accord" },
      { valeur: null, label: "Sans opinion (question ignorée)" }
    ],
    questions: questions.map(function (q, i) {
      var positions = {};
      ordre.forEach(function (id, j) { positions[id] = q.p[j]; });
      return { id: "q" + (i + 1), theme: q.theme, texte: q.texte, contexte: q.contexte, positions: positions };
    })
  };
})();
