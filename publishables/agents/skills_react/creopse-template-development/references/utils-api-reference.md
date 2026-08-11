# API reference — `@creopse/utils`

Documentation of the public surface of the `@creopse/utils` package (version `0.2.1`), shared by every template (Vue, React). Source of truth for pure helpers (composable-free functions, e.g. `hexToRgba`, `formatDate`), enums, domain models, and shared types. **Contains no composable/hook** — no `useXxx()` in this package; every `use...()` comes from `@creopse/vue`/`@creopse/react` (see `vue-api-reference.md`) or is local to the project (see `vue-conventions.md#composables-locaux-au-projet`).

The package exposes five entry points (subpaths) via its `exports` field:

| Subpath                 | Content                                                                 |
| ----------------------- | ----------------------------------------------------------------------- |
| `@creopse/utils`        | Re-exports every group (`models`, `helpers`, `enums`, `types`)          |
| `@creopse/utils/enums`  | TypeScript enumerations                                                 |
| `@creopse/utils/models` | Domain models (classes / interfaces)                                    |
| `@creopse/utils/types`  | Shared TypeScript types                                                 |
| `@creopse/utils/helpers`| Utility functions and constants                                         |

Code identifiers are kept in English; explanations are in English.

---

## 1. `helpers` — Utility functions

Helpers are grouped by category. Every exported function is listed below with its signature and a short description.

### 1.1 Constants (`helpers/constants`)

```ts
export const DASHBOARD_MODULE_NAME: string  // 'PluginDashboard'
export const SETTINGS_MODULE_NAME: string   // 'PluginSettings'
export const SETUP_MODULE_NAME: string      // 'PluginSetup'
export const SETUP_MODULE: string           // './src/setup.ts'
```

Module names and the setup module path used by the core application.

### 1.2 Strings (`string`)

```ts
getNameInitials(name: string): string
```

Returns the initials (2 uppercase letters) of a compound name.

```ts
strPadLeft(string: string, pad: string, length: number): string
```

Pads a string on the left with a character up to the desired length.

```ts
capitalizeFirstLetter(string: string): string
```

Capitalizes the first letter of a string.

```ts
extractUppercaseWords(input: string): RegExpMatchArray | null
```

Extracts words that are entirely uppercase.

```ts
extractLowercaseWords(input: string): RegExpMatchArray | null
```

Extracts words that are entirely lowercase.

```ts
extractNumber(string: string, options?: { array?: boolean; float?: boolean }): number | number[]
```

Extracts one or more numbers from a string (floats included by default, returns a single number).

```ts
extractAlphabet(string: string, options?: { array?: boolean }): string | string[]
```

Extracts alphabetic characters from a string.

```ts
removeFromString(str: string, searchString: string): string
```

Removes `searchString` from the end of `str` if present.

```ts
replaceStringParts(inputString: string, replacements: Record<string, string>): string
```

Replaces several parts of a string according to a replacement dictionary.

```ts
isTitleLike(value: any, options?: { thresholdScore?: number; tooLongValue?: number; tooShortValue?: number }): { match: boolean; score: number }
```

Determines whether a value looks like a title (non-empty, reasonable length, no line breaks, starts with a capital letter). Returns the resulting score.

```ts
extractTitleLike(data: unknown, tr: (value: string) => string, defaultValue?: string): string | undefined
```

Extracts the value closest to a title from an object, first by known field name, then by heuristic score, then falling back to the first string value.

### 1.3 Numbers (`number`)

```ts
getRandomInteger(min: number, max: number): number
```

Generates a random inclusive integer between `min` and `max`.

```ts
abbreviateNumber(number: number): string | number
```

Abbreviates a number with a magnitude suffix (`k`, `M`, `G`, …).

### 1.4 Arrays (`array`)

```ts
removeDuplicates<T>(arr: T[], property: keyof T): T[]
```

Removes duplicates from an array based on a given property.

```ts
toArrayOfPureJsObjects(array: Array<object>): Array<object>
```

Returns a shallow copy of every object in the array (pure JS objects).

```ts
shuffleArray<T>(array: T[]): T[]
```

Shuffles an array in place (Fisher-Yates algorithm) and returns it.

### 1.5 Colors (`color`)

```ts
genRandomColor(): string
```

Generates a random hexadecimal color code (`#RRGGBB`).

```ts
hexToRgba(hex: string, alpha: number): string
```

Converts a hexadecimal code into an `rgba()` color with the given alpha. **Returns a complete `rgba(...)` string directly** (not separate r/g/b components to recompose) — see usage in `vue-conventions.md#footer--header-cross-cutting-patterns`.

### 1.6 Objects (`object`)

```ts
isRealObject(value: any): boolean
```

True if `value` is an object (neither an array nor `null`).

```ts
isStringifiedObject(str: string): boolean
```

