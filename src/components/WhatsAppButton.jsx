import { motion } from 'framer-motion'
import { profile } from '../data/data'

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hi Kevin, I found your cybersecurity portfolio and I'd like to get in touch.`
  )
  const href = `https://wa.me/${profile.whatsapp}?text=${message}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Message Kevin on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] shadow-[0_0_25px_rgba(37,211,102,0.55)]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <svg viewBox="0 0 32 32" className="relative w-7 h-7 fill-white">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.288.638 4.428 1.744 6.254L4 29l7.938-1.703A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm.002 21.75a9.7 9.7 0 0 1-4.95-1.354l-.355-.21-4.71 1.01 1.006-4.59-.232-.373A9.7 9.7 0 0 1 5.25 15c0-5.93 4.824-10.75 10.756-10.75S26.762 9.07 26.762 15 21.938 24.75 16.006 24.75Zm5.61-7.66c-.307-.154-1.82-.898-2.102-1-.282-.102-.487-.154-.692.154-.205.307-.795 1-.975 1.205-.18.205-.36.23-.667.077-.307-.154-1.297-.478-2.47-1.523-.913-.814-1.53-1.82-1.71-2.128-.18-.307-.02-.473.135-.627.14-.14.307-.36.46-.54.154-.18.205-.307.307-.512.102-.205.05-.384-.026-.538-.077-.154-.692-1.665-.948-2.28-.25-.6-.505-.52-.692-.53-.18-.008-.384-.01-.59-.01-.205 0-.538.077-.82.384-.282.307-1.076 1.05-1.076 2.563 0 1.512 1.102 2.973 1.256 3.178.154.205 2.17 3.315 5.257 4.65.735.317 1.308.507 1.755.65.737.234 1.408.2 1.938.122.591-.088 1.82-.744 2.077-1.462.256-.717.256-1.332.18-1.462-.077-.128-.282-.205-.59-.36Z" />
      </svg>
    </motion.a>
  )
}
