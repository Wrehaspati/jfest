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
        Schema::table('competitions', function (Blueprint $table) {
            $table->integer('registration_quota')->nullable()->default(null)->after('max_participants');
            $table->boolean(('use_institution_field'))->default(false)->after('use_nickname_field');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('competitions', function (Blueprint $table) {
            $table->dropColumn('registration_quota');
            $table->dropColumn('use_institution_field');
        });
    }
};
