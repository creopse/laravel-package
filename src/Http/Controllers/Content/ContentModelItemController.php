<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Requests\Content\ContentModelItemRequest;
use Creopse\Creopse\Http\Resources\Content\ContentModelItemResource;
use Creopse\Creopse\Models\ContentModelItem;
use Illuminate\Http\Request;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Models\ContentModel;
use Illuminate\Support\Facades\DB;

class ContentModelItemController extends Controller
{
    /**
     * Display a paginated listing of the resource with search query.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $query = $request->query('query');
        $isActive = $request->query('isActive');
        $contentModelId = $request->query('contentModelId');
        $contentModelName = $request->query('contentModelName');

        if ($pageSize) {

            $items = ContentModelItem::query();

            if ($contentModelId) {
                $items = $items->where('content_model_id', $contentModelId);
            } else if ($contentModelName) {
                $contentModel = ContentModel::where('name', $contentModelName)->first();
                $items = $items->where('content_model_id', $contentModel->id);
            }

            if ($query) {
                $items = $items->where(function ($q) use ($query) {
                    $q->where('title', 'like', '%' . $query . '%');
                });
            }

            if ($isActive) {
                $items = $items->where('is_active', $isActive);
            }

            $items = $items->paginate($pageSize);

            return $this->sendResponse([
                'items' => ContentModelItemResource::collection($items),
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

        $items = [];

        if ($contentModelId) {
            $items = ContentModelItem::where('content_model_id', $contentModelId)->get();
        } else if ($contentModelName) {
            $contentModel = ContentModel::where('name', $contentModelName)->first();
            $items = ContentModelItem::where('content_model_id', $contentModel->id)->get();
        } else {
            $items = ContentModelItem::all();
        }

        return $this->sendResponse(
            ContentModelItemResource::collection($items)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContentModelItemRequest $request)
    {
        $request->validated();

        $contentModelItem = ContentModelItem::create([
            'title' => $request->input('title'),
            'content_model_data' => $request->input('content_model_data'),
            'is_active' => $request->input('is_active'),
            'content_model_id' => $request->input('content_model_id'),
        ]);

        return $this->sendResponse(
            new ContentModelItemResource($contentModelItem),
            ResponseStatusCode::CREATED,
            'ContentModelItem created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(ContentModelItem $contentModelItem)
    {
        return $this->sendResponse(new ContentModelItemResource($contentModelItem));
    }

    /**
     * Display the list of specified resources.
     */
    public function showList(Request $request)
    {
        $items = ContentModelItem::whereIn('id', $request->input('ids') ?? [])->get();

        return $this->sendResponse(ContentModelItemResource::collection($items));
    }

    /**
     * Display the search result for a given query.
     */
    public function searchItems(Request $request, string $query = '', int $contentModelId = null)
    {
        $items = ContentModelItem::query();

        if ($contentModelId) {
            $items = $items->where('content_model_id', $contentModelId);
        }

        /* $fields = [
            'title',
            'titre',
            'name',
            'nom',
            'label',
            'text',
            'texte',
            'slug',
            'subject',
            'sujet',
            'summary',
            'description',
            'content',
            'body',
        ];

        $items = $items->where(function ($q) use ($query, $fields) {
            $q->where('title', 'like', '%' . $query . '%');
            foreach ($fields as $field) {
                $q->orWhere("content_model_data->index->$field", 'like', '%' . $query . '%');
            }
        }); */

        $items = $items->where(function ($q) use ($query) {
            $q->where('title', 'like', '%' . $query . '%')
                ->orWhere("content_model_data", 'like', '%' . $query . '%');
        });

        $items = $items->get();

        return $this->sendResponse(ContentModelItemResource::collection($items));
    }

    /**
     * Attaches relationships to a given ContentModelItem while ensuring no duplicate or reversed
     * relationships exist. If a reversed relationship is found, it is removed before attaching
     * the new relationship. This method normalizes and processes each provided related item ID.
     */
    private function attachRelationships(ContentModelItem $contentModelItem, array $relatedItems)
    {
        foreach ($relatedItems as $relatedItemId) {
            // Check if the reversed relationship exists
            $reversedExists = DB::table('content_model_item_relationships')
                ->where('item_id', $relatedItemId)
                ->where('related_item_id', $contentModelItem->id)
                ->exists();

            if ($reversedExists) {
                // Delete the reversed relationship
                DB::table('content_model_item_relationships')
                    ->where('item_id', $relatedItemId)
                    ->where('related_item_id', $contentModelItem->id)
                    ->delete();
            }

            // Insert the new relationship
            $contentModelItem->relatedItems()->attach($relatedItemId);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ContentModelItem $contentModelItem)
    {
        $contentModelItem->update($request->except(['related_items']));

        if ($request->has('related_items')) {
            $this->attachRelationships($contentModelItem, $request->input('related_items'));
        }

        return $this->sendResponse(
            new ContentModelItemResource($contentModelItem),
            ResponseStatusCode::OK,
            'ContentModelItem updated successfully'
        );
    }

    public function updateRelatedItems(Request $request, ContentModelItem $contentModelItem)
    {
        $this->attachRelationships($contentModelItem, $request->input('related_items'));

        return $this->sendResponse(
            new ContentModelItemResource($contentModelItem),
            ResponseStatusCode::OK,
            'ContentModelItem related items updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContentModelItem $contentModelItem)
    {
        $contentModelItem->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'ContentModelItem deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(ContentModelItem $contentModelItem)
    {
        $contentModelItem->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'ContentModelItem deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(ContentModelItem $contentModelItem)
    {
        $contentModelItem->restore();

        return $this->sendResponse(
            new ContentModelItemResource($contentModelItem),
            ResponseStatusCode::OK,
            'ContentModelItem restored successfully'
        );
    }
}
