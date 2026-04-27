"use client";
import { motion } from 'motion/react';
import { Target, Lightbulb, ShieldCheck, Zap } from 'lucide-react';

export default function WhoWeAre() {
  const points = [
    { text: 'Help Growing Your Business', icon: Target },
    { text: 'Attentive to Detail', icon: Lightbulb },
    { text: 'Delivering High Quality', icon: ShieldCheck },
    { text: 'Trusted by 20+ Clients', icon: Zap },
  ];

  return (
    <section id="about" className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 dark:bg-slate-950 -z-10 rounded-l-[100px] opacity-50" />
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Column: Image / Abstract Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[5/5] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 group">
              <img
                src="/images/codenext-team.jpg"
                alt="CodeNext IT Team Celebrating"
                className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent" />

              {/* Glass Overlay Card */}
              <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-3xl">
                <h4 className="text-2xl font-black text-brand-primary dark:text-white leading-tight mb-2">
                  Power of Team Work
                </h4>
                <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                  We bring together diverse tech talents to build exceptional digital experiences.
                </p>
              </div>
            </div>
            {/* Dot Pattern Block */}
            <div className="absolute -top-10 -left-10 w-40 h-40 grid-pattern opacity-30 -z-10" />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <h2 className="text-[11px] font-black text-brand-accent tracking-[0.3em] uppercase mb-6 flex items-center">
                <span className="w-12 h-[2px] bg-brand-accent mr-4" />
                Who We Are
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-primary dark:text-white leading-[1.1] mb-4">
                We Believe in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-400">Technology</span> & Innovation.
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-md leading-relaxed font-medium">
                Join with us by opening new doors of possibilities in different sectors of IT like Development, Design, and Networking. We are attentive to detail and dedicated to delivering high quality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/50 hover:border-brand-accent/30 dark:hover:border-brand-accent/50 transition-colors">
                  <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl shadow-sm flex items-center justify-center text-brand-accent flex-shrink-0">
                    <point.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-brand-primary dark:text-white leading-snug">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
