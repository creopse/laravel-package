import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::months
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
export const months = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: months.url(options),
    method: 'get',
})

months.definition = {
    methods: ["get","head"],
    url: '/api/media-files/list/months',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::months
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
months.url = (options?: RouteQueryOptions) => {
    return months.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::months
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
months.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: months.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::months
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
months.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: months.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::months
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
const monthsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: months.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::months
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
monthsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: months.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::months
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
monthsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: months.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

months.form = monthsForm

const list = {
    months: Object.assign(months, months),
}

export default list