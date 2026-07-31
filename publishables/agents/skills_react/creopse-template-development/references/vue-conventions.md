# Vue/Creopse conventions

Mandatory reading before step 9.2 (adapting the pasted HTML). These rules apply systematically, regardless of the section type. This file documents **usage patterns** (which composable for which need, which rendering convention) — for the **exact signature** of a composable/helper/component cited here, see `vue-api-reference.md` (`@creopse/vue` packages) and `utils-api-reference.md` (`@creopse/utils` packages, common to all templates).

## Strict prohibitions

- **No Bootstrap JS whatsoever.** Every interactive behavior of the source HTML template (carousels, modals, accordions, tabs, dropdowns) must be re-implemented in native Vue: `ref`, `computed`, `<Transition>`, `<Teleport to="body">`, `@click`/`@mouseenter`/`@mouseleave` handlers. If the source HTML uses `data-bs-toggle="modal"` or an equivalent, the final component must contain no trace of that functional attribute (leaving it would be a dead carousel/modal).
- **No vanilla Swiper markup.** Always go through `swiper/vue` (`<Swiper>` / `<SwiperSlide>`) with the appropriate modules (`Navigation`, `Pagination`, `Autoplay`), never the raw `swiper-container`/`swiper-slide` HTML from the source template as-is.

## Base composables and helpers

```ts
const { tr, rHtml } = useHelper()
const { getSectionRootData, getSectionData, getSectionSettings } = useContent()

const contentData = getSectionRootData(props.sectionKey)
const someCollection = getSectionData(props.sectionKey)?.someCollection ?? []
const sectionSettings = getSectionSettings(props.sectionKey)
```

- `tr(field)` → translation of an `i18n-text` field.
- `rHtml(field)` → HTML rendering of an `i18n-editor` field, always via `v-html="rHtml(field)"`.
- `fileUrl(field)` → absolute URL of an `image`/`gallery`/`file` field.
- `trans('Static key')` → translation of a fixed interface string (not sourced from the CMS).

## Mandatory implementation patterns

### Carousels / sliders (outside Swiper)

`setInterval` managed in `onMounted`/`onUnmounted`, never a leaking timer:

```ts
let autoplayTimer: ReturnType<typeof setInterval> | null = null
const startAutoplay = () => { autoplayTimer = setInterval(next, interval) }
const stopAutoplay = () => { if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null } }
onMounted(() => { if (slides.length > 1) startAutoplay() })
onUnmounted(() => stopAutoplay())
```

### Modals

```vue
<Teleport to="body">
  <div v-if="showModal" class="..." @click.self="showModal = false">
    <Transition name="modal-fade">
      <!-- content -->
    </Transition>
  </div>
</Teleport>
```

### Galleries / lightbox

Always Naive UI's `n-image-group`, never a third-party JS lightbox from the source template:

```vue
<n-image-group v-model:show="showGallery" v-model:current="currentIndex" :src-list="images.map(fileUrl)" />
```

### Animated counters

`useIntersectionObserver` (VueUse) + `setInterval` count-up, triggered only once via a guard:

```ts
const hasAnimated = ref(false)
useIntersectionObserver(targetRef, ([{ isIntersecting }]) => {
  if (isIntersecting && !hasAnimated.value) {
    hasAnimated.value = true
    // start the count-up
  }
})
```

### Videos

A computed `embedUrl` that automatically converts YouTube watch/short/shorts formats into embed format.

### Rendering conditionals

When a pair of fields must be fully populated to be displayed (e.g. a button with a label + a URL):

```vue
<a v-if="data?.btnUrl && tr(data?.btnText)" :href="data.btnUrl">{{ tr(data.btnText) }}</a>
```

### CTA buttons as `menu-item-link` (`getLinkFromMenuItemId` + `openLink`)

Rendering pattern for a button/CTA whose field is of type `menu-item-link` (hybrid resolution: menu ID or raw URL): `href` resolved via `getLinkFromMenuItemId(field)` (`useMenu()`), navigation handled via `openLink(field)` (`useHelper()`) rather than the link's native behavior — this lets `openLink` handle both cases (menu ID vs raw URL) uniformly without duplicating the resolution logic:

```vue
<a
  v-if="slide.btnOneUrl && tr(slide.btnOneLabel)"
  :href="getLinkFromMenuItemId(slide.btnOneUrl)"
  @click.prevent="openLink(slide.btnOneUrl)">
  {{ tr(slide.btnOneLabel) }}
  <i class="bi bi-arrow-right"></i>
</a>
```

