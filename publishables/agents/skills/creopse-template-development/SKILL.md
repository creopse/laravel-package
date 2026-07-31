---
name: creopse-template-development
description: Converts a static HTML template into a complete, functional Creopse template in dev (base information, real media, pages, Vue or React section/widget components, JSON data structures, content models, permalinks, navigation/menus, bilingual fake data with real images, final page assembly), following a 10-step workflow. Covers both Creopse frontend stacks (Vue 3 and React 19), auto-detected on the project. Use this skill as soon as an HTML template is provided for Creopse integration, as soon as splitting an index.html into sections is discussed, when creating Creopse sections/widgets/pages/menus/content-models/permalinks, or when generating JSON data structures and fake data for a Creopse section or content model — even if the user doesn't explicitly say "skill" or "template".
---

# Creopse Template Development

Design of Creopse templates (Vue 3 or React 19, + TypeScript + Laravel/Inertia, depending on the template installed on the project) from a static HTML base. This skill covers the entire pipeline, from splitting the source template through to the final assembly of functional pages in the database: media, base information, pages, sections/widgets, content models, permalinks, navigation, component completion, and final attachment.

Prerequisite: the Laravel project with Creopse is already installed and accessible (this skill does not perform the initial installation — it assumes a project already in place).

`references/vue-api-reference.md`/`references/react-api-reference.md` and `references/utils-api-reference.md` document the actual API surface of the `@creopse/vue`/`@creopse/react`/`@creopse/utils` packages (exact signatures for every composable/hook, helper, component, type) — consult them whenever a signature is in doubt, as a complement to `vue-conventions.md`/`react-conventions.md` and `section-patterns.md`, which document usage patterns rather than the API itself. **Asymmetric coverage between the two stacks**: the Vue side is based on numerous real components observed on previous projects, the React side on a single real-world example plus a translation inferred from API parity (see the warning at the top of `react-conventions.md`) — apply extra vigilance at the step 9 review pauses on a React project, at least until more real-world examples have helped solidify `react-conventions.md`.

## Frontend stack detection (Vue vs React)

Before step 1, determine which stack the project actually uses — never assume a default:

1. Inspect `package.json`: presence of `vue`/`@inertiajs/vue3` (Vue stack) vs `react`/`react-dom`/`@inertiajs/react` (React stack).
2. If sections are already scaffolded (`resources/js/Sections/`), the extension of existing files (`.vue` vs `.tsx`) confirms the stack unambiguously.
3. If doubt persists, ask rather than guess — component conventions, composables/hooks, and file paths differ between the two stacks (see steps 5 and 9).

All of this detection only matters for step 9 (adapting HTML into a component) and the file path in step 5.3 — the rest of the workflow (steps 1–8, 10: media, base-info, pages, content models, permalinks, menus, assembly) is CLI-driven and strictly identical regardless of the stack.

## Node environment detection before any shell command

Before the first `npm`/`yarn`/`pnpm`/`bun` command in this skill — which can happen as early as step 5 (scaffolding), or earlier if a check is needed, not only at step 9 — identify the package manager actually used by the project by inspecting the lock file present at the root, never by default:

| Lock file found | Manager |
|---|---|
| `package-lock.json` | npm |
| `yarn.lock` | yarn |
| `pnpm-lock.yaml` | pnpm |
| `bun.lock` / `bun.lockb` | bun |

Then read `package.json` (`scripts` key) to identify the actual names of the lint, format, and TypeScript-check commands (`lint`, `format`, `type-check`, `typecheck`, `tsc`, `check`... names vary from project to project, never assume them). These commands are used in step 9, point 6, to validate each completed component before presenting it to the user.

## Working area: `.creopse/`

All working artifacts live under `.creopse/` at the root of the Laravel project:

