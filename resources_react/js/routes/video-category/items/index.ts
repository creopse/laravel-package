import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
export const index = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/video-categories/items/{videoCategory?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
index.url = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { videoCategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { videoCategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            videoCategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "videoCategory",
    ])

    const parsedArgs = {
        videoCategory: typeof args?.videoCategory === 'object'
        ? args.videoCategory.id
        : args?.videoCategory,
    }

    return index.definition.url
            .replace('{videoCategory?}', parsedArgs.videoCategory?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
index.get = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
index.head = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
const indexForm = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
indexForm.get = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
indexForm.head = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const items = {
    index: Object.assign(index, index),
}

export default items