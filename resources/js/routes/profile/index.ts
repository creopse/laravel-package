import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::register
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:112
* @route '/api/auth/profile'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/api/auth/profile',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::register
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:112
* @route '/api/auth/profile'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::register
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:112
* @route '/api/auth/profile'
*/
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::register
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:112
* @route '/api/auth/profile'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::register
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:112
* @route '/api/auth/profile'
*/
registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

register.form = registerForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:211
* @route '/api/auth/profile/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/auth/profile/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:211
* @route '/api/auth/profile/{id}'
*/
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:211
* @route '/api/auth/profile/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:211
* @route '/api/auth/profile/{id}'
*/
const updateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:211
* @route '/api/auth/profile/{id}'
*/
updateForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const profile = {
    register: Object.assign(register, register),
    update: Object.assign(update, update),
}

export default profile