```
.creopse/
├── html_template/            # source HTML template provided by the user (input, read-only)
├── context.md                 # project context: client, industry, editorial tone, target languages,
│                               # contact details, social networks, AND a dedicated "Pages" section
│                               # (list of pages to create + sections to attach to them, if known in
│                               # advance) — see pages-conventions.md for the *-details pages case
├── base-info.json             # draft key/value pairs for `creopse base-info update` (step 3)
├── media/
│   ├── source/                # real brand assets deposited by the user (logo, favicon...) — input
│   ├── generated/              # content images found and downloaded (step 9) — staging before upload
│   └── manifest.json           # single ledger: local file (source/ or generated/) → uploaded media
│                                # (id, final path in DB, source_url/license for content)
├── sections/
│   └── <SectionName>/
│       ├── data-structure.json # singleton + collection structure (CLI format)
│       ├── settings.json       # section settings structure (if applicable)
│       └── fake-data.json      # section fake data, ready for `page attach-section --data`
├── content-models/
│   └── <ModelName>/
│       ├── data-structure.json
│       └── items/
│           └── <slug>.json    # fake data for an item, ready for `content-model item-add --data`
├── permalinks/
│   └── <name>.json             # one entry per permalink created (path-prefix, content-type, content-id,
│                                # content-param, page, id) — see permalinks-conventions.md
└── menus/
    └── <location>.json        # menu definition + items for a location (header, footer...)
```

**Before anything else**: read `.creopse/context.md` if it exists. It drives the tone, the industry, the language of the fake data, the real contact details to use, and the list of pages to create — never generate generic "Lorem Corp"-style fake data, nor invent pages at random, if this file provides real context. If it doesn't exist, or if the "Pages" section is missing from it, ask for this information before step 4 rather than improvising it.

**Each section has its own `sections/<SectionName>/` folder**, each content model its own `content-models/<ModelName>/` folder — never a monolithic JSON file grouping several entities. Structure and concrete data (fake data, items) live side by side under the same folder, named after the entity, in both cases — this allows targeted rewrites (a principle already in force on this project) and a state that's inspectable independently of the CLI. `permalinks/` and `menus/` remain flat folders (one file per entity) since there's no sub-structure to co-locate for either of them.

`media/source/` (provided by the user, never to be regenerated) and `media/generated/` (downloaded by the agent, regenerable) are never interchangeable — see `media-conventions.md`.

---

## Workflow overview

```
Step 1: Template splitting
  └─ assets → public/assets, integration into app.blade.php

Step 2: Real media
  └─ upload of brand assets deposited in .creopse/media/source/ (logo, favicon, photos)

Step 3: Base information
  └─ creopse base-info update, from context.md + media uploaded in step 2

Step 4: Pages
  └─ creation of the pages listed in context.md (creopse page add), including detail
     pages (*-details) — these are normal pages, not menu entries

Step 5: Scaffolding of sections and widgets (IN BULK)
  └─ body analysis, section/widget classification, duplicate detection,
     user validation, then bulk creopse section/widget add

Step 6: Navigation (menus)
  └─ locations, menu(s), items pointing to the pages created in step 4
     (excluding detail pages, which have no menu entry)

Step 7: Content models
  └─ creation of the content models referenced by the sections (Services, Projects, Team...)

Step 8: Permalinks
  └─ creopse permalink add — wires each content model (--has-permalink true) and the
     native news-article content type to their detail page created in step 4

Step 9: Completion (SECTION BY SECTION, with a review pause after each section)
  └─ for each section: paste/adapt the HTML → JSON structure → CLI submit →
     content images (search + upload) → fake data → lint/format/typecheck check → pause

Step 10: Final page assembly
  └─ attach-section (with link-id if needed), order-sections, toggle-section-status
```

Never skip the order: every step that touches the database (2, 3, 4, 5, 7, 8, 10) must be validated by the user before the corresponding CLI commands are executed — there's no simple undo for this kind of operation. Step 9 pauses after each section to allow a correction before an error propagates to the next ones. Step 10 (attachment) is deliberately placed at the very end of the workflow, once all the sections involved have their structure and fake data validated — no progressive section-by-section attachment.

---

## Step 1 — Template splitting

