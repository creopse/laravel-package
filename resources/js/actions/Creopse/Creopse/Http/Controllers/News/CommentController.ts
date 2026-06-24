import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:91
* @route '/api/news-comments/{news_comment}'
*/
export const update = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/news-comments/{news_comment}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:91
* @route '/api/news-comments/{news_comment}'
*/
update.url = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news_comment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news_comment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news_comment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        news_comment: typeof args.news_comment === 'object'
        ? args.news_comment.id
        : args.news_comment,
    }

    return update.definition.url
            .replace('{news_comment}', parsedArgs.news_comment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:91
* @route '/api/news-comments/{news_comment}'
*/
update.put = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:91
* @route '/api/news-comments/{news_comment}'
*/
update.patch = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:91
* @route '/api/news-comments/{news_comment}'
*/
const updateForm = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:91
* @route '/api/news-comments/{news_comment}'
*/
updateForm.put = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:91
* @route '/api/news-comments/{news_comment}'
*/
updateForm.patch = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:105
* @route '/api/news-comments/{news_comment}'
*/
export const destroy = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/news-comments/{news_comment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:105
* @route '/api/news-comments/{news_comment}'
*/
destroy.url = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news_comment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news_comment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news_comment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        news_comment: typeof args.news_comment === 'object'
        ? args.news_comment.id
        : args.news_comment,
    }

    return destroy.definition.url
            .replace('{news_comment}', parsedArgs.news_comment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:105
* @route '/api/news-comments/{news_comment}'
*/
destroy.delete = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:105
* @route '/api/news-comments/{news_comment}'
*/
const destroyForm = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:105
* @route '/api/news-comments/{news_comment}'
*/
destroyForm.delete = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:119
* @route '/api/news-comments/force/{newsComment}'
*/
export const forceDestroy = (args: { newsComment: number | { id: number } } | [newsComment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

forceDestroy.definition = {
    methods: ["delete"],
    url: '/api/news-comments/force/{newsComment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:119
* @route '/api/news-comments/force/{newsComment}'
*/
forceDestroy.url = (args: { newsComment: number | { id: number } } | [newsComment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return forceDestroy.definition.url
            .replace('{newsComment}', parsedArgs.newsComment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:119
* @route '/api/news-comments/force/{newsComment}'
*/
forceDestroy.delete = (args: { newsComment: number | { id: number } } | [newsComment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:119
* @route '/api/news-comments/force/{newsComment}'
*/
const forceDestroyForm = (args: { newsComment: number | { id: number } } | [newsComment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:119
* @route '/api/news-comments/force/{newsComment}'
*/
forceDestroyForm.delete = (args: { newsComment: number | { id: number } } | [newsComment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:18
* @route '/api/news-comments'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/news-comments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:18
* @route '/api/news-comments'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:18
* @route '/api/news-comments'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:18
* @route '/api/news-comments'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:18
* @route '/api/news-comments'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:18
* @route '/api/news-comments'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:18
* @route '/api/news-comments'
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
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:58
* @route '/api/news-comments'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/news-comments',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:58
* @route '/api/news-comments'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:58
* @route '/api/news-comments'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:58
* @route '/api/news-comments'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:58
* @route '/api/news-comments'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:83
* @route '/api/news-comments/{news_comment}'
*/
export const show = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/news-comments/{news_comment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:83
* @route '/api/news-comments/{news_comment}'
*/
show.url = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news_comment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news_comment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news_comment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        news_comment: typeof args.news_comment === 'object'
        ? args.news_comment.id
        : args.news_comment,
    }

    return show.definition.url
            .replace('{news_comment}', parsedArgs.news_comment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:83
* @route '/api/news-comments/{news_comment}'
*/
show.get = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:83
* @route '/api/news-comments/{news_comment}'
*/
show.head = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:83
* @route '/api/news-comments/{news_comment}'
*/
const showForm = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:83
* @route '/api/news-comments/{news_comment}'
*/
showForm.get = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CommentController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CommentController.php:83
* @route '/api/news-comments/{news_comment}'
*/
showForm.head = (args: { news_comment: number | { id: number } } | [news_comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const CommentController = { update, destroy, forceDestroy, restore, index, store, show }

export default CommentController