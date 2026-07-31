# Conventions — Real media and content images (`media`)

To consult at step 2 of the workflow (`SKILL.md`), right after template splitting (step 1) and before base information (step 3) — and again at step 9, point 5, for content images (see the last section of this document).

---

## Directory tree

```
.creopse/media/
├── source/           # real brand assets deposited by the user (logo, favicon, official photos) — input, read-only
├── generated/         # content images found and downloaded at step 9 — staging before upload
└── manifest.json      # single ledger: every uploaded local file (source/ or generated/) → media in DB
```

`source/` and `generated/` are never interchanged: the former holds files provided by the user (never to be replaced or regenerated), the latter files the agent found itself and can regenerate/re-download if needed.

---

## 1. Real brand assets (step 2)

- **To upload**, from `.creopse/media/source/`: logo, monochrome version of the logo (`oneColorLogo`), favicon/icon (`icon`, `oneColorIcon`), and any official photo explicitly provided by the client.
- **Never** fetch these assets from `.creopse/html_template/assets/`: the source template is a demo theme, its visuals (including any placeholder logo) are not real brand assets, even if they're physically found there.
- If `.creopse/media/source/` is empty or clearly doesn't contain a logo/favicon, **ask the user** rather than improvising with a template visual or silently skipping the step.

```bash
creopse media upload .creopse/media/source/logo.png --folder branding --filename "École Alpha Logo"
creopse media upload .creopse/media/source/favicon.png --folder branding --filename "École Alpha Favicon"
```

- `--folder`: `branding` for these assets, to distinguish them from content uploads (see below, e.g. the `content` folder).
- `--filename`: a readable name, not the raw file name.
- `--metadata <json>`: optional, merged with the auto-extracted metadata (useful for `alt` text if relevant).

---

## Retrieving the final path after upload

CLI output alone isn't always enough to get the final storage path as it will be resolved by `fileUrl()` on the front end. If Laravel Boost is available on the project (`database-schema` / `database-query` tools), use it to read the path directly from the database rather than guessing it or rebuilding a URL by hand:

1. `database-schema` (once per project, to locate the media table — usually `media_files` or an equivalent, depending on the Creopse schema installed, and its path/URL columns).
2. `database-query` with a targeted query on the freshly created record (by file name or by the id returned by the upload command) to retrieve the exact value of the path/URL field.

If Laravel Boost isn't available on this project, fall back on the output of the `creopse media upload` command (which returns the id and, depending on the version, the path) and visually verify in dev that the image loads correctly once referenced.

**Never rebuild a storage path "by hand"** from an assumed convention (e.g. `storage/uploads/logo.png`) without having verified it — the folder structure can vary depending on the project's Laravel disk configuration.

---

## `manifest.json`

Record **every** upload (brand assets as well as content images) in `.creopse/media/manifest.json`, so later steps reuse the paths without re-uploading:

```json
{
  "logo": {
    "type": "brand",
    "source": ".creopse/media/source/logo.png",
    "media_id": 42,
    "path": "<final path retrieved from the DB or CLI output>"
  },
  "services-essentiel-hero": {
    "type": "content",
    "source": ".creopse/media/generated/services-essentiel-hero.jpg",
    "source_url": "<URL of the source page on the origin site, not the direct file URL>",
    "license": "Unsplash License",
    "media_id": 57,
    "path": "<final path>"
  }
}
```

- `type`: `brand` (step 2) or `content` (step 9) — distinguishes the two origins in a shared ledger.
- `source_url`/`license`: only for `content` entries (see next section) — traceability of provenance and license, even when the license doesn't require attribution.

This file is the source of truth used by step 3 (`base-info-conventions.md`) for `brand` entries, and by step 9 (`fake-data-conventions.md`) for `content` entries — in both cases, check whether an entry already exists before re-downloading/re-uploading an equivalent file.

---

## 2. Content images — search and upload (step 9, replaces the default `picsum.photos`)

Objective: for every `image`/`gallery` field of a section's or content-model item's fake data, use a **genuinely relevant real image**, actually hosted on the client's side, rather than a generic placeholder — without introducing copyright risk.

### Allowed sources

The criterion isn't a closed list of platforms, but a licensing rule: **any platform whose entire catalog is explicitly published under a free-reuse license** (CC0, Unsplash License, Pexels License, Pixabay License, public domain) qualifies — including an aggregator like Openverse (a search engine dedicated to Creative Commons/public-domain licensed content, maintained by the Creative Commons foundation). Wikimedia Commons is acceptable for factual content (a public institution's logo, a photo of a place), checking the precise license of each individual file — not all images found there are under the same terms.

What this criterion excludes isn't "sources other than Unsplash/Pexels/Pixabay" — it's **an unfiltered, general-purpose image search engine** (Google Images, Bing Images as-is, social networks, news sites), which mixes results under every license without flagging it. Nothing prevents using a web search scoped to a qualifying domain (e.g. `site:unsplash.com <keywords>`) instead of manually browsing each platform one by one — what matters is that the domain the image comes from itself guarantees the license, not the search method used to reach it.

Never download an image whose license isn't clearly established **by the source platform itself** (no screenshot of a third-party image search result, no image "found" on a site that isn't itself the licensing source — a blog that republishes a photo without being its author is not a valid source, even if the image appears free there).

### Procedure

1. **Search** for an image by cross-referencing the site's general context (`.creopse/context.md` — industry, positioning) and the specific context of the field in question (the text of the section/item the image is tied to), on one of the allowed sources.
2. **Download** the chosen file into `.creopse/media/generated/`, with a descriptive, stable file name (e.g. `services-pack-video-hero.jpg`, not `image1.jpg`).
3. **Upload** via the CLI:

   ```bash
   creopse media upload .creopse/media/generated/services-pack-video-hero.jpg --folder content --filename "Video Pack — main image"
   ```

4. **Record** the entry in `.creopse/media/manifest.json` (`type: content`, with `source_url` pointing to the photo's page on the origin platform, and `license`).
5. **Reference** the final path obtained (not the source platform's URL, not the local `.creopse/media/generated/...` path) in the fake data of the relevant section/item, in place of the `picsum.photos` URL.

### Fallback

If no suitable image is found after a few search attempts for a given field (too specific a theme, no relevant results on the allowed sources), fall back to `picsum.photos` for that specific field rather than blocking fake data generation — flag this fallback to the user at the review pause (step 9, point 7) rather than passing over it silently, so they can provide a better image themselves later if needed.
