import { motion } from 'motion/react';
import { ExternalLink, Smartphone } from 'lucide-react';

export default function LivePrototype() {
  return (
    <section className="py-24 relative bg-dark-bg" id="prototype">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-10 md:p-20 relative overflow-hidden border border-white/10">
          
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Application
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Experience the <span className="text-primary">Protection Network</span>
              </h2>
              
              <p className="text-xl text-gray-400 leading-relaxed mb-10">
                Explore our fully functional V1 software prototype. See how parents can broadcast alerts, how the community matches found children, and the real-time notification engine.
              </p>

              <a 
                href="#" // TO DO: Placeholder for Vercel Link
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-semibold transition-colors w-full sm:w-auto hover:scale-105 transform duration-300"
              >
                <Smartphone className="w-5 h-5" />
                Open Live Prototype
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <p className="mt-4 text-xs text-gray-500">Optimized for mobile viewing</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square flex items-center justify-center"
            >
              {/* Mockup Representation / Placeholders */}
              <div className="relative w-[280px] h-[580px] bg-[#0c0c0e] rounded-[3rem] border-[8px] border-gray-800 shadow-2xl flex items-center justify-center z-20 overflow-hidden">
                <div className="text-center text-gray-600 px-6">
                  [ App UI Placeholder ]
                </div>
                
                {/* Floating mock elements to give it that structural feel */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 left-4 right-4 h-24 bg-white/5 rounded-2xl border border-white/5"
                />
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-1/3 left-4 right-4 h-32 bg-primary/10 rounded-2xl border border-primary/20"
                />
              </div>

              {/* Floating UI Card 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-1/4 right-0 lg:-right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl z-30 hidden sm:flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-emergency/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-emergency animate-ping" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Missing Child Alert</div>
                  <div className="text-xs text-gray-300">2.4 km away • 2 mins ago</div>
                </div>
              </motion.div>

              {/* Floating UI Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-1/4 left-0 lg:-left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl z-30 hidden sm:flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-500 font-bold">✓</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Safe Match Found</div>
                  <div className="text-xs text-gray-300">Awaiting parent verification</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
