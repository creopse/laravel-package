<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Models\UserDevice;
use Creopse\Creopse\Traits\AuthorizesOwnUserData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserDeviceController extends Controller
{
    use AuthorizesOwnUserData;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(UserDevice::with('user')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => ['required'],
            'device_id' => ['required'],
        ]);

        // If data not valid return error
        if ($validator->fails()) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Validation failed',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        // SEC-10: user_id came straight from client input with no check -
        // any authenticated caller could register/overwrite a device under
        // any other user's account.
        if ($unauthorized = $this->rejectUnlessOwnedOrPermitted((int) $request->input('user_id'))) {
            return $unauthorized;
        }

        $userDevice = UserDevice::updateOrCreate(
            [
                'user_id' => $request->input('user_id'),
                'device_id' => $request->input('device_id'),
            ],
            [
                'is_active' => $request->input('is_active'),
                'data' => $request->input('data'),
            ]
        );

        return $this->sendResponse(
            $userDevice,
            ResponseStatusCode::CREATED,
            'User device created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(UserDevice $userDevice)
    {
        if ($unauthorized = $this->rejectUnlessOwnedOrPermitted($userDevice->user_id)) {
            return $unauthorized;
        }

        return $this->sendResponse($userDevice->load('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserDevice $userDevice)
    {
        if ($unauthorized = $this->rejectUnlessOwnedOrPermitted($userDevice->user_id)) {
            return $unauthorized;
        }

        // SEC-10: user_id must never be mass-assignable here - there is no
        // legitimate "transfer this device to another user" feature, and
        // allowing it would let the ownership check above be bypassed via
        // the update payload itself.
        $userDevice->update($request->except('user_id'));

        return $this->sendResponse(
            $userDevice,
            ResponseStatusCode::OK,
            'User device updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserDevice $userDevice)
    {
        if ($unauthorized = $this->rejectUnlessOwnedOrPermitted($userDevice->user_id)) {
            return $unauthorized;
        }

        $userDevice->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'User device deleted successfully'
        );
    }
}
