import { motion } from 'motion/react';
import { 
  Users, AlertCircle, ShieldAlert, CloudRain, 
  Compass, BatteryLow, UserMinus, MessageSquare, 
  HeartCrack, History 
} from 'lucide-react';

const struggles = [
  { icon: <Users size={24} />, text: 'Relationship or partnership problems' },
  { icon: <AlertCircle size={24} />, text: 'Life crisis (personal, relationship, work)' },
  { icon: <ShieldAlert size={24} />, text: 'Anxiety and fear limiting everyday life' },
  { icon: <CloudRain size={24} />, text: 'Persistent low mood without objective reason' },
  { icon: <Compass size={24} />, text: 'Feeling life has no meaning' },
  { icon: <BatteryLow size={24} />, text: 'Loss of motivation for duties' },
  { icon: <UserMinus size={24} />, text: 'Low self-esteem, self-annoyance' },
  { icon: <MessageSquare size={24} />, text: 'Conflicts with others, taking things personally' },
  { icon: <HeartCrack size={24} />, text: 'Unreasonable jealousy harming relationships' },
  { icon: <History size={24} />, text: 'Need to come to terms with the past' },
];

export default function PainPoints() {
  return (
    <section id="struggles" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Are You Experiencing Any of These?</h2>
          <div className="w-20 h-1 bg-stone-200 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {struggles.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-8 rounded-2xl border border-stone-100 hover:border-stone-300 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:bg-stone-800 group-hover:text-white transition-all mb-6">
                {item.icon}
              </div>
              <p className="text-sm font-medium leading-relaxed text-stone-600 group-hover:text-stone-900 transition-colors">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-serif italic text-stone-500">
            "You are not alone. Psychotherapy can help."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
