'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Server, Zap, Shield, Globe, Clock, CreditCard, Headphones, Check, Plus, Minus, Cpu, Activity } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollToTop from '@/components/ScrollToTop';
import CallToAction from '@/components/home/CallToAction';

const pricingPlans = [
    {
        name: "VPS 1GB",
        price: "585",
        period: "per month",
        description: "Great starting point for small apps and developer environments.",
        features: [
            "1 Core Processor",
            "1 GB DDR4 RAM",
            "25 GB NVMe SSD",
            "1 Gbps BDIX Uplink",
            "100 Mbps INT Uplink",
            "1000 GB Bandwidth",
            "1 IPv4 Address",
            "Full Root Access"
        ],
        link: "https://codenextit.com/bdix-vps.html",
        popular: false
    },
    {
        name: "VPS 2GB",
        price: "1,180",
        period: "per month",
        description: "Perfect for growing websites and lightweight applications.",
        features: [
            "1 Core Processor",
            "2 GB DDR4 RAM",
            "50 GB NVMe SSD",
            "1 Gbps BDIX Uplink",
            "100 Mbps INT Uplink",
            "2000 GB Bandwidth",
            "1 IPv4 Address",
            "Full Root Access"
        ],
        link: "https://codenextit.com/bdix-vps.html",
        popular: false
    },
    {
        name: "VPS 2GB Pro",
        price: "1,760",
        period: "per month",
        description: "More compute power for active websites and databases.",
        features: [
            "2 Core Processor",
            "2 GB DDR4 RAM",
            "60 GB NVMe SSD",
            "1 Gbps BDIX Uplink",
            "100 Mbps INT Uplink",
            "3000 GB Bandwidth",
            "1 IPv4 Address",
            "Full Root Access"
        ],
        link: "https://codenextit.com/bdix-vps.html",
        popular: true
    },
    {
        name: "VPS 4GB",
        price: "2,350",
        period: "per month",
        description: "Balanced resources for high-traffic websites and platforms.",
        features: [
            "2 Core Processor",
            "4 GB DDR4 RAM",
            "80 GB NVMe SSD",
            "1 Gbps BDIX Uplink",
            "100 Mbps INT Uplink",
            "4000 GB Bandwidth",
            "1 IPv4 Address",
            "Full Root Access"
        ],
        link: "https://codenextit.com/bdix-vps.html",
        popular: false
    },
    {
        name: "VPS 8GB",
        price: "4,700",
        period: "per month",
        description: "Heavy-duty server for enterprise applications and SaaS.",
        features: [
            "4 Core Processor",
            "8 GB DDR4 RAM",
            "160 GB NVMe SSD",
            "1 Gbps BDIX Uplink",
            "100 Mbps INT Uplink",
            "5000 GB Bandwidth",
            "1 IPv4 Address",
            "Full Root Access"
        ],
        link: "https://codenextit.com/bdix-vps.html",
        popular: false
    },
    {
        name: "VPS 16GB",
        price: "9,400",
        period: "per month",
        description: "Maximum performance for resource-intensive workloads.",
        features: [
            "8 Core Processor",
            "16 GB DDR4 RAM",
            "320 GB NVMe SSD",
            "1 Gbps BDIX Uplink",
            "100 Mbps INT Uplink",
            "6000 GB Bandwidth",
            "1 IPv4 Address",
            "Full Root Access"
        ],
        link: "https://codenextit.com/bdix-vps.html",
        popular: false
    }
];

const features = [
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "Full Root Access",
        description: "Get complete administrative control over your server. Install any custom software and configure your environment."
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Blazing-Fast BDIX Speed",
        description: "Host your content locally and provide an ultra-low latency experience for your Bangladeshi users with 1Gbps BDIX."
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Secured By The Best",
        description: "Our servers are secured by experts. Just step inside and you don't have to worry about your security anymore."
    },
    {
        icon: <Activity className="w-6 h-6" />,
        title: "99.99% Uptime SLA",
        description: "Count on our commitment, a 99.99% uptime Service Level Agreement (SLA) for uninterrupted service."
    },
    {
        icon: <CreditCard className="w-6 h-6" />,
        title: "Money Back Guarantee",
        description: "If for any reason you are not completely happy with your hosting experience within 30 days, we offer a full refund."
    },
    {
        icon: <Headphones className="w-6 h-6" />,
        title: "24/7 Expert Support",
        description: "Whenever you need us day or night, our dedicated team of hosting experts is standing by, ready to help."
    }
];

