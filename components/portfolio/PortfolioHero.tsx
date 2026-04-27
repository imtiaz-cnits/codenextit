"use client";
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function PortfolioHero() {
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

  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
      {/* Custom Trailing Cursor Dot */}
      <motion.div
        className="fixed top-[-8px] left-[-8px] w-4 h-4 bg-brand-accent rounded-full pointer-events-none z-50 mix-blend-multiply dark:mix-blend-screen hidden md:block"
        style={{
          x: trailMouseX,
          y: trailMouseY,
        }}
      />

      <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[50%] h-[60%] bg-brand-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[50%] bg-indigo-500/20 rounded-full blur-[100px]" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-20 dark:opacity-[0.15] pointer-events-none mix-blend-overlay" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
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
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-brand-accent" />
            <span className="text-[9px] md:text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-[0.2em]">Our Masterpieces</span>
          </motion.div>

          <h1 className="text-4xl md:text-7xl lg:text-[90px] font-extrabold tracking-tight text-brand-primary dark:text-white mb-6 leading-[1.05] text-balance">
            Digital Products That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500">Inspire & Perform.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-balance">
            Explore our carefully curated collection of successful digital transformations. From robust enterprise software to award-winning UI/UX designs.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none z-10" />
    </section>
  );
}
