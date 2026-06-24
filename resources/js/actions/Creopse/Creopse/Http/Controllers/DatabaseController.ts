import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::check
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:21
* @route '/api/database'
*/
export const check = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check.url(options),
    method: 'get',
})

check.definition = {
    methods: ["get","head"],
    url: '/api/database',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::check
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:21
* @route '/api/database'
*/
check.url = (options?: RouteQueryOptions) => {
    return check.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::check
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:21
* @route '/api/database'
*/
check.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::check
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:21
* @route '/api/database'
*/
check.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: check.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::check
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:21
* @route '/api/database'
*/
const checkForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::check
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:21
* @route '/api/database'
*/
checkForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::check
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:21
* @route '/api/database'
*/
checkForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: check.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

check.form = checkForm

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::test
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:43
* @route '/api/database/test'
*/
export const test = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(options),
    method: 'post',
})

test.definition = {
    methods: ["post"],
    url: '/api/database/test',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::test
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:43
* @route '/api/database/test'
*/
test.url = (options?: RouteQueryOptions) => {
    return test.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::test
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:43
* @route '/api/database/test'
*/
test.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::test
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:43
* @route '/api/database/test'
*/
const testForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: test.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::test
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:43
* @route '/api/database/test'
*/
testForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: test.url(options),
    method: 'post',
})

test.form = testForm

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::create
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:115
* @route '/api/database/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

create.definition = {
    methods: ["post"],
    url: '/api/database/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::create
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:115
* @route '/api/database/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::create
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:115
* @route '/api/database/create'
*/
create.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::create
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:115
* @route '/api/database/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: create.url(options),
    method: 'post',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::create
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:115
* @route '/api/database/create'
*/
createForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: create.url(options),
    method: 'post',
})

create.form = createForm

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::migrate
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:243
* @route '/api/database/migrate'
*/
export const migrate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: migrate.url(options),
    method: 'get',
})

migrate.definition = {
    methods: ["get","head"],
    url: '/api/database/migrate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::migrate
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:243
* @route '/api/database/migrate'
*/
migrate.url = (options?: RouteQueryOptions) => {
    return migrate.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::migrate
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:243
* @route '/api/database/migrate'
*/
migrate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: migrate.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::migrate
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:243
* @route '/api/database/migrate'
*/
migrate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: migrate.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::migrate
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:243
* @route '/api/database/migrate'
*/
const migrateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: migrate.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::migrate
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:243
* @route '/api/database/migrate'
*/
migrateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: migrate.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::migrate
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:243
* @route '/api/database/migrate'
*/
migrateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: migrate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

migrate.form = migrateForm

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::seed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:270
* @route '/api/database/seed'
*/
export const seed = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: seed.url(options),
    method: 'get',
})

seed.definition = {
    methods: ["get","head"],
    url: '/api/database/seed',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::seed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:270
* @route '/api/database/seed'
*/
seed.url = (options?: RouteQueryOptions) => {
    return seed.definition.url + queryParams(options)
}

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::seed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:270
* @route '/api/database/seed'
*/
seed.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: seed.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::seed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:270
* @route '/api/database/seed'
*/
seed.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: seed.url(options),
    method: 'head',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::seed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:270
* @route '/api/database/seed'
*/
const seedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: seed.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::seed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:270
* @route '/api/database/seed'
*/
seedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: seed.url(options),
    method: 'get',
})

/**
* @see \Creopse\Creopse\Http\Controllers\DatabaseController::seed
* @see Users/arkane/Dev/Projects/Web/creopse.proj/creopse.package/src/Http/Controllers/DatabaseController.php:270
* @route '/api/database/seed'
*/
seedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: seed.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

seed.form = seedForm

const DatabaseController = { check, test, create, migrate, seed }

export default DatabaseController