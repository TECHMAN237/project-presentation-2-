import { motion } from 'motion/react';
import { Cpu, Radio, ShieldCheck, Database } from 'lucide-react';

const hardwareSpecs = [
  { label: "Core Processing", value: "Arduino Microcontroller", icon: Cpu },
  { label: "Communication", value: "SIM808 / SIM800 GSM", icon: Radio },
  { label: "Positioning", value: "High-Precision GPS", icon: Database },
  { label: "Validation", value: "Proteus Simulation", icon: ShieldCheck },
];

export default function WearablePrototype() {
  return (
    <section className="py-32 relative bg-dark-bg border-y border-white/5 overflow-hidden" id="wearable">
      
      {/* Circuit board aesthetic background (subtle) */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col xl:flex-row gap-16 items-center">
          
          <div className="w-full xl:w-5/12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-6"
            >
              Hardware Engineering
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              Embedded Wearable Prototype
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-xl text-gray-400 leading-relaxed mb-10"
            >
              <p>
                To provide absolute protection independent of a smartphone, we have successfully designed and tested the logic for a dedicated child safety wearable.
              </p>
              <p>
                Currently validated via <strong>Proteus simulation</strong>, the architecture integrates an Arduino processor with a SIM808 module handling concurrent GPS tracking and GSM cellular communication for instant SOS alerts.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {hardwareSpecs.map((spec, idx) => (
                <div key={idx} className="glass-card p-4 rounded-xl flex flex-col gap-2">
                  <spec.icon className="w-5 h-5 text-gray-500" />
                  <div className="text-xs text-gray-500">{spec.label}</div>
                  <div className="font-semibold text-gray-200 text-sm">{spec.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="w-full xl:w-7/12 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl p-2 border border-white/10 aspect-[16/10] relative overflow-hidden bg-[#0A0A0E] flex flex-col"
            >
              {/* Fake Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/40">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="mx-auto text-xs font-mono text-gray-500">Proteus_Simulation_V1.pdsprj</div>
              </div>
              
              {/* Placeholder Content Area */}
              <div className="flex-1 relative flex items-center justify-center p-8">
                
                {/* Visual data flow abstract */}
                <div className="absolute inset-0 opacity-20 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-[1px] bg-primary/50 absolute top-1/2 left-0 shadow-[0_0_10px_#6C4DFF]" />
                  <div className="w-[1px] h-full bg-primary/50 absolute top-0 left-1/2 shadow-[0_0_10px_#6C4DFF]" />
                </div>

                <div className="text-center z-10 glass-card p-8 rounded-2xl border-dashed border-white/20">
                   <h4 className="text-xl font-bold mb-2">Simulation Visuals Go Here</h4>
                   <p className="text-gray-500 text-sm">Insert Proteus screenshots, circuit diagrams, <br/>or screen recording videos of the hardware logic.</p>
                </div>

              </div>

              {/* Status Bar */}
              <div className="px-4 py-2 border-t border-white/5 bg-black/40 flex justify-between items-center">
                 <div className="flex items-center gap-2 text-xs text-primary font-mono cursor-default">
                   <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                   </span>
                   Hardware Simulation Successfully Tested
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
