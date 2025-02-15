<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Models\UserPlace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserPlaceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(UserPlace::with(User::class)->get());
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
        return $this->sendResponse($userPlace::with(User::class)->get());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserPlace $userPlace)
    {
        $userPlace->update($request->all());

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
        $userPlace->delete();
        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'User place deleted successfully'
        );
    }
}
