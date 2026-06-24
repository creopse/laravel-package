import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::type
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
export const type = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: type.url(args, options),
    method: 'get',
})

type.definition = {
    methods: ["get","head"],
    url: '/api/count/media-files/type/{type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::type
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
type.url = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { type: args }
    }

    if (Array.isArray(args)) {
        args = {
            type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        type: args.type,
    }

    return type.definition.url
            .replace('{type}', parsedArgs.type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::type
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
type.get = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: type.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::type
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
type.head = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: type.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::type
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
const typeForm = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: type.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::type
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
typeForm.get = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: type.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::type
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
typeForm.head = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: type.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

type.form = typeForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::trashed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
export const trashed = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trashed.url(options),
    method: 'get',
})

trashed.definition = {
    methods: ["get","head"],
    url: '/api/count/media-files/trashed',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::trashed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
trashed.url = (options?: RouteQueryOptions) => {
    return trashed.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::trashed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
trashed.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trashed.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::trashed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
trashed.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trashed.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::trashed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
const trashedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trashed.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::trashed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
trashedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trashed.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::trashed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
trashedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trashed.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

trashed.form = trashedForm

const mediaFiles = {
    type: Object.assign(type, type),
    trashed: Object.assign(trashed, trashed),
}

export default mediaFiles