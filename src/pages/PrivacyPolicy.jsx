import { useEffect } from 'react'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'

const sections = [
  {
    title: '1. Information we collect',
    body: 'We collect information you provide directly to us, such as your name, email address, company, and project details when you fill out our contact form or subscribe to our newsletter. We also automatically collect certain technical data — including IP address, browser type, and pages visited — through cookies and similar technologies when you use our site.',
  },
  {
    title: '2. How we use your information',
    body: 'We use the information we collect to respond to inquiries, deliver services you request, send occasional product and engineering updates (only if you opt in), improve our website, and comply with legal obligations. We do not sell your personal information to third parties.',
  },
  {
    title: '3. Cookies and tracking',
    body: 'We use cookies to remember your preferences, understand site traffic, and improve performance. You can control cookie preferences through the banner shown on your first visit, or through your browser settings at any time.',
  },
  {
    title: '4. Data sharing',
    body: 'We may share information with trusted service providers who help us operate our business (such as hosting, analytics, and email delivery providers), all of whom are contractually obligated to protect your data. We may also disclose information if required by law.',
  },
  {
    title: '5. Data retention',
    body: 'We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Contact form submissions are retained for up to 24 months.',
  },
  {
    title: '6. Your rights',
    body: 'Depending on your location, you may have the right to access, correct, delete, or export your personal data, and to opt out of marketing communications at any time. To exercise these rights, contact us at privacy@novatech.dev.',
  },
  {
    title: '7. Security',
    body: 'We implement industry-standard technical and organizational measures to protect your information, including encryption in transit and restricted access controls. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
  },
  {
    title: '8. Changes to this policy',
    body: 'We may update this Privacy Policy from time to time. Material changes will be reflected by an updated "Last revised" date at the top of this page.',
  },
  {
    title: '9. Contact us',
    body: 'If you have questions about this Privacy Policy, reach out to privacy@novatech.dev or write to us at Technopark, Casablanca, Morocco.',
  },
]

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy — NovaTech Solutions'
  }, [])

  return (
    <>
      <PageHero
        breadcrumb="Privacy Policy"
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last revised: January 12, 2026. This policy explains how NovaTech Solutions LLC collects, uses, and protects your information."
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
