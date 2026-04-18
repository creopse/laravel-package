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
        Schema::table('menu_items', function (Blueprint $table) {
            $table->string('image')->nullable()->after('icon');
            $table->unsignedBigInteger('menu_item_type_id')->nullable()->after('section_key');
            $table->foreign('menu_item_type_id')->references('id')->on('menu_item_types')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('menu_items', function (Blueprint $table) {
            $table->dropColumn('image');
            $table->dropColumn('menu_item_type_id');
        });
    }
};
