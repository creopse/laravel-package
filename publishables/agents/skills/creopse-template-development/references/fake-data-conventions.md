# Fake data generation conventions

Consult this document at step 9, point 5, of the workflow (`SKILL.md`), once a section's `data-structure.json` has been validated and submitted to the CLI.

---

## Using `.creopse/context.md`

Before generating any fake data, read `.creopse/context.md` if it exists. This file contains the project's business context: name, industry, positioning/tone, target language(s), contact details (address, phone, email). It's used to:

- Write titles, descriptions, and copy consistent with the site's actual domain (an energy audit firm doesn't use the same vocabulary as a wellness hotel).
- Reuse the correct brand/entity name in the generated text.
- Adapt the register (formal/institutional vs warm/welcoming) to the described positioning.
- Avoid inventing fictitious contact details when they're already provided in the context — reuse them as-is if the matching field exists in the structure.

If `context.md` doesn't exist, ask the user for context before generating overly generic copy, rather than inventing a business domain at random.

---

## Root format of the fake data

An object with an `index` key for the singletons, and one top-level key per collection — an exact mirror of the `data.json` structure, but with real values instead of field definitions. **Keys switch to snake_case** in the fake data (whereas they were in kebab-case in the structure):

```json
{
  "index": {
    "title": "{\"fr\":\"...\",\"en\":\"...\"}",
    "text": "{\"fr\":\"...\",\"en\":\"...\"}",
    "btn_url": 6,
    "main_image": "https://picsum.photos/1200/800?random=unique-slug-name"
  },
  "features": [
    { "icon": "<svg>...</svg>", "title": "{...}", "text": "{...}" }
  ],
  "headlinks": [
    { "title": "{...}", "url": "..." }
  ]
}
```

Strict format points:

- **A single `index` object** for all of a section's singletons (not an array).
- **One top-level key per collection**, containing an **array** of objects — one object per collection entry.
- **i18n fields** (`i18n-text`, `i18n-editor`): always a stringified JSON string `"{\"fr\":\"...\",\"en\":\"...\"}"`, never a native JS object. Reminder: `i18n-textarea` is never used on this project (see `field-types.md`), so this format in practice only applies to `i18n-text`/`i18n-editor`.
- **`i18n-list` fields**: follow the format `[{"value": "{\"fr\":\"...\",\"en\":\"...\"}"}]` — see `field-types.md`.
- **`menu-item-link` fields**: hybrid type (see rule 9 of `field-types.md`) — generate either a numeric value (existing menu item ID) or a raw URL, **depending on how the component actually consumes the field**. Don't assume by default that it's always an ID: check the component completed at step 9.2 before choosing the format. Menu items are created upstream at step 6 (see `menu-conventions.md`) — reuse the real ID noted in `.creopse/menus/<location>.json`, never invent one at random.
- **`content-model-item` fields**: a numeric value referencing the ID of an existing item of the targeted content model (e.g. a parent service). Models and their items are created upstream at step 7 (see `content-models-conventions.md`) — reuse an ID that was actually created, never an invented one.

---

## Content images

**By default, a real image, searched for and uploaded** — see the complete procedure in `media-conventions.md` ("Content images" section): search restricted to explicitly royalty-free image banks (Unsplash, Pexels, Pixabay), download into `.creopse/media/generated/`, upload via `creopse media upload`, final path recorded in `.creopse/media/manifest.json` and reused here — never the source platform's URL nor the local path.

`picsum.photos` remains a one-off **fallback**, only if no suitable image was found for a given field after a few attempts (see `media-conventions.md`) — never the default choice. When falling back, same rule as before: a unique, descriptive `random` slug per entry, never reused twice within the same fake data set, dimensions matched to the image type (large background image ~1200x800, card thumbnail ~600x400, avatar/logo ~200x200):

```
https://picsum.photos/1200/800?random=project-section-descriptive-name
https://picsum.photos/600/400?random=project-feature-energy-audit
```

---

## Icons

Complete inline SVG format (no reference to an external file, no bare icon name), consistent with the project's brand guidelines when known. Typical SVG structure example used in existing projects:

```
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" ... viewBox="0 0 32 32" ...>
  <path d="..."/>
</svg>
```

If the project uses MDI icons rather than inline SVG for some fields (`icon` used as `<Icon icon="mdi:...">` on the component side rather than `<ContentIcon :data="...">`), check the component completed at step 9.2 to find out which format is actually consumed, and generate accordingly.

---

## Editorial content (`i18n-editor`)

Write in clean, simple HTML, consistent with the business context:

```json
"{\"fr\":\"<p style=\\\"text-align:justify;\\\">Texte en français...</p>\",\"en\":\"<p style=\\\"text-align:justify;\\\">English text...</p>\"}"
```

- Always provide both languages if the project is bilingual (check `context.md` or the structure itself to see if a single `fr` is enough).
- Realistic, substantial text (several sentences for a main description), no lorem ipsum.
- Correctly escape double quotes nested inside the HTML (`\\\"` in the final JSON string).

---

## Cross-section consistency

When several sections reference the same entity (e.g. a service listed in `Services` and detailed in `ServiceDetails`, or a session tied to a training course), the fake data generated for each section/content model must stay consistent with one another — same names, same reference IDs, same images if it's supposed to be the same entity. Check the files already written in `.creopse/sections/*/fake-data.json` before generating a new section that references a content model that's already been handled.

---

## Regeneration rule

If a collection or array of fake data needs to be modified following a correction or addition requested by the user, regenerate and rewrite the **entire** array in question in `.creopse/sections/<SectionName>/fake-data.json` rather than providing only the modified part — this keeps the file always complete and directly copyable into the CMS, and follows the full-rewrite principle already in force on this project rather than partial patches.
