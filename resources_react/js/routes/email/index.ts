import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailChangeController.php:21
* @route '/api/auth/edit-email'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: edit.url(options),
    method: 'post',
})

edit.definition = {
    methods: ["post"],
    url: '/api/auth/edit-email',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailChangeController.php:21
* @route '/api/auth/edit-email'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailChangeController.php:21
* @route '/api/auth/edit-email'
*/
edit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: edit.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailChangeController.php:21
* @route '/api/auth/edit-email'
*/
const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: edit.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\EmailChangeController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/EmailChangeController.php:21
* @route '/api/auth/edit-email'
*/
editForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: edit.url(options),
    method: 'post',
})

edit.form = editForm

/**
* @see \Creopse\Creopse\Http\Controllers\EmailController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/EmailController.php:14
* @route '/api/email'
*/
export const send = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

send.definition = {
    methods: ["post"],
    url: '/api/email',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\EmailController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/EmailController.php:14
* @route '/api/email'
*/
send.url = (options?: RouteQueryOptions) => {
    return send.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\EmailController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/EmailController.php:14
* @route '/api/email'
*/
send.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\EmailController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/EmailController.php:14
* @route '/api/email'
*/
const sendForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: send.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\EmailController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/EmailController.php:14
* @route '/api/email'
*/
sendForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: send.url(options),
    method: 'post',
})

send.form = sendForm

const email = {
    edit: Object.assign(edit, edit),
    send: Object.assign(send, send),
}

export default email