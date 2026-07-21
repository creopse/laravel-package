---
name: creopse-template-development
description: Convertit un template HTML statique en template Creopse complet et fonctionnel en dev (base information, médias réels, pages, composants Vue de section/widget, structures de données JSON, modèles de contenu, navigation/menus, fausses données bilingues, assemblage final des pages), en suivant un workflow en 9 étapes. Utiliser cette skill dès qu'un template HTML est fourni pour intégration Creopse, dès qu'on parle de découper un index.html en sections, de créer des sections/widgets/pages/menus/modèles de contenu Creopse, ou de générer des structures de données JSON et des fake data pour une section ou un modèle de contenu Creopse — même si l'utilisateur ne mentionne pas explicitement "skill" ou "template".
---

# Creopse Template Development

Conception de templates Creopse (Vue 3 + TypeScript + Laravel/Inertia) à partir d'une base HTML statique. Cette skill couvre tout le pipeline, du découpage du template source jusqu'à l'assemblage final de pages fonctionnelles en base : médias, informations de base, pages, sections/widgets, modèles de contenu, navigation, complétion des composants, et attachement final.

Prérequis : le projet Laravel avec Creopse est déjà installé et accessible (cette skill n'effectue pas l'installation initiale — elle suppose un projet en place).

`references/vue-api-reference.md` et `references/utils-api-reference.md` documentent la surface d'API réelle des packages `@creopse/vue`/`@creopse/utils` (signatures exactes de chaque composable, helper, composant, type) — à consulter en cas de doute sur une signature, en complément de `vue-conventions.md`/`section-patterns.md` qui documentent des patterns d'usage plutôt que l'API elle-même. `references/react-api-reference.md` est fourni pour référence croisée mais n'est pas utilisé par cette skill (stack Vue uniquement).

## Détection de l'environnement Node avant toute commande shell

Avant la première commande `npm`/`yarn`/`pnpm`/`bun` de cette skill — ce qui peut arriver dès l'étape 5 (scaffolding) ou plus tôt si une vérification est nécessaire, pas seulement à l'étape 8 — identifier le gestionnaire de paquets réellement utilisé par le projet en inspectant le fichier de lock présent à la racine, jamais par défaut :

| Fichier de lock trouvé | Gestionnaire |
|---|---|
| `package-lock.json` | npm |
| `yarn.lock` | yarn |
| `pnpm-lock.yaml` | pnpm |
| `bun.lock` / `bun.lockb` | bun |

Lire ensuite `package.json` (clé `scripts`) pour identifier les noms réels des commandes de lintage, formatage et vérification TypeScript (`lint`, `format`, `type-check`, `typecheck`, `tsc`, `check`... les noms varient d'un projet à l'autre, ne pas les supposer). Ces commandes sont utilisées à l'étape 8, point 6, pour valider chaque composant complété avant de le présenter à l'utilisateur.

## Zone de travail : `.creopse/`

Tous les artefacts de travail vivent dans `.creopse/` à la racine du projet Laravel :

```
.creopse/
├── html_template/            # template HTML source fourni par l'utilisateur (input, lecture seule)
├── context.md                 # contexte projet : client, secteur, ton éditorial, langues cibles,
│                               # coordonnées, réseaux sociaux, ET section dédiée "Pages" (liste des
│                               # pages à créer + sections à y attacher, si connues à l'avance)
├── base-info.json             # brouillon des paires clé/valeur pour `creopse base-info update` (étape 3)
├── media/
│   └── manifest.json          # mapping asset source → média uploadé (id, chemin définitif en base)
├── structures/
│   └── <NomSection>/
│       ├── data.json          # structure des singletons + collections (format CLI)
│       └── settings.json      # structure des réglages de section (si applicable)
├── content-models/
│   └── <NomModele>/
│       ├── data-structure.json
│       └── items/
│           └── <slug>.json    # fake data d'un item, prête pour `content-model item-add --data`
├── menus/
│   └── <location>.json        # définition menu + items pour une location (header, footer...)
└── fake-data/
    └── <NomSection>.json      # fausses données de section, prêtes pour `section edit --data-structure`
                                 # (au sens large : structure ET data, voir étape 8)
```

**Avant toute chose** : lire `.creopse/context.md` s'il existe. Il conditionne le ton, le secteur d'activité, la langue des fausses données, les coordonnées réelles à utiliser, et la liste des pages à créer — ne jamais générer de fake data générique type "Lorem Corp" ni inventer des pages au hasard si ce fichier donne un contexte réel. S'il n'existe pas ou si la section "Pages" y est absente, demander ces informations avant l'étape 4 plutôt que de les improviser.

