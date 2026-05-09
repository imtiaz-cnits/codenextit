import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ThemeToggle from '../../../components/ThemeToggle';
import ScrollToTop from '../../../components/ScrollToTop';
import CallToAction from '../../../components/home/CallToAction';
import WebDevelopmentHero from '../../../components/services/WebDevelopmentHero';
import WebDevelopmentShowcase from '../../../components/services/WebDevelopmentShowcase';
import { 
  Code2, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Layout, 
  Smartphone,
  CheckCircle2,
  Server,
  Search
} from 'lucide-react';

export const metadata = {
  title: 'Web Development Services | CodeNext IT',
  description: 'Full-stack web development services using modern frameworks like Next.js, React, and Node.js.',
};

export default function WebDevelopmentPage() {
  const webFeatures = [
    {
      title: "Custom Web Applications",
      description: "Scalable and high-performance web applications built from scratch to meet your unique business requirements.",
      icon: <Layout className="w-6 h-6 text-brand-accent" />,
    },
    {
      title: "E-Commerce Solutions",
      description: "Robust online stores with secure payment integration, inventory management, and seamless user experience.",
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Performance Optimization",
      description: "Speed up your existing website to improve SEO rankings and user retention with our expert optimization.",
      icon: <Zap className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "API Development",
      description: "Custom REST and GraphQL API development to connect your web services and mobile applications seamlessly.",
      icon: <Server className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Responsive UI/UX",
      description: "Modern, mobile-first designs that look great on any device, from smartphones to large desktop monitors.",
      icon: <Smartphone className="w-6 h-6 text-rose-500" />,
    },
    {
      title: "Secure Architecture",
      description: "Top-tier security implementations to protect your data and user information from modern web threats.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-accent" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      
      <WebDevelopmentHero />

      <WebDevelopmentShowcase />

      {/* Web Features Grid */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-6">
              Modern Engineering for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500">Modern Businesses</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
              We leverage the latest technologies to build websites that are not just beautiful, but also highly functional and lightning fast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webFeatures.map((feature, index) => (
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

      {/* Why Choose Our Web Dev */}
      <section className="py-24 bg-slate-50 dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5">
                   <Zap className="w-8 h-8 text-amber-500 mb-4" />
                   <h5 className="font-bold text-brand-primary dark:text-white mb-2">99+ PageSpeed</h5>
                   <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">We optimize every line of code for maximum speed.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 mt-8">
                   <Code2 className="w-8 h-8 text-brand-accent mb-4" />
                   <h5 className="font-bold text-brand-primary dark:text-white mb-2">Clean Code</h5>
                   <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Maintainable and scalable code architecture.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5">
                   <Search className="w-8 h-8 text-blue-500 mb-4" />
                   <h5 className="font-bold text-brand-primary dark:text-white mb-2">SEO Optimized</h5>
                   <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Semantic HTML and metadata for search engines.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 mt-8">
                   <ShieldCheck className="w-8 h-8 text-brand-accent mb-4" />
                   <h5 className="font-bold text-brand-primary dark:text-white mb-2">Ironclad Security</h5>
                   <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Protecting your users with the latest standards.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Why WebDev with CodeNext?</h2>
              <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-8 leading-tight text-balance">
                We Don't Just Build Sites, <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500">We Build Digital Engines</span>
              </h3>
              <div className="space-y-6">
                {[
                  "Optimized for core web vitals and user experience.",
                  "Future-proof development with modern frameworks.",
                  "Pixel-perfect responsive design across all devices.",
                  "Ongoing support and post-launch maintenance.",
                  "Integrated analytics to track your success."
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
