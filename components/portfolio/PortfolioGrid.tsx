"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Themes Jet',
    category: 'Web Development',
    image: '/images/Themes Jet.png',
    tags: ['React', 'Next.js', 'Marketplace'],
    link: 'https://themesjet.com'
  },
  {
    id: 2,
    title: 'The Ultrasound Source',
    category: 'E-Commerce',
    image: '/images/The Ultrasound Source.png',
    tags: ['Shopify', 'Healthcare', 'UI/UX'],
    link: '#'
  },
  {
    id: 3,
    title: 'Montreal Moving',
    category: 'Web Development',
    image: '/images/Montreal Moving.png',
    tags: ['Business', 'Booking System'],
    link: '#'
  },
  {
    id: 4,
    title: 'AKA Moving',
    category: 'Web Development',
    image: '/images/AKA Moving.png',
    tags: ['Corporate', 'Logistics'],
    link: '#'
  },
  {
    id: 5,
    title: 'SPS Foods',
    category: 'Web Development',
    image: '/images/SPS Foods.png',
    tags: ['FMCG', 'Web App'],
    link: '#'
  },
  // Added placeholders to make the portfolio look full and impressive
  {
    id: 6,
    title: 'HealthHub Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['Dashboard', 'Medical'],
    link: '#'
  },
  {
    id: 7,
    title: 'Crypto Wallet App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1616077168079-7e0b5ce53bc8?q=80&w=2070&auto=format&fit=crop',
    tags: ['iOS', 'Fintech', 'React Native'],
    link: '#'
  },
  {
    id: 8,
    title: 'EduTech Platform',
    category: 'Management Softwares',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop',
    tags: ['ERP', 'Education', 'Vue.js'],
    link: '#'
  }
];

const categories = ['All', 'Web Development', 'E-Commerce', 'UI/UX Design', 'App Development', 'Management Softwares'];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-brand-primary text-white dark:bg-brand-accent dark:text-white shadow-xl shadow-brand-primary/20 dark:shadow-brand-accent/20 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] mb-6 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <motion.div 
                      className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-bold transition-colors border border-white/10 mb-4 w-max">
                        <span>View Live Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </motion.div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
                  <div>
                    <h4 className="text-2xl font-black text-brand-primary dark:text-white mb-2 group-hover:text-brand-accent transition-colors">{project.title}</h4>
                    <p className="text-brand-accent text-sm font-bold uppercase tracking-widest">{project.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-50 dark:bg-slate-900 rounded-full text-xs font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
