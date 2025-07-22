<?php

namespace Creopse\Creopse\Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AppSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('app_settings')->insertOrIgnore([
            [
                'key'    => 'disableInstaller',
                'value' => '1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'allowRegistration',
                'value' => '0',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'adminProfileTypeLabel',
                'value' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'displayAdminProfileType',
                'value' => '0',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'translation.googleTranslate.apiKey',
                'value' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'translation.deeplTranslate.apiKey',
                'value' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'basePath',
                'value' => 'creopse',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
