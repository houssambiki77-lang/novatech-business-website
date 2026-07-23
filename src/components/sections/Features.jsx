import { ShieldCheck, Gauge, Users, GitBranch } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const features = [
  {
    icon: Gauge,
    title: 'Built for performance',
    description: 'Every build is audited against Core Web Vitals before it ships — no bloated, sluggish sites.',
  },
  {
    icon: ShieldCheck,
    title: 'Security by default',
    description: 'Dependency scanning, encrypted secrets, and least-privilege access baked into every project.',
  },
  {
    icon: Users,
    title: 'Senior team, always',
    description: 'You work directly with senior engineers and designers — never routed through junior hand-offs.',
  },
  {
    icon: GitBranch,
    title: 'Transparent process',
    description: 'A live project board and staging link mean you always know exactly what shipped and when.',
  },
]

export default function Features() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-nova">
        <SectionHeading
          eyebrow="Why choose us"
          title="Engineering discipline, without the agency overhead."
          description="We run lean, senior-only teams so your budget goes toward building, not layers of account management."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl glass p-7 transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-accent-cyan">
                  <feature.icon size={20} />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
