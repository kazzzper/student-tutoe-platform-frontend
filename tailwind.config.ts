import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--canvas)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        surface: 'var(--surface)',
        'text': {
          'primary': 'var(--text-primary)',
          'secondary': 'var(--text-secondary)',
        },
        border: 'var(--border)',
        accent: 'var(--accent)',
      },
      borderRadius: {
        'sm': '10px',
        'md': '16px',
        'lg': '22px',
        'xl': '28px',
        'pill': '999px',
      },
      boxShadow: {
        'inset': 'var(--shadow-inset)',
        'rest': 'var(--shadow-rest)',
        'hover': 'var(--shadow-hover)',
        'pop': 'var(--shadow-pop)',
      },
      backdropFilter: {
        'panel': 'var(--blur-panel)',
        'ambient': 'var(--blur-ambient)',
      },
    },
  },
}

export default config
