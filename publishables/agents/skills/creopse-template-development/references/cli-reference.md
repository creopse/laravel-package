# Creopse CLI reference

Complete reference for `@creopse/cli`, used throughout every step of the workflow (`SKILL.md`) starting at step 2. This document covers the command groups actually used by this skill: `section`, `widget`, `page`, `content-model`, `permalink`, `menu`, `media`, `base-info`. The `plugin` group (scaffolding Laravel classes inside a plugin) is **not covered** by this skill — out of scope for front-end template building, see the note at the end of this document.

## General conventions

- **Group aliases**: `sec` ↔ `section`, `wid` ↔ `widget`, `pag` ↔ `page`, `cm` ↔ `content-model`, `perm` ↔ `permalink`, `men` ↔ `menu`, `med` ↔ `media`, `info` ↔ `base-info`, `plg` ↔ `plugin`.
- **Sub-command aliases**: each `add`/`make`, `remove`/`delete`, `edit`/`update` pair is equivalent.
- **JSON options** (`--data`, `--settings`, `--data-structure`, `--settings-structure`, `--metadata`) accept either an inline JSON string or an `@path/file.json` reference (the `@` prefix loads the file).
- **Localized options** (`--title`, `--description`, `--link-title`) are repeatable and take a `locale:value` pair, e.g. `--title "en:Home"` `--title "fr:Accueil"`.
- The internal `--alias` flag exposed by the underlying artisan commands is **not** relayed by the CLI — use the sub-command names/aliases documented here.

⚠️ **`@` prefix mandatory for a file path.** The CLI cannot guess whether the passed value is literal JSON or a path to read — without the marker, it will try to parse the path itself as JSON and fail:

```bash
--data-structure @.creopse/sections/Header/data-structure.json
```

Never inject inline JSON via command substitution (`--data-structure "$(cat file.json)"`): that reproduces exactly the escaping/size problem the `@path` mechanism is meant to avoid.

---

## `creopse install`

**Not used by this skill** — the Laravel project with Creopse is a prerequisite already in place (see `SKILL.md`). Mentioned here for completeness only:

```bash
creopse install -t vue      # or -t react
```

---

## `creopse section` (alias `sec`) — step 5 and step 9

Sections = reusable, translatable UI blocks, rendered by the front end (a `.vue`/`.tsx` component in `resources/js/Sections`). This group generates both the component file and the database entry describing the section (title per locale, data structure, settings structure).

| Sub-command | Alias | Description |
|---|---|---|
| `add <name...>` | `make` | Adds one or more sections (component + DB entry) |
| `remove <name...>` | `delete` | Deletes one or more sections (`-f/--force`) |
| `edit <name>` | `update` | Updates the title (per locale), the data structure and/or settings structure |

`add` options (one name at a time): `-t/--title <locale:value>` (repeatable), `--data-structure <json|@path>`, `--settings-structure <json|@path>`.
`edit` options: same options as `add`.

```bash
creopse section add Header Hero Features Services Testimonials Footer Contact
creopse section edit Header \
  --data-structure @.creopse/sections/Header/data-structure.json \
  --settings-structure @.creopse/sections/Header/settings.json
```

## `creopse widget` (alias `wid`) — step 5

| Sub-command | Alias | Description |
|---|---|---|
| `add <name...>` | `make` | Adds one or more widgets |
| `remove <name...>` | `delete` | Deletes one or more widgets (`-f/--force`) |

No `--data-structure` option: widgets have no data structure by nature.

```bash
creopse widget add Preloader ScrollProgress
```

---

## `creopse page` (alias `pag`) — step 4 and step 10

A page is a top-level entity (title, optional content, display position). Sections are **not** created with the page — they're attached separately via the instance sub-commands below, which control the data, order, and visibility per instance.

