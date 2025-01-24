<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Content\PageRequest;
use Creopse\Creopse\Http\Resources\Content\PageResource;
use Creopse\Creopse\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
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
            'sections_data' => $request->input('sections_data'),
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
        $page->update($request->except(['sections', 'sections_ids', 'sections_data', 'dispatch_data']));

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
            if ($request->has('dispatch_data') && $request->input('dispatch_data')) {
                $sectionsData = $request->input('sections_data');
                $sections = $page->sections()->get();

                foreach ($sections as $section) {
                    if (!isset($section->pivot->data_source_page_id) || empty($section->pivot->data_source_page_id)) {
                        continue;
                    }

                    $sourcePage = Page::find($section->pivot->data_source_page_id);

                    if (!$sourcePage) {
                        continue;
                    }

                    $data = is_array($sourcePage->sections_data) ? $sourcePage->sections_data : [];

                    $data[$section->slug] = $sectionsData[$section->slug];
                    $sourcePage->sections_data = $data;
                    $sourcePage->save();
                }
            } else {
                $page->sections_data = $request->input('sections_data');
                $page->save();
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
