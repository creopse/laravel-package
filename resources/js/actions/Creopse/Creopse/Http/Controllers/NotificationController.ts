import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndex
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
*/
export const userIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userIndex.url(options),
    method: 'get',
})

userIndex.definition = {
    methods: ["get","head"],
    url: '/api/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndex
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
*/
userIndex.url = (options?: RouteQueryOptions) => {
    return userIndex.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndex
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
*/
userIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userIndex.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndex
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
*/
userIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userIndex.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndex
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
*/
const userIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userIndex.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndex
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
*/
userIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userIndex.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndex
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
*/
userIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userIndex.form = userIndexForm

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
export const userIndexUnread = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userIndexUnread.url(options),
    method: 'get',
})

userIndexUnread.definition = {
    methods: ["get","head"],
    url: '/api/notifications/unread',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
userIndexUnread.url = (options?: RouteQueryOptions) => {
    return userIndexUnread.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
userIndexUnread.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userIndexUnread.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
userIndexUnread.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userIndexUnread.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
const userIndexUnreadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userIndexUnread.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
userIndexUnreadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userIndexUnread.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
userIndexUnreadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userIndexUnread.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userIndexUnread.form = userIndexUnreadForm

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
export const userIndexRead = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userIndexRead.url(options),
    method: 'get',
})

userIndexRead.definition = {
    methods: ["get","head"],
    url: '/api/notifications/read',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
userIndexRead.url = (options?: RouteQueryOptions) => {
    return userIndexRead.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
userIndexRead.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userIndexRead.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
userIndexRead.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userIndexRead.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
const userIndexReadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userIndexRead.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
userIndexReadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userIndexRead.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userIndexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
userIndexReadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userIndexRead.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userIndexRead.form = userIndexReadForm

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::mark
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:63
* @route '/api/notifications/mark/{notification}'
*/
export const mark = (args: { notification: string | { id: string } } | [notification: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: mark.url(args, options),
    method: 'put',
})

mark.definition = {
    methods: ["put"],
    url: '/api/notifications/mark/{notification}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::mark
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:63
* @route '/api/notifications/mark/{notification}'
*/
mark.url = (args: { notification: string | { id: string } } | [notification: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notification: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notification: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notification: typeof args.notification === 'object'
        ? args.notification.id
        : args.notification,
    }

    return mark.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::mark
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:63
* @route '/api/notifications/mark/{notification}'
*/
mark.put = (args: { notification: string | { id: string } } | [notification: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: mark.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::mark
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:63
* @route '/api/notifications/mark/{notification}'
*/
const markForm = (args: { notification: string | { id: string } } | [notification: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: mark.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::mark
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:63
* @route '/api/notifications/mark/{notification}'
*/
markForm.put = (args: { notification: string | { id: string } } | [notification: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: mark.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

mark.form = markForm

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userMarkAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:73
* @route '/api/notifications/mark-all'
*/
export const userMarkAll = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: userMarkAll.url(options),
    method: 'put',
})

userMarkAll.definition = {
    methods: ["put"],
    url: '/api/notifications/mark-all',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userMarkAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:73
* @route '/api/notifications/mark-all'
*/
userMarkAll.url = (options?: RouteQueryOptions) => {
    return userMarkAll.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userMarkAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:73
* @route '/api/notifications/mark-all'
*/
userMarkAll.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: userMarkAll.url(options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userMarkAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:73
* @route '/api/notifications/mark-all'
*/
const userMarkAllForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: userMarkAll.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::userMarkAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:73
* @route '/api/notifications/mark-all'
*/
userMarkAllForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: userMarkAll.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

userMarkAll.form = userMarkAllForm

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:83
* @route '/api/notifications/{notification}'
*/
export const destroy = (args: { notification: string | { id: string } } | [notification: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/notifications/{notification}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:83
* @route '/api/notifications/{notification}'
*/
destroy.url = (args: { notification: string | { id: string } } | [notification: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notification: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notification: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notification: typeof args.notification === 'object'
        ? args.notification.id
        : args.notification,
    }

    return destroy.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:83
* @route '/api/notifications/{notification}'
*/
destroy.delete = (args: { notification: string | { id: string } } | [notification: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:83
* @route '/api/notifications/{notification}'
*/
const destroyForm = (args: { notification: string | { id: string } } | [notification: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:83
* @route '/api/notifications/{notification}'
*/
destroyForm.delete = (args: { notification: string | { id: string } } | [notification: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const NotificationController = { userIndex, userIndexUnread, userIndexRead, mark, userMarkAll, destroy }

export default NotificationController