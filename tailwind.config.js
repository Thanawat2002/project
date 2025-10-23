/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
  fontFamily: {
    sans: ['helvetica-neue-lt-pro', 'Helvetica', 'sans-serif'],
    serif: ['helvetica-neue-lt-pro', 'Helvetica', 'sans-serif'],
    mono: ['helvetica-neue-lt-pro', 'Helvetica', 'sans-serif'],
    display: ['helvetica-neue-lt-pro', 'Helvetica', 'sans-serif'],
    body: ['helvetica-neue-lt-pro', 'Helvetica', 'sans-serif']
  },
  plugins: []
}
