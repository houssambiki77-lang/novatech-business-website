import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaXTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa6'
import logoIcon from '../../assets/logo-icon.png'

const footerLinks = {
  Company: [
    { label: 'About us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ],
  Services: [
    { label: 'Web Development', to: '/services#web-development' },
    { label: 'Mobile Apps', to: '/services#mobile-apps' },
    { label: 'UI/UX Design', to: '/services#ui-ux-design' },
    { label: 'Cloud Solutions', to: '/services#cloud-solutions' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '/terms' },
  ],
}

const socials = [
  { icon: FaXTwitter, href: 'https://twitter.com/novatechsltns', label: 'X (Twitter)' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/company/novatech-solutions', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/novatech-solutions', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://instagram.com/novatech.solutions', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy-950">
      <div className="container-nova py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 p-1.5">
                <img src={logoIcon} alt="" className="h-full w-full object-contain" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-white">
                NovaTech<span className="text-gradient">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Transforming Ideas into Digital Reality. We design and build web platforms, mobile apps,
              and cloud infrastructure for ambitious companies — from first prototype to enterprise scale.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full glass text-ink-300 transition-colors hover:text-accent-cyan"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-display text-sm font-semibold text-white">{title}</h3>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-sm text-ink-400 transition-colors hover:text-accent-cyan">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 rounded-2xl glass p-6 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent-cyan">
              <MapPin size={16} />
            </span>
            <span className="text-sm text-ink-300">Technopark, Casablanca, Morocco</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent-cyan">
              <Phone size={16} />
            </span>
            <a href="tel:+212600123456" className="text-sm text-ink-300 hover:text-white">
              +212 600 123 456
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent-cyan">
              <Mail size={16} />
            </span>
            <a href="mailto:contact@novatech.dev" className="text-sm text-ink-300 hover:text-white">
              contact@novatech.dev
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-ink-400 sm:flex-row">
          <p>© 2026 NovaTech Solutions. All Rights Reserved.</p>
          <p>Designed &amp; Developed by Hossam Bouykidaren</p>
        </div>
      </div>
    </footer>
  )
}
