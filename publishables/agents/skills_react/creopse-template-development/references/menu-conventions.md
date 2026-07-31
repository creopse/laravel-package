# Conventions — Navigation (`menu`)

To consult at step 6 of the workflow (`SKILL.md`), after page creation (step 4) and section scaffolding (step 5).

---

## Why this step is necessary

`Header.vue` and `Footer.vue` (see `section-patterns.md`) respectively consume `getMenuItems()` (main menu) and `getMenuItemsByLocation('footer', true)` (footer menu), and resolve links via `getMenuHref(item)` / `openMenu(item)`. Section `menu-item-link` fields are resolved via `getLinkFromMenuItemId`. Until this step is executed, these components have **no real data to display** in dev, even once perfectly coded.

---

## Location ↔ usage correspondence

| Location | Consumed by | Example |
|---|---|---|
| `header` | `Header.vue` — main menu (`getMenuItems()` retrieves the menu assigned to this location) | Home, About, Services, Contact |
| `footer` | `Footer.vue` — `getMenuItemsByLocation('footer', true)` | Quick links |

Other locations can be created if the source template needs them (e.g. a secondary link bar), but `header`/`footer` cover the vast majority of cases observed in this project's components.

---

## Command order

### 1. Locations and taxonomy (if the menu has sub-menus styled differently)

```bash
creopse menu location-add header --description "en:Site header menu"
creopse menu location-add footer --description "en:Site footer menu"
```

Only create `item-group-add`/`item-type-add` if the source template visually distinguishes certain items (e.g. a "dropdown" item styled differently) — don't create them by default if the menu is flat.

### 2. The menu, assigned to its location

```bash
creopse menu add main --title "en:Main Menu" --title "fr:Menu Principal" --location header
creopse menu add footer-links --title "en:Footer Links" --location footer
```

### 3. The items, pointing to the pages created in step 4

```bash
creopse menu item-add main --title "en:Home" --title "fr:Accueil" --page home --target-type page-link --position 1
creopse menu item-add main --title "en:About" --title "fr:À propos" --page about --target-type page-link --position 2
creopse menu item-add main --title "en:Contact" --title "fr:Contact" --page contact --target-type page-link --position 3
```

- `--target-type page-link` + `--page <name>`: link to a page created in step 4 — this is by far the most common case in this workflow.
- `--target-type external-link` + `--url`: only for a genuinely external link (social networks in a menu, link to a third-party platform) — do not use for the site's internal links.
- `--target-type content-link` + `--content-type content-model` + `--content-id <id>`: direct link to a content model item (e.g. a specific Service entry) rather than to a generic page. **Watch the ordering**: content models and their items aren't created until step 7, i.e. **after** this step 6 — a `content-link` menu item can't be created yet at this stage. If the source template needs one (rare — the main nav almost always points to pages), defer creating those specific items and come back to complete the menu in a second pass right after step 7, rather than inventing a provisional `--content-id`.
  Don't confuse this with the permalink created in step 8 (`permalinks-conventions.md`): a `content-link` menu item is an **explicit** navigation link to a specific item (e.g. "Our flagship service" in the header); the permalink, on the other hand, makes the detail route exist **for every item** of the model without any menu item being necessary (the most common case — a portfolio item has no dedicated menu entry, just a link from the card that lists it). The two mechanisms are independent and can coexist.
- `--parent <id>`: for a child item of a dropdown, with `--menu-item-type dropdown` on the relevant group if a visual distinction exists.
- `--section-key`: for an anchor link to a specific section of a page (internal scroll), if the source template needs it.

### 4. Footer menu

```bash
creopse menu item-add footer-links --title "en:Home" --page home --target-type page-link --position 1
creopse menu item-add footer-links --title "en:Services" --page services --target-type page-link --position 2
```

---

## Finding the generated IDs for `menu-item-link` fields

The fake data generated in step 9 for `menu-item-link` fields reference menu items by numeric ID (see rule 9 of `field-types.md` for the `menu-item-link` vs `text` choice). After creating the items above, note the IDs returned (CLI output, or a `database-query` if Laravel Boost is available on the project — see `media-conventions.md` for the principle) in `.creopse/menus/<location>.json`, for direct reuse when generating section fake data.

```json
{
  "location": "header",
  "menu": "main",
  "items": [
    { "id": 1, "title": "Home", "page": "home" },
    { "id": 2, "title": "About", "page": "about" },
    { "id": 3, "title": "Contact", "page": "contact" }
  ]
}
```

---

## Validation point

Present the complete menu structure (locations, items, any hierarchy) before execution — these commands create database entries consumed immediately by Header/Footer.
