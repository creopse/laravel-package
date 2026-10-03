<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Actions\Auth\ProvisionSocialUserAction;
use Creopse\Creopse\Enums\AccountStatus;
use Creopse\Creopse\Enums\AuthType;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Enums\TokenAbility;
use Creopse\Creopse\Events\Auth\UserLoggedInEvent;
use Creopse\Creopse\Events\Auth\UserRegisteredEvent;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Helpers\UsernameGenerator;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Resources\UserResource;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Services\PhoneVerification\PhoneVerifierResolver;
use Creopse\Creopse\Traits\DetectsMobileRequest;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Google\Client as GoogleClient;
use GuzzleHttp\Client;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use phpseclib3\Crypt\RSA;
use phpseclib3\Math\BigInteger;

class ProviderController extends Controller
{
    use DetectsMobileRequest;

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
     * Response for a sign-in method this install hasn't configured. Google,
     * Apple and phone sign-in used to stay reachable without their
     * credentials - Google then skipped the token audience check entirely.
     */
    private function methodDisabled(): JsonResponse
    {
        return $this->sendResponse(
            null,
            ResponseStatusCode::FORBIDDEN,
            'Authentication method disabled',
            ResponseErrorCode::AUTH_METHOD_DISABLED
        );
    }

    /**
     * Rate limiter key for code checks on a phone number.
     */
    private function phoneVerificationKey(string $phone): string
    {
        return 'phone-verification:'.sha1($phone);
    }

    /**
     * Cache key for the sign-up data of a phone number waiting for its
     * code to be checked.
     */
    private function phoneRegistrationKey(string $phone): string
    {
        return 'phone-registration:'.sha1($phone);
    }

