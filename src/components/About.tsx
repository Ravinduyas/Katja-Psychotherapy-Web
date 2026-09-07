import { motion } from 'motion/react';
import { Globe, Languages, Heart, Building2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" 
                alt="Katja Křížková" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-stone-100 rounded-full -z-10" />
          </motion.div>

          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold mb-8"
            >
              About Katja
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-stone-600 leading-relaxed mb-10"
            >
              <p className="text-lg">
                I hold a degree in Psychology from George Mason University and am a European Certified Integrative Psychotherapist. 
                My professional journey is deeply influenced by my cross-cultural background and diverse life experiences.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-stone-600">
                  <Globe size={14} /> TCK: Africa → USA → Asia → Europe
                </div>
                <div className="flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-stone-600">
                  <Languages size={14} /> EN, CZ, SK
                </div>
                <div className="flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-stone-600">
                  <Heart size={14} /> 20 Years Yoga Practice
                </div>
                <div className="flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-stone-600">
                  <Building2 size={14} /> Psychotherapy Center Ineo
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-4 border-stone-200 pl-8 py-2"
            >
              <p className="text-2xl font-serif italic text-stone-800 leading-snug">
                "I strive to help remove barriers that prevent people from living as fully and richly as possible."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
