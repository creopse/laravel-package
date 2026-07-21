# Patterns de section

Consulter la sous-section correspondant au type de section traité à l'étape 8.2, en complément de `vue-conventions.md`.

## Table des matières

- [Header](#header)
- [Footer](#footer)
- [Slider / Hero carousel](#slider--hero-carousel)
- [Testimonials](#testimonials)
- [Services (liste + détail)](#services-liste--détail)
- [Projects (liste + détail)](#projects-liste--détail)
- [News / Blog (liste + détail)](#news--blog-liste--détail)
- [Contact](#contact)
- [Banner (bandeau de page interne)](#banner-bandeau-de-page-interne)
- [Section générique avec collection](#section-générique-avec-collection)

---

## Header

- Menu principal via `useMenu().getMenuItemsByLocation('header', true)` (pas de composable dédié à créer pour ça — ce n'est pas fourni par le template, et la logique reste simple : filtrage des items top-level, regroupement des sous-items par `parentId`, et détermination de l'item actif par comparaison entre `item.path` et `useHelper().currentRoutePath` — à écrire directement dans `Header.vue`, ou en composable local si le développeur préfère extraire, mais ce n'est pas une convention à imposer par le skill).
- Rendu de chaque item (principal et sous-menu) via le pattern transverse `getMenuHref(item)` + `@click.prevent="openMenu(item)"` (`useMenu()`) — voir `vue-conventions.md#rendu-de-liens-de-menu`. Ne jamais câbler un `href` en dur sur un item de menu.
- Sous-menus (`item.subMenuItems`) rendus en dropdown Vue-natif (pas de `data-bs-toggle` fonctionnel — l'attribut peut rester pour le style Bootstrap CSS mais aucun JS Bootstrap ne doit le piloter).
- Sidebar mobile : ouverture/fermeture via manipulation directe de `style.width` sur une ref DOM (`document.getElementById('mySidenav')`), pas de classe Bootstrap offcanvas.
- Sélecteur de langue conditionné par `headerSettings?.displayRules?.displayLangSelector` (donc prévoir ce champ dans `settings.json` si le header source a un sélecteur de langue) — implémentation via `languages`/`updateLang` de `useHelper()` et `getActiveLanguage()` (auto-importé de `laravel-vue-i18n`, pas un composable Creopse), voir `vue-conventions.md#sélecteur-de-langue-header`.
- Bouton CTA optionnel : paire `btnText`/`btnLink` (`menu-item-link` — ici résolu via `getLinkFromMenuItemId`, donc bien un ID de menu dans ce cas précis), rendu conditionnel (`v-if="tr(headerData?.btnText) && headerData?.btnLink"`).
- Injection de `--thm-base` en CSS variable dans `onMounted` (cf. `vue-conventions.md`).
- Réseaux sociaux : boucle sur `useHelper().socialNetworks`, chaque réseau conditionné par la présence de la valeur correspondante dans `getAppInformationValue(network.name)`.

## Footer

- Liens de menu via `getMenuItemsByLocation('footer', true)`, rendus avec le même pattern `getMenuHref`/`openMenu` que le Header (voir `vue-conventions.md#rendu-de-liens-de-menu`).
- Newsletter : état local (`ref('')`) + `useNewsletter()` → `subscribeEmail(email, onSuccess, onError)`, feedback via `useMessage()` (Naive UI), spinner via `n-spin :show="isLoading"`.
- Coordonnées de contact via `getAppInformationValue('phone'|'email'|'address')`, chaque bloc conditionné par la présence de la valeur.
- Copyright : `new Date().getFullYear()` + `getAppInformationValue('name')` + un champ `copyrightText` (i18n-text) pour le texte additionnel.
- Réseaux sociaux : même pattern que le Header.

## Slider / Hero carousel

- **Jamais Swiper pour un hero plein écran avec overlay texte** — implémentation carousel maison : `ref(currentIndex)`, `next()`/`prev()`, autoplay `setInterval` géré `onMounted`/`onUnmounted`, pause au survol (`@mouseenter="stopAutoplay"` / `@mouseleave="startAutoplay"`).
- Collection `slides` avec structure plate par slide : `image`, `subtitle` (i18n-text), `title` (i18n-text), `titleBreak` (number, optionnel), et **paire de boutons en champs plats** : `btnOneLabel`/`btnOneUrl`, `btnTwoLabel`/`btnTwoUrl` — pas de sous-collection de boutons puisque le nombre est fixe (règle `field-types.md` point 6), rendus via le pattern CTA `menu-item-link` (`vue-conventions.md#boutons-cta-en-menu-item-link-getlinkfrommenuitemid--openlink`).
- Réglage `autoplayInterval` dans `settings.json` (défaut 5000ms si absent).

## Testimonials

- Bloc contenu à gauche (uptitle/title/description + CTA + bloc Google Review optionnel) / slider à droite.
- Le slider utilise **Swiper natif** (`swiper/vue`, module `Navigation`), boutons prev/next externes reliés via des refs (`prevEl`/`nextEl`) plutôt que la navigation Swiper par défaut, pour permettre un style CSS maison sur les flèches.
- Bloc Google Review conditionnel : `reviewLabel` (i18n-text) + `reviewScore` (number/text), rendu uniquement si les deux sont renseignés.
- Collection `testimonials` : `companyLogo` (image), `quote` (i18n-text ou i18n-editor selon longueur), `authorName` (**text**, nom propre — pas i18n), `authorRole` (i18n-text).

## Services (liste + détail)

**Liste** : les services proviennent généralement d'un **modèle de contenu global** (`storeToRefs(useContentStore())` → `services`), pas d'une collection de section — cohérent avec le principe "modèles de contenu réutilisables globalement". Ce store est un pattern local à mettre en place si absent, voir `content-models-conventions.md#store-partagé-pour-modèles-de-contenu-réutilisés-usecontentstore--usedataloader`. La section elle-même ne porte que l'uptitle/title et un lien "voir plus" éventuel.

**Détail** : `useProps().contentModelItem.contentModelData`, accès aux champs via `item?.index?.<champ>`. Pattern sidebar (infos contact + liens vers services associés) + zone de contenu principale (`v-html="rHtml(item?.index?.content)"`).

- Services associés (fil d'ariane / liens contextuels) : `computed` qui filtre le store global des services selon une relation `parentService` (`content-model-item` en structure de données), pas une requête serveur dédiée.

## Projects (liste + détail)

Même logique que Services : modèle de contenu global pour la liste (`storeToRefs(useContentStore())` → `projects`, voir `content-models-conventions.md#store-partagé-pour-modèles-de-contenu-réutilisés-usecontentstore--usedataloader`), section porteuse uniquement de l'habillage (uptitle, title, lien "voir plus", `bgColor` éventuellement injecté via `v-bind` en CSS).

**Détail** : pas de sidebar dans le pattern observé le plus récent — mise en page pleine largeur : image principale, titre, ligne de meta horizontale (`startDate`/`endDate` **texte brut**, formatées via le helper `formatDate()` de `@creopse/utils`, voir `vue-conventions.md#formatage-de-date`), statut (`status`, `single-select` ou `text` avec valeurs `ongoing`/`completed`/`advocacy`, résolu côté composant via une table de correspondance `Record<string, {fr,en}>` plutôt que traduit en base), `partners` (i18n-text). Puis contenu long (`v-html="rHtml(item?.index?.content)"`), et en bas un bloc à deux colonnes `secondaryImage` + FAQ.

- FAQ : collection `faqs` (`question`/`answer`, `i18n-text`) rendue en accordéon Vue-natif (voir `vue-conventions.md#accordéons`), pas de galerie `n-image-group` dans ce pattern-ci — si le template source a effectivement une galerie de livrables plutôt qu'une FAQ, adapter au cas par cas, mais l'accordéon FAQ est désormais le pattern par défaut à proposer pour ce type de section.

## News / Blog (liste + détail)

- **Toujours** `useNews()` → `loadArticles({ pageSize, page, categories, tags })`, jamais une collection de section pour les articles.
- Squelette de chargement (`isLoading`) avec blocs `tw:animate-pulse` pendant le fetch.
- Détail : `useProps()?.article` (spécifique aux articles, différent de `contentModelItem`).
- Catégories/tags de l'article : viennent directement de `item.categories`/`item.tags` (calculés côté API), **jamais dupliqués en collection de section** (règle `field-types.md` point 7).
- Partage social : modal Vue-natif (`Teleport` + `v-if`), génération de liens de partage via `encodeURIComponent(currentUrl.value)` pour Facebook/Twitter/LinkedIn/WhatsApp — pas de widget JS tiers.
- Articles récents en sidebar : rappel de `loadArticles` filtré pour exclure l'article courant (`result.articles.filter(a => a.slug !== item?.slug)`).

## Contact

- Formulaire en `reactive()` local, soumission via `submitUserContentModelItem('', 'nom-modele-formulaire', {...form}, {}, onSuccess, onError)`.
- Champs du formulaire : `text` bruts, jamais `i18n-*` (ce sont des saisies visiteur, cf. `field-types.md` point 4).
- Feedback succès/erreur : booléens locaux (`isSuccess`/`isError`), pas de structure de données pour ces messages — seuls les libellés (`successMessage`, `errorMessage`) sont des champs `i18n-text` de la section.
- Bloc Google Maps optionnel : simple `iframe` avec `src` = champ `text` `mapsUrl` (URL d'embed, non traduisible).

## Banner (bandeau de page interne)

- Titre contextuel en priorité : `useProps()` pour tenter `contentModelItem.contentModelData.index.name`, puis `.title`, puis `article.title`, avec repli sur le titre de section CMS (`bannerData?.title`) ou le titre de page (`pageData?.title`) si aucun contexte de contenu n'est présent.
- Fil d'ariane (breadcrumb) : toujours un lien "Accueil" (`trans('Home')`) + le titre courant si présent.
- Section très légère en structure de données : généralement un seul singleton `title` (i18n-text), le reste est calculé dynamiquement.

## Section générique avec collection

Pattern par défaut pour une section "features"/"avantages" simple (uptitle/title/text + grille d'items) :

```ts
const contentData = getSectionRootData(props.sectionKey)
const features = getSectionData(props.sectionKey)?.features ?? []
```

- Item de collection typique : `icon` (type `icon`, rendu via `<ContentIcon :data="feature.icon" :size="42" />`), `title` (i18n-text), `text` (**i18n-editor**, jamais i18n-textarea — rendu `v-html="rHtml(feature.text)"`).
- Grille responsive Tailwind (`tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-3`) plutôt que les classes Bootstrap `row-cols-*` quand le composant n'a pas d'autre dépendance Bootstrap forte — au cas par cas selon le style dominant du template source.
