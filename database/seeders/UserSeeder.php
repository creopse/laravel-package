<?php

namespace Creopse\Creopse\Database\Seeders;

use Creopse\Creopse\Enums\ProfileType;
use Creopse\Creopse\Enums\UserRole;
use Creopse\Creopse\Models\AdminProfile;
use Creopse\Creopse\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminProfile = AdminProfile::factory()->create();
        $user = User::factory()->withEmail('admin@gmail.com')->withLocale('fr')->unverified()->create();
        $user->addRole(UserRole::SUPER_ADMIN->value);
        $user->profile_id = $adminProfile->id;
        $user->profile_type = ProfileType::ADMIN->value;
        $user->save();
    }
}