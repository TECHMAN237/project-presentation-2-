import { motion } from 'motion/react';
import { ArrowRight, Play, LayoutGrid } from 'lucide-react';

export default function HubHero() {
  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-lime-100 rounded-full blur-[100px] opacity-50 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-600 mb-8"
        >
          <LayoutGrid className="w-4 h-4 text-lime-600" />
          Project Access Hub
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Smart Child Safety System
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 mb-6 font-medium"
        >
          Technology-driven child protection innovation by <span className="text-slate-900">TekMen Revolution</span>.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-500 max-w-2xl mx-auto mb-12 text-lg"
        >
          A centralized access portal for our prototypes, simulations, presentations, and technical resources.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#resources" className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
            Open Live Prototype
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="https://youtu.be/SHIzaqPHj30" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 text-sky-500" />
            Watch Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
