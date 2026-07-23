import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Play, Sparkles } from 'lucide-react'
import CountUp from 'react-countup'

const floatingCards = [
  { label: 'Deploy status', value: 'Live', accent: 'text-emerald-400', top: '8%', left: '4%', delay: 0.2 },
  { label: 'Uptime (30d)', value: '99.98%', accent: 'text-accent-cyan', top: '62%', left: '-2%', delay: 0.4 },
  { label: 'API latency', value: '84ms', accent: 'text-accent-violet', top: '78%', left: '58%', delay: 0.6 },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 bg-aurora-gradient" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[length:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent-indigo/20 blur-[120px] animate-spin-slow"
        aria-hidden="true"
      />

      <div className="container-nova relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Sparkles size={13} />
            Trusted by 180+ growing companies
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4rem]"
          >
            We engineer software
            <br />
            that <span className="text-gradient">ships and scales.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-400 sm:text-lg"
          >
            NovaTech Solutions is a product engineering studio building web platforms, mobile apps, and
            cloud infrastructure for teams who can't afford to move slow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link to="/contact" className="btn-primary">
              Start your project
              <ArrowUpRight size={17} />
            </Link>
            <Link to="/services" className="btn-secondary">
              <Play size={15} />
              Explore our work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {[
              { value: 180, suffix: '+', label: 'Projects' },
              { value: 98, suffix: '%', label: 'Retention' },
              { value: 7, suffix: 'yrs', label: 'In business' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  <CountUp end={stat.value} duration={2.4} decimals={0} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </span>
                <span className="mt-1 text-xs uppercase tracking-wider text-ink-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating glass metric cards — desktop signature element */}
        <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
          {floatingCards.map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: card.delay }}
              style={{ top: card.top, left: card.left }}
              className="absolute w-48 animate-float rounded-2xl glass shadow-card p-4"
            >
              <p className="text-[10px] uppercase tracking-widest text-ink-400">{card.label}</p>
              <p className={`mt-1 font-mono text-lg font-semibold ${card.accent}`}>{card.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
