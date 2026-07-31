# API reference — `@creopse/react`

React 19 + Inertia toolkit. This document describes the package's public API
(`packages/react/src`). Code identifiers are kept in English.

> This skill (`creopse-template-development`) targets the **Vue 3 + TypeScript + Laravel/Inertia** stack — this file is provided for cross-reference and possible future reuse on a React template, but is not consumed by the Vue workflow described in `SKILL.md`. For the active stack, see `vue-api-reference.md`.

**Package exports (`package.json`)**

- `.`: provider, components, and types
- `./hooks`: all hooks (`useApi`, `useNews`, `useMenu`, `useProps`, `useVideo`, `useConfig`, `useHelper`, `useContent`, `useNewsletter`, `useSetup`)
- `./*`: additional sub-paths

---

## Provider

### `CreopseProvider`

Root component to place around the application. It initializes the `PropsManager`,
connects the Inertia router to synchronize props, and provides the contexts
(router, config, sections, props). Throws an error if `initialProps`, `config`, or
`resolveSections` are missing.

```tsx
interface CreopseProviderProps {
  children: ReactNode
  options: PluginOptions
}
```

See `PluginOptions` and `PluginConfig` in the [Types](#types) section.

---

## Hooks

Imported from `@creopse/react/hooks` (or `@creopse/react` for those re-exported
indirectly).

### `useApi`

Provides methods for making API requests (via axios). Returns an object
containing:

| Method | Signature | Return |
| --- | --- | --- |
| `request` | `<T = any>(payload: Payload, accessForbiddenCallback?: () => void) => Promise<Response<T>>` | Generic request based on `payload`. On a 401, calls `accessForbiddenCallback`. |
| `getItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `GET /{routeBase}/{id}` |
| `getAllItemsRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `GET /{routeBase}` |
| `postItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `POST /{routeBase}` |
| `putItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `PUT /{routeBase}/{id}` |
| `deleteItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `DELETE /{routeBase}/{id}` |
| `handleError` | `(error: AxiosError) => void` | Logs the error if `debug` is enabled. |

`Payload` and `Response<T>` are described in [Types](#types). URLs are
built from `config.apiUrl` (or `config.apiBaseUrl` if `payload.useApiBaseUrl`).

### `useNews`

Access to news articles, categories, tags, and comments. Returns:

| Property | Type | Description |
| --- | --- | --- |
| `isLoading` | `boolean` | `true` during a request. |
| `loadCategories` | `(filterByIsVisible?: boolean = true) => Promise<NewsCategoryModel[]>` | Categories (`/news-categories`), filtered by `isActive`. |
| `loadTags` | `(filterByIsVisible?: boolean = true) => Promise<NewsTagModel[]>` | Tags (`/news-tags`), filtered by `isActive`. |
| `loadArticles` | `(params: ArticlesQueryParams) => Promise<PaginatedArticles>` | Paginated articles (`/news-articles?...`). |
| `loadArticlesMonths` | `() => Promise<string[]>` | Months with at least one article (`/news-articles/list/months`). |
| `loadArticlesCount` | `() => Promise<number>` | Total article count (`/count/news-articles`). |
| `loadArticlesCountByStatus` | `(status: NewsArticleStatus) => Promise<number>` | Article count by status. |
| `loadArticlesCountByAuthor` | `(id: number) => Promise<number>` | Article count by author. |
| `loadComments` | `(params: CommentsQueryParams) => Promise<PaginatedComments>` | Paginated comments (`/news-comments?...`). |
| `addComment` | `(comment: NewsCommentModel, successCallback?: () => void, errorCallback?: (errorData: any) => void) => Promise<Response<any>>` | `POST /news-comments`. |

### `useVideo`

Access to videos and video categories. Returns:

| Property | Type | Description |
| --- | --- | --- |
| `isLoading` | `boolean` | `true` during a request. |
| `loadCategories` | `(filterByIsVisible?: boolean = true) => Promise<VideoCategoryModel[]>` | Video categories (`/video-categories`). |
| `loadVideoItems` | `(params: VideoItemsQueryParams) => Promise<PaginatedVideoItems>` | Paginated video items (`/video-items?...`). |

### `useMenu`

Retrieval and manipulation of menus/menu items. Returns:

| Method | Signature | Description |
| --- | --- | --- |
| `getMenu` | `(name: string, activeOnly?: boolean = true, nested?: boolean = true) => MenuModel \| undefined` | Menu by name, sorted by position, optionally nested. |
| `getMenuByLocation` | `(name: string, activeOnly?: boolean = true, nested?: boolean = true) => MenuModel \| undefined` | Menu by location name. |
| `getMenuItems` | `(name: string, visibleOnly?: boolean = true, nested?: boolean = true) => MenuItemModel[] \| undefined` | Items of a menu by name. |
| `getMenuItemById` | `(id: number) => MenuItemModel \| undefined` | Item by ID (all menus). |
| `getMenuItemsByLocation` | `(name: string, visibleOnly?: boolean = true, nested?: boolean = true) => MenuItemModel[] \| undefined` | Items by menu location. |
| `getMenuGroups` | `(name: string, byLocation?: boolean = false, visibleOnly?: boolean = true) => MenuItemGroupModel[]` | Menu item groups. |
| `getMenuItemsByGroup` | `(name: string, groupId: number, byLocation?: boolean = false, visibleOnly?: boolean = true, nested?: boolean = true) => MenuItemModel[] \| undefined` | Items filtered by group. |
| `getMenuGroupedItems` | `(name: string, byLocation?: boolean = false, visibleOnly?: boolean = true, nested?: boolean = true) => { group: MenuItemGroupModel; items: MenuItemModel[] \| undefined }[]` | Items grouped by group. |
| `getMenuUngroupedItems` | `(name: string, byLocation?: boolean = false, visibleOnly?: boolean = true, nested?: boolean = true) => MenuItemModel[] \| undefined` | Ungrouped items. |
| `openMenu` | `(menu?: MenuItemModel) => void` | Navigates based on `targetType` (external link, page, or content via permalink). |
| `getLinkFromMenuItemId` | `(id: any) => string` | Returns the URL (external/page) or the ID. |
| `getMenuHref` | `(menu: MenuItemModel) => string` | `url` (external) or `path` (page). |

### `useProps`

Returns the page props synchronized via the `PropsManager` (subscribes to
updates). In production without a provider, returns the native Inertia props.
Throws an error in dev if `CreopseProvider` is missing.

```ts
export const useProps = <T extends Props = Props>(): T
```

### `useConfig`

Returns the plugin configuration (`PluginConfig` object enriched with `apiBaseUrl`
and `apiUrl`). Throws an error if `CreopseProvider` is missing.

```ts
export const useConfig = () => PluginConfig & {
  apiBaseUrl: string   // appUrl with no trailing slash
  apiUrl: string       // `${apiBaseUrl}/api`
}
```

### `useHelper`

Collection of utility functions/values. Returns:

| Property | Type | Description |
| --- | --- | --- |
| `is2XlScreen` | `boolean` | Media query `≥ 1536px`. |
| `isXlScreen` | `boolean` | Media query `1280–1535px`. |
| `isLgScreen` | `boolean` | Media query `1024–1279px`. |
| `isMdScreen` | `boolean` | Media query `768–1023px`. |
| `isSmScreen` | `boolean` | Media query `< 767px`. |
| `getTranslation` | `(data: any, lang?: string) => string` | Translates a `{ LANG: value }` JSON object according to the active language. |
| `tr` | `(data: any, lang?: string) => string` | Alias for `getTranslation`. |
| `resolveHtmlLinks` | `(data: string \| null \| undefined, lang?: string) => string` | Translates and resolves `{{BASE_URL}}`, `[audio]`/`[video]` placeholders. |
| `rHtml` | `(data: string \| null \| undefined, lang?: string) => string` | Alias for `resolveHtmlLinks`. |
| `resolveUrl` | `(path: string) => string` | Resolves a URL (full or path) into an absolute URL. |
| `fileUrl` | `(path: string) => string` | File URL (`{apiBaseUrl}/storage/{path}`). |
| `getImage` | `(path: string, size?: 'small' \| 'medium' \| 'large' \| 'original' = 'original') => Promise<string>` | Image URL, checking available thumbnails. |
| `getVideoThumbnail` | `(path: string) => string` | Video thumbnail URL. |
| `updateLang` | `(val: string, reload?: boolean = true, updateUserPrefs?: boolean = true) => Promise<void>` | Changes the language (localStorage, user preferences, optional reload). |
| `getLangageLabel` | `(value: string) => string \| undefined` | Label of a language from its value. |
| `getLanguageValue` | `(label: string) => string \| undefined` | Value of a language from its label. |
| `languages` | `Language[]` | List of languages (`fr`, `en`). |
| `detectSocialNetwork` | `(url: string) => { name: string; icon: string } \| null` | Detects a social network from a URL. |
| `socialNetworks` | `{ name: string; icon: string }[]` | List of supported social networks. |
| `ckEditorToolbarItems` | `string[]` | CKEditor toolbar items. |
| `displayFormErrors` | `(errors: any, displayError: (message: string) => void) => void` | Iterates over and displays form errors. |
| `currentRoutePath` | `string` | Current URL of the Inertia page. |
| `openLink` | `(entity: string \| number) => void` | Opens a link/route (menu ID, external URL, or internal path). |

### `useContent`

Access to page, section, content-model, permalink, and app information data. Returns:

| Property | Type | Description |
| --- | --- | --- |
| `page` | `PageProps` (Inertia) | The `usePage()` object. |
| `pageData` | `PageModel \| null` | Data of the current page. |
| `newsArticle` | `NewsArticleModel \| undefined \| null` | Current news article. |
| `newsCategory` | `NewsCategoryModel \| undefined \| null` | Current category. |
| `newsTag` | `NewsTagModel \| undefined \| null` | Current tag. |
| `contentModelItem` | `ContentModelItemModel \| undefined \| null` | Current content model item. |
| `getSectionData` | `(key?: string) => object \| any \| null` | Data of a section via `slug__linkId`. |
| `getSectionRootData` | `(key?: string) => any` | The section's `data.index`. |
| `getSectionSettings` | `(key: string \| null \| undefined) => object \| any \| null` | Settings of a section. |
| `getSectionSettingsGroup` | `(key: string \| null \| undefined, group: string) => object \| any \| null` | A settings group. |
| `getSectionSetting` | `(key: string \| null \| undefined, group: string, name: string) => object \| any \| null` | A specific setting. |
| `getAnySectionData` | `(sectionSlug: string, pageSlug: string, linkId?: string = 'default') => Promise<object \| any \| null>` | Data of a section from any page. |
| `getContentModel` | `(name: string) => ContentModelModel \| undefined` | Content model by name. |
| `getContentModelItems` | `(name: string, activeOnly?: boolean = true) => Promise<ContentModelItemModel[]>` | Items of a content model. |
| `getPaginatedContentModelItems` | `(name: string, page: number, pageSize: number, activeOnly?: boolean = true, query?: string, dataFilters?: DataFilter[], sortBy?: string, sortDirection?: SortDirection, createdByType?: string, createdBy?: string) => Promise<PaginatedContentModelItems>` | Paginated/filtered/sorted items. |
| `submitUserContentModelItem` | `(title: string, contentModelId: string, singletonsData?: any, collectionsData?: any, successCallback?: () => void, errorCallback?: (errorData: any) => void) => Promise<Response<any>>` | `POST /content-model/user-items`. |
| `getContentPath` | `(item, force?: boolean = false) => string` | Path resolved via permalink (content model, article, category, or tag). |
| `getAppInformationValue` | `(key: AppInformationKey, type?: SettingType = 'string') => any` | Value of an app information entry (`string`/`number`/`boolean`/`object`/`array`). |
| `formatContentModelItemData` | `(item: ContentModelItemModel) => object` | Reformats `contentModelData` into `.data`. |
| `appPrimaryColor` | `string` | `primaryColor` (default `#005B97`). |
| `appSecondaryColor` | `string` | `secondaryColor` (default `#1E9CD7`). |
| `appAccentColor` | `string` | `accentColor` (default `#FF6501`). |
| `icon` | `string` | App icon URL. |
| `logo` | `string` | App logo URL. |

### `useNewsletter`

Newsletter subscription by email or phone. Returns:

| Property | Type | Description |
| --- | --- | --- |
| `subscribeEmail` | `(email: string, successCallback?: () => void, errorCallback?: (errorData: any) => void) => Promise<void>` | `POST newsletter/emails`. |
| `subscribePhone` | `(phone: string, successCallback?: () => void, errorCallback?: (errorData: any) => void) => Promise<void>` | `POST newsletter/phones` (spaces stripped). |
| `isLoading` | `boolean` | `true` during a request. |

> Note: `useNewsletter` also indirectly exposes `subscribe` (internal).

### `useSetup`

Section setup utilities. Returns:

| Method | Signature | Description |
| --- | --- | --- |
| `getComponents` | `(resolveSections?: () => Record<string, unknown>) => Record<string, any>` | Maps section components (from `resolveSections`). Throws an error if `resolveSections` is missing. |
| `getSectionsInOrder` | `<T extends Props = Props>(props: T) => SectionModel[]` | Sections ordered according to `pageData.sectionsOrder`. |
| `getFinalPageSections` | `<T extends Props = Props>(props: T) => SectionModel[]` | Ordered sections minus the disabled ones (`sectionsDisabled`). |

---

## Core

Internal modules exposed (contexts, props manager, axios instance).

### Contexts (`core/contexts.ts`)

Exported React contexts:

- `PropsContext` — `React.Context<PropsManager | null>`
- `ConfigContext` — `React.Context<PluginConfig | null>`
- `RouterContext` — `React.Context<any | null>`
- `ResolveSectionsContext` — `React.Context<any | null>`

### `PropsManager` (`core/props-manager.ts`)

Singleton class (per provider) managing prop state and its synchronization.

```ts
class PropsManager<T extends Props = Props> {
  constructor(initialProps: T)
  update(payload: T, strategy?: 'merge' | 'override'): void
  getState(): { props: T }
  sync(newProps: T): void
  subscribe(callback: (props: T) => void): () => void  // returns unsubscribe
}
```

- `update`: deep merge (`merge`, default) or deep replace (`override`).
- `sync`: replaces the props and notifies subscribers (used by Inertia navigation and the editor).

### `api` (`core/api.ts`)

Shared axios instance (default export):

- `withCredentials: true`
- Handles the CSRF cookie (`XSRF-TOKEN`) via a request interceptor.

This is the instance underlying `useApi`.

---

## Components

### `Image`

Image with asynchronous thumbnail resolution.

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
  sync?: boolean   // if true, renders a synchronous <img> with the raw src
}
```

### `AsyncImg`

Image whose `src` is resolved by an asynchronous function (`load`).

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

Animation wrapper (framer-motion).

```ts
type Animation = 'fade' | 'slide-fade' | 'bounce'
type Mode = 'wait' | 'sync' | 'popLayout' | undefined

interface CustomTransitionProps {
  name?: Animation              // default 'fade'
  mode?: Mode                   // default 'wait'
  appear?: boolean              // default false
  children?: React.ReactNode
  contentKey?: string | number  // default 'default'
}
```

### `MountedTeleport`

Teleports (`createPortal`) its children to a target element, after mounting.

```ts
interface MountedTeleportProps {
  to: string | HTMLElement      // CSS selector or element
  children: React.ReactNode
  disabled?: boolean            // default false
}
```

### `ReadMore`

Truncates text and displays a "Read more / Read less" link.

```ts
interface ReadMoreProps {
  moreStr?: string              // default 'Read more'
  lessStr?: string              // default 'Read less'
  text: string
  link?: string                 // default '#'
  maxChars?: number             // default 100
  className?: string
  linkClassName?: string
}
```

### `StickyBottom`

Renders its children "sticky" to the bottom of the screen on scroll.

```ts
interface StickyBottomProps {
  bottom?: number               // default 0
  zIndex?: number               // default 1
  className?: string
  children?: React.ReactNode    // default <div>Sticky Bottom</div>
}
```

### `StickyTop`

Renders its children "sticky" to the top of the screen on scroll.

```ts
interface StickyTopProps {
  top?: number                  // default 0
  zIndex?: number               // default 1
  className?: string
  children?: React.ReactNode    // default <div>Sticky Top</div>
}
```

### `RootContainer`

Root container that renders the resolved page sections (`resolveSections`) and
handles live editing (`postMessage` messages with the Creopse editor). Changes its
`key` on every Inertia navigation. Used with no props.

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
  responseType?: ResponseType        // from axios
  params?: Record<string, any>
  data?: Record<string, any>
  url?: string
  id?: string
  headers?: Record<string, string>
  useApiBaseUrl?: boolean            // uses apiBaseUrl instead of apiUrl
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
  router?: Router                    // from @inertiajs/core
  resolveSections: () => Record<string, unknown>
  config: PluginConfig
}
```

Types re-exported from `@creopse/utils` (used by the API): `NewsArticleModel`,
`NewsCategoryModel`, `NewsTagModel`, `NewsCommentModel`, `NewsArticleStatus`,
`VideoCategoryModel`, `VideoItemModel`, `ContentModelModel`, `ContentModelItemModel`,
`MenuModel`, `MenuItemModel`, `MenuItemGroupModel`, `PageModel`, `PermalinkModel`,
`PermalinkContentType`, `MenuItemTargetType`, `ContentType`, `AppInformationKey`,
`SettingType`, `SharedProps`, `UserPrefs`, `Language`, `Bool`, `SectionModel`,
`EditorMessageType`, `slideToId`.
