/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: 
    {colors: {
      'cos-main-orange': '#f9d598',
      'cos-off-black' : '#090e1a',
      'cos-pink': '#ef89b8',
      'cos-red': '#f69679',
      'cos-sea-blue': '#61cbeb',
      'cos-orange': '#fec360',
      'cos-yellow': '#faea27',
      'cos-blue': '#4781c3',

    },},
    fontFamily: {
      sans: ['sans-serif', 'Arial'],
      omnes: ['Omnes', 'sans-serif'],
    },
    backgroundImage: {
      'gradient-background-image': "url('./components/images/gradient.png')",
    },
  
  },
  
}

