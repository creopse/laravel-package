<?php

namespace Creopse\Creopse\Exceptions;

use Creopse\Creopse\Enums\ContentType;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Http\Resources\{UserResource, Ads\AdResource, Ads\AdIdentifierResource};
use Creopse\Creopse\Http\Resources\Content\ContentModelResource;
use Creopse\Creopse\Http\Resources\Content\MenuItemGroupResource;
use Creopse\Creopse\Http\Resources\Content\MenuLocationResource;
use Creopse\Creopse\Http\Resources\Content\MenuResource;
use Creopse\Creopse\Models\{AppInformation, AdIdentifier, Ad, ContentModel, Menu, MenuItemGroup, MenuLocation, VideoSetting};
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (NotFoundHttpException $e, Request $request) {
            if (!Functions::isApiRequest($request)) {
                $appInformation = AppInformation::all();

                $nameItem = $appInformation->firstWhere('key', 'name');
                $name = $nameItem ? $nameItem->value : config('app.name');

                $iconItem = $appInformation->firstWhere('key', 'icon');
                $icon = $iconItem && $iconItem->value ? (Str::isUrl($iconItem->value, ['http', 'https']) ? $iconItem->value : Storage::disk('public')->url($iconItem->value)) : asset('assets/images/creopse/icon.svg');

                $channelIdItem = VideoSetting::where('key', 'youtubeChannelId')->first();

                return Inertia::render('NotFound', [
                    'appLocale' => app()->getLocale(),
                    'appFallbackLocale' => app()->getFallbackLocale(),
                    'userData' => $request->user() ? new UserResource($request->user()->load(['profile', 'roles', 'permissions'])) : null,
                    'isUserLoggedIn' => $request->user() !== null,
                    'appInformation' => AppInformation::all(),
                    'url' => $request->url(),
                    'defaultMeta' => [
                        'title' => Lang::get('Error 404 - Page not found') . ' - ' . $name,
                        'description' => Lang::get('Oops! The page you are looking for does not exist. It might have been moved or deleted.'),
                        'url' => $request->url(),
                        'image' => $icon,
                        'favicon' => $icon
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
        });
    }
}
