# Conventions Vue/Creopse

Lecture obligatoire avant l'étape 8.2 (adaptation du HTML collé). Ces règles s'appliquent systématiquement, quel que soit le type de section. Ce fichier documente des **patterns d'usage** (quel composable pour quel besoin, quelle convention de rendu) — pour la **signature exacte** d'un composable/helper/composant cité ici, voir `vue-api-reference.md` (packages `@creopse/vue`) et `utils-api-reference.md` (packages `@creopse/utils`, communs à tous les templates).

## Interdictions strictes

- **Aucun Bootstrap JS.** Tous les comportements interactifs du template HTML source (carousels, modals, accordéons, tabs, dropdowns) doivent être ré-implémentés en Vue natif : `ref`, `computed`, `<Transition>`, `<Teleport to="body">`, gestionnaires `@click`/`@mouseenter`/`@mouseleave`. Si le HTML source utilise `data-bs-toggle="modal"` ou équivalent, le composant final ne doit contenir aucune trace de cet attribut fonctionnel (le laisser serait un carousel/modal mort).
- **Aucun markup Swiper vanille.** Toujours passer par `swiper/vue` (`<Swiper>` / `<SwiperSlide>`) avec les modules adaptés (`Navigation`, `Pagination`, `Autoplay`), jamais le HTML brut `swiper-container`/`swiper-slide` du template source tel quel.

## Composables et helpers de base

```ts
const { tr, rHtml } = useHelper()
const { getSectionRootData, getSectionData, getSectionSettings } = useContent()

const contentData = getSectionRootData(props.sectionKey)
const someCollection = getSectionData(props.sectionKey)?.someCollection ?? []
const sectionSettings = getSectionSettings(props.sectionKey)
```

- `tr(field)` → traduction d'un champ `i18n-text`.
- `rHtml(field)` → rendu HTML d'un champ `i18n-editor`, toujours via `v-html="rHtml(field)"`.
- `fileUrl(field)` → URL absolue d'un champ `image`/`gallery`/`file`.
- `trans('Clé statique')` → traduction d'une chaîne fixe de l'interface (pas issue du CMS).

## Patterns d'implémentation obligatoires

### Carousels / sliders (hors Swiper)

`setInterval` géré dans `onMounted`/`onUnmounted`, jamais de timer qui fuit :

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
      <!-- contenu -->
    </Transition>
  </div>
</Teleport>
```

### Galeries / lightbox

Toujours `n-image-group` de Naive UI, jamais une lightbox JS tierce du template source :

```vue
<n-image-group v-model:show="showGallery" v-model:current="currentIndex" :src-list="images.map(fileUrl)" />
```

### Compteurs animés

`useIntersectionObserver` (VueUse) + `setInterval` count-up, déclenché une seule fois via un guard :

```ts
const hasAnimated = ref(false)
useIntersectionObserver(targetRef, ([{ isIntersecting }]) => {
  if (isIntersecting && !hasAnimated.value) {
    hasAnimated.value = true
    // lancer le count-up
  }
})
```

### Vidéos

Computed `embedUrl` qui convertit automatiquement les formats YouTube watch/short/shorts en format embed.

### Conditionnels de rendu

Quand une paire de champs doit être entièrement renseignée pour être affichée (ex : bouton avec label + URL) :

```vue
<a v-if="data?.btnUrl && tr(data?.btnText)" :href="data.btnUrl">{{ tr(data.btnText) }}</a>
```

### Boutons CTA en `menu-item-link` (`getLinkFromMenuItemId` + `openLink`)

Pattern de rendu pour un bouton/CTA dont le champ est de type `menu-item-link` (résolution hybride ID de menu ou URL brute) : `href` résolu via `getLinkFromMenuItemId(champ)` (`useMenu()`), navigation gérée via `openLink(champ)` (`useHelper()`) plutôt que le comportement natif du lien — permet à `openLink` de gérer uniformément les deux cas (ID de menu vs URL brute) sans dupliquer la logique de résolution :

```vue
<a
  v-if="slide.btnOneUrl && tr(slide.btnOneLabel)"
  :href="getLinkFromMenuItemId(slide.btnOneUrl)"
  @click.prevent="openLink(slide.btnOneUrl)">
  {{ tr(slide.btnOneLabel) }}
  <i class="bi bi-arrow-right"></i>
