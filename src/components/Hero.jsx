import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowRight, Wifi, Radar, ScanLine, ShieldAlert } from 'lucide-react'
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
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <ParticleField density={60} className="opacity-70" />
      <div className="absolute inset-0 grid-overlay opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-3xl max-h-[48rem] bg-radial-glow" />

      <div className="relative z-10 w-full section-pad !py-0 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
        {/* Left column */}
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">
          <motion.p variants={item} className="eyebrow mb-4">
            Cyber Security Specialist
          </motion.p>
          <motion.h1 variants={item} className="font-display font-extrabold text-5xl sm:text-6xl xl:text-7xl leading-[0.98] tracking-tight">
            <span className="block text-white">{profile.firstName.toUpperCase()}</span>
            <span className="block text-gradient">{profile.lastName.toUpperCase()}</span>
          </motion.h1>

          <motion.div variants={item} className="mt-6 flex items-center gap-3 font-mono text-sm text-white/60">
            <span className="w-8 h-px bg-neon/60" />
            {profile.tagline}
          </motion.div>
          <motion.p variants={item} className="mt-4 text-white/60 leading-relaxed">
            {profile.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              Explore Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href={profile.cvFile} download className="btn-outline">
              Download CV <Download className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {[
              { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
              { icon: Github, href: profile.github, label: 'GitHub' },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-neon-ice hover:border-neon/50 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
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
                className="glass-card flex items-center gap-3 px-4 py-3 w-full lg:w-64"
              >
                <div className="w-10 h-10 shrink-0 hex-icon bg-neon/15 flex items-center justify-center">
                  <Icon className="text-neon-ice" size={18} />
                </div>
                <span className="text-sm font-medium text-white/85">{f.title}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
