"use client";
import { motion } from 'motion/react';
import { Search, PenTool, Code, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      title: 'Analyze',
      desc: 'We dive deep into your business goals and local market trends to create a strategic project roadmap.',
      icon: Search,
    },
    {
      title: 'Design',
      desc: 'We craft intuitive, modern, and pixel-perfect interfaces that ensure an engaging experience for your target audience.',
      icon: PenTool,
    },
    {
      title: 'Develop',
      desc: 'We write clean and secure code using advanced tech stacks to build high-performance web applications.',
      icon: Code,
    },
    {
      title: 'Deliver',
      desc: 'Following rigorous quality assurance, we ensure a smooth launch and provide reliable ongoing technical support.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-[12px] font-bold text-brand-accent tracking-widest uppercase mb-6">How We Work</span>
          <h2 className="text-4xl md:text-[56px] font-black text-brand-primary dark:text-white mt-4 mb-6">
            Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-400 transition-colors cursor-default">Software & <br /> Web Development</span> Process.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-[16px] italic">
            We follow a structured and transparent approach to transform your business ideas into scalable digital solutions.
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
              <p className="text-xl font-bold text-brand-primary dark:text-white mb-4">{step.title}</p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
