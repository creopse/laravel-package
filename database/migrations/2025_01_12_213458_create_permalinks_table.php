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
        Schema::create('permalinks', function (Blueprint $table) {
            $table->id();
            $table->string('path_prefix')->unique();
            $table->string('content_type')->nullable();
            $table->string('content_param')->nullable();
            $table->unsignedBigInteger('content_id')->nullable();
            $table->unsignedBigInteger('page_id')->nullable();
            $table->timestamps();
        });

        Schema::table('permalinks', function (Blueprint $table) {
            $table->foreign('page_id')->references('id')->on('pages')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permalinks');
    }
};
