import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import CTA from '../components/sections/CTA'
import FAQ from '../components/sections/FAQ'
import { services } from '../data/services'

export default function Services() {
  useEffect(() => {
    document.title = 'Services — NovaTech Solutions'
  }, [])

  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="What we offer"
        title="Nine disciplines. One accountable team."
        description="From first prototype to production infrastructure, every service below is delivered by the same senior team — no subcontracted hand-offs."
      />

      <section className="py-16 sm:py-20">
        <div className="container-nova space-y-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={Math.min(i * 0.04, 0.3)}>
              <div
                id={service.slug}
                className="scroll-mt-28 grid grid-cols-1 gap-8 rounded-3xl border border-white/8 bg-navy-800/40 p-8 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center"
              >
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-gradient text-white shadow-glow">
                  <service.icon size={28} />
                </span>

                <div>
                  <h2 className="font-display text-2xl font-semibold text-white">{service.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-400">{service.description}</p>
                  <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-ink-300">
                        <Check size={15} className="mt-0.5 shrink-0 text-accent-cyan" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="btn-secondary shrink-0 self-start lg:self-center"
                >
                  Get started
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  )
}
