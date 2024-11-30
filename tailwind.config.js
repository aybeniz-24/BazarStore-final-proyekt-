/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xlg': '1270px'
      },
      // Hover ilə bağlı xüsusi dəyişikliklər
      transform: ['hover', 'focus'],
      scale: {
        102: '1.02',
      },
    },
  },
  plugins: [],
}