    /**
     * Handle an incoming google auth request.
     *
     * @throws ValidationException
     */
    public function authWithGoogle(Request $request): JsonResponse
    {
        $googleConfig = config('services.google');

        if (blank($googleConfig['client_id'] ?? null)) {
            return $this->methodDisabled();
        }

        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'client_id' => 'sometimes',
            'credential' => 'required',
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

        if ($request->has('guard')) {
            Auth::shouldUse($request->input('guard'));
        }

        $google = new GoogleClient(['client_id' => $googleConfig['client_id']]);
        $google->addScope('email');

        $payload = $google->verifyIdToken($request->input('credential'));

        // Accounts are matched by email: an address Google hasn't verified
        // could belong to someone else's account here.
        if ($payload && ! in_array($payload['email_verified'] ?? false, [true, 'true'], true)) {
            $payload = false;
        }

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
                if (! ProvisionSocialUserAction::registrationIsOpen($request)) {
                    return $this->sendResponse(
                        null,
                        ResponseStatusCode::FORBIDDEN,
                        'Registration disabled',
                        ResponseErrorCode::AUTH_REGISTRATION_DISABLED
                    );
                }

                $user = User::create([
                    'username' => UsernameGenerator::generate($payload['given_name'] ?? $payload['name'] ?? '', $payload['family_name'] ?? ''),
                    'firstname' => $payload['given_name'] ?? $payload['name'] ?? '',
                    'lastname' => $payload['family_name'] ?? '',
                    'avatar' => $payload['picture'] ?? null,
                    'email' => $payload['email'],
                    'password' => Hash::make(Str::password(8, true, true, false)),
                    'uid' => Functions::generateUid(),
                    // account_status is never taken from client input - see
                    // RegistrationController::registerUser for why.
                    'account_status' => ProvisionSocialUserAction::defaultAccountStatus(),
                    'auth_type' => AuthType::GOOGLE->value,
                    'preferences' => $request->input('preferences'),
                ]);

                if ($user) {
                    $user->markEmailAsVerified();
                    $user->save();

                    $user->refresh();

                    ProvisionSocialUserAction::assignInitialRole($user);

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
        if (blank(config('services.apple.client_id'))) {
            return $this->methodDisabled();
        }

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

        if ($request->has('guard')) {
            Auth::shouldUse($request->input('guard'));
        }

        $identityToken = $request->input('identity_token');

        try {
            // Token decoding and verification
            $jwtParts = explode('.', $identityToken);
            $header = json_decode(base64_decode($jwtParts[0]), true);
            $kid = $header['kid'] ?? null;

            if (! is_string($kid)) {
                throw new \Exception('Missing key id in token header');
            }

            // Apple Key Recovery
            $client = new Client;
            $response = $client->get('https://appleid.apple.com/auth/keys', ['timeout' => 10]);
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

            if (! $email || ! $userId) {
                throw new \Exception('Missing email or user identifier in token');
            }

            return $this->handleAppleUser($email, $userId, $request);
        } catch (\Exception $e) {
            Log::error('Apple authentication failed: '.$e->getMessage());

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
            Log::error('findJWKByKid failed: '.$e->getMessage());

            return '';
        }
    }

    // composer require phpseclib/phpseclib:~3.0
    private function convertJwkToPem(array $jwk): string
    {
        try {
            if (! isset($jwk['n']) || ! isset($jwk['e'])) {
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
            Log::error('convertJwkToPem failed: '.$e->getMessage());

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

        $clientId = config('services.apple.client_id');
        if (($payload['aud'] ?? null) !== $clientId) {
            throw new \Exception("Invalid audience. Expected: {$clientId}");
        }

        if (isset($payload['exp']) && $payload['exp'] < time()) {
            throw new \Exception('Token has expired');
        }

        // Accounts are matched by email - see authWithGoogle().
        if (isset($payload['email_verified']) && ! in_array($payload['email_verified'], [true, 'true'], true)) {
            throw new \Exception('Email not verified');
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

        if (! ProvisionSocialUserAction::registrationIsOpen($request)) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::FORBIDDEN,
                'Registration disabled',
                ResponseErrorCode::AUTH_REGISTRATION_DISABLED
            );
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
            'account_status' => ProvisionSocialUserAction::defaultAccountStatus(),
            'auth_type' => AuthType::APPLE->value,
            'preferences' => $request->input('preferences', []),
        ]);

        if ($user) {

            $user->markEmailAsVerified();
            $user->save();
            $user->refresh();

            ProvisionSocialUserAction::assignInitialRole($user);

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
     * @throws ValidationException
     */
    public function authWithPhone(Request $request, PhoneVerifierResolver $resolver): JsonResponse
    {
        // Picked by the server, never by the client.
        $verifier = $resolver->resolve();

        if ($verifier === null) {
            return $this->methodDisabled();
        }

        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'phone' => 'required',
            'preferences' => 'sometimes|array',
            'allow_registration' => 'sometimes|boolean',
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

        if ($request->has('guard')) {
            Auth::shouldUse($request->input('guard'));
        }

        $phone = str_replace(' ', '', $request->input('phone'));

        // The account is only created once the code is checked, and the
        // answer is the same whether the number has an account or not:
        // creating it here let anyone take someone else's number, and a 404
        // told whether a number was registered.
        $userExists = User::wherePhone($phone)->exists();

        if (! $userExists) {
            if (! $request->input('allow_registration') || ! ProvisionSocialUserAction::registrationIsOpen($request)) {
                return $this->phoneCodeSent();
            }

            Cache::put($this->phoneRegistrationKey($phone), [
                'firstname' => $request->input('firstname'),
                'lastname' => $request->input('lastname'),
                'preferences' => $request->input('preferences'),
            ], now()->addMinutes(10));
        }

        // A new code gets a fresh set of attempts.
        RateLimiter::clear($this->phoneVerificationKey($phone));

        try {
            $verifier->send($phone);
        } catch (\Exception $e) {
            // Logged, never returned: provider errors can carry request
            // details and credentials.
            Log::error('Phone verification code sending failed: '.$e->getMessage());

            return $this->sendResponse(
                null,
                ResponseStatusCode::INTERNAL_SERVER_ERROR,
                'Code sending failed',
                ResponseErrorCode::AUTH_CODE_SENDING_FAILED
            );
        }

        return $this->phoneCodeSent();
    }

    private function phoneCodeSent(): JsonResponse
    {
        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Verification code sent'
        );
    }

    /**
     * Verify phone auth.
     *
     * @throws ValidationException
     */
    public function verifyPhoneAuth(Request $request, PhoneVerifierResolver $resolver): JsonResponse
    {
        $verifier = $resolver->resolve();

        if ($verifier === null) {
            return $this->methodDisabled();
        }

        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'phone' => 'required',
            'code' => 'required',
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

        if ($request->has('guard')) {
            Auth::shouldUse($request->input('guard'));
        }

        $phone = str_replace(' ', '', $request->input('phone'));

        $user = User::wherePhone($phone)->first();
        $registration = $user ? null : Cache::get($this->phoneRegistrationKey($phone));

        // The route throttle is per IP: without a per-number limit, codes
        // could be guessed from many addresses. After 5 wrong codes a new
        // one must be requested, whatever the provider's own limits.
        $attemptsKey = $this->phoneVerificationKey($phone);

        if (RateLimiter::tooManyAttempts($attemptsKey, 5)) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Too many attempts, request a new code',
                ResponseErrorCode::AUTH_CODE_EXPIRED
            );
        }

        // A number with no account and no pending sign-up never got a code:
        // it fails like a wrong code, without asking the provider.
        $codeValid = false;

        if ($user || $registration) {
            try {
                $codeValid = $verifier->check($phone, (string) $request->input('code'));
            } catch (\Exception $e) {
                Log::error('Phone verification code check failed: '.$e->getMessage());
            }
        }

        if (! $codeValid) {
            RateLimiter::hit($attemptsKey, 600);

            return $this->sendResponse(
                null,
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Code verification failed',
                ResponseErrorCode::AUTH_CODE_VERIFICATION_FAILED
            );
        }

        RateLimiter::clear($attemptsKey);

        if (! $user) {
            Cache::forget($this->phoneRegistrationKey($phone));

            // Settings may have changed since the code was sent.
            if (! ProvisionSocialUserAction::registrationIsOpen($request)) {
                return $this->sendResponse(
                    null,
                    ResponseStatusCode::FORBIDDEN,
                    'Registration disabled',
                    ResponseErrorCode::AUTH_REGISTRATION_DISABLED
                );
            }

            $user = User::create([
                'username' => UsernameGenerator::generate($registration['firstname'], $registration['lastname']),
                'firstname' => $registration['firstname'],
                'lastname' => $registration['lastname'],
                'email' => null,
                'phone' => $phone,
                'password' => Hash::make(Str::password(8, true, true, false)),
                'uid' => Functions::generateUid(),
                'account_status' => ProvisionSocialUserAction::defaultAccountStatus(),
                'auth_type' => AuthType::PHONE->value,
                'preferences' => $registration['preferences'],
            ]);

            ProvisionSocialUserAction::assignInitialRole($user);

            if ($user->account_status !== AccountStatus::DISABLED->value) {
                return $this->loginUser($request, $user, true);
            }

            event(new UserRegisteredEvent($user->id));
        }

        if ($user->account_status !== AccountStatus::DISABLED->value) {

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
