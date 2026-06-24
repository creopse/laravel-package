import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
export const index = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/news-categories/articles/{newsCategory?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
index.url = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    validateParameters(args, [
        "newsCategory",
    ])

    const parsedArgs = {
        newsCategory: typeof args?.newsCategory === 'object'
        ? args.newsCategory.id
        : args?.newsCategory,
    }

    return index.definition.url
            .replace('{newsCategory?}', parsedArgs.newsCategory?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
index.get = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
index.head = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
const indexForm = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
indexForm.get = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
indexForm.head = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const articles = {
    index: Object.assign(index, index),
}

export default articles