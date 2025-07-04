// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",     // Very small devices
        sm: "480px",     // Phones
        md: "1024px",    // Laptops (you requested md at 1024)
        lg: "1280px",    // Desktops
        xl: "1536px",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'scroll-infinite': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
      '100%': { transform: 'translateX(-50%)' }, // only scroll half (because we're duplicating)
        }
      }
    },
  },
  plugins: [],
}
