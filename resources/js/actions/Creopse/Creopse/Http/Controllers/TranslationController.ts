import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\TranslationController::getTranslations
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/TranslationController.php:11
* @route '/api/translations/{locale}'
*/
export const getTranslations = (args: { locale: string | number } | [locale: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getTranslations.url(args, options),
    method: 'get',
})

getTranslations.definition = {
    methods: ["get","head"],
    url: '/api/translations/{locale}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\TranslationController::getTranslations
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/TranslationController.php:11
* @route '/api/translations/{locale}'
*/
getTranslations.url = (args: { locale: string | number } | [locale: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { locale: args }
    }

    if (Array.isArray(args)) {
        args = {
            locale: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        locale: args.locale,
    }

    return getTranslations.definition.url
            .replace('{locale}', parsedArgs.locale.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\TranslationController::getTranslations
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/TranslationController.php:11
* @route '/api/translations/{locale}'
*/
getTranslations.get = (args: { locale: string | number } | [locale: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getTranslations.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\TranslationController::getTranslations
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/TranslationController.php:11
* @route '/api/translations/{locale}'
*/
getTranslations.head = (args: { locale: string | number } | [locale: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getTranslations.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\TranslationController::getTranslations
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/TranslationController.php:11
* @route '/api/translations/{locale}'
*/
const getTranslationsForm = (args: { locale: string | number } | [locale: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getTranslations.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\TranslationController::getTranslations
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/TranslationController.php:11
* @route '/api/translations/{locale}'
*/
getTranslationsForm.get = (args: { locale: string | number } | [locale: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getTranslations.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\TranslationController::getTranslations
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/TranslationController.php:11
* @route '/api/translations/{locale}'
*/
getTranslationsForm.head = (args: { locale: string | number } | [locale: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getTranslations.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getTranslations.form = getTranslationsForm

const TranslationController = { getTranslations }

export default TranslationController