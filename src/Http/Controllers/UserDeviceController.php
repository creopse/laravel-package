<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Models\UserDevice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserDeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(UserDevice::with(User::class)->get());
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
        return $this->sendResponse($userDevice::with(User::class)->get());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserDevice $userDevice)
    {
        $userDevice->update($request->all());

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
        $userDevice->delete();
        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'User device deleted successfully'
        );
    }
}
