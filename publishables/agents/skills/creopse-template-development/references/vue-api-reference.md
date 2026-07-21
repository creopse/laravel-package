# Référence de l'API — `@creopse/vue`

Documentation de l'API publique du package `@creopse/vue` (toolkit Vue 3 + Inertia). Source de vérité pour la signature exacte de tout composable/helper/composant utilisé dans un composant de section — `vue-conventions.md` et `section-patterns.md` documentent des *patterns*, ce fichier documente la *surface d'API* réelle. En cas de doute ou de signature non citée ailleurs, se référer à ce fichier plutôt que d'improviser un paramètre.

> **Note** : ce package utilise `unplugin-auto-import` / `unplugin-vue-components`. Les globals Vue (`ref`, `computed`, `inject`, `onMounted`, etc.) sont auto-importés dans le code source et ne figurent donc pas explicitement en tête des fichiers. Cette documentation reflète uniquement les éléments réellement exportés par le package.

## Installation et utilisation du plugin

Le package exporte par défaut un plugin Vue (`plugin`) à enregistrer via `app.use(creopse, options)`.

```ts
import creopse from '@creopse/vue'
import { createApp } from 'vue'

app.use(creopse, {
  initialProps,        // Requis : Props
  router,              // Optionnel : Router Inertia
  resolveSections,     // Requis : () => Record<string, unknown>
  config,              // Requis : PluginConfig
})
```

La méthode `install` lève une erreur si `initialProps`, `config` ou `resolveSections` sont absents. Elle enregistre également les composants globalement : `RootContainer`, `CustomTransition`, `MountedTeleport`, `StickyBottom`, `StickyTop`, `ReadMore`, `AsyncImg`, `Image`.

---

## Composables

Tous les composables sont exportés nommément depuis `@creopse/vue`.

### `useApi()`

Fournit des méthodes pour effectuer des requêtes vers l'API.

```ts
const {
  request,
  getItemRequest,
  postItemRequest,
  putItemRequest,
  deleteItemRequest,
  getAllItemsRequest,
  handleError,
} = useApi()
```

