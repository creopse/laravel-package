# Conventions — Content models (`content-model`)

To consult at step 7 of the workflow (`SKILL.md`), before step 8 (permalinks) and the section-by-section completion (step 9) of the sections that depend on them.

---

## Detecting the need

A content model is needed as soon as a section from the inventory (step 5.1) matches a "list + detail" pattern rather than single-section content: Services (`Services.vue` + `ServiceDetails.vue`), Projects (`Projects.vue` + `ProjectDetails.vue`), News/Articles, Team, training offerings, etc. — recognizable by the fact that the component consumes `storeToRefs(useContentStore())` and `getContentPath(item)` rather than `getSectionData`/`getSectionRootData` alone (see `section-patterns.md`).

Build the list of needed models from this inventory **before** starting step 9, so that the sections referencing them (via `content-model-item`/`content-model-items` in their own structure, e.g. the `parent-service` field of Services) can point to real items as soon as they're completed. If the menu created in step 6 needs an item pointing directly to a content model item (`--target-type content-link`), come back to complete that menu right after this step — see `menu-conventions.md`.

---

## Shared store for reused content models (`useContentStore` / `useDataloader`)

**Optional, project-local** pattern — not provided by `@creopse/vue`/`@creopse/react`/`@creopse/utils`, to be set up case by case rather than assumed already present. **Specific to a Vue project** (relies on Pinia) — for a React project, see `react-conventions.md` (no confirmed equivalent for now, don't transpose Pinia as-is). Relevant when a content model has **few items** and is consumed by **several sections** (typically list + detail, e.g. Services/Projects): instead of calling `getContentModelItems(name)` (`useContent()`) separately in every section that needs it, load it once at app startup into a shared Pinia store.

Don't use it for a content model that is:

- consumed by a single section → `getContentModelItems(name)` directly on the spot, no store needed;
- has many items or requires server-side filtering/pagination → `getPaginatedContentModelItems` on demand (the store loads everything into memory at once, suited only to small volumes).

### Structure

```
resources/js/stores/content.ts          # Pinia store: state only, one array per reused model
resources/js/composables/dataloader.ts  # composable that populates the store on startup
resources/js/App.vue                    # calls initializeData() once, at root mount
```

```ts
// resources/js/stores/content.ts
import type { ContentModelItemModel } from '@creopse/utils'

interface ContentState {
  services: ContentModelItemModel['data'][]
  projects: ContentModelItemModel['data'][]
  // one key per content model reused in the project — adapt to the real models, don't pre-fill by default
}

export const useContentStore = defineStore('content', {
  state: (): ContentState => ({
    services: [],
    projects: [],
  }),
  getters: {},
})
```

```ts
// resources/js/composables/dataloader.ts
export const useDataloader = () => {
  const { services, projects } = storeToRefs(useContentStore())
  const { getContentModelItems } = useContent()

  const initializeData = async () => {
    services.value = (await getContentModelItems('services')) || []
    projects.value = (await getContentModelItems('projects')) || []
  }

  return { initializeData }
}
```

```vue
<!-- resources/js/App.vue -->
<script setup lang="ts">
  const { initializeData } = useDataloader()
  initializeData()
</script>

<template>
  <slot></slot>
</template>
```

Once this store is in place for a given model, sections consume it exclusively via `storeToRefs(useContentStore())` (see `section-patterns.md` — Services/Projects) — never call `getContentModelItems` in parallel for that same model, on pain of double loading.

---

## `intent` / `access-scope` choice

Two pairs to use depending on the content type, **confirmed convention for this project** (to be kept as-is, regardless of the generic wording of the CLI documentation):

| Content type | `intent` | `access-scope` | Examples |
|---|---|---|---|
| Content managed **only from the admin** (editorial, catalog) | `editorial-content` | `internal` | Services, Projects, Team, Articles, training offerings |
| Content **submitted by site users** (forms, visitor-side data) | `user-data` | `user-editable` | Contact form messages (`contact-form-messages`, see `Contact.vue`), newsletter sign-ups if modeled as a content-model |

Don't use `user-data`/`user-editable` for catalog content even if an admin needs to be able to edit it from the interface — the distinction is about **who originally produces the data** (the editorial team vs. the site visitor), not about who can view it afterward.

---

## Folder structure

```
.creopse/content-models/<ModelName>/
├── data-structure.json     # field structure (singletons only, same format as a section's data.json)
└── items/
    └── <item-slug>.json    # one fake data file per item, ready for item-add --data
```

---

## CLI commands

### Creating the model

```bash
creopse content-model add service editorial-content internal \
  --title "en:Service" --title "fr:Service" \
  --data-structure @.creopse/content-models/Service/data-structure.json \
  --title-field-name name \
  --has-permalink true
```

- `--title-field-name`: the structure field used as the display title in admin (usually `name` or `title`).
- `--has-permalink`: `true` as soon as the model has a dedicated detail page (`ServiceDetails`, `ProjectDetails`...), `false` otherwise. **This flag alone is not enough**: it just marks the model as eligible for a permalink, it doesn't wire the route to the detail page yet. That actual wiring (`pathPrefix` + target page) happens at step 8 via `creopse permalink add` — see `permalinks-conventions.md`, to handle right after creating this model and its items.

For a user-data model (e.g. contact messages):

```bash
creopse content-model add contact-form-messages user-data user-editable \
  --title "en:Contact Messages" --title "fr:Messages de contact" \
  --data-structure @.creopse/content-models/ContactFormMessages/data-structure.json
```

This specific case (`contact-form-messages`) generally doesn't need to be manually recreated if it already exists natively in the project's Creopse install (used directly by `submitUserContentModelItem` in `Contact.vue`) — check whether it exists before recreating it.

### Adding items (fake data)

```bash
creopse content-model item-add service --title "en:Energy Audit" --data @.creopse/content-models/Service/items/energy-audit.json
creopse content-model item-add service --title "en:Capacity Building" --data @.creopse/content-models/Service/items/capacity-building.json
```

The `--data` format follows the same rules as section fake data (`fake-data-conventions.md`): `i18n-text`/`i18n-editor` as stringified JSON, images as `picsum.photos` unless a real brand asset, icons as inline SVG, etc. — and follows the **same `index` nesting** for singleton fields as a section (a content model generally has no collections, only singletons, so an item's fake data file is limited to the `index` object). This nesting shows up directly on the component side: `ServiceDetails.vue`/`ProjectDetails.vue` consume `contentProps?.contentModelItem?.contentModelData?.index?.title` — don't omit it when generating an item's fake data, on pain of an empty render on the detail side.

---

## Consistency with section fake data

Once items are created, note their IDs (CLI output or a `database-query` via Laravel Boost if available — see `media-conventions.md`) so that `content-model-item` fields referenced from other sections (e.g. `parent-service` in the Service structure itself, or a similar field in another section) point to real IDs at step 9, instead of a randomly invented ID (see the corresponding rule in `fake-data-conventions.md`).

---

## Validation point

Present the list of models detected as necessary, with the `intent`/`access-scope` pair proposed for each, before running the `content-model add` commands.
