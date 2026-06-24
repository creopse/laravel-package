import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::dataSourcePage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:172
* @route '/api/sections/{section}/data-source-page'
*/
export const dataSourcePage = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: dataSourcePage.url(args, options),
    method: 'put',
})

dataSourcePage.definition = {
    methods: ["put"],
    url: '/api/sections/{section}/data-source-page',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::dataSourcePage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:172
* @route '/api/sections/{section}/data-source-page'
*/
dataSourcePage.url = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { section: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { section: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            section: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        section: typeof args.section === 'object'
        ? args.section.slug
        : args.section,
    }

    return dataSourcePage.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::dataSourcePage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:172
* @route '/api/sections/{section}/data-source-page'
*/
dataSourcePage.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: dataSourcePage.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::dataSourcePage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:172
* @route '/api/sections/{section}/data-source-page'
*/
const dataSourcePageForm = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: dataSourcePage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::dataSourcePage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:172
* @route '/api/sections/{section}/data-source-page'
*/
dataSourcePageForm.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: dataSourcePage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

dataSourcePage.form = dataSourcePageForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::duplicate
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:209
* @route '/api/sections/{section}/duplicate'
*/
export const duplicate = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: duplicate.url(args, options),
    method: 'put',
})

duplicate.definition = {
    methods: ["put"],
    url: '/api/sections/{section}/duplicate',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::duplicate
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:209
* @route '/api/sections/{section}/duplicate'
*/
duplicate.url = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { section: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { section: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            section: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        section: typeof args.section === 'object'
        ? args.section.slug
        : args.section,
    }

    return duplicate.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::duplicate
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:209
* @route '/api/sections/{section}/duplicate'
*/
duplicate.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: duplicate.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::duplicate
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:209
* @route '/api/sections/{section}/duplicate'
*/
const duplicateForm = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: duplicate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::duplicate
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:209
* @route '/api/sections/{section}/duplicate'
*/
duplicateForm.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: duplicate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

duplicate.form = duplicateForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::copyData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:256
* @route '/api/sections/{section}/copy-data'
*/
export const copyData = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: copyData.url(args, options),
    method: 'put',
})

copyData.definition = {
    methods: ["put"],
    url: '/api/sections/{section}/copy-data',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::copyData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:256
* @route '/api/sections/{section}/copy-data'
*/
copyData.url = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { section: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { section: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            section: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        section: typeof args.section === 'object'
        ? args.section.slug
        : args.section,
    }

    return copyData.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::copyData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:256
* @route '/api/sections/{section}/copy-data'
*/
copyData.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: copyData.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::copyData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:256
* @route '/api/sections/{section}/copy-data'
*/
const copyDataForm = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: copyData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::copyData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:256
* @route '/api/sections/{section}/copy-data'
*/
copyDataForm.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: copyData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

copyData.form = copyDataForm

const update = {
    dataSourcePage: Object.assign(dataSourcePage, dataSourcePage),
    duplicate: Object.assign(duplicate, duplicate),
    copyData: Object.assign(copyData, copyData),
}

export default update