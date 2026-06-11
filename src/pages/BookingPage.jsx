import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Video,
  ShieldCheck,
  CheckCircle2,
  Building2,
  User,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  Loader2,
  Globe
} from "lucide-react";

// Hardware accelerated fade animations used across the wizards view states
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2, ease: "easeIn" } }
};

const slots = [
  "10:00 AM - 10:30 AM",
  "11:00 AM - 11:30 AM",
  "12:00 PM - 12:30 PM",
  "3:00 PM - 3:30 PM",
  "5:00 PM - 5:30 PM"
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const [booking, setBooking] = useState({
    slot: "",
    fullName: "",
    brandName: "",
    businessPhone: "",
    personalPhone: "",
    email: ""
  });

  const selectSlot = (slot) => {
    setBooking((p) => ({ ...p, slot }));
    setStep(2);
  };

  // ============================
  // CALL BACKEND API (UNCHANGED LOGIC)
  // ============================
  const confirmBooking = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Booking failed");
      }

      setReferenceId(data.referenceId);
      setStep(4);

      if (data.whatsappUrl) {
        setTimeout(() => {
          window.open(data.whatsappUrl, "_blank");
        }, 800);
      }
    } catch (err) {
      alert("Booking failed. Try again.");
      console.error(err);
    }
    setLoading(false);
  };

  // ============================
  // GOOGLE CALENDAR LINK GENERATION
  // ============================
  const getCalendarLink = () => {
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Strategy Call - ${booking.fullName}&details=Brand: ${booking.brandName}%0AEmail: ${booking.email}%0ARef: ${referenceId}`;
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pt-32 pb-20 transition-colors duration-300 relative overflow-hidden selection:bg-zinc-950/10 dark:selection:bg-white/10">
      
      {/* BACKGROUND DECORATOR ELEMENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(24,24,27,0.03),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.015),transparent_50%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP SYSTEM STATUS HEADER ROW */}
        <div className="mb-10 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/80 pb-6">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-zinc-950 dark:bg-white flex items-center justify-center text-white dark:text-zinc-950 font-mono font-black text-base shadow-xs">
              P
            </div>
            <div>
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                TEAM PIKA GROWTH
              </p>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                Architecture Consultation Hub
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE TELEMETRY: OPEN AVAILABILITY
          </div>
        </div>

        {/* CONTAINER CONSOLE */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[640px]">
          
          {/* LEFT PANEL: CONTEXT INFORMATION MARGIN */}
          <div className="md:col-span-5 bg-zinc-50/60 dark:bg-zinc-900/30 p-8 sm:p-10 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-between relative">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                <Sparkles className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
                STRATEGY_DISCOVERY_SESSION
              </span>
              
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white mt-5 leading-tight">
                Secure Growth Structural Layout
              </h1>
              
              <p className="mt-3.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Meet with our engineering leadership to break down core operational technical layout constraints, analyze deployment vectors, and build custom workflow automation maps.
              </p>

              {/* SPECIFICATION CARD STACK */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 group">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors shadow-2xs">
                    <Clock className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">Duration Parameters</h4>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">30 Minutes Focused Sync</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 group">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors shadow-2xs">
                    <Video className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">Communication Protocol</h4>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">High-Fidelity Remote Video Link</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 group">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors shadow-2xs">
                    <ShieldCheck className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">Security State</h4>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">Instant validation & reference hash routing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SELECTION ROADMAP FOOTNOTE */}
            <div className="mt-12 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/60 hidden md:block text-left">
              <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
                Need to amend or reschedule details? Reach our desk support operations route instantly via our standard communication channels.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: STEP INTERACTIVE ENGINE */}
          <div className="md:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white dark:bg-zinc-900 relative">
            
            {/* PROGRESS MANAGEMENT INTERFACE */}
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] font-bold mb-3 text-zinc-400 dark:text-zinc-500">
                <span className="uppercase tracking-widest flex items-center gap-1.5">
                  <Globe className="w-3 h-3 animate-spin [animation-duration:8s]" /> PIPELINE_STAGE
                </span>
                <span>{step} / 4</span>
              </div>
              
              <div className="flex gap-2 mb-12">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="h-1 flex-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-full overflow-hidden relative">
                    <motion.div 
                      className="absolute inset-y-0 left-0 bg-zinc-950 dark:bg-white rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: s <= step ? "100%" : "0%" }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    />
                  </div>
                ))}
              </div>

              {/* ROUTER VIEW WRAPPER */}
              <div className="min-h-[360px] flex flex-col justify-start">
                <AnimatePresence mode="wait">
                  
                  {/* STEP 1: SLOT ASSIGNMENT ENGINE */}
                  {step === 1 && (
                    <motion.div key="1" initial="hidden" animate="visible" exit="hidden" variants={fadeUp} className="w-full">
                      <div className="mb-6">
                        <h2 className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight">
                          Select Availability Target
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-500 mt-1.5 leading-relaxed">
                          Time coordinates are synchronized and filtered dynamically matching your detected regional tracking layouts.
                        </p>
                      </div>

                      <div className="space-y-2.5">
                        {slots.map((slot, i) => {
                          const isSelected = booking.slot === slot;
                          return (
                            <motion.button
                              key={i}
                              whileHover={{ x: 4 }}
                              onClick={() => selectSlot(slot)}
                              className={`w-full text-left px-4 py-4 rounded-xl border font-semibold text-sm transition-all duration-200 flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-white/40 cursor-pointer ${
                                isSelected
                                  ? "border-zinc-950 dark:border-white bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-sm"
                                  : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Calendar className={`w-4 h-4 ${isSelected ? "text-white dark:text-zinc-950" : "text-zinc-400"}`} />
                                <span>{slot}</span>
                              </div>
                              <span className={`text-xs font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1 ${
                                isSelected ? "text-white dark:text-zinc-950" : "text-zinc-400 dark:text-zinc-500"
                              }`}>
                                Lock Target <ArrowRight className="w-3 h-3" />
                              </span>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: ACCOUNT METADATA FIELDS */}
                  {step === 2 && (
                    <motion.div key="2" initial="hidden" animate="visible" exit="hidden" variants={fadeUp} className="w-full">
                      <div className="mb-6">
                        <h2 className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight">
                          Operational Profile Configuration
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-500 mt-1.5 leading-relaxed">
                          Provide explicit organization details to align system resources prior to the architecture consultation loop.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="relative">
                          <label className="block text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">
                            Full Name Identity *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                            <input
                              type="text"
                              autoFocus
                              placeholder="e.g. Alexander Wright"
                              value={booking.fullName}
                              className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-1.5 focus:ring-zinc-950 dark:focus:ring-white focus:border-transparent transition-all shadow-2xs"
                              onChange={(e) => setBooking({ ...booking, fullName: e.target.value })}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">
                            Brand Entity / Corporation Name *
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                            <input
                              type="text"
                              placeholder="e.g. Pika Frameworks Corp"
                              value={booking.brandName}
                              className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-1.5 focus:ring-zinc-950 dark:focus:ring-white focus:border-transparent transition-all shadow-2xs"
                              onChange={(e) => setBooking({ ...booking, brandName: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">
                              Primary Business Line *
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                              <input
                                type="tel"
                                placeholder="10-digit identifier"
                                value={booking.businessPhone}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-1.5 focus:ring-zinc-950 dark:focus:ring-white focus:border-transparent transition-all shadow-2xs"
                                onChange={(e) => setBooking({ ...booking, businessPhone: e.target.value })}
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">
                              Secondary Routing <span className="text-zinc-400 font-sans font-normal lowercase">(optional)</span>
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                              <input
                                type="tel"
                                placeholder="Backup parameter"
                                value={booking.personalPhone}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-1.5 focus:ring-zinc-950 dark:focus:ring-white focus:border-transparent transition-all shadow-2xs"
                                onChange={(e) => setBooking({ ...booking, personalPhone: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">
                            Communication Endpoint Mail *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                            <input
                              type="email"
                              placeholder="alexander@pikagrowth.com"
                              value={booking.email}
                              className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-1.5 focus:ring-zinc-950 dark:focus:ring-white focus:border-transparent transition-all shadow-2xs"
                              onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      {/* ACTIONS CONTROLS COMPONENT FOOTER */}
                      <div className="mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" /> Back to timeslots
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const emailRegex = /\S+@\S+\.\S+/;
                            const phoneRegex = /^[0-9]{10}$/;

                            if (!booking.fullName || !booking.brandName) {
                              alert("Name and Brand metrics are required parameters");
                              return;
                            }
                            if (!phoneRegex.test(booking.businessPhone)) {
                              alert("Business phone string requires exactly 10 base digits");
                              return;
                            }
                            if (!emailRegex.test(booking.email)) {
                              alert("Invalid formatting on primary endpoint destination email");
                              return;
                            }
                            setStep(3);
                          }}
                          className="px-6 py-3 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold shadow-xs hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer"
                        >
                          Continue Initialization
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: MANIFEST REVIEW LAYER */}
                  {step === 3 && (
                    <motion.div key="3" initial="hidden" animate="visible" exit="hidden" variants={fadeUp} className="w-full">
                      <div className="mb-6">
                        <h2 className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight">
                          Review Synchronization Manifest
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-500 mt-1.5 leading-relaxed">
                          Verify deployment state values and contact parameters before confirming execution.
                        </p>
                      </div>

                      <div className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl divide-y divide-zinc-200 dark:divide-zinc-800/60 overflow-hidden shadow-2xs mb-6">
                        <div className="px-5 py-3.5 flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-zinc-400 dark:text-zinc-500 font-mono text-[11px] uppercase tracking-wider">Target Windows</span>
                          <span className="font-semibold text-zinc-950 dark:text-white">{booking.slot}</span>
                        </div>
                        <div className="px-5 py-3.5 flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-zinc-400 dark:text-zinc-500 font-mono text-[11px] uppercase tracking-wider">Account Principal</span>
                          <span className="font-semibold text-zinc-950 dark:text-white">{booking.fullName}</span>
                        </div>
                        <div className="px-5 py-3.5 flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-zinc-400 dark:text-zinc-500 font-mono text-[11px] uppercase tracking-wider">Corporate Space</span>
                          <span className="font-semibold text-zinc-950 dark:text-white">{booking.brandName}</span>
                        </div>
                        <div className="px-5 py-3.5 flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-zinc-400 dark:text-zinc-500 font-mono text-[11px] uppercase tracking-wider">Endpoint Target</span>
                          <span className="font-semibold text-zinc-950 dark:text-white break-all text-right max-w-[220px]">{booking.email}</span>
                        </div>
                        <div className="px-5 py-3.5 flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-zinc-400 dark:text-zinc-500 font-mono text-[11px] uppercase tracking-wider">Routing Line</span>
                          <span className="font-semibold text-zinc-950 dark:text-white">{booking.businessPhone}</span>
                        </div>
                      </div>

                      {/* CONCLUDING RE-CONFIRMATION ACTION CONTROLS */}
                      <div className="mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" /> Modify Parameters
                        </button>
                        
                        <button
                          type="button"
                          onClick={confirmBooking}
                          disabled={loading}
                          className="px-6 py-3 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold shadow-xs hover:opacity-90 disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer select-none"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              <span>Processing Record...</span>
                            </>
                          ) : (
                            <span>Confirm Architecture Call</span>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: DEPLOYMENT SUCCESS OVERLAY */}
                  {step === 4 && (
                    <motion.div key="4" initial="hidden" animate="visible" exit="hidden" variants={fadeUp} className="text-center py-6 w-full">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-5 border border-emerald-500/20 shadow-xs">
                        <CheckCircle2 className="w-7 h-7 stroke-[1.8]" />
                      </div>

                      <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                        Booking Confirmed
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-500 max-w-sm mx-auto mt-2.5 leading-relaxed">
                        Your request has cleared core API validations. Transmission confirmation pathways have initialized successfully.
                      </p>

                      <div className="mt-6 px-4 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/60 text-xs text-zinc-500 inline-block font-mono">
                        Reference Hash: <span className="text-zinc-950 dark:text-white font-bold">{referenceId || "N/A"}</span>
                      </div>

                      <div className="mt-10 pt-6 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                        <a
                          href={getCalendarLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 shadow-2xs transition-colors text-center cursor-pointer"
                        >
                          Add to Google Calendar
                        </a>
                        
                        <a
                          href="/"
                          className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:opacity-90 transition-opacity text-center cursor-pointer shadow-xs"
                        >
                          Return to Workspace Home
                        </a>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

            </div>

            {/* LOWER ASSURANCE DECK FOOTNOTE MARGIN */}
            <div className="mt-12 pt-5 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[10px] font-mono font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                End-to-End Secure Sync
              </span>
              <span>ISO-27001 Pipeline Verified</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}