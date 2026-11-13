"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchPortfolios } from '@/app/actions';
import { ProjectDetail } from '@/lib/db';

const categories = [
  { label: 'All Projects', value: 'All' },
  { label: 'Web Development', value: 'Web Development' },
  { label: 'Custom Software', value: 'Management Softwares' },
  { label: 'UI/UX Design', value: 'UI/UX Design' },
  { label: 'Mobile Apps', value: 'App Development' },
];

export default function PortfolioGrid() {
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetchPortfolios().then(data => setProjects(data));
  }, []);

  const filteredProjects = projects.filter(project =>
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Category Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-primary dark:text-white tracking-tight">
            Browse Projects by Category
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${activeCategory === cat.value
                ? 'bg-brand-primary text-white dark:bg-brand-accent dark:text-white shadow-xl shadow-brand-primary/20 dark:shadow-brand-accent/20 scale-105'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Use customized imageAlt from database if available, otherwise fallback to rich dynamic SEO suggest
              const altText = project.imageAlt && project.imageAlt.trim() !== ''
                ? project.imageAlt
                : project.category === 'Web Development'
                ? `Professional Web Development and Custom Website Design for ${project.title} | CodeNext IT`
                : project.category === 'Management Softwares'
                ? `Enterprise Management Software and Custom ERP System for ${project.title} | CodeNext IT`
                : project.category === 'UI/UX Design'
                ? `Modern UI/UX Product Design and Wireframing for ${project.title} | CodeNext IT`
                : project.category === 'App Development'
                ? `High-Performance Mobile App Development for ${project.title} | CodeNext IT`
                : `${project.category} and Digital Solution for ${project.title} | CodeNext IT`;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.slug}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] mb-6 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <Image
                      src={project.mainImage}
                      alt={altText}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                      loading={index < 2 ? undefined : "lazy"}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <motion.div
                      className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col gap-2"
                    >
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center space-x-2 bg-white text-brand-primary px-5 py-2.5 rounded-full text-sm font-bold transition-colors border border-white/10 mb-2 w-max hover:bg-brand-accent hover:text-white"
                      >
                        <span>View Case Study</span>
                      </Link>

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-bold transition-colors border border-white/10 w-max"
                        >
                          <span>View Live Project</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </motion.div>
                  </div>
                </div>

                <Link href={`/portfolio/${project.slug}`} className="block">
                  <div className="space-y-4 px-2">
                    <div className="space-y-1">
                      <h4 className="text-2xl font-black text-brand-primary dark:text-white group-hover:text-brand-accent transition-colors leading-tight">{project.title}</h4>
                      <p className="text-brand-accent text-xs font-bold uppercase tracking-widest">{project.category}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-50 dark:bg-slate-900 rounded-full text-xs font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
