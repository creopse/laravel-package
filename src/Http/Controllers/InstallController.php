<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\AccountStatus;
use Creopse\Creopse\Enums\AuthType;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Enums\UserRole;
use Creopse\Creopse\Events\Auth\UserRegisteredEvent;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Helpers\UsernameGenerator;
use Creopse\Creopse\Http\Resources\UserResource;
use Creopse\Creopse\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class InstallController extends Controller
{
    /**
     * Create admin user
     */
    public function createAdmin(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'username' => 'sometimes|unique:users',
            'lastname' => 'required',
            'firstname' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'preferences' => 'sometimes|array',
        ]);

        // If data not valid return error
        if ($validator->fails()) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Validation failed',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        $password = Hash::make($request->input('password'));
        $accountStatus = (User::count() > 0 ? AccountStatus::DISABLED->value : AccountStatus::ENABLED->value);
        $authType = AuthType::EMAIL_PASSWORD->value;
        $uid = Functions::generateUid();

        $user = User::create([
            'username' => $request->input('username') ?? UsernameGenerator::generate($request->input('firstname'), $request->input('lastname')),
            'lastname' => $request->input('lastname'),
            'firstname' => $request->input('firstname'),
            'email' => $request->input('email'),
            'password' => $password,
            'account_status' => $accountStatus,
            'auth_type' => $authType,
            'uid' => $uid,
            'avatar' => null,
            'preferences' => $request->input('preferences'),
        ]);

        if ($user) {
            if (User::count() === 1) {
                $user->assignRole(UserRole::SUPER_ADMIN->value);
            }

            event(new UserRegisteredEvent($user->id));

            return $this->sendResponse(
                new UserResource($user->load(['profile', 'roles', 'permissions'])),
                ResponseStatusCode::CREATED,
                'User created successfully'
            );
        } else {
            return $this->sendResponse(
                null,
                ResponseStatusCode::INTERNAL_SERVER_ERROR,
                'Registration failed',
                ResponseErrorCode::AUTH_REGISTRATION_FAILED
            );
        }
    }

    /**
     * Finalize installation process
     */
    public function finalize(Request $request): JsonResponse
    {
        try {
            $installLockPath = public_path(config('installer.lock_file_path'));

            // Check that all required steps are completed
            if (!File::exists(base_path('.env'))) {
                throw new \RuntimeException('.env file not configured');
            }

            if (!config('database.connections.mysql.database')) {
                throw new \RuntimeException('Database not configured');
            }

            // Test database connection
            DB::connection()->getPdo();

            // Check if migrations were run (optional but recommended)
            // You can check for a specific table or use Schema::hasTable()

            // Delete install.lock
            if (File::exists($installLockPath)) {
                File::delete($installLockPath);
            }

            // Create a completion marker (optional)
            $composer = json_decode(file_get_contents(base_path('composer.json')), true);
            File::put(storage_path('installed.lock'), json_encode([
                'installed_at' => now()->toIso8601String(),
                'version' => $composer['require']['creopse/creopse'],
            ]));

            return $this->sendResponse(
                [
                    'installation_required' => false,
                    'installed_at' => now()->toIso8601String(),
                ],
                ResponseStatusCode::OK,
                'Installation completed successfully'
            );
        } catch (\Exception $e) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::INTERNAL_SERVER_ERROR,
                'Installation finalization failed. Error: ' . $e->getMessage()
            );
        }
    }
}
