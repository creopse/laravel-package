<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Models\UserPlace;
use Creopse\Creopse\Traits\AuthorizesOwnUserData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserPlaceController extends Controller
{
    use AuthorizesOwnUserData;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(UserPlace::with('user')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => ['required'],
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
        // any authenticated caller could register/overwrite a place under
        // any other user's account.
        if ($unauthorized = $this->rejectUnlessOwnedOrPermitted((int) $request->input('user_id'))) {
            return $unauthorized;
        }

        $userPlace = UserPlace::updateOrCreate(
            [
                'user_id' => $request->input('user_id'),
            ],
            [
                'country' => $request->input('country'),
                'position' => $request->input('position'),
                'locality' => $request->input('locality'),
                'administrative_area' => $request->input('administrative_area'),
                'postal_code' => $request->input('postal_code'),
                'name' => $request->input('name'),
                'sub_administrative_area' => $request->input('sub_administrative_area'),
                'iso_country_code' => $request->input('iso_country_code'),
                'sub_locality' => $request->input('sub_locality'),
                'sub_thoroughfare' => $request->input('sub_thoroughfare'),
                'thoroughfare' => $request->input('thoroughfare'),
                'street' => $request->input('street'),
            ]
        );

        return $this->sendResponse(
            $userPlace,
            ResponseStatusCode::CREATED,
            'User place created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(UserPlace $userPlace)
    {
        if ($unauthorized = $this->rejectUnlessOwnedOrPermitted($userPlace->user_id)) {
            return $unauthorized;
        }

        return $this->sendResponse($userPlace->load('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserPlace $userPlace)
    {
        if ($unauthorized = $this->rejectUnlessOwnedOrPermitted($userPlace->user_id)) {
            return $unauthorized;
        }

        // SEC-10: user_id must never be mass-assignable here - there is no
        // legitimate "transfer this place to another user" feature, and
        // allowing it would let the ownership check above be bypassed via
        // the update payload itself.
        $userPlace->update($request->except('user_id'));

        return $this->sendResponse(
            $userPlace,
            ResponseStatusCode::OK,
            'User place updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserPlace $userPlace)
    {
        if ($unauthorized = $this->rejectUnlessOwnedOrPermitted($userPlace->user_id)) {
            return $unauthorized;
        }

        $userPlace->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'User place deleted successfully'
        );
    }
}
