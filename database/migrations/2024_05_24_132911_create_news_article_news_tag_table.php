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
        Schema::create('news_article_news_tag', function (Blueprint $table) {
            $table->unsignedBigInteger('news_tag_id');
            $table->unsignedBigInteger('news_article_id');
            $table->foreign('news_tag_id')->references('id')->on('news_tags')->onDelete('cascade');
            $table->foreign('news_article_id')->references('id')->on('news_articles')->onDelete('cascade');
            $table->primary(['news_tag_id', 'news_article_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news_article_news_tag');
    }
};
