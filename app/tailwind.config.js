/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       colors: {
          primary: '#FFCC2A',
          secondary: '#FFB320',
          content: '#606060',
          black:'#292929',
          gray: {
             100: '#434343',
             200: '#4f4f4f',
             300: '#58595B',
          },
          pearl: {
             100: '#EFEFEF',
             200: '#F2F2F2',
          },
          night: '#161616',
          blue: '#007DFA',
       },
       fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
       },
       screens: {
          phone: '413px',
          phonelg: '568px',
          tablet: '768px',
          tabletlg: '960px',
          tabletxl: '1024px',
          laptop: '1200px',
          laptoplg: '1400px',
          desktop: '1700px',
       },
    },
 },
  plugins: [],
}
