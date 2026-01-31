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
                PermissionList::VIEW_ABOUT->value,
                PermissionList::VIEW_ACCOUNT->value,
                PermissionList::EDIT_ACCOUNT->value,
                PermissionList::VIEW_NOTIFICATIONS->value,
                PermissionList::MANAGE_APP_SETTINGS->value,
                PermissionList::VIEW_USERS->value,
                PermissionList::EDIT_USER->value,
                PermissionList::MANAGE_NEWS->value,
                PermissionList::VIEW_MEDIA->value,
                PermissionList::UPLOAD_MEDIA->value,
                PermissionList::EDIT_ARTICLE->value,
                PermissionList::CREATE_ARTICLE->value,
                PermissionList::EDIT_CATEGORY->value,
                PermissionList::CREATE_CATEGORY->value,
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
