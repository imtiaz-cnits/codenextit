"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: "Johnathan Smith",
    role: "Founder @ ThemesJet",
    content: "CodeNext IT transformed our vision into a world-class marketplace. Their expertise in Next.js is unmatched.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    name: "Sarah Chen",
    role: "Ops Manager @ Montreal Moving",
    content: "The automated booking system they built for us has been a game-changer. It reduced our manual workload by 60%.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "Robert Wilson",
    role: "CTO @ SPS Foods",
    content: "Managing inventory across multiple warehouses used to be a nightmare. CodeNext IT delivered a custom ERP solution.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"
  },
  {
    name: "Michael Bay",
    role: "CEO @ AKA Logistics",
    content: "The fleet management system they built is a game-changer. Communication is now seamless.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    name: "Emma Watson",
    role: "Marketing Lead @ Ultrasound Source",
    content: "Their data-driven marketing approach helped us scale our business globally in just 6 months.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
  },
  {
    name: "David Goggins",
    role: "Director @ Relo-World",
    content: "Professional, efficient, and innovative. They handle complex tasks with ease.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  }
];

const ReviewCard = ({ review }: { review: any }) => (
  <div className="w-[380px] p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:border-brand-accent/40 transition-all duration-500 mx-3 shrink-0 group relative overflow-hidden hover:-translate-y-1">
    {/* Animated Background Glow for Light Mode */}
    <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:hidden" />

    {/* Gradient Background for Dark Mode Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-brand-accent to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block" />

    {/* Floating Quote Icon on Hover */}
    <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-10 group-hover:top-4 group-hover:right-6 transition-all duration-700">
      <Quote className="w-20 h-20 text-brand-accent dark:group-hover:text-white" />
    </div>

    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6 italic relative z-10 group-hover:text-brand-primary dark:group-hover:text-white transition-colors duration-500">
      "{review.content}"
    </p>

    <div className="flex items-center space-x-4 relative z-10">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 group-hover:border-brand-accent/50 dark:group-hover:border-white/50 transition-all duration-500">
        <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-black text-brand-primary dark:text-white text-xs group-hover:text-brand-accent dark:group-hover:text-white transition-colors duration-500">{review.name}</h4>
        <p className="text-brand-accent dark:group-hover:text-white/80 text-[9px] font-black uppercase tracking-widest mt-0.5 transition-colors duration-500">{review.role}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black text-brand-accent tracking-[0.3em] uppercase mb-6"
          >
            Success Stories
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-brand-primary dark:text-white leading-[1.1] tracking-tight"
          >
            Stories of Innovation, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-400">Trust & Global Success.</span>
          </motion.h3>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        {/* Row 1: Left Moving */}
        <div className="flex overflow-hidden py-4">
          <motion.div
            animate={{ x: [0, -2200] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear"
            }}
            className="flex hover:[animation-play-state:paused] cursor-pointer"
          >
            {[...reviews, ...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right Moving */}
        <div className="flex overflow-hidden py-4">
          <motion.div
            animate={{ x: [-2200, 0] }}
            transition={{
              repeat: Infinity,
              duration: 45,
              ease: "linear"
            }}
            className="flex hover:[animation-play-state:paused] cursor-pointer"
          >
            {[...reviews, ...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Side Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
