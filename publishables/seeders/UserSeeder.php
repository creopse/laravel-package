<?php

namespace Database\Seeders\Vendor\Creopse;

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
        if (!User::where('email', 'admin@gmail.com')->orWhere('username', 'admin')->exists()) {
            $adminProfile = AdminProfile::factory()->create();
            $user = User::factory()->withEmail('admin@gmail.com')->withUsername('admin')->withLocale('fr')->unverified()->create();
            $user->addRole(UserRole::SUPER_ADMIN->value);

            $configUserModel = app(config('creopse.user_model'));
            $configUser = $configUserModel::whereId($user->id)->first();
            $configUser->addRole(UserRole::SUPER_ADMIN->value);

            $user->profile_id = $adminProfile->id;
            $user->profile_type = ProfileType::ADMIN->value;
            $user->save();
        }
    }
}