**Chaque section a son propre dossier `structures/<NomSection>/`**, chaque modèle de contenu son propre dossier `content-models/<NomModele>/` — jamais de fichier JSON monolithique regroupant plusieurs entités. Ça permet des rewrites ciblés (principe déjà en vigueur sur ce projet) et un état inspectable indépendamment de la CLI.

---

## Vue d'ensemble du workflow

```
Étape 1 : Découpage du template
  └─ assets → public/assets, intégration dans app.blade.php

Étape 2 : Médias réels
  └─ upload des assets de marque fournis par le template source (logo, favicon, photos)

Étape 3 : Informations de base
  └─ creopse base-info update, à partir de context.md + médias uploadés à l'étape 2

Étape 4 : Pages
  └─ création des pages listées dans context.md (creopse page add)

Étape 5 : Scaffolding des sections et widgets (EN LOT)
  └─ analyse du body, classification section/widget, détection doublons,
     validation utilisateur, puis creopse section/widget add en masse

Étape 6 : Navigation (menus)
  └─ locations, menu(s), items pointant vers les pages créées à l'étape 4

Étape 7 : Modèles de contenu
  └─ création des content models référencés par les sections (Services, Projects, Team...)

Étape 8 : Complétion (SECTION PAR SECTION, avec pause de review après chaque section)
  └─ pour chaque section : coller/adapter le HTML → structure JSON → CLI submit →
     fake data → vérification lint/format/typecheck → pause

Étape 9 : Assemblage final des pages
  └─ attach-section (avec link-id si besoin), order-sections, toggle-section-status
```

Ne jamais sauter l'ordre : chaque étape qui touche la base de données (2, 3, 4, 5, 7, 9) doit être validée par l'utilisateur avant exécution des commandes CLI correspondantes — pas de retour en arrière simple sur ce type d'opération. L'étape 8 marque une pause après chaque section pour permettre une correction avant de propager une erreur sur les suivantes. L'étape 9 (attachement) est volontairement placée en toute fin de workflow, une fois que toutes les sections concernées ont leur structure et leurs fake data validées — pas d'attachement progressif section par section.

---

## Étape 1 — Découpage du template

