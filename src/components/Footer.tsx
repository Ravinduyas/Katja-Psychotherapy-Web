import { motion } from 'motion/react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 lg:px-24 bg-[#fdfcfb] border-t border-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">Katja Křížková</h2>
            <p className="text-stone-400 text-sm uppercase tracking-widest font-bold">Integrative Psychotherapist</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300">Quick Nav</h4>
              <ul className="space-y-2 text-sm text-stone-500">
                <li><a href="#about" className="hover:text-stone-900 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-stone-900 transition-colors">Services</a></li>
                <li><a href="#approach" className="hover:text-stone-900 transition-colors">Approach</a></li>
                <li><a href="#faq" className="hover:text-stone-900 transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300">Policies</h4>
              <ul className="space-y-2 text-sm text-stone-500">
                <li><a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">Cancellation Policy</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">GDPR</a></li>
              </ul>
            </div>
            <div className="space-y-4 col-span-2 md:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center text-stone-400 hover:bg-stone-800 hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center text-stone-400 hover:bg-stone-800 hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center text-stone-400 hover:bg-stone-800 hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-300 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© 2026 Katja Křížková — All Rights Reserved</p>
          <p>Designed with Care</p>
        </div>
      </div>
    </footer>
  );
}
