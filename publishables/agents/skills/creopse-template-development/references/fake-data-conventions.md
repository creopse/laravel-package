# Conventions de génération des fausses données

Consulter ce document à l'étape 8.5 du workflow (`SKILL.md`), une fois la structure `data.json` d'une section validée et soumise à la CLI.

---

## Utiliser `.creopse/context.md`

Avant de générer la moindre fausse donnée, lire `.creopse/context.md` s'il existe. Ce fichier contient le contexte métier du projet : nom, secteur d'activité, positionnement/ton, langue(s) cible, contact (adresse, téléphone, email). Il sert à :

- Rédiger des titres, descriptions et textes cohérents avec le domaine réel du site (un cabinet d'audit énergétique n'a pas le même vocabulaire qu'un hôtel de bien-être).
- Reprendre le bon nom de marque/entité dans les textes générés.
- Adapter le registre de langue (formel/institutionnel vs chaleureux/accueillant) selon le positionnement décrit.
- Éviter d'inventer des coordonnées de contact fictives quand elles sont déjà fournies dans le contexte — les réutiliser telles quelles si le champ correspondant existe dans la structure.

Si `context.md` n'existe pas, demander le contexte à l'utilisateur avant de générer des textes trop génériques, plutôt que d'inventer un domaine métier au hasard.

---

## Format racine des fausses données

Un objet avec une clé `index` pour les singletons, et une clé top-level par collection — miroir exact de la structure `data.json`, mais avec les valeurs réelles à la place des définitions de champs. **Les clés passent en snake_case** dans les fausses données (alors qu'elles étaient en kebab-case dans la structure) :

```json
{
  "index": {
    "title": "{\"fr\":\"...\",\"en\":\"...\"}",
    "text": "{\"fr\":\"...\",\"en\":\"...\"}",
    "btn_url": 6,
    "main_image": "https://picsum.photos/1200/800?random=nom-slug-unique"
  },
  "features": [
    { "icon": "<svg>...</svg>", "title": "{...}", "text": "{...}" }
  ],
  "headlinks": [
    { "title": "{...}", "url": "..." }
  ]
}
```

Points de format stricts :

- **Un seul objet `index`** pour tous les singletons de la section (pas un tableau).
- **Une clé top-level par collection**, contenant un **tableau** d'objets — un objet par entrée de la collection.
- **Champs i18n** (`i18n-text`, `i18n-editor`) : toujours une chaîne JSON stringifiée `"{\"fr\":\"...\",\"en\":\"...\"}"`, jamais un objet JS natif. Rappel : `i18n-textarea` n'est jamais utilisé sur ce projet (voir `field-types.md`), donc ce format ne s'applique en pratique qu'à `i18n-text`/`i18n-editor`.
- **Champs `i18n-list`** : suivre le format `[{"value": "{\"fr\":\"...\",\"en\":\"...\"}"}]` — voir `field-types.md`.
- **Champs `menu-item-link`** : type hybride (voir règle 9 de `field-types.md`) — générer soit une valeur numérique (ID d'item de menu existant), soit une URL brute, **selon la façon dont le composant consomme réellement le champ**. Ne pas assumer par défaut que c'est toujours un ID : vérifier le composant complété à l'étape 8.2 avant de choisir le format. Les items de menu sont créés en amont à l'étape 6 (voir `menu-conventions.md`) — reprendre l'ID réel noté dans `.creopse/menus/<location>.json`, ne jamais en inventer un au hasard.
- **Champs `content-model-item`** : une valeur numérique référençant l'ID d'un item existant du modèle de contenu ciblé (ex : service parent). Les modèles et leurs items sont créés en amont à l'étape 7 (voir `content-models-conventions.md`) — reprendre un ID réellement créé, jamais un ID inventé.

---

## Images placeholder

Toujours `picsum.photos`, avec un slug `random` unique et descriptif par entrée — jamais le même slug réutilisé deux fois dans le même jeu de fausses données :

```
https://picsum.photos/1200/800?random=nom-projet-section-descriptif
https://picsum.photos/600/400?random=nom-projet-feature-audit-energetique
```

Adapter les dimensions au type d'image (grande image de fond ~1200x800, vignette de carte ~600x400, avatar/logo ~200x200).

---

## Icônes

Format SVG inline complet (pas de référence à un fichier externe ni de nom d'icône seul), cohérent avec la charte du projet quand elle est connue. Exemple de structure SVG type utilisée dans les projets existants :

```
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" ... viewBox="0 0 32 32" ...>
  <path d="..."/>
</svg>
```

Si le projet utilise des icônes MDI plutôt que du SVG inline pour certains champs (`icon` en usage `<Icon icon="mdi:...">` côté composant plutôt que `<ContentIcon :data="...">`), vérifier le composant complété à l'étape 8.2 pour savoir quel format est réellement consommé, et générer en conséquence.

---

## Contenu éditorial (`i18n-editor`)

Rédiger en HTML simple et propre, cohérent avec le contexte métier :

```json
"{\"fr\":\"<p style=\\\"text-align:justify;\\\">Texte en français...</p>\",\"en\":\"<p style=\\\"text-align:justify;\\\">English text...</p>\"}"
```

- Toujours fournir les deux langues si le projet est bilingue (vérifier dans `context.md` ou dans la structure elle-même si un seul `fr` suffit).
- Texte réaliste et substantiel (plusieurs phrases pour une description principale), pas de lorem ipsum.
- Échapper correctement les guillemets doubles imbriqués dans le HTML (`\\\"` dans la chaîne JSON finale).

---

## Cohérence inter-sections

Quand plusieurs sections référencent la même entité (ex : un service listé dans `Services` et détaillé dans `ServiceDetails`, ou une session liée à une formation), les fausses données générées pour chaque section/modèle de contenu doivent rester cohérentes entre elles — mêmes noms, mêmes IDs de référence, mêmes images si c'est censé être la même entité. Vérifier les fichiers déjà écrits dans `.creopse/fake-data/` avant de générer une nouvelle section qui référence un modèle de contenu déjà traité.

---

## Règle de régénération

Si une collection ou un tableau de fausses données doit être modifié après une correction ou un ajout demandé par l'utilisateur, régénérer et réécrire l'**intégralité** du tableau concerné dans `.creopse/fake-data/<NomSection>.json` plutôt que de ne fournir que la partie modifiée — cela préserve un fichier toujours complet et directement copiable dans le CMS, et suit le principe de rewrites complets déjà en vigueur sur ce projet plutôt que des patches partiels.
