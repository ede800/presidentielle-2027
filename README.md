# Présidentielle 2027 — Guide citoyen

Site statique, indépendant et neutre, qui présente les partis politiques français et les programmes des candidats à l'élection présidentielle de 2027.

> ⚠️ **Site non officiel.** Ce projet n'est affilié ni au Gouvernement ni à aucun parti. Son style s'inspire du [Système de design de l'État (DSFR)](https://www.systeme-de-design.gouv.fr/), sans en reprendre les éléments réservés aux services de l'État (Marianne, bloc-marque « République française », police Marianne).

## Fonctionnalités

| Page | Contenu |
| --- | --- |
| `index.html` | Accueil, chiffres clés, accès aux rubriques |
| `election.html` | Règles du scrutin, calendrier, parrainages, contexte 2027 |
| `partis.html` | 21 partis et mouvements, filtrables par famille politique et par recherche |
| `candidats.html` | Principaux candidats et autres candidatures déclarées |
| `candidat.html?id=…` | Programme détaillé d'un candidat sur 9 thèmes |
| `comparateur.html` | Comparaison côte à côte des candidats sur un thème |
| `questionnaire.html` | 25 ou 52 affirmations expliquées (contexte, arguments, définitions) pour calculer sa proximité avec chaque candidat, globalement et par thème |
| `lexique.html` | Définitions simples des notions politiques, économiques et juridiques |
| `sources.html` | Sources, méthodologie et calcul du questionnaire |
| `accessibilite.html` | Déclaration d'accessibilité (RGAA 4.1) |
| `plan.html` | Plan du site |

Les 9 thèmes : économie et fiscalité · travail et retraites · social, santé et logement · éducation et jeunesse · écologie, énergie et agriculture · immigration et intégration · sécurité et justice · Europe, international et défense · institutions et démocratie.

## Accessibilité

Conformité visée : **RGAA 4.1 / WCAG 2.2 niveau AA**.

- Liens d'évitement, régions ARIA, hiérarchie de titres, fil d'Ariane
- Navigation entièrement au clavier, focus visible, gestion du focus dans le questionnaire
- Contrastes AA en thème clair et sombre, `prefers-color-scheme`, `prefers-reduced-motion`, `forced-colors`
- Formulaires étiquetés, `fieldset`/`legend`, erreurs annoncées (`role="alert"`), statuts `aria-live`
- Deux systèmes de navigation (menu + plan du site), feuille de style d'impression

Audit automatique axe-core 4.10 : aucune violation sur l'ensemble des pages (thèmes clair et sombre). Un audit manuel complet reste nécessaire pour déclarer une conformité totale.

## Lancer en local

Aucune dépendance, aucun build :

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Publier sur GitHub Pages

1. Pousser le dépôt sur GitHub.
2. *Settings → Pages → Build and deployment* : source « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. Le site est disponible à `https://<utilisateur>.github.io/<dépôt>/`.

## Mettre à jour les données

Tout le contenu est dans ces fichiers :

- `js/data.js` : partis, candidats, programmes par thème, autres candidatures, sources ;
- `js/questionnaire-data.js` : questions, contexte, arguments pour et contre, et position de chaque candidat (de −2 à +2, `null` si inconnue) ;
- `js/lexique.js` : définitions du lexique, affichées automatiquement dans le questionnaire quand un terme apparaît dans une question ;
- `js/portraits.js` : portraits sous licence libre et crédits.

Pensez à mettre à jour le champ `maj` (date de mise à jour) dans `js/data.js`.

## Contribuer

Les corrections sont bienvenues **à condition d'être sourcées** (programme officiel, déclaration publique, article de presse). Ouvrez une *issue* ou une *pull request*.

## Licence

Code sous licence MIT. Les données sont une synthèse d'informations publiques : vérifiez toujours auprès des sources officielles des candidats.

## Photo du candidat fictif

Les images de *Hunter × Hunter* sont protégées par le droit d'auteur : aucune n'est fournie. Pour afficher une image de Pariston dont vous détenez les droits (ou une illustration libre), placez-la dans `img/portraits/pariston.jpg` puis ajoutez dans `js/data.js`, sur l'entrée `pariston` :

```js
photo: { src: "img/portraits/pariston.jpg", auteur: "Nom de l'auteur", licence: "Licence", licenceUrl: "", page: "lien vers la source" },
```
