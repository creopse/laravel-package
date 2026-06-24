import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import force from './force'
import articles from './articles'
/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:156
* @route '/api/news-tags/restore/{newsTag}'
*/
export const restore = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/api/news-tags/restore/{newsTag}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:156
* @route '/api/news-tags/restore/{newsTag}'
*/
restore.url = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return restore.definition.url
            .replace('{newsTag}', parsedArgs.newsTag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:156
* @route '/api/news-tags/restore/{newsTag}'
*/
restore.put = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:156
* @route '/api/news-tags/restore/{newsTag}'
*/
const restoreForm = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:156
* @route '/api/news-tags/restore/{newsTag}'
*/
restoreForm.put = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

restore.form = restoreForm

const tags = {
    force: Object.assign(force, force),
    restore: Object.assign(restore, restore),
    articles: Object.assign(articles, articles),
}

export default tags