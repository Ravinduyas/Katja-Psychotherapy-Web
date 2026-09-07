import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Growing plant"
          className="w-full h-full object-cover brightness-[0.75]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/50" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight mb-8"
        >
          Are You Ready to Grow?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Embark on a transformative journey of self-discovery with professional integrative psychotherapy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto bg-white text-stone-800 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-stone-100 transition-all shadow-xl"
          >
            Book a Consultation
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto bg-transparent border border-white/40 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            Learn More About Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
