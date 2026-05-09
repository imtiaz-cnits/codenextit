'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
    Server,
    Zap,
    Shield,
    Globe,
    Clock,
    CreditCard,
    Headphones,
    Check,
    Plus,
    Minus,
    Cpu,
    Activity,
    Network,
    Cloud,
    ArrowRight,
    Database,
    Lock,
    BarChart
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollToTop from '@/components/ScrollToTop';
import CallToAction from '@/components/home/CallToAction';
import Image from 'next/image';

const pricingPlans = [
    {
        name: "Start VPS",
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
        name: "Pro VPS",
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
        name: "Business VPS",
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
        name: "Enterprise VPS",
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
        name: "SaaS VPS",
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
        name: "Ultimate VPS",
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


const faqs = [
    {
        question: "What is BDIX VPS, and what are its benefits?",
        answer: "BDIX VPS is a Virtual Private Server hosted in Bangladesh, directly connected to the BDIX (Bangladesh Internet Exchange) network. This setup ensures faster connectivity for users within Bangladesh, making it ideal for local businesses, e-commerce websites, and applications targeting Bangladeshi audiences."
    },
    {
        question: "What operating systems are available for BDIX VPS?",
        answer: "CodeNext IT offers multiple OS options for BDIX VPS, including CentOS, AlmaLinux, Ubuntu, and Debian. You can also deploy Windows Server editions instantly."
    },
    {
        question: "How does BDIX connectivity improve performance?",
        answer: "BDIX connectivity reduces latency for users accessing the server within Bangladesh by keeping local traffic within local networks, leading to quicker page load times."
    },
    {
        question: "What level of root access is provided with BDIX VPS?",
        answer: "CodeNext IT BDIX VPS plans come with full root access, giving you complete control over your server environment for custom configurations."
    },
    {
        question: "Can I upgrade or downgrade my BDIX plan as needed?",
        answer: "Absolutely. CodeNext IT offers flexible options for upgrading or downgrading your BDIX VPS plan based on your evolving business requirements."
    }
];

export default function BdixVps() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const { scrollY } = useScroll();
    const portalY = useTransform(scrollY, [0, 1000], [0, 50]);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 overflow-hidden">
                    <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-brand-accent/10 dark:bg-brand-accent/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
                    <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[130px] mix-blend-multiply dark:mix-blend-screen" />
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07]"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 98, 255, 1) 1px, transparent 0)', backgroundSize: '32px 32px' }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-accent/5 border border-brand-accent/10 mb-6">
                                <Server className="w-4 h-4 text-brand-accent" />
                                <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest">Enterprise Cloud</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-primary dark:text-white mb-6 tracking-tight">
                                High Speed <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-500">
                                    BDIX VPS Servers
                                </span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed font-medium">
                                Supercharge your website with blazing-fast NVMe SSD servers and 1Gbps BDIX connectivity. Designed for developers and high-growth businesses.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#pricing" className="bg-brand-accent text-white px-8 py-4 rounded-2xl font-bold hover:shadow-tech transition-all flex items-center group">
                                    View Pricing
                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </a>
                                <button className="border border-slate-200 dark:border-white/10 text-brand-primary dark:text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                                    Server Specs
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                            style={{ y: portalY }}
                        >
                            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-white/20 dark:border-white/5 bg-white dark:bg-slate-900 p-2">
                                <Image
                                    src="/vps_hero_server.png"
                                    alt="High Performance VPS Server"
                                    width={800}
                                    height={600}
                                    className="rounded-[36px] w-full h-auto"
                                />
                            </div>
                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 z-20"
                            >
                                <Network className="w-6 h-6 text-brand-accent" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 z-20"
                            >
                                <Zap className="w-6 h-6 text-cyan-500" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Pricing Section --- */}
            <section id="pricing" className="py-24 relative z-20 bg-slate-50 dark:bg-[#0B0F19]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Pricing Plans</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-6">
                            Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500">Cloud Solutions</span>
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">Choose the perfect configuration for your application needs.</p>
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
                                    ? 'bg-white dark:bg-slate-900 border-brand-accent shadow-2xl shadow-brand-accent/20 z-10 lg:scale-105'
                                    : 'bg-white dark:bg-white/5 border-slate-100 dark:border-white/5'
                                    } flex flex-col group hover:-translate-y-2 transition-transform duration-500 h-full`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-accent/30 flex items-center">
                                        Best Value
                                    </div>
                                )}
                                <h3 className="text-2xl font-black text-brand-primary dark:text-white mb-2">{plan.name}</h3>
                                <p className="text-slate-500 text-sm mb-6 h-10">{plan.description}</p>

                                <div className="mb-8 flex items-baseline gap-2 border-b border-slate-100 dark:border-white/10 pb-8">
                                    <span className="text-5xl font-black text-brand-primary dark:text-white">৳{plan.price}</span>
                                    <span className="text-slate-500 font-medium">{plan.period}</span>
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
                                            <Check className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={plan.link}
                                    className={`w-full py-4 rounded-2xl font-bold uppercase text-sm tracking-widest flex items-center justify-center transition-all ${plan.popular
                                        ? 'bg-brand-accent text-white hover:bg-blue-600 shadow-lg shadow-brand-accent/25'
                                        : 'bg-slate-100 dark:bg-white/10 text-brand-primary dark:text-white hover:bg-slate-200 dark:hover:bg-white/20'
                                        }`}
                                >
                                    Deploy Now
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- BDIX Technology Info --- */}
            <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">What is BDIX?</h2>
                            <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-8 leading-tight text-balance">
                                Empowering Connectivity in <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500 text-balance">Bangladesh</span>
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                                BDIX (Bangladesh Internet Exchange) is a local data exchange hub that allows ISPs to share traffic locally. By hosting on a BDIX-connected server, you ensure your Bangladeshi visitors get the fastest possible access without their data traveling across international cables.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "Ultra-Low Latency", desc: "Data stays local, reducing ping times significantly.", icon: <Zap className="w-5 h-5" /> },
                                    { title: "Enhanced Security", desc: "Local traffic mitigation reduces international risks.", icon: <Lock className="w-5 h-5" /> },
                                    { title: "Cost Effective", desc: "Lower bandwidth costs for local data transfer.", icon: <BarChart className="w-5 h-5" /> },
                                    { title: "Faster Delivery", desc: "Accelerated delivery for local content and apps.", icon: <Globe className="w-5 h-5" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start space-x-3 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                        <div className="mt-1 text-brand-accent">{item.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-brand-primary dark:text-white text-sm">{item.title}</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/5 p-4 bg-slate-50 dark:bg-white/5">
                                <Image
                                    src="/bdix_connectivity_map.png"
                                    alt="BDIX Connectivity Network"
                                    width={600}
                                    height={600}
                                    className="rounded-[2.5rem] w-full h-full object-cover opacity-80"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-accent/20 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Why Choose Our VPS Section --- */}
            <section className="py-24 bg-slate-50 dark:bg-[#0B0F19] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Core Advantages</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-6">
                            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500 text-balance">Our BDIX VPS?</span>
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                            Experience the perfect balance of performance, security, and affordability with our enterprise-grade infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { 
                                title: "Full Root Access", 
                                desc: "Complete administrative control over your server environment.", 
                                icon: <Cpu className="w-6 h-6" />,
                                color: "text-blue-500" 
                            },
                            { 
                                title: "Premium Bandwidth", 
                                desc: "Unmetered 1Gbps BDIX connectivity for ultra-low latency.", 
                                icon: <Activity className="w-6 h-6" />,
                                color: "text-cyan-500" 
                            },
                            { 
                                title: "Expert Security", 
                                desc: "Secured by enterprise-grade firewalls and expert monitoring.", 
                                icon: <Shield className="w-6 h-6" />,
                                color: "text-emerald-500" 
                            },
                            { 
                                title: "99.99% Uptime SLA", 
                                desc: "Our commitment to keeping your business online 24/7.", 
                                icon: <Clock className="w-6 h-6" />,
                                color: "text-amber-500" 
                            },
                            { 
                                title: "Instant Deployment", 
                                desc: "Get your server up and running with your choice of OS in seconds.", 
                                icon: <Zap className="w-6 h-6" />,
                                color: "text-rose-500" 
                            },
                            { 
                                title: "Money Back", 
                                desc: "30-day money-back guarantee if you're not satisfied.", 
                                icon: <CreditCard className="w-6 h-6" />,
                                color: "text-indigo-500" 
                            },
                            { 
                                title: "Competitive Pricing", 
                                desc: "Premium features at prices that fit any business budget.", 
                                icon: <BarChart className="w-6 h-6" />,
                                color: "text-purple-500" 
                            },
                            { 
                                title: "24/7 Expert Support", 
                                desc: "Dedicated hosting experts ready to help via Live Chat.", 
                                icon: <Headphones className="w-6 h-6" />,
                                color: "text-sky-500" 
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-white/5 hover:border-brand-accent/30 transition-all group shadow-sm hover:shadow-xl"
                            >
                                <div className={`w-12 h-12 ${item.color} bg-current/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold text-brand-primary dark:text-white mb-2">{item.title}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- OS Deployment Section --- */}
            <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Instant Access</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-6">
                            Deploy Your OS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500 text-balance">Instantly</span>
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                            Choose from a wide range of Linux distributions or Windows Server editions. Ready to use in seconds.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            { name: "Ubuntu", version: "20.04 / 22.04" },
                            { name: "CentOS", version: "7 / 8 Stream" },
                            { name: "Debian", version: "10 / 11" },
                            { name: "AlmaLinux", version: "8 / 9" },
                            { name: "Fedora", version: "36 / 37" },
                            { name: "Windows", version: "2016 / 2019 / 2022" }
                        ].map((os, i) => (
                            <div key={i} className="p-6 rounded-3xl border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5 flex flex-col items-center text-center group hover:border-brand-accent/30 transition-all hover:scale-105">
                                <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:rotate-12 transition-transform">
                                   <Database className="w-6 h-6 text-brand-accent" />
                                </div>
                                <h4 className="font-bold text-brand-primary dark:text-white text-sm">{os.name}</h4>
                                <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold">{os.version}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Global Datacenter Section --- */}
            <section className="py-24 bg-slate-50 dark:bg-[#0B0F19] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 p-2 bg-white dark:bg-slate-900">
                                <Image 
                                    src="/global_datacenter_map.png" 
                                    alt="Global Datacenter Network" 
                                    width={800} 
                                    height={450}
                                    className="rounded-[2.2rem] w-full h-full object-cover opacity-90"
                                />
                            </div>
                            <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-accent/20 rounded-full blur-3xl -z-10" />
                        </div>
                        <div>
                            <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Our Network</h2>
                            <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-8 leading-tight">
                                Our Global <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500">Datacenter Network</span>
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                                Unlock the power of our expansive global datacenter network, ensuring reliable performance and seamless connectivity for your online presence worldwide.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Redundant 10Gbps Network Uplinks",
                                    "Enterprise-Grade DDoS Protection",
                                    "Physical Security & Biometric Access",
                                    "Redundant Power & Cooling Systems"
                                ].map((point, i) => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-slate-600 dark:text-slate-300 font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FAQs Section --- */}
            <section className="py-24 bg-white dark:bg-slate-950 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Support</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white mb-6 leading-tight">
                            VPS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500">Frequently Asked</span> Questions
                        </h3>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-slate-100 dark:border-white/5 rounded-[2rem] overflow-hidden bg-slate-50 dark:bg-white/5">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="font-bold text-brand-primary dark:text-white pr-8">{faq.question}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${openFaq === idx ? 'bg-brand-accent text-white rotate-180' : 'bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400'}`}>
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
                                            <div className="px-8 pb-8 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-6 font-medium">
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
