<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Content\MenuSettingRequest;
use Creopse\Creopse\Http\Resources\Content\MenuSettingResource;
use Creopse\Creopse\Models\MenuSetting;
use Creopse\Creopse\Traits\HasResourceCrud;
use Illuminate\Http\Request;

class MenuSettingController extends Controller
{
    use HasResourceCrud;

    protected function crudModelClass(): string
    {
        return MenuSetting::class;
    }

    protected function crudResourceClass(): string
    {
        return MenuSettingResource::class;
    }

    protected function crudResourceName(): string
    {
        return 'MenuSetting';
    }

    protected function crudSearchableColumns(): array
    {
        return ['key', 'description'];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuSettingRequest $request)
    {
        $request->validated();

        return $this->crudStore([
            'key' => $request->input('key'),
            'default_value' => $request->input('default_value'),
            'description' => $request->input('description'),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(MenuSetting $menuSetting)
    {
        return $this->crudShow($menuSetting);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MenuSetting $menuSetting)
    {
        return $this->crudUpdate($menuSetting, $request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuSetting $menuSetting)
    {
        return $this->crudDestroy($menuSetting);
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(MenuSetting $menuSetting)
    {
        return $this->crudForceDestroy($menuSetting);
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(MenuSetting $menuSetting)
    {
        return $this->crudRestore($menuSetting);
    }
}
