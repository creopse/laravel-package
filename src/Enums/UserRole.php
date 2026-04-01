<?php

namespace Creopse\Creopse\Enums;

// Static user roles
enum UserRole: string
{
    case SUPER_ADMIN = 'super-admin';
    case ADMIN = 'admin';
    case USER = 'user';

    public function defaultPermissions(): array
    {
        return match ($this) {
            self::SUPER_ADMIN => PermissionList::cases(), // All
            self::ADMIN => [
                PermissionList::VIEW_DASHBOARD->value,
                PermissionList::VIEW_ACCOUNT->value,
                PermissionList::EDIT_ACCOUNT->value,
                PermissionList::VIEW_NOTIFICATIONS->value,
                PermissionList::MANAGE_NOTIFICATIONS->value,
                PermissionList::VIEW_ABOUT->value,
                PermissionList::MANAGE_APP_SETTINGS->value,
                PermissionList::VIEW_USERS->value,
                PermissionList::CREATE_USER->value,
                PermissionList::EDIT_USER->value,
                PermissionList::DELETE_USER->value,
                PermissionList::CREATE_ARTICLE->value,
                PermissionList::EDIT_ARTICLE->value,
                PermissionList::DELETE_ARTICLE->value,
                PermissionList::MANAGE_NEWS->value,
                PermissionList::VIEW_MEDIA->value,
                PermissionList::UPLOAD_MEDIA->value,
                PermissionList::DELETE_MEDIA->value,
                PermissionList::VIEW_CONTENT->value,
                PermissionList::MANAGE_CONTENT->value,
                PermissionList::USE_VISUAL_EDITOR->value,
            ],
            self::USER => [
                PermissionList::VIEW_DASHBOARD->value,
                PermissionList::VIEW_ABOUT->value,
                PermissionList::VIEW_ACCOUNT->value,
                PermissionList::EDIT_ACCOUNT->value,
                PermissionList::VIEW_NOTIFICATIONS->value,
            ],
        };
    }
}
