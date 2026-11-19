import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1280px',
      },
      fontFamily: {
        heading: ['var(--font-plus-jakarta)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        background: 'var(--bg-primary)',
        'background-alt': 'var(--bg-secondary)',
        surface: 'var(--bg-surface)',
        'surface-border': 'var(--border-surface)',
        foreground: 'var(--text-primary)',
        muted: 'var(--text-muted)',
        orbit: {
          navy: '#0B1E3D',
          deep: '#05060F',
          surface: '#0E1330',
          green: '#16C15A',
          emerald: '#10B981',
          blue: '#3B82F6',
          cyan: '#22D3EE',
          violet: '#8B5CF6',
        },
      },
      backgroundImage: {
        'orbit-gradient':
          'linear-gradient(135deg, #16C15A 0%, #22D3EE 45%, #3B82F6 80%, #8B5CF6 100%)',
        'orbit-brand':
          'linear-gradient(135deg, #0B1E3D 0%, #1E3A8A 45%, #16C15A 100%)',
        'radial-spotlight':
          'radial-gradient(650px circle at var(--mx, 50%) var(--my, 50%), rgba(22, 193, 90, 0.12), rgba(34, 211, 238, 0.06) 40%, transparent 80%)',
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'spin-reverse-slow': 'spin-reverse 30s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-Delayed': 'float 7s ease-in-out 2s infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
