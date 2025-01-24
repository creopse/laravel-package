<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Requests\Content\PermalinkRequest;
use Creopse\Creopse\Http\Resources\Content\PermalinkResource;
use Creopse\Creopse\Models\Permalink;
use Illuminate\Http\Request;
use Creopse\Creopse\Http\Controllers\Controller;

class PermalinkController extends Controller
{
    /**
     * Display a paginated listing of the resource with search query.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $query = $request->query('query');

        if ($pageSize) {

            $items = Permalink::query();

            if ($query) {
                $items = $items->where(function ($q) use ($query) {
                    $q->where('path_prefix', 'like', '%' . $query . '%');
                });
            }

            $items = $items->paginate($pageSize);

            return $this->sendResponse([
                'items' => PermalinkResource::collection($items),
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
            PermalinkResource::collection(Permalink::all())
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PermalinkRequest $request)
    {
        $request->validated();

        $permalink = Permalink::create([
            'path_prefix' => rtrim($request->input('path_prefix'), '/'),
            'content_type' => $request->input('content_type'),
            'content_param' => $request->input('content_param'),
            'content_id' => $request->input('content_id'),
            'page_id' => $request->input('page_id'),
        ]);

        return $this->sendResponse(
            new PermalinkResource($permalink),
            ResponseStatusCode::CREATED,
            'Permalink created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Permalink $permalink)
    {
        return $this->sendResponse(new PermalinkResource($permalink));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Permalink $permalink)
    {
        $permalink->update($request->all());

        return $this->sendResponse(
            new PermalinkResource($permalink),
            ResponseStatusCode::OK,
            'Permalink updated successfully'
        );
    }

    /**
     * Update all resources in storage.
     */
    public function updateAll(Request $request)
    {
        $data = $request->all();

        foreach ($data as $item) {
            if (isset($item['permalink_id'])) {
                Permalink::where('id', $item['permalink_id'])->update([
                    'path_prefix' => rtrim($item['path_prefix'], '/'),
                    'content_param' => $item['content_param'],
                    'page_id' => $item['page_id'],
                ]);
            } else {
                Permalink::create([
                    'path_prefix' => rtrim($item['path_prefix'], '/'),
                    'content_type' => $item['content_type'],
                    'content_param' => $item['content_param'],
                    'content_id' => $item['content_id'],
                    'page_id' => $item['page_id'],
                ]);
            }
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Permalinks updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permalink $permalink)
    {
        $permalink->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Permalink deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(Permalink $permalink)
    {
        $permalink->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Permalink deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(Permalink $permalink)
    {
        $permalink->restore();

        return $this->sendResponse(
            new PermalinkResource($permalink),
            ResponseStatusCode::OK,
            'Permalink restored successfully'
        );
    }
}
