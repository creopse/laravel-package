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
        Schema::create('user_places', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('country')->nullable();
            $table->string('position')->nullable();
            $table->string('locality')->nullable();
            $table->string('administrative_area')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('name')->nullable();
            $table->string('sub_administrative_area')->nullable();
            $table->string('iso_country_code')->nullable();
            $table->string('sub_locality')->nullable();
            $table->string('sub_thoroughfare')->nullable();
            $table->string('thoroughfare')->nullable();
            $table->string('street')->nullable();
            $table->timestamps();
        });
        Schema::table('user_places', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_places');
    }
};
