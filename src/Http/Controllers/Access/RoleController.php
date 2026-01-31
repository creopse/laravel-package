<?php

namespace Creopse\Creopse\Http\Controllers\Access;

use Creopse\Creopse\Enums\AccessGuard;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Requests\Access\RoleRequest;
use Creopse\Creopse\Models\Role;
use Creopse\Creopse\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(Role::with('permissions')->get());
    }

    /**
     * Display user resources.
     */
    public function indexUser(?User $user = null)
    {
        $user = $user ?? Auth::user();

        return $this->sendResponse($user->roles()->with('permissions')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoleRequest $request)
    {
        $validated = $request->validated();

        $role = Role::create([
            'name' => $validated['name'],
            'display_name' => $validated['display_name'],
            'description' => $validated['description'],
            'guard_name' => $validated['guard_name'] ?? AccessGuard::WEB->value,
        ]);

        if ($permissions = $validated['permissions']) {
            $permissionNames = collect($permissions)
                ->pluck('name')
                ->filter()
                ->values()
                ->toArray();

            $role->givePermissionTo($permissionNames);
        }

        return $this->sendResponse(
            $role,
            ResponseStatusCode::CREATED,
            'Role created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {
        return $this->sendResponse($role);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RoleRequest $request, Role $role)
    {
        $validated = $request->validated();

        $role->update([
            'name' => $validated['name'],
            'display_name' => $validated['display_name'],
            'description' => $validated['description'],
            'guard_name' => $validated['guard_name'],
        ]);

        if ($request->has('permissions')) {
            $permissionNames = collect($validated['permissions'])
                ->pluck('name')
                ->filter()
                ->values()
                ->toArray();

            $role->syncPermissions($permissionNames);
        }

        return $this->sendResponse(
            $role,
            ResponseStatusCode::OK,
            'Role updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        $role->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Role deleted successfully'
        );
    }
}
