"use client";
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Users, Target, Rocket, Heart } from 'lucide-react';

export default function AboutHero() {
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

  const stats = [
    { label: 'Built Products', value: '20+', icon: Rocket, color: 'text-rose-500', bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
    { label: 'Years of Experience', value: '3+', icon: Target, color: 'text-indigo-500', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
  ];

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
        <div className="absolute top-[-20%] left-[10%] w-[40%] h-[50%] bg-brand-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[40%] bg-rose-500/20 rounded-full blur-[100px]" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-20 dark:opacity-[0.15] pointer-events-none mix-blend-overlay" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex flex-col items-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg shadow-brand-accent/5 mb-6"
          >
            <Users className="w-3 h-3 md:w-4 md:h-4 text-brand-accent" />
            <span className="text-[9px] md:text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-[0.2em]">Who We Are</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[70px] font-extrabold tracking-tight text-brand-primary dark:text-white mb-6 leading-[1.1] text-balance">
            We Believe in Technology & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-400">Power of Team Work</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-12 max-w-3xl">
            Our success is fueled by our team of dedicated and talented IT professionals. We combine a wide range of expertise to provide solutions that are both innovative and dependable. Web Development, Software Development, App development, UI/UX Design, Graphics Design working in different sectors.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className={`flex items-center space-x-4 p-4 rounded-2xl border ${stat.border} ${stat.bg} backdrop-blur-sm min-w-[200px] text-left`}>
                <div className={`p-3 rounded-xl bg-white dark:bg-slate-900 shadow-sm`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-brand-primary dark:text-white">{stat.value}</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none z-10" />
    </section>
  );
}
