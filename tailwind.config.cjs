/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'rosa': '#FFCACA',
        'naranja': '#f77f00',
        'fuerte': '#3d405b',
        'leve': '#e07a5f',
        'verde': '#81b29a',
        'fondo' : '#f4f1de'
      }
    },
  },
  plugins: [],
}
