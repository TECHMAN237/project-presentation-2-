import { motion } from 'motion/react';

export default function HubTeam() {
  return (
    <section className="px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-xl font-bold text-xl mb-4 shadow-sm">
            T
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-1">TekMen Revolution</h2>
          <p className="text-sm font-medium text-lime-600 mb-6">Innovating for Safety</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
             <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl shadow-sm">
                <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wide">Project Lead</span>
                <h4 className="font-bold text-slate-900 text-base mt-1">ZALI STEEVE</h4>
                <p className="text-xs text-slate-500 mt-0.5 font-medium leading-relaxed">PROJECT MANAGER AND FRONTEND DEVELOPPER</p>
             </div>
             <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl shadow-sm">
                <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wide">Systems Architecture</span>
                <h4 className="font-bold text-slate-900 text-base mt-1">TANTO EINSTEIN</h4>
                <p className="text-xs text-slate-500 mt-0.5 font-medium leading-relaxed">BACKEND DEVELOPPER</p>
             </div>
             <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl shadow-sm">
                <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wide">Hardware Design</span>
                <h4 className="font-bold text-slate-900 text-base mt-1">TANYI FERDINAND</h4>
                <p className="text-xs text-slate-500 mt-0.5 font-medium leading-relaxed">HARDWARE ENGINEER</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
