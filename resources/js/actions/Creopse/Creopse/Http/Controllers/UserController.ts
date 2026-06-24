import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPermissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
export const userPermissions = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userPermissions.url(args, options),
    method: 'get',
})

userPermissions.definition = {
    methods: ["get","head"],
    url: '/api/user/permissions/{user?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPermissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
userPermissions.url = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return userPermissions.definition.url
            .replace('{user?}', parsedArgs.user?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPermissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
userPermissions.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userPermissions.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPermissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
userPermissions.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userPermissions.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPermissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
const userPermissionsForm = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userPermissions.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPermissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
userPermissionsForm.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userPermissions.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPermissions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:387
* @route '/api/user/permissions/{user?}'
*/
userPermissionsForm.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userPermissions.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userPermissions.form = userPermissionsForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userSessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
export const userSessions = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userSessions.url(args, options),
    method: 'get',
})

userSessions.definition = {
    methods: ["get","head"],
    url: '/api/user/sessions/{user?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userSessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
userSessions.url = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return userSessions.definition.url
            .replace('{user?}', parsedArgs.user?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userSessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
userSessions.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userSessions.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userSessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
userSessions.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userSessions.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userSessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
const userSessionsForm = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userSessions.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userSessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
userSessionsForm.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userSessions.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userSessions
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:423
* @route '/api/user/sessions/{user?}'
*/
userSessionsForm.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userSessions.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userSessions.form = userSessionsForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userDevices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
export const userDevices = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userDevices.url(args, options),
    method: 'get',
})

userDevices.definition = {
    methods: ["get","head"],
    url: '/api/user/devices/{user?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userDevices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
userDevices.url = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return userDevices.definition.url
            .replace('{user?}', parsedArgs.user?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userDevices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
userDevices.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userDevices.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userDevices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
userDevices.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userDevices.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userDevices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
const userDevicesForm = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userDevices.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userDevices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
userDevicesForm.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userDevices.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userDevices
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:411
* @route '/api/user/devices/{user?}'
*/
userDevicesForm.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userDevices.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userDevices.form = userDevicesForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPlace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
export const userPlace = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userPlace.url(args, options),
    method: 'get',
})

userPlace.definition = {
    methods: ["get","head"],
    url: '/api/user/place/{user?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPlace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
userPlace.url = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return userPlace.definition.url
            .replace('{user?}', parsedArgs.user?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPlace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
userPlace.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userPlace.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPlace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
userPlace.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userPlace.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPlace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
const userPlaceForm = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userPlace.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPlace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
userPlaceForm.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userPlace.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userPlace
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:399
* @route '/api/user/place/{user?}'
*/
userPlaceForm.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userPlace.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userPlace.form = userPlaceForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userRoles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
export const userRoles = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userRoles.url(args, options),
    method: 'get',
})

