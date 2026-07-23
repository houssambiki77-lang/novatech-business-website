import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { pricingPlans } from '../../data/pricing'

export default function Pricing() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-nova">
        <SectionHeading
          eyebrow="Pricing"
          title="Straightforward pricing, no hourly surprises."
          description="Every quote is scoped to your project before we start. Need something in between? We'll build a custom plan."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  plan.highlighted
                    ? 'bg-accent-gradient shadow-glow lg:-translate-y-4'
                    : 'border border-white/8 bg-navy-800/40'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 right-8 rounded-full bg-navy-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-cyan">
                    Most popular
                  </span>
                )}
                <h3 className={`font-display text-xl font-semibold ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm ${plan.highlighted ? 'text-white/80' : 'text-ink-400'}`}>
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  {plan.price ? (
                    <>
                      <span className={`font-display text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-ink-400'}`}>
                        /{plan.period}
                      </span>
                    </>
                  ) : (
                    <span className="font-display text-4xl font-bold text-white">Custom</span>
                  )}
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${plan.highlighted ? 'text-white' : 'text-accent-cyan'}`}
                      />
                      <span className={plan.highlighted ? 'text-white/90' : 'text-ink-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-8 w-full rounded-full py-3.5 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    plan.highlighted
                      ? 'bg-white text-navy-900'
                      : 'border border-white/15 glass text-white hover:border-accent-cyan/50'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
