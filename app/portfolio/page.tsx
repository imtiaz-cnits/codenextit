import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThemeToggle from '../../components/ThemeToggle';
import ScrollToTop from '../../components/ScrollToTop';
import PortfolioHero from '../../components/portfolio/PortfolioHero';
import PortfolioGrid from '../../components/portfolio/PortfolioGrid';
import CallToAction from '../../components/home/CallToAction';
import ClientsMarquee from '../../components/ClientsMarquee';

export const metadata: Metadata = {
  title: 'Our Portfolio | Web Development & IT Projects in Bangladesh | CodeNext IT',
  description: 'Explore 450+ successful web development, software, UI/UX design, and mobile app projects by CodeNext IT. Trusted by 350+ businesses across Bangladesh and globally.',
  keywords: [
    'web development portfolio',
    'software projects bangladesh',
    'ui ux design portfolio',
    'codenext it projects',
    'mobile app development portfolio',
    'it company portfolio bd'
  ],
  alternates: {
    canonical: 'https://codenextit.com/portfolio',
  },
  openGraph: {
    title: 'Our Portfolio | CodeNext IT Successful Projects',
    description: 'Browse our carefully curated portfolio of 450+ successful digital transformations, including web development, custom software, and UI/UX design.',
    url: 'https://codenextit.com/portfolio',
    siteName: 'CodeNext IT',
    images: [
      {
        url: 'https://codenextit.com/portfolio-og.jpg',
        width: 1200,
        height: 630,
        alt: 'CodeNext IT Project Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Portfolio | CodeNext IT Successful Projects',
    description: 'Explore 450+ successful web development and software projects by CodeNext IT.',
    images: ['https://codenextit.com/portfolio-og.jpg'],
  },
};

export default function PortfolioPage() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Portfolio | Web Development & IT Projects in Bangladesh",
    "url": "https://codenextit.com/portfolio",
    "description": "Explore 450+ successful web development, software, UI/UX design, and mobile app projects by CodeNext IT. Trusted by 350+ businesses across Bangladesh and globally.",
    "publisher": {
      "@type": "Organization",
      "name": "CodeNext IT",
      "url": "https://codenextit.com",
      "logo": "https://codenextit.com/logo.png"
    },
    "about": [
      { "@type": "Service", "name": "Custom Management Software", "serviceType": "Software Development" },
      { "@type": "Service", "name": "Professional Web Development", "serviceType": "Web Development" },
      { "@type": "Service", "name": "UI/UX Product Design", "serviceType": "UI/UX Design" },
      { "@type": "Service", "name": "Mobile App Development", "serviceType": "Mobile App Development" },
      { "@type": "Service", "name": "Creative Graphic Design", "serviceType": "Graphic Design" }
    ]
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      <Navbar />

      <PortfolioHero />
      <PortfolioGrid />

      <div className="py-12 bg-slate-50 dark:bg-slate-900">
        <ClientsMarquee className="!bg-transparent dark:!bg-transparent !py-0 !border-none" />
      </div>

      <CallToAction />

      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </main>
  );
}
