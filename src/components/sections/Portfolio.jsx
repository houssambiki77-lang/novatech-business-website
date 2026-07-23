import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { portfolio } from '../../data/portfolio'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const categories = ['All', ...new Set(portfolio.map((p) => p.category))]
  const filtered = active === 'All' ? portfolio : portfolio.filter((p) => p.category === active)

  return (
    <section className="py-24 sm:py-32">
      <div className="container-nova">
        <SectionHeading
          eyebrow="Selected work"
          title="Products we've helped bring to life."
          description="A snapshot of platforms, apps, and infrastructure we've shipped for clients across fintech, healthcare, and logistics."
        />

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                  active === cat
                    ? 'border-transparent bg-accent-gradient text-white'
                    : 'border-white/10 text-ink-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl shadow-card">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-cyan">
                    {project.category}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-ink-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>
                <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full glass text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
