# React/Creopse conventions

Mandatory reading before step 9.2 (adapting the pasted HTML), **only if the project uses the React template** (see "Frontend stack detection" in `SKILL.md`). For a Vue project, see `vue-conventions.md` — this file does not substitute for it.

## Confidence level of this document

Unlike `vue-conventions.md` (built from numerous real Vue components from previous projects), this file rests on: the confirmed naming parity between `vue-api-reference.md` and `react-api-reference.md` (same composables/hooks, same signatures, checked composable by composable), **a single** real React component example (`Content.tsx`, with its Vue equivalent `Content.vue` for direct comparison), and an inferred translation for the rest. Rules marked **confirmed** rest on one of these two concrete elements; those marked **inferred** are a reasoned but unverified translation, not yet tested under real conditions on this project.

**As a result**: on the first React projects handled with this skill, apply extra attention at the step 9 review pauses (point 7) — particularly anything marked **inferred** or **to verify** below. Reporting back observed corrections will help solidify this document to the same level as `vue-conventions.md`, which followed the same path.

---

## Structural differences from Vue (confirmed)

- **Component**: default export of a typed `React.FC<SectionProps>` function (or `(props: SectionProps) => ...`), `SectionProps` imported from `@creopse/utils` — exactly the same type as on the Vue side (`defineProps<SectionProps>()`), packaged differently (function prop vs. compiler macro).
- **No component auto-import.** Unlike the Vue examples (`<Image>`, `<Icon>`, `<Link>`, `<ContentIcon>` used without a visible `import` in `<script setup>`, presumably registered globally on the Vue side), **every component used in the JSX must be explicitly imported** at the top of the file — this is a language constraint, not a project convention: `Image` from `@creopse/react`, `Icon` from `@iconify/react`, `Icon as ContentIcon` from `@arkn/react-icon-picker`, `Link` from `@inertiajs/react` (verify that the project actually uses this package and not a custom wrapper).
- **No `.value`.** Creopse React hooks (`useHelper()`, `useContent()`, etc.) return directly usable values, not Vue refs to dereference — `const { tr, rHtml } = useHelper()` is used as-is, no `.value` anywhere.
- **Everything coming from `@creopse/utils` is strictly identical across both stacks** (`formatDate`, `hexToRgba`, enums, types) — a shared package, nothing to translate: copy it as-is from an existing Vue pattern.

## Base composables and helpers (confirmed — name parity verified against `vue-api-reference.md`)

```tsx
const { tr, rHtml } = useHelper()
const { getSectionRootData, getSectionData, getSectionSettings } = useContent()

const contentData = getSectionRootData(props.sectionKey)
const someCollection = getSectionData(props.sectionKey)?.someCollection ?? []
const sectionSettings = getSectionSettings(props.sectionKey)
```

- `tr(field)` → `{tr(field)}` in JSX.
- `rHtml(field)` → no JSX equivalent to the `v-html` directive: always go through `dangerouslySetInnerHTML`, never interpolate raw HTML into JSX text:

  ```tsx
  <div className="ck-content" dangerouslySetInnerHTML={{ __html: rHtml(item?.content) }} />
  ```

- `fileUrl(field)` → identical, direct call.
- `trans('Static key')` (interface translation, outside the CMS): on the Vue side it's a function auto-imported from `laravel-vue-i18n`, **not** a Creopse composable. The usual React sibling package is `laravel-react-i18n` (the `useLaravelReactI18n()` hook with a `t()`), but this is **not confirmed on this project** — check the actual `package.json` dependencies before assuming this specific package.

## Screen components (confirmed, `react-api-reference.md`)

| Need | Vue | React |
|---|---|---|
| Image with thumbnail | `<Image :src="..." size="large" />` | `<Image src={...} size="large" />` (`@creopse/react`) |
| Modal/portal (no native JSX equivalent to `<Teleport>`) | `<Teleport to="body">` (native Vue) | `<MountedTeleport to="body">` (`@creopse/react`, `createPortal` wrapper) |
| Transition/animation | `<Transition name="...">` (native Vue) | `<CustomTransition name="fade\|slide-fade\|bounce">` (`@creopse/react`, framer-motion) |
| SVG icon for an `icon` field (data stored in DB) | `<ContentIcon :data="..." :size="42" />` | `<ContentIcon data={...} size={42} />` (import `Icon as ContentIcon` from `@arkn/react-icon-picker`) |
| Static MDI/Bootstrap-type icon | `<Icon icon="mdi:..." />` | `<Icon icon="mdi:..." />` (`@iconify/react`) |
| Internal link (Inertia navigation) | `<Link href="...">` (`@inertiajs/vue3`) | `<Link href="...">` (`@inertiajs/react` — to verify) |
| Sticky top/bottom bar | `<StickyTop>` / `<StickyBottom>` | `<StickyTop>` / `<StickyBottom>` (`@creopse/react`, same props) |

## `StyledDiv`/`styled-components` — to verify, do not generalize without confirmation

