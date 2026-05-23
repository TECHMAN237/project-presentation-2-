import { motion } from 'motion/react';
import { FileText, Download, FileJson, Layers } from 'lucide-react';

const docs = [
  { title: "Project Dossier", format: "PDF", icon: FileText },
  { title: "Technical Overview", format: "PDF", icon: Layers },
  { title: "Startup Pitch Deck", format: "PDF", icon: FileText },
  { title: "Prototype Doc", format: "DOCX", icon: FileJson }
];

export default function Documents() {
  return (
    <section className="py-24 relative bg-dark-surface border-t border-white/5" id="documents">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Resources & Documentation</h2>
          <p className="text-gray-400 text-lg">Detailed specifications, presentation materials, and architecture documents for judges and investors.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {docs.map((doc, idx) => (
            <motion.a
              key={idx}
              href="#" // Placeholder for actual link
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group cursor-pointer border-white/5 hover:border-primary/50 transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <doc.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{doc.title}</h4>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full mb-4">
                 {doc.format}
              </div>
              <div className="text-sm text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Download className="w-4 h-4" /> Download
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
