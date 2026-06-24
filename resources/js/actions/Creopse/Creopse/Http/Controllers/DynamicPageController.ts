import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/'
*/
const getPage980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPage980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

getPage980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/'
*/
getPage980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return getPage980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/'
*/
getPage980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPage980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/'
*/
getPage980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getPage980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/'
*/
const getPage980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPage980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/'
*/
getPage980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPage980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/'
*/
getPage980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPage980bb49ee7ae63891f1d891d2fbcf1c9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getPage980bb49ee7ae63891f1d891d2fbcf1c9.form = getPage980bb49ee7ae63891f1d891d2fbcf1c9Form
/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
const getPage8916cc3023b81e31fc622dbbe33246b8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPage8916cc3023b81e31fc622dbbe33246b8.url(options),
    method: 'get',
})

getPage8916cc3023b81e31fc622dbbe33246b8.definition = {
    methods: ["get","head"],
    url: '/home',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
getPage8916cc3023b81e31fc622dbbe33246b8.url = (options?: RouteQueryOptions) => {
    return getPage8916cc3023b81e31fc622dbbe33246b8.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
getPage8916cc3023b81e31fc622dbbe33246b8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPage8916cc3023b81e31fc622dbbe33246b8.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
getPage8916cc3023b81e31fc622dbbe33246b8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getPage8916cc3023b81e31fc622dbbe33246b8.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
const getPage8916cc3023b81e31fc622dbbe33246b8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPage8916cc3023b81e31fc622dbbe33246b8.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
getPage8916cc3023b81e31fc622dbbe33246b8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPage8916cc3023b81e31fc622dbbe33246b8.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:43
* @route '/home'
*/
getPage8916cc3023b81e31fc622dbbe33246b8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPage8916cc3023b81e31fc622dbbe33246b8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getPage8916cc3023b81e31fc622dbbe33246b8.form = getPage8916cc3023b81e31fc622dbbe33246b8Form

/**
* Multiple routes resolve to \Creopse\Creopse\Http\Controllers\DynamicPageController::getPage, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `getPage['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const getPage = {
    '/': getPage980bb49ee7ae63891f1d891d2fbcf1c9,
    '/home': getPage8916cc3023b81e31fc622dbbe33246b8,
}

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
const getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f.url(args, options),
    method: 'get',
})

getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f.definition = {
    methods: ["get","head"],
    url: '/news/article/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
const getContentPageb23d7bffcf5cd4a1b77ae0b133ba432fForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
getContentPageb23d7bffcf5cd4a1b77ae0b133ba432fForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
getContentPageb23d7bffcf5cd4a1b77ae0b133ba432fForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f.form = getContentPageb23d7bffcf5cd4a1b77ae0b133ba432fForm
/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
const getContentPage0020d335a5343348b94d2fd2850df5ed = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getContentPage0020d335a5343348b94d2fd2850df5ed.url(args, options),
    method: 'get',
})

getContentPage0020d335a5343348b94d2fd2850df5ed.definition = {
    methods: ["get","head"],
    url: '/news/category/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
getContentPage0020d335a5343348b94d2fd2850df5ed.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getContentPage0020d335a5343348b94d2fd2850df5ed.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
getContentPage0020d335a5343348b94d2fd2850df5ed.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getContentPage0020d335a5343348b94d2fd2850df5ed.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
getContentPage0020d335a5343348b94d2fd2850df5ed.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getContentPage0020d335a5343348b94d2fd2850df5ed.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
const getContentPage0020d335a5343348b94d2fd2850df5edForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getContentPage0020d335a5343348b94d2fd2850df5ed.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
getContentPage0020d335a5343348b94d2fd2850df5edForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getContentPage0020d335a5343348b94d2fd2850df5ed.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
getContentPage0020d335a5343348b94d2fd2850df5edForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getContentPage0020d335a5343348b94d2fd2850df5ed.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getContentPage0020d335a5343348b94d2fd2850df5ed.form = getContentPage0020d335a5343348b94d2fd2850df5edForm
/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
const getContentPage06cf7b8a428c95130720858870d366ca = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getContentPage06cf7b8a428c95130720858870d366ca.url(args, options),
    method: 'get',
})

getContentPage06cf7b8a428c95130720858870d366ca.definition = {
    methods: ["get","head"],
    url: '/news/tag/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
getContentPage06cf7b8a428c95130720858870d366ca.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getContentPage06cf7b8a428c95130720858870d366ca.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
getContentPage06cf7b8a428c95130720858870d366ca.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getContentPage06cf7b8a428c95130720858870d366ca.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
getContentPage06cf7b8a428c95130720858870d366ca.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getContentPage06cf7b8a428c95130720858870d366ca.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
const getContentPage06cf7b8a428c95130720858870d366caForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getContentPage06cf7b8a428c95130720858870d366ca.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
getContentPage06cf7b8a428c95130720858870d366caForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getContentPage06cf7b8a428c95130720858870d366ca.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
getContentPage06cf7b8a428c95130720858870d366caForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getContentPage06cf7b8a428c95130720858870d366ca.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getContentPage06cf7b8a428c95130720858870d366ca.form = getContentPage06cf7b8a428c95130720858870d366caForm

/**
* Multiple routes resolve to \Creopse\Creopse\Http\Controllers\DynamicPageController::getContentPage, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `getContentPage['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const getContentPage = {
    '/news/article/{id}': getContentPageb23d7bffcf5cd4a1b77ae0b133ba432f,
    '/news/category/{id}': getContentPage0020d335a5343348b94d2fd2850df5ed,
    '/news/tag/{id}': getContentPage06cf7b8a428c95130720858870d366ca,
}

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getEditorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
export const getEditorPage = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getEditorPage.url(args, options),
    method: 'get',
})

getEditorPage.definition = {
    methods: ["get","head"],
    url: '/editor-page/s/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getEditorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
getEditorPage.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getEditorPage.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getEditorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
getEditorPage.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getEditorPage.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getEditorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
getEditorPage.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getEditorPage.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getEditorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
const getEditorPageForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getEditorPage.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getEditorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
getEditorPageForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getEditorPage.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::getEditorPage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:30
* @route '/editor-page/s/{slug}'
*/
getEditorPageForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getEditorPage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getEditorPage.form = getEditorPageForm

const DynamicPageController = { getPage, getContentPage, getEditorPage }

export default DynamicPageController