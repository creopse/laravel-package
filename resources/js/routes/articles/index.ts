import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
import force from './force'
import categories from './categories'
import list7365a2 from './list'
/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:471
* @route '/api/news-articles/restore/{newsArticle}'
*/
export const restore = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/api/news-articles/restore/{newsArticle}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:471
* @route '/api/news-articles/restore/{newsArticle}'
*/
restore.url = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return restore.definition.url
            .replace('{newsArticle}', parsedArgs.newsArticle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:471
* @route '/api/news-articles/restore/{newsArticle}'
*/
restore.put = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:471
* @route '/api/news-articles/restore/{newsArticle}'
*/
const restoreForm = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:471
* @route '/api/news-articles/restore/{newsArticle}'
*/
restoreForm.put = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

restore.form = restoreForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::headlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
export const headlines = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: headlines.url(args, options),
    method: 'get',
})

headlines.definition = {
    methods: ["get","head"],
    url: '/api/news-articles/headlines/{limit?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::headlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
headlines.url = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { limit: args }
    }

    if (Array.isArray(args)) {
        args = {
            limit: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "limit",
    ])

    const parsedArgs = {
        limit: args?.limit,
    }

    return headlines.definition.url
            .replace('{limit?}', parsedArgs.limit?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::headlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
headlines.get = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: headlines.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::headlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
headlines.head = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: headlines.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::headlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
const headlinesForm = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: headlines.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::headlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
headlinesForm.get = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: headlines.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::headlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
headlinesForm.head = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: headlines.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

headlines.form = headlinesForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::random
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
export const random = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: random.url(args, options),
    method: 'get',
})

random.definition = {
    methods: ["get","head"],
    url: '/api/news-articles/random/{limit?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::random
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
random.url = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { limit: args }
    }

    if (Array.isArray(args)) {
        args = {
            limit: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "limit",
    ])

    const parsedArgs = {
        limit: args?.limit,
    }

    return random.definition.url
            .replace('{limit?}', parsedArgs.limit?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::random
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
random.get = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: random.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::random
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
random.head = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: random.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::random
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
const randomForm = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: random.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::random
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
randomForm.get = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: random.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::random
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
randomForm.head = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: random.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

random.form = randomForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:249
* @route '/api/news-articles/list'
*/
export const list = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: list.url(options),
    method: 'post',
})

list.definition = {
    methods: ["post"],
    url: '/api/news-articles/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:249
* @route '/api/news-articles/list'
*/
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:249
* @route '/api/news-articles/list'
*/
list.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: list.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:249
* @route '/api/news-articles/list'
*/
const listForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: list.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:249
* @route '/api/news-articles/list'
*/
listForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: list.url(options),
    method: 'post',
})

list.form = listForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
export const search = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(args, options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/api/news-articles/search/{query?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
search.url = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { query: args }
    }

    if (Array.isArray(args)) {
        args = {
            query: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "query",
    ])

    const parsedArgs = {
        query: args?.query,
    }

    return search.definition.url
            .replace('{query?}', parsedArgs.query?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
search.get = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
search.head = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
const searchForm = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
searchForm.get = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
searchForm.head = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

search.form = searchForm

const articles = {
    force: Object.assign(force, force),
    restore: Object.assign(restore, restore),
    headlines: Object.assign(headlines, headlines),
    random: Object.assign(random, random),
    categories: Object.assign(categories, categories),
    list: Object.assign(list, list7365a2),
    search: Object.assign(search, search),
}

export default articles