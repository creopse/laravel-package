<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Phone verification codes were only stored for Wassa SMS, which is no
     * longer supported: Twilio Verify, and any provider added later through
     * PhoneVerifier, keeps its own codes.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['verification_code', 'verification_code_expires_at']);
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('verification_code')->nullable()->after('phone');
            $table->timestamp('verification_code_expires_at')->nullable()->after('verification_code');
        });
    }
};
