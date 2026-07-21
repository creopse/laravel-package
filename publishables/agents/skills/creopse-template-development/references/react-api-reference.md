# Référence API — `@creopse/react`

Toolkit React 19 + Inertia. Ce document décrit l'API publique du package
(`packages/react/src`). Les identifiants de code sont conservés en anglais.

> Ce skill (`creopse-template-development`) cible la stack **Vue 3 + TypeScript + Laravel/Inertia** — ce fichier est fourni pour référence croisée et pour une éventuelle réutilisation future sur un template React, mais n'est pas consommé par le workflow Vue décrit dans `SKILL.md`. Pour la stack active, voir `vue-api-reference.md`.

**Exports du package (`package.json`)**

- `.` : provider, composants et types
- `./hooks` : tous les hooks (`useApi`, `useNews`, `useMenu`, `useProps`, `useVideo`, `useConfig`, `useHelper`, `useContent`, `useNewsletter`, `useSetup`)
- `./*` : sous-chemins additionnels

---

## Fournisseur (Provider)

### `CreopseProvider`

Composant racine à placer autour de l'application. Il initialise le `PropsManager`,
connecte le routeur Inertia pour synchroniser les props, et fournit les contextes
(router, config, sections, props). Lève une erreur si `initialProps`, `config` ou
`resolveSections` sont absents.

```tsx
interface CreopseProviderProps {
  children: ReactNode
  options: PluginOptions
}
```

