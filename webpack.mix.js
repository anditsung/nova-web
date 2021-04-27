const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/vendor/novaweb')
    .vue()
    .extract()
    .postCss('resources/css/app.css', '', [
        require('postcss-import'),
        require('tailwindcss')
    ])
    .styles('resources/css/google-font-nunito.scss', 'public/vendor/novaweb/google-font-nunito.css')
    .copy('resources/fonts', 'public/vendor/novaweb/fonts')
    .setPublicPath('public/vendor/novaweb')
    .webpackConfig({
        resolve: {
            alias: {
                Nova: path.resolve(__dirname, 'nova/resources/js')
            },
        },
    })
    .version()

if (! mix.inProduction()) {
    mix.sourceMaps()
}
