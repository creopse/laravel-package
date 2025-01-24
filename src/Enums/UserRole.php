<?php

namespace Creopse\Creopse\Enums;

// Static user roles
enum UserRole: string
{
    case SUPER_ADMIN = 'super-admin';
    case ADMIN = 'admin';
    case USER = 'user';
}
