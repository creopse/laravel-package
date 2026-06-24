import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
export const email = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: email.url(options),
    method: 'get',
})

email.definition = {
    methods: ["get","head"],
    url: '/api/auth/send-verification-email',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
email.url = (options?: RouteQueryOptions) => {
    return email.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
email.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: email.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
email.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: email.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
const emailForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: email.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
emailForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: email.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
emailForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: email.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

email.form = emailForm

const send = {
    email: Object.assign(email, email),
}

export default send