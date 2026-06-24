import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithGoogle
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:85
* @route '/api/auth/google'
*/
export const authWithGoogle = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authWithGoogle.url(options),
    method: 'post',
})

authWithGoogle.definition = {
    methods: ["post"],
    url: '/api/auth/google',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithGoogle
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:85
* @route '/api/auth/google'
*/
authWithGoogle.url = (options?: RouteQueryOptions) => {
    return authWithGoogle.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithGoogle
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:85
* @route '/api/auth/google'
*/
authWithGoogle.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authWithGoogle.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithGoogle
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:85
* @route '/api/auth/google'
*/
const authWithGoogleForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: authWithGoogle.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithGoogle
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:85
* @route '/api/auth/google'
*/
authWithGoogleForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: authWithGoogle.url(options),
    method: 'post',
})

authWithGoogle.form = authWithGoogleForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithApple
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:180
* @route '/api/auth/apple'
*/
export const authWithApple = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authWithApple.url(options),
    method: 'post',
})

authWithApple.definition = {
    methods: ["post"],
    url: '/api/auth/apple',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithApple
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:180
* @route '/api/auth/apple'
*/
authWithApple.url = (options?: RouteQueryOptions) => {
    return authWithApple.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithApple
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:180
* @route '/api/auth/apple'
*/
authWithApple.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authWithApple.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithApple
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:180
* @route '/api/auth/apple'
*/
const authWithAppleForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: authWithApple.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithApple
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:180
* @route '/api/auth/apple'
*/
authWithAppleForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: authWithApple.url(options),
    method: 'post',
})

authWithApple.form = authWithAppleForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:394
* @route '/api/auth/phone'
*/
export const authWithPhone = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authWithPhone.url(options),
    method: 'post',
})

authWithPhone.definition = {
    methods: ["post"],
    url: '/api/auth/phone',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:394
* @route '/api/auth/phone'
*/
authWithPhone.url = (options?: RouteQueryOptions) => {
    return authWithPhone.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:394
* @route '/api/auth/phone'
*/
authWithPhone.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authWithPhone.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:394
* @route '/api/auth/phone'
*/
const authWithPhoneForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: authWithPhone.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::authWithPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:394
* @route '/api/auth/phone'
*/
authWithPhoneForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: authWithPhone.url(options),
    method: 'post',
})

authWithPhone.form = authWithPhoneForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::verifyPhoneAuth
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:523
* @route '/api/auth/phone/verify'
*/
export const verifyPhoneAuth = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyPhoneAuth.url(options),
    method: 'post',
})

verifyPhoneAuth.definition = {
    methods: ["post"],
    url: '/api/auth/phone/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::verifyPhoneAuth
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:523
* @route '/api/auth/phone/verify'
*/
verifyPhoneAuth.url = (options?: RouteQueryOptions) => {
    return verifyPhoneAuth.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::verifyPhoneAuth
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:523
* @route '/api/auth/phone/verify'
*/
verifyPhoneAuth.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyPhoneAuth.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::verifyPhoneAuth
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:523
* @route '/api/auth/phone/verify'
*/
const verifyPhoneAuthForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyPhoneAuth.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::verifyPhoneAuth
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:523
* @route '/api/auth/phone/verify'
*/
verifyPhoneAuthForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyPhoneAuth.url(options),
    method: 'post',
})

verifyPhoneAuth.form = verifyPhoneAuthForm

const ProviderController = { authWithGoogle, authWithApple, authWithPhone, verifyPhoneAuth }

export default ProviderController