import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

export default function ServicesPreview() {
  const featured = services.slice(0, 6)

  return (
    <section className="py-24 sm:py-32">
      <div className="container-nova">
        <SectionHeading
          eyebrow="What we do"
          title="Full-stack capability, senior-level execution."
          description="From first sketch to production infrastructure, our team covers every discipline your product needs — under one roof."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <Link
                to={`/services#${service.slug}`}
                className="group relative flex h-full flex-col rounded-2xl border border-white/8 bg-navy-800/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-indigo/40 hover:shadow-glow"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-white">
                  <service.icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{service.short}</p>
                <span className="mt-5 flex items-center gap-1.5 text-sm font-medium text-accent-cyan opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Link to="/services" className="btn-primary">
              View all services
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
