import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';

export default function DemoVideo() {
  return (
    <section className="py-24 relative bg-dark-bg" id="demo">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            See It In Action
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Watch our platform walkthrough and see how community intelligence bridges the gap in emergency response times.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          {/* Video Placeholder Container */}
          <div className="relative aspect-video glass-card rounded-[2rem] overflow-hidden group border-white/10 cursor-pointer flex items-center justify-center bg-gray-900/50">
            {/* Ambient Video Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-purple-500/10 opacity-50" />
            
            <div className="relative text-center z-10">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-300 mb-6">
                <PlayCircle className="w-10 h-10 text-white" fill="white" fillOpacity={0.2} />
              </div>
              <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">[ DEMO VIDEO PLACEHOLDER ]</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
