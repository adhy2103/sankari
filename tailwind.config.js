/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'royal-maroon': '#641C28',
        'antique-gold': '#C5A059',
        'warm-ivory': '#FFF8EC',
        'sandalwood': '#E8D9BD',
        'deep-brown': '#241510',
        'maroon-dark': '#4A1320',
        'maroon-light': '#7D2535',
        'gold-light': '#D4B572',
        'gold-dark': '#A8864A',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Poppins', 'sans-serif'],
        malayalam: ['Noto Serif Malayalam', 'serif'],
      },
      backgroundImage: {
        'paper-texture': "url('/textures/paper.png')",
        'mandala-pattern': "url('/patterns/mandala.svg')",
        'floral-border': "url('/patterns/floral.svg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
        'particle': 'particle 8s linear infinite',
        'lotus-spin': 'lotus-spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-100px) rotate(720deg)', opacity: '0' },
        },
        'lotus-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      boxShadow: {
        'gold': '0 0 20px rgba(197, 160, 89, 0.3)',
        'gold-lg': '0 0 40px rgba(197, 160, 89, 0.4)',
        'maroon': '0 4px 30px rgba(100, 28, 40, 0.3)',
        'card': '0 8px 32px rgba(36, 21, 16, 0.12)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
