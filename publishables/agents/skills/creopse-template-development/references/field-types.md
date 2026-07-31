# Field types — Creopse data structures

To consult at step 9 when defining `data-structure.json` / `settings.json` for each section.

## Exhaustive list of types

### Text fields

| Type | Usage |
|---|---|
| `text` | Non-translatable string: URL, proper noun, technical data. |
| `i18n-text` | Short translatable string (title, label, tagline). |
| `textarea` | Non-translatable text area (rare). |
| `i18n-textarea` | **Never use.** See rule below. |
| `editor` | Non-translatable rich editor (rare). |
| `i18n-editor` | Translatable rich editor — **canonical type for any description field**. |

### Numeric/boolean fields

`number`, `checkbox`, `switch`, `slider`, `range-slider`.

### Selection fields

`single-select`, `multi-select`.

### Date fields

`date`, `daterange`, `datetime`, `datetimerange`, `year`, `yearrange`, `month`, `monthrange`, `quarter`, `quarterrange`, `week`.

### Media fields

`image`, `gallery`, `audio`, `video`, `document`, `file`.

### News content

`news-article`, `news-articles`, `news-category`, `news-categories`, `news-tag`, `news-tags`.

### Icon/color fields

`icon`, `icons`, `color`, `gradient`.

### Special content

| Type | Usage |
|---|---|
| `content-model-item` | Reference to an item of a content model (e.g. a parent service). |
| `content-model-items` | Reference to several items of a content model. |
| `menu-item-link` | Link for CTA/navigation buttons. **"Hybrid" type since a recent evolution**: supports both a reference to a menu item (numeric ID) and a raw URL — see the choice rule below. |

### List fields

`list`, `i18n-list`, `albums`.

## Strict usage rules (non-negotiable on this project)

1. **`i18n-editor` is the canonical type for any description field**, regardless of its length. Never use `i18n-textarea` — even for short text, if the field is meant to hold rich HTML or a substantial description, it's `i18n-editor`.
2. **`i18n-text`** for any short, unformatted translatable string (titles, labels, taglines, button names).
3. **`text`** for anything non-translatable: URLs, proper nouns, technical data.
4. **User-submitted form fields** (contact, newsletter): always `text`/`checkbox`, never `i18n-*`. These values are entered by the visitor, not managed by the multilingual admin.
5. **Proper nouns** (client name, brand): `text`, never `i18n-text`.
6. **Flat structures rather than collections** when the number of sub-elements is fixed (e.g. two buttons per slide → four flat singleton fields `btnOneLabel`/`btnOneUrl`/`btnTwoLabel`/`btnTwoUrl`, not a collection of buttons).
7. **No double entry**: categories/tags in a blog/news context come from computed data (`loadArticles`), never duplicated in a section collection.
8. **Never duplicate global data already accessible via `getAppInformationValue`** in a section structure. Exhaustive list of available keys (`AppInformationKey`):
   `name`, `icon`, `oneColorIcon`, `logo`, `oneColorLogo`, `phone`, `email`, `address`, `postalCode`, `description`, `primaryColor`, `secondaryColor`, `accentColor`, `facebook`, `twitter`, `instagram`, `whatsapp`, `linkedin`, `youtube`, `pinterest`, `snapchat`, `tiktok`, `telegram`, `discord`, `reddit`, `tumblr`, `vimeo`, `twitch`, `github`, `dribbble`, `behance`, `medium`, `stackOverflow`, `threads`, `messenger`, `playstore`, `appstore`, `additionalInfo`.
   If a section field seems to duplicate one of these keys, consume `getAppInformationValue('<key>')` directly in the component instead of creating a redundant section field. The social network keys (`facebook`, `twitter`, etc.) are notably the ones looped over via `useHelper().socialNetworks` (see the Header/Footer pattern in `section-patterns.md`).
9. **Navigation links (`menu-item-link` vs `text`)**: `menu-item-link` now supports both a menu item and a raw URL — so it's no longer a binary indicator "internal link = menu-item-link / external link = text". Choose based on the actual usage observed in the project's examples rather than by systematic default:
   - If the link needs to remain drivable/editable from menu management (global navigation consistency, header CTA) → `menu-item-link`.
   - If the component calls `openLink(field)` directly on the value without going through `getLinkFromMenuItemId`/`getMenuHref` (case observed on standalone section CTAs such as Testimonials `btnUrl`, Projects `moreLinkUrl`, Contact `mapsUrl`) → `text` remains legitimate, it's not a design error.
   - When in doubt, look at how the field is consumed in the component: resolution via the menu system → `menu-item-link`; direct use as a URL string → `text` accepted.

## Associated rendering format

| Type | Vue | React |
|---|---|---|
| `i18n-editor` | `v-html="rHtml(field)"` | `dangerouslySetInnerHTML={{ __html: rHtml(field) }}` |
| `i18n-text` | `{{ tr(field) }}` | `{tr(field)}` |
| `text` (URL, name) | rendered directly, no `tr()` | rendered directly, no `tr()` |

## Expected output format for fake data

Each field type has a precise JSON format to follow in `.creopse/sections/<SectionName>/fake-data.json`:

| Type | Value format |
|---|---|
| `i18n-text` / `i18n-editor` | Escaped JSON string containing an object `{"fr":"...","en":"..."}`. For `i18n-editor`, the content includes HTML tags (`<p>`, etc.). |
| `text` | Raw string (URL, name, etc.). |
| `image` / `gallery` | Path of a genuinely uploaded media file (image searched for and downloaded, see `media-conventions.md`) — `picsum.photos` only as a fallback if no suitable image was found. |
| `icon` | Complete inline SVG (viewBox 0 0 32 32 by convention on this project). |
| `menu-item-link` | Depending on the field's actual use case (see rule 9 above): a numeric ID (reference to an existing menu item) **or** a raw, directly usable URL. Check how the component consumes the value before choosing the fake data format. |
| `checkbox` / `switch` | `true`/`false`. |
| `content-model-item` | A numeric ID. |

Always produce fake data following the exact structure defined in `data.json` (same keys, same `index` + collections nesting), and always bilingual FR/EN consistent with `.creopse/context.md`.
