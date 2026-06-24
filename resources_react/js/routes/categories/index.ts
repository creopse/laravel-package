import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import update from './update'
import force from './force'
import articles from './articles'
/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:185
* @route '/api/news-categories/restore/{newsCategory}'
*/
export const restore = (args: { newsCategory: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/api/news-categories/restore/{newsCategory}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:185
* @route '/api/news-categories/restore/{newsCategory}'
*/
restore.url = (args: { newsCategory: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { newsCategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { newsCategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            newsCategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        newsCategory: typeof args.newsCategory === 'object'
        ? args.newsCategory.id
        : args.newsCategory,
    }

    return restore.definition.url
            .replace('{newsCategory}', parsedArgs.newsCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:185
* @route '/api/news-categories/restore/{newsCategory}'
*/
restore.put = (args: { newsCategory: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:185
* @route '/api/news-categories/restore/{newsCategory}'
*/
const restoreForm = (args: { newsCategory: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:185
* @route '/api/news-categories/restore/{newsCategory}'
*/
restoreForm.put = (args: { newsCategory: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

restore.form = restoreForm

const categories = {
    update: Object.assign(update, update),
    force: Object.assign(force, force),
    restore: Object.assign(restore, restore),
    articles: Object.assign(articles, articles),
}

export default categories