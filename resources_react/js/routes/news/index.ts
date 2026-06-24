import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::article
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
export const article = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: article.url(args, options),
    method: 'get',
})

article.definition = {
    methods: ["get","head"],
    url: '/news/article/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::article
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
article.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return article.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::article
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
article.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: article.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::article
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
article.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: article.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::article
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
const articleForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: article.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::article
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
articleForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: article.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::article
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/article/{id}'
*/
articleForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: article.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

article.form = articleForm

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::category
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
export const category = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: category.url(args, options),
    method: 'get',
})

category.definition = {
    methods: ["get","head"],
    url: '/news/category/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::category
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
category.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return category.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::category
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
category.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: category.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::category
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
category.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: category.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::category
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
const categoryForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: category.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::category
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
categoryForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: category.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::category
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/category/{id}'
*/
categoryForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: category.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

category.form = categoryForm

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::tag
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
export const tag = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tag.url(args, options),
    method: 'get',
})

tag.definition = {
    methods: ["get","head"],
    url: '/news/tag/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::tag
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
tag.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return tag.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::tag
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
tag.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tag.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::tag
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
tag.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tag.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::tag
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
const tagForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tag.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::tag
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
tagForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tag.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DynamicPageController::tag
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DynamicPageController.php:56
* @route '/news/tag/{id}'
*/
tagForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tag.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tag.form = tagForm

const news = {
    article: Object.assign(article, article),
    category: Object.assign(category, category),
    tag: Object.assign(tag, tag),
}

export default news