import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import user from './user'
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

const notifications = {
    user: Object.assign(user, user),
    mark: Object.assign(mark, mark),
    destroy: Object.assign(destroy, destroy),
}

export default notifications