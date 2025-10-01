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
        Schema::create('video_category_video_item', function (Blueprint $table) {
            $table->unsignedBigInteger('video_category_id');
            $table->unsignedBigInteger('video_item_id');
            $table->foreign('video_category_id')->references('id')->on('video_categories')->onDelete('cascade');
            $table->foreign('video_item_id')->references('id')->on('video_items')->onDelete('cascade');
            $table->primary(['video_category_id', 'video_item_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('video_category_video_item');
    }
};
