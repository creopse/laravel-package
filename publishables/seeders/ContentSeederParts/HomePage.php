<?php

namespace Database\Seeders\Vendor\Creopse\ContentSeederParts;

use Creopse\Creopse\Models\Page;

$homePage = Page::firstOrCreate(
    ['name' => 'Home'],
    [
        'title' => '{ "en": "Home", "fr": "Accueil" }',
        'sections_data' => [
            "content" => [
                "index" => [
                    "title" => "{\"fr\":\"Bienvenue sur Creopse\", \"en\":\"Welcome to Creopse\"}",
                    "text" => "{\"fr\":\"Construisez votre site web sur mesure et gérez aisément vos contenus\", \"en\":\"Build your website on demand and manage easily your contents\"}"
                ],
                "headlinks" => [
                    [
                        "title" => "{\"fr\":\"Documentation\", \"en\":\"Documentation\"}",
                        "url" => "https://creopse.github.io/docs/"
                    ],
                    [
                        "title" => "{\"fr\":\"Github\", \"en\":\"Github\"}",
                        "url" => "https://github.com/creopse"
                    ]
                ],
                "features" => [
                    [
                        "icon" => '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37a1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56a1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.09 1.09 0 0 1-.39-.08zM17.75 13l2-9H11.8L9.26 15h5.91l-1.59 10.28L23 13z" fill="currentColor"></path></svg>',
                        "title" => "{\"fr\":\"Démarrer rapidement\", \"en\":\"Quick Start\"}",
                        "text" => "{\"fr\":\"Créez une nouvelle section et commencez à construire les fonctionnalités de votre site web\", \"en\":\"Create a new section and start building your website features.\"}"
                    ],
                    [
                        "icon" => '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M28.83 23.17L23 17.33V13a1 1 0 0 0-.29-.71l-10-10a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42l10 10A1 1 0 0 0 13 23h4.34l5.83 5.84a4 4 0 0 0 5.66-5.66zM6 10.41l2.29 2.3l1.42-1.42L7.41 9L9 7.41l4.29 4.3l1.42-1.42L10.41 6L12 4.41L18.59 11L11 18.59L4.41 12zm21.41 17a2 2 0 0 1-2.82 0l-6.13-6.12a1.8 1.8 0 0 0-.71-.29h-4.34l-1-1L20 12.41l1 1v4.34a1 1 0 0 0 .29.7l6.12 6.14a2 2 0 0 1 0 2.82z" fill="currentColor"></path></svg>',
                        "title" => "{\"fr\":\"Personnalisation complète\", \"en\":\"Complete customization\"}",
                        "text" => "{\"fr\":\"Adaptez chaque aspect de votre site web à vos besoins\", \"en\":\"Customize every aspect of your website to fit your needs\"}"
                    ],
                    [
                        "icon" => '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M28 12h-8V4h8zm-6-2h4V6h-4z" fill="currentColor"></path><path d="M17 15V9H9v14h14v-8zm-6-4h4v4h-4zm4 10h-4v-4h4zm6 0h-4v-4h4z" fill="currentColor"></path><path d="M26 28H6a2.002 2.002 0 0 1-2-2V6a2.002 2.002 0 0 1 2-2h10v2H6v20h20V16h2v10a2.002 2.002 0 0 1-2 2z" fill="currentColor"></path></svg>',
                        "title" => "{\"fr\":\"Gestion simplifiée des contenus\", \"en\":\"Simplified content management\"}",
                        "text" => "{\"fr\":\"Ajoutez, modifiez et organisez vos contenus en toute simplicité\", \"en\":\"Add, edit, and organize your content with ease\"}"
                    ],
                ],
            ],
        ],
    ]
);

if (!$homePage->sections()->where('section_id', $contentSection->id)->exists()) {
    $homePage->sections()->attach(
        [
            $contentSection->id,
        ],
        [
            'data_source_page_id' => $homePage->id,
        ]
    );
}