| Sub-command | Alias | Description |
|---|---|---|
| `add <name>` | `make` | Creates an empty page (step 4) |
| `edit <name>` | `update` | Updates title, content, and/or position |
| `remove <name>` | `delete` | Deletes a page (`-f/--force`) |
| `attach-section <page> <section>` | | Attaches a section instance to a page (step 10) |
| `detach-section <page> <section>` | | Detaches a specific instance (`-f/--force`) |
| `order-sections <page>` | | Sets the display order of a page's sections |
| `set-section-source <page> <section>` | | Sets/clears an instance's data source page |
| `toggle-section-status <page> <section>` | | Enables/disables an instance |
| `update-section-content <page> <section>` | `edit-section-content` | Updates an instance's title/data/settings |

`add`/`edit` options: `-t/--title <locale:value>` (repeatable), `--content <text>`, `--position <number>` (default for `add`: `0`).
`attach-section` options: `--link-id <id>` (default `default`), `--link-title <locale:value>` (repeatable), `--data <json|@path>`, `--settings <json|@path>`, `--source-page <name>`, `--source-link-id <id>` (default `default`).
`order-sections` options: `--item <section:link-id>` (repeatable, in the desired order).
`set-section-source` options: `--link-id <id>`, `--source-page <name>` (`none` to clear), `--source-link-id <id>`.
`toggle-section-status` options: `--link-id <id>`, `--disabled <bool>` (default `true`).
`update-section-content` options: `--link-id <id>`, `--link-title <locale:value>` (repeatable), `--data <json|@path>`, `--settings <json|@path>`.

```bash
# Step 4
creopse page add home --title "en:Home" --title "fr:Accueil" --position 1

# Step 10 — attaching, with two instances of the same section in different locations
creopse page attach-section home Hero --link-id top --link-title "en:Hero Top" --data @.creopse/sections/Hero/fake-data.json
creopse page attach-section home Hero --link-id bottom --data '{"heading":"Footer hero"}'

# Reordering and disabling the bottom instance
creopse page order-sections home --item "Hero:top" --item "Hero:bottom"
creopse page toggle-section-status home Hero --link-id bottom --disabled true

# Sourcing the bottom instance from another page
creopse page set-section-source home Hero --link-id bottom --source-page landing

# Detaching
creopse page detach-section home Hero --link-id top --force
```

See `references/pages-conventions.md` for the detailed use cases specific to this workflow.

---

## `creopse content-model` (alias `cm`) — step 7

A content model defines a structure; items are the actual records.

| Sub-command | Alias | Description |
|---|---|---|
| `add <name> <intent> <access-scope>` | `make` | Creates a content model |
| `remove <name>` | `delete` | Deletes a content model (`-f/--force`) |
| `edit <name>` | `update` | Updates a content model |
| `item-add <content-model>` | `item-make` | Creates an item |
| `item-remove <id>` | `item-delete` | Deletes an item (`-f/--force`) |
| `item-edit <id>` | `item-update` | Updates an item |

- `intent`: `editorial-content` or `user-data`. `access-scope`: `internal` or `user-editable`. **See `references/content-models-conventions.md` for the pair to use depending on content type — a convention specific to this project, not to be inferred from the option names alone.**
- `add` options: `--title`/`--description` (repeatable), `--image <value>`, `--data-structure <json|@path>`, `--title-field-name <value>`, `--has-permalink <bool>`.
- `edit` options: same as `add`, plus `--intent`, `--access-scope`.
- `item-add` options: `--title` (repeatable), `--data <json|@path>`, `--is-active <bool>` (default `true`), `--created-by-type <value>` (`user`/`admin`/`system`, default `system`).
- `item-edit` options: `--content-model <name>` (move the item), `--title` (repeatable), `--data <json|@path>`, `--is-active <bool>`, `--created-by-type <value>`.

```bash
creopse content-model add service editorial-content internal \
  --title "en:Service" --title "fr:Service" \
  --data-structure @.creopse/content-models/Service/data-structure.json \
  --title-field-name name --has-permalink true

creopse content-model item-add service --title "en:Energy Audit" --data @.creopse/content-models/Service/items/energy-audit.json
creopse content-model item-edit 12 --title "en:Renamed"
creopse content-model remove service --force
```

