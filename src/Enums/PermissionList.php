<?php

namespace Creopse\Creopse\Enums;

enum PermissionList: string
{
    // Dashboard Module
    case VIEW_DASHBOARD = 'view-dashboard';

        // Account Module
    case VIEW_ACCOUNT = 'view-account';
    case EDIT_ACCOUNT = 'edit-account';

        // Notifications Module
    case VIEW_NOTIFICATIONS = 'view-notifications';
    case MANAGE_NOTIFICATIONS = 'manage-notifications';

        // Settings Module
    case VIEW_ABOUT = 'view-about';
    case MANAGE_APP_SETTINGS = 'manage-app-settings';

        // Users Module
    case VIEW_USERS = 'view-users';
    case CREATE_USER = 'create-user';
    case EDIT_USER = 'edit-user';
    case DELETE_USER = 'delete-user';

        // Access Module
    case VIEW_ROLES = 'view-roles';
    case MANAGE_ROLES = 'manage-roles';
    case VIEW_PERMISSIONS = 'view-permissions';
    case MANAGE_PERMISSIONS = 'manage-permissions';

        // News Module
    case CREATE_ARTICLE = 'create-article';
    case EDIT_ARTICLE = 'edit-article';
    case DELETE_ARTICLE = 'delete-article';
    case MANAGE_NEWS = 'manage-news';

        // Media Module
    case VIEW_MEDIA = 'view-media';
    case UPLOAD_MEDIA = 'upload-media';
    case DELETE_MEDIA = 'delete-media';

        // Content Module
    case VIEW_CONTENT = 'view-content';
    case MANAGE_CONTENT = 'manage-content';
    case USE_VISUAL_EDITOR = 'use-visual-editor';

    /**
     * Get the human-readable label for the permission
     */
    public function label(): string
    {
        return match ($this) {
            self::VIEW_DASHBOARD => '{"fr": "Voir le tableau de bord", "en": "View dashboard"}',

            self::VIEW_ACCOUNT => '{"fr": "Voir son compte", "en": "View account"}',
            self::EDIT_ACCOUNT => '{"fr": "Modifier son compte", "en": "Edit account"}',

            self::VIEW_NOTIFICATIONS => '{"fr": "Voir les notifications", "en": "View notifications"}',
            self::MANAGE_NOTIFICATIONS => '{"fr": "Gérer les notifications", "en": "Manage notifications"}',

            self::VIEW_ABOUT => '{"fr": "Voir la page À propos", "en": "View about page"}',
            self::MANAGE_APP_SETTINGS => '{"fr": "Gérer les paramètres de l\'application", "en": "Manage app settings"}',

            self::VIEW_USERS => '{"fr": "Voir les utilisateurs", "en": "View users"}',
            self::CREATE_USER => '{"fr": "Créer un utilisateur", "en": "Create user"}',
            self::EDIT_USER => '{"fr": "Modifier un utilisateur", "en": "Edit user"}',
            self::DELETE_USER => '{"fr": "Supprimer un utilisateur", "en": "Delete user"}',

            self::VIEW_ROLES => '{"fr": "Voir les rôles", "en": "View roles"}',
            self::MANAGE_ROLES => '{"fr": "Gérer les rôles", "en": "Manage roles"}',
            self::VIEW_PERMISSIONS => '{"fr": "Voir les permissions", "en": "View permissions"}',
            self::MANAGE_PERMISSIONS => '{"fr": "Gérer les permissions", "en": "Manage permissions"}',

            self::CREATE_ARTICLE => '{"fr": "Créer un article", "en": "Create article"}',
            self::EDIT_ARTICLE => '{"fr": "Modifier un article", "en": "Edit article"}',
            self::DELETE_ARTICLE => '{"fr": "Supprimer un article", "en": "Delete article"}',
            self::MANAGE_NEWS => '{"fr": "Gérer les actualités", "en": "Manage news"}',

            self::VIEW_MEDIA => '{"fr": "Voir la médiathèque", "en": "View media library"}',
            self::UPLOAD_MEDIA => '{"fr": "Ajouter des médias", "en": "Upload media"}',
            self::DELETE_MEDIA => '{"fr": "Supprimer des médias", "en": "Delete media"}',

            self::VIEW_CONTENT => '{"fr": "Voir le contenu", "en": "View content"}',
            self::MANAGE_CONTENT => '{"fr": "Gérer le contenu", "en": "Manage content"}',
            self::USE_VISUAL_EDITOR => '{"fr": "Utiliser l\'éditeur visuel", "en": "Use visual editor"}',
        };
    }