userRoles.definition = {
    methods: ["get","head"],
    url: '/api/user/roles/{user?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userRoles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
userRoles.url = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return userRoles.definition.url
            .replace('{user?}', parsedArgs.user?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userRoles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
userRoles.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userRoles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userRoles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
userRoles.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userRoles.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userRoles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
const userRolesForm = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userRoles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userRoles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
userRolesForm.get = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userRoles.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userRoles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:435
* @route '/api/user/roles/{user?}'
*/
userRolesForm.head = (args?: { user?: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userRoles.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userRoles.form = userRolesForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
export const userByEmail = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userByEmail.url(args, options),
    method: 'get',
})

userByEmail.definition = {
    methods: ["get","head"],
    url: '/api/user/email/{email}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
userByEmail.url = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return userByEmail.definition.url
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
userByEmail.get = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userByEmail.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
userByEmail.head = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userByEmail.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
const userByEmailForm = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userByEmail.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
userByEmailForm.get = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userByEmail.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByEmail
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:447
* @route '/api/user/email/{email}'
*/
userByEmailForm.head = (args: { email: string | number } | [email: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userByEmail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userByEmail.form = userByEmailForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
export const userByPhone = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userByPhone.url(args, options),
    method: 'get',
})

userByPhone.definition = {
    methods: ["get","head"],
    url: '/api/user/phone/{phone}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
userByPhone.url = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return userByPhone.definition.url
            .replace('{phone}', parsedArgs.phone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
userByPhone.get = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userByPhone.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
userByPhone.head = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userByPhone.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
const userByPhoneForm = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userByPhone.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
userByPhoneForm.get = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userByPhone.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByPhone
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:471
* @route '/api/user/phone/{phone}'
*/
userByPhoneForm.head = (args: { phone: string | number } | [phone: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userByPhone.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userByPhone.form = userByPhoneForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
export const userByUsername = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userByUsername.url(args, options),
    method: 'get',
})

userByUsername.definition = {
    methods: ["get","head"],
    url: '/api/user/username/{username}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
userByUsername.url = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return userByUsername.definition.url
            .replace('{username}', parsedArgs.username.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
userByUsername.get = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userByUsername.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
userByUsername.head = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userByUsername.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
const userByUsernameForm = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userByUsername.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
userByUsernameForm.get = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userByUsername.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::userByUsername
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:459
* @route '/api/user/username/{username}'
*/
userByUsernameForm.head = (args: { username: string | number } | [username: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userByUsername.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userByUsername.form = userByUsernameForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::updateSelf
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:300
* @route '/api/users/self/{user}'
*/
export const updateSelf = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSelf.url(args, options),
    method: 'put',
})

updateSelf.definition = {
    methods: ["put"],
    url: '/api/users/self/{user}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::updateSelf
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:300
* @route '/api/users/self/{user}'
*/
updateSelf.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return updateSelf.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::updateSelf
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:300
* @route '/api/users/self/{user}'
*/
updateSelf.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSelf.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::updateSelf
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:300
* @route '/api/users/self/{user}'
*/
const updateSelfForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSelf.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::updateSelf
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:300
* @route '/api/users/self/{user}'
*/
updateSelfForm.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSelf.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateSelf.form = updateSelfForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:76
* @route '/api/users'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/users',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:76
* @route '/api/users'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:76
* @route '/api/users'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:76
* @route '/api/users'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:76
* @route '/api/users'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::importMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:158
* @route '/api/users/import'
*/
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

importMethod.definition = {
    methods: ["post"],
    url: '/api/users/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::importMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:158
* @route '/api/users/import'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::importMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:158
* @route '/api/users/import'
*/
importMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::importMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:158
* @route '/api/users/import'
*/
const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importMethod.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::importMethod
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:158
* @route '/api/users/import'
*/
importMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importMethod.url(options),
    method: 'post',
})

importMethod.form = importMethodForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:318
* @route '/api/users/{user}'
*/
export const update = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/users/{user}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:318
* @route '/api/users/{user}'
*/
update.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return update.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:318
* @route '/api/users/{user}'
*/
update.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:318
* @route '/api/users/{user}'
*/
const updateForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:318
* @route '/api/users/{user}'
*/
updateForm.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:373
* @route '/api/users/{user}'
*/
export const destroy = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/users/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:373
* @route '/api/users/{user}'
*/
destroy.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return destroy.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:373
* @route '/api/users/{user}'
*/
destroy.delete = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:373
* @route '/api/users/{user}'
*/
const destroyForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:373
* @route '/api/users/{user}'
*/
destroyForm.delete = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:31
* @route '/api/users'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:31
* @route '/api/users'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:31
* @route '/api/users'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:31
* @route '/api/users'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:31
* @route '/api/users'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:31
* @route '/api/users'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:31
* @route '/api/users'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:254
* @route '/api/users/{user}'
*/
export const show = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/users/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:254
* @route '/api/users/{user}'
*/
show.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return show.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:254
* @route '/api/users/{user}'
*/
show.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:254
* @route '/api/users/{user}'
*/
show.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:254
* @route '/api/users/{user}'
*/
const showForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:254
* @route '/api/users/{user}'
*/
showForm.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:254
* @route '/api/users/{user}'
*/
showForm.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:264
* @route '/api/users/list'
*/
export const showList = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: showList.url(options),
    method: 'post',
})

showList.definition = {
    methods: ["post"],
    url: '/api/users/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:264
* @route '/api/users/list'
*/
showList.url = (options?: RouteQueryOptions) => {
    return showList.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:264
* @route '/api/users/list'
*/
showList.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: showList.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:264
* @route '/api/users/list'
*/
const showListForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: showList.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::showList
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:264
* @route '/api/users/list'
*/
showListForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: showList.url(options),
    method: 'post',
})

showList.form = showListForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::searchUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:286
* @route '/api/users/search/{query?}'
*/
export const searchUsers = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchUsers.url(args, options),
    method: 'get',
})

searchUsers.definition = {
    methods: ["get","head"],
    url: '/api/users/search/{query?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::searchUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:286
* @route '/api/users/search/{query?}'
*/
searchUsers.url = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { query: args }
    }

    if (Array.isArray(args)) {
        args = {
            query: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "query",
    ])

    const parsedArgs = {
        query: args?.query,
    }

    return searchUsers.definition.url
            .replace('{query?}', parsedArgs.query?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::searchUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:286
* @route '/api/users/search/{query?}'
*/
searchUsers.get = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchUsers.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::searchUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:286
* @route '/api/users/search/{query?}'
*/
searchUsers.head = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: searchUsers.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::searchUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:286
* @route '/api/users/search/{query?}'
*/
const searchUsersForm = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchUsers.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::searchUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:286
* @route '/api/users/search/{query?}'
*/
searchUsersForm.get = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchUsers.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::searchUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:286
* @route '/api/users/search/{query?}'
*/
searchUsersForm.head = (args?: { query?: string | number } | [query: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchUsers.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

searchUsers.form = searchUsersForm

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::showAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:274
* @route '/api/users/type/administrators'
*/
export const showAdministrators = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showAdministrators.url(options),
    method: 'get',
})

showAdministrators.definition = {
    methods: ["get","head"],
    url: '/api/users/type/administrators',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::showAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:274
* @route '/api/users/type/administrators'
*/
showAdministrators.url = (options?: RouteQueryOptions) => {
    return showAdministrators.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::showAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:274
* @route '/api/users/type/administrators'
*/
showAdministrators.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showAdministrators.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::showAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:274
* @route '/api/users/type/administrators'
*/
showAdministrators.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showAdministrators.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::showAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:274
* @route '/api/users/type/administrators'
*/
const showAdministratorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showAdministrators.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::showAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:274
* @route '/api/users/type/administrators'
*/
showAdministratorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showAdministrators.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\UserController::showAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/UserController.php:274
* @route '/api/users/type/administrators'
*/
showAdministratorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showAdministrators.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showAdministrators.form = showAdministratorsForm

const UserController = { userPermissions, userSessions, userDevices, userPlace, userRoles, userByEmail, userByPhone, userByUsername, updateSelf, store, importMethod, update, destroy, index, show, showList, searchUsers, showAdministrators, import: importMethod }

export default UserController