import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:135
* @route '/api/content-model/items'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/content-model/items',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:135
* @route '/api/content-model/items'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:135
* @route '/api/content-model/items'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:135
* @route '/api/content-model/items'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:135
* @route '/api/content-model/items'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:282
* @route '/api/content-model/items/{contentModelItem}'
*/
export const update = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/content-model/items/{contentModelItem}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:282
* @route '/api/content-model/items/{contentModelItem}'
*/
update.url = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contentModelItem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { contentModelItem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            contentModelItem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        contentModelItem: typeof args.contentModelItem === 'object'
        ? args.contentModelItem.id
        : args.contentModelItem,
    }

    return update.definition.url
            .replace('{contentModelItem}', parsedArgs.contentModelItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:282
* @route '/api/content-model/items/{contentModelItem}'
*/
update.put = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:282
* @route '/api/content-model/items/{contentModelItem}'
*/
update.patch = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:282
* @route '/api/content-model/items/{contentModelItem}'
*/
const updateForm = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:282
* @route '/api/content-model/items/{contentModelItem}'
*/
updateForm.put = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:282
* @route '/api/content-model/items/{contentModelItem}'
*/
updateForm.patch = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:339
* @route '/api/content-model/items/{contentModelItem}'
*/
export const destroy = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/content-model/items/{contentModelItem}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:339
* @route '/api/content-model/items/{contentModelItem}'
*/
destroy.url = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contentModelItem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { contentModelItem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            contentModelItem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        contentModelItem: typeof args.contentModelItem === 'object'
        ? args.contentModelItem.id
        : args.contentModelItem,
    }

    return destroy.definition.url
            .replace('{contentModelItem}', parsedArgs.contentModelItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:339
* @route '/api/content-model/items/{contentModelItem}'
*/
destroy.delete = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:339
* @route '/api/content-model/items/{contentModelItem}'
*/
const destroyForm = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:339
* @route '/api/content-model/items/{contentModelItem}'
*/
destroyForm.delete = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:200
* @route '/api/content-model-items/list'
*/
export const list = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: list.url(options),
    method: 'post',
})

list.definition = {
    methods: ["post"],
    url: '/api/content-model-items/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:200
* @route '/api/content-model-items/list'
*/
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:200
* @route '/api/content-model-items/list'
*/
list.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: list.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:200
* @route '/api/content-model-items/list'
*/
const listForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: list.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:200
* @route '/api/content-model-items/list'
*/
listForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: list.url(options),
    method: 'post',
})

list.form = listForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
export const search = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(args, options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/api/content-model-items/search/{query?}/{contentModelId?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
search.url = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            query: args[0],
            contentModelId: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "query",
        "contentModelId",
    ])

    const parsedArgs = {
        query: args?.query,
        contentModelId: args?.contentModelId,
    }

    return search.definition.url
            .replace('{query?}', parsedArgs.query?.toString() ?? '')
            .replace('{contentModelId?}', parsedArgs.contentModelId?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
search.get = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
search.head = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
const searchForm = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
searchForm.get = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
searchForm.head = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

search.form = searchForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::related
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:325
* @route '/api/content-model-items/related/{contentModelItem}'
*/
export const related = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: related.url(args, options),
    method: 'put',
})

related.definition = {
    methods: ["put"],
    url: '/api/content-model-items/related/{contentModelItem}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::related
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:325
* @route '/api/content-model-items/related/{contentModelItem}'
*/
related.url = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contentModelItem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { contentModelItem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            contentModelItem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        contentModelItem: typeof args.contentModelItem === 'object'
        ? args.contentModelItem.id
        : args.contentModelItem,
    }

    return related.definition.url
            .replace('{contentModelItem}', parsedArgs.contentModelItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::related
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:325
* @route '/api/content-model-items/related/{contentModelItem}'
*/
related.put = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: related.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::related
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:325
* @route '/api/content-model-items/related/{contentModelItem}'
*/
const relatedForm = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: related.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::related
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:325
* @route '/api/content-model-items/related/{contentModelItem}'
*/
relatedForm.put = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: related.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

related.form = relatedForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:22
* @route '/api/content-model/items'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/content-model/items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:22
* @route '/api/content-model/items'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:22
* @route '/api/content-model/items'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:22
* @route '/api/content-model/items'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:22
* @route '/api/content-model/items'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:22
* @route '/api/content-model/items'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:22
* @route '/api/content-model/items'
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
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:192
* @route '/api/content-model/items/{contentModelItem}'
*/
export const show = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/content-model/items/{contentModelItem}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:192
* @route '/api/content-model/items/{contentModelItem}'
*/
show.url = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { contentModelItem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { contentModelItem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            contentModelItem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        contentModelItem: typeof args.contentModelItem === 'object'
        ? args.contentModelItem.id
        : args.contentModelItem,
    }

    return show.definition.url
            .replace('{contentModelItem}', parsedArgs.contentModelItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:192
* @route '/api/content-model/items/{contentModelItem}'
*/
show.get = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:192
* @route '/api/content-model/items/{contentModelItem}'
*/
show.head = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:192
* @route '/api/content-model/items/{contentModelItem}'
*/
const showForm = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:192
* @route '/api/content-model/items/{contentModelItem}'
*/
showForm.get = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:192
* @route '/api/content-model/items/{contentModelItem}'
*/
showForm.head = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const items = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    list: Object.assign(list, list),
    search: Object.assign(search, search),
    related: Object.assign(related, related),
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default items