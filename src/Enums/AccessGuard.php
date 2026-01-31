<?php

namespace Creopse\Creopse\Enums;

enum AccessGuard: string
{
    case API = 'api';
    case WEB = 'web';
    case ADMIN = 'admin';
    case MOBILE = 'mobile';
}
