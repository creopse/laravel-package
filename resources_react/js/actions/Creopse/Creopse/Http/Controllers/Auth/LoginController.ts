import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LoginController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LoginController.php:25
* @route '/api/auth/login'
*/
const LoginController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LoginController.url(options),
    method: 'post',
})

LoginController.definition = {
    methods: ["post"],
    url: '/api/auth/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LoginController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LoginController.php:25
* @route '/api/auth/login'
*/
LoginController.url = (options?: RouteQueryOptions) => {
    return LoginController.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LoginController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LoginController.php:25
* @route '/api/auth/login'
*/
LoginController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LoginController.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LoginController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LoginController.php:25
* @route '/api/auth/login'
*/
const LoginControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LoginController.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LoginController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LoginController.php:25
* @route '/api/auth/login'
*/
LoginControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LoginController.url(options),
    method: 'post',
})

LoginController.form = LoginControllerForm

export default LoginController