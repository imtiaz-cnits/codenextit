"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { 
  ArrowLeft,
  ArrowRight,
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  User, 
  Tag, 
  ChevronRight,
  Send,
  Settings,
  HelpCircle
} from 'lucide-react';
import * as Lucide from 'lucide-react';
import { fetchPortfolios } from '@/app/actions';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollToTop from '@/components/ScrollToTop';
import { useModal } from '@/components/ModalContext';

function getIconComponent(icon: any) {
  if (typeof icon === 'string') {
    const IconComp = (Lucide as any)[icon];
    return IconComp || HelpCircle;
  }
  return icon || HelpCircle;
}

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const router = useRouter();
  const { openBookingModal } = useModal();
  
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const trailSpringConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const trailMouseX = useSpring(mouseX, trailSpringConfig);
  const trailMouseY = useSpring(mouseY, trailSpringConfig);

  useEffect(() => {
    fetchPortfolios().then(data => {
      const found = data.find(p => p.slug === slug);
      setProject(found || null);
      setLoading(false);
    });
  }, [slug]);

  useEffect(() => {
    if (loading || !project) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [loading, project, mouseX, mouseY]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-400 text-sm font-mono tracking-widest">LOADING CASE STUDY...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-4xl font-black text-brand-primary dark:text-white mb-4">Project Not Found</h1>
          <button 
            onClick={() => router.push('/#portfolio')}
            className="text-brand-accent font-bold flex items-center justify-center mx-auto hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-brand-accent selection:text-brand-primary">
      <Navbar />

      {/* Custom Trailing Cursor Dot */}
      <motion.div
        className="fixed top-[-8px] left-[-8px] w-4 h-4 bg-brand-accent rounded-full pointer-events-none z-50 mix-blend-multiply dark:mix-blend-screen hidden md:block"
        style={{
          x: trailMouseX,
          y: trailMouseY,
        }}
      />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
        <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[20%] w-[50%] h-[60%] bg-brand-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[50%] bg-indigo-500/20 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-20 dark:opacity-[0.15] pointer-events-none mix-blend-overlay" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center space-x-3 px-5 py-2 rounded-2xl bg-slate-100/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/60 dark:border-white/10 mb-8 shadow-2xl shadow-brand-accent/5 group hover:border-brand-accent/30 transition-all duration-300"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-accent blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-black text-brand-primary dark:text-white/90 uppercase tracking-[0.2em] leading-none">
                {project.category} / {project.year}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-brand-primary dark:text-white mb-8 leading-[1.1] text-balance"
            >
              {project.title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base md:text-[17px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-5xl"
            >
              {project.overview}
            </motion.p>

            {project.tags && project.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-wrap items-center gap-2.5 mt-8"
              >
                {project.tags.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 shadow-sm"
                  >
                    <Tag className="w-3 h-3 text-brand-accent" />
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none z-10" />
      </section>

      {/* Main Showcase Image */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto relative z-20 -mt-16 md:-mt-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 p-2 md:p-3 hover:scale-[1.01] transition-transform duration-500"
        >
          <img 
            src={project.mainImage} 
            alt={project.title}
            className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2.5rem]"
          />
        </motion.div>
      </section>

      {/* Project Meta Bar */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center bg-slate-50/80 dark:bg-slate-900/60 p-8 md:p-12 rounded-[2.5rem] border border-slate-200/50 dark:border-slate-800/40 backdrop-blur-xl">
            <div>
              <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-4">Client</p>
              <p className="text-xl font-bold text-brand-primary dark:text-white break-words">{project.client}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-4">Timeline</p>
              <p className="text-xl font-bold text-brand-primary dark:text-white">{project.year && (project.year.toLowerCase().includes('month') || project.year.toLowerCase().includes('week') || project.year.toLowerCase().includes('year')) ? project.year : '3 Months'}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-4">Role</p>
              <p className="text-xl font-bold text-brand-primary dark:text-white">Design & Dev</p>
            </div>
            <div className="flex flex-col items-start md:items-end col-span-2 md:col-span-1 mt-4 md:mt-0">
              {project.liveLink && (
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-white bg-brand-accent px-6 py-3.5 rounded-xl hover:bg-brand-primary dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-brand-accent/20 font-bold"
                >
                  Visit Website <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Briefing */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 p-10 md:p-16 bg-slate-50/50 dark:bg-slate-900/30 rounded-[2.5rem] border border-slate-200/50 dark:border-white/5 relative overflow-hidden backdrop-blur-sm shadow-sm">
            {/* Accent side glow line */}
            <div className="absolute left-0 top-0 w-2 h-full bg-brand-accent" />
            <div className="lg:col-span-4 pl-4">
               <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary dark:text-white leading-tight">
                 The Story <br /> 
                 <span className="text-brand-accent">& Ambition.</span>
               </h2>
            </div>
            <div className="lg:col-span-8">
               <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-[1.8]">
                 {project.overview} {project.challenge}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      {project.features && project.features.length > 0 && (
        <section className="py-32 bg-slate-50/50 dark:bg-[#0a0a0a]/30 overflow-hidden border-y border-slate-200/50 dark:border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center md:text-left mb-20">
                <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Core Functionality</h2>
                <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-6">
                  Delivering a <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500">Seamless Experience</span>
                </h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.features.map((feature: any, idx: number) => {
                  const Icon = getIconComponent(feature.icon);
                  const isLastOdd = idx === project.features.length - 1 && project.features.length % 2 !== 0;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 hover:shadow-2xl hover:shadow-brand-accent/5 hover:-translate-y-1 transition-all group relative overflow-hidden ${isLastOdd ? 'md:col-span-2' : ''}`}
                    >
                      <div className="w-16 h-16 rounded-[1.25rem] bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h4 className="text-2xl font-black text-brand-primary dark:text-white mb-4">{feature.title}</h4>
                      <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {feature.desc}
                      </p>
                    </motion.div>
                  );
                })}
             </div>
          </div>
        </section>
      )}

      {/* Tech Stack & Results */}
      <section className="py-32 relative overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-white/5">
         {/* Soft background glow */}
         <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-brand-accent/10 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
               <div>
                  <h3 className="text-[10px] font-black text-brand-accent tracking-[0.3em] uppercase mb-10">Technology Used</h3>
                  <div className="flex flex-wrap gap-4">
                     {project.techStack && project.techStack.map((tech: any, idx: number) => {
                       const Icon = getIconComponent(tech.icon);
                       return (
                         <div key={idx} className="flex items-center space-x-3 px-6 py-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-brand-accent/30 dark:hover:border-brand-accent/50 hover:shadow-xl hover:shadow-brand-accent/5 transition-all group duration-300">
                           <Icon className="w-5 h-5 text-brand-accent" />
                           <span className="text-sm md:text-base font-bold text-slate-900 dark:text-slate-300 group-hover:text-brand-accent transition-colors">{tech.name}</span>
                         </div>
                       );
                     })}
                  </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-8 md:gap-12">
                  {project.results && project.results.map((stat: any, idx: number) => (
                    <div key={idx} className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-brand-accent/30 dark:hover:border-brand-accent/50 hover:shadow-xl hover:shadow-brand-accent/5 transition-all group duration-300">
                      <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-3">{stat.label}</p>
                      <p className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-primary dark:text-white tracking-tighter leading-none">{stat.value}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 border-t border-slate-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-brand-primary dark:text-white mb-6 leading-[1.1] tracking-tight">
             Ready to scale <br /> your next big idea?
           </h2>
           <p className="text-slate-500 dark:text-slate-400 text-[16px] mb-8 max-w-lg font-medium mx-auto">
             Transform your business ideas into scalable digital products with professional software & web development services.
           </p>
           <button
             onClick={openBookingModal}
             className="bg-brand-accent text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center hover:bg-brand-primary dark:hover:bg-white dark:hover:text-black transition-all group shadow-lg shadow-brand-accent/20 mx-auto cursor-pointer"
           >
             Book a Meeting
             <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
           </button>
        </div>
      </section>

      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </div>
  );
}
