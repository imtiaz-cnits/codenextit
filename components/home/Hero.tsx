"use client";
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue, useMotionTemplate } from 'motion/react';
import { ArrowUpRight, Shield, Globe, Zap, Code2, Cpu, Sparkles } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const bgY2 = useTransform(scrollY, [0, 1000], [0, -250]);
  const portalY = useTransform(scrollY, [0, 1000], [0, 80]);

  // Mouse tracking for interactive background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 150, mass: 0.1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Slower spring for a trailing cursor dot
  const trailSpringConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const trailMouseX = useSpring(mouseX, trailSpringConfig);
  const trailMouseY = useSpring(mouseY, trailSpringConfig);

  const maskImage = useMotionTemplate`radial-gradient(600px circle at ${smoothMouseX}px ${smoothMouseY}px, black, transparent)`;

  const floatX1 = useTransform(smoothMouseX, [0, 1920], [-30, 30]);
  const floatY1 = useTransform(smoothMouseY, [0, 1080], [-30, 30]);
  const floatX2 = useTransform(smoothMouseX, [0, 1920], [30, -30]);
  const floatY2 = useTransform(smoothMouseY, [0, 1080], [30, -30]);
  const floatX3 = useTransform(smoothMouseX, [0, 1920], [-15, 15]);
  const floatY3 = useTransform(smoothMouseY, [0, 1080], [15, -15]);

  const words = ["Technology.", "Innovation.", "Creativity.", "Perfection."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Initial center position on mount
    mouseX.set(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    mouseY.set(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        mass: 1
      },
    },
  };

  return (
    <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-hidden grid-pattern">
      {/* Custom Trailing Cursor Dot */}
      <motion.div
        className="fixed top-[-8px] left-[-8px] w-4 h-4 bg-brand-accent rounded-full pointer-events-none z-50 mix-blend-multiply dark:mix-blend-screen hidden md:block"
        style={{
          x: trailMouseX,
          y: trailMouseY,
        }}
      />

      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 bg-slate-50 dark:bg-[#0B0F19] overflow-hidden">

        {/* Top-Left Blue Flare & Ray */}
        <motion.div
          style={{ x: floatX2, y: floatY2 }}
          className="absolute top-[-20%] left-[-10%] w-[45%] h-[45%] bg-brand-accent/20 dark:bg-brand-accent/30 rounded-full blur-[120px] mix-blend-screen"
        />
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[250px] bg-gradient-to-b from-brand-accent/20 dark:from-brand-accent/40 to-transparent transform origin-top-left -rotate-[35deg] blur-[50px] pointer-events-none" />

        {/* Planet Horizon Curve (Bottom) */}
        <div className="absolute bottom-0 left-0 w-full h-[50%] overflow-hidden z-0">
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] md:top-[30%] left-1/2 -translate-x-1/2 w-[150vw] min-w-[1200px] h-[150vw] min-h-[1200px] rounded-full border-t-[2px] border-brand-accent/40 dark:border-brand-accent/60 shadow-[0_-30px_100px_rgba(0,98,255,0.15)] dark:shadow-[0_-30px_100px_rgba(0,98,255,0.3)] bg-gradient-to-t from-brand-accent/10 dark:from-brand-accent/20 to-transparent"
          />
        </div>

        {/* Binary Matrix Text (Right Side) */}
        <motion.div
          style={{
            y: bgY1,
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 100% 50%, black 40%, transparent 100%)'
          }}
          className="absolute right-[-5%] md:right-[-2%] top-[10%] w-[250px] md:w-[300px] h-[120%] overflow-hidden opacity-30 dark:opacity-40 font-mono text-[10px] md:text-xs text-brand-accent/60 dark:text-brand-accent/50 leading-snug break-all select-none z-0 pointer-events-none"
        >
          {Array.from({ length: 150 }).map(() => "0 1 0 0 1 0 1 0 1 1 1 0 0 1 0 1 1 0 0 1 0 1 0 1 ").join("")}
        </motion.div>

        {/* Left Side UI Wireframes */}
        <motion.div
          style={{ x: floatX1, y: floatY1 }}
          className="absolute left-[2%] top-[25%] w-64 h-[400px] border border-slate-300/50 dark:border-white/5 rounded-2xl bg-white/50 dark:bg-white/[0.02] p-5 flex-col gap-4 opacity-50 dark:opacity-30 pointer-events-none z-0 hidden lg:flex backdrop-blur-sm"
        >
          {/* Mock Header */}
          <div className="flex items-center gap-3 border-b border-slate-300/50 dark:border-white/10 pb-4">
            <div className="w-8 h-8 rounded bg-slate-300 dark:bg-white/10" />
            <div className="w-24 h-3 rounded bg-slate-300 dark:bg-white/10" />
          </div>
          {/* Mock Hero/Image Box */}
          <div className="w-full h-32 rounded-lg bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/5 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center">
              <div className="w-4 h-4 bg-slate-300 dark:bg-white/20 rounded-sm" />
            </div>
          </div>
          {/* Mock Text Lines */}
          <div className="w-full h-2 rounded bg-slate-300 dark:bg-white/10 mt-2" />
          <div className="w-4/5 h-2 rounded bg-slate-300 dark:bg-white/10" />
          <div className="w-3/4 h-2 rounded bg-slate-300 dark:bg-white/10" />
          <div className="w-1/2 h-8 rounded bg-slate-300 dark:bg-white/10 mt-4" />
        </motion.div>

        {/* Interactive Mouse Glow */}
        <motion.div
          style={{
            x: smoothMouseX,
            y: smoothMouseY,
          }}
          className="absolute top-[-200px] left-[-200px] w-[300px] h-[300px] bg-brand-accent/10 dark:bg-brand-accent/15 rounded-full blur-[100px] pointer-events-none z-0 md:block mix-blend-screen"
        />

        {/* Interactive Grid Reveal */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none md:block opacity-100 dark:opacity-50 mix-blend-overlay"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 98, 255, 0.5) 1px, transparent 0)',
            backgroundSize: '32px 32px',
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }}
        />
      </div>

      {/* Floating Elements (Visible on lg screens) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0 hidden lg:block">
        <motion.div style={{ x: floatX1, y: floatY1 }} className="absolute top-[20%] left-[2%]">
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 p-4 rounded-2xl shadow-2xl"
          >
            <Code2 className="w-8 h-8 text-brand-accent" />
          </motion.div>
        </motion.div>

        <motion.div style={{ x: floatX2, y: floatY2 }} className="absolute top-[40%] right-[2%]">
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -15, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 p-4 rounded-2xl shadow-2xl"
          >
            <Cpu className="w-8 h-8 text-indigo-500" />
          </motion.div>
        </motion.div>

        <motion.div style={{ x: floatX3, y: floatY3 }} className="absolute top-[60%] left-[8%]">
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 20, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 p-3 rounded-xl shadow-2xl"
          >
            <Sparkles className="w-6 h-6 text-emerald-500" />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
        <div className="text-center relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-2 py-1 rounded-full bg-brand-accent/5 border border-brand-accent/10 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Innovation Labs</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[116px] font-extrabold tracking-tight text-brand-primary dark:text-white mb-4 leading-[1.1] md:leading-[1] text-balance flex flex-col items-center justify-center">
              <span>We Believe in</span>
              <div className="relative h-[1em] w-full flex justify-center items-center">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={index}
                    initial={{ y: 40, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -40, opacity: 0, rotateX: 90 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500 origin-center pb-2"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-xl md:text-xl text-slate-500 dark:text-slate-400 mb-12 font-medium leading-relaxed text-balance">
              Open <span className="text-brand-primary dark:text-white font-bold italic">New Doors</span> of Possibilities in Development, Design and Networking.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-primary text-white px-10 py-4 rounded-2xl text-lg font-bold hover:shadow-tech transition-all flex items-center group relative overflow-hidden"
              >
                <span className="relative z-10 transition-transform group-hover:-translate-x-1">Start Building</span>
                <ArrowUpRight className="ml-2 w-6 h-6 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.button>

              <a href="/portfolio" className="text-brand-primary dark:text-white px-10 py-4 rounded-2xl text-lg font-bold flex items-center group hover:bg-slate-50 dark:hover:bg-white/5 transition-all border-2 border-transparent hover:border-brand-border dark:hover:border-white/10">
                Explore Portfolio
                <motion.span className="ml-2 text-slate-300 dark:text-slate-600 group-hover:text-brand-accent transition-colors">
                  / /
                </motion.span>
              </a>
            </motion.div>
          </motion.div>

          {/* IDE & Dashboard Mockup Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.6, duration: 1.2, type: "spring", bounce: 0.4 }}
            style={{ y: portalY, perspective: 1000 }}
            className="mt-20 relative max-w-5xl mx-auto rounded-[24px] md:rounded-[40px] overflow-hidden border border-brand-border dark:border-slate-800 shadow-2xl bg-[#0B0F19] group"
          >
            {/* macOS Window Bar */}
            <div className="flex items-center px-6 py-4 border-b border-white/5 bg-[#0B0F19]">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="mx-auto flex items-center space-x-2 text-xs text-slate-400 font-mono">
                <Shield className="w-4 h-4 text-brand-accent" />
                <span>codenext-workspace.tsx</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left: Code Editor Mockup */}
              <div style={{ fontFamily: "'Google Sans Code', 'JetBrains Mono', monospace" }} className="lg:col-span-3 p-8 font-mono text-sm leading-relaxed relative bg-[#0B0F19]">
                <div className="absolute top-0 left-0 w-12 h-full bg-white/[0.02] border-r border-white/5 flex flex-col items-center py-8 text-slate-600 text-xs select-none">
                  {Array.from({ length: 11 }).map((_, i) => <span key={i} className="mb-[6px]">{i + 1}</span>)}
                </div>
                <div className="pl-8 text-left overflow-x-auto whitespace-nowrap">
                  <p className="text-slate-400 mb-4"><span className="text-purple-400">import</span> {'{'} <span className="text-blue-400">Innovation</span>, <span className="text-blue-400">Quality</span> {'}'} <span className="text-purple-400">from</span> <span className="text-emerald-400">'@codenext/core'</span>;</p>

                  <p className="text-slate-400"><span className="text-purple-400">const</span> <span className="text-blue-400">BuildFuture</span> = () <span className="text-purple-400">=&gt;</span> {'{'}</p>
                  <p className="text-slate-400 ml-4"><span className="text-purple-400">return</span> (</p>
                  <p className="text-slate-400 ml-8">&lt;<span className="text-rose-400">DigitalTransformation</span>&gt;</p>

                  <p className="text-slate-400 ml-12">&lt;<span className="text-rose-400">Innovation</span> <span className="text-amber-400">level</span>=<span className="text-emerald-400">"maximum"</span> /&gt;</p>
                  <p className="text-slate-400 ml-12 flex items-center relative">
                    &lt;<span className="text-rose-400">Quality</span> <span className="text-amber-400">assurance</span>=<span className="text-emerald-400">"100%"</span> /&gt;
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-2 h-4 bg-brand-accent ml-1 inline-block"
                    />
                  </p>

                  <p className="text-slate-400 ml-8">&lt;/<span className="text-rose-400">DigitalTransformation</span>&gt;</p>
                  <p className="text-slate-400 ml-4">);</p>
                  <p className="text-slate-400 mb-4">{'}'};</p>

                  <p className="text-slate-400"><span className="text-purple-400">export default</span> <span className="text-blue-400">BuildFuture</span>;</p>
                </div>
              </div>

              {/* Right: Deployment & Performance Dashboard */}
              <div className="lg:col-span-2 bg-white/[0.02] border-t lg:border-t-0 lg:border-l border-white/5 p-8 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

                <h3 className="text-white text-xl font-bold mb-6 flex items-center relative z-10">
                  <Zap className="w-5 h-5 text-emerald-400 mr-3" /> Production Build
                </h3>

                <div className="flex flex-col gap-4 relative z-10">
                  {/* Deployment Status */}
                  <div className="bg-black/40 rounded-2xl p-5 border border-white/5 backdrop-blur-md hover:border-emerald-500/30 transition-colors">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Status</p>
                      <span className="flex items-center text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                        Deployed
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                        <span className="text-slate-500 font-medium">Environment</span>
                        <span className="text-white font-mono text-xs bg-white/5 px-2 py-0.5 rounded">Production</span>
                      </div>
                      <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                        <span className="text-slate-500 font-medium">Branch</span>
                        <span className="text-brand-accent font-mono text-xs bg-brand-accent/10 px-2 py-0.5 rounded">main</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">Build Time</span>
                        <span className="text-white font-mono text-xs">1.2s</span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Score */}
                  <div className="bg-black/40 rounded-2xl p-5 border border-white/5 backdrop-blur-md flex items-center justify-between hover:border-white/10 transition-colors">
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-1 font-bold">Lighthouse</p>
                      <p className="text-white font-bold text-sm">Optimization</p>
                    </div>
                    <div className="flex space-x-3">
                      {/* Score Circle 1 */}
                      <div className="w-10 h-10 relative flex items-center justify-center">
                        <svg className="w-full h-full absolute top-0 left-0 transform -rotate-90" viewBox="0 0 36 36">
                          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                          <motion.path
                            initial={{ strokeDasharray: "0, 100" }}
                            whileInView={{ strokeDasharray: "99, 100" }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none" stroke="#10b981" strokeWidth="3"
                          />
                        </svg>
                        <span className="text-emerald-400 text-[10px] font-bold">99</span>
                      </div>
                      {/* Score Circle 2 */}
                      <div className="w-10 h-10 relative flex items-center justify-center">
                        <svg className="w-full h-full absolute top-0 left-0 transform -rotate-90" viewBox="0 0 36 36">
                          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                          <motion.path
                            initial={{ strokeDasharray: "0, 100" }}
                            whileInView={{ strokeDasharray: "100, 100" }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none" stroke="#10b981" strokeWidth="3"
                          />
                        </svg>
                        <span className="text-emerald-400 text-[10px] font-bold">100</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
