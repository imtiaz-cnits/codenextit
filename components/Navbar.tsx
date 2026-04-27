"use client";
import { motion } from 'motion/react';
import { Menu, X, ArrowRight, Settings, Code2, Layout, PenTool, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasMegaMenu: true },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Hosting', href: '/hosting' },
    { name: 'Career', href: '/career' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 shadow-sm'
      : 'bg-transparent border-b border-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12">
                  <span className="text-white font-black text-xl italic underline decoration-brand-accent decoration-4">CN</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-accent rounded-full border-2 border-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-brand-primary dark:text-white leading-none uppercase">CodeNext</span>
                <span className="text-[10px] font-black tracking-[0.3em] text-brand-accent uppercase mt-1 leading-none">Information Tech</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="flex items-center text-[14px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-200 hover:text-brand-accent transition-all mt-[5px]"
                >
                  {link.name}
                  {link.hasMegaMenu && <ChevronDown className="w-3 h-3 ml-1 text-slate-500 group-hover:text-brand-accent group-hover:rotate-180 transition-transform" />}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-accent group-hover:w-full transition-all duration-300" />
                </a>

                {link.hasMegaMenu && (
                  <div className="absolute top-full right-1/2 translate-x-[30%] lg:translate-x-[50%] pt-8 w-[680px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white dark:bg-[#0a0a0a] rounded-3xl shadow-2xl border border-slate-100 dark:border-white/5 p-6 grid grid-cols-2 gap-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

                      <a href="#services" className="flex items-start p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/item">
                        <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <Settings className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-brand-primary dark:text-white font-bold text-md mb-1">Management Softwares</h4>
                          <p className="text-slate-500 text-sm leading-relaxed font-medium">Optimize operations with our dynamic software services.</p>
                        </div>
                      </a>

                      <a href="#services" className="flex items-start p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/item">
                        <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <Code2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-brand-primary dark:text-white font-bold text-md mb-1">Web Development</h4>
                          <p className="text-slate-500 text-sm leading-relaxed font-medium">Elevate your online presence with our web expertise.</p>
                        </div>
                      </a>

                      <a href="#services" className="flex items-start p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/item">
                        <div className="w-12 h-12 bg-rose-50 dark:bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <Layout className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-brand-primary dark:text-white font-bold text-md mb-1">UI/UX Design</h4>
                          <p className="text-slate-500 text-sm leading-relaxed font-medium">Transforming concepts into seamless user experiences.</p>
                        </div>
                      </a>

                      <a href="#services" className="flex items-start p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/item">
                        <div className="w-12 h-12 bg-amber-50 dark:bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <PenTool className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-brand-primary dark:text-white font-bold text-md mb-1">Graphics Design</h4>
                          <p className="text-slate-500 text-sm leading-relaxed font-medium">Unleash creativity with our graphic design solutions.</p>
                        </div>
                      </a>

                    </div>
                  </div>
                )}
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-brand-accent to-cyan-500 text-white pl-6 pr-2 py-2 rounded-xl text-[12px] md:text-[12px] font-bold uppercase tracking-widest flex items-center group overflow-hidden relative shadow-lg shadow-brand-accent/25 border border-white/10"
            >
              <span className="relative z-10">Book a Meeting</span>
              <div className="ml-3 w-7 h-7 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:rotate-45 transition-transform relative z-10">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-4 text-base font-medium text-gray-600 dark:text-slate-300 hover:text-brand-accent dark:hover:text-brand-accent border-b border-gray-100 dark:border-slate-800/50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-4 bg-gradient-to-r from-brand-accent to-cyan-500 text-white px-6 py-3 rounded-xl text-base font-bold shadow-lg shadow-brand-accent/25 border border-white/10">
            Book a Meeting
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
