/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#06060B',
        panel: '#0B0B14',
        surface: '#0F0F1A',
        line: 'rgba(168,124,255,0.16)',
        neon: {
          DEFAULT: '#A64DFF',
          soft: '#B98CFF',
          deep: '#6D28D9',
          ice: '#5EEAD4',
        },
        signal: '#39FF9E',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(166,77,255,0.55)',
        glowLg: '0 0 90px -12px rgba(166,77,255,0.55)',
        card: '0 8px 32px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(to bottom, transparent, #06060B)',
        'radial-glow': 'radial-gradient(circle at center, rgba(166,77,255,0.25), transparent 70%)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        'spin-slower': 'spin 24s linear infinite reverse',
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        scan: 'scan 3s linear infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: 0.55, filter: 'blur(30px)' },
          '50%': { opacity: 0.9, filter: 'blur(42px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
