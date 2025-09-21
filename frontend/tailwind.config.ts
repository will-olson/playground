import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sigma Official Brand Colors
        sigma: {
          green: '#4CAF50',
          'green-light': '#A7F3D0',
          'green-dark': '#2E7D32',
        },
        // Sigma Primary Brand Colors
        'primary-blue': '#4245ff',
        'primary-blue-lite': '#6690ff',
        grass: '#4cec8c',
        sky: '#a8e8f3',
        sun: '#ff9a74',
        meadow: '#ffcee6',
        insight: '#f0ff45',
        stratus: '#9fa8a7',
        nimbus: '#f0f0f0',
        // Sigma Official Colors (from sigmaCSS_inspect.md)
        shadow: '#292929',      // --shadow (primary text color)
        'shadow-lite': '#3D3D3D', // --shadow-lite
        neutral: {
          0: '#FFFFFF',    // white
          1: '#FCFCFC',    // neutral-1
          3: '#F8F8F8',    // neutral-3
          4: '#F3F3F3',    // neutral-4
          5: '#E8E8E8',    // neutral-5
          6: '#E2E2E2',    // neutral-6
          7: '#DBDBDB',    // neutral-7
          8: '#C7C7C7',    // neutral-8
          9: '#8F8F8F',    // neutral-9
          10: '#858585',   // neutral-10
          11: '#3D3D3D',   // neutral-11
          12: '#171717',   // neutral-12 (black)
        },
        // Background Colors using Sigma's system
        background: {
          dark: '#171717',    // neutral-12
          light: '#F8F8F8',   // neutral-3
          card: '#FFFFFF',    // neutral-0
        },
        // Text Colors using Sigma's exact values
        text: {
          primary: '#292929',   // --shadow (Sigma's primary text color)
          secondary: '#3D3D3D', // --shadow-lite
          tertiary: '#8F8F8F',  // neutral-9
          light: '#FFFFFF',     // neutral-0
          muted: '#C7C7C7',     // neutral-8
        },
        // Border Colors
        border: {
          light: '#E2E2E2',    // neutral-6
          medium: '#C7C7C7',   // neutral-8
          dark: '#3D3D3D',     // neutral-11
        },
        // Placeholder text - much darker for better visibility
        placeholder: {
          primary: '#3D3D3D',   // neutral-11 - much darker
          secondary: '#8F8F8F', // neutral-9
        },
        // Legacy color support
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'hard': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config

