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
        Schema::table('content_model_items', function (Blueprint $table) {
            $table->integer('position')->default(0)->after('content_model_data');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('content_model_items', function (Blueprint $table) {
            $table->dropColumn('position');
        });
    }
};
