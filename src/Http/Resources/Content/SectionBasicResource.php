<?php

namespace Creopse\Creopse\Http\Resources\Content;

use Creopse\Creopse\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SectionBasicResource extends JsonResource
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
            'dataStructure' => $this->data_structure,
            'settingsStructure' => $this->settings_structure,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'pagesCount' => $this->whenCounted('pages'),
            'pages' => $this->whenLoaded('pages', function () {
                return $this->pages;
            }),
            'dataSourceLinkId' => $this->whenPivotLoaded('page_section', fn() => $this->pivot->data_source_link_id),
            'dataSourcePageId' => $this->whenPivotLoaded('page_section', fn() => $this->pivot->data_source_page_id),
            'dataSourcePageTitle' => $this->whenPivotLoaded('page_section', function () {
                return optional(Page::find($this->pivot->data_source_page_id))->title;
            }),
            'linkId' => $this->whenPivotLoaded('page_section', fn() => $this->pivot->link_id),
        ];
    }
}
