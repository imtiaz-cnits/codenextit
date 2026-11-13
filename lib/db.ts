import fs from 'fs';
import path from 'path';

// Define structures
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

export interface TechStackItem {
  name: string;
  icon: string; // Stored as name (e.g. "Code2")
}

export interface FeatureItem {
  title: string;
  desc: string;
  icon: string; // Stored as name (e.g. "Layout")
}

export interface ResultItem {
  label: string;
  value: string;
}

export interface ProjectDetail {
  id?: number;
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  mainImage: string;
  imageAlt?: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  techStack: TechStackItem[];
  features: FeatureItem[];
  results: ResultItem[];
  liveLink?: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const BLOGS_FILE = path.join(DATA_DIR, 'blogs.json');
const PORTFOLIOS_FILE = path.join(DATA_DIR, 'portfolios.json');

// Ensure data folder exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Initial default data seeders
const defaultBlogs: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2026",
    excerpt: "Explore the emerging technologies and frameworks that are shaping the future of web development, from AI-driven coding to edge computing.",
    content: `
<h2>Introduction</h2>
<p>The web development landscape is evolving at an unprecedented pace. As we navigate through 2026, several key trends have shifted from experimental concepts to industry standards. This article explores the most significant trends that every developer should watch.</p>

<h3>1. AI-Driven Development</h3>
<p>Artificial Intelligence is no longer just a buzzword; it's deeply integrated into our development workflows. From intelligent code completion to automated testing and bug fixing, AI tools are making developers more productive than ever.</p>

<h3>2. Edge Computing</h3>
<p>Moving computation closer to the source of data is revolutionizing how we build web applications. Edge computing drastically reduces latency, improves performance, and offers better security for distributed applications.</p>

<h3>3. Serverless Architectures</h3>
<p>The abstraction of servers continues to gain momentum. With platforms offering seamless scaling and reduced operational overhead, more companies are adopting serverless architectures for their primary applications.</p>

<h3>Conclusion</h3>
<p>Staying ahead in web development requires continuous learning and adaptation. Embracing these trends will not only future-proof your skills but also enable you to build more robust and scalable applications.</p>
    `,
    category: "Web Development",
    author: "Imtiaz Ahmed",
    authorImage: "https://ui-avatars.com/api/?name=Imtiaz+Ahmed&background=0062FF&color=fff",
    date: "April 25, 2026",
    readTime: "8 min read",
    image: "/images/blog/featured.png",
    featured: true
  },
  {
    id: 2,
    title: "Mastering UI/UX: Creating Human-Centric Digital Experiences",
    excerpt: "Design is more than just aesthetics. Learn how to create interfaces that prioritize user needs and emotional connection.",
    content: `
<h2>The Core of Human-Centric Design</h2>
<p>In 2026, user experience is the primary differentiator for digital products. Beautiful interfaces are common, but truly intuitive, human-centric experiences remain a challenge.</p>

<h2>Understanding Emotional Design</h2>
<p>Every interaction a user has with your product evokes an emotion. Whether it's the satisfaction of a fluid animation or the frustration of a confusing navigation menu, these emotional responses dictate user retention.</p>

<h2>Accessibility is Non-Negotiable</h2>
<p>Modern UI/UX design places accessibility at its core. Designing for all users, regardless of their abilities, is not just a legal requirement in many regions—it's a moral imperative and good business practice.</p>

<h2>Micro-Interactions Matter</h2>
<p>The smallest details often make the biggest impact. Micro-interactions—like a subtle hover state or a satisfying toggle switch—provide immediate feedback and make digital spaces feel tactile and alive.</p>
    `,
    category: "UI/UX Design",
    author: "Sarah J.",
    authorImage: "https://ui-avatars.com/api/?name=Sarah+J&background=0062FF&color=fff",
    date: "April 22, 2026",
    readTime: "6 min read",
    image: "/images/blog/uiux.png",
    featured: false
  },
  {
    id: 3,
    title: "AI & ML in 2026: Beyond the Hype",
    excerpt: "How artificial intelligence is moving from experimental phases to core business infrastructures across industries.",
    content: `
<h2>Moving Past the Hype Cycle</h2>
<p>We've passed the peak of inflated expectations regarding Artificial Intelligence. In 2026, the focus is purely on practical, scalable applications of Machine Learning models in everyday business operations.</p>

<h3>Predictive Analytics</h3>
<p>Businesses are leveraging AI to predict market trends, customer behavior, and potential supply chain disruptions with unprecedented accuracy.</p>

<h3>Natural Language Processing (NLP)</h3>
<p>Conversational interfaces have become practically indistinguishable from human operators. NLP has revolutionized customer support, content generation, and internal knowledge management.</p>
    `,
    category: "AI & ML",
    author: "Dr. Robert Chen",
    authorImage: "https://ui-avatars.com/api/?name=Robert+Chen&background=0062FF&color=fff",
    date: "April 18, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    featured: false
  }
];

