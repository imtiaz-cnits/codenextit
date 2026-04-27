"use client";
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Layers, Code2, Smartphone, Palette, Server } from 'lucide-react';

export default function ServicesHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const trailSpringConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const trailMouseX = useSpring(mouseX, trailSpringConfig);
  const trailMouseY = useSpring(mouseY, trailSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    mouseX.set(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    mouseY.set(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const badges = [
    { icon: Code2, label: 'Web Dev', color: 'text-indigo-500', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', position: 'left-4 md:left-12 lg:left-24 top-40 lg:top-48' },
    { icon: Smartphone, label: 'App Dev', color: 'text-brand-accent', bg: 'bg-brand-accent/10', border: 'border-brand-accent/20', position: 'right-4 md:right-12 lg:right-24 top-40 lg:top-48' },
    { icon: Palette, label: 'UI/UX', color: 'text-rose-500', bg: 'bg-rose-500/10', border: 'border-rose-500/20', position: 'left-4 md:left-16 lg:left-32 bottom-20 lg:bottom-20' },
    { icon: Server, label: 'Hosting', color: 'text-cyan-500', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', position: 'right-4 md:right-16 lg:right-32 bottom-20 lg:bottom-26' },
  ];

  return (
    <section className="relative pt-32 pb-16 lg:pt-50 lg:pb-24 overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
      {/* Custom Trailing Cursor Dot */}
      <motion.div
        className="fixed top-[-8px] left-[-8px] w-4 h-4 bg-brand-accent rounded-full pointer-events-none z-50 mix-blend-multiply dark:mix-blend-screen hidden md:block"
        style={{
          x: trailMouseX,
          y: trailMouseY,
        }}
      />

      {/* Dynamic Background */}
      <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-brand-accent/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] bg-cyan-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[30%] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-20 dark:opacity-[0.15] pointer-events-none mix-blend-overlay" />

      {/* Floating Badges */}
      <div className="absolute inset-0 max-w-7xl mx-auto hidden lg:block pointer-events-none z-10">
        {badges.map((badge, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + idx * 0.1, duration: 0.8, type: "spring" }}
            className={`absolute ${badge.position}`}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-2xl backdrop-blur-xl border ${badge.border} ${badge.bg} glass dark:glass-dark shadow-xl shadow-black/5 dark:shadow-white/5`}
            >
              <badge.icon className={`w-4 h-4 md:w-5 md:h-5 ${badge.color}`} />
              <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-200">{badge.label}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg shadow-brand-accent/5 mb-6"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className="text-[9px] md:text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-[0.2em]">Crafting Digital Excellence</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold tracking-tight text-brand-primary dark:text-white mb-6 leading-[1.1] text-balance">
            Elevate Your&nbsp;
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-400">Business</span>
              <div className="absolute bottom-1 left-0 w-full h-4 bg-brand-accent/20 -rotate-2 transform blur-md" />
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-balance">
            From visionary concepts to flawless execution. We deliver <span className="text-brand-primary dark:text-white font-bold italic">world-class</span> IT solutions designed to scale, perform, and dominate your industry.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-brand-primary dark:bg-white text-white dark:text-brand-primary px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-brand-primary/20 dark:shadow-white/10">
              Start a Project
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none z-10" />
    </section>
  );
}
