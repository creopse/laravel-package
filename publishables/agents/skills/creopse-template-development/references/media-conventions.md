# Conventions — Médias réels et images de contenu (`media`)

À consulter à l'étape 2 du workflow (`SKILL.md`), juste après le découpage du template (étape 1) et avant les informations de base (étape 3) — et de nouveau à l'étape 9, point 5, pour les images de contenu (voir dernière section de ce document).

---

## Arborescence

```
.creopse/media/
├── source/           # assets de marque réels déposés par l'utilisateur (logo, favicon, photos officielles) — input, lecture seule
├── generated/         # images de contenu trouvées et téléchargées à l'étape 9 — staging avant upload
└── manifest.json      # ledger unique : tout fichier local uploadé (source/ ou generated/) → média en base
```

`source/` et `generated/` ne sont jamais confondus : le premier contient des fichiers fournis par l'utilisateur (à ne jamais remplacer ni régénérer), le second des fichiers que l'agent a lui-même trouvés et peut régénérer/retélécharger si besoin.

---

## 1. Assets de marque réels (étape 2)

- **À uploader**, depuis `.creopse/media/source/` : logo, version monochrome du logo (`oneColorLogo`), favicon/icône (`icon`, `oneColorIcon`), et toute photo officielle explicitement fournie par le client.
- Ne **jamais** aller chercher ces assets dans `.creopse/html_template/assets/` : le template source est un thème de démonstration, ses visuels (y compris un éventuel logo placeholder) ne sont pas des assets de marque réels, même s'ils s'y trouvent physiquement.
- Si `.creopse/media/source/` est vide ou ne contient manifestement pas de logo/favicon, **demander à l'utilisateur** plutôt que d'improviser avec un visuel du template ou de sauter l'étape silencieusement.

```bash
creopse media upload .creopse/media/source/logo.png --folder branding --filename "Logo École Alpha"
creopse media upload .creopse/media/source/favicon.png --folder branding --filename "Favicon École Alpha"
```

- `--folder` : `branding` pour ces assets, pour les distinguer des uploads de contenu (voir plus bas, dossier `content` par exemple).
- `--filename` : nom lisible, pas le nom de fichier brut.
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

Consigner **chaque** upload (assets de marque comme images de contenu) dans `.creopse/media/manifest.json`, pour que les étapes suivantes réutilisent les chemins sans re-uploader :

```json
{
  "logo": {
    "type": "brand",
    "source": ".creopse/media/source/logo.png",
    "media_id": 42,
    "path": "<chemin définitif récupéré en base ou en sortie CLI>"
  },
  "services-essentiel-hero": {
    "type": "content",
    "source": ".creopse/media/generated/services-essentiel-hero.jpg",
    "source_url": "<URL de la page source sur le site d'origine, pas l'URL directe du fichier>",
    "license": "Unsplash License",
    "media_id": 57,
    "path": "<chemin définitif>"
  }
}
```

- `type` : `brand` (étape 2) ou `content` (étape 9) — distingue les deux origines dans un ledger commun.
- `source_url`/`license` : uniquement pour les entrées `content` (voir section suivante) — traçabilité de la provenance et de la licence, même quand celle-ci n'exige pas d'attribution.

Ce fichier est la source de vérité utilisée par l'étape 3 (`base-info-conventions.md`) pour les entrées `brand`, et par l'étape 9 (`fake-data-conventions.md`) pour les entrées `content` — dans les deux cas, vérifier si une entrée existe déjà avant de re-télécharger/re-uploader un fichier équivalent.

---

## 2. Images de contenu — recherche et upload (étape 9, remplace `picsum.photos` par défaut)

Objectif : pour chaque champ `image`/`gallery` d'une fake data de section ou d'item de modèle de contenu, utiliser une **vraie image pertinente**, réellement hébergée chez le client, plutôt qu'un placeholder générique — sans introduire de risque de droits d'auteur.

### Sources autorisées

Le critère n'est pas une liste fermée de plateformes, mais une règle de licence : **toute plateforme dont l'intégralité du catalogue est explicitement publiée sous une licence de réutilisation libre** (CC0, licence Unsplash, licence Pexels, licence Pixabay, domaine public) qualifie — y compris un agrégateur comme Openverse (moteur de recherche dédié au contenu sous licence Creative Commons/domaine public, maintenu par la fondation Creative Commons). Wikimedia Commons est acceptable pour du contenu factuel (logo d'institution publique, photo d'un lieu), en vérifiant la licence précise de chaque fichier individuel — toutes les images qui s'y trouvent ne sont pas au même régime.

Ce que ce critère exclut, ce n'est pas "les sources autres qu'Unsplash/Pexels/Pixabay" — c'est **un moteur de recherche d'images généraliste non filtré** (Google Images, Bing Images tels quels, réseaux sociaux, sites de presse), qui mélange des résultats sous toutes licences sans le signaler. Rien n'empêche d'utiliser une recherche web scopée à un domaine qualifiant (ex. `site:unsplash.com <mots-clés>`) plutôt que de naviguer manuellement sur chaque plateforme une par une — l'important est que le domaine d'où vient l'image garantisse lui-même la licence, pas la méthode de recherche employée pour l'atteindre.

Ne jamais télécharger une image dont la licence n'est pas clairement établie **par la plateforme source elle-même** (pas de capture d'écran d'un résultat de recherche d'image tierce, pas d'image "trouvée" sur un site qui n'est pas lui-même la source de la licence — un blog qui republie une photo sans en être l'auteur n'est pas une source valide même si l'image y semble libre).

### Procédure

1. **Rechercher** une image en croisant le contexte général du site (`.creopse/context.md` — secteur, positionnement) et le contexte spécifique du champ concerné (le texte de la section/item auquel l'image est associée), sur l'une des sources autorisées.
2. **Télécharger** le fichier retenu dans `.creopse/media/generated/`, avec un nom de fichier descriptif et stable (ex. `services-pack-video-hero.jpg`, pas `image1.jpg`).
3. **Uploader** via la CLI :

   ```bash
   creopse media upload .creopse/media/generated/services-pack-video-hero.jpg --folder content --filename "Pack Vidéo — image principale"
   ```

4. **Consigner** l'entrée dans `.creopse/media/manifest.json` (`type: content`, avec `source_url` pointant vers la page de la photo sur la plateforme d'origine, et `license`).
5. **Référencer** le chemin définitif obtenu (pas l'URL de la plateforme source, pas le chemin local `.creopse/media/generated/...`) dans la fake data de la section/item concerné, à la place de l'URL `picsum.photos`.

### Repli

Si aucune image adéquate n'est trouvée après quelques tentatives de recherche pour un champ donné (thématique trop spécifique, aucun résultat pertinent sur les sources autorisées), revenir à `picsum.photos` pour ce champ précis plutôt que de bloquer la génération de la fake data — signaler ce repli à l'utilisateur au moment de la pause de review (étape 9, point 7) plutôt que de le passer sous silence, pour qu'il puisse fournir lui-même une image plus tard si besoin.
