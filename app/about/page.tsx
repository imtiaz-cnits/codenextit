import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThemeToggle from '../../components/ThemeToggle';
import ScrollToTop from '../../components/ScrollToTop';
import AboutHero from '../../components/about/AboutHero';
import Story from '../../components/about/Story';
import Team from '../../components/about/Team';
import FAQ from '../../components/about/FAQ';
import ConfidentialTrust from '../../components/about/ConfidentialTrust';
import Stats from '../../components/home/Stats';
import CallToAction from '../../components/home/CallToAction';
import ClientsMarquee from '../../components/ClientsMarquee';

export const metadata = {
  title: 'About Us | CodeNext IT',
  description: 'We believe in technology and the power of teamwork.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      
      <AboutHero />
      <Story />
      <Team />
      <ConfidentialTrust />
      <FAQ />
      
      <section className="bg-slate-50 dark:bg-slate-900 pt-24 pb-12">
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

      <div className="py-12 bg-white dark:bg-slate-950">
        <ClientsMarquee className="!bg-transparent dark:!bg-transparent !py-0 !border-none" />
      </div>

      <CallToAction />
      
      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </main>
  );
}
