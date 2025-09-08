<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('page_section', function (Blueprint $table) {
            $table->string('link_id')->unique()->default('default')->after('data_source_page_id');
            $table->json('data')->nullable()->after('link_id');
            $table->json('settings')->nullable()->after('data');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('page_section', function (Blueprint $table) {
            $table->dropColumn('link_id');
            $table->dropColumn('data');
            $table->dropColumn('settings');
        });
    }
};
