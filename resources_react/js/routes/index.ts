import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LoginController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LoginController.php:25
* @route '/api/auth/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/api/auth/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LoginController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LoginController.php:25
* @route '/api/auth/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LoginController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LoginController.php:25
* @route '/api/auth/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LoginController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LoginController.php:25
* @route '/api/auth/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LoginController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LoginController.php:25
* @route '/api/auth/login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::register
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:39
* @route '/api/auth/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/api/auth/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::register
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:39
* @route '/api/auth/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::register
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:39
* @route '/api/auth/register'
*/
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::register
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:39
* @route '/api/auth/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\RegistrationController::register
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/RegistrationController.php:39
* @route '/api/auth/register'
*/
registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

register.form = registerForm

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
export const logout = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(args, options),
    method: 'get',
})

logout.definition = {
    methods: ["get","head"],
    url: '/api/auth/logout/{guard?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
logout.url = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guard: args }
    }

    if (Array.isArray(args)) {
        args = {
            guard: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "guard",
    ])

    const parsedArgs = {
        guard: args?.guard,
    }

    return logout.definition.url
            .replace('{guard?}', parsedArgs.guard?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
logout.get = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
logout.head = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
const logoutForm = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
logoutForm.get = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Auth\LogoutController::__invoke
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Auth/LogoutController.php:21
* @route '/api/auth/logout/{guard?}'
*/
logoutForm.head = (args?: { guard?: string | number } | [guard: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

logout.form = logoutForm

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

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
export const visits = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: visits.url(options),
    method: 'get',
})

visits.definition = {
    methods: ["get","head"],
    url: '/api/visits',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
visits.url = (options?: RouteQueryOptions) => {
    return visits.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
visits.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: visits.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
visits.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: visits.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
const visitsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: visits.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
visitsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: visits.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
visitsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: visits.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

visits.form = visitsForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
export const visitors = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: visitors.url(options),
    method: 'get',
})

visitors.definition = {
    methods: ["get","head"],
    url: '/api/visitors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
visitors.url = (options?: RouteQueryOptions) => {
    return visitors.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
visitors.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: visitors.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
visitors.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: visitors.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
const visitorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: visitors.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
visitorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: visitors.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::visitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
visitorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: visitors.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

visitors.form = visitorsForm

/**
* @see \Creopse\Creopse\Http\Controllers\ServerController::root
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/ServerController.php:18
* @route '/api'
*/
export const root = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: root.url(options),
    method: 'get',
})

root.definition = {
    methods: ["get","head"],
    url: '/api',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\ServerController::root
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/ServerController.php:18
* @route '/api'
*/
root.url = (options?: RouteQueryOptions) => {
    return root.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\ServerController::root
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/ServerController.php:18
* @route '/api'
*/
root.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: root.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\ServerController::root
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/ServerController.php:18
* @route '/api'
*/
root.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: root.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\ServerController::root
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/ServerController.php:18
* @route '/api'
*/
const rootForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: root.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\ServerController::root
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/ServerController.php:18
* @route '/api'
*/
rootForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: root.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\ServerController::root
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/ServerController.php:18
* @route '/api'
*/
rootForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: root.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

root.form = rootForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:379
* @route '/api/video-items/restore/{videoItem}'
*/
export const restore = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/api/video-items/restore/{videoItem}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:379
* @route '/api/video-items/restore/{videoItem}'
*/
restore.url = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { videoItem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { videoItem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            videoItem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        videoItem: typeof args.videoItem === 'object'
        ? args.videoItem.id
        : args.videoItem,
    }

    return restore.definition.url
            .replace('{videoItem}', parsedArgs.videoItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:379
* @route '/api/video-items/restore/{videoItem}'
*/
restore.put = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:379
* @route '/api/video-items/restore/{videoItem}'
*/
const restoreForm = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\VideoItemController::restore
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/VideoItemController.php:379
* @route '/api/video-items/restore/{videoItem}'
*/
restoreForm.put = (args: { videoItem: number | { id: number } } | [videoItem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

restore.form = restoreForm

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::home
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/home',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::home
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::home
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::home
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::home
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::home
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::home
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::editorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
export const editorPage = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editorPage.url(args, options),
    method: 'get',
})

editorPage.definition = {
    methods: ["get","head"],
    url: '/editor-page/s/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::editorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
editorPage.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slug: args.slug,
    }

    return editorPage.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::editorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
editorPage.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editorPage.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::editorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
editorPage.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editorPage.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::editorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
const editorPageForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editorPage.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::editorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
editorPageForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editorPage.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::editorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
editorPageForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editorPage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

editorPage.form = editorPageForm
