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
            $table->dropForeign(['page_id']);
            $table->dropForeign(['section_id']);

            $table->dropPrimary(['page_id', 'section_id']);

            $table->primary(['page_id', 'section_id', 'link_id']);

            $table->foreign('page_id')->references('id')->on('pages')->onDelete('cascade');
            $table->foreign('section_id')->references('id')->on('sections')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('page_section', function (Blueprint $table) {
            $table->dropForeign(['page_id']);
            $table->dropForeign(['section_id']);

            $table->dropPrimary(['page_id', 'section_id', 'link_id']);

            $table->primary(['page_id', 'section_id']);

            $table->foreign('page_id')->references('id')->on('pages')->onDelete('cascade');
            $table->foreign('section_id')->references('id')->on('sections')->onDelete('cascade');
        });
    }
};
