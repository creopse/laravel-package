<?php

namespace Creopse\Creopse\Database\Seeders\ContentSeederParts;

use Creopse\Creopse\Models\Section;

// Create all Sections

$contentSection = Section::firstOrCreate(
    ['name' => 'Content'],
    [
        'title' => '{ "en": "Content", "fr": "Contenu" }',
        'data_structure' => [
            "index" => [
                [
                    'key' => 'title',
                    'label' => '{ "en": "Title", "fr": "Titre" }',
                    'type' => "i18n-text",
                    'required' => true,
                    'options' => [],
                ],
                [
                    'key' => 'text',
                    'label' => '{ "en": "Text", "fr": "Texte" }',
                    'type' => "i18n-textarea",
                    'required' => false,
                    'options' => [],
                ],
            ],
            "headlinks" => [
                'title' => '{ "en": "Head Links", "fr": "Liens en tete" }',
                'items' => [
                    [
                        'key' => 'title',
                        'label' => '{ "en": "Title", "fr": "Titre" }',
                        'type' => "i18n-text",
                        'required' => true,
                        'options' => [],
                    ],
                    [
                        'key' => 'url',
                        'label' => '{ "en": "URL", "fr": "URL" }',
                        'type' => "url",
                        'required' => true,
                        'options' => [],
                    ],
                ],
            ],
            "features" => [
                'title' => '{ "en": "Features", "fr": "Caractéristiques" }',
                'items' => [
                    [
                        'key' => 'icon',
                        'label' => '{ "en": "Icon", "fr": "Icône" }',
                        'type' => "icon",
                        'required' => true,
                        'options' => [],
                    ],
                    [
                        'key' => 'title',
                        'label' => '{ "en": "Title", "fr": "Titre" }',
                        'type' => "i18n-text",
                        'required' => true,
                        'options' => [],
                    ],
                    [
                        'key' => 'text',
                        'label' => '{ "en": "Text", "fr": "Texte" }',
                        'type' => "i18n-editor",
                        'required' => true,
                        'options' => [],
                    ],
                ]
            ],
        ],
    ]
);
