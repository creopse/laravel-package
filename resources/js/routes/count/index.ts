import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import newsArticles9ef48b from './news-articles'
import mediaFilesC46a05 from './media-files'
/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::users
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
export const users = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: users.url(options),
    method: 'get',
})

users.definition = {
    methods: ["get","head"],
    url: '/api/count/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::users
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
users.url = (options?: RouteQueryOptions) => {
    return users.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::users
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
users.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: users.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::users
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
users.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: users.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::users
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
const usersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: users.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::users
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
usersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: users.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::users
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:34
* @route '/api/count/users'
*/
usersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: users.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

users.form = usersForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::administrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
export const administrators = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: administrators.url(options),
    method: 'get',
})

administrators.definition = {
    methods: ["get","head"],
    url: '/api/count/administrators',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::administrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
administrators.url = (options?: RouteQueryOptions) => {
    return administrators.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::administrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
administrators.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: administrators.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::administrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
administrators.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: administrators.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::administrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
const administratorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: administrators.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::administrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
administratorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: administrators.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::administrators
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:26
* @route '/api/count/administrators'
*/
administratorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: administrators.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

administrators.form = administratorsForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::others
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
export const others = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: others.url(options),
    method: 'get',
})

others.definition = {
    methods: ["get","head"],
    url: '/api/count/others',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::others
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
others.url = (options?: RouteQueryOptions) => {
    return others.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::others
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
others.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: others.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::others
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
others.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: others.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::others
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
const othersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: others.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::others
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
othersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: others.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::others
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:18
* @route '/api/count/others'
*/
othersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: others.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

others.form = othersForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
export const newsArticles = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsArticles.url(options),
    method: 'get',
})

newsArticles.definition = {
    methods: ["get","head"],
    url: '/api/count/news-articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
newsArticles.url = (options?: RouteQueryOptions) => {
    return newsArticles.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
newsArticles.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsArticles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
newsArticles.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: newsArticles.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
const newsArticlesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newsArticles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
newsArticlesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newsArticles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsArticles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:50
* @route '/api/count/news-articles'
*/
newsArticlesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newsArticles.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

newsArticles.form = newsArticlesForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
export const newsCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsCategories.url(options),
    method: 'get',
})

newsCategories.definition = {
    methods: ["get","head"],
    url: '/api/count/news-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
newsCategories.url = (options?: RouteQueryOptions) => {
    return newsCategories.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
newsCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsCategories.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
newsCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: newsCategories.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
const newsCategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newsCategories.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
newsCategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newsCategories.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsCategories
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:42
* @route '/api/count/news-categories'
*/
newsCategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newsCategories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

newsCategories.form = newsCategoriesForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
export const newsComments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsComments.url(options),
    method: 'get',
})

newsComments.definition = {
    methods: ["get","head"],
    url: '/api/count/news-comments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
newsComments.url = (options?: RouteQueryOptions) => {
    return newsComments.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
newsComments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsComments.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
newsComments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: newsComments.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
const newsCommentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newsComments.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
newsCommentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newsComments.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsComments
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:74
* @route '/api/count/news-comments'
*/
newsCommentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newsComments.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

newsComments.form = newsCommentsForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
export const newsTags = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsTags.url(options),
    method: 'get',
})

newsTags.definition = {
    methods: ["get","head"],
    url: '/api/count/news-tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
newsTags.url = (options?: RouteQueryOptions) => {
    return newsTags.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
newsTags.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsTags.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
newsTags.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: newsTags.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
const newsTagsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newsTags.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
newsTagsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newsTags.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::newsTags
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:82
* @route '/api/count/news-tags'
*/
newsTagsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newsTags.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

newsTags.form = newsTagsForm

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::mediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
export const mediaFiles = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mediaFiles.url(options),
    method: 'get',
})

mediaFiles.definition = {
    methods: ["get","head"],
    url: '/api/count/media-files',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::mediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
mediaFiles.url = (options?: RouteQueryOptions) => {
    return mediaFiles.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::mediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
mediaFiles.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mediaFiles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::mediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
mediaFiles.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: mediaFiles.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::mediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
const mediaFilesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mediaFiles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::mediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
mediaFilesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mediaFiles.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\StatsController::mediaFiles
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/StatsController.php:90
* @route '/api/count/media-files'
*/
mediaFilesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mediaFiles.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

mediaFiles.form = mediaFilesForm

const count = {
    users: Object.assign(users, users),
    administrators: Object.assign(administrators, administrators),
    others: Object.assign(others, others),
    newsArticles: Object.assign(newsArticles, newsArticles9ef48b),
    newsCategories: Object.assign(newsCategories, newsCategories),
    newsComments: Object.assign(newsComments, newsComments),
    newsTags: Object.assign(newsTags, newsTags),
    mediaFiles: Object.assign(mediaFiles, mediaFilesC46a05),
}

export default count