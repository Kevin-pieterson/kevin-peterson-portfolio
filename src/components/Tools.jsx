import { motion } from 'framer-motion'
import { Terminal, Activity, Radar, ShieldAlert, Eye, Users, Monitor, Cpu, Database, Cloud, Network, Flag, Box } from 'lucide-react'
import { tools } from '../data/data'

const iconMap = {
  kali: Terminal,
  wireshark: Activity,
  nmap: Radar,
  nessus: ShieldAlert,
  sentinel: Eye,
  activedirectory: Users,
  windows: Monitor,
  linux: Cpu,
  powershell: Terminal,
  bash: Terminal,
  kql: Database,
  azure: Cloud,
  cisco: Network,
  tryhackme: Flag,
  virtualbox: Box,
}

export default function Tools() {
  return (
    <section className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-3">Toolkit</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Tools &amp; <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {tools.map((t, i) => {
            const Icon = iconMap[t.icon] || Terminal
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 10) * 0.04 }}
                className="glass-card flex flex-col items-center justify-center gap-3 p-5 aspect-square"
              >
                <Icon className="w-7 h-7 text-neon-ice" strokeWidth={1.5} />
                <span className="text-xs text-center text-white/70 leading-tight">{t.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
