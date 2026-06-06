import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", 'sans-serif'],
        serif: ["'Merriweather'", 'serif'],
      },
      colors: {
        brand: {
          yellow: {
            50:  '#fffdf0',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#eab308',
            600: '#ca8a04',
            700: '#a16207',
          },
          navy: {
            700: '#243255',
            800: '#1a2744',
            900: '#0f1a2e',
          },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero/bg.jpg')",
        'yellow-gradient': 'linear-gradient(135deg, #facc15 0%, #eab308 100%)',
        'navy-gradient':   'linear-gradient(135deg, #1a2744 0%, #0f1a2e 100%)',
      },
      animation: {
        'fade-up':   'fadeInUp 0.6s ease both',
        'fade-left': 'fadeInLeft 0.6s ease both',
        'float':     'float 3s ease-in-out infinite',
        'shimmer':   'shimmer 1.5s infinite',
        'ticker':    'tickerScroll 28s linear infinite',
      },
      boxShadow: {
        'card': '0 4px 16px rgba(0,0,0,.08)',
        'card-hover': '0 10px 40px rgba(0,0,0,.14)',
        'yellow': '0 4px 20px rgba(234,179,8,.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}

export default config