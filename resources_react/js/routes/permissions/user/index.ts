import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Access\PermissionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Access/PermissionController.php:0
* @route '/api/permissions/user/{user?}'
*/
export const index = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/permissions/user/{user?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Access\PermissionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Access/PermissionController.php:0
* @route '/api/permissions/user/{user?}'
*/
index.url = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "user",
    ])

    const parsedArgs = {
        user: args?.user,
    }

    return index.definition.url
            .replace('{user?}', parsedArgs.user?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Access\PermissionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Access/PermissionController.php:0
* @route '/api/permissions/user/{user?}'
*/
index.get = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Access\PermissionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Access/PermissionController.php:0
* @route '/api/permissions/user/{user?}'
*/
index.head = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Access\PermissionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Access/PermissionController.php:0
* @route '/api/permissions/user/{user?}'
*/
const indexForm = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Access\PermissionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Access/PermissionController.php:0
* @route '/api/permissions/user/{user?}'
*/
indexForm.get = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Access\PermissionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Access/PermissionController.php:0
* @route '/api/permissions/user/{user?}'
*/
indexForm.head = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const user = {
    index: Object.assign(index, index),
}

export default user