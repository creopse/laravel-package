import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:60
* @route '/api/menu-item-types'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/menu-item-types',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:60
* @route '/api/menu-item-types'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:60
* @route '/api/menu-item-types'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:60
* @route '/api/menu-item-types'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:60
* @route '/api/menu-item-types'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:87
* @route '/api/menu-item-types/{menu_item_type}'
*/
export const update = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/menu-item-types/{menu_item_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:87
* @route '/api/menu-item-types/{menu_item_type}'
*/
update.url = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_item_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { menu_item_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            menu_item_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_item_type: typeof args.menu_item_type === 'object'
        ? args.menu_item_type.id
        : args.menu_item_type,
    }

    return update.definition.url
            .replace('{menu_item_type}', parsedArgs.menu_item_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:87
* @route '/api/menu-item-types/{menu_item_type}'
*/
update.put = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:87
* @route '/api/menu-item-types/{menu_item_type}'
*/
update.patch = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:87
* @route '/api/menu-item-types/{menu_item_type}'
*/
const updateForm = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:87
* @route '/api/menu-item-types/{menu_item_type}'
*/
updateForm.put = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:87
* @route '/api/menu-item-types/{menu_item_type}'
*/
updateForm.patch = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:101
* @route '/api/menu-item-types/{menu_item_type}'
*/
export const destroy = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/menu-item-types/{menu_item_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:101
* @route '/api/menu-item-types/{menu_item_type}'
*/
destroy.url = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_item_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { menu_item_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            menu_item_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_item_type: typeof args.menu_item_type === 'object'
        ? args.menu_item_type.id
        : args.menu_item_type,
    }

    return destroy.definition.url
            .replace('{menu_item_type}', parsedArgs.menu_item_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:101
* @route '/api/menu-item-types/{menu_item_type}'
*/
destroy.delete = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:101
* @route '/api/menu-item-types/{menu_item_type}'
*/
const destroyForm = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:101
* @route '/api/menu-item-types/{menu_item_type}'
*/
destroyForm.delete = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:17
* @route '/api/menu-item-types'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/menu-item-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:17
* @route '/api/menu-item-types'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:17
* @route '/api/menu-item-types'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:17
* @route '/api/menu-item-types'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:17
* @route '/api/menu-item-types'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:17
* @route '/api/menu-item-types'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:17
* @route '/api/menu-item-types'
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
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:79
* @route '/api/menu-item-types/{menu_item_type}'
*/
export const show = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/menu-item-types/{menu_item_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:79
* @route '/api/menu-item-types/{menu_item_type}'
*/
show.url = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_item_type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { menu_item_type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            menu_item_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_item_type: typeof args.menu_item_type === 'object'
        ? args.menu_item_type.id
        : args.menu_item_type,
    }

    return show.definition.url
            .replace('{menu_item_type}', parsedArgs.menu_item_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:79
* @route '/api/menu-item-types/{menu_item_type}'
*/
show.get = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:79
* @route '/api/menu-item-types/{menu_item_type}'
*/
show.head = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:79
* @route '/api/menu-item-types/{menu_item_type}'
*/
const showForm = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:79
* @route '/api/menu-item-types/{menu_item_type}'
*/
showForm.get = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\MenuItemTypeController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/MenuItemTypeController.php:79
* @route '/api/menu-item-types/{menu_item_type}'
*/
showForm.head = (args: { menu_item_type: string | number | { id: string | number } } | [menu_item_type: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const MenuItemTypeController = { store, update, destroy, index, show }

export default MenuItemTypeController