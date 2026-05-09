"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  User, 
  Tag, 
  ChevronRight,
  Send,
  Settings
} from 'lucide-react';
import { portfolioProjects } from '@/lib/portfolioData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollToTop from '@/components/ScrollToTop';
import { useModal } from '@/components/ModalContext';

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const router = useRouter();
  const { openBookingModal } = useModal();
  
  const project = portfolioProjects[slug as string];

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
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-4 mb-8"
            >
              <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-[10px]">
                {project.category}
              </span>
              <div className="w-12 h-[1px] bg-slate-200 dark:bg-white/10" />
              <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                Project Case Study / {project.year}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-brand-primary dark:text-white mb-10 leading-[0.95] tracking-tighter"
            >
              {project.title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl"
            >
              {project.overview}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Showcase Image */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 dark:bg-white/5 border border-slate-100 dark:border-white/5"
        >
          <img 
            src={project.mainImage} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Project Meta Bar */}
      <section className="py-16 border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-4">Client</p>
              <p className="text-xl font-black text-brand-primary dark:text-white">{project.client}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-4">Timeline</p>
              <p className="text-xl font-black text-brand-primary dark:text-white">3 Months</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-4">Role</p>
              <p className="text-xl font-black text-brand-primary dark:text-white">Design & Dev</p>
            </div>
            <div className="flex flex-col items-start md:items-end">
              {project.liveLink && (
                <a 
                  href={project.liveLink}
                  target="_blank"
                  className="group flex items-center text-brand-primary dark:text-white font-black uppercase tracking-widest text-[10px] bg-slate-50 dark:bg-white/5 px-6 py-3 rounded-full hover:bg-brand-accent hover:text-brand-primary transition-all"
                >
                  Visit Website <ExternalLink className="ml-2 w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Briefing */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
               <h2 className="text-3xl font-black text-brand-primary dark:text-white leading-tight">
                 The Story <br /> 
                 <span className="text-brand-accent">& Ambition.</span>
               </h2>
            </div>
            <div className="lg:col-span-8">
               <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-[1.8]">
                 {project.overview} {project.challenge}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-32 bg-slate-50 dark:bg-white/2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                 <h2 className="text-[10px] font-black text-brand-accent tracking-[0.3em] uppercase mb-6">Core Functionality</h2>
                 <h3 className="text-4xl md:text-6xl font-black text-brand-primary dark:text-white leading-[1.1] tracking-tighter">
                   Delivering a <br /> Seamless Experience.
                 </h3>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-12 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:border-brand-accent/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-black text-brand-primary dark:text-white mb-4">{feature.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Tech Stack & Results */}
      <section className="py-32">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
               <div>
                  <h3 className="text-[10px] font-black text-brand-accent tracking-[0.3em] uppercase mb-10">Technology Used</h3>
                  <div className="flex flex-wrap gap-4">
                     {project.techStack.map((tech, idx) => (
                       <div key={idx} className="flex items-center space-x-3 px-6 py-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10">
                         <tech.icon className="w-5 h-5 text-brand-accent" />
                         <span className="text-base font-bold text-slate-700 dark:text-slate-300">{tech.name}</span>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-12">
                  {project.results.map((stat, idx) => (
                    <div key={idx}>
                      <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-4">{stat.label}</p>
                      <p className="text-4xl md:text-5xl font-black text-brand-primary dark:text-white tracking-tighter">{stat.value}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 border-t border-slate-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-4xl md:text-7xl font-black text-brand-primary dark:text-white mb-12 tracking-tighter leading-none">
             Ready to scale <br /> your next big idea?
           </h2>
           <button 
             onClick={openBookingModal}
             className="px-12 py-6 bg-brand-primary dark:bg-white text-white dark:text-brand-primary rounded-full font-black uppercase tracking-widest text-sm hover:bg-brand-accent hover:text-brand-primary transition-all shadow-2xl hover:-translate-y-1"
           >
             Book a Meeting
           </button>
        </div>
      </section>

      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </div>
  );
}