1. Locate the source HTML template in `.creopse/html_template/`.
2. Move all assets (`css/`, `js/`, `img/`, fonts, etc.) into the Laravel project's `public/assets`, preserving the internal relative tree (`assets/css/plugins/...`, `assets/js/plugins/...`).
3. Adapt `app.blade.php` (or the equivalent found in the project) to integrate the `<link>`/`<script>` tags matching the moved assets, **without breaking** the meta/OG/Inertia block already in place (`@vite`, `@routes`, `@inertiaHead`, `@inertia`, the `<title>`/`og:*`/`twitter:*` block conditioned on `$page['props']['meta']`).
   - Plugin CSS goes in the `<head>`, before `@vite(...)`.
   - Plugin JS goes right before `</body>`, after `@inertia`.
   - See `references/cli-reference.md` for a complete example of a target `app.blade.php`.

This step is mechanical — no validation pause needed, unless asset naming conflicts are detected (two `main.css` files, for example), in which case ask for arbitration.

---

## Step 2 — Real media

Objective: for the real brand assets deposited by the user in `.creopse/media/source/` (logo, favicon, possibly official client photos), replace placeholders with real uploaded media — before filling in the base information in step 3, which needs it.

See `references/media-conventions.md` (mandatory reading before this step) for: the `media/source/`/`media/generated/`/`manifest.json` tree, how to retrieve the final DB path after upload, and the `manifest.json` format. Never fetch these assets from `.creopse/html_template/assets/` — those are the source theme's demo visuals, not real brand assets.

No systematic validation pause here (low-risk, reversible operation), unless `.creopse/media/source/` is empty or ambiguous (several files could be the logo) — in that case, ask for confirmation before uploading.

---

## Step 3 — Base information

Objective: populate the site's global information (`base-info`) consumed by nearly every component (`getAppInformationValue('logo'|'phone'|'email'|'address'|'name'|'description'|social networks)`), from `.creopse/context.md` and the media uploaded in step 2.

See `references/base-info-conventions.md` (mandatory reading before this step) for the list of keys, their correspondence with `context.md`, and the `creopse base-info update` syntax.

Do not generate fictitious values for `base-info` keys — these are real client details. If `context.md` doesn't provide all of them, ask for the missing values rather than inventing a phone number or address.

---

## Step 4 — Pages

Objective: create the site's pages as listed in the dedicated section of `.creopse/context.md` — including detail pages (`service-details`, `project-details`, `news-details`...), which are normal pages like any other at this stage.

See `references/pages-conventions.md` (mandatory reading before this step) for the expected format of this section in `context.md`, the `creopse page add` syntax, and the special handling of detail pages (no menu entry in step 6, attached via permalink in step 8).

**Mandatory validation point**: present the user with the list of pages inferred from `context.md` (name, title per locale, position) before running a single `creopse page add` command — these commands create database entries. If `context.md` lists no pages, ask for the list before continuing rather than inferring one from the HTML template alone.

This step only creates the pages themselves (empty shells) — section attachment happens at the very end of the workflow, in step 10, once sections have been scaffolded (step 5) and completed (step 9).

---

## Step 5 — Scaffolding sections and widgets

### 5.1 Analysis and classification

Walk through the entire `<body>` of every HTML file in `.creopse/html_template/` and list all block candidates for becoming a section or a widget.

**Identifying block boundaries**:

- If the HTML contains demarcation comments (`<!--===== NAME STARTS =======-->` / `... ENDS ...`), rely on them.
- **Otherwise**, infer boundaries via structural heuristics: semantic tags (`<header>`, `<footer>`, `<nav>`, `<section>`), breaks in thematic root classes (`hero-*`, `about-*`, `services-*`...), obvious content changes. In this case, derive the PascalCase name from the visible content (heading, CSS classes, context) rather than from an absent comment.

**Section vs widget classification**:

- **Section** = content editable/manageable by an admin (Header, Hero, Features, Services, Testimonials, Footer, Contact...) → requires a data structure.
- **Widget** = static HTML block with no content-management need (Preloader, scroll-progress bar, static cookie banner...) → **no data structure**, pure HTML/Vue.

