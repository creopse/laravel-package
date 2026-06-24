import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::all
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:436
* @route '/api/media-files/force/all'
*/
export const all = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: all.url(options),
    method: 'delete',
})

all.definition = {
    methods: ["delete"],
    url: '/api/media-files/force/all',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::all
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:436
* @route '/api/media-files/force/all'
*/
all.url = (options?: RouteQueryOptions) => {
    return all.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::all
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:436
* @route '/api/media-files/force/all'
*/
all.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: all.url(options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::all
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:436
* @route '/api/media-files/force/all'
*/
const allForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: all.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::all
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:436
* @route '/api/media-files/force/all'
*/
allForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: all.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

all.form = allForm
