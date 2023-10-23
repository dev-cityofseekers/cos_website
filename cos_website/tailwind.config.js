/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: 
    {colors: {
      'cos-yellow': '#f9d598',
      'cos-off-black' : '#090e1a',
    },},
    fontFamily: {
      sans: ['sans-serif', 'Arial'],
      omnes: ['Omnes', 'sans-serif'],
    },
  
  },
  
}