**Cross-file duplicate detection**: if an identical or near-identical block (typically Header, Footer) appears across several HTML files of the template, it must be scaffolded **only once**. Flag this explicitly in the list presented to the user.

### 5.2 Validation before scaffolding

Present the user with the complete list: proposed PascalCase name, classification (section/widget), source file(s), and any detected duplicates flagged. **Wait for confirmation before running a single CLI command** — these commands create database entries, no simple undo.

### 5.3 Bulk execution

Once validated, run the CLI commands in bulk (see `references/cli-reference.md` for the complete syntax):

```bash
creopse section add Header Hero Features Services Testimonials Footer Contact
creopse widget add Preloader ScrollProgress
```

Each generated section places its component at `resources/js/Sections/<SectionName>.vue` (Vue stack). **For a React stack, verify the path and extension (`.tsx`) actually generated by `creopse section add` on this project rather than assuming an identical path** — this path has not been confirmed under real-world conditions on the React side, unlike the Vue path above, which reflects observed usage.
Each generated widget places its component at `resources/js/Widgets/<WidgetName>.vue` (`.tsx` in React, same caveat).

---

## Step 6 — Navigation (menus)

Objective: actually create the locations, menu(s), and items consumed by the Header/Footer components (`getMenuItems()`, `getMenuItemsByLocation('footer')`, `menu-item-link` resolution via `getLinkFromMenuItemId`/`getMenuHref`) — without this step, a scaffolded Header has nothing to display in dev.

See `references/menu-conventions.md` (mandatory reading before this step) for the correspondence between locations/component placements, the `menu location-add` / `menu add` / `menu item-add` syntax, and the distinction from the permalinks in step 8.

Items point to the pages created in step 4 (`--page <n>` / `--target-type page-link`) — this step must therefore come after step 4. **Do not create a menu item for detail pages** (`service-details`, `project-details`...): they're reached via the permalink from step 8, not via the menu.

**Validation point**: present the proposed menu structure (locations, items, hierarchy/dropdowns) before execution.

---

## Step 7 — Content models

Objective: create the content models referenced by `content-model-item`/`content-model-items` fields in upcoming sections (Services, Projects, Team, training offerings, etc.), before wiring their permalinks in step 8 and then completing the sections that consume them in step 9 — so the generated fake data actually flows through the CLI instead of remaining dead files.

See `references/content-models-conventions.md` (mandatory reading before this step) for:
- The `intent`/`access-scope` choice depending on the content type (admin-only managed content vs user-submitted content).
- The `.creopse/content-models/<ModelName>/` folder structure.
- The `content-model add` then `content-model item-add --data @...` syntax.
- What `--has-permalink true` does and does not do (see step 8).

**Validation point**: present the list of models detected as necessary (inferred from the section inventory of step 5.1, or explicitly requested by the user) before creation.

---

## Step 8 — Permalinks

Objective: wire each content model created in step 7 with `--has-permalink true` (and the native `news-article` content type if the project has articles) to the corresponding detail page created in step 4 — without this step, `getContentPath(item)` never leads to `ServiceDetails.vue`/`ProjectDetails.vue`/`NewsDetails.vue`, even once those sections are perfectly coded and attached in step 10.

See `references/permalinks-conventions.md` (mandatory reading before this step) for:
- Why `--has-permalink true` alone is not enough.
- The `--content-param` choice depending on content type (`id` by default for `content-model`, `slug` for `news-article`/`news-category`/`news-tag`).
- The `creopse permalink add`/`edit`/`remove` syntax.
- The tracking format in `.creopse/permalinks/<name>.json`.

This step necessarily comes after step 4 (the target page must exist) and step 7 (the target content model must exist) — never before.

**Validation point**: present the list of permalinks to create (prefix, targeted content, associated detail page) before execution — these commands determine the site's public routing.

---

## Step 9 — Completion, section by section

Process one section at a time, in this order, then pause before moving to the next:

