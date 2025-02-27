/* eslint-disable max-lines */

const colorNames = [ 'primary', 'secondary', 'gray', 'positive', 'neutral', 'negative', 'cta', 'link', 'focus', 'accent', 'warning', 'ambient' ];
const shades = [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ];
const colors = {};

for (const colorName of colorNames) {
    colors[colorName] = {};
    for (const shade of shades) {
        colors[colorName][shade] = `var(--color-${colorName}-${shade})`;
    }
}

module.exports = {
    mode: 'jit',
    content: [
        './Resources/**/*.{html,js,fusion}',
    ],
    theme: {
        extend: {
            screens: {
                'xxs': '375px',
                'xs': '30rem', // 480px
                'sm': '40rem', // 640px
                'md': '48rem', // 768px
                'lg': '64rem' // 1024px
            },
            colors,
            fontWeight: {
                'weight-heading': 'var(--tb-font-weight-heading)',
                'weight-body': 'var(--tb-font-weight-body)',
            },
            fontFamily: {
                heading: 'var(--tb-font-heading)',
                body: 'var(--tb-font-body)',
            },
            fontSize: {
                'size-h3': 'var(--tb-w-font-size-h3)',
                'size-h4': 'var(--tb-w-font-size-h4)',
                'size-h5': 'var(--tb-w-font-size-h5)',
                'size-h6': 'var(--tb-w-font-size-h6)',
            },
            borderRadius: {
                'xl': '.75rem',
            },
        }
    },
};
