<?php

namespace Creopse\Creopse\Enums\ContentModel;

enum ItemCreatorType: string
{
    case USER = 'user';
    case ADMIN = 'admin';
    case SYSTEM = 'system';
}
