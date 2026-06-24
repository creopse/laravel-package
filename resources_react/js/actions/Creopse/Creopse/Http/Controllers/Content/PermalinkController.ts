import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:59
* @route '/api/permalinks'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/permalinks',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:59
* @route '/api/permalinks'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:59
* @route '/api/permalinks'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:59
* @route '/api/permalinks'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:59
* @route '/api/permalinks'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:89
* @route '/api/permalinks/{permalink}'
*/
export const update = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/permalinks/{permalink}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:89
* @route '/api/permalinks/{permalink}'
*/
update.url = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permalink: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { permalink: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            permalink: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        permalink: typeof args.permalink === 'object'
        ? args.permalink.id
        : args.permalink,
    }

    return update.definition.url
            .replace('{permalink}', parsedArgs.permalink.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:89
* @route '/api/permalinks/{permalink}'
*/
update.put = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:89
* @route '/api/permalinks/{permalink}'
*/
update.patch = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:89
* @route '/api/permalinks/{permalink}'
*/
const updateForm = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:89
* @route '/api/permalinks/{permalink}'
*/
updateForm.put = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:89
* @route '/api/permalinks/{permalink}'
*/
updateForm.patch = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:135
* @route '/api/permalinks/{permalink}'
*/
export const destroy = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/permalinks/{permalink}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:135
* @route '/api/permalinks/{permalink}'
*/
destroy.url = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permalink: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { permalink: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            permalink: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        permalink: typeof args.permalink === 'object'
        ? args.permalink.id
        : args.permalink,
    }

    return destroy.definition.url
            .replace('{permalink}', parsedArgs.permalink.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:135
* @route '/api/permalinks/{permalink}'
*/
destroy.delete = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:135
* @route '/api/permalinks/{permalink}'
*/
const destroyForm = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:135
* @route '/api/permalinks/{permalink}'
*/
destroyForm.delete = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::updateAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:103
* @route '/api/permalinks'
*/
export const updateAll = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateAll.url(options),
    method: 'put',
})

updateAll.definition = {
    methods: ["put"],
    url: '/api/permalinks',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::updateAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:103
* @route '/api/permalinks'
*/
updateAll.url = (options?: RouteQueryOptions) => {
    return updateAll.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::updateAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:103
* @route '/api/permalinks'
*/
updateAll.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateAll.url(options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::updateAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:103
* @route '/api/permalinks'
*/
const updateAllForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateAll.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::updateAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:103
* @route '/api/permalinks'
*/
updateAllForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateAll.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateAll.form = updateAllForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:17
* @route '/api/permalinks'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/permalinks',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:17
* @route '/api/permalinks'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:17
* @route '/api/permalinks'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:17
* @route '/api/permalinks'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:17
* @route '/api/permalinks'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:17
* @route '/api/permalinks'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:17
* @route '/api/permalinks'
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
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:81
* @route '/api/permalinks/{permalink}'
*/
export const show = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/permalinks/{permalink}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:81
* @route '/api/permalinks/{permalink}'
*/
show.url = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permalink: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { permalink: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            permalink: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        permalink: typeof args.permalink === 'object'
        ? args.permalink.id
        : args.permalink,
    }

    return show.definition.url
            .replace('{permalink}', parsedArgs.permalink.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:81
* @route '/api/permalinks/{permalink}'
*/
show.get = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:81
* @route '/api/permalinks/{permalink}'
*/
show.head = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:81
* @route '/api/permalinks/{permalink}'
*/
const showForm = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:81
* @route '/api/permalinks/{permalink}'
*/
showForm.get = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\PermalinkController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/PermalinkController.php:81
* @route '/api/permalinks/{permalink}'
*/
showForm.head = (args: { permalink: number | { id: number } } | [permalink: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const PermalinkController = { store, update, destroy, updateAll, index, show }

export default PermalinkController