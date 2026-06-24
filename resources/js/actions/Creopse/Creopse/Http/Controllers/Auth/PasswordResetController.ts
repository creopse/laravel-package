import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:28
* @route '/api/auth/send-password-link'
*/
export const send = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

send.definition = {
    methods: ["post"],
    url: '/api/auth/send-password-link',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:28
* @route '/api/auth/send-password-link'
*/
send.url = (options?: RouteQueryOptions) => {
    return send.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:28
* @route '/api/auth/send-password-link'
*/
send.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:28
* @route '/api/auth/send-password-link'
*/
const sendForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: send.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::send
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:28
* @route '/api/auth/send-password-link'
*/
sendForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: send.url(options),
    method: 'post',
})

send.form = sendForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::reset
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:69
* @route '/api/auth/reset-password'
*/
export const reset = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

reset.definition = {
    methods: ["post"],
    url: '/api/auth/reset-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::reset
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:69
* @route '/api/auth/reset-password'
*/
reset.url = (options?: RouteQueryOptions) => {
    return reset.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::reset
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:69
* @route '/api/auth/reset-password'
*/
reset.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::reset
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:69
* @route '/api/auth/reset-password'
*/
const resetForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reset.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::reset
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:69
* @route '/api/auth/reset-password'
*/
resetForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reset.url(options),
    method: 'post',
})

reset.form = resetForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::edit
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:120
* @route '/api/auth/edit-password'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: edit.url(options),
    method: 'post',
})

edit.definition = {
    methods: ["post"],
    url: '/api/auth/edit-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::edit
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:120
* @route '/api/auth/edit-password'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::edit
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:120
* @route '/api/auth/edit-password'
*/
edit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: edit.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::edit
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:120
* @route '/api/auth/edit-password'
*/
const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: edit.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::edit
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:120
* @route '/api/auth/edit-password'
*/
editForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: edit.url(options),
    method: 'post',
})

edit.form = editForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::showResetForm
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:166
* @route '/reset-password/{token}'
*/
export const showResetForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showResetForm.url(args, options),
    method: 'get',
})

showResetForm.definition = {
    methods: ["get","head"],
    url: '/reset-password/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::showResetForm
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:166
* @route '/reset-password/{token}'
*/
showResetForm.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return showResetForm.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::showResetForm
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:166
* @route '/reset-password/{token}'
*/
showResetForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showResetForm.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::showResetForm
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:166
* @route '/reset-password/{token}'
*/
showResetForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showResetForm.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::showResetForm
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:166
* @route '/reset-password/{token}'
*/
const showResetFormForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showResetForm.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::showResetForm
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:166
* @route '/reset-password/{token}'
*/
showResetFormForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showResetForm.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::showResetForm
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:166
* @route '/reset-password/{token}'
*/
showResetFormForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showResetForm.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showResetForm.form = showResetFormForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::submitResetForm
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:185
* @route '/reset-password'
*/
export const submitResetForm = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitResetForm.url(options),
    method: 'post',
})

submitResetForm.definition = {
    methods: ["post"],
    url: '/reset-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::submitResetForm
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:185
* @route '/reset-password'
*/
submitResetForm.url = (options?: RouteQueryOptions) => {
    return submitResetForm.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::submitResetForm
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:185
* @route '/reset-password'
*/
submitResetForm.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitResetForm.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::submitResetForm
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:185
* @route '/reset-password'
*/
const submitResetFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submitResetForm.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\PasswordResetController::submitResetForm
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/PasswordResetController.php:185
* @route '/reset-password'
*/
submitResetFormForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submitResetForm.url(options),
    method: 'post',
})

submitResetForm.form = submitResetFormForm

const PasswordResetController = { send, reset, edit, showResetForm, submitResetForm }

export default PasswordResetController