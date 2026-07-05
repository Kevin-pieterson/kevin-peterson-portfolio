import { Github, Linkedin, Mail, Radar } from 'lucide-react'
import { profile } from '../data/data'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] px-6 sm:px-10 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Radar className="w-5 h-5 text-neon" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/50">Let's Connect</span>
        </div>

        <div className="flex items-center gap-3">
          {[
            { icon: Linkedin, href: profile.linkedin },
            { icon: Github, href: profile.github },
            { icon: Mail, href: `mailto:${profile.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/60 hover:text-neon-ice hover:border-neon/50 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-white/35 font-mono">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
