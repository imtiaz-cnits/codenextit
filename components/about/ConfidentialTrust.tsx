"use client";
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Award, FileText } from 'lucide-react';

export default function ConfidentialTrust() {
  const documents = [
    { name: 'ABC Computers Agreement', image: '/images/confidentials/ABC Computers Agreement.png' },
    { name: 'Holy Child School', image: '/images/confidentials/Holy Child School Agreement.png' },
    { name: 'Mazeda Enterprise', image: '/images/confidentials/Mazeda Enterprise Agreement.png' },
    { name: 'Polash Cadet School', image: '/images/confidentials/Polash Cadet School Agreement.png' },
    { name: 'Banolata Delivery', image: '/images/confidentials/banolata-delivery.png' },
    { name: 'YWCA Delivery Proof', image: '/images/confidentials/ywca-delivery.png' },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-8 text-center md:text-left">
        <div className="max-w-2xl">
          <h2 className="text-[11px] font-black text-brand-accent tracking-[0.3em] uppercase mb-4">Official Proof</h2>
          <h3 className="text-4xl md:text-6xl font-black text-brand-primary dark:text-white leading-tight">
            Solid Proof of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500">Every Commitment</span>
          </h3>
        </div>
        <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm">
          We don&apos;t just work on trust; we secure it with formal documentation and verified results for every partner.
        </p>
      </div>

      {/* Document Infinite Marquee */}
      <div className="relative flex overflow-hidden py-10 select-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex space-x-8 min-w-full px-4"
        >
          {[...documents, ...documents, ...documents].map((doc, idx) => (
            <div key={idx} className="relative group flex-shrink-0 mb-10 w-[280px] md:w-[450px] aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Heavy Bottom Gradient for maximum text visibility */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-500" />
              
              <div className="absolute bottom-8 left-8 right-8 text-left z-20">
                <p className="text-white font-black text-lg md:text-2xl line-clamp-1 drop-shadow-2xl mb-3">
                  {doc.name}
                </p>
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-brand-accent to-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Verified Agreement</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
