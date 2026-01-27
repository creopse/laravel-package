<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Enums\AccountStatus;
use Creopse\Creopse\Enums\AuthType;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Enums\TokenAbility;
use Creopse\Creopse\Enums\UserRole;
use Creopse\Creopse\Events\Auth\UserLoggedInEvent;
use Creopse\Creopse\Events\Auth\UserRegisteredEvent;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Helpers\UsernameGenerator;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Resources\UserResource;
use Creopse\Creopse\Models\AppInformation;
use Creopse\Creopse\Models\User;
use Google\Client as GoogleClient;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Twilio\Rest\Client as TwilioClient;
use phpseclib3\Crypt\RSA;
use phpseclib3\Math\BigInteger;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Support\Facades\Log;

class ProviderController extends Controller
{
    private function loginUser(Request $request, User $user, bool $isRegistration): JsonResponse
    {
        Auth::login($user);

        event($isRegistration ? new UserRegisteredEvent($user->id) : new UserLoggedInEvent($user->id));

        if ($this->isMobileRequest($request)) {
            $deviceName = $request->input('device_name', 'mobile-device');
            $deviceId = $request->input('device_id');

            $tokenName = $deviceId
                ? "{$deviceName} ({$deviceId})"
                : $deviceName;

            if ($deviceId) {
                $user->tokens()
                    ->where('name', 'LIKE', "%({$deviceId})%")
                    ->delete();
            }

            $token = $user->createToken($tokenName, [TokenAbility::MOBILE])->plainTextToken;

            return $this->sendResponse(
                [
                    'token' => $token,
                    'user' => new UserResource($user->load(['profile', 'roles', 'permissions'])),
                ],
                $isRegistration ? ResponseStatusCode::CREATED : ResponseStatusCode::OK,
                $isRegistration ? 'User registered' : 'Logged in successfully'
            );
        }

        $request->session()->regenerate();

        return $this->sendResponse(
            [
                'user' => new UserResource($user->load(['profile', 'roles', 'permissions'])),
            ],
            $isRegistration ? ResponseStatusCode::CREATED : ResponseStatusCode::OK,
            $isRegistration ? 'User registered' : 'Logged in successfully'
        );
    }

