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
        Schema::create('news_comments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('foreign_id')->unique()->nullable();
            $table->unsignedBigInteger('author_id')->nullable();
            $table->unsignedBigInteger('article_id');
            $table->string('name')->nullable();
            $table->text('content');
            $table->string('email')->nullable();
            $table->boolean('is_active')->default(true);
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::table('news_comments', function (Blueprint $table) {
            $table->foreign('author_id')->references('id')->on('users')->onDelete('set null');
            $table->foreign('article_id')->references('id')->on('news_articles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news_comments');
    }
};
