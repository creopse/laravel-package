<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <!-- Meta -->
        @if(isset($page['props']['meta']) || isset($page['props']['defaultMeta']))
        <link rel="icon" type="image/png" href="{{ data_get($page['props'], 'meta.favicon', data_get($page['props'], 'defaultMeta.favicon')) }}" />

        <meta name="description" content="{{ data_get($page['props'], 'meta.description', data_get($page['props'], 'defaultMeta.description')) }}" />
        <link rel="canonical" href="{{ data_get($page['props'], 'meta.url', data_get($page['props'], 'defaultMeta.url')) }}" />

        <meta property="og:title" content="{{ data_get($page['props'], 'meta.title', data_get($page['props'], 'defaultMeta.title')) }}" />
        <meta property="og:description" content="{{ data_get($page['props'], 'meta.description', data_get($page['props'], 'defaultMeta.description')) }}" />
        <meta property="og:image" content="{{ data_get($page['props'], 'meta.image', data_get($page['props'], 'defaultMeta.image')) }}" />
        <meta property="og:url" content="{{ data_get($page['props'], 'meta.url', data_get($page['props'], 'defaultMeta.url')) }}" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="{{ data_get($page['props'], 'meta.title', data_get($page['props'], 'defaultMeta.title')) }}" />
        <meta name="twitter:description" content="{{ data_get($page['props'], 'meta.description', data_get($page['props'], 'defaultMeta.description')) }}" />
        <meta name="twitter:image" content="{{ data_get($page['props'], 'meta.image', data_get($page['props'], 'defaultMeta.image')) }}" />
        <meta name="twitter:card" content="summary_large_image" />
        @endif

        @fonts

        <style>
            :root {
                --inertia-progress-color: {{ data_get($page['props'], 'config.frontend.progressColor', '#29d') }};
            }
        </style>

        <!-- Put your styles here -->
        <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}" />

        <!-- Put your scripts here -->
        <script src="{{ asset('assets/js/main.js') }}"></script>

        <!-- RSS Feed -->
        @include('feed::links')

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            @if(isset($page['props']['meta']) || isset($page['props']['defaultMeta']))
            <title>{{ data_get($page['props'], 'meta.title', data_get($page['props'], 'defaultMeta.title')) }}</title>
            @endif
        </x-inertia::head>
    </head>
    <body>
        <x-inertia::app />
    </body>
</html>
