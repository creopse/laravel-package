<?php

use Creopse\Creopse\Enums\ContentModel\ItemCreatorType;
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
        Schema::table('content_model_items', function (Blueprint $table) {
            $table->string('created_by_type')->default(ItemCreatorType::ADMIN->value)->after('is_active');
            $table->unsignedBigInteger('created_by')->nullable()->after('created_by_type');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('content_model_items', function (Blueprint $table) {
            $table->dropColumn('created_by_type');
            $table->dropColumn('created_by');
        });
    }
};
