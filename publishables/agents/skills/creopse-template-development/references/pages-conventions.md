# Conventions — Pages (`page`)

À consulter à l'étape 4 du workflow (`SKILL.md`, création des pages) et à l'étape 9 (assemblage final, attachement des sections).

---

## Format attendu dans `.creopse/context.md`

`context.md` doit contenir une section dédiée listant les pages à créer, par exemple :

```markdown
## Pages

- **home** (position 1) — "Accueil" / "Home"
  Sections : Header, Slider, About, Services, Testimonials, News, Footer
- **about** (position 2) — "À propos" / "About"
  Sections : Header, Banner, About (source: home), Features, Footer
- **contact** (position 3) — "Contact" / "Contact us"
  Sections : Header, Banner, Contact, Footer
```

Si cette section est absente de `context.md`, **ne pas déduire les pages uniquement à partir des fichiers HTML du template** (un `index.html`/`about.html`/`contact.html` ne donne pas forcément le bon nom de page ni la bonne position) — demander la liste à l'utilisateur avant l'étape 4.

La mention `(source: home)` indique une section dont les données doivent être **partagées** avec l'instance d'une autre page plutôt que dupliquées (voir `set-section-source` plus bas) — typiquement un Footer ou une bannière identique partout.

---

## Étape 4 — Création des pages

```bash
creopse page add home --title "en:Home" --title "fr:Accueil" --position 1
creopse page add about --title "en:About" --title "fr:À propos" --position 2
creopse page add contact --title "en:Contact" --title "fr:Contact" --position 3
```

- Un seul nom de page par appel (`add` ne prend qu'un seul nom, contrairement à `section add`/`widget add`).
- `--content` n'est utile que si la page a un contenu HTML propre en dehors des sections (rare dans ce workflow — la plupart des pages sont entièrement composées de sections).
- Cette étape ne crée que la coquille de page. Ne pas tenter d'attacher de sections ici, même si elles sont déjà scaffoldées — l'attachement se fait à l'étape 9, une fois les sections complétées.

---

## Étape 9 — Attachement des sections

### Attacher une instance de section à une page

```bash
creopse page attach-section home Header --link-id top --data @.creopse/fake-data/Header.json
creopse page attach-section home Slider --link-id main --data @.creopse/fake-data/Slider.json
```

- `--link-id` : identifiant d'instance, par défaut `default`. Utiliser un id explicite dès qu'une même section peut apparaître plusieurs fois sur le site (ex. `Testimonials` en accueil et en page service, avec des témoignages différents) — voir l'exemple `HeroBanner:top` / `HeroBanner:bottom` de `cli-reference.md`.
- `--data` : passer le fichier de fake data validé à l'étape 8 (préfixe `@` obligatoire, même convention que `section edit --data-structure`).
- `--link-title` : optionnel, titre spécifique à cette instance (utile en admin pour distinguer deux instances de la même section).

### Sourcer les données depuis une autre page (`set-section-source`)

Pour une section qui doit rester strictement identique entre plusieurs pages (Footer, Header typiquement) plutôt que dupliquée manuellement à chaque page :

```bash
creopse page attach-section about Footer --link-id bottom
creopse page set-section-source about Footer --link-id bottom --source-page home --source-link-id bottom
```

Une modification future du Footer sur `home` se répercute alors automatiquement sur `about` — pas besoin de repasser par chaque page pour une mise à jour de Footer/Header. Préférer ce mécanisme à la duplication de `--data` identiques sur chaque page dès que `context.md` indique `(source: <page>)` pour une section.

### Ordonner les sections d'une page

```bash
creopse page order-sections home \
  --item "Header:top" --item "Slider:main" --item "About:default" \
  --item "Services:default" --item "Testimonials:default" \
  --item "News:default" --item "Footer:bottom"
```

L'ordre des `--item` détermine l'ordre d'affichage vertical sur la page — le construire dans l'ordre exact du template HTML source pour cette page.

### Activer/désactiver une instance

```bash
creopse page toggle-section-status home Testimonials --link-id main --disabled true
```

Utile pour une section attachée mais volontairement non publiée le temps d'une validation supplémentaire, plutôt que de la détacher puis la rattacher.

### Détacher une instance

```bash
creopse page detach-section home Testimonials --link-id main --force
```

À utiliser uniquement en cas d'erreur d'attachement, pas comme mécanisme de désactivation temporaire (préférer `toggle-section-status` dans ce cas).

---

## Point de validation

Présenter, page par page, la liste ordonnée des sections avec leur `link-id` avant d'exécuter `attach-section`/`order-sections` — ces commandes déterminent le rendu final visible en dev/production.
