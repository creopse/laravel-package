import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:365
* @route '/api/video-items/force/{videoItem}'
*/
export const destroy = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/video-items/force/{videoItem}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:365
* @route '/api/video-items/force/{videoItem}'
*/
destroy.url = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { videoItem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { videoItem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            videoItem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        videoItem: typeof args.videoItem === 'object'
        ? args.videoItem.id
        : args.videoItem,
    }

    return destroy.definition.url
            .replace('{videoItem}', parsedArgs.videoItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:365
* @route '/api/video-items/force/{videoItem}'
*/
destroy.delete = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:365
* @route '/api/video-items/force/{videoItem}'
*/
const destroyForm = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:365
* @route '/api/video-items/force/{videoItem}'
*/
destroyForm.delete = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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