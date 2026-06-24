import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::link
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:69
* @route '/api/auth/reset-password'
*/
export const link = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: link.url(options),
    method: 'post',
})

link.definition = {
    methods: ["post"],
    url: '/api/auth/reset-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::link
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:69
* @route '/api/auth/reset-password'
*/
link.url = (options?: RouteQueryOptions) => {
    return link.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::link
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:69
* @route '/api/auth/reset-password'
*/
link.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: link.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::link
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:69
* @route '/api/auth/reset-password'
*/
const linkForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: link.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::link
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:69
* @route '/api/auth/reset-password'
*/
linkForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: link.url(options),
    method: 'post',
})

link.form = linkForm
