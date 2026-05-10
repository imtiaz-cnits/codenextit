"use client";
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: 'Themes Jet',
      category: 'Premium Digital Marketplace for Web Templates & Assets',
      image: '/images/Themes Jet.png',
      tags: ['React', 'Marketplace'],
      slug: 'themes-jet'
    },
    {
      title: 'The Ultrasound Source',
      category: 'Medical Equipment E-Commerce',
      image: '/images/The Ultrasound Source.png',
      tags: ['E-Commerce', 'Healthcare'],
      slug: 'the-ultrasound-source'
    },
    {
      title: 'Montreal Moving',
      category: 'Moving & Relocation Services',
      image: '/images/Montreal Moving.png',
      tags: ['Business', 'Booking'],
      slug: 'montreal-moving'
    },
    {
      title: 'AKA Moving',
      category: 'Logistics & Transportation Services',
      image: '/images/AKA Moving.png',
      tags: ['Corporate', 'Logistics'],
      slug: 'aka-moving'
    },
    {
      title: 'SPS Foods',
      category: 'Food Distribution Network',
      image: '/images/SPS Foods.png',
      tags: ['FMCG', 'Web App'],
      slug: 'sps-foods'
    },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-8">
          <div>
            <p className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-4">Our Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-black text-brand-primary dark:text-white">
              Crafting Digital <br className="hidden md:block" /> Success Stories.
            </h2>
          </div>
          <div className="flex w-full md:w-auto justify-start md:justify-end gap-4">
            <button className="text-brand-primary dark:text-white font-bold hover:text-brand-accent transition-colors flex items-center group">
              View all work
              <motion.span className="ml-2 inline-block">
                <ExternalLink className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/portfolio/${project.slug}`} className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6 bg-brand-surface dark:bg-slate-800/20 border border-brand-border dark:border-slate-800/50">
                  <img
                    src={project.image}
                    alt={`Case study showing ${project.title} - ${project.category}. Professional web development project by CodeNext IT.`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="text-white">
                      <p className="text-sm font-medium mb-1 opacity-80">{project.category}</p>
                      <p className="text-2xl font-bold">{project.title}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-primary dark:text-white mb-2 group-hover:text-brand-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">{project.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
