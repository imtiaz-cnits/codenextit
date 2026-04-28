"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, User, Clock, ChevronRight, ArrowRight, Filter, Mail, Share2, Bookmark } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollToTop from '@/components/ScrollToTop';
import Stats from '@/components/home/Stats';
import TrustAndTech from '@/components/home/TrustAndTech';
import CallToAction from '@/components/home/CallToAction';
import WhoWeAre from '@/components/home/WhoWeAre';
import Process from '@/components/home/Process';
import Image from 'next/image';
import { BLOG_POSTS, CATEGORIES } from '@/lib/data/blog';

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = BLOG_POSTS.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPost = BLOG_POSTS.find(post => post.featured);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300">
            <Navbar />

            {/* --- Page Header (Consistent with About/Home Hero) --- */}
            <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-40 overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
                <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[10%] w-[40%] h-[50%] bg-brand-accent/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[40%] bg-rose-500/20 rounded-full blur-[100px]" />
                    <div className="absolute top-[20%] right-[-5%] w-[25%] h-[40%] bg-cyan-500/10 rounded-full blur-[80px]" />
                </div>
                <div className="absolute inset-0 grid-pattern opacity-20 dark:opacity-[0.15] pointer-events-none mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-[#0B0F19] to-transparent pointer-events-none z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-accent/5 border border-brand-accent/10 mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                                </span>
                                <span className="text-[9px] md:text-[10px] font-black text-brand-accent uppercase tracking-[0.2em]">Insights & Innovation</span>
                            </motion.div>

                            <h1 className="text-4xl md:text-5xl lg:text-[70px] font-extrabold tracking-tight text-brand-primary dark:text-white mb-8 leading-[1.1] text-balance">
                                Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-blue-500 to-cyan-500">Insights</span>
                            </h1>
                            <p className="max-w-3xl mx-auto text-base md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-balance">
                                Expert perspectives on the technologies shaping tomorrow. <br className="hidden md:block" /> Stay ahead with CodeNext IT's deep dives into tech trends.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Search Box (Separated) --- */}
            <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 -mt-20 relative z-20">
                <div className="relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-accent transition-colors" />
                    <input
                        type="text"
                        placeholder="Search for articles, trends, or tech..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-14 pr-6 py-5 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-[2rem] text-sm shadow-2xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all dark:text-white"
                    />
                </div>
            </section>

            {/* --- Featured Post --- */}
            {featuredPost && activeCategory === "All" && !searchQuery && (
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800"
                    >
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-3/5 relative h-64 lg:h-auto overflow-hidden">
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
                                <div className="absolute bottom-4 left-4 lg:hidden">
                                    <span className="px-3 py-1 bg-brand-accent text-white text-xs font-bold rounded-full">
                                        Featured
                                    </span>
                                </div>
                            </div>
                            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                                <div className="hidden lg:block mb-4">
                                    <span className="px-3 py-1 bg-brand-accent text-white text-xs font-bold rounded-full">
                                        Featured Post
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        {featuredPost.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4" />
                                        {featuredPost.readTime}
                                    </span>
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-brand-accent transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold">
                                            {featuredPost.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">{featuredPost.author}</p>
                                            <p className="text-xs text-slate-500">{featuredPost.category}</p>
                                        </div>
                                    </div>
                                    <a href={`/blog/${featuredPost.id}`} className="group/btn flex items-center gap-2 text-brand-accent font-bold hover:gap-3 transition-all">
                                        Read Article <ArrowRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            )}

            {/* --- Filter & Tabs (Fixed Scroller) --- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
                <div className="flex flex-col items-center">
                    <div className="w-full flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
                        <div className="flex items-center gap-3 mx-auto px-4">
                            {CATEGORIES.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`relative whitespace-nowrap px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${activeCategory === category
                                        ? "text-white"
                                        : "text-slate-500 dark:text-slate-400 hover:text-brand-accent bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-brand-accent/30"
                                        }`}
                                >
                                    {activeCategory === category && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute inset-0 bg-brand-accent rounded-2xl -z-10 shadow-lg shadow-brand-accent/30"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Blog Grid --- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <AnimatePresence mode="popLayout">
                    {filteredPosts.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredPosts.map((post, index) => (
                                <motion.article
                                    layout
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <a href={`/blog/${post.id}`} className="group flex flex-col h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800">
                                        <div className="relative h-60 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-brand-accent text-xs font-bold rounded-lg shadow-sm">
                                                    {post.category}
                                                </span>
                                            </div>
                                            <div className="absolute top-4 right-4 flex gap-2">
                                                <button className="w-8 h-8 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-brand-accent transition-colors">
                                                    <Bookmark className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {post.date}
                                                </span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {post.readTime}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-accent transition-colors leading-snug line-clamp-2">
                                                {post.title}
                                            </h3>

                                            <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-6">
                                                {post.excerpt}
                                            </p>

                                            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400">
                                                        {post.author.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{post.author}</span>
                                                </div>

                                                <button className="flex items-center gap-1.5 text-brand-accent text-xs font-bold group/link">
                                                    Read More <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </a>
                                </motion.article>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-20 text-center"
                        >
                            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                                <Search className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No articles found</h3>
                            <p className="text-slate-600 dark:text-slate-400">Try adjusting your search or filter to find what you're looking for.</p>
                            <button
                                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                                className="mt-6 px-6 py-2 bg-brand-accent text-white rounded-xl font-medium"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {filteredPosts.length > 0 && (
                    <div className="mt-16 text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl shadow-sm hover:shadow-md transition-all"
                        >
                            Load More Articles
                        </motion.button>
                    </div>
                )}
            </section>

            {/* --- Additional Brand Sections --- */}
            <Stats />
            <TrustAndTech />

            {/* --- Newsletter --- */}
            <section className="bg-white dark:bg-slate-900 pb-32 pt-6 -mt-1 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-[3rem] bg-brand-primary dark:bg-white/5 backdrop-blur-xl border border-white/10 p-12 lg:p-24 shadow-2xl shadow-black/50">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent opacity-20 blur-[120px] -z-0"></div>
                        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600 opacity-10 blur-[120px] -z-0"></div>
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                                    Stay Ahead of the <br /> <span className="text-brand-accent">Digital Curve</span>
                                </h2>
                                <p className="text-slate-300 text-lg mb-8 max-w-md">
                                    Get the latest tech trends, design tips, and business strategies delivered straight to your inbox every week.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="relative flex-grow">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                                        />
                                    </div>
                                    <button className="px-8 py-4 bg-brand-accent text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors shadow-lg shadow-brand-accent/20">
                                        Subscribe Now
                                    </button>
                                </div>
                                <p className="mt-4 text-xs text-slate-500">
                                    No spam, we promise. You can unsubscribe at any time.
                                </p>
                            </div>
                            <div className="hidden lg:flex justify-center">
                                <div className="relative">
                                    <div className="w-80 h-80 bg-gradient-to-tr from-brand-accent to-blue-500 rounded-3xl rotate-12 absolute inset-0 opacity-20 blur-2xl"></div>
                                    <div className="relative glass-dark p-8 rounded-[2rem] border border-white/10 w-72">
                                        <div className="flex gap-2 mb-6">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="h-4 bg-white/10 rounded-full w-full"></div>
                                            <div className="h-4 bg-white/10 rounded-full w-3/4"></div>
                                            <div className="h-4 bg-white/10 rounded-full w-5/6"></div>
                                            <div className="h-4 bg-white/20 rounded-full w-1/2 mt-8"></div>
                                            <div className="h-10 bg-brand-accent/40 rounded-xl w-full mt-4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <ThemeToggle />
            <ScrollToTop />
        </div>
    );
}
