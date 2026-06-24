import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::registerUser
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:39
* @route '/api/auth/register'
*/
export const registerUser = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registerUser.url(options),
    method: 'post',
})

registerUser.definition = {
    methods: ["post"],
    url: '/api/auth/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::registerUser
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:39
* @route '/api/auth/register'
*/
registerUser.url = (options?: RouteQueryOptions) => {
    return registerUser.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::registerUser
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:39
* @route '/api/auth/register'
*/
registerUser.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registerUser.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::registerUser
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:39
* @route '/api/auth/register'
*/
const registerUserForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: registerUser.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::registerUser
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:39
* @route '/api/auth/register'
*/
registerUserForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: registerUser.url(options),
    method: 'post',
})

registerUser.form = registerUserForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::registerProfile
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:112
* @route '/api/auth/profile'
*/
export const registerProfile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registerProfile.url(options),
    method: 'post',
})

registerProfile.definition = {
    methods: ["post"],
    url: '/api/auth/profile',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::registerProfile
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:112
* @route '/api/auth/profile'
*/
registerProfile.url = (options?: RouteQueryOptions) => {
    return registerProfile.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::registerProfile
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:112
* @route '/api/auth/profile'
*/
registerProfile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registerProfile.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::registerProfile
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:112
* @route '/api/auth/profile'
*/
const registerProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: registerProfile.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::registerProfile
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:112
* @route '/api/auth/profile'
*/
registerProfileForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: registerProfile.url(options),
    method: 'post',
})

registerProfile.form = registerProfileForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::updateProfile
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:211
* @route '/api/auth/profile/{id}'
*/
export const updateProfile = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfile.url(args, options),
    method: 'put',
})

updateProfile.definition = {
    methods: ["put"],
    url: '/api/auth/profile/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::updateProfile
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:211
* @route '/api/auth/profile/{id}'
*/
updateProfile.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updateProfile.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::updateProfile
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:211
* @route '/api/auth/profile/{id}'
*/
updateProfile.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfile.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::updateProfile
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:211
* @route '/api/auth/profile/{id}'
*/
const updateProfileForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProfile.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::updateProfile
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:211
* @route '/api/auth/profile/{id}'
*/
updateProfileForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProfile.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateProfile.form = updateProfileForm

const RegistrationController = { registerUser, registerProfile, updateProfile }

export default RegistrationController