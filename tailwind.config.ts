import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020810',
          900: '#060D1A',
          800: '#0B1426',
          700: '#0D1F3C',
          600: '#1A2845',
          500: '#1E3A5F',
        },
        accent: {
          DEFAULT: '#1D6FF0',
          hover: '#1558C0',
          light: '#60A5FA',
          muted: 'rgba(29, 111, 240, 0.10)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['10px', { lineHeight: '16px', letterSpacing: '0.05em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        label: '0.12em',
        wide2: '0.2em',
      },
      lineHeight: {
        hero: '1.04',
        tight2: '1.15',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.07), 0 4px 16px rgba(29,111,240,0.09)',
        'nav': '0 1px 0 rgba(255,255,255,0.06)',
        'btn-blue': '0 0 32px rgba(29,111,240,0.45)',
        'product': '0 32px 80px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #4F94F5 0%, #1D6FF0 45%, #60A5FA 100%)',
        'gradient-dark': 'linear-gradient(180deg, #060D1A 0%, #0B1426 100%)',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
