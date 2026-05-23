import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, FileText, Lightbulb, Smartphone, Webhook, ChevronRight, Cpu, Eye, QrCode } from 'lucide-react';

interface PrototypeNoticeProps {
  onBack: () => void;
  onOpenSimNotice?: () => void;
  onOpenDocs?: () => void;
}

export default function PrototypeNotice({ onBack, onOpenSimNotice, onOpenDocs }: PrototypeNoticeProps) {
  return (
    <section className="min-h-screen px-6 py-12 md:py-24 bg-slate-50 flex items-center justify-center font-sans">
      <div className="max-w-4xl w-full mx-auto">
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-50 border border-lime-100 text-lime-700 text-xs font-semibold uppercase tracking-wide rounded-full mb-8">
            <Lightbulb className="w-3.5 h-3.5" />
            MVP Prototype
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Prototype Architecture Notice
          </h1>

          <div className="space-y-6 text-slate-600 leading-relaxed text-[15px] md:text-base mb-10">
            <p>
              The current live demo is implemented as a lightweight web-based prototype to ensure fast accessibility, cross-device compatibility, and seamless evaluation during the hackathon phase.
            </p>
            
            <div>
              <p className="mb-4 text-slate-800 font-medium">
                The production version of the platform is planned to use a scalable mobile architecture based on:
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {[
                  "React Native", 
                  "Expo", 
                  "Supabase", 
                  "Firebase Cloud Messaging", 
                  "Embedded GPS/GSM wearable systems"
                ].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p>
              This approach allows rapid iteration, testing, and validation while maintaining a clear roadmap toward full production deployment.
            </p>
          </div>

          {/* Architecture Transition Diagram */}
          <div className="my-10 bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
               
               <div className="flex-1 w-full text-center md:text-left">
                 <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Current Phase</div>
                 <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center gap-3 justify-center md:justify-start">
                   <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                     <Webhook className="w-5 h-5 text-sky-600" />
                   </div>
                   <div className="text-left">
                     <div className="font-semibold text-slate-900 text-sm">Web Prototype</div>
                     <div className="text-[11px] text-slate-500">Lightweight Access</div>
                   </div>
                 </div>
               </div>

               <div className="hidden md:flex flex-col items-center justify-center text-slate-300">
                  <ChevronRight className="w-8 h-8" />
               </div>
               <div className="md:hidden flex items-center justify-center text-slate-300 h-2">
                  <div className="w-[1px] h-8 bg-slate-200" />
               </div>

               <div className="flex-1 w-full text-center md:text-left">
                 <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Production Vision</div>
                 <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center gap-3 justify-center md:justify-start border-l-4 border-l-lime-500">
                   <div className="w-10 h-10 rounded-lg bg-lime-50 flex items-center justify-center shrink-0">
                     <Smartphone className="w-5 h-5 text-lime-600" />
                   </div>
                   <div className="text-left">
                     <div className="font-semibold text-slate-900 text-sm">Mobile Scale</div>
                     <div className="text-[11px] text-slate-500">Native + Hardware</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Combined Access Hub: QR Code & Centralized Wearable Simulation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 pt-8 border-t border-slate-100">
            {/* QR Code Column */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider rounded-md mb-3">
                  <QrCode className="w-3.5 h-3.5" /> Mobile View
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-1">Scan Me For Mobile View</h3>
                <p className="text-xs text-slate-500 max-w-[240px] mx-auto mb-4">
                  Experience the optimal responsive presentation directly on your physical smartphone screen.
                </p>
              </div>
              <div className="w-36 h-36 bg-white p-2 rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mb-2">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://safechild-v1.vercel.app/" 
                  alt="Scan me for mobile view" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Wearable Simulation Column */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col text-left justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-lime-50 text-lime-700 text-xs font-semibold uppercase tracking-wider rounded-md mb-3">
                  <Cpu className="w-3.5 h-3.5" /> Wearable Logic
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-1">Wearable Simulation Status</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  A high-fidelity hardware sequence demonstrating cell telemetry and geofencing limits using virtual Arduino & SIM808 parameters.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4">
                <div className="text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  Status: Demo Preparation Process
                </div>
                <div className="text-[11px] text-slate-500 leading-normal">
                  Hardware circuits successfully validated. Walkthrough rendering is under final assembly.
                </div>
              </div>

              <button
                onClick={onOpenSimNotice}
                className="w-full py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-slate-400" />
                View Simulation Details
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-100">
            <a 
              href="https://safechild-v1.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group"
            >
              Continue to Live Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            
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
              View Software Documentation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