True if the string is valid JSON representing an object.

```ts
flattenObject(obj: any, prefix?: string): Record<string, any>
```

Recursively flattens a nested object into dot-separated keys.

```ts
unflattenObject(obj: Record<string, any>): any
```

Rebuilds an object from dot-separated keys.

```ts
renameKey(obj: Record<string, any>, oldKey: string, newKey: string): void
```

Renames a key of an object (in place).

```ts
renameKeyImmutable(obj: Record<string, any>, oldKey: string, newKey: string): Record<string, any>
```

Returns a new object with a key renamed (without mutating the original).

```ts
omitKeys<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>
```

Returns a new object without the given keys.

```ts
isObjectEmpty(obj: any): boolean
```

True if the object is an `Object` instance with no enumerable property.

### 1.7 Files (`file`)

```ts
humanFileSize(bytes: number, si?: boolean, dp?: number): string
```

Converts a number of bytes into a human-readable size (SI = 1000, otherwise binary 1024).

```ts
filenameFromUrl(url: string): string
```

Extracts the file name from a URL.

```ts
binaryContentToFile(binaryContent: string, fileName?: string, mimeType?: string, download?: boolean): File
```

Converts binary content into a `File` object, with optional download.

```ts
binaryContentToDataURL(binaryContent: string, mimeType: string): Promise<string>
```

Converts binary content into a Data URL.

```ts
blobToDataURL(blob: Blob): Promise<string>
```

Converts a `Blob` into a Data URL.

```ts
determineFileType(file: File): MediaFileType
```

Determines the media type (`IMAGE`, `VIDEO`, `AUDIO`, `DOCUMENT`, `OTHER`) from the file's MIME type.

```ts
getFileExtension(path: string): string
```

Returns the file extension of a path (empty string if none).

```ts
downloadObjectAsJson(exportObj: object, exportName: string): void
```

Downloads an object as a JSON file.

### 1.8 Images (`image`)

```ts
compressImage(file: File, options?: { maxSizeMB?: number; maxWidthOrHeight?: number }): Promise<File>
```

Compresses an image (`jpeg/jpg/png/gif/webp`) via `browser-image-compression`.

```ts
loadImageMeta(url: string): Promise<HTMLImageElement>
```

Loads an image's metadata from a URL.

### 1.9 URLs (`url`)

```ts
removeTrailingSlash(path: string): string
```

