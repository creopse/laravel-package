import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::all
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:103
* @route '/api/permalinks'
*/
export const all = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: all.url(options),
    method: 'put',
})

all.definition = {
    methods: ["put"],
    url: '/api/permalinks',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::all
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:103
* @route '/api/permalinks'
*/
all.url = (options?: RouteQueryOptions) => {
    return all.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::all
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:103
* @route '/api/permalinks'
*/
all.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: all.url(options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::all
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:103
* @route '/api/permalinks'
*/
const allForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: all.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::all
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:103
* @route '/api/permalinks'
*/
allForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: all.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

all.form = allForm

const update = {
    all: Object.assign(all, all),
}

export default update