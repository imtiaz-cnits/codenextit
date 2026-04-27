"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "How long does a development project take?",
      answer: "We understand that each project is unique. Usually, our process takes a few weeks to a couple of months, depending on the project's complexity and scope. We begin with thorough research and planning, followed by agile development iterations and client feedback sessions."
    },
    {
      question: "Is CodeNext IT a start-up-friendly agency?",
      answer: "Absolutely. We understand the unique challenges start-ups face and offer affordable, scalable, and flexible software solutions that fit your budget and needs. Our team is committed to helping your start-up build a robust digital presence from the ground up."
    },
    {
      question: "What technologies and tools do you use?",
      answer: "We use industry-leading tech stacks. For robust web applications, we swear by MERN (MongoDB, Express, React, Node), Next.js, and Laravel. For pixel-perfect design, we use Figma and Adobe Suite. We ensure your product is built on modern, secure, and highly scalable technologies."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we believe in building long-term partnerships. After launching your product, we offer continuous support, server maintenance, performance monitoring, and feature updates to ensure your platform runs smoothly at all times."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-6 bg-white dark:bg-slate-950 mb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-black text-brand-accent tracking-[0.3em] uppercase mb-4">Got Questions?</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white leading-tight">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span className="text-lg font-bold text-brand-primary dark:text-white pr-8 group-hover:text-brand-accent transition-colors">
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-brand-accent text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-300 dark:group-hover:bg-slate-700'}`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
