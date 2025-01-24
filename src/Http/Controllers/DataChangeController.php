<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Requests\DataChangeRequest;
use Creopse\Creopse\Http\Resources\DataChangeResource;
use Creopse\Creopse\Models\DataChange;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class DataChangeController extends Controller
{
    /**
     * Display a paginated listing of the resource with search query.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $query = $request->query('query');

        if ($pageSize) {

            $items = DataChange::query();

            if ($query) {
                $items = $items->where(function ($q) use ($query) {
                    $q->where('table_name', 'like', '%' . $query . '%');
                });
            }

            $items = $items->paginate($pageSize);

            return $this->sendResponse([
                'items' => DataChangeResource::collection($items),
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
            DataChangeResource::collection(DataChange::all())
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DataChangeRequest $request)
    {
        $request->validated();

        $dataChange = DataChange::create([
            'table_name' => $request->input('table_name'),
            'change_id' => $request->input('change_id'),
        ]);

        return $this->sendResponse(
            new DataChangeResource($dataChange),
            ResponseStatusCode::CREATED,
            'DataChange created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(DataChange $dataChange)
    {
        return $this->sendResponse(new DataChangeResource($dataChange));
    }

    /**
     * Display the specified resource by table name.
     */
    public function showByTableName(string $tableName)
    {
        $dataChange = Cache::remember("data_change_{$tableName}", 3600 * 24, function () use ($tableName) {
            return DataChange::where('table_name', $tableName)->first();
        });

        return $this->sendResponse(new DataChangeResource($dataChange));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DataChange $dataChange)
    {
        $dataChange->update($request->all());

        return $this->sendResponse(
            new DataChangeResource($dataChange),
            ResponseStatusCode::OK,
            'DataChange updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DataChange $dataChange)
    {
        $dataChange->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'DataChange deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(DataChange $dataChange)
    {
        $dataChange->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'DataChange deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(DataChange $dataChange)
    {
        $dataChange->restore();

        return $this->sendResponse(
            new DataChangeResource($dataChange),
            ResponseStatusCode::OK,
            'DataChange restored successfully'
        );
    }
}
