/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Spline": ['Spline sans Mono', 'Monospace'],
        "Q,uick":['Quicksand', 'Sans serif'],  },
        screens :{
          'Mobile':['576px'],
          'Tablet':['960px'],
          'Desktop':['1440px'],
          'Large':['1890px']
        }
    
},
  },    
  plugins: [],
}

