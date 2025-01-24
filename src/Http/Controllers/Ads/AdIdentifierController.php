<?php

namespace Creopse\Creopse\Http\Controllers\Ads;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Ads\AdIdentifierRequest;
use Creopse\Creopse\Http\Resources\Ads\AdIdentifierResource;
use Creopse\Creopse\Models\AdIdentifier;
use Illuminate\Http\Request;

class AdIdentifierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(AdIdentifierResource::collection(AdIdentifier::all()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AdIdentifierRequest $request)
    {
        $request->validated();

        $adIdentifier = AdIdentifier::create([
            'id' => $request->input('id'),
            'content_type' => $request->input('content_type'),
            'content_size' => $request->input('content_size'),
            'reusable' => $request->input('reusable'),
            'params' => $request->input('params'),
        ]);

        return $this->sendResponse(
            new AdIdentifierResource($adIdentifier),
            ResponseStatusCode::CREATED,
            'Ad identifier created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(AdIdentifier $adIdentifier)
    {
        return $this->sendResponse(new AdIdentifierResource($adIdentifier));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AdIdentifier $adIdentifier)
    {
        $adIdentifier->update($request->all());

        return $this->sendResponse(
            new AdIdentifierResource($adIdentifier),
            ResponseStatusCode::OK,
            'Ad identifier updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AdIdentifier $adIdentifier)
    {
        $adIdentifier->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Ad identifier deleted successfully'
        );
    }
}
