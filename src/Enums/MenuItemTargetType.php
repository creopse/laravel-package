<?php

namespace Creopse\Creopse\Enums;

enum MenuItemTargetType: string
{
    case EXTERNAL_LINK = 'external-link';
    case PAGE_LINK = 'page-link';
    case CONTENT_LINK = 'content-link';
}
