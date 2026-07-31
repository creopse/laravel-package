# Section patterns

Consult the subsection matching the type of section being handled at step 9.2, as a complement to `vue-conventions.md` (Vue stack) or `react-conventions.md` (React stack). The code excerpts below are written in Vue, but the logic they describe (which composable/hook to call, which fields to check, in what order) is valid for both stacks — on a React project, translate the syntax via the tables in `react-conventions.md` without changing this logic.

## Table of contents

- [Header](#header)
- [Footer](#footer)
- [Slider / Hero carousel](#slider--hero-carousel)
- [Testimonials](#testimonials)
- [Services (list + detail)](#services-list--detail)
- [Projects (list + detail)](#projects-list--detail)
- [News / Blog (list + detail)](#news--blog-list--detail)
- [Contact](#contact)
- [Banner (internal page header band)](#banner-internal-page-header-band)
- [Generic section with a collection](#generic-section-with-a-collection)

---

## Header

- Main menu via `useMenu().getMenuItemsByLocation('header', true)` (no dedicated composable to create for this — it's not provided by the template, and the logic stays simple: filtering top-level items, grouping sub-items by `parentId`, and determining the active item by comparing `item.path` against `useHelper().currentRoutePath` — write it directly in `Header.vue`, or as a local composable if the developer prefers to extract it, but this isn't a convention the skill should impose).
- Rendering each item (main and sub-menu) via the cross-cutting `getMenuHref(item)` + `@click.prevent="openMenu(item)"` pattern (`useMenu()`) — see `vue-conventions.md#rendering-menu-links`. Never hardcode an `href` on a menu item.
- Sub-menus (`item.subMenuItems`) rendered as a native-Vue dropdown (no functional `data-bs-toggle` — the attribute can remain for Bootstrap CSS styling but no Bootstrap JS should drive it).
- Mobile sidebar: open/close via direct manipulation of `style.width` on a DOM ref (`document.getElementById('mySidenav')`), not a Bootstrap offcanvas class.
- Language selector gated by `headerSettings?.displayRules?.displayLangSelector` (so plan for this field in `settings.json` if the source header has a language selector) — implemented via `useHelper()`'s `languages`/`updateLang` and `getActiveLanguage()` (auto-imported from `laravel-vue-i18n`, not a Creopse composable), see `vue-conventions.md#header-language-selector`.
- Optional CTA button: `btnText`/`btnLink` pair (`menu-item-link` — here resolved via `getLinkFromMenuItemId`, so genuinely a menu ID in this specific case), conditional rendering (`v-if="tr(headerData?.btnText) && headerData?.btnLink"`).
- Injecting `--thm-base` as a CSS variable in `onMounted` (see `vue-conventions.md`).
- Social networks: loop over `useHelper().socialNetworks`, each network conditioned on the presence of the matching value in `getAppInformationValue(network.name)`.

## Footer

- Menu links via `getMenuItemsByLocation('footer', true)`, rendered with the same `getMenuHref`/`openMenu` pattern as the Header (see `vue-conventions.md#rendering-menu-links`).
- Newsletter: local state (`ref('')`) + `useNewsletter()` → `subscribeEmail(email, onSuccess, onError)`, feedback via `useMessage()` (Naive UI), spinner via `n-spin :show="isLoading"`.
- Contact details via `getAppInformationValue('phone'|'email'|'address')`, each block conditioned on the presence of the value.
- Copyright: `new Date().getFullYear()` + `getAppInformationValue('name')` + a `copyrightText` field (i18n-text) for the additional text.
- Social networks: same pattern as the Header.

## Slider / Hero carousel

- **Never Swiper for a full-screen hero with a text overlay** — a hand-built carousel implementation: `ref(currentIndex)`, `next()`/`prev()`, autoplay via `setInterval` managed in `onMounted`/`onUnmounted`, pause on hover (`@mouseenter="stopAutoplay"` / `@mouseleave="startAutoplay"`).
- `slides` collection with a flat structure per slide: `image`, `subtitle` (i18n-text), `title` (i18n-text), `titleBreak` (number, optional), and a **button pair as flat fields**: `btnOneLabel`/`btnOneUrl`, `btnTwoLabel`/`btnTwoUrl` — no button sub-collection since the count is fixed (`field-types.md` rule 6), rendered via the `menu-item-link` CTA pattern (`vue-conventions.md#cta-buttons-as-menu-item-link-getlinkfrommenuitemid--openlink`).
- `autoplayInterval` setting in `settings.json` (defaults to 5000ms if absent).

## Testimonials

- Content block on the left (uptitle/title/description + CTA + optional Google Review block) / slider on the right.
- The slider uses **native Swiper** (`swiper/vue`, `Navigation` module), external prev/next buttons wired via refs (`prevEl`/`nextEl`) rather than Swiper's default navigation, to allow custom CSS styling on the arrows.
- Conditional Google Review block: `reviewLabel` (i18n-text) + `reviewScore` (number/text), rendered only if both are set.
- `testimonials` collection: `companyLogo` (image), `quote` (i18n-text or i18n-editor depending on length), `authorName` (**text**, proper noun — not i18n), `authorRole` (i18n-text).

## Services (list + detail)

**List**: services generally come from a **global content model** (`storeToRefs(useContentStore())` → `services`), not a section collection — consistent with the "globally reusable content models" principle. This store is a local pattern to set up if absent, see `content-models-conventions.md#shared-store-for-reused-content-models-usecontentstore--usedataloader`. The section itself only carries the uptitle/title and an optional "see more" link.

**Detail**: `useProps().contentModelItem.contentModelData`, field access via `item?.index?.<field>`. Sidebar pattern (contact info + links to related services) + main content zone (`v-html="rHtml(item?.index?.content)"`).

- Related services (breadcrumb / contextual links): a `computed` that filters the global services store by a `parentService` relationship (`content-model-item` in the data structure), not a dedicated server request.

## Projects (list + detail)

Same logic as Services: global content model for the list (`storeToRefs(useContentStore())` → `projects`, see `content-models-conventions.md#shared-store-for-reused-content-models-usecontentstore--usedataloader`), the section only carries the wrapper (uptitle, title, "see more" link, `bgColor` possibly injected via `v-bind` in CSS).

**Detail**: no sidebar in the most recently observed pattern — full-width layout: main image, title, a horizontal meta line (`startDate`/`endDate` as **plain text**, formatted via the `formatDate()` helper from `@creopse/utils`, see `vue-conventions.md#date-formatting`), status (`status`, `single-select` or `text` with values `ongoing`/`completed`/`advocacy`, resolved on the component side via a `Record<string, {fr,en}>` lookup table rather than translated in the database), `partners` (i18n-text). Then long-form content (`v-html="rHtml(item?.index?.content)"`), and at the bottom a two-column block with `secondaryImage` + FAQ.

- FAQ: `faqs` collection (`question`/`answer`, `i18n-text`) rendered as a native-Vue accordion (see `vue-conventions.md#accordions`), no `n-image-group` gallery in this particular pattern — if the source template genuinely has a gallery of deliverables rather than an FAQ, adapt case by case, but the FAQ accordion is now the default pattern to propose for this type of section.

## News / Blog (list + detail)

- **Always** `useNews()` → `loadArticles({ pageSize, page, categories, tags })`, never a section collection for articles.
- Loading skeleton (`isLoading`) with `tw:animate-pulse` blocks during the fetch.
- Detail: `useProps()?.article` (specific to articles, different from `contentModelItem`).
- Article categories/tags: come directly from `item.categories`/`item.tags` (computed server-side), **never duplicated in a section collection** (`field-types.md` rule 7).
- Social sharing: native-Vue modal (`Teleport` + `v-if`), share link generation via `encodeURIComponent(currentUrl.value)` for Facebook/Twitter/LinkedIn/WhatsApp — no third-party JS widget.
- Recent articles in the sidebar: another `loadArticles` call filtered to exclude the current article (`result.articles.filter(a => a.slug !== item?.slug)`).

## Contact

- Local `reactive()` form, submission via `submitUserContentModelItem('', 'form-model-name', {...form}, {}, onSuccess, onError)`.
- Form fields: raw `text`, never `i18n-*` (these are visitor-entered values, see `field-types.md` rule 4).
- Success/error feedback: local booleans (`isSuccess`/`isError`), no data structure for these messages — only the labels (`successMessage`, `errorMessage`) are `i18n-text` fields of the section.
- Optional Google Maps block: a simple `iframe` with `src` = the `text` field `mapsUrl` (embed URL, non-translatable).

## Banner (internal page header band)

- Contextual title takes priority: `useProps()` tries `contentModelItem.contentModelData.index.name`, then `.title`, then `article.title`, falling back to the CMS section title (`bannerData?.title`) or the page title (`pageData?.title`) if no content context is present.
- Breadcrumb: always a "Home" link (`trans('Home')`) + the current title if present.
- Very light data structure: generally a single `title` singleton (i18n-text), the rest is computed dynamically.

## Generic section with a collection

Default pattern for a simple "features"/"benefits" section (uptitle/title/text + item grid):

```ts
const contentData = getSectionRootData(props.sectionKey)
const features = getSectionData(props.sectionKey)?.features ?? []
```

- Typical collection item: `icon` (type `icon`, rendered via `<ContentIcon :data="feature.icon" :size="42" />`), `title` (i18n-text), `text` (**i18n-editor**, never i18n-textarea — rendered via `v-html="rHtml(feature.text)"`).
- Responsive Tailwind grid (`tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-3`) rather than Bootstrap's `row-cols-*` classes when the component has no other strong Bootstrap dependency — decide case by case based on the source template's dominant style.
