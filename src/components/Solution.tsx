import { motion } from 'motion/react';
import { Smartphone, Watch, Network } from 'lucide-react';

const solutions = [
  {
    title: "V1 — Missing & Found Platform",
    subtitle: "Community-driven mobile application",
    description: "A centralized platform for parents and community members to report missing children or signal a found child. It creates an immediate digital neighborhood watch with instant smart notifications.",
    features: ["Missing child reports", "Found child matching", "Instant radius alerts", "Verified community nodes"],
    icon: Smartphone,
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400"
  },
  {
    title: "V2 — Smart Wearable System",
    subtitle: "Proactive geographic protection",
    description: "An embedded GPS/GSM IoT wearable designed for children. It maps safety zones, detects unusual activity, and allows children to send SOS alerts instantly bypassing the need for a smartphone.",
    features: ["GPS/GSM Tracking", "SOS Panic button", "Geofencing limits", "Fall/Activity detection"],
    icon: Watch,
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary"
  },
  {
    title: "Community Intelligence Network",
    subtitle: "Collaborative rapid response",
    description: "A secure backend network that bridges the gap between active volunteers, passive responders, and local authorities, enabling a synchronized and organized effort.",
    features: ["Nearby helper routing", "Emergency collaboration", "Role-based verification", "Secure data privacy"],
    icon: Network,
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400"
  }
];

export default function Solution() {
  return (
    <section className="py-32 relative bg-dark-bg" id="solution">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-4"
          >
            The Ecosystem
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            A Multi-Layered <br className="hidden md:block"/>Protection Strategy
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card rounded-[2rem] p-8 relative overflow-hidden group hover:border-white/20 transition-colors"
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.color} rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                <div className="text-sm font-medium text-gray-400 mb-4">{item.subtitle}</div>
                
                <p className="text-gray-400 leading-relaxed mb-8 h-24">
                  {item.description}
                </p>
                
                <div className="space-y-3 pt-6 border-t border-white/10">
                  {item.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.iconColor.replace('text-', 'bg-')}`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
