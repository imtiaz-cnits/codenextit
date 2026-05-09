"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Settings2 } from 'lucide-react';
import Image from 'next/image';

export default function ManagementSoftwareHero() {
  const { scrollY } = useScroll();
  const bgY1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const portalY = useTransform(scrollY, [0, 1000], [0, 50]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950">

      {/* Background Elements (Static Glows) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 overflow-hidden">

        {/* Main Static Flares */}
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-brand-accent/20 dark:bg-brand-accent/30 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[-5%] left-[-5%] w-[70%] h-[250px] bg-gradient-to-b from-brand-accent/20 dark:from-brand-accent/40 to-transparent transform origin-top-left -rotate-[30deg] blur-[60px] pointer-events-none" />

        {/* Indigo Glow for depth */}
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[130px] mix-blend-multiply dark:mix-blend-screen" />

        {/* Grid Pattern (Subtle & Static) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 98, 255, 1) 1px, transparent 0)', backgroundSize: '32px 32px' }}
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
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-accent/5 border border-brand-accent/10 mb-6">
              <Settings2 className="w-4 h-4 text-brand-accent" />
              <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest">Enterprise Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-primary dark:text-white mb-6 tracking-tight">
              Smart Management <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-500">
                Software for Growth
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed font-medium">
              Streamline your operations, enhance productivity, and gain real-time insights with our custom-built management software tailored specifically for your business needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-accent text-white px-8 py-4 rounded-2xl font-bold hover:shadow-tech transition-all flex items-center group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="border border-slate-200 dark:border-white/10 text-brand-primary dark:text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                View Demo
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
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/5 bg-white dark:bg-slate-900 p-2">
              <Image
                src="/management_software_dashboard_1778191147676.png"
                alt="Management Software Dashboard"
                width={800}
                height={600}
                className="rounded-2xl w-full h-auto"
              />
            </div>
            {/* Decorative glows around the image */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
