import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { profile } from '../data/data'

export default function AvatarCore() {
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`

  return (
    <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] mx-auto">
      {/* outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-neon/30"
        style={{ borderStyle: 'dashed' }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
      />
      {/* middle rotating ring */}
      <div className="absolute inset-6 rounded-full border-2 border-neon/40 animate-spin-slow" />
      <div className="absolute inset-12 rounded-full border border-neon-ice/30 animate-spin-slower" />

      {/* glow */}
      <div className="absolute inset-10 rounded-full bg-neon/25 blur-3xl animate-pulseGlow" />

      {/* core hexagon */}
      <div className="absolute inset-[64px] sm:inset-20">
        <div className="relative w-full h-full hex-icon glass overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-deep/40 via-transparent to-neon-ice/20" />
          <div className="absolute inset-0 grid-overlay opacity-40" />
          {/* scan line */}
          <div className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-neon/40 to-transparent animate-scan" />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <ShieldCheck className="w-9 h-9 sm:w-11 sm:h-11 text-neon-ice" strokeWidth={1.5} />
            <span className="font-display font-bold text-3xl sm:text-4xl text-white tracking-widest">{initials}</span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-neon-soft/80 uppercase">Verified</span>
          </div>
        </div>
      </div>

      {/* orbiting dot */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
      >
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-neon-ice shadow-[0_0_12px_4px_rgba(94,234,212,0.6)]" />
      </motion.div>
    </div>
  )
}
