import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Play, 
  Pause,
  Award, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Clock, 
  Users, 
  Video,
  Download,
  Phone,
  Lock,
  BatteryCharging,
  Zap,
  MapPin,
  FileCheck
} from 'lucide-react';

interface Slide {
  title: string;
  subtitle?: string;
  category: string;
  id: number;
  content: React.ReactNode;
}

interface PitchPresentationProps {
  onBack: () => void;
}

export default function PitchPresentation({ onBack }: PitchPresentationProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playTimerRef = useRef<NodeJS.Timeout | null>(null);
  const presenterContainerRef = useRef<HTMLDivElement>(null);

  const slides: Slide[] = [
    {
      id: 1,
      category: "Introduction",
      title: "SMART CHILD SAFETY SYSTEM",
      subtitle: "Presented by TekMen Revolution",
      content: (
        <div className="flex flex-col justify-center items-center h-full text-center px-4 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full">
              <Zap className="w-3.5 h-3.5" /> Innovation Pitch Deck
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-none uppercase">
              Smart Child <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">Safety System</span>
            </h1>
            
            <p className="text-slate-600 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              A scalable African child protection ecosystem combining mobile technology, community intelligence, and wearable emergency response systems.
            </p>
            
            <div className="pt-8 flex flex-col items-center gap-1.5">
              <div className="h-[2px] w-12 bg-slate-200" />
              <span className="text-slate-400 uppercase tracking-widest text-xs font-bold mt-2">Presented by</span>
              <span className="text-slate-900 font-extrabold tracking-wide text-sm">TekMen Revolution</span>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 2,
      category: "Project Overview",
      title: "Project Vision & Strategy",
      subtitle: "Dual-Version Lifecycle",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full max-w-5xl mx-auto px-4">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase">The Challenge</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight leading-tight">Every Minute Matters When A Child Goes Missing</h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Across many African communities, emergency response systems remain slow, fragmented, or inaccessible during critical windows. The Smart Child Safety System addresses this challenge through progressive layers:
            </p>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0" /> Fast-track recoveries for active missing coordinates</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0" /> Formulate active containment loops securely</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0" /> Integrate physical IoT nodes directly into the loop</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative shadow-sm">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-indigo-600 text-white text-[10px] font-extrabold uppercase rounded-full tracking-wider shadow-sm">
                V1 • Active Ready
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-1">Missing & Found Platform</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Foundational mobile community workspace almost ready for deployment within approximately 2 weeks. Promotes rapid trust, crowd engagement, and adoption loops.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative shadow-sm">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-emerald-600 text-white text-[10px] font-extrabold uppercase rounded-full tracking-wider shadow-sm">
                V2 • In Development
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-1">Smart Wearable Protection</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Discreet physical hardware tags, cellular GPS/GSM uplinks, optical remove detectors, and hardware-level alarms. This is currently undergoing active lab evaluation.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      category: "V1 Platform",
      title: "V1: Mobile Community Ecosystem",
      subtitle: "Accessible, verified and immediate child protection networks.",
      content: (
        <div className="space-y-6 h-full flex flex-col justify-center max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { t: "Report Missing Case", d: "Secured credential verification, immediate geographical radius routing." },
              { t: "Found Child Record", d: "Discovery coordinates logging, moderations loop to avoid misinfo." },
              { t: "Smart Match Engine", d: "PGVector similarity calculation scoring coordinates, gender and age bounds." }
            ].map((f, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-sm">
                <span className="text-emerald-500 font-bold text-xs">V1 Feature 0{idx+1}</span>
                <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2">{f.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-600" />
              Report Authentication & Verification Shield
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-500">
              <div className="space-y-1.5">
                <p className="font-bold text-slate-800">For Parents:</p>
                <p>Mandatory identity confirmation + school files, birth certificates or guardian matching files before public alerts broadcast.</p>
              </div>
              <div className="space-y-1.5">
                <p className="font-bold text-slate-800">For Search Responders:</p>
                <p>Location-authenticated inputs and verified image reports filter spam and keep community information 100% credible.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      category: "V2 Wearable",
      title: "V2: Wearable Technology Architecture",
      subtitle: "Hardware prototypes for proactive child protection.",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full max-w-5xl mx-auto px-4">
          {/* Left spec column */}
          <div className="space-y-4 md:col-span-7">
            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold uppercase rounded text-[10px] tracking-wide">
              SIM808 Cellular Engine
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight leading-tight">
              Wearable Disguises & Hardware Board
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Combines GPS tracking and GSM/GPRS cellular communication in a compact module designed to remain lightweight, discreet and highly durable for daily child usage.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              {[
                { t: "GPS Location Tracker", d: "Provides accurate real-time location metrics." },
                { t: "Optical Removal Sensor", d: "Fires tamper signals if bracelet is removed." },
                { t: "Discreet Kangaroo Pocket", d: "Physical device integrated into hoodie pouch." },
                { t: "Battery Shutdown SOS", d: "Transmits final location prior to battery drain." }
              ].map((s, idx) => (
                <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-800 text-[11px] mb-0.5">{s.t}</h4>
                  <p className="text-[10px] text-slate-500">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right graphics column representing mock hardware block */}
          <div className="md:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 shadow-md border border-slate-800 space-y-4 text-xs font-mono">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <span className="text-emerald-400 font-semibold tracking-wider text-[10px]">PINOUT_MAPPING</span>
              <Cpu className="w-4 h-4 text-emerald-400 animate-spin" />
            </div>
            
            <div className="space-y-2 text-[11px] text-slate-400">
              <div className="flex justify-between">
                <span>[Pin 02] GPS_TXD</span>
                <span className="text-slate-500">─&gt; SUPABASE HTTPS</span>
              </div>
              <div className="flex justify-between">
                <span>[Pin 05] SOS_BUTTON</span>
                <span className="text-rose-400 font-semibold">─&gt; TRIGGER ALER</span>
              </div>
              <div className="flex justify-between">
                <span>[Pin 09] OPTICAL_DET</span>
                <span className="text-amber-400">─&gt; BRACELET REM</span>
              </div>
              <div className="flex justify-between">
                <span>[Pin 12] GPRS_LINK</span>
                <span className="text-emerald-400">─&gt; ON_FLOW</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500">
              <span>Status: Lab Validated</span>
              <span>Temp: 32&deg;C</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      category: "Operations",
      title: "How the System Works",
      subtitle: "The cycle of real-time child rescue operations.",
      content: (
        <div className="flex flex-col justify-center h-full max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              { s: 1, icon: Cpu, t: "Telemetry Uplink", d: "Wearable aggregates GPS coordinates + sensor status." },
              { s: 2, icon: Globe, t: "Cellular Routing", d: "Transmits signal instantly using GPRS mobile antennas." },
              { s: 3, icon: ShieldCheck, t: "Rules Processing", d: "Edge servers analyze geofence and tamper alerts." },
              { s: 4, icon: Clock, t: "Instant Alerts", d: "Parents and nearby search responders get push maps." },
              { s: 5, icon: Users, t: "Active Rescue", d: "Geospatial rescue coordinates guide responders to child." }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col items-center text-center relative shadow-sm">
                <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-750 text-white flex items-center justify-center font-bold text-xs mb-3 font-mono shrink-0 shadow">
                  {step.s}
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 text-emerald-600 mb-2">
                  <step.icon className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs mb-1 line-clamp-1">{step.t}</h4>
                <p className="text-[10px] text-slate-500 leading-normal line-clamp-3">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-100 p-4 rounded-xl flex gap-3 text-amber-900 text-xs">
            <span className="w-5 h-5 rounded px-1.5 py-0.5 bg-amber-250 font-bold shrink-0">SOS</span>
            <div>
              <strong>Trigger Conditions:</strong> Alerts trigger instantly if the children push physical SOS button, leave predefined safe zones, or if optical security sensors detect bracelet removal.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      category: "Privacy & Community",
      title: "Privacy Gating & Active Networks",
      subtitle: "Perfect harmony between child protection and data security.",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full max-w-5xl mx-auto px-4">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-800 text-[10px] font-bold uppercase rounded-full tracking-wide">
              <Lock className="w-3.5 h-3.5" /> Privacy Guardrails
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
              Absolute Privacy by Default
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We understand the critical balance. Location coordinates are strictly private and are never ambiently streamed or accessible:
            </p>
            <ul className="space-y-2 text-xs text-slate-500">
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-800">✔</span> Parents do NOT continuously track daily child positions.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-800">✔</span> Real-time coordinates are unlocked ONLY on active emergency windows.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-800">✔</span> Absolute encryption blocks raw tracking databases from hackers.
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4">
            <h4 className="font-extrabold text-slate-950 text-sm">Community Volunteer Profiles</h4>
            
            <div className="space-y-3">
              <div className="flex gap-3 text-xs">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
                  A
                </div>
                <div>
                  <p className="font-bold text-slate-800">Active Mode ("I CAN HELP")</p>
                  <p className="text-[11px] text-slate-500">Local responders immediately receive tactical direction coordinates maps when child goes missing inside their proximity.</p>
                </div>
              </div>

              <div className="flex gap-3 text-xs">
                <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center font-bold shrink-0">
                  P
                </div>
                <div>
                  <p className="font-bold text-slate-800">Passive Mode</p>
                  <p className="text-[11px] text-slate-500">Standard notification logs only. Rewards systems motivate engagement safely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      category: "Vision & Team",
      title: "Expected Impact, Vision & Team Team",
      subtitle: "Presented by TekMen Revolution",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full max-w-5xl mx-auto px-4">
          <div className="space-y-5">
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-none uppercase">
              The Expected Impact
            </h3>
            
            <div className="space-y-3 text-xs text-slate-500 leading-normal">
              <p className="font-semibold text-slate-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Reduce critical emergency latency response.
              </p>
              <p className="font-semibold text-slate-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Substantially expand overall recovery quotients.
              </p>
              <p className="font-semibold text-slate-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Encourage tech-driven local volunteer nets.
              </p>
              <p className="font-semibold text-slate-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Deliver scalable physical protection architectures built for Africa.
              </p>
            </div>

            <div className="p-4 bg-slate-900 text-slate-100 rounded-xl">
              <p className="text-[11px] leading-relaxed text-slate-300">
                <strong>Our Ambition:</strong> Build a community-powered emergency response network, powered by smart architecture, to keep every child safe.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4">
            <h4 className="font-black text-slate-950 text-sm tracking-wide uppercase border-b border-slate-200 pb-2">
              Team Structure
            </h4>
            
            <div className="space-y-2.5">
              {[
                { name: "ZALI STEEVE", role: "Project Manager & Frontend Developer" },
                { name: "TANTO EINSTEIN", role: "Backend Developer" },
                { name: "TANYI FERDINAND", role: "Hardware Engineer" }
              ].map((m, idx) => (
                <div key={idx} className="flex justify-between items-center bg-white border border-slate-200 p-3 rounded-xl">
                  <div className="space-y-0.5">
                    <p className="font-bold text-slate-900 text-xs">{m.name}</p>
                    <p className="text-[10px] text-slate-500">{m.role}</p>
                  </div>
                  <span className="px-2.5 py-0.5 bg-indigo-50 border border-indigo-100 rounded-full text-[9px] font-bold text-indigo-700 tracking-wide uppercase">
                    TEKMEN
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  // Autoplay functionality
  useEffect(() => {
    if (isPlaying) {
      playTimerRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // 5 sec per slide
    } else {
      if (playTimerRef.current) {
        clearInterval(playTimerRef.current);
      }
    }

    return () => {
      if (playTimerRef.current) {
        clearInterval(playTimerRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div 
      ref={presenterContainerRef}
      className={`min-h-screen bg-slate-950 flex flex-col font-sans transition-all text-slate-100 ${
        isFullscreen ? "p-0" : "p-0 sm:p-4"
      }`}
      id="pitch-presenter-main"
    >
      {/* Heading Toolbar Bar */}
      <header className="bg-slate-900 border-b border-white/5 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack} 
            className="p-2 border border-white/10 hover:bg-slate-800 bg-slate-900 rounded-xl transition-all cursor-pointer text-slate-300 shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-extrabold uppercase rounded-md text-[9px] tracking-widest leading-none border border-emerald-500/10">
              Keynote View
            </span>
            <span className="font-bold text-sm text-slate-100 hidden sm:inline">Smart Child Safety System</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-300 transition-colors cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-400" /> Pause
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-400" /> Play Slideshow
              </>
            )}
          </button>
          
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 transition-colors border border-white/10 cursor-pointer hidden md:inline-flex"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <a
            href="/presentation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-900 font-semibold rounded-lg text-xs hover:bg-slate-200 transition-colors border-0"
          >
            <Download className="w-3.5 h-3.5" />
            PDF Original
          </a>
        </div>
      </header>

      {/* Main Slide Presentation Window */}
      <div className="flex-grow flex flex-col items-center justify-center p-6 relative">
        <div id="slide-canvas" className="bg-white text-slate-900 w-full max-w-5xl aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col relative">
          
          {/* Header banner showing slide metadata */}
          <div className="px-8 py-4 border-b border-slate-150 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50/50 shrink-0">
            <span>{slides[currentSlideIndex].category}</span>
            <span className="text-slate-900 font-extrabold">{slides[currentSlideIndex].id} / {slides.length}</span>
          </div>

          {/* Dynamic Content */}
          <div className="flex-grow p-4 sm:p-8 flex items-center justify-center relative min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlideIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full"
              >
                {slides[currentSlideIndex].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress display footer bar */}
          <div className="w-full h-1 bg-slate-100 shrink-0">
            <div 
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Controller Buttons */}
      <footer className="bg-slate-900 border-t border-white/5 py-4 px-6 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Step dots overview indicators */}
        <div className="flex flex-wrap items-center gap-1.5 max-w-full justify-center">
          {slides.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlideIndex(idx);
                  setIsPlaying(false);
                }}
                className={`transition-all rounded-full border-0 cursor-pointer ${
                  isActive 
                    ? "w-8 h-2.5 bg-emerald-500" 
                    : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                }`}
                title={slide.title}
              />
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/5 text-slate-300 hover:bg-white/10 rounded-xl transition-colors border border-white/10 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <span className="text-xs font-bold font-mono text-slate-400 px-3 py-1.5 bg-slate-800 rounded-lg">
            Slide {currentSlideIndex + 1} of {slides.length}
          </span>

          <button
            onClick={nextSlide}
            className="p-3 bg-white/5 text-slate-300 hover:bg-white/10 rounded-xl transition-colors border border-white/10 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
