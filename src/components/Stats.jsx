import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, FolderGit2, Award, GraduationCap } from 'lucide-react'
import { stats } from '../data/data'

const icons = [ShieldCheck, FolderGit2, Award, GraduationCap]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display font-extrabold text-4xl sm:text-5xl text-white">
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative -mt-10 z-20 px-6 sm:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="glass rounded-3xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.08]"
      >
        {stats.map((s, i) => {
          const Icon = icons[i]
          return (
            <div key={s.label} className="flex items-center gap-4 p-6 sm:p-8">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-neon-ice" />
              </div>
              <div>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white/50 mt-1">{s.label}</p>
              </div>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
