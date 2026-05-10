"use client";
import { motion } from 'motion/react';
import { ShoppingBag, Star, Terminal, Database, Smartphone, Figma, Server, Monitor } from 'lucide-react';
import ClientsMarquee from '../ClientsMarquee';

export default function TrustAndTech() {
  const techStack = [
    // --- Frontend & UI Development ---
    { name: 'HTML5', slug: 'html5', color: 'E34F26', alt: 'HTML5 Markup for Responsive Web Development', title: 'HTML5' },
    { name: 'CSS3', slug: 'css', color: '1572B6', alt: 'CSS3 Styling for Modern Website Design', title: 'CSS3' },
    { name: 'Bootstrap', slug: 'bootstrap', color: '7952B3', alt: 'Bootstrap Framework for Mobile-First Web Development', title: 'Bootstrap' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4', alt: 'Tailwind CSS Utility-First Styling for Custom UI Design', title: 'Tailwind CSS' },
    { name: 'Sass', slug: 'sass', color: 'CC6699', alt: 'Sass Preprocessor for Scalable CSS Architecture', title: 'Sass' },
    { name: 'React.js', slug: 'react', color: '61DAFB', alt: 'React.js Frontend Development for Interactive Web Interfaces', title: 'React.js' },
    { name: 'Next.js', slug: 'nextdotjs', color: '000000', invertDark: true, alt: 'Next.js React Framework for High-Performance SEO Websites', title: 'Next.js' },
    { name: 'Alpine.js', slug: 'alpinedotjs', color: '8BC0D0', alt: 'Alpine.js Lightweight JavaScript for Interactive UIs', title: 'Alpine.js' },

    // --- Backend & Frameworks ---
    { name: 'PHP', slug: 'php', color: '777BB4', alt: 'PHP Backend Development for Dynamic Web Applications', title: 'PHP' },
    { name: 'Laravel', slug: 'laravel', color: 'FF2D20', alt: 'Laravel PHP Framework for Custom Software Development', title: 'Laravel' },
    { name: 'Livewire', slug: 'livewire', color: '4E56A6', alt: 'Laravel Livewire for Dynamic Full-Stack Web Applications', title: 'Livewire' },
    { name: 'Node.js', slug: 'nodedotjs', color: '339933', alt: 'Node.js Server-Side Development for Scalable Applications', title: 'Node.js' },
    { name: 'Express.js', slug: 'express', color: '000000', invertDark: true, alt: 'Express.js Backend Framework for Secure API Development', title: 'Express.js' },

    // --- Database ---
    { name: 'MongoDB', slug: 'mongodb', color: '47A248', alt: 'MongoDB NoSQL Database for Scalable Software Solutions', title: 'MongoDB' },
    { name: 'MySQL', slug: 'mysql', color: '4479A1', alt: 'MySQL Relational Database for Secure Enterprise Applications', title: 'MySQL' },
    { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1', alt: 'PostgreSQL Advanced Database for Robust Web Software', title: 'PostgreSQL' },
    { name: 'Supabase', slug: 'supabase', color: '3ECF8E', alt: 'Supabase Open Source Firebase Alternative for Backend Services', title: 'Supabase' },

    // --- Design ---
    { name: 'Figma', slug: 'figma', color: 'F24E1E', alt: 'Figma UI/UX Design Tool for High-Performance Minimalist Prototyping', title: 'Figma' },
    { name: 'Illustrator', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg', alt: 'Adobe Illustrator for Creative Graphic and Vector Design', title: 'Illustrator' },

    // --- CMS & E-commerce ---
    { name: 'WordPress', slug: 'wordpress', color: '21759B', alt: 'WordPress CMS for Custom Blog and Business Website Development', title: 'WordPress' },
    { name: 'PrestaShop', slug: 'prestashop', color: 'DF0067', alt: 'PrestaShop Open-Source E-commerce Solution for Online Stores', title: 'PrestaShop' },

    // --- Mobile & Version Control ---
    { name: 'Android Studio', slug: 'androidstudio', color: '3DDC84', alt: 'Android Studio IDE for Custom Mobile App Development', title: 'Android Studio' },
    { name: 'Git', slug: 'git', color: 'F05032', alt: 'Git Version Control for Collaborative Software Engineering', title: 'Git' },
    { name: 'GitHub', slug: 'github', color: '181717', invertDark: true, alt: 'GitHub Code Hosting for Secure Agile Development', title: 'GitHub' },

    // --- Cloud, DevOps & Analytics ---
    { name: 'Vercel', slug: 'vercel', color: '000000', invertDark: true, alt: 'Vercel Cloud Deployment for Fast Frontend Web Applications', title: 'Vercel' },
    { name: 'Docker', slug: 'docker', color: '2496ED', alt: 'Docker Containerization for Scalable IT Infrastructure', title: 'Docker' },
    { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', invertDark: true, alt: 'Amazon Web Services (AWS) for Secure Cloud Hosting Infrastructure', title: 'AWS' },
    { name: 'Google Analytics', slug: 'googleanalytics', color: 'E37400', alt: 'Google Analytics for Data-Driven Digital Marketing Insights', title: 'Google Analytics' },
    { name: 'Search Console', slug: 'googlesearchconsole', color: '4285F4', alt: 'Google Search Console for Technical SEO and Website Performance', title: 'Search Console' }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Block 1: Trusted Clients */}
        <div className="mb-20 md:mb-40 -mx-4 sm:-mx-6 lg:-mx-8">
          <ClientsMarquee className="!bg-transparent dark:!bg-transparent !py-0 !border-none" />
        </div>

        {/* Block 2: Templates */}
        <div className="mb-20 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-20 relative overflow-hidden text-center border border-slate-800"
          >
            {/* Glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white mb-8 leading-[1.1] text-balance mx-auto">
                Our Templates in <br className="hidden md:block" />
                <span className="text-brand-accent text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-400 transition-colors cursor-default">Themes Jet</span> and <span className="text-brand-accent text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-cyan-400 transition-colors cursor-default">Template Monster</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-[16px] mb-12 max-w-2xl mx-auto font-medium">
                Accelerate your web development with our top-rated UI/UX kits and responsive HTML templates. Built with global standards and trusted by developers worldwide on TemplateMonster and Themes Jet.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="https://themesjet.com/"
                  target="_blank"
                  rel="noopener dofollow"
                  className="w-full sm:w-auto bg-brand-accent text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
                >
                  <Star className="w-5 h-5 mr-3" /> Explore Themes Jet
                </a>
                <a
                  href="https://www.templatemonster.com/store/themes_jet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white/5 text-white hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl font-bold flex items-center justify-center transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
                >
                  <ShoppingBag className="w-5 h-5 mr-3" /> View Template Monster
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Block 3: Technologies */}
        <div>
          <div className="text-center mb-16">
            <p className="text-[12px] font-black text-brand-accent tracking-[0.3em] uppercase mb-4">Modern Tech Stack</p>
            <h2 className="text-3xl md:text-[42px] font-black text-brand-primary dark:text-white text-balance mx-auto leading-tight mb-6">
              Advanced Technologies We Use for <br className="hidden md:block" /> Custom Software & Web Development
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-[17px] max-w-3xl mx-auto font-medium leading-relaxed">
              We leverage the latest frontend, backend, and cloud technologies to build fast, secure, and highly scalable digital solutions for modern businesses.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 10) * 0.05 }}
                className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/50 px-4 md:px-5 py-3 rounded-2xl hover:border-brand-accent/30 dark:hover:border-brand-accent/50 hover:shadow-xl hover:shadow-brand-accent/5 transition-all group cursor-default"
              >
                <img
                  src={tech.iconUrl || `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  alt={tech.name}
                  className={`w-6 h-6 group-hover:scale-110 transition-transform duration-300 ${tech.invertDark ? 'dark:invert opacity-80 group-hover:opacity-100' : ''}`}
                />
                <span className="text-sm font-bold text-brand-primary dark:text-slate-300 group-hover:text-brand-accent transition-colors">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
