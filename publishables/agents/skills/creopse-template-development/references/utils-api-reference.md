# Référence de l'API — `@creopse/utils`

Documentation de la surface publique du package `@creopse/utils` (version `0.2.1`), commun à tous les templates (Vue, React). Source de vérité pour les helpers purs (fonctions sans composable, ex. `hexToRgba`, `formatDate`), les enums, les modèles de domaine et les types partagés. **Ne contient aucun composable/hook** — pas de `useXxx()` dans ce package ; tout `use...()` vient de `@creopse/vue`/`@creopse/react` (voir `vue-api-reference.md`) ou est local au projet (voir `vue-conventions.md#composables-locaux-au-projet`).

Le package expose cinq points d'entrée (subpaths) via son champ `exports` :

| Subpath                 | Contenu                                                                 |
| ----------------------- | ----------------------------------------------------------------------- |
| `@creopse/utils`        | Réexporte l'ensemble des groups (`models`, `helpers`, `enums`, `types`) |
| `@creopse/utils/enums`  | Énumérations TypeScript                                                 |
| `@creopse/utils/models` | Modèles de domaine (classes / interfaces)                               |
| `@creopse/utils/types`  | Types TypeScript partagés                                               |
| `@creopse/utils/helpers`| Fonctions utilitaires et constantes                                     |

Les identifiants de code sont conservés en anglais ; les explications sont en français.

---

## 1. `helpers` — Fonctions utilitaires

Les helpers sont regroupés par catégorie. Chaque fonction exportée est listée ci-dessous avec sa signature et une courte description.

### 1.1 Constantes (`helpers/constants`)

```ts
export const DASHBOARD_MODULE_NAME: string  // 'PluginDashboard'
export const SETTINGS_MODULE_NAME: string   // 'PluginSettings'
export const SETUP_MODULE_NAME: string      // 'PluginSetup'
export const SETUP_MODULE: string           // './src/setup.ts'
```

Noms de modules et chemin du module de setup utilisés par l'application core.

### 1.2 Chaînes de caractères (`string`)

```ts
getNameInitials(name: string): string
```

Renvoie les initiales (2 lettres majuscules) d'un nom composé.

```ts
strPadLeft(string: string, pad: string, length: number): string
```

Complète une chaîne à gauche avec un caractère jusqu'à la longueur voulue.

```ts
capitalizeFirstLetter(string: string): string
```

Met en majuscule la première lettre d'une chaîne.

```ts
extractUppercaseWords(input: string): RegExpMatchArray | null
```

Extrait les mots entièrement en majuscules.

```ts
extractLowercaseWords(input: string): RegExpMatchArray | null
```

Extrait les mots entièrement en minuscules.

```ts
extractNumber(string: string, options?: { array?: boolean; float?: boolean }): number | number[]
```

Extrait un ou plusieurs nombres d'une chaîne (par défaut les flottants sont inclus, renvoie un seul nombre).

```ts
extractAlphabet(string: string, options?: { array?: boolean }): string | string[]
```

Extrait les caractères alphabétiques d'une chaîne.

```ts
removeFromString(str: string, searchString: string): string
```

Retire `searchString` de la fin de `str` s'il y est présent.

```ts
replaceStringParts(inputString: string, replacements: Record<string, string>): string
```

Remplace plusieurs parties d'une chaîne selon un dictionnaire de remplacements.

```ts
isTitleLike(value: any, options?: { thresholdScore?: number; tooLongValue?: number; tooShortValue?: number }): { match: boolean; score: number }
```

Détermine si une valeur ressemble à un titre (non vide, longueur raisonnable, pas de saut de ligne, commence par une majuscule). Renvoie le score obtenu.

```ts
extractTitleLike(data: unknown, tr: (value: string) => string, defaultValue?: string): string | undefined
```

Extrait la valeur la plus proche d'un titre depuis un objet, d'abord par nom de champ connu, puis par score heuristique, puis par repli sur la première valeur chaîne.

### 1.3 Nombres (`number`)

```ts
getRandomInteger(min: number, max: number): number
```

