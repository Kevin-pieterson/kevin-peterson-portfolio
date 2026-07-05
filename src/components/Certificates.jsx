import { motion } from 'framer-motion'
import { Award, Eye, Download, BadgeCheck } from 'lucide-react'
import { certificates, inProgress } from '../data/data'

export default function Certificates() {
  return (
    <section id="certificates" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="eyebrow mb-3">Credentials</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-xl">
            Professional certifications that validate my expertise across networking, systems administration and
            ethical hacking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              className={`glass-card p-5 flex items-center gap-4 ${c.featured ? 'md:col-span-2 border-neon/30' : ''}`}
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-neon/10 border border-neon/25 flex items-center justify-center">
                <Award className="w-5 h-5 text-neon-ice" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-white truncate">{c.name}</h3>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-signal">
                    <BadgeCheck className="w-3 h-3" /> Verified
                  </span>
                </div>
                <p className="text-xs text-white/45 mt-0.5">
                  {c.issuer} · {c.date} · {c.credentialId}
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href={c.file}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${c.name}`}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-neon-ice hover:border-neon/50 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </a>
                <a
                  href={c.file}
                  download
                  aria-label={`Download ${c.name}`}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-neon-ice hover:border-neon/50 transition-colors"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 glass-card p-5 flex items-center gap-4 border-dashed border-white/15"
        >
          <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center">
            <Award className="w-5 h-5 text-white/40" />
          </div>
          <div>
            <h3 className="font-semibold text-white/70">{inProgress.name}</h3>
            <p className="text-xs text-white/40 mt-0.5">Status: {inProgress.status}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
