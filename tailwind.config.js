/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-bg': '#FAFCFF',
        'primary-text': '#1A202C',
        'secondary-text': '#4A5568',
        'accent-blue': '#2563EB',
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        'dark-accent': '#25618B',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
