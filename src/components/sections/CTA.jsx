import { Link } from 'react-router-dom'
import { ArrowUpRight, Calendar } from 'lucide-react'
import Reveal from '../ui/Reveal'

export default function CTA() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-nova">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-accent-gradient px-6 py-16 text-center shadow-glow sm:px-16">
            <div
              className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[length:36px_36px] opacity-20"
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Have a project in mind? Let's build it.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/85">
                Book a free 30-minute discovery call — we'll scope your project and give you a real
                timeline before you commit to anything.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-navy-900 transition-transform hover:scale-[1.03]"
                >
                  Book a discovery call
                  <Calendar size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  See our services
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
