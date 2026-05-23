import { motion } from 'motion/react';
import { Cpu, CheckCircle2 } from 'lucide-react';

export default function HubWearable() {
  return (
    <section className="px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-50 border border-lime-100 text-lime-700 text-xs font-semibold uppercase tracking-wide mb-6">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Hardware Simulation Completed
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Wearable Architecture Preview</h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              We developed and simulated an embedded IoT solution designed to function independently of a mobile phone, targeting scenarios where standard connectivity limits safety.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-sky-500" /> Embedded Arduino Core Processor
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-lime-500" /> SIM808 GSM/GPS Communication
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 ml-[1px]" /> Cloud Sync integration
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-sm aspect-video sm:aspect-square md:aspect-auto md:h-64 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
               <div className="relative z-10 text-center">
                 <Cpu className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                 <span className="text-xs font-medium text-slate-400 uppercase tracking-widest bg-white px-3 py-1.5 rounded-md border border-slate-100 shadow-sm">MCU Logic Flow</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
