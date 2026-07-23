import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { MessageCircle, Phone, X } from 'lucide-react'

const actions = [
  {
    key: 'whatsapp',
    label: 'Chat on WhatsApp',
    href: 'https://wa.me/212600123456',
    icon: FaWhatsapp,
    className: 'bg-[#25D366]',
  },
  {
    key: 'call',
    label: 'Call us',
    href: 'tel:+212600123456',
    icon: Phone,
    className: 'bg-accent-gradient',
  },
]

export default function FloatingButtons() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex flex-col items-end gap-3"
          >
            {actions.map((action, i) => (
              <motion.a
                key={action.key}
                href={action.href}
                target={action.key === 'whatsapp' ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                aria-label={action.label}
                className="group flex items-center gap-3"
              >
                <span className="rounded-lg glass px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-card transition-opacity group-hover:opacity-100">
                  {action.label}
                </span>
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-glow ${action.className}`}
                >
                  <action.icon size={20} />
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close quick contact menu' : 'Open quick contact menu'}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-gradient text-white shadow-glow transition-transform hover:scale-105"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex"
          >
            {open ? <X size={22} /> : <MessageCircle size={22} />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  )
}
