<?php

namespace Creopse\Creopse\Enums\ContentModel;

enum Intent: string
{
    case EDITORIAL_CONTENT = 'editorial-content';
    case USER_DATA = 'user-data';
    case SYSTEM_DATA = 'system-data';
}
