<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Requests\Content\MenuSettingRequest;
use Creopse\Creopse\Http\Resources\Content\MenuSettingResource;
use Creopse\Creopse\Models\MenuSetting;
use Illuminate\Http\Request;
use Creopse\Creopse\Http\Controllers\Controller;

class MenuSettingController extends Controller
{
    /**
     * Display a paginated listing of the resource with search query.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $query = $request->query('query');

        if ($pageSize) {

            $items = MenuSetting::query();

            if ($query) {
                $items = $items->where(function ($q) use ($query) {
                    $q->where('key', 'like', '%' . $query . '%')
                        ->orWhere('description', 'like', '%' . $query . '%');
                });
            }

            $items = $items->paginate($pageSize);

            return $this->sendResponse([
                'items' => MenuSettingResource::collection($items),
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
            MenuSettingResource::collection(MenuSetting::all())
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuSettingRequest $request)
    {
        $request->validated();

        $menuSetting = MenuSetting::create([
            'key' => $request->input('key'),
            'default_value' => $request->input('default_value'),
            'description' => $request->input('description'),
        ]);

        return $this->sendResponse(
            new MenuSettingResource($menuSetting),
            ResponseStatusCode::CREATED,
            'MenuSetting created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(MenuSetting $menuSetting)
    {
        return $this->sendResponse(new MenuSettingResource($menuSetting));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MenuSetting $menuSetting)
    {
        $menuSetting->update($request->all());

        return $this->sendResponse(
            new MenuSettingResource($menuSetting),
            ResponseStatusCode::OK,
            'MenuSetting updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuSetting $menuSetting)
    {
        $menuSetting->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'MenuSetting deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(MenuSetting $menuSetting)
    {
        $menuSetting->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'MenuSetting deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(MenuSetting $menuSetting)
    {
        $menuSetting->restore();

        return $this->sendResponse(
            new MenuSettingResource($menuSetting),
            ResponseStatusCode::OK,
            'MenuSetting restored successfully'
        );
    }
}