| Fonction | Signature | Description |
| --- | --- | --- |
| `request` | `<T = any>(payload: Payload, accessForbiddenCallback?: () => void) => Promise<Response<T>>` | Requête générique. `baseURL` = `apiBaseUrl` si `payload.useApiBaseUrl` est vrai, sinon `apiUrl` (`apiBaseUrl + /api`). Intercepte les 401 (appelle `accessForbiddenCallback`) et 419 (CSRF). |
| `getItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `GET /{routeBase}/{id}` |
| `postItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `POST /{routeBase}` |
| `putItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `PUT /{routeBase}/{id}` |
| `deleteItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `DELETE /{routeBase}/{id}` |
| `getAllItemsRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `GET /{routeBase}` |
| `handleError` | `(error: AxiosError) => void` | Journalise l'erreur si `config.debug` est activé. |

### `useConfig()`

Retourne la configuration du plugin (injectée). Lève une erreur si le plugin n'est pas installé.

```ts
const config = useConfig()
// config : PluginConfig & { apiBaseUrl: string; apiUrl: string }
```

Retourne l'objet `PluginConfig` étendu de :

- `apiBaseUrl : string` — `config.appUrl` (sans slash final) ou `getBaseUrl()`.
- `apiUrl : string` — `${apiBaseUrl}/api`.

### `useProps()`

```ts
const props = useProps<T extends Props = Props>(): T
```

Retourne les props réactives de la page via `PropsManager`. Lève une erreur en dev si le plugin n'est pas installé ; en production, repli sur `usePage().props` (Inertia natif, prévisualisation live désactivée).

### `useHelper()`

Collection de fonctions et valeurs utilitaires.

```ts
const helper = useHelper()
```

| Membre | Type / Signature | Description |
| --- | --- | --- |
| `is2XlScreen` | `Ref<boolean>` | Écran ≥ 1536px (`useMediaQuery`). |
| `isXlScreen` | `Ref<boolean>` | 1280–1535px. |
| `isLgScreen` | `Ref<boolean>` | 1024–1279px. |
| `isMdScreen` | `Ref<boolean>` | 768–1023px. |
| `isSmScreen` | `Ref<boolean>` | < 767px. |
| `currentRoutePath` | `ComputedRef<string>` | URL courante de la page Inertia. |
| `resolveUrl` | `(path: string) => string` | Résout une URL : retourne `path` si URL complète, sinon `${apiBaseUrl}/${path}` (sans slash initial). |
| `fileUrl` | `(path: string) => string` | URL de fichier : `${apiBaseUrl}/storage/${path}` ou `''` si `path` vide. |
| `getImage` | `(path: string, size?: 'small' \| 'medium' \| 'large' \| 'original') => Promise<string>` | Retourne l'URL de la miniature demandée si elle existe (HEAD 200), sinon l'image d'origine. |
| `getVideoThumbnail` | `(path: string) => string` | URL de la miniature vidéo (`thumbnails/video/<name>.jpg`). |
| `getTranslation` | `(data: any, lang?: string) => string` | Traduit `data` (JSON multilingue) pour la langue donnée, avec repli (`langKey`, locale utilisateur, `appLocale`, `config.locale`, `'en'`). |
| `tr` | `(data: any, lang?: string) => string` | Alias de `getTranslation`. |
| `resolveHtmlLinks` | `(data: string \| null \| undefined, lang?: string) => string` | Traduit et résout les liens `{{BASE_URL}}`, `[audio]`, `[video]`. |
| `rHtml` | `(data: string \| null \| undefined, lang?: string) => string` | Alias de `resolveHtmlLinks`. |
| `getLangageLabel` | `(value: string) => string \| undefined` | Libellé d'une langue à partir de sa valeur. |
| `getLanguageValue` | `(label: string) => string \| undefined` | Valeur d'une langue à partir de son libellé. |
| `updateLang` | `(val: string, reload?: boolean, updateUserPrefs?: boolean) => Promise<void>` | Définit la langue (localStorage, MAJ préférences utilisateur, rechargement optionnel). |
| `detectSocialNetwork` | `(url: string) => { name: string; icon: string } \| null` | Détecte le réseau social d'une URL. |
| `socialNetworks` | `{ name: string; icon: string }[]` | Liste des réseaux supportés. |
| `ckEditorToolbarItems` | `string[]` | Items de la barre d'outils CKEditor. |
| `displayFormErrors` | `(errors: any, displayError: (message: string) => void) => void` | Affiche les erreurs de formulaire via un callback. |
| `openLink` | `(entity: string \| number) => void` | Ouvre un lien (id de menu, URL, ou route Inertia). |
| `languages` | `Language[]` | Langues disponibles (`fr`, `en`). |

> Ne fournit **pas** `getActiveLanguage` (auto-importé de `laravel-vue-i18n`, pas de ce package) ni `splitTitle`/`hexToRgb` (n'existent pas dans le framework — voir `vue-conventions.md`).

### `useContent()`

Accès aux données de page, sections, contenus et informations applicatives.

```ts
const content = useContent()
```

| Membre | Type / Signature | Description |
| --- | --- | --- |
| `page` | `PageProps` (Inertia) | Objet `usePage()`. |
| `pageData` | `PageModel \| null` | Données de page. |
| `newsArticle` | `NewsArticleModel \| undefined \| null` | Article de news courant. |
| `newsCategory` | `NewsCategoryModel \| undefined \| null` | Catégorie de news courante. |
| `newsTag` | `NewsTagModel \| undefined \| null` | Tag de news courant. |
| `contentModelItem` | `ContentModelItemModel \| undefined \| null` | Item de content model courant. |
| `getSectionData` | `(key?: string) => object \| any \| null` | Données (`pivot.data`) d'une section via `slug__linkId`. |
| `getSectionRootData` | `(key?: string) => any` | `getSectionData(key)?.index`. |
| `getSectionSettings` | `(key?: string) => object \| any \| null` | `pivot.settings` d'une section. |
| `getSectionSettingsGroup` | `(key?: string, group: string) => object \| any \| null` | Groupe de settings d'une section. |
| `getSectionSetting` | `(key?: string, group: string, name: string) => object \| any \| null` | Setting précis d'une section. |
| `getAnySectionData` | `(sectionSlug: string, pageSlug: string, linkId?: string) => Promise<object \| any \| null>` | Données d'une section depuis n'importe quelle page (`linkId` défaut `'default'`). |
| `getContentModel` | `(name: string) => ContentModelModel \| undefined` | Content model par nom. |
| `getContentModelItems` | `(name: string, activeOnly?: boolean) => Promise<ContentModelItemModel[]>` | Items d'un content model (`activeOnly` défaut `true`). |
| `getPaginatedContentModelItems` | `(name, page, pageSize, activeOnly?, query?, dataFilters?: DataFilter[], sortBy?, sortDirection?: SortDirection, createdByType?, createdBy?) => Promise<PaginatedContentModelItems>` | Items paginés d'un content model. |
| `submitUserContentModelItem` | `(title, contentModelId, singletonsData?, collectionsData?, successCallback?, errorCallback?) => Promise<Response<any>>` | Soumet un item utilisateur (`POST /content-model/user-items`). |
| `getContentPath` | `(item: ContentModelItemModel \| NewsArticleModel \| NewsCategoryModel \| NewsTagModel, force?: boolean) => string` | Chemin permalien de l'item. |
| `getAppInformationValue` | `(key: AppInformationKey, type?: SettingType) => any` | Valeur d'une app information (`'string'` \| `'number'` \| `'boolean'` \| `'object'` \| `'array'`). |
| `formatContentModelItemData` | `(item: ContentModelItemModel) => object` | Reformate `contentModelData`. |
| `appPrimaryColor` | `ComputedRef<string>` | Couleur primaire (défaut `#005B97`). |
| `appSecondaryColor` | `ComputedRef<string>` | Couleur secondaire (défaut `#1E9CD7`). |
| `appAccentColor` | `ComputedRef<string>` | Couleur d'accent (défaut `#FF6501`). |
| `logo` | `ComputedRef<string>` | URL du logo. |
| `icon` | `ComputedRef<string>` | URL de l'icône. |

