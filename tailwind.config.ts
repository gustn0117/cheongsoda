import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'sans-serif',
        ],
        display: ['Pretendard Variable', 'Pretendard', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#F2F4FB',
          100: '#E2E7F4',
          200: '#BFCAE7',
          300: '#90A2D5',
          400: '#5C72BD',
          500: '#3A52A8',
          600: '#1B3FAA',
          700: '#152F80',
          800: '#0F2360',
          900: '#0B1A47',
          950: '#060E2A',
        },
        ink: '#0B1437',
        cream: '#FBFAF7',
        mist: '#F5F7FB',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.6' }],
        sm: ['0.875rem', { lineHeight: '1.65' }],
        base: ['1rem', { lineHeight: '1.7' }],
        lg: ['1.125rem', { lineHeight: '1.7' }],
        xl: ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.45' }],
        '3xl': ['1.875rem', { lineHeight: '1.35' }],
        '4xl': ['2.25rem', { lineHeight: '1.25' }],
        '5xl': ['3rem', { lineHeight: '1.18' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1.02' }],
      },
      boxShadow: {
        soft: '0 8px 30px -10px rgba(11, 20, 55, 0.18)',
        glow: '0 20px 60px -20px rgba(27, 63, 170, 0.45)',
        'navy-lg': '0 25px 80px -25px rgba(11, 26, 71, 0.55)',
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(rgba(27,63,170,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(27,63,170,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        twinkle: 'twinkle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
