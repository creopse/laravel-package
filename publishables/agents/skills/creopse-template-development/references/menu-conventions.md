# Conventions — Navigation (`menu`)

À consulter à l'étape 6 du workflow (`SKILL.md`), après la création des pages (étape 4) et le scaffolding des sections (étape 5).

---

## Pourquoi cette étape est nécessaire

`Header.vue` et `Footer.vue` (voir `section-patterns.md`) consomment respectivement `getMenuItems()` (menu principal) et `getMenuItemsByLocation('footer', true)` (menu pied de page), et résolvent les liens via `getMenuHref(item)` / `openMenu(item)`. Les champs de section `menu-item-link` sont résolus via `getLinkFromMenuItemId`. Tant que cette étape n'est pas exécutée, ces composants n'ont **aucune donnée réelle à afficher** en dev, même une fois parfaitement codés.

---

## Correspondance location ↔ usage

| Location | Consommée par | Exemple |
|---|---|---|
| `header` | `Header.vue` — menu principal (`getMenuItems()` récupère le menu assigné à cette location) | Accueil, À propos, Services, Contact |
| `footer` | `Footer.vue` — `getMenuItemsByLocation('footer', true)` | Liens rapides / quick links |

D'autres locations peuvent être créées si le template source en a besoin (ex. une barre de liens secondaire), mais `header`/`footer` couvrent la grande majorité des cas observés dans les composants de ce projet.

---

## Ordre des commandes

### 1. Locations et taxonomie (si le menu a des sous-menus stylés différemment)

```bash
creopse menu location-add header --description "en:Site header menu"
creopse menu location-add footer --description "en:Site footer menu"
```

Ne créer `item-group-add`/`item-type-add` que si le template source distingue visuellement certains items (ex. un item "dropdown" stylé différemment) — ne pas les créer par défaut si le menu est plat.

### 2. Le menu, assigné à sa location

```bash
creopse menu add main --title "en:Main Menu" --title "fr:Menu Principal" --location header
creopse menu add footer-links --title "en:Footer Links" --location footer
```

### 3. Les items, pointant vers les pages créées à l'étape 4

```bash
creopse menu item-add main --title "en:Home" --title "fr:Accueil" --page home --target-type page-link --position 1
creopse menu item-add main --title "en:About" --title "fr:À propos" --page about --target-type page-link --position 2
creopse menu item-add main --title "en:Contact" --title "fr:Contact" --page contact --target-type page-link --position 3
```

- `--target-type page-link` + `--page <name>` : lien vers une page créée à l'étape 4 — c'est le cas très majoritaire dans ce workflow.
- `--target-type external-link` + `--url` : uniquement pour un lien externe réel (réseaux sociaux dans un menu, lien vers une plateforme tierce) — ne pas utiliser pour les liens internes du site.
- `--target-type content-link` + `--content-type content-model` + `--content-id <id>` : lien direct vers un item de modèle de contenu (ex. une fiche Service précise) plutôt que vers une page générique. **Attention à l'ordre** : les modèles de contenu et leurs items ne sont créés qu'à l'étape 7, donc **après** cette étape 6 — un item de menu `content-link` ne peut pas encore être créé à ce stade. Si le template source en a besoin (rare — la nav principale pointe presque toujours vers des pages), différer la création de ces items-là spécifiquement et revenir compléter le menu en un second passage juste après l'étape 7, plutôt que d'inventer un `--content-id` provisoire.
- `--parent <id>` : pour un item enfant d'un dropdown, avec `--menu-item-type dropdown` sur le groupe concerné si une distinction visuelle existe.
- `--section-key` : pour un lien d'ancrage vers une section précise d'une page (scroll interne), si le template source en a besoin.

### 4. Menu de pied de page

```bash
creopse menu item-add footer-links --title "en:Home" --page home --target-type page-link --position 1
creopse menu item-add footer-links --title "en:Services" --page services --target-type page-link --position 2
```

---

## Retrouver les IDs générés pour les champs `menu-item-link`

Les fake data générées à l'étape 8 pour des champs `menu-item-link` référencent des items de menu par ID numérique (voir règle 9 de `field-types.md` pour le choix `menu-item-link` vs `text`). Après création des items ci-dessus, noter les IDs retournés (sortie CLI, ou requête `database-query` si Laravel Boost est disponible sur le projet — voir `media-conventions.md` pour le principe) dans `.creopse/menus/<location>.json`, pour réutilisation directe lors de la génération des fake data de section.

```json
{
  "location": "header",
  "menu": "main",
  "items": [
    { "id": 1, "title": "Home", "page": "home" },
    { "id": 2, "title": "About", "page": "about" },
    { "id": 3, "title": "Contact", "page": "contact" }
  ]
}
```

---

## Point de validation

Présenter la structure de menu complète (locations, items, hiérarchie éventuelle) avant exécution — ces commandes créent des entrées en base consommées immédiatement par Header/Footer.
