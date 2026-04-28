'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Server, Shield, Zap, ArrowRight, Plus, Minus, CheckCircle2, SlidersHorizontal, Database, Satellite, TrendingUp, Rocket, Wrench, Zap as Bolt, Lock, UserCheck, Settings, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollToTop from '@/components/ScrollToTop';
import CallToAction from '@/components/home/CallToAction';

// Custom Check Icon from the original HTML
const CustomCheckIcon = () => (
    <svg className="flex-shrink-0 w-5 h-5 mr-3 text-brand-accent" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.6809 8.90002V18.1875C26.6333 19.16 26.3834 20.1118 25.9471 20.9822C25.5108 21.8526 24.8978 22.6225 24.1471 23.2425L18.7721 27.255C17.6732 28.0425 16.3514 28.4582 14.9996 28.4413C13.646 28.4575 12.3226 28.0401 11.2234 27.25L5.84836 23.2375C5.09899 22.6177 4.487 21.8485 4.05139 20.979C3.61579 20.1095 3.36614 19.1588 3.31836 18.1875V8.90002C3.3574 7.89865 3.68135 6.92921 4.25217 6.10554C4.82298 5.28187 5.61695 4.63817 6.54086 4.25002L12.7909 1.90877C14.2307 1.44252 15.781 1.44252 17.2209 1.90877L23.4584 4.25002C24.3823 4.63817 25.1762 5.28187 25.7471 6.10554C26.3179 6.92921 26.6418 7.89865 26.6809 8.90002Z" className="fill-current opacity-30" />
        <path d="M23.4584 4.25002L17.2146 1.90877C15.7747 1.44252 14.2245 1.44252 12.7846 1.90877L6.54086 4.25002C5.61695 4.63817 4.82298 5.28187 4.25217 6.10554C3.68135 6.92921 3.3574 7.89865 3.31836 8.90002V18.1875C3.36592 19.16 3.61583 20.1118 4.05211 20.9822C4.48839 21.8526 5.10145 22.6225 5.85211 23.2425L11.2271 27.255C12.326 28.0425 13.6478 28.4582 14.9996 28.4413C16.3527 28.459 17.676 28.0433 18.7759 27.255L24.1509 23.2425C24.9015 22.6225 25.5146 21.8526 25.9509 20.9822C26.3871 20.1118 26.637 19.16 26.6846 18.1875V8.90002C26.6452 7.89823 26.3207 6.9285 25.7492 6.10479C25.1777 5.28107 24.383 4.63761 23.4584 4.25002ZM24.8059 18.1875C24.7585 18.868 24.5767 19.5324 24.2709 20.1421C23.9652 20.7519 23.5416 21.295 23.0246 21.74L17.6496 25.7525C16.8644 26.2782 15.9408 26.5589 14.9959 26.5589C14.0509 26.5589 13.1273 26.2782 12.3421 25.7525L6.96711 21.74C6.4515 21.2944 6.02928 20.751 5.72484 20.1412C5.4204 19.5315 5.23976 18.8675 5.19336 18.1875V8.90002C5.23336 8.28014 5.44118 7.68282 5.79459 7.17198C6.14799 6.66115 6.63366 6.25604 7.19961 6.00002L13.4421 3.65877C14.4572 3.34813 15.542 3.34813 16.5571 3.65877L22.7996 6.00002C23.3656 6.25604 23.8512 6.66115 24.2046 7.17198C24.558 7.68282 24.7659 8.28014 24.8059 8.90002V18.1875ZM19.3559 10.8125C19.443 10.8996 19.5121 11.003 19.5592 11.1167C19.6064 11.2305 19.6307 11.3525 19.6307 11.4756C19.6307 11.5988 19.6064 11.7208 19.5592 11.8345C19.5121 11.9483 19.443 12.0517 19.3559 12.1388L13.9809 17.5138C13.8049 17.689 13.5667 17.7874 13.3184 17.7874C13.07 17.7874 12.8318 17.689 12.6559 17.5138L10.6434 15.5C10.4727 15.3231 10.3783 15.0863 10.3805 14.8405C10.3828 14.5946 10.4815 14.3596 10.6554 14.1858C10.8293 14.0121 11.0645 13.9136 11.3103 13.9116C11.5561 13.9096 11.7929 14.0042 11.9696 14.175L13.3209 15.5263L18.0296 10.8175C18.1166 10.7303 18.2199 10.6611 18.3336 10.6139C18.4474 10.5666 18.5693 10.5422 18.6925 10.5421C18.8156 10.542 18.9376 10.5661 19.0514 10.6132C19.1653 10.6602 19.2687 10.7292 19.3559 10.8163V10.8125Z" className="fill-current" />
    </svg>
);

