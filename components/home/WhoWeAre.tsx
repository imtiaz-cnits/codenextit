"use client";
import { motion } from 'motion/react';
import { Target, Lightbulb, ShieldCheck, Zap } from 'lucide-react';

export default function WhoWeAre() {
  const points = [
    { text: 'Business Growth Focused', icon: Target },
    { text: 'Pixel-Perfect Precision', icon: Lightbulb },
    { text: 'Premium Service Quality', icon: ShieldCheck },
    { text: 'Trusted by 350+ Brands', icon: Zap },
  ];

  return (
    <section id="about" className="py-16 md:py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 dark:bg-slate-950 -z-10 rounded-l-[100px] opacity-50" />
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

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
            </div>

            {/* Glass Overlay Card - Moved outside overflow-hidden to prevent clipping */}
            <div className="relative md:absolute bottom-0 md:bottom-8 left-0 md:left-10 md:right-10 p-5 md:p-6 glass rounded-3xl -mt-12 md:mt-0 mx-6 md:mx-0 z-20 shadow-2xl border border-white/10">
              <p className="text-xl md:text-2xl font-black text-brand-primary dark:text-white leading-tight mb-2">
                Expert Tech Professionals
              </p>
              <p className="text-slate-600 dark:text-slate-400 font-medium text-xs md:text-sm">
                We bring together top industry talents to build seamless and innovative digital experiences for your business.
              </p>
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
              <p className="text-[12px] font-black text-brand-accent tracking-[0.3em] uppercase mb-4 flex items-center">
                <span className="w-12 h-[2px] bg-brand-accent mr-4" />
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-brand-primary dark:text-white leading-[1.1] mb-4">
                Empowering Bangladesh with <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-400">Custom IT & Web Solutions</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-md leading-relaxed font-medium">
                Codenext IT is a dedicated technology agency focused on helping businesses grow in the digital space. We specialize in robust web development, intuitive UI/UX design, and secure networking solutions. Our team pays close attention to every detail, ensuring we deliver high-quality, scalable digital products that bring real value to your brand.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
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
