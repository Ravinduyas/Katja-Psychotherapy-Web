import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const journeys = [
  {
    title: 'Improved Flexibility',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined.'
  },
  {
    title: 'Stress Reduction',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined.'
  },
  {
    title: 'Improved Flexibility',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined.'
  }
];

export default function JourneySection() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-16"
      >
        Start Your Journey Today
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {journeys.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
            
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-stone-900 transition-all">
                <ArrowUpRight size={24} />
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
