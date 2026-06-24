import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verify
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
export const verify = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(args, options),
    method: 'get',
})

verify.definition = {
    methods: ["get","head"],
    url: '/api/auth/verify-email/{id}/{hash}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verify
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
verify.url = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions) => {
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

    return verify.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{hash}', parsedArgs.hash.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verify
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
verify.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verify
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
verify.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: verify.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verify
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
const verifyForm = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verify.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verify
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
verifyForm.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verify.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verify
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:48
* @route '/api/auth/verify-email/{id}/{hash}'
*/
verifyForm.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verify.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

verify.form = verifyForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
export const send = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: send.url(options),
    method: 'get',
})

send.definition = {
    methods: ["get","head"],
    url: '/api/auth/send-verification-email',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
send.url = (options?: RouteQueryOptions) => {
    return send.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
send.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: send.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
send.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: send.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
const sendForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: send.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
sendForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: send.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:25
* @route '/api/auth/send-verification-email'
*/
sendForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: send.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

send.form = sendForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verifyManually
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:81
* @route '/verify-email/{id}/{hash}'
*/
export const verifyManually = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verifyManually.url(args, options),
    method: 'get',
})

verifyManually.definition = {
    methods: ["get","head"],
    url: '/verify-email/{id}/{hash}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verifyManually
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:81
* @route '/verify-email/{id}/{hash}'
*/
verifyManually.url = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions) => {
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

    return verifyManually.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{hash}', parsedArgs.hash.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verifyManually
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:81
* @route '/verify-email/{id}/{hash}'
*/
verifyManually.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verifyManually.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verifyManually
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:81
* @route '/verify-email/{id}/{hash}'
*/
verifyManually.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: verifyManually.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verifyManually
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:81
* @route '/verify-email/{id}/{hash}'
*/
const verifyManuallyForm = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verifyManually.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verifyManually
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:81
* @route '/verify-email/{id}/{hash}'
*/
verifyManuallyForm.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verifyManually.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController::verifyManually
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailVerificationController.php:81
* @route '/verify-email/{id}/{hash}'
*/
verifyManuallyForm.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verifyManually.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

verifyManually.form = verifyManuallyForm

const EmailVerificationController = { verify, send, verifyManually }

export default EmailVerificationController