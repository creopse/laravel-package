<?php

namespace Creopse\Creopse\Enums;

enum MediaFileType: int
{
    case DOCUMENT = 1;
    case IMAGE = 2;
    case VIDEO = 3;
    case AUDIO = 4;
    case OTHER = 5;
}
