<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Requests\Content\MenuRequest;
use Creopse\Creopse\Http\Resources\Content\MenuResource;
use Creopse\Creopse\Models\Menu;
use Illuminate\Http\Request;
use Creopse\Creopse\Http\Controllers\Controller;

class MenuController extends Controller
{
    /**
     * Display a paginated listing of the resource with search query.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $query = $request->query('query');

        if ($pageSize) {

            $items = Menu::query();

            if ($query) {
                $items = $items->where(function ($q) use ($query) {
                    $q->where('title', 'like', '%' . $query . '%')
                        ->orWhere('description', 'like', '%' . $query . '%');
                });
            }

            $items = $items->paginate($pageSize);

            return $this->sendResponse([
                'items' => MenuResource::collection($items),
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
            MenuResource::collection(Menu::all())
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuRequest $request)
    {
        $request->validated();

        $menu = Menu::create([
            'name' => $request->input('name'),
            'title' => $request->input('title'),
            'description' => $request->input('description'),
        ]);

        if ($request->has('menu_location_id')) {
            $menuLocationId = $request->input('menu_location_id');

            $existingMenu = Menu::where('menu_location_id', $menuLocationId)->first();

            if ($existingMenu && $existingMenu->id !== $menu->id) {
                $existingMenu->update(['menu_location_id' => null]);
            }

            $menu->update(['menu_location_id' => $menuLocationId]);
        }

        return $this->sendResponse(
            new MenuResource($menu),
            ResponseStatusCode::CREATED,
            'Menu created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        return $this->sendResponse(new MenuResource($menu));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Menu $menu)
    {
        $menu->update($request->except(['menu_location_id']));

        if ($request->has('menu_location_id')) {
            $menuLocationId = $request->input('menu_location_id');

            $existingMenu = Menu::where('menu_location_id', $menuLocationId)->first();

            if ($existingMenu && $existingMenu->id !== $menu->id) {
                $existingMenu->update(['menu_location_id' => null]);
            }

            $menu->update(['menu_location_id' => $menuLocationId]);
        }

        return $this->sendResponse(
            new MenuResource($menu),
            ResponseStatusCode::OK,
            'Menu updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        $menu->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Menu deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(Menu $menu)
    {
        $menu->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Menu deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(Menu $menu)
    {
        $menu->restore();

        return $this->sendResponse(
            new MenuResource($menu),
            ResponseStatusCode::OK,
            'Menu restored successfully'
        );
    }
}
