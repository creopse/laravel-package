<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Content\SectionRequest;
use Creopse\Creopse\Http\Resources\Content\SectionResource;
use Creopse\Creopse\Models\Page;
use Creopse\Creopse\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(SectionResource::collection(Section::all()->load(['pages:id,title'])->loadCount(['pages'])));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SectionRequest $request)
    {
        $request->validated();

        $section = Section::create([
            'name' => $request->input('name'),
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'data_structure' => $request->input('data_structure'),
        ]);

        return $this->sendResponse(
            new SectionResource($section),
            ResponseStatusCode::CREATED,
            'Section created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Section $section)
    {
        return $this->sendResponse(new SectionResource($section->load(['pages:id,title'])->loadCount(['pages'])));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Section $section)
    {
        $section->update($request->all());

        return $this->sendResponse(
            new SectionResource($section),
            ResponseStatusCode::OK,
            'Section updated successfully'
        );
    }

    /**
     * Update the source page of a section.
     */
    public function updateDataSourcePage(Request $request, Section $section)
    {
        $pageId = $request->input('page_id');
        $sourcePageId = $request->input('source_page_id');

        if ($sourcePageId === null) {
            DB::table('page_section')
                ->where('section_id', $section->id)
                ->where('page_id', $pageId)
                ->update(['data_source_page_id' => null]);
        } else {
            Page::findOrFail($pageId);

            DB::table('page_section')
                ->where('section_id', $section->id)
                ->where('page_id', $pageId)
                ->update(['data_source_page_id' => $sourcePageId]);
        }

        return $this->sendResponse(
            new SectionResource($section->fresh()),
            ResponseStatusCode::OK,
            'Section updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Section $section)
    {
        $section->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Section deleted successfully'
        );
    }
}