const pricingPlans = [
    {
        name: "Starter",
        price: "290",
        period: "per month",
        description: "Perfect for small websites or blogs starting out.",
        features: [
            { text: "5 GB", suffix: " NVMe Storage", bold: true },
            { text: "500GB", suffix: " Monthly Bandwidth", bold: true },
            { text: "1 Core", suffix: " Processor", bold: true },
            { text: "1 GB", suffix: " DDR4 RAM", bold: true },
            { text: "Host 3", suffix: " Websites", bold: true },
            { text: "Unlimited", suffix: " Subdomains", bold: true },
            { text: "Litespeed", suffix: " WebServer", bold: true },
            { text: "Imunify360", suffix: " Antivirus + Firewall", bold: true },
            { text: "Cloudlinux", suffix: " Operating System", bold: true },
            { text: "Free SSL", suffix: " Certificate", bold: true },
            { text: "Unlimited", suffix: " Email Accounts", bold: true }
        ],
        link: "https://codenextit.com/clients/index.php?rp=/store/bdix-web-hosting/starter",
        popular: false
    },
    {
        name: "Standard",
        price: "530",
        period: "per month",
        description: "Ideal for growing businesses and professional portfolios.",
        features: [
            { text: "10 GB", suffix: " NVMe Storage", bold: true },
            { text: "500GB", suffix: " Monthly Bandwidth", bold: true },
            { text: "1.5 Core", suffix: " Processor", bold: true },
            { text: "1.5 GB", suffix: " DDR4 RAM", bold: true },
            { text: "Host 3", suffix: " Websites", bold: true },
            { text: "Unlimited", suffix: " Subdomains", bold: true },
            { text: "Litespeed", suffix: " WebServer", bold: true },
            { text: "Imunify360", suffix: " Antivirus + Firewall", bold: true },
            { text: "Cloudlinux", suffix: " Operating System", bold: true },
            { text: "Free SSL", suffix: " Certificate", bold: true },
            { text: "Unlimited", suffix: " Email Accounts", bold: true }
        ],
        link: "https://codenextit.com/clients/index.php?rp=/store/bdix-web-hosting/advanced",
        popular: true
    },
    {
        name: "Advanced",
        price: "940",
        period: "per month",
        description: "Built for high-traffic sites and resource-intensive apps.",
        features: [
            { text: "25 GB", suffix: " NVMe Storage", bold: true },
            { text: "500GB", suffix: " Monthly Bandwidth", bold: true },
            { text: "2 Core", suffix: " Processor", bold: true },
            { text: "2 GB", suffix: " DDR4 RAM", bold: true },
            { text: "Host 3", suffix: " Websites", bold: true },
            { text: "Unlimited", suffix: " Subdomains", bold: true },
            { text: "Litespeed", suffix: " WebServer", bold: true },
            { text: "Imunify360", suffix: " Antivirus + Firewall", bold: true },
            { text: "Cloudlinux", suffix: " Operating System", bold: true },
            { text: "Free SSL", suffix: " Certificate", bold: true },
            { text: "Unlimited", suffix: " Email Accounts", bold: true }
        ],
        link: "https://codenextit.com/clients/index.php?rp=/store/bdix-web-hosting/advanced",
        popular: false
    }
];

