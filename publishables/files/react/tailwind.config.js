/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  darkMode: 'class',
  content: ['./resources/**/*.blade.php', './resources/**/*.js', './resources/**/*.ts', './resources/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [],
}
