module.exports = {
  content: [
    "./index.html",              // ✅ add this
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "480px",
        md: "1024px",
        lg: "1280px",
        xl: "1536px",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'scroll-infinite': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
