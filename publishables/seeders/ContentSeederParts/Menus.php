<?php

namespace Database\Seeders\Vendor\Creopse\ContentSeederParts;

use Creopse\Creopse\Models\Menu;

// Create all Menus and Menus Items

$mainMenuSection = Menu::create([
    'name' => 'main-menu',
    'title' => '{ "en": "Main Menu", "fr": "Menu principal" }',
    'description' => '{ "en": "Main Menu", "fr": "Menu principal" }',
]);

$mainMenuSection->items()->create([
    'menu_id' => $mainMenuSection->id,
    'page_id' => $homePage->id,
    'title' => '{ "en": "Home", "fr": "Accueil" }',
    'description' => null,
    'path' => '/',
]);

$mainMenuSection->items()->create([
    'menu_id' => $mainMenuSection->id,
    'page_id' => $homePage->id,
    'title' => '{ "en": "Home - Alias", "fr": "Accueil - Alias" }',
    'description' => null,
    'path' => '/home',
]);
