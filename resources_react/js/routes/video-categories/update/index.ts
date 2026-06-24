import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:134
* @route '/api/video-categories/position'
*/
export const position = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: position.url(options),
    method: 'put',
})

position.definition = {
    methods: ["put"],
    url: '/api/video-categories/position',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:134
* @route '/api/video-categories/position'
*/
position.url = (options?: RouteQueryOptions) => {
    return position.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:134
* @route '/api/video-categories/position'
*/
position.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: position.url(options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:134
* @route '/api/video-categories/position'
*/
const positionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: position.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:134
* @route '/api/video-categories/position'
*/
positionForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: position.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

position.form = positionForm
