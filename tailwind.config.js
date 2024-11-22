/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, // Extend existing utilities here
    screens: {  // Define your custom breakpoints
      sm: '640px',   // Small devices
      md: '768px',   // Medium devices
      lg: '1024px',  // Large devices
      xl: '1280px',  // Extra large devices
      '2xl': '1536px', // 2x extra large devices
    },
  },
  plugins: [],
};
