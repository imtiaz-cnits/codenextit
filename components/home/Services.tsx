"use client";
import { motion } from 'motion/react';
import { Code, Palette, Share2, Bot, Cpu, BarChart, GraduationCap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Custom Management Softwares',
      desc: 'Develop secure and adaptive ERP, POS, and educational management systems tailored specifically to your daily business operations.',
      icon: Cpu,
      accent: 'text-brand-accent',
    },
    {
      title: 'Professional Web Development',
      desc: 'Build fast, responsive, and SEO-optimized websites that establish a strong digital presence and convert visitors into loyal customers.',
      icon: Code,
      accent: 'text-indigo-500',
    },
    {
      title: 'UI/UX Product Design',
      desc: 'Craft intuitive user interfaces with modern aesthetics, including sleek dark mode and glassmorphism layouts, to ensure flawless and engaging user experiences.',
      icon: Palette,
      accent: 'text-emerald-500',
    },
    {
      title: 'Digital Marketing & SEO',
      desc: 'Accelerate your business growth and dominate local search rankings with our comprehensive, data-driven digital marketing and SEO strategies.',
      icon: BarChart,
      accent: 'text-rose-500',
    },
    {
      title: 'Mobile App Development',
      desc: 'Launch high-performance Android and iOS applications to provide seamless, on-the-go digital experiences for your customers.',
      icon: Cpu,
      accent: 'text-violet-500',
    },
    {
      title: 'Social Media Management',
      desc: 'Increase your brand reach and customer engagement across the local market through data-driven social media management and marketing strategies.',
      icon: Share2,
      accent: 'text-blue-500',
    },
    {
      title: 'AI/ML Solutions',
      desc: 'Leverage cutting-edge Artificial Intelligence (AI) and Machine Learning (ML) to transform data into predictive insights, automate complex operations, and drive smarter business decisions.',
      icon: Bot,
      accent: 'text-amber-500',
    },
    {
      title: 'Academic Industrial Training',
      desc: 'Gain practical, project-based experience in software engineering to bridge the gap between academic theory and real-world industry demands.',
      icon: GraduationCap,
      accent: 'text-teal-500',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-between px-4 sm:px-6 lg:px-8 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-slate-900" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <p className="text-[12px] font-black text-brand-accent tracking-[0.3em] uppercase mb-4 flex items-center">
              <span className="w-12 h-[2px] bg-brand-accent mr-4" />
              OUR CORE SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-brand-primary dark:text-white leading-[1.1]">
              Complete IT <br /> Solutions & Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-400">Services in Bangladesh</span>
            </h2>
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
              className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] hover:shadow-2xl hover:shadow-brand-accent/5 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className={`mb-6 ${service.accent} transition-transform group-hover:-translate-y-2 group-hover:scale-110 duration-500`}>
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-black text-brand-primary dark:text-white mb-3 leading-tight">
                  {service.title}
                </h3>
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
