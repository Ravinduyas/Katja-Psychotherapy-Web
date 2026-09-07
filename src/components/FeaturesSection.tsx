import { motion } from 'motion/react';
import { Users, Zap, Heart, Play } from 'lucide-react';

const features = [
  {
    icon: <Users className="text-purple-500" />,
    title: 'Expert Instructors',
    description: "It's a way of life. Whether you're a beginner or an experienced yogi, our welcoming community is here to support you."
  },
  {
    icon: <Zap className="text-yellow-500" />,
    title: 'Transformative Power of Yoga',
    description: "It's a way of life. Whether you're a beginner or an experienced yogi, our welcoming community is here to support you."
  },
  {
    icon: <Heart className="text-green-500" />,
    title: 'Welcoming Community',
    description: "It's a way of life. Whether you're a beginner or an experienced yogi, our welcoming community is here to support you."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-12 leading-tight"
        >
          Your Life For Greater <br /> Self Of Yoga
        </motion.h2>

        <div className="space-y-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden h-[600px]"
      >
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover"
          alt="Yoga session"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/10" />
        
        <div className="absolute bottom-8 left-8 glass p-6 rounded-2xl flex items-center gap-4 max-w-xs">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-lg">
            <Play fill="currentColor" size={18} />
          </div>
          <div>
            <p className="text-stone-900 font-bold text-sm">View Patient Stories</p>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-12 h-1 bg-stone-900/20 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-stone-900" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
