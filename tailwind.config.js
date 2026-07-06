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
        orbit: 'orbit 8s linear infinite',
        'orbit-reverse': 'orbit 11s linear infinite reverse',
        shimmer: 'shimmer 5s ease-in-out infinite',
        twinkle: 'twinkle 2.4s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
        'drift-slow': 'drift 18s ease-in-out infinite reverse',
        'ring-pulse': 'ringPulse 2.2s ease-in-out infinite',
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
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(var(--orbit-radius, 180px)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(var(--orbit-radius, 180px)) rotate(-360deg)' },
        },
        shimmer: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        twinkle: {
          '0%,100%': { opacity: 0.25, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.15)' },
        },
        drift: {
          '0%,100%': { transform: 'translate(0,0)' },
          '33%': { transform: 'translate(14px,-18px)' },
          '66%': { transform: 'translate(-10px,10px)' },
        },
        ringPulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(166,77,255,0.45)' },
          '50%': { boxShadow: '0 0 0 8px rgba(166,77,255,0)' },
        },
      },
    },
  },
  plugins: [],
}
