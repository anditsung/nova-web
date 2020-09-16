const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/app.js', 'public/vendor/novaweb')
    .extract([
        'vue'
    ])
    .styles('resources/sass/google-font-nunito.scss', 'public/vendor/novaweb/google-font-nunito.css')
    .postCss('resources/sass/app.css', 'public/vendor/novaweb', [
        require('postcss-import'),
        tailwindcss('tailwind.js'),
    ])
    .copyDirectory('resources/sass/fonts', 'public/vendor/novaweb/fonts')
    .setPublicPath('public/vendor/novaweb')
if (mix.inProduction()) {
    mix.version()
}

// mix
//     .webpackConfig({
//         resolve: {
//             alias: {
//                 "@nova": '../../../../vendor/laravel/nova/resources/js'
//                 //"@nova": '../../vendor/laravel/nova/resources/js'
//             }
//         }
//     })
//     .js('resources/js/app.js', '')
//     .extract([
//         'vue',
//         'vue-toasted',
//         'axios'
//     ])
//     .sass('resources/sass/google-font-nunito.scss', '')
//     .copyDirectory('resources/sass/fonts', 'public/vendor/novaweb/fonts')
//     //.setPublicPath('dist')
//     .setPublicPath('public/vendor/novaweb')
//     .options({
//         processCssUrls: false,
//     })
//     .version()
