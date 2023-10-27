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
      'gradient-background-image-vertical': "url('./components/images/gradient_vert.png')",
      'gradient-background-image-vertical-short': "url('./components/images/gradient_vert_short.png')",




      'image-wallpaper-src-1' : "url('./components/images/wallpapers/Martin01.JPG')",
      'image-wallpaper-src-2' : "url('./components/images/wallpapers/Martin02.JPG')",
      'image-wallpaper-src-3' : "url('./components/images/wallpapers/Martin03.JPG')",
      'image-wallpaper-src-4' : "url('./components/images/wallpapers/Martin04.JPG')",
      'image-wallpaper-src-5' : "url('./components/images/wallpapers/Martin05.JPG')",
      'image-wallpaper-src-6' : "url('./components/images/wallpapers/Martin06.JPG')",
      'image-wallpaper-src-7' : "url('./components/images/wallpapers/Martin07.JPG')",
      'image-wallpaper-src-8' : "url('./components/images/wallpapers/Martin08.JPG')",
      'image-wallpaper-src-9' : "url('./components/images/wallpapers/Martin09.JPG')",
      'image-wallpaper-src-10' : "url('./components/images/wallpapers/Martin10.JPG')",
      'image-wallpaper-src-11' : "url('./components/images/wallpapers/Martin11.JPG')",
      'image-wallpaper-src-12' : "url('./components/images/wallpapers/Martin12.JPG')",
      'image-wallpaper-src-13' : "url('./components/images/wallpapers/Martin13.JPG')",
      'image-wallpaper-src-14' : "url('./components/images/wallpapers/Martin14.JPG')", 
    }, 
  },
}