Génère un entier aléatoire inclusif entre `min` et `max`.

```ts
abbreviateNumber(number: number): string | number
```

Abrège un nombre avec un suffixe de magnitude (`k`, `M`, `G`, …).

### 1.4 Tableaux (`array`)

```ts
removeDuplicates<T>(arr: T[], property: keyof T): T[]
```

Supprime les doublons d'un tableau selon une propriété donnée.

```ts
toArrayOfPureJsObjects(array: Array<object>): Array<object>
```

Renvoie une copie superficielle de chaque objet du tableau (objets JS purs).

```ts
shuffleArray<T>(array: T[]): T[]
```

Mélange un tableau en place (algorithme Fisher-Yates) et le renvoie.

### 1.5 Couleurs (`color`)

```ts
genRandomColor(): string
```

Génère un code couleur hexadécimal aléatoire (`#RRGGBB`).

```ts
hexToRgba(hex: string, alpha: number): string
```

Convertit un code hexadécimal en couleur `rgba()` avec l'alpha fourni. **Renvoie directement une chaîne `rgba(...)` complète** (pas des composantes r/g/b séparées à recomposer) — voir usage dans `vue-conventions.md#footer--header-patterns-transverses`.

### 1.6 Objets (`object`)

```ts
isRealObject(value: any): boolean
```

Vrai si `value` est un objet (ni tableau, ni `null`).

```ts
isStringifiedObject(str: string): boolean
```

Vrai si la chaîne est un JSON valide représentant un objet.

```ts
flattenObject(obj: any, prefix?: string): Record<string, any>
```

Aplatit récursivement un objet imbriqué en clés séparées par des points.

```ts
unflattenObject(obj: Record<string, any>): any
```

Recompose un objet à partir de clés séparées par des points.

```ts
renameKey(obj: Record<string, any>, oldKey: string, newKey: string): void
```

Renomme une clé d'un objet (en place).

```ts
renameKeyImmutable(obj: Record<string, any>, oldKey: string, newKey: string): Record<string, any>
```

