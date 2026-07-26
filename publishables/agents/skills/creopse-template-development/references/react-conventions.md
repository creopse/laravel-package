# Conventions React/Creopse

Lecture obligatoire avant l'étape 9.2 (adaptation du HTML collé), **uniquement si le projet utilise le template React** (voir "Détection de la stack frontend" dans `SKILL.md`). Pour un projet Vue, voir `vue-conventions.md` — ce fichier ne s'y substitue pas.

## Niveau de confiance de ce document

À la différence de `vue-conventions.md` (construit à partir de nombreux composants Vue réels de projets précédents), ce fichier repose sur : la parité de nommage confirmée entre `vue-api-reference.md` et `react-api-reference.md` (mêmes composables/hooks, mêmes signatures, vérifiée composable par composable), **un seul** exemple réel de composant React (`Content.tsx`, avec son équivalent Vue `Content.vue` pour comparaison directe), et une traduction déduite pour le reste. Les règles marquées **confirmé** s'appuient sur l'un de ces deux éléments concrets ; celles marquées **déduit** sont une traduction raisonnée mais non vérifiée en conditions réelles sur ce projet.

**En conséquence** : sur les premiers projets React traités avec cette skill, accorder une attention supplémentaire aux pauses de review de l'étape 9 (point 7) — en particulier tout ce qui est marqué **déduit** ou **à vérifier** ci-dessous. Remonter les corrections observées permettra de solidifier ce document au même niveau que `vue-conventions.md`, qui a suivi le même chemin.

---

## Différences structurelles avec Vue (confirmé)

- **Composant** : export par défaut d'une fonction typée `React.FC<SectionProps>` (ou `(props: SectionProps) => ...`), `SectionProps` importé de `@creopse/utils` — exactement le même type que côté Vue (`defineProps<SectionProps>()`), packagé différemment (prop de fonction vs macro de compilation).
- **Aucun auto-import de composant.** Contrairement aux exemples Vue (`<Image>`, `<Icon>`, `<Link>`, `<ContentIcon>` utilisés sans `import` visible dans `<script setup>`, vraisemblablement enregistrés globalement côté Vue), **chaque composant utilisé dans le JSX doit être explicitement importé** en tête de fichier — c'est une contrainte du langage, pas une convention du projet : `Image` depuis `@creopse/react`, `Icon` depuis `@iconify/react`, `Icon as ContentIcon` depuis `@arkn/react-icon-picker`, `Link` depuis `@inertiajs/react` (à vérifier que le projet utilise bien ce package et pas un wrapper custom).
- **Pas de `.value`.** Les hooks Creopse React (`useHelper()`, `useContent()`, etc.) renvoient des valeurs directement exploitables, pas des refs Vue à déréférencer — `const { tr, rHtml } = useHelper()` s'utilise tel quel, sans `.value` nulle part.
- **Tout ce qui vient de `@creopse/utils` est strictement identique dans les deux stacks** (`formatDate`, `hexToRgba`, enums, types) — package partagé, pas de traduction à faire : copier tel quel depuis un pattern Vue existant.

## Composables et helpers de base (confirmé — parité de nom vérifiée avec `vue-api-reference.md`)

```tsx
const { tr, rHtml } = useHelper()
const { getSectionRootData, getSectionData, getSectionSettings } = useContent()

const contentData = getSectionRootData(props.sectionKey)
const someCollection = getSectionData(props.sectionKey)?.someCollection ?? []
const sectionSettings = getSectionSettings(props.sectionKey)
```

- `tr(field)` → `{tr(field)}` en JSX.
- `rHtml(field)` → pas d'équivalent de la directive `v-html` en JSX : toujours passer par `dangerouslySetInnerHTML`, jamais interpoler le HTML brut dans le texte du JSX :

  ```tsx
  <div className="ck-content" dangerouslySetInnerHTML={{ __html: rHtml(item?.content) }} />
  ```

