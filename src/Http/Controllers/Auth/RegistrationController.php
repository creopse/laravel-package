<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Actions\Auth\ProvisionSocialUserAction;
use Creopse\Creopse\Enums\AuthType;
use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Enums\ProfileType;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Enums\TokenAbility;
use Creopse\Creopse\Enums\UserRole;
use Creopse\Creopse\Events\Auth\ProfileCreatedEvent;
use Creopse\Creopse\Events\Auth\ProfileUpdatedEvent;
use Creopse\Creopse\Events\Auth\UserRegisteredEvent;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Helpers\UsernameGenerator;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Auth\RegisterRequest;
use Creopse\Creopse\Http\Resources\UserResource;
use Creopse\Creopse\Models\AdminProfile;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Traits\AuthorizesOwnUserData;
use Creopse\Creopse\Traits\DetectsMobileRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class RegistrationController extends Controller
{
    use AuthorizesOwnUserData, DetectsMobileRequest;

    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     */
    public function registerUser(RegisterRequest $request): JsonResponse
    {
        $validated = $request->validated();

        if ($request->has('guard')) {
            Auth::shouldUse($request->input('guard'));
        }

        $validated['username'] = $validated['username'] ?? UsernameGenerator::generate($validated['firstname'], $validated['lastname']);
        $validated['password'] = Hash::make($validated['password']);
        // account_status is never taken from client input - a self-registering
        // caller must not be able to skip the pending-approval workflow (see
        // AccountActivatedEvent) by simply sending account_status=1.
        $validated['account_status'] = ProvisionSocialUserAction::defaultAccountStatus();
        $validated['auth_type'] = AuthType::EMAIL_PASSWORD->value;
        $validated['uid'] = Functions::generateUid();

        $user = DB::transaction(function () use ($validated, $request) {
            $user = User::create($validated);

            if ($user) {
                if (User::count() === 1) {
                    $user->assignRole(UserRole::SUPER_ADMIN->value);
                } elseif ($request->input('is_user')) {
                    $user->assignRole(UserRole::USER->value);
                }
            }

            return $user;
        });

        if ($user) {
            event(new UserRegisteredEvent($user->id));

            Auth::login($user);

            if ($this->isMobileRequest($request)) {
                $deviceName = $request->input('device_name', 'mobile-device');
                $deviceId = $request->input('device_id');

                $tokenName = $deviceId
                    ? "{$deviceName} ({$deviceId})"
                    : $deviceName;

                $token = $user->createToken($tokenName, [TokenAbility::MOBILE])->plainTextToken;

                return $this->sendResponse(
                    [
                        'token' => $token,
                        'user' => new UserResource($user->load(['profile', 'roles', 'permissions'])),
                    ],
                    ResponseStatusCode::OK,
                    'User registered'
                );
            }

            $request->session()->regenerate();

            return $this->sendResponse(
                [
                    'user' => new UserResource($user->load(['profile', 'roles', 'permissions'])),
                ],
                ResponseStatusCode::CREATED,
                'User registered'
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
     * Handle an incoming profile creation request.
     *
     * @throws ValidationException
     */
    public function registerProfile(Request $request): JsonResponse
    {
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'type' => 'required',
            'profile_data' => 'present|array',
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

        // A caller can always provision their own profile (the post-registration
        // self-service flow); provisioning one for someone else requires the
        // same permission UserController::store already requires for that.
        if ($unauthorized = $this->rejectUnlessOwnedOrPermitted((int) $request->input('id'), PermissionList::CREATE_USER)) {
            return $unauthorized;
        }

        $user = User::find($request->input('id'));

        // Check if user already has profile
        if ($user->profile) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::CONFLICT,
                'User already has profile',
                ResponseErrorCode::AUTH_PROFILE_ALREADY_EXISTS
            );
        }

        if ($user) {
            switch ($request->input('type')) {
                case ProfileType::ADMIN->value:
                    // admin_profiles has no columns beyond id/timestamps - it's
                    // a pure marker record, so profile_data has nothing to
                    // validate against or persist here.
                    $adminProfile = AdminProfile::create([]);

                    if ($adminProfile) {
                        $user->profile_id = $adminProfile->id;
                        $user->profile_type = ProfileType::ADMIN->value;
                        $user->save();
                    }
                    break;

                default:
                    // In case user type not found
                    return $this->sendResponse(
                        $request->input('type'),
                        ResponseStatusCode::NOT_FOUND,
                        'Profile type not found',
                        ResponseErrorCode::AUTH_PROFILE_TYPE_NOT_FOUND,
                    );
            }

            $user->refresh();

            if ($user->profile) {
                event(new ProfileCreatedEvent($user->id));

                return $this->sendResponse(
                    new UserResource($user->load(['profile', 'roles', 'permissions'])),
                    ResponseStatusCode::OK,
                    'User profile created with success'
                );
            }

            // If profile not found
            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'Profile not found',
                ResponseErrorCode::AUTH_PROFILE_NOT_FOUND,
            );
        } else {
            // If user not found
            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'User not found',
                ResponseErrorCode::AUTH_USER_NOT_FOUND,
            );
        }
    }

    /**
     * Handle an incoming profile update request.
     *
     * @throws ValidationException
     */
    public function updateProfile(Request $request, int $id): JsonResponse
    {
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'type' => 'required',
            'profile_data' => 'present|array',
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

        $profile = null;
        $ownerId = null;

        switch ($request->input('type')) {
            case ProfileType::ADMIN->value:

                $profile = AdminProfile::find($id);

                if ($profile) {
                    $ownerId = User::where('profile_type', ProfileType::ADMIN->value)
                        ->where('profile_id', $profile->id)
                        ->value('id');
                }
                break;

            default:
                // In case user type not found
                return $this->sendResponse(
                    $request->input('type'),
                    ResponseStatusCode::NOT_FOUND,
                    'Profile type not found',
                    ResponseErrorCode::AUTH_PROFILE_TYPE_NOT_FOUND,
                );
        }

        // Same owner-or-permission rule as registerProfile(), checked against
        // whichever user this profile actually belongs to (not the profile's
        // own id, which has no relation to a user id).
        if ($unauthorized = $this->rejectUnlessOwnedOrPermitted($ownerId, PermissionList::EDIT_USER)) {
            return $unauthorized;
        }

        if ($profile) {
            $profile->update($request->input('profile_data'));

            event(new ProfileUpdatedEvent($profile, $request->input('type')));

            return $this->sendResponse(
                $profile,
                ResponseStatusCode::OK,
                'User profile updated with success'
            );
        }

        // If profile not found
        return $this->sendResponse(
            null,
            ResponseStatusCode::NOT_FOUND,
            'Profile not found',
            ResponseErrorCode::AUTH_PROFILE_NOT_FOUND,
        );
    }
}
