export interface Sponsor {
  id: string;
  name: string;
  tier: 'Title Sponsor' | 'Main Sponsor' | 'Partner';
  amount?: string;
  category: string;
  tagline: string;
  logo: string;
  logoBg: string;
  highlight?: boolean;
}

export const mainSponsors: Sponsor[] = [
  {
    id: 'aarksh-systems',
    name: 'AARKSH SYSTEMS',
    tier: 'Title Sponsor',
    category: 'DRONES, ROBOTICS & HARDWARE',
    tagline: 'Leading aerial systems and robotics venture sponsoring F450 quadcopter drone kits & electronics testbenches.',
    logo: '/sponsors/aarksh.png',
    logoBg: 'bg-white',
    highlight: true,
  },
  {
    id: 'bharti-airtel',
    name: 'Bharti Airtel',
    tier: 'Main Sponsor',
    category: 'TELECOMMUNICATIONS & INFRASTRUCTURE',
    tagline: 'Powering high-speed gigabit connectivity, digital backbone, and live event infrastructure.',
    logo: '/sponsors/airtel.svg',
    logoBg: 'bg-white',
    highlight: true,
  },
  {
    id: 'ziva-ai',
    name: 'Ziva AI',
    tier: 'Main Sponsor',
    category: 'AI ENGINE & AGENTIC WORKFLOWS',
    tagline: 'Empowering game developers and creators with AI agents, runtime credits, and cash bounties.',
    logo: '/sponsors/ziva.png',
    logoBg: 'bg-black',
    highlight: true,
  },
];

export const partnerSponsors: Sponsor[] = [
  {
    id: 'openai',
    name: 'OPENAI STUDENT COLLABORATIVE',
    tier: 'Partner',
    category: 'ARTIFICIAL INTELLIGENCE',
    tagline: 'ChatGPT Go for everyone + $20 gift cards for all winners.',
    logo: '/sponsors/openai_wordmark.svg',
    logoBg: 'bg-white',
  },
  {
    id: 'github',
    name: 'GitHub',
    tier: 'Partner',
    category: 'DEVELOPER PLATFORM',
    tagline: 'Developer platform and open source ecosystem empowering student repositories.',
    logo: '/sponsors/github.svg',
    logoBg: 'bg-ink text-white',
  },
  {
    id: 'postman',
    name: 'Postman',
    tier: 'Partner',
    category: 'API PLATFORM',
    tagline: 'Industry-standard API client and testing platform for full-stack hackers.',
    logo: '/sponsors/postman.svg',
    logoBg: 'bg-[#ff6c37]/10',
  },
  {
    id: 'n8n',
    name: 'n8n',
    tier: 'Partner',
    category: 'WORKFLOW AUTOMATION',
    tagline: 'Fair-code workflow automation platform access for all participants.',
    logo: '/sponsors/n8n.svg',
    logoBg: 'bg-[#ea4b71]/10',
  },
  {
    id: 'xyz',
    name: '.xyz (Gen.xyz)',
    tier: 'Partner',
    category: 'DOMAIN REGISTRY',
    tagline: 'Gen.xyz domains for all participants to deploy live production projects.',
    logo: '/sponsors/xyz.svg',
    logoBg: 'bg-ink',
  },
  {
    id: 'interview-buddy',
    name: 'Interview Buddy',
    tier: 'Partner',
    category: 'CAREER ACCELERATION',
    tagline: 'Virtual mock interviews and placement mentoring for top participants.',
    logo: '/sponsors/interviewbuddy.png',
    logoBg: 'bg-white',
  },
  {
    id: 'fueler',
    name: 'Fueler',
    tier: 'Partner',
    category: 'PROOF OF WORK',
    tagline: 'Dynamic portfolio platform to showcase hackathon builds to global teams.',
    logo: '/sponsors/fueler.svg',
    logoBg: 'bg-ink',
  },
  {
    id: 'my-startup-wave',
    name: 'My Startup Wave',
    tier: 'Partner',
    category: 'STARTUP INCUBATION',
    tagline: 'Startup development, mentorship, and paid internship opportunities.',
    logo: '/sponsors/mystartupwave.png',
    logoBg: 'bg-white',
  },
  {
    id: 'osen',
    name: 'OSEN',
    tier: 'Partner',
    category: 'OPEN SOURCE ECOSYSTEM',
    tagline: 'Grassroots student builder community backing shipping culture across India.',
    logo: '/sponsors/osen.png',
    logoBg: 'bg-ink',
  },
  {
    id: 'easy-eda',
    name: 'Easy EDA',
    tier: 'Partner',
    category: 'EDA & CIRCUIT DESIGN',
    tagline: 'Cloud-based schematic design and simulation for hardware hackers.',
    logo: '/sponsors/easyeda.svg',
    logoBg: 'bg-white',
  },
  {
    id: 'jlc-pcb',
    name: 'JLC PCB',
    tier: 'Partner',
    category: 'PCB PROTOTYPING',
    tagline: 'Rapid electronic hardware fabrication, PCB prototypes, and assembly.',
    logo: '/sponsors/jlcpcb.svg',
    logoBg: 'bg-white',
  },
  {
    id: 'give-my-certificate',
    name: 'Give My Certificate',
    tier: 'Partner',
    category: 'CREDENTIAL VERIFICATION',
    tagline: 'Blockchain-backed verifiable certificates for all participants and winners.',
    logo: '/sponsors/givemycertificate.png',
    logoBg: 'bg-white',
  },
  {
    id: 'azka-creations',
    name: 'Azka Creations',
    tier: 'Partner',
    category: 'NEON & CREATIVE DESIGN',
    tagline: 'Handcrafted neon aesthetic art and custom visual stage installations.',
    logo: '/sponsors/azka.png',
    logoBg: 'bg-black',
  },
];

export const allSponsors = [...mainSponsors, ...partnerSponsors];
