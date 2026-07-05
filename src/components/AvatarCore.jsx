import { motion } from 'framer-motion'

export default function AvatarCore() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto">
      {/* ambient glow behind the artwork */}
      <div className="absolute inset-6 bg-neon/25 blur-[70px] rounded-full animate-pulseGlow" />

      {/* the design — photo with its glowing rings baked in, shown as-is */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          scale: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 },
        }}
        className="relative"
      >
        <img
          src="/images/kevin-peterson.png"
          alt="Kevin Peterson — Cybersecurity Specialist"
          className="relative z-10 w-full h-auto select-none pointer-events-none"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 78% 82% at 50% 48%, black 78%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 78% 82% at 50% 48%, black 78%, transparent 100%)',
          }}
          loading="eager"
          draggable={false}
        />
      </motion.div>
    </div>
  )
}
