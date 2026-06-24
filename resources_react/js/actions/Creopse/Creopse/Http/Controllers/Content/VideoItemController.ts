import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:158
* @route '/api/video-items'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/video-items',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:158
* @route '/api/video-items'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:158
* @route '/api/video-items'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:158
* @route '/api/video-items'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:158
* @route '/api/video-items'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:278
* @route '/api/video-items/{video_item}'
*/
export const update = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/video-items/{video_item}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:278
* @route '/api/video-items/{video_item}'
*/
update.url = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { video_item: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { video_item: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            video_item: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        video_item: typeof args.video_item === 'object'
        ? args.video_item.id
        : args.video_item,
    }

    return update.definition.url
            .replace('{video_item}', parsedArgs.video_item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:278
* @route '/api/video-items/{video_item}'
*/
update.put = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:278
* @route '/api/video-items/{video_item}'
*/
update.patch = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:278
* @route '/api/video-items/{video_item}'
*/
const updateForm = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:278
* @route '/api/video-items/{video_item}'
*/
updateForm.put = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:278
* @route '/api/video-items/{video_item}'
*/
updateForm.patch = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:351
* @route '/api/video-items/{video_item}'
*/
export const destroy = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/video-items/{video_item}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:351
* @route '/api/video-items/{video_item}'
*/
destroy.url = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { video_item: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { video_item: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            video_item: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        video_item: typeof args.video_item === 'object'
        ? args.video_item.id
        : args.video_item,
    }

    return destroy.definition.url
            .replace('{video_item}', parsedArgs.video_item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:351
* @route '/api/video-items/{video_item}'
*/
destroy.delete = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:351
* @route '/api/video-items/{video_item}'
*/
const destroyForm = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:351
* @route '/api/video-items/{video_item}'
*/
destroyForm.delete = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:365
* @route '/api/video-items/force/{videoItem}'
*/
export const forceDestroy = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

forceDestroy.definition = {
    methods: ["delete"],
    url: '/api/video-items/force/{videoItem}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:365
* @route '/api/video-items/force/{videoItem}'
*/
forceDestroy.url = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { videoItem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { videoItem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            videoItem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        videoItem: typeof args.videoItem === 'object'
        ? args.videoItem.id
        : args.videoItem,
    }

    return forceDestroy.definition.url
            .replace('{videoItem}', parsedArgs.videoItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:365
* @route '/api/video-items/force/{videoItem}'
*/
forceDestroy.delete = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:365
* @route '/api/video-items/force/{videoItem}'
*/
const forceDestroyForm = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:365
* @route '/api/video-items/force/{videoItem}'
*/
forceDestroyForm.delete = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:379
* @route '/api/video-items/restore/{videoItem}'
*/
export const restore = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/api/video-items/restore/{videoItem}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:379
* @route '/api/video-items/restore/{videoItem}'
*/
restore.url = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { videoItem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { videoItem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            videoItem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        videoItem: typeof args.videoItem === 'object'
        ? args.videoItem.id
        : args.videoItem,
    }

    return restore.definition.url
            .replace('{videoItem}', parsedArgs.videoItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:379
* @route '/api/video-items/restore/{videoItem}'
*/
restore.put = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:379
* @route '/api/video-items/restore/{videoItem}'
*/
const restoreForm = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:379
* @route '/api/video-items/restore/{videoItem}'
*/
restoreForm.put = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::updateYoutubeChannelVideos
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:296
* @route '/api/video-items/youtube/channel-videos'
*/
export const updateYoutubeChannelVideos = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateYoutubeChannelVideos.url(options),
    method: 'put',
})

updateYoutubeChannelVideos.definition = {
    methods: ["put"],
    url: '/api/video-items/youtube/channel-videos',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::updateYoutubeChannelVideos
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:296
* @route '/api/video-items/youtube/channel-videos'
*/
updateYoutubeChannelVideos.url = (options?: RouteQueryOptions) => {
    return updateYoutubeChannelVideos.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::updateYoutubeChannelVideos
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:296
* @route '/api/video-items/youtube/channel-videos'
*/
updateYoutubeChannelVideos.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateYoutubeChannelVideos.url(options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::updateYoutubeChannelVideos
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:296
* @route '/api/video-items/youtube/channel-videos'
*/
const updateYoutubeChannelVideosForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateYoutubeChannelVideos.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::updateYoutubeChannelVideos
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:296
* @route '/api/video-items/youtube/channel-videos'
*/
updateYoutubeChannelVideosForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateYoutubeChannelVideos.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateYoutubeChannelVideos.form = updateYoutubeChannelVideosForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:22
* @route '/api/video-items'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/video-items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:22
* @route '/api/video-items'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:22
* @route '/api/video-items'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:22
* @route '/api/video-items'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:22
* @route '/api/video-items'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:22
* @route '/api/video-items'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:22
* @route '/api/video-items'
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
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:270
* @route '/api/video-items/{video_item}'
*/
export const show = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/video-items/{video_item}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:270
* @route '/api/video-items/{video_item}'
*/
show.url = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { video_item: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { video_item: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            video_item: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        video_item: typeof args.video_item === 'object'
        ? args.video_item.id
        : args.video_item,
    }

    return show.definition.url
            .replace('{video_item}', parsedArgs.video_item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:270
* @route '/api/video-items/{video_item}'
*/
show.get = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:270
* @route '/api/video-items/{video_item}'
*/
show.head = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:270
* @route '/api/video-items/{video_item}'
*/
const showForm = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:270
* @route '/api/video-items/{video_item}'
*/
showForm.get = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:270
* @route '/api/video-items/{video_item}'
*/
showForm.head = (args: { video_item: number | { id: number } } | [video_item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const VideoItemController = { store, update, destroy, forceDestroy, restore, updateYoutubeChannelVideos, index, show }

export default VideoItemController