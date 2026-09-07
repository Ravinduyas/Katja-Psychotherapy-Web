import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const instructors = [
  {
    name: 'Brooklyn Simmons',
    role: 'Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Leslie Alexander',
    role: 'Meditation Expert',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Bessie Richards',
    role: 'Wellness Coach',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
  }
];

export default function InstructorsSection() {
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
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-stone-500 max-w-md text-sm"
        >
          All the Lorem Ipsum generators on the Internet tend to repeat predefined. 
          The perfect organizer and developer for dream agency.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {instructors.map((instructor, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative h-[450px] rounded-3xl overflow-hidden mb-6">
              <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 hover:bg-stone-900 hover:text-white transition-colors cursor-pointer">
                  <Instagram size={18} />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 hover:bg-stone-900 hover:text-white transition-colors cursor-pointer">
                  <Twitter size={18} />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 hover:bg-stone-900 hover:text-white transition-colors cursor-pointer">
                  <Linkedin size={18} />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">{instructor.name}</h3>
            <p className="text-stone-500 text-sm">{instructor.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
