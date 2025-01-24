<?php

use Creopse\Creopse\Enums\MediaFileType;
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
        Schema::create('media_files', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('foreign_id')->unique()->nullable();
            $table->unsignedBigInteger('sender_id')->nullable();
            $table->string('foreign_url')->nullable();
            $table->string('name');
            $table->string('path');
            $table->integer('size');
            $table->integer('type')->default(MediaFileType::OTHER->value);
            $table->string('extension')->nullable();
            $table->string('mime_type')->nullable();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->json('additional_metadata')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::table('media_files', function (Blueprint $table) {
            $table->foreign('sender_id')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('media_files');
    }
};
