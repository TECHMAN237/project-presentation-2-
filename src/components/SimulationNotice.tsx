import { motion } from 'motion/react';
import { ArrowLeft, Cpu, Settings, RefreshCw, FileText } from 'lucide-react';

interface SimulationNoticeProps {
  onBack: () => void;
  onOpenDocs?: () => void;
}

export default function SimulationNotice({ onBack, onOpenDocs }: SimulationNoticeProps) {
  return (
    <section className="min-h-screen px-6 py-12 md:py-24 bg-slate-50 flex items-center justify-center font-sans">
      <div className="max-w-3xl w-full mx-auto">
        <button 
          onClick={onBack} 
          className="mb-8 flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors border-0 bg-transparent cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Hub
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200 rounded-3xl p-8 md:p-14 shadow-sm relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wide rounded-full mb-8">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-sky-500" />
            Simulation Preview - Compilation In Progress
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Proteus Simulation Media Release
          </h1>

          <div className="space-y-6 text-slate-600 leading-relaxed text-[15px] md:text-base">
            <p>
              The full screen-walkthrough and trace recording of our hardware prototype are currently being compiled and rendered. Our team is finalizing the video sequence to ensure all hardware parameters, signal handshakes, and diagnostic logs are presented with ultimate clarity for judges and investors.
            </p>
            
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-lime-600" />
                Active Hardware Verifications Under Demo Prep:
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-lime-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-800">Arduino GSM Handshake:</strong> Validated automatic transmission initialization on hardware SOS trigger.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-lime-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-800">GPS Geo-Grid Logic:</strong> Live geofence boundaries simulated within Proteus environment maps.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-800">Video Walkthrough Compression:</strong> Final rendering of simulation panels and code synchronization logs.
                  </div>
                </li>
              </ul>
            </div>

            <p>
              We prioritize functional credibility. In the meantime, you can explore our fully structured software specifications and platform blueprints within our technical dossier.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-slate-100 mt-10">
            <button 
              onClick={onBack}
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 border-0 cursor-pointer"
            >
              Return to Access Hub
            </button>
            
            <a 
              href="/doc.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (onOpenDocs) {
                  e.preventDefault();
                  onOpenDocs();
                }
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              Read Software Documentation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
