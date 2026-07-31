# Conventions — Base information (`base-info`)

To consult at step 3 of the workflow (`SKILL.md`), after step 2 (real media).

---

## Role

`base-info` centralizes the site's global information, consumed in nearly every component via `getAppInformationValue(key)` — never duplicated in a section structure (see rule 8 of `field-types.md`). Unlike section fake data, **this is not fictitious data**: it's the client's real information, and it must be treated as such.

---

## Available keys (`AppInformationKey`)

`name`, `icon`, `oneColorIcon`, `logo`, `oneColorLogo`, `phone`, `email`, `address`, `postalCode`, `description`, `primaryColor`, `secondaryColor`, `accentColor`, `facebook`, `twitter`, `instagram`, `whatsapp`, `linkedin`, `youtube`, `pinterest`, `snapchat`, `tiktok`, `telegram`, `discord`, `reddit`, `tumblr`, `vimeo`, `twitch`, `github`, `dribbble`, `behance`, `medium`, `stackOverflow`, `threads`, `messenger`, `playstore`, `appstore`, `additionalInfo`.

## Correspondence with `.creopse/context.md`

`context.md` must provide (or be completed by the user before this step if missing):

| `base-info` key | Source in `context.md` |
|---|---|
| `name` | Entity/client name |
| `description` | Presentation summary (one or two sentences, not translated — `base-info` is not i18n, unlike section `i18n-*` fields) |
| `email`, `phone`, `address`, `postalCode` | Contact details section |
| `logo`, `oneColorLogo`, `icon`, `oneColorIcon` | Media uploaded in step 2 (see `media-conventions.md`) — use the final DB path retrieved, never a `picsum.photos` URL |
| `facebook`, `twitter`, `instagram`, etc. | Social networks section, one entry per network actually provided — do not fill in keys that weren't provided |
| `primaryColor`, `secondaryColor`, `accentColor` | Only if explicitly given (brand guidelines) — never invent default colors. If absent from `context.md`, extract them from the source template's `:root` CSS variables (`--primary-color`, `--theme-color`... depending on the theme's naming convention) rather than guessing them visually from screenshots |

**Never generate a fictitious value for a `base-info` key.** If a piece of information is missing from `context.md` (phone, address...), ask the user for it explicitly rather than guessing it or leaving it blank by default — unlike section fake data, these values are meant to be published as-is.

Write the gathered pairs to `.creopse/base-info.json` before any CLI call, as an inspectable/revisable draft — same principle as section structures, content models, and menus, which all go through a file before the CLI rather than being composed purely in memory:

```json
{
  "name": "École Alpha",
  "email": "contact@ecole-alpha.tg",
  "phone": "+228 XX XX XX XX",
  "address": "Lomé, Togo",
  "logo": "<path defined in step 2>",
  "facebook": "https://facebook.com/ecolealpha"
}
```

---

## CLI command

`base-info update` takes `key=value` pairs; a long value (`description`) can be loaded from a file with `@path`:

```bash
creopse base-info update \
  name="École Alpha" \
  email="contact@ecole-alpha.tg" \
  phone="+228 XX XX XX XX" \
  address="Lomé, Togo" \
  logo="<path defined in step 2>" \
  facebook="https://facebook.com/ecolealpha"
```

For a long description:

```bash
creopse base-info update description=@.creopse/context/description.txt
```

Run this command **all at once** with every available pair rather than in several successive calls, unless some keys (e.g. `logo`) are only known after step 2 while others aren't — in that case, a single grouped call once all values are gathered remains preferable to several partial calls.

## No strict blocking point

This step doesn't require formal validation if all values are already present and unambiguous in `context.md` — run it directly. Only ask for confirmation if values are missing or seem ambiguous (e.g. several phone numbers in the context with no indication of which is the primary one).
