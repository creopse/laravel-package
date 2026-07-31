# API reference — `@creopse/vue`

Public API documentation for the `@creopse/vue` package (Vue 3 + Inertia toolkit). Source of truth for the exact signature of any composable/helper/component used in a section component — `vue-conventions.md` and `section-patterns.md` document *patterns*, this file documents the actual *API surface*. When in doubt, or for a signature not quoted elsewhere, refer to this file rather than improvising a parameter.

> **Note**: this package uses `unplugin-auto-import` / `unplugin-vue-components`. Vue globals (`ref`, `computed`, `inject`, `onMounted`, etc.) are auto-imported in the source code and therefore don't appear explicitly at the top of files. This documentation reflects only the elements actually exported by the package.

## Plugin installation and usage

The package's default export is a Vue plugin (`plugin`) to register via `app.use(creopse, options)`.

```ts
import creopse from '@creopse/vue'
import { createApp } from 'vue'

app.use(creopse, {
  initialProps,        // Required: Props
  router,              // Optional: Inertia Router
  resolveSections,     // Required: () => Record<string, unknown>
  config,               // Required: PluginConfig
})
```

The `install` method throws an error if `initialProps`, `config`, or `resolveSections` are missing. It also registers components globally: `RootContainer`, `CustomTransition`, `MountedTeleport`, `StickyBottom`, `StickyTop`, `ReadMore`, `AsyncImg`, `Image`.

---

## Composables

All composables are exported by name from `@creopse/vue`.

### `useApi()`

Provides methods for making API requests.

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

| Function | Signature | Description |
| --- | --- | --- |
| `request` | `<T = any>(payload: Payload, accessForbiddenCallback?: () => void) => Promise<Response<T>>` | Generic request. `baseURL` = `apiBaseUrl` if `payload.useApiBaseUrl` is true, otherwise `apiUrl` (`apiBaseUrl + /api`). Intercepts 401s (calls `accessForbiddenCallback`) and 419s (CSRF). |
| `getItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `GET /{routeBase}/{id}` |
| `postItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `POST /{routeBase}` |
| `putItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `PUT /{routeBase}/{id}` |
| `deleteItemRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `DELETE /{routeBase}/{id}` |
| `getAllItemsRequest` | `<T = any>(payload: Payload) => Promise<Response<T>>` | `GET /{routeBase}` |
| `handleError` | `(error: AxiosError) => void` | Logs the error if `config.debug` is enabled. |

### `useConfig()`

Returns the plugin's configuration (injected). Throws an error if the plugin isn't installed.

```ts
const config = useConfig()
// config: PluginConfig & { apiBaseUrl: string; apiUrl: string }
```

Returns the `PluginConfig` object extended with:

- `apiBaseUrl: string` — `config.appUrl` (no trailing slash) or `getBaseUrl()`.
- `apiUrl: string` — `${apiBaseUrl}/api`.

### `useProps()`

```ts
const props = useProps<T extends Props = Props>(): T
```

Returns the page's reactive props via `PropsManager`. Throws an error in dev if the plugin isn't installed; in production, falls back to `usePage().props` (native Inertia, live preview disabled).

### `useHelper()`

Collection of utility functions and values.

```ts
const helper = useHelper()
```

