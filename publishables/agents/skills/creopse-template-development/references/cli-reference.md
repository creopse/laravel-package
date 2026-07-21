# Référence CLI Creopse

Référence complète de `@creopse/cli`, utilisée à travers toutes les étapes du workflow (`SKILL.md`) à partir de l'étape 2. Ce document couvre les groupes de commandes réellement utilisés par cette skill : `section`, `widget`, `page`, `content-model`, `menu`, `media`, `base-info`. Le groupe `plugin` (scaffolding de classes Laravel dans un plugin) n'est **pas couvert** par cette skill — hors périmètre du template building front, voir note en fin de document.

## Conventions générales

- **Alias de groupe** : `sec` ↔ `section`, `wid` ↔ `widget`, `pag` ↔ `page`, `cm` ↔ `content-model`, `men` ↔ `menu`, `med` ↔ `media`, `info` ↔ `base-info`.
- **Alias de sous-commande** : chaque paire `add`/`make`, `remove`/`delete`, `edit`/`update` est équivalente.
- **Options JSON** (`--data`, `--settings`, `--data-structure`, `--settings-structure`, `--metadata`) acceptent soit une chaîne JSON inline, soit une référence `@chemin/fichier.json` (le préfixe `@` charge le fichier).
- **Options localisées** (`--title`, `--description`, `--link-title`) sont répétables et prennent une paire `locale:valeur`, ex. `--title "en:Home"` `--title "fr:Accueil"`.

⚠️ **Préfixe `@` obligatoire pour un chemin de fichier.** La CLI ne peut pas deviner si la valeur passée est du JSON littéral ou un chemin à lire — sans marqueur, elle tentera de parser le chemin lui-même comme JSON et échouera :

```bash
--data-structure @.creopse/structures/Header/data.json
```

Ne jamais injecter le JSON inline via une substitution de commande (`--data-structure "$(cat fichier.json)"`) : ça reproduit exactement le problème d'échappement/volumétrie que le mécanisme `@chemin` est censé éviter.

---

## `creopse install`

**Non utilisé par cette skill** — le projet Laravel avec Creopse est un prérequis déjà en place (voir `SKILL.md`). Mentionné ici pour complétude uniquement :

```bash
creopse install -t vue      # ou -t react
```

---

## `creopse section` (alias `sec`) — étape 5 et étape 8

| Sous-commande | Alias | Description |
|---|---|---|
| `add <name...>` | `make` | Ajoute une ou plusieurs sections (composant + entrée DB) |
| `remove <name...>` | `delete` | Supprime une ou plusieurs sections (`-f/--force`) |
| `edit <name>` | `update` | Met à jour le titre (par locale), la structure de données et/ou de réglages |

Options `add` (un seul nom à la fois) : `-t/--title <locale:value>` (répétable), `--data-structure <json|@chemin>`, `--settings-structure <json|@chemin>`.
Options `edit` : mêmes options que `add`.

```bash
creopse section add Header Hero Features Services Testimonials Footer Contact
creopse section edit Header \
  --data-structure @.creopse/structures/Header/data.json \
  --settings-structure @.creopse/structures/Header/settings.json
```

## `creopse widget` (alias `wid`) — étape 5

| Sous-commande | Alias | Description |
|---|---|---|
| `add <name...>` | `make` | Ajoute un ou plusieurs widgets |
| `remove <name...>` | `delete` | Supprime un ou plusieurs widgets (`-f/--force`) |

Pas d'option `--data-structure` : les widgets n'ont pas de structure de données par nature.

```bash
creopse widget add Preloader ScrollProgress
```

---

## `creopse page` (alias `pag`) — étape 4 et étape 9

