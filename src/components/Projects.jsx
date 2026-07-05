import { motion } from 'framer-motion'
import { Github, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { projects } from '../data/data'

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="eyebrow mb-3">Hands-On Labs</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-xl">
            A showcase of practical labs in network security, vulnerability assessment, and SOC operations —
            each built end-to-end and documented on GitHub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card flex flex-col overflow-hidden group"
            >
              <div className={`h-1.5 bg-gradient-to-r ${p.accent}`} />
              <div className="p-6 flex flex-col flex-1">
                <p className="font-mono text-[11px] uppercase tracking-wider text-neon-soft/80 mb-2">{p.subtitle}</p>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed mb-4">{p.description}</p>

                <ul className="space-y-2 mb-5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-xs text-white/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neon-ice mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-neon/10 border border-neon/20 text-neon-soft">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full border border-white/15 text-sm font-medium text-white/85 hover:border-neon/50 hover:bg-neon/10 transition-all"
                >
                  <Github className="w-4 h-4" /> View on GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
