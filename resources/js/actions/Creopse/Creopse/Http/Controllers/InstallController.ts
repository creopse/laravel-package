import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\InstallController::finalize
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/InstallController.php:91
* @route '/api/install/finalize'
*/
export const finalize = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: finalize.url(options),
    method: 'post',
})

finalize.definition = {
    methods: ["post"],
    url: '/api/install/finalize',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\InstallController::finalize
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/InstallController.php:91
* @route '/api/install/finalize'
*/
finalize.url = (options?: RouteQueryOptions) => {
    return finalize.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\InstallController::finalize
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/InstallController.php:91
* @route '/api/install/finalize'
*/
finalize.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: finalize.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\InstallController::finalize
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/InstallController.php:91
* @route '/api/install/finalize'
*/
const finalizeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: finalize.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\InstallController::finalize
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/InstallController.php:91
* @route '/api/install/finalize'
*/
finalizeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: finalize.url(options),
    method: 'post',
})

finalize.form = finalizeForm

/**
* @see \Creopse\Creopse\Http\Controllers\InstallController::createAdmin
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/InstallController.php:27
* @route '/api/install/create-admin'
*/
export const createAdmin = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createAdmin.url(options),
    method: 'post',
})

createAdmin.definition = {
    methods: ["post"],
    url: '/api/install/create-admin',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\InstallController::createAdmin
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/InstallController.php:27
* @route '/api/install/create-admin'
*/
createAdmin.url = (options?: RouteQueryOptions) => {
    return createAdmin.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\InstallController::createAdmin
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/InstallController.php:27
* @route '/api/install/create-admin'
*/
createAdmin.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createAdmin.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\InstallController::createAdmin
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/InstallController.php:27
* @route '/api/install/create-admin'
*/
const createAdminForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createAdmin.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\InstallController::createAdmin
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/InstallController.php:27
* @route '/api/install/create-admin'
*/
createAdminForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createAdmin.url(options),
    method: 'post',
})

createAdmin.form = createAdminForm

const InstallController = { finalize, createAdmin }

export default InstallController