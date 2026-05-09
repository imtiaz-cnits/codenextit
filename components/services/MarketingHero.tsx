"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, BarChart3, TrendingUp, Search, Megaphone } from 'lucide-react';
import Image from 'next/image';

export default function MarketingHero() {
  const { scrollY } = useScroll();
  const portalY = useTransform(scrollY, [0, 1000], [0, 50]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 overflow-hidden">
        {/* Static Glows */}
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-brand-accent/10 dark:bg-brand-accent/20 rounded-full blur-[130px] mix-blend-multiply dark:mix-blend-screen" />

        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07]" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 1) 1px, transparent 0)', backgroundSize: '32px 32px' }} 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 mb-6">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Growth Marketing</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-primary dark:text-white leading-tight mb-6 tracking-tight text-balance">
              Skyrocket Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-500">
                Digital Presence
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed font-medium">
              We use data-driven strategies and cutting-edge SEO techniques to drive organic traffic, increase conversions, and help your business dominate the search results.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-accent text-white px-8 py-4 rounded-2xl font-bold hover:shadow-tech transition-all flex items-center group">
                Audit My Site
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="border border-slate-200 dark:border-white/10 text-brand-primary dark:text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                Our Strategies
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            style={{ y: portalY }}
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-white/20 dark:border-white/5 bg-white dark:bg-slate-900 p-2">
              <Image 
                src="/marketing_hero_gen.png" 
                alt="Digital Marketing Analytics" 
                width={800} 
                height={600}
                className="rounded-[36px] w-full h-auto"
              />
            </div>
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 z-20 flex items-center space-x-3"
            >
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                 <BarChart3 className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Growth</div>
                <div className="text-xl font-black text-brand-primary dark:text-white">+145%</div>
              </div>
            </motion.div>
            
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
