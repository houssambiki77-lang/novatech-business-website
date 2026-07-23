import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Phone, Clock, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { FaXTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa6'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'

const EMAILJS_SERVICE_ID = 'service_novatech'
const EMAILJS_TEMPLATE_ID = 'template_contact'
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'

const socials = [
  { icon: FaXTwitter, href: 'https://twitter.com/novatechsltns', label: 'X (Twitter)' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/company/novatech-solutions', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/novatech-solutions', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://instagram.com/novatech.solutions', label: 'Instagram' },
]

const hours = [{ day: 'Monday – Friday', time: '09:00 – 18:00' }]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  useEffect(() => {
    document.title = 'Contact Us — NovaTech Solutions'
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in touch"
        title="Tell us about your project."
        description="Fill out the form and a senior team member will reply within one business day — or book a call directly if you'd rather talk it through."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container-nova grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr]">
          {/* Contact info */}
          <Reveal className="space-y-6">
            <div className="rounded-3xl border border-white/8 bg-navy-800/40 p-8">
              <h2 className="font-display text-xl font-semibold text-white">Contact information</h2>
              <div className="mt-6 space-y-5">
                <a href="tel:+212600123456" className="flex items-start gap-4 group">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent-cyan">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-ink-400">Phone</p>
                    <p className="mt-0.5 text-sm text-white group-hover:text-accent-cyan">+212 600 123 456</p>
                  </div>
                </a>
                <a href="mailto:contact@novatech.dev" className="flex items-start gap-4 group">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent-cyan">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-ink-400">Email</p>
                    <p className="mt-0.5 text-sm text-white group-hover:text-accent-cyan">
                      contact@novatech.dev
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent-cyan">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-ink-400">Office</p>
                    <p className="mt-0.5 text-sm text-white">Technopark, Casablanca, Morocco</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent-cyan">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-ink-400">Business hours</p>
                    <ul className="mt-1 space-y-0.5">
                      {hours.map((h) => (
                        <li key={h.day} className="text-sm text-white">
                          <span className="text-ink-400">{h.day}:</span> {h.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex gap-3 border-t border-white/5 pt-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full glass text-ink-300 transition-colors hover:text-accent-cyan"
                  >
                    <s.icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/8">
              <iframe
                title="NovaTech Solutions office location on Google Maps"
                src="https://www.google.com/maps?q=Technopark+Casablanca+Morocco&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/8 bg-navy-800/40 p-8 sm:p-10"
            >
              <h2 className="font-display text-xl font-semibold text-white">Start a conversation</h2>
              <p className="mt-2 text-sm text-ink-400">We usually reply within one business day.</p>

              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-400">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="Yassine El Fassi"
                    className="w-full rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-ink-400 focus:border-accent-cyan/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-400">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="yassine@company.com"
                    className="w-full rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-ink-400 focus:border-accent-cyan/50"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-400">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Atlas Trading Group"
                    className="w-full rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-ink-400 focus:border-accent-cyan/50"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-400">
                    Estimated budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-white focus:border-accent-cyan/50"
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option value="<5k">Under $5,000</option>
                    <option value="5-15k">$5,000 – $15,000</option>
                    <option value="15-50k">$15,000 – $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-400">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you're building, your timeline, and any relevant links."
                  className="w-full resize-none rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-ink-400 focus:border-accent-cyan/50"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary mt-7 w-full sm:w-auto"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send message <Send size={15} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 size={16} /> Message sent — we'll be in touch within one business day.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={16} /> Something went wrong. Please email contact@novatech.dev directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
