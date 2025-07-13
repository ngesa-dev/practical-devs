/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // still needed for consistency
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',       // blue-700
        secondary: '#9333EA',     // purple-600
        muted: '#64748B',         // slate-500
        border: '#334155',        // slate-700
        heading: '#ffffff',       // white text
        danger: '#EF4444',
        success: '#10B981',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    }, 
  },
  plugins: [],
}
