import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import WhoWeAre from '../components/home/WhoWeAre';
import Services from '../components/home/Services';
import TrustAndTech from '../components/home/TrustAndTech';
import Process from '../components/home/Process';
import Hosting from '../components/home/Hosting';
import Portfolio from '../components/home/Portfolio';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhoWeAre />
        <Services />
        <TrustAndTech />
        <Process />
        <Hosting />
        <Portfolio />
        <Testimonials />
      </main>
      <CallToAction />
      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </div>
  );
}
