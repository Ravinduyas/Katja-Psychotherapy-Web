import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: 'What happens in a first session?',
    answer: 'The first session is an opportunity for us to meet, discuss what brings you to therapy, and see if we are a good fit. We will talk about your expectations and how I can support you.'
  },
  {
    question: 'How long does therapy take?',
    answer: 'The duration varies for everyone. Some find relief in a few sessions, while others benefit from long-term support. We will regularly review our progress together.'
  },
  {
    question: 'How do I know if we are a good fit?',
    answer: 'A trusting relationship is key. After the first session, you can reflect on how you felt during our conversation. It is important that you feel safe and heard.'
  },
  {
    question: 'Do you offer sessions in English?',
    answer: 'Yes, I provide psychotherapy in English, Czech, and Slovak. My cross-cultural background helps me support clients from various linguistic and cultural origins.'
  },
  {
    question: 'Is online therapy available?',
    answer: 'Yes, I offer online sessions for those who cannot attend in person or prefer the convenience of remote therapy.'
  },
  {
    question: 'How much does a session cost?',
    answer: 'Please contact me directly for current pricing information. Fees may vary based on the type of therapy (individual, couples, or group).'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Individual/Couples: 48-hour advance cancellation required, otherwise full payment is due. Group: Regular attendance is required; payment is due after missing 2+ sessions.'
  },
  {
    question: 'Do I need a referral?',
    answer: 'No, you do not need a referral from a doctor to start psychotherapy with me.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-stone-200 mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-stone-100 rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
              >
                <span className={cn(
                  "text-lg font-bold transition-colors",
                  openIndex === index ? "text-stone-900" : "text-stone-600"
                )}>
                  {faq.question}
                </span>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                  openIndex === index ? "bg-stone-800 text-white" : "bg-stone-100 text-stone-400"
                )}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
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
                    <div className="p-6 pt-0 text-stone-500 leading-relaxed">
                      {faq.answer}
                    </div>
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
