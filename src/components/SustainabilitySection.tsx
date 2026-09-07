import { motion } from 'motion/react';
import { Leaf, Wind, Sun } from 'lucide-react';

export default function SustainabilitySection() {
  return (
    <section className="py-24 px-8 bg-stone-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Where Sustainability <br /> Meets Meditation.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-12 max-w-xl"
          >
            All the Lorem Ipsum generators on the Internet tend to repeat predefined. 
            The perfect organizer and developer for dream agency.
          </motion.p>

          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: <Leaf size={24} />, label: 'Eco Friendly' },
              { icon: <Wind size={24} />, label: 'Pure Air' },
              { icon: <Sun size={24} />, label: 'Natural Light' },
              { icon: <Wind size={24} />, label: 'Sustainable' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-all">
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-3xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover"
            alt="Nature meditation"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/20" />
          
          <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 max-w-[200px]">
            <p className="text-sm font-medium mb-2">Experience the future of meditation.</p>
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 20}`} className="w-8 h-8 rounded-full border-2 border-stone-900" alt="User" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
