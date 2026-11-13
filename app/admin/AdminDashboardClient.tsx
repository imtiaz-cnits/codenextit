"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Briefcase, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit3, 
  ExternalLink, 
  Upload, 
  X, 
  Check, 
  AlertCircle, 
  Calendar, 
  User, 
  Clock, 
  Sparkles, 
  Code2, 
  Globe, 
  Database, 
  ShieldCheck, 
  Zap, 
  Key, 
  ArrowRight,
  ChevronRight,
  Sun,
  Moon,
  Smartphone,
  Layout,
  Settings
} from 'lucide-react';
import { 
  loginAdmin, 
  logoutAdmin, 
  saveOrUpdateBlog, 
  deleteBlog, 
  saveOrUpdatePortfolio, 
  deletePortfolio, 
  uploadImage 
} from '../actions';
import { BlogPost, ProjectDetail } from '@/lib/db';
import Image from 'next/image';
import BrandLogo from '@/components/BrandLogo';

interface AdminDashboardClientProps {
  initialAuthenticated: boolean;
  initialBlogs: BlogPost[];
  initialPortfolios: ProjectDetail[];
}

const AVAILABLE_ICONS = ["Code2", "Layout", "Settings", "ShieldCheck", "Zap", "Globe", "Smartphone", "Database", "Clock", "Sparkles"];

// Auto Icon Matcher based on tech name
const getAutoIconForTech = (name: string): string => {
  const normalized = name.toLowerCase().trim();
  
  if (
    normalized.includes('app') || 
    normalized.includes('mobile') || 
    normalized.includes('ios') || 
    normalized.includes('android') || 
    normalized.includes('flutter') || 
    normalized.includes('react native') ||
    normalized.includes('swift') ||
    normalized.includes('kotlin')
  ) {
    return 'Smartphone';
  }
  
  if (
    normalized.includes('database') || 
    normalized.includes('db') || 
    normalized.includes('mongodb') || 
    normalized.includes('sql') || 
    normalized.includes('postgres') || 
    normalized.includes('mysql') || 
    normalized.includes('redis') || 
    normalized.includes('supabase') || 
    normalized.includes('prisma') ||
    normalized.includes('orm') ||
    normalized.includes('mongoose') ||
    normalized.includes('storage')
  ) {
    return 'Database';
  }
  
  if (
    normalized.includes('security') || 
    normalized.includes('auth') || 
    normalized.includes('login') || 
    normalized.includes('ssl') || 
    normalized.includes('shield') || 
    normalized.includes('secure') || 
    normalized.includes('jwt') ||
    normalized.includes('oauth') ||
    normalized.includes('encryption')
  ) {
    return 'ShieldCheck';
  }
  
  if (
    normalized.includes('speed') || 
    normalized.includes('performance') || 
    normalized.includes('zap') || 
    normalized.includes('optimization') || 
    normalized.includes('fast') || 
    normalized.includes('seo') || 
    normalized.includes('vite') ||
    normalized.includes('cdn') ||
    normalized.includes('cache')
  ) {
    return 'Zap';
  }
  
  if (
    normalized.includes('globe') || 
    normalized.includes('web') || 
    normalized.includes('internet') || 
    normalized.includes('domain') || 
    normalized.includes('hosting') || 
    normalized.includes('cloud') || 
    normalized.includes('aws') ||
    normalized.includes('vercel') ||
    normalized.includes('netlify') ||
    normalized.includes('api') ||
    normalized.includes('rest') ||
    normalized.includes('graphql')
  ) {
    return 'Globe';
  }
  
  if (
    normalized.includes('figma') || 
    normalized.includes('design') || 
    normalized.includes('ui') || 
    normalized.includes('ux') || 
    normalized.includes('adobe') || 
    normalized.includes('creative') || 
    normalized.includes('photoshop') ||
    normalized.includes('illustrator') ||
    normalized.includes('sketch') ||
    normalized.includes('layout') ||
    normalized.includes('wireframe') ||
    normalized.includes('theme') ||
    normalized.includes('styling') ||
    normalized.includes('css') ||
    normalized.includes('tailwind') ||
    normalized.includes('bootstrap')
  ) {
    return 'Layout';
  }
  
  if (
    normalized.includes('setting') || 
    normalized.includes('config') || 
    normalized.includes('admin') || 
    normalized.includes('panel') || 
    normalized.includes('dashboard') ||
    normalized.includes('setup') ||
    normalized.includes('manage')
  ) {
    return 'Settings';
  }
  
  if (
    normalized.includes('time') || 
    normalized.includes('clock') || 
    normalized.includes('duration') || 
    normalized.includes('schedule') || 
    normalized.includes('history') ||
    normalized.includes('real-time') ||
    normalized.includes('delay')
  ) {
    return 'Clock';
  }
  
  return 'Code2';
};

// Dynamic Icon Renderer Helper
const renderTechIcon = (iconName: string, className = "w-4 h-4 text-brand-accent") => {
  switch (iconName) {
    case 'Code2': return <Code2 className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Database': return <Database className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Smartphone': return <Smartphone className={className} />;
    case 'Layout': return <Layout className={className} />;
    case 'Settings': return <Settings className={className} />;
    default: return <Code2 className={className} />;
  }
};
const BLOG_CATEGORIES = ["Web Development", "App Development", "AI & ML", "Cybersecurity", "UI/UX Design", "Digital Marketing"];
const PORTFOLIO_CATEGORIES = ["Web Development", "E-Commerce", "UI/UX Design", "App Development", "Management Softwares"];

