import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Camera, Send, MessageSquare, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black pt-24 pb-12 border-t border-white/5 overflow-hidden z-10">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ias-gold-500/50 to-transparent shadow-glow-gold opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-ias-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        
        {/* Branch Identity */}
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-ias-gold-500/30 p-1 flex items-center justify-center">
              <img src={logo} alt="Ravindra IAS Gwalior" className="w-full h-full object-contain filter contrast-125 saturate-150 brightness-110" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-white font-bold tracking-wider uppercase">
              RAVINDRA <span className="text-ias-gold-500 underline underline-offset-4 decoration-1">IAS.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed max-w-sm mb-10">
            India's premier UPSC mentorship, now established as the beacon of success in Gwalior. Transform your vision into reality with the best locally accessible guidance.
          </p>
          <div className="flex items-center gap-5">
            {[Camera, Send, MessageSquare].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-ias-gold-500 hover:border-ias-gold-500 transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-[0.2em] text-sm mb-8 border-l-2 border-ias-gold-500 pl-4">Quick Navigation</h3>
          <ul className="space-y-5 text-gray-400 font-medium">
            {['Journey', 'Courses', 'About Us', 'Contact Us', 'Success Stories'].map((link) => (
               <li key={link}>
                 <a 
                   href={`#${link.toLowerCase().replace(' ', '')}`} 
                   className="flex items-center gap-2 hover:text-white transition-colors group"
                 >
                   <span className="w-1 h-1 rounded-full bg-ias-gold-500/50 group-hover:scale-150 transition-transform" />
                   {link}
                 </a>
               </li>
            ))}
          </ul>
        </div>

        {/* Branch Contact Info */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-[0.2em] text-sm mb-8 border-l-2 border-ias-gold-500 pl-4">Gwalior Campus</h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <MapPin className="w-6 h-6 text-ias-gold-500 shrink-0 mt-1" />
              <p className="text-gray-400 leading-relaxed font-semibold">
                1st Floor, Krishna Tower, <br/>
                Phoolbagh Chauraha, Gwalior
              </p>
            </li>
            <li className="flex gap-4">
              <Phone className="w-6 h-6 text-ias-gold-500 shrink-0 mt-1" />
              <div className="text-gray-400 font-bold tracking-wide">
                <p>+91 70420 27486</p>
                <p>+91 83590 38350</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="w-6 h-6 text-ias-gold-500 shrink-0 mt-1" />
              <p className="text-gray-400 break-all font-semibold">gwaliorravindrasias@gmail.com</p>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyfooter */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <p className="text-gray-500 text-sm font-medium tracking-wider">
          © {currentYear} Ravindra IAS Gwalior. Mentoring Tomorrow's Leaders.
        </p>
        <div className="flex items-center gap-8 text-xs text-gray-500 uppercase tracking-[0.2em] font-bold">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
            Support <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
