import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Facebook, Bookmark, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollToTop from '@/components/ScrollToTop';
import CallToAction from '@/components/home/CallToAction';
import { BLOG_POSTS } from '@/lib/data/blog';

// In Next.js 15, `params` is a Promise, so we must await it.
// However, since we are doing static generation/dynamic routing, we handle it appropriately.
export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
    // Resolve the params promise to get the ID
    const resolvedParams = await params;
    const postId = parseInt(resolvedParams.id, 10);
    const post = BLOG_POSTS.find(p => p.id === postId);

    if (!post) {
        notFound();
    }

    // Get 3 related posts (excluding the current one)
    const relatedPosts = BLOG_POSTS.filter(p => p.id !== postId).slice(0, 3);

    // Parse headings to generate dynamic TOC and inject IDs into the HTML
    const headings: { text: string; slug: string }[] = [];
    const contentWithIds = post.content.replace(/<h2[^>]*>(.*?)<\/h2>/g, (fullMatch, innerContent) => {
        const plainText = innerContent.replace(/<[^>]+>/g, '');
        const slug = plainText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        headings.push({ text: plainText, slug });
        return fullMatch.replace('<h2', `<h2 id="${slug}"`);
    });

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300 selection:bg-brand-accent/30 selection:text-brand-accent">
            <Navbar />

            {/* --- Post Header (Hero) --- */}
            <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
                <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[10%] w-[40%] h-[50%] bg-brand-accent/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[40%] bg-rose-500/20 rounded-full blur-[100px]" />
                    <div className="absolute top-[20%] right-[-5%] w-[25%] h-[40%] bg-cyan-500/10 rounded-full blur-[80px]" />
                </div>
                <div className="absolute inset-0 grid-pattern opacity-20 dark:opacity-[0.15] pointer-events-none mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-[#0B0F19] to-transparent pointer-events-none z-10" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <a href="/blog" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-brand-accent transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Back to all articles
                    </a>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent border border-brand-accent/20 rounded-full text-xs font-bold uppercase tracking-wider">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1] text-balance">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between border-y border-slate-200 dark:border-white/10 py-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-lg">
                                <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">{post.author}</p>
                                <p className="text-xs text-slate-500">Author & Tech Enthusiast</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest hidden sm:block mr-2">Share</span>
                            <button className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-accent hover:border-brand-accent transition-all shadow-sm">
                                <Twitter className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm">
                                <Linkedin className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-500 hover:border-blue-500 transition-all shadow-sm">
                                <Facebook className="w-4 h-4" />
                            </button>
                            <div className="w-px h-6 bg-slate-200 dark:bg-white/10 mx-2 hidden sm:block"></div>
                            <button className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-accent hover:border-brand-accent transition-all shadow-sm hidden sm:flex">
                                <Bookmark className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Featured Image --- */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 mb-16">
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </section>

            {/* --- Article Content --- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-8">
                        <article className="prose prose-lg dark:prose-invert max-w-none 
                            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white prose-headings:scroll-mt-32
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                            prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-p:mb-6
                            prose-a:text-brand-accent hover:prose-a:text-blue-400 prose-a:transition-colors
                            prose-strong:text-slate-900 dark:prose-strong:text-white
                            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
                            prose-li:text-slate-600 dark:prose-li:text-slate-400 prose-li:mb-2
                            marker:text-brand-accent
                        ">
                            <div dangerouslySetInnerHTML={{ __html: contentWithIds.replace(/\n\n/g, '<br/><br/>') }} />
                        </article>

                        {/* Tags & Interaction */}
                        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">Tags:</span>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-brand-accent transition-colors cursor-pointer">#{post.category.replace(/[^a-zA-Z0-9]/g, '')}</span>
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-brand-accent transition-colors cursor-pointer">#TechTrends</span>
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-brand-accent transition-colors cursor-pointer">#Innovation</span>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-3 bg-brand-accent text-white rounded-xl font-bold shadow-lg shadow-brand-accent/20 hover:bg-blue-600 transition-all hover:-translate-y-1">
                                <Share2 className="w-4 h-4" /> Share Article
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Sidebar (Sticky) */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            
                            {/* Table of Contents */}
                            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-white/5 shadow-xl shadow-black/5">
                                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-6 uppercase tracking-wider">
                                    In this article
                                </h3>
                                <ul className="space-y-4">
                                    {headings.map((heading, idx) => (
                                        <li key={idx}>
                                            <a href={`#${heading.slug}`} className="flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-brand-accent dark:hover:text-brand-accent transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                                                {heading.text}
                                            </a>
                                        </li>
                                    ))}
                                    {headings.length === 0 && (
                                        <p className="text-sm text-slate-500 dark:text-slate-400">No sections available.</p>
                                    )}
                                </ul>
                            </div>

                            {/* Sidebar CTA */}
                            <div className="relative overflow-hidden bg-brand-primary dark:bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 shadow-2xl shadow-brand-primary/20">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/30 rounded-full blur-[50px] -z-0"></div>
                                <div className="relative z-10 text-center">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-6 border border-white/20">
                                        <ArrowRight className="w-6 h-6 text-brand-accent" />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-4 leading-snug">
                                        Need a Custom Tech Solution?
                                    </h3>
                                    <p className="text-sm text-slate-400 font-medium mb-8">
                                        Our expert team is ready to turn your ideas into reality. Let's build something great together.
                                    </p>
                                    <a href="/contact" className="inline-block w-full px-6 py-3 bg-brand-accent text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-brand-accent/20">
                                        Consult With Experts
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* --- Related Articles --- */}
            <section className="bg-white dark:bg-slate-900 py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                                Related <span className="text-brand-accent">Articles</span>
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400">Discover more insights and resources from our team.</p>
                        </div>
                        <a href="/blog" className="hidden sm:flex items-center gap-2 text-brand-accent font-bold hover:gap-3 transition-all">
                            View All <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedPosts.map((relatedPost, idx) => (
                            <a href={`/blog/${relatedPost.id}`} key={idx} className="group flex flex-col bg-slate-50 dark:bg-[#0B0F19] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={relatedPost.image}
                                        alt={relatedPost.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-brand-accent text-xs font-bold rounded-lg shadow-sm">
                                            {relatedPost.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 mb-3 font-medium uppercase tracking-wider">
                                        <span>{relatedPost.date}</span>
                                        <span>•</span>
                                        <span>{relatedPost.readTime}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-accent transition-colors leading-snug line-clamp-2">
                                        {relatedPost.title}
                                    </h3>
                                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-200 dark:border-white/5">
                                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{relatedPost.author}</span>
                                        <ChevronRight className="w-4 h-4 text-brand-accent transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </a>
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
