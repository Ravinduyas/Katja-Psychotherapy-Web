import { motion } from 'motion/react';
import { User, Users } from 'lucide-react';

const services = [
  {
    title: 'Individual Therapy',
    icon: <User size={32} />,
    description: "The most common form, therapist dedicated to understanding one client's problems, especially effective in long-term engagement."
  },
  {
    title: 'Couples Therapy',
    icon: <Users size={32} />,
    description: "Working through partnership challenges together, neither partner consults individually outside the couple framework."
  },
  {
    title: 'Group Therapy',
    icon: <Users size={32} />, // Using Users as a placeholder for Group
    description: "Support and encouragement from fellow members, shared experience reduces isolation, members serve as role models."
  }
];

const focusAreas = [
  'Depression', 'Anxiety', 'Trauma', 'Relationship Issues', 
  'Life Crises', 'Self-Esteem', 'Intercultural/TCK Support', 
  'LGBTQ+ Issues', 'Psychosomatic Issues', 'Loss & Grief', 
  'College Transition', 'Adaptation & Coping'
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Forms of Psychotherapy</h2>
          <p className="text-white/50 uppercase tracking-widest text-sm font-bold">Everyone Is Different</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all"
            >
              <div className="text-white/40 mb-8">{service.icon}</div>
              <h3 className="text-2xl font-serif font-bold mb-6">{service.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-10 border-t border-white/10"
        >
          <h4 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-8">Areas of Focus</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {focusAreas.map((area) => (
              <span 
                key={area} 
                className="px-5 py-2 rounded-full border border-white/10 text-xs font-medium text-white/70 hover:bg-white hover:text-stone-900 transition-all cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
