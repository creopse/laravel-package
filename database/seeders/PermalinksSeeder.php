<?php

namespace Creopse\Creopse\Database\Seeders;

use Creopse\Creopse\Enums\PermalinkContentType;
use Creopse\Creopse\Models\Permalink;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermalinksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permalink::create([
            'path_prefix' => '/news/article',
            'content_type' => PermalinkContentType::NEWS_ARTICLE->value,
            'content_param' => 'slug',
        ]);

        Permalink::create([
            'path_prefix' => '/news/category',
            'content_type' => PermalinkContentType::NEWS_CATEGORY->value,
            'content_param' => 'slug',
        ]);

        Permalink::create([
            'path_prefix' => '/news/tag',
            'content_type' => PermalinkContentType::NEWS_TAG->value,
            'content_param' => 'slug',
        ]);
    }
}
