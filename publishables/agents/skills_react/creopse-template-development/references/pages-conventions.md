# Conventions — Pages (`page`)

To consult at step 4 of the workflow (`SKILL.md`, page creation) and at step 10 (final assembly, section attachment).

---

## Expected format in `.creopse/context.md`

`context.md` must contain a dedicated section listing the pages to create, for example:

```markdown
## Pages

- **home** (position 1) — "Accueil" / "Home"
  Sections: Header, Slider, About, Services, Testimonials, News, Footer
- **about** (position 2) — "À propos" / "About"
  Sections: Header, Banner, About (source: home), Features, Footer
- **contact** (position 3) — "Contact" / "Contact us"
  Sections: Header, Banner, Contact, Footer
```

If this section is missing from `context.md`, **do not infer the pages solely from the template's HTML files** (an `index.html`/`about.html`/`contact.html` doesn't necessarily give the right page name or the right position) — ask the user for the list before step 4.

The `(source: home)` mention indicates a section whose data must be **shared** with another page's instance rather than duplicated (see `set-section-source` below) — typically a Footer or a banner identical everywhere.

**Detail pages (`*-details`, e.g. `service-details`, `project-details`):** these are normal pages just like the others — created here, at step 4, with their own sections (including a detail-type section: `ServiceDetails`, `ProjectDetails`...). The only difference is that they do **not** receive a menu item (step 6): their entry point is the permalink created at step 8 (see `permalinks-conventions.md`), which associates the relevant content model with this page via `--page <name>`. List them in `context.md` anyway, along with their sections, noting that they're not meant for the menu.

---

## Step 4 — Creating the pages

```bash
creopse page add home --title "en:Home" --title "fr:Accueil" --position 1
creopse page add about --title "en:About" --title "fr:À propos" --position 2
creopse page add contact --title "en:Contact" --title "fr:Contact" --position 3
```

- One page name per call (`add` only takes a single name, unlike `section add`/`widget add`).
- `--content` is only useful if the page has its own HTML content outside of sections (rare in this workflow — most pages are entirely composed of sections).
- This step only creates the page shell. Do not attempt to attach sections here, even if they're already scaffolded — attachment happens at step 10, once sections have been completed.

---

## Step 10 — Attaching the sections

### Attach a section instance to a page

```bash
creopse page attach-section home Header --link-id top --data @.creopse/sections/Header/fake-data.json
creopse page attach-section home Slider --link-id main --data @.creopse/sections/Slider/fake-data.json
```

- `--link-id`: instance identifier, defaults to `default`. Use an explicit id as soon as the same section can appear several times on the site (e.g. `Testimonials` on the home page and on a service page, with different testimonials) — see the `HeroBanner:top` / `HeroBanner:bottom` example in `cli-reference.md`.
- `--data`: pass the fake data file validated at step 9 (`@` prefix mandatory, same convention as `section edit --data-structure`).
- `--link-title`: optional, an instance-specific title (useful in admin to distinguish two instances of the same section).

### Sourcing data from another page (`set-section-source`)

For a section that must remain strictly identical across several pages (typically Footer, Header) rather than manually duplicated on each page:

```bash
creopse page attach-section about Footer --link-id bottom
creopse page set-section-source about Footer --link-id bottom --source-page home --source-link-id bottom
```

A future edit to the Footer on `home` then automatically propagates to `about` — no need to go through every page for a Footer/Header update. Prefer this mechanism over duplicating identical `--data` on each page as soon as `context.md` indicates `(source: <page>)` for a section.

### Ordering a page's sections

```bash
creopse page order-sections home \
  --item "Header:top" --item "Slider:main" --item "About:default" \
  --item "Services:default" --item "Testimonials:default" \
  --item "News:default" --item "Footer:bottom"
```

The order of `--item` determines the vertical display order on the page — build it in the exact order of the source HTML template for that page.

### Enabling/disabling an instance

```bash
creopse page toggle-section-status home Testimonials --link-id main --disabled true
```

Useful for a section that's attached but deliberately unpublished while awaiting further validation, rather than detaching and reattaching it.

### Detaching an instance

```bash
creopse page detach-section home Testimonials --link-id main --force
```

Use only in case of an attachment error, not as a temporary deactivation mechanism (prefer `toggle-section-status` for that case).

---

## Validation point

Present, page by page, the ordered list of sections with their `link-id` before running `attach-section`/`order-sections` — these commands determine the final rendering visible in dev/production.