### `useMenu()`

Accès et manipulation des menus.

```ts
const menu = useMenu()
```

| Fonction | Signature | Description |
| --- | --- | --- |
| `getMenu` | `(name: string, activeOnly?: boolean, nested?: boolean) => MenuModel \| undefined` | Menu par nom (`activeOnly`, `nested` défaut `true`). |
| `getMenuByLocation` | `(name: string, activeOnly?: boolean, nested?: boolean) => MenuModel \| undefined` | Menu par localisation. |
| `getMenuItems` | `(name: string, visibleOnly?: boolean, nested?: boolean) => MenuItemModel[] \| undefined` | Items d'un menu (`visibleOnly` défaut `true`). Prend un **nom de menu**, pas d'appel sans argument. |
| `getMenuItemById` | `(id: number) => MenuItemModel \| undefined` | Item par ID (tous les menus). |
| `getMenuItemsByLocation` | `(name: string, visibleOnly?: boolean, nested?: boolean) => MenuItemModel[] \| undefined` | Items par localisation de menu. |
| `getMenuGroups` | `(name: string, byLocation?: boolean, visibleOnly?: boolean) => MenuItemGroupModel[]` | Groupes d'items (`byLocation` défaut `false`). |
| `getMenuItemsByGroup` | `(name: string, groupId: number, byLocation?: boolean, visibleOnly?: boolean, nested?: boolean) => MenuItemModel[] \| undefined` | Items d'un groupe. |
| `getMenuGroupedItems` | `(name: string, byLocation?: boolean, visibleOnly?: boolean, nested?: boolean) => { group: MenuItemGroupModel; items: MenuItemModel[] \| undefined }[]` | Items groupés par groupe. |
| `getMenuUngroupedItems` | `(name: string, byLocation?: boolean, visibleOnly?: boolean, nested?: boolean) => MenuItemModel[] \| undefined` | Items sans groupe. |
| `openMenu` | `(menu?: MenuItemModel) => void` | Navigation selon `targetType` (lien externe / page / contenu). |
| `getLinkFromMenuItemId` | `(id: any) => string` | Lien (URL, path, ou id) depuis un id d'item. |
| `getMenuHref` | `(menu: MenuItemModel) => string` | `href` de l'item (`url` ou `path`). |