const defaultPortfolios: ProjectDetail[] = [
  {
    id: 1,
    slug: 'themes-jet',
    title: 'Themes Jet',
    client: 'ThemesJet Global',
    category: 'Web Development',
    year: '2024',
    mainImage: '/images/Themes Jet.png',
    imageAlt: 'Professional Web Development and Custom Website Design for Themes Jet | CodeNext IT',
    tags: ['React', 'Next.js', 'Marketplace'],
    overview: 'Themes Jet is a premier digital marketplace designed for web templates, UI kits, and design assets. The platform provides a seamless experience for both authors to sell their creations and users to purchase high-quality digital goods with instant delivery.',
    challenge: 'The primary challenge was to create a multi-vendor environment that could handle large file uploads, secure licensing, and real-time previews while maintaining lightning-fast performance across global regions.',
    solution: 'We built a custom architecture using Next.js for SSR, AWS S3 for secure file storage, and a robust licensing engine. We implemented an automated preview system that allows users to test templates directly in the browser before purchasing.',
    techStack: [
      { name: 'Next.js 15', icon: 'Code2' },
      { name: 'Tailwind CSS', icon: 'Layout' },
      { name: 'Node.js', icon: 'Settings' },
      { name: 'AWS S3', icon: 'Database' },
      { name: 'Stripe', icon: 'ShieldCheck' },
    ],
    features: [
      { title: 'Multi-Vendor Dashboard', desc: 'Advanced dashboard for authors to manage products, sales, and analytics.', icon: 'Layout' },
      { title: 'Live Preview Engine', desc: 'Instant browser-based previews for HTML and React templates.', icon: 'Globe' },
      { title: 'Secure Licensing', desc: 'Automated unique license key generation and verification system.', icon: 'ShieldCheck' },
      { title: 'One-Click Checkout', desc: 'Ultra-fast payment processing with multiple global payment methods.', icon: 'Zap' }
    ],
    results: [
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Conversion Rate', value: '+35%' },
      { label: 'Active Authors', value: '500+' },
      { label: 'Secure Downloads', value: '10k+' }
    ],
    liveLink: 'https://themesjet.com'
  },
  {
    id: 2,
    slug: 'the-ultrasound-source',
    title: 'The Ultrasound Source',
    client: 'Ultrasound Source Inc.',
    category: 'E-Commerce',
    year: '2023',
    mainImage: '/images/The Ultrasound Source.png',
    imageAlt: 'High-Performance E-Commerce Medical Equipment Platform for The Ultrasound Source | CodeNext IT',
    tags: ['Shopify', 'Healthcare', 'UI/UX'],
    overview: 'The Ultrasound Source is a specialized e-commerce platform for high-end medical imaging equipment. We created a trustworthy and high-converting environment for healthcare professionals to procure critical medical technology.',
    challenge: 'Selling high-value medical equipment requires a balance between technical specifications, trust signals, and a complex financing process that typical e-commerce platforms don\'t support out of the box.',
    solution: 'We integrated a custom financing calculator and a multi-step inquiry system. The UI was designed with a "medical-clean" aesthetic, emphasizing reliability through detailed specs and verified certification badges.',
    techStack: [
      { name: 'Shopify Plus', icon: 'ShieldCheck' },
      { name: 'React', icon: 'Code2' },
      { name: 'Node.js', icon: 'Settings' },
      { name: 'GraphQL', icon: 'Database' },
    ],
    features: [
      { title: 'Equipment Financing', desc: 'Built-in financing calculator for high-ticket medical items.', icon: 'Zap' },
      { title: 'Inquiry System', desc: 'Secure B2B quote request process for clinics and hospitals.', icon: 'Globe' }
    ],
    results: [
      { label: 'Conversion Rate', value: '+45%' },
      { label: 'Average Order Value', value: '$85k' },
      { label: 'Lead Quality Score', value: '9.2/10' }
    ],
    liveLink: 'https://theultrasoundsource.com'
  },
  {
    id: 3,
    slug: 'montreal-moving',
    title: 'Montreal Moving',
    client: 'Montreal Moving Solutions',
    category: 'Web Development',
    year: '2024',
    mainImage: '/images/Montreal Moving.png',
    imageAlt: 'Smart Local Moving Booking Engine and Distance Calculator for Montreal Moving | CodeNext IT',
    tags: ['Business', 'Booking System'],
    overview: 'Montreal Moving is a high-performance booking and quoting web app designed for local relocation and commercial logistics. It streamlines client intake by calculating travel distance, furniture size, and estimated cost instantly.',
    challenge: 'The client needed a responsive, automated system to handle scheduling, pricing estimation, and route mapping dynamically in real time without manual coordination.',
    solution: 'We created a custom Next.js booking engine utilizing Google Maps Matrix API for exact distance-based pricing. The layout is optimized to load under 1 second to minimize bounce rates.',
    techStack: [
      { name: 'Next.js', icon: 'Code2' },
      { name: 'Google Maps API', icon: 'Globe' },
      { name: 'Tailwind CSS', icon: 'Layout' },
      { name: 'Prisma', icon: 'Database' }
    ],
    features: [
      { title: 'Distance Calculator', desc: 'Automated exact billing based on Google Maps travel calculation.', icon: 'Zap' },
      { title: 'Smart Booking Form', desc: 'Interactive visual checklist of furniture for volume estimation.', icon: 'Layout' }
    ],
    results: [
      { label: 'Booking Time Saved', value: '80%' },
      { label: 'Conversion Increase', value: '+55%' },
      { label: 'Customer Satisfaction', value: '4.9/5' }
    ],
    liveLink: 'https://montrealmoving.ca'
  }
];

export function getBlogs(): BlogPost[] {
  ensureDataDir();
  if (!fs.existsSync(BLOGS_FILE)) {
    fs.writeFileSync(BLOGS_FILE, JSON.stringify(defaultBlogs, null, 2), 'utf-8');
    return defaultBlogs;
  }
  try {
    const data = fs.readFileSync(BLOGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading blogs file:", error);
    return defaultBlogs;
  }
}

export function saveBlogs(blogs: BlogPost[]) {
  ensureDataDir();
  fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2), 'utf-8');
}

export function getPortfolios(): ProjectDetail[] {
  ensureDataDir();
  if (!fs.existsSync(PORTFOLIOS_FILE)) {
    fs.writeFileSync(PORTFOLIOS_FILE, JSON.stringify(defaultPortfolios, null, 2), 'utf-8');
    return defaultPortfolios;
  }
  try {
    const data = fs.readFileSync(PORTFOLIOS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading portfolios file:", error);
    return defaultPortfolios;
  }
}

export function savePortfolios(portfolios: ProjectDetail[]) {
  ensureDataDir();
  fs.writeFileSync(PORTFOLIOS_FILE, JSON.stringify(portfolios, null, 2), 'utf-8');
}
