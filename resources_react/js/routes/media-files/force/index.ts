import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:420
* @route '/api/media-files/force/{mediaFile}'
*/
export const destroy = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/media-files/force/{mediaFile}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:420
* @route '/api/media-files/force/{mediaFile}'
*/
destroy.url = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mediaFile: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { mediaFile: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            mediaFile: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        mediaFile: typeof args.mediaFile === 'object'
        ? args.mediaFile.id
        : args.mediaFile,
    }

    return destroy.definition.url
            .replace('{mediaFile}', parsedArgs.mediaFile.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:420
* @route '/api/media-files/force/{mediaFile}'
*/
destroy.delete = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:420
* @route '/api/media-files/force/{mediaFile}'
*/
const destroyForm = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:420
* @route '/api/media-files/force/{mediaFile}'
*/
destroyForm.delete = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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