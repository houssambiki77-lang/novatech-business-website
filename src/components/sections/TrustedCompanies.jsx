import Reveal from '../ui/Reveal'
import { companies } from '../../data/companies'

export default function TrustedCompanies() {
  return (
    <section className="border-y border-white/5 bg-navy-950/40 py-10">
      <div className="container-nova">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink-400">
            Trusted by teams at
          </p>
        </Reveal>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {companies.map((name, i) => (
            <Reveal key={name} delay={i * 0.04}>
              <span className="font-display text-lg font-semibold tracking-tight text-ink-400/70 transition-colors hover:text-white">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
