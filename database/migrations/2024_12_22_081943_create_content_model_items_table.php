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
        Schema::create('content_model_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('content_model_id');
            $table->string('title')->nullable();
            $table->json('content_model_data')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::table('content_model_items', function (Blueprint $table) {
            $table->foreign('content_model_id')->references('id')->on('content_models')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('content_model_items');
    }
};
