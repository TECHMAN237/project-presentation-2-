import { motion } from 'motion/react';
import { Heart, Zap, Globe2, Link2 } from 'lucide-react';

const impacts = [
  { title: "Faster Emergency Response", description: "Bypassing bureaucratic delays to mobilize nearby verified responders instantly." },
  { title: "Improved Child Recovery", description: "Increasing the odds of finding missing children within the critical 48-hour window." },
  { title: "Accessible Safety Tech", description: "Designing an affordable hardware node targeted specifically for African economic realities." },
  { title: "Community-Driven Protection", description: "Restoring the 'It takes a village' mentality through a synchronized digital network." }
];

export default function Impact() {
  return (
    <section className="py-32 relative bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Social Impact <br/><span className="text-gray-500">at the Core</span></h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              We aren't just building an app. We are engineering a scalable social safety infrastructure designed to protect our most vulnerable demographic.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {impacts.map((item, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl border-white/5">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="aspect-square md:aspect-video lg:aspect-square bg-white/5 rounded-[3rem] border border-white/10 relative overflow-hidden flex items-center justify-center p-8">
              {/* Abstract Map/Network Visual Placeholder */}
              <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
              <div className="w-full h-full border border-white/5 rounded-[2rem] relative z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="text-center">
                  <Globe2 className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                  <div className="text-gray-400 font-medium text-sm tracking-widest uppercase">Scalable Impact Infrastructure</div>
                </div>
                
                {/* Simulated connection points */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-500 animate-ping" />
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-emerald-500 animate-ping" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-primary animate-ping" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/4 left-1/4 w-full h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-emerald-500/0 rotate-45 transform origin-left" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
