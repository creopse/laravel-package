<?php

use Creopse\Creopse\Enums\ContentModel\AccessScope;
use Creopse\Creopse\Enums\ContentModel\Intent;
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
        Schema::table('content_models', function (Blueprint $table) {
            $table->string('intent')->default(Intent::EDITORIAL_CONTENT->value)->after('title_field_name');
            $table->string('access_scope')->default(AccessScope::INTERNAL->value)->after('intent');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('content_models', function (Blueprint $table) {
            $table->dropColumn('intent');
            $table->dropColumn('access_scope');
        });
    }
};
