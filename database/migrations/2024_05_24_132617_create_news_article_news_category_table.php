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
        Schema::create('news_article_news_category', function (Blueprint $table) {
            $table->unsignedBigInteger('news_category_id');
            $table->unsignedBigInteger('news_article_id');
            $table->foreign('news_category_id')->references('id')->on('news_categories')->onDelete('cascade');
            $table->foreign('news_article_id')->references('id')->on('news_articles')->onDelete('cascade');
            $table->primary(['news_category_id', 'news_article_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news_article_news_category');
    }
};
