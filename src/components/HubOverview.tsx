import { motion } from 'motion/react';
import { Smartphone, Watch, Network } from 'lucide-react';

const aspects = [
  {
    title: "Missing & Found Platform",
    description: "Community-driven mobile application for instant reporting and matching.",
    icon: Smartphone,
    color: "text-sky-500",
    bg: "bg-sky-50"
  },
  {
    title: "Smart Wearable Safety System",
    description: "Embedded GPS/GSM wearable with SOS and geofence alerts.",
    icon: Watch,
    color: "text-lime-600",
    bg: "bg-lime-50"
  },
  {
    title: "Community Emergency Network",
    description: "Rapid routing of nearby verified responders to critical alerts.",
    icon: Network,
    color: "text-slate-700",
    bg: "bg-slate-100"
  }
];

export default function HubOverview() {
  return (
    <section className="px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aspects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bg}`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
