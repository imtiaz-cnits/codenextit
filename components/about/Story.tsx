"use client";
import { motion } from 'motion/react';
import { Lightbulb, Rocket, Users2 } from 'lucide-react';

export default function Story() {
  const timeline = [
    {
      year: '2021',
      title: 'The Beginning',
      description: 'Founded with a vision to deliver world-class IT solutions. A small group of passionate tech enthusiasts came together to form CodeNext IT.',
      icon: Lightbulb,
    },
    {
      year: '2023',
      title: 'Rapid Expansion',
      description: 'Expanded our services globally, launching specialized products like ThemesJet and delivering complex management software to enterprises.',
      icon: Rocket,
    },
    {
      year: '2026',
      title: 'Leading the Future',
      description: 'Now a robust team of expert developers and designers, pushing the boundaries of AI, web, and mobile app development.',
      icon: Users2,
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-[11px] font-black text-brand-accent tracking-[0.3em] uppercase mb-4">Our Journey</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white leading-tight">
            How Passion Turned <br className="hidden md:block" /> Into Purpose
          </h3>
          <p className="mt-6 text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            What started as a shared vision between colleagues has now grown into a dynamic IT firm serving global brands with cutting-edge solutions.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />
          
          <div className="space-y-16">
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center w-full`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-slate-800 flex items-center justify-center shadow-xl shadow-brand-accent/10 z-10">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 dark:bg-brand-accent/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-brand-accent" />
                  </div>
                </div>

                {/* Content Container */}
                <div className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16 md:ml-auto'}`}>
                  <div className={`w-full pl-24 md:pl-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 text-brand-primary dark:text-white font-black text-sm mb-4">
                      {item.year}
                    </div>
                    <h4 className="text-2xl font-bold text-brand-primary dark:text-white mb-3">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
