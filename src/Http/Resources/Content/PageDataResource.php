<?php

namespace Creopse\Creopse\Http\Resources\Content;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PageDataResource extends JsonResource
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
            'position' => $this->position,
            'content' => $this->content,
            'sections' => SectionDataResource::collection($this->sections->load([
                'pages' => function ($query) {
                    $query->select('pages.id', 'pages.title')->withPivot('link_id');
                }
            ])),
            'sectionsCount' => $this->whenCounted('sections'),
            'sectionsOrder' => $this->sections_order,
            'sectionsDisabled' => $this->sections_disabled,
        ];
    }
}