### `useNews()`

Fonctions liées aux actualités (news).

```ts
const news = useNews()
```

| Membre | Type / Signature | Description |
| --- | --- | --- |
| `isLoading` | `Ref<boolean>` | État de chargement. |
| `loadCategories` | `(filterByIsVisible?: boolean) => Promise<NewsCategoryModel[]>` | Catégories (`/news-categories`, `filterByIsVisible` défaut `true`). |
| `loadTags` | `(filterByIsVisible?: boolean) => Promise<NewsTagModel[]>` | Tags (`/news-tags`). |
| `loadArticles` | `(params: ArticlesQueryParams) => Promise<PaginatedArticles>` | Articles paginés (`/news-articles`). |
| `loadArticlesMonths` | `() => Promise<string[]>` | Mois avec articles (`/news-articles/list/months`). |
| `loadArticlesCount` | `() => Promise<number>` | Nombre total d'articles (`/count/news-articles`). |
| `loadArticlesCountByStatus` | `(status: NewsArticleStatus) => Promise<number>` | Nombre par statut. |
| `loadArticlesCountByAuthor` | `(id: number) => Promise<number>` | Nombre par auteur. |
| `loadComments` | `(params: CommentsQueryParams) => Promise<PaginatedComments>` | Commentaires paginés (`/news-comments`). |
| `addComment` | `(comment: NewsCommentModel, successCallback?, errorCallback?) => Promise<Response<any>>` | Ajoute un commentaire (`POST /news-comments`). |

### `useVideo()`

Fonctions liées aux vidéos.

```ts
const video = useVideo()
```

| Membre | Type / Signature | Description |
| --- | --- | --- |
| `isLoading` | `Ref<boolean>` | État de chargement. |
| `loadCategories` | `(filterByIsVisible?: boolean) => Promise<VideoCategoryModel[]>` | Catégories vidéo (`/video-categories`). |
| `loadVideoItems` | `(params: VideoItemsQueryParams) => Promise<PaginatedVideoItems>` | Vidéos paginées (`/video-items`). |

### `useNewsletter()`

Abonnement à la newsletter.

```ts
const newsletter = useNewsletter()
```

| Membre | Type / Signature | Description |
| --- | --- | --- |
| `isLoading` | `Ref<boolean>` | État de chargement. |
| `subscribeEmail` | `(email: string, successCallback?, errorCallback?) => Promise<void>` | Abonne par email (`POST newsletter/emails`). |
| `subscribePhone` | `(phone: string, successCallback?, errorCallback?) => Promise<void>` | Abonne par téléphone (espaces supprimés, `POST newsletter/phones`). |

### `useSetup()`

Utilitaires de configuration des sections (utilisé en interne par `RootContainer`).

```ts
const setup = useSetup()
```

| Fonction | Signature | Description |
| --- | --- | --- |
| `getComponents` | `(resolveSections?: () => Record<string, unknown>) => Record<string, any>` | Map nom de composant → définition. Lève une erreur si `resolveSections` absent. |
| `getSectionsInOrder` | `<T extends Props>(props: T) => SectionModel[]` | Sections ordonnées selon `sectionsOrder`. |
| `getFinalPageSections` | `<T extends Props>(props: T) => SectionModel[]` | Sections ordonnées sans celles de `sectionsDisabled`. |

---

## Core

### `PropsManager`

Classe exportée (type) gérant l'état réactif des props de page.

```ts
class PropsManager<T extends Props = Props> {
  constructor(initialProps: T)
  update(payload: T, strategy?: 'merge' | 'override'): void
  getState(): { props: Props }  // readonly
  sync(newProps: T): void
}
```

- `new PropsManager(initialProps)` — initialise un état réactif (`reactive` + `readonly`).
- `update(payload, strategy)` — fusion profonde (`'merge'`, défaut) ou remplacement profond (`'override'`).
- `getState()` — retourne l'état en lecture seule (`readonly`).
- `sync(newProps)` — remplace les props (appelé sur navigation Inertia).

