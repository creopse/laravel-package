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
        Schema::table('pages', function (Blueprint $table) {
            $table->dropColumn('sections_data');
        });
    }

    /**
     * Reverse the migrations.
     *
     * One-way: this recreates an empty `sections_data` column but does not
     * restore the data dropped in up(). Rolling back after this migration
     * has run on an install with existing data will not bring it back.
     */
    public function down(): void
    {
        Schema::table('pages', function (Blueprint $table) {
            $table->json('sections_data')->nullable();
        });
    }
};
