"use client";
import { motion } from 'motion/react';
import { BookOpen, Award, Users, ArrowRight } from 'lucide-react';

export default function Training() {
  const courses = [
    {
      title: 'Web Development',
      level: 'Professional',
      icon: BookOpen,
    },
    {
      title: 'App Design',
      level: 'Advanced',
      icon: Award,
    },
    {
      title: 'Networking & Security',
      level: 'Enterprise',
      icon: Users,
    },
  ];

  return (
    <section id="training" className="py-24 bg-brand-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/10 -skew-x-12 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-4">Academy</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Bridge Your Skill Gap with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-400 transition-colors cursor-default italic underline decoration-white/20">Professional</span> Training.
            </h3>
            <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-xl">
              You are always welcome to gather service from us or learn new skills with CodeNext IT. Our mentors are industry veterans dedicated to your growth.
            </p>
            <button className="flex items-center space-x-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 text-brand-primary dark:text-white flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowRight className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold uppercase tracking-widest border-b-2 border-white/20 group-hover:border-brand-accent transition-colors">Browse Courses</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 glass-dark rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <course.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{course.title}</h4>
                    <p className="text-white/40 text-sm uppercase tracking-widest mt-1">{course.level} TRACK</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
