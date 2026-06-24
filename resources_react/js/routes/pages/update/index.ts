import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\PageController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PageController.php:145
* @route '/api/pages/position'
*/
export const position = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: position.url(options),
    method: 'put',
})

position.definition = {
    methods: ["put"],
    url: '/api/pages/position',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PageController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PageController.php:145
* @route '/api/pages/position'
*/
position.url = (options?: RouteQueryOptions) => {
    return position.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PageController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PageController.php:145
* @route '/api/pages/position'
*/
position.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: position.url(options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PageController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PageController.php:145
* @route '/api/pages/position'
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
* @see \Creopse\Creopse\Http\Controllers\Content\PageController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PageController.php:145
* @route '/api/pages/position'
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
