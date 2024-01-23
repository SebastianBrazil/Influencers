/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",

    //root index files add this
    "./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

