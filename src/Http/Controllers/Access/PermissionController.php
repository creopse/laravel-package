<?php

namespace Creopse\Creopse\Http\Controllers\Access;

use Creopse\Creopse\Enums\AccessGuard;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Models\Permission;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Http\Requests\Access\PermissionRequest;
use Illuminate\Support\Facades\Auth;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(Permission::all());
    }

    /**
     * Display user resources.
     */
    public function indexUser(?User $user = null)
    {
        $user = $user ?? Auth::user();

        return $this->sendResponse($user->permissions()->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PermissionRequest $request)
    {
        $validated = $request->validated();

        $permission = Permission::create([
            'name' => $validated['name'],
            'display_name' => $validated['display_name'],
            'description' => $validated['description'],
            'guard_name' => $validated['guard_name'] ?? AccessGuard::WEB->value,
        ]);

        return $this->sendResponse(
            $permission,
            ResponseStatusCode::CREATED,
            'Permission created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Permission $permission)
    {
        return $this->sendResponse($permission);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PermissionRequest $request, Permission $permission)
    {
        $validated = $request->validated();

        $permission->update($validated);

        return $this->sendResponse(
            $permission,
            ResponseStatusCode::OK,
            'Permission updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission $permission)
    {
        $permission->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Permission deleted successfully'
        );
    }
}
