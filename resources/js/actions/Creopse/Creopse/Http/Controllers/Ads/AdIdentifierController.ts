import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:25
* @route '/api/ad-identifiers'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/ad-identifiers',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:25
* @route '/api/ad-identifiers'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:25
* @route '/api/ad-identifiers'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:25
* @route '/api/ad-identifiers'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:25
* @route '/api/ad-identifiers'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:55
* @route '/api/ad-identifiers/{ad_identifier}'
*/
export const update = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/ad-identifiers/{ad_identifier}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:55
* @route '/api/ad-identifiers/{ad_identifier}'
*/
update.url = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ad_identifier: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { ad_identifier: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            ad_identifier: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        ad_identifier: typeof args.ad_identifier === 'object'
        ? args.ad_identifier.id
        : args.ad_identifier,
    }

    return update.definition.url
            .replace('{ad_identifier}', parsedArgs.ad_identifier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:55
* @route '/api/ad-identifiers/{ad_identifier}'
*/
update.put = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:55
* @route '/api/ad-identifiers/{ad_identifier}'
*/
update.patch = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:55
* @route '/api/ad-identifiers/{ad_identifier}'
*/
const updateForm = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:55
* @route '/api/ad-identifiers/{ad_identifier}'
*/
updateForm.put = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:55
* @route '/api/ad-identifiers/{ad_identifier}'
*/
updateForm.patch = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:69
* @route '/api/ad-identifiers/{ad_identifier}'
*/
export const destroy = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/ad-identifiers/{ad_identifier}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:69
* @route '/api/ad-identifiers/{ad_identifier}'
*/
destroy.url = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ad_identifier: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { ad_identifier: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            ad_identifier: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        ad_identifier: typeof args.ad_identifier === 'object'
        ? args.ad_identifier.id
        : args.ad_identifier,
    }

    return destroy.definition.url
            .replace('{ad_identifier}', parsedArgs.ad_identifier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:69
* @route '/api/ad-identifiers/{ad_identifier}'
*/
destroy.delete = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:69
* @route '/api/ad-identifiers/{ad_identifier}'
*/
const destroyForm = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:69
* @route '/api/ad-identifiers/{ad_identifier}'
*/
destroyForm.delete = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:17
* @route '/api/ad-identifiers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/ad-identifiers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:17
* @route '/api/ad-identifiers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:17
* @route '/api/ad-identifiers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:17
* @route '/api/ad-identifiers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:17
* @route '/api/ad-identifiers'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:17
* @route '/api/ad-identifiers'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:17
* @route '/api/ad-identifiers'
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
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:47
* @route '/api/ad-identifiers/{ad_identifier}'
*/
export const show = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/ad-identifiers/{ad_identifier}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:47
* @route '/api/ad-identifiers/{ad_identifier}'
*/
show.url = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ad_identifier: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { ad_identifier: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            ad_identifier: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        ad_identifier: typeof args.ad_identifier === 'object'
        ? args.ad_identifier.id
        : args.ad_identifier,
    }

    return show.definition.url
            .replace('{ad_identifier}', parsedArgs.ad_identifier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:47
* @route '/api/ad-identifiers/{ad_identifier}'
*/
show.get = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:47
* @route '/api/ad-identifiers/{ad_identifier}'
*/
show.head = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:47
* @route '/api/ad-identifiers/{ad_identifier}'
*/
const showForm = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:47
* @route '/api/ad-identifiers/{ad_identifier}'
*/
showForm.get = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Ads/AdIdentifierController.php:47
* @route '/api/ad-identifiers/{ad_identifier}'
*/
showForm.head = (args: { ad_identifier: string | { id: string } } | [ad_identifier: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const AdIdentifierController = { store, update, destroy, index, show }

export default AdIdentifierController