const cloudLinuxPlans = [
    {
        name: "Starter",
        features: [
            { highlight: "1 CPU", suffix: " Core" },
            { highlight: "1 GB", suffix: " RAM" },
            { highlight: "50 MBps", suffix: " Disk I/O" },
            { highlight: "20 EP", suffix: " (Concurrent Connections)" },
            { highlight: "60 nPROC Max.", suffix: " (Number Of Processes)" }
        ]
    },
    {
        name: "Standard",
        features: [
            { highlight: "1.5 CPU", suffix: " Core" },
            { highlight: "1.5 GB", suffix: " RAM" },
            { highlight: "70 MBps", suffix: " Disk I/O" },
            { highlight: "20 EP", suffix: " (Concurrent Connections)" },
            { highlight: "80 nPROC Max.", suffix: " (Number Of Processes)" }
        ]
    },
    {
        name: "Advanced",
        features: [
            { highlight: "2 CPU", suffix: " Core" },
            { highlight: "2 GB", suffix: " RAM" },
            { highlight: "100 MBps", suffix: " Disk I/O" },
            { highlight: "40 EP", suffix: " (Concurrent Connections)" },
            { highlight: "100 nPROC Max.", suffix: " (Number Of Processes)" }
        ]
    }
];

const advancedFeaturesList = [
    "24/7 Technical Support",
    "1 Hour Response Time",
    "99% Server Uptime Guarantee",
    "14 Days Money Back Guarantee",
    "FREE SSL Certificate",
    "DDoS Protection",
    "Malware & Exploit Scanning",
    "Spam Protection",
    "Clustered DNS",
    "FREE cPanel Migration",
    "Latest cPanel",
    "LiteSpeed Web Server",
    "CloudLinux / CageFS",
    "PHP Selector (5.6 - 8.x)",
    "Python Selector",
    "Node.js Selector",
    "ionCube PHP Loader",
    "Curl / GD2 / ImageMagick",
    "MariaDB 10.x / MySQL 8.x",
    "Unlimited MySQL Databases",
    "Unlimited FTP Accounts",
    "Unlimited E-Mail Accounts",
    "Unlimited Sub Domains",
    "Softaculous Script Installer",
    "Ruby On Rails",
    "On-Demand SSH Access"
];

const featuresDifferent = [
    {
        icon: <SlidersHorizontal className="w-6 h-6" />,
        title: "Flexible Control",
        description: "We provide flexibility and cPanel/Webuzo/DA control panel with full NVMe storage."
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Unmetered Bandwidth",
        description: "No restrictions on traffic as long as regulations are followed."
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "Improve Site Speed",
        description: "50% faster site speed helps generate more revenue."
    },
    {
        icon: <Wrench className="w-6 h-6" />,
        title: "Premium Tools",
        description: "Includes site migrations, SSL, Imunify Protection, and more."
    },
    {
        icon: <Bolt className="w-6 h-6" />,
        title: "Dedicated Power",
        description: "CloudLinux ensures stable resources with CPU, RAM, and storage."
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: "Maximum Security",
        description: "Enterprise-grade security, Solid Security, and Firewall technology."
    },
    {
        icon: <UserCheck className="w-6 h-6" />,
        title: "Always Client First",
        description: "Easy client management and safe payment options."
    },
    {
        icon: <Settings className="w-6 h-6" />,
        title: "Improved Performance",
        description: "Tailored capacity for scalability and redundancy."
    }
];

