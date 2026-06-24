import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::updatePosition
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:137
* @route '/api/news-categories/position'
*/
export const updatePosition = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePosition.url(options),
    method: 'put',
})

updatePosition.definition = {
    methods: ["put"],
    url: '/api/news-categories/position',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::updatePosition
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:137
* @route '/api/news-categories/position'
*/
updatePosition.url = (options?: RouteQueryOptions) => {
    return updatePosition.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::updatePosition
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:137
* @route '/api/news-categories/position'
*/
updatePosition.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePosition.url(options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::updatePosition
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:137
* @route '/api/news-categories/position'
*/
const updatePositionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatePosition.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::updatePosition
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:137
* @route '/api/news-categories/position'
*/
updatePositionForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatePosition.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatePosition.form = updatePositionForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:41
* @route '/api/news-categories'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/news-categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:41
* @route '/api/news-categories'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:41
* @route '/api/news-categories'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:41
* @route '/api/news-categories'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:41
* @route '/api/news-categories'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:123
* @route '/api/news-categories/{news_category}'
*/
export const update = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/news-categories/{news_category}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:123
* @route '/api/news-categories/{news_category}'
*/
update.url = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news_category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news_category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news_category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        news_category: typeof args.news_category === 'object'
        ? args.news_category.id
        : args.news_category,
    }

    return update.definition.url
            .replace('{news_category}', parsedArgs.news_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:123
* @route '/api/news-categories/{news_category}'
*/
update.put = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:123
* @route '/api/news-categories/{news_category}'
*/
update.patch = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:123
* @route '/api/news-categories/{news_category}'
*/
const updateForm = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:123
* @route '/api/news-categories/{news_category}'
*/
updateForm.put = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:123
* @route '/api/news-categories/{news_category}'
*/
updateForm.patch = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:157
* @route '/api/news-categories/{news_category}'
*/
export const destroy = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/news-categories/{news_category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:157
* @route '/api/news-categories/{news_category}'
*/
destroy.url = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news_category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news_category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news_category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        news_category: typeof args.news_category === 'object'
        ? args.news_category.id
        : args.news_category,
    }

    return destroy.definition.url
            .replace('{news_category}', parsedArgs.news_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:157
* @route '/api/news-categories/{news_category}'
*/
destroy.delete = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:157
* @route '/api/news-categories/{news_category}'
*/
const destroyForm = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:157
* @route '/api/news-categories/{news_category}'
*/
destroyForm.delete = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:171
* @route '/api/news-categories/force/{newsCategory}'
*/
export const forceDestroy = (args: { newsCategory: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

forceDestroy.definition = {
    methods: ["delete"],
    url: '/api/news-categories/force/{newsCategory}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:171
* @route '/api/news-categories/force/{newsCategory}'
*/
forceDestroy.url = (args: { newsCategory: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return forceDestroy.definition.url
            .replace('{newsCategory}', parsedArgs.newsCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:171
* @route '/api/news-categories/force/{newsCategory}'
*/
forceDestroy.delete = (args: { newsCategory: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:171
* @route '/api/news-categories/force/{newsCategory}'
*/
const forceDestroyForm = (args: { newsCategory: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:171
* @route '/api/news-categories/force/{newsCategory}'
*/
forceDestroyForm.delete = (args: { newsCategory: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:25
* @route '/api/news-categories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/news-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:25
* @route '/api/news-categories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:25
* @route '/api/news-categories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:25
* @route '/api/news-categories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:25
* @route '/api/news-categories'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:25
* @route '/api/news-categories'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:25
* @route '/api/news-categories'
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
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:65
* @route '/api/news-categories/{news_category}'
*/
export const show = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/news-categories/{news_category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:65
* @route '/api/news-categories/{news_category}'
*/
show.url = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news_category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news_category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news_category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        news_category: typeof args.news_category === 'object'
        ? args.news_category.id
        : args.news_category,
    }

    return show.definition.url
            .replace('{news_category}', parsedArgs.news_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:65
* @route '/api/news-categories/{news_category}'
*/
show.get = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:65
* @route '/api/news-categories/{news_category}'
*/
show.head = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:65
* @route '/api/news-categories/{news_category}'
*/
const showForm = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:65
* @route '/api/news-categories/{news_category}'
*/
showForm.get = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:65
* @route '/api/news-categories/{news_category}'
*/
showForm.head = (args: { news_category: number | { id: number } } | [news_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:33
* @route '/api/news-categories/articles'
*/
export const indexWithArticles = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexWithArticles.url(options),
    method: 'get',
})

indexWithArticles.definition = {
    methods: ["get","head"],
    url: '/api/news-categories/articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:33
* @route '/api/news-categories/articles'
*/
indexWithArticles.url = (options?: RouteQueryOptions) => {
    return indexWithArticles.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:33
* @route '/api/news-categories/articles'
*/
indexWithArticles.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexWithArticles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:33
* @route '/api/news-categories/articles'
*/
indexWithArticles.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexWithArticles.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:33
* @route '/api/news-categories/articles'
*/
const indexWithArticlesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexWithArticles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:33
* @route '/api/news-categories/articles'
*/
indexWithArticlesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexWithArticles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::indexWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:33
* @route '/api/news-categories/articles'
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
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
export const showWithArticles = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showWithArticles.url(args, options),
    method: 'get',
})

showWithArticles.definition = {
    methods: ["get","head"],
    url: '/api/news-categories/articles/{newsCategory?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
showWithArticles.url = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return showWithArticles.definition.url
            .replace('{newsCategory?}', parsedArgs.newsCategory?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
showWithArticles.get = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showWithArticles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
showWithArticles.head = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showWithArticles.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
const showWithArticlesForm = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showWithArticles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
showWithArticlesForm.get = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showWithArticles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\News\CategoryController::showWithArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/News/CategoryController.php:73
* @route '/api/news-categories/articles/{newsCategory?}'
*/
showWithArticlesForm.head = (args?: { newsCategory?: number | { id: number } } | [newsCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showWithArticles.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showWithArticles.form = showWithArticlesForm

const CategoryController = { updatePosition, store, update, destroy, forceDestroy, restore, index, show, indexWithArticles, showWithArticles }

export default CategoryController