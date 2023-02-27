/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                primary: ['Helvetica', 'sans-serif'],
            },
            colors: {
                grayEe: '#eeeeee',
                gray76: '#767676',
                black11: '#111111',
                grayD9: '#d9d9d9',
                grayE6: '#ffffffe6',
                backB3: '#111111b3',
                grayD1: '#d1d1d1',
                gray8c: '#ffffff8c',
                whiteCc: '#ffffffcc',
                black1d: '#1d1d1d',
                whiteE6: '#ffffffe6',
            },
        },
    },
    plugins: [],
}
