/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a0a',
        'dark-bg-light': '#141414',
        'dark-bg-lighter': '#1a1a1a',
        'accent-gold': '#d4a843',
        'accent-gold-light': '#e6c06a',
        'accent-gold-dark': '#b8912e',
        'text-light': '#f5f5f5',
        'text-muted': '#999999',
        'text-dim': '#666666',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
