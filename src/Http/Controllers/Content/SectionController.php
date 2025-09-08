<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Content\SectionRequest;
use Creopse\Creopse\Http\Resources\Content\SectionResource;
use Creopse\Creopse\Models\Page;
use Creopse\Creopse\Models\PageSection;
use Creopse\Creopse\Models\Section;
use Illuminate\Http\Request;

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
     * Display a section data.
     */
    public function getSectionData(String $sectionSlug, String $pageSlug)
    {
        $section = Section::where('slug', $sectionSlug)->first();
        $page = Page::where('slug', $pageSlug)->first();

        if ($section && $page) {
            $pageSection = PageSection::where('section_id', $section->id)
                ->where('page_id', $page->id)
                ->first();

            if ($pageSection) {
                if ($page->id == $pageSection->data_source_page_id) {
                    return $this->sendResponse(
                        Functions::convertKeysToCamelCase($pageSection->data),
                        ResponseStatusCode::OK,
                        'Section data retrieved successfully'
                    );
                }

                $dataSourcePageSection = PageSection::where('section_id', $section->id)
                    ->where('page_id', $pageSection->data_source_page_id)
                    ->first();

                if ($dataSourcePageSection) {
                    return $this->sendResponse(
                        Functions::convertKeysToCamelCase($dataSourcePageSection->data),
                        ResponseStatusCode::OK,
                        'Section data retrieved successfully'
                    );
                }
            }
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::NOT_FOUND,
            'Section or page not found'
        );
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
            'settings_structure' => $request->input('settings_structure'),
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
            PageSection::where('section_id', $section->id)
                ->where('page_id', $pageId)
                ->update(['data_source_page_id' => null]);
        } else {
            Page::findOrFail($pageId);

            PageSection::where('section_id', $section->id)
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
