"use client";
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Smartphone, Layout, Palette, Figma, MousePointer2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const uiuxProjects = [
  {
    title: "NovaHealth - Mobile Wellness App",
    category: "Mobile UI/UX",
    description: "A comprehensive health tracking application focused on minimalistic aesthetics and frictionless user flow for meditation and wellness.",
    image: "/uiux_mobile_showcase.png",
    tags: ["User Research", "Dark Mode", "Micro-interactions"],
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "CryptoEdge - Trading Platform",
    category: "Web Dashboard",
    description: "Complex fintech dashboard designed for high-frequency traders, prioritizing data hierarchy and real-time visualization.",
    image: "/uiux_dashboard_showcase.png",
    tags: ["Data Viz", "Design System", "Fintech"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "EcoHome - Smart IoT Design",
    category: "IoT Interface",
    description: "Intuitive control system design for smart home devices, focusing on accessibility and seamless device-to-user communication.",
    image: "/uiux_iot_showcase.png",
    tags: ["Accessibility", "Mobile First", "IoT"],
    color: "from-purple-500 to-indigo-500"
  }
];

export default function UIUXShowcase() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Design Gallery
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-6"
          >
            Visualizing Success <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500 text-balance">Through Intuitive Design</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium"
          >
            Explore our design masterpieces where every pixel serves a purpose and every interaction tells a story.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {uiuxProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] p-4 md:p-6 transition-all duration-500 hover:border-brand-accent/30 hover:shadow-2xl hover:shadow-brand-accent/10">
                
                {/* Project Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 bg-slate-200 dark:bg-slate-800">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating Device Icons */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                      <Layout className="w-4 h-4 text-white" />
                    </div>
                    <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                      <Smartphone className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-brand-accent uppercase tracking-widest px-3 py-1 rounded-full bg-brand-accent/5 border border-brand-accent/10">
                      {project.category}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  </div>
                  
                  <h4 className="text-2xl font-black text-brand-primary dark:text-white mb-4 group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-3 py-1 rounded-lg bg-white dark:bg-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center space-x-2 font-bold text-brand-primary dark:text-white group/btn">
                    <span>View Case Study</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform text-brand-accent" />
                  </button>
                </div>

                {/* Decorative background element */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 font-medium mb-8">Ready to elevate your product experience?</p>
          <button className="bg-brand-primary dark:bg-white text-white dark:text-brand-primary px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform inline-flex items-center">
            Talk to Our Designers <MousePointer2 className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
