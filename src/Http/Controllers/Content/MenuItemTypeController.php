<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Content\MenuItemTypeRequest;
use Creopse\Creopse\Http\Resources\Content\MenuItemTypeResource;
use Creopse\Creopse\Models\MenuItemType;
use Illuminate\Http\Request;

class MenuItemTypeController extends Controller
{
    /**
     * Display a paginated listing of the resource with search query.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $query = $request->query('query');

        if ($pageSize) {

            $items = MenuItemType::query();

            if ($query) {
                $items = $items->where(function ($q) use ($query) {
                    $q->where('name', 'like', '%' . $query . '%')
                        ->orWhere('description', 'like', '%' . $query . '%');
                });
            }

            $items = $items->paginate($pageSize);

            return $this->sendResponse([
                'items' => MenuItemTypeResource::collection($items),
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
            MenuItemTypeResource::collection(MenuItemType::all())
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuItemTypeRequest $request)
    {
        $request->validated();

        $menuItemType = MenuItemType::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
        ]);

        return $this->sendResponse(
            new MenuItemTypeResource($menuItemType),
            ResponseStatusCode::CREATED,
            'MenuItemType created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(MenuItemType $menuItemType)
    {
        return $this->sendResponse(new MenuItemTypeResource($menuItemType));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MenuItemType $menuItemType)
    {
        $menuItemType->update($request->all());

        return $this->sendResponse(
            new MenuItemTypeResource($menuItemType),
            ResponseStatusCode::OK,
            'MenuItemType updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuItemType $menuItemType)
    {
        $menuItemType->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'MenuItemType deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(MenuItemType $menuItemType)
    {
        $menuItemType->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'MenuItemType deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(MenuItemType $menuItemType)
    {
        $menuItemType->restore();

        return $this->sendResponse(
            new MenuItemTypeResource($menuItemType),
            ResponseStatusCode::OK,
            'MenuItemType restored successfully'
        );
    }
}
