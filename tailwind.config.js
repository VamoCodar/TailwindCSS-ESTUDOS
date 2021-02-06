module.exports = {

  purge: {
    enabled: true,
    content: ['./index.html'],
    layers: ['components', 'utilities'],
  },
  darkMode: false, // or 'media' or 'class'
  
  theme: {

    container: {
      center: true,
      padding: '1rem',
    },
    extend:{
      maxWidth: {
        '100': '100px',
        '120': '120px',
        '200': '200px',
        '250': '250px',
        '350': '350px',
       },
      
    },
  
     
  },

  variants: {
    extend: {
      transform: ['hover'],
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
}