1. Localiser le template HTML source dans `.creopse/html_template/`.
2. Déplacer tous les assets (`css/`, `js/`, `img/`, fonts, etc.) vers `public/assets` du projet Laravel, en conservant l'arborescence relative interne (`assets/css/plugins/...`, `assets/js/plugins/...`).
3. Adapter `app.blade.php` (ou l'équivalent trouvé dans le projet) pour y intégrer les balises `<link>`/`<script>` correspondant aux assets déplacés, **sans casser** le bloc meta/OG/Inertia déjà en place (`@vite`, `@routes`, `@inertiaHead`, `@inertia`, le bloc `<title>`/`og:*`/`twitter:*` conditionné par `$page['props']['meta']`).
   - Les CSS de plugins vont dans le `<head>`, avant `@vite(...)`.
   - Les JS de plugins vont juste avant `</body>`, après `@inertia`.
   - Voir `references/cli-reference.md` pour un exemple complet de `app.blade.php` cible.

Cette étape est mécanique — pas de point de validation nécessaire, sauf si des conflits de nommage d'assets sont détectés (deux fichiers `main.css` par exemple), auquel cas demander arbitrage.

---

## Étape 2 — Médias réels

Objectif : remplacer, pour les assets de marque réels fournis par le template source (logo, favicon, éventuellement photos officielles du client), les placeholders par de vrais médias uploadés — avant de renseigner les informations de base à l'étape 3, qui en a besoin.

Voir `references/media-conventions.md` (obligatoire à lire avant cette étape) pour : quels assets uploader vs garder en `picsum.photos`, comment récupérer le chemin définitif en base après upload, et le format du `manifest.json`.

Pas de pause de validation systématique ici (opération peu risquée, réversible), sauf ambiguïté sur quel fichier du template correspond au logo/favicon officiel — dans ce cas, demander confirmation avant upload.

---

## Étape 3 — Informations de base

Objectif : peupler les informations globales du site (`base-info`) consommées par quasi tous les composants (`getAppInformationValue('logo'|'phone'|'email'|'address'|'name'|'description'|réseaux sociaux)`), à partir de `.creopse/context.md` et des médias uploadés à l'étape 2.

Voir `references/base-info-conventions.md` (obligatoire à lire avant cette étape) pour la liste des clés, leur correspondance avec `context.md`, et la syntaxe `creopse base-info update`.

Ne pas générer de valeurs fictives pour les clés `base-info` — ce sont des informations réelles du client. Si `context.md` ne les fournit pas toutes, demander les valeurs manquantes plutôt que d'inventer un numéro de téléphone ou une adresse.

---

## Étape 4 — Pages

Objectif : créer les pages du site telles que listées dans la section dédiée de `.creopse/context.md`.

Voir `references/pages-conventions.md` (obligatoire à lire avant cette étape) pour le format attendu de cette section dans `context.md` et la syntaxe `creopse page add`.

**Point de validation obligatoire** : présenter à l'utilisateur la liste des pages déduites de `context.md` (nom, titre par locale, position) avant d'exécuter la moindre commande `creopse page add` — ces commandes créent des entrées en base. Si `context.md` ne liste aucune page, demander la liste avant de continuer plutôt que d'en déduire une depuis le template HTML seul.

Cette étape ne fait que créer les pages elles-mêmes (coquilles vides) — l'attachement des sections se fait en toute fin de workflow, à l'étape 9, une fois les sections scaffoldées (étape 5) et complétées (étape 8).

---

## Étape 5 — Scaffolding des sections et widgets

### 5.1 Analyse et classification

Parcourir l'intégralité du `<body>` de chaque fichier HTML de `.creopse/html_template/` et lister tous les blocs candidats à devenir une section ou un widget.

**Repérage des frontières de bloc** :

- Si le HTML contient des commentaires de démarcation (`<!--===== NOM STARTS =======-->` / `... ENDS ...`), s'appuyer dessus.
- **Sinon**, inférer les frontières via heuristiques structurelles : balises sémantiques (`<header>`, `<footer>`, `<nav>`, `<section>`), ruptures de classes racine thématiques (`hero-*`, `about-*`, `services-*`...), changements de contenu évidents. Dans ce cas, déduire le nom PascalCase du contenu visible (titre, classes CSS, contexte) plutôt que d'un commentaire absent.

**Classification section vs widget** :

- **Section** = contenu éditable/gérable par un admin (Header, Hero, Features, Services, Testimonials, Footer, Contact...) → nécessite une structure de données.
- **Widget** = bloc HTML statique sans besoin de gestion de contenu (Preloader, scroll-progress bar, cookie banner statique...) → **aucune structure de données**, HTML/Vue pur.

**Détection de doublons cross-fichiers** : si un bloc identique ou quasi identique (Header, Footer typiquement) apparaît dans plusieurs fichiers HTML du template, il ne doit être scaffoldé **qu'une seule fois**. Le signaler explicitement dans la liste proposée à l'utilisateur.

### 5.2 Validation avant scaffolding

Présenter à l'utilisateur la liste complète : nom PascalCase proposé, classification (section/widget), fichier(s) source(s), et signalement des doublons détectés. **Attendre confirmation avant d'exécuter la moindre commande CLI** — ces commandes créent des entrées en base de données, pas de retour en arrière simple.

### 5.3 Exécution en lot

Une fois validé, exécuter les commandes CLI en lot (voir `references/cli-reference.md` pour la syntaxe complète) :

```bash
creopse section add Header Hero Features Services Testimonials Footer Contact
creopse widget add Preloader ScrollProgress
```

Chaque section générée place son composant dans `resources/js/Sections/<NomSection>.vue`.
Chaque widget généré place son composant dans `resources/js/Widgets/<NomWidget>.vue`.

---

## Étape 6 — Navigation (menus)

Objectif : créer réellement les locations, menu(s) et items consommés par les composants Header/Footer (`getMenuItems()`, `getMenuItemsByLocation('footer')`, résolution `menu-item-link` via `getLinkFromMenuItemId`/`getMenuHref`) — sans cette étape, un Header scaffoldé n'a rien à afficher en dev.

Voir `references/menu-conventions.md` (obligatoire à lire avant cette étape) pour la correspondance locations/emplacements de composants, et la syntaxe `menu location-add` / `menu add` / `menu item-add`.

Les items pointent vers les pages créées à l'étape 4 (`--page <name>` / `--target-type page-link`) — cette étape doit donc bien venir après l'étape 4.

**Point de validation** : présenter la structure de menu proposée (locations, items, hiérarchie/dropdowns) avant exécution.

---

## Étape 7 — Modèles de contenu

Objectif : créer les modèles de contenu référencés par des champs `content-model-item`/`content-model-items` dans les sections à venir (Services, Projects, Team, offres de formation, etc.), avant de compléter les sections qui les consomment à l'étape 8 — pour que la fake data générée transite réellement par la CLI au lieu de rester à l'état de fichiers morts.

Voir `references/content-models-conventions.md` (obligatoire à lire avant cette étape) pour :
- Le choix `intent`/`access-scope` selon le type de contenu (contenu géré uniquement depuis l'administration vs contenu soumis par les utilisateurs).
- La structure de dossier `.creopse/content-models/<NomModele>/`.
- La syntaxe `content-model add` puis `content-model item-add --data @...`.

**Point de validation** : présenter la liste des modèles détectés comme nécessaires (déduits de l'inventaire des sections de l'étape 5.1, ou explicitement demandés par l'utilisateur) avant création.

---

## Étape 8 — Complétion, section par section

Traiter une seule section à la fois, dans cet ordre, puis marquer une pause avant de passer à la suivante :

1. **Coller le bloc HTML brut** correspondant dans le `<template>` du composant Vue généré (`resources/js/Sections/<NomSection>.vue`).
2. **Adapter aux conventions Creopse/Vue** — voir `references/vue-conventions.md` (obligatoire à lire avant cette étape) et `references/section-patterns.md` pour le pattern le plus proche du type de section traité (header, footer, slider, testimonials, news, contact, etc.). Pour la signature exacte de tout composable/helper utilisé (`useHelper()`, `useContent()`, `useMenu()`, `useNews()`, etc.) ou de tout helper pur (`formatDate`, `hexToRgba`, etc.), consulter `references/vue-api-reference.md` et `references/utils-api-reference.md` plutôt que de se fier uniquement aux extraits déjà cités dans `vue-conventions.md`/`section-patterns.md` — ces deux fichiers de conventions documentent des *patterns*, les fichiers `*-api-reference.md` documentent la *surface d'API* réelle des packages et font foi en cas de doute ou de signature non citée ailleurs.
3. **Définir la structure de données** (singletons `index` + collections, et `settings` si la section a des réglages d'affichage) — voir `references/field-types.md` pour la liste des types de champs disponibles, et notamment la règle de choix `menu-item-link` (type hybride, supporte item de menu **et** URL brute) vs `text`. Écrire le résultat dans :
   - `.creopse/structures/<NomSection>/data.json`
   - `.creopse/structures/<NomSection>/settings.json` (si applicable)
4. **Soumettre la structure via la CLI**, en passant les fichiers (pas de JSON inline en argument shell — trop fragile à l'échappement) :
   ```bash
   creopse section edit NomSection --data-structure @.creopse/structures/NomSection/data.json --settings-structure @.creopse/structures/NomSection/settings.json
   ```
   Le préfixe `@` est obligatoire pour indiquer à la CLI qu'il s'agit d'un chemin à lire, pas du JSON littéral (voir `references/cli-reference.md`).
5. **Générer les fausses données** bilingues (FR/EN) cohérentes avec `.creopse/context.md`, et les écrire dans `.creopse/fake-data/<NomSection>.json` — voir `references/fake-data-conventions.md` pour le format de sortie détaillé (snake_case, cohérence inter-sections, images/icônes, règle de régénération complète en cas de correction). Les champs `content-model-item`/`content-model-items` référencent les items créés à l'étape 7 ; les champs `menu-item-link` référencent les items créés à l'étape 6 — plus besoin de "signaler un besoin non résolu" à ce stade, ces entités existent déjà.
6. **Vérifier la qualité du code modifié** avant de passer à la suivante : exécuter les commandes de lint/format/typecheck du projet (gestionnaire de paquets et noms de commandes identifiés une fois pour toutes en tête de ce document, voir "Détection de l'environnement Node") sur les fichiers touchés par la section en cours, et corriger toute erreur avant la pause.
7. **Pause** : présenter le composant, la structure et les fake data à l'utilisateur avant de passer à la section suivante.

Les widgets ne suivent que les points 1, 2 et 6 (pas de structure de données, pas de fake data).

---

## Étape 9 — Assemblage final des pages

Une fois toutes les sections d'une page traitées à l'étape 8, assembler la page :

1. **Attacher les sections** à chaque page créée à l'étape 4, avec les fake data de l'étape 8 :
   ```bash
   creopse page attach-section home Hero --link-id top --data @.creopse/fake-data/Hero.json
   ```
   Utiliser `--link-id` distinct si une même section (ex. Testimonials) doit apparaître avec des données différentes sur plusieurs pages/emplacements.
2. **Ordonner les sections** de chaque page dans l'ordre voulu (`page order-sections`).
3. **Activer/désactiver des instances** si besoin (`page toggle-section-status`), par exemple pour une section présente en base mais pas encore prête à être publiée.

Voir `references/pages-conventions.md` pour la syntaxe complète et les cas d'usage de `set-section-source` (mutualiser les données d'une instance de section entre deux pages, ex. un Footer identique partout).

**Point de validation** : présenter l'ordre final des sections par page avant exécution — ces commandes déterminent ce qui est visible en production/dev sur chaque page.
