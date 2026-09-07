import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Take the First Step</h2>
          <div className="w-20 h-1 bg-white/10 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/40 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/40 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Phone (Optional)</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/40 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Preferred Language</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/40 transition-colors appearance-none">
                    <option className="bg-stone-900">English</option>
                    <option className="bg-stone-900">Czech</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Therapy Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/40 transition-colors appearance-none">
                  <option className="bg-stone-900">Individual Therapy</option>
                  <option className="bg-stone-900">Couples Therapy</option>
                  <option className="bg-stone-900">Group Therapy</option>
                  <option className="bg-stone-900">Not Sure</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/40 transition-colors resize-none"></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 bg-white/5 border border-white/10 rounded focus:ring-0" />
                <label className="text-xs text-white/40 leading-relaxed">
                  I agree to the processing of my personal data for the purpose of contacting me.
                </label>
              </div>
              <button className="w-full bg-white text-stone-900 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Direct Contact */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Email</h4>
                  <p className="text-xl font-medium">katja.krizkova@example.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Phone</h4>
                  <p className="text-xl font-medium">+420 123 456 789</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Location</h4>
                  <p className="text-xl font-medium">Psychotherapy Center Ineo</p>
                  <p className="text-white/40 text-sm mt-1">Prague, Czech Republic</p>
                </div>
              </div>
            </div>

            <div className="mt-16 space-y-6">
              <a 
                href="#" 
                className="flex items-center justify-between p-6 rounded-2xl border border-white/10 hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white text-stone-900 flex items-center justify-center">
                    <ExternalLink size={18} />
                  </div>
                  <span className="font-bold uppercase tracking-widest text-sm">Book via SimplyBook</span>
                </div>
                <ArrowRight className="text-white/20 group-hover:text-white transition-colors" />
              </a>
              
              <div className="h-64 rounded-2xl overflow-hidden grayscale opacity-50 hover:opacity-100 transition-opacity">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.123456789!2d14.42123456789!3d50.08123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA0JzUyLjQiTiAxNMKwMjUnMTYuNCJF!5e0!3m2!1sen!2scz!4v1234567890123" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