    /**
     * Handle an incoming google auth request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authWithGoogle(Request $request): JsonResponse
    {
        $googleConfig = config('services.google');

        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'client_id' => 'sometimes',
            'credential' => 'required',
            'preferences' => 'sometimes|array'
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

        $google = new GoogleClient(['client_id' => $googleConfig['client_id']]);
        $google->addScope('email');

        $payload = $google->verifyIdToken($request->input('credential'));

        if ($payload) {
            $userFound = User::whereEmail($payload['email'])->first();

            if ($userFound) {
                if ($userFound->account_status == AccountStatus::DISABLED->value) {
                    // When the user is disabled
                    return $this->sendResponse(
                        null,
                        ResponseStatusCode::FORBIDDEN,
                        'User disabled',
                        ResponseErrorCode::AUTH_USER_DISABLED,
                    );
                }

                return $this->loginUser($request, $userFound, false);
            } else {
                $user = User::create([
                    'username' => UsernameGenerator::generate($payload['given_name'] ?? $payload['name'] ?? '', $payload['family_name'] ?? ''),
                    'firstname' => $payload['given_name'] ?? $payload['name'] ?? '',
                    'lastname' => $payload['family_name'] ?? '',
                    'avatar' => $payload['picture'],
                    'email' => $payload['email'],
                    'password' => Hash::make(Str::password(8, true, true, false)),
                    'uid' => Functions::generateUid(),
                    'account_status' => $request->input('account_status')
                        ? $request->input('account_status')
                        : (User::count() > 0 ? AccountStatus::DISABLED->value : AccountStatus::ENABLED->value),
                    'auth_type' => AuthType::GOOGLE->value,
                    'preferences' => $request->input('preferences')
                ]);

                if ($user) {
                    if ($payload['email_verified']) {
                        $user->markEmailAsVerified();
                        $user->save();

                        $user->refresh();
                    }

                    $configUserModel = app(config('creopse.user_model'));
                    $configUser = $configUserModel::whereId($user->id)->first();

                    if (User::count() === 1) {
                        $user->addRole(UserRole::SUPER_ADMIN->value);

                        $configUser->addRole(UserRole::SUPER_ADMIN->value);
                    } else {
                        $user->addRole(UserRole::USER->value);

                        //$configUser->addRole(UserRole::USER->value);
                    }

                    return $this->loginUser($request, $user, true);
                } else {
                    return $this->sendResponse(
                        null,
                        ResponseStatusCode::INTERNAL_SERVER_ERROR,
                        'Registration failed',
                        ResponseErrorCode::AUTH_REGISTRATION_FAILED
                    );
                }
            }
        } else {
            return $this->sendResponse(
                null,
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Invalid token',
                ResponseErrorCode::AUTH_INVALID_TOKEN
            );
        }
    }

    public function authWithApple(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'identity_token' => 'required|string',
            'preferences' => 'sometimes|array',
            'firstname' => 'sometimes|string|max:255',
            'lastname' => 'sometimes|string|max:255',
        ]);

        if ($validator->fails()) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Validation failed',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        $identityToken = $request->input('identity_token');

        try {
            // Token decoding and verification
            $jwtParts = explode('.', $identityToken);
            $header = json_decode(base64_decode($jwtParts[0]), true);
            $kid = $header['kid'] ?? null;

            // Apple Key Recovery
            $client = new \GuzzleHttp\Client();
            $response = $client->get('https://appleid.apple.com/auth/keys');
            $appleKeys = json_decode($response->getBody(), true);

            // Token verification solution
            $jwk = $this->findJWKByKid($appleKeys['keys'], $kid);
            $publicKey = new Key($jwk, 'RS256');

            // Decoding with the correct method signature
            $payload = JWT::decode($identityToken, $publicKey);

            // Conversion to array for easier processing
            $payload = json_decode(json_encode($payload), true);

            $this->validateAppleToken($payload);

            $email = $payload['email'] ?? null;
            $userId = $payload['sub'] ?? null;

            if (!$email || !$userId) {
                throw new \Exception('Missing email or user identifier in token');
            }

            return $this->handleAppleUser($email, $userId, $request);
        } catch (\Exception $e) {
            Log::error('Apple authentication failed: ' . $e->getMessage());
            return $this->sendResponse(
                null,
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Authentication failed',
                ResponseErrorCode::AUTH_LOGIN_FAILED
            );
        }
    }

    /**
     * Find the corresponding JWK in a set of Apple keys based on the kid
     */
    private function findJWKByKid(array $keys, string $kid): string
    {
        try {
            foreach ($keys as $key) {
                if ($key['kid'] === $kid) {
                    return $this->convertJwkToPem($key);
                }
            }
            return '';
        } catch (\Exception $e) {
            Log::error('findJWKByKid failed: ' . $e->getMessage());
            return '';
        }
    }

    //composer require phpseclib/phpseclib:~3.0
    private function convertJwkToPem(array $jwk): string
    {
        try {
            if (!isset($jwk['n']) || !isset($jwk['e'])) {
                throw new \Exception('Invalid JWK: Missing n or e parameters');
            }

            // Base64URL-safe decoding
            $modulus = JWT::urlsafeB64Decode($jwk['n']);
            $exponent = JWT::urlsafeB64Decode($jwk['e']);

            // Conversion to hexadecimal numbers
            $modulusHex = bin2hex($modulus);
            $exponentHex = bin2hex($exponent);

            // RSA key construction
            $rsa = RSA::load([
                'n' => new BigInteger($modulusHex, 16),
                'e' => new BigInteger($exponentHex, 16),
            ]);

            // Export to PEM
            return $rsa->toString('PKCS8');
        } catch (\Exception $e) {
            Log::error('convertJwkToPem failed: ' . $e->getMessage());
            return '';
        }
    }

