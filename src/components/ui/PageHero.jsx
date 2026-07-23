import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ eyebrow, title, description, breadcrumb }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-aurora-gradient opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[length:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="container-nova relative">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-1.5 text-xs text-ink-400"
        >
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-white">{breadcrumb}</span>
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-400 sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
