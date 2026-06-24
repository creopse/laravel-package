import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import phone601e20 from './phone'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::google
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:85
* @route '/api/auth/google'
*/
export const google = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: google.url(options),
    method: 'post',
})

google.definition = {
    methods: ["post"],
    url: '/api/auth/google',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::google
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:85
* @route '/api/auth/google'
*/
google.url = (options?: RouteQueryOptions) => {
    return google.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::google
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:85
* @route '/api/auth/google'
*/
google.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: google.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::google
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:85
* @route '/api/auth/google'
*/
const googleForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: google.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::google
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:85
* @route '/api/auth/google'
*/
googleForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: google.url(options),
    method: 'post',
})

google.form = googleForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::apple
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:180
* @route '/api/auth/apple'
*/
export const apple = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apple.url(options),
    method: 'post',
})

apple.definition = {
    methods: ["post"],
    url: '/api/auth/apple',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::apple
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:180
* @route '/api/auth/apple'
*/
apple.url = (options?: RouteQueryOptions) => {
    return apple.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::apple
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:180
* @route '/api/auth/apple'
*/
apple.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apple.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::apple
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:180
* @route '/api/auth/apple'
*/
const appleForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: apple.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::apple
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:180
* @route '/api/auth/apple'
*/
appleForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: apple.url(options),
    method: 'post',
})

apple.form = appleForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::phone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:394
* @route '/api/auth/phone'
*/
export const phone = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: phone.url(options),
    method: 'post',
})

phone.definition = {
    methods: ["post"],
    url: '/api/auth/phone',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::phone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:394
* @route '/api/auth/phone'
*/
phone.url = (options?: RouteQueryOptions) => {
    return phone.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::phone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:394
* @route '/api/auth/phone'
*/
phone.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: phone.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::phone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:394
* @route '/api/auth/phone'
*/
const phoneForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: phone.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\ProviderController::phone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/ProviderController.php:394
* @route '/api/auth/phone'
*/
phoneForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: phone.url(options),
    method: 'post',
})

phone.form = phoneForm

const provider = {
    google: Object.assign(google, google),
    apple: Object.assign(apple, apple),
    phone: Object.assign(phone, phone601e20),
}

export default provider