Voir `PluginOptions` et `PluginConfig` dans la section [Types](#types).

---

## Hooks

Importés depuis `@creopse/react/hooks` (ou `@creopse/react` pour ceux ré-exportés
indirectement).

### `useApi`

Fournit des méthodes pour effectuer des requêtes API (via axios). Renvoie un objet
contenant :

| Méthode | Signature | Retour |
| --- | --- | --- |
| `request` | `<T = any>(payload: Payload, accessForbiddenCallback?: () => void) => Promise<Response<T>>` | Requête générique selon `payload`. En cas de 401, appelle `accessForbiddenCallback`. |
| `getItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `GET /{routeBase}/{id}` |
| `getAllItemsRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `GET /{routeBase}` |
| `postItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `POST /{routeBase}` |
| `putItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `PUT /{routeBase}/{id}` |
| `deleteItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `DELETE /{routeBase}/{id}` |
| `handleError` | `(error: AxiosError) => void` | Loggue l'erreur si `debug` est actif. |

`Payload` et `Response<T>` sont décrits dans [Types](#types). Les URLs sont
construites à partir de `config.apiUrl` (ou `config.apiBaseUrl` si `payload.useApiBaseUrl`).

### `useNews`

Accès aux articles, catégories, tags et commentaires d'actualités. Renvoie :

| Propriété | Type | Description |
| --- | --- | --- |
| `isLoading` | `boolean` | `true` pendant une requête. |
| `loadCategories` | `(filterByIsVisible?: boolean = true) => Promise<NewsCategoryModel[]>` | Catégories (`/news-categories`), filtrées par `isActive`. |
| `loadTags` | `(filterByIsVisible?: boolean = true) => Promise<NewsTagModel[]>` | Tags (`/news-tags`), filtrés par `isActive`. |
| `loadArticles` | `(params: ArticlesQueryParams) => Promise<PaginatedArticles>` | Articles paginés (`/news-articles?...`). |
| `loadArticlesMonths` | `() => Promise<string[]>` | Mois ayant au moins un article (`/news-articles/list/months`). |
| `loadArticlesCount` | `() => Promise<number>` | Nombre total d'articles (`/count/news-articles`). |
| `loadArticlesCountByStatus` | `(status: NewsArticleStatus) => Promise<number>` | Nombre d'articles par statut. |
| `loadArticlesCountByAuthor` | `(id: number) => Promise<number>` | Nombre d'articles par auteur. |
| `loadComments` | `(params: CommentsQueryParams) => Promise<PaginatedComments>` | Commentaires paginés (`/news-comments?...`). |
| `addComment` | `(comment: NewsCommentModel, successCallback?: () => void, errorCallback?: (errorData: any) => void) => Promise<Response<any>>` | `POST /news-comments`. |

### `useVideo`

Accès aux vidéos et catégories vidéo. Renvoie :

| Propriété | Type | Description |
| --- | --- | --- |
| `isLoading` | `boolean` | `true` pendant une requête. |
| `loadCategories` | `(filterByIsVisible?: boolean = true) => Promise<VideoCategoryModel[]>` | Catégories vidéo (`/video-categories`). |
| `loadVideoItems` | `(params: VideoItemsQueryParams) => Promise<PaginatedVideoItems>` | Éléments vidéo paginés (`/video-items?...`). |

### `useMenu`

Récupération et manipulation des menus/menu items. Renvoie :

| Méthode | Signature | Description |
| --- | --- | --- |
| `getMenu` | `(name: string, activeOnly?: boolean = true, nested?: boolean = true) => MenuModel \| undefined` | Menu par nom, trié par position, optionnellement imbriqué. |
| `getMenuByLocation` | `(name: string, activeOnly?: boolean = true, nested?: boolean = true) => MenuModel \| undefined` | Menu par nom de localisation. |
| `getMenuItems` | `(name: string, visibleOnly?: boolean = true, nested?: boolean = true) => MenuItemModel[] \| undefined` | Items d'un menu par nom. |
| `getMenuItemById` | `(id: number) => MenuItemModel \| undefined` | Item par ID (tous les menus). |
| `getMenuItemsByLocation` | `(name: string, visibleOnly?: boolean = true, nested?: boolean = true) => MenuItemModel[] \| undefined` | Items par localisation de menu. |
| `getMenuGroups` | `(name: string, byLocation?: boolean = false, visibleOnly?: boolean = true) => MenuItemGroupModel[]` | Groupes d'items du menu. |
| `getMenuItemsByGroup` | `(name: string, groupId: number, byLocation?: boolean = false, visibleOnly?: boolean = true, nested?: boolean = true) => MenuItemModel[] \| undefined` | Items filtrés par groupe. |
| `getMenuGroupedItems` | `(name: string, byLocation?: boolean = false, visibleOnly?: boolean = true, nested?: boolean = true) => { group: MenuItemGroupModel; items: MenuItemModel[] \| undefined }[]` | Items regroupés par groupe. |
| `getMenuUngroupedItems` | `(name: string, byLocation?: boolean = false, visibleOnly?: boolean = true, nested?: boolean = true) => MenuItemModel[] \| undefined` | Items sans groupe. |
| `openMenu` | `(menu?: MenuItemModel) => void` | Navigue selon `targetType` (lien externe, page, ou contenu via permalink). |
| `getLinkFromMenuItemId` | `(id: any) => string` | Renvoie l'URL (externe/page) ou l'ID. |
| `getMenuHref` | `(menu: MenuItemModel) => string` | `url` (externe) ou `path` (page). |

### `useProps`

Renvoie les props de la page synchronisés via le `PropsManager` (s'abonne aux
mises à jour). En production sans provider, retourne les props Inertia natifs.
Lève une erreur en dev si `CreopseProvider` est absent.

```ts
export const useProps = <T extends Props = Props>(): T
```

### `useConfig`

Renvoie la configuration du plugin (objet `PluginConfig` enrichi de `apiBaseUrl`
et `apiUrl`). Lève une erreur si `CreopseProvider` est absent.

```ts
export const useConfig = () => PluginConfig & {
  apiBaseUrl: string   // appUrl sans slash final
  apiUrl: string       // `${apiBaseUrl}/api`
}
```

### `useHelper`

Collection de fonctions/valeurs utilitaires. Renvoie :

| Propriété | Type | Description |
| --- | --- | --- |
| `is2XlScreen` | `boolean` | Media query `≥ 1536px`. |
| `isXlScreen` | `boolean` | Media query `1280–1535px`. |
| `isLgScreen` | `boolean` | Media query `1024–1279px`. |
| `isMdScreen` | `boolean` | Media query `768–1023px`. |
| `isSmScreen` | `boolean` | Media query `< 767px`. |
| `getTranslation` | `(data: any, lang?: string) => string` | Traduit un JSON `{ LANG: value }` selon la langue active. |
| `tr` | `(data: any, lang?: string) => string` | Alias de `getTranslation`. |
| `resolveHtmlLinks` | `(data: string \| null \| undefined, lang?: string) => string` | Traduit et résout les placeholders `{{BASE_URL}}`, `[audio]`/`[video]`. |
| `rHtml` | `(data: string \| null \| undefined, lang?: string) => string` | Alias de `resolveHtmlLinks`. |
| `resolveUrl` | `(path: string) => string` | Résout une URL (complète ou chemin) vers une URL absolue. |
| `fileUrl` | `(path: string) => string` | URL de fichier (`{apiBaseUrl}/storage/{path}`). |
| `getImage` | `(path: string, size?: 'small' \| 'medium' \| 'large' \| 'original' = 'original') => Promise<string>` | URL d'image, en testant les thumbnails disponibles. |
| `getVideoThumbnail` | `(path: string) => string` | URL de la miniature vidéo. |
| `updateLang` | `(val: string, reload?: boolean = true, updateUserPrefs?: boolean = true) => Promise<void>` | Change la langue (localStorage, préférences user, rechargement). |
| `getLangageLabel` | `(value: string) => string \| undefined` | Libellé d'une langue depuis sa valeur. |
| `getLanguageValue` | `(label: string) => string \| undefined` | Valeur d'une langue depuis son libellé. |
| `languages` | `Language[]` | Liste des langues (`fr`, `en`). |
| `detectSocialNetwork` | `(url: string) => { name: string; icon: string } \| null` | Détecte un réseau social depuis une URL. |
| `socialNetworks` | `{ name: string; icon: string }[]` | Liste des réseaux sociaux supportés. |
| `ckEditorToolbarItems` | `string[]` | Items de la toolbar CKEditor. |
| `displayFormErrors` | `(errors: any, displayError: (message: string) => void) => void` | Itère et affiche les erreurs de formulaire. |
| `currentRoutePath` | `string` | URL courante de la page Inertia. |
| `openLink` | `(entity: string \| number) => void` | Ouvre un lien/route (ID de menu, URL externe, ou chemin interne). |

### `useContent`

Accès aux données de page, sections, modèles de contenu, permalinks, et
informations applicatives. Renvoie :

| Propriété | Type | Description |
| --- | --- | --- |
| `page` | `PageProps` (Inertia) | Objet `usePage()`. |
| `pageData` | `PageModel \| null` | Données de la page courante. |
| `newsArticle` | `NewsArticleModel \| undefined \| null` | Article d'actualité courant. |
| `newsCategory` | `NewsCategoryModel \| undefined \| null` | Catégorie courante. |
| `newsTag` | `NewsTagModel \| undefined \| null` | Tag courant. |
| `contentModelItem` | `ContentModelItemModel \| undefined \| null` | Item de modèle de contenu courant. |
| `getSectionData` | `(key?: string) => object \| any \| null` | Données d'une section via `slug__linkId`. |
| `getSectionRootData` | `(key?: string) => any` | `data.index` de la section. |
| `getSectionSettings` | `(key: string \| null \| undefined) => object \| any \| null` | Settings d'une section. |
| `getSectionSettingsGroup` | `(key: string \| null \| undefined, group: string) => object \| any \| null` | Groupe de settings. |
| `getSectionSetting` | `(key: string \| null \| undefined, group: string, name: string) => object \| any \| null` | Setting précis. |
| `getAnySectionData` | `(sectionSlug: string, pageSlug: string, linkId?: string = 'default') => Promise<object \| any \| null>` | Données d'une section depuis n'importe quelle page. |
| `getContentModel` | `(name: string) => ContentModelModel \| undefined` | Modèle de contenu par nom. |
| `getContentModelItems` | `(name: string, activeOnly?: boolean = true) => Promise<ContentModelItemModel[]>` | Items d'un modèle de contenu. |
| `getPaginatedContentModelItems` | `(name: string, page: number, pageSize: number, activeOnly?: boolean = true, query?: string, dataFilters?: DataFilter[], sortBy?: string, sortDirection?: SortDirection, createdByType?: string, createdBy?: string) => Promise<PaginatedContentModelItems>` | Items paginés/filtrés/triés. |
| `submitUserContentModelItem` | `(title: string, contentModelId: string, singletonsData?: any, collectionsData?: any, successCallback?: () => void, errorCallback?: (errorData: any) => void) => Promise<Response<any>>` | `POST /content-model/user-items`. |
| `getContentPath` | `(item, force?: boolean = false) => string` | Chemin résolu via permalink (modèle de contenu, article, catégorie ou tag). |
| `getAppInformationValue` | `(key: AppInformationKey, type?: SettingType = 'string') => any` | Valeur d'une info applicative (`string`/`number`/`boolean`/`object`/`array`). |
| `formatContentModelItemData` | `(item: ContentModelItemModel) => object` | Reformate `contentModelData` vers `.data`. |
| `appPrimaryColor` | `string` | `primaryColor` (défaut `#005B97`). |
| `appSecondaryColor` | `string` | `secondaryColor` (défaut `#1E9CD7`). |
| `appAccentColor` | `string` | `accentColor` (défaut `#FF6501`). |
| `icon` | `string` | URL de l'icône applicative. |
| `logo` | `string` | URL du logo applicatif. |

### `useNewsletter`

Abonnement à la newsletter par email ou téléphone. Renvoie :

| Propriété | Type | Description |
| --- | --- | --- |
| `subscribeEmail` | `(email: string, successCallback?: () => void, errorCallback?: (errorData: any) => void) => Promise<void>` | `POST newsletter/emails`. |
| `subscribePhone` | `(phone: string, successCallback?: () => void, errorCallback?: (errorData: any) => void) => Promise<void>` | `POST newsletter/phones` (espaces supprimés). |
| `isLoading` | `boolean` | `true` pendant une requête. |

> Note : `useNewsletter` expose aussi indirectement `subscribe` (interne).

### `useSetup`

Utilitaires de configuration des sections. Renvoie :

| Méthode | Signature | Description |
| --- | --- | --- |
| `getComponents` | `(resolveSections?: () => Record<string, unknown>) => Record<string, any>` | Mappe les composants de sections (depuis `resolveSections`). Lève une erreur si `resolveSections` est absent. |
| `getSectionsInOrder` | `<T extends Props = Props>(props: T) => SectionModel[]` | Sections ordonnées selon `pageData.sectionsOrder`. |
| `getFinalPageSections` | `<T extends Props = Props>(props: T) => SectionModel[]` | Sections ordonnées moins celles désactivées (`sectionsDisabled`). |

---

## Core

Modules internes exposés (contextes, gestionnaire de props, instance axios).

### Contextes (`core/contexts.ts`)

Contextes React exportés :

- `PropsContext` — `React.Context<PropsManager | null>`
- `ConfigContext` — `React.Context<PluginConfig | null>`
- `RouterContext` — `React.Context<any | null>`
- `ResolveSectionsContext` — `React.Context<any | null>`

### `PropsManager` (`core/props-manager.ts`)

Classe singleton (par provider) gérant l'état des props et leur synchronisation.

```ts
class PropsManager<T extends Props = Props> {
  constructor(initialProps: T)
  update(payload: T, strategy?: 'merge' | 'override'): void
  getState(): { props: T }
  sync(newProps: T): void
  subscribe(callback: (props: T) => void): () => void  // renvoie unsubscribe
}
```

- `update` : fusion profonde (`merge`, défaut) ou remplacement profond (`override`).
- `sync` : remplace les props et notifie les abonnés (utilisé par la navigation Inertia et l'éditeur).

### `api` (`core/api.ts`)

Instance axios partagée (export par défaut) :

- `withCredentials: true`
- Gère le cookie CSRF (`XSRF-TOKEN`) via un intercepteur de requête.

C'est cette instance qui sous-tend `useApi`.

---

## Components

### `Image`

Image avec résolution de thumbnail asynchrone.

```ts
interface ImageProps {
  src: string
  alt?: string
  width?: string | number
  height?: string | number
  title?: string
  loading?: 'lazy' | 'eager'
  style?: React.CSSProperties
  size?: 'small' | 'medium' | 'large' | 'original'
  sync?: boolean   // si true, rend un <img> synchrone avec src brut
}
```

### `AsyncImg`

Image dont l'`src` est résolu par une fonction asynchrone (`load`).

```ts
interface AsyncImgProps {
  load: () => Promise<string>
  alt?: string
  width?: string | number
  height?: string | number
  title?: string
  loading?: 'lazy' | 'eager'
  style?: React.CSSProperties
}
```

### `CustomTransition`

Wrapper d'animation (framer-motion).

```ts
type Animation = 'fade' | 'slide-fade' | 'bounce'
type Mode = 'wait' | 'sync' | 'popLayout' | undefined

interface CustomTransitionProps {
  name?: Animation              // défaut 'fade'
  mode?: Mode                   // défaut 'wait'
  appear?: boolean              // défaut false
  children?: React.ReactNode
  contentKey?: string | number  // défaut 'default'
}
```

### `MountedTeleport`

Téléporte (`createPortal`) ses enfants vers un élément cible, après montage.

```ts
interface MountedTeleportProps {
  to: string | HTMLElement      // sélecteur CSS ou élément
  children: React.ReactNode
  disabled?: boolean            // défaut false
}
```

### `ReadMore`

Tronque un texte et affiche un lien « Read more / Read less ».

```ts
interface ReadMoreProps {
  moreStr?: string              // défaut 'Read more'
  lessStr?: string              // défaut 'Read less'
  text: string
  link?: string                 // défaut '#'
  maxChars?: number             // défaut 100
  className?: string
  linkClassName?: string
}
```

### `StickyBottom`

Rend ses enfants « collants » en bas de l'écran au scroll.

```ts
interface StickyBottomProps {
  bottom?: number               // défaut 0
  zIndex?: number               // défaut 1
  className?: string
  children?: React.ReactNode    // défaut <div>Sticky Bottom</div>
}
```

### `StickyTop`

Rend ses enfants « collants » en haut de l'écran au scroll.

```ts
interface StickyTopProps {
  top?: number                  // défaut 0
  zIndex?: number               // défaut 1
  className?: string
  children?: React.ReactNode    // défaut <div>Sticky Top</div>
}
```

### `RootContainer`

Conteneur racine qui rend les sections de page résolues (`resolveSections`) et
gère l'édition live (messages `postMessage` avec l'éditeur Creopse). Change de
`key` à chaque navigation Inertia. S'utilise sans props.

```tsx
import { RootContainer } from '@creopse/react'
```

---

## Types

### `types/api.ts`

```ts
type Method = 'get' | 'post' | 'put' | 'delete'

interface Payload {
  method?: Method
  routeBase?: string
  responseType?: ResponseType        // depuis axios
  params?: Record<string, any>
  data?: Record<string, any>
  url?: string
  id?: string
  headers?: Record<string, string>
  useApiBaseUrl?: boolean            // utilise apiBaseUrl au lieu de apiUrl
}

interface Response<T> {
  success: boolean
  failure: boolean
  result: { [key: string]: any; data?: T }
  error?: any
}
```

### `types/news.ts`

```ts
interface PaginatedResponseMeta {
  links?: { first: string; last: string; prev: string; next: string }
  currentPage: number
  perPage: number
  total: number
  lastPage: number
}

interface ArticlesQueryParams {
  pageSize: number
  query?: string
  page?: number
  status?: number                   // NewsArticleStatus
  categories?: number[]
  tags?: number[]
  months?: string[]
}

interface PaginatedArticles {
  articles: NewsArticleModel[]
  meta: PaginatedResponseMeta
}

interface CommentsQueryParams {
  pageSize: number
  query?: string
  page?: number
}

interface PaginatedComments {
  comments: NewsCommentModel[]
  meta: PaginatedResponseMeta
}
```

### `types/video.ts`

```ts
interface VideoItemsQueryParams {
  pageSize: number
  source?: string
  query?: string
  page?: number
  visible?: boolean
  orderByPublishedAt?: boolean
  categories?: (string | number)[]
}

interface PaginatedVideoItems {
  videoItems: VideoItemModel[]
  meta: {
    links?: { first: string; last: string; prev: string; next: string }
    currentPage: number
    perPage: number
    total: number
    lastPage: number
  }
}
```

### `types/content.ts`

```ts
type SortDirection = 'asc' | 'desc'

type DataFilter = {
  key: string
  value: string
  operator?: '=' | '!=' | '>' | '>=' | '<' | '<=' | 'like' | 'json_contains'
}

interface PaginatedContentModelItems {
  items: ContentModelItemModel[]
  total: number
  currentPage: number
}
```

### `types/plugin.ts`

```ts
type Props = SharedProps & PageProps & {
  errors: Errors & ErrorBag
  [key: string]: any
}

interface PluginConfig {
  debug: boolean
  appUrl: string
  locale: string
  fallbackLocale: string
  useUserLocaleAsFallback: boolean
  langKey: string
}

interface PluginOptions {
  initialProps: Props
  router?: Router                    // depuis @inertiajs/core
  resolveSections: () => Record<string, unknown>
  config: PluginConfig
}
```

Types ré-exportés depuis `@creopse/utils` (utilisés par l'API) : `NewsArticleModel`,
`NewsCategoryModel`, `NewsTagModel`, `NewsCommentModel`, `NewsArticleStatus`,
`VideoCategoryModel`, `VideoItemModel`, `ContentModelModel`, `ContentModelItemModel`,
`MenuModel`, `MenuItemModel`, `MenuItemGroupModel`, `PageModel`, `PermalinkModel`,
`PermalinkContentType`, `MenuItemTargetType`, `ContentType`, `AppInformationKey`,
`SettingType`, `SharedProps`, `UserPrefs`, `Language`, `Bool`, `SectionModel`,
`EditorMessageType`, `slideToId`.
