<?php

namespace Database\Seeders\Vendor\Creopse;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create all Sections
        require __DIR__ . '/ContentSeederParts/Sections.php';

        // Create all Pages and attach Section
        require __DIR__ . '/ContentSeederParts/HomePage.php';

        // Create all Menus
        require __DIR__ . '/ContentSeederParts/Menus.php';
    }
}
