import { motion } from 'motion/react';
import { ArrowRight, Play, FileText, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-gray-300 mb-8 border border-white/5"
          >
            <Activity className="w-4 h-4 text-primary" />
            <span>TekMen Revolution Project</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8"
          >
            Protecting Children Through <br className="hidden md:block" />
            <span className="gradient-text-primary">Technology & Community Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            A smart child protection ecosystem combining community response, emergency alerts, 
            and wearable safety technology for Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 hidden-md-placeholder"
          >
            <a href="#prototype" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group">
              View Live Prototype
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#demo" className="w-full sm:w-auto px-8 py-4 glass-card glass-card-hover text-white rounded-xl font-medium flex items-center justify-center gap-2 group">
              <Play className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
              Watch Demo
            </a>

            <a href="#documents" className="w-full sm:w-auto px-8 py-4 glass-card glass-card-hover text-white rounded-xl font-medium flex items-center justify-center gap-2 group border-white/5">
              <FileText className="w-4 h-4 text-gray-400" />
              Technical Overview
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-gray-500 uppercase">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
