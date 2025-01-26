<?php

namespace Database\Seeders\Vendor\Creopse;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Hash;

class LaratrustSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->truncateLaratrustTables();

        $config = Config::get('laratrust_seeder.roles_structure');

        if ($config === null) {
            if ($this->command) {
                $this->command->error("The configuration has not been published. Did you run `php artisan vendor:publish --tag=\"laratrust-seeder\"`");
                $this->command->line('');
            }
            return false;
        }

        $mapPermission = collect(config('laratrust_seeder.permissions_map'));

        foreach ($config as $key => $modules) {

            // Create a new role
            $role = \Creopse\Creopse\Models\Role::firstOrCreate([
                'name' => $key,
                'display_name' => ucwords(str_replace(['_', '-'], ' ', $key)),
                'description' => ucwords(str_replace(['_', '-'], ' ', $key))
            ]);
            $permissions = [];

            if ($this->command) {
                $this->command->info('Creating Role ' . strtoupper($key));
            }

            // Reading role permission modules
            foreach ($modules as $module => $value) {

                foreach (explode(',', $value) as $perm) {

                    $permissionValue = $mapPermission->get($perm);

                    $permissions[] = \Creopse\Creopse\Models\Permission::firstOrCreate([
                        'name' => $module . '-' . $permissionValue,
                        'display_name' => ucwords(
                            str_replace(['_', '-'], ' ', $permissionValue)
                        ) . ' ' . ucfirst($module),
                        'description' => ucwords(
                            str_replace(['_', '-'], ' ', $permissionValue)
                        ) . ' ' . ucfirst($module),
                    ])->id;

                    if ($this->command) {
                        $this->command->info('Creating Permission to ' . $permissionValue . ' for ' . $module);
                    }
                }
            }

            // Add all permissions to the role
            $role->permissions()->sync($permissions);

            if (Config::get('laratrust_seeder.create_users')) {
                if ($this->command) {
                    $this->command->info("Creating '{$key}' user");
                }
                // Create default user for each role
                $user = \Creopse\Creopse\Models\User::create([
                    'name' => ucwords(str_replace('_', ' ', $key)),
                    'email' => $key . '@app.com',
                    'password' => Hash::make('password')
                ]);
                $user->addRole($role);

                $configUserModel = app(config('creopse.user_model'));
                $configUser = $configUserModel::whereId($user->id)->first();
                $configUser->addRole($role);
            }
        }
    }

    /**
     * Truncates all the laratrust tables and the users table
     *
     * @return  void
     */
    public function truncateLaratrustTables()
    {
        if ($this->command) {
            $this->command->info('Truncating User, Role and Permission tables');
        }
        Schema::disableForeignKeyConstraints();

        DB::table('permission_role')->truncate();
        DB::table('permission_user')->truncate();
        DB::table('role_user')->truncate();

        if (Config::get('laratrust_seeder.truncate_tables')) {
            DB::table('roles')->truncate();
            DB::table('permissions')->truncate();

            if (Config::get('laratrust_seeder.create_users')) {
                $usersTable = (new \Creopse\Creopse\Models\User)->getTable();
                DB::table($usersTable)->truncate();
            }
        }

        Schema::enableForeignKeyConstraints();
    }
}
