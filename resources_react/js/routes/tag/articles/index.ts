import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
export const index = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/news-tags/articles/{newsTag?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
index.url = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    validateParameters(args, [
        "newsTag",
    ])

    const parsedArgs = {
        newsTag: typeof args?.newsTag === 'object'
        ? args.newsTag.id
        : args?.newsTag,
    }

    return index.definition.url
            .replace('{newsTag?}', parsedArgs.newsTag?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
index.get = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
index.head = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
const indexForm = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
indexForm.get = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
indexForm.head = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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