import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
export const email = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: email.url(args, options),
    method: 'get',
})

email.definition = {
    methods: ["get","head"],
    url: '/api/auth/verify-email/{id}/{hash}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
email.url = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            id: args[0],
            hash: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
        hash: args.hash,
    }

    return email.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{hash}', parsedArgs.hash.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
email.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: email.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
email.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: email.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
const emailForm = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: email.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
emailForm.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: email.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::email
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
emailForm.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: email.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

email.form = emailForm
