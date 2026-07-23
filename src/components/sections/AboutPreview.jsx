import { Link } from 'react-router-dom'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Reveal from '../ui/Reveal'

const points = [
  'Senior engineers only — no junior hand-offs mid-project',
  'Fixed timelines with a live staging link from week one',
  '30-day post-launch warranty on every engagement',
]

export default function AboutPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-nova grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal y={30} className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=1150&fit=crop"
              alt="NovaTech engineers collaborating around a laptop in a modern office"
              loading="lazy"
              className="h-[480px] w-full object-cover sm:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-56 rounded-2xl glass shadow-card p-5 sm:block">
            <p className="font-display text-3xl font-semibold text-white">7+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-ink-400">
              Years building production software
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">About NovaTech</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A product studio that thinks like your in-house team.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-base leading-relaxed text-ink-400">
              Founded in 2018, NovaTech Solutions partners with founders and product leaders to design,
              build, and ship software that holds up under real usage — not just in the demo.
            </p>
          </Reveal>

          <ul className="mt-7 space-y-3">
            {points.map((point, i) => (
              <Reveal key={point} delay={0.18 + i * 0.06}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-cyan" />
                  <span className="text-sm text-ink-300">{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.4}>
            <Link to="/about" className="btn-secondary mt-9">
              More about our story
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
