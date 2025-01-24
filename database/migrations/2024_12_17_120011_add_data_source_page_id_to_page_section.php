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
        Schema::table('page_section', function (Blueprint $table) {
            $table->unsignedBigInteger('data_source_page_id')->nullable()->after('section_id');
            $table->foreign('data_source_page_id')->references('id')->on('pages')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('page_section', function (Blueprint $table) {
            $table->dropForeign(['data_source_page_id']);
            $table->dropColumn('data_source_page_id');
            $table->dropTimestamps();
        });
    }
};
