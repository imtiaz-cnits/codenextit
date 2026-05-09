"use client";
import { motion } from 'motion/react';
import { 
  Code, Palette, Database, PenTool, 
  Smartphone, Share2, GraduationCap, Server, 
  CheckCircle2, ArrowRight, BarChart, Bot
} from 'lucide-react';
import { useModal } from '../ModalContext';

export default function DetailedServices() {
  const { openBookingModal } = useModal();
  const services = [
    {
      title: 'Management Softwares',
      desc: 'Optimize operations with our dynamic software services. Custom built for your specific industry needs.',
      icon: Database,
      accent: 'text-brand-accent',
      bgAccent: 'bg-brand-accent/10',
      borderAccent: 'group-hover:border-brand-accent/50',
      shadowAccent: 'hover:shadow-brand-accent/10',
      subServices: [
        'School Management',
        'Inventory Management',
        'Diagnostic Center Management',
        'Custom ERP Solutions'
      ],
      slug: '/services/management-software'
    },
    {
      title: 'Web Development',
      desc: 'Elevate your online presence with our web expertise. Fast, secure, and highly scalable web applications.',
      icon: Code,
      accent: 'text-indigo-500',
      bgAccent: 'bg-indigo-500/10',
      borderAccent: 'group-hover:border-indigo-500/50',
      shadowAccent: 'hover:shadow-indigo-500/10',
      subServices: [
        'E-Commerce Website',
        'Agency Website',
        'Hotel & Restaurant Websites',
        'Custom Web Apps'
      ],
      slug: '/services/web-development'
    },
    {
      title: 'UI/UX Design',
      desc: 'Transforming concepts into seamless user experiences. Engaging designs that drive conversions.',
      icon: PenTool,
      accent: 'text-emerald-500',
      bgAccent: 'bg-emerald-500/10',
      borderAccent: 'group-hover:border-emerald-500/50',
      shadowAccent: 'hover:shadow-emerald-500/10',
      subServices: [
        'Landing Pages',
        'Website UI',
        'Software Dashboard',
        'Mobile App UI'
      ],
      slug: '/services/ui-ux-design'
    },
    {
      title: 'Digital Marketing & SEO',
      desc: 'Drive organic traffic and enhance your online visibility. Our data-driven strategies ensure maximum ROI for your business.',
      icon: BarChart,
      accent: 'text-blue-500',
      bgAccent: 'bg-blue-500/10',
      borderAccent: 'group-hover:border-blue-500/50',
      shadowAccent: 'hover:shadow-blue-500/10',
      subServices: [
        'Search Engine Optimization',
        'Social Media Marketing',
        'PPC & Ad Campaigns',
        'Content Strategy'
      ],
      slug: '/services/digital-marketing'
    },
    {
      title: 'App Development',
      desc: 'Give a better app experience to your customers. High performance native and cross-platform mobile apps.',
      icon: Smartphone,
      accent: 'text-violet-500',
      bgAccent: 'bg-violet-500/10',
      borderAccent: 'group-hover:border-violet-500/50',
      shadowAccent: 'hover:shadow-violet-500/10',
      subServices: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform (Flutter/React Native)',
        'App UI/UX Design'
      ]
    },
    {
      title: 'AI/ML Solutions',
      desc: 'Future-proof your business with cutting-edge AI integration. Automate complex tasks and gain deeper insights.',
      icon: Bot,
      accent: 'text-amber-500',
      bgAccent: 'bg-amber-500/10',
      borderAccent: 'group-hover:border-amber-500/50',
      shadowAccent: 'hover:shadow-amber-500/10',
      subServices: [
        'AI Chatbot Integration',
        'Predictive Analytics',
        'Process Automation',
        'Custom ML Models'
      ]
    },
    {
      title: 'Web Hosting & VPS',
      desc: 'Secure, fast, and reliable web hosting solutions with maximum uptime and dedicated support.',
      icon: Server,
      accent: 'text-cyan-500',
      bgAccent: 'bg-cyan-500/10',
      borderAccent: 'group-hover:border-cyan-500/50',
      shadowAccent: 'hover:shadow-cyan-500/10',
      subServices: [
        'Shared BDIX Web Hosting',
        'Premium BDIX VPS',
        'Dedicated Servers',
        'Domain Registration'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 2) * 0.2, duration: 0.6 }}
              className={`p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-500 group relative overflow-hidden ${service.shadowAccent} ${service.borderAccent}`}
            >
              {/* Background Glow */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-tl from-slate-200 to-transparent dark:from-slate-800 dark:to-transparent opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

              <div className="flex items-start gap-6 relative z-10 mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${service.bgAccent} ${service.accent} group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-brand-primary dark:text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-6">Key Solutions</h4>
                <ul className="space-y-4 mb-10">
                  {service.subServices.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-600 dark:text-slate-300 font-medium">
                      <CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 ${service.accent}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-6 mt-4">
                  <a href={service.slug || "#"} className={`inline-flex items-center font-bold ${service.accent} group/btn`}>
                    Learn More <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <button 
                    onClick={openBookingModal}
                    className={`px-6 py-2.5 rounded-xl text-white font-bold text-sm ${service.accent.replace('text-', 'bg-')} shadow-lg shadow-current/20 hover:scale-105 transition-all`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
