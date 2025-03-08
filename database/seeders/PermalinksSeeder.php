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
        $permalinks = [
            [
                'path_prefix' => '/news/article',
                'content_type' => PermalinkContentType::NEWS_ARTICLE->value,
                'content_param' => 'slug',
            ],
            [
                'path_prefix' => '/news/category',
                'content_type' => PermalinkContentType::NEWS_CATEGORY->value,
                'content_param' => 'slug',
            ],
            [
                'path_prefix' => '/news/tag',
                'content_type' => PermalinkContentType::NEWS_TAG->value,
                'content_param' => 'slug',
            ],
        ];

        foreach ($permalinks as $permalink) {
            Permalink::firstOrCreate(
                ['path_prefix' => $permalink['path_prefix']], // Unique key to check
                $permalink // Data to insert if creating
            );
        }
    }
}
