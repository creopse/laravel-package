import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:457
* @route '/api/news-articles/force/{newsArticle}'
*/
export const destroy = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/news-articles/force/{newsArticle}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:457
* @route '/api/news-articles/force/{newsArticle}'
*/
destroy.url = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { newsArticle: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { newsArticle: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            newsArticle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        newsArticle: typeof args.newsArticle === 'object'
        ? args.newsArticle.id
        : args.newsArticle,
    }

    return destroy.definition.url
            .replace('{newsArticle}', parsedArgs.newsArticle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:457
* @route '/api/news-articles/force/{newsArticle}'
*/
destroy.delete = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:457
* @route '/api/news-articles/force/{newsArticle}'
*/
const destroyForm = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:457
* @route '/api/news-articles/force/{newsArticle}'
*/
destroyForm.delete = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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