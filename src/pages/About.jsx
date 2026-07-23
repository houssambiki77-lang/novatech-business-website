import { useEffect } from 'react'
import { Target, Eye, HeartHandshake, Zap, ShieldCheck, Users2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import CTA from '../components/sections/CTA'
import { team } from '../data/team'

const values = [
  { icon: Zap, title: 'Move with urgency', description: 'We treat your deadlines like our own — momentum compounds.' },
  { icon: ShieldCheck, title: 'Own the outcome', description: 'We don\'t hand off risk. If something breaks, we fix it.' },
  { icon: HeartHandshake, title: 'Radical transparency', description: 'You see the same project board and numbers we do.' },
  { icon: Users2, title: 'Senior craft', description: 'Every engagement is led by people who\'ve shipped at scale before.' },
]

const timeline = [
  { year: '2018', title: 'NovaTech founded', description: 'Started as a two-person freelance team building MVPs for early-stage founders.' },
  { year: '2020', title: 'First enterprise client', description: 'Delivered a logistics platform rebuild that scaled to 200+ warehouse locations.' },
  { year: '2022', title: 'Team reaches 20', description: 'Opened dedicated design and cloud infrastructure practices.' },
  { year: '2024', title: 'AI automation practice launched', description: 'Began building LLM-powered internal tools for existing clients.' },
  { year: '2026', title: '180+ projects shipped', description: 'Now partnering with teams across fintech, health, and logistics.' },
]

export default function About() {
  useEffect(() => {
    document.title = 'About Us — NovaTech Solutions'
  }, [])

  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="Our story"
        title="We started NovaTech to fix a broken agency model."
        description="Too many teams were burned by agencies that over-promised and under-delivered. We built NovaTech around senior talent, honest timelines, and outcomes you can measure."
      />

      {/* Mission / Vision */}
      <section className="py-20">
        <div className="container-nova grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal className="rounded-3xl border border-white/8 bg-navy-800/40 p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-white">
              <Target size={22} />
            </span>
            <h2 className="mt-6 font-display text-2xl font-semibold text-white">Our mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              To give growing companies access to senior-level engineering and design talent without
              the overhead, politics, or slow timelines of a traditional agency.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border border-white/8 bg-navy-800/40 p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-white">
              <Eye size={22} />
            </span>
            <h2 className="mt-6 font-display text-2xl font-semibold text-white">Our vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              A world where every ambitious team — regardless of size — can build software as well as
              the best-funded companies in their industry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container-nova">
          <SectionHeading
            eyebrow="Core values"
            title="What guides how we work."
            description="These aren't posters on a wall — they're how we make decisions on every project."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl glass p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-accent-cyan">
                    <value.icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container-nova">
          <SectionHeading eyebrow="Timeline" title="Seven years, one steady trajectory." />

          <div className="relative mt-16 mx-auto max-w-2xl">
            <div
              className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-indigo via-accent-cyan to-transparent sm:left-1/2"
              aria-hidden="true"
            />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <div
                    className={`relative flex flex-col gap-2 pl-10 sm:w-1/2 sm:pl-0 ${
                      i % 2 === 0 ? 'sm:pr-12 sm:text-right sm:mr-auto' : 'sm:pl-12 sm:ml-auto'
                    }`}
                  >
                    <span
                      className={`absolute left-[9px] top-1 h-3.5 w-3.5 rounded-full bg-accent-gradient ring-4 ring-navy-900 sm:top-1 ${
                        i % 2 === 0 ? 'sm:left-auto sm:-right-[7px]' : 'sm:-left-[7px]'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-sm text-accent-cyan">{item.year}</span>
                    <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-400">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container-nova">
          <SectionHeading
            eyebrow="Meet the team"
            title="The people building your product."
            description="A senior team spanning engineering, design, cloud, and AI — each of whom you'll actually work with."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 0.08}>
                <div className="group overflow-hidden rounded-2xl border border-white/8 bg-navy-800/40">
                  <div className="overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-base font-semibold text-white">{member.name}</h3>
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-accent-cyan">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-400">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
