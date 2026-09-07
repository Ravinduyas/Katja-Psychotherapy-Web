import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: 'What is near cluster housing?',
    answer: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined. The perfect organizer and developer for dream agency.'
  },
  {
    question: 'What is the difference between a real estate agent and a real estate broker?',
    answer: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined. The perfect organizer and developer for dream agency.'
  },
  {
    question: 'What is a homeowner association (HOA)?',
    answer: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined. The perfect organizer and developer for dream agency.'
  },
  {
    question: 'Those are just a few common real estate FAQs, and the specifics can vary based on?',
    answer: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined. The perfect organizer and developer for dream agency.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden h-[500px]"
      >
        <img 
          src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover"
          alt="Meditation"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/10" />
        <div className="absolute bottom-8 left-8 glass p-6 rounded-2xl max-w-[200px]">
          <p className="text-stone-900 font-bold text-sm">Need any help? Don't hesitate to join us.</p>
          <button className="mt-4 w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center">
            <Plus size={20} />
          </button>
        </div>
      </motion.div>

      <div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-12"
        >
          Common Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-stone-200 pb-6"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className={cn(
                  "text-xl font-bold transition-colors",
                  openIndex === index ? "text-stone-900" : "text-stone-400 group-hover:text-stone-600"
                )}>
                  {faq.question}
                </span>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                  openIndex === index ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-400"
                )}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-stone-500 text-sm mt-4 leading-relaxed max-w-md">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