### `symbols`

Injection symbols exportés nommément :

- `PropsSymbol` — injection du `PropsManager`.
- `ConfigSymbol` — injection de la `PluginConfig`.
- `RouterSymbol` — injection du `Router` Inertia.
- `ResolveSectionsSymbol` — injection de `resolveSections` (fonction de résolution des composants de section).

### `core/api`

Client Axios interne (`axios.create`) avec credentials et gestion du token CSRF (`X-XSRF-TOKEN`). Non exporté directement par l'index public (utilisé par `useApi`).

---

## Components

Composants exportés nommément et/ou enregistrés globalement par le plugin.

### `RootContainer`

Conteneur racine qui rend les sections de page. Génère une clé unique à chaque navigation Inertia. En mode édition (iframe), il gère la prévisualisation live (sélection de section, verrouillage de navigation, synchronisation via `postMessage`).

Aucune prop publique. Rend `<Core>` qui itère sur `getFinalPageSections(props)` et monte dynamiquement les composants de section avec les props : `data`, `settings`, `section-key`, `metadata`.

### `Image`

Image avec résolution d'URL et sélection de taille de miniature.

| Prop | Type | Requis | Défaut | Description |
| --- | --- | --- | --- | --- |
| `src` | `string` | oui | — | Chemin ou URL de l'image. |
| `alt` | `string` | non | `''` | Texte alternatif. |
| `width` | `string \| number` | non | `undefined` | Largeur. |
| `height` | `string \| number` | non | `undefined` | Hauteur. |
| `title` | `string` | non | `undefined` | Titre. |
| `loading` | `'lazy' \| 'eager'` | non | `undefined` | Attribut `loading`. |
| `style` | `CSSProperties` | non | `undefined` | Styles inline. |
| `size` | `'small' \| 'medium' \| 'large' \| 'original'` | non | `'original'` | Taille de miniature demandée. |
| `sync` | `boolean` | non | `false` | Si `true`, rend `<img>` directement ; sinon utilise `AsyncImg` + `getImage`. |

### `AsyncImg`

Image dont la source est résolue par une promesse.

| Prop | Type | Requis | Défaut | Description |
| --- | --- | --- | --- | --- |
| `load` | `() => Promise<string>` | oui | — | Fonction retournant l'URL (résolue async). |
| `alt` | `string` | non | `undefined` | Texte alternatif. |
| `width` | `string \| number` | non | `undefined` | Largeur. |
| `height` | `string \| number` | non | `undefined` | Hauteur. |
| `title` | `string` | non | `undefined` | Titre. |
| `loading` | `'lazy' \| 'eager' \| undefined` | non | `undefined` | Attribut `loading`. |
| `style` | `CSSProperties` | non | `undefined` | Styles inline. |

### `CustomTransition`

Enveloppe `<Transition>` avec animations prédéfinies.

| Prop | Type | Requis | Défaut | Description |
| --- | --- | --- | --- | --- |
| `name` | `'fade' \| 'slide-fade' \| 'bounce'` | non | `'fade'` | Animation. |
| `mode` | `'default' \| 'in-out' \| 'out-in' \| undefined` | non | `'out-in'` | Mode de transition. |
| `appear` | `boolean` | non | `false` | Animer à l'apparition. |

### `MountedTeleport`

`Teleport` rendu uniquement après montage du composant (évite les erreurs SSR/dom).

| Prop | Type | Requis | Défaut | Description |
| --- | --- | --- | --- | --- |
| `to` | `string` | oui | — | Cible du `Teleport` (sélecteur CSS). |

### `ReadMore`

Tronque un texte et ajoute un lien « Lire plus ».

| Prop | Type | Requis | Défaut | Description |
| --- | --- | --- | --- | --- |
| `text` | `string` | oui | — | Texte à afficher. |
| `moreStr` | `string` | non | `'Read more'` | Libellé « lire plus ». |
| `lessStr` | `string` | non | `''` | Libellé « lire moins » (vide = pas de bascule). |
| `link` | `string` | non | `'#'` | URL du lien (prévient le défaut si `'#'`). |
| `maxChars` | `number` | non | `100` | Nombre de caractères avant troncature. |

