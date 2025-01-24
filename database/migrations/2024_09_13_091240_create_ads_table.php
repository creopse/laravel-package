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
        Schema::create('ads', function (Blueprint $table) {
            $table->id();
            $table->string('pid')->nullable();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('content');
            $table->boolean('display')->default(true);
            $table->json('data')->nullable();
            $table->timestamp('broadcast_start')->nullable();
            $table->timestamp('broadcast_end')->nullable();
            $table->timestamps();
        });

        Schema::table('ads', function (Blueprint $table) {
            $table->foreign('pid')->references('id')->on('ad_identifiers')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ads');
    }
};
