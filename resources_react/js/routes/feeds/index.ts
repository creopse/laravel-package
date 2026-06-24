import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
export const main = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: main.url(options),
    method: 'get',
})

main.definition = {
    methods: ["get","head"],
    url: '/feed',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
main.url = (options?: RouteQueryOptions) => {
    return main.definition.url + queryParams(options)
}

/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
main.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: main.url(options),
    method: 'get',
})

/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
main.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: main.url(options),
    method: 'head',
})

/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
const mainForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: main.url(options),
    method: 'get',
})

/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
mainForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: main.url(options),
    method: 'get',
})

/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
mainForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: main.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

main.form = mainForm

const feeds = {
    main: Object.assign(main, main),
}

export default feeds