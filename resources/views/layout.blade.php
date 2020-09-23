<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full font-sans antialiased">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ \Laravel\Nova\Nova::name() }}</title>

    <!-- Fonts -->
    <link href="{{ mix('google-font-nunito.css', 'vendor/novaweb') }}" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('app.css', 'vendor/novaweb') }}">
    @yield('styles')

    <!-- Custom Meta Data -->
    @include('nova::partials.meta')

</head>
<body class="bg-gray-200">
    <div id="app">
        @yield('content')
    </div>

    <!-- Scripts -->
{{--    <script type="application/javascript">--}}
{{--        window.Laravel = {!! json_encode([--}}
{{--                            'csrfToken' => csrf_token(),--}}
{{--                            'apiToken' => Auth()->user()->api_token ?? null,--}}
{{--                        ]) !!}--}}
{{--    </script>--}}
    @stack('script')

    <script src="{{ mix('manifest.js', 'vendor/novaweb') }}"></script>
    <script src="{{ mix('vendor.js', 'vendor/novaweb') }}"></script>
    <script src="{{ mix('app.js', 'vendor/novaweb') }}"></script>

</body>
</html>
