# Conventions — Permalinks (`permalink`)

À consulter à l'étape 8 du workflow (`SKILL.md`), après les modèles de contenu (étape 7) et avant la complétion section par section (étape 9).

---

## Pourquoi cette étape est nécessaire

`content-model add --has-permalink true` (étape 7) **flague** un modèle comme ayant une page de détail, mais ne câble rien : il n'existe, à l'issue de l'étape 7, aucune route reliant un item du modèle à une page. C'est le rôle de `creopse permalink add` — une entité à part entière (`PermalinkModel` : `pathPrefix`, `contentType`, `contentId`, `pageId`), distincte du modèle de contenu lui-même.

**Ce n'est pas réservé aux modèles de contenu custom.** Le type de contenu natif `news-article` (articles) a exactement le même besoin : sans permalink dédié, `NewsDetails.vue` n'est jamais atteint par `getContentPath(article)`, même une fois la section parfaitement codée et attachée à sa page (étape 9/10). Traiter les deux cas dans cette étape :

- Un permalink par modèle de contenu créé à l'étape 7 avec `--has-permalink true` (Services, Projects, Team...).
- Un permalink pour `news-article` si le projet a des articles (`News.vue`/`NewsDetails.vue`).
- Un permalink pour `news-category`/`news-tag` uniquement si le template source a des pages dédiées de listing par catégorie/tag (rare — vérifier l'inventaire de l'étape 5.1 avant d'en créer un par réflexe).

---

## Choix de `--content-param`

Détermine quelle propriété de l'item cible est utilisée pour résoudre l'URL (`getContentPath(item)` côté Vue) :

| `content-type` | Valeurs possibles pour `--content-param` | Comment choisir |
|---|---|---|
| `content-model` | `id` (défaut), ou **n'importe quel champ défini dans `data-structure.json` du modèle** | Pas une règle figée à `id` : si le projet a défini un champ dédié pour des URLs propres (ex. un champ `slug` ajouté à la structure du modèle, cf. étape 7), l'utiliser. Sinon, rester sur `id` par défaut plutôt que d'inventer un champ qui n'existe pas dans la structure — vérifier `.creopse/content-models/<NomModele>/data-structure.json` avant de choisir. |
| `news-article` | `id` ou `slug` | Structure native, fixe, pas de champ custom possible — `slug` (présent sur `NewsArticleModel`) est l'usage idiomatique pour une URL lisible. |
| `news-category` / `news-tag` | `id` ou `slug` | Idem, `slug?` disponible nativement sur ces modèles. |

---

## Commandes CLI

```bash
# Un modèle de contenu (Services), résolu par id — page de détail créée à l'étape 4
creopse permalink add /services content-model --content-id service --page service-details

# Un autre modèle de contenu (Projects/Réalisations)
creopse permalink add /realisations content-model --content-id project --page project-details

# Le type de contenu natif news-article, résolu par slug
creopse permalink add /actualites news-article --content-param slug --page news-details
```

- `<path-prefix>` : préfixe d'URL public pour ce type de contenu (ex. `/services/mon-item`) — choisir un préfixe cohérent avec la langue/l'univers du projet, pas un défaut générique type `/items`.
- `--content-id` : **uniquement requis pour `content-type=content-model`** — nom ou id du modèle créé à l'étape 7 (ex. `service`, pas `Service` ni `Services` : reprendre exactement le nom passé à `content-model add`).
- `--page <name>` : nom de la page créée à l'étape 4 qui sert de template de détail (ex. `service-details`) — jamais le nom d'une section, jamais une page qui n'existe pas encore à ce stade.

### Modifier un permalink existant

```bash
creopse permalink edit --content-model service --new-path-prefix /nos-services
creopse permalink edit --path-prefix /actualites --page news-details-v2
```

Identifier la cible avec **exactement un** de `--id`, `--path-prefix`, ou `--content-model` — jamais plusieurs à la fois. Le contenu cible lui-même (`content-type`/`content-id`) ne peut pas être changé une fois fixé ; pour changer de contenu cible, supprimer et recréer le permalink plutôt que d'essayer de le réassigner via `edit`.

---

## Où consigner l'état

Un fichier par permalink créé, dans `.creopse/permalinks/<nom>.json` (nom libre mais stable, ex. `services.json`, `news.json`) — même logique que `.creopse/menus/<location>.json` : un dossier plat, un fichier par entité, pas de sous-structure nécessaire ici (contrairement à `sections/`/`content-models/` qui ont structure + données à faire cohabiter).

```json
{
  "path_prefix": "/services",
  "content_type": "content-model",
  "content_id": "service",
  "content_param": "id",
  "page": "service-details",
  "id": 3
}
```

`id` : l'id du permalink retourné par la commande, à noter une fois créé — permet de vérifier avant un `edit`/`remove` ultérieur qu'un permalink existe déjà pour ce modèle plutôt que d'en recréer un doublon.

---

## Point de validation

Présenter la liste des permalinks à créer (préfixe, modèle/type de contenu ciblé, page de détail associée) avant exécution — ces commandes créent des entrées en base qui déterminent le routing public du site.
