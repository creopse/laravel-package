<?php

namespace Creopse\Creopse\Http\Resources\Content;

use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'name' => $this->name,
            'title' => $this->title,
            'content' => $this->content,
            'sections' => SectionBasicResource::collection($this->sections->load([
                'pages' => function ($query) {
                    $query->select('pages.id', 'pages.title')->withPivot('link_id');
                }
            ])),
            'sectionsCount' => $this->whenCounted('sections'),
            'sectionsOrder' => $this->sections_order,
            'sectionsDisabled' => $this->sections_disabled,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'pivot' => $this->whenPivotLoaded('page_section', function () {
                return [
                    'dataSourceLinkId' => $this->pivot->data_source_link_id,
                    'dataSourcePageId' => $this->pivot->data_source_page_id,
                    'dataSourcePageTitle' => optional(Page::find($this->pivot->data_source_page_id))->title,
                    'linkId' => $this->pivot->link_id,
                ];
            }),
        ];
    }
}
