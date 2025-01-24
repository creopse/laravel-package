<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Requests\Content\MenuItemGroupRequest;
use Creopse\Creopse\Http\Resources\Content\MenuItemGroupResource;
use Creopse\Creopse\Models\MenuItemGroup;
use Illuminate\Http\Request;
use Creopse\Creopse\Http\Controllers\Controller;

class MenuItemGroupController extends Controller
{
    /**
     * Display a paginated listing of the resource with search query.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $query = $request->query('query');

        if ($pageSize) {

            $items = MenuItemGroup::query();

            if ($query) {
                $items = $items->where(function ($q) use ($query) {
                    $q->where('name', 'like', '%' . $query . '%')
                        ->orWhere('description', 'like', '%' . $query . '%');
                });
            }

            $items = $items->paginate($pageSize);

            return $this->sendResponse([
                'items' => MenuItemGroupResource::collection($items),
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
            MenuItemGroupResource::collection(MenuItemGroup::all())
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuItemGroupRequest $request)
    {
        $request->validated();

        $menuItemGroup = MenuItemGroup::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
        ]);

        return $this->sendResponse(
            new MenuItemGroupResource($menuItemGroup),
            ResponseStatusCode::CREATED,
            'MenuItemGroup created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(MenuItemGroup $menuItemGroup)
    {
        return $this->sendResponse(new MenuItemGroupResource($menuItemGroup));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MenuItemGroup $menuItemGroup)
    {
        $menuItemGroup->update($request->all());

        return $this->sendResponse(
            new MenuItemGroupResource($menuItemGroup),
            ResponseStatusCode::OK,
            'MenuItemGroup updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuItemGroup $menuItemGroup)
    {
        $menuItemGroup->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'MenuItemGroup deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(MenuItemGroup $menuItemGroup)
    {
        $menuItemGroup->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'MenuItemGroup deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(MenuItemGroup $menuItemGroup)
    {
        $menuItemGroup->restore();

        return $this->sendResponse(
            new MenuItemGroupResource($menuItemGroup),
            ResponseStatusCode::OK,
            'MenuItemGroup restored successfully'
        );
    }
}
