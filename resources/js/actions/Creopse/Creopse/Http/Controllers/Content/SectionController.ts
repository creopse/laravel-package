import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:65
* @route '/api/sections'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/sections',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:65
* @route '/api/sections'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:65
* @route '/api/sections'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:65
* @route '/api/sections'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::store
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:65
* @route '/api/sections'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
export const update = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/sections/{section}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
update.url = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
update.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
update.patch = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
const updateForm = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
updateForm.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::update
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:117
* @route '/api/sections/{section}'
*/
updateForm.patch = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:293
* @route '/api/sections/{section}'
*/
export const destroy = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/sections/{section}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:293
* @route '/api/sections/{section}'
*/
destroy.url = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:293
* @route '/api/sections/{section}'
*/
destroy.delete = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:293
* @route '/api/sections/{section}'
*/
const destroyForm = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::destroy
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:293
* @route '/api/sections/{section}'
*/
destroyForm.delete = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::updateDataSourcePage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:172
* @route '/api/sections/{section}/data-source-page'
*/
export const updateDataSourcePage = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateDataSourcePage.url(args, options),
    method: 'put',
})

updateDataSourcePage.definition = {
    methods: ["put"],
    url: '/api/sections/{section}/data-source-page',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::updateDataSourcePage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:172
* @route '/api/sections/{section}/data-source-page'
*/
updateDataSourcePage.url = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
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

    return updateDataSourcePage.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::updateDataSourcePage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:172
* @route '/api/sections/{section}/data-source-page'
*/
updateDataSourcePage.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateDataSourcePage.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::updateDataSourcePage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:172
* @route '/api/sections/{section}/data-source-page'
*/
const updateDataSourcePageForm = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateDataSourcePage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::updateDataSourcePage
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:172
* @route '/api/sections/{section}/data-source-page'
*/
updateDataSourcePageForm.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateDataSourcePage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateDataSourcePage.form = updateDataSourcePageForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::duplicateSection
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:209
* @route '/api/sections/{section}/duplicate'
*/
export const duplicateSection = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: duplicateSection.url(args, options),
    method: 'put',
})

duplicateSection.definition = {
    methods: ["put"],
    url: '/api/sections/{section}/duplicate',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::duplicateSection
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:209
* @route '/api/sections/{section}/duplicate'
*/
duplicateSection.url = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
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

    return duplicateSection.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::duplicateSection
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:209
* @route '/api/sections/{section}/duplicate'
*/
duplicateSection.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: duplicateSection.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::duplicateSection
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:209
* @route '/api/sections/{section}/duplicate'
*/
const duplicateSectionForm = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: duplicateSection.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::duplicateSection
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:209
* @route '/api/sections/{section}/duplicate'
*/
duplicateSectionForm.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: duplicateSection.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

duplicateSection.form = duplicateSectionForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::copySectionData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:256
* @route '/api/sections/{section}/copy-data'
*/
export const copySectionData = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: copySectionData.url(args, options),
    method: 'put',
})

copySectionData.definition = {
    methods: ["put"],
    url: '/api/sections/{section}/copy-data',
} satisfies RouteDefinition<["put"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::copySectionData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:256
* @route '/api/sections/{section}/copy-data'
*/
copySectionData.url = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
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

    return copySectionData.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::copySectionData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:256
* @route '/api/sections/{section}/copy-data'
*/
copySectionData.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: copySectionData.url(args, options),
    method: 'put',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::copySectionData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:256
* @route '/api/sections/{section}/copy-data'
*/
const copySectionDataForm = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: copySectionData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::copySectionData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:256
* @route '/api/sections/{section}/copy-data'
*/
copySectionDataForm.put = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: copySectionData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

copySectionData.form = copySectionDataForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::showLinkedSection
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
export const showLinkedSection = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLinkedSection.url(args, options),
    method: 'get',
})

showLinkedSection.definition = {
    methods: ["get","head"],
    url: '/api/sections/{slug}/link/{linkId}/page/{pageId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::showLinkedSection
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
showLinkedSection.url = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            slug: args[0],
            linkId: args[1],
            pageId: args[2],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slug: args.slug,
        linkId: args.linkId,
        pageId: args.pageId,
    }

    return showLinkedSection.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{linkId}', parsedArgs.linkId.toString())
            .replace('{pageId}', parsedArgs.pageId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::showLinkedSection
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
showLinkedSection.get = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLinkedSection.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::showLinkedSection
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
showLinkedSection.head = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLinkedSection.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::showLinkedSection
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
const showLinkedSectionForm = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLinkedSection.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::showLinkedSection
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
showLinkedSectionForm.get = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLinkedSection.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::showLinkedSection
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
showLinkedSectionForm.head = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLinkedSection.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showLinkedSection.form = showLinkedSectionForm

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/sections',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::index
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:20
* @route '/api/sections'
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
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
export const show = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/sections/{section}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
show.url = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{section}', parsedArgs.section.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
show.get = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
show.head = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
const showForm = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
showForm.get = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::show
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:87
* @route '/api/sections/{section}'
*/
showForm.head = (args: { section: string | { slug: string } } | [section: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::getSectionData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
export const getSectionData = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSectionData.url(args, options),
    method: 'get',
})

getSectionData.definition = {
    methods: ["get","head"],
    url: '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::getSectionData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
getSectionData.url = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            sectionSlug: args[0],
            pageSlug: args[1],
            linkId: args[2],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sectionSlug: args.sectionSlug,
        pageSlug: args.pageSlug,
        linkId: args.linkId,
    }

    return getSectionData.definition.url
            .replace('{sectionSlug}', parsedArgs.sectionSlug.toString())
            .replace('{pageSlug}', parsedArgs.pageSlug.toString())
            .replace('{linkId}', parsedArgs.linkId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::getSectionData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
getSectionData.get = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSectionData.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::getSectionData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
getSectionData.head = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getSectionData.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::getSectionData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
const getSectionDataForm = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSectionData.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::getSectionData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
getSectionDataForm.get = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSectionData.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::getSectionData
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
getSectionDataForm.head = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSectionData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getSectionData.form = getSectionDataForm

const SectionController = { store, update, destroy, updateDataSourcePage, duplicateSection, copySectionData, showLinkedSection, index, show, getSectionData }

export default SectionController