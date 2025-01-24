<?php

use Creopse\Creopse\Enums\MenuItemTargetType;
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
        Schema::create('menu_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('menu_id');
            $table->unsignedBigInteger('page_id')->nullable();
            $table->unsignedBigInteger('section_id')->nullable();
            $table->unsignedBigInteger('menu_item_group_id')->nullable();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('path')->nullable();
            $table->string('url')->nullable();
            $table->string('controller')->nullable();
            $table->integer('parent_id')->nullable();
            $table->integer('position')->default(0);
            $table->boolean('is_active')->default(true);
            $table->boolean('is_visible')->default(true);
            $table->string('color')->nullable();
            $table->string('target_type')->default(MenuItemTargetType::PAGE_LINK->value);
            $table->timestamps();
        });

        Schema::table('menu_items', function (Blueprint $table) {
            $table->foreign('menu_id')->references('id')->on('menus')->onDelete('cascade');
            $table->foreign('page_id')->references('id')->on('pages')->onDelete('set null');
            $table->foreign('section_id')->references('id')->on('sections')->onDelete('set null');
            $table->foreign('menu_item_group_id')->references('id')->on('menu_item_groups')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_items');
    }
};
