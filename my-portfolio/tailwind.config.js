/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#67e8f9', // A lighter cyan
          DEFAULT: '#06b6d4', // Cyan 600
          dark: '#0e7490',  // A darker cyan
        },
        secondary: {
          light: '#fca5a5', // A lighter red
          DEFAULT: '#f87171', // Red 400
          dark: '#dc2626',   // A darker red
        },
        neutral: {
          lightest: '#f8fafc', // Slate 50
          lighter: '#f1f5f9',  // Slate 100
          light: '#e2e8f0',   // Slate 200
          DEFAULT: '#64748b',  // Slate 500 (good for text)
          dark: '#334155',    // Slate 700
          darker: '#1e293b',   // Slate 800
          darkest: '#0f172a',  // Slate 900
        },
        success: '#22c55e', // Green 500
        warning: '#facc15', // Yellow 400
        error: '#ef4444',   // Red 500
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // For project card images
    // require('@tailwindcss/forms'), // If you want more opinionated form styling
  ],
}
