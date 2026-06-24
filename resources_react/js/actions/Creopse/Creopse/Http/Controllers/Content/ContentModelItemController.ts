import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../../wayfinder'
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
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:200
* @route '/api/content-model-items/list'
*/
export const showList = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: showList.url(options),
    method: 'post',
})

showList.definition = {
    methods: ["post"],
    url: '/api/content-model-items/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:200
* @route '/api/content-model-items/list'
*/
showList.url = (options?: RouteQueryOptions) => {
    return showList.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:200
* @route '/api/content-model-items/list'
*/
showList.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: showList.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:200
* @route '/api/content-model-items/list'
*/
const showListForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: showList.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:200
* @route '/api/content-model-items/list'
*/
showListForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: showList.url(options),
    method: 'post',
})

showList.form = showListForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::searchItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
export const searchItems = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchItems.url(args, options),
    method: 'get',
})

searchItems.definition = {
    methods: ["get","head"],
    url: '/api/content-model-items/search/{query?}/{contentModelId?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::searchItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
searchItems.url = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions) => {
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

    return searchItems.definition.url
            .replace('{query?}', parsedArgs.query?.toString() ?? '')
            .replace('{contentModelId?}', parsedArgs.contentModelId?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::searchItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
searchItems.get = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchItems.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::searchItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
searchItems.head = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: searchItems.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::searchItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
const searchItemsForm = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchItems.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::searchItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
searchItemsForm.get = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchItems.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::searchItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:210
* @route '/api/content-model-items/search/{query?}/{contentModelId?}'
*/
searchItemsForm.head = (args?: { query?: string | number, contentModelId?: string | number } | [query: string | number, contentModelId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchItems.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

searchItems.form = searchItemsForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::updateRelatedItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:325
* @route '/api/content-model-items/related/{contentModelItem}'
*/
export const updateRelatedItems = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateRelatedItems.url(args, options),
    method: 'put',
})

updateRelatedItems.definition = {
    methods: ["put"],
    url: '/api/content-model-items/related/{contentModelItem}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::updateRelatedItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:325
* @route '/api/content-model-items/related/{contentModelItem}'
*/
updateRelatedItems.url = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updateRelatedItems.definition.url
            .replace('{contentModelItem}', parsedArgs.contentModelItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::updateRelatedItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:325
* @route '/api/content-model-items/related/{contentModelItem}'
*/
updateRelatedItems.put = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateRelatedItems.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::updateRelatedItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:325
* @route '/api/content-model-items/related/{contentModelItem}'
*/
const updateRelatedItemsForm = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateRelatedItems.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::updateRelatedItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:325
* @route '/api/content-model-items/related/{contentModelItem}'
*/
updateRelatedItemsForm.put = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateRelatedItems.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateRelatedItems.form = updateRelatedItemsForm

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

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::storeUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:158
* @route '/api/content-model/user-items'
*/
export const storeUserItem = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeUserItem.url(options),
    method: 'post',
})

storeUserItem.definition = {
    methods: ["post"],
    url: '/api/content-model/user-items',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::storeUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:158
* @route '/api/content-model/user-items'
*/
storeUserItem.url = (options?: RouteQueryOptions) => {
    return storeUserItem.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::storeUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:158
* @route '/api/content-model/user-items'
*/
storeUserItem.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeUserItem.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::storeUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:158
* @route '/api/content-model/user-items'
*/
const storeUserItemForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeUserItem.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::storeUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:158
* @route '/api/content-model/user-items'
*/
storeUserItemForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeUserItem.url(options),
    method: 'post',
})

storeUserItem.form = storeUserItemForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::updateUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:300
* @route '/api/content-model/user-items/{contentModelItem}'
*/
export const updateUserItem = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateUserItem.url(args, options),
    method: 'put',
})

updateUserItem.definition = {
    methods: ["put"],
    url: '/api/content-model/user-items/{contentModelItem}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::updateUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:300
* @route '/api/content-model/user-items/{contentModelItem}'
*/
updateUserItem.url = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updateUserItem.definition.url
            .replace('{contentModelItem}', parsedArgs.contentModelItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::updateUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:300
* @route '/api/content-model/user-items/{contentModelItem}'
*/
updateUserItem.put = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateUserItem.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::updateUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:300
* @route '/api/content-model/user-items/{contentModelItem}'
*/
const updateUserItemForm = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateUserItem.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::updateUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:300
* @route '/api/content-model/user-items/{contentModelItem}'
*/
updateUserItemForm.put = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateUserItem.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateUserItem.form = updateUserItemForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::destroyUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:353
* @route '/api/content-model/user-items/{contentModelItem}'
*/
export const destroyUserItem = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyUserItem.url(args, options),
    method: 'delete',
})

destroyUserItem.definition = {
    methods: ["delete"],
    url: '/api/content-model/user-items/{contentModelItem}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::destroyUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:353
* @route '/api/content-model/user-items/{contentModelItem}'
*/
destroyUserItem.url = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroyUserItem.definition.url
            .replace('{contentModelItem}', parsedArgs.contentModelItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::destroyUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:353
* @route '/api/content-model/user-items/{contentModelItem}'
*/
destroyUserItem.delete = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyUserItem.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::destroyUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:353
* @route '/api/content-model/user-items/{contentModelItem}'
*/
const destroyUserItemForm = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyUserItem.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\ContentModelItemController::destroyUserItem
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/ContentModelItemController.php:353
* @route '/api/content-model/user-items/{contentModelItem}'
*/
destroyUserItemForm.delete = (args: { contentModelItem: number | { id: number } } | [contentModelItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyUserItem.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyUserItem.form = destroyUserItemForm

const ContentModelItemController = { store, update, destroy, showList, searchItems, updateRelatedItems, index, show, storeUserItem, updateUserItem, destroyUserItem }

export default ContentModelItemController