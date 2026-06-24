import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\UsernameChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/UsernameChangeController.php:18
* @route '/api/auth/edit-username'
*/
const UsernameChangeController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UsernameChangeController.url(options),
    method: 'post',
})

UsernameChangeController.definition = {
    methods: ["post"],
    url: '/api/auth/edit-username',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\UsernameChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/UsernameChangeController.php:18
* @route '/api/auth/edit-username'
*/
UsernameChangeController.url = (options?: RouteQueryOptions) => {
    return UsernameChangeController.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\UsernameChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/UsernameChangeController.php:18
* @route '/api/auth/edit-username'
*/
UsernameChangeController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UsernameChangeController.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\UsernameChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/UsernameChangeController.php:18
* @route '/api/auth/edit-username'
*/
const UsernameChangeControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UsernameChangeController.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\UsernameChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/UsernameChangeController.php:18
* @route '/api/auth/edit-username'
*/
UsernameChangeControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: UsernameChangeController.url(options),
    method: 'post',
})

UsernameChangeController.form = UsernameChangeControllerForm

export default UsernameChangeController