The only React example available (`Content.tsx`) wraps its render in `const StyledDiv = styled.div\`\`` (`styled-components`) — but this tagged template is **empty**, no CSS is actually defined there; all styling goes through the same Tailwind classes (`tw:...`) as on the Vue side. This wrapper may well be an artifact of `creopse section add`'s default scaffolding for this template rather than a deliberate styling convention. **Do not add real CSS into such a tagged template by inference** — if a component needs styling beyond Tailwind, first check whether the scaffold generated by the CLI includes this wrapper by default before deciding to keep it, empty it, or remove it.

## Implementation patterns (inferred — translation of the confirmed Vue pattern from `vue-conventions.md`/`section-patterns.md`, to be validated in practice)

### Carousels/sliders (outside Swiper)

```tsx
const autoplayTimer = useRef<ReturnType<typeof setInterval> | null>(null)

useEffect(() => {
  if (slides.length > 1) {
    autoplayTimer.current = setInterval(next, interval)
  }
  return () => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current)
  }
}, [])
```

### Swiper (outside vanilla markup)

Swiper offers an official `swiper/react` binding, a sibling of `swiper/vue` already used on the Vue side — **verify that `swiper` is actually a dependency of the React project before assuming this specific sub-path**, even though it's the library's own standard solution (not a Creopse convention).

### Modals

```tsx
<MountedTeleport to="body">
  {showModal && (
    <CustomTransition name="fade">
      <div
        className="..."
        onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false) }}>
        {/* content */}
      </div>
    </CustomTransition>
  )}
</MountedTeleport>
```

No JSX equivalent to Vue's `@click.self` modifier — always manually check `e.target === e.currentTarget` to reproduce this behavior (closing on overlay click, not on content click).

### Galleries/lightbox — unresolved

On the Vue side, the project uses Naive UI's `n-image-group` (a Vue-only library, no React port). **No equivalent is confirmed for React on this project** — check the actual `package.json` dependencies (`react-photo-view`, `yet-another-react-lightbox`, a custom solution...) before choosing one by inference; don't silently assume an unverified library.

### Animated counters

No VueUse on the React side. Prefer the native `IntersectionObserver` API in a `useEffect` rather than assuming an unconfirmed equivalent dependency (`react-intersection-observer` or otherwise):

```tsx
const hasAnimated = useRef(false)
const targetRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  const el = targetRef.current
  if (!el) return
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !hasAnimated.current) {
      hasAnimated.current = true
      // start the count-up
    }
  })
  observer.observe(el)
  return () => observer.disconnect()
}, [])
```

### Videos

`useMemo` for `embedUrl` (a direct equivalent of Vue's `computed`), same YouTube watch/short/shorts format conversion logic.

### Rendering conditionals

```tsx
{data?.btnUrl && tr(data?.btnText) && (
  <a href={data.btnUrl}>{tr(data.btnText)}</a>
)}
```

### CTA buttons as `menu-item-link` (`getLinkFromMenuItemId` + `openLink`)

```tsx
{slide.btnOneUrl && tr(slide.btnOneLabel) && (
  <a
    href={getLinkFromMenuItemId(slide.btnOneUrl)}
    onClick={(e) => { e.preventDefault(); openLink(slide.btnOneUrl) }}>
    {tr(slide.btnOneLabel)}
    <i className="bi bi-arrow-right" />
  </a>
)}
```

Same `menu-item-link` vs `text` choice criterion as on the Vue side — see `field-types.md` rule 9, unchanged between the two stacks (it's a data-structure rule, not a rendering one).

### Rendering menu links (Header/Footer/sub-menus)

```tsx
<a href={getMenuHref(item)} onClick={(e) => { e.preventDefault(); openMenu(item) }}>
  {tr(item.title)}
</a>
```

### Accordions (FAQ, detailed content)

```tsx
const [openIndex, setOpenIndex] = useState<number | null>(0)
const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)
```

```tsx
<div className={openIndex === i ? 'accordion-collapse show' : 'accordion-collapse collapse'}>
```

### Header language selector

`languages` and `updateLang(code)` come from `useHelper()` (confirmed, same name on both sides). `getActiveLanguage()` on the Vue side comes from `laravel-vue-i18n` — its exact React equivalent **is not confirmed** (see the note on `trans`/`laravel-react-i18n` above).

---

## Shared store for reused content models — unresolved on the React side

The Vue pattern (`content-models-conventions.md`) uses Pinia (`defineStore`), specific to the Vue ecosystem — no direct port for React. A React project would need an equivalent mechanism (Zustand, Context + `useReducer`, or otherwise), but **no convention is confirmed on this project** for this specific case. Don't choose a state-management library by inference without first checking the project's actual dependencies — ask if the need arises rather than imposing an unverified choice.

---

## Bilingualism

Identical to Vue: all generated content (component + fake data) is bilingual FR/EN by default, no exceptions — this rule doesn't depend on the front-end stack.
