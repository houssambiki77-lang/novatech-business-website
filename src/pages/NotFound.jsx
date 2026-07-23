import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found — NovaTech Solutions'
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 bg-aurora-gradient" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[length:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="container-nova relative">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-display text-[7rem] font-bold leading-none text-transparent [-webkit-text-stroke:2px_theme(colors.white/0.15)] sm:text-[9rem]"
          >
            404
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl"
          >
            This page took a wrong turn.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-3 text-sm leading-relaxed text-ink-400"
          >
            The page you're looking for doesn't exist or may have moved. Let's get you back on track.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link to="/" className="btn-primary">
              <Home size={16} />
              Back to homepage
            </Link>
            <Link to="/contact" className="btn-secondary">
              <ArrowLeft size={16} />
              Contact support
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
