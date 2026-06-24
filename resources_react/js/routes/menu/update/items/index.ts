import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemController.php:175
* @route '/api/menu/items/position'
*/
export const position = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: position.url(options),
    method: 'put',
})

position.definition = {
    methods: ["put"],
    url: '/api/menu/items/position',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemController.php:175
* @route '/api/menu/items/position'
*/
position.url = (options?: RouteQueryOptions) => {
    return position.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemController.php:175
* @route '/api/menu/items/position'
*/
position.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: position.url(options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemController.php:175
* @route '/api/menu/items/position'
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
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemController::position
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemController.php:175
* @route '/api/menu/items/position'
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

const items = {
    position: Object.assign(position, position),
}

export default items