Renvoie un nouvel objet avec une clé renommée (sans muter l'original).

```ts
omitKeys<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>
```

Retourne un nouvel objet sans les clés indiquées.

```ts
isObjectEmpty(obj: any): boolean
```

Vrai si l'objet est une instance `Object` sans propriété énumérable.

### 1.7 Fichiers (`file`)

```ts
humanFileSize(bytes: number, si?: boolean, dp?: number): string
```

Convertit un nombre d'octets en taille lisible (SI = 1000, sinon binaire 1024).

```ts
filenameFromUrl(url: string): string
```

Extrait le nom de fichier depuis une URL.

```ts
binaryContentToFile(binaryContent: string, fileName?: string, mimeType?: string, download?: boolean): File
```

Convertit un contenu binaire en objet `File`, avec téléchargement optionnel.

```ts
binaryContentToDataURL(binaryContent: string, mimeType: string): Promise<string>
```

Convertit un contenu binaire en Data URL.

```ts
blobToDataURL(blob: Blob): Promise<string>
```

Convertit un `Blob` en Data URL.

```ts
determineFileType(file: File): MediaFileType
```

Détermine le type de média (`IMAGE`, `VIDEO`, `AUDIO`, `DOCUMENT`, `OTHER`) à partir du MIME du fichier.

```ts
getFileExtension(path: string): string
```

Renvoie l'extension de fichier d'un chemin (chaîne vide si aucune).

```ts
downloadObjectAsJson(exportObj: object, exportName: string): void
```

Télécharge un objet sous forme de fichier JSON.

### 1.8 Images (`image`)

```ts
compressImage(file: File, options?: { maxSizeMB?: number; maxWidthOrHeight?: number }): Promise<File>
```

Compresse une image (`jpeg/jpg/png/gif/webp`) via `browser-image-compression`.

```ts
loadImageMeta(url: string): Promise<HTMLImageElement>
```

Charge les métadonnées d'une image depuis une URL.

### 1.9 URLs (`url`)

```ts
removeTrailingSlash(path: string): string
```

Retire le slash final d'un chemin (sauf s'il ne fait qu'un caractère).

```ts
removeLeadingSlash(path: string): string
```

Retire le slash initial d'un chemin (sauf s'il ne fait qu'un caractère).

```ts
getBaseUrl(): string
```

Renvoie l'URL de base (`protocol//hostname[:port]`) de la fenêtre courante.

```ts
getPageUrl(): string
```

Renvoie l'URL complète de la page courante.

```ts
isExternal(path: string): boolean
```

Vrai si le chemin est une URL externe, un email (`mailto:`) ou un téléphone (`tel:`).

```ts
isURL(str: string): boolean
```

Valide qu'une chaîne est une URL (`http`, `https`, `ftp`), avec gestion du TLD, localhost et adresses IP.

### 1.10 Navigateur (`browser`)

```ts
openWindowWithJS(url: string, data: Record<string, string>, options?: { target?: string; method?: string }): void
```

Soumet un formulaire caché (POST par défaut) vers une URL donnée.

```ts
downloadByUrl(url: string): void
```

Déclenche le téléchargement d'un fichier via son URL.

```ts
dataUrlToBlob(dataUrl: string): Blob
```

Convertit une Data URL en `Blob`.

```ts
dataUrlToFile(dataUrl: string, options?: { fileName?: string; type?: string }): File
```

Convertit une Data URL en `File`.

### 1.11 Temps (`time`)

```ts
sleep(ms: number): Promise<void>
```

Attend le nombre de millisecondes donné.

```ts
getCurrentTimestamp(): number
```

Renvoie le timestamp UNIX courant (en secondes).

```ts
getDateFromTimestamp(date: number, options?: { locale?: string; pattern?: string }): string
```

Formate un timestamp (secondes) en chaîne de date.

```ts
reformatDate(date: string | Date, options?: { inPattern?: string; outPattern?: string; locale?: string }): string
```

Convertit une date d'un format à un autre (via dayjs, locale `fr` par défaut).

```ts
formatDate(date: string | Date, options?: { outPattern?: string; locale?: string }): string
```

Formate une date dans le format de sortie voulu. **C'est le helper à utiliser pour tout affichage de date dans une section** — ne pas réécrire de `toLocaleDateString(...)` local, voir `vue-conventions.md#formatage-de-date`.

```ts
differenceWithToday(date: string | Date, options?: { pattern?: string; unit?: OpUnitType | QUnitType }): number
```

Différence (en unité donnée) entre une date et aujourd'hui.

```ts
differenceBetweenDates(startDate: string | Date, endDate: string | Date, options?: { startDatePattern?: string; endDatePattern?: string; unit?: OpUnitType | QUnitType }): number
```

Différence entre deux dates.

```ts
differenceFromNow(date: string | Date, options?: { locale?: string; pattern?: string }): string
```

Différence relative (« il y a … ») entre une date et maintenant.

### 1.12 Géolocalisation (`geo`)

```ts
getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number): number
```

Distance (en km) entre deux coordonnées via la formule de Haversine.

```ts
deg2rad(deg: number): number
```

Convertit des degrés en radians.

### 1.13 Divers (`misc`)

```ts
formatTimeFromSeconds(duration: number, options?: { separator?: string }): string
```

Formate une durée en secondes en `HH:MM:SS` (séparateur `:` par défaut).

```ts
genPassword(length?: number, options?: { letters?: boolean; numbers?: boolean; symbols?: boolean }): string
```

Génère un mot de passe avec les jeux de caractères demandés.

```ts
parseINIString(iniString: string): { [key: string]: string }
```

Parse une chaîne INI (sections + clés/valeurs) en objet.

```ts
generateCustomId(length: number): string
```

Génère un identifiant aléatoire de la longueur demandée.

```ts
sanitizeId(id: string): string
```

Nettoie un identifiant (lettres, chiffres, slash, tiret ; slash → tiret).

```ts
slideToId(id: string): void
```

Défile en douceur vers l'élément ayant l'ID donné.

### 1.14 SVG (`svg`)

```ts
isSVG(input: string): boolean
```

Vrai si la chaîne est un document SVG valide (parsing DOM inclus).

---

## 2. `enums` — Énumérations

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

Code HTTP standard (1xx–5xx) incluant des ajouts spécifiques :

- Informations : `CONTINUE = 100`, `SWITCHING_PROTOCOLS = 101`, `PROCESSING = 102`
- Succès : `OK = 200`, `CREATED = 201`, `ACCEPTED = 202`, `NON_AUTHORITATIVE_INFORMATION = 203`, `NO_CONTENT = 204`, `RESET_CONTENT = 205`, `PARTIAL_CONTENT = 206`, `MULTI_STATUS = 207`, `ALREADY_REPORTED = 208`, `IM_USED = 226`
- Redirections : `MULTIPLE_CHOICES = 300`, `MOVED_PERMANENTLY = 301`, `FOUND = 302`, `SEE_OTHER = 303`, `NOT_MODIFIED = 304`, `USE_PROXY = 305`, `TEMPORARY_REDIRECT = 307`, `PERMANENT_REDIRECT = 308`
- Erreurs client : `BAD_REQUEST = 400`, `UNAUTHORIZED = 401`, `PAYMENT_REQUIRED = 402`, `FORBIDDEN = 403`, `NOT_FOUND = 404`, `METHOD_NOT_ALLOWED = 405`, `NOT_ACCEPTABLE = 406`, `PROXY_AUTHENTICATION_REQUIRED = 407`, `REQUEST_TIMEOUT = 408`, `CONFLICT = 409`, `GONE = 410`, `LENGTH_REQUIRED = 411`, `PRECONDITION_FAILED = 412`, `PAYLOAD_TOO_LARGE = 413`, `URI_TOO_LONG = 414`, `UNSUPPORTED_MEDIA_TYPE = 415`, `RANGE_NOT_SATISFIABLE = 416`, `EXPECTATION_FAILED = 417`, `IM_A_TEAPOT = 418`, `SESSION_HAS_EXPIRED = 419`, `MISDIRECTED_REQUEST = 421`, `UNPROCESSABLE_ENTITY = 422`, `LOCKED = 423`, `FAILED_DEPENDENCY = 424`, `TOO_EARLY = 425`, `UPGRADE_REQUIRED = 426`, `PRECONDITION_REQUIRED = 428`, `TOO_MANY_REQUESTS = 429`, `REQUEST_HEADER_FIELDS_TOO_LARGE = 431`, `CONNECTION_CLOSED_WITHOUT_RESPONSE = 444`, `RETRY_WITH = 449`, `UNAVAILABLE_FOR_LEGAL_REASONS = 451`, `CLIENT_CLOSED_REQUEST = 499`
- Erreurs serveur : `INTERNAL_SERVER_ERROR = 500`, `NOT_IMPLEMENTED = 501`, `BAD_GATEWAY = 502`, `SERVICE_UNAVAILABLE = 503`, `GATEWAY_TIMEOUT = 504`, `HTTP_VERSION_NOT_SUPPORTED = 505`, `VARIANT_ALSO_NEGOTIATES = 506`, `INSUFFICIENT_STORAGE = 507`, `LOOP_DETECTED = 508`, `BANDWIDTH_LIMIT_EXCEEDED = 509`, `NOT_EXTENDED = 510`, `NETWORK_AUTHENTICATION_REQUIRED = 511`, `UNKNOWN_ERROR = 520`, `WEB_SERVER_IS_DOWN = 521`, `CONNECTION_TIMED_OUT = 522`, `ORIGIN_IS_UNREACHABLE = 523`, `A_TIMEOUT_OCCURRED = 524`, `SSL_HANDSHAKE_FAILED = 525`, `INVALID_SSL_CERTIFICATE = 526`, `RAILGUN_ERROR = 527`
- Non officiels : `NETWORK_READ_TIMEOUT_ERROR = 598`, `NETWORK_CONNECT_TIMEOUT_ERROR = 599`

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

## 3. `models` — Modèles de domaine

Les modèles sont majoritairement des classes (`Model`) avec constructeur, mais certains sont des interfaces. Champs principaux (les champs marqués optionnels `?` le sont dans la source ; les relations listées sont le plus souvent optionnelles).

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

`id?`, `contentModelId?`, `title: string`, `contentModelData: any | null`, `data?: { [key: string]: any } | null`, `isActive: boolean`, `createdByType?: ItemCreatorType`, `createdBy?`, `createdAt?`, `updatedAt?` + relations `createdByUser?`, `contentModel?`, `relatedItems?`, `relatedTo?`.

> Deux formes du même contenu : `contentModelData` (accédé `.index.champ` — utilisé sur les pages de détail via `useProps()`) et `data` (accédé `.champ` directement — utilisé sur les items venant d'une liste, ex. `storeToRefs(useContentStore())` ou `getContentModelItems`). Cohérent avec les patterns déjà documentés dans `section-patterns.md`.

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

`id?`, `menuId?`, `pageId?`, `sectionKey?`, `menuItemTypeId?`, `menuItemGroupId?`, `title: string`, `description?`, `path?`, `url?`, `controller?`, `parentId?`, `position: number`, `isActive: boolean`, `isVisible: boolean`, `color?`, `icon?`, `image?`, `targetType: MenuItemTargetType`, `contentType?`, `contentId?`, `createdAt?`, `updatedAt?` + relations `subMenuItems?`, `menu?`, `page?`, `section?`, `type?`, `group?`, `content?` (type union de `ContentModelItemModel | NewsCategoryModel | NewsArticleModel | NewsTagModel`).

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

`id?`, `title: string`, `subject: string`, `content: string`, `rawContent: string`, `recipients: string[]`, `history?: NewsletterCampaignHistory[] | null`, `createdAt?`, `updatedAt?`. Interface `NewsletterCampaignHistory` : `id: string`, `date: string`, `report: string`.

### `NewsletterEmailModel`

`id?`, `email: string`, `createdAt?`, `updatedAt?`.

### `NewsletterPhoneModel`

`id?`, `phone: string`, `createdAt?`, `updatedAt?`.

### `NotificationModel`

`id?`, `type: NotificationType`, `notifiableId: number`, `notifiableType: string`, `data: NotificationData`, `readAt?`, `createdAt?`, `updatedAt?`. Interface `NotificationData` : `title: string`, `content: string`, `params: any[]`, `triggeredBy: string`, `source: NotificationSource`, `target: string`, `removable: boolean`.

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

`id?`, `userId?`, `ipAddress: string`, `userAgent: string`, `locationData?: LocationData`, `lastActivity: string`, `createdAt?`, `updatedAt?` + relation `user?`. Interface `LocationData` : `ip: string`, `iso?`, `city?`, `region?`, `source?`, `country?`, `currency?`, `latitude?`, `timezone?`, `continent?`, `longitude?`.

### `UserModel`

`id?`, `uid?`, `avatar: string`, `avatarUrl: string`, `username: string`, `fullname: string`, `lastname: string`, `firstname: string`, `email: string`, `emailVerifiedAt?`, `password: string`, `phone?`, `address?`, `location?: Coords | null`, `profileType: ProfileType | string`, `profileId: number`, `accountStatus: AccountStatus`, `preferences?`, `authType?`, `lastLoggedInAt?`, `rememberToken?`, `deletedAt?`, `createdAt?`, `updatedAt?` + relations `permissions?`, `profile?`, `roles?`, `sessions?`, `devices?`, `place?`.

### `VideoCategoryModel`

`id?`, `name: string`, `slug?`, `color?`, `description?`, `parentId?`, `position?`, `isActive: boolean`, `image?`, `imageUrl?`, `deletedAt?`, `createdAt?`, `updatedAt?` + relations `items?`, `itemsCount?`.

### `VideoItemModel`

`id?`, `foreignId?`, `publisherId?`, `title: string`, `slug?`, `description?`, `thumbnail?`, `thumbnailUrl?`, `path: string`, `url?`, `displayType: VideoDisplayType`, `source: VideoItemSource`, `isVisible: boolean`, `userMetadata?: { key: string; value: string }[]`, `publishedAt?`, `createdAt?`, `updatedAt?` + relations `publisher?`, `categories?`, `categoriesCount?`.

### `VideoSettingModel`

`id?`, `key: string`, `value: string`, `createdAt?`, `updatedAt?`.

---

## 4. `types` — Types partagés

### `app-information.ts`

- `AppInformationObject` — objet décrivant les informations de l'application (nom, icônes, logo, contacts, couleurs, et une longue liste de réseaux sociaux : facebook, twitter, instagram, whatsapp, linkedin, youtube, … , playstore, appstore, etc., plus `additionalInfo`). Voir la liste complète des clés utilisées dans `field-types.md` (règle sur `getAppInformationValue`).
- `AppInformationKey = keyof AppInformationObject`.

### `app-setting.ts`

- `AppSettingObject` — configuration applicative (routing de base, inscription, libellés de profil, traduction avec clés d'API Google/DeepL, apparence : logos, icônes, couleurs, pages d'auth, contenu).
- `AppSettingKey = Flatten<AppSettingObject>` — clés aplaties (pointées) de la configuration.
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

- `Join<K, P>` — type utilitaire joignant deux clés par un point.
- `Flatten<T>` — type utilitaire aplatissant récursivement les clés d'un objet (les tableaux sont conservés tels quels).

### `common.ts`

- `SettingType = 'string' | 'number' | 'boolean' | 'object' | 'array'`.
- `UserPrefs` — `{ inAppNotifEnabled?: Bool; emailNotifEnabled?: Bool; locale?: string }`.
- `Coords` — `{ lat: number; lng: number }`.
- `Language` — `{ label: string; value: string; flag: string }`.

### `plugin.ts`

- `PluginPage` — `{ name: string; path: string; title?: string | { [key: string]: string }; module: string; icon?: string; hidden?: boolean }`.
- `PluginData` — `{ id: string; entry: string; pages?; navIcon?; indexPageName?; dashboard?; settings?; mode?; development? }` (description des métadonnées d'un plugin).

### `props.ts`

- `SharedProps` — étend `Page` d'Inertia ; expose la configuration (`config.app`, `config.frontend`), `appLocale`, `appFallbackLocale`, `userData`, `isUserLoggedIn`, `pageData`, `sectionData`, `defaultMeta`, et de nombreuses données partagées (`articles?`, `paginatedArticles?`, `categories?`, `tags?`, `article?`, `appInformation`, `adIdentifiers?`, `contentModels?`, `menus?`, `menuLocations?`, `menuItemGroups?`, `ads?`, `permalinks?`, `query?`, `data?`, `youtubeChannelId?`, index de signature `[key: string]: unknown`).
- `SectionProps` — `{ data?; settings?; sectionKey?; metadata: { slug?; name?; title?; linkId?; createdAt?; updatedAt? } }`.

### `core-bridge/*` — Contrat de pont avec l'application core

#### `core-bridge/api.ts`

- `ResponseType` — type de réponse axios (`'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream' | 'formdata'`).
- `Method = 'get' | 'post' | 'put' | 'delete'`.
- `Payload` — options de requête (`method?`, `routeBase?`, `responseType?`, `params?`, `data?`, `baseUrl?`, `url?`, `id?`, `headers?`, `useApiBaseUrl?`).
- `Response<T>` — `{ success: boolean; failure: boolean; result: { [key: string]: any; data?: T }; error?: any }`.
- `Api` — interface du client API (`request`, `postItemRequest`, `putItemRequest`, `deleteItemRequest`, `getItemRequest`, `getAllItemsRequest`, `instance: AxiosInstance`).

#### `core-bridge/i18n.ts`

- `TranslationMessages = Partial<Record<string, Record<string, any>>>` — messages de traduction indexés par locale puis par clé.
- `BridgeI18n` — `{ t(key, params?): string; getLocale(): string; register(messages): void; languages: Language[] }`.

#### `core-bridge/stores.ts`

- `UserInterfaceState` — état UI (thème clair, menus, taille de layout, …).
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
