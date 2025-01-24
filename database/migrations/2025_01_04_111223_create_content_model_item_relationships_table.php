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
        Schema::create('content_model_item_relationships', function (Blueprint $table) {
            $table->unsignedBigInteger('item_id');
            $table->unsignedBigInteger('related_item_id');
            $table->unsignedBigInteger('item_model_id')->nullable();
            $table->unsignedBigInteger('related_item_model_id')->nullable();
            $table->primary(['item_id', 'related_item_id']);
        });

        Schema::table('content_model_item_relationships', function (Blueprint $table) {
            $table->foreign('item_id')->references('id')->on('content_model_items')->onDelete('cascade');
            $table->foreign('related_item_id')->references('id')->on('content_model_items')->onDelete('cascade');
            $table->foreign('item_model_id')->references('id')->on('content_models')->onDelete('set null');
            $table->foreign('related_item_model_id')->references('id')->on('content_models')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('content_model_item_relationships');
    }
};
