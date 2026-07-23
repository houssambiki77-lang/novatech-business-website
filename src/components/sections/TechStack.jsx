import { SiReact, SiSpringboot, SiTailwindcss, SiNodedotjs, SiMysql, SiDocker } from 'react-icons/si'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const stack = [
  { name: 'React', icon: SiReact },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Docker', icon: SiDocker },
]

export default function TechStack() {
  return (
    <section className="py-20">
      <div className="container-nova">
        <SectionHeading eyebrow="Our stack" title="Technologies we use." />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stack.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 0.05}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-navy-800/40 px-4 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-indigo/40">
                <tech.icon size={32} className="text-ink-300" />
                <span className="text-xs font-medium text-ink-400">{tech.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
