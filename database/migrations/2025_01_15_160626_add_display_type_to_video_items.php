<?php

use Creopse\Creopse\Enums\VideoDisplayType;
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
        Schema::table('video_items', function (Blueprint $table) {
            $table->string('display_type')->default(VideoDisplayType::HORIZONTAL->value)->after('source');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('video_items', function (Blueprint $table) {
            $table->dropColumn('display_type');
        });
    }
};
