"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react';

function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Extract numbers and non-numeric parts (like +)
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { label: 'Years in the IT Industry', value: '5+' },
    { label: 'Successful Projects', value: '450+' },
    { label: 'Local & Global Clients', value: '350+' },
    { label: 'Server Deployments', value: '150+' },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-brand-primary text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-300">
      {/* Decorative matrix-like background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-slate-900/20 dark:border-white/20 h-24 transition-colors duration-300" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-400 pb-2">
                <Counter value={stat.value} />
              </p>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-white/60 transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
