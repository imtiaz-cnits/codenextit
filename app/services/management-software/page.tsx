import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ThemeToggle from '../../../components/ThemeToggle';
import ScrollToTop from '../../../components/ScrollToTop';
import CallToAction from '../../../components/home/CallToAction';
import ManagementSoftwareHero from '../../../components/services/ManagementSoftwareHero';
import ManagementSoftwareShowcase from '../../../components/services/ManagementSoftwareShowcase';
import {
  BarChart3,
  ShieldCheck,
  Zap,
  Users,
  Database,
  LayoutDashboard,
  CheckCircle2,
  Globe2
} from 'lucide-react';

export const metadata = {
  title: 'Management Software Solutions | CodeNext IT',
  description: 'Custom-built management software to streamline your business operations, from ERP to CRM.',
};

export default function ManagementSoftwarePage() {
  const features = [
    {
      title: "ERP Systems",
      description: "Integrated business process management software that allows an organization to use a system of integrated applications to manage the business.",
      icon: <LayoutDashboard className="w-6 h-6 text-brand-accent" />,
    },
    {
      title: "CRM Solutions",
      description: "Manage your company's relationships and interactions with customers and potential customers with our custom CRM tools.",
      icon: <Users className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Inventory Management",
      description: "Keep track of your stock levels, orders, sales and deliveries with real-time analytics and automated alerts.",
      icon: <Database className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "HRM Software",
      description: "Streamline HR processes including payroll, recruitment, performance tracking, and employee self-service portals.",
      icon: <Users className="w-6 h-6 text-rose-500" />,
    },
    {
      title: "Project Management",
      description: "Tools designed to help team members plan, track, and manage their work to deliver results on time.",
      icon: <BarChart3 className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Financial Management",
      description: "Comprehensive tools for accounting, budgeting, and financial reporting to keep your business profitable.",
      icon: <Zap className="w-6 h-6 text-cyan-500" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      <ManagementSoftwareHero />

      <ManagementSoftwareShowcase />

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Core Modules</h2>
            <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-6">
              Everything You Need to <br /> Scale Your Business
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
              Our management software is built on a modular architecture, allowing you to choose and customize exactly what your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] hover:border-brand-accent/30 transition-all group"
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

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50 dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5">
                  <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4" />
                  <h5 className="font-bold text-brand-primary dark:text-white mb-2">Secure Data</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Enterprise-grade security protocols.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 mt-8">
                  <Zap className="w-8 h-8 text-amber-500 mb-4" />
                  <h5 className="font-bold text-brand-primary dark:text-white mb-2">High Speed</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Optimized for performance and low latency.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5">
                  <Globe2 className="w-8 h-8 text-brand-accent mb-4" />
                  <h5 className="font-bold text-brand-primary dark:text-white mb-2">Cloud Access</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Access your data from anywhere in the world.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 mt-8">
                  <Users className="w-8 h-8 text-indigo-500 mb-4" />
                  <h5 className="font-bold text-brand-primary dark:text-white mb-2">Scalable</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Grows as your business grows.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Why CodeNext IT?</h2>
              <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-8 leading-tight">
                Designed for Performance, <br /> <span className='text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500'>Built for Success</span>
              </h3>
              <div className="space-y-6">
                {[
                  "User-friendly intuitive dashboard for easy navigation.",
                  "Customizable reports and real-time data analytics.",
                  "Seamless integration with existing third-party tools.",
                  "24/7 technical support and maintenance services.",
                  "Cost-effective solutions with maximum ROI."
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
