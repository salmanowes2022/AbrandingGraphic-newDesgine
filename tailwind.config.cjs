/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        dark: '#1F2937',
        light: '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        rag: ['RagSans', 'sans-serif'],
      },
      screens: {
        'xs': '375px',      // iPhone SE, iPhone 12 mini
        'iphone': '390px',   // iPhone 12, iPhone 12 Pro, iPhone 13, iPhone 13 Pro
        'iphone-plus': '428px', // iPhone 12 Pro Max, iPhone 13 Pro Max, iPhone 14 Pro Max
        'iphone-pro': '393px',  // iPhone 14 Pro
      },
    },
  },
  plugins: [],
} 