export default function AdminDashboardClient({
  initialAuthenticated,
  initialBlogs,
  initialPortfolios
}: AdminDashboardClientProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthenticated);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  // Dashboard Tabs: 'overview' | 'portfolios' | 'blogs'
  const [activeTab, setActiveTab] = useState<'overview' | 'portfolios' | 'blogs'>('overview');
  
  // Data States
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [portfolios, setPortfolios] = useState<ProjectDetail[]>(initialPortfolios);
  
  // Modal States
  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [editingPortfolio, setEditingPortfolio] = useState<ProjectDetail | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  // File Input Refs
  const blogImageRef = useRef<HTMLInputElement>(null);
  const portfolioImageRef = useRef<HTMLInputElement>(null);

  // Theme Switcher State & Effects
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  // -------------------------------------------------------------
  // Auth Handlers
  // -------------------------------------------------------------
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    setIsLoggingIn(true);
    setLoginError('');
    
    try {
      const res = await loginAdmin(password);
      if (res.success) {
        setIsAuthenticated(true);
        // Refresh data
        window.location.reload();
      } else {
        setLoginError(res.message);
      }
    } catch (err) {
      setLoginError('An error occurred during authentication.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logoutAdmin();
    setIsAuthenticated(false);
  };

  // -------------------------------------------------------------
  // Image Upload Handler
  // -------------------------------------------------------------
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, target: 'blog' | 'portfolio') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await uploadImage(formData);
      if (res.success && res.url) {
        if (target === 'blog' && editingBlog) {
          setEditingBlog({ ...editingBlog, image: res.url });
        } else if (target === 'portfolio' && editingPortfolio) {
          setEditingPortfolio({ ...editingPortfolio, mainImage: res.url });
        }
      } else {
        alert(`Failed to upload image: ${res.error || 'Please try again.'}`);
      }
    } catch (err: any) {
      alert(`Failed to upload image: ${err.message || 'Please try again.'}`);
    } finally {
      setUploadingImage(false);
    }
  };

  // -------------------------------------------------------------
  // Blog Handlers
  // -------------------------------------------------------------
  const openNewBlogModal = () => {
    setEditingBlog({
      id: 0,
      title: '',
      excerpt: '',
      content: '',
      category: BLOG_CATEGORIES[0],
      author: 'Imtiaz Ahmed',
      authorImage: '',
      date: '',
      readTime: '5 min read',
      image: '/images/blog/featured.png',
      featured: false
    });
    setBlogModalOpen(true);
  };

  const openEditBlogModal = (blog: BlogPost) => {
    setEditingBlog({ ...blog });
    setBlogModalOpen(true);
  };

  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog) return;
    setIsSaving(true);

    try {
      const res = await saveOrUpdateBlog(editingBlog);
      if (res.success && res.blog) {
        if (editingBlog.id) {
          // Updated
          setBlogs(blogs.map(b => b.id === res.blog!.id ? res.blog! : b));
        } else {
          // Created
          setBlogs([res.blog!, ...blogs]);
        }
        setBlogModalOpen(false);
        setEditingBlog(null);
      }
    } catch (err) {
      alert('Failed to save blog post.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteBlog = async (id: number) => {
    if (!confirm('Are you absolutely sure you want to delete this blog post?')) return;

    try {
      const res = await deleteBlog(id);
      if (res.success) {
        setBlogs(blogs.filter(b => b.id !== id));
      }
    } catch (err) {
      alert('Failed to delete blog post.');
    }
  };

  // -------------------------------------------------------------
  // Portfolio Handlers
  // -------------------------------------------------------------
  const openNewPortfolioModal = () => {
    setEditingPortfolio({
      slug: '',
      title: '',
      client: '',
      category: PORTFOLIO_CATEGORIES[0],
      year: new Date().getFullYear().toString(),
      mainImage: '/images/Themes Jet.png',
      imageAlt: '',
      tags: [],
      overview: '',
      challenge: '',
      solution: '',
      techStack: [],
      features: [],
      results: [],
      liveLink: ''
    });
    setPortfolioModalOpen(true);
  };

  const openEditPortfolioModal = (project: ProjectDetail) => {
    setEditingPortfolio({
      ...project,
      imageAlt: project.imageAlt || '',
      tags: project.tags || [],
      techStack: project.techStack || [],
      features: project.features || [],
      results: project.results || []
    });
    setPortfolioModalOpen(true);
  };

  const handleSavePortfolio = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPortfolio) return;
    setIsSaving(true);

    try {
      const res = await saveOrUpdatePortfolio(editingPortfolio);
      if (res.success && res.portfolio) {
        const exist = portfolios.some(p => p.slug === res.portfolio!.slug);
        if (exist) {
          setPortfolios(portfolios.map(p => p.slug === res.portfolio!.slug ? res.portfolio! : p));
        } else {
          setPortfolios([res.portfolio!, ...portfolios]);
        }
        setPortfolioModalOpen(false);
        setEditingPortfolio(null);
      }
    } catch (err) {
      alert('Failed to save portfolio project.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeletePortfolio = async (slug: string) => {
    if (!confirm('Are you absolutely sure you want to delete this portfolio project?')) return;

    try {
      const res = await deletePortfolio(slug);
      if (res.success) {
        setPortfolios(portfolios.filter(p => p.slug !== slug));
      }
    } catch (err) {
      alert('Failed to delete portfolio project.');
    }
  };

  // -------------------------------------------------------------
  // Dynamic Arrays Inline Helpers
  // -------------------------------------------------------------
  // Tags
  const addTag = (tag: string) => {
    if (!tag.trim() || !editingPortfolio) return;
    if (editingPortfolio.tags.includes(tag.trim())) return;
    setEditingPortfolio({
      ...editingPortfolio,
      tags: [...editingPortfolio.tags, tag.trim()]
    });
  };

  const removeTag = (index: number) => {
    if (!editingPortfolio) return;
    setEditingPortfolio({
      ...editingPortfolio,
      tags: editingPortfolio.tags.filter((_, i) => i !== index)
    });
  };

  // Tech Stack
  const addTechStackItem = (name: string, icon: string) => {
    if (!name.trim() || !editingPortfolio) return;
    setEditingPortfolio({
      ...editingPortfolio,
      techStack: [...editingPortfolio.techStack, { name: name.trim(), icon }]
    });
  };

  const removeTechStackItem = (index: number) => {
    if (!editingPortfolio) return;
    setEditingPortfolio({
      ...editingPortfolio,
      techStack: editingPortfolio.techStack.filter((_, i) => i !== index)
    });
  };

  // Features
  const addFeatureItem = (title: string, desc: string, icon: string) => {
    if (!title.trim() || !desc.trim() || !editingPortfolio) return;
    setEditingPortfolio({
      ...editingPortfolio,
      features: [...editingPortfolio.features, { title: title.trim(), desc: desc.trim(), icon }]
    });
  };

  const removeFeatureItem = (index: number) => {
    if (!editingPortfolio) return;
    setEditingPortfolio({
      ...editingPortfolio,
      features: editingPortfolio.features.filter((_, i) => i !== index)
    });
  };

  // Results
  const addResultItem = (label: string, value: string) => {
    if (!label.trim() || !value.trim() || !editingPortfolio) return;
    setEditingPortfolio({
      ...editingPortfolio,
      results: [...editingPortfolio.results, { label: label.trim(), value: value.trim() }]
    });
  };

  const removeResultItem = (index: number) => {
    if (!editingPortfolio) return;
    setEditingPortfolio({
      ...editingPortfolio,
      results: editingPortfolio.results.filter((_, i) => i !== index)
    });
  };

  // -------------------------------------------------------------
  // RENDER LOGIN SCREEN (If not authenticated)
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#060814] relative overflow-hidden font-sans">
        {/* Floating Theme Toggle on Login Screen */}
        <div className="absolute top-6 right-6 z-20">
          <button 
            type="button"
            onClick={toggleTheme}
            className="p-3 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md text-slate-300 hover:text-brand-accent hover:border-brand-accent/30 transition-all cursor-pointer shadow-xl"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-brand-accent" /> : <Moon className="w-5 h-5 text-amber-400" />}
          </button>
        </div>
        {/* Futuristic Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 grid-pattern opacity-[0.08] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md relative z-10 px-4"
        >
          <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 md:p-12 shadow-2xl shadow-black/80">
            {/* CNIT Branding */}
            <div className="text-center mb-8">
              <BrandLogo variant="dark" className="h-6 w-auto mx-auto mb-5" />
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                <span className="text-[9px] font-black text-brand-accent uppercase tracking-[0.25em]">Secure Terminal</span>
              </div>
              <h1 className="text-3xl font-black text-white leading-tight">
                CNIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-500">Developer</span> Portal
              </h1>
              <p className="text-slate-400 text-sm mt-3 font-medium">
                Administrative authentication required to upload or modify services, portfolios, and insights.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-widest block">Access Key</label>
                  <button 
                    type="button" 
                    onClick={() => setPassword('admin123')}
                    className="text-[10px] font-bold text-brand-accent hover:text-cyan-400 transition-colors cursor-pointer select-none"
                  >
                    Click to insert key
                  </button>
                </div>
                <div className="relative">
                  <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="password"
                    placeholder="••••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-950/80 border border-white/15 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent/40 transition-all font-mono"
                    required
                  />
                </div>
              </div>

              {loginError && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-xs font-medium">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-4 bg-brand-accent text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
              >
                {isLoggingIn ? 'Verifying Credentials...' : 'Authenticate'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
            
            <div className="text-center mt-8 text-[10px] text-slate-500 font-mono">
              © {new Date().getFullYear()} CodeNext IT. Engineering Digital Excellence.
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER FULL CMS DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#070913] text-white font-sans flex flex-col relative overflow-hidden">
      {/* Dynamic Theme Specific Overrides aligned with Website's Theme */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* DARK MODE ALIGNED OVERRIDES */
        html.dark body,
        html.dark .min-h-screen,
        html.dark .bg-\\[\\#070913\\],
        html.dark .bg-\\[\\#060814\\] {
          background-color: #020617 !important; /* Deep Navy/Black */
          color: #f8fafc !important;
        }
        
        html.dark header {
          background-color: rgba(2, 6, 23, 0.8) !important;
          border-color: rgba(255, 255, 255, 0.05) !important;
        }
        
        html.dark aside > div,
        html.dark .bg-slate-900\\/40,
        html.dark .bg-slate-900\\/30,
        html.dark .bg-slate-950\\/25,
        html.dark .bg-slate-900\\/60,
        html.dark .bg-\\[\\#090c15\\] {
          background-color: #0f172a !important; /* Slate-900 */
          border-color: rgba(255, 255, 255, 0.05) !important;
          color: #f8fafc !important;
        }

        /* LIGHT MODE ALIGNED OVERRIDES */
        html:not(.dark) body,
        html:not(.dark) .min-h-screen,
        html:not(.dark) .bg-\\[\\#070913\\],
        html:not(.dark) .bg-\\[\\#060814\\] {
          background-color: #ffffff !important; /* White */
          color: #020617 !important;
        }
        
        html:not(.dark) header {
          background-color: rgba(255, 255, 255, 0.85) !important;
          border-color: #e2e8f0 !important;
          color: #020617 !important;
        }
        
        html:not(.dark) header h1 {
          color: #020617 !important;
        }

        /* Sidebar Navigation & Stats Bento Cards & Modal */
        html:not(.dark) aside > div,
        html:not(.dark) .bg-slate-900\\/40,
        html:not(.dark) .bg-slate-900\\/30,
        html:not(.dark) .bg-slate-950\\/25,
        html:not(.dark) .bg-slate-900\\/60,
        html:not(.dark) .bg-\\[\\#090c15\\] {
          background-color: #f8fafc !important; /* Slate-50 */
          border-color: #e2e8f0 !important;
          color: #020617 !important;
          box-shadow: 0 4px 6px -1px rgba(2, 6, 23, 0.05), 0 2px 4px -1px rgba(2, 6, 23, 0.03) !important;
        }
        
        /* Stats titles & numbers */
        html:not(.dark) h3,
        html:not(.dark) h4,
        html:not(.dark) .text-white,
        html:not(.dark) .text-slate-300 {
          color: #020617 !important;
        }
        
        html:not(.dark) p,
        html:not(.dark) span,
        html:not(.dark) .text-slate-400 {
          color: #475569 !important;
        }
        
        html:not(.dark) .text-slate-500 {
          color: #64748b !important;
        }
        
        /* Sidebar buttons */
        html:not(.dark) aside button:not(.bg-brand-accent) {
          color: #475569 !important;
          background-color: transparent !important;
        }
        html:not(.dark) aside button:not(.bg-brand-accent):hover {
          background-color: #f1f5f9 !important;
          color: #020617 !important;
        }
        
        /* Core action blocks (Publish case study / Write Insight) */
        html:not(.dark) .bg-brand-accent\\/5 {
          background-color: rgba(0, 98, 255, 0.04) !important;
          border-color: rgba(0, 98, 255, 0.15) !important;
        }
        html:not(.dark) .bg-brand-accent\\/5:hover {
          background-color: rgba(0, 98, 255, 0.08) !important;
          border-color: rgba(0, 98, 255, 0.25) !important;
        }
        html:not(.dark) .bg-cyan-500\\/5 {
          background-color: rgba(6, 182, 212, 0.04) !important;
          border-color: rgba(6, 182, 212, 0.15) !important;
        }
        html:not(.dark) .bg-cyan-500\\/5:hover {
          background-color: rgba(6, 182, 212, 0.08) !important;
          border-color: rgba(6, 182, 212, 0.25) !important;
        }
        
        /* Tables */
        html:not(.dark) table {
          background-color: #ffffff !important;
        }
        html:not(.dark) th {
          background-color: #f1f5f9 !important;
          color: #475569 !important;
          border-bottom: 1px solid #e2e8f0 !important;
        }
        html:not(.dark) td {
          border-bottom: 1px solid #f1f5f9 !important;
          color: #020617 !important;
        }
        html:not(.dark) tr:hover td {
          background-color: #f8fafc !important;
        }
        
        /* Inputs, textareas & select fields */
        html:not(.dark) input,
        html:not(.dark) select,
        html:not(.dark) textarea,
        html:not(.dark) .bg-slate-950 {
          background-color: #ffffff !important;
          border-color: #cbd5e1 !important;
          color: #020617 !important;
        }
        html:not(.dark) input::placeholder,
        html:not(.dark) textarea::placeholder {
          color: #94a3b8 !important;
        }
        
        /* Badges & Console badge */
        html:not(.dark) .bg-white\\/5 {
          background-color: #f1f5f9 !important;
          border-color: #e2e8f0 !important;
          color: #475569 !important;
        }
        
        /* Global border colors */
        html:not(.dark) .border-white\\/10,
        html:not(.dark) .border-white\\/5 {
          border-color: #e2e8f0 !important;
        }
        
        /* Edit & Delete buttons styling inside list */
        html:not(.dark) .hover\\:bg-white\\/5 {
          background-color: transparent !important;
        }
        html:not(.dark) .hover\\:bg-white\\/5:hover {
          background-color: #f1f5f9 !important;
        }
        
        /* Active ActiveTab Indicator should remain brand colored */
        html:not(.dark) .bg-brand-accent {
          background-color: #0062FF !important;
          color: #ffffff !important;
        }
      ` }} />
      {/* Glow Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* --- DASHBOARD HEADER --- */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-[#070913]/80 backdrop-blur-xl py-5 px-6 lg:px-12 flex justify-between items-center transition-colors">
        <div className="flex items-center space-x-3">
          <span className="flex h-3 w-3 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
          </span>
          <BrandLogo className="h-4 sm:h-5 w-auto" />
          <h1 className="sr-only">CNIT Admin Portal</h1>
          <div className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">
            Admin Portal
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-xs font-semibold text-slate-400 hidden md:inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5">
            <User className="w-3.5 h-3.5 text-brand-accent" />
            Developer Console
          </span>
          {/* Theme Toggle Button */}
          <button 
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center p-2.5 border border-white/10 hover:border-brand-accent/50 hover:bg-brand-accent/10 text-slate-300 hover:text-white rounded-xl transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-brand-accent" /> : <Moon className="w-4 h-4 text-amber-400" />}
          </button>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-red-500/30 hover:bg-red-500/10 text-slate-300 hover:text-red-400 text-xs font-bold rounded-xl transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Exit Portal
          </button>
        </div>
      </header>

      {/* --- DASHBOARD BODY --- */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-12 relative z-10">
        
        {/* SIDEBAR TABS PANEL */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 space-y-2">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 px-3">Navigation Menu</p>
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'overview' 
                  ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Portal Overview
            </button>
            <button
              onClick={() => setActiveTab('portfolios')}
              className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'portfolios' 
                  ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Manage Portfolio
            </button>
            <button
              onClick={() => setActiveTab('blogs')}
              className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'blogs' 
                  ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              Manage Blog Articles
            </button>
          </div>

          <div className="hidden lg:block bg-gradient-to-tr from-brand-accent/5 to-cyan-500/5 border border-white/5 rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl"></div>
            <Sparkles className="w-8 h-8 text-brand-accent mb-4" />
            <h4 className="text-sm font-bold mb-2">Automated Optimization</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Every blog and portfolio project you upload is automatically compiled into static data, SEO schema microdata, and local caches for zero-latency loading.
            </p>
          </div>
        </aside>

        {/* MAIN PANEL CONTENT */}
        <main className="lg:col-span-9 space-y-8">
          
          {/* TAB 1: OVERVIEW PANEL */}
          {activeTab === 'overview' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="space-y-8"
            >
              {/* Stat Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-[2rem] p-8">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Total Case Studies</p>
                  <h3 className="text-4xl font-black text-white">{portfolios.length}</h3>
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-brand-accent">
                    <Check className="w-4 h-4" /> Live in production
                  </div>
                </div>
                <div className="bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-[2rem] p-8">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Insight Articles</p>
                  <h3 className="text-4xl font-black text-white">{blogs.length}</h3>
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-cyan-400">
                    <Check className="w-4 h-4" /> Fully SEO optimized
                  </div>
                </div>
                <div className="bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 col-span-1 md:col-span-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Featured Project</p>
                  <h3 className="text-xl font-bold text-white truncate">
                    {portfolios[0]?.title || "No Projects"}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 truncate font-medium">
                    {portfolios[0]?.category || "Deploy custom templates"}
                  </p>
                </div>
              </div>

              {/* Quick Actions Panel */}
              <div className="bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-[2rem] p-8">
                <h3 className="text-lg font-bold mb-6">Real-Time Core Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={openNewPortfolioModal}
                    className="flex items-center justify-between p-6 bg-brand-accent/5 hover:bg-brand-accent/10 border border-brand-accent/15 hover:border-brand-accent/30 rounded-2xl text-left transition-all group cursor-pointer"
                  >
                    <div>
                      <h4 className="text-sm font-bold group-hover:text-brand-accent transition-colors">Publish New Case Study</h4>
                      <p className="text-xs text-slate-400 mt-1 font-medium">Add specifications, tech stack, and visual assets.</p>
                    </div>
                    <Plus className="w-6 h-6 text-brand-accent transition-transform group-hover:scale-110" />
                  </button>

                  <button 
                    onClick={openNewBlogModal}
                    className="flex items-center justify-between p-6 bg-cyan-500/5 hover:bg-cyan-500/10 border border-cyan-500/15 hover:border-cyan-500/30 rounded-2xl text-left transition-all group cursor-pointer"
                  >
                    <div>
                      <h4 className="text-sm font-bold group-hover:text-cyan-400 transition-colors">Write Insight Article</h4>
                      <p className="text-xs text-slate-400 mt-1 font-medium">Draft blog post with rich HTML elements.</p>
                    </div>
                    <Plus className="w-6 h-6 text-cyan-400 transition-transform group-hover:scale-110" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: PORTFOLIOS LIST PANEL */}
          {activeTab === 'portfolios' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">Case Studies & Portfolios</h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">Manage existing work displayed on CNIT website.</p>
                </div>
                <button
                  onClick={openNewPortfolioModal}
                  className="flex items-center gap-2 px-5 py-3 bg-brand-accent hover:bg-blue-600 text-xs font-bold rounded-2xl transition-all shadow-lg shadow-brand-accent/20 cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Add Case Study
                </button>
              </div>

              {/* Portfolio Table/List */}
              <div className="bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-[2rem] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <th className="py-5 px-6">Project details</th>
                        <th className="py-5 px-6">Category</th>
                        <th className="py-5 px-6">Year</th>
                        <th className="py-5 px-6">Live Link</th>
                        <th className="py-5 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {portfolios.map((proj) => (
                        <tr key={proj.slug} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-5 px-6 flex items-center gap-3">
                            <div className="relative w-12 h-8 rounded-lg overflow-hidden border border-white/10 bg-slate-800">
                              <img src={proj.mainImage} alt={proj.title} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white">{proj.title}</p>
                              <p className="text-[10px] text-slate-500 font-mono truncate max-w-[150px]">{proj.slug}</p>
                            </div>
                          </td>
                          <td className="py-5 px-6">
                            <span className="text-xs font-semibold text-slate-300">{proj.category}</span>
                          </td>
                          <td className="py-5 px-6 text-xs text-slate-400">{proj.year}</td>
                          <td className="py-5 px-6 text-xs font-mono">
                            {proj.liveLink ? (
                              <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline flex items-center gap-1">
                                {new URL(proj.liveLink).hostname} <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <span className="text-slate-600">N/A</span>
                            )}
                          </td>
                          <td className="py-5 px-6 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button 
                                onClick={() => openEditPortfolioModal(proj)}
                                className="p-2 border border-white/10 hover:border-brand-accent/50 hover:bg-brand-accent/10 text-slate-400 hover:text-brand-accent rounded-lg transition-all cursor-pointer"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleDeletePortfolio(proj.slug)}
                                className="p-2 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 text-slate-400 hover:text-red-400 rounded-lg transition-all cursor-pointer"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {portfolios.length === 0 && (
                        <tr>
                          <td colSpan={5} className="py-10 text-center text-slate-500 text-sm font-medium">
                            No portfolio case studies found. Create one to get started.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: BLOGS LIST PANEL */}
          {activeTab === 'blogs' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">Insight Articles & Blog</h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">Manage blogs, research, and tech updates on CNIT.</p>
                </div>
                <button
                  onClick={openNewBlogModal}
                  className="flex items-center gap-2 px-5 py-3 bg-brand-accent hover:bg-blue-600 text-xs font-bold rounded-2xl transition-all shadow-lg shadow-brand-accent/20 cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Add Blog Article
                </button>
              </div>

              {/* Blogs Table/List */}
              <div className="bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-[2rem] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <th className="py-5 px-6">Article details</th>
                        <th className="py-5 px-6">Category</th>
                        <th className="py-5 px-6">Author</th>
                        <th className="py-5 px-6">Date</th>
                        <th className="py-5 px-6">Featured</th>
                        <th className="py-5 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {blogs.map((blog) => (
                        <tr key={blog.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-5 px-6 flex items-center gap-3">
                            <div className="relative w-12 h-8 rounded-lg overflow-hidden border border-white/10 bg-slate-800">
                              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="max-w-[200px] md:max-w-[300px]">
                              <p className="text-sm font-bold text-white truncate">{blog.title}</p>
                              <p className="text-[10px] text-slate-500 font-mono truncate">{blog.excerpt}</p>
                            </div>
                          </td>
                          <td className="py-5 px-6">
                            <span className="text-xs font-semibold text-slate-300">{blog.category}</span>
                          </td>
                          <td className="py-5 px-6 text-xs text-slate-300 font-bold">{blog.author}</td>
                          <td className="py-5 px-6 text-xs text-slate-400">{blog.date}</td>
                          <td className="py-5 px-6">
                            {blog.featured ? (
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-accent/15 border border-brand-accent/25 text-[9px] font-black text-brand-accent uppercase tracking-widest">
                                Featured
                              </span>
                            ) : (
                              <span className="text-slate-600 text-xs">—</span>
                            )}
                          </td>
                          <td className="py-5 px-6 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button 
                                onClick={() => openEditBlogModal(blog)}
                                className="p-2 border border-white/10 hover:border-brand-accent/50 hover:bg-brand-accent/10 text-slate-400 hover:text-brand-accent rounded-lg transition-all cursor-pointer"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleDeleteBlog(blog.id)}
                                className="p-2 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 text-slate-400 hover:text-red-400 rounded-lg transition-all cursor-pointer"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {blogs.length === 0 && (
                        <tr>
                          <td colSpan={6} className="py-10 text-center text-slate-500 text-sm font-medium">
                            No insight articles found. Write one to get started.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

        </main>
      </div>

      {/* -------------------------------------------------------------
          MODAL: CREATE/EDIT BLOG POST
      ------------------------------------------------------------- */}
      <AnimatePresence>
        {blogModalOpen && editingBlog && (
          <div 
            className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm overflow-hidden"
            onClick={() => { setBlogModalOpen(false); setEditingBlog(null); }}
          >
            <motion.div 
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="bg-[#090c15] border-l border-white/10 w-full max-w-6xl h-full overflow-y-auto p-8 md:p-10 shadow-2xl relative flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => { setBlogModalOpen(false); setEditingBlog(null); }}
                className="absolute top-6 right-6 p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-black mb-8">
                {editingBlog.id ? 'Modify Blog Post' : 'Draft New Insight Article'}
              </h3>

              <form onSubmit={handleSaveBlog} className="space-y-6">
                
                {/* Title */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Article Title</label>
                  <input
                    type="text"
                    value={editingBlog.title}
                    onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                    placeholder="Enter visual title..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Category</label>
                    <select
                      value={editingBlog.category}
                      onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                    >
                      {BLOG_CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Read Time */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Read Time</label>
                    <input
                      type="text"
                      value={editingBlog.readTime}
                      onChange={(e) => setEditingBlog({ ...editingBlog, readTime: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                      placeholder="e.g. 5 min read"
                    />
                  </div>

                  {/* Author */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Author</label>
                    <input
                      type="text"
                      value={editingBlog.author}
                      onChange={(e) => setEditingBlog({ ...editingBlog, author: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                      placeholder="Author name"
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Brief Summary / Excerpt</label>
                  <textarea
                    value={editingBlog.excerpt}
                    onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50 h-20 resize-none"
                    placeholder="Provide a short hook summary for cards..."
                    required
                  />
                </div>

                {/* Image Upload Area */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-widest block">Cover Image</label>
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative w-full md:w-48 aspect-video rounded-xl overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center">
                      {editingBlog.image ? (
                        <img src={editingBlog.image} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xs text-slate-600">No Image</span>
                      )}
                    </div>
                    <div className="flex-grow space-y-2 w-full">
                      <input
                        type="text"
                        value={editingBlog.image}
                        onChange={(e) => setEditingBlog({ ...editingBlog, image: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-xs font-mono focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                        placeholder="Image URL or Path"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        ref={blogImageRef}
                        onChange={(e) => handleImageUpload(e, 'blog')}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => blogImageRef.current?.click()}
                        disabled={uploadingImage}
                        className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-brand-accent/50 hover:bg-brand-accent/5 text-xs font-bold rounded-xl transition-all cursor-pointer disabled:opacity-55"
                      >
                        <Upload className="w-4 h-4" /> 
                        {uploadingImage ? 'Uploading to server...' : 'Upload Image File'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Rich HTML Content */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Article Body Content (HTML)</label>
                    <span className="text-[10px] text-slate-500 font-mono">Use &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt; tags</span>
                  </div>
                  <textarea
                    value={editingBlog.content}
                    onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white font-mono text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent/50 h-64"
                    placeholder="<h2>Header</h2><p>Your rich blog copy...</p>"
                    required
                  />
                </div>

                {/* Featured Checkbox */}
                <div className="flex items-center gap-3 py-2">
                  <input
                    type="checkbox"
                    id="blog-featured"
                    checked={editingBlog.featured}
                    onChange={(e) => setEditingBlog({ ...editingBlog, featured: e.target.checked })}
                    className="w-5 h-5 rounded bg-slate-950 border-white/10 text-brand-accent focus:ring-brand-accent/50"
                  />
                  <label htmlFor="blog-featured" className="text-xs font-bold text-slate-300 uppercase tracking-widest cursor-pointer select-none">
                    Feature this article on top
                  </label>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/5 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => { setBlogModalOpen(false); setEditingBlog(null); }}
                    className="px-6 py-3 border border-white/10 hover:bg-white/5 text-xs font-bold rounded-xl transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-6 py-3 bg-brand-accent hover:bg-blue-600 text-xs font-bold rounded-xl transition-all shadow-lg shadow-brand-accent/20 cursor-pointer disabled:opacity-50"
                  >
                    {isSaving ? 'Saving Article...' : 'Publish Article'}
                  </button>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* -------------------------------------------------------------
          MODAL: CREATE/EDIT PORTFOLIO CASE STUDY
      ------------------------------------------------------------- */}
      <AnimatePresence>
        {portfolioModalOpen && editingPortfolio && (
          <div 
            className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm overflow-hidden"
            onClick={() => { setPortfolioModalOpen(false); setEditingPortfolio(null); }}
          >
            <motion.div 
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="bg-[#090c15] border-l border-white/10 w-full max-w-6xl h-full overflow-y-auto p-8 md:p-10 shadow-2xl relative flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => { setPortfolioModalOpen(false); setEditingPortfolio(null); }}
                className="absolute top-6 right-6 p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-black mb-8">
                {editingPortfolio.slug ? 'Modify Case Study' : 'Publish New Case Study'}
              </h3>

              <form onSubmit={handleSavePortfolio} className="space-y-8">
                
                {/* Visual Title */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Project Name</label>
                    <input
                      type="text"
                      value={editingPortfolio.title}
                      onChange={(e) => setEditingPortfolio({ ...editingPortfolio, title: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                      placeholder="e.g. Themes Jet"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">URL Slug</label>
                    <input
                      type="text"
                      value={editingPortfolio.slug}
                      onChange={(e) => setEditingPortfolio({ ...editingPortfolio, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white font-mono focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                      placeholder="e.g. themes-jet"
                      disabled={!!editingPortfolio.slug}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Client Name</label>
                    <input
                      type="text"
                      value={editingPortfolio.client}
                      onChange={(e) => setEditingPortfolio({ ...editingPortfolio, client: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                      placeholder="Client Co."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Category</label>
                    <select
                      value={editingPortfolio.category}
                      onChange={(e) => setEditingPortfolio({ ...editingPortfolio, category: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                    >
                      {PORTFOLIO_CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Launch Year</label>
                    <input
                      type="text"
                      value={editingPortfolio.year}
                      onChange={(e) => setEditingPortfolio({ ...editingPortfolio, year: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                      placeholder="2024"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Live Preview Link</label>
                    <input
                      type="url"
                      value={editingPortfolio.liveLink}
                      onChange={(e) => setEditingPortfolio({ ...editingPortfolio, liveLink: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                {/* Image Upload Area */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-widest block">Featured Case Study Image</label>
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative w-full md:w-56 aspect-video rounded-xl overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center">
                      {editingPortfolio.mainImage ? (
                        <img src={editingPortfolio.mainImage} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xs text-slate-600">No Image</span>
                      )}
                    </div>
                    <div className="flex-grow space-y-2 w-full">
                      <input
                        type="text"
                        value={editingPortfolio.mainImage}
                        onChange={(e) => setEditingPortfolio({ ...editingPortfolio, mainImage: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-xs font-mono focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                        placeholder="Image URL or Path"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        ref={portfolioImageRef}
                        onChange={(e) => handleImageUpload(e, 'portfolio')}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => portfolioImageRef.current?.click()}
                        disabled={uploadingImage}
                        className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-brand-accent/50 hover:bg-brand-accent/5 text-xs font-bold rounded-xl transition-all cursor-pointer disabled:opacity-55"
                      >
                        <Upload className="w-4 h-4" /> 
                        {uploadingImage ? 'Uploading to server...' : 'Upload Image File'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image Alt Text Area */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest block">Image Alt Text (SEO)</label>
                    <span className="text-[10px] text-slate-500 font-mono">Dynamic suggestions will be used if left blank</span>
                  </div>
                  <input
                    type="text"
                    value={editingPortfolio.imageAlt || ''}
                    onChange={(e) => setEditingPortfolio({ ...editingPortfolio, imageAlt: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                    placeholder="e.g. E-commerce Website Development for XYZ Brand | CodeNext IT"
                  />
                </div>

                {/* Overview, Challenge, Solution */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Project Overview</label>
                    <textarea
                      value={editingPortfolio.overview}
                      onChange={(e) => setEditingPortfolio({ ...editingPortfolio, overview: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50 h-24"
                      placeholder="Brief overview explaining what the project is..."
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">The Core Challenge</label>
                      <textarea
                        value={editingPortfolio.challenge}
                        onChange={(e) => setEditingPortfolio({ ...editingPortfolio, challenge: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50 h-28"
                        placeholder="What complex challenge did the client face?"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">CNIT Bespoke Solution</label>
                      <textarea
                        value={editingPortfolio.solution}
                        onChange={(e) => setEditingPortfolio({ ...editingPortfolio, solution: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50 h-28"
                        placeholder="How did we engineering a perfect outcome?"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* DYNAMIC LISTS: TAGS EDITOR */}
                <div className="space-y-4 border-t border-white/5 pt-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand-accent">Specifications & Technical Details</h4>
                  
                  {/* Tags */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Keywords / Tags</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        id="new-tag-input"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            addTag((e.target as HTMLInputElement).value);
                            (e.target as HTMLInputElement).value = '';
                          }
                        }}
                        className="flex-grow px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                        placeholder="Type a tag and press Enter..."
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {editingPortfolio.tags.map((tag, idx) => (
                        <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 border border-white/10 rounded-lg text-xs font-bold text-slate-300">
                          {tag}
                          <X className="w-3.5 h-3.5 hover:text-red-400 cursor-pointer" onClick={() => removeTag(idx)} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* DYNAMIC LISTS: TECH STACK */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-6">
                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest block">Technologies Used (Tech Stack)</label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        id="new-tech-name"
                        onInput={(e) => {
                          const val = (e.target as HTMLInputElement).value;
                          const iconSelect = document.getElementById('new-tech-icon') as HTMLSelectElement;
                          if (iconSelect) {
                            iconSelect.value = getAutoIconForTech(val);
                          }
                        }}
                        className="flex-grow px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                        placeholder="Technology name (e.g. Next.js 15)"
                      />
                      <select 
                        id="new-tech-icon"
                        className="w-1/3 md:w-32 flex-shrink-0 px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                      >
                        {AVAILABLE_ICONS.map(ic => <option key={ic} value={ic}>{ic}</option>)}
                      </select>
                      <button
                        type="button"
                        onClick={() => {
                          const nameInput = document.getElementById('new-tech-name') as HTMLInputElement;
                          const iconInput = document.getElementById('new-tech-icon') as HTMLSelectElement;
                          addTechStackItem(nameInput.value, iconInput.value);
                          nameInput.value = '';
                        }}
                        className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-brand-accent hover:bg-blue-600 active:scale-95 text-white rounded-xl transition-all cursor-pointer shadow-lg shadow-brand-accent/20"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {editingPortfolio.techStack.map((tech, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-slate-950 border border-white/5 rounded-xl text-xs">
                          <span className="font-bold flex items-center gap-2">
                            {renderTechIcon(tech.icon)} {tech.name}
                          </span>
                          <span className="flex items-center gap-3 text-slate-500">
                            Icon: <span className="font-mono">{tech.icon}</span>
                            <Trash2 className="w-4 h-4 hover:text-red-400 cursor-pointer" onClick={() => removeTechStackItem(idx)} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results Metrics */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest block">Project Results / Metrics</label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        id="new-result-label"
                        className="flex-grow px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                        placeholder="Label (e.g. Page Load Speed)"
                      />
                      <input
                        type="text"
                        id="new-result-val"
                        className="w-1/3 md:w-36 flex-shrink-0 px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                        placeholder="Value (e.g. 0.8s)"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const lblInput = document.getElementById('new-result-label') as HTMLInputElement;
                          const valInput = document.getElementById('new-result-val') as HTMLInputElement;
                          addResultItem(lblInput.value, valInput.value);
                          lblInput.value = '';
                          valInput.value = '';
                        }}
                        className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-brand-accent hover:bg-blue-600 active:scale-95 text-white rounded-xl transition-all cursor-pointer shadow-lg shadow-brand-accent/20"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {editingPortfolio.results.map((res, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-slate-950 border border-white/5 rounded-xl text-xs">
                          <span className="text-slate-300 font-medium">{res.label}</span>
                          <span className="font-bold flex items-center gap-3 text-cyan-400">
                            {res.value}
                            <Trash2 className="w-4 h-4 hover:text-red-400 cursor-pointer" onClick={() => removeResultItem(idx)} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* DYNAMIC LISTS: KEY FEATURES */}
                <div className="space-y-4 border-t border-white/5 pt-6">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-widest block">Bespoke Platform Features</label>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                    <div className="md:col-span-4">
                      <input
                        type="text"
                        id="new-feat-title"
                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                        placeholder="Feature title (e.g. Multi-Vendor Dashboard)"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <input
                        type="text"
                        id="new-feat-desc"
                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                        placeholder="Short feature description..."
                      />
                    </div>
                    <div className="md:col-span-3 flex gap-3">
                      <select 
                        id="new-feat-icon"
                        className="flex-grow px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50 animate-none"
                      >
                        {AVAILABLE_ICONS.map(ic => <option key={ic} value={ic}>{ic}</option>)}
                      </select>
                      <button
                        type="button"
                        onClick={() => {
                          const titInput = document.getElementById('new-feat-title') as HTMLInputElement;
                          const descInput = document.getElementById('new-feat-desc') as HTMLInputElement;
                          const icoInput = document.getElementById('new-feat-icon') as HTMLSelectElement;
                          addFeatureItem(titInput.value, descInput.value, icoInput.value);
                          titInput.value = '';
                          descInput.value = '';
                        }}
                        className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-brand-accent hover:bg-blue-600 active:scale-95 text-white rounded-xl transition-all cursor-pointer shadow-lg shadow-brand-accent/20"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {editingPortfolio.features.map((feat, idx) => (
                      <div key={idx} className="flex justify-between items-start p-4 bg-slate-950 border border-white/5 rounded-xl text-xs">
                        <div>
                          <p className="font-bold text-white flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-brand-accent" /> {feat.title}
                          </p>
                          <p className="text-slate-400 mt-1 font-medium">{feat.desc}</p>
                        </div>
                        <span className="flex items-center gap-3 text-slate-500 flex-shrink-0">
                          Icon: <span className="font-mono">{feat.icon}</span>
                          <Trash2 className="w-4 h-4 hover:text-red-400 cursor-pointer" onClick={() => removeFeatureItem(idx)} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Save & Cancel */}
                <div className="pt-6 border-t border-white/5 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => { setPortfolioModalOpen(false); setEditingPortfolio(null); }}
                    className="px-6 py-3 border border-white/10 hover:bg-white/5 text-xs font-bold rounded-xl transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-6 py-3 bg-brand-accent hover:bg-blue-600 text-xs font-bold rounded-xl transition-all shadow-lg shadow-brand-accent/20 cursor-pointer disabled:opacity-50"
                  >
                    {isSaving ? 'Saving Project...' : 'Publish Project'}
                  </button>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
