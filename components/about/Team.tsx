"use client";
import { motion } from 'motion/react';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Md. Ismail Hossain',
      role: 'Founder & Managing Director',
      image: '/images/teams/ismail-hossain-md-profile.png',
      expertise: ['Software Engineer', 'Laravel', 'Android Studio', 'PHP', 'Tailwind'],
    },
    {
      name: 'Imtiaz Ahmed',
      role: 'Co-Founder & CEO',
      image: '/images/teams/imtiaz-ahmed-ceo-profile.png',
      expertise: ['MERN Stack', 'Next.js', 'AWS', 'Docker', 'UI/UX Design'],
    },
    {
      name: 'Anika Tabassum',
      role: 'Chief Admin Officer',
      image: '/images/teams/anika-tabassum-cao-profile.png',
      expertise: ['Administration', 'Management', 'Operations'],
    },
    {
      name: 'Md. Mamun Hossain',
      role: 'Founder & CEO of Injaazh',
      image: '/images/teams/mamun-hossain.png',
      expertise: ['SEO', 'UI/UX Design', 'WordPress', 'Lovable AI'],
    },
    {
      name: 'Khandaker Fozle Rabby',
      role: 'MERN Developer',
      image: '/images/teams/shanto-web-design-profile.png',
      expertise: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Laravel'],
    },
    {
      name: 'Arafat Al Siam',
      role: 'Web Developer',
      image: '/images/teams/arafat-web-dev-profile.png',
      expertise: ['PHP', 'Laravel', 'WP Theme Dev', 'Tailwind CSS'],
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-black text-brand-accent tracking-[0.3em] uppercase mb-4">Our Core Team</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-primary dark:text-white leading-tight">
            Meet the Minds Behind <br className="hidden md:block" /> the Masterpieces
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-24">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative h-full"
            >
              {/* Card Background & Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent rounded-[2.5rem] transform transition-transform duration-500 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-brand-accent/30 dark:group-hover:border-brand-accent/30 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-xl shadow-slate-200/20 dark:shadow-none" />

              <div className="relative pt-10 px-6 pb-10 text-center flex flex-col items-center h-full">
                {/* Image Container with Floating Effect */}
                <div className="relative w-32 h-32 mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute inset-0 bg-brand-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-800"
                  />

                  {/* Social Links on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50 rounded-full backdrop-blur-sm">
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-primary hover:bg-brand-accent hover:text-white transition-all transform hover:scale-110">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-primary hover:bg-brand-accent hover:text-white transition-all transform hover:scale-110">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Text Content */}
                <h4 className="text-xl font-bold text-brand-primary dark:text-white mb-2 group-hover:text-brand-accent transition-colors">{member.name}</h4>
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                  <p className="text-[10px] sm:text-[11px] font-black text-brand-accent uppercase tracking-[0.2em]">{member.role}</p>
                </div>

                {/* Expertise Badges */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {member.expertise.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800/80 rounded-lg text-[11px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 group-hover:border-brand-accent/30 transition-colors shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
