<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\AccountStatus;
use Creopse\Creopse\Enums\AuthType;
use Creopse\Creopse\Enums\ProfileType;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Events\Auth\AccountActivatedEvent;
use Creopse\Creopse\Events\Auth\UserRegisteredEvent;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Http\Resources\UserResource;
use Creopse\Creopse\Mail\CommonMail;
use Creopse\Creopse\Models\AdminProfile;
use Creopse\Creopse\Models\AppInformation;
use Creopse\Creopse\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $query = $request->query('query');

        if ($pageSize) {

            $users = User::query();

            if ($query) {
                $users = $users->where('firstname', 'like', '%' . $query . '%')
                    ->orWhere('lastname', 'like', '%' . $query . '%');
            }

            $users->with('profile', 'roles', 'permissions');

            $users = $users->paginate($pageSize);

            return $this->sendResponse([
                'users' => UserResource::collection($users),
                'meta' => [
                    'links' => [
                        'first' => $users->url(1),
                        'last' => $users->url($users->lastPage()),
                        'prev' => $users->previousPageUrl(),
                        'next' => $users->nextPageUrl(),
                    ],
                    'currentPage' => $users->currentPage(),
                    'perPage' => $users->perPage(),
                    'total' => $users->total(),
                    'lastPage' => $users->lastPage(),
                ],
            ]);
        }

        return $this->sendResponse(
            UserResource::collection(User::all()->load(['profile', 'roles', 'permissions']))
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'lastname' => 'required',
            'firstname' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'account_status' => 'sometimes',
            'preferences' => 'sometimes|array',
            'avatar' => 'sometimes',
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
        $accountStatus = ($request->input('account_status') ?? null) !== null
            ? $request->input('account_status')
            : (User::count() > 0 ? AccountStatus::DISABLED->value : AccountStatus::ENABLED->value);
        $authType = AuthType::EMAIL_PASSWORD->value;
        $uid = Functions::generateUid();
        $avatar = ($request->input('avatar') ?? null) !== null ? $request->input('avatar') : null;

        $user = User::create([
            'lastname' => $request->input('lastname'),
            'firstname' => $request->input('firstname'),
            'email' => $request->input('email'),
            'password' => $password,
            'account_status' => $accountStatus,
            'auth_type' => $authType,
            'uid' => $uid,
            'avatar' => $avatar,
            'preferences' => $request->input('preferences'),
        ]);

        if ($user) {

            if ($request->input('roles') && is_array($request->input('roles'))) {
                $user->syncRoles($request->input('roles'));
            }

            if ($request->input('send_credentials_email')) {
                $appNameItem = AppInformation::where('key', 'name')->first();
                $appName = $appNameItem ? $appNameItem->value : config('app.name');

                Mail::to($user)->queue(new CommonMail(
                    [
                        'title' => __('creopse::notifications.welcome_user.title', ['appName' => $appName]),
                        'message' => __('creopse::notifications.welcome_user.content_1') . ' ' . __('creopse::notifications.welcome_user.content_2', ['password' => $request->input('password')]),
                    ],
                ));
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
     * Import users.
     */
    public function import(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'users' => 'required|array',
            'users.*.lastname' => 'required',
            'users.*.firstname' => 'required',
            'users.*.email' => [
                'required',
                'email',
            ],
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

        $users = [];
        foreach ($request->input('users') as $userData) {
            $password = Hash::make(Functions::genPassword(12));
            $accountStatus = AccountStatus::ENABLED->value;
            $authType = AuthType::EMAIL_PASSWORD->value;
            $uid = Functions::generateUid();
            $avatar = null;

            $user = User::withTrashed()->where('email', $userData['email'])->first();

            if ($user) {
                if ($user->trashed()) {
                    $user->restore();
                } else {
                    continue;
                }
            } else {
                $user = User::create([
                    'lastname' => $userData['lastname'],
                    'firstname' => $userData['firstname'],
                    'email' => $userData['email'],
                    'password' => $password,
                    'account_status' => $accountStatus,
                    'auth_type' => $authType,
                    'uid' => $uid,
                    'avatar' => $avatar,
                    'preferences' => $request->input('preferences') ?? [],
                ]);
            }

            switch ($request->input('profile_type')) {
                case ProfileType::ADMIN->value:
                    $adminProfile = AdminProfile::create([]);

                    if ($adminProfile) {
                        $user->profile_id = $adminProfile->id;
                        $user->profile_type = ProfileType::ADMIN->value;
                        $user->save();
                    }
                    break;

                default:
                    // In case user type not found
            }

            $user->refresh();

            if ($request->input('send_credentials_email')) {
                $appNameItem = AppInformation::where('key', 'name')->first();
                $appName = $appNameItem ? $appNameItem->value : config('app.name');

                Mail::to($user)->queue(new CommonMail(
                    [
                        'title' => __('creopse::notifications.welcome_user.title', ['appName' => $appName]),
                        'message' => __('creopse::notifications.welcome_user.content_1') . ' ' . __('creopse::notifications.welcome_user.content_2', ['password' => $request->input('password')]),
                    ],
                ));
            }

            $users[] = $user->load(['profile', 'roles', 'permissions']);
        }

        return $this->sendResponse(
            UserResource::collection($users),
            ResponseStatusCode::CREATED,
            'Users created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return $this->sendResponse(
            new UserResource($user->load(['profile', 'roles', 'permissions']))
        );
    }

    /**
     * Display the list of specified resources.
     */
    public function showList(Request $request)
    {
        $users = User::whereIn('id', $request->input('ids') ?? [])->get();

        return $this->sendResponse(UserResource::collection($users->load(['profile', 'roles', 'permissions'])));
    }

    /**
     * Display the list of administrators.
     */
    public function showAdministrators()
    {
        return $this->sendResponse(UserResource::collection(User::with(['profile', 'roles', 'permissions'])->whereHasAdminProfile()->get()));
    }

    /**
     * Display the search result for a given query.
     *
     * @param Request $request The HTTP request object.
     * @param string $query The search query.
     * @return \Inertia\Response The rendered search products page.
     */
    public function searchUsers(Request $request, string $query = '')
    {
        $users = User::where('firstname', 'like', '%' . $query . '%')
            ->orWhere('lastname', 'like', '%' . $query . '%')
            ->get();

        return $this->sendResponse(UserResource::collection($users->load(['profile', 'roles', 'permissions'])));
    }

    /**
     * Update the specified resource in storage for the current user.
     */
    public function updateSelf(Request $request, User $user)
    {
        $authUser = Auth::user();

        if ($authUser->id === $user->id) {
            return $this->update($request, $user);
        } else {
            return $this->sendResponse(
                null,
                ResponseStatusCode::FORBIDDEN,
                'You cannot update another user\'s data',
            );
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $user->update($request->except(['roles', 'send_credentials_email', 'account_status', 'password']));

        if ($request->has('account_status')) {
            if ($user->account_status == AccountStatus::DISABLED->value && $request->input('account_status') == AccountStatus::ENABLED->value) {
                event(new AccountActivatedEvent($user->id));
            }

            $user->account_status = $request->input('account_status');
            $user->save();
        }

        if ($request->input('roles') && is_array($request->input('roles'))) {
            $user->syncRoles($request->input('roles'));
        }

        if ($request->input('send_credentials_email')) {
            $validator = Validator::make($request->all(), [
                'password' => 'required|min:8',
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

            $password = $request->input('password');

            $user->password = Hash::make($password);
            $user->save();

            Mail::to($user)->queue(new CommonMail(
                [
                    'title' => __('creopse::auth.password_reset'),
                    'message' => __('creopse::notifications.welcome_user.content_2', ['password' => $password]),
                ],
            ));
        }

        return $this->sendResponse(
            new UserResource($user->load(['profile', 'roles', 'permissions'])),
            ResponseStatusCode::OK,
            'User updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'User deleted successfully'
        );
    }

    /**
     * Display user permissions.
     */
    public function userPermissions(?User $user = null)
    {
        if ($user) {
            return $this->sendResponse($user->allPermissions());
        }

        return $this->sendResponse(Auth::user()->allPermissions());
    }

    /**
     * Display user place.
     */
    public function userPlace(?User $user = null)
    {
        if ($user) {
            return $this->sendResponse($user->place());
        }
        return $this->sendResponse(Auth::user()->place());
    }

    /**
     * Display user devices.
     */
    public function userDevices(?User $user = null)
    {
        if ($user) {
            return $this->sendResponse($user->devices());
        }
        return $this->sendResponse(Auth::user()->devices());
    }

    /**
     * Display user sessions.
     */
    public function userSessions(?User $user = null)
    {
        if ($user) {
            return $this->sendResponse($user->sessions());
        }

        return $this->sendResponse(Auth::user()->sessions());
    }

    /**
     * Display user roles.
     */
    public function userRoles(?User $user = null)
    {
        if ($user) {
            return $this->sendResponse($user->roles);
        }

        return $this->sendResponse(Auth::user()->roles);
    }

    /**
     * Display user by email.
     */
    public function userByEmail($email)
    {
        $user = User::whereEmail($email)->first();

        return $this->sendResponse(
            new UserResource($user->load(['profile', 'roles', 'permissions']))
        );
    }

    /**
     * Display user by phone.
     */
    public function userByPhone($phone)
    {
        $user = User::wherePhone($phone)->first();

        return $this->sendResponse(
            new UserResource($user->load(['profile', 'roles', 'permissions']))
        );
    }
}
