import { motion } from 'motion/react';

const team = [
  { name: "ZALI STEEVE", role: "PROJECT MANAGER AND FRONTEND DEVELOPPER", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Steeve&backgroundColor=6C4DFF" },
  { name: "TANTO EINSTEIN", role: "BACKEND DEVELOPPER", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Einstein&backgroundColor=3b82f6" },
  { name: "TANYI FERDINAND", role: "HARDWARE ENGINEER", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ferdinand&backgroundColor=10b981" }
];

export default function Team() {
  return (
    <section className="py-32 relative bg-dark-bg" id="team">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">The Innovators</h2>
          <h3 className="text-4xl md:text-5xl font-bold">TekMen Revolution</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden glass-card border-white/10 group-hover:border-primary/50 transition-colors p-2">
                 <div className="w-full h-full rounded-full overflow-hidden bg-white/5">
                   {/* Fallback avatar using dicebear, replace with genuine team photos */}
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                 </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{member.name}</h4>
              <p className="text-sm text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
