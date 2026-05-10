"use client";
import { motion } from 'motion/react';
import { CheckCircle2, Server, Shield, Zap, Cloud, Cpu, ArrowRight, Star } from 'lucide-react';

export default function Hosting() {
  const plans = [
    {
      name: 'Starter',
      price: '৳ 290',
      period: '/ month',
      description: 'Perfect for small websites or blogs starting out.',
      link: 'https://codenextit.com/clients/index.php?rp=/store/bdix-web-hosting/starter',
      features: [
        'CloudLinux LVE',
        'cPanel Control Panel',
        'Daily Offsite Backups',
        'Unmetered Bandwidth',
        'Maximum Security'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '৳ 530',
      period: '/ month',
      description: 'Ideal for growing businesses and professional portfolios.',
      link: 'https://codenextit.com/clients/index.php?rp=/store/bdix-web-hosting/bdix-web-hosting-standard',
      features: [
        'Everything in Starter',
        'Flexible Control',
        'Improve Site Speed',
        'Premium Tools',
        'Dedicated Power',
        'Free Website Migration'
      ],
      popular: true
    },
    {
      name: 'Advanced',
      price: '৳ 940',
      period: '/ month',
      description: 'Built for high-traffic sites and resource-intensive apps.',
      link: 'https://codenextit.com/clients/index.php?rp=/store/bdix-web-hosting/advanced',
      features: [
        'Everything in Standard',
        'Highest Performance',
        'Always Client First Support',
        'Advanced Resource Limits',
        'Priority SLA',
        'Dedicated IP Option'
      ],
      popular: false
    }
  ];

  const features = [
    { name: 'cPanel Control Panel', icon: Server, desc: 'Manage your website, emails, and databases effortlessly with the industry-standard, user-friendly cPanel interface.' },
    { name: 'Automated Offsite Backups', icon: Cloud, desc: 'Ensure your business data is 100% secure with automated, daily offsite backups and easy one-click restore options.' },
    { name: 'Ultra-Fast NVMe Servers', icon: Zap, desc: 'Experience lightning-fast website load times powered by enterprise-grade NVMe SSD storage and LiteSpeed web servers.' },
    { name: 'Advanced Server Security', icon: Shield, desc: 'Keep your website safe from cyber threats with free SSL certificates, active DDoS protection, and real-time malware scanning.' },
  ];

  return (
    <section id="hosting" className="py-32 bg-slate-900 relative overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-brand-accent/10 rounded-bl-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/10 rounded-tr-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <Cpu className="w-4 h-4 text-brand-accent flex-shrink-0" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">BDIX Web Hosting</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Fastest BDIX&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">Web Hosting</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-[16px] max-w-2xl mx-auto font-medium">
              Experience ultra-fast load times and 99.9% uptime with our scalable hosting solutions. Powered by CloudLinux LVE to ensure maximum security for your business data.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-32 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative p-8 md:p-10 rounded-[2.5rem] border ${plan.popular
                ? 'bg-gradient-to-b from-brand-accent/20 to-brand-primary border-brand-accent'
                : 'bg-white/5 border-white/10 glass-dark'
                } flex flex-col group hover:-translate-y-2 transition-transform duration-500`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-accent/30 flex items-center">
                  <Star className="w-3 h-3 mr-1 fill-current" /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl lg:text-5xl font-black tracking-tighter text-white">{plan.price}</span>
                  <span className="text-slate-400 font-medium text-sm">{plan.period}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed min-h-[40px]">{plan.description}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href={plan.link} target="_blank" rel="noopener noreferrer" className={`block text-center w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all ${plan.popular
                ? 'bg-brand-accent text-white hover:bg-blue-600 shadow-lg shadow-brand-accent/25'
                : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>

        {/* Redirect Button */}
        <div className="flex justify-center mb-32 -mt-16 relative z-10">
          <a href="/hosting" className="inline-flex items-center text-white bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 backdrop-blur-md group">
            View All Hosting Plans
            <ArrowRight className="ml-3 w-5 h-5 text-brand-accent group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Features Highlights */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black">What Makes Our Web Hosting Different?</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-2">{feat.name}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
