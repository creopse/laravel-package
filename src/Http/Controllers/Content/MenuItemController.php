<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ContentType;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Requests\Content\MenuItemRequest;
use Creopse\Creopse\Http\Resources\Content\MenuItemResource;
use Creopse\Creopse\Models\MenuItem;
use Illuminate\Http\Request;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Models\Menu;

class MenuItemController extends Controller
{
    /**
     * Display a paginated listing of the resource with search query.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $query = $request->query('query');
        $menuId = $request->query('menuId');
        $menuName = $request->query('menuName');

        if ($pageSize) {

            $items = MenuItem::query();

            if ($menuId) {
                $items = $items->where('menu_id', $menuId);
            } else if ($menuName) {
                $menu = Menu::where('name', $menuName)->first();
                $items = $items->where('menu_id', $menu->id);
            }

            if ($query) {
                $items = $items->where(function ($q) use ($query) {
                    $q->where('title', 'like', '%' . $query . '%')
                        ->orWhere('description', 'like', '%' . $query . '%');
                });
            }

            $items = $items->orderBy('position')->paginate($pageSize);

            $items->getCollection()->transform(function ($item) {
                if ($item->content_type && $item->content_id) {
                    try {
                        $contentType = ContentType::from($item->content_type);
                        $modelClass = $contentType->getModelClass();

                        if (class_exists($modelClass)) {
                            $item->content = $modelClass::find($item->content_id);
                        }
                    } catch (\ValueError $e) {
                        $item->content = null;
                    }
                }

                return $item;
            });

            return $this->sendResponse([
                'items' => MenuItemResource::collection($items),
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

        if ($menuId) {
            $items = MenuItem::where('menu_id', $menuId)->orderBy('position')->get();
        } else if ($menuName) {
            $menu = Menu::where('name', $menuName)->first();
            $items = MenuItem::where('menu_id', $menu->id)->orderBy('position')->get();
        } else {
            $items = MenuItem::orderBy('position')->get();;
        }

        $items->transform(function ($item) {
            if ($item->content_type && $item->content_id) {
                try {
                    $contentType = ContentType::from($item->content_type);
                    $modelClass = $contentType->getModelClass();

                    if (class_exists($modelClass)) {
                        $item->content = $modelClass::find($item->content_id);
                    }
                } catch (\ValueError $e) {
                    $item->content = null;
                }
            }

            return $item;
        });

        return $this->sendResponse(
            MenuItemResource::collection($items)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuItemRequest $request)
    {
        $request->validated();

        $menuItem = MenuItem::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'path' => $request->input('path'),
            'url' => $request->input('url'),
            'controller' => $request->input('controller'),
            'parent_id' => $request->input('parent_id'),
            'position' => $request->input('position'),
            'target_type' => $request->input('target_type'),
            'is_active' => $request->input('is_active'),
            'is_visible' => $request->input('is_visible'),
            'color' => $request->input('color'),
            'icon' => $request->input('icon'),
            'menu_id' => $request->input('menu_id'),
            'page_id' => $request->input('page_id'),
            'section_id' => $request->input('section_id'),
            'menu_item_group_id' => $request->input('menu_item_group_id'),
            'content_type' => $request->input('content_type'),
            'content_id' => $request->input('content_id'),
        ]);

        return $this->sendResponse(
            new MenuItemResource($menuItem),
            ResponseStatusCode::CREATED,
            'MenuItem created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(MenuItem $menuItem)
    {
        return $this->sendResponse(new MenuItemResource($menuItem));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MenuItem $menuItem)
    {
        $menuItem->update($request->all());

        return $this->sendResponse(
            new MenuItemResource($menuItem),
            ResponseStatusCode::OK,
            'MenuItem updated successfully'
        );
    }

    /**
     * Update the position of a menu item in the order they appear in the menu.
     */
    public function updatePosition(Request $request)
    {
        $items = $request->input('items');

        foreach ($items as $index => $item) {
            MenuItem::where('id', $item['id'])->update([
                'position' => $index,
            ]);
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'MenuItem position updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuItem $menuItem)
    {
        $children = MenuItem::where('parent_id', $menuItem->id)->get();

        foreach ($children as $child) {
            $child->delete();
        }

        $menuItem->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'MenuItem deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(MenuItem $menuItem)
    {
        $children = MenuItem::where('parent_id', $menuItem->id)->get();

        foreach ($children as $child) {
            $child->forceDelete();
        }

        $menuItem->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'MenuItem deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(MenuItem $menuItem)
    {
        $menuItem->restore();

        return $this->sendResponse(
            new MenuItemResource($menuItem),
            ResponseStatusCode::OK,
            'MenuItem restored successfully'
        );
    }
}
