// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
        muted: '#64748B',
        background: '#F8FAFC',
        surface: '#ffffff',
        border: '#E2E8F0',
        heading: '#0f172a',
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
