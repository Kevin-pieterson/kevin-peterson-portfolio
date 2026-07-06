import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const orbitDots = [
  { size: 10, duration: 8, delay: 0, radius: 200, color: 'bg-neon-ice', reverse: false },
  { size: 7, duration: 11, delay: -3, radius: 210, color: 'bg-neon', reverse: true },
  { size: 5, duration: 14, delay: -6, radius: 195, color: 'bg-neon-soft', reverse: false },
]

export default function AvatarCore() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 14 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 14 })

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className="relative w-full max-w-[460px] mx-auto aspect-square"
    >
      {/* ambient pulsing glow behind the artwork */}
      <div className="absolute inset-6 bg-neon/25 blur-[70px] rounded-full animate-pulseGlow" />

      {/* rotating dashed rings */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full animate-spin-slow"
      >
        <circle cx="50" cy="50" r="47" fill="none" stroke="url(#ringGradA)" strokeWidth="0.6" strokeDasharray="4 6" strokeLinecap="round" />
        <defs>
          <linearGradient id="ringGradA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A64DFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#5EEAD4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#A64DFF" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        viewBox="0 0 100 100"
        className="absolute inset-[3%] w-[94%] h-[94%] animate-spin-slower"
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke="#B98CFF" strokeOpacity="0.35" strokeWidth="0.4" strokeDasharray="1 4" strokeLinecap="round" />
      </motion.svg>

      {/* orbiting glow particles */}
      {orbitDots.map((d, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 w-0 h-0"
          style={{ '--orbit-radius': `${d.radius / 2}px` }}
        >
          <span
            className={`absolute rounded-full ${d.color} shadow-[0_0_12px_2px_rgba(166,77,255,0.7)] ${d.reverse ? 'animate-orbit-reverse' : 'animate-orbit'}`}
            style={{
              width: d.size,
              height: d.size,
              marginLeft: -d.size / 2,
              marginTop: -d.size / 2,
              animationDuration: `${d.duration}s`,
              animationDelay: `${d.delay}s`,
            }}
          />
        </div>
      ))}

      {/* corner tech brackets */}
      {[
        'top-2 left-2 border-t border-l',
        'top-2 right-2 border-t border-r',
        'bottom-2 left-2 border-b border-l',
        'bottom-2 right-2 border-b border-r',
      ].map((pos, i) => (
        <motion.span
          key={pos}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
          className={`absolute w-6 h-6 border-neon-ice/50 ${pos}`}
        />
      ))}

      {/* the photo, with a subtle cursor-tracking tilt and continuous float */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          scale: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 },
        }}
        className="relative w-full h-full"
      >
        <div className="relative w-full h-full overflow-hidden rounded-full">
          <img
            src="/images/kevin-peterson.png"
            alt="Kevin Peterson — Cybersecurity Specialist"
            className="relative z-10 w-full h-full object-cover select-none pointer-events-none"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 78% 82% at 50% 48%, black 78%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse 78% 82% at 50% 48%, black 78%, transparent 100%)',
            }}
            loading="eager"
            draggable={false}
          />
          {/* animated scan sweep */}
          <div className="absolute inset-0 z-20 overflow-hidden rounded-full pointer-events-none">
            <div className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-neon-ice/20 to-transparent animate-scan" />
          </div>
        </div>
      </motion.div>

      {/* small twinkling specks scattered around the ring */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2
        const r = 46
        const x = 50 + r * Math.cos(angle)
        const y = 50 + r * Math.sin(angle)
        return (
          <span
            key={`speck-${i}`}
            className="absolute w-1 h-1 rounded-full bg-neon-ice animate-twinkle"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animationDelay: `${i * 0.25}s`,
              animationDuration: `${2 + (i % 4) * 0.4}s`,
            }}
          />
        )
      })}
    </div>
  )
}