Une page est une entité top-level (titre, contenu optionnel, position d'affichage). Les sections ne sont **pas** créées avec la page — elles sont attachées séparément via les sous-commandes d'instance ci-dessous, qui contrôlent la donnée, l'ordre et la visibilité par instance.

| Sous-commande | Alias | Description |
|---|---|---|
| `add <name>` | `make` | Crée une page vide (étape 4) |
| `edit <name>` | `update` | Met à jour titre, contenu et/ou position |
| `remove <name>` | `delete` | Supprime une page (`-f/--force`) |
| `attach-section <page> <section>` | | Attache une instance de section à une page (étape 9) |
| `detach-section <page> <section>` | | Détache une instance spécifique (`-f/--force`) |
| `order-sections <page>` | | Définit l'ordre d'affichage des sections d'une page |
| `set-section-source <page> <section>` | | Fixe/efface la page source de données d'une instance |
| `toggle-section-status <page> <section>` | | Active/désactive une instance |
| `update-section-content <page> <section>` | `edit-section-content` | Met à jour le titre/data/settings d'une instance |

Options `add`/`edit` : `-t/--title <locale:value>` (répétable), `--content <texte>`, `--position <nombre>` (défaut `add` : `0`).
Options `attach-section` : `--link-id <id>` (défaut `default`), `--link-title <locale:value>` (répétable), `--data <json|@chemin>`, `--settings <json|@chemin>`, `--source-page <name>`, `--source-link-id <id>` (défaut `default`).
Options `order-sections` : `--item <section:link-id>` (répétable, dans l'ordre voulu).
Options `set-section-source` : `--link-id <id>`, `--source-page <name>` (`none` pour effacer), `--source-link-id <id>`.
Options `toggle-section-status` : `--link-id <id>`, `--disabled <bool>` (défaut `true`).
Options `update-section-content` : `--link-id <id>`, `--link-title <locale:value>` (répétable), `--data <json|@chemin>`, `--settings <json|@chemin>`.

```bash
# Étape 4
creopse page add home --title "en:Home" --title "fr:Accueil" --position 1

# Étape 9 — attachement, avec deux instances de la même section à des emplacements différents
creopse page attach-section home Hero --link-id top --link-title "en:Hero Top" --data @.creopse/fake-data/Hero.json
creopse page attach-section home Hero --link-id bottom --data '{"heading":"Footer hero"}'

# Réordonner et désactiver l'instance du bas
creopse page order-sections home --item "Hero:top" --item "Hero:bottom"
creopse page toggle-section-status home Hero --link-id bottom --disabled true

# Sourcer l'instance du bas depuis une autre page
creopse page set-section-source home Hero --link-id bottom --source-page landing

# Détacher
creopse page detach-section home Hero --link-id top --force
```

Voir `references/pages-conventions.md` pour le détail des cas d'usage propres à ce workflow.

---

## `creopse content-model` (alias `cm`) — étape 7

Un modèle de contenu définit une structure ; les items sont les enregistrements réels.

| Sous-commande | Alias | Description |
|---|---|---|
| `add <name> <intent> <access-scope>` | `make` | Crée un modèle de contenu |
| `remove <name>` | `delete` | Supprime un modèle de contenu (`-f/--force`) |
| `edit <name>` | `update` | Met à jour un modèle de contenu |
| `item-add <content-model>` | `item-make` | Crée un item |
| `item-remove <id>` | `item-delete` | Supprime un item (`-f/--force`) |
| `item-edit <id>` | `item-update` | Met à jour un item |

- `intent` : `editorial-content` ou `user-data`. `access-scope` : `internal` ou `user-editable`. **Voir `references/content-models-conventions.md` pour le couple à utiliser selon le type de contenu — convention spécifique à ce projet, à ne pas déduire du seul nom des options.**
- Options `add` : `--title`/`--description` (répétables), `--image <valeur>`, `--data-structure <json|@chemin>`, `--title-field-name <valeur>`, `--has-permalink <bool>`.
- Options `edit` : mêmes que `add`, plus `--intent`, `--access-scope`.
- Options `item-add` : `--title` (répétable), `--data <json|@chemin>`, `--is-active <bool>` (défaut `true`), `--created-by-type <valeur>` (`user`/`admin`/`system`, défaut `system`).
- Options `item-edit` : `--content-model <name>` (déplacer l'item), `--title` (répétable), `--data <json|@chemin>`, `--is-active <bool>`, `--created-by-type <valeur>`.

```bash
creopse content-model add service editorial-content internal \
  --title "en:Service" --title "fr:Service" \
  --data-structure @.creopse/content-models/Service/data-structure.json \
  --title-field-name name --has-permalink true

creopse content-model item-add service --title "en:Energy Audit" --data @.creopse/content-models/Service/items/energy-audit.json
creopse content-model item-edit 12 --title "en:Renamed"
creopse content-model remove service --force
```

Voir `references/content-models-conventions.md` pour le détail propre à ce workflow.

---

## `creopse menu` (alias `men`) — étape 6

Un menu est assigné à une **location** (`header`, `footer`...) ; les **items** sont les entrées de navigation ; **groupes** et **types** servent à catégoriser/styler les items (dropdowns notamment).

| Sous-commande | Alias | Description |
|---|---|---|
| `add <name>` | `make` | Crée un menu |
| `remove <name>` | `delete` | Supprime un menu (`-f/--force`) |
| `edit <name>` | `update` | Met à jour un menu |
| `item-add <menu>` | `item-make` | Crée un item de menu |
| `item-remove <id>` | `item-delete` | Supprime un item (`-f/--force`) |
| `item-edit <id>` | `item-update` | Met à jour un item |
| `item-group-add/-remove/-edit <name>` | `item-group-make/-delete/-update` | Groupes de menu |
| `item-type-add/-remove/-edit <name>` | `item-type-make/-delete/-update` | Types de menu |
| `location-add/-remove/-edit <name>` | `location-make/-delete/-update` | Locations de menu |

Options `menu add/edit` : `--title`/`--description` (répétables), `--data <json>`, `--location <name>` (`none` pour désassigner en edit).
Options `item-add/item-edit` : `--title`/`--description` (répétables), `--path`, `--url`, `--controller`, `--parent <id>` (`none` pour edit), `--position`, `--target-type` (`external-link`/`page-link`/`content-link`), `--is-active`/`--is-visible` (bool), `--color`, `--icon`, `--image`, `--page <name>` (`none` pour edit), `--section-key`, `--menu-item-group`, `--menu-item-type`, `--content-type` (`news-tag`/`news-category`/`news-article`/`content-model`), `--content-id`.
Options groupe/type/location `add` : `--description` (répétable). `edit` : `--new-name`, `--description`.

```bash
creopse menu location-add header --description "en:Site header"
creopse menu add main --title "en:Main Menu" --location header
creopse menu item-add main --title "en:Home" --page home --target-type page-link --position 1
creopse menu item-add main --title "en:About" --path "/about" --parent 1 --menu-item-type dropdown
```

Voir `references/menu-conventions.md` pour le détail propre à ce workflow.

---

## `creopse media` (alias `med`) — étape 2

Un **fichier** vit sur le disque, un **enregistrement** (`MediaFile`) est l'entrée en base — suppression indépendante possible des deux.

| Sous-commande | Alias | Description |
|---|---|---|
| `upload <path>` | `add` | Upload un fichier local |
| `replace <id> <path>` | | Remplace le fichier sous-jacent d'un enregistrement |
| `remove-file <path>` | | Supprime un fichier du disque (`-f/--force`) |
| `remove-record <id>` | | Supprime un enregistrement `MediaFile` (`--permanent`, `-f/--force`) |
| `restore <id>` | | Restaure un enregistrement soft-deleted |
| `purge` | | Supprime définitivement tous les enregistrements soft-deleted (`-f/--force`) |

Options `upload` : `--folder <name>` (défaut `uploads`), `--filename <name>`, `--metadata <json>`, `--sender <id>`.
Options `replace` : `--folder`, `--filename`, `--metadata`.
`remove-record --permanent` force la suppression définitive (sinon soft delete, restaurable).

```bash
creopse media upload ./assets/logo.png --folder branding --filename "Company Logo"
creopse media replace 42 ./banner-v2.jpg
creopse media remove-record 42
creopse media restore 42
```

Voir `references/media-conventions.md` pour le détail propre à ce workflow, notamment la récupération du chemin définitif après upload.

---

## `creopse base-info` (alias `info`) — étape 3

| Sous-commande | Description |
|---|---|
| `update <pairs...>` | Met à jour les entrées d'information de base avec des paires `key=value` (valeur possible en `@chemin/fichier`) |

```bash
creopse base-info update name="My App" email=hello@app.com phone="+33123456789"
creopse base-info update description=@description.txt
creopse base-info update facebook="https://facebook.com/myapp" twitter="https://twitter.com/myapp"
```

Voir `references/base-info-conventions.md` pour la liste des clés et leur correspondance avec `context.md`.

---

## `creopse plugin` (alias `plg`) — hors périmètre de cette skill

Génère des classes Laravel (modèles, contrôleurs, migrations, events, listeners, jobs, requests, seeders) **à l'intérieur d'un plugin**, pas dans l'app hôte. Relève du développement backend custom (ex. logique métier derrière un formulaire), pas du template building front couvert par cette skill. Ne pas utiliser dans le cadre de ce workflow — si un besoin de ce type apparaît sur un projet, le traiter en dehors de cette skill.

---

## Format des fichiers `--data-structure` (sections)

Le fichier passé en argument doit contenir un objet avec deux clés : `index` (tableau de champs singletons) et le reste des clés du niveau racine représentant chaque collection. Exemple :

```json
{
  "index": [
    {"key":"title","type":"i18n-text","label":"{\"en\":\"Title\",\"fr\":\"Titre\"}","options":[],"required":true,"settings":{}},
    {"key":"text","type":"i18n-editor","label":"{\"en\":\"Text\",\"fr\":\"Texte\"}","options":[],"required":false,"settings":{}}
  ],
  "features": {
    "key": "features",
    "title": "{\"en\":\"Features\",\"fr\":\"Caractéristiques\"}",
    "items": [
      {"key":"icon","type":"icon","label":"{\"en\":\"Icon\",\"fr\":\"Icône\"}","options":[],"required":true,"settings":{}},
      {"key":"title","type":"i18n-text","label":"{\"en\":\"Title\",\"fr\":\"Titre\"}","options":[],"required":true,"settings":{}},
      {"key":"text","type":"i18n-editor","label":"{\"en\":\"Text\",\"fr\":\"Texte\"}","options":[],"required":true,"settings":{}}
    ]
  }
}
```

Voir `field-types.md` pour la liste exhaustive des `type` disponibles et leurs règles d'usage. Le fichier `--data-structure` d'un modèle de contenu (`content-model add`) suit uniquement la partie "singletons" de ce format (un tableau de champs, pas de clé `index` imbriquée) — voir `content-models-conventions.md`.

---

## Exemple de `app.blade.php` cible (référence étape 1)

```blade
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Meta -->
    @if(isset($page['props']['meta']) || isset($page['props']['defaultMeta']))
    <title>{{ data_get($page['props'], 'meta.title', data_get($page['props'], 'defaultMeta.title')) }}</title>
    <link rel="icon" type="image/png" href="{{ data_get($page['props'], 'meta.favicon', data_get($page['props'], 'defaultMeta.favicon')) }}" />

    <meta name="description" content="{{ data_get($page['props'], 'meta.description', data_get($page['props'], 'defaultMeta.description')) }}" />
    <link rel="canonical" href="{{ data_get($page['props'], 'meta.url', data_get($page['props'], 'defaultMeta.url')) }}" />

    <meta property="og:title" content="{{ data_get($page['props'], 'meta.title', data_get($page['props'], 'defaultMeta.title')) }}" />
    <meta property="og:description" content="{{ data_get($page['props'], 'meta.description', data_get($page['props'], 'defaultMeta.description')) }}" />
    <meta property="og:image" content="{{ data_get($page['props'], 'meta.image', data_get($page['props'], 'defaultMeta.image')) }}" />
    <meta property="og:url" content="{{ data_get($page['props'], 'meta.url', data_get($page['props'], 'defaultMeta.url')) }}" />
    <meta property="og:type" content="website" />

    <meta name="twitter:title" content="{{ data_get($page['props'], 'meta.title', data_get($page['props'], 'defaultMeta.title')) }}" />
    <meta name="twitter:description" content="{{ data_get($page['props'], 'meta.description', data_get($page['props'], 'defaultMeta.description')) }}" />
    <meta name="twitter:image" content="{{ data_get($page['props'], 'meta.image', data_get($page['props'], 'defaultMeta.image')) }}" />
    <meta name="twitter:card" content="summary_large_image" />
    @endif

    <style>
        :root {
            --inertia-progress-color: {{ data_get($page['props'], 'config.frontend.progressColor', '#29d') }};
        }
    </style>

    <!-- CSS des plugins du template HTML source, déplacés dans public/assets -->
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/fontawesome-free.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/magnific-popup.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/slick-slider.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/sidebar.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/nice-select.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/swiper-slider.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}">

    @include('feed::links')

    @vite(['resources/css/app.css','resources/js/app.ts'])
    @routes
    @inertiaHead
</head>
<body>
    @inertia

    <!-- JS des plugins du template HTML source -->
    <script src="{{ asset('assets/js/plugins/jquery-3-7-1.min.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/waypoints.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/counter.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/slick-slider.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/swiper-slider.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/aos.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/magnific-popup.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/nice-select.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/sidebar.js') }}"></script>
</body>
</html>
```

**Attention** : les scripts JS de plugins servent surtout les comportements que le pattern Creopse remplace ensuite par du Vue natif (voir `vue-conventions.md` — pas de Bootstrap JS pour les carousels/modals/accordéons). Certains scripts (jQuery, waypoints, counter, AOS) peuvent néanmoins rester utiles pour des animations au scroll non gérées autrement ; ne pas les retirer par réflexe, seulement ceux qui font doublon avec un pattern Vue-natif imposé (Bootstrap JS pour carousel/modal/collapse notamment).
