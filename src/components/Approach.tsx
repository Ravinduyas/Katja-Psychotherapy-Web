import { motion } from 'motion/react';
import { 
  Zap, Compass, History, Search, 
  Activity, HeartPulse 
} from 'lucide-react';

const principles = [
  { icon: <Zap size={20} />, text: 'Moving out of your comfort zone' },
  { icon: <Compass size={20} />, text: 'Going deep inside yourself' },
  { icon: <History size={20} />, text: 'Mindfulness and learning from the past' },
  { icon: <Search size={20} />, text: 'Uncovering cast-off parts of yourself' },
  { icon: <Activity size={20} />, text: 'Noticing the wisdom of your own body' },
  { icon: <HeartPulse size={20} />, text: 'Healing long-standing patterns of emotional pain' },
];

const methods = [
  'Gestalt', 'Crisis Intervention', 'Dream Work', 
  'Trauma Therapy', 'Biosynthesis', 'Dance Movement', 
  'Transaction Analysis', 'Psychosomatics'
];

export default function Approach() {
  return (
    <section id="approach" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold mb-12"
            >
              What Is Integrative Psychotherapy?
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-stone-600 leading-relaxed"
            >
              <p>
                Integrative psychotherapy is a combined approach. No single method fits all clients in all situations. 
                By drawing from various therapeutic traditions, we can tailor the process to your unique needs.
              </p>
              <p>
                My philosophy is rooted in the understanding that childhood and life experiences shape our behavior. 
                Connecting emotions, behaviors, and physical reactions leads to profound understanding and healing.
              </p>
              <p className="text-sm italic">
                Therapy is a conversation—not a quick fix. It doesn't tell you what to do, but helps you trust your own judgment.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 pt-10 border-t border-stone-100"
            >
              <div className="flex flex-wrap gap-2">
                {methods.map(m => (
                  <span key={m} className="text-[10px] font-bold uppercase tracking-widest text-stone-400 bg-stone-50 px-3 py-1 rounded">
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="bg-stone-50 p-12 rounded-[2.5rem]">
            <h3 className="text-2xl font-serif font-bold mb-10">Key Principles</h3>
            <div className="space-y-8">
              {principles.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-400 shadow-sm shrink-0">
                    {p.icon}
                  </div>
                  <p className="font-medium text-stone-700 pt-2">{p.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-stone-500 italic text-sm">
                "A trusting relationship between therapist and client is at the heart of therapy."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
