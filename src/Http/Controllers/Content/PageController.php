<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Content\PageRequest;
use Creopse\Creopse\Http\Resources\Content\PageBasicResource;
use Creopse\Creopse\Http\Resources\Content\PageResource;
use Creopse\Creopse\Models\Page;
use Creopse\Creopse\Models\PageSection;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if ($request->boolean('basic')) {
            return $this->sendResponse(PageBasicResource::collection(Page::all()));
        }

        return $this->sendResponse(PageResource::collection(Page::all()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PageRequest $request)
    {
        $request->validated();

        $page = Page::create([
            'name' => $request->input('name'),
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'sections_order' => $request->input('sections_order'),
            'sections_disabled' => $request->input('sections_disabled')
        ]);

        if ($request->has('sections')) {
            $sectionIds = collect($request->input('sections'))->pluck('id');

            $pivotData = [];

            foreach ($sectionIds as $sectionId) {
                $pivotData[$sectionId] = [
                    'data_source_page_id' => $page->id,
                ];
            }

            $page->sections()->sync($pivotData);
        }

        if ($request->has('sections_ids')) {
            $sectionIds = $request->input('sections_ids');

            $pivotData = [];

            foreach ($sectionIds as $sectionId) {
                $pivotData[$sectionId] = [
                    'data_source_page_id' => $page->id,
                ];
            }

            $page->sections()->sync($pivotData);
        }

        return $this->sendResponse(
            new PageResource($page),
            ResponseStatusCode::CREATED,
            'Page created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        return $this->sendResponse(new PageResource($page));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Page $page)
    {
        $page->update($request->except(['sections', 'sections_ids', 'sections_data', 'sections_settings', 'dispatch_data', 'link_ids']));

        $attachSections = function ($sectionIds) use ($page) {
            $existingSections = $page->sections()->pluck('section_id')->toArray();

            $newSections = array_diff($sectionIds, $existingSections);

            $pivotData = [];

            foreach ($newSections as $sectionId) {
                $pivotData[$sectionId] = [
                    'data_source_page_id' => $page->id,
                ];
            }

            if (count($pivotData) > 0) {
                $page->sections()->attach($pivotData);
            }

            $page->sections()->sync($sectionIds);
        };

        if ($request->has('sections')) {
            $sectionIds = collect($request->input('sections'))->pluck('id')->toArray();
            $attachSections($sectionIds);
        }

        if ($request->has('sections_ids')) {
            $sectionIds = $request->input('sections_ids');
            $attachSections($sectionIds);
        }

        if ($request->has('sections_data')) {
            $sectionsData = $request->input('sections_data');
            $sections = $page->sections()->get();

            foreach ($sections as $section) {
                if (!isset($section->pivot->data_source_page_id) || empty($section->pivot->data_source_page_id)) {
                    continue;
                }

                $dataSourcePageSection = PageSection::where('section_id', $section->id)
                    ->where('page_id', $section->pivot->data_source_page_id)
                    ->first();

                if (!$dataSourcePageSection) {
                    continue;
                }

                $data = $sectionsData[$section->slug];

                $dataSourcePageSection->data = $data;
                $dataSourcePageSection->save();
            }
        }

        if ($request->has('sections_settings')) {
            $sectionsSettings = $request->input('sections_settings');
            $sections = $page->sections()->get();

            foreach ($sections as $section) {
                if (
                    isset($sectionsSettings[$section->slug]) &&
                    is_array($sectionsSettings[$section->slug])
                ) {
                    $pivot = PageSection::where('section_id', $section->id)
                        ->where('page_id', $page->id)
                        ->first();

                    if ($pivot) {
                        $pivot->settings = $sectionsSettings[$section->slug];
                        $pivot->save();
                    }
                }
            }
        }

        return $this->sendResponse(
            new PageResource($page),
            ResponseStatusCode::OK,
            'Page updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Page $page)
    {
        $page->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Page deleted successfully'
        );
    }
}
