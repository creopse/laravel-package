# Conventions — Permalinks (`permalink`)

To consult at step 8 of the workflow (`SKILL.md`), after content models (step 7) and before section-by-section completion (step 9).

---

## Why this step is necessary

`content-model add --has-permalink true` (step 7) **flags** a model as having a detail page, but wires nothing: at the end of step 7, no route exists linking a model item to a page. That's the role of `creopse permalink add` — a full-fledged entity (`PermalinkModel`: `pathPrefix`, `contentType`, `contentId`, `pageId`), distinct from the content model itself.

**This isn't limited to custom content models.** The native `news-article` content type (articles) has exactly the same need: without a dedicated permalink, `NewsDetails.vue` is never reached by `getContentPath(article)`, even once the section is perfectly coded and attached to its page (step 9/10). Handle both cases in this step:

- One permalink per content model created in step 7 with `--has-permalink true` (Services, Projects, Team...).
- One permalink for `news-article` if the project has articles (`News.vue`/`NewsDetails.vue`).
- One permalink for `news-category`/`news-tag` only if the source template has dedicated category/tag listing pages (rare — check the step 5.1 inventory before creating one out of reflex).

---

## Choosing `--content-param`

Determines which property of the target item is used to resolve the URL (`getContentPath(item)` on the Vue side):

| `content-type` | Possible values for `--content-param` | How to choose |
|---|---|---|
| `content-model` | `id` (default), or **any field defined in the model's `data-structure.json`** | Not a rule fixed to `id`: if the project defined a dedicated field for clean URLs (e.g. a `slug` field added to the model's structure, see step 7), use it. Otherwise, stick with `id` by default rather than inventing a field that doesn't exist in the structure — check `.creopse/content-models/<ModelName>/data-structure.json` before choosing. |
| `news-article` | `id` or `slug` | Native, fixed structure, no custom field possible — `slug` (present on `NewsArticleModel`) is the idiomatic choice for a readable URL. |
| `news-category` / `news-tag` | `id` or `slug` | Same, `slug?` is natively available on these models. |

---

## CLI commands

```bash
# A content model (Services), resolved by id — detail page created in step 4
creopse permalink add /services content-model --content-id service --page service-details

# Another content model (Projects)
creopse permalink add /realisations content-model --content-id project --page project-details

# The native news-article content type, resolved by slug
creopse permalink add /actualites news-article --content-param slug --page news-details
```

- `<path-prefix>`: public URL prefix for this content type (e.g. `/services/my-item`) — choose a prefix consistent with the project's language/context, not a generic `/items` default.
- `--content-id`: **only required for `content-type=content-model`** — the name or id of the model created in step 7 (e.g. `service`, not `Service` nor `Services`: reuse exactly the name passed to `content-model add`).
- `--page <name>`: the name of the page created in step 4 that serves as the detail template (e.g. `service-details`) — never the name of a section, never a page that doesn't exist yet at this stage.

### Editing an existing permalink

```bash
creopse permalink edit --content-model service --new-path-prefix /nos-services
creopse permalink edit --path-prefix /actualites --page news-details-v2
```

Identify the target with **exactly one** of `--id`, `--path-prefix`, or `--content-model` — never several at once. The target content itself (`content-type`/`content-id`) cannot be changed once set; to change the target content, delete and recreate the permalink rather than trying to reassign it via `edit`.

---

## Where to record state

One file per permalink created, in `.creopse/permalinks/<name>.json` (free-form but stable name, e.g. `services.json`, `news.json`) — same logic as `.creopse/menus/<location>.json`: a flat folder, one file per entity, no sub-structure needed here (unlike `sections/`/`content-models/`, which have structure + data to co-locate).

```json
{
  "path_prefix": "/services",
  "content_type": "content-model",
  "content_id": "service",
  "content_param": "id",
  "page": "service-details",
  "id": 3
}
```

`id`: the permalink's id returned by the command, to note once created — allows checking before a later `edit`/`remove` that a permalink already exists for this model rather than creating a duplicate.

---

## Validation point

Present the list of permalinks to create (prefix, targeted model/content type, associated detail page) before execution — these commands create database entries that determine the site's public routing.
