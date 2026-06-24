import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
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
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:104
* @route '/api/media-files/list'
*/
export const showList = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: showList.url(options),
    method: 'post',
})

showList.definition = {
    methods: ["post"],
    url: '/api/media-files/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:104
* @route '/api/media-files/list'
*/
showList.url = (options?: RouteQueryOptions) => {
    return showList.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:104
* @route '/api/media-files/list'
*/
showList.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: showList.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:104
* @route '/api/media-files/list'
*/
const showListForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: showList.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:104
* @route '/api/media-files/list'
*/
showListForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: showList.url(options),
    method: 'post',
})

showList.form = showListForm

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showListByPaths
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:114
* @route '/api/media-files/paths/list'
*/
export const showListByPaths = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: showListByPaths.url(options),
    method: 'post',
})

showListByPaths.definition = {
    methods: ["post"],
    url: '/api/media-files/paths/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showListByPaths
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:114
* @route '/api/media-files/paths/list'
*/
showListByPaths.url = (options?: RouteQueryOptions) => {
    return showListByPaths.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showListByPaths
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:114
* @route '/api/media-files/paths/list'
*/
showListByPaths.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: showListByPaths.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showListByPaths
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:114
* @route '/api/media-files/paths/list'
*/
const showListByPathsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: showListByPaths.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showListByPaths
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:114
* @route '/api/media-files/paths/list'
*/
showListByPathsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: showListByPaths.url(options),
    method: 'post',
})

showListByPaths.form = showListByPathsForm

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
export const showMonthsList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showMonthsList.url(options),
    method: 'get',
})

showMonthsList.definition = {
    methods: ["get","head"],
    url: '/api/media-files/list/months',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
showMonthsList.url = (options?: RouteQueryOptions) => {
    return showMonthsList.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
showMonthsList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showMonthsList.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
showMonthsList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showMonthsList.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
const showMonthsListForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showMonthsList.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
showMonthsListForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showMonthsList.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::showMonthsList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:127
* @route '/api/media-files/list/months'
*/
showMonthsListForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showMonthsList.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showMonthsList.form = showMonthsListForm

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::searchMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
export const searchMediaFiles = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchMediaFiles.url(args, options),
    method: 'get',
})

searchMediaFiles.definition = {
    methods: ["get","head"],
    url: '/api/media-files/search/{query?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::searchMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
searchMediaFiles.url = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return searchMediaFiles.definition.url
            .replace('{query?}', parsedArgs.query?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::searchMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
searchMediaFiles.get = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchMediaFiles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::searchMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
searchMediaFiles.head = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: searchMediaFiles.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::searchMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
const searchMediaFilesForm = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchMediaFiles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::searchMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
searchMediaFilesForm.get = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchMediaFiles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::searchMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:144
* @route '/api/media-files/search/{query?}'
*/
searchMediaFilesForm.head = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchMediaFiles.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

searchMediaFiles.form = searchMediaFilesForm

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
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::forceDestroyAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:436
* @route '/api/media-files/force/all'
*/
export const forceDestroyAll = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroyAll.url(options),
    method: 'delete',
})

forceDestroyAll.definition = {
    methods: ["delete"],
    url: '/api/media-files/force/all',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::forceDestroyAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:436
* @route '/api/media-files/force/all'
*/
forceDestroyAll.url = (options?: RouteQueryOptions) => {
    return forceDestroyAll.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::forceDestroyAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:436
* @route '/api/media-files/force/all'
*/
forceDestroyAll.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroyAll.url(options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::forceDestroyAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:436
* @route '/api/media-files/force/all'
*/
const forceDestroyAllForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDestroyAll.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::forceDestroyAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:436
* @route '/api/media-files/force/all'
*/
forceDestroyAllForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDestroyAll.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

forceDestroyAll.form = forceDestroyAllForm

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:420
* @route '/api/media-files/force/{mediaFile}'
*/
export const forceDestroy = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

forceDestroy.definition = {
    methods: ["delete"],
    url: '/api/media-files/force/{mediaFile}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:420
* @route '/api/media-files/force/{mediaFile}'
*/
forceDestroy.url = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return forceDestroy.definition.url
            .replace('{mediaFile}', parsedArgs.mediaFile.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:420
* @route '/api/media-files/force/{mediaFile}'
*/
forceDestroy.delete = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:420
* @route '/api/media-files/force/{mediaFile}'
*/
const forceDestroyForm = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\MediaFileController::forceDestroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/MediaFileController.php:420
* @route '/api/media-files/force/{mediaFile}'
*/
forceDestroyForm.delete = (args: { mediaFile: number | { id: number } } | [mediaFile: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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

const MediaFileController = { index, show, showList, showListByPaths, showMonthsList, searchMediaFiles, upload, replace, deleteMethod, destroy, forceDestroyAll, forceDestroy, restore, delete: deleteMethod }

export default MediaFileController