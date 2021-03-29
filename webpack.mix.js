const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss')
require('laravel-mix-purgecss')

mix
    .js('resources/js/app.js', 'public/vendor/novaweb')
    .extract([
        'vue',
        'axios',
        'flatpickr',
    ])

    .sass('resources/sass/app.scss', 'public/vendor/novaweb')
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('tailwind.js')
        ]
    })
    .purgeCss({
        enabled: mix.inProduction(),
        folders: ['src', 'templates'],
        extensions: ['html', 'js', 'php', 'vue'],
    })

    .styles('resources/sass/google-font-nunito.scss', 'public/vendor/novaweb/google-font-nunito.css')
    .copyDirectory('resources/sass/fonts', 'public/vendor/novaweb/fonts')
    .setPublicPath('public/vendor/novaweb')
    .webpackConfig({
        resolve: {
            alias: {
                Nova: path.resolve(__dirname, 'nova/resources/js')
            },
        },
    })

if (mix.inProduction()) {
    mix.version()
}