const faqs = [
    {
        question: "What is BDIX VPS, and what are its benefits?",
        answer: "BDIX VPS is a Virtual Private Server hosted in Bangladesh, directly connected to the BDIX (Bangladesh Internet Exchange) network. This setup ensures faster connectivity for users within Bangladesh, making it ideal for local businesses, e-commerce websites, and applications targeting Bangladeshi audiences."
    },
    {
        question: "What operating systems are available for BDIX VPS?",
        answer: "CodeNext IT offers multiple OS options for BDIX VPS, including CentOS, AlmaLinux, Ubuntu, and Debian. This allows you to choose the OS that best fits your application needs."
    },
    {
        question: "How does BDIX connectivity improve performance?",
        answer: "BDIX connectivity reduces latency for users accessing the server within Bangladesh, leading to quicker page load times and better overall performance for local visitors."
    },
    {
        question: "What level of root access is provided with BDIX VPS?",
        answer: "CodeNext IT BDIX VPS plans come with full root access, giving you complete control over your server environment, enabling custom configurations, and installing any software as needed."
    },
    {
        question: "Can I upgrade or downgrade my BDIX plan as needed?",
        answer: "Absolutely. CodeNext IT offers flexible options for upgrading or downgrading your BDIX VPS plan based on your evolving business requirements."
    }
];

export default function BdixVps() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300">
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-[0.15] dark:opacity-[0.05] mix-blend-overlay pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-bold tracking-wide uppercase mb-8"
                    >
                        <Server className="w-4 h-4" /> High Performance Virtual Servers
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-8 leading-[1.1]"
                    >
                        Supercharge Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-brand-accent">
                            Website with BDIX VPS
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        CodeNext IT offers blazing-fast NVMe SSD servers with 1Gbps BDIX connectivity, ensuring unmatched speed, reliability, and 24/7 expert support.
                    </motion.p>
                </div>
            </section>

            {/* --- Pricing Section --- */}
            <section className="py-24 relative z-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                            Choose Your <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-brand-accent">VPS Plan</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">Scalable configurations designed for speed, security, and reliability.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, idx) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative p-8 md:p-10 rounded-[2.5rem] border ${plan.popular
                                    ? 'bg-gradient-to-b from-brand-accent/5 to-brand-accent/20 dark:from-brand-accent/20 dark:to-brand-primary border-brand-accent shadow-xl shadow-brand-accent/20 z-10 scale-105'
                                    : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:glass-dark'
                                    } flex flex-col group hover:-translate-y-2 transition-transform duration-500 h-full`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-accent/30 flex items-center">
                                        Best Value
                                    </div>
                                )}
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                                <p className="text-slate-500 text-sm mb-6 h-10">{plan.description}</p>
                                
                                <div className="mb-8 flex items-baseline gap-2 border-b border-slate-200 dark:border-white/10 pb-8">
                                    <span className="text-5xl font-black text-slate-900 dark:text-white">৳{plan.price}</span>
                                    <span className="text-slate-500 font-medium">{plan.period}</span>
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                                            <Check className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={plan.link}
                                    className={`w-full py-4 rounded-2xl font-bold uppercase text-sm tracking-widest flex items-center justify-center transition-all ${plan.popular
                                        ? 'bg-brand-accent text-white hover:bg-blue-600 shadow-lg shadow-brand-accent/25'
                                        : 'bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20'
                                        }`}
                                >
                                    Configure Server
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Features Grid --- */}
            <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                            Enterprise-Grade <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-brand-accent">Infrastructure</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">Experience unparalleled hosting excellence with our world-class features tailored just for you.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-white/5 hover:border-brand-accent/50 transition-colors group shadow-sm hover:shadow-xl"
                            >
                                <div className="w-14 h-14 bg-purple-50 dark:bg-purple-500/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FAQs Section --- */}
            <section className="py-24 bg-white dark:bg-slate-900 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                            VPS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-brand-accent">FAQs</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">Common questions regarding our BDIX VPS solutions.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="font-bold text-slate-900 dark:text-white pr-8">{faq.question}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === idx ? 'bg-brand-accent text-white' : 'bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400'}`}>
                                        {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-white/5 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction />
            <Footer />
            <ThemeToggle />
            <ScrollToTop />
        </div>
    );
}
