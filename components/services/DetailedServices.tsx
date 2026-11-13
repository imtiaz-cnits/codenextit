"use client";
import { motion } from 'motion/react';
import {
  Code, Palette, Database, PenTool,
  Smartphone, Share2, GraduationCap, Server,
  CheckCircle2, ArrowRight, BarChart, Bot
} from 'lucide-react';
import { useModal } from '../ModalContext';

export default function DetailedServices() {
  const { openBookingModal } = useModal();
  const services = [
    {
      title: 'Custom Management Software',
      desc: 'Streamline your business operations with secure, scalable, and tailored software solutions designed specifically for your industry needs.',
      icon: Database,
      accent: 'text-brand-accent',
      bgAccent: 'bg-brand-accent/10',
      borderAccent: 'group-hover:border-brand-accent/50',
      shadowAccent: 'hover:shadow-brand-accent/10',
      subServices: [
        'School & College Management',
        'Inventory & POS Systems',
        'Diagnostic Center Software',
        'Custom ERP Solutions'
      ],
      slug: '/services/management-software'
    },
    {
      title: 'Professional Web Development',
      desc: 'Build a powerful digital presence with fast, responsive, and SEO-optimized web applications tailored to drive business growth.',
      icon: Code,
      accent: 'text-indigo-500',
      bgAccent: 'bg-indigo-500/10',
      borderAccent: 'group-hover:border-indigo-500/50',
      shadowAccent: 'hover:shadow-indigo-500/10',
      subServices: [
        'E-Commerce Platforms',
        'Corporate Business Websites',
        'Hotel & Booking Websites',
        'Custom Web Applications'
      ],
      slug: '/services/web-development'
    },
    {
      title: 'UI/UX Product Design',
      desc: 'Transform complex ideas into intuitive, user-centric interfaces. We design modern digital experiences that engage users and boost conversions.',
      icon: PenTool,
      accent: 'text-emerald-500',
      bgAccent: 'bg-emerald-500/10',
      borderAccent: 'group-hover:border-emerald-500/50',
      shadowAccent: 'hover:shadow-emerald-500/10',
      subServices: [
        'High-Converting Landing Pages',
        'Website UI Design',
        'Software & SaaS Dashboards',
        'Mobile App Interfaces'
      ],
      slug: '/services/ui-ux-design'
    },
    {
      title: 'Digital Marketing & SEO',
      desc: 'We build organic search strategies and targeted marketing campaigns that bring highly qualified traffic to your website and increase actual sales.',
      icon: BarChart,
      accent: 'text-blue-500',
      bgAccent: 'bg-blue-500/10',
      borderAccent: 'group-hover:border-blue-500/50',
      shadowAccent: 'hover:shadow-blue-500/10',
      subServices: [
        'Technical & Local SEO Services',
        'B2B & B2C Lead Generation',
        'Google Ads & PPC Campaigns',
        'Conversion Rate Optimization (CRO)'
      ],
      slug: '/services/digital-marketing'
    },
    {
      title: 'Mobile App Development',
      desc: 'Reach your customers on the go with high-performance, secure, and user-friendly native and cross-platform mobile applications.',
      icon: Smartphone,
      accent: 'text-violet-500',
      bgAccent: 'bg-violet-500/10',
      borderAccent: 'group-hover:border-violet-500/50',
      shadowAccent: 'hover:shadow-violet-500/10',
      subServices: [
        'Native iOS Development',
        'Native Android Development',
        'Cross-Platform (Flutter/React Native)',
        'App Maintenance & Support'
      ]
    },
    {
      title: 'Social Media Management',
      desc: 'Turn your social media profiles into active sales channels. We create authentic, engaging content that connects with your target audience and builds long-term brand loyalty.',
      icon: Share2,
      accent: 'text-pink-500',
      bgAccent: 'bg-pink-500/10',
      borderAccent: 'group-hover:border-pink-500/50',
      shadowAccent: 'hover:shadow-pink-500/10',
      subServices: [
        'Creative Content Strategy',
        'Targeted Paid Ad Campaigns (FB/IG)',
        'Brand Awareness & Identity',
        'Community Management & PR'
      ]
    },
    {
      title: 'AI & Machine Learning Solutions',
      desc: 'Automate daily operations and make smarter, data-backed business decisions. We integrate practical AI models and smart automation tools tailored to your specific workflow.',
      icon: Bot,
      accent: 'text-amber-500',
      bgAccent: 'bg-amber-500/10',
      borderAccent: 'group-hover:border-amber-500/50',
      shadowAccent: 'hover:shadow-amber-500/10',
      subServices: [
        'Intelligent Chatbots & Virtual Assistants',
        'Predictive Data Analytics',
        'Workflow Automation Systems (n8n)',
        'Custom AI Integrations'
      ]
    },
    {
      title: 'Academic Industrial Training',
      desc: 'Bridge the gap between university textbooks and real-world tech industry demands. Work on live projects using modern frameworks like Next.js alongside our senior engineering team.',
      icon: GraduationCap,
      accent: 'text-teal-500',
      bgAccent: 'bg-teal-500/10',
      borderAccent: 'group-hover:border-teal-500/50',
      shadowAccent: 'hover:shadow-teal-500/10',
      subServices: [
        'Polytechnic Institute Industrial Training',
        'University Industrial Training',
        'Direct Mentorship from Experts',
        'Career Strategy & Interview Preparation'
      ]
    },
    {
      title: 'Web Hosting & VPS',
      desc: 'Secure, fast, and reliable web hosting solutions with maximum uptime and dedicated support.',
      icon: Server,
      accent: 'text-cyan-500',
      bgAccent: 'bg-cyan-500/10',
      borderAccent: 'group-hover:border-cyan-500/50',
      shadowAccent: 'hover:shadow-cyan-500/10',
      subServices: [
        'High-Speed BDIX Shared Hostings',
        'Premium BDIX VPS',
        'Manageds Dedicated Servers',
        'Global Domain Registration'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 2) * 0.2, duration: 0.6 }}
              className={`p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-500 group relative overflow-hidden ${service.shadowAccent} ${service.borderAccent}`}
            >
              {/* Background Glow */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-tl from-slate-200 to-transparent dark:from-slate-800 dark:to-transparent opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

              <div className="flex items-start gap-6 relative z-10 mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${service.bgAccent} ${service.accent} group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-[1.6rem] font-black text-brand-primary dark:text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-6">Key Solutions</h4>
                <ul className="space-y-4 mb-10">
                  {service.subServices.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-600 dark:text-slate-300 font-medium">
                      <CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 ${service.accent}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-6 mt-4">
                  <a href={service.slug || "#"} className={`inline-flex items-center font-bold ${service.accent} group/btn`}>
                    Learn More <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <button
                    onClick={openBookingModal}
                    className={`px-6 py-2.5 rounded-xl text-white font-bold text-sm ${service.accent.replace('text-', 'bg-')} shadow-lg shadow-current/20 hover:scale-105 transition-all`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
