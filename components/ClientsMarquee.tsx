"use client";
import { motion } from 'motion/react';

export default function ClientsMarquee({ className = "", hideTitle = false }: { className?: string, hideTitle?: boolean }) {
  const clients = [
    '/images/client-logos/ahcargo.svg',
    '/images/client-logos/aka-moving.svg',
    '/images/client-logos/btc.svg',
    '/images/client-logos/extent-tech.svg',
    '/images/client-logos/hexazn.svg',
    '/images/client-logos/holy-child-school.svg',
    '/images/client-logos/hostorient.svg',
    '/images/client-logos/montreal-moving.svg',
    '/images/client-logos/refab.svg',
    '/images/client-logos/rofezan-nesa-madrasha.svg',
    '/images/client-logos/ss-music-college.svg',
    '/images/client-logos/themesjet.svg',
    '/images/client-logos/theultrasound_source.svg',
    '/images/client-logos/traders-sme.svg',
    '/images/client-logos/wp-orient.svg',
  ];

  return (
    <div className={`w-full overflow-hidden flex flex-col items-center py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-white/5 ${className}`}>
      {!hideTitle && (
        <div className="text-center mb-10 w-full max-w-7xl mx-auto px-4">
          <h2 className="text-[11px] font-black text-brand-accent tracking-[0.3em] uppercase mb-3">Our Network</h2>
          <h3 className="text-2xl md:text-4xl font-black text-brand-primary dark:text-white">Trusted by 120+ Clients</h3>
        </div>
      )}
      <div 
        className="relative w-full max-w-7xl mx-auto overflow-hidden flex items-center py-4"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 80, repeat: Infinity }}
          className="flex items-center gap-16 md:gap-20 w-max shrink-0"
        >
          {/* Duplicate the array to create a seamless infinite loop */}
          {[...clients, ...clients].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="Client Logo"
              className="p-2 md:p-3 rounded-2xl max-h-12 md:max-h-14 max-w-[140px] md:max-w-[160px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 dark:invert dark:hover:invert-0 dark:hover:bg-slate-50"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
