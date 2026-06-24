import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:16
* @route '/api/notifications'
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
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
export const indexUnread = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexUnread.url(options),
    method: 'get',
})

indexUnread.definition = {
    methods: ["get","head"],
    url: '/api/notifications/unread',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
indexUnread.url = (options?: RouteQueryOptions) => {
    return indexUnread.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
indexUnread.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexUnread.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
indexUnread.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexUnread.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
const indexUnreadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexUnread.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
indexUnreadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexUnread.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexUnread
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:47
* @route '/api/notifications/unread'
*/
indexUnreadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexUnread.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexUnread.form = indexUnreadForm

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
export const indexRead = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexRead.url(options),
    method: 'get',
})

indexRead.definition = {
    methods: ["get","head"],
    url: '/api/notifications/read',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
indexRead.url = (options?: RouteQueryOptions) => {
    return indexRead.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
indexRead.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexRead.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
indexRead.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexRead.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
const indexReadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexRead.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
indexReadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexRead.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::indexRead
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:55
* @route '/api/notifications/read'
*/
indexReadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexRead.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexRead.form = indexReadForm

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::markAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:73
* @route '/api/notifications/mark-all'
*/
export const markAll = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: markAll.url(options),
    method: 'put',
})

markAll.definition = {
    methods: ["put"],
    url: '/api/notifications/mark-all',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::markAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:73
* @route '/api/notifications/mark-all'
*/
markAll.url = (options?: RouteQueryOptions) => {
    return markAll.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::markAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:73
* @route '/api/notifications/mark-all'
*/
markAll.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: markAll.url(options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::markAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:73
* @route '/api/notifications/mark-all'
*/
const markAllForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAll.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\NotificationController::markAll
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/NotificationController.php:73
* @route '/api/notifications/mark-all'
*/
markAllForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAll.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

markAll.form = markAllForm

const user = {
    index: Object.assign(index, index),
    indexUnread: Object.assign(indexUnread, indexUnread),
    indexRead: Object.assign(indexRead, indexRead),
    markAll: Object.assign(markAll, markAll),
}

export default user