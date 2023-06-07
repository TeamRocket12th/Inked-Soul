/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ['light']
  },
  plugins: [require('daisyui')],
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ]
}
