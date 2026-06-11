import React, { useState, useEffect, useCallback, useId } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Activity, 
  ArrowUpRight, 
  Wifi, 
  Layers, 
  CheckCircle2, 
  X, 
  AlertCircle,
  HelpCircle,
  Sparkles,
  Command
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * ==========================================================================
 * CONFIGURATION METADATA & TELEMETRY INITIALIZER VALUES
 * ==========================================================================
 */
const PERFORMANCE_METRICS_TEMPLATE = [
  { id: "core_load", label: "DOM Core Hydration", value: "0.24s", status: "nominal" },
  { id: "fps_rate", label: "Render Frame Pipeline", value: "60 FPS", status: "nominal" },
  { id: "network_latency", label: "Edge Relay Sync", value: "14ms", status: "nominal" },
  { id: "security_state", label: "TLS Node Vector", value: "AES-256", status: "secure" }
];

const ROUTE_META_DICTIONARY = {
  "/": { title: "Root Node Core Operations", section: "OVERVIEW_HUB" },
  "/services": { title: "Architecture Capabilities", section: "VECTORS_SERVICES" },
  "/projects": { title: "Structural Case Studies", section: "DEPLOYMENT_RECORDS" },
  "/industries": { title: "Target Domain Matrices", section: "MARKET_CLUSTERS" },
  "/about": { title: "Entity Profile Systems", section: "CORPORATE_IDENTITY" },
  "/contact": { title: "Communication Pipelines", section: "ROUTING_ENDPOINT" },
  "/book": { title: "Resource Scheduling Manifest", section: "SCHEDULER_CORE" }
};

