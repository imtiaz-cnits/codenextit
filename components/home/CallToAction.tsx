"use client";
import { motion } from 'motion/react';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { useModal } from '../ModalContext';

export default function CallToAction() {
  const { openBookingModal } = useModal();
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-900">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-50 dark:bg-[#0a0a0a] rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl border border-slate-200 dark:border-white/5 transition-colors duration-300">
          {/* Abstract Elements inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 dark:bg-brand-accent/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[80px]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6 shadow-sm dark:shadow-none"
              >
                <Sparkles className="w-4 h-4 text-brand-accent" />
                <span className="text-xs font-bold text-brand-primary dark:text-white uppercase tracking-widest">Let's Work Together</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-primary dark:text-white mb-6 leading-[1.1]"
              >
                Ready to transform your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500">digital presence?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 dark:text-slate-400 text-lg mb-8 max-w-lg font-medium"
              >
                Join successful companies who trust CodeNext IT for their web, app, and networking infrastructure needs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button 
                  onClick={openBookingModal}
                  className="bg-brand-accent text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center hover:bg-brand-primary dark:hover:bg-white dark:hover:text-black transition-all group shadow-lg shadow-brand-accent/20"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="tel:+88001788428280" className="bg-white dark:bg-white/5 text-brand-primary dark:text-white border border-slate-200 dark:border-white/10 px-8 py-4 rounded-2xl font-bold flex items-center justify-center hover:border-brand-accent dark:hover:bg-white/10 transition-all group shadow-sm dark:shadow-none">
                  <PhoneCall className="w-5 h-5 mr-2 text-brand-accent group-hover:scale-110 transition-transform" />
                  Call Us Now
                </a>
              </motion.div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none cursor-pointer group"
              >
                <div className="text-4xl font-black text-brand-primary dark:text-white mb-2 group-hover:text-brand-accent transition-colors">24/7</div>
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Expert Support</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                className="bg-brand-accent/10 border border-brand-accent/20 p-8 rounded-[2rem] translate-y-8 shadow-xl shadow-brand-accent/5 dark:shadow-none cursor-pointer group"
              >
                <div className="text-4xl font-black text-brand-accent mb-2 group-hover:scale-110 transition-transform origin-left">99%</div>
                <div className="text-sm font-semibold text-brand-primary dark:text-slate-400 uppercase tracking-wider">Client Retention</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 rounded-[2rem] -translate-y-8 shadow-xl shadow-slate-200/50 dark:shadow-none cursor-pointer group"
              >
                <div className="text-4xl font-black text-brand-primary dark:text-white mb-2 group-hover:text-blue-500 transition-colors">100+</div>
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Projects Done</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none cursor-pointer group"
              >
                <div className="text-4xl font-black text-emerald-500 mb-2 group-hover:scale-110 transition-transform origin-left">5.0</div>
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Star Rating</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
