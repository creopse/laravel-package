# Types de champs — structures de données Creopse

À consulter à l'étape 8 lors de la définition de `data.json` / `settings.json` pour chaque section.

## Liste exhaustive des types

### Champs texte

| Type | Usage |
|---|---|
| `text` | Chaîne non traduisible : URL, nom propre, donnée technique. |
| `i18n-text` | Chaîne traduisible courte (titre, label, tagline). |
| `textarea` | Zone de texte non traduisible (rare). |
| `i18n-textarea` | **Ne jamais utiliser.** Voir règle ci-dessous. |
| `editor` | Éditeur riche non traduisible (rare). |
| `i18n-editor` | Éditeur riche traduisible — **type canonique pour tout champ description**. |

### Champs numériques/booléens

`number`, `checkbox`, `switch`, `slider`, `range-slider`.

### Champs de sélection

`single-select`, `multi-select`.

### Champs de date

`date`, `daterange`, `datetime`, `datetimerange`, `year`, `yearrange`, `month`, `monthrange`, `quarter`, `quarterrange`, `week`.

### Champs média

`image`, `gallery`, `audio`, `video`, `document`, `file`.

### Contenu news

`news-article`, `news-articles`, `news-category`, `news-categories`, `news-tag`, `news-tags`.

### Champs icône/couleur

`icon`, `icons`, `color`, `gradient`.

### Contenu spécial

| Type | Usage |
|---|---|
| `content-model-item` | Référence vers un item d'un modèle de contenu (ex : service parent). |
| `content-model-items` | Référence vers plusieurs items d'un modèle de contenu. |
| `menu-item-link` | Lien pour boutons CTA/navigation. **Type "hybride" depuis une évolution récente** : supporte à la fois une référence à un item de menu (ID numérique) et une URL brute — voir règle de choix ci-dessous. |

### Champs liste

`list`, `i18n-list`, `albums`.

## Règles d'usage strictes (non négociables sur ce projet)

1. **`i18n-editor` est le type canonique pour tout champ de description**, quelle que soit sa longueur. Ne jamais utiliser `i18n-textarea` — même pour un texte court, si le champ est destiné à contenir du HTML riche ou une description substantielle, c'est `i18n-editor`.
2. **`i18n-text`** pour toute chaîne traduisible courte et non formatée (titres, labels, taglines, noms de boutons).
3. **`text`** pour tout ce qui n'est pas traduisible : URLs, noms propres, données techniques.
4. **Champs de formulaire soumis par l'utilisateur** (contact, newsletter) : toujours `text`/`checkbox`, jamais `i18n-*`. Ces valeurs sont saisies par le visiteur, pas gérées par l'admin multilingue.
5. **Noms propres** (nom de client, marque) : `text`, jamais `i18n-text`.
6. **Structures plates plutôt que collections** quand le nombre de sous-éléments est fixe (ex : deux boutons par slide → quatre champs singletons plats `btnOneLabel`/`btnOneUrl`/`btnTwoLabel`/`btnTwoUrl`, pas une collection de boutons).
7. **Pas de double saisie** : catégories/tags dans un contexte blog/news viennent de données calculées (`loadArticles`), jamais dupliqués en collection de section.
8. **Ne jamais dupliquer une donnée globale déjà accessible via `getAppInformationValue`** dans une structure de section. Liste exhaustive des clés disponibles (`AppInformationKey`) :
   `name`, `icon`, `oneColorIcon`, `logo`, `oneColorLogo`, `phone`, `email`, `address`, `postalCode`, `description`, `primaryColor`, `secondaryColor`, `accentColor`, `facebook`, `twitter`, `instagram`, `whatsapp`, `linkedin`, `youtube`, `pinterest`, `snapchat`, `tiktok`, `telegram`, `discord`, `reddit`, `tumblr`, `vimeo`, `twitch`, `github`, `dribbble`, `behance`, `medium`, `stackOverflow`, `threads`, `messenger`, `playstore`, `appstore`, `additionalInfo`.
   Si un champ de section semble faire doublon avec l'une de ces clés, consommer `getAppInformationValue('<clé>')` directement dans le composant plutôt que de créer un champ de section redondant. Les clés de réseaux sociaux (`facebook`, `twitter`, etc.) sont notamment celles bouclées via `useHelper().socialNetworks` (cf. pattern Header/Footer dans `section-patterns.md`).
9. **Liens de navigation (`menu-item-link` vs `text`)** : `menu-item-link` supporte désormais aussi bien un item de menu qu'une URL brute — ce n'est donc plus un indicateur binaire "lien interne = menu-item-link / lien externe = text". Choisir selon l'usage réel observé dans les exemples du projet plutôt que par défaut systématique :
   - Si le lien doit rester pilotable/éditable depuis la gestion des menus (cohérence de navigation globale, CTA de header) → `menu-item-link`.
   - Si le composant appelle directement `openLink(champ)` sur la valeur sans passer par `getLinkFromMenuItemId`/`getMenuHref` (cas observé sur des CTA de section autonomes type Testimonials `btnUrl`, Projects `moreLinkUrl`, Contact `mapsUrl`) → `text` reste légitime, ce n'est pas une erreur de conception.
   - En cas de doute, regarder comment le champ est consommé dans le composant : résolution via le système de menu → `menu-item-link` ; usage direct comme chaîne URL → `text` accepté.

## Format de rendu associé

- `i18n-editor` → rendu avec `v-html="rHtml(field)"`.
- `i18n-text` → rendu avec `{{ tr(field) }}`.
- `text` (URL, nom) → rendu direct, pas de `tr()`.

## Format de sortie attendu pour les fausses données (fake data)

Chaque type de champ a un format JSON précis à respecter dans `.creopse/fake-data/<NomSection>.json` :

| Type | Format de la valeur |
|---|---|
| `i18n-text` / `i18n-editor` | Chaîne JSON échappée contenant un objet `{"fr":"...","en":"..."}`. Pour `i18n-editor`, le contenu inclut des balises HTML (`<p>`, etc.). |
| `text` | Chaîne brute (URL, nom, etc.). |
| `image` / `gallery` | URL d'image de test (ex. `https://picsum.photos/{largeur}/{hauteur}?random={slug}`). |
| `icon` | SVG inline complet (viewBox 0 0 32 32 par convention sur ce projet). |
| `menu-item-link` | Selon le cas d'usage réel du champ (voir règle 9 ci-dessus) : un ID numérique (référence vers un item de menu existant) **ou** une URL brute directement utilisable. Vérifier comment le composant consomme la valeur avant de choisir le format des fake data. |
| `checkbox` / `switch` | `true`/`false`. |
| `content-model-item` | Un ID numérique. |

Toujours produire les fake data en respectant la structure exacte définie dans `data.json` (mêmes clés, même imbrication `index` + collections), et toujours en bilingue FR/EN cohérent avec `.creopse/context.md`.
