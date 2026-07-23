import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { processSteps } from '../../data/process'

export default function Process() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-nova">
        <SectionHeading
          eyebrow="Our process"
          title="Four stages. Zero surprises."
          description="The same repeatable process behind every project we've shipped, from a two-page landing site to a multi-year platform build."
        />

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute top-6 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative">
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-800 ring-1 ring-white/10 text-accent-cyan">
                    <step.icon size={20} />
                  </span>
                  <span className="font-mono text-xs text-ink-400">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
