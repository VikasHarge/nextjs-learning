/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      red : 'red',
      blue : '#2b7eb4',
      white : '#ffff',
      lightBlue : '#b3d9f2'
    },
    padding : {
      '2x' : '2px',
      '4x' : '4px',
      '6x' : '6px',
      '8x' : '8px',
      '10x' : '10px',
      '12x' : '12px',
      '14x' : '14px',
      '16x' : '16px',
      '18x' : '18px',

    },
    extend: {},
  },
  plugins: [],
}
