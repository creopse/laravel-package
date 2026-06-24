import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:41
* @route '/api/news-tags'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/news-tags',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:41
* @route '/api/news-tags'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:41
* @route '/api/news-tags'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:41
* @route '/api/news-tags'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:41
* @route '/api/news-tags'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:114
* @route '/api/news-tags/{news_tag}'
*/
export const update = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/news-tags/{news_tag}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:114
* @route '/api/news-tags/{news_tag}'
*/
update.url = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news_tag: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news_tag: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news_tag: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        news_tag: typeof args.news_tag === 'object'
        ? args.news_tag.id
        : args.news_tag,
    }

    return update.definition.url
            .replace('{news_tag}', parsedArgs.news_tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:114
* @route '/api/news-tags/{news_tag}'
*/
update.put = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:114
* @route '/api/news-tags/{news_tag}'
*/
update.patch = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:114
* @route '/api/news-tags/{news_tag}'
*/
const updateForm = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:114
* @route '/api/news-tags/{news_tag}'
*/
updateForm.put = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:114
* @route '/api/news-tags/{news_tag}'
*/
updateForm.patch = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\News\TagController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:128
* @route '/api/news-tags/{news_tag}'
*/
export const destroy = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/news-tags/{news_tag}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:128
* @route '/api/news-tags/{news_tag}'
*/
destroy.url = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news_tag: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news_tag: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news_tag: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        news_tag: typeof args.news_tag === 'object'
        ? args.news_tag.id
        : args.news_tag,
    }

    return destroy.definition.url
            .replace('{news_tag}', parsedArgs.news_tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:128
* @route '/api/news-tags/{news_tag}'
*/
destroy.delete = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:128
* @route '/api/news-tags/{news_tag}'
*/
const destroyForm = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:128
* @route '/api/news-tags/{news_tag}'
*/
destroyForm.delete = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\News\TagController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:142
* @route '/api/news-tags/force/{newsTag}'
*/
export const forceDestroy = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

forceDestroy.definition = {
    methods: ["delete"],
    url: '/api/news-tags/force/{newsTag}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:142
* @route '/api/news-tags/force/{newsTag}'
*/
forceDestroy.url = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return forceDestroy.definition.url
            .replace('{newsTag}', parsedArgs.newsTag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:142
* @route '/api/news-tags/force/{newsTag}'
*/
forceDestroy.delete = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:142
* @route '/api/news-tags/force/{newsTag}'
*/
const forceDestroyForm = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:142
* @route '/api/news-tags/force/{newsTag}'
*/
forceDestroyForm.delete = (args: { newsTag: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:25
* @route '/api/news-tags'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/news-tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:25
* @route '/api/news-tags'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:25
* @route '/api/news-tags'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:25
* @route '/api/news-tags'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:25
* @route '/api/news-tags'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:25
* @route '/api/news-tags'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:25
* @route '/api/news-tags'
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
* @see \Creopse\Creopse\Http\Controllers\News\TagController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:61
* @route '/api/news-tags/{news_tag}'
*/
export const show = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/news-tags/{news_tag}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:61
* @route '/api/news-tags/{news_tag}'
*/
show.url = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news_tag: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news_tag: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news_tag: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        news_tag: typeof args.news_tag === 'object'
        ? args.news_tag.id
        : args.news_tag,
    }

    return show.definition.url
            .replace('{news_tag}', parsedArgs.news_tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:61
* @route '/api/news-tags/{news_tag}'
*/
show.get = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:61
* @route '/api/news-tags/{news_tag}'
*/
show.head = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:61
* @route '/api/news-tags/{news_tag}'
*/
const showForm = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:61
* @route '/api/news-tags/{news_tag}'
*/
showForm.get = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:61
* @route '/api/news-tags/{news_tag}'
*/
showForm.head = (args: { news_tag: number | { id: number } } | [news_tag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\News\TagController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:33
* @route '/api/news-tags/articles'
*/
export const indexWithArticles = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexWithArticles.url(options),
    method: 'get',
})

indexWithArticles.definition = {
    methods: ["get","head"],
    url: '/api/news-tags/articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:33
* @route '/api/news-tags/articles'
*/
indexWithArticles.url = (options?: RouteQueryOptions) => {
    return indexWithArticles.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:33
* @route '/api/news-tags/articles'
*/
indexWithArticles.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexWithArticles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:33
* @route '/api/news-tags/articles'
*/
indexWithArticles.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexWithArticles.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:33
* @route '/api/news-tags/articles'
*/
const indexWithArticlesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexWithArticles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:33
* @route '/api/news-tags/articles'
*/
indexWithArticlesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexWithArticles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:33
* @route '/api/news-tags/articles'
*/
indexWithArticlesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexWithArticles.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexWithArticles.form = indexWithArticlesForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
export const showWithArticles = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showWithArticles.url(args, options),
    method: 'get',
})

showWithArticles.definition = {
    methods: ["get","head"],
    url: '/api/news-tags/articles/{newsTag?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
showWithArticles.url = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return showWithArticles.definition.url
            .replace('{newsTag?}', parsedArgs.newsTag?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
showWithArticles.get = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showWithArticles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
showWithArticles.head = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showWithArticles.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
const showWithArticlesForm = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showWithArticles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
showWithArticlesForm.get = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showWithArticles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\TagController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/TagController.php:69
* @route '/api/news-tags/articles/{newsTag?}'
*/
showWithArticlesForm.head = (args?: { newsTag?: number | { id: number } } | [newsTag: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showWithArticles.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showWithArticles.form = showWithArticlesForm

const TagController = { store, update, destroy, forceDestroy, restore, index, show, indexWithArticles, showWithArticles }

export default TagController