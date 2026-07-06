import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowRight, Wifi, Radar, ScanLine, ShieldAlert, ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import { profile, featureCards } from '../data/data'
import ParticleField from './ParticleField'
import AvatarCore from './AvatarCore'

const iconMap = { network: Wifi, radar: Radar, scan: ScanLine, shield: ShieldAlert }

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <ParticleField density={90} className="opacity-70" />
      <div className="absolute inset-0 grid-overlay opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />
      <motion.div
        style={{ y: glowY }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-3xl max-h-[48rem] bg-radial-glow"
      />
      {/* drifting ambient glow orbs for extra depth */}
      <div className="absolute top-1/4 left-[8%] w-56 h-56 rounded-full bg-neon/10 blur-[80px] animate-drift" />
      <div className="absolute bottom-[12%] right-[10%] w-72 h-72 rounded-full bg-neon-ice/10 blur-[90px] animate-drift-slow" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full section-pad !py-0 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
        {/* Left column */}
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">
          <motion.p variants={item} className="eyebrow mb-4">
            Cyber Security Specialist
          </motion.p>
          <motion.h1 variants={item} className="font-display font-extrabold text-5xl sm:text-6xl xl:text-7xl leading-[0.98] tracking-tight">
            <span className="block text-white">{profile.firstName.toUpperCase()}</span>
            <span className="block text-gradient bg-[length:200%_auto] animate-shimmer">{profile.lastName.toUpperCase()}</span>
          </motion.h1>

          <motion.div variants={item} className="mt-6 flex items-center gap-3 font-mono text-sm text-white/60">
            <span className="w-8 h-px bg-neon/60" />
            {profile.tagline}
          </motion.div>
          <motion.p variants={item} className="mt-4 text-white/60 leading-relaxed">
            {profile.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="btn-primary"
            >
              Explore Projects
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.a>
            <motion.a
              href={profile.cvFile}
              download
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="btn-outline"
            >
              Download CV <Download className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {[
              { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
              { icon: Github, href: profile.github, label: 'GitHub' },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, rotate: 8, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 350, damping: 12 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-neon-ice hover:border-neon/50 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Center avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-first lg:order-none"
        >
          <AvatarCore />
        </motion.div>

        {/* Right feature cards */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-4 lg:items-end">
          {featureCards.map((f) => {
            const Icon = iconMap[f.icon]
            return (
              <motion.div
                key={f.title}
                variants={item}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className="glass-card group flex items-center gap-3 px-4 py-3 w-full lg:w-64"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  className="w-10 h-10 shrink-0 hex-icon bg-neon/15 flex items-center justify-center group-hover:bg-neon/25 transition-colors"
                >
                  <Icon className="text-neon-ice" size={18} />
                </motion.div>
                <span className="text-sm font-medium text-white/85">{f.title}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-white/40 hover:text-neon-ice transition-colors"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <span className="relative flex items-center justify-center w-7 h-7 rounded-full border border-white/15">
          <span className="absolute inset-0 rounded-full animate-ring-pulse" />
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.span>
        </span>
      </motion.a>
    </section>
  )
}
