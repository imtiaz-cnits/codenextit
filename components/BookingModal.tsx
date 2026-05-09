"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calendar,
  Mail,
  User,
  Building2,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  Globe,
  Plus,
  ChevronDown,
  Layout
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[24px] shadow-2xl border border-slate-100 dark:border-white/5 flex items-stretch overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-brand-primary dark:hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-5 h-full">
              {/* Left Side - Info (Hidden on small mobile) */}
              <div className="hidden md:flex md:col-span-2 bg-gradient-to-br from-brand-primary via-brand-primary to-blue-900 p-10 flex-col justify-between relative overflow-hidden text-white">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 shadow-xl">
                    <Calendar className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 leading-tight">Let's start your project!</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-8 font-medium">
                    Book a free consultation call with our experts and discuss your business goals.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:bg-brand-accent/20 transition-colors">
                        <Clock className="w-4 h-4 text-brand-accent" />
                      </div>
                      <span className="text-xs font-bold text-slate-200">15-30 Min Discovery Call</span>
                    </div>
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:bg-brand-accent/20 transition-colors">
                        <Globe className="w-4 h-4 text-brand-accent" />
                      </div>
                      <span className="text-xs font-bold text-slate-200">Global Zoom / Meet Support</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
                  <p className="text-[10px] uppercase font-black tracking-[0.2em] text-brand-accent mb-2">Powering Innovation</p>
                  <div className="flex items-center space-x-2 text-white font-black text-lg tracking-tight">
                    CodeNext IT
                  </div>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                  <div className="absolute top-[-20%] right-[-20%] w-64 h-64 rounded-full bg-brand-accent blur-[100px]" />
                  <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 rounded-full bg-cyan-500 blur-[80px]" />
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="col-span-1 md:col-span-3 p-8 md:p-10 bg-white dark:bg-slate-900 flex flex-col justify-center">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8"
                  >
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h4 className="text-2xl font-black text-brand-primary dark:text-white">Booking Received!</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                      Our team will reach out to you within <br /> 24 hours to confirm the schedule.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h4 className="text-2xl font-black text-brand-primary dark:text-white mb-2">Book a Meeting</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">We'll get back to you shortly.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-accent transition-colors" />
                          <input
                            required
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-brand-primary dark:text-white outline-none focus:border-brand-accent/50 focus:ring-4 focus:ring-brand-accent/5 transition-all"
                          />
                        </div>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-accent transition-colors" />
                          <input
                            required
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-brand-primary dark:text-white outline-none focus:border-brand-accent/50 focus:ring-4 focus:ring-brand-accent/5 transition-all"
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-accent transition-colors" />
                        <input
                          type="text"
                          placeholder="Company Name (Optional)"
                          className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-brand-primary dark:text-white outline-none focus:border-brand-accent/50 focus:ring-4 focus:ring-brand-accent/5 transition-all"
                        />
                      </div>

                      <div className="relative group" ref={dropdownRef}>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-accent transition-colors z-10 pointer-events-none">
                          <Layout className="w-4 h-4" />
                        </div>
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-left text-brand-primary dark:text-white outline-none focus:border-brand-accent/50 focus:ring-4 focus:ring-brand-accent/5 transition-all flex items-center justify-between"
                        >
                          <span className={selectedProject ? "text-brand-primary dark:text-white" : "text-slate-500"}>
                            {selectedProject || "Select Project Type"}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 5, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className="absolute top-full mt-2 left-0 right-0 z-50 bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/10 rounded-2xl shadow-2xl py-2 max-h-52 overflow-y-auto scrollbar-hide"
                            >
                              {[
                                "Web Development",
                                "Mobile App Development",
                                "Management Software",
                                "UI/UX Design",
                                "Digital Marketing",
                                "Hosting & VPS"
                              ].map((option) => (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => {
                                    setSelectedProject(option);
                                    setDropdownOpen(false);
                                  }}
                                  className="w-full px-4 py-2.5 text-left text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-brand-accent transition-colors flex items-center space-x-3"
                                >
                                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ml-7 ${selectedProject === option ? 'bg-brand-accent scale-125' : 'bg-slate-300 dark:bg-slate-600'}`} />
                                  <span className={selectedProject === option ? "font-bold text-brand-accent" : "font-medium"}>{option}</span>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="relative group">
                        <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400 group-focus-within:text-brand-accent transition-colors" />
                        <textarea
                          rows={3}
                          placeholder="Briefly describe your project..."
                          className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-brand-primary dark:text-white outline-none focus:border-brand-accent/50 focus:ring-4 focus:ring-brand-accent/5 transition-all resize-none"
                        />
                      </div>

                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full bg-gradient-to-r from-brand-accent to-cyan-500 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-2 hover:shadow-tech active:scale-[0.98] transition-all disabled:opacity-70 shadow-lg shadow-brand-accent/20"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Send Request</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <p className="text-[10px] text-center text-slate-500 font-medium px-6">
                        By clicking send, you agree to our privacy policy and consent to be contacted.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
