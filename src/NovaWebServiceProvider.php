<?php

namespace Tsung\NovaWeb;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;
use Tsung\NovaWeb\Commands\Install;
use Tsung\NovaWeb\Http\Middleware\Authorize;

class NovaWebServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if($this->app->runningInConsole()) {
            $this->registerPublishing();
        }

        $this->loadViewsFrom(__DIR__.'/../resources/views', 'novaweb');
    }

    protected function registerPublishing()
    {
        $this->publishes([
            __DIR__ . '/../resources/sass/fonts' => resource_path('fonts')
        ], 'novaweb-fonts');

        $this->publishes([
            __DIR__ . '/../resources/js' => resource_path('js')
        ], 'novaweb-js');

        $this->publishes([
            __DIR__ . '/../resources/sass' => resource_path('sass')
        ], 'novaweb-sass');

        $this->publishes([
            __DIR__ . '/../webpack.mix.js' => base_path('webpack.mix.js')
        ], 'novaweb-mix');

        $this->publishes([
            __DIR__ . '/../package.json' => base_path('package.json')
        ], 'novaweb-package');

        $this->publishes([
            __DIR__ . '/../public' => public_path('/vendor/novaweb')
        ], 'novaweb-public');

        $this->publishes([
            __DIR__ . '/../resources/views/welcome.blade.php' => resource_path('views/welcome.blade.php')
        ], 'novaweb-welcome');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->commands([
            Install::class,
        ]);
    }
}
