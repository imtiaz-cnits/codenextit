import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThemeToggle from '../../components/ThemeToggle';
import ScrollToTop from '../../components/ScrollToTop';
import ServicesHero from '../../components/services/ServicesHero';
import ClientsMarquee from '../../components/ClientsMarquee';
import DetailedServices from '../../components/services/DetailedServices';
import Stats from '../../components/home/Stats';
import CallToAction from '../../components/home/CallToAction';

export const metadata: Metadata = {
  title: 'IT Services & Web Solutions in Bangladesh | CodeNext IT',
  description: 'CodeNext IT offers professional web development, custom software, UI/UX design, mobile apps, digital marketing, and IT training services in Bangladesh.',
  keywords: [
    'it services bangladesh', 'it services bd', 'it enabled services in bangladesh',
    'mobile app development company in bangladesh', 'mobile app developer bangladesh',
    'professional it training institute', 'professional it training courses',
    'web development company in bangladesh', 'software development company in bangladesh',
    'ui/ux design agency bangladesh', 'seo agency bangladesh', 'bdix hosting vps bangladesh'
  ],
  alternates: {
    canonical: 'https://codenextit.com/services',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'IT Services & Web Solutions in Bangladesh | CodeNext IT',
    description: 'Explore CodeNext IT\'s wide range of custom software, professional web design, mobile apps, UI/UX, hosting, and digital marketing services.',
    url: 'https://codenextit.com/services',
    siteName: 'CodeNext IT',
    images: [
      {
        url: 'https://codenextit.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CodeNext IT Services Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Services & Web Solutions in Bangladesh | CodeNext IT',
    description: 'Bespoke custom software, premium web applications, mobile apps, UI/UX design, and SEO services tailored to scale your business.',
    images: ['https://codenextit.com/og-image.jpg'],
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IT Services & Web Solutions in Bangladesh | CodeNext IT",
    "url": "https://codenextit.com/services",
    "description": "CodeNext IT offers professional web development, custom software, UI/UX design, mobile apps, digital marketing, and IT training services in Bangladesh.",
    "provider": {
      "@type": "ITService",
      "name": "CodeNext IT",
      "url": "https://codenextit.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "Custom Management Software",
            "description": "Streamline your business operations with secure, scalable, and tailored software solutions designed specifically for your industry needs.",
            "provider": { "@type": "ITService", "name": "CodeNext IT" },
            "areaServed": "Bangladesh",
            "serviceType": "Software Development"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "Professional Web Development",
            "description": "Build a powerful digital presence with fast, responsive, and SEO-optimized web applications tailored to drive business growth.",
            "provider": { "@type": "ITService", "name": "CodeNext IT" },
            "areaServed": "Bangladesh",
            "serviceType": "Web Development"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "UI/UX Product Design",
            "description": "Transform complex ideas into intuitive, user-centric interfaces. We design modern digital experiences that engage users and boost conversions.",
            "provider": { "@type": "ITService", "name": "CodeNext IT" },
            "areaServed": "Bangladesh",
            "serviceType": "UI/UX Design"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Service",
            "name": "Digital Marketing & SEO",
            "description": "We build organic search strategies and targeted marketing campaigns that bring highly qualified traffic to your website and increase actual sales.",
            "provider": { "@type": "ITService", "name": "CodeNext IT" },
            "areaServed": "Bangladesh",
            "serviceType": "Digital Marketing"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Reach your customers on the go with high-performance, secure, and user-friendly native and cross-platform mobile applications.",
            "provider": { "@type": "ITService", "name": "CodeNext IT" },
            "areaServed": "Bangladesh",
            "serviceType": "Mobile App Development"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Service",
            "name": "Social Media Management",
            "description": "Turn your social media profiles into active sales channels. We create authentic, engaging content that connects with your target audience and builds long-term brand loyalty.",
            "provider": { "@type": "ITService", "name": "CodeNext IT" },
            "areaServed": "Bangladesh",
            "serviceType": "Social Media Management"
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "Service",
            "name": "AI & Machine Learning Solutions",
            "description": "Automate daily operations and make smarter, data-backed business decisions. We integrate practical AI models and smart automation tools tailored to your specific workflow.",
            "provider": { "@type": "ITService", "name": "CodeNext IT" },
            "areaServed": "Bangladesh",
            "serviceType": "AI Solutions"
          }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "Service",
            "name": "Academic Industrial Training",
            "description": "Bridge the gap between university textbooks and real-world tech industry demands. Work on live projects using modern frameworks like Next.js alongside our senior engineering team.",
            "provider": { "@type": "ITService", "name": "CodeNext IT" },
            "areaServed": "Bangladesh",
            "serviceType": "IT Training"
          }
        },
        {
          "@type": "ListItem",
          "position": 9,
          "item": {
            "@type": "Service",
            "name": "Web Hosting & VPS",
            "description": "Secure, fast, and reliable web hosting solutions with maximum uptime and dedicated support.",
            "provider": { "@type": "ITService", "name": "CodeNext IT" },
            "areaServed": "Bangladesh",
            "serviceType": "Web Hosting"
          }
        }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <ServicesHero />
      <ClientsMarquee
        className="!bg-slate-50 dark:!bg-[#0B0F19] !border-none !py-10"
        subtitle="OUR TRUSTED PARTNERS"
        title="Trusted by 350+ Businesses Across Bangladesh & Beyond"
      />
      <DetailedServices />

      {/* Adding a title for Stats section to match the original "We Lead From The Front" */}
      <section className="bg-slate-50 dark:bg-slate-900 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-[12px] font-black text-brand-accent tracking-[0.3em] uppercase mb-4">PROVEN TRACK RECORD</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white leading-tight">
            Driving Digital Growth for Businesses in Bangladesh & Beyond
          </h3>
          <p className="mt-6 text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Our expert team has successfully delivered hundreds of high-performance web and software projects, establishing CodeNext IT as a trusted technology partner for digital transformation.
          </p>
        </div>
        <Stats />
      </section>

      <CallToAction
        badge="Launch Your Project"
        title={
          <>
            Ready to Scale Your Business with <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-500">Custom IT Solutions?</span>
          </>
        }
        description="Join hundreds of successful businesses who trust CodeNext IT for their web development, app design, and secure networking infrastructure needs."
        primaryBtnText="Get a Free Quote"
      />

      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </main>
  );
}
