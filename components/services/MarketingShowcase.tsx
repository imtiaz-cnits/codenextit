"use client";
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, BarChart3, TrendingUp, Globe, Search, Megaphone, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const marketingProjects = [
  {
    title: "EcoBrand - Organic Growth",
    category: "SEO & Content",
    description: "Successfully increased organic traffic by 300% in 6 months through technical SEO audit and high-converting content strategy.",
    image: "/marketing_showcase_1.png",
    tags: ["SEO Audit", "Content strategy", "+300% Traffic"],
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "TechFlow - Global Ad Campaign",
    category: "PPC & Meta Ads",
    description: "Managed a $50k/month ad budget with a 4.5x ROAS (Return on Ad Spend) targeting enterprise SaaS buyers worldwide.",
    image: "/marketing_showcase_2.png",
    tags: ["Google Ads", "Meta Ads", "4.5x ROAS"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Shopify Pro - E-commerce Growth",
    category: "Social Media Marketing",
    description: "Built a social community of 100k+ followers and drove $1M+ in sales through influencer partnerships and viral social campaigns.",
    image: "/marketing_showcase_3.png",
    tags: ["Influencer Marketing", "Social Scaling", "$1M+ Sales"],
    color: "from-purple-500 to-indigo-500"
  }
];

export default function MarketingShowcase() {
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
            Growth Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-6"
          >
            Real Results <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500 text-balance">For Real Businesses</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium"
          >
            Explore our data-backed success stories where we helped brands scale their revenue and dominate their niche.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {marketingProjects.map((project, index) => (
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="w-20 h-20 text-slate-400/20" />
                  </div>
                  
                  {/* Floating Stats Icon */}
                  <div className="absolute bottom-4 right-4">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                      <BarChart3 className="w-5 h-5 text-white" />
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
          <p className="text-slate-500 font-medium mb-8">Ready to grow your business exponentially?</p>
          <button className="bg-brand-primary dark:bg-white text-white dark:text-brand-primary px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform inline-flex items-center">
            Get a Free SEO Audit <Search className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
