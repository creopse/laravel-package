import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::status
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
export const status = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

status.definition = {
    methods: ["get","head"],
    url: '/api/count/news-articles/status/{status}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::status
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
status.url = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { status: args }
    }

    if (Array.isArray(args)) {
        args = {
            status: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        status: args.status,
    }

    return status.definition.url
            .replace('{status}', parsedArgs.status.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::status
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
status.get = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::status
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
status.head = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::status
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
const statusForm = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::status
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
statusForm.get = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::status
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
statusForm.head = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

status.form = statusForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::author
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
export const author = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: author.url(args, options),
    method: 'get',
})

author.definition = {
    methods: ["get","head"],
    url: '/api/count/news-articles/author/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::author
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
author.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return author.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::author
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
author.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: author.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::author
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
author.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: author.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::author
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
const authorForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: author.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::author
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
authorForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: author.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::author
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
authorForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: author.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

author.form = authorForm

const newsArticles = {
    status: Object.assign(status, status),
    author: Object.assign(author, author),
}

export default newsArticles