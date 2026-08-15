<?php

namespace Creopse\Creopse\Traits;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Shared index/store/show/update/destroy/forceDestroy/restore behavior for
 * controllers managing a simple Eloquent resource (search + pagination on
 * index, thin create/update, JSON:API-ish response envelope). A consuming
 * controller declares the four crud*() config methods below, keeps its own
 * store()/show()/update()/destroy()/forceDestroy()/restore() methods so
 * Laravel's FormRequest injection and implicit route-model binding keep
 * working (a shared trait method can't be typed to a per-controller model
 * class), and delegates the response-building to the crud*() helpers here.
 */
trait HasResourceCrud
{
    /**
     * Fully-qualified Eloquent model class managed by the controller.
     */
    abstract protected function crudModelClass(): string;

    /**
     * Fully-qualified JsonResource class used to wrap the model.
     */
    abstract protected function crudResourceClass(): string;

    /**
     * Human-readable resource name used in response messages, e.g. "MenuLocation".
     */
    abstract protected function crudResourceName(): string;

    /**
     * Columns matched (via LIKE, OR'd together) against the `query` search parameter.
     *
     * @return array<int, string>
     */
    abstract protected function crudSearchableColumns(): array;

    /**
     * Display a paginated listing of the resource with search query.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $query = $request->query('query');

        $modelClass = $this->crudModelClass();
        $resourceClass = $this->crudResourceClass();

        if ($pageSize) {
            $items = $modelClass::query();

            if ($query) {
                $columns = $this->crudSearchableColumns();

                $items = $items->where(function ($q) use ($query, $columns) {
                    foreach ($columns as $index => $column) {
                        $index === 0
                            ? $q->where($column, 'like', '%'.$query.'%')
                            : $q->orWhere($column, 'like', '%'.$query.'%');
                    }
                });
            }

            $items = $items->paginate($pageSize);

            return $this->sendResponse([
                'items' => $resourceClass::collection($items),
                'meta' => [
                    'links' => [
                        'first' => $items->url(1),
                        'last' => $items->url($items->lastPage()),
                        'prev' => $items->previousPageUrl(),
                        'next' => $items->nextPageUrl(),
                    ],
                    'currentPage' => $items->currentPage(),
                    'perPage' => $items->perPage(),
                    'total' => $items->total(),
                    'lastPage' => $items->lastPage(),
                ],
            ]);
        }

        return $this->sendResponse(
            $resourceClass::collection($modelClass::all())
        );
    }

    /**
     * Create the model from the given attributes and respond with it (201).
     */
    protected function crudStore(array $attributes): JsonResponse
    {
        $modelClass = $this->crudModelClass();

        return $this->crudCreatedResponse($modelClass::create($attributes));
    }

    /**
     * Respond with an already-created model (201) — for controllers whose
     * store() needs extra steps between creation and the response.
     */
    protected function crudCreatedResponse($model): JsonResponse
    {
        $resourceClass = $this->crudResourceClass();

        return $this->sendResponse(
            new $resourceClass($model),
            ResponseStatusCode::CREATED,
            $this->crudResourceName().' created successfully'
        );
    }

    /**
     * Respond with the given model, wrapped in its resource.
     */
    protected function crudShow($model): JsonResponse
    {
        $resourceClass = $this->crudResourceClass();

        return $this->sendResponse(new $resourceClass($model));
    }

    /**
     * Update the model with the given attributes and respond with it.
     */
    protected function crudUpdate($model, array $attributes): JsonResponse
    {
        $model->update($attributes);

        return $this->crudUpdatedResponse($model);
    }

    /**
     * Respond with an already-updated model — for controllers whose
     * update() needs extra steps around the update itself.
     */
    protected function crudUpdatedResponse($model): JsonResponse
    {
        $resourceClass = $this->crudResourceClass();

        return $this->sendResponse(
            new $resourceClass($model),
            ResponseStatusCode::OK,
            $this->crudResourceName().' updated successfully'
        );
    }

    /**
     * Delete the model and respond.
     */
    protected function crudDestroy($model): JsonResponse
    {
        $model->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            $this->crudResourceName().' deleted successfully'
        );
    }

    /**
     * Permanently delete the model and respond.
     */
    protected function crudForceDestroy($model): JsonResponse
    {
        $model->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            $this->crudResourceName().' deleted permanently successfully'
        );
    }

    /**
     * Restore the model and respond with it.
     */
    protected function crudRestore($model): JsonResponse
    {
        $model->restore();

        $resourceClass = $this->crudResourceClass();

        return $this->sendResponse(
            new $resourceClass($model),
            ResponseStatusCode::OK,
            $this->crudResourceName().' restored successfully'
        );
    }
}
