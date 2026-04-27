"use client";
import { motion } from 'motion/react';
import { 
  Code, Palette, Database, PenTool, 
  Smartphone, Share2, GraduationCap, Server, 
  CheckCircle2, ArrowRight
} from 'lucide-react';

export default function DetailedServices() {
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
      ]
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
      ]
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
      ]
    },
    {
      title: 'Graphics Design',
      desc: 'Unleash creativity with our graphic design solutions. Establish a powerful visual brand identity.',
      icon: Palette,
      accent: 'text-rose-500',
      bgAccent: 'bg-rose-500/10',
      borderAccent: 'group-hover:border-rose-500/50',
      shadowAccent: 'hover:shadow-rose-500/10',
      subServices: [
        'Logo & Branding Design',
        'Social Media Poster',
        'Stationary Item Design',
        'Marketing Materials'
      ]
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
      title: 'Digital Marketing',
      desc: 'Get help growing your business through effective digital marketing and social media strategies.',
      icon: Share2,
      accent: 'text-blue-500',
      bgAccent: 'bg-blue-500/10',
      borderAccent: 'group-hover:border-blue-500/50',
      shadowAccent: 'hover:shadow-blue-500/10',
      subServices: [
        'Social Media Management',
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click (PPC)',
        'Content Marketing'
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
    },
    {
      title: 'Industrial Training',
      desc: 'Learn from our expert and skilled mentors. Get a chance to leverage skills on selective subjects.',
      icon: GraduationCap,
      accent: 'text-amber-500',
      bgAccent: 'bg-amber-500/10',
      borderAccent: 'group-hover:border-amber-500/50',
      shadowAccent: 'hover:shadow-amber-500/10',
      subServices: [
        'Web Development Course',
        'UI/UX Design Masterclass',
        'App Development Training',
        'Career Guideline Seminars'
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
                <button className={`inline-flex items-center font-bold ${service.accent} group/btn`}>
                  Discuss Project <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
