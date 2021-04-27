@extends('vendor.novaweb.layout')

@section('content')
    <loading ref="loading"></loading>

    <fade-transition>
        <router-view :key="$route.name"></router-view>
    </fade-transition>

@endsection
