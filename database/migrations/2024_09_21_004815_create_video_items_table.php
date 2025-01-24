<?php

use Creopse\Creopse\Enums\VideoItemSource;
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
        Schema::create('video_items', function (Blueprint $table) {
            $table->id();
            $table->string('foreign_id')->unique()->nullable();
            $table->unsignedBigInteger('publisher_id')->nullable();
            $table->text('title');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('path');
            $table->string('source')->default(VideoItemSource::SELF_HOSTED->value);
            $table->boolean('visible')->default(true);
            $table->timestamp('published_at')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::table('video_items', function (Blueprint $table) {
            $table->foreign('publisher_id')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('video_items');
    }
};
