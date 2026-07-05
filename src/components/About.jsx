import { motion } from 'framer-motion'
import { Download, User, MapPin, Languages, GraduationCap, Briefcase, Target } from 'lucide-react'
import { profile, personalDetails, technicalSkills } from '../data/data'

const detailIcons = [User, GraduationCap, GraduationCap, MapPin, Languages, Target]

function SkillBar({ name, level, index }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-white/80">{name}</span>
        <span className="font-mono text-neon-soft">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.08, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-neon-deep to-neon-ice"
        />
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="eyebrow mb-3">Get To Know Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* left: bio + details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/60 leading-relaxed mb-8">{profile.summary}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {personalDetails.map((d, i) => {
                const Icon = detailIcons[i]
                return (
                  <div key={d.label} className="glass-card px-4 py-3 flex items-start gap-3">
                    <Icon className="w-4 h-4 text-neon-ice mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-white/40">{d.label}</p>
                      <p className="text-sm text-white/85">{d.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <a href={profile.cvFile} download className="btn-primary">
              Download CV <Download className="w-4 h-4" />
            </a>
          </motion.div>

          {/* right: skills */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow mb-2">Skills Overview</p>
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
              ))}
            </div>
            <a href="#projects" className="btn-outline mt-9">
              View Projects <Briefcase className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
