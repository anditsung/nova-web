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
    <link rel="stylesheet" href="{{ mix('app.css', 'vendor/nova') }}">

    <!-- Tool Styles -->
    @foreach(\Laravel\Nova\Nova::availableStyles(request()) as $name => $path)
        <link rel="stylesheet" href="/nova-api/styles/{{ $name }}">
    @endforeach

<!-- Custom Meta Data -->
    @include('nova::partials.meta')

</head>
<body class="bg-40 text-black">
<div id="novaweb">
    @yield('content')
</div>

<script>
    window.config = @json(\Laravel\Nova\Nova::jsonVariables(request()));
</script>

<!-- Scripts -->
<script src="{{ mix('manifest.js', 'vendor/novaweb') }}"></script>
<script src="{{ mix('vendor.js', 'vendor/novaweb') }}"></script>
<script src="{{ mix('app.js', 'vendor/novaweb') }}"></script>

<!-- Build Nova Instance -->
<script>
    window.NovaWeb = new CreateNovaWeb(config)
</script>

<script>
    NovaWeb.liftOff()
</script>

</body>
</html>