Removes the trailing slash from a path (unless it's a single character).

```ts
removeLeadingSlash(path: string): string
```

Removes the leading slash from a path (unless it's a single character).

```ts
getBaseUrl(): string
```

Returns the base URL (`protocol//hostname[:port]`) of the current window.

```ts
getPageUrl(): string
```

Returns the full URL of the current page.

```ts
isExternal(path: string): boolean
```

True if the path is an external URL, an email (`mailto:`), or a phone number (`tel:`).

```ts
isURL(str: string): boolean
```

Validates that a string is a URL (`http`, `https`, `ftp`), handling TLDs, localhost, and IP addresses.

### 1.10 Browser (`browser`)

```ts
openWindowWithJS(url: string, data: Record<string, string>, options?: { target?: string; method?: string }): void
```

Submits a hidden form (POST by default) to a given URL.

```ts
downloadByUrl(url: string): void
```

Triggers the download of a file via its URL.

```ts
dataUrlToBlob(dataUrl: string): Blob
```

Converts a Data URL into a `Blob`.

```ts
dataUrlToFile(dataUrl: string, options?: { fileName?: string; type?: string }): File
```

Converts a Data URL into a `File`.

### 1.11 Time (`time`)

```ts
sleep(ms: number): Promise<void>
```

Waits for the given number of milliseconds.

```ts
getCurrentTimestamp(): number
```

Returns the current UNIX timestamp (in seconds).

```ts
getDateFromTimestamp(date: number, options?: { locale?: string; pattern?: string }): string
```

Formats a timestamp (seconds) into a date string.

```ts
reformatDate(date: string | Date, options?: { inPattern?: string; outPattern?: string; locale?: string }): string
```

Converts a date from one format to another (via dayjs, `fr` locale by default).

```ts
formatDate(date: string | Date, options?: { outPattern?: string; locale?: string }): string
```

Formats a date in the desired output format. **This is the helper to use for any date display in a section** — don't rewrite a local `toLocaleDateString(...)`, see `vue-conventions.md#date-formatting`.

```ts
differenceWithToday(date: string | Date, options?: { pattern?: string; unit?: OpUnitType | QUnitType }): number
```

Difference (in the given unit) between a date and today.

```ts
differenceBetweenDates(startDate: string | Date, endDate: string | Date, options?: { startDatePattern?: string; endDatePattern?: string; unit?: OpUnitType | QUnitType }): number
```

Difference between two dates.

```ts
differenceFromNow(date: string | Date, options?: { locale?: string; pattern?: string }): string
```

Relative difference ("… ago") between a date and now.

### 1.12 Geolocation (`geo`)

```ts
getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number): number
```

Distance (in km) between two coordinates via the Haversine formula.

```ts
deg2rad(deg: number): number
```

Converts degrees to radians.

### 1.13 Miscellaneous (`misc`)

```ts
formatTimeFromSeconds(duration: number, options?: { separator?: string }): string
```

Formats a duration in seconds as `HH:MM:SS` (`:` separator by default).

```ts
genPassword(length?: number, options?: { letters?: boolean; numbers?: boolean; symbols?: boolean }): string
```

Generates a password with the requested character sets.

```ts
parseINIString(iniString: string): { [key: string]: string }
```

Parses an INI string (sections + key/value pairs) into an object.

```ts
generateCustomId(length: number): string
```

Generates a random identifier of the requested length.

```ts
sanitizeId(id: string): string
```

Sanitizes an identifier (letters, digits, slash, hyphen; slash → hyphen).

```ts
slideToId(id: string): void
```

Smoothly scrolls to the element with the given ID.

### 1.14 SVG (`svg`)

```ts
isSVG(input: string): boolean
```

True if the string is a valid SVG document (includes DOM parsing).

---

## 2. `enums` — Enumerations

### `ItemCreatorType` (`content-model/item-creator-type`)

- `USER = 'user'`
- `ADMIN = 'admin'`
- `SYSTEM = 'system'`

### `AccessScope` (`content-model/access-scope`)

- `INTERNAL = 'internal'`
- `USER_EDITABLE = 'user-editable'`

### `Intent` (`content-model/intent`)

- `EDITORIAL_CONTENT = 'editorial-content'`
- `USER_DATA = 'user-data'`
- `SYSTEM_DATA = 'system-data'`

### `AccessGuard` (`access-guard`)

- `API = 'api'`
- `WEB = 'web'`
- `ADMIN = 'admin'`
- `MOBILE = 'mobile'`

### `AccountStatus` (`account-status`)

- `DISABLED = 0`
- `ENABLED = 1`

### `AdContentType` (`ad-content-type`)

- `IMAGE = 'image'`
- `VIDEO = 'video'`

### `AuthType` (`auth-type`)

- `UNDEFINED = 0`
- `EMAIL_PASSWORD = 1`
- `PHONE = 2`
- `GOOGLE = 3`
- `FACEBOOK = 4`
- `TWITTER = 5`

### `Bool` (`bool`)

- `FALSE = 0`
- `TRUE = 1`

### `ContentType` (`content-type`)

- `NEWS_TAG = 'news-tag'`
- `NEWS_CATEGORY = 'news-category'`
- `NEWS_ARTICLE = 'news-article'`
- `CONTENT_MODEL = 'content-model'`

### `EditorMessageType` (`editor-message-type`)

- `RELOAD = 'reload'`
- `RELOAD_COMPLETE = 'reload-complete'`
- `ENABLE_EDITION_MODE = 'enable-edition-mode'`
- `DESELECT_ALL_SECTIONS = 'deselect-all-sections'`
- `SELECT_PREVIEW_SECTION = 'select-preview-section'`
- `SELECT_SIDEBAR_SECTION = 'select-sidebar-section'`
- `SEND_BASE_SECTION_SETTINGS = 'send-base-section-settings'`
- `SEND_BASE_SECTION_DATA = 'send-base-section-data'`
- `SEND_SECTION_SETTINGS = 'send-section-settings'`
- `SEND_SECTION_DATA = 'send-section-data'`
- `SEND_PAGE_SECTIONS = 'send-page-sections'`

### `MediaFileType` (`media-file-type`)

- `DOCUMENT = 1`
- `IMAGE = 2`
- `VIDEO = 3`
- `AUDIO = 4`
- `OTHER = 5`

### `MenuItemTargetType` (`menu-item-target-type`)

- `EXTERNAL_LINK = 'external-link'`
- `PAGE_LINK = 'page-link'`
- `CONTENT_LINK = 'content-link'`

### `NewsArticleStatus` (`news-article-status`)

- `DRAFT = 1`
- `PENDING = 2`
- `PUBLISHED = 3`
- `TRASH = 4`

### `NotificationSource` (`notification-source`)

- `SYSTEM = 1`
- `USER = 2`

### `NotificationType` (`notification-type`)

- `WELCOME_USER = 'Creopse\\Creopse\\Notifications\\WelcomeUser'`

### `PermalinkContentType` (`permalink-content-type`)

- `NEWS_TAG = 'news-tag'`
- `NEWS_CATEGORY = 'news-category'`
- `NEWS_ARTICLE = 'news-article'`
- `CONTENT_MODEL = 'content-model'`

### `ProfileType` (`profile-type`)

- `ADMIN = 'Creopse\\Creopse\\Models\\AdminProfile'`
- `SUBSCRIBER = 'App\\Models\\SubscriberProfile'`

### `Permission` (`permission`)

- `VIEW_DASHBOARD = 'view-dashboard'`
- `VIEW_ACCOUNT = 'view-account'`
- `EDIT_ACCOUNT = 'edit-account'`
- `VIEW_NOTIFICATIONS = 'view-notifications'`
- `MANAGE_NOTIFICATIONS = 'manage-notifications'`
- `VIEW_ABOUT = 'view-about'`
- `MANAGE_PLUGINS = 'manage-plugins'`
- `MANAGE_APP_SETTINGS = 'manage-app-settings'`
- `VIEW_USERS = 'view-users'`
- `CREATE_USER = 'create-user'`
- `EDIT_USER = 'edit-user'`
- `DELETE_USER = 'delete-user'`
- `VIEW_ROLES = 'view-roles'`
- `MANAGE_ROLES = 'manage-roles'`
- `VIEW_PERMISSIONS = 'view-permissions'`
- `MANAGE_PERMISSIONS = 'manage-permissions'`
- `CREATE_ARTICLE = 'create-article'`
- `EDIT_ARTICLE = 'edit-article'`
- `DELETE_ARTICLE = 'delete-article'`
- `MANAGE_NEWS = 'manage-news'`
- `VIEW_MEDIA = 'view-media'`
- `UPLOAD_MEDIA = 'upload-media'`
- `DELETE_MEDIA = 'delete-media'`
- `VIEW_CONTENT = 'view-content'`
- `MANAGE_CONTENT = 'manage-content'`
- `USE_VISUAL_EDITOR = 'use-visual-editor'`

### `ResponseErrorCode` (`response-error-code`)

- `FORM_INVALID_DATA = 'form/invalid_data'`
- `REQUEST_PARAMS_MISSING = 'request/params_missing'`
- `REQUEST_DATA_RETRIEVAL_FAILED = 'request/data_retrieval_failed'`
- `REQUEST_DATA_ALREADY_EXISTS = 'request/data_already_exists'`
- `AUTH_LOGIN_FAILED = 'auth/login_failed'`
- `AUTH_REGISTRATION_FAILED = 'auth/registration_failed'`
- `AUTH_MISSING_DATA = 'auth/missing_data'`
- `AUTH_WRONG_PASSWORD = 'auth/wrong_password'`
- `AUTH_USER_DISABLED = 'auth/user_disabled'`
- `AUTH_USER_NOT_FOUND = 'auth/user_not_found'`
- `AUTH_PROFILE_TYPE_NOT_FOUND = 'auth/profile_type_not_found'`
- `AUTH_EMAIL_ALREADY_USED = 'auth/email_already_used'`
- `AUTH_EMAIL_ALREADY_VERIFIED = 'auth/email_already_verified'`
- `AUTH_PROFILE_ALREADY_EXISTS = 'auth/profile_already_exists'`
- `AUTH_PROFILE_NOT_FOUND = 'auth/profile_not_found'`
- `AUTH_INVALID_TOKEN = 'auth/invalid_token'`
- `AUTH_CODE_SENDING_FAILED = 'auth/code_sending_failed'`
- `AUTH_CODE_VERIFICATION_FAILED = 'auth/code_verification_failed'`
- `AUTH_CODE_EXPIRED = 'auth/code_expired'`

### `ResponseStatusCode` (`response-status-code`)

Standard HTTP codes (1xx–5xx) including specific additions:

- Informational: `CONTINUE = 100`, `SWITCHING_PROTOCOLS = 101`, `PROCESSING = 102`
- Success: `OK = 200`, `CREATED = 201`, `ACCEPTED = 202`, `NON_AUTHORITATIVE_INFORMATION = 203`, `NO_CONTENT = 204`, `RESET_CONTENT = 205`, `PARTIAL_CONTENT = 206`, `MULTI_STATUS = 207`, `ALREADY_REPORTED = 208`, `IM_USED = 226`
- Redirection: `MULTIPLE_CHOICES = 300`, `MOVED_PERMANENTLY = 301`, `FOUND = 302`, `SEE_OTHER = 303`, `NOT_MODIFIED = 304`, `USE_PROXY = 305`, `TEMPORARY_REDIRECT = 307`, `PERMANENT_REDIRECT = 308`
- Client errors: `BAD_REQUEST = 400`, `UNAUTHORIZED = 401`, `PAYMENT_REQUIRED = 402`, `FORBIDDEN = 403`, `NOT_FOUND = 404`, `METHOD_NOT_ALLOWED = 405`, `NOT_ACCEPTABLE = 406`, `PROXY_AUTHENTICATION_REQUIRED = 407`, `REQUEST_TIMEOUT = 408`, `CONFLICT = 409`, `GONE = 410`, `LENGTH_REQUIRED = 411`, `PRECONDITION_FAILED = 412`, `PAYLOAD_TOO_LARGE = 413`, `URI_TOO_LONG = 414`, `UNSUPPORTED_MEDIA_TYPE = 415`, `RANGE_NOT_SATISFIABLE = 416`, `EXPECTATION_FAILED = 417`, `IM_A_TEAPOT = 418`, `SESSION_HAS_EXPIRED = 419`, `MISDIRECTED_REQUEST = 421`, `UNPROCESSABLE_ENTITY = 422`, `LOCKED = 423`, `FAILED_DEPENDENCY = 424`, `TOO_EARLY = 425`, `UPGRADE_REQUIRED = 426`, `PRECONDITION_REQUIRED = 428`, `TOO_MANY_REQUESTS = 429`, `REQUEST_HEADER_FIELDS_TOO_LARGE = 431`, `CONNECTION_CLOSED_WITHOUT_RESPONSE = 444`, `RETRY_WITH = 449`, `UNAVAILABLE_FOR_LEGAL_REASONS = 451`, `CLIENT_CLOSED_REQUEST = 499`
- Server errors: `INTERNAL_SERVER_ERROR = 500`, `NOT_IMPLEMENTED = 501`, `BAD_GATEWAY = 502`, `SERVICE_UNAVAILABLE = 503`, `GATEWAY_TIMEOUT = 504`, `HTTP_VERSION_NOT_SUPPORTED = 505`, `VARIANT_ALSO_NEGOTIATES = 506`, `INSUFFICIENT_STORAGE = 507`, `LOOP_DETECTED = 508`, `BANDWIDTH_LIMIT_EXCEEDED = 509`, `NOT_EXTENDED = 510`, `NETWORK_AUTHENTICATION_REQUIRED = 511`, `UNKNOWN_ERROR = 520`, `WEB_SERVER_IS_DOWN = 521`, `CONNECTION_TIMED_OUT = 522`, `ORIGIN_IS_UNREACHABLE = 523`, `A_TIMEOUT_OCCURRED = 524`, `SSL_HANDSHAKE_FAILED = 525`, `INVALID_SSL_CERTIFICATE = 526`, `RAILGUN_ERROR = 527`
- Unofficial: `NETWORK_READ_TIMEOUT_ERROR = 598`, `NETWORK_CONNECT_TIMEOUT_ERROR = 599`

### `UserRole` (`user-role`)

- `SUPER_ADMIN = 'super-admin'`
- `ADMIN = 'admin'`
- `USER = 'user'`

### `VideoDisplayType` (`video-display-type`)

- `VERTICAL = 'vertical'`
- `HORIZONTAL = 'horizontal'`

### `VideoItemSource` (`video-item-source`)

- `SELF_HOSTED = 'self-hosted'`
- `YOUTUBE = 'youtube'`

---

## 3. `models` — Domain models

Models are mostly classes (`Model`) with a constructor, but some are interfaces. Main fields (fields marked optional `?` are optional in the source; listed relations are most often optional).

### `AdIdentifierModel`

`id: string`, `reusable: boolean`, `contentType: AdContentType`, `contentSize?`, `params?: string[]`, `createdAt?`, `updatedAt?` + relations `ads?: AdModel[]`, `adsCount?`.

### `AdModel`

`pid: string`, `title: string`, `display: boolean`, `data: { [key: string]: any }`, `description: string | null`, `content: string | null`, `contentUrl?`, `broadcastStart?`, `broadcastEnd?`, `id?`, `createdAt?`, `updatedAt?` + relation `adIdentifier?`.

### `AdminProfileModel`

`id?`, `userId: number`, `createdAt?`, `updatedAt?`.

### `AppInformationModel`

`id?`, `key: string`, `value: string`, `createdAt?`, `updatedAt?`.

### `AppSettingModel`

`id?`, `key: string`, `value: string`, `createdAt?`, `updatedAt?`.

### `ContentModelItemModel`

`id?`, `contentModelId?`, `title: string`, `contentModelData: any | null`, `data?: { [key: string]: any } | null`, `isActive: boolean`, `position?: number`, `createdByType?: ItemCreatorType`, `createdBy?`, `createdAt?`, `updatedAt?` + relations `createdByUser?`, `contentModel?`, `relatedItems?`, `relatedTo?`.

> Two forms of the same content: `contentModelData` (accessed via `.index.field` — used on detail pages via `useProps()`) and `data` (accessed via `.field` directly — used on items coming from a list, e.g. `storeToRefs(useContentStore())` or `getContentModelItems`). Consistent with the patterns already documented in `section-patterns.md`.

### `ContentModelModel`

`id?`, `name: string`, `title: string`, `slug: string`, `image?`, `imageUrl?`, `description?`, `dataStructure?`, `titleFieldName?`, `intent: Intent`, `accessScope: AccessScope`, `hasPermalink?`, `createdAt?`, `updatedAt?` + relations `items?`, `itemsCount?`.

### `DataChangeModel`

`id?`, `tableName: string`, `changeId: string`, `createdAt?`, `updatedAt?`.

### `MediaFileModel`

`id?`, `foreignId?`, `senderId?`, `foreignUrl?`, `url?`, `name: string`, `path: string`, `size: number`, `type: MediaFileType`, `extension?`, `mimeType?`, `title?`, `description?`, `additionalMetadata?`, `deletedAt?`, `createdAt?`, `updatedAt?` + relation `sender?`.

### `MenuItemGroupModel`

`id?`, `name: string`, `description?`, `createdAt?`, `updatedAt?`.

### `MenuItemTypeModel`

`id?`, `name: string`, `description?`, `createdAt?`, `updatedAt?`.

### `MenuItemModel`

`id?`, `menuId?`, `pageId?`, `sectionKey?`, `menuItemTypeId?`, `menuItemGroupId?`, `title: string`, `description?`, `path?`, `url?`, `controller?`, `parentId?`, `position: number`, `isActive: boolean`, `isVisible: boolean`, `color?`, `icon?`, `image?`, `targetType: MenuItemTargetType`, `contentType?`, `contentId?`, `createdAt?`, `updatedAt?` + relations `subMenuItems?`, `menu?`, `page?`, `section?`, `type?`, `group?`, `content?` (union type of `ContentModelItemModel | NewsCategoryModel | NewsArticleModel | NewsTagModel`).

### `MenuLocationModel`

`id?`, `name: string`, `description?`, `createdAt?`, `updatedAt?`.

### `MenuModel`

`id?`, `menuLocationId?`, `name: string`, `title: string`, `description?`, `data?: { [key: string]: any }`, `createdAt?`, `updatedAt?` + relations `items?`, `itemsCount?`, `location?`.

### `NewsArticleModel`

`id?`, `foreignId?`, `authorId?`, `publisherId?`, `title: string`, `slug: string`, `summary?`, `content?`, `featuredImage?`, `featuredImageUrl?`, `foreignFeaturedImage?`, `legend?`, `allowComments: boolean`, `isHeadline: boolean`, `status: NewsArticleStatus`, `publishedAt?`, `deletedAt?`, `createdAt?`, `updatedAt?` + relations `author?`, `publisher?`, `categories?`, `categoriesCount?`, `tags?`, `tagsCount?`, `comments?`, `commentsCount?`.

### `NewsCategoryModel`

`id?`, `foreignId?`, `name: string`, `slug?`, `color?`, `description?`, `parentId?`, `position?`, `isActive: boolean`, `image?`, `imageUrl?`, `deletedAt?`, `createdAt?`, `updatedAt?` + relations `articles?`, `articlesCount?`.

### `NewsCommentModel`

`id?`, `foreignId?`, `authorId?`, `articleId?`, `name?`, `content: string`, `email?`, `isActive: boolean`, `deletedAt?`, `createdAt?`, `updatedAt?` + relations `author?`, `article?`.

### `NewsTagModel`

`id?`, `foreignId?`, `name: string`, `description?`, `slug?`, `isActive: boolean`, `deletedAt?`, `createdAt?`, `updatedAt?` + relations `articles?`, `articlesCount?`.

### `NewsletterCampaignModel`

`id?`, `title: string`, `subject: string`, `content: string`, `rawContent: string`, `recipients: string[]`, `history?: NewsletterCampaignHistory[] | null`, `createdAt?`, `updatedAt?`. Interface `NewsletterCampaignHistory`: `id: string`, `date: string`, `report: string`.

### `NewsletterEmailModel`

`id?`, `email: string`, `createdAt?`, `updatedAt?`.

### `NewsletterPhoneModel`

`id?`, `phone: string`, `createdAt?`, `updatedAt?`.

### `NotificationModel`

`id?`, `type: NotificationType`, `notifiableId: number`, `notifiableType: string`, `data: NotificationData`, `readAt?`, `createdAt?`, `updatedAt?`. Interface `NotificationData`: `title: string`, `content: string`, `params: any[]`, `triggeredBy: string`, `source: NotificationSource`, `target: string`, `removable: boolean`.

### `PageSectionModel`

`pageId?`, `sectionId?`, `dataSourceLinkId?`, `dataSourcePageId?`, `dataSourcePageTitle?`, `linkTitle?`, `linkId?`, `data?`, `settings?`, `createdAt?`, `updatedAt?`.

### `PageModel`

`name: string`, `title: string`, `slug: string`, `position: number`, `content: string | null`, `sectionsOrder?`, `sectionsDisabled?`, `sections?: SectionModel[]`, `id?`, `createdAt?`, `updatedAt?` + relation `pivot?: PageSectionModel`.

### `PermalinkModel`

`id?`, `pathPrefix: string`, `contentType?: PermalinkContentType | null`, `contentParam?`, `contentId?`, `pageId?`, `createdAt?`, `updatedAt?` + relation `page?`.

### `PermissionModel`

`id?`, `name: string`, `displayName: string`, `description: string`, `guardName: AccessGuard`, `createdAt?`, `updatedAt?`.

### `RoleModel`

`id?`, `name: string`, `displayName: string`, `description: string`, `guardName: AccessGuard`, `permissions?: PermissionModel[]`, `createdAt?`, `updatedAt?`.

### `SectionModel`

`id?`, `name: string`, `title: string`, `slug: string`, `content?`, `dataStructure?`, `settingsStructure?`, `createdAt?`, `updatedAt?` + relations `pages?`, `pagesCount?`, `pivot?`.

### `SubscriberProfileModel`

`id?`, `userId: number`, `createdAt?`, `updatedAt?`.

### `UserDeviceModel`

`id?`, `userId?`, `deviceId?`, `data?`, `isActive?`, `createdAt?`, `updatedAt?` + relation `user?`.

### `UserPlaceModel`

`id?`, `userId?`, `country?`, `position?`, `locality?`, `administrativeArea?`, `postalCode?`, `name?`, `subAdministrativeArea?`, `isoCountryCode?`, `subLocality?`, `subThoroughfare?`, `thoroughfare?`, `street?`, `createdAt?`, `updatedAt?` + relation `user?`.

### `UserSessionModel`

`id?`, `userId?`, `ipAddress: string`, `userAgent: string`, `locationData?: LocationData`, `lastActivity: string`, `createdAt?`, `updatedAt?` + relation `user?`. Interface `LocationData`: `ip: string`, `iso?`, `city?`, `region?`, `source?`, `country?`, `currency?`, `latitude?`, `timezone?`, `continent?`, `longitude?`.

### `UserModel`

`id?`, `uid?`, `avatar: string`, `avatarUrl: string`, `username: string`, `fullname: string`, `lastname: string`, `firstname: string`, `email: string`, `emailVerifiedAt?`, `password: string`, `phone?`, `address?`, `location?: Coords | null`, `profileType: ProfileType | string`, `profileId: number`, `accountStatus: AccountStatus`, `preferences?`, `authType?`, `lastLoggedInAt?`, `rememberToken?`, `deletedAt?`, `createdAt?`, `updatedAt?` + relations `permissions?`, `profile?`, `roles?`, `sessions?`, `devices?`, `place?`.

### `VideoCategoryModel`

`id?`, `name: string`, `slug?`, `color?`, `description?`, `parentId?`, `position?`, `isActive: boolean`, `image?`, `imageUrl?`, `deletedAt?`, `createdAt?`, `updatedAt?` + relations `items?`, `itemsCount?`.

### `VideoItemModel`

`id?`, `foreignId?`, `publisherId?`, `title: string`, `slug?`, `description?`, `thumbnail?`, `thumbnailUrl?`, `path: string`, `url?`, `displayType: VideoDisplayType`, `source: VideoItemSource`, `isVisible: boolean`, `userMetadata?: { key: string; value: string }[]`, `publishedAt?`, `createdAt?`, `updatedAt?` + relations `publisher?`, `categories?`, `categoriesCount?`.

### `VideoSettingModel`

`id?`, `key: string`, `value: string`, `createdAt?`, `updatedAt?`.

---

## 4. `types` — Shared types

### `app-information.ts`

- `AppInformationObject` — object describing the application's information (name, icons, logo, contact details, colors, and a long list of social networks: facebook, twitter, instagram, whatsapp, linkedin, youtube, … , playstore, appstore, etc., plus `additionalInfo`). See the full list of keys used in `field-types.md` (the `getAppInformationValue` rule).
- `AppInformationKey = keyof AppInformationObject`.

### `app-setting.ts`

- `AppSettingObject` — app configuration (base routing, registration, profile labels, translation with Google/DeepL API keys, appearance: logos, icons, colors, auth pages, content).
- `AppSettingKey = Flatten<AppSettingObject>` — flattened (dotted) keys of the configuration.
- `AppSettingType = 'string' | 'number' | 'boolean' | 'object' | 'array'`.

### `pagination.ts`

- `PaginationMeta` — `current_page`, `from`, `last_page`, `links` (`url`, `label`, `active`), `path`, `per_page`, `to`, `total`.
- `PaginationLinks` — `first`, `last`, `prev`, `next`.
- `PaginatedArticles` — `data: NewsArticleModel[]`, `meta: PaginationMeta`, `links: PaginationLinks`.

### `naive-tag.ts`

- `NTagType = 'default' | 'info' | 'warning' | 'error' | 'success' | 'primary' | undefined`.
- `NTagSize = 'small' | 'medium' | 'large' | 'tiny' | undefined`.
- `NTagProps` — `{ type?, size?, round?, strong?, bordered? }`.

### `flatten.ts`

- `Join<K, P>` — utility type joining two keys with a dot.
- `Flatten<T>` — utility type recursively flattening the keys of an object (arrays are kept as-is).

### `common.ts`

- `SettingType = 'string' | 'number' | 'boolean' | 'object' | 'array'`.
- `UserPrefs` — `{ inAppNotifEnabled?: Bool; emailNotifEnabled?: Bool; locale?: string }`.
- `Coords` — `{ lat: number; lng: number }`.
- `Language` — `{ label: string; value: string; flag: string }`.

### `plugin.ts`

- `PluginPage` — `{ name: string; path: string; title?: string | { [key: string]: string }; module: string; icon?: string; hidden?: boolean }`.
- `PluginData` — `{ id: string; entry: string; pages?; navIcon?; indexPageName?; dashboard?; settings?; mode?; development? }` (metadata description of a plugin).

### `props.ts`

- `SharedProps` — extends Inertia's `Page`; exposes configuration (`config.app`, `config.frontend`), `appLocale`, `appFallbackLocale`, `userData`, `isUserLoggedIn`, `pageData`, `sectionData`, `defaultMeta`, and numerous shared data fields (`articles?`, `paginatedArticles?`, `categories?`, `tags?`, `article?`, `appInformation`, `adIdentifiers?`, `contentModels?`, `menus?`, `menuLocations?`, `menuItemGroups?`, `ads?`, `permalinks?`, `query?`, `data?`, `youtubeChannelId?`, index signature `[key: string]: unknown`).
- `SectionProps` — `{ data?; settings?; sectionKey?; metadata: { slug?; name?; title?; linkId?; createdAt?; updatedAt? } }`.

### `core-bridge/*` — Contract with the core application bridge

#### `core-bridge/api.ts`

- `ResponseType` — axios response type (`'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream' | 'formdata'`).
- `Method = 'get' | 'post' | 'put' | 'delete'`.
- `Payload` — request options (`method?`, `routeBase?`, `responseType?`, `params?`, `data?`, `baseUrl?`, `url?`, `id?`, `headers?`, `useApiBaseUrl?`).
- `Response<T>` — `{ success: boolean; failure: boolean; result: { [key: string]: any; data?: T }; error?: any }`.
- `Api` — API client interface (`request`, `postItemRequest`, `putItemRequest`, `deleteItemRequest`, `getItemRequest`, `getAllItemsRequest`, `instance: AxiosInstance`).

#### `core-bridge/i18n.ts`

- `TranslationMessages = Partial<Record<string, Record<string, any>>>` — translation messages indexed by locale then by key.
- `BridgeI18n` — `{ t(key, params?): string; getLocale(): string; register(messages): void; languages: Language[] }`.

#### `core-bridge/stores.ts`

- `UserInterfaceState` — UI state (light theme, menus, layout size, …).
- `BridgeAuthState` — `{ userData: UserModel | null }`.
- `BridgeServerState` — `{ isServerAvailable: boolean; isDatabaseAvailable: boolean }`.
- `BridgeStore<T>` — `{ getState(): T; setState(state): void; subscribe(listener): () => void }`.
- `BridgeStores` — `{ auth: BridgeStore<BridgeAuthState>; server: BridgeStore<BridgeServerState>; ui: BridgeStore<UserInterfaceState> }`.

#### `core-bridge/router.ts`

- `BridgeRouter` — `{ back(): void; push(path: string): void; replace(path: string): void; currentPath(): string }`.

#### `core-bridge/helpers.ts`

- `BridgeHelpers` — `{ tr(data): string; fileUrl(path): string; getImage(path, size?): Promise<string>; pickByTheme(lightVal, darkVal): string | number | null }`.

#### `core-bridge/shared-data.ts`

- `EnvData` — `{ locale?; fallbackLocale?; primaryColor?; secondaryColor?; accentColor?; apiBaseUrl? }`.
- `AppConfig` — `{ apiBaseUrl: string; apiUrl: string; apiRequestHeaders: { 'X-API-Key': string; Authorization?: string }; forceDevMode: boolean }`.
- `SharedData` — `{ locale?: Readonly<string>; env?: Readonly<EnvData>; appConfig?: Readonly<AppConfig> }`.