const faqs = [
    {
        question: "What is Web Hosting?",
        answer: "Web Hosting is a service that enables individuals and businesses to make their websites accessible on the Internet. It involves renting server space and resources from a hosting provider, like CodeNext IT Hosting, to store website files and data. This allows visitors to access the website anytime, from anywhere in the world."
    },
    {
        question: "Benefits of choosing CodeNext IT's BDIX Web Hosting?",
        answer: "Opting for CodeNext IT's Web Hosting comes with several advantages. You'll experience fast loading speeds, ensuring efficient user experiences for your website visitors. Our hosting ensures reliable performance through dedicated resources, contributing to the stability of your website. Additionally, you'll have easy access to manage your website files and settings using a user-friendly control panel, simplifying the management of your online presence."
    },
    {
        question: "What security measures are in place to protect my website?",
        answer: "CodeNext IT employs several security features, including Imunify360 Antivirus + Firewall, DDoS protection, malware and exploit scanning, and daily offsite backups. These measures ensure that your website is well-protected against threats."
    },
    {
        question: "Can I transfer my existing website to CodeNext IT?",
        answer: "Yes, we provide website migration assistance to help you seamlessly transfer your existing website from another hosting provider to CodeNext IT. Our support team will guide you through the migration process."
    },
    {
        question: "Can I upgrade my hosting plan as my website grows?",
        answer: "Absolutely! We understand that your website's needs may evolve over time. You can easily upgrade your hosting plan to a higher tier to accommodate increased traffic and resource requirements. Our customer support team will assist you throughout the upgrade process."
    },
    {
        question: "What is CloudLinux, and how does it benefit my hosting?",
        answer: "CloudLinux uses Lightweight Virtual Environment (LVE) technology to allocate specific resources like CPU and RAM to each user. This ensures that no single website can monopolize server resources, improving overall performance and stability during high-traffic periods."
    }
];

