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
            __DIR__ . '/../resources/fonts' => resource_path('fonts')
        ], 'novaweb-fonts');

        $this->publishes([
            __DIR__ . '/../resources/js' => resource_path('js')
        ], 'novaweb-js');

        $this->publishes([
            __DIR__ . '/../resources/css' => resource_path('css')
        ], 'novaweb-css');

        $this->publishes([
            __DIR__ . '/../webpack.mix.js' => base_path('webpack.mix.js')
        ], 'novaweb-mix');

        $this->publishes([
            __DIR__ . '/../tailwind.config.js' => base_path('tailwind.config.js')
        ], 'novaweb-tailwind');

        $this->publishes([
            __DIR__ . '/../package.json' => base_path('package.json')
        ], 'novaweb-package');

        $this->publishes([
            __DIR__ . '/../public' => public_path('/')
        ], 'novaweb-public');

        $this->publishes([
            __DIR__ . '/../resources/views' => resource_path('views')
        ], 'novaweb-view');

        $this->publishes([
            __DIR__ . '/../routes/web.php' => base_path('./routes/web.php')
        ], 'novaweb-route');

        $this->publishes([
            __DIR__ . '/Http/Controllers/WebController.php' => base_path('./App/Http/Controllers/WebController.php')
        ], 'novaweb-controller');
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
