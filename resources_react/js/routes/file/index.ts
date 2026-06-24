import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\FileController::upload
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:17
* @route '/api/file/upload'
*/
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/api/file/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::upload
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:17
* @route '/api/file/upload'
*/
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::upload
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:17
* @route '/api/file/upload'
*/
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::upload
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:17
* @route '/api/file/upload'
*/
const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::upload
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:17
* @route '/api/file/upload'
*/
uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

upload.form = uploadForm

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::replace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:84
* @route '/api/file/replace'
*/
export const replace = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: replace.url(options),
    method: 'post',
})

replace.definition = {
    methods: ["post"],
    url: '/api/file/replace',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::replace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:84
* @route '/api/file/replace'
*/
replace.url = (options?: RouteQueryOptions) => {
    return replace.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::replace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:84
* @route '/api/file/replace'
*/
replace.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: replace.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::replace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:84
* @route '/api/file/replace'
*/
const replaceForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: replace.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::replace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:84
* @route '/api/file/replace'
*/
replaceForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: replace.url(options),
    method: 'post',
})

replace.form = replaceForm

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::deleteMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:124
* @route '/api/file/delete'
*/
export const deleteMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deleteMethod.url(options),
    method: 'post',
})

deleteMethod.definition = {
    methods: ["post"],
    url: '/api/file/delete',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::deleteMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:124
* @route '/api/file/delete'
*/
deleteMethod.url = (options?: RouteQueryOptions) => {
    return deleteMethod.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::deleteMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:124
* @route '/api/file/delete'
*/
deleteMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deleteMethod.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::deleteMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:124
* @route '/api/file/delete'
*/
const deleteMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::deleteMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:124
* @route '/api/file/delete'
*/
deleteMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(options),
    method: 'post',
})

deleteMethod.form = deleteMethodForm

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::download
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:161
* @route '/api/file/download'
*/
export const download = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: download.url(options),
    method: 'post',
})

download.definition = {
    methods: ["post"],
    url: '/api/file/download',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::download
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:161
* @route '/api/file/download'
*/
download.url = (options?: RouteQueryOptions) => {
    return download.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::download
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:161
* @route '/api/file/download'
*/
download.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: download.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::download
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:161
* @route '/api/file/download'
*/
const downloadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: download.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::download
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:161
* @route '/api/file/download'
*/
downloadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: download.url(options),
    method: 'post',
})

download.form = downloadForm

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::check
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:191
* @route '/api/file/check'
*/
export const check = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: check.url(options),
    method: 'post',
})

check.definition = {
    methods: ["post"],
    url: '/api/file/check',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::check
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:191
* @route '/api/file/check'
*/
check.url = (options?: RouteQueryOptions) => {
    return check.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::check
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:191
* @route '/api/file/check'
*/
check.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: check.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::check
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:191
* @route '/api/file/check'
*/
const checkForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: check.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\FileController::check
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/FileController.php:191
* @route '/api/file/check'
*/
checkForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: check.url(options),
    method: 'post',
})

check.form = checkForm

const file = {
    upload: Object.assign(upload, upload),
    replace: Object.assign(replace, replace),
    delete: Object.assign(deleteMethod, deleteMethod),
    download: Object.assign(download, download),
    check: Object.assign(check, check),
}

export default file