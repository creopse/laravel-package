import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:137
* @route '/api/news-categories/position'
*/
export const position = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: position.url(options),
    method: 'put',
})

position.definition = {
    methods: ["put"],
    url: '/api/news-categories/position',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:137
* @route '/api/news-categories/position'
*/
position.url = (options?: RouteQueryOptions) => {
    return position.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:137
* @route '/api/news-categories/position'
*/
position.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: position.url(options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:137
* @route '/api/news-categories/position'
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
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:137
* @route '/api/news-categories/position'
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

const update = {
    position: Object.assign(position, position),
}

export default update