export default function Layout() {
  const location = useLocation();
  const instanceId = useId();

  // Unified Architecture State Manager
  const [telemetry, setTelemetry] = useState({
    initialized: false,
    scrollProgress: 0,
    networkOnline: navigator.onLine,
    diagnosticDrawerOpen: false,
    activeToasts: [],
    systemMetrics: PERFORMANCE_METRICS_TEMPLATE,
    uptimeCounter: 0
  });

  /**
   * MEMOIZED TRACKERS & OPERATIONS
   * Hardware-accelerated background calculations
   */
  const handleScroll = useCallback(() => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll > 0) {
      setTelemetry(prev => ({
        ...prev,
        scrollProgress: Number((window.scrollY / totalScroll).toFixed(4))
      }));
    }
  }, []);

  const handleNetworkChange = useCallback(() => {
    const isOnline = navigator.onLine;
    setTelemetry(prev => ({ ...prev, networkOnline: isOnline }));
    
    // Inject dynamic system notification toast based on line status state
    triggerToast(
      isOnline ? "Network Connection Synchronized" : "Edge Telemetry Disconnected",
      isOnline ? "success" : "danger",
      isOnline ? "System successfully linked back to global relay nodes." : "Local caching enabled. Retrying structural link..."
    );
  }, []);

  const triggerToast = useCallback((title, type = "success", detail = "") => {
    const newToast = {
      id: `toast-${Math.random().toString(36).substring(2, 9)}`,
      title,
      type,
      detail,
      timestamp: new Date().toLocaleTimeString()
    };
    setTelemetry(prev => ({
      ...prev,
      activeToasts: [...prev.activeToasts, newToast]
    }));
  }, []);

  const dismissToast = useCallback((id) => {
    setTelemetry(prev => ({
      ...prev,
      activeToasts: prev.activeToasts.filter(t => t.id !== id)
    }));
  }, []);

  /**
   * LIFECYCLE COORDINATION ENGINE
   */
  useEffect(() => {
    // Flag core initialization loop complete
    setTelemetry(prev => ({ ...prev, initialized: true }));
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    // Dynamic metrics generation ticker simulation for production fidelity
    const metricsInterval = setInterval(() => {
      setTelemetry(prev => {
        const structuralUptime = prev.uptimeCounter + 1;
        const fluctuatingLatency = Math.floor(Math.random() * 8) + 10;
        
        const updatedMetrics = prev.systemMetrics.map(metric => {
          if (metric.id === "network_latency") {
            return { ...metric, value: `${fluctuatingLatency}ms` };
          }
          return metric;
        });

        return {
          ...prev,
          uptimeCounter: structuralUptime,
          systemMetrics: updatedMetrics
        };
      });
    }, 5000);

    // Initial load confirmation toast notification greeting
    const welcomeTimeout = setTimeout(() => {
      triggerToast("Pika Growth Framework Online", "success", "All structural design layers and tokens loaded flawlessly.");
    }, 1200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
      clearInterval(metricsInterval);
      clearTimeout(welcomeTimeout);
    };
  }, [handleScroll, handleNetworkChange, triggerToast]);

  // Handle auto-scroll targeting reset sequence matching location mutation paths
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const currentMeta = ROUTE_META_DICTIONARY[location.pathname] || {
    title: "Extended Virtual Memory Mapping",
    section: "DYNAMIC_EDGE_NODE"
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased selection:bg-zinc-950/10 dark:selection:bg-white/10 relative transition-colors duration-300">
      
      {/* 1. STRUCTURAL BACKGROUND ENGINE MESH CORES */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <div className="absolute inset-0 bg-grid-mesh opacity-[0.4] dark:opacity-[0.15]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[140px] -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      {/* 2. PERSISTENT GLOBAL TELEMETRY LOADING TOP BAR INDICATOR */}
      <div className="fixed top-0 left-0 w-full h-[2.5px] z-[100] bg-zinc-100 dark:bg-zinc-900 pointer-events-none">
        <motion.div 
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 origin-left"
          style={{ scaleX: telemetry.scrollProgress }}
        />
      </div>

      {/* 3. HARDWARE RUNTIME ACCESS CONTROLLER LABELS */}
      <div className="fixed bottom-6 left-6 z-40 hidden xl:flex flex-col gap-1 font-mono text-[9px] font-bold text-zinc-400 dark:text-zinc-600 select-none pointer-events-none uppercase tracking-widest">
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3 h-3 text-indigo-500 dark:text-indigo-400/70" />
          <span>INSTANCE RECH: {instanceId.replace(/:/g, '')}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-emerald-500" />
          <span>SECURE STRUCTURAL STATE RUNNING</span>
        </div>
      </div>

      {/* 4. CENTRAL GLOBAL HEADER CONTEXT */}
      <Navbar />

      {/* 5. MAIN CONTENT OUTLET VIEWPORT ROUTER GRID CONTAINER */}
      <main className="flex-grow z-10 relative flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="flex-grow flex flex-col"
          >
            {/* INJECTED ROUTE CONTEXT DATA BUFFER FEED FOR ACCESSIBILITY SCREEN READERS */}
            <span className="sr-only" aria-live="polite">
              Navigated to layout stream node: {currentMeta.title}
            </span>

            {/* ROUTE COMPONENT MOUNT HOOK */}
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 6. CENTRAL GLOBAL FOOTER CONTEXT */}
      <Footer />

      {/* 7. DIAGNOSTIC FLOATING SYSTEM MANAGEMENT HUB TRIGGER BUTTON */}
      <button
        onClick={() => setTelemetry(p => ({ ...p, diagnosticDrawerOpen: !p.diagnosticDrawerOpen }))}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-200 active:scale-[0.97] group cursor-pointer"
        title="Open Architecture Framework Telemetry Drawer"
        aria-haspopup="true"
        aria-expanded={telemetry.diagnosticDrawerOpen}
      >
        <Terminal className="w-4 h-4 transition-transform group-hover:rotate-6" />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-indigo-500" />
      </button>

      {/* 8. TOAST NOTIFICATION MANAGEMENT HUB CONTAINER LAYER */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-2.5 w-full max-w-sm pointer-events-none select-none">
        <AnimatePresence>
          {telemetry.activeToasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="p-4 rounded-xl border bg-white/95 dark:bg-zinc-900/95 shadow-xl border-zinc-200 dark:border-zinc-800 backdrop-blur-lg flex items-start gap-3.5 pointer-events-auto"
            >
              <div className="mt-0.5">
                {toast.type === "danger" ? (
                  <AlertCircle className="w-4 h-4 text-red-500" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-zinc-950 dark:text-white tracking-tight">
                  {toast.title}
                </h4>
                {toast.detail && (
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5 leading-normal">
                    {toast.detail}
                  </p>
                )}
                <span className="text-[9px] font-mono font-bold text-zinc-400 dark:text-zinc-600 block mt-1.5 uppercase tracking-wider">
                  Telemetry Timestamp: {toast.timestamp}
                </span>
              </div>
              <button
                onClick={() => dismissToast(toast.id)}
                className="p-1 rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 9. SLIDEOUT CORE ENGINE ARCHITECTURE PROFILE OVERLAY DRAWER */}
      <AnimatePresence>
        {telemetry.diagnosticDrawerOpen && (
          <>
            {/* DRAWER BACKGROUND BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setTelemetry(p => ({ ...p, diagnosticDrawerOpen: false }))}
              className="fixed inset-0 z-40 bg-zinc-950/40 backdrop-blur-xs cursor-pointer"
            />

            {/* DRAWER STRUCTURAL SHEET BODY */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-y-auto flex flex-col justify-between"
              role="dialog"
              aria-label="System Diagnostics Framework Hub"
            >
              {/* INTERNALS PANEL HEADER */}
              <div className="p-6 border-b border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-xs">
                    <Command className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black tracking-tight text-zinc-950 dark:text-white">
                      System Architecture Framework
                    </h3>
                    <p className="text-[11px] font-mono font-bold text-indigo-500 dark:text-indigo-400 tracking-wider mt-0.5 uppercase">
                      Operational Diagnostics Hub
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setTelemetry(p => ({ ...p, diagnosticDrawerOpen: false }))}
                  className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-950 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* INTERNALS PANEL TELEMETRY BODY DATA MATRICES */}
              <div className="p-6 flex-1 space-y-6">
                
                {/* MATRICES ROW SECTION 1: NETWORK MATRIX VECTOR STATUS */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5">
                    <Wifi className="w-3.5 h-3.5" /> Core Relay Network State
                  </h4>
                  <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Internet Interlink Connection Status
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase ${
                      telemetry.networkOnline 
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" 
                        : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${telemetry.networkOnline ? "bg-emerald-500" : "bg-red-500"}`} />
                      {telemetry.networkOnline ? "ONLINE_SYNCHRONIZED" : "OFFLINE_LOCAL_ROUTE"}
                    </span>
                  </div>
                </div>

                {/* MATRICES ROW SECTION 2: TELEMETRY PERFORMANCE VECTORS GRID */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> High-Fidelity Performance Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {telemetry.systemMetrics.map((metric) => (
                      <div 
                        key={metric.id}
                        className="p-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xs flex flex-col justify-between"
                      >
                        <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium truncate">
                          {metric.label}
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-sm font-extrabold tracking-tight font-mono text-zinc-950 dark:text-white">
                            {metric.value}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MATRICES ROW SECTION 3: CORE DATA PIPELINE MATRIX MAP ROUTE METADATA */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" /> Current Pipeline Router Scope
                  </h4>
                  <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400 dark:text-zinc-500">TARGET_PATH</span>
                      <span className="font-bold text-zinc-950 dark:text-white">{location.pathname}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400 dark:text-zinc-500">ROUTER_SECTION</span>
                      <span className="font-bold text-indigo-500 dark:text-indigo-400">{currentMeta.section}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-zinc-400 dark:text-zinc-500 whitespace-nowrap">NODE_DESCRIPTOR</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200 text-right">{currentMeta.title}</span>
                    </div>
                  </div>
                </div>

                {/* MATRICES ROW SECTION 4: DIAGNOSTIC SIMULATORS ACTION MATRIX FOR DEVELOPERS */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Trigger System Simulations
                  </h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => triggerToast("Manual Metric Reset Initialized", "success", "Telemetry pipeline values successfully re-indexed.")}
                      className="flex-1 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-950 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 shadow-2xs transition-colors cursor-pointer text-center"
                    >
                      Simulate Success Node
                    </button>
                    <button
                      onClick={() => triggerToast("Diagnostic Validation Refused", "danger", "Security core blocked synthetic payload testing verification.")}
                      className="flex-1 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-950 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 shadow-2xs transition-colors cursor-pointer text-center"
                    >
                      Simulate Fault State
                    </button>
                  </div>
                </div>

              </div>

              {/* INTERNALS PANEL FOOTER SYSTEM STAMP SIGNALS */}
              <div className="p-6 border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/20 text-center font-mono text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wider flex items-center justify-between uppercase">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> System: ISO-Ready
                </span>
                <span>Framework Engine Uptime: {telemetry.uptimeCounter}s</span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}