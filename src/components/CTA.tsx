import { motion } from 'motion/react';
import { ArrowRight, Play, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 relative bg-dark-surface border-t border-white/5 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Building <span className="gradient-text-primary">Safer Communities</span> Through Technology
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            The Smart Child Safety System is ready to scale. Review our prototype, infrastructure, and technical documentation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-32">
            <a href="#prototype" className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 hover:scale-105 transform duration-300">
              Explore Prototype
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#demo" className="w-full sm:w-auto px-8 py-4 glass-card glass-card-hover text-white rounded-xl font-medium flex items-center justify-center gap-2">
              <Play className="w-4 h-4" />
              Watch Demo
            </a>
            <a href="mailto:contact@example.com" className="w-full sm:w-auto px-8 py-4 glass-card glass-card-hover text-white rounded-xl font-medium flex items-center justify-center gap-2 border-white/5">
              <Mail className="w-4 h-4" />
              Contact Team
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modern Footer */}
      <div className="border-t border-white/5 pt-8 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Smart Child Safety System. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
             Presented by <span className="text-white">TekMen Revolution</span>
          </div>
        </div>
      </div>
    </section>
  );
}
