/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0C0F',
        'elevated-dark': '#14161A',
        'card-dark': '#1B1E24',
        'acid-lime': '#C6FF5E',
        porcelain: '#F5F5F0',
        'steel-grey': '#9298A3',
        'muted-grey': '#B2B5BD',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
