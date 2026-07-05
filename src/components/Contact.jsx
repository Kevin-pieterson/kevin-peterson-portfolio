import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react'
import { profile } from '../data/data'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: profile.githubLabel, href: profile.github },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: profile.email,
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-neon/10 blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="eyebrow mb-3">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-xl">Let's connect and build a safer digital world together.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactItems.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="glass-card p-4 flex items-center gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-neon/10 border border-neon/25 flex items-center justify-center">
                    <Icon className="text-neon-ice" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-white/40">{label}</p>
                    <p className="text-sm text-white/85 truncate">{value}</p>
                  </div>
                </div>
              )
              return href ? (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-neon/50 focus:outline-none transition-colors"
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-neon/50 focus:outline-none transition-colors"
              />
            </div>
            <input
              required
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-neon/50 focus:outline-none transition-colors"
            />
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-neon/50 focus:outline-none transition-colors resize-none"
            />

            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto justify-center">
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm text-signal">
                <CheckCircle2 className="w-4 h-4" /> Message sent — thank you for reaching out.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-start gap-2 text-sm text-amber-400">
                <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                Contact form isn't configured yet. Add your EmailJS keys to a .env file (see README) or email{' '}
                <a className="underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>{' '}
                directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
