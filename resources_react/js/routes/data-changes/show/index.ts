import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\DataChangeController::byTableName
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DataChangeController.php:86
* @route '/api/data-changes/table/{tableName}'
*/
export const byTableName = (args: { tableName: string | number } | [tableName: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byTableName.url(args, options),
    method: 'get',
})

byTableName.definition = {
    methods: ["get","head"],
    url: '/api/data-changes/table/{tableName}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DataChangeController::byTableName
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DataChangeController.php:86
* @route '/api/data-changes/table/{tableName}'
*/
byTableName.url = (args: { tableName: string | number } | [tableName: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tableName: args }
    }

    if (Array.isArray(args)) {
        args = {
            tableName: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tableName: args.tableName,
    }

    return byTableName.definition.url
            .replace('{tableName}', parsedArgs.tableName.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DataChangeController::byTableName
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DataChangeController.php:86
* @route '/api/data-changes/table/{tableName}'
*/
byTableName.get = (args: { tableName: string | number } | [tableName: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byTableName.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DataChangeController::byTableName
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DataChangeController.php:86
* @route '/api/data-changes/table/{tableName}'
*/
byTableName.head = (args: { tableName: string | number } | [tableName: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: byTableName.url(args, options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DataChangeController::byTableName
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DataChangeController.php:86
* @route '/api/data-changes/table/{tableName}'
*/
const byTableNameForm = (args: { tableName: string | number } | [tableName: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byTableName.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DataChangeController::byTableName
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DataChangeController.php:86
* @route '/api/data-changes/table/{tableName}'
*/
byTableNameForm.get = (args: { tableName: string | number } | [tableName: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byTableName.url(args, options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DataChangeController::byTableName
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DataChangeController.php:86
* @route '/api/data-changes/table/{tableName}'
*/
byTableNameForm.head = (args: { tableName: string | number } | [tableName: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byTableName.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

byTableName.form = byTableNameForm

const show = {
    byTableName: Object.assign(byTableName, byTableName),
}

export default show