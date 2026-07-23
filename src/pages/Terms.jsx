import { useEffect } from 'react'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'

const sections = [
  {
    title: '1. Acceptance of terms',
    body: 'By accessing or using the NovaTech Solutions website, or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our site or services.',
  },
  {
    title: '2. Services',
    body: 'NovaTech Solutions LLC provides software design and development services, including web development, mobile app development, UI/UX design, cloud infrastructure, SEO, digital marketing, AI automation, API integration, and ongoing maintenance, as described in a separate signed statement of work for each engagement.',
  },
  {
    title: '3. Proposals and payment',
    body: 'Project scope, timeline, and pricing are defined in a written proposal or statement of work prior to commencement. Unless otherwise agreed, projects require a deposit before work begins, with remaining payments due at agreed milestones.',
  },
  {
    title: '4. Intellectual property',
    body: 'Upon full payment, ownership of custom deliverables created specifically for your project transfers to you, excluding any pre-existing tools, frameworks, or libraries owned by NovaTech Solutions or third parties, which are licensed for your continued use.',
  },
  {
    title: '5. Client responsibilities',
    body: 'You agree to provide timely feedback, content, and access necessary for us to complete the project on schedule. Delays caused by incomplete or late materials may extend the agreed timeline.',
  },
  {
    title: '6. Warranty',
    body: 'We provide a 30-day warranty period following project delivery, during which we will fix any bugs directly related to work performed at no additional cost. This warranty does not cover new feature requests or issues caused by third-party changes.',
  },
  {
    title: '7. Limitation of liability',
    body: 'To the maximum extent permitted by law, NovaTech Solutions LLC shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability for any claim shall not exceed the amount paid for the relevant engagement.',
  },
  {
    title: '8. Termination',
    body: 'Either party may terminate an active engagement with 14 days written notice. Client is responsible for payment for all work completed up to the termination date.',
  },
  {
    title: '9. Governing law',
    body: 'These terms are governed by the laws of the State of Texas, without regard to conflict of law principles.',
  },
  {
    title: '10. Contact',
    body: 'Questions about these Terms of Service can be directed to legal@novatech.dev.',
  },
]

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms of Service — NovaTech Solutions'
  }, [])

  return (
    <>
      <PageHero
        breadcrumb="Terms of Service"
        eyebrow="Legal"
        title="Terms of Service"
        description="Last revised: January 12, 2026. Please read these terms carefully before using our website or engaging our services."
      />
      <section className="pb-24 sm:pb-32">
        <div className="container-nova max-w-3xl">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={Math.min(i * 0.03, 0.2)}>
                <div>
                  <h2 className="font-display text-lg font-semibold text-white">{section.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-400">{section.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
