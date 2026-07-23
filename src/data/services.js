import {
  Code2, Smartphone, Palette, Cloud, Search, Megaphone, Bot, Plug, Wrench,
} from 'lucide-react'

export const services = [
  {
    slug: 'web-development',
    icon: Code2,
    title: 'Web Development',
    short: 'Fast, scalable web applications built on modern frameworks.',
    description:
      'We design and build custom web applications and marketing sites using React, Next.js and Node — engineered for performance, SEO, and long-term maintainability.',
    benefits: [
      'Server-rendered React for sub-second load times',
      'Component-driven architecture your team can extend',
      'Automated testing and CI/CD pipelines from day one',
      'WCAG 2.1 AA accessibility built in, not bolted on',
    ],
  },
  {
    slug: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile Apps',
    short: 'Native-feel iOS and Android apps from a single codebase.',
    description:
      'Our team ships cross-platform apps with React Native and native modules where performance demands it — from prototype to App Store approval.',
    benefits: [
      'Shared codebase across iOS and Android',
      'Offline-first data sync and push notifications',
      'App Store & Play Store submission handled for you',
      'Crash reporting and analytics wired in at launch',
    ],
  },
  {
    slug: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    short: 'Interfaces people enjoy using, backed by research.',
    description:
      'We run discovery workshops, wireframe, prototype in Figma, and usability-test before a single line of code ships — so design decisions are validated, not guessed.',
    benefits: [
      'User research and journey mapping',
      'Interactive prototypes for stakeholder buy-in',
      'Design systems built for consistency at scale',
      'Usability testing with real target users',
    ],
  },
  {
    slug: 'cloud-solutions',
    icon: Cloud,
    title: 'Cloud Solutions',
    short: 'Infrastructure that scales with you, not against you.',
    description:
      'From AWS and GCP architecture to containerized deployments with Docker and Kubernetes, we build infrastructure that handles growth without midnight pages.',
    benefits: [
      'Infrastructure as code with Terraform',
      'Auto-scaling architecture for traffic spikes',
      'Cost audits that typically cut cloud spend 20-40%',
      '24/7 uptime monitoring and alerting',
    ],
  },
  {
    slug: 'seo',
    icon: Search,
    title: 'SEO',
    short: 'Technical and content SEO that compounds over time.',
    description:
      'We fix the technical foundation, then layer in content strategy and link building so your organic traffic keeps growing long after the engagement ends.',
    benefits: [
      'Full technical SEO audit and fixes',
      'Keyword strategy tied to buyer intent',
      'Core Web Vitals optimization',
      'Monthly reporting with clear ranking movement',
    ],
  },
  {
    slug: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    short: 'Paid and organic growth engines built on real data.',
    description:
      'We plan and run multi-channel campaigns — paid social, search, and email — with attribution tracking so you know exactly what is driving revenue.',
    benefits: [
      'Paid social and search campaign management',
      'Marketing automation and email sequences',
      'Conversion rate optimization on landing pages',
      'Transparent ROAS and CAC reporting',
    ],
  },
  {
    slug: 'ai-automation',
    icon: Bot,
    title: 'AI Automation',
    short: 'Practical AI that removes hours of manual work.',
    description:
      'We integrate LLMs and workflow automation into your existing tools — support triage, document processing, internal copilots — focused on measurable time saved.',
    benefits: [
      'Custom LLM-powered internal tools',
      'Workflow automation across your existing stack',
      'Document processing and data extraction pipelines',
      'Human-in-the-loop safeguards where they matter',
    ],
  },
  {
    slug: 'api-integration',
    icon: Plug,
    title: 'API Integration',
    short: 'Connect the tools your business already depends on.',
    description:
      'We build and integrate REST and GraphQL APIs that connect your CRM, payment processor, and internal systems into one reliable data flow.',
    benefits: [
      'Third-party integrations (Stripe, HubSpot, Salesforce, etc.)',
      'Custom API design and documentation',
      'Webhook-driven, event-based architecture',
      'Rate limiting, retries and error handling done right',
    ],
  },
  {
    slug: 'maintenance',
    icon: Wrench,
    title: 'Maintenance & Support',
    short: 'Ongoing care so your product stays fast and secure.',
    description:
      'Retainer-based support covering security patches, dependency upgrades, performance monitoring, and small feature work — so nothing quietly rots.',
    benefits: [
      'Proactive security patching and dependency updates',
      'Monthly performance and uptime reports',
      'Priority bug-fix turnaround (24-48h)',
      'Flexible hours for ongoing feature requests',
    ],
  },
]
