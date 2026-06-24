import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:142
* @route '/api/news-tags/force/{newsTag}'
*/
export const destroy = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/news-tags/force/{newsTag}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:142
* @route '/api/news-tags/force/{newsTag}'
*/
destroy.url = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { newsTag: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { newsTag: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            newsTag: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        newsTag: typeof args.newsTag === 'object'
        ? args.newsTag.id
        : args.newsTag,
    }

    return destroy.definition.url
            .replace('{newsTag}', parsedArgs.newsTag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:142
* @route '/api/news-tags/force/{newsTag}'
*/
destroy.delete = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:142
* @route '/api/news-tags/force/{newsTag}'
*/
const destroyForm = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:142
* @route '/api/news-tags/force/{newsTag}'
*/
destroyForm.delete = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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