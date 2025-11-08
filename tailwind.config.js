/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 'media' | 'class'
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
    './public/**/*.html',
    './**/*.html'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a',
          50: '#f5f7fa',
          100: '#e6eef6',
          200: '#cfe0f0',
          300: '#99bfe3',
          400: '#4d8bce',
          500: '#1f5fb8',
          600: '#184a92',
          700: '#12356a',
          800: '#0d2346',
          900: '#081425'
        },
        accent: {
          DEFAULT: '#06b6d4',
          600: '#0891b2'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular']
      },
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        xl: '1rem'
      },
      boxShadow: {
        soft: '0 6px 18px rgba(8, 15, 25, 0.08)',
        'soft-md': '0 12px 40px rgba(8, 15, 25, 0.12)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
};