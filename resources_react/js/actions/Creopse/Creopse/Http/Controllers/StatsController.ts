import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
export const getVisits = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getVisits.url(options),
    method: 'get',
})

getVisits.definition = {
    methods: ["get","head"],
    url: '/api/visits',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
getVisits.url = (options?: RouteQueryOptions) => {
    return getVisits.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
getVisits.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getVisits.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
getVisits.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getVisits.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
const getVisitsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getVisits.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
getVisitsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getVisits.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisits
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:114
* @route '/api/visits'
*/
getVisitsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getVisits.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getVisits.form = getVisitsForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
export const getVisitors = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getVisitors.url(options),
    method: 'get',
})

getVisitors.definition = {
    methods: ["get","head"],
    url: '/api/visitors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
getVisitors.url = (options?: RouteQueryOptions) => {
    return getVisitors.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
getVisitors.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getVisitors.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
getVisitors.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getVisitors.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
const getVisitorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getVisitors.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
getVisitorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getVisitors.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::getVisitors
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:122
* @route '/api/visitors'
*/
getVisitorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getVisitors.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getVisitors.form = getVisitorsForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
export const countUsers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countUsers.url(options),
    method: 'get',
})

countUsers.definition = {
    methods: ["get","head"],
    url: '/api/count/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
countUsers.url = (options?: RouteQueryOptions) => {
    return countUsers.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
countUsers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countUsers.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
countUsers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: countUsers.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
const countUsersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countUsers.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
countUsersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countUsers.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countUsers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
countUsersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countUsers.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

countUsers.form = countUsersForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
export const countAdministrators = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countAdministrators.url(options),
    method: 'get',
})

countAdministrators.definition = {
    methods: ["get","head"],
    url: '/api/count/administrators',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
countAdministrators.url = (options?: RouteQueryOptions) => {
    return countAdministrators.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
countAdministrators.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countAdministrators.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
countAdministrators.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: countAdministrators.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
const countAdministratorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countAdministrators.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
countAdministratorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countAdministrators.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countAdministrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
countAdministratorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countAdministrators.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

countAdministrators.form = countAdministratorsForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countOthers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
export const countOthers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countOthers.url(options),
    method: 'get',
})

countOthers.definition = {
    methods: ["get","head"],
    url: '/api/count/others',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countOthers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
countOthers.url = (options?: RouteQueryOptions) => {
    return countOthers.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countOthers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
countOthers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countOthers.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countOthers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
countOthers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: countOthers.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countOthers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
const countOthersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countOthers.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countOthers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
countOthersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countOthers.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countOthers
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
countOthersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countOthers.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

countOthers.form = countOthersForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
export const countNewsArticles = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countNewsArticles.url(options),
    method: 'get',
})

countNewsArticles.definition = {
    methods: ["get","head"],
    url: '/api/count/news-articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
countNewsArticles.url = (options?: RouteQueryOptions) => {
    return countNewsArticles.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
countNewsArticles.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countNewsArticles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
countNewsArticles.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: countNewsArticles.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
const countNewsArticlesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsArticles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
countNewsArticlesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsArticles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
countNewsArticlesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsArticles.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

countNewsArticles.form = countNewsArticlesForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByStatus
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
export const countNewsArticlesByStatus = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countNewsArticlesByStatus.url(args, options),
    method: 'get',
})

countNewsArticlesByStatus.definition = {
    methods: ["get","head"],
    url: '/api/count/news-articles/status/{status}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByStatus
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
countNewsArticlesByStatus.url = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return countNewsArticlesByStatus.definition.url
            .replace('{status}', parsedArgs.status.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByStatus
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
countNewsArticlesByStatus.get = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countNewsArticlesByStatus.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByStatus
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
countNewsArticlesByStatus.head = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: countNewsArticlesByStatus.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByStatus
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
const countNewsArticlesByStatusForm = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsArticlesByStatus.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByStatus
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
countNewsArticlesByStatusForm.get = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsArticlesByStatus.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByStatus
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:58
* @route '/api/count/news-articles/status/{status}'
*/
countNewsArticlesByStatusForm.head = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsArticlesByStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

countNewsArticlesByStatus.form = countNewsArticlesByStatusForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByAuthor
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
export const countNewsArticlesByAuthor = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countNewsArticlesByAuthor.url(args, options),
    method: 'get',
})

countNewsArticlesByAuthor.definition = {
    methods: ["get","head"],
    url: '/api/count/news-articles/author/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByAuthor
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
countNewsArticlesByAuthor.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return countNewsArticlesByAuthor.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByAuthor
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
countNewsArticlesByAuthor.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countNewsArticlesByAuthor.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByAuthor
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
countNewsArticlesByAuthor.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: countNewsArticlesByAuthor.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByAuthor
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
const countNewsArticlesByAuthorForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsArticlesByAuthor.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByAuthor
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
countNewsArticlesByAuthorForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsArticlesByAuthor.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsArticlesByAuthor
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:66
* @route '/api/count/news-articles/author/{id}'
*/
countNewsArticlesByAuthorForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsArticlesByAuthor.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

countNewsArticlesByAuthor.form = countNewsArticlesByAuthorForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
export const countNewsCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countNewsCategories.url(options),
    method: 'get',
})