1. **Paste the matching raw HTML block** into the `<template>` of the generated Vue component (`resources/js/Sections/<SectionName>.vue`).
2. **Adapt it to the Creopse conventions of the detected framework** — see `references/vue-conventions.md` (Vue stack) or `references/react-conventions.md` (React stack), one of the two being mandatory reading before this step depending on the project's stack (see "Frontend stack detection" at the top of this document) — and `references/section-patterns.md` for the pattern closest to the type of section being handled (header, footer, slider, testimonials, news, contact, etc.). **`section-patterns.md` documents the data logic** (which composable/hook to call, which fields to check, in what order) **valid for both stacks** — its code excerpts are written in Vue, to be syntactically translated to React via the tables in `react-conventions.md` on a React project, without changing the logic itself. For the exact signature of any composable/hook used (`useHelper()`, `useContent()`, `useMenu()`, `useNews()`, etc.) or any pure helper (`formatDate`, `hexToRgba`, etc.), consult `references/vue-api-reference.md` or `references/react-api-reference.md` (depending on the stack) and `references/utils-api-reference.md` (common to both) rather than relying solely on the excerpts already quoted in the conventions/patterns files — the latter document *patterns*, the `*-api-reference.md` files document the actual *API surface* of the packages and are authoritative whenever there's doubt or a signature not quoted elsewhere.
3. **Define the data structure** (`index` singletons + collections, and `settings` if the section has display settings) — see `references/field-types.md` for the list of available field types, and in particular the `menu-item-link` (hybrid type, supports both menu item **and** raw URL) vs `text` choice rule. Write the result to:
   - `.creopse/sections/<SectionName>/data-structure.json`
   - `.creopse/sections/<SectionName>/settings.json` (if applicable)
4. **Submit the structure via the CLI**, passing files (no inline JSON as a shell argument — too fragile to escaping):
   ```bash
   creopse section edit SectionName --data-structure @.creopse/sections/SectionName/data-structure.json --settings-structure @.creopse/sections/SectionName/settings.json
   ```
   The `@` prefix is mandatory to tell the CLI it's a path to read, not literal JSON (see `references/cli-reference.md`).
5. **Generate bilingual (FR/EN) fake data** consistent with `.creopse/context.md`, and write it to `.creopse/sections/<SectionName>/fake-data.json` — see `references/fake-data-conventions.md` for the detailed output format (snake_case, cross-section consistency, editorial content, the full-regeneration rule in case of correction). For every `image`/`gallery` field, search for and upload a real image instead of defaulting to `picsum.photos` — see `references/media-conventions.md` ("Content images" section) for the complete procedure (allowed sources, `.creopse/media/generated/`, upload, `manifest.json`) and the picsum fallback as a last resort. `content-model-item`/`content-model-items` fields reference the items created in step 7; `menu-item-link` fields reference the items created in step 6 — no more need to "flag an unresolved dependency" at this stage, these entities already exist.
6. **Check the quality of the modified code** before moving to the next section: run the project's lint/format/typecheck commands (package manager and command names identified once and for all at the top of this document, see "Node environment detection") on the files touched by the current section, and fix any error before pausing.
7. **Pause**: present the component, the structure, and the fake data to the user before moving to the next section — explicitly flag any picsum fallback (point 5) that occurred for lack of a suitable image found.

Widgets only follow points 1, 2, and 6 (no data structure, no fake data).

---

## Step 10 — Final page assembly

Once all the sections of a page have been processed in step 9, assemble the page:

1. **Attach the sections** to each page created in step 4, with the fake data from step 9:
   ```bash
   creopse page attach-section home Hero --link-id top --data @.creopse/sections/Hero/fake-data.json
   ```
   Use a distinct `--link-id` if the same section (e.g. Testimonials) needs to appear with different data on several pages/locations.
2. **Order the sections** of each page in the desired order (`page order-sections`).
3. **Enable/disable instances** if needed (`page toggle-section-status`), for example for a section present in the database but not yet ready to be published.

See `references/pages-conventions.md` for the complete syntax and use cases of `set-section-source` (sharing a section instance's data across two pages, e.g. an identical Footer everywhere).

**Validation point**: present the final section order per page before execution — these commands determine what's visible in production/dev on each page.
