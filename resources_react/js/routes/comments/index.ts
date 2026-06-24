import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import force from './force'
/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:133
* @route '/api/news-comments/restore/{newsComment}'
*/
export const restore = (args: { newsComment: number | { id: number } } | [newsComment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/api/news-comments/restore/{newsComment}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:133
* @route '/api/news-comments/restore/{newsComment}'
*/
restore.url = (args: { newsComment: number | { id: number } } | [newsComment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { newsComment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { newsComment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            newsComment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        newsComment: typeof args.newsComment === 'object'
        ? args.newsComment.id
        : args.newsComment,
    }

    return restore.definition.url
            .replace('{newsComment}', parsedArgs.newsComment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:133
* @route '/api/news-comments/restore/{newsComment}'
*/
restore.put = (args: { newsComment: number | { id: number } } | [newsComment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:133
* @route '/api/news-comments/restore/{newsComment}'
*/
const restoreForm = (args: { newsComment: number | { id: number } } | [newsComment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:133
* @route '/api/news-comments/restore/{newsComment}'
*/
restoreForm.put = (args: { newsComment: number | { id: number } } | [newsComment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

restore.form = restoreForm

const comments = {
    force: Object.assign(force, force),
    restore: Object.assign(restore, restore),
}

export default comments