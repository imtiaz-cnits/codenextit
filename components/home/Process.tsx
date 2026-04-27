"use client";
import { motion } from 'motion/react';
import { Search, PenTool, Code, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      title: 'Analyze',
      desc: 'Deep diving into business requirements and market trends.',
      icon: Search,
    },
    {
      title: 'Design',
      desc: 'Crafting pixel-perfect user experiences and robust architectures.',
      icon: PenTool,
    },
    {
      title: 'Develop',
      desc: 'Turning designs into high-performance digital products.',
      icon: Code,
    },
    {
      title: 'Deliver',
      desc: 'Rigorous testing and successful global deployment.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-4">Our Methodology</h2>
          <h3 className="text-4xl md:text-6xl font-black text-brand-primary dark:text-white mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-400 transition-colors cursor-default">Working Process</span> of Ours.
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg italic">
            "Serving Knowledge, Quality & Perfection"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 dark:bg-slate-800 -translate-y-1/2 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-8 inline-block">
                <div className="w-24 h-24 bg-white dark:bg-slate-900 border-2 border-brand-border dark:border-slate-800 rounded-[2rem] flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent/5 transition-all duration-500 transform group-hover:rotate-[15deg]">
                  <step.icon className="w-10 h-10 text-brand-primary dark:text-white group-hover:text-brand-accent transition-colors" />
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-brand-primary text-white rounded-2xl flex items-center justify-center font-bold text-sm border-4 border-white">
                  0{idx + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold text-brand-primary dark:text-white mb-4">{step.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
