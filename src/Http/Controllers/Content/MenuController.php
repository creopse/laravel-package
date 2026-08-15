<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Content\MenuRequest;
use Creopse\Creopse\Http\Resources\Content\MenuResource;
use Creopse\Creopse\Models\Menu;
use Creopse\Creopse\Traits\HasResourceCrud;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    use HasResourceCrud;

    protected function crudModelClass(): string
    {
        return Menu::class;
    }

    protected function crudResourceClass(): string
    {
        return MenuResource::class;
    }

    protected function crudResourceName(): string
    {
        return 'Menu';
    }

    protected function crudSearchableColumns(): array
    {
        return ['title', 'description'];
    }

    /**
     * A menu location can only be assigned to one menu at a time: stealing
     * it from whichever menu currently holds it before assigning it here.
     */
    private function syncMenuLocation(Request $request, Menu $menu): void
    {
        if (! $request->has('menu_location_id')) {
            return;
        }

        $menuLocationId = $request->input('menu_location_id');

        $existingMenu = Menu::where('menu_location_id', $menuLocationId)->first();

        if ($existingMenu && $existingMenu->id !== $menu->id) {
            $existingMenu->update(['menu_location_id' => null]);
        }

        $menu->update(['menu_location_id' => $menuLocationId]);
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
            'data' => $request->input('data'),
        ]);

        $this->syncMenuLocation($request, $menu);

        return $this->crudCreatedResponse($menu);
    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        return $this->crudShow($menu);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Menu $menu)
    {
        $menu->update($request->except(['menu_location_id']));

        $this->syncMenuLocation($request, $menu);

        return $this->crudUpdatedResponse($menu);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        return $this->crudDestroy($menu);
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(Menu $menu)
    {
        return $this->crudForceDestroy($menu);
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(Menu $menu)
    {
        return $this->crudRestore($menu);
    }
}
