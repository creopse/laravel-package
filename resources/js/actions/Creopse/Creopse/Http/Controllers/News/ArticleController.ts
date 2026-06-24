import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:191
* @route '/api/news-articles'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/news-articles',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:191
* @route '/api/news-articles'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:191
* @route '/api/news-articles'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:191
* @route '/api/news-articles'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:191
* @route '/api/news-articles'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:400
* @route '/api/news-articles/{news_article}'
*/
export const update = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/news-articles/{news_article}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:400
* @route '/api/news-articles/{news_article}'
*/
update.url = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news_article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news_article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news_article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        news_article: typeof args.news_article === 'object'
        ? args.news_article.id
        : args.news_article,
    }

    return update.definition.url
            .replace('{news_article}', parsedArgs.news_article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:400
* @route '/api/news-articles/{news_article}'
*/
update.put = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:400
* @route '/api/news-articles/{news_article}'
*/
update.patch = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:400
* @route '/api/news-articles/{news_article}'
*/
const updateForm = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:400
* @route '/api/news-articles/{news_article}'
*/
updateForm.put = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:400
* @route '/api/news-articles/{news_article}'
*/
updateForm.patch = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:443
* @route '/api/news-articles/{news_article}'
*/
export const destroy = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/news-articles/{news_article}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:443
* @route '/api/news-articles/{news_article}'
*/
destroy.url = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news_article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news_article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news_article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        news_article: typeof args.news_article === 'object'
        ? args.news_article.id
        : args.news_article,
    }

    return destroy.definition.url
            .replace('{news_article}', parsedArgs.news_article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:443
* @route '/api/news-articles/{news_article}'
*/
destroy.delete = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:443
* @route '/api/news-articles/{news_article}'
*/
const destroyForm = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:443
* @route '/api/news-articles/{news_article}'
*/
destroyForm.delete = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:457
* @route '/api/news-articles/force/{newsArticle}'
*/
export const forceDestroy = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

forceDestroy.definition = {
    methods: ["delete"],
    url: '/api/news-articles/force/{newsArticle}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:457
* @route '/api/news-articles/force/{newsArticle}'
*/
forceDestroy.url = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return forceDestroy.definition.url
            .replace('{newsArticle}', parsedArgs.newsArticle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:457
* @route '/api/news-articles/force/{newsArticle}'
*/
forceDestroy.delete = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:457
* @route '/api/news-articles/force/{newsArticle}'
*/
const forceDestroyForm = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:457
* @route '/api/news-articles/force/{newsArticle}'
*/
forceDestroyForm.delete = (args: { newsArticle: number | { id: number } } | [newsArticle: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

forceDestroy.form = forceDestroyForm

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
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexHeadlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
export const indexHeadlines = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexHeadlines.url(args, options),
    method: 'get',
})

indexHeadlines.definition = {
    methods: ["get","head"],
    url: '/api/news-articles/headlines/{limit?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexHeadlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
indexHeadlines.url = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return indexHeadlines.definition.url
            .replace('{limit?}', parsedArgs.limit?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexHeadlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
indexHeadlines.get = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexHeadlines.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexHeadlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
indexHeadlines.head = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexHeadlines.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexHeadlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
const indexHeadlinesForm = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexHeadlines.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexHeadlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
indexHeadlinesForm.get = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexHeadlines.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexHeadlines
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:171
* @route '/api/news-articles/headlines/{limit?}'
*/
indexHeadlinesForm.head = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexHeadlines.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexHeadlines.form = indexHeadlinesForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexRandomList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
export const indexRandomList = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexRandomList.url(args, options),
    method: 'get',
})

indexRandomList.definition = {
    methods: ["get","head"],
    url: '/api/news-articles/random/{limit?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexRandomList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
indexRandomList.url = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return indexRandomList.definition.url
            .replace('{limit?}', parsedArgs.limit?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexRandomList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
indexRandomList.get = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexRandomList.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexRandomList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
indexRandomList.head = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexRandomList.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexRandomList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
const indexRandomListForm = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexRandomList.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexRandomList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
indexRandomListForm.get = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexRandomList.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexRandomList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:122
* @route '/api/news-articles/random/{limit?}'
*/
indexRandomListForm.head = (args?: { limit?: string | number } | [limit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexRandomList.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexRandomList.form = indexRandomListForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:27
* @route '/api/news-articles'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/news-articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:27
* @route '/api/news-articles'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:27
* @route '/api/news-articles'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:27
* @route '/api/news-articles'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:27
* @route '/api/news-articles'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:27
* @route '/api/news-articles'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:27
* @route '/api/news-articles'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:241
* @route '/api/news-articles/{news_article}'
*/
export const show = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/news-articles/{news_article}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:241
* @route '/api/news-articles/{news_article}'
*/
show.url = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news_article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news_article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news_article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        news_article: typeof args.news_article === 'object'
        ? args.news_article.id
        : args.news_article,
    }

    return show.definition.url
            .replace('{news_article}', parsedArgs.news_article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:241
* @route '/api/news-articles/{news_article}'
*/
show.get = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:241
* @route '/api/news-articles/{news_article}'
*/
show.head = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:241
* @route '/api/news-articles/{news_article}'
*/
const showForm = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:241
* @route '/api/news-articles/{news_article}'
*/
showForm.get = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:241
* @route '/api/news-articles/{news_article}'
*/
showForm.head = (args: { news_article: number | { id: number } } | [news_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexWithCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:155
* @route '/api/news-articles/categories'
*/
export const indexWithCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexWithCategories.url(options),
    method: 'get',
})

indexWithCategories.definition = {
    methods: ["get","head"],
    url: '/api/news-articles/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexWithCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:155
* @route '/api/news-articles/categories'
*/
indexWithCategories.url = (options?: RouteQueryOptions) => {
    return indexWithCategories.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexWithCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:155
* @route '/api/news-articles/categories'
*/
indexWithCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexWithCategories.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexWithCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:155
* @route '/api/news-articles/categories'
*/
indexWithCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexWithCategories.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexWithCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:155
* @route '/api/news-articles/categories'
*/
const indexWithCategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexWithCategories.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexWithCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:155
* @route '/api/news-articles/categories'
*/
indexWithCategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexWithCategories.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::indexWithCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:155
* @route '/api/news-articles/categories'
*/
indexWithCategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexWithCategories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexWithCategories.form = indexWithCategoriesForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:249
* @route '/api/news-articles/list'
*/
export const showList = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: showList.url(options),
    method: 'post',
})

showList.definition = {
    methods: ["post"],
    url: '/api/news-articles/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:249
* @route '/api/news-articles/list'
*/
showList.url = (options?: RouteQueryOptions) => {
    return showList.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:249
* @route '/api/news-articles/list'
*/
showList.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: showList.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:249
* @route '/api/news-articles/list'
*/
const showListForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: showList.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:249
* @route '/api/news-articles/list'
*/
showListForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: showList.url(options),
    method: 'post',
})

showList.form = showListForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::searchArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
export const searchArticles = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchArticles.url(args, options),
    method: 'get',
})

searchArticles.definition = {
    methods: ["get","head"],
    url: '/api/news-articles/search/{query?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::searchArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
searchArticles.url = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return searchArticles.definition.url
            .replace('{query?}', parsedArgs.query?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::searchArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
searchArticles.get = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchArticles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::searchArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
searchArticles.head = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: searchArticles.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::searchArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
const searchArticlesForm = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchArticles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::searchArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
searchArticlesForm.get = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchArticles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::searchArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:295
* @route '/api/news-articles/search/{query?}'
*/
searchArticlesForm.head = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchArticles.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

searchArticles.form = searchArticlesForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:359
* @route '/api/news-articles/list/months'
*/
export const showMonthsList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showMonthsList.url(options),
    method: 'get',
})

showMonthsList.definition = {
    methods: ["get","head"],
    url: '/api/news-articles/list/months',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:359
* @route '/api/news-articles/list/months'
*/
showMonthsList.url = (options?: RouteQueryOptions) => {
    return showMonthsList.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:359
* @route '/api/news-articles/list/months'
*/
showMonthsList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showMonthsList.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:359
* @route '/api/news-articles/list/months'
*/
showMonthsList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showMonthsList.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:359
* @route '/api/news-articles/list/months'
*/
const showMonthsListForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showMonthsList.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:359
* @route '/api/news-articles/list/months'
*/
showMonthsListForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showMonthsList.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\ArticleController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/ArticleController.php:359
* @route '/api/news-articles/list/months'
*/
showMonthsListForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showMonthsList.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showMonthsList.form = showMonthsListForm

const ArticleController = { store, update, destroy, forceDestroy, restore, indexHeadlines, indexRandomList, index, show, indexWithCategories, showList, searchArticles, showMonthsList }

export default ArticleController