| Member | Type / Signature | Description |
| --- | --- | --- |
| `is2XlScreen` | `Ref<boolean>` | Screen ≥ 1536px (`useMediaQuery`). |
| `isXlScreen` | `Ref<boolean>` | 1280–1535px. |
| `isLgScreen` | `Ref<boolean>` | 1024–1279px. |
| `isMdScreen` | `Ref<boolean>` | 768–1023px. |
| `isSmScreen` | `Ref<boolean>` | < 767px. |
| `currentRoutePath` | `ComputedRef<string>` | Current URL of the Inertia page. |
| `resolveUrl` | `(path: string) => string` | Resolves a URL: returns `path` if it's a full URL, otherwise `${apiBaseUrl}/${path}` (no leading slash). |
| `fileUrl` | `(path: string) => string` | File URL: `${apiBaseUrl}/storage/${path}` or `''` if `path` is empty. |
| `getImage` | `(path: string, size?: 'small' \| 'medium' \| 'large' \| 'original') => Promise<string>` | Returns the URL of the requested thumbnail if it exists (HEAD 200), otherwise the original image. |
| `getVideoThumbnail` | `(path: string) => string` | Video thumbnail URL (`thumbnails/video/<name>.jpg`). |
| `getTranslation` | `(data: any, lang?: string) => string` | Translates `data` (multilingual JSON) for the given language, with fallback (`langKey`, user locale, `appLocale`, `config.locale`, `'en'`). |
| `tr` | `(data: any, lang?: string) => string` | Alias for `getTranslation`. |
| `resolveHtmlLinks` | `(data: string \| null \| undefined, lang?: string) => string` | Translates and resolves `{{BASE_URL}}`, `[audio]`, `[video]` links. |
| `rHtml` | `(data: string \| null \| undefined, lang?: string) => string` | Alias for `resolveHtmlLinks`. |
| `getLangageLabel` | `(value: string) => string \| undefined` | Label of a language from its value. |
| `getLanguageValue` | `(label: string) => string \| undefined` | Value of a language from its label. |
| `updateLang` | `(val: string, reload?: boolean, updateUserPrefs?: boolean) => Promise<void>` | Sets the language (localStorage, updates user preferences, optional reload). |
| `detectSocialNetwork` | `(url: string) => { name: string; icon: string } \| null` | Detects the social network of a URL. |
| `socialNetworks` | `{ name: string; icon: string }[]` | List of supported networks. |
| `ckEditorToolbarItems` | `string[]` | CKEditor toolbar items. |
| `displayFormErrors` | `(errors: any, displayError: (message: string) => void) => void` | Displays form errors via a callback. |
| `openLink` | `(entity: string \| number) => void` | Opens a link (menu id, URL, or Inertia route). |
| `languages` | `Language[]` | Available languages (`fr`, `en`). |

