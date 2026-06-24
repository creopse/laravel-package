import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\ServerController::configure
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/ServerController.php:37
* @route '/api/server/configure'
*/
export const configure = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: configure.url(options),
    method: 'post',
})

configure.definition = {
    methods: ["post"],
    url: '/api/server/configure',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\ServerController::configure
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/ServerController.php:37
* @route '/api/server/configure'
*/
configure.url = (options?: RouteQueryOptions) => {
    return configure.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\ServerController::configure
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/ServerController.php:37
* @route '/api/server/configure'
*/
configure.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: configure.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\ServerController::configure
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/ServerController.php:37
* @route '/api/server/configure'
*/
const configureForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: configure.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\ServerController::configure
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/ServerController.php:37
* @route '/api/server/configure'
*/
configureForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: configure.url(options),
    method: 'post',
})

configure.form = configureForm

const server = {
    configure: Object.assign(configure, configure),
}

export default server