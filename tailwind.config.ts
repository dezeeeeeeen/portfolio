import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#faf6f1',
        fg: '#111111',
        muted: '#888888',
        subtle: '#C0C0BB',
        border: '#E5E5E0',
        hover: '#EEEEEA',
        card: '#F0F0EB',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        '2xs': ['11px', { lineHeight: '1.4', letterSpacing: '0.04em' }],
      },
      maxWidth: {
        site: '1080px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heartFloat: {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-80px) scale(1.4)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(5px)' },
        },
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        fadeUp: 'fadeUp 0.5s ease forwards',
        heartFloat: 'heartFloat 1s ease-out forwards',
        scrollBounce: 'scrollBounce 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
