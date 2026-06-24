import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:168
* @route '/api/video-categories/force/{videoCategory}'
*/
export const destroy = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/video-categories/force/{videoCategory}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:168
* @route '/api/video-categories/force/{videoCategory}'
*/
destroy.url = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    const parsedArgs = {
        videoCategory: typeof args.videoCategory === 'object'
        ? args.videoCategory.id
        : args.videoCategory,
    }

    return destroy.definition.url
            .replace('{videoCategory}', parsedArgs.videoCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:168
* @route '/api/video-categories/force/{videoCategory}'
*/
destroy.delete = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:168
* @route '/api/video-categories/force/{videoCategory}'
*/
const destroyForm = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:168
* @route '/api/video-categories/force/{videoCategory}'
*/
destroyForm.delete = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const force = {
    destroy: Object.assign(destroy, destroy),
}

export default force