/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ['light']
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        sm: '0.75rem',
        lg: '0.75rem',
        xl: '100px',
        '2xl': '304px',
        '3xl': '304px'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px'
      }
    },
    extend: {
      screens: {
        '3xl': '1920px'
      },
      colors: {
        primary: '#F0F0F0',
        secondary: '#6C6C6C',
        btn: '#D9D9D9'
      }
    }
  },
  plugins: [require('daisyui')],
  content: [
    './container/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ]
}
