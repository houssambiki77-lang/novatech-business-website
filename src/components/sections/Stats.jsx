import CountUp from 'react-countup'
import Reveal from '../ui/Reveal'
import { stats } from '../../data/stats'

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-aurora-gradient opacity-60" aria-hidden="true" />
      <div className="container-nova relative">
        <div className="rounded-3xl glass shadow-card px-6 py-14 sm:px-14">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="flex flex-col items-center text-center">
                <span className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  <CountUp
                    end={stat.value}
                    duration={2.4}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {stat.suffix}
                </span>
                <span className="mt-2 text-xs uppercase tracking-wider text-ink-400 sm:text-sm">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
