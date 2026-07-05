import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'

export default function AvatarCore() {
  return (
    <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] mx-auto">
      {/* ambient glow behind everything */}
      <div className="absolute inset-6 rounded-full bg-neon/30 blur-3xl animate-pulseGlow" />

      {/* outer dashed ring, slow rotation */}
      <motion.div
        className="absolute inset-0 rounded-full border border-neon/30"
        style={{ borderStyle: 'dashed' }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
      />
      {/* mid gradient ring */}
      <div className="absolute inset-5 rounded-full p-[2px] bg-gradient-to-tr from-neon via-neon-ice to-neon-deep animate-spin-slow">
        <div className="w-full h-full rounded-full bg-void" />
      </div>
      {/* thin inner ring, counter-rotating */}
      <div className="absolute inset-9 rounded-full border border-neon-ice/40 animate-spin-slower" />

      {/* orbiting nodes */}
      <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 9, ease: 'linear' }}>
        <span className="absolute top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-neon-ice shadow-[0_0_14px_5px_rgba(94,234,212,0.65)]" />
      </motion.div>
      <motion.div className="absolute inset-0" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 13, ease: 'linear' }}>
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_10px_4px_rgba(166,77,255,0.6)]" />
      </motion.div>

      {/* photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-9 sm:inset-11 rounded-full overflow-hidden"
      >
        <img
          src="/images/kevin-peterson.png"
          alt="Kevin Peterson — Cybersecurity Specialist"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* scan line sweep */}
        <div className="absolute inset-x-0 h-1/4 bg-gradient-to-b from-transparent via-neon-ice/25 to-transparent animate-scan" />
        {/* subtle vignette + tint to keep it on-theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-neon-deep/10" />
      </motion.div>

      {/* verified badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-1.5 flex items-center gap-1.5 shadow-glow"
      >
        <BadgeCheck className="w-3.5 h-3.5 text-neon-ice" />
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/80">Verified Specialist</span>
      </motion.div>
    </div>
  )
}
