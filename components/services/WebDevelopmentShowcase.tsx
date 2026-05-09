"use client";
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Monitor, Smartphone, ShieldCheck, Globe } from 'lucide-react';
import Image from 'next/image';

const webProjects = [
  {
    title: "EcoShop - High Performance E-Commerce",
    category: "Online Retail",
    description: "A lightning-fast e-commerce platform built with Next.js, featuring server-side rendering, advanced filtering, and integrated payment gateways.",
    image: "/web_dev_showcase_1778193401459.png",
    tags: ["Next.js", "Tailwind", "Stripe"],
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "GlobalCorp - Corporate Business Portal",
    category: "Enterprise Web",
    description: "A premium multi-page corporate website for an international firm, optimized for search engines and high conversion rates.",
    image: "/web_corp_showcase_1778193543013.png",
    tags: ["SEO Ready", "PWA", "i18n"],
    color: "from-blue-500 to-indigo-400"
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Web Application",
    description: "Complex data visualization dashboard for a SaaS product with real-time updates and interactive chart systems.",
    image: "/web_dev_hero_dashboard_1778193506403.png",
    tags: ["React", "D3.js", "Firebase"],
    color: "from-purple-500 to-pink-400"
  }
];

export default function WebDevelopmentShowcase() {
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
            Digital Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-6"
          >
            Crafting Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500 text-balance">High-Performance Experiences</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium"
          >
            Explore our range of successfully deployed web solutions that combine extreme performance with stunning design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {webProjects.map((project, index) => (
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
                      <Monitor className="w-4 h-4 text-white" />
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
                    <span>Visit Live Website</span>
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
          <p className="text-slate-500 font-medium mb-8 text-balance">Want a high-performance digital engine for your business?</p>
          <button className="bg-brand-accent text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform inline-flex items-center shadow-lg shadow-brand-accent/20">
            Build Your Website Now <ExternalLink className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
