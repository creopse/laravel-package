<?php

use Creopse\Creopse\Enums\NewsArticleStatus;
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
        Schema::create('news_articles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('foreign_id')->unique()->nullable();
            $table->unsignedBigInteger('author_id')->nullable();
            $table->unsignedBigInteger('publisher_id')->nullable();
            $table->text('title');
            $table->string('slug');
            $table->text('summary')->nullable();
            $table->text('content')->nullable();
            $table->string('featured_image')->nullable();
            $table->string('foreign_featured_image')->nullable();
            $table->text('legend')->nullable();
            $table->boolean('allow_comments')->default(false);
            $table->boolean('is_headline')->default(false);
            $table->integer('status')->default(NewsArticleStatus::DRAFT->value);
            $table->timestamp('published_at')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::table('news_articles', function (Blueprint $table) {
            $table->foreign('author_id')->references('id')->on('users')->onDelete('set null');
            $table->foreign('publisher_id')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news_articles');
    }
};
