import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailChangeController.php:21
* @route '/api/auth/edit-email'
*/
const EmailChangeController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: EmailChangeController.url(options),
    method: 'post',
})

EmailChangeController.definition = {
    methods: ["post"],
    url: '/api/auth/edit-email',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailChangeController.php:21
* @route '/api/auth/edit-email'
*/
EmailChangeController.url = (options?: RouteQueryOptions) => {
    return EmailChangeController.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailChangeController.php:21
* @route '/api/auth/edit-email'
*/
EmailChangeController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: EmailChangeController.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailChangeController.php:21
* @route '/api/auth/edit-email'
*/
const EmailChangeControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: EmailChangeController.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailChangeController.php:21
* @route '/api/auth/edit-email'
*/
EmailChangeControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: EmailChangeController.url(options),
    method: 'post',
})

EmailChangeController.form = EmailChangeControllerForm

export default EmailChangeController