import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::linked
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
export const linked = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: linked.url(args, options),
    method: 'get',
})

linked.definition = {
    methods: ["get","head"],
    url: '/api/sections/{slug}/link/{linkId}/page/{pageId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::linked
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
linked.url = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions) => {
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

    return linked.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{linkId}', parsedArgs.linkId.toString())
            .replace('{pageId}', parsedArgs.pageId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::linked
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
linked.get = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: linked.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::linked
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
linked.head = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: linked.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::linked
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
const linkedForm = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: linked.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::linked
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
linkedForm.get = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: linked.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\Content\SectionController::linked
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/Content/SectionController.php:95
* @route '/api/sections/{slug}/link/{linkId}/page/{pageId}'
*/
linkedForm.head = (args: { slug: string | number, linkId: string | number, pageId: string | number } | [slug: string | number, linkId: string | number, pageId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: linked.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

linked.form = linkedForm
