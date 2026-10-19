/*
 * Données du guide — Présidentielle 2027
 * Dernière mise à jour : 19 octobre 2026
 *
 * Les programmes 2027 sont pour la plupart encore en cours d'écriture.
 * Les propositions ci-dessous reprennent les annonces de campagne, les
 * positions publiques des candidats et de leur formation, ainsi que leurs
 * programmes précédents lorsqu'ils n'ont pas été démentis.
 * Pour corriger ou compléter : ouvrir une issue ou une pull request.
 */

window.GUIDE = {
  maj: "19 octobre 2026",

  election: {
    tours: "Avril – mai 2027 (dates exactes fixées par décret)",
    mandat: "5 ans (quinquennat), renouvelable une fois consécutivement",
    parrainages: "500 signatures d'élus issues d'au moins 30 départements ou collectivités d'outre-mer",
    listeOfficielle: "Publiée par le Conseil constitutionnel en mars 2027",
    sortant: "Emmanuel Macron, qui ne peut pas se représenter (deux mandats consécutifs)"
  },

  themes: [
    { id: "economie", label: "Économie & fiscalité", icon: "€" },
    { id: "travail", label: "Travail & retraites", icon: "⚒" },
    { id: "social", label: "Social, santé & logement", icon: "✚" },
    { id: "education", label: "Éducation & jeunesse", icon: "✎" },
    { id: "ecologie", label: "Écologie, énergie & agriculture", icon: "❀" },
    { id: "immigration", label: "Immigration & intégration", icon: "⇄" },
    { id: "securite", label: "Sécurité & justice", icon: "⚖" },
    { id: "europe", label: "Europe, international & défense", icon: "★" },
    { id: "institutions", label: "Institutions & démocratie", icon: "⌂" }
  ],

  // Position de gauche (0) à droite (100) sur l'axe usuel, purement indicative.
  familles: [
    { id: "extreme-gauche", label: "Extrême gauche" },
    { id: "gauche", label: "Gauche" },
    { id: "ecologistes", label: "Écologistes" },
    { id: "centre", label: "Centre" },
    { id: "droite", label: "Droite" },
    { id: "souverainistes", label: "Souverainistes" },
    { id: "extreme-droite", label: "Extrême droite" }
  ],

  partis: [
    {
      id: "lo", sigle: "LO", nom: "Lutte ouvrière", famille: "extreme-gauche", couleur: "#8b0000",
      creation: "1968 (sous ce nom)", dirigeant: "Nathalie Arthaud (porte-parole)",
      ideologie: ["Trotskisme", "Communisme révolutionnaire", "Internationalisme"],
      description: "Organisation trotskiste présente à toutes les présidentielles depuis 1974. Elle se donne pour objectif de faire entendre « le camp des travailleurs » et défend le renversement du capitalisme plutôt que sa réforme."
    },
    {
      id: "npa", sigle: "NPA-R", nom: "NPA – Révolutionnaires", famille: "extreme-gauche", couleur: "#b5121b",
      creation: "2023 (scission du NPA, fondé en 2009)", dirigeant: "Direction collégiale",
      ideologie: ["Anticapitalisme", "Trotskisme"],
      description: "Issu de la scission du Nouveau Parti anticapitaliste en 2023, le courant « Révolutionnaires » défend une ligne de rupture avec le capitalisme et refuse les alliances de gouvernement avec la gauche réformiste."
    },
    {
      id: "rp", sigle: "RP", nom: "Révolution permanente", famille: "extreme-gauche", couleur: "#c8102e",
      creation: "2022 (comme organisation autonome)", dirigeant: "Direction collégiale (porte-parole : Anasse Kazib)",
      ideologie: ["Trotskisme", "Syndicalisme de lutte"],
      description: "Organisation trotskiste issue du NPA, très implantée dans les luttes syndicales et étudiantes, notamment chez les cheminots."
    },
    {
      id: "pcf", sigle: "PCF", nom: "Parti communiste français", famille: "gauche", couleur: "#dd0000",
      creation: "1920", dirigeant: "Fabien Roussel (secrétaire national)",
      ideologie: ["Communisme", "Socialisme", "Républicanisme"],
      description: "Plus ancien parti de gauche encore actif, le PCF défend la hausse des salaires, les services publics, la réindustrialisation et un mix énergétique incluant le nucléaire. Il présente son propre candidat en 2027."
    },
    {
      id: "lfi", sigle: "LFI", nom: "La France insoumise", famille: "gauche", couleur: "#cc2443",
      creation: "2016", dirigeant: "Jean-Luc Mélenchon (fondateur), coordination de Manuel Bompard",
      ideologie: ["Socialisme démocratique", "Écosocialisme", "Populisme de gauche"],
      description: "Mouvement fondé par Jean-Luc Mélenchon, principale force de la gauche radicale. Son programme « L'Avenir en commun » prône la planification écologique, la hausse des salaires, la retraite à 60 ans et une VIe République."
    },
    {
      id: "debout", sigle: "Debout !", nom: "Debout !", famille: "gauche", couleur: "#e4572e",
      creation: "2025", dirigeant: "François Ruffin",
      ideologie: ["Gauche sociale", "Écologie populaire", "Protectionnisme solidaire"],
      description: "Mouvement lancé par François Ruffin après sa rupture avec LFI. Il veut parler à la « France des bourgs et des villes moyennes » autour du travail, des salaires et des services publics."
    },
    {
      id: "ps", sigle: "PS", nom: "Parti socialiste", famille: "gauche", couleur: "#ff8080",
      creation: "1969 (refondation au congrès d'Épinay en 1971)", dirigeant: "Olivier Faure (premier secrétaire)",
      ideologie: ["Social-démocratie", "Socialisme réformiste", "Proeuropéisme"],
      description: "Parti historique de la gauche de gouvernement (Mitterrand, Jospin, Hollande). Pour 2027, il a participé à la primaire de la gauche sociale-démocrate remportée par Raphaël Glucksmann le 11 octobre 2026."
    },
    {
      id: "pp", sigle: "PP", nom: "Place publique", famille: "gauche", couleur: "#e6007e",
      creation: "2018", dirigeant: "Raphaël Glucksmann, Aurore Lalucq",
      ideologie: ["Social-démocratie", "Écologie", "Fédéralisme européen"],
      description: "Mouvement fondé par Raphaël Glucksmann, très proeuropéen, centré sur la défense européenne, la justice fiscale et la transition écologique. Son fondateur est le candidat issu de la primaire de la gauche sociale-démocrate."
    },
    {
      id: "convention", sigle: "LC", nom: "La Convention", famille: "gauche", couleur: "#f08080",
      creation: "2023", dirigeant: "Bernard Cazeneuve",
      ideologie: ["Social-démocratie", "Gauche républicaine"],
      description: "Mouvement de l'ancien Premier ministre Bernard Cazeneuve, défenseur d'une gauche de gouvernement républicaine, attachée à l'ordre, à la laïcité et à l'Europe, en rupture avec LFI."
    },
    {
      id: "ecolo", sigle: "LE", nom: "Les Écologistes", famille: "ecologistes", couleur: "#00a85a",
      creation: "2010 (EELV), renommé en 2023", dirigeant: "Marine Tondelier (secrétaire nationale)",
      ideologie: ["Écologie politique", "Fédéralisme européen", "Progressisme"],
      description: "Principal parti écologiste, héritier des Verts. Il défend la sortie des énergies fossiles, la justice climatique et sociale et une Europe fédérale. Sa secrétaire nationale a été désignée candidate le 21 septembre 2026."
    },
    {
      id: "ge", sigle: "GE", nom: "Génération écologie", famille: "ecologistes", couleur: "#5cb85c",
      creation: "1990", dirigeant: "Delphine Batho",
      ideologie: ["Écologie intégrale", "Sobriété"],
      description: "Parti écologiste fondé par Brice Lalonde, aujourd'hui présidé par Delphine Batho, qui défend une écologie de la sobriété et refuse le principe d'une primaire unitaire de la gauche."
    },
    {
      id: "renaissance", sigle: "RE", nom: "Renaissance", famille: "centre", couleur: "#ffd600",
      creation: "2016 (En Marche), renommé en 2022", dirigeant: "Gabriel Attal (secrétaire général)",
      ideologie: ["Libéralisme", "Centrisme", "Proeuropéisme"],
      description: "Parti fondé par Emmanuel Macron. Il défend la politique de l'offre, la construction européenne et les réformes des deux quinquennats. Son secrétaire général est candidat depuis le 22 mai 2026."
    },
    {
      id: "horizons", sigle: "HOR", nom: "Horizons", famille: "centre", couleur: "#0055a4",
      creation: "2021", dirigeant: "Édouard Philippe",
      ideologie: ["Centre droit", "Libéralisme", "Proeuropéisme"],
      description: "Parti de l'ancien Premier ministre Édouard Philippe, maire du Havre. Il défend la rigueur budgétaire, l'autorité de l'État et la poursuite des réformes structurelles."
    },
    {
      id: "modem", sigle: "MoDem", nom: "Mouvement démocrate", famille: "centre", couleur: "#ff9900",
      creation: "2007", dirigeant: "François Bayrou",
      ideologie: ["Centrisme", "Démocratie chrétienne", "Proeuropéisme"],
      description: "Parti centriste de François Bayrou, allié historique d'Emmanuel Macron, attaché au désendettement, à la proportionnelle et à la construction européenne. Il n'a pas désigné de candidat à ce jour."
    },
    {
      id: "lr", sigle: "LR", nom: "Les Républicains", famille: "droite", couleur: "#0066cc",
      creation: "2002 (UMP), renommé en 2015", dirigeant: "Bruno Retailleau (président)",
      ideologie: ["Gaullisme", "Conservatisme libéral", "Droite républicaine"],
      description: "Héritier du RPR et de l'UMP (Chirac, Sarkozy). Il défend la fermeté sur l'immigration et la sécurité, la baisse de la dépense publique et la valeur travail. Son président a été désigné candidat le 19 avril 2026."
    },
    {
      id: "nouvelle-energie", sigle: "NE", nom: "Nouvelle Énergie", famille: "droite", couleur: "#3b7dd8",
      creation: "2021", dirigeant: "David Lisnard",
      ideologie: ["Libéralisme", "Décentralisation"],
      description: "Mouvement du maire de Cannes David Lisnard, libéral et décentralisateur, qui réclame une primaire de la droite."
    },
    {
      id: "dlf", sigle: "DLF", nom: "Debout la France", famille: "souverainistes", couleur: "#2c3e8f",
      creation: "1999 (Debout la République)", dirigeant: "Nicolas Dupont-Aignan",
      ideologie: ["Gaullisme souverainiste", "Euroscepticisme"],
      description: "Parti souverainiste de Nicolas Dupont-Aignan, favorable à une « Europe des nations » et à la démocratie référendaire."
    },
    {
      id: "patriotes", sigle: "LP", nom: "Les Patriotes", famille: "souverainistes", couleur: "#1c2b6b",
      creation: "2017", dirigeant: "Florian Philippot",
      ideologie: ["Souverainisme", "Frexit"],
      description: "Parti fondé par Florian Philippot après son départ du FN. Il réclame la sortie de l'Union européenne et de l'OTAN."
    },
    {
      id: "upr", sigle: "UPR", nom: "Union populaire républicaine", famille: "souverainistes", couleur: "#20409a",
      creation: "2007", dirigeant: "François Asselineau",
      ideologie: ["Souverainisme", "Frexit"],
      description: "Parti de François Asselineau, centré sur la sortie de l'UE, de l'euro et de l'OTAN par l'application de l'article 50 du traité sur l'Union européenne."
    },
    {
      id: "rn", sigle: "RN", nom: "Rassemblement national", famille: "extreme-droite", couleur: "#0d2a5c",
      creation: "1972 (Front national), renommé en 2018", dirigeant: "Jordan Bardella (président), Marine Le Pen (présidente du groupe à l'Assemblée)",
      ideologie: ["Nationalisme", "Populisme de droite", "Souverainisme"],
      description: "Premier groupe d'opposition à l'Assemblée et en tête des intentions de vote depuis 2024. Il défend la « priorité nationale », la réduction drastique de l'immigration et une « Europe des nations ». Marine Le Pen, condamnée en appel le 7 juillet 2026 mais redevenue éligible, a confirmé sa candidature ; un pourvoi en cassation reste pendant."
    },
    {
      id: "reconquete", sigle: "REC", nom: "Reconquête", famille: "extreme-droite", couleur: "#14213d",
      creation: "2021", dirigeant: "Éric Zemmour",
      ideologie: ["Nationalisme", "Identitarisme", "Conservatisme"],
      description: "Parti fondé par Éric Zemmour pour la présidentielle 2022, positionné à droite du RN sur l'immigration et l'identité. Son fondateur a confirmé sa candidature le 17 septembre 2026."
    }
  ],

  // statut : "declare" | "designe"
  candidats: [
    {
      id: "le-pen", nom: "Marine Le Pen", parti: "rn", statut: "Candidate déclarée (7 juillet 2026)",
      bio: "Députée du Pas-de-Calais, trois fois candidate (2012, 2017, 2022), qualifiée au second tour en 2017 et 2022. Condamnée en appel dans l'affaire des assistants parlementaires européens, sa peine d'inéligibilité a été ramenée à une durée qui lui permet de se présenter. Jordan Bardella reste l'alternative si la Cour de cassation devait changer la donne.",
      slogan: null,
      programme: {
        economie: [
          "Baisse de la TVA de 20 % à 5,5 % sur l'énergie (carburants, électricité, gaz, fioul).",
          "Exonération d'impôt sur le revenu pour les actifs de moins de 30 ans.",
          "Remplacement de l'IFI par un impôt sur la « fortune financière », résidence principale exclue.",
          "Priorité aux entreprises françaises et locales dans la commande publique.",
          "Plan de lutte contre la fraude sociale et fiscale ; privatisation de l'audiovisuel public."
        ],
        travail: [
          "Retour à la retraite à 60 ans avec 40 annuités pour les carrières longues (début avant 20 ans).",
          "Remise en cause du report de l'âge légal à 64 ans voté en 2023, de façon progressive.",
          "Exonération de cotisations patronales pour les entreprises qui augmentent les salaires de 10 %."
        ],
        social: [
          "« Priorité nationale » pour l'accès au logement social et à certaines prestations.",
          "Remplacement de l'aide médicale d'État (AME) par une aide limitée aux soins urgents.",
          "Revalorisation du minimum vieillesse et déconjugalisation de l'allocation adulte handicapé (AAH).",
          "Prêt à taux zéro pour les jeunes familles ; recrutement et revalorisation des soignants."
        ],
        education: [
          "Tenue uniforme à l'école, rétablissement de l'autorité du professeur.",
          "Recentrage du primaire sur les savoirs fondamentaux (français, calcul, histoire).",
          "Revalorisation des salaires des enseignants et valorisation des filières professionnelles."
        ],
        ecologie: [
          "Moratoire sur les nouveaux parcs éoliens et solaires, démantèlement progressif des éoliennes.",
          "Relance massive du nucléaire (nouveaux réacteurs EPR) et de l'hydroélectricité.",
          "Sortie du marché européen de l'électricité pour retrouver des prix fixés nationalement.",
          "Opposition aux accords de libre-échange (Mercosur) au nom de la protection des agriculteurs."
        ],
        immigration: [
          "Référendum sur l'immigration pour inscrire la « priorité nationale » dans la Constitution.",
          "Suppression du droit du sol et durcissement de l'accès à la nationalité.",
          "Restriction forte du regroupement familial ; demandes d'asile déposées depuis l'étranger.",
          "Expulsion systématique des étrangers condamnés et des clandestins."
        ],
        securite: [
          "Peines planchers et perpétuité réelle pour les crimes les plus graves.",
          "Présomption de légitime défense pour les forces de l'ordre.",
          "Construction de nouvelles places de prison et exécution effective des peines."
        ],
        europe: [
          "Transformer l'UE en « Alliance européenne des nations », primauté du droit national.",
          "Réduction de la contribution française au budget européen.",
          "Hausse du budget de la défense ; méfiance envers une intégration militaire européenne.",
          "Positionnement plus distant à l'égard du commandement intégré de l'OTAN."
        ],
        institutions: [
          "Référendum d'initiative citoyenne (RIC) sur demande de 500 000 électeurs.",
          "Mandat présidentiel unique de 7 ans (septennat non renouvelable).",
          "Proportionnelle aux législatives avec prime majoritaire."
        ]
      }
    },
    {
      id: "melenchon", nom: "Jean-Luc Mélenchon", parti: "lfi", statut: "Candidat déclaré (3 mai 2026)",
      bio: "Ancien ministre, ancien sénateur et député, fondateur de LFI. Candidat en 2012, 2017 et 2022, il a obtenu 21,95 % au premier tour en 2022, à quelques centaines de milliers de voix du second tour. Quatrième candidature.",
      slogan: "« La victoire est possible »",
      programme: {
        economie: [
          "SMIC porté à 1 600 € net et blocage des prix des produits de première nécessité.",
          "Impôt sur le revenu à 14 tranches, rétablissement de l'ISF avec un volet climatique.",
          "Plafonnement des héritages (au-delà de 12 M€, taxation intégrale).",
          "Planification de l'économie, nationalisation des autoroutes et des grands acteurs de l'énergie.",
          "Impôt universel ciblant les exilés fiscaux."
        ],
        travail: [
          "Abrogation de la réforme de 2023 et retraite à 60 ans avec 40 annuités.",
          "Application effective des 35 heures, vers les 32 heures dans les métiers pénibles.",
          "Interdiction des licenciements boursiers, titularisation des précaires de la fonction publique."
        ],
        social: [
          "Garantie d'autonomie pour les jeunes au niveau du seuil de pauvreté.",
          "Remboursement à 100 % des soins prescrits par la Sécurité sociale.",
          "Construction d'un million de logements publics, encadrement des loyers généralisé.",
          "Gratuité des premières quantités d'eau et d'énergie indispensables."
        ],
        education: [
          "Gratuité réelle de l'école : cantine, fournitures, transports scolaires.",
          "Recrutement massif d'enseignants et réduction des effectifs par classe.",
          "Abrogation de Parcoursup et revalorisation des salaires."
        ],
        ecologie: [
          "Planification écologique et « règle verte » : ne pas prélever plus que ce que la nature peut reconstituer.",
          "Sortie du nucléaire et 100 % d'énergies renouvelables à l'horizon 2050.",
          "« Green new deal » français et création d'une banque publique du climat.",
          "Agriculture paysanne et biologique, interdiction du glyphosate."
        ],
        immigration: [
          "Régularisation des travailleurs sans papiers, carte de séjour de 10 ans facilitée.",
          "Facilitation de l'accès à la nationalité et accueil digne des exilés.",
          "Action sur les causes des départs (guerres, accords commerciaux, climat)."
        ],
        securite: [
          "Retour d'une police de proximité, dissolution de la BRAV-M.",
          "Récépissé lors des contrôles d'identité contre les contrôles au faciès.",
          "Hausse des moyens de la justice et refonte de l'IGPN en organe indépendant."
        ],
        europe: [
          "« Désobéissance » aux traités européens incompatibles avec le programme (règles budgétaires, concurrence).",
          "Sortie du commandement intégré de l'OTAN, puis de l'organisation.",
          "Diplomatie non alignée et altermondialiste, refus des accords de libre-échange."
        ],
        institutions: [
          "Convocation d'une Assemblée constituante pour une VIe République.",
          "Référendum d'initiative citoyenne, y compris révocatoire.",
          "Proportionnelle intégrale, suppression du 49.3, droit de vote à 16 ans."
        ]
      }
    },
    {
      id: "glucksmann", nom: "Raphaël Glucksmann", parti: "pp", statut: "Désigné par la primaire de la gauche sociale-démocrate (11 octobre 2026, 66 %)",
      bio: "Essayiste et député européen depuis 2019, tête de liste PS-Place publique aux européennes de 2024 (13,8 %). Il a remporté dès le premier tour la primaire face à Olivier Faure, Jérôme Guedj, Emmanuel Maurel et Ségolène Royal.",
      slogan: null,
      programme: {
        economie: [
          "Impôt plancher de 2 % sur les patrimoines supérieurs à 100 M€ (« taxe Zucman »).",
          "Grand plan d'investissement dans la réindustrialisation verte et l'innovation.",
          "« Préférence européenne » dans les marchés publics et protection commerciale face à la Chine.",
          "Lutte renforcée contre l'optimisation et l'évasion fiscales."
        ],
        travail: [
          "Revenir sur le report de l'âge légal à 64 ans et mieux prendre en compte la pénibilité.",
          "Conférences salariales par branche, égalité salariale femmes-hommes contrôlée.",
          "Association des salariés aux décisions (administrateurs salariés renforcés)."
        ],
        social: [
          "Réinvestissement dans l'hôpital public et lutte contre les déserts médicaux.",
          "Relance de la construction de logements sociaux et rénovation thermique.",
          "Défense des services publics dans les territoires ruraux."
        ],
        education: [
          "Revalorisation du métier d'enseignant et amélioration des conditions de travail.",
          "Mixité sociale à l'école, lutte contre les inégalités scolaires."
        ],
        ecologie: [
          "Planification de la transition écologique, sortie progressive des énergies fossiles.",
          "Maintien du parc nucléaire existant et accélération des renouvelables.",
          "Rénovation thermique massive des logements, soutien aux agriculteurs dans la transition.",
          "Opposition à l'accord UE-Mercosur."
        ],
        immigration: [
          "Politique d'asile commune à l'échelle européenne, répartition solidaire des demandeurs.",
          "Intégration par le travail et la langue, fermeté contre les réseaux de passeurs."
        ],
        securite: [
          "Renforcement de la police de proximité et des moyens de la justice.",
          "Priorité à la lutte contre le narcotrafic et le blanchiment."
        ],
        europe: [
          "Construction d'une défense européenne autonome, financée par un emprunt commun.",
          "Soutien total à l'Ukraine, fermeté face à la Russie.",
          "Europe plus fédérale, investissements communs dans l'industrie et l'énergie."
        ],
        institutions: [
          "Introduction de la proportionnelle aux législatives.",
          "Rééquilibrage des pouvoirs en faveur du Parlement, fin de « l'hyperprésidentialisation »."
        ]
      }
    },
    {
      id: "tondelier", nom: "Marine Tondelier", parti: "ecolo", statut: "Désignée par Les Écologistes (21 septembre 2026)",
      bio: "Élue municipale d'opposition à Hénin-Beaumont, secrétaire nationale des Écologistes depuis 2022. Figure du Nouveau Front populaire en 2024, elle se présente comme un trait d'union entre LFI et le PS.",
      slogan: null,
      programme: {
        economie: [
          "Rétablissement d'un ISF incluant un volet climatique.",
          "Taxation des superprofits et des dividendes des grandes entreprises polluantes.",
          "Fiscalité écologique redistributive pour ne pas pénaliser les ménages modestes."
        ],
        travail: [
          "Abrogation de la réforme des retraites de 2023.",
          "Expérimentation à grande échelle de la semaine de 4 jours / 32 heures.",
          "Création d'emplois dans la transition (rénovation, rail, énergies renouvelables)."
        ],
        social: [
          "Revenu minimum ouvert aux 18-25 ans.",
          "Plan de rénovation thermique pour éradiquer les passoires énergétiques.",
          "Priorité à la santé environnementale (pollution, pesticides, perturbateurs endocriniens)."
        ],
        education: [
          "Baisse des effectifs par classe et revalorisation des enseignants.",
          "Éducation à l'environnement et à la nature dans tous les cursus."
        ],
        ecologie: [
          "Sortie des énergies fossiles, accélération massive des renouvelables.",
          "Pas de nouveaux réacteurs nucléaires, sortie progressive de l'atome.",
          "Investissement massif dans le train et les transports du quotidien.",
          "Agriculture paysanne, sortie des pesticides, protection de la biodiversité."
        ],
        immigration: [
          "Accueil digne des réfugiés, ouverture de voies légales et sûres de migration.",
          "Régularisation des travailleurs sans papiers dans les métiers en tension.",
          "Reconnaissance du statut de réfugié climatique."
        ],
        securite: [
          "Police de proximité et prévention, notamment dans les quartiers populaires.",
          "Lutte contre les violences sexistes et sexuelles comme priorité de l'action publique."
        ],
        europe: [
          "Fédéralisme européen, budget européen renforcé pour la transition.",
          "Soutien à l'Ukraine, défense européenne.",
          "Refus de l'accord UE-Mercosur et des traités commerciaux climaticides."
        ],
        institutions: [
          "Proportionnelle intégrale aux législatives.",
          "Généralisation des conventions citoyennes et démocratie participative."
        ]
      }
    },
    {
      id: "roussel", nom: "Fabien Roussel", parti: "pcf", statut: "Désigné par le PCF (6 septembre 2026)",
      bio: "Secrétaire national du PCF depuis 2018, ancien député du Nord. Candidat en 2022 (2,28 %), il défend une « gauche du travail » et présente sa candidature comme un « projet de rupture ».",
      slogan: null,
      programme: {
        economie: [
          "Hausse du SMIC et indexation des salaires sur les prix.",
          "Nationalisation de l'énergie (EDF 100 % public, Engie) et des grandes banques.",
          "Lutte contre l'évasion fiscale, taxation des revenus du capital au niveau de ceux du travail."
        ],
        travail: [
          "Retraite à 60 ans à taux plein.",
          "Semaine de 32 heures, sécurité de l'emploi et de la formation tout au long de la vie.",
          "Plan de réindustrialisation, droits nouveaux pour les salariés dans les entreprises."
        ],
        social: [
          "Recrutement massif de soignants, réouverture de lits et de maternités.",
          "Remboursement à 100 % des soins par la Sécurité sociale.",
          "Construction de logements sociaux et baisse des loyers."
        ],
        education: [
          "Gratuité de l'école de la maternelle à l'université.",
          "Revalorisation et recrutement d'enseignants."
        ],
        ecologie: [
          "Mix énergétique associant nucléaire public et renouvelables.",
          "Développement du fret ferroviaire et des transports publics gratuits.",
          "Souveraineté alimentaire et prix rémunérateurs pour les agriculteurs."
        ],
        immigration: [
          "Régularisation des travailleurs sans papiers.",
          "Lutte contre le pillage des pays d'origine par une politique de coopération."
        ],
        securite: [
          "Recrutement de policiers de proximité et de magistrats.",
          "Lutte contre le narcotrafic et la délinquance financière."
        ],
        europe: [
          "Rupture avec les traités européens libéraux, Europe des coopérations.",
          "Sortie du commandement intégré de l'OTAN, diplomatie de paix."
        ],
        institutions: [
          "VIe République, proportionnelle, renforcement du Parlement."
        ]
      }
    },
    {
      id: "ruffin", nom: "François Ruffin", parti: "debout", statut: "Candidat déclaré (1er avril 2025)",
      bio: "Journaliste, réalisateur (Merci patron !) et député de la Somme, ancien membre de LFI. Il a annoncé sa candidature dès avril 2025 et défend un rassemblement de la gauche autour du travail et des « gens ».",
      slogan: null,
      programme: {
        economie: [
          "Protectionnisme social et écologique : barrières douanières contre le dumping.",
          "Taxation des superprofits et des très hauts patrimoines.",
          "Relocalisation de la production industrielle et agricole."
        ],
        travail: [
          "Hausse des salaires, en priorité pour les « métiers du lien » (aides à domicile, AESH, auxiliaires de vie).",
          "Abrogation du report de l'âge de départ à 64 ans.",
          "Lutte contre la précarité et le temps partiel subi."
        ],
        social: [
          "Retour des services publics de proximité (poste, gare, hôpital) dans les bourgs et villes moyennes.",
          "Plan pour l'hôpital et l'accès aux soins."
        ],
        ecologie: [
          "« Écologie populaire » : rénovation des logements, transports du quotidien accessibles.",
          "Sobriété à commencer par les plus riches, soutien à l'agriculture paysanne."
        ],
        europe: [
          "Remise en cause du libre-échange et des règles de concurrence européennes."
        ],
        institutions: [
          "Renforcement du Parlement et de la démocratie locale."
        ]
      }
    },
    {
      id: "attal", nom: "Gabriel Attal", parti: "renaissance", statut: "Candidat déclaré (22 mai 2026)",
      bio: "Plus jeune Premier ministre de la Ve République (janvier – septembre 2024), ancien ministre de l'Éducation nationale et des Comptes publics, secrétaire général de Renaissance. Il revendique un renouvellement générationnel du camp central.",
      slogan: null,
      programme: {
        economie: [
          "Baisse des impôts pour les classes moyennes qui travaillent.",
          "Maîtrise de la dépense publique et réduction du déficit.",
          "Poursuite de la politique de l'offre, attractivité, simplification administrative."
        ],
        travail: [
          "Valorisation du travail : écart accru entre revenus du travail et de l'assistance.",
          "Lutte contre la « smicardisation » via la baisse des cotisations sur les hausses de salaire.",
          "Ouverture à un système de retraite plus universel avec une part de capitalisation."
        ],
        social: [
          "Accès aux soins : lutte contre les déserts médicaux, régulation de l'installation.",
          "Simplification et unification des aides sociales."
        ],
        education: [
          "« Choc des savoirs » : groupes de niveau, recentrage sur les fondamentaux.",
          "Interdiction du téléphone portable au collège, expérimentation de la tenue unique.",
          "Développement des internats et de l'apprentissage."
        ],
        ecologie: [
          "Nucléaire et renouvelables pour atteindre la neutralité carbone.",
          "Planification écologique « sans écologie punitive », soutien au véhicule électrique."
        ],
        immigration: [
          "Fermeté : application rapide des OQTF et du pacte européen sur la migration.",
          "Intégration par la langue et le travail."
        ],
        securite: [
          "Réforme de la justice des mineurs : comparution immédiate, remise en cause de l'excuse de minorité pour les faits graves.",
          "Sanctions rapides et exécution effective des peines."
        ],
        europe: [
          "Approfondissement de l'Union européenne, défense européenne.",
          "Soutien à l'Ukraine et hausse de l'effort de défense."
        ],
        institutions: [
          "Culture de la coalition et du compromis au Parlement.",
          "Renouvellement des pratiques politiques."
        ]
      }
    },
    {
      id: "philippe", nom: "Édouard Philippe", parti: "horizons", statut: "Candidat déclaré (septembre 2024)",
      bio: "Premier ministre de 2017 à 2020, maire du Havre, fondateur d'Horizons. Premier à s'être déclaré dès 2024, il est régulièrement donné par les sondages comme le principal rival du RN et entend reprendre le flambeau du macronisme.",
      slogan: null,
      programme: {
        economie: [
          "Redressement des finances publiques : forte baisse de la dépense publique, sans hausse générale d'impôts.",
          "Réforme de l'État et simplification massive des normes.",
          "Soutien à l'industrie et à l'innovation, stabilité fiscale pour les entreprises."
        ],
        travail: [
          "Nouvelle réforme des retraites : ouverture à un recul de l'âge et introduction d'une part de capitalisation.",
          "Réforme de l'assurance chômage pour inciter au retour à l'emploi."
        ],
        social: [
          "Refonte du système social vers une allocation unique.",
          "Adaptation au vieillissement de la population (dépendance, grand âge).",
          "Prévention en santé et meilleure organisation de l'offre de soins."
        ],
        education: [
          "Priorité absolue à l'école primaire et à la maîtrise des fondamentaux.",
          "Autorité des enseignants et réforme de leur carrière."
        ],
        ecologie: [
          "Relance du nucléaire comme pilier de la décarbonation.",
          "Transition « pragmatique », sans décroissance ni mesures punitives."
        ],
        immigration: [
          "Maîtrise des flux migratoires, dénonciation de l'accord franco-algérien de 1968.",
          "Exécution effective des mesures d'éloignement."
        ],
        securite: [
          "Restauration de l'autorité de l'État, justice plus rapide.",
          "Construction de places de prison et lutte contre le narcotrafic."
        ],
        europe: [
          "Européen convaincu : défense européenne et souveraineté industrielle.",
          "Soutien à l'Ukraine, hausse de l'effort de défense."
        ],
        institutions: [
          "Décentralisation accrue, davantage de pouvoir aux maires.",
          "Recours plus fréquent au référendum."
        ]
      }
    },
    {
      id: "retailleau", nom: "Bruno Retailleau", parti: "lr", statut: "Désigné par Les Républicains (19 avril 2026)",
      bio: "Ancien président du conseil régional des Pays de la Loire et du groupe LR au Sénat, ministre de l'Intérieur de 2024 à 2025, président de LR depuis mai 2025. Il cherche à occuper l'espace entre les candidats macronistes et l'extrême droite.",
      slogan: null,
      programme: {
        economie: [
          "Forte réduction de la dépense publique et non-remplacement de fonctionnaires.",
          "Baisse des impôts de production et des charges sur le travail.",
          "Lutte contre la fraude sociale et fiscale."
        ],
        travail: [
          "Report de l'âge de la retraite vers 65 ans à terme.",
          "RSA conditionné à des heures d'activité, allocation sociale unique plafonnée.",
          "Défiscalisation des heures supplémentaires."
        ],
        social: [
          "Remplacement de l'AME par une aide médicale d'urgence.",
          "Rétablissement d'une politique familiale universelle."
        ],
        education: [
          "Autorité, uniforme, sanctions et retour aux fondamentaux.",
          "Valorisation de la voie professionnelle et de l'apprentissage."
        ],
        ecologie: [
          "« Écologie de bon sens » : nucléaire, opposition à l'éolien et aux zones à faibles émissions (ZFE).",
          "Défense de l'agriculture et allègement des normes environnementales."
        ],
        immigration: [
          "Référendum sur l'immigration et révision constitutionnelle.",
          "Fin du droit du sol automatique, durcissement du regroupement familial et de la nationalité.",
          "Allongement de la rétention administrative et expulsions facilitées."
        ],
        securite: [
          "Peines planchers, exécution des courtes peines, nouvelles places de prison.",
          "Justice des mineurs plus sévère, lutte contre le narcotrafic."
        ],
        europe: [
          "Europe qui protège ses frontières, primauté de la Constitution en matière migratoire.",
          "Soutien à l'Ukraine, effort de défense."
        ],
        institutions: [
          "Élargissement du champ du référendum (article 11) à l'immigration.",
          "Restauration de l'autorité de l'État."
        ]
      }
    },
    {
      id: "lisnard", nom: "David Lisnard", parti: "nouvelle-energie", statut: "Candidat déclaré (31 mars 2026)",
      bio: "Maire de Cannes depuis 2014, ancien président de l'Association des maires de France, fondateur de Nouvelle Énergie. Il a quitté Les Républicains en 2026 et réclame une primaire ouverte de la droite et du centre.",
      slogan: null,
      programme: {
        economie: [
          "Choc de réduction de la dépense publique : environ 80 Md€ d'économies dès la première année, jusqu'à 200 Md€ par an en fin de quinquennat.",
          "Ramener la dépense publique vers 50 % du PIB en dix ans, « règle d'or » sur les dépenses de fonctionnement.",
          "Baisse des impôts et des charges sur le travail et la production, simplification massive des normes."
        ],
        travail: [
          "Report de l'âge de départ à 65 ans.",
          "Socle de retraite par répartition complété par un étage de capitalisation obligatoire et collectif.",
          "Baisse des charges plutôt que hausse du SMIC pour augmenter le salaire net ; liberté de négocier le temps de travail dans l'entreprise."
        ],
        social: [
          "RSA conditionné à une activité et plafonnement du cumul des aides sociales.",
          "Lutte contre la fraude sociale."
        ],
        education: [
          "Autonomie des établissements scolaires et des chefs d'établissement.",
          "Recentrage sur les savoirs fondamentaux et l'autorité."
        ],
        ecologie: [
          "Écologie « non punitive » fondée sur l'innovation et le nucléaire.",
          "Opposition aux normes jugées excessives (zones à faibles émissions, artificialisation)."
        ],
        immigration: [
          "Forte réduction de l'immigration légale, quotas d'immigration de travail par secteur.",
          "Fin du droit du sol automatique.",
          "Aucune régularisation après une entrée illégale."
        ],
        securite: [
          "Renforcement des polices municipales et des pouvoirs des maires en matière de sécurité.",
          "Exécution effective et rapide des peines."
        ],
        europe: [
          "Europe recentrée sur ses compétences essentielles, respect de la subsidiarité.",
          "Soutien à l'Ukraine et maintien dans l'OTAN."
        ],
        institutions: [
          "Élargissement de l'article 11 pour que tout sujet puisse être soumis à référendum.",
          "Décentralisation massive : transfert de compétences et de moyens aux collectivités, à commencer par les communes."
        ]
      }
    },
    {
      id: "zemmour", nom: "Éric Zemmour", parti: "reconquete", statut: "Candidat déclaré (17 septembre 2026)",
      bio: "Journaliste et essayiste, fondateur de Reconquête. Candidat en 2022 (7,07 %), il se positionne à droite du RN, notamment sur l'immigration et l'identité.",
      slogan: null,
      programme: {
        economie: [
          "Baisse des impôts de production et des charges sociales.",
          "Allègement des droits de succession pour les transmissions familiales.",
          "Réduction de la dépense publique et des aides sociales aux étrangers."
        ],
        travail: [
          "Hausse des salaires nets par la baisse des cotisations.",
          "Maintien d'un âge de départ à la retraite élevé avec aménagements pour carrières longues."
        ],
        social: [
          "Prestations sociales non contributives réservées aux Français.",
          "Politique nataliste : allocations familiales dès le premier enfant."
        ],
        education: [
          "Retour aux fondamentaux, à l'autorité et à l'uniforme.",
          "Enseignement de l'histoire de France « chronologique »."
        ],
        ecologie: [
          "Relance du nucléaire, arrêt de l'éolien."
        ],
        immigration: [
          "« Remigration » et création d'un ministère dédié.",
          "Suppression du droit du sol et du regroupement familial.",
          "Expulsion des délinquants et clandestins étrangers."
        ],
        securite: [
          "Perpétuité réelle, peines planchers, « tolérance zéro »."
        ],
        europe: [
          "Primauté du droit français sur le droit européen, « Europe des nations ».",
          "Sortie du commandement intégré de l'OTAN."
        ],
        institutions: [
          "Recours au référendum, notamment sur l'immigration."
        ]
      }
    },
    {
      id: "arthaud", nom: "Nathalie Arthaud", parti: "lo", statut: "Candidate déclarée (8 décembre 2025)",
      bio: "Professeure d'économie-gestion, porte-parole de Lutte ouvrière depuis 2008. Quatrième candidature après 2012, 2017 et 2022.",
      slogan: null,
      programme: {
        economie: [
          "Expropriation des grands groupes et contrôle des travailleurs sur les comptes des entreprises.",
          "Fin du secret commercial et bancaire."
        ],
        travail: [
          "Interdiction des licenciements et répartition du travail entre tous sans perte de salaire.",
          "Hausse générale des salaires, pensions et allocations, indexées sur les prix.",
          "Retraite à 60 ans."
        ],
        immigration: [
          "Liberté de circulation et d'installation, régularisation de tous les sans-papiers."
        ],
        europe: [
          "Internationalisme ouvrier, opposition aux guerres et aux dépenses militaires."
        ]
      }
    },
    {
      id: "dupont-aignan", nom: "Nicolas Dupont-Aignan", parti: "dlf", statut: "Candidat déclaré (19 septembre 2026)",
      bio: "Ancien maire d'Yerres et ancien député de l'Essonne, fondateur de Debout la France. Candidat en 2012, 2017 (4,7 %) et 2022.",
      slogan: null,
      programme: {
        economie: [
          "Patriotisme économique, protection des industries stratégiques.",
          "Baisse des taxes sur l'énergie."
        ],
        immigration: [
          "Forte réduction de l'immigration, fin du regroupement familial."
        ],
        ecologie: [
          "Nucléaire, arrêt de l'éolien."
        ],
        europe: [
          "« Europe des nations », primauté de la Constitution française sur les traités."
        ],
        institutions: [
          "Référendum d'initiative citoyenne et recours régulier au référendum."
        ]
      }
    }
  ],

  // Candidatures déclarées non détaillées ci-dessus
  autres: [
    { nom: "Bernard Cazeneuve", parti: "La Convention", resume: "Ancien Premier ministre (2016-2017). Gauche républicaine de gouvernement : rigueur budgétaire, ordre républicain, laïcité, engagement européen. Candidat hors primaire (16 juillet 2026)." },
    { nom: "Delphine Batho", parti: "Génération écologie", resume: "Ancienne ministre de l'Écologie. Écologie de la sobriété, opposée à une primaire unitaire de la gauche (25 novembre 2025)." },
    { nom: "Karim Bouamrane", parti: "PS", resume: "Maire de Saint-Ouen, figure d'une gauche sociale-démocrate tournée vers les quartiers populaires et l'entreprise (9 juin 2026)." },
    { nom: "Xavier Bertrand", parti: "Nous France / LR", resume: "Président de la région Hauts-de-France. Droite sociale : travail, salaires, sécurité, ruralité (annonce en février 2024)." },
    { nom: "Olivier Becht", parti: "Renaissance / Agir", resume: "Ancien ministre du Commerce extérieur. Ligne centriste et proeuropéenne (24 septembre 2026)." },
    { nom: "Gilles Platret", parti: "Divers droite", resume: "Maire de Chalon-sur-Saône. Droite conservatrice, laïcité stricte et fermeté migratoire (8 octobre 2026)." },
    { nom: "Natacha Polony", parti: "Sans étiquette", resume: "Journaliste et essayiste. Souverainisme républicain : réindustrialisation, laïcité, critique de la construction européenne actuelle (14 octobre 2026)." },
    { nom: "Florian Philippot", parti: "Les Patriotes", resume: "Sortie de l'UE (Frexit) et de l'OTAN ; prêt à se retirer au profit d'un candidat souverainiste plus rassembleur (9 mai 2026)." },
    { nom: "François Asselineau", parti: "UPR", resume: "Sortie de l'UE, de l'euro et de l'OTAN par l'article 50 (candidature annoncée en 2023)." },
    { nom: "Anasse Kazib", parti: "Révolution permanente", resume: "Cheminot et syndicaliste. Anticapitalisme, grève générale, régularisation des sans-papiers (1er juin 2026)." },
    { nom: "Selma Labib", parti: "NPA – Révolutionnaires", resume: "Anticapitalisme et internationalisme, rupture avec la gauche institutionnelle (17 juin 2026)." },
    { nom: "Mira Markovic", parti: "Parti animaliste", resume: "Condition animale au cœur du programme : fin de l'élevage intensif, de la chasse à courre et de la corrida (2 octobre 2026)." },
    { nom: "Antoine Mikolajczak", parti: "Équinoxe", resume: "Parti « post-clivage » fondé sur la méthode et l'expertise citoyenne (27 juin 2026)." },
    { nom: "Francis Lalanne", parti: "France Libre", resume: "Chanteur. Démocratie directe et contestation des institutions (19 août 2026)." },
    { nom: "Sylvain Durif", parti: "Sans étiquette", resume: "Candidature atypique et spirituelle (23 août 2026)." },
    { nom: "Benoît Mathieu", parti: "Sans étiquette", resume: "Candidature citoyenne en recherche de parrainages (30 mars 2026)." },
    { nom: "Manolo Mlekuz", parti: "Trajectoire", resume: "Candidature déclarée début 2026." }
  ],

  pressentis: [
    "Jordan Bardella (RN, en cas d'empêchement de Marine Le Pen)",
    "François Bayrou ou Jean-Noël Barrot (MoDem)",
    "François Hollande (PS)",
    "Dominique de Villepin (La France humaniste)",
    "Philippe de Villiers",
    "Bruno Le Maire, Aurore Bergé, Manuel Valls (Renaissance)",
    "Sandrine Rousseau (Les Écologistes)",
    "Jean Lassalle (Résistons !)",
    "Thierry Breton"
  ],

  sources: [
    { titre: "Candidatures à l'élection présidentielle française de 2027 — Wikipédia", url: "https://fr.wikipedia.org/wiki/Candidatures_%C3%A0_l%27%C3%A9lection_pr%C3%A9sidentielle_fran%C3%A7aise_de_2027" },
    { titre: "Élection présidentielle 2027 : qui sont les candidats déclarés ou presque ? — Public Sénat", url: "https://www.publicsenat.fr/actualites/politique/election-presidentielle-2027-qui-sont-les-candidats-declares-ou-presque" },
    { titre: "Présidentielle 2027 : qui sont les candidats officiellement déclarés ? — France 24", url: "https://www.france24.com/fr/france/20260524-france-presidentielle-2027-qui-sont-les-candidats-officiellement-declares" },
    { titre: "Présidentielle 2027 : qui sont les candidats déclarés ? — ICI", url: "https://www.ici.fr/infos/politique/presidentielle-2027-qui-sont-les-candidats-declares-1598133" },
    { titre: "Présidentielle 2027 : les principaux candidats déclarés — Touteleurope.eu", url: "https://www.touteleurope.eu/vie-politique-des-etats-membres/presidentielle-2027-qui-sont-les-candidats-deja-declares/" },
    { titre: "Marine Le Pen condamnée en appel mais éligible — Touteleurope.eu", url: "https://www.touteleurope.eu/vie-politique-des-etats-membres/proces-des-assistants-du-rn-marine-le-pen-condamnee-en-appel-mais-eligible-a-l-election-presidentielle-2027/" },
    { titre: "Comparatif des programmes — ÉlyséeScope 2027", url: "https://www.elyseescope.com/questions/comparatif-des-programmes-des-candidats-a-la-presidentielle-2027" },
    { titre: "Programme de David Lisnard pour 2027 — France-Vote", url: "https://www.france-vote.fr/actualites/programme-david-lisnard-2027" },
    { titre: "Conseil constitutionnel — élection présidentielle", url: "https://www.conseil-constitutionnel.fr/" }
  ]
};
