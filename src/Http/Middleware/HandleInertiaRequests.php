<?php

namespace Creopse\Creopse\Http\Middleware;

use Creopse\Creopse\Enums\ContentType;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Http\Resources\Content\{PageDataResource, ContentModelResource, MenuItemGroupResource, MenuLocationResource, MenuResource, SectionResource};
use Creopse\Creopse\Http\Resources\{UserResource, Ads\AdResource, Ads\AdIdentifierResource};
use Creopse\Creopse\Models\{AppInformation, AdIdentifier, Ad, ContentModel, Menu, MenuItem, MenuItemGroup, MenuLocation, Page, Permalink, VideoSetting};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Middleware;
use Illuminate\Support\Str;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $pageData = null;
        $sectionData = null;

        $currentPath = $request->route()->uri() === '/' ? $request->route()->uri() : '/' . $request->route()->uri();

        if ($currentPath === '/editor-page/s/{slug}' && $request->route('slug')) {

            $pageData = new PageDataResource(Page::where('slug', $request->route('slug'))->first());
        } else {

            $menuItem = MenuItem::with('page')->where('path', $currentPath)->first();

            if ($menuItem) {
                $pageData = $menuItem->page ? new PageDataResource($menuItem->page) : null;

                if ($menuItem->section_key && $pageData) {
                    $keyParts = explode('__', $menuItem->section_key);
                    $slug = $keyParts[0];
                    $linkId = $keyParts[1] ?? null;

                    $section = $pageData->sections
                        ->where('slug', $slug)
                        ->where('pivot.link_id', $linkId)
                        ->first();

                    $sectionData = $section ? new SectionResource($section) : null;
                }
            } else {
                $prefix = str_replace('/{id}', '', $currentPath);

                $permalink = Permalink::with('page')->where('path_prefix', $prefix)->first();

                $pageData = $permalink && $permalink->page ? new PageDataResource($permalink->page) : null;
            }
        }

        // Load extra information

        $appInformation = AppInformation::all();

        $nameItem = $appInformation->firstWhere('key', 'name');
        $name = $nameItem ? $nameItem->value : config('app.name');

        $iconItem = $appInformation->firstWhere('key', 'icon');
        $icon = $iconItem && $iconItem->value ? (Str::isUrl($iconItem->value, ['http', 'https']) ? $iconItem->value : Storage::disk('public')->url($iconItem->value)) : asset('assets/images/creopse/icon.svg');

        $descriptionItem = $appInformation->firstWhere('key', 'description');
        $description = $descriptionItem && $descriptionItem->value ? Functions::trans($descriptionItem->value) : '';

        $title = isset($menuItem) ? (Functions::trans($menuItem->title) . ' - ' . $name) : $name;

        $channelIdItem = VideoSetting::where('key', 'youtubeChannelId')->first();

        return array_merge(parent::share($request), [
            'appLocale' => app()->getLocale(),
            'appFallbackLocale' => app()->getFallbackLocale(),
            'userData' => $request->user() ? new UserResource($request->user()->load(['profile', 'roles', 'permissions'])) : null,
            'appInformation' => $appInformation,
            'isUserLoggedIn' => $request->user() !== null,
            'pageData' => $pageData,
            'sectionData' => $sectionData,
            'defaultMeta' => [
                'title' => $title,
                'description' => $description,
                'url' => $request->url(),
                'image' => $icon,
                'favicon' => $icon,
            ],
            'adIdentifiers' => AdIdentifierResource::collection(
                AdIdentifier::all()
            ),
            'ads' => AdResource::collection(
                Ad::all()
            ),
            'menus' => MenuResource::collection(
                Menu::all()->load(['items'])
                    ->each(function ($menu) {
                        $menu->items->transform(function ($item) {
                            if ($item->content_type && $item->content_id) {
                                try {
                                    $contentType = ContentType::from($item->content_type);
                                    $modelClass = $contentType->getModelClass();

                                    if (class_exists($modelClass)) {
                                        $item->content = $modelClass::find($item->content_id);
                                    }
                                } catch (\ValueError $e) {
                                    // Handle invalid content_type gracefully
                                    $item->content = null;
                                }
                            }
                            return $item;
                        });
                    })
            ),
            'menuLocations' => MenuLocationResource::collection(
                MenuLocation::all()
            ),
            'menuItemGroups' => MenuItemGroupResource::collection(
                MenuItemGroup::all()
            ),
            'contentModels' => ContentModelResource::collection(
                ContentModel::all()
            ),
            'youtubeChannelId' => $channelIdItem ? $channelIdItem->value : null,
        ]);
    }
}
