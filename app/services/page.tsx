import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThemeToggle from '../../components/ThemeToggle';
import ScrollToTop from '../../components/ScrollToTop';
import ServicesHero from '../../components/services/ServicesHero';
import ClientsMarquee from '../../components/ClientsMarquee';
import DetailedServices from '../../components/services/DetailedServices';
import Stats from '../../components/home/Stats';
import CallToAction from '../../components/home/CallToAction';

export const metadata = {
  title: 'Our Services | CodeNext IT',
  description: 'Explore our wide range of IT services, tailored to fit your unique business needs.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      
      <ServicesHero />
      <ClientsMarquee className="!bg-slate-50 dark:!bg-[#0B0F19] !border-none !py-10" />
      <DetailedServices />
      
      {/* Adding a title for Stats section to match the original "We Lead From The Front" */}
      <section className="bg-slate-50 dark:bg-slate-900 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-[11px] font-black text-brand-accent tracking-[0.3em] uppercase mb-4">Great Success</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white leading-tight">
            We Lead From The Front
          </h3>
          <p className="mt-6 text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Our expert team delivered some quality and powerful projects which makes us leading on our territory for development industry and help achieving great success.
          </p>
        </div>
        <Stats />
      </section>

      <CallToAction />
      
      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </main>
  );
}
