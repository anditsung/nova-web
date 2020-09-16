@extends('novaweb::layout')

@section('content')
    <div class="flex flex-col h-screen">
        @if (Route::has('nova.login'))
            <div class="ml-auto px-4 py-4">
                @auth
                    @if(Auth()->user()->can('viewNova'))
                        <a class="px-8 py-2 rounded-lg font-bold text-black no-underline hover:bg-gray-400" href="{{ route('nova.login') }}">Admin</a>
                    @endif
                    <a
                        href="{{ route('nova.logout') }}"
                        class="ml-2 px-8 py-2 rounded-lg font-bold text-black no-underline hover:bg-gray-400"
                    >Logout</a>
                @else
                    <a class="px-8 py-2 rounded-lg font-bold text-black no-underline hover:bg-gray-400" href="{{ route('nova.login') }}">Login</a>

                    @if (Route::has('nova.register'))
                        <a class="px-8 py-2 rounded-lg font-bold text-black no-underline hover:bg-gray-400" href="{{ route('nova.register') }}">Register</a>
                    @endif
                @endauth
            </div>
        @endif
        <div class="flex flex-grow">
            <div class="mx-auto my-auto">
                <span class="text-5xl">{{ config('nova.name') }}</span>
            </div>
        </div>
    </div>
@endsection
