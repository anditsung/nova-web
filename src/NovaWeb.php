<?php


namespace App;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Nova\Nova;

class NovaWeb
{
    public static function jsonVariables(Request $request)
    {
        return [
            'appName' => config('app.name'),
            'debounce' => Nova::$debounce * 1000,
            'userId' => Auth::id() ?? null,
            'timezone' => config('app.timezone', 'UTC'),
            'locale' => config('app.locale', 'en'),
        ];
    }
}
