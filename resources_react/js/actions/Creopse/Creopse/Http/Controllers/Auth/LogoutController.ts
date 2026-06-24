import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
const LogoutController = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LogoutController.url(args, options),
    method: 'get',
})

LogoutController.definition = {
    methods: ["get","head"],
    url: '/api/auth/logout/{guard?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
LogoutController.url = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guard: args }
    }

    if (Array.isArray(args)) {
        args = {
            guard: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "guard",
    ])

    const parsedArgs = {
        guard: args?.guard,
    }

    return LogoutController.definition.url
            .replace('{guard?}', parsedArgs.guard?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
LogoutController.get = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LogoutController.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
LogoutController.head = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LogoutController.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
const LogoutControllerForm = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LogoutController.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
LogoutControllerForm.get = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LogoutController.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
LogoutControllerForm.head = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: LogoutController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

LogoutController.form = LogoutControllerForm

export default LogoutController