import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Approach', href: '#approach' },
  { name: 'Credentials', href: '#credentials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<'EN' | 'CZ'>('EN');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#home" className="font-serif text-2xl font-bold tracking-tight text-stone-800">
            Katja Křížková
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-stone-900 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-bold text-stone-400">
            <button 
              onClick={() => setLang('EN')} 
              className={cn("hover:text-stone-900 transition-colors", lang === 'EN' && "text-stone-900")}
            >
              EN
            </button>
            <span>|</span>
            <button 
              onClick={() => setLang('CZ')} 
              className={cn("hover:text-stone-900 transition-colors", lang === 'CZ' && "text-stone-900")}
            >
              CZ
            </button>
          </div>
          <a 
            href="#contact" 
            className="bg-stone-800 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-700 transition-colors shadow-sm"
          >
            Book a Session
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