`--has-permalink true` only flags the model as eligible — it doesn't wire the route to a detail page. See the `permalink` group below (step 8) and `references/content-models-conventions.md`.

---

## `creopse permalink` (alias `perm`) — step 8

A permalink associates a URL prefix with a piece of content (a content-model item, or a native news content type) and, optionally, with the page/template that renders it. Without this step, no detail page (`ServiceDetails`, `ProjectDetails`, `NewsDetails`...) is ever reached, even if perfectly coded and attached to its page.

| Sub-command | Alias | Description |
|---|---|---|
| `add <path-prefix> <content-type>` | `make` | Creates a permalink |
| `remove` | `delete` | Deletes a permalink (`-f/--force`) |
| `edit` | `update` | Updates a permalink |

- `content-type`: `news-tag`, `news-category`, `news-article`, or `content-model`.
- `add` options: `--content-id <value>` (required if `content-type=content-model`; the model's id or name), `--content-param <value>` (field used to resolve the target — `id` or `slug`, default `id`), `--page <name>` (page/template used to render this content).
- **remove/edit** identify the target with exactly one of `--id <id>`, `--path-prefix <prefix>`, or `--content-model <name>`.
- `edit` options: `--new-path-prefix <prefix>`, `--content-param <value>`, `--page <name>` (`none` to unlink). The target content itself (`content-type`/`content-id`) cannot be changed once set.

```bash
# A permalink for a content model, resolved by id (default) — or by any other field
# actually present in the model's data-structure.json (e.g. a slug field added in step 7)
creopse permalink add /services content-model --content-id service --page service-details

# A permalink for news articles, resolved by slug (fixed native structure)
creopse permalink add /actualites news-article --content-param slug --page news-details

# Editing, identified by its current prefix
creopse permalink edit --path-prefix /services --new-path-prefix /nos-services

# Deleting, identified by its content model
creopse permalink remove --content-model service --force
```

See `references/permalinks-conventions.md` for the full details (choosing `--content-param` depending on content type, local tracking format, ordering relative to steps 4 and 7).

---

## `creopse menu` (alias `men`) — step 6

A menu is assigned to a **location** (`header`, `footer`...); **items** are the navigation entries; **groups** and **types** are used to categorize/style items (dropdowns in particular).

| Sub-command | Alias | Description |
|---|---|---|
| `add <name>` | `make` | Creates a menu |
| `remove <name>` | `delete` | Deletes a menu (`-f/--force`) |
| `edit <name>` | `update` | Updates a menu |
| `item-add <menu>` | `item-make` | Creates a menu item |
| `item-remove <id>` | `item-delete` | Deletes an item (`-f/--force`) |
| `item-edit <id>` | `item-update` | Updates an item |
| `item-group-add/-remove/-edit <name>` | `item-group-make/-delete/-update` | Menu groups |
| `item-type-add/-remove/-edit <name>` | `item-type-make/-delete/-update` | Menu types |
| `location-add/-remove/-edit <name>` | `location-make/-delete/-update` | Menu locations |

`menu add/edit` options: `--title`/`--description` (repeatable), `--data <json>`, `--location <name>` (`none` to unassign on edit).
`item-add/item-edit` options: `--title`/`--description` (repeatable), `--path`, `--url`, `--controller`, `--parent <id>` (`none` for edit), `--position`, `--target-type` (`external-link`/`page-link`/`content-link`), `--is-active`/`--is-visible` (bool), `--color`, `--icon`, `--image`, `--page <name>` (`none` for edit), `--section-key`, `--menu-item-group`, `--menu-item-type`, `--content-type` (`news-tag`/`news-category`/`news-article`/`content-model`), `--content-id`.
Group/type/location `add` options: `--description` (repeatable). `edit`: `--new-name`, `--description`.

```bash
creopse menu location-add header --description "en:Site header"
creopse menu add main --title "en:Main Menu" --location header
creopse menu item-add main --title "en:Home" --page home --target-type page-link --position 1
creopse menu item-add main --title "en:About" --path "/about" --parent 1 --menu-item-type dropdown
```

See `references/menu-conventions.md` for the details specific to this workflow, notably the distinction from the permalinks in step 8.

---

## `creopse media` (alias `med`) — step 2 and step 9

A **file** lives on disk, a **record** (`MediaFile`) is the database entry — the two can be deleted independently.

| Sub-command | Alias | Description |
|---|---|---|
| `upload <path>` | `add` | Uploads a local file |
| `replace <id> <path>` | | Replaces a record's underlying file |
| `remove-file <path>` | | Deletes a file from disk (`-f/--force`) |
| `remove-record <id>` | | Deletes a `MediaFile` record (`--permanent`, `-f/--force`) |
| `restore <id>` | | Restores a soft-deleted record |
| `purge` | | Permanently deletes every soft-deleted record (`-f/--force`) |

`upload` options: `--folder <name>` (default `uploads`), `--filename <name>`, `--metadata <json>`, `--sender <id>`.
`replace` options: `--folder`, `--filename`, `--metadata`.
`remove-record --permanent` forces permanent deletion (otherwise a soft delete, restorable).

```bash
# Step 2 — brand asset, deposited by the user in .creopse/media/source/
creopse media upload .creopse/media/source/logo.png --folder branding --filename "Company Logo"

# Step 9 — content image found and downloaded into .creopse/media/generated/
creopse media upload .creopse/media/generated/hero-agence.jpg --folder content --metadata '{"alt":"Summer sale"}'

# Replace the file behind record #42 without changing its id
creopse media replace 42 ./banner-v2.jpg

# Delete just the disk file, or just the record (soft delete by default)
creopse media remove-file branding/logo.png --force
creopse media remove-record 42

# Restore, or permanently purge every soft-deleted record
creopse media restore 42
creopse media purge --force
```

See `references/media-conventions.md` for the details specific to this workflow: the `source/`/`generated/` distinction, retrieving the final path after upload, and the content-image search procedure (step 9).

---

## `creopse base-info` (alias `info`) — step 3

| Sub-command | Description |
|---|---|
| `update <pairs...>` | Updates base information entries with `key=value` pairs (value can be `@path/file`) |

```bash
creopse base-info update name="My App" email=hello@app.com phone="+33123456789"
creopse base-info update description=@description.txt
creopse base-info update facebook="https://facebook.com/myapp" twitter="https://twitter.com/myapp"
```

See `references/base-info-conventions.md` for the list of keys and their correspondence with `context.md`.

---

## `creopse plugin` (alias `plg`) — out of scope for this skill

Generates Laravel classes (models, controllers, migrations, events, listeners, jobs, requests, seeders) **inside a plugin**, not in the host app. This falls under custom backend development (e.g. business logic behind a form), not the front-end template building covered by this skill. Do not use it as part of this workflow — if a need of this kind comes up on a project, handle it outside this skill.

---

## `--data-structure` file format (sections)

The file passed as an argument must contain an object with two kinds of keys: `index` (an array of singleton fields) and the remaining root-level keys, each representing a collection. Example:

```json
{
  "index": [
    {"key":"title","type":"i18n-text","label":"{\"en\":\"Title\",\"fr\":\"Titre\"}","options":[],"required":true,"settings":{}},
    {"key":"text","type":"i18n-editor","label":"{\"en\":\"Text\",\"fr\":\"Texte\"}","options":[],"required":false,"settings":{}}
  ],
  "features": {
    "key": "features",
    "title": "{\"en\":\"Features\",\"fr\":\"Caractéristiques\"}",
    "items": [
      {"key":"icon","type":"icon","label":"{\"en\":\"Icon\",\"fr\":\"Icône\"}","options":[],"required":true,"settings":{}},
      {"key":"title","type":"i18n-text","label":"{\"en\":\"Title\",\"fr\":\"Titre\"}","options":[],"required":true,"settings":{}},
      {"key":"text","type":"i18n-editor","label":"{\"en\":\"Text\",\"fr\":\"Texte\"}","options":[],"required":true,"settings":{}}
    ]
  }
}
```

See `field-types.md` for the exhaustive list of available `type` values and their usage rules. A content model's `--data-structure` file (`content-model add`) only follows the "singletons" part of this format (an array of fields, no nested `index` key) — see `content-models-conventions.md`.

---

## Target `app.blade.php` example (step 1 reference)

```blade
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Meta -->
    @if(isset($page['props']['meta']) || isset($page['props']['defaultMeta']))
    <title>{{ data_get($page['props'], 'meta.title', data_get($page['props'], 'defaultMeta.title')) }}</title>
    <link rel="icon" type="image/png" href="{{ data_get($page['props'], 'meta.favicon', data_get($page['props'], 'defaultMeta.favicon')) }}" />

    <meta name="description" content="{{ data_get($page['props'], 'meta.description', data_get($page['props'], 'defaultMeta.description')) }}" />
    <link rel="canonical" href="{{ data_get($page['props'], 'meta.url', data_get($page['props'], 'defaultMeta.url')) }}" />

    <meta property="og:title" content="{{ data_get($page['props'], 'meta.title', data_get($page['props'], 'defaultMeta.title')) }}" />
    <meta property="og:description" content="{{ data_get($page['props'], 'meta.description', data_get($page['props'], 'defaultMeta.description')) }}" />
    <meta property="og:image" content="{{ data_get($page['props'], 'meta.image', data_get($page['props'], 'defaultMeta.image')) }}" />
    <meta property="og:url" content="{{ data_get($page['props'], 'meta.url', data_get($page['props'], 'defaultMeta.url')) }}" />
    <meta property="og:type" content="website" />

    <meta name="twitter:title" content="{{ data_get($page['props'], 'meta.title', data_get($page['props'], 'defaultMeta.title')) }}" />
    <meta name="twitter:description" content="{{ data_get($page['props'], 'meta.description', data_get($page['props'], 'defaultMeta.description')) }}" />
    <meta name="twitter:image" content="{{ data_get($page['props'], 'meta.image', data_get($page['props'], 'defaultMeta.image')) }}" />
    <meta name="twitter:card" content="summary_large_image" />
    @endif

    <style>
        :root {
            --inertia-progress-color: {{ data_get($page['props'], 'config.frontend.progressColor', '#29d') }};
        }
    </style>

    <!-- CSS of the source HTML template's plugins, moved into public/assets -->
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/fontawesome-free.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/magnific-popup.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/slick-slider.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/sidebar.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/nice-select.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/plugins/swiper-slider.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}">

    @include('feed::links')

    @vite(['resources/css/app.css','resources/js/app.ts'])
    @routes
    @inertiaHead
</head>
<body>
    @inertia

    <!-- JS of the source HTML template's plugins -->
    <script src="{{ asset('assets/js/plugins/jquery-3-7-1.min.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/waypoints.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/counter.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/slick-slider.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/swiper-slider.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/aos.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/magnific-popup.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/nice-select.js') }}"></script>
    <script src="{{ asset('assets/js/plugins/sidebar.js') }}"></script>
</body>
</html>
```

**Note**: plugin JS scripts mostly serve behaviors that the Creopse pattern then replaces with native Vue (see `vue-conventions.md` — no Bootstrap JS for carousels/modals/accordions). Some scripts (jQuery, waypoints, counter, AOS) can nevertheless remain useful for scroll animations not handled elsewhere; don't remove them out of reflex — only the ones that duplicate an imposed native-Vue pattern (Bootstrap JS for carousel/modal/collapse in particular).