</a>
```

À distinguer du cas `text` (CTA autonome type Testimonials `btnUrl`, Projects `moreLinkUrl`) où le `href` consomme directement la chaîne brute sans passer par `getLinkFromMenuItemId` — voir `field-types.md` règle 9 pour le critère de choix.

### Rendu de liens de menu (pattern transverse Header/Footer/sous-menus)

Tout lien issu du système de menu (item principal, sous-menu, quick-links de footer) se rend systématiquement avec la même paire `href`/`click`, jamais un `href` en dur ni un `router-link` direct :

```vue
<a :href="getMenuHref(item)" @click.prevent="openMenu(item)">{{ tr(item.title) }}</a>
```

`getMenuHref`/`openMenu` viennent de `useMenu()`. C'est le même pattern qu'il s'agisse du menu principal, d'un sous-menu (`item.subMenuItems`), ou d'une liste positionnée (`getMenuItemsByLocation('footer', true)`).

### Sélecteur de langue (Header)

`languages` et `updateLang(code)` viennent de `useHelper()`. `getActiveLanguage()` (valeur courante du `<select>`) n'est **pas** un composable Creopse : c'est une fonction auto-importée du package `laravel-vue-i18n`, à utiliser directement sans destructuring depuis `useHelper()` ni aucun autre composable :

```vue
<select :value="getActiveLanguage()" @change="updateLang(($event.target as HTMLSelectElement)?.value)">
  <option v-for="lang in languages" :key="lang.value" :value="lang.value">{{ lang.label }}</option>
</select>
```

Conditionné par `headerSettings?.displayRules?.displayLangSelector` (cf. `section-patterns.md#header`).

### Accordéons (FAQ, contenu détaillé)

Même logique Vue-native que les modals — pas de `data-bs-toggle="collapse"` fonctionnel. État = index ouvert (pas un tableau de booléens) :

```ts
const openIndex = ref<number | null>(0)
const toggle = (i: number) => { openIndex.value = openIndex.value === i ? null : i }
```

```vue
<div class="accordion-collapse" :class="{ collapse: openIndex !== i, show: openIndex === i }">
```

### Formatage de date

`formatDate()` local (`toLocaleDateString('fr-FR', ...)`) est remplacé par le helper officiel `formatDate(date, options?: { outPattern?; locale? })` de `@creopse/utils`/`@creopse/utils/helpers` — ne plus réécrire de logique de formatage de date à la main, importer et appeler ce helper avec l'`outPattern`/`locale` voulus à chaque fois qu'un champ `text` contient une date brute à afficher proprement.

### `getAppInformationValue` avant tout champ de section redondant

Voir `field-types.md` règle 8 pour la liste exhaustive des clés disponibles (`AppInformationKey`). Ne jamais recréer un champ de section pour l'une de ces valeurs.

## Classes Tailwind vs Bootstrap/thème

Le projet mixe Bootstrap 5 (venant du template source) et Tailwind (`tw:` prefix). En cas de conflit de spécificité CSS, utiliser `tw:!` (important) sur la classe Tailwind, ou préférer du CSS scoped classique si le conflit persiste.

## Formulaires

- Soumission via `submitUserContentModelItem('', 'nom-du-modele', { ...form }, {}, onSuccess, onError)`.
- Les champs du formulaire (`form.name`, `form.email`, etc.) sont des `text`/`checkbox` bruts côté structure de données — jamais `i18n-*` (cf. `field-types.md`).

## Footer / Header (patterns transverses)

- Footer : liens via `getMenuItemsByLocation('footer', true)`, réseaux sociaux via `useHelper().socialNetworks`, copyright via `new Date().getFullYear()`.
- Header : injection globale de `--thm-base` en CSS variable dans `onMounted` (`document.documentElement.style.setProperty`) à partir de la couleur primaire. Pour toute variante avec transparence (ex. `--thm-base-rgb`/valeur rgba dérivée), utiliser `hexToRgba(hex, alpha)` de `@creopse/utils`/`@creopse/utils/helpers` — renvoie directement une chaîne `rgba(...)` complète, pas de parseur RGB local à écrire.

## Détails de contenu (pages Detail)

- Accès aux données via `useProps()` puis `contentModelItem.contentModelData` pour un modèle de contenu générique, ou `contentProps?.article` spécifiquement pour un article de news.
- News/blog : toujours passer par `useNews()` → `loadArticles({ pageSize, page, categories, tags })` qui retourne `{ articles, meta }`.
- Pagination serveur : `getPaginatedContentModelItems(name, page, pageSize, filterByIsActive, query, dataFilters)`, filtrage catégorie via l'opérateur `json_contains`.

## Bilinguisme

Tout le contenu généré (composant + fake data) est bilingue FR/EN par défaut, sans exception, même si le template HTML source n'est fourni que dans une langue.
