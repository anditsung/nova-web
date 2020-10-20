module.exports = {

    prefix: '',

    important: false,

    separator: ':',

    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },

    theme: {
        extends: {},

        fontFamily: {
            sans: [
                'Nunito',
                'system-ui',
                'BlinkMacSystemFont',
                '-apple-system',
                'sans-serif',
            ],
            mono: [
                'Menlo',
                'Monaco',
                'Consolas',
                'Liberation Mono',
                'Courier New',
                'monospace',
            ],
        },
    },

    variants: {
        backgroundColor: ['responsive', 'first', 'last', 'even', 'odd', 'hover', 'focus'],
        tableLayout: ['responsive', 'hover', 'focus'],
    },

    plugins: [
        require('@tailwindcss/ui'),
    ],
}
