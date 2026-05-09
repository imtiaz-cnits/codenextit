import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ThemeToggle from '../../../components/ThemeToggle';
import ScrollToTop from '../../../components/ScrollToTop';
import CallToAction from '../../../components/home/CallToAction';
import UIUXHero from '../../../components/services/UIUXHero';
import UIUXShowcase from '../../../components/services/UIUXShowcase';
import { 
  PenTool, 
  Layers, 
  Layout, 
  Smartphone,
  CheckCircle2,
  Users,
  Search,
  Eye
} from 'lucide-react';

export const metadata = {
  title: 'UI/UX Design Services | CodeNext IT',
  description: 'Intuitive and engaging user experience design services for mobile apps and web platforms.',
};

export default function UIUXDesignPage() {
  const designExpertise = [
    {
      title: "User Research & Analysis",
      description: "Understanding your audience to create designs that solve real problems and meet user needs.",
      icon: <Users className="w-6 h-6 text-brand-accent" />,
    },
    {
      title: "Wireframing & Prototyping",
      description: "Creating low and high-fidelity prototypes to visualize the structure and flow of your application.",
      icon: <Layers className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Visual Design",
      description: "Crafting beautiful, modern interfaces with consistent design systems and brand identity.",
      icon: <Layout className="w-6 h-6 text-cyan-500" />,
    },
    {
      title: "Mobile App Design",
      description: "Designing seamless mobile experiences for both iOS and Android with platform-specific standards.",
      icon: <Smartphone className="w-6 h-6 text-rose-500" />,
    },
    {
      title: "Usability Testing",
      description: "Validating designs through user testing to ensure ease of use and optimal conversion rates.",
      icon: <Search className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Interaction Design",
      description: "Adding life to your interfaces with meaningful animations and micro-interactions.",
      icon: <Eye className="w-6 h-6 text-purple-500" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      
      <UIUXHero />

      <UIUXShowcase />

      {/* Expertise Grid */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Design Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-6">
              Our Creative <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500 text-balance">Design Ecosystem</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
              We follow a human-centric approach to design, ensuring your digital products are not just seen, but felt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designExpertise.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-[32px] border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] hover:border-brand-accent/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-primary dark:text-white mb-4">{feature.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Design */}
      <section className="py-24 bg-slate-50 dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5">
                   <PenTool className="w-8 h-8 text-brand-accent mb-4" />
                   <h5 className="font-bold text-brand-primary dark:text-white mb-2">User First</h5>
                   <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Designs focused on solved user problems.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 mt-8">
                   <Layout className="w-8 h-8 text-cyan-500 mb-4" />
                   <h5 className="font-bold text-brand-primary dark:text-white mb-2">Pixel Perfect</h5>
                   <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Attention to the smallest design details.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5">
                   <Users className="w-8 h-8 text-indigo-500 mb-4" />
                   <h5 className="font-bold text-brand-primary dark:text-white mb-2">Conversion Ready</h5>
                   <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">UI elements designed to drive actions.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 mt-8">
                   <Layers className="w-8 h-8 text-purple-500 mb-4" />
                   <h5 className="font-bold text-brand-primary dark:text-white mb-2">Scalable Systems</h5>
                   <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Consistent design systems for growth.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Why Design with CodeNext?</h2>
              <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-8 leading-tight text-balance">
                We Create Interfaces <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500 text-balance">That Users Love to Use</span>
              </h3>
              <div className="space-y-6">
                {[
                  "Deep dive user research and empathy mapping.",
                  "Modern and clean visual aesthetics.",
                  "Interactive prototypes for real-world feel.",
                  "Consistent design systems and documentation.",
                  "Ongoing iterations based on user feedback."
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      
      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </main>
  );
}
