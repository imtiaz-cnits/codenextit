import { 
  Code2, 
  Layout, 
  Settings, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Smartphone, 
  Database,
  Clock
} from 'lucide-react';

export interface ProjectDetail {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  mainImage: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  techStack: { name: string; icon: any }[];
  features: { title: string; desc: string; icon: any }[];
  results: { label: string; value: string }[];
  liveLink?: string;
}

export const portfolioProjects: Record<string, ProjectDetail> = {
  'themes-jet': {
    slug: 'themes-jet',
    title: 'Themes Jet',
    client: 'ThemesJet Global',
    category: 'Digital Marketplace',
    year: '2024',
    mainImage: '/images/Themes Jet.png',
    tags: ['Next.js', 'E-Commerce', 'Marketplace'],
    overview: 'Themes Jet is a premier digital marketplace designed for web templates, UI kits, and design assets. The platform provides a seamless experience for both authors to sell their creations and users to purchase high-quality digital goods with instant delivery.',
    challenge: 'The primary challenge was to create a multi-vendor environment that could handle large file uploads, secure licensing, and real-time previews while maintaining lightning-fast performance across global regions.',
    solution: 'We built a custom architecture using Next.js for SSR, AWS S3 for secure file storage, and a robust licensing engine. We implemented an automated preview system that allows users to test templates directly in the browser before purchasing.',
    techStack: [
      { name: 'Next.js 14', icon: Code2 },
      { name: 'Tailwind CSS', icon: Layout },
      { name: 'Node.js', icon: Settings },
      { name: 'AWS S3', icon: Database },
      { name: 'Stripe', icon: ShieldCheck },
    ],
    features: [
      {
        title: 'Multi-Vendor Dashboard',
        desc: 'Advanced dashboard for authors to manage products, sales, and analytics.',
        icon: Layout
      },
      {
        title: 'Live Preview Engine',
        desc: 'Instant browser-based previews for HTML and React templates.',
        icon: Globe
      },
      {
        title: 'Secure Licensing',
        desc: 'Automated unique license key generation and verification system.',
        icon: ShieldCheck
      },
      {
        title: 'One-Click Checkout',
        desc: 'Ultra-fast payment processing with multiple global payment methods.',
        icon: Zap
      }
    ],
    results: [
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Conversion Rate', value: '+35%' },
      { label: 'Active Authors', value: '500+' },
      { label: 'Secure Downloads', value: '10k+' }
    ],
    liveLink: 'https://themesjet.com'
  },
  'the-ultrasound-source': {
    slug: 'the-ultrasound-source',
    title: 'The Ultrasound Source',
    client: 'Ultrasound Source Inc.',
    category: 'Medical E-Commerce',
    year: '2023',
    mainImage: '/images/The Ultrasound Source.png',
    tags: ['E-Commerce', 'Healthcare', 'Shopify'],
    overview: 'The Ultrasound Source is a specialized e-commerce platform for high-end medical imaging equipment. We created a trustworthy and high-converting environment for healthcare professionals to procure critical medical technology.',
    challenge: 'Selling high-value medical equipment requires a balance between technical specifications, trust signals, and a complex financing process that typical e-commerce platforms don\'t support out of the box.',
    solution: 'We integrated a custom financing calculator and a multi-step inquiry system. The UI was designed with a "medical-clean" aesthetic, emphasizing reliability through detailed specs and verified certification badges.',
    techStack: [
      { name: 'Shopify Plus', icon: ShieldCheck },
      { name: 'React', icon: Code2 },
      { name: 'Node.js', icon: Settings },
      { name: 'GraphQL', icon: Database },
    ],
    features: [
      {
        title: 'Equipment Financing',
        desc: 'Built-in financing calculator for high-ticket medical items.',
        icon: Zap
      },
      {
        title: 'Advanced Filtering',
        desc: 'Detailed search by frequency, probe type, and clinical application.',
        icon: Layout
      },
      {
        title: 'Quote Request',
        desc: 'Custom RFQ system for bulk medical orders.',
        icon: Globe
      }
    ],
    results: [
      { label: 'Avg Order Value', value: '$12k+' },
      { label: 'Mobile Traffic', value: '45%' },
      { label: 'Load Time', value: '1.2s' },
      { label: 'Search Visibility', value: 'Top 3' }
    ],
    liveLink: 'https://theultrasoundsource.com'
  },
  'montreal-moving': {
    slug: 'montreal-moving',
    title: 'Montreal Moving',
    client: 'Montreal Relocation Co.',
    category: 'Logistics Booking',
    year: '2023',
    mainImage: '/images/Montreal Moving.png',
    tags: ['Next.js', 'Google Maps API', 'Booking'],
    overview: 'Montreal Moving is a leading relocation service provider in Quebec. We automated their entire booking workflow, from initial quote to final dispatch, increasing their operational efficiency by over 60%.',
    challenge: 'The manual quoting process was slow and prone to errors. Customers needed a way to get instant, accurate estimates based on distance, floor levels, and inventory size.',
    solution: 'We developed a dynamic pricing engine integrated with Google Maps Distance Matrix API. The multi-step booking form calculates volume and labor costs in real-time, allowing users to book and pay a deposit instantly.',
    techStack: [
      { name: 'Next.js', icon: Code2 },
      { name: 'Google Maps', icon: Globe },
      { name: 'Stripe', icon: ShieldCheck },
      { name: 'PostgreSQL', icon: Database },
    ],
    features: [
      {
        title: 'Smart Quoting',
        desc: 'Real-time price calculation based on distance and inventory.',
        icon: Zap
      },
      {
        title: 'Live Scheduling',
        desc: 'Interactive calendar showing real-time slot availability.',
        icon: Clock
      },
      {
        title: 'Multi-lingual',
        desc: 'Full English and French support for the Quebec market.',
        icon: Globe
      }
    ],
    results: [
      { label: 'Online Bookings', value: '75%' },
      { label: 'Cost Accuracy', value: '99%' },
      { label: 'Daily Leads', value: '40+' },
      { label: 'Client Retention', value: '30%' }
    ]
  },
  'aka-moving': {
    slug: 'aka-moving',
    title: 'AKA Moving',
    client: 'AKA Logistics',
    category: 'Logistics & Fleet',
    year: '2024',
    mainImage: '/images/AKA Moving.png',
    tags: ['React Native', 'Dashboard', 'Fleet Management'],
    overview: 'AKA Moving is a large-scale transportation network. We built an enterprise-grade fleet management system that coordinates hundreds of drivers and thousands of relocation tasks every month.',
    challenge: 'Communication gaps between drivers and dispatchers were causing delays. There was no central system to track vehicle locations and job progress in real-time.',
    solution: 'We created a central command dashboard for dispatchers and a mobile app for drivers. The system tracks GPS coordinates, job status updates, and handles digital bill of lading (BOL) signatures.',
    techStack: [
      { name: 'React Native', icon: Smartphone },
      { name: 'React Dashboard', icon: Layout },
      { name: 'Firebase', icon: Database },
      { name: 'Node.js', icon: Settings },
    ],
    features: [
      {
        title: 'GPS Tracking',
        desc: 'Real-time vehicle location tracking for all active jobs.',
        icon: Globe
      },
      {
        title: 'Digital Signature',
        desc: 'Contactless delivery confirmation and BOL management.',
        icon: ShieldCheck
      },
      {
        title: 'Driver Dispatch',
        desc: 'Automated job assignment based on proximity and load.',
        icon: Zap
      }
    ],
    results: [
      { label: 'Late Deliveries', value: '-85%' },
      { label: 'Efficiency', value: '+40%' },
      { label: 'Paper Saved', value: '100%' },
      { label: 'Driver Satisfaction', value: 'High' }
    ]
  },
  'sps-foods': {
    slug: 'sps-foods',
    title: 'SPS Foods',
    client: 'SPS Distribution',
    category: 'Inventory Management',
    year: '2024',
    mainImage: '/images/SPS Foods.png',
    tags: ['FMCG', 'ERP', 'React'],
    overview: 'SPS Foods is a major FMCG distributor. We developed a custom B2B inventory management and ordering system that connects their regional warehouses with thousands of local retailers.',
    challenge: 'Inventory levels were out of sync across warehouses, leading to overstocking and missed sales. Retailers had no easy way to place and track orders digitally.',
    solution: 'A cloud-based ERP solution that provides real-time visibility into stock levels across all locations. We added a mobile-friendly portal for retailers to browse catalogs and place bulk orders with tiered pricing.',
    techStack: [
      { name: 'React', icon: Code2 },
      { name: 'Node.js', icon: Settings },
      { name: 'Redis Cache', icon: Database },
      { name: 'REST API', icon: Globe },
    ],
    features: [
      {
        title: 'Stock Sync',
        desc: 'Real-time multi-warehouse inventory synchronization.',
        icon: Database
      },
      {
        title: 'B2B Portal',
        desc: 'Wholesale ordering system with custom pricing tiers.',
        icon: Layout
      },
      {
        title: 'Analytics Engine',
        desc: 'Demand forecasting based on historical sales data.',
        icon: Zap
      }
    ],
    results: [
      { label: 'Stockouts', value: '-60%' },
      { label: 'Order Velocity', value: '2x' },
      { label: 'Accuracy', value: '99.5%' },
      { label: 'Fulfillment Time', value: '24h' }
    ]
  }
};
