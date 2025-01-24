<?php

namespace Creopse\Creopse\Http\Controllers\Newsletter;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Models\NewsletterEmail;
use Creopse\Creopse\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EmailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(NewsletterEmail::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email', 'unique:newsletter_emails'],
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

        $email = NewsletterEmail::create($request->all());

        return $this->sendResponse(
            $email,
            ResponseStatusCode::CREATED,
            'Newsletter email created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(NewsletterEmail $email)
    {
        return $this->sendResponse($email);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, NewsletterEmail $email)
    {
        $email->update($request->all());

        return $this->sendResponse(
            $email,
            ResponseStatusCode::OK,
            'Newsletter email updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NewsletterEmail $email)
    {
        $email->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Newsletter email deleted successfully'
        );
    }
}
