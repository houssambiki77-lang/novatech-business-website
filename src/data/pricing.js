export const pricingPlans = [
  {
    name: 'Starter',
    price: 2900,
    period: 'project',
    description: 'For landing pages and small marketing sites that need to look sharp fast.',
    features: [
      'Up to 5 pages',
      'Responsive design (mobile to desktop)',
      'Basic on-page SEO setup',
      'Contact form integration',
      '2 rounds of revisions',
      '2-week delivery',
    ],
    highlighted: false,
    cta: 'Start a project',
  },
  {
    name: 'Growth',
    price: 7900,
    period: 'project',
    description: 'For product sites, dashboards, and custom web applications.',
    features: [
      'Up to 15 pages or app views',
      'Custom UI/UX design system',
      'CMS or admin dashboard integration',
      'Advanced SEO & analytics setup',
      'API integrations (up to 3)',
      '4 rounds of revisions',
      '6-8 week delivery',
    ],
    highlighted: true,
    cta: 'Get started',
  },
  {
    name: 'Enterprise',
    price: null,
    period: 'custom',
    description: 'For complex platforms, mobile apps, and long-term product partnerships.',
    features: [
      'Unlimited pages & app screens',
      'Dedicated product & engineering pod',
      'Native mobile app (iOS & Android)',
      'Cloud architecture & DevOps',
      'AI automation & custom integrations',
      'Priority support & SLA',
    ],
    highlighted: false,
    cta: 'Talk to sales',
  },
]

export const retainerPlans = [
  {
    name: 'Care',
    price: 490,
    period: 'month',
    description: 'Baseline maintenance for sites that just need to stay healthy.',
    features: ['Security patches & updates', 'Uptime monitoring', 'Monthly report', '2 hrs of support work'],
  },
  {
    name: 'Growth Retainer',
    price: 1450,
    period: 'month',
    description: 'For teams shipping new features every month.',
    features: ['Everything in Care', '10 hrs of dev work', 'Priority 24h response', 'Quarterly strategy call'],
  },
]
