/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        'white-smoke': '#f5f5f5',
        'light-gray': '#d9d9d9',
        'jet-black': '#0b0b0b',
        'granite-gray': '#6b6762',
        'ash-gray': '#bcbab4',
        'albescent-white': '#e1d8cb',
        'machine-gun-metal': '#454545',
        'placebo': '#e6e6e6',
        'accent-red': '#d54e5e',
      },
      backgroundColor: {
        'white-smoke': '#eeece8',
      },
      gradientColorStops: {
        'white-smoke': '#eeece8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'var(--font-inter)', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
};
