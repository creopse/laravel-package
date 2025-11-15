<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\PermalinkContentType;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Requests\Content\ContentModelRequest;
use Creopse\Creopse\Http\Resources\Content\ContentModelResource;
use Creopse\Creopse\Models\ContentModel;
use Illuminate\Http\Request;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Models\Permalink;

class ContentModelController extends Controller
{
    /**
     * Display a paginated listing of the resource with search query.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $query = $request->query('query');
        $intent = $request->query('intent');
        $accessScope = $request->query('accessScope');

        if ($pageSize) {

            $items = ContentModel::query();

            if ($query) {
                $items = $items->where(function ($q) use ($query) {
                    $q->where('title', 'like', '%' . $query . '%')
                        ->orWhere('description', 'like', '%' . $query . '%');
                });
            }

            if ($intent) {
                $items = $items->where('intent', $intent);
            }

            if ($accessScope) {
                $items = $items->where('access_scope', $accessScope);
            }

            $items = $items->paginate($pageSize);

            return $this->sendResponse([
                'items' => ContentModelResource::collection($items),
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
            ContentModelResource::collection(ContentModel::all())
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContentModelRequest $request)
    {
        $request->validated();

        $contentModel = ContentModel::create([
            'name' => $request->input('name'),
            'title' => $request->input('title'),
            'image' => $request->input('image'),
            'description' => $request->input('description'),
            'data_structure' => $request->input('data_structure'),
            'title_field_name' => $request->input('title_field_name'),
            'intent' => $request->input('intent'),
            'access_scope' => $request->input('access_scope'),
            'has_permalink' => $request->input('has_permalink'),
        ]);

        if ($request->has('has_permalink') && $request->input('has_permalink')) {
            Permalink::create([
                'path_prefix' => rtrim($contentModel->slug, '/'),
                'content_type' => PermalinkContentType::CONTENT_MODEL->value,
                'content_param' => 'id',
                'content_id' => $contentModel->id,
            ]);
        }

        return $this->sendResponse(
            new ContentModelResource($contentModel),
            ResponseStatusCode::CREATED,
            'ContentModel created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(ContentModel $contentModel)
    {
        return $this->sendResponse(new ContentModelResource($contentModel));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ContentModel $contentModel)
    {
        $contentModel->update($request->all());

        $permalink = Permalink::where('content_type', PermalinkContentType::CONTENT_MODEL->value)
            ->where('content_id', $contentModel->id)
            ->first();

        if ($request->has('has_permalink') && $request->input('has_permalink')) {
            if (!$permalink) {
                Permalink::create([
                    'path_prefix' => rtrim($contentModel->slug, '/'),
                    'content_type' => PermalinkContentType::CONTENT_MODEL->value,
                    'content_param' => 'id',
                    'content_id' => $contentModel->id,
                ]);
            }
        } else {
            if ($permalink) {
                $permalink->delete();
            }
        }

        return $this->sendResponse(
            new ContentModelResource($contentModel),
            ResponseStatusCode::OK,
            'ContentModel updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContentModel $contentModel)
    {
        $contentModel->delete();

        $permalink = Permalink::where('content_type', PermalinkContentType::CONTENT_MODEL->value)
            ->where('content_id', $contentModel->id)
            ->first();

        if ($permalink) {
            $permalink->delete();
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'ContentModel deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(ContentModel $contentModel)
    {
        $contentModel->forceDelete();

        $permalink = Permalink::where('content_type', PermalinkContentType::CONTENT_MODEL->value)
            ->where('content_id', $contentModel->id)
            ->first();

        if ($permalink) {
            $permalink->delete();
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'ContentModel deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(ContentModel $contentModel)
    {
        $contentModel->restore();

        return $this->sendResponse(
            new ContentModelResource($contentModel),
            ResponseStatusCode::OK,
            'ContentModel restored successfully'
        );
    }
}
