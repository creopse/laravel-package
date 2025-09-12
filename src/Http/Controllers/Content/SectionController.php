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
    public function getSectionData(String $sectionSlug, String $pageSlug, String $linkId)
    {
        $section = Section::where('slug', $sectionSlug)->first();
        $page = Page::where('slug', $pageSlug)->first();

        if ($section && $page) {
            $pageSection = PageSection::where('section_id', $section->id)
                ->where('page_id', $page->id)
                ->where('link_id', $linkId)
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
                    ->where('link_id', $pageSection->data_source_link_id)
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
     * Get a section linked to a page.
     */
    public function showLinkedSection(String $slug, String $linkId, String $pageId)
    {
        $section = Section::where('slug', $slug)->with(['pages' => function ($query) use ($pageId, $linkId) {
            $query->where('pages.id', $pageId)
                ->where('page_section.link_id', $linkId)
                ->using(PageSection::class)
                ->withPivot([
                    'link_id',
                    'data_source_link_id',
                    'data_source_page_id',
                    'data',
                    'settings'
                ]);
        }])->first();

        return $this->sendResponse(new SectionResource($section));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Section $section)
    {
        $section->update($request->except(['data_source_page_id', 'data_source_link_id', 'data', 'settings']));

        $sectionData = $request->input('data');
        $sectionLinkId = $request->input('data_source_link_id');
        $sectionPageId = $request->input('data_source_page_id');
        $sectionSettings = $request->input('settings');

        if ($request->has('data')) {
            $dataSourcePageSection = PageSection::where('section_id', $section->id)
                ->where('page_id', $sectionPageId)
                ->where('link_id', $sectionLinkId)
                ->first();

            if ($dataSourcePageSection) {
                $dataSourcePageSection->data = $sectionData;
                $dataSourcePageSection->save();
            }
        }

        if ($request->has('settings')) {
            $dataSourcePageSection = PageSection::where('section_id', $section->id)
                ->where('page_id', $sectionPageId)
                ->where('link_id', $sectionLinkId)
                ->first();

            if ($dataSourcePageSection && isset($sectionSettings) && is_array($sectionSettings)) {
                $dataSourcePageSection->settings = $sectionSettings;
                $dataSourcePageSection->save();
            }
        }

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
        $linkId = $request->input('link_id');
        $sourcePageId = $request->input('source_page_id');
        $sourceLinkId = $request->input('source_link_id');

        if ($sourcePageId === null) {
            PageSection::where('section_id', $section->id)
                ->where('page_id', $pageId)
                ->where('link_id', $linkId)
                ->update([
                    'data_source_page_id' => null,
                    'data_source_link_id' => 'default'
                ]);
        } else {
            Page::findOrFail($pageId);

            PageSection::where('section_id', $section->id)
                ->where('page_id', $pageId)
                ->where('link_id', $linkId)
                ->update([
                    'data_source_page_id' => $sourcePageId,
                    'data_source_link_id' => $sourceLinkId
                ]);
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
