import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Olivia S.',
    role: 'Yoga Practitioner',
    text: "Sign me up! It's a way of life. Whether you're a beginner or an experienced yogi, our welcoming community is here to support you.",
    image: 'https://i.pravatar.cc/100?img=32'
  },
  {
    name: 'David R.',
    role: 'Meditation Student',
    text: "Superb Results. It's a way of life. Whether you're a beginner or an experienced yogi, our welcoming community is here to support you.",
    image: 'https://i.pravatar.cc/100?img=12'
  },
  {
    name: 'Olivia S.',
    role: 'Yoga Practitioner',
    text: "Can't Compare. It's a way of life. Whether you're a beginner or an experienced yogi, our welcoming community is here to support you.",
    image: 'https://i.pravatar.cc/100?img=45'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold"
        >
          Meet Expert Instructor
        </motion.h2>
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors"
        >
          View All Stories
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-10 rounded-3xl border border-stone-200 hover:border-stone-900 transition-colors group"
          >
            <Quote className="text-stone-200 group-hover:text-stone-900 transition-colors mb-8" size={40} />
            <p className="text-stone-500 text-lg leading-relaxed mb-10">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              <img 
                src={testimonial.image} 
                className="w-12 h-12 rounded-full" 
                alt={testimonial.name}
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-bold text-stone-900">{testimonial.name}</h4>
                <p className="text-stone-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
