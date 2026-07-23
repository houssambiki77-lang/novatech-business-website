import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Cookie } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = window.localStorage.getItem('novatech-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const respond = (value) => {
    window.localStorage.setItem('novatech-cookie-consent', value)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl glass shadow-card p-5 sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-gradient text-white">
              <Cookie size={16} />
            </span>
            <div className="flex-1">
              <p className="text-sm text-ink-300">
                We use cookies to improve your experience and analyze site traffic. Read our{' '}
                <Link to="/privacy-policy" className="text-accent-cyan underline underline-offset-2">
                  Privacy Policy
                </Link>{' '}
                to learn more.
              </p>
              <div className="mt-4 flex gap-3">
                <button onClick={() => respond('accepted')} className="btn-primary !px-4 !py-2 text-xs">
                  Accept all
                </button>
                <button
                  onClick={() => respond('declined')}
                  className="btn-secondary !px-4 !py-2 text-xs"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
