import { motion } from 'motion/react';
import { ExternalLink, PlayCircle, FileText, FileCode, MonitorPlay, Cpu } from 'lucide-react';

interface HubResourcesProps {
  onOpenNotice?: () => void;
  onOpenSimNotice?: () => void;
  onOpenDocs?: () => void;
  onOpenPresentation?: () => void;
}

export default function HubResources({ 
  onOpenNotice, 
  onOpenSimNotice, 
  onOpenDocs, 
  onOpenPresentation 
}: HubResourcesProps) {
  const resources = [
    {
      id: "prototype",
      title: "Live Frontend Prototype",
      description: "Fully interactive mobile application interface.",
      icon: ExternalLink,
      buttonText: "Open App Prototype",
      link: "#",
      badge: "Interactive",
      color: "text-lime-600",
      bg: "bg-lime-50"
    },
    {
      id: "video",
      title: "Demo Video",
      description: "Platform walkthrough and conceptual timeline.",
      icon: PlayCircle,
      buttonText: "Watch Video",
      link: "https://youtu.be/SHIzaqPHj30",
      badge: "Media",
      color: "text-sky-500",
      bg: "bg-sky-50"
    },
    {
      id: "pdf",
      title: "Presentation PDF",
      description: "Official startup pitch deck for judges.",
      icon: FileText,
      buttonText: "View PDF",
      link: "/presentation.pdf",
      badge: "Document",
      color: "text-slate-700",
      bg: "bg-slate-100"
    },
    {
      id: "tech",
      title: "Software Documentation",
      description: "System architecture and module documentation.",
      icon: FileCode,
      buttonText: "Read Docs",
      link: "/doc.pdf",
      badge: "Document",
      color: "text-slate-700",
      bg: "bg-slate-100"
    },
    {
      id: "sim",
      title: "Wearable Simulation",
      description: "Screen recording of the Proteus hardware simulation and routing logic.",
      icon: MonitorPlay,
      buttonText: "Play Simulation",
      link: "#",
      badge: "Hardware",
      color: "text-sky-500",
      bg: "bg-sky-50"
    }
  ];

  return (
    <section className="px-6 py-16 bg-slate-50 border-y border-slate-100" id="resources">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Project Resources</h2>
          <p className="text-slate-500">Access all prototypes, and necessary technical files below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.bg}`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-500 rounded-full">
                  {item.badge}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow">{item.description}</p>
              
              <a 
                href={item.link}
                target={item.link !== "#" ? "_blank" : undefined}
                rel={item.link !== "#" ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (item.id === "prototype" && onOpenNotice) {
                    e.preventDefault();
                    onOpenNotice();
                  } else if (item.id === "sim" && onOpenSimNotice) {
                    e.preventDefault();
                    onOpenSimNotice();
                  } else if (item.id === "pdf" && onOpenPresentation) {
                    e.preventDefault();
                    onOpenPresentation();
                  } else if (item.id === "tech" && onOpenDocs) {
                    e.preventDefault();
                    onOpenDocs();
                  }
                }}
                className="inline-flex items-center justify-center w-full py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl transition-colors gap-2"
              >
                {item.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
