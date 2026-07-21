# Conventions — Modèles de contenu (`content-model`)

À consulter à l'étape 7 du workflow (`SKILL.md`), avant la complétion section par section (étape 8) des sections qui en dépendent.

---

## Détecter le besoin

Un modèle de contenu est nécessaire dès qu'une section de l'inventaire (étape 5.1) correspond à un pattern "liste + détail" plutôt qu'à du contenu unique de section : Services (`Services.vue` + `ServiceDetails.vue`), Projects (`Projects.vue` + `ProjectDetails.vue`), News/Articles, Team, offres de formation, etc. — reconnaissable au fait que le composant consomme `storeToRefs(useContentStore())` et `getContentPath(item)` plutôt que `getSectionData`/`getSectionRootData` seuls (voir `section-patterns.md`).

Établir la liste des modèles nécessaires à partir de cet inventaire **avant** de commencer l'étape 8, pour que les sections qui les référencent (via `content-model-item`/`content-model-items` dans leur propre structure, ex. le champ `parent-service` de Services) puissent pointer vers des items réels dès leur complétion. Si le menu créé à l'étape 6 doit avoir un item pointant directement vers un item de modèle de contenu (`--target-type content-link`), revenir compléter ce menu juste après cette étape — voir `menu-conventions.md`.

---

## Store partagé pour modèles de contenu réutilisés (`useContentStore` / `useDataloader`)

Pattern **optionnel, local au projet** — pas fourni par `@creopse/vue`/`@creopse/react`/`@creopse/utils`, à mettre en place au cas par cas plutôt qu'à supposer déjà présent. Pertinent quand un modèle de contenu a **peu d'items** et est consommé par **plusieurs sections** (typiquement liste + détail, ex. Services/Projects) : au lieu d'appeler `getContentModelItems(name)` (`useContent()`) séparément dans chaque section qui en a besoin, charger une fois au démarrage de l'app dans un store Pinia partagé.

Ne pas l'utiliser pour un modèle de contenu :

- consommé par une seule section → `getContentModelItems(name)` directement sur place, pas de store nécessaire ;
- avec beaucoup d'items ou nécessitant filtrage/pagination serveur → `getPaginatedContentModelItems` à la demande (le store charge tout en mémoire une seule fois, adapté aux petits volumes seulement).

### Structure

```
resources/js/stores/content.ts          # store Pinia : state uniquement, un tableau par modèle réutilisé
resources/js/composables/dataloader.ts  # composable qui peuple le store au démarrage
resources/js/App.vue                    # appelle initializeData() une seule fois, au montage racine
```

```ts
// resources/js/stores/content.ts
import type { ContentModelItemModel } from '@creopse/utils'

interface ContentState {
  services: ContentModelItemModel['data'][]
  projects: ContentModelItemModel['data'][]
  // une clé par modèle de contenu réutilisé du projet — adapter aux modèles réels, ne pas préremplir par défaut
}

export const useContentStore = defineStore('content', {
  state: (): ContentState => ({
    services: [],
    projects: [],
  }),
  getters: {},
})
```

```ts
// resources/js/composables/dataloader.ts
export const useDataloader = () => {
  const { services, projects } = storeToRefs(useContentStore())
  const { getContentModelItems } = useContent()

  const initializeData = async () => {
    services.value = (await getContentModelItems('services')) || []
    projects.value = (await getContentModelItems('projects')) || []
  }

  return { initializeData }
}
```

```vue
<!-- resources/js/App.vue -->
<script setup lang="ts">
  const { initializeData } = useDataloader()
  initializeData()
</script>

<template>
  <slot></slot>
</template>
```

Une fois ce store en place pour un modèle donné, les sections le consomment exclusivement via `storeToRefs(useContentStore())` (voir `section-patterns.md` — Services/Projects) — ne jamais appeler `getContentModelItems` en parallèle pour ce même modèle, sous peine de double chargement.

---

## Choix `intent` / `access-scope`

