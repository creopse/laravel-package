import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
const FeedController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FeedController.url(options),
    method: 'get',
})

FeedController.definition = {
    methods: ["get","head"],
    url: '/feed',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
FeedController.url = (options?: RouteQueryOptions) => {
    return FeedController.definition.url + queryParams(options)
}

/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
FeedController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FeedController.url(options),
    method: 'get',
})

/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
FeedController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FeedController.url(options),
    method: 'head',
})

/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
const FeedControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FeedController.url(options),
    method: 'get',
})

/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
FeedControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FeedController.url(options),
    method: 'get',
})

/**
* @see \Spatie\Feed\Http\FeedController::__invoke
* @see vendor/spatie/laravel-feed/src/Http/FeedController.php:11
* @route '/feed'
*/
FeedControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FeedController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FeedController.form = FeedControllerForm

export default FeedController