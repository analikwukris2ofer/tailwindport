/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ["./index.html"], This tells the tailwind config file to search in main folder for the index.html file.
  //./*.html this tells it to search for all the html files in the main folder.
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        "sm":"480px"
      }
    },
    fontFamily:{
      poppins: ['Poppins', 'sans-serif']
    }
 
  },
  plugins: [],
}
