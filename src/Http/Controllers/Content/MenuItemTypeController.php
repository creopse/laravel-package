<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Content\MenuItemTypeRequest;
use Creopse\Creopse\Http\Resources\Content\MenuItemTypeResource;
use Creopse\Creopse\Models\MenuItemType;
use Creopse\Creopse\Traits\HasResourceCrud;
use Illuminate\Http\Request;

class MenuItemTypeController extends Controller
{
    use HasResourceCrud;

    protected function crudModelClass(): string
    {
        return MenuItemType::class;
    }

    protected function crudResourceClass(): string
    {
        return MenuItemTypeResource::class;
    }

    protected function crudResourceName(): string
    {
        return 'MenuItemType';
    }

    protected function crudSearchableColumns(): array
    {
        return ['name', 'description'];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuItemTypeRequest $request)
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
    public function show(MenuItemType $menuItemType)
    {
        return $this->crudShow($menuItemType);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MenuItemType $menuItemType)
    {
        return $this->crudUpdate($menuItemType, $request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuItemType $menuItemType)
    {
        return $this->crudDestroy($menuItemType);
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(MenuItemType $menuItemType)
    {
        return $this->crudForceDestroy($menuItemType);
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(MenuItemType $menuItemType)
    {
        return $this->crudRestore($menuItemType);
    }
}
