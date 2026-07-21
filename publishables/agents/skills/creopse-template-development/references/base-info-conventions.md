# Conventions — Informations de base (`base-info`)

À consulter à l'étape 3 du workflow (`SKILL.md`), après l'étape 2 (médias réels).

---

## Rôle

`base-info` centralise les informations globales du site, consommées dans quasi tous les composants via `getAppInformationValue(key)` — jamais dupliquées dans une structure de section (voir règle 8 de `field-types.md`). Contrairement aux fake data de section, **ce ne sont pas des données fictives** : ce sont les vraies informations du client, et elles doivent être traitées comme telles.

---

## Clés disponibles (`AppInformationKey`)

`name`, `icon`, `oneColorIcon`, `logo`, `oneColorLogo`, `phone`, `email`, `address`, `postalCode`, `description`, `primaryColor`, `secondaryColor`, `accentColor`, `facebook`, `twitter`, `instagram`, `whatsapp`, `linkedin`, `youtube`, `pinterest`, `snapchat`, `tiktok`, `telegram`, `discord`, `reddit`, `tumblr`, `vimeo`, `twitch`, `github`, `dribbble`, `behance`, `medium`, `stackOverflow`, `threads`, `messenger`, `playstore`, `appstore`, `additionalInfo`.

## Correspondance avec `.creopse/context.md`

`context.md` doit fournir (ou être complété par l'utilisateur avant cette étape si absent) :

| Clé `base-info` | Source dans `context.md` |
|---|---|
| `name` | Nom de l'entité/client |
| `description` | Résumé de présentation (une ou deux phrases, non traduit — `base-info` n'est pas i18n, contrairement aux champs `i18n-*` de section) |
| `email`, `phone`, `address`, `postalCode` | Section coordonnées |
| `logo`, `oneColorLogo`, `icon`, `oneColorIcon` | Médias uploadés à l'étape 2 (voir `media-conventions.md`) — utiliser le chemin définitif récupéré en base, jamais une URL `picsum.photos` |
| `facebook`, `twitter`, `instagram`, etc. | Section réseaux sociaux, une entrée par réseau réellement fourni — ne pas remplir les clés non fournies |
| `primaryColor`, `secondaryColor`, `accentColor` | Uniquement si explicitement donné (charte graphique) — ne jamais inventer de couleurs par défaut. Si absentes de `context.md`, les extraire des variables CSS `:root` du template source (`--primary-color`, `--theme-color`... selon la convention de nommage du thème) plutôt que de les deviner à l'œil sur des captures d'écran |

**Ne jamais générer de valeur fictive pour une clé `base-info`.** Si une information manque dans `context.md` (téléphone, adresse...), la demander explicitement à l'utilisateur plutôt que de la deviner ou de la laisser vide par défaut — contrairement aux fake data de section, ces valeurs sont censées être publiées telles quelles.

Écrire les paires réunies dans `.creopse/base-info.json` avant tout appel CLI, à titre de brouillon inspectable/révisable — même principe que les structures de section, modèles de contenu et menus, qui passent tous par un fichier avant la CLI plutôt que d'être composés uniquement en mémoire :

```json
{
  "name": "École Alpha",
  "email": "contact@ecole-alpha.tg",
  "phone": "+228 XX XX XX XX",
  "address": "Lomé, Togo",
  "logo": "<chemin défini à l'étape 2>",
  "facebook": "https://facebook.com/ecolealpha"
}
```

---

## Commande CLI

`base-info update` prend des paires `key=value` ; une valeur longue (`description`) peut être chargée depuis un fichier avec `@chemin` :

```bash
creopse base-info update \
  name="École Alpha" \
  email="contact@ecole-alpha.tg" \
  phone="+228 XX XX XX XX" \
  address="Lomé, Togo" \
  logo="<chemin défini à l'étape 2>" \
  facebook="https://facebook.com/ecolealpha"
```

Pour une description longue :

```bash
creopse base-info update description=@.creopse/context/description.txt
```

Exécuter cette commande **en une seule fois** avec toutes les paires disponibles plutôt qu'en plusieurs appels successifs, sauf si certaines clés (ex. `logo`) ne sont connues qu'après l'étape 2 et d'autres non — dans ce cas, un seul appel groupé une fois toutes les valeurs réunies reste préférable à plusieurs appels partiels.

## Pas de point de blocage strict

Cette étape ne nécessite pas de validation formelle si toutes les valeurs sont déjà présentes et sans ambiguïté dans `context.md` — l'exécuter directement. Ne demander confirmation que si des valeurs manquent ou semblent ambiguës (ex. plusieurs numéros de téléphone dans le contexte sans indication du numéro principal).
