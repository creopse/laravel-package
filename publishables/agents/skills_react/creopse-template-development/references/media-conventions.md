# Conventions — Médias réels (`media`)

À consulter à l'étape 2 du workflow (`SKILL.md`), juste après le découpage du template (étape 1) et avant les informations de base (étape 3).

---

## Ce qu'on upload vs ce qu'on garde en placeholder

- **À uploader** (assets de marque réels fournis par le template source ou le client) : logo, version monochrome du logo (`oneColorLogo`), favicon/icône (`icon`, `oneColorIcon`), et toute photo officielle explicitement fournie par le client (pas une photo de stock du template HTML générique).
- **À laisser en `picsum.photos`** (voir `fake-data-conventions.md`) : toutes les images de contenu fictif générées pour peupler les sections/modèles de contenu (illustrations de features, photos d'équipe non fournies, galerie, etc.) — elles seront remplacées plus tard par le client via l'administration.

En cas de doute sur si un fichier du template est un vrai asset de marque ou un simple visuel de démo, demander confirmation plutôt que d'uploader par réflexe.

---

## Upload via la CLI

```bash
creopse media upload ./assets/logo.png --folder branding --filename "Logo École Alpha"
creopse media upload ./assets/favicon.png --folder branding --filename "Favicon École Alpha"
```

- `--folder` : utiliser un dossier dédié (`branding` typiquement) pour distinguer les assets de marque des futurs uploads de contenu.
- `--filename` : nom lisible, pas le nom de fichier brut du template source.
- `--metadata <json>` : optionnel, fusionné avec les métadonnées auto-extraites (utile pour un `alt` texte si pertinent).

---

## Récupérer le chemin définitif après upload

La sortie CLI seule n'est pas toujours suffisante pour obtenir le chemin de stockage définitif tel qu'il sera résolu par `fileUrl()` côté front. Si Laravel Boost est disponible dans le projet (outils `database-schema` / `database-query`), l'utiliser pour lire directement le chemin en base plutôt que de le deviner ou de reconstruire une URL à la main :

1. `database-schema` (une seule fois par projet, pour repérer la table des médias — généralement `media_files` ou équivalent selon le schéma Creopse installé, et ses colonnes de chemin/URL).
2. `database-query` avec une requête ciblée sur l'enregistrement fraîchement créé (par nom de fichier ou par id renvoyé par la commande d'upload) pour récupérer la valeur exacte du champ chemin/URL.

Si Laravel Boost n'est pas disponible sur ce projet, se rabattre sur la sortie de la commande `creopse media upload` (qui retourne l'id et, selon la version, le chemin) et vérifier visuellement en dev que l'image se charge correctement une fois référencée.

**Ne jamais reconstruire un chemin de stockage "à la main"** par convention supposée (ex. `storage/uploads/logo.png`) sans l'avoir vérifié — la structure de dossiers peut varier selon la configuration du disque Laravel du projet.

---

## `manifest.json`

Consigner chaque upload dans `.creopse/media/manifest.json`, pour que les étapes suivantes (base-info, fake data) puissent réutiliser les chemins sans re-uploader :

```json
{
  "logo": {
    "source": "assets/img/logo.png",
    "media_id": 42,
    "path": "<chemin définitif récupéré en base ou en sortie CLI>"
  },
  "favicon": {
    "source": "assets/img/favicon.png",
    "media_id": 43,
    "path": "<chemin définitif>"
  }
}
```

Ce fichier est la source de vérité utilisée par l'étape 3 (`base-info-conventions.md`) pour remplir les clés `logo`/`oneColorLogo`/`icon`/`oneColorIcon`.