- `fileUrl(field)` → identique, appel direct.
- `trans('Clé statique')` (traduction d'interface, hors CMS) : côté Vue c'est une fonction auto-importée de `laravel-vue-i18n`, **pas** un composable Creopse. Le package React sœur habituel est `laravel-react-i18n` (hook `useLaravelReactI18n()` avec un `t()`), mais ce n'est **pas confirmé sur ce projet** — vérifier les dépendances réelles du `package.json` avant d'assumer ce package précis.

## Composants d'écran (confirmé, `react-api-reference.md`)

| Besoin | Vue | React |
|---|---|---|
| Image avec thumbnail | `<Image :src="..." size="large" />` | `<Image src={...} size="large" />` (`@creopse/react`) |
| Modal/portail (pas d'équivalent JSX natif à `<Teleport>`) | `<Teleport to="body">` (natif Vue) | `<MountedTeleport to="body">` (`@creopse/react`, wrapper `createPortal`) |
| Transition/animation | `<Transition name="...">` (natif Vue) | `<CustomTransition name="fade\|slide-fade\|bounce">` (`@creopse/react`, framer-motion) |
| Icône SVG de champ `icon` (data stockée en base) | `<ContentIcon :data="..." :size="42" />` | `<ContentIcon data={...} size={42} />` (import `Icon as ContentIcon` depuis `@arkn/react-icon-picker`) |
| Icône statique type MDI/Bootstrap | `<Icon icon="mdi:..." />` | `<Icon icon="mdi:..." />` (`@iconify/react`) |
| Lien interne (navigation Inertia) | `<Link href="...">` (`@inertiajs/vue3`) | `<Link href="...">` (`@inertiajs/react` — à vérifier) |
| Barre collante haut/bas | `<StickyTop>` / `<StickyBottom>` | `<StickyTop>` / `<StickyBottom>` (`@creopse/react`, mêmes props) |

## `StyledDiv`/`styled-components` — à vérifier, ne pas généraliser sans confirmation

Le seul exemple React disponible (`Content.tsx`) enveloppe son rendu dans `const StyledDiv = styled.div\`\``(`styled-components`) — mais ce tagged template est **vide**, aucun CSS n'y est réellement défini ; tout le style passe par les mêmes classes Tailwind (`tw:...`) que côté Vue. Il est possible que ce wrapper soit un artefact du scaffolding par défaut de`creopse section add` pour ce template plutôt qu'une convention délibérée de style. **Ne pas ajouter de CSS réel dans un tel tagged template par déduction** — si un composant a besoin de style au-delà de Tailwind, vérifier d'abord si le scaffold généré par la CLI inclut ce wrapper par défaut avant de décider de le garder, le vider, ou le retirer.

## Patterns d'implémentation (déduit — traduction du pattern Vue confirmé de `vue-conventions.md`/`section-patterns.md`, à valider en pratique)

### Carousels/sliders (hors Swiper)

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

### Swiper (hors markup vanille)

Swiper propose un binding officiel `swiper/react` (`<Swiper>`/`<SwiperSlide>`), sœur de `swiper/vue` déjà utilisé côté Vue — **à vérifier que `swiper` est bien une dépendance du projet React avant d'assumer ce sous-chemin précis**, même si c'est la solution standard de la librairie elle-même (pas une convention Creopse).

### Modals

```tsx
<MountedTeleport to="body">
  {showModal && (
    <CustomTransition name="fade">
      <div
        className="..."
        onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false) }}>
        {/* contenu */}
      </div>
    </CustomTransition>
  )}
</MountedTeleport>
```

Pas d'équivalent JSX au modificateur `@click.self` de Vue — toujours vérifier manuellement `e.target === e.currentTarget` pour reproduire ce comportement (fermeture au clic sur l'overlay, pas sur le contenu).

### Galeries/lightbox — non résolu

Côté Vue, le projet utilise `n-image-group` de Naive UI (librairie Vue-only, aucun portage React). **Aucun équivalent n'est confirmé pour React sur ce projet** — vérifier les dépendances réelles du `package.json` (`react-photo-view`, `yet-another-react-lightbox`, solution custom...) avant d'en choisir une par déduction ; ne pas assumer silencieusement une librairie non vérifiée.

### Compteurs animés

Pas de VueUse côté React. Préférer l'API native `IntersectionObserver` dans un `useEffect` plutôt que de supposer une dépendance équivalente non confirmée (`react-intersection-observer` ou autre) :

```tsx
const hasAnimated = useRef(false)
const targetRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  const el = targetRef.current
  if (!el) return
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !hasAnimated.current) {
      hasAnimated.current = true
      // lancer le count-up
    }
  })
  observer.observe(el)
  return () => observer.disconnect()
}, [])
```

### Vidéos

`useMemo` pour `embedUrl` (équivalent direct du `computed` Vue), même logique de conversion des formats YouTube watch/short/shorts.

### Conditionnels de rendu

```tsx
{data?.btnUrl && tr(data?.btnText) && (
  <a href={data.btnUrl}>{tr(data.btnText)}</a>
)}
```

### Boutons CTA en `menu-item-link` (`getLinkFromMenuItemId` + `openLink`)

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

Même critère de choix `menu-item-link` vs `text` que côté Vue — voir `field-types.md` règle 9, inchangée entre les deux stacks (c'est une règle de structure de données, pas de rendu).

### Rendu de liens de menu (Header/Footer/sous-menus)

```tsx
<a href={getMenuHref(item)} onClick={(e) => { e.preventDefault(); openMenu(item) }}>
  {tr(item.title)}
</a>
```

### Accordéons (FAQ, contenu détaillé)

```tsx
const [openIndex, setOpenIndex] = useState<number | null>(0)
const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)
```

```tsx
<div className={openIndex === i ? 'accordion-collapse show' : 'accordion-collapse collapse'}>
```

### Sélecteur de langue (Header)

`languages` et `updateLang(code)` viennent de `useHelper()` (confirmé, même nom des deux côtés). `getActiveLanguage()` côté Vue vient de `laravel-vue-i18n` — son équivalent React exact **n'est pas confirmé** (voir la remarque sur `trans`/`laravel-react-i18n` plus haut).

---

## Store partagé pour modèles de contenu réutilisés — non résolu côté React

Le pattern Vue (`content-models-conventions.md`) utilise Pinia (`defineStore`), spécifique à l'écosystème Vue — pas de portage direct pour React. Un projet React aurait besoin d'un mécanisme équivalent (Zustand, Context + `useReducer`, ou autre), mais **aucune convention n'est confirmée sur ce projet** pour ce cas précis. Ne pas choisir une librairie de state management par déduction sans vérifier d'abord les dépendances réelles du projet — demander si le besoin se présente plutôt que d'imposer un choix non vérifié.

---

## Bilinguisme

Identique à Vue : tout le contenu généré (composant + fake data) est bilingue FR/EN par défaut, sans exception — cette règle ne dépend pas de la stack front.
