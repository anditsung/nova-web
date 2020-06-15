@extends('novaweb::layout')

@section('content')
    <div class="flex flex-col h-screen">
        @if (Route::has('nova.login'))
            <div class="ml-auto px-4 py-4">
                @auth
                    <a class="px-8 py-2 rounded-lg font-bold text-black no-underline hover:bg-60" href="{{ route('nova.login') }}">Admin</a>
                    <a
                        href="{{ route('nova.logout') }}"
                        class="ml-2 px-8 py-2 rounded-lg font-bold text-black no-underline hover:bg-60"
                    >Logout</a>
                @else
                    <a class="px-8 py-2 rounded-lg font-bold text-black no-underline hover:bg-60" href="{{ route('nova.login') }}">Login</a>

                    @if (Route::has('nova.register'))
                        <a class="px-8 py-2 rounded-lg font-bold text-black no-underline hover:bg-60" href="{{ route('nova.register') }}">Register</a>
                    @endif
                @endauth
            </div>
        @endif
        <div class="flex flex-grow">
            <div class="mx-auto my-auto">
                <span style="font-size: 10em;">Laravel</span>
            </div>
        </div>
    </div>
@endsection
