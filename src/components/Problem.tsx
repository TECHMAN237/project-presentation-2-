import { motion } from 'motion/react';
import { ShieldAlert, Clock, Users, MapPin } from 'lucide-react';

const stats = [
  {
    value: "2M+",
    label: "Missing Children Annually",
    description: "Global estimate of children who go missing each year.",
    icon: ShieldAlert,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    value: "24-48h",
    label: "Critical Time Window",
    description: "The most crucial timeframe for successful recovery mapping.",
    icon: Clock,
    color: "text-emergency",
    bg: "bg-emergency/10",
    border: "border-emergency/20"
  },
  {
    value: "10x",
    label: "Slower Response",
    description: "Current emergency response delays in densely populated urban areas.",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    value: "60%",
    label: "Lack of Geo-Data",
    description: "Cases where precise location tracking is completely absent.",
    icon: MapPin,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  }
];

export default function Problem() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5 bg-dark-surface" id="problem">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">The Challenge</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Every second counts <br />when a child is missing.</h3>
            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                In many African regions, traditional child protection mechanisms rely on slow, disconnected channels. 
                When a child wanders off or is in danger, parents face delayed emergency responses and a fragmented 
                community notification system.
              </p>
              <p>
                Without real-time location tracking or an organized community safety net, the critical 
                first 48 hours are often lost, significantly reducing the chances of a safe recovery.
              </p>
            </div>
          </motion.div>

          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl glass-card border flex flex-col gap-4 ${stat.border}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className={`text-sm font-medium mb-2 ${stat.color}`}>{stat.label}</div>
                  <div className="text-sm text-gray-500 leading-relaxed">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