### `StickyTop`

Rend son slot collant en haut lors du défilement.

| Prop | Type | Requis | Défaut | Description |
| --- | --- | --- | --- | --- |
| `top` | `number` | non | `0` | Offset haut (px) déclenchant le collage. |
| `zIndex` | `number` | non | `1` | Z-index. |
| `className` | `string` | non | `''` | Classe du conteneur collant. |

### `StickyBottom`

Rend son slot collant en bas lors du défilement.

| Prop | Type | Requis | Défaut | Description |
| --- | --- | --- | --- | --- |
| `bottom` | `number` | non | `0` | Offset bas (px) déclenchant le collage. |
| `zIndex` | `number` | non | `1` | Z-index. |
| `className` | `string` | non | `''` | Classe du conteneur collant. |

---

## Types

Types exportés publiquement (`export type`).

### `PluginOptions` (`types/plugin.ts`)

Options du plugin (paramètre de `app.use`).

```ts
interface PluginOptions {
  initialProps: Props
  router?: Router          // @inertiajs/core
  resolveSections: () => Record<string, unknown>
  config: PluginConfig
}
```

### `PluginConfig` (`types/plugin.ts`)

```ts
interface PluginConfig {
  debug: boolean
  appUrl: string
  locale: string
  fallbackLocale: string
  useUserLocaleAsFallback: boolean
  langKey: string
}
```

### `Props` (`types/plugin.ts`)

`SharedProps & PageProps & { errors: Errors & ErrorBag; [key: string]: any }` (depuis `@creopse/utils` et `@inertiajs/core`).

### `Payload` & `Response` (`types/api.ts`)

```ts
type Method = 'get' | 'post' | 'put' | 'delete'

interface Payload {
  method?: Method
  routeBase?: string
  responseType?: ResponseType   // axios
  params?: Record<string, any>
  data?: Record<string, any>
  url?: string
  id?: string
  headers?: Record<string, string>
  useApiBaseUrl?: boolean
}

interface Response<T> {
  success: boolean
  failure: boolean
  result: { [key: string]: any; data?: T }
  error?: any
}
```

### Types News (`types/news.ts`)

- `PaginatedResponseMeta` : `{ links?: {first,last,prev,next}; currentPage; perPage; total; lastPage }`.
- `ArticlesQueryParams` : `{ pageSize: number; query?; page?; status?; categories?: number[]; tags?: number[]; months?: string[] }`.
- `PaginatedArticles` : `{ articles: NewsArticleModel[]; meta: PaginatedResponseMeta }`.
- `CommentsQueryParams` : `{ pageSize: number; query?; page? }`.
- `PaginatedComments` : `{ comments: NewsCommentModel[]; meta: PaginatedResponseMeta }`.

### Types Video (`types/video.ts`)

- `VideoItemsQueryParams` : `{ pageSize: number; source?; query?; page?; visible?; orderByPublishedAt?; categories?: (string | number)[] }`.
- `PaginatedVideoItems` : `{ videoItems: VideoItemModel[]; meta: {...même forme que PaginatedResponseMeta} }`.

### Types Content (`types/content.ts`)

- `SortDirection` : `'asc' | 'desc'`.
- `DataFilter` : `{ key: string; value: string; operator?: '=' | '!=' | '>' | '>=' | '<' | '<=' | 'like' | 'json_contains' }`.
- `PaginatedContentModelItems` : `{ items: ContentModelItemModel[]; total: number; currentPage: number }`.

> Les modèles `*Model` (ex. `NewsArticleModel`, `ContentModelItemModel`, `MenuModel`, `SectionModel`, `PermalinkModel`, `VideoItemModel`, `VideoCategoryModel`, `AppInformationKey`, `SettingType`, `ContentType`, `MenuItemTargetType`, `Language`, `UserPrefs`, `Bool`, etc.) proviennent du package `@creopse/utils` et ne sont pas redéfinis dans `@creopse/vue`. Voir `utils-api-reference.md`.