> Does **not** provide `getActiveLanguage` (auto-imported from `laravel-vue-i18n`, not from this package) nor `splitTitle`/`hexToRgb` (don't exist in the framework — see `vue-conventions.md`).

### `useContent()`

Access to page, section, content, and app information data.

```ts
const content = useContent()
```

| Member | Type / Signature | Description |
| --- | --- | --- |
| `page` | `PageProps` (Inertia) | The `usePage()` object. |
| `pageData` | `PageModel \| null` | Page data. |
| `newsArticle` | `NewsArticleModel \| undefined \| null` | Current news article. |
| `newsCategory` | `NewsCategoryModel \| undefined \| null` | Current news category. |
| `newsTag` | `NewsTagModel \| undefined \| null` | Current news tag. |
| `contentModelItem` | `ContentModelItemModel \| undefined \| null` | Current content model item. |
| `getSectionData` | `(key?: string) => object \| any \| null` | Data (`pivot.data`) of a section via `slug__linkId`. |
| `getSectionRootData` | `(key?: string) => any` | `getSectionData(key)?.index`. |
| `getSectionSettings` | `(key?: string) => object \| any \| null` | `pivot.settings` of a section. |
| `getSectionSettingsGroup` | `(key?: string, group: string) => object \| any \| null` | A section's settings group. |
| `getSectionSetting` | `(key?: string, group: string, name: string) => object \| any \| null` | A section's specific setting. |
| `getAnySectionData` | `(sectionSlug: string, pageSlug: string, linkId?: string) => Promise<object \| any \| null>` | Data of a section from any page (`linkId` default `'default'`). |
| `getContentModel` | `(name: string) => ContentModelModel \| undefined` | Content model by name. |
| `getContentModelItems` | `(name: string, activeOnly?: boolean) => Promise<ContentModelItemModel[]>` | Items of a content model (`activeOnly` default `true`). |
| `getPaginatedContentModelItems` | `(name, page, pageSize, activeOnly?, query?, dataFilters?: DataFilter[], sortBy?, sortDirection?: SortDirection, createdByType?, createdBy?) => Promise<PaginatedContentModelItems>` | Paginated items of a content model. |
| `submitUserContentModelItem` | `(title, contentModelId, singletonsData?, collectionsData?, successCallback?, errorCallback?) => Promise<Response<any>>` | Submits a user item (`POST /content-model/user-items`). |
| `getContentPath` | `(item: ContentModelItemModel \| NewsArticleModel \| NewsCategoryModel \| NewsTagModel, force?: boolean) => string` | Permalink path of the item. |
| `getAppInformationValue` | `(key: AppInformationKey, type?: SettingType) => any` | Value of an app information entry (`'string'` \| `'number'` \| `'boolean'` \| `'object'` \| `'array'`). |
| `formatContentModelItemData` | `(item: ContentModelItemModel) => object` | Reformats `contentModelData`. |
| `appPrimaryColor` | `ComputedRef<string>` | Primary color (default `#005B97`). |
| `appSecondaryColor` | `ComputedRef<string>` | Secondary color (default `#1E9CD7`). |
| `appAccentColor` | `ComputedRef<string>` | Accent color (default `#FF6501`). |
| `logo` | `ComputedRef<string>` | Logo URL. |
| `icon` | `ComputedRef<string>` | Icon URL. |

### `useMenu()`

Access to and manipulation of menus.

```ts
const menu = useMenu()
```

| Function | Signature | Description |
| --- | --- | --- |
| `getMenu` | `(name: string, activeOnly?: boolean, nested?: boolean) => MenuModel \| undefined` | Menu by name (`activeOnly`, `nested` default `true`). |
| `getMenuByLocation` | `(name: string, activeOnly?: boolean, nested?: boolean) => MenuModel \| undefined` | Menu by location. |
| `getMenuItems` | `(name: string, visibleOnly?: boolean, nested?: boolean) => MenuItemModel[] \| undefined` | Items of a menu (`visibleOnly` default `true`). Takes a **menu name**, cannot be called with no argument. |
| `getMenuItemById` | `(id: number) => MenuItemModel \| undefined` | Item by ID (all menus). |
| `getMenuItemsByLocation` | `(name: string, visibleOnly?: boolean, nested?: boolean) => MenuItemModel[] \| undefined` | Items by menu location. |
| `getMenuGroups` | `(name: string, byLocation?: boolean, visibleOnly?: boolean) => MenuItemGroupModel[]` | Item groups (`byLocation` default `false`). |
| `getMenuItemsByGroup` | `(name: string, groupId: number, byLocation?: boolean, visibleOnly?: boolean, nested?: boolean) => MenuItemModel[] \| undefined` | Items of a group. |
| `getMenuGroupedItems` | `(name: string, byLocation?: boolean, visibleOnly?: boolean, nested?: boolean) => { group: MenuItemGroupModel; items: MenuItemModel[] \| undefined }[]` | Items grouped by group. |
| `getMenuUngroupedItems` | `(name: string, byLocation?: boolean, visibleOnly?: boolean, nested?: boolean) => MenuItemModel[] \| undefined` | Ungrouped items. |
| `openMenu` | `(menu?: MenuItemModel) => void` | Navigation based on `targetType` (external link / page / content). |
| `getLinkFromMenuItemId` | `(id: any) => string` | Link (URL, path, or id) from an item id. |
| `getMenuHref` | `(menu: MenuItemModel) => string` | Item's `href` (`url` or `path`). |

### `useNews()`

News-related functions.

```ts
const news = useNews()
```

| Member | Type / Signature | Description |
| --- | --- | --- |
| `isLoading` | `Ref<boolean>` | Loading state. |
| `loadCategories` | `(filterByIsVisible?: boolean) => Promise<NewsCategoryModel[]>` | Categories (`/news-categories`, `filterByIsVisible` default `true`). |
| `loadTags` | `(filterByIsVisible?: boolean) => Promise<NewsTagModel[]>` | Tags (`/news-tags`). |
| `loadArticles` | `(params: ArticlesQueryParams) => Promise<PaginatedArticles>` | Paginated articles (`/news-articles`). |
| `loadArticlesMonths` | `() => Promise<string[]>` | Months with articles (`/news-articles/list/months`). |
| `loadArticlesCount` | `() => Promise<number>` | Total article count (`/count/news-articles`). |
| `loadArticlesCountByStatus` | `(status: NewsArticleStatus) => Promise<number>` | Count by status. |
| `loadArticlesCountByAuthor` | `(id: number) => Promise<number>` | Count by author. |
| `loadComments` | `(params: CommentsQueryParams) => Promise<PaginatedComments>` | Paginated comments (`/news-comments`). |
| `addComment` | `(comment: NewsCommentModel, successCallback?, errorCallback?) => Promise<Response<any>>` | Adds a comment (`POST /news-comments`). |

### `useVideo()`

Video-related functions.

```ts
const video = useVideo()
```

| Member | Type / Signature | Description |
| --- | --- | --- |
| `isLoading` | `Ref<boolean>` | Loading state. |
| `loadCategories` | `(filterByIsVisible?: boolean) => Promise<VideoCategoryModel[]>` | Video categories (`/video-categories`). |
| `loadVideoItems` | `(params: VideoItemsQueryParams) => Promise<PaginatedVideoItems>` | Paginated videos (`/video-items`). |

### `useNewsletter()`

Newsletter subscription.

```ts
const newsletter = useNewsletter()
```

| Member | Type / Signature | Description |
| --- | --- | --- |
| `isLoading` | `Ref<boolean>` | Loading state. |
| `subscribeEmail` | `(email: string, successCallback?, errorCallback?) => Promise<void>` | Subscribes by email (`POST newsletter/emails`). |
| `subscribePhone` | `(phone: string, successCallback?, errorCallback?) => Promise<void>` | Subscribes by phone (spaces stripped, `POST newsletter/phones`). |

### `useSetup()`

Section setup utilities (used internally by `RootContainer`).

```ts
const setup = useSetup()
```

| Function | Signature | Description |
| --- | --- | --- |
| `getComponents` | `(resolveSections?: () => Record<string, unknown>) => Record<string, any>` | Map of component name → definition. Throws an error if `resolveSections` is missing. |
| `getSectionsInOrder` | `<T extends Props>(props: T) => SectionModel[]` | Sections ordered according to `sectionsOrder`. |
| `getFinalPageSections` | `<T extends Props>(props: T) => SectionModel[]` | Ordered sections excluding those in `sectionsDisabled`. |

---

## Core

### `PropsManager`

Exported class (type) managing the reactive state of page props.

```ts
class PropsManager<T extends Props = Props> {
  constructor(initialProps: T)
  update(payload: T, strategy?: 'merge' | 'override'): void
  getState(): { props: Props }  // readonly
  sync(newProps: T): void
}
```

- `new PropsManager(initialProps)` — initializes a reactive state (`reactive` + `readonly`).
- `update(payload, strategy)` — deep merge (`'merge'`, default) or deep replace (`'override'`).
- `getState()` — returns the read-only state (`readonly`).
- `sync(newProps)` — replaces the props (called on Inertia navigation).

### `symbols`

Injection symbols exported by name:

- `PropsSymbol` — injection of the `PropsManager`.
- `ConfigSymbol` — injection of the `PluginConfig`.
- `RouterSymbol` — injection of the Inertia `Router`.
- `ResolveSectionsSymbol` — injection of `resolveSections` (the section component resolution function).

### `core/api`

Internal Axios client (`axios.create`) with credentials and CSRF token handling (`X-XSRF-TOKEN`). Not exported directly by the public index (used by `useApi`).

---

## Components

Components exported by name and/or registered globally by the plugin.

### `RootContainer`

Root container that renders the page's sections. Generates a unique key on every Inertia navigation. In edit mode (iframe), it handles live preview (section selection, navigation locking, synchronization via `postMessage`).

No public props. Renders `<Core>`, which iterates over `getFinalPageSections(props)` and dynamically mounts section components with the props: `data`, `settings`, `section-key`, `metadata`.

### `Image`

Image with URL resolution and thumbnail size selection.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `src` | `string` | yes | — | Path or URL of the image. |
| `alt` | `string` | no | `''` | Alt text. |
| `width` | `string \| number` | no | `undefined` | Width. |
| `height` | `string \| number` | no | `undefined` | Height. |
| `title` | `string` | no | `undefined` | Title. |
| `loading` | `'lazy' \| 'eager'` | no | `undefined` | `loading` attribute. |
| `style` | `CSSProperties` | no | `undefined` | Inline styles. |
| `size` | `'small' \| 'medium' \| 'large' \| 'original'` | no | `'original'` | Requested thumbnail size. |
| `sync` | `boolean` | no | `false` | If `true`, renders `<img>` directly; otherwise uses `AsyncImg` + `getImage`. |

### `AsyncImg`

Image whose source is resolved by a promise.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `load` | `() => Promise<string>` | yes | — | Function returning the URL (resolved async). |
| `alt` | `string` | no | `undefined` | Alt text. |
| `width` | `string \| number` | no | `undefined` | Width. |
| `height` | `string \| number` | no | `undefined` | Height. |
| `title` | `string` | no | `undefined` | Title. |
| `loading` | `'lazy' \| 'eager' \| undefined` | no | `undefined` | `loading` attribute. |
| `style` | `CSSProperties` | no | `undefined` | Inline styles. |

### `CustomTransition`

Wraps `<Transition>` with predefined animations.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `name` | `'fade' \| 'slide-fade' \| 'bounce'` | no | `'fade'` | Animation. |
| `mode` | `'default' \| 'in-out' \| 'out-in' \| undefined` | no | `'out-in'` | Transition mode. |
| `appear` | `boolean` | no | `false` | Animate on appearance. |

### `MountedTeleport`

`Teleport` rendered only after the component is mounted (avoids SSR/DOM errors).

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `to` | `string` | yes | — | `Teleport` target (CSS selector). |

### `ReadMore`

Truncates text and adds a "Read more" link.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `text` | `string` | yes | — | Text to display. |
| `moreStr` | `string` | no | `'Read more'` | "Read more" label. |
| `lessStr` | `string` | no | `''` | "Read less" label (empty = no toggle). |
| `link` | `string` | no | `'#'` | Link URL (prevents default if `'#'`). |
| `maxChars` | `number` | no | `100` | Number of characters before truncation. |

### `StickyTop`

Renders its slot sticky to the top on scroll.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `top` | `number` | no | `0` | Top offset (px) triggering the stickiness. |
| `zIndex` | `number` | no | `1` | Z-index. |
| `className` | `string` | no | `''` | Class of the sticky container. |

### `StickyBottom`

Renders its slot sticky to the bottom on scroll.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `bottom` | `number` | no | `0` | Bottom offset (px) triggering the stickiness. |
| `zIndex` | `number` | no | `1` | Z-index. |
| `className` | `string` | no | `''` | Class of the sticky container. |

---

## Types

Publicly exported types (`export type`).

### `PluginOptions` (`types/plugin.ts`)

Plugin options (parameter of `app.use`).

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

`SharedProps & PageProps & { errors: Errors & ErrorBag; [key: string]: any }` (from `@creopse/utils` and `@inertiajs/core`).

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

### News types (`types/news.ts`)

- `PaginatedResponseMeta`: `{ links?: {first,last,prev,next}; currentPage; perPage; total; lastPage }`.
- `ArticlesQueryParams`: `{ pageSize: number; query?; page?; status?; categories?: number[]; tags?: number[]; months?: string[] }`.
- `PaginatedArticles`: `{ articles: NewsArticleModel[]; meta: PaginatedResponseMeta }`.
- `CommentsQueryParams`: `{ pageSize: number; query?; page? }`.
- `PaginatedComments`: `{ comments: NewsCommentModel[]; meta: PaginatedResponseMeta }`.

### Video types (`types/video.ts`)

- `VideoItemsQueryParams`: `{ pageSize: number; source?; query?; page?; visible?; orderByPublishedAt?; categories?: (string | number)[] }`.
- `PaginatedVideoItems`: `{ videoItems: VideoItemModel[]; meta: {...same shape as PaginatedResponseMeta} }`.

### Content types (`types/content.ts`)

- `SortDirection`: `'asc' | 'desc'`.
- `DataFilter`: `{ key: string; value: string; operator?: '=' | '!=' | '>' | '>=' | '<' | '<=' | 'like' | 'json_contains' }`.
- `PaginatedContentModelItems`: `{ items: ContentModelItemModel[]; total: number; currentPage: number }`.

> The `*Model` models (e.g. `NewsArticleModel`, `ContentModelItemModel`, `MenuModel`, `SectionModel`, `PermalinkModel`, `VideoItemModel`, `VideoCategoryModel`, `AppInformationKey`, `SettingType`, `ContentType`, `MenuItemTargetType`, `Language`, `UserPrefs`, `Bool`, etc.) come from the `@creopse/utils` package and are not redefined in `@creopse/vue`. See `utils-api-reference.md`.
