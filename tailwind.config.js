/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brag-orange': 'var(--hero-bg)',
        'brag-ink': 'var(--hero-ink)',
        'brag-ink-soft': 'var(--hero-ink-soft)',
        'brag-tint': 'var(--hero-tint)',
        'brag-dark': 'var(--dark-bg)',
        'brag-dark-elev': 'var(--dark-bg-elev)',
        'brag-dark-ink': 'var(--dark-ink)',
        'brag-dark-soft': 'var(--dark-ink-soft)',
        'brag-dark-rule': 'var(--dark-rule)',
        'brag-accent': 'var(--dark-accent)',
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'tighter-brag': '-0.04em',
        'tight-brag': '-0.02em',
      },
      borderRadius: {
        'brag-sm': '6px',
        'brag-md': '12px',
        'brag-lg': '18px',
      }
    },
  },
  plugins: [],
}
