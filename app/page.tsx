import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import WhoWeAre from '../components/home/WhoWeAre';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';
import TrustAndTech from '../components/home/TrustAndTech';
import Process from '../components/home/Process';
import Hosting from '../components/home/Hosting';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import ScrollToTop from '../components/ScrollToTop';

export const metadata: Metadata = {
  title: 'CodeNext IT | Best Software & Web Development in Bangladesh',
  description: 'CodeNext IT is a leading tech agency in Bangladesh specializing in custom software, modern web development, UI/UX, SEO, and secure IT solutions.',
  keywords: ['software development bangladesh', 'web design company', 'codenext it', 'it solutions bangladesh', 'custom erp development', 'best web developers'],
  alternates: {
    canonical: 'https://codenextit.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'CodeNext IT | Engineering Digital Excellence in Bangladesh',
    description: 'Transforming business ideas into scalable digital products with professional software & web development services.',
    url: 'https://codenextit.com',
    siteName: 'CodeNext IT',
    images: [
      {
        url: 'https://codenextit.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CodeNext IT Solutions Office and Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeNext IT | Leading IT Agency in Bangladesh',
    description: 'Bespoke software and modern web development services to help businesses thrive.',
    images: ['https://codenextit.com/og-image.jpg'],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "CodeNext IT",
    "url": "https://codenextit.com",
    "logo": "https://codenextit.com/logo.png",
    "image": "https://codenextit.com/og-image.jpg",
    "description": "CodeNext IT is a premier technology agency in Bangladesh, providing custom software, modern web development, and digital infrastructure services.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pabna",
      "addressRegion": "Rajshahi Division",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+8801788428280",
      "contactType": "customer service",
      "areaServed": "BD",
      "availableLanguage": ["English", "Bengali"]
    },
    "sameAs": [
      "https://facebook.com/codenextit",
      "https://linkedin.com/company/codenextit",
      "https://instagram.com/codenextit"
    ]
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhoWeAre />
        <Services />
        <Portfolio />
        <TrustAndTech />
        <Process />
        <Hosting />
        <Testimonials />
      </main>
      <CallToAction />
      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </div>
  );
}
