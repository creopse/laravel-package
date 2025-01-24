<?php

namespace Creopse\Creopse\Enums;

enum ProfileType: string
{
    case ADMIN = 'Creopse\\Creopse\\Models\\AdminProfile';
    case SUBSCRIBER = 'Creopse\\Creopse\\Models\\SubscriberProfile';
}
