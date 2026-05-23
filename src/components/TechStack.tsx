import { motion } from 'motion/react';

const technologies = [
  {
    category: "Frontend",
    items: ["React Native", "Expo", "React", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/5",
    border: "border-blue-500/20"
  },
  {
    category: "Backend & Data",
    items: ["Supabase", "PostgreSQL", "Node.js"],
    color: "from-emerald-500/20 to-green-500/5",
    border: "border-emerald-500/20"
  },
  {
    category: "Notifications & Infrastructure",
    items: ["Firebase Cloud Messaging", "Vercel", "Google Cloud"],
    color: "from-amber-500/20 to-orange-500/5",
    border: "border-amber-500/20"
  },
  {
    category: "Embedded Systems",
    items: ["Arduino", "SIM808 Module", "GPS/GSM", "Proteus"],
    color: "from-primary/20 to-purple-500/5",
    border: "border-primary/20"
  }
];

export default function TechStack() {
  return (
    <section className="py-24 relative bg-dark-surface border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Scale</h2>
          <p className="text-gray-400 text-lg">Robust, highly available architecture combining modern web/mobile technologies with reliable embedded hardware.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card p-8 rounded-3xl border relative overflow-hidden group ${tech.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-white mb-6 bg-black/40 inline-block px-4 py-2 rounded-lg border border-white/5">{tech.category}</h4>
                <ul className="space-y-3">
                  {tech.items.map((item, i) => (
                    <li key={i} className="text-gray-300 font-medium flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
