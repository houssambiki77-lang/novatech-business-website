import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import useScrolled from '../../hooks/useScrolled'
import ThemeSwitcher from './ThemeSwitcher'
import logoIcon from '../../assets/logo-icon.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const scrolled = useScrolled(20)
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container-nova">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 transition-all duration-300 ${
            scrolled ? 'glass shadow-card py-2.5' : 'py-2'
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 p-1.5 shadow-glow transition-transform group-hover:scale-105">
              <img src={logoIcon} alt="" className="h-full w-full object-contain" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              NovaTech<span className="text-gradient">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-ink-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeSwitcher />
            <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
              Get a quote
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeSwitcher />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white glass"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="container-nova mt-2 lg:hidden"
            aria-label="Mobile"
          >
            <div className="glass shadow-card flex flex-col gap-1 rounded-2xl p-3">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive ? 'bg-white/10 text-white' : 'text-ink-400 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 justify-center text-sm"
              >
                Get a quote
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
