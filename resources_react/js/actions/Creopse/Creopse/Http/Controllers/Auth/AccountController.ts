import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\AccountController::disableAccount
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/AccountController.php:16
* @route '/api/auth/disable-account'
*/
export const disableAccount = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: disableAccount.url(options),
    method: 'get',
})

disableAccount.definition = {
    methods: ["get","head"],
    url: '/api/auth/disable-account',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\AccountController::disableAccount
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/AccountController.php:16
* @route '/api/auth/disable-account'
*/
disableAccount.url = (options?: RouteQueryOptions) => {
    return disableAccount.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\AccountController::disableAccount
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/AccountController.php:16
* @route '/api/auth/disable-account'
*/
disableAccount.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: disableAccount.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\AccountController::disableAccount
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/AccountController.php:16
* @route '/api/auth/disable-account'
*/
disableAccount.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: disableAccount.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\AccountController::disableAccount
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/AccountController.php:16
* @route '/api/auth/disable-account'
*/
const disableAccountForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: disableAccount.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\AccountController::disableAccount
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/AccountController.php:16
* @route '/api/auth/disable-account'
*/
disableAccountForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: disableAccount.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\AccountController::disableAccount
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/AccountController.php:16
* @route '/api/auth/disable-account'
*/
disableAccountForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: disableAccount.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

disableAccount.form = disableAccountForm

const AccountController = { disableAccount }

export default AccountController