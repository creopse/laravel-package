import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserProfileController::registerProfile
* @see app/Http/Controllers/UserProfileController.php:26
* @route '/api/user-profile'
*/
export const registerProfile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registerProfile.url(options),
    method: 'post',
})

registerProfile.definition = {
    methods: ["post"],
    url: '/api/user-profile',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserProfileController::registerProfile
* @see app/Http/Controllers/UserProfileController.php:26
* @route '/api/user-profile'
*/
registerProfile.url = (options?: RouteQueryOptions) => {
    return registerProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserProfileController::registerProfile
* @see app/Http/Controllers/UserProfileController.php:26
* @route '/api/user-profile'
*/
registerProfile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registerProfile.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserProfileController::registerProfile
* @see app/Http/Controllers/UserProfileController.php:26
* @route '/api/user-profile'
*/
const registerProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: registerProfile.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserProfileController::registerProfile
* @see app/Http/Controllers/UserProfileController.php:26
* @route '/api/user-profile'
*/
registerProfileForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: registerProfile.url(options),
    method: 'post',
})

registerProfile.form = registerProfileForm

/**
* @see \App\Http\Controllers\UserProfileController::updateProfile
* @see app/Http/Controllers/UserProfileController.php:122
* @route '/api/user-profile/{id}'
*/
export const updateProfile = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfile.url(args, options),
    method: 'put',
})

updateProfile.definition = {
    methods: ["put"],
    url: '/api/user-profile/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\UserProfileController::updateProfile
* @see app/Http/Controllers/UserProfileController.php:122
* @route '/api/user-profile/{id}'
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
* @see \App\Http\Controllers\UserProfileController::updateProfile
* @see app/Http/Controllers/UserProfileController.php:122
* @route '/api/user-profile/{id}'
*/
updateProfile.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfile.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\UserProfileController::updateProfile
* @see app/Http/Controllers/UserProfileController.php:122
* @route '/api/user-profile/{id}'
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
* @see \App\Http\Controllers\UserProfileController::updateProfile
* @see app/Http/Controllers/UserProfileController.php:122
* @route '/api/user-profile/{id}'
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

const UserProfileController = { registerProfile, updateProfile }

export default UserProfileController