Deux couples à utiliser selon le type de contenu, **convention confirmée pour ce projet** (à retenir telle quelle, indépendamment du phrasé générique de la documentation CLI) :

| Type de contenu | `intent` | `access-scope` | Exemples |
|---|---|---|---|
| Contenu géré **uniquement depuis l'administration** (éditorial, catalogue) | `editorial-content` | `internal` | Services, Projects, Team, Articles, offres de formation |
| Contenu **soumis par les utilisateurs** du site (formulaires, données côté visiteur) | `user-data` | `user-editable` | Messages du formulaire de contact (`contact-form-messages`, voir `Contact.vue`), inscriptions newsletter si modélisées en content-model |

Ne pas utiliser `user-data`/`user-editable` pour du contenu catalogue même si un admin doit pouvoir le modifier depuis l'interface — la distinction porte sur **qui produit la donnée à l'origine** (l'équipe éditoriale vs le visiteur du site), pas sur qui peut la consulter ensuite.

---

## Structure de dossier

```
.creopse/content-models/<NomModele>/
├── data-structure.json     # structure des champs (singletons uniquement, format identique à data.json de section)
└── items/
    └── <slug-item>.json    # une fake data par item, prête pour item-add --data
```

---

## Commandes CLI

### Création du modèle

```bash
creopse content-model add service editorial-content internal \
  --title "en:Service" --title "fr:Service" \
  --data-structure @.creopse/content-models/Service/data-structure.json \
  --title-field-name name \
  --has-permalink true
```

- `--title-field-name` : le champ de la structure utilisé comme titre d'affichage en admin (généralement `name` ou `title`).
- `--has-permalink` : `true` dès que le modèle a une page de détail dédiée (`ServiceDetails`, `ProjectDetails`...), `false` sinon.

Pour un modèle de données utilisateur (ex. messages de contact) :

```bash
creopse content-model add contact-form-messages user-data user-editable \
  --title "en:Contact Messages" --title "fr:Messages de contact" \
  --data-structure @.creopse/content-models/ContactFormMessages/data-structure.json
```

Ce cas précis (`contact-form-messages`) n'a en général pas besoin d'être recréé manuellement s'il existe déjà nativement dans l'installation Creopse du projet (utilisé directement par `submitUserContentModelItem` dans `Contact.vue`) — vérifier son existence avant de le recréer.

### Ajout des items (fake data)

```bash
creopse content-model item-add service --title "en:Energy Audit" --data @.creopse/content-models/Service/items/energy-audit.json
creopse content-model item-add service --title "en:Capacity Building" --data @.creopse/content-models/Service/items/capacity-building.json
```

Le format de `--data` suit les mêmes règles que la fake data de section (`fake-data-conventions.md`) : `i18n-text`/`i18n-editor` en JSON stringifié, images en `picsum.photos` sauf asset de marque réel, icônes en SVG inline, etc. — et suit la **même imbrication `index`** pour les champs singletons qu'une section (un modèle de contenu n'a en général pas de collections, seulement des singletons, donc le fichier de fake data d'un item se limite à l'objet `index`). Cette imbrication se retrouve directement côté composant : `ServiceDetails.vue`/`ProjectDetails.vue` consomment `contentProps?.contentModelItem?.contentModelData?.index?.title` — ne pas l'omettre en générant la fake data d'un item sous peine de rendu vide côté détail.

---

## Cohérence avec les fake data de section

Une fois les items créés, noter leurs IDs (sortie CLI ou requête `database-query` via Laravel Boost si disponible — voir `media-conventions.md`) pour que les champs `content-model-item` référencés depuis d'autres sections (ex. `parent-service` dans la structure Service elle-même, ou un champ similaire dans une autre section) pointent vers de vrais IDs à l'étape 8, au lieu d'un ID inventé au hasard (voir règle correspondante dans `fake-data-conventions.md`).

---

## Point de validation

Présenter la liste des modèles détectés comme nécessaires, avec le couple `intent`/`access-scope` proposé pour chacun, avant exécution des commandes `content-model add`.
