export interface ConfirmedPerk {
  id: string;
  title: string;
  quantityOrValue: string;
  category: 'HARDWARE' | 'AI & COMPUTE' | 'SOFTWARE & API' | 'CAREER' | 'CREATIVE' | 'DOMAINS';
  audience: 'FOR WINNERS' | 'ALL PARTICIPANTS' | 'TOP TEAMS';
  sponsor?: string;
  description: string;
  badgeColor: string;
}

export const confirmedPerks: ConfirmedPerk[] = [
  {
    id: 'drone-kits',
    title: 'F450 Quadcopter Drone Kits',
    quantityOrValue: '5 COMPLETE KITS',
    category: 'HARDWARE',
    audience: 'TOP TEAMS',
    sponsor: 'AARKSH SYSTEMS',
    description: 'Full-scale F450 quadcopter drone frames, brushless motors, ESCs, flight telemetry, and flight controller rigs.',
    badgeColor: 'bg-reddark text-cream border-ink',
  },
  {
    id: 'high-end-electronics',
    title: 'High-End Electronics Kits (inc. Raspberry Pi)',
    quantityOrValue: '3 ADVANCED KITS',
    category: 'HARDWARE',
    audience: 'TOP TEAMS',
    sponsor: 'AARKSH SYSTEMS',
    description: 'Flagship prototyping kits featuring Raspberry Pi single-board computers, sensor suites, and IoT communication shields.',
    badgeColor: 'bg-reddark text-cream border-ink',
  },
  {
    id: 'sso-jet-subscriptions',
    title: 'SSO JET Subscriptions',
    quantityOrValue: '5 SUBSCRIPTIONS ($118 EACH)',
    category: 'SOFTWARE & API',
    audience: 'TOP TEAMS',
    description: 'Enterprise developer security and SSO JET subscriptions worth $118 each for full-stack authentication architectures.',
    badgeColor: 'bg-yellow text-ink border-ink',
  },
  {
    id: 'basic-electronics',
    title: 'Basic Electronics Kits',
    quantityOrValue: '10 KITS',
    category: 'HARDWARE',
    audience: 'TOP TEAMS',
    sponsor: 'AARKSH SYSTEMS',
    description: 'Hardware starter kits equipped with microcontrollers, breadboards, active sensors, and motor driver modules.',
    badgeColor: 'bg-reddark text-cream border-ink',
  },
  {
    id: 'claude-subscriptions',
    title: 'Claude AI Subscriptions',
    quantityOrValue: 'WORTH $20',
    category: 'AI & COMPUTE',
    audience: 'TOP TEAMS',
    description: 'Direct AI subscriptions and API access to Anthropic Claude models for next-generation intelligence integration.',
    badgeColor: 'bg-brown text-cream border-ink',
  },
  {
    id: 'gaming-assets',
    title: 'Premium Gaming Assets',
    quantityOrValue: 'WORTH $200',
    category: 'CREATIVE',
    audience: 'FOR WINNERS',
    description: 'High-fidelity 3D models, sound effects, particle shaders, and game environment packs for game developers.',
    badgeColor: 'bg-yellow text-ink border-ink',
  },
  {
    id: 'chatgpt-go-gift-cards',
    title: 'ChatGPT Go + $20 Gift Cards',
    quantityOrValue: 'EVERYONE + WINNERS',
    category: 'AI & COMPUTE',
    audience: 'ALL PARTICIPANTS',
    sponsor: 'OPENAI STUDENT COLLABORATIVE',
    description: 'ChatGPT Go access unlocked for every participant + $20 cash gift cards awarded to category winners.',
    badgeColor: 'bg-green text-cream border-ink',
  },
  {
    id: 'paid-internships',
    title: 'Paid Internship Opportunities',
    quantityOrValue: 'EXCLUSIVE OFFERS',
    category: 'CAREER',
    audience: 'FOR WINNERS',
    sponsor: 'ECOSYSTEM PARTNERS',
    description: 'Direct fast-tracked recruitment and paid engineering internships with partner tech startups.',
    badgeColor: 'bg-ink text-yellow border-cream',
  },
  {
    id: 'n8n-platform',
    title: 'n8n Automation for All',
    quantityOrValue: 'ALL PARTICIPANTS',
    category: 'SOFTWARE & API',
    audience: 'ALL PARTICIPANTS',
    sponsor: 'n8n',
    description: 'Fair-code workflow automation licenses enabling every participant to connect APIs, bots, and databases seamlessly.',
    badgeColor: 'bg-yellow text-ink border-ink',
  },
  {
    id: 'gen-xyz-domains',
    title: 'Gen.xyz Domains for All',
    quantityOrValue: 'ALL PARTICIPANTS',
    category: 'DOMAINS',
    audience: 'ALL PARTICIPANTS',
    sponsor: '.XYZ',
    description: 'Free production top-level .xyz domains granted to every single participant to host and ship live builds.',
    badgeColor: 'bg-cream text-ink border-ink',
  },
];
