<?php

namespace Creopse\Creopse\Enums;

enum NewsArticleStatus: int
{
    case DRAFT = 1;
    case PENDING = 2;
    case PUBLISHED = 3;
    case TRASH = 4;
}
