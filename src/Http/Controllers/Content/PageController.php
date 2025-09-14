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
        $page->update($request->except(['sections', 'sections_ids', 'removed_sections_ids']));

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

        if ($request->has('removed_sections_ids')) {
            $removedSectionsIds = $request->input('removed_sections_ids');

            foreach ($removedSectionsIds as $sectionId) {
                PageSection::where('page_id', $page->id)
                    ->where('section_id', $sectionId['id'])
                    ->where('link_id', $sectionId['link_id'])
                    ->delete();
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
