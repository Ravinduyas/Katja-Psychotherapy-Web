import { motion } from 'motion/react';
import { GraduationCap, Award, Users, Briefcase, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const education = [
  { school: 'George Mason University, Virginia', subject: 'Psychology' },
  { school: 'Instep Institute', subject: 'Integrative Psychotherapy (2012–2018)' },
  { school: 'Gestalt Plus', subject: 'Postgraduate studies (2020–2022)' },
  { school: '"D" Občanské združení Liberec', subject: 'Crisis Intervention (2014–2015)' },
];

const trainings = [
  'Ethics in Psychotherapy (2025)',
  'Attachment Trauma — Peter Levine & Diane Heller (2024)',
  'Gestalt Therapy in Action (2023)',
  'Field Perspectives — Gianni Francesetti (2025)',
  'Play in Therapy — Gideon Zehavi (2019)',
  'Dream Work — Ivana Veltrubská (2016–2017)',
  'Neurobiology of Gestalt Therapy (2017)',
  'Trauma in Biosynthesis (2017)',
  'Family Gestalt Therapy — Jan Knop (2016)',
  'Psychosomatics — Majka Pečená (2016)',
  'A New Therapy for Each Patient — John Norcross (2016)',
];

const memberships = [
  'ČAP (Czech Association of Psychotherapy) — working group member',
  'European Association of Integrative Psychotherapists — member',
];

const employment = [
  { role: 'Psychotherapy Center Ineo', period: '2021–Present' },
  { role: 'Psychotherapeutický centrum LAVKA', period: '2014–2021' },
  { role: 'Languages At Work, s.r.o. — Founder, CEO', period: '1993–2007' },
];

export default function Credentials() {
  const [showTrainings, setShowTrainings] = useState(false);

  return (
    <section id="credentials" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Education & Professional Background</h2>
          <div className="w-20 h-1 bg-stone-200 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, i) => (
                <div key={i} className="border-l-2 border-stone-100 pl-6">
                  <p className="font-bold text-stone-800">{item.school}</p>
                  <p className="text-sm text-stone-500">{item.subject}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Employment */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-400">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold">Professional Employment</h3>
            </div>
            <div className="space-y-6">
              {employment.map((item, i) => (
                <div key={i} className="border-l-2 border-stone-100 pl-6">
                  <p className="font-bold text-stone-800">{item.role}</p>
                  <p className="text-sm text-stone-500">{item.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Memberships */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-400">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold">Memberships</h3>
            </div>
            <ul className="space-y-4">
              {memberships.map((item, i) => (
                <li key={i} className="flex gap-4 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Training Accordion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm"
          >
            <button 
              onClick={() => setShowTrainings(!showTrainings)}
              className="w-full flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-400">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold">Selected Training</h3>
              </div>
              <ChevronDown className={cn("transition-transform", showTrainings && "rotate-180")} />
            </button>
            
            {showTrainings && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="mt-8 pt-8 border-t border-stone-50"
              >
                <ul className="space-y-4">
                  {trainings.map((item, i) => (
                    <li key={i} className="flex gap-4 text-sm text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                  <li className="text-xs text-stone-400 italic mt-4">And additional seminars...</li>
                </ul>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
