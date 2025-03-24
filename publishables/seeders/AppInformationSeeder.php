<?php

namespace Database\Seeders\Vendor\Creopse;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AppInformationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('app_information')->insertOrIgnore([
            [
                'key'    => 'name',
                'value' => 'creopse.com',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'icon',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'adminIcon',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'oneColorIcon',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'oneColorAdminIcon',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'logo',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'adminLogo',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'oneColorLogo',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'oneColorAdminLogo',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'phone',
                'value' => '(+228) 99 99 99 99',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'email',
                'value' => 'contact@creopse.com',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'address',
                'value' => 'Lomé - Togo',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'postalCode',
                'value' => 'XXBPXX',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'description',
                'value' => '{ "fr": "", "en": ""}',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'primaryColor',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'secondaryColor',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'accentColor',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'facebook',
                'value' => 'https://www.facebook.com/creopse',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'twitter',
                'value' => 'https://twitter.com/creopse',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'instagram',
                'value' => 'https://instagram.com/creopse',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'whatsapp',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'linkedin',
                'value' => 'https://www.linkedin.com/in/creopse',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'youtube',
                'value' => 'https://youtube.com/creopse',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key'    => 'additionalInfo',
                'value' => '[]',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