    /**
     * Get the description of the permission
     */
    public function description(): string
    {
        return match ($this) {
            self::VIEW_DASHBOARD => '{"fr": "Accéder au tableau de bord administrateur", "en": "Access admin dashboard"}',

            self::VIEW_ACCOUNT => '{"fr": "Consulter les informations de son compte", "en": "View account information"}',
            self::EDIT_ACCOUNT => '{"fr": "Modifier ses informations personnelles", "en": "Edit personal information"}',

            self::VIEW_NOTIFICATIONS => '{"fr": "Consulter les notifications", "en": "View notifications"}',
            self::MANAGE_NOTIFICATIONS => '{"fr": "Créer, modifier et supprimer les notifications", "en": "Create, edit and delete notifications"}',

            self::VIEW_ABOUT => '{"fr": "Accéder à la page À propos", "en": "Access about page"}',
            self::MANAGE_APP_SETTINGS => '{"fr": "Modifier les paramètres globaux de l\'application", "en": "Modify global application settings"}',

            self::VIEW_USERS => '{"fr": "Consulter la liste des utilisateurs", "en": "View users list"}',
            self::CREATE_USER => '{"fr": "Ajouter de nouveaux utilisateurs", "en": "Add new users"}',
            self::EDIT_USER => '{"fr": "Modifier les informations des utilisateurs", "en": "Edit user information"}',
            self::DELETE_USER => '{"fr": "Supprimer des utilisateurs", "en": "Delete users"}',

            self::VIEW_ROLES => '{"fr": "Consulter les rôles et permissions", "en": "View roles and permissions"}',
            self::MANAGE_ROLES => '{"fr": "Créer, modifier et supprimer des rôles", "en": "Create, edit and delete roles"}',
            self::VIEW_PERMISSIONS => '{"fr": "Consulter les permissions", "en": "View permissions"}',
            self::MANAGE_PERMISSIONS => '{"fr": "Créer, modifier et supprimer des permissions", "en": "Create, edit and delete permissions"}',

            self::CREATE_ARTICLE => '{"fr": "Créer de nouveaux articles", "en": "Create new articles"}',
            self::EDIT_ARTICLE => '{"fr": "Modifier les articles existants", "en": "Edit existing articles"}',
            self::DELETE_ARTICLE => '{"fr": "Supprimer des articles", "en": "Delete articles"}',
            self::MANAGE_NEWS => '{"fr": "Gérer les actualités et newsletters", "en": "Manage news and newsletters"}',

            self::VIEW_MEDIA => '{"fr": "Accéder à la médiathèque", "en": "Access media library"}',
            self::UPLOAD_MEDIA => '{"fr": "Téléverser des fichiers média", "en": "Upload media files"}',
            self::DELETE_MEDIA => '{"fr": "Supprimer des fichiers média", "en": "Delete media files"}',

            self::VIEW_CONTENT => '{"fr": "Consulter le module de gestion de contenu", "en": "View content management module"}',
            self::MANAGE_CONTENT => '{"fr": "Gérer le contenu", "en": "Manage content"}',
            self::USE_VISUAL_EDITOR => '{"fr": "Utiliser l\'éditeur visuel", "en": "Use visual editor"}',
        };
    }

    /**
     * Get the module this permission belongs to
     */
    public function module(): string
    {
        return match ($this) {
            self::VIEW_DASHBOARD => 'dashboard',

            self::VIEW_ACCOUNT,
            self::EDIT_ACCOUNT => 'account',

            self::VIEW_NOTIFICATIONS,
            self::MANAGE_NOTIFICATIONS => 'notifications',

            self::VIEW_ABOUT,
            self::MANAGE_APP_SETTINGS => 'settings',

            self::VIEW_USERS,
            self::CREATE_USER,
            self::EDIT_USER,
            self::DELETE_USER => 'users',

            self::VIEW_ROLES,
            self::MANAGE_ROLES,
            self::VIEW_PERMISSIONS,
            self::MANAGE_PERMISSIONS => 'access',

            self::CREATE_ARTICLE,
            self::EDIT_ARTICLE,
            self::DELETE_ARTICLE,
            self::MANAGE_NEWS => 'news',

            self::VIEW_MEDIA,
            self::UPLOAD_MEDIA,
            self::DELETE_MEDIA => 'media',

            self::VIEW_CONTENT,
            self::MANAGE_CONTENT,
            self::USE_VISUAL_EDITOR => 'content',
        };
    }

    /**
     * Get all permissions grouped by module
     */
    public static function groupedByModule(): array
    {
        $grouped = [];

        foreach (self::cases() as $permission) {
            $module = $permission->module();
            $grouped[$module][] = $permission;
        }

        return $grouped;
    }
}
