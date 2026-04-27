"use client";
import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { label: 'Trusted Clients', value: '120+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '320+' },
    { label: 'Cloud Deployments', value: '200+' },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-brand-primary text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-300">
      {/* Decorative matrix-like background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-slate-900/20 dark:border-white/20 h-24 transition-colors duration-300" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-400 pb-2">
                {stat.value}
              </h4>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-white/60 transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
