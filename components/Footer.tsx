"use client";
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-0 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">

          {/* Left: Big Text */}
          <div className="lg:col-span-5">
            <p className="text-4xl md:text-[2.75rem] font-black font-sans leading-tight text-white mb-8">
              We are Serving<br />
              Knowledge,<br />
              Quality &<br />
              Perfection
            </p>
          </div>

          {/* Right: 3 Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4">
            {/* Company Column */}
            <div>
              <h4 className="text-base font-bold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm font-semibold text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Services</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-base font-bold text-white mb-6">Services</h4>
              <ul className="space-y-4 text-sm font-semibold text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Management Softwares</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Graphics Design</a></li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div>
              <h4 className="text-base font-bold text-white mb-6">Contact Us</h4>
              <ul className="space-y-6 text-sm font-semibold text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">Hazi Akbar Ali Super Market (4th Floor), Abdul Hamid Road,<br />Pabna, Bangladesh</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <div className="leading-relaxed">
                    <p>+880 1788 428 280</p>
                    <p>+880 1300 793 313</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <div className="leading-relaxed">
                    <p>info@codenextit.com</p>
                    <p>support@codenextit.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pt-10 border-t border-gray-800/80">

          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <span className="font-bold text-xl">CN</span>
              </div>
              <div className="leading-none flex flex-col justify-center">
                <span className="text-[1.35rem] font-black tracking-widest text-white">CODE</span>
                <span className="text-[1.35rem] font-light tracking-widest text-white flex items-end">
                  NEXT<span className="text-[0.6rem] ml-1 font-normal tracking-normal pb-1">IT</span>
                </span>
              </div>
            </a>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
              ©2021 - 2026 | CODE NEXT IT SOLUTION
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3">
            <a href="https://www.facebook.com/codenextit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all">
              <Facebook className="w-[18px] h-[18px]" />
            </a>
            <a href="https://www.linkedin.com/company/codenextit/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all">
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
            <a href="https://www.behance.net/codenextit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-3.213-2.556-3.213-1.465 0-2.274 1.175-2.409 3.213zm-11.444 7h-6.285v-15h7.014c2.614 0 4.046 1.488 4.046 3.652 0 1.94-1.258 2.804-2.831 3.125 1.921.36 3.149 1.579 3.149 3.738 0 2.502-1.83 4.485-5.093 4.485zm-2.054-6.559h-2.915v-3.793h2.645c1.199 0 2.158.463 2.158 1.879 0 1.482-1.042 1.914-2.188 1.914zm.299 5.867h-3.214v-4.103h3.048c1.685 0 2.656.452 2.656 2.05 0 1.637-1.168 2.053-2.49 2.053z" /></svg>
            </a>
            <a href="https://www.instagram.com/codenextit/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all">
              <Instagram className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Massive Brand Text */}
      <div className="w-full flex justify-center pointer-events-none select-none translate-y-4">
        <span className="text-[16vw] xl:text-[220px] font-black leading-[0.75] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent text-center whitespace-nowrap">
          CODENEXT IT
        </span>
      </div>
    </footer>
  );
}
