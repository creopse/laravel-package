<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Content\MenuLocationRequest;
use Creopse\Creopse\Http\Resources\Content\MenuLocationResource;
use Creopse\Creopse\Models\MenuLocation;
use Creopse\Creopse\Traits\HasResourceCrud;
use Illuminate\Http\Request;

class MenuLocationController extends Controller
{
    use HasResourceCrud;

    protected function crudModelClass(): string
    {
        return MenuLocation::class;
    }

    protected function crudResourceClass(): string
    {
        return MenuLocationResource::class;
    }

    protected function crudResourceName(): string
    {
        return 'MenuLocation';
    }

    protected function crudSearchableColumns(): array
    {
        return ['name', 'description'];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuLocationRequest $request)
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
    public function show(MenuLocation $menuLocation)
    {
        return $this->crudShow($menuLocation);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MenuLocation $menuLocation)
    {
        return $this->crudUpdate($menuLocation, $request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuLocation $menuLocation)
    {
        return $this->crudDestroy($menuLocation);
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(MenuLocation $menuLocation)
    {
        return $this->crudForceDestroy($menuLocation);
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(MenuLocation $menuLocation)
    {
        return $this->crudRestore($menuLocation);
    }
}
