<?php

namespace Creopse\Creopse\Http\Controllers\Newsletter;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Models\NewsletterCampaign;
use Creopse\Creopse\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CampaignController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(NewsletterCampaign::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'string'],
            'subject' => ['required', 'string'],
            'content' => ['required', 'string'],
            'raw_content' => ['required', 'string'],
            'recipients' => ['required', 'array', 'min:1'],
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

        $campaign = NewsletterCampaign::create($request->all());

        return $this->sendResponse(
            $campaign,
            ResponseStatusCode::CREATED,
            'Newsletter campaign created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(NewsletterCampaign $campaign)
    {
        return $this->sendResponse($campaign);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, NewsletterCampaign $campaign)
    {
        $campaign->update($request->all());

        return $this->sendResponse(
            $campaign,
            ResponseStatusCode::OK,
            'Newsletter campaign updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NewsletterCampaign $campaign)
    {
        $campaign->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Newsletter campaign deleted successfully'
        );
    }
}
