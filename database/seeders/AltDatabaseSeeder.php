<?php

namespace Creopse\Creopse\Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AltDatabaseSeeder extends Seeder
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
            ContentSeeder::class,
        ]);
    }
}
