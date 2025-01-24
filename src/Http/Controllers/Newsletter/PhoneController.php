<?php

namespace Creopse\Creopse\Http\Controllers\Newsletter;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Models\NewsletterPhone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PhoneController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(NewsletterPhone::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => ['required', 'phone', 'unique:newsletter_phones'],
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

        $phone = NewsletterPhone::create($request->all());

        return $this->sendResponse(
            $phone,
            ResponseStatusCode::CREATED,
            'Newsletter phone created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(NewsletterPhone $phone)
    {
        return $this->sendResponse($phone);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, NewsletterPhone $phone)
    {
        $phone->update($request->all());

        return $this->sendResponse(
            $phone,
            ResponseStatusCode::OK,
            'Newsletter phone updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NewsletterPhone $phone)
    {
        $phone->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Newsletter phone deleted successfully'
        );
    }
}
