import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::data
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
export const data = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: data.url(args, options),
    method: 'get',
})

data.definition = {
    methods: ["get","head"],
    url: '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::data
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
data.url = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions) => {
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

    return data.definition.url
            .replace('{sectionSlug}', parsedArgs.sectionSlug.toString())
            .replace('{pageSlug}', parsedArgs.pageSlug.toString())
            .replace('{linkId}', parsedArgs.linkId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::data
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
data.get = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: data.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::data
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
data.head = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: data.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::data
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
const dataForm = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: data.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::data
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
dataForm.get = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: data.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::data
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:28
* @route '/api/section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}'
*/
dataForm.head = (args: { sectionSlug: string | number, pageSlug: string | number, linkId: string | number } | [sectionSlug: string | number, pageSlug: string | number, linkId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: data.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

data.form = dataForm

const section = {
    data: Object.assign(data, data),
}

export default section