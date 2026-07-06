import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Radar } from 'lucide-react'
import { profile } from '../data/data'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 glass border-b border-white/[0.08]' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-20">
        <a href="#home" className="flex items-center gap-2 group">
          <Radar className="w-6 h-6 text-neon group-hover:rotate-45 transition-transform duration-500" />
          <span className="font-display font-bold leading-none tracking-tight">
            <span className="block text-sm text-neon-soft">{profile.firstName.toUpperCase()}</span>
            <span className="block text-sm">{profile.lastName.toUpperCase()}</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-xs font-mono tracking-[0.15em] uppercase transition-colors relative pb-1 ${
                  active === l.href ? 'text-white' : 'text-white/50 hover:text-white/90'
                }`}
              >
                {l.label}
                {active === l.href && (
                  <motion.span layoutId="nav-underline" className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-gradient-to-r from-neon to-neon-ice" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden lg:inline-flex btn-outline !py-2.5 !px-5 !text-xs">
          Let's Connect
        </a>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass mt-3 mx-4 rounded-2xl"
          >
            <ul className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 text-sm font-mono uppercase tracking-wide text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