export default function WebHosting() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300">
            <Navbar />

            {/* --- Hero Section (Centered like About/Blog) --- */}
            <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-20 overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
                <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[10%] w-[40%] h-[50%] bg-brand-accent/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[40%] bg-blue-500/20 rounded-full blur-[100px]" />
                </div>
                <div className="absolute inset-0 grid-pattern opacity-20 dark:opacity-[0.15] pointer-events-none mix-blend-overlay" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <motion.div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-accent/5 border border-brand-accent/10 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                            </span>
                            <span className="text-[9px] md:text-[10px] font-black text-brand-accent uppercase tracking-[0.2em]">Kickstart your business</span>
                        </motion.div>
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-[70px] font-extrabold tracking-tight text-brand-primary dark:text-white mb-8 leading-[1.1] text-balance"
                        >
                            Fastest BDIX&nbsp;
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-blue-500 to-cyan-500">
                                Web Hosting
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed font-medium"
                        >
                            The fastest, most reliable, and affordable web hosting for your online presence which will fuel your business. Get the best web hosting service with super technologies.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* --- Find Packages Section (Following Home Page Packages Design) --- */}
            <section className="py-24 relative z-20 bg-white dark:bg-[#0a0a0a] border-y border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                            Find The&nbsp;
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-blue-500 to-cyan-500">Best Packages</span>
                            &nbsp;For You
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">Super cool and affordable pricing structure will help you get started easily.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {pricingPlans.map((plan, idx) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className={`relative p-8 md:p-8 rounded-[2.5rem] border ${plan.popular
                                    ? 'bg-gradient-to-b from-brand-accent/5 to-brand-accent/20 dark:from-brand-accent/20 dark:to-brand-primary border-brand-accent shadow-xl shadow-brand-accent/20'
                                    : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 dark:glass-dark'
                                    } flex flex-col group hover:-translate-y-2 transition-transform duration-500`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-accent/30 flex items-center">
                                        <Star className="w-3 h-3 mr-1 fill-current" /> Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">৳ {plan.price}</span>
                                        <span className="text-slate-500 dark:text-slate-400 font-medium text-sm">{plan.period}</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[40px]">{plan.description}</p>
                                </div>

                                <div className="flex-grow">
                                    <ul className="space-y-4 mb-10">
                                        {plan.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center text-slate-700 dark:text-slate-300 font-medium">
                                                <CustomCheckIcon />
                                                <span>
                                                    {feature.bold ? <span className="font-bold text-slate-900 dark:text-white">{feature.text}</span> : feature.text}
                                                    {feature.suffix}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href={plan.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block text-center w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all ${plan.popular
                                        ? 'bg-brand-accent text-white hover:bg-blue-600 shadow-lg shadow-brand-accent/25'
                                        : 'bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20'
                                        }`}
                                >
                                    Choose Plan
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CloudLinux Environment Section --- */}
            <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
                            CloudLinux Lightweight <br /> Virtual Environment (LVE)
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                            CloudLinux uses LVE technology to allocate specific CPU, memory, and other resources to each tenant (website or user) on the server. This ensures fair resource distribution and prevents one website from affecting the performance of others during traffic spikes or resource-intensive operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cloudLinuxPlans.map((plan, idx) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-white/5 shadow-sm"
                            >
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-white/10">{plan.name}</h3>
                                <ul className="space-y-4">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="text-slate-700 dark:text-slate-300 flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0"></span>
                                            <span>
                                                <strong className="text-slate-900 dark:text-white font-bold">{feature.highlight}</strong>
                                                {feature.suffix}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- World Class Best Hosting Feature Section --- */}
            <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                            World Class Best&nbsp;
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-blue-500 to-cyan-500">Hosting Feature</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">Experience unparalleled hosting excellence with our world-class features tailored just for you.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="left"
                        >
                            <img src="/assets/img/hosting/features.png" alt="Server Illustration" className="w-full max-w-[500px] mx-auto filter drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="right space-y-8"
                        >
                            <div className="flex gap-6 items-start bg-slate-50 dark:bg-[#0a0a0a] p-6 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-brand-accent/50 transition-colors">
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-brand-accent flex-shrink-0">
                                    <SlidersHorizontal className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">cPanel Control Panel</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">We strive to provide top rare reliability and affordability that most shared hosting will bring quality.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start bg-slate-50 dark:bg-[#0a0a0a] p-6 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-brand-accent/50 transition-colors">
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-brand-accent flex-shrink-0">
                                    <Database className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Daily Offsite Backups</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">We strive to provide top rare reliability and affordability that most shared hosting will bring quality.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start bg-slate-50 dark:bg-[#0a0a0a] p-6 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-brand-accent/50 transition-colors">
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-brand-accent flex-shrink-0">
                                    <Satellite className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Latest Technology</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">We strive to provide top rare reliability and affordability that most shared hosting will bring quality.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Advanced Features Section --- */}
            <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-brand-accent">Features</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">Advanced features in web hosting encompass a range of functionalities and tools designed to enhance website performance, security, customization, and management.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {advancedFeaturesList.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="flex items-center gap-3 bg-white dark:bg-[#0a0a0a] p-4 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm"
                            >
                                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- What Makes CodeNext IT Different? Section --- */}
            <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                            What Makes CodeNext IT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-brand-accent">Different?</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">Amazing features are designed to make your tasks easier and faster.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuresDifferent.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="bg-slate-50 dark:bg-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-white/5 hover:border-brand-accent/50 transition-colors group shadow-sm text-center flex flex-col items-center"
                            >
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 rounded-full flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FAQs Section --- */}
            <section className="py-24 bg-slate-50 dark:bg-[#0B0F19] relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                            Frequently Asked <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-brand-accent">Questions</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">Find the answers that you feel confuse about.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            {faqs.slice(0, 4).map((faq, idx) => (
                                <div key={idx} className="border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-slate-900">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                                    >
                                        <span className="font-bold text-slate-900 dark:text-white pr-8 group-hover:text-brand-accent transition-colors">{faq.question}</span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === idx ? 'bg-brand-accent text-white' : 'bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 group-hover:bg-brand-accent/10 group-hover:text-brand-accent'}`}>
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
                                                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {faqs.slice(4).map((faq, idx) => {
                                const realIdx = idx + 4;
                                return (
                                    <div key={realIdx} className="border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-slate-900">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === realIdx ? null : realIdx)}
                                            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                                        >
                                            <span className="font-bold text-slate-900 dark:text-white pr-8 group-hover:text-brand-accent transition-colors">{faq.question}</span>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === realIdx ? 'bg-brand-accent text-white' : 'bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 group-hover:bg-brand-accent/10 group-hover:text-brand-accent'}`}>
                                                {openFaq === realIdx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                            </div>
                                        </button>
                                        <AnimatePresence>
                                            {openFaq === realIdx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            })}
                        </div>
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
