<?php

namespace Database\Seeders\Vendor\Creopse;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AppInformationSeeder::class,
            AdIdentifiersSeeder::class,
            AppSettingSeeder::class,
            PermalinksSeeder::class,
            LaratrustSeeder::class,
            ContentSeeder::class,
            UserSeeder::class,

            // NewsTagSeeder::class,
            // NewsCategorySeeder::class,
            // NewsArticleSeeder::class,
            // NewsCommentSeeder::class,
        ]);
    }
}
