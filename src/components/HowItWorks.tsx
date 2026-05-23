import { motion } from 'motion/react';
import { Shield, RadioTower, Server, Smartphone, Users } from 'lucide-react';

const steps = [
  {
    icon: Shield,
    title: "1. Wearable Trigger",
    description: "Child presses SOS or geofence boundary is breached.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    icon: RadioTower,
    title: "2. GPS/GSM Comms",
    description: "Coordinates are instantly transmitted via cellular network.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: Server,
    title: "3. Backend Infrastructure",
    description: "Cloud processes data and identifies nearby community nodes.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: Smartphone,
    title: "4. Mobile App Alert",
    description: "High-priority push notifications reach parents and local volunteers.",
    color: "text-emergency",
    bg: "bg-emergency/10"
  },
  {
    icon: Users,
    title: "5. Community Response",
    description: "Verified community members coordinate for rapid recovery.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">Architecture</h2>
          <h3 className="text-4xl md:text-5xl font-bold">How The Network Flows</h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-dark-bg via-white/20 to-dark-bg z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className={`w-24 h-24 rounded-full glass-card flex items-center justify-center mb-6 z-10 relative mt-0 lg:mt-[-1px] ${step.bg}`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
