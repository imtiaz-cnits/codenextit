"use client";

import Navbar from '../Navbar';
import Footer from '../Footer';
import ThemeToggle from '../ThemeToggle';
import ScrollToTop from '../ScrollToTop';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ArrowRight, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useEffect } from 'react';
import ClientsMarquee from '../ClientsMarquee';

export default function ContactContent() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const trailSpringConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const trailMouseX = useSpring(mouseX, trailSpringConfig);
  const trailMouseY = useSpring(mouseY, trailSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    mouseX.set(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    mouseY.set(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Custom Trailing Cursor Dot */}
      <motion.div
        className="fixed top-[-8px] left-[-8px] w-4 h-4 bg-brand-accent rounded-full pointer-events-none z-50 mix-blend-multiply dark:mix-blend-screen hidden md:block"
        style={{
          x: trailMouseX,
          y: trailMouseY,
        }}
      />

      <main>
        {/* Hero Section - Matching About/Services Style */}
        <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-26 overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
          <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[10%] w-[40%] h-[50%] bg-brand-accent/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[40%] bg-cyan-500/20 rounded-full blur-[100px]" />
          </div>
          <div className="absolute inset-0 grid-pattern opacity-20 dark:opacity-[0.15] pointer-events-none mix-blend-overlay" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg shadow-brand-accent/5 mb-6"
              >
                <MessageSquare className="w-3 h-3 md:w-4 md:h-4 text-brand-accent" />
                <span className="text-[9px] md:text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-[0.2em]">Contact Us</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-[70px] font-extrabold tracking-tight text-brand-primary dark:text-white mb-6 leading-[1.1] text-balance">
                Open New Door of <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-400">Possibilities</span>
              </h1>

              <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-3xl">
                Have a project in mind or just want to say hi? We're here to help you navigate your digital journey with expert solutions and dedicated support.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none z-10" />
        </section>

        {/* Contact Content */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 relative z-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Side: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-brand-accent" />
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                      <div className="flex flex-col">
                        <a href="mailto:info@codenextit.com" className="text-lg font-bold text-slate-900 dark:text-white hover:text-brand-accent transition-colors">
                          info@codenextit.com
                        </a>
                        <a href="mailto:codenextit@gmail.com" className="text-lg font-bold text-slate-900 dark:text-white hover:text-brand-accent transition-colors">
                          codenextit@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                      <div className="flex flex-col">
                        <a href="tel:+8801788428280" className="text-lg font-bold text-slate-900 dark:text-white hover:text-brand-accent transition-colors">
                          +880 1788 428 280
                        </a>
                        <a href="tel:+8801300793313" className="text-lg font-bold text-slate-900 dark:text-white hover:text-brand-accent transition-colors">
                          +880 1300 793 313
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500 mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Our Office</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                        4th Floor, Hazi Akbar Ali Super Market,<br />
                        Abdul Hamid Road, Pabna, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-400">
                      <Clock className="w-5 h-5 text-brand-accent" />
                      <span className="text-sm font-medium">Sat-Thu: 11am - 7pm</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-400">
                      <Globe className="w-5 h-5 text-brand-accent" />
                      <span className="text-sm font-medium">Support: 24/7</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-brand-primary dark:bg-brand-accent p-8 rounded-3xl text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <h4 className="text-xl font-bold mb-4 relative z-10">Looking for a Career?</h4>
                <p className="text-white/80 mb-6 relative z-10">Join our team of experts and help us shape the future of technology.</p>
                <a href="/career" className="inline-flex items-center font-bold text-white group relative z-10">
                  Check Open Positions <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass dark:bg-slate-900/50 p-8 md:p-12 rounded-[40px] border border-slate-200 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none relative"
              >
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                    <select className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all appearance-none">
                      <option className="dark:bg-slate-900">Web Development</option>
                      <option className="dark:bg-slate-900">Mobile App Development</option>
                      <option className="dark:bg-slate-900">UI/UX Design</option>
                      <option className="dark:bg-slate-900">Digital Marketing</option>
                      <option className="dark:bg-slate-900">Other Inquiries</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-brand-accent to-cyan-500 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl shadow-brand-accent/25 flex items-center justify-center group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Connect Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-black text-brand-accent tracking-[0.3em] uppercase mb-4">Connect With Us</h2>
            <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white leading-tight">
              Follow Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500'>Digital Journey</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, count: '5k+ Followers', color: 'bg-[#1877F2]/10 text-[#1877F2]', href: 'https://www.facebook.com/codenextit' },
              { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, count: '2k+ Connections', color: 'bg-[#0A66C2]/10 text-[#0A66C2]', href: 'https://www.linkedin.com/company/codenextit/' },
              { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, count: '3k+ Followers', color: 'bg-[#E4405F]/10 text-[#E4405F]', href: 'https://www.instagram.com/codenextit/' },
              { name: 'Behance', icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-3.213-2.556-3.213-1.465 0-2.274 1.175-2.409 3.213zm-11.444 7h-6.285v-15h7.014c2.614 0 4.046 1.488 4.046 3.652 0 1.94-1.258 2.804-2.831 3.125 1.921.36 3.149 1.579 3.149 3.738 0 2.502-1.83 4.485-5.093 4.485zm-2.054-6.559h-2.915v-3.793h2.645c1.199 0 2.158.463 2.158 1.879 0 1.482-1.042 1.914-2.188 1.914zm.299 5.867h-3.214v-4.103h3.048c1.685 0 2.656.452 2.656 2.05 0 1.637-1.168 2.053-2.49 2.053z" /></svg>, count: '1k+ Project Views', color: 'bg-[#0057ff]/10 text-[#0057ff]', href: 'https://www.behance.net/codenextit' }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center p-8 rounded-[32px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${social.color} group-hover:scale-110 transition-transform`}>
                  {social.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{social.name}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{social.count}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Contact FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-black text-brand-accent tracking-[0.3em] uppercase mb-4">Common Inquiries</h2>
            <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white leading-tight">
              Have some questions?
            </h3>
          </div>

          <div className="space-y-4">
            {[
              { q: "What is your typical response time?", a: "We aim to respond to all inquiries within 24 business hours. For urgent technical support, our team is available 24/7." },
              { q: "Do you offer free consultations?", a: "Yes, we provide a 30-minute free consultation call to discuss your project requirements and how we can help." },
              { q: "Where is your office located?", a: "Our main headquarters is in Pabna, Bangladesh. We also work remotely with clients worldwide." },
              { q: "Can I join your team?", a: "We are always looking for talented individuals! Check our Career page for current openings." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
              >
                <h4 className="text-lg font-bold text-brand-primary dark:text-white mb-3 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mr-3" />
                  {item.q}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed ml-5">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-[11px] font-black text-brand-accent tracking-[0.3em] uppercase mb-4">Trusted By</h2>
            <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white leading-tight">
              Powering <span className='text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500'>Modern Businesses</span>
            </h3>
          </div>
          <ClientsMarquee hideTitle={true} className="!bg-transparent dark:!bg-transparent !py-0 !border-none opacity-80" />
        </section>

        {/* Final CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-accent/5 dark:bg-brand-accent/10 -z-10" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-8">
              Ready to bring your ideas to life?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium mb-10">
              Start your journey with CodeNext IT today and experience perfection in every pixel.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-accent text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-brand-accent/25 flex items-center mx-auto"
            >
              Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full h-[450px] rounded-[40px] overflow-hidden border border-slate-200 dark:border-white/5 shadow-2xl grayscale dark:invert-[0.9] dark:hue-rotate-180 hover:grayscale-0 dark:hover:invert-0 dark:hover:hue-rotate-0 transition-all duration-700"
          >
            <iframe
              src="https://maps.google.com/maps?cid=14657298875543543175&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </section>
      </main>

      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </div>
  );
}
