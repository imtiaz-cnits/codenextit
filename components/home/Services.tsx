"use client";
import { motion } from 'motion/react';
import { Code, Palette, Share2, Bot, Cpu, BarChart, GraduationCap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Management Softwares',
      desc: 'Enhance operations with our adaptive software solutions.',
      icon: Cpu,
      accent: 'text-brand-accent',
    },
    {
      title: 'Web Development',
      desc: 'Boost your online presence with our web proficiency.',
      icon: Code,
      accent: 'text-indigo-500',
    },
    {
      title: 'UI/UX Design',
      desc: 'Turning ideas into effortless user experiences.',
      icon: Palette,
      accent: 'text-emerald-500',
    },
    {
      title: 'Digital Marketing & SEO',
      desc: 'Drive growth and visibility with our data-driven marketing.',
      icon: BarChart,
      accent: 'text-rose-500',
    },
    {
      title: 'App Development',
      desc: 'Give better apps experience to your customers.',
      icon: Cpu,
      accent: 'text-violet-500',
    },
    {
      title: 'Social Media Management',
      desc: 'Get help growing your business through social media platform.',
      icon: Share2,
      accent: 'text-blue-500',
    },
    {
      title: 'AI/ML Solutions',
      desc: 'Future-proof your business with cutting-edge AI integration.',
      icon: Bot,
      accent: 'text-amber-500',
    },
    {
      title: 'Industrial Training',
      desc: 'Get a chance to leverage skill on a selective subjects.',
      icon: GraduationCap,
      accent: 'text-teal-500',
    },
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-between px-4 sm:px-6 lg:px-8 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-slate-900" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[11px] font-black text-brand-accent tracking-[0.3em] uppercase mb-6 flex items-center">
              <span className="w-12 h-[2px] bg-brand-accent mr-4" />
              Service Catalog
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-brand-primary dark:text-white leading-[1.1]">
              We Are Serving Knowledge, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-400">Quality & Perfection.</span>
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg lg:max-w-xs font-medium italic border-l-4 border-brand-accent pl-6">
            Opening new doors of possibilities in every sector of IT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] hover:shadow-2xl hover:shadow-brand-accent/5 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className={`mb-8 ${service.accent} transition-transform group-hover:-translate-y-2 group-hover:scale-110 duration-500`}>
                  <service.icon className="w-12 h-12" />
                </div>
                <h4 className="text-2xl font-black text-brand-primary dark:text-white mb-4 leading-tight">
                  {service.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium">
                  {service.desc}
                </p>
              </div>

              {/* Background Accent Gradient */}
              <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-tl from-slate-100 to-transparent dark:from-slate-800/60 dark:to-transparent group-hover:from-brand-accent/20 group-hover:to-cyan-400/5 transition-all duration-500 group-hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
