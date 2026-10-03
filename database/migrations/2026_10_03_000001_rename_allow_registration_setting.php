<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * allowRegistration only covers sign-up from the admin panel since
     * allowSiteRegistration was added for sites: renamed to
     * allowAdminRegistration so the pair reads unambiguously. The current
     * value is kept.
     */
    public function up(): void
    {
        $this->rename('allowRegistration', 'allowAdminRegistration');
    }

    public function down(): void
    {
        $this->rename('allowAdminRegistration', 'allowRegistration');
    }

    private function rename(string $from, string $to): void
    {
        if (DB::table('app_settings')->where('key', $to)->exists()) {
            DB::table('app_settings')->where('key', $from)->delete();

            return;
        }

        DB::table('app_settings')->where('key', $from)->update(['key' => $to, 'updated_at' => now()]);
    }
};
