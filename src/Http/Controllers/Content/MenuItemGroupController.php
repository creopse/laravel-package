<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Content\MenuItemGroupRequest;
use Creopse\Creopse\Http\Resources\Content\MenuItemGroupResource;
use Creopse\Creopse\Models\MenuItemGroup;
use Creopse\Creopse\Traits\HasResourceCrud;
use Illuminate\Http\Request;

class MenuItemGroupController extends Controller
{
    use HasResourceCrud;

    protected function crudModelClass(): string
    {
        return MenuItemGroup::class;
    }

    protected function crudResourceClass(): string
    {
        return MenuItemGroupResource::class;
    }

    protected function crudResourceName(): string
    {
        return 'MenuItemGroup';
    }

    protected function crudSearchableColumns(): array
    {
        return ['name', 'description'];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuItemGroupRequest $request)
    {
        $request->validated();

        return $this->crudStore([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(MenuItemGroup $menuItemGroup)
    {
        return $this->crudShow($menuItemGroup);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MenuItemGroup $menuItemGroup)
    {
        return $this->crudUpdate($menuItemGroup, $request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuItemGroup $menuItemGroup)
    {
        return $this->crudDestroy($menuItemGroup);
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(MenuItemGroup $menuItemGroup)
    {
        return $this->crudForceDestroy($menuItemGroup);
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(MenuItemGroup $menuItemGroup)
    {
        return $this->crudRestore($menuItemGroup);
    }
}
