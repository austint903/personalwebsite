/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lofi: {
          cream: '#FBF7F0',
          sand: '#F2E6D0',
          warmGray: '#D4C4B0',
          brown: '#9D7F5F',
          darkBrown: '#6B5544',
          deepBrown: '#4A3A2A',
          accent: '#E0B482',
          sage: '#B5C4A8',
          deepSage: '#8A9D7E',
          coffee: '#8B6F47',
          espresso: '#4A3520',
          caramel: '#D4A574',
          latte: '#F0E5D8',
          mocha: '#6B5344',
          terracotta: '#D4846F',
          warmTan: '#C9A882',
          honey: '#E8B86D',
          rust: '#B87653',
          peach: '#F5D5C0',
          clay: '#C49B7A',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-in forwards',
        'slideUp': 'slideUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'steam': 'steam 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleY(1)', opacity: '0.6' },
          '50%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-20px) scaleY(1.5)', opacity: '0' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -10px)' },
          '50%': { transform: 'translate(0, -20px)' },
          '75%': { transform: 'translate(-10px, -10px)' },
        },
      },
    },
  },
  plugins: [],
}