import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
import list7365a2 from './list'
import paths from './paths'
import force from './force'
/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:25
* @route '/api/media-files'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/media-files',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:25
* @route '/api/media-files'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:25
* @route '/api/media-files'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:25
* @route '/api/media-files'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:25
* @route '/api/media-files'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:25
* @route '/api/media-files'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:25
* @route '/api/media-files'
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
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:96
* @route '/api/media-files/{mediaFile}'
*/
export const show = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/media-files/{mediaFile}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:96
* @route '/api/media-files/{mediaFile}'
*/
show.url = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mediaFile: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { mediaFile: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            mediaFile: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        mediaFile: typeof args.mediaFile === 'object'
        ? args.mediaFile.id
        : args.mediaFile,
    }

    return show.definition.url
            .replace('{mediaFile}', parsedArgs.mediaFile.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:96
* @route '/api/media-files/{mediaFile}'
*/
show.get = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:96
* @route '/api/media-files/{mediaFile}'
*/
show.head = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:96
* @route '/api/media-files/{mediaFile}'
*/
const showForm = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:96
* @route '/api/media-files/{mediaFile}'
*/
showForm.get = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:96
* @route '/api/media-files/{mediaFile}'
*/
showForm.head = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:104
* @route '/api/media-files/list'
*/
export const list = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: list.url(options),
    method: 'post',
})

list.definition = {
    methods: ["post"],
    url: '/api/media-files/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:104
* @route '/api/media-files/list'
*/
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:104
* @route '/api/media-files/list'
*/
list.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: list.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:104
* @route '/api/media-files/list'
*/
const listForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: list.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::list
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:104
* @route '/api/media-files/list'
*/
listForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: list.url(options),
    method: 'post',
})

list.form = listForm

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
export const search = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(args, options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/api/media-files/search/{query?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
search.url = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { query: args }
    }

    if (Array.isArray(args)) {
        args = {
            query: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "query",
    ])

    const parsedArgs = {
        query: args?.query,
    }

    return search.definition.url
            .replace('{query?}', parsedArgs.query?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
search.get = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
search.head = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
const searchForm = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
searchForm.get = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::search
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
searchForm.head = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::upload
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:159
* @route '/api/media-files/upload'
*/
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/api/media-files/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::upload
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:159
* @route '/api/media-files/upload'
*/
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::upload
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:159
* @route '/api/media-files/upload'
*/
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::upload
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:159
* @route '/api/media-files/upload'
*/
const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::upload
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:159
* @route '/api/media-files/upload'
*/
uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

upload.form = uploadForm

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::replace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:257
* @route '/api/media-files/replace/{mediaFile}'
*/
export const replace = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: replace.url(args, options),
    method: 'post',
})

replace.definition = {
    methods: ["post"],
    url: '/api/media-files/replace/{mediaFile}',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::replace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:257
* @route '/api/media-files/replace/{mediaFile}'
*/
replace.url = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mediaFile: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { mediaFile: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            mediaFile: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        mediaFile: typeof args.mediaFile === 'object'
        ? args.mediaFile.id
        : args.mediaFile,
    }

    return replace.definition.url
            .replace('{mediaFile}', parsedArgs.mediaFile.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::replace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:257
* @route '/api/media-files/replace/{mediaFile}'
*/
replace.post = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: replace.url(args, options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::replace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:257
* @route '/api/media-files/replace/{mediaFile}'
*/
const replaceForm = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: replace.url(args, options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::replace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:257
* @route '/api/media-files/replace/{mediaFile}'
*/
replaceForm.post = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: replace.url(args, options),
    method: 'post',
})

replace.form = replaceForm

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::deleteMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:360
* @route '/api/media-files/delete'
*/
export const deleteMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deleteMethod.url(options),
    method: 'post',
})

deleteMethod.definition = {
    methods: ["post"],
    url: '/api/media-files/delete',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::deleteMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:360
* @route '/api/media-files/delete'
*/
deleteMethod.url = (options?: RouteQueryOptions) => {
    return deleteMethod.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::deleteMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:360
* @route '/api/media-files/delete'
*/
deleteMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deleteMethod.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::deleteMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:360
* @route '/api/media-files/delete'
*/
const deleteMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::deleteMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:360
* @route '/api/media-files/delete'
*/
deleteMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(options),
    method: 'post',
})

deleteMethod.form = deleteMethodForm

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:403
* @route '/api/media-files/{mediaFile}'
*/
export const destroy = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/media-files/{mediaFile}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:403
* @route '/api/media-files/{mediaFile}'
*/
destroy.url = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mediaFile: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { mediaFile: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            mediaFile: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        mediaFile: typeof args.mediaFile === 'object'
        ? args.mediaFile.id
        : args.mediaFile,
    }

    return destroy.definition.url
            .replace('{mediaFile}', parsedArgs.mediaFile.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:403
* @route '/api/media-files/{mediaFile}'
*/
destroy.delete = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:403
* @route '/api/media-files/{mediaFile}'
*/
const destroyForm = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:403
* @route '/api/media-files/{mediaFile}'
*/
destroyForm.delete = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:453
* @route '/api/media-files/restore/{mediaFile}'
*/
export const restore = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/api/media-files/restore/{mediaFile}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:453
* @route '/api/media-files/restore/{mediaFile}'
*/
restore.url = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mediaFile: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { mediaFile: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            mediaFile: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        mediaFile: typeof args.mediaFile === 'object'
        ? args.mediaFile.id
        : args.mediaFile,
    }

    return restore.definition.url
            .replace('{mediaFile}', parsedArgs.mediaFile.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:453
* @route '/api/media-files/restore/{mediaFile}'
*/
restore.put = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:453
* @route '/api/media-files/restore/{mediaFile}'
*/
const restoreForm = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:453
* @route '/api/media-files/restore/{mediaFile}'
*/
restoreForm.put = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

restore.form = restoreForm

const mediaFiles = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    list: Object.assign(list, list7365a2),
    paths: Object.assign(paths, paths),
    search: Object.assign(search, search),
    upload: Object.assign(upload, upload),
    replace: Object.assign(replace, replace),
    delete: Object.assign(deleteMethod, deleteMethod),
    destroy: Object.assign(destroy, destroy),
    force: Object.assign(force, force),
    restore: Object.assign(restore, restore),
}

export default mediaFiles