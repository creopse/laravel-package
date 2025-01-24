<?php

use Creopse\Creopse\Enums\AdContentType;
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
        Schema::create('ad_identifiers', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('content_type')->default(AdContentType::IMAGE->value);
            $table->string('content_size')->nullable();
            $table->boolean('reusable')->default(false);
            $table->json('params')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ad_identifiers');
    }
};
