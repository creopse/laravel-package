import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import update603324 from './update'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:65
* @route '/api/sections'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/sections',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:65
* @route '/api/sections'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:65
* @route '/api/sections'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:65
* @route '/api/sections'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:65
* @route '/api/sections'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
export const update = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/sections/{section}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
update.url = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { section: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { section: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            section: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        section: typeof args.section === 'object'
        ? args.section.slug
        : args.section,
    }

    return update.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
update.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
update.patch = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
const updateForm = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
updateForm.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
updateForm.patch = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:293
* @route '/api/sections/{section}'
*/
export const destroy = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/sections/{section}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:293
* @route '/api/sections/{section}'
*/
destroy.url = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { section: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { section: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            section: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        section: typeof args.section === 'object'
        ? args.section.slug
        : args.section,
    }

    return destroy.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:293
* @route '/api/sections/{section}'
*/
destroy.delete = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:293
* @route '/api/sections/{section}'
*/
const destroyForm = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:293
* @route '/api/sections/{section}'
*/
destroyForm.delete = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/sections',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
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
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
export const show = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/sections/{section}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
show.url = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { section: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { section: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            section: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        section: typeof args.section === 'object'
        ? args.section.slug
        : args.section,
    }

    return show.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
show.get = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
show.head = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
const showForm = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
showForm.get = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
showForm.head = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const sections = {
    store: Object.assign(store, store),
    update: Object.assign(update, update603324),
    destroy: Object.assign(destroy, destroy),
    show: Object.assign(show, show),
    index: Object.assign(index, index),
}

export default sections