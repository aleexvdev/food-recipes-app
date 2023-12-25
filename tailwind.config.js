/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {},
    container: {
      center: true,
    },
    screens: {
      'sm': '240px',
      // => @media (min-width: 640px) { ... } mobiles

      'md': '768px',
      // => @media (min-width: 768px) { ... } tablets

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... } laptops

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... } desktops

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}