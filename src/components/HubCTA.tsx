import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function HubCTA() {
  return (
    <section className="px-6 relative pb-12">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 md:p-14 text-center shadow-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-lime-900/30 opacity-80" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Building Safer Communities <br className="hidden md:block" /> Through Technology
            </h2>
            
            <div className="flex justify-center gap-4">
              <a href="#resources" className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-medium transition-colors">
                Explore Hub
              </a>
              <a href="mailto:contact@example.com" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-xl font-medium transition-colors flex items-center gap-2">
                Contact Team <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-8 text-center text-slate-500 text-sm">
          Presented by <span className="font-semibold text-slate-700">TekMen Revolution</span> © {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
}
