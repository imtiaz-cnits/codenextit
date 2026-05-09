import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ThemeToggle from '../../../components/ThemeToggle';
import ScrollToTop from '../../../components/ScrollToTop';
import CallToAction from '../../../components/home/CallToAction';
import MarketingHero from '../../../components/services/MarketingHero';
import MarketingShowcase from '../../../components/services/MarketingShowcase';
import { 
  TrendingUp, 
  Search, 
  Megaphone, 
  BarChart3, 
  Globe, 
  Mail,
  CheckCircle2,
  Zap
} from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing & SEO Services | CodeNext IT',
  description: 'Data-driven digital marketing and SEO strategies to grow your business online.',
};

export default function DigitalMarketingPage() {
  const marketingModules = [
    {
      title: "Search Engine Optimization",
      description: "Rank higher on Google and drive organic traffic with our expert on-page and off-page SEO services.",
      icon: <Search className="w-6 h-6 text-brand-accent" />,
    },
    {
      title: "Social Media Marketing",
      description: "Build a strong community and engage with your audience across all major social media platforms.",
      icon: <Megaphone className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "PPC & Paid Advertising",
      description: "Maximize your ROI with targeted ad campaigns on Google, Meta, LinkedIn, and more.",
      icon: <Zap className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Content Marketing",
      description: "Strategic content creation that educates, engages, and converts your target audience into loyal customers.",
      icon: <Globe className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and drive repeat sales with automated, personalized email marketing campaigns.",
      icon: <Mail className="w-6 h-6 text-rose-500" />,
    },
    {
      title: "Analytics & Reporting",
      description: "Get transparent insights into your campaign performance with detailed data-driven reports.",
      icon: <BarChart3 className="w-6 h-6 text-emerald-500" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      
      <MarketingHero />

      <MarketingShowcase />

      {/* Expertise Grid */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Marketing Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-6">
              Data-Driven <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500 text-balance">Growth Strategies</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
              We combine creativity with analytics to build marketing engines that drive consistent and scalable business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingModules.map((feature, index) => (
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

      {/* Why Choose Our Marketing */}
      <section className="py-24 bg-slate-50 dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5">
                   <TrendingUp className="w-8 h-8 text-brand-accent mb-4" />
                   <h5 className="font-bold text-brand-primary dark:text-white mb-2">High ROI</h5>
                   <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Focused on maximum return for every marketing dollar.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 mt-8">
                   <Search className="w-8 h-8 text-cyan-500 mb-4" />
                   <h5 className="font-bold text-brand-primary dark:text-white mb-2">SEO Dominance</h5>
                   <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">We help you rank for high-intent keywords.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5">
                   <BarChart3 className="w-8 h-8 text-indigo-500 mb-4" />
                   <h5 className="font-bold text-brand-primary dark:text-white mb-2">Transparent Data</h5>
                   <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Full visibility into your campaign performance.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 mt-8">
                   <Megaphone className="w-8 h-8 text-purple-500 mb-4" />
                   <h5 className="font-bold text-brand-primary dark:text-white mb-2">Omnichannel</h5>
                   <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Consistent brand presence across all digital channels.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Why Market with CodeNext?</h2>
              <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-8 leading-tight text-balance">
                We Build Marketing Funnels <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500 text-balance">That Work While You Sleep</span>
              </h3>
              <div className="space-y-6">
                {[
                  "Data-backed strategies tailored to your industry.",
                  "Transparent reporting and regular strategy audits.",
                  "Focus on high-intent lead generation and conversion.",
                  "Comprehensive omnichannel approach for brand growth.",
                  "Continuous optimization based on real-time performance."
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
