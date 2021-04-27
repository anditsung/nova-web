let colors = {
    black: 'var(--black)',
    transparent: 'var(--transparent)',
    white: 'var(--white)',
    'white-50%': 'var(--white-50)',
    primary: 'var(--primary)',
    'primary-dark': 'var(--primary-dark)',
    'primary-70%': 'var(--primary-70)',
    'primary-50%': 'var(--primary-50)',
    'primary-30%': 'var(--primary-30)',
    'primary-10%': 'var(--primary-10)',
    'sidebar-icon': 'var(--sidebar-icon)',
    logo: 'var(--logo)',
    info: 'var(--info)',
    danger: 'var(--danger)',
    warning: 'var(--warning)',
    success: 'var(--success)',
    '90-half': 'var(--90-half)',
    90: 'var(--90)',
    80: 'var(--80)',
    70: 'var(--70)',
    60: 'var(--60)',
    50: 'var(--50)',
    40: 'var(--40)',
    30: 'var(--30)',
    20: 'var(--20)',
    'warning-light': 'var(--warning-light)',
    'warning-dark': 'var(--warning-dark)',
    'success-light': 'var(--success-light)',
    'success-dark': 'var(--success-dark)',
    'danger-light': 'var(--danger-light)',
    'danger-dark': 'var(--danger-dark)',
    'info-light': 'var(--info-light)',
    'info-dark': 'var(--info-dark)',
}

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/js/**/*.vue',
        './resources/views/**/*.blade.php',
    ],
    darkMode: false, // or 'media' or 'class'

    theme: {

        extend: {

            colors: colors,

            fill: { current: 'currentColor' },

            stroke: { current: 'currentColor' },

            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {

        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
