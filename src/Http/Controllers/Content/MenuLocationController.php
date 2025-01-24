<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Requests\Content\MenuLocationRequest;
use Creopse\Creopse\Http\Resources\Content\MenuLocationResource;
use Creopse\Creopse\Models\MenuLocation;
use Illuminate\Http\Request;
use Creopse\Creopse\Http\Controllers\Controller;

class MenuLocationController extends Controller
{
    /**
     * Display a paginated listing of the resource with search query.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $query = $request->query('query');

        if ($pageSize) {

            $items = MenuLocation::query();

            if ($query) {
                $items = $items->where(function ($q) use ($query) {
                    $q->where('name', 'like', '%' . $query . '%')
                        ->orWhere('description', 'like', '%' . $query . '%');
                });
            }

            $items = $items->paginate($pageSize);

            return $this->sendResponse([
                'items' => MenuLocationResource::collection($items),
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
            MenuLocationResource::collection(MenuLocation::all())
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuLocationRequest $request)
    {
        $request->validated();

        $menuLocation = MenuLocation::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
        ]);

        return $this->sendResponse(
            new MenuLocationResource($menuLocation),
            ResponseStatusCode::CREATED,
            'MenuLocation created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(MenuLocation $menuLocation)
    {
        return $this->sendResponse(new MenuLocationResource($menuLocation));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MenuLocation $menuLocation)
    {
        $menuLocation->update($request->all());

        return $this->sendResponse(
            new MenuLocationResource($menuLocation),
            ResponseStatusCode::OK,
            'MenuLocation updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuLocation $menuLocation)
    {
        $menuLocation->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'MenuLocation deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(MenuLocation $menuLocation)
    {
        $menuLocation->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'MenuLocation deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(MenuLocation $menuLocation)
    {
        $menuLocation->restore();

        return $this->sendResponse(
            new MenuLocationResource($menuLocation),
            ResponseStatusCode::OK,
            'MenuLocation restored successfully'
        );
    }
}