countNewsCategories.definition = {
    methods: ["get","head"],
    url: '/api/count/news-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
countNewsCategories.url = (options?: RouteQueryOptions) => {
    return countNewsCategories.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
countNewsCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countNewsCategories.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
countNewsCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: countNewsCategories.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
const countNewsCategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsCategories.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
countNewsCategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsCategories.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
countNewsCategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsCategories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

countNewsCategories.form = countNewsCategoriesForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
export const countNewsComments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countNewsComments.url(options),
    method: 'get',
})

countNewsComments.definition = {
    methods: ["get","head"],
    url: '/api/count/news-comments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
countNewsComments.url = (options?: RouteQueryOptions) => {
    return countNewsComments.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
countNewsComments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countNewsComments.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
countNewsComments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: countNewsComments.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
const countNewsCommentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsComments.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
countNewsCommentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsComments.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
countNewsCommentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsComments.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

countNewsComments.form = countNewsCommentsForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
export const countNewsTags = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countNewsTags.url(options),
    method: 'get',
})

countNewsTags.definition = {
    methods: ["get","head"],
    url: '/api/count/news-tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
countNewsTags.url = (options?: RouteQueryOptions) => {
    return countNewsTags.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
countNewsTags.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countNewsTags.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
countNewsTags.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: countNewsTags.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
const countNewsTagsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsTags.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
countNewsTagsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsTags.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countNewsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
countNewsTagsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countNewsTags.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

countNewsTags.form = countNewsTagsForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
export const countMediaFiles = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countMediaFiles.url(options),
    method: 'get',
})

countMediaFiles.definition = {
    methods: ["get","head"],
    url: '/api/count/media-files',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
countMediaFiles.url = (options?: RouteQueryOptions) => {
    return countMediaFiles.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
countMediaFiles.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countMediaFiles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
countMediaFiles.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: countMediaFiles.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
const countMediaFilesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countMediaFiles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
countMediaFilesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countMediaFiles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
countMediaFilesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countMediaFiles.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

countMediaFiles.form = countMediaFilesForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFilesByType
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
export const countMediaFilesByType = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countMediaFilesByType.url(args, options),
    method: 'get',
})

countMediaFilesByType.definition = {
    methods: ["get","head"],
    url: '/api/count/media-files/type/{type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFilesByType
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
countMediaFilesByType.url = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { type: args }
    }

    if (Array.isArray(args)) {
        args = {
            type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        type: args.type,
    }

    return countMediaFilesByType.definition.url
            .replace('{type}', parsedArgs.type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFilesByType
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
countMediaFilesByType.get = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countMediaFilesByType.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFilesByType
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
countMediaFilesByType.head = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: countMediaFilesByType.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFilesByType
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
const countMediaFilesByTypeForm = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countMediaFilesByType.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFilesByType
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
countMediaFilesByTypeForm.get = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countMediaFilesByType.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countMediaFilesByType
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:98
* @route '/api/count/media-files/type/{type}'
*/
countMediaFilesByTypeForm.head = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countMediaFilesByType.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

countMediaFilesByType.form = countMediaFilesByTypeForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countTrashedMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
export const countTrashedMediaFiles = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countTrashedMediaFiles.url(options),
    method: 'get',
})

countTrashedMediaFiles.definition = {
    methods: ["get","head"],
    url: '/api/count/media-files/trashed',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countTrashedMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
countTrashedMediaFiles.url = (options?: RouteQueryOptions) => {
    return countTrashedMediaFiles.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countTrashedMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
countTrashedMediaFiles.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: countTrashedMediaFiles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countTrashedMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
countTrashedMediaFiles.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: countTrashedMediaFiles.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countTrashedMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
const countTrashedMediaFilesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countTrashedMediaFiles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countTrashedMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
countTrashedMediaFilesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countTrashedMediaFiles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::countTrashedMediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:106
* @route '/api/count/media-files/trashed'
*/
countTrashedMediaFilesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: countTrashedMediaFiles.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

countTrashedMediaFiles.form = countTrashedMediaFilesForm

const StatsController = { getVisits, getVisitors, countUsers, countAdministrators, countOthers, countNewsArticles, countNewsArticlesByStatus, countNewsArticlesByAuthor, countNewsCategories, countNewsComments, countNewsTags, countMediaFiles, countMediaFilesByType, countTrashedMediaFiles }

export default StatsController