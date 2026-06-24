import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:16
* @route '/api/sessions'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/sessions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:16
* @route '/api/sessions'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:16
* @route '/api/sessions'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:16
* @route '/api/sessions'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:16
* @route '/api/sessions'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:16
* @route '/api/sessions'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:16
* @route '/api/sessions'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::revoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:61
* @route '/api/sessions/{type}/{id}'
*/
export const revoke = (args: { type: string | number, id: string | number } | [type: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: revoke.url(args, options),
    method: 'delete',
})

revoke.definition = {
    methods: ["delete"],
    url: '/api/sessions/{type}/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::revoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:61
* @route '/api/sessions/{type}/{id}'
*/
revoke.url = (args: { type: string | number, id: string | number } | [type: string | number, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            type: args[0],
            id: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        type: args.type,
        id: args.id,
    }

    return revoke.definition.url
            .replace('{type}', parsedArgs.type.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::revoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:61
* @route '/api/sessions/{type}/{id}'
*/
revoke.delete = (args: { type: string | number, id: string | number } | [type: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: revoke.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::revoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:61
* @route '/api/sessions/{type}/{id}'
*/
const revokeForm = (args: { type: string | number, id: string | number } | [type: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: revoke.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::revoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:61
* @route '/api/sessions/{type}/{id}'
*/
revokeForm.delete = (args: { type: string | number, id: string | number } | [type: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: revoke.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

revoke.form = revokeForm

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::revokeAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:99
* @route '/api/sessions/revoke-all'
*/
export const revokeAll = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: revokeAll.url(options),
    method: 'delete',
})

revokeAll.definition = {
    methods: ["delete"],
    url: '/api/sessions/revoke-all',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::revokeAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:99
* @route '/api/sessions/revoke-all'
*/
revokeAll.url = (options?: RouteQueryOptions) => {
    return revokeAll.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::revokeAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:99
* @route '/api/sessions/revoke-all'
*/
revokeAll.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: revokeAll.url(options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::revokeAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:99
* @route '/api/sessions/revoke-all'
*/
const revokeAllForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: revokeAll.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\SessionController::revokeAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/SessionController.php:99
* @route '/api/sessions/revoke-all'
*/
revokeAllForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: revokeAll.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

revokeAll.form = revokeAllForm

const SessionController = { index, revoke, revokeAll }

export default SessionController