<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Meta -->
    @if(isset($page['props']['meta']) || isset($page['props']['defaultMeta']))
    <title>{{ data_get($page['props'], 'meta.title', data_get($page['props'], 'defaultMeta.title')) }}</title>
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

    <!-- Put your styles here -->
    <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}" />

    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
      crossorigin="" />

    <!-- Inline script to detect system dark mode preference and apply it immediately -->
    <script>
        (function() {
            const appearance = '{{ $appearance ?? "system" }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    <!-- Put your scripts here -->
    <script src="{{ asset('assets/js/main.js') }}"></script>

    <!-- RSS Feed -->
    @include('feed::links')

    @routes
    @viteReactRefresh
    @vite(['resources/css/app.css','resources/js/app.tsx',"resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>