    /**
     * Validates specific claims of the Apple token
     */
    private function validateAppleToken(array $payload): void
    {
        $expectedIssuer = 'https://appleid.apple.com';
        if (($payload['iss'] ?? null) !== $expectedIssuer) {
            throw new \Exception("Invalid token issuer. Expected: {$expectedIssuer}");
        }

        // $clientId = config('services.apple.client_id');
        // if (($payload['aud'] ?? null) !== $clientId) {
        //     throw new \Exception("Invalid audience. Expected: {$clientId}");
        // }

        if (isset($payload['exp']) && $payload['exp'] < time()) {
            throw new \Exception('Token has expired');
        }
    }

    /**
     * Manage user creation or login with Apple
     */
    private function handleAppleUser(string $email, string $appleUserId, Request $request): JsonResponse
    {
        $user = User::where('email', $email)
            ->first();

        if ($user) {
            if ($user->account_status == AccountStatus::DISABLED->value) {
                return $this->sendResponse(
                    null,
                    ResponseStatusCode::FORBIDDEN,
                    'Account disabled',
                    ResponseErrorCode::AUTH_USER_DISABLED
                );
            }

            return $this->loginUser($request, $user, false);
        }

        $username = explode('@', $email)[0];
        $firstname = null;
        $lastname = null;

        if (strpos($username, '.') !== false) {
            $parts = explode('.', $username);
            $firstname = $parts[0] ?? null;
            $lastname = $parts[1] ?? null;
        }

        $user = User::create([
            'username' => UsernameGenerator::generate(
                $request->input('firstname', $firstname ?? $username),
                $request->input('lastname', $lastname ?? $username)
            ),
            'firstname' => $request->input('firstname', $firstname ?? $username),
            'lastname' => $request->input('lastname', $lastname ?? $username),
            'email' => $email,
            'password' => Hash::make(Str::random(32)),
            'uid' => Functions::generateUid(),
            'account_status' => $request->input('account_status')
                ? $request->input('account_status')
                : (User::count() > 0 ? AccountStatus::DISABLED->value : AccountStatus::ENABLED->value),
            'auth_type' => AuthType::APPLE->value,
            'preferences' => $request->input('preferences', [])
        ]);

        if ($user) {

            $user->markEmailAsVerified();
            $user->save();
            $user->refresh();

            $configUserModel = app(config('creopse.user_model'));
            $configUser = $configUserModel::whereId($user->id)->first();

            if (User::count() === 1) {
                $user->addRole(UserRole::SUPER_ADMIN->value);

                $configUser->addRole(UserRole::SUPER_ADMIN->value);
            } else {
                $user->addRole(UserRole::USER->value);

                //$configUser->addRole(UserRole::USER->value);
            }

            return $this->loginUser($request, $user, true);
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
     * Handle an incoming phone auth request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authWithPhone(Request $request): JsonResponse
    {
        $twilioConfig = config('services.twilio');
        $wassaSmsConfig = config('services.wassa_sms');

        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'phone' => 'required',
            'preferences' => 'sometimes|array',
            'allow_registration' => 'sometimes|boolean',
            'provider' => 'sometimes|in:twilio,wassa_sms'
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

        $phone = str_replace(' ', '', $request->input('phone'));
        $verificationCode = mt_rand(100000, 999999);

        $userDoesntExist = User::wherePhone($phone)->doesntExist();

        if ($userDoesntExist && $request->input('allow_registration')) {

            $user = User::create([
                'username' => UsernameGenerator::generate($request->input('firstname'), $request->input('lastname')),
                'firstname' => $request->input('firstname'),
                'lastname' => $request->input('lastname'),
                'email' => null,
                'phone' => $phone,
                'password' => Hash::make(Str::password(8, true, true, false)),
                'uid' => Functions::generateUid(),
                'account_status' => $request->input('account_status')
                    ? $request->input('account_status')
                    : (User::count() > 0 ? AccountStatus::DISABLED->value : AccountStatus::ENABLED->value),
                'auth_type' => AuthType::PHONE->value,
                'preferences' => $request->input('preferences')
            ]);

            $configUserModel = app(config('creopse.user_model'));
            $configUser = $configUserModel::whereId($user->id)->first();

            if (User::count() === 1) {
                $user->addRole(UserRole::SUPER_ADMIN->value);

                $configUser->addRole(UserRole::SUPER_ADMIN->value);
            } else {
                $user->addRole(UserRole::USER->value);

                //$configUser->addRole(UserRole::USER->value);
            }

            event(new UserRegisteredEvent($user->id));
        }

        $user = User::wherePhone($phone)->first();

        if ($user) {

            $user->verification_code = $verificationCode;
            $user->save();

            try {
                $appNameItem = AppInformation::where('key', 'name')->first();
                $appName = $appNameItem ? $appNameItem->value : config('app.name');

                if ($request->input('provider') === 'wassa_sms') {

                    $client = new \GuzzleHttp\Client();
                    $response = $client->get(
                        $wassaSmsConfig['endpoint'],
                        [
                            'query' => [
                                'access-token' => $wassaSmsConfig['token'],
                                'sender'       => $appName,
                                'receiver'     => str_replace('+', '', $phone),
                                'text'         => __('creopse::auth.verification_code', ['code' => $verificationCode]),
                                'dlr_url'      => '',
                            ]
                        ]
                    );

                    $verification = $response->getBody()->getContents();

                    return $this->sendResponse(
                        $verification,
                        ResponseStatusCode::OK,
                        'Verification code sent with success by Wassa SMS!'
                    );
                } else {
                    $twilio = new TwilioClient($twilioConfig['sid'], $twilioConfig['token']);

                    $verification = $twilio->verify->v2->services($twilioConfig['service'])
                        ->verifications
                        ->create($phone, "sms");

                    return $this->sendResponse(
                        $verification,
                        ResponseStatusCode::OK,
                        'Verification code sent with success by Twilio!'
                    );
                }
            } catch (\Exception $e) {

                return $this->sendResponse(
                    $e,
                    ResponseStatusCode::INTERNAL_SERVER_ERROR,
                    "Code sending failed: $e",
                    ResponseErrorCode::AUTH_CODE_SENDING_FAILED
                );
            }
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::NOT_FOUND,
            'User not found',
            ResponseErrorCode::AUTH_USER_NOT_FOUND
        );
    }

    /**
     * Verify phone auth.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function verifyPhoneAuth(Request $request): JsonResponse
    {
        $twilioConfig = config('services.twilio');

        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'phone' => 'required',
            'code' => 'required',
            'provider' => 'sometimes|in:twilio,wassa_sms'
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

        $phone = str_replace(' ', '', $request->input('phone'));

        $user = User::wherePhone($phone)->first();

        if ($user) {
            try {
                if ($request->input('provider') === 'wassa_sms') {
                    if ($user->verification_code !== $request->input('code')) {
                        throw new \Exception('Invalid code!');
                    }
                } else {
                    $twilio = new TwilioClient($twilioConfig['sid'], $twilioConfig['token']);

                    $verification_check = $twilio->verify->v2->services($twilioConfig['service'])
                        ->verificationChecks
                        ->create(
                            [
                                "to" => $phone,
                                "code" => $request->input('code')
                            ]
                        );

                    if ($verification_check->status != 'approved') {
                        throw new \Exception('Check not approved!');
                    }
                }
            } catch (\Exception $e) {

                return $this->sendResponse(
                    $e,
                    ResponseStatusCode::INTERNAL_SERVER_ERROR,
                    "Code verification failed: $e",
                    ResponseErrorCode::AUTH_CODE_VERIFICATION_FAILED
                );
            }
        } else {

            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'User not found',
                ResponseErrorCode::AUTH_USER_NOT_FOUND
            );
        }

        if ($user->account_status != AccountStatus::DISABLED->value || $user->profile === null) {

            return $this->loginUser($request, $user, false);
        } else {

            return $this->sendResponse(
                null,
                ResponseStatusCode::FORBIDDEN,
                'User disabled',
                ResponseErrorCode::AUTH_USER_DISABLED
            );
        }
    }
}