To be distinguished from the `text` case (standalone CTA such as Testimonials `btnUrl`, Projects `moreLinkUrl`) where the `href` consumes the raw string directly without going through `getLinkFromMenuItemId` — see `field-types.md` rule 9 for the choice criterion.

### Rendering menu links (cross-cutting Header/Footer/sub-menu pattern)

Any link coming from the menu system (main item, sub-menu, footer quick-links) is systematically rendered with the same `href`/`click` pair, never a hardcoded `href` nor a direct `router-link`:

```vue
<a :href="getMenuHref(item)" @click.prevent="openMenu(item)">{{ tr(item.title) }}</a>
```

`getMenuHref`/`openMenu` come from `useMenu()`. It's the same pattern whether it's the main menu, a sub-menu (`item.subMenuItems`), or a location-scoped list (`getMenuItemsByLocation('footer', true)`).

### Header language selector

`languages` and `updateLang(code)` come from `useHelper()`. `getActiveLanguage()` (the `<select>`'s current value) is **not** a Creopse composable: it's a function auto-imported from the `laravel-vue-i18n` package, to be used directly without destructuring it from `useHelper()` or any other composable:

```vue
<select :value="getActiveLanguage()" @change="updateLang(($event.target as HTMLSelectElement)?.value)">
  <option v-for="lang in languages" :key="lang.value" :value="lang.value">{{ lang.label }}</option>
</select>
```

Gated by `headerSettings?.displayRules?.displayLangSelector` (see `section-patterns.md#header`).

### Accordions (FAQ, detailed content)

Same native-Vue logic as modals — no functional `data-bs-toggle="collapse"`. State = open index (not an array of booleans):

```ts
const openIndex = ref<number | null>(0)
const toggle = (i: number) => { openIndex.value = openIndex.value === i ? null : i }
```

```vue
<div class="accordion-collapse" :class="{ collapse: openIndex !== i, show: openIndex === i }">
```

### Date formatting

The local `formatDate()` (`toLocaleDateString('fr-FR', ...)`) is replaced by the official `formatDate(date, options?: { outPattern?; locale? })` helper from `@creopse/utils`/`@creopse/utils/helpers` — stop hand-writing date-formatting logic, import and call this helper with the desired `outPattern`/`locale` whenever a `text` field holds a raw date that needs to be displayed cleanly.

### `getAppInformationValue` before any redundant section field

See `field-types.md` rule 8 for the exhaustive list of available keys (`AppInformationKey`). Never recreate a section field for one of these values.

## Tailwind vs Bootstrap/theme classes

The project mixes Bootstrap 5 (from the source template) and Tailwind (`tw:` prefix). In case of CSS specificity conflict, use `tw:!` (important) on the Tailwind class, or prefer classic scoped CSS if the conflict persists.

## Forms

- Submission via `submitUserContentModelItem('', 'model-name', { ...form }, {}, onSuccess, onError)`.
- Form fields (`form.name`, `form.email`, etc.) are raw `text`/`checkbox` on the data-structure side — never `i18n-*` (see `field-types.md`).

## Footer / Header (cross-cutting patterns)

- Footer: links via `getMenuItemsByLocation('footer', true)`, social networks via `useHelper().socialNetworks`, copyright via `new Date().getFullYear()`.
- Header: global injection of `--thm-base` as a CSS variable in `onMounted` (`document.documentElement.style.setProperty`) from the primary color. For any variant involving transparency (e.g. `--thm-base-rgb`/a derived rgba value), use `hexToRgba(hex, alpha)` from `@creopse/utils`/`@creopse/utils/helpers` — it directly returns a complete `rgba(...)` string, no local RGB parser to write.

## Content details (Detail pages)

- Data access via `useProps()` then `contentModelItem.contentModelData` for a generic content model, or `contentProps?.article` specifically for a news article.
- News/blog: always go through `useNews()` → `loadArticles({ pageSize, page, categories, tags })`, which returns `{ articles, meta }`.
- Server-side pagination: `getPaginatedContentModelItems(name, page, pageSize, filterByIsActive, query, dataFilters)`, category filtering via the `json_contains` operator.

## Bilingualism

All generated content (component + fake data) is bilingual FR/EN by default, no exceptions, even if the source HTML template is only provided in one language.
