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
        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('menu_location_id')->nullable()->unique();
            $table->string('name')->unique();
            $table->string('title');
            $table->text('description')->nullable();
            $table->timestamps();
        });
        Schema::table('menus', function (Blueprint $table) {
            $table->foreign('menu_location_id')->references('id')->on('menu_locations')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
