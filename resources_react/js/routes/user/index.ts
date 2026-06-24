import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\UserController::permissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
export const permissions = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: permissions.url(args, options),
    method: 'get',
})

permissions.definition = {
    methods: ["get","head"],
    url: '/api/user/permissions/{user?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::permissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
permissions.url = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "user",
    ])

    const parsedArgs = {
        user: typeof args?.user === 'object'
        ? args.user.id
        : args?.user,
    }

    return permissions.definition.url
            .replace('{user?}', parsedArgs.user?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::permissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
permissions.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: permissions.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::permissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
permissions.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: permissions.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::permissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
const permissionsForm = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: permissions.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::permissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
permissionsForm.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: permissions.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::permissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
permissionsForm.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: permissions.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

permissions.form = permissionsForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::sessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
export const sessions = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sessions.url(args, options),
    method: 'get',
})

sessions.definition = {
    methods: ["get","head"],
    url: '/api/user/sessions/{user?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::sessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
sessions.url = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "user",
    ])

    const parsedArgs = {
        user: typeof args?.user === 'object'
        ? args.user.id
        : args?.user,
    }

    return sessions.definition.url
            .replace('{user?}', parsedArgs.user?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::sessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
sessions.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sessions.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::sessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
sessions.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sessions.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::sessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
const sessionsForm = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sessions.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::sessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
sessionsForm.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sessions.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::sessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
sessionsForm.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sessions.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sessions.form = sessionsForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::devices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
export const devices = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: devices.url(args, options),
    method: 'get',
})

devices.definition = {
    methods: ["get","head"],
    url: '/api/user/devices/{user?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::devices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
devices.url = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "user",
    ])

    const parsedArgs = {
        user: typeof args?.user === 'object'
        ? args.user.id
        : args?.user,
    }

    return devices.definition.url
            .replace('{user?}', parsedArgs.user?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::devices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
devices.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: devices.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::devices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
devices.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: devices.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::devices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
const devicesForm = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: devices.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::devices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
devicesForm.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: devices.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::devices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
devicesForm.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: devices.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

devices.form = devicesForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::place
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
export const place = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: place.url(args, options),
    method: 'get',
})

place.definition = {
    methods: ["get","head"],
    url: '/api/user/place/{user?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::place
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
place.url = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "user",
    ])

    const parsedArgs = {
        user: typeof args?.user === 'object'
        ? args.user.id
        : args?.user,
    }

    return place.definition.url
            .replace('{user?}', parsedArgs.user?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::place
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
place.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: place.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::place
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
place.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: place.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::place
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
const placeForm = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: place.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::place
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
placeForm.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: place.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::place
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
placeForm.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: place.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

place.form = placeForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::roles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
export const roles = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: roles.url(args, options),
    method: 'get',
})

roles.definition = {
    methods: ["get","head"],
    url: '/api/user/roles/{user?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::roles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
roles.url = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "user",
    ])

    const parsedArgs = {
        user: typeof args?.user === 'object'
        ? args.user.id
        : args?.user,
    }

    return roles.definition.url
            .replace('{user?}', parsedArgs.user?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::roles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
roles.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: roles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::roles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
roles.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: roles.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::roles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
const rolesForm = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: roles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::roles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
rolesForm.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: roles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::roles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
rolesForm.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: roles.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

roles.form = rolesForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
export const byEmail = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byEmail.url(args, options),
    method: 'get',
})

byEmail.definition = {
    methods: ["get","head"],
    url: '/api/user/email/{email}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
byEmail.url = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { email: args }
    }

    if (Array.isArray(args)) {
        args = {
            email: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        email: args.email,
    }

    return byEmail.definition.url
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
byEmail.get = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byEmail.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
byEmail.head = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: byEmail.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
const byEmailForm = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byEmail.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
byEmailForm.get = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byEmail.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
byEmailForm.head = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byEmail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

byEmail.form = byEmailForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
export const byPhone = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byPhone.url(args, options),
    method: 'get',
})

byPhone.definition = {
    methods: ["get","head"],
    url: '/api/user/phone/{phone}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
byPhone.url = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { phone: args }
    }

    if (Array.isArray(args)) {
        args = {
            phone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        phone: args.phone,
    }

    return byPhone.definition.url
            .replace('{phone}', parsedArgs.phone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
byPhone.get = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byPhone.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
byPhone.head = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: byPhone.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
const byPhoneForm = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byPhone.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
byPhoneForm.get = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byPhone.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
byPhoneForm.head = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byPhone.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

byPhone.form = byPhoneForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
export const byUsername = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byUsername.url(args, options),
    method: 'get',
})

byUsername.definition = {
    methods: ["get","head"],
    url: '/api/user/username/{username}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
byUsername.url = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { username: args }
    }

    if (Array.isArray(args)) {
        args = {
            username: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        username: args.username,
    }

    return byUsername.definition.url
            .replace('{username}', parsedArgs.username.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
byUsername.get = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byUsername.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
byUsername.head = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: byUsername.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
const byUsernameForm = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byUsername.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
byUsernameForm.get = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byUsername.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::byUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
byUsernameForm.head = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byUsername.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

byUsername.form = byUsernameForm

const user = {
    permissions: Object.assign(permissions, permissions),
    sessions: Object.assign(sessions, sessions),
    devices: Object.assign(devices, devices),
    place: Object.assign(place, place),
    roles: Object.assign(roles, roles),
    byEmail: Object.assign(byEmail, byEmail),
    byPhone: Object.assign(byPhone, byPhone),
    byUsername: Object.assign(byUsername, byUsername),
}

export default user