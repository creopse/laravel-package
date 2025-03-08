<?php

namespace Creopse\Creopse\Database\Seeders\ContentSeederParts;

use Creopse\Creopse\Models\Menu;

// Create all Menus and Menus Items

$mainMenuSection = Menu::firstOrCreate(
    ['name' => 'main-menu'], // Unique key to check
    [
        'title' => '{ "en": "Main Menu", "fr": "Menu principal" }',
        'description' => '{ "en": "Main Menu", "fr": "Menu principal" }',
    ]
);

$mainMenuSection->items()->firstOrCreate(
    [
        'menu_id' => $mainMenuSection->id,
        'page_id' => $homePage->id,
        'path' => '/',
    ],
    [
        'title' => '{ "en": "Home", "fr": "Accueil" }',
        'description' => null,
    ]
);

$mainMenuSection->items()->firstOrCreate(
    [
        'menu_id' => $mainMenuSection->id,
        'page_id' => $homePage->id,
        'path' => '/home',
    ],
    [
        'title' => '{ "en": "Home - Alias", "fr": "Accueil - Alias" }',
        'description' => null,
    ]
);
