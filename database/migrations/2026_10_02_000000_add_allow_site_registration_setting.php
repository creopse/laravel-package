<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Sign-up from sites built on a template now has its own setting,
     * separate from the admin panel's allowRegistration. Closed by default,
     * like allowRegistration: an existing install that relies on visitors
     * signing up has to turn it on in App Settings.
     */
    public function up(): void
    {
        DB::table('app_settings')->insertOrIgnore([
            'key' => 'allowSiteRegistration',
            'value' => '0',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    public function down(): void
    {
        DB::table('app_settings')->where('key', 'allowSiteRegistration')->delete();
    }
};
