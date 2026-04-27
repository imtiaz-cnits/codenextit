import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThemeToggle from '../../components/ThemeToggle';
import ScrollToTop from '../../components/ScrollToTop';
import PortfolioHero from '../../components/portfolio/PortfolioHero';
import PortfolioGrid from '../../components/portfolio/PortfolioGrid';
import CallToAction from '../../components/home/CallToAction';
import ClientsMarquee from '../../components/ClientsMarquee';

export const metadata = {
  title: 'Portfolio | CodeNext IT',
  description: 'Explore our carefully curated collection of successful digital transformations.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
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
