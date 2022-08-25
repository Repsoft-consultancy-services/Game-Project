/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1650px'
        // 4k
      },
      fontFamily:{
        Poppins : ['Poppins'],
        Opensans : ['Open Sans']
      },
    },
    screens: {
      'sm': '425px',
      // => mobile

      'md': '768px',
      // => tablet

      'lg': '1024px',
      // => Laptop S

      'xl': '1280px',
      // => Laptop M

      '2xl': '1440px',
      // => Laptop L
      
    }
  },
  plugins: [require("daisyui")],
}
