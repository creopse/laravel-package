import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::updatePosition
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:134
* @route '/api/video-categories/position'
*/
export const updatePosition = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePosition.url(options),
    method: 'put',
})

updatePosition.definition = {
    methods: ["put"],
    url: '/api/video-categories/position',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::updatePosition
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:134
* @route '/api/video-categories/position'
*/
updatePosition.url = (options?: RouteQueryOptions) => {
    return updatePosition.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::updatePosition
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:134
* @route '/api/video-categories/position'
*/
updatePosition.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePosition.url(options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::updatePosition
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:134
* @route '/api/video-categories/position'
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
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::updatePosition
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:134
* @route '/api/video-categories/position'
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
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:39
* @route '/api/video-categories'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/video-categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:39
* @route '/api/video-categories'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:39
* @route '/api/video-categories'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:39
* @route '/api/video-categories'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:39
* @route '/api/video-categories'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:120
* @route '/api/video-categories/{video_category}'
*/
export const update = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/video-categories/{video_category}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:120
* @route '/api/video-categories/{video_category}'
*/
update.url = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { video_category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { video_category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            video_category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        video_category: typeof args.video_category === 'object'
        ? args.video_category.id
        : args.video_category,
    }

    return update.definition.url
            .replace('{video_category}', parsedArgs.video_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:120
* @route '/api/video-categories/{video_category}'
*/
update.put = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:120
* @route '/api/video-categories/{video_category}'
*/
update.patch = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:120
* @route '/api/video-categories/{video_category}'
*/
const updateForm = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:120
* @route '/api/video-categories/{video_category}'
*/
updateForm.put = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:120
* @route '/api/video-categories/{video_category}'
*/
updateForm.patch = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:154
* @route '/api/video-categories/{video_category}'
*/
export const destroy = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/video-categories/{video_category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:154
* @route '/api/video-categories/{video_category}'
*/
destroy.url = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { video_category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { video_category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            video_category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        video_category: typeof args.video_category === 'object'
        ? args.video_category.id
        : args.video_category,
    }

    return destroy.definition.url
            .replace('{video_category}', parsedArgs.video_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:154
* @route '/api/video-categories/{video_category}'
*/
destroy.delete = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:154
* @route '/api/video-categories/{video_category}'
*/
const destroyForm = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:154
* @route '/api/video-categories/{video_category}'
*/
destroyForm.delete = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:168
* @route '/api/video-categories/force/{videoCategory}'
*/
export const forceDestroy = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

forceDestroy.definition = {
    methods: ["delete"],
    url: '/api/video-categories/force/{videoCategory}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:168
* @route '/api/video-categories/force/{videoCategory}'
*/
forceDestroy.url = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { videoCategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { videoCategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            videoCategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        videoCategory: typeof args.videoCategory === 'object'
        ? args.videoCategory.id
        : args.videoCategory,
    }

    return forceDestroy.definition.url
            .replace('{videoCategory}', parsedArgs.videoCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:168
* @route '/api/video-categories/force/{videoCategory}'
*/
forceDestroy.delete = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:168
* @route '/api/video-categories/force/{videoCategory}'
*/
const forceDestroyForm = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:168
* @route '/api/video-categories/force/{videoCategory}'
*/
forceDestroyForm.delete = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:182
* @route '/api/video-categories/restore/{videoCategory}'
*/
export const restore = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/api/video-categories/restore/{videoCategory}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:182
* @route '/api/video-categories/restore/{videoCategory}'
*/
restore.url = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { videoCategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { videoCategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            videoCategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        videoCategory: typeof args.videoCategory === 'object'
        ? args.videoCategory.id
        : args.videoCategory,
    }

    return restore.definition.url
            .replace('{videoCategory}', parsedArgs.videoCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:182
* @route '/api/video-categories/restore/{videoCategory}'
*/
restore.put = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:182
* @route '/api/video-categories/restore/{videoCategory}'
*/
const restoreForm = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:182
* @route '/api/video-categories/restore/{videoCategory}'
*/
restoreForm.put = (args: { videoCategory: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:23
* @route '/api/video-categories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/video-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:23
* @route '/api/video-categories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:23
* @route '/api/video-categories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:23
* @route '/api/video-categories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:23
* @route '/api/video-categories'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:23
* @route '/api/video-categories'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:23
* @route '/api/video-categories'
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
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:63
* @route '/api/video-categories/{video_category}'
*/
export const show = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/video-categories/{video_category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:63
* @route '/api/video-categories/{video_category}'
*/
show.url = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { video_category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { video_category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            video_category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        video_category: typeof args.video_category === 'object'
        ? args.video_category.id
        : args.video_category,
    }

    return show.definition.url
            .replace('{video_category}', parsedArgs.video_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:63
* @route '/api/video-categories/{video_category}'
*/
show.get = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:63
* @route '/api/video-categories/{video_category}'
*/
show.head = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:63
* @route '/api/video-categories/{video_category}'
*/
const showForm = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:63
* @route '/api/video-categories/{video_category}'
*/
showForm.get = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:63
* @route '/api/video-categories/{video_category}'
*/
showForm.head = (args: { video_category: number | { id: number } } | [video_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::indexWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:31
* @route '/api/video-categories/items'
*/
export const indexWithItems = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexWithItems.url(options),
    method: 'get',
})

indexWithItems.definition = {
    methods: ["get","head"],
    url: '/api/video-categories/items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::indexWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:31
* @route '/api/video-categories/items'
*/
indexWithItems.url = (options?: RouteQueryOptions) => {
    return indexWithItems.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::indexWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:31
* @route '/api/video-categories/items'
*/
indexWithItems.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexWithItems.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::indexWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:31
* @route '/api/video-categories/items'
*/
indexWithItems.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexWithItems.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::indexWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:31
* @route '/api/video-categories/items'
*/
const indexWithItemsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexWithItems.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::indexWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:31
* @route '/api/video-categories/items'
*/
indexWithItemsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexWithItems.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::indexWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:31
* @route '/api/video-categories/items'
*/
indexWithItemsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexWithItems.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexWithItems.form = indexWithItemsForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::showWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
export const showWithItems = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showWithItems.url(args, options),
    method: 'get',
})

showWithItems.definition = {
    methods: ["get","head"],
    url: '/api/video-categories/items/{videoCategory?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::showWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
showWithItems.url = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { videoCategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { videoCategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            videoCategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "videoCategory",
    ])

    const parsedArgs = {
        videoCategory: typeof args?.videoCategory === 'object'
        ? args.videoCategory.id
        : args?.videoCategory,
    }

    return showWithItems.definition.url
            .replace('{videoCategory?}', parsedArgs.videoCategory?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::showWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
showWithItems.get = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showWithItems.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::showWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
showWithItems.head = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showWithItems.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::showWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
const showWithItemsForm = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showWithItems.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::showWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
showWithItemsForm.get = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showWithItems.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoCategoryController::showWithItems
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoCategoryController.php:71
* @route '/api/video-categories/items/{videoCategory?}'
*/
showWithItemsForm.head = (args?: { videoCategory?: number | { id: number } } | [videoCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showWithItems.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showWithItems.form = showWithItemsForm

const VideoCategoryController = { updatePosition, store, update, destroy, forceDestroy, restore, index, show, indexWithItems, showWithItems }

export default VideoCategoryController