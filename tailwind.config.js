module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   class: false, // or 'media' or 'class'
   theme: {
    screens: {
      xs: '400px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
     extend: {
     },
   },
   variants: {
     extend: {},
   },
   plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
   ],
 }