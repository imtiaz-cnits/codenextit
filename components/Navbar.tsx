"use client";
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Settings, Code2, Layout, PenTool, ChevronDown, Server, Cloud, BarChart, Bot, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useModal } from './ModalContext';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openBookingModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setOpenSubmenu(null); // Reset submenus when closing main menu
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      hasMegaMenu: true,
      subItems: [
        { name: 'Management Softwares', href: '/services/management-software', icon: Settings },
        { name: 'Web Development', href: '/services/web-development', icon: Code2 },
        { name: 'UI/UX Design', href: '/services/ui-ux-design', icon: Layout },
        { name: 'Digital Marketing & SEO', href: '/services/digital-marketing', icon: BarChart },
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    // { 
    //   name: 'Hosting', 
    //   href: '', 
    //   hasMegaMenu: true,
    //   subItems: [
    //     { name: 'Web Hosting', href: '/web-hosting', icon: Cloud },
    //     { name: 'BDIX VPS', href: '/bdix-vps', icon: Server },
    //   ]
    // },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 shadow-sm'
        : 'bg-transparent border-b border-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <a href="/" className="flex items-center group" aria-label="CodeNext IT Home">
                <BrandLogo className="h-6 sm:h-7 lg:h-[30px] w-auto transition-transform duration-300 group-hover:scale-[1.02]" />
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

                  {link.hasMegaMenu && link.name === 'Services' && (
                    <div className="absolute top-full right-1/2 translate-x-[30%] lg:translate-x-[50%] pt-8 w-[680px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white dark:bg-[#0a0a0a] rounded-3xl shadow-2xl border border-slate-100 dark:border-white/5 p-6 grid grid-cols-2 gap-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

                        <a href="/services/management-software" className="flex items-start p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/item">
                          <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <Settings className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-brand-primary dark:text-white font-bold text-md mb-1 font-sans">Management Softwares</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">Optimize operations with our dynamic software services.</p>
                          </div>
                        </a>

                        <a href="/services/web-development" className="flex items-start p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/item">
                          <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <Code2 className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-brand-primary dark:text-white font-bold text-md mb-1 font-sans">Web Development</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">Elevate your online presence with our web expertise.</p>
                          </div>
                        </a>

                        <a href="/services/ui-ux-design" className="flex items-start p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/item">
                          <div className="w-12 h-12 bg-rose-50 dark:bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <Layout className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-brand-primary dark:text-white font-bold text-md mb-1 font-sans">UI/UX Design</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">Transforming concepts into seamless user experiences.</p>
                          </div>
                        </a>

                        <a href="/services/digital-marketing" className="flex items-start p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/item">
                          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <BarChart className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-brand-primary dark:text-white font-bold text-md mb-1 font-sans">Digital Marketing & SEO</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">Drive growth and visibility with our data-driven marketing.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}

                  {link.hasMegaMenu && link.name === 'Hosting' && (
                    <div className="absolute top-full right-1/2 translate-x-[30%] lg:translate-x-[50%] pt-8 w-[680px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white dark:bg-[#0a0a0a] rounded-3xl shadow-2xl border border-slate-100 dark:border-white/5 p-6 grid grid-cols-2 gap-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

                        <a href="/web-hosting" className="flex items-start p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/item">
                          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <Cloud className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-brand-primary dark:text-white font-bold text-md mb-1">Web Hosting</p>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">Fast, reliable, and affordable hosting for your online presence.</p>
                          </div>
                        </a>

                        <a href="/bdix-vps" className="flex items-start p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/item">
                          <div className="w-12 h-12 bg-purple-50 dark:bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <Server className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-brand-primary dark:text-white font-bold text-md mb-1">BDIX VPS</p>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">High-performance virtual servers with 1Gbps BDIX connectivity.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <motion.a
                href="tel:+8801788428280"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="flex items-center space-x-3 pl-3 pr-4 py-2 rounded-2xl bg-slate-100/90 dark:bg-slate-950/60 backdrop-blur-xl border border-slate-300/80 dark:border-slate-800 shadow-md shadow-brand-primary/[0.05] group hover:border-brand-accent/50 dark:hover:border-brand-accent/40 hover:bg-white dark:hover:bg-slate-900/80 hover:shadow-xl hover:shadow-brand-accent/5 dark:hover:shadow-brand-accent/[0.04] transition-all duration-300 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/20 border border-brand-accent/20 dark:border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent dark:group-hover:bg-brand-accent dark:group-hover:text-white transition-all duration-300">
                  <Phone className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                </div>
                <div className="flex flex-col items-start leading-none">
                  {/* Talk with Expert Indicator */}
                  <div className="flex items-center space-x-1.5 mb-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[9px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-[0.15em] font-sans leading-none">
                      Talk with Expert
                    </span>
                  </div>
                  {/* Typographically Rich Phone Number */}
                  <span className="text-[16px] font-black text-brand-primary dark:text-white tracking-tight font-sans leading-none flex items-center">
                    <span className="text-brand-accent mr-1 font-extrabold">+880</span>
                    <span>1788 428 280</span>
                  </span>
                </div>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-white focus:outline-none w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/10"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Side Panel Mobile Menu - Moved outside <nav> to fix z-index/scrolled issues */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[300px] bg-white dark:bg-[#0B0F19] z-[70] md:hidden shadow-2xl border-r border-slate-100 dark:border-white/5 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 flex justify-between items-center border-b border-slate-100 dark:border-white/5">
                <a
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center"
                  aria-label="CodeNext IT Home"
                >
                  <BrandLogo className="h-5 w-auto" />
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-white/5 rounded-xl text-slate-500 dark:text-slate-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-grow overflow-y-auto p-6 space-y-2 custom-scrollbar">
                {navLinks.map((link, idx) => (
                  <div key={link.name} className="flex flex-col">
                    {link.subItems ? (
                      <div>
                        <button
                          onClick={() => setOpenSubmenu(openSubmenu === link.name ? null : link.name)}
                          className="w-full flex items-center justify-between px-4 py-4 rounded-2xl text-[16px] font-bold text-brand-primary dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSubmenu === link.name ? 'rotate-180 text-brand-accent' : 'text-slate-400'}`} />
                        </button>
                        <AnimatePresence>
                          {openSubmenu === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-slate-50/50 dark:bg-white/[0.02] rounded-2xl mx-2"
                            >
                              <div className="py-2 px-2 space-y-1">
                                {link.subItems.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center p-3 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-all group"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-white/10 flex items-center justify-center mr-3 shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-colors">
                                      <subItem.icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-brand-primary dark:group-hover:text-white font-sans">
                                      {subItem.name}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-4 py-4 rounded-2xl text-[16px] font-bold text-brand-primary dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 group transition-colors"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-accent" />
                      </motion.a>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer / CTA */}
              <div className="p-6 border-t border-slate-100 dark:border-white/5 space-y-4 bg-white dark:bg-[#0B0F19]">
                <a
                  href="tel:+8801788428280"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl bg-gradient-to-br from-brand-accent to-cyan-500 text-white font-extrabold shadow-lg shadow-brand-accent/25 cursor-pointer text-center"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] font-black uppercase tracking-widest leading-none mb-1 opacity-90">Talk with Expert</span>
                    <span className="text-[14px] leading-none font-mono">+880 1788 428 280</span>
                  </div>
                </a>
                <div className="flex justify-center pt-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Serving Knowledge & Perfection</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
