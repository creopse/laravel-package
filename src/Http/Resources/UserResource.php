<?php

namespace Creopse\Creopse\Http\Resources;

use Creopse\Creopse\Http\Resources\News\ArticleResource;
use Creopse\Creopse\Http\Resources\News\CommentResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return array_merge([
            'id' => $this->id,
            'uid' => $this->uid,
            'avatar' => $this->avatar,
            'avatarUrl' => $this->avatar_url,
            'fullname' => $this->fullname,
            'lastname' => $this->lastname,
            'firstname' => $this->firstname,
            'email' => $this->email,
            'emailVerifiedAt' => $this->email_verified_at,
            'phone' => $this->phone,
            'address' => $this->address,
            'location' => $this->location,
            'profileType' => $this->profile_type,
            'profileId' => $this->profile_id,
            'accountStatus' => $this->account_status,
            'preferences' => $this->preferences,
            'authType' => $this->auth_type,
            'lastLoggedInAt' => $this->last_logged_in_at,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'roles' => $this->whenLoaded('roles', function () {
                return $this->roles()->with('permissions')->get();
            }),
            'permissions' => $this->whenLoaded('permissions', function () {
                return $this->allPermissions();
            }),
            'profile' => $this->whenLoaded('profile', function () {
                if ($this->hasAdminProfile) {
                    return new AdminProfileResource($this->profile);
                }

                return $this->profile;
            }),
            'newsComments' => $this->whenLoaded('newsComments', function () {
                return CommentResource::collection($this->newsComments);
            }),
            'newsCommentsCount' => $this->whenCounted('newsComments'),
            'newsArticles' => $this->whenLoaded('newsArticles', function () {
                return ArticleResource::collection($this->newsArticles);
            }),
            'newsArticlesCount' => $this->whenCounted('newsArticles'),
            'devices' => $this->whenLoaded('devices', function () {
                return $this->devices;
            }),
            'place' => $this->place,
        ], $this->getAppendedAttributes());
    }

    /**
     * Retrieve only the appended attributes from the model.
     */
    protected function getAppendedAttributes()
    {
        return collect($this->resource->getAppends())
            ->mapWithKeys(fn($attribute) => [$attribute => $this->{$attribute}])
            ->toArray();
    }
}
