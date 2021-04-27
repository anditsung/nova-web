<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full font-sans antialiased">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Icon -->
        <link rel="icon" href="{{ asset("favicon.ico") }}">

        <!-- Fonts -->
        <link href="{{ mix('google-font-nunito.css', 'vendor/novaweb') }}" rel="stylesheet">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('app.css', 'vendor/novaweb') }}">

        <!-- Custom Meta Data -->
        @include('vendor.novaweb.partials.meta')

    </head>
    <body class="min-w-site bg-40 text-90 font-normal min-h-full">
        <div id="novaweb">
            <div v-cloak class="flex flex-col min-h-screen">
                <!-- Header -->
                @include('vendor.novaweb.partials.header')

                <!-- Content -->
                <div>
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        @yield('content')
                    </div>
                </div>
                <!-- End Content -->

                <!-- Footer -->
                @include('vendor.novaweb.partials.footer')
            </div>
        </div>

        <script>
            window.config = @json(\App\NovaWeb::jsonVariables(request()))
        </script>

        <!-- Scripts -->
        <script src="{{ mix('manifest.js', 'vendor/novaweb') }}"></script>
        <script src="{{ mix('vendor.js', 'vendor/novaweb') }}"></script>
        <script src="{{ mix('app.js', 'vendor/novaweb') }}"></script>

        <!-- Build Nova Instance -->
        <script>
            window.NovaWeb = new CreateNovaWeb(config)
        </script>

        <!-- Start Nova -->
        <script>
            NovaWeb.liftOff()
        </script>
    </body>
</html>
