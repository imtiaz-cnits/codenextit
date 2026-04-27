"use client";
import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 300);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[60] p-3 md:p-3 cursor-pointer bg-brand-accent hover:bg-blue-600 text-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,98,255,0.5)] focus:outline-none group overflow-hidden flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
