import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:114
* @route '/api/media-files/paths/list'
*/
export const list = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: list.url(options),
    method: 'post',
})

list.definition = {
    methods: ["post"],
    url: '/api/media-files/paths/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:114
* @route '/api/media-files/paths/list'
*/
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:114
* @route '/api/media-files/paths/list'
*/
list.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: list.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:114
* @route '/api/media-files/paths/list'
*/
const listForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: list.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:114
* @route '/api/media-files/paths/list'
*/
listForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: list.url(options),
    method: 'post',
})

list.form = listForm

const paths = {
    list: Object.assign(list, list),
}

export default paths