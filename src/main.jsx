<<<<<<< HEAD
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { 
  AlertTriangle, 
  RefreshCw, 
  Terminal, 
  Layers, 
  CornerDownRight, 
  Flame,
  CheckCircle2,
  Copy
} from "lucide-react";

/**
 * ==========================================================================
 * PRODUCTION GLOBAL CONFIGURATION CONFIG MAP
 * ==========================================================================
 */
const SYSTEM_CONFIG = {
  env: "production",
  version: "2.5.0-delta",
  telemetryLog: true,
  maxRetries: 3
};

/**
 * ==========================================================================
 * HIGH-FIDELITY ERROR BOUNDARY RECOVERY INTERFACES
 * Protects the DOM architecture from white screen rendering collapses
 * ==========================================================================
 */
class GlobalErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      copied: false 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI console.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Catalog system telemetry metrics payload
    console.group(`%c [SYSTEM FAULT VECTOR] CRITICAL ARCHITECTURE ERROR `, 'background: #ef4444; color: #fff; font-weight: bold; padding: 4px;');
    console.error("Caught Exception:", error);
    console.error("Component Stack Trace Reference:", errorInfo.componentStack);
    console.groupEnd();
    
    this.setState({ errorInfo });
  }

  handleSystemRecovery = () => {
    // Hardware accelerated cache purging and memory reset routing
    try {
      window.localStorage.clear();
      window.sessionStorage.clear();
      window.location.reload(true);
    } catch (e) {
      window.location.reload();
    }
  };

  copyStackTrace = () => {
    const stack = this.state.errorInfo?.componentStack || this.state.error?.stack || "No trace available";
    navigator.clipboard.writeText(stack);
    this.setState({ copied: true });
    setTimeout(() => this.setState({ copied: false }), 2000);
  };

  render() {
    if (this.state.hasError) {
      // Premium engineering fall-back control room layout dashboard
      return (
        <div className="min-h-screen w-full bg-zinc-950 text-zinc-50 font-sans flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden select-none">
          
          {/* AMBIENT GLOW APP BACKDROPS */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-grid-mesh opacity-10" />
          </div>

          <div className="w-full max-w-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-6 md:p-8 shadow-2xl relative z-10 fade-up">
            
            {/* COMPONENT ACCENT LOG ELEMENTS */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-800/60">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shadow-sm animate-bounce">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-lg font-black tracking-tight uppercase font-mono text-white flex items-center gap-2">
                    DOM Vector Intercepted <span className="text-xs px-2 py-0.5 rounded-md bg-red-500/10 text-red-400 border border-red-500/20">FAULT_STATE</span>
                  </h1>
                  <p className="text-xs text-zinc-400 font-medium mt-0.5 leading-relaxed">
                    A localized lifecycle runtime crash occurred down-stream inside the application framework node tree.
                  </p>
                </div>
              </div>

              <button
                onClick={this.handleSystemRecovery}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold transition-all active:scale-[0.98] shadow-sm cursor-pointer group whitespace-nowrap self-start md:self-auto"
              >
                <RefreshCw className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                <span>Hot Reload Node Pipeline</span>
              </button>
            </div>

            {/* LIVE SYSTEM DIAGNOSTIC TRACE LOG SCREEN */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-indigo-400" /> Stack Trace Array Input</span>
                <button 
                  onClick={this.copyStackTrace}
                  className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer normal-case bg-zinc-800/40 px-2 py-1 rounded border border-zinc-800"
                >
                  {this.state.copied ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Log Output</span>
                    </>
                  )}
                </button>
              </div>

              <div className="w-full h-64 rounded-xl bg-zinc-950 border border-zinc-800/80 p-4 font-mono text-[11px] leading-relaxed text-zinc-300 overflow-y-auto selection:bg-white/10 select-text">
                <div className="text-red-400 font-bold mb-2 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" /> Exception Caught: {this.state.error?.toString() || "Unknown Operational Thread Failure"}
                </div>
                <div className="text-zinc-600 border-b border-zinc-900 pb-2 mb-2">
                  TIMESTAMP_RELAY: {new Date().toISOString()} | NODE_SCOPE: SYSTEM_MAIN_ROOT
                </div>
                <pre className="whitespace-pre-wrap font-medium font-mono text-zinc-400 block leading-normal">
                  {this.state.errorInfo?.componentStack ? (
                    this.state.errorInfo.componentStack.trim()
                  ) : (
                    "No component structure trace captured. Check secondary runtime telemetry logs via web inspector terminal modules."
                  )}
                </pre>
              </div>
            </div>

            {/* FALLBACK PANEL OPERATIONS DATA MAP FOOTER */}
            <div className="mt-6 pt-5 border-t border-zinc-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-zinc-600" />
                <span>Pika Growth Engine Layer Protection v{SYSTEM_CONFIG.version}</span>
              </div>
              <div className="flex items-center gap-1">
                <CornerDownRight className="w-3 h-3" />
                <span>Status Map Reset Priority: High</span>
              </div>
            </div>

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * ==========================================================================
 * INITIALIZATION ENGINE RUNTIME METHODOLOGY
 * Executes root hydration sequence alongside optimization future flags
 * ==========================================================================
 */
const initApplicationInstance = () => {
  const containerElement = document.getElementById("root");
  
  if (!containerElement) {
    console.error("%c [CRITICAL INITIALIZATION REJECTION] target node element '#root' was not detected in the current DOM ecosystem. Hydration terminated. ", 'background: #ef4444; color: #fff; padding: 4px; font-weight: bold;');
    return;
  }

  // Initialize high-performance React 18 concurrent tree instantiation root
  const appHydrationRoot = ReactDOM.createRoot(containerElement);

  appHydrationRoot.render(
    <React.StrictMode>
      {/* 1. Global Error Interceptor Matrix (Stops white screening across child pages) */}
      <GlobalErrorBoundary>
        {/* 2. Centralized Layout Router Context with V7 future flag configurations */}
        <BrowserRouter 
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          {/* 3. Primary Root Entry Engine Core */}
          <App />
        </BrowserRouter>
      </GlobalErrorBoundary>
    </React.StrictMode>
  );

  // Performance Telemetry Reporting Loop Tracker
  if (SYSTEM_CONFIG.telemetryLog) {
    performance.mark("pika-growth-mounted");
    console.log(
      `%c 🚀 [PIKA GROWTH PIPELINE ONLINE] Core architecture compiled successfully. Environment target synchronized to structural deployment matrix. `,
      'color: #10b981; font-weight: bold; font-family: monospace; font-size: 11px;'
    );
  }
};

// Dispatch the hydration call pipeline sequence onto the active layout thread
initApplicationInstance();
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

/**
 * TEAM PIKA GROWTH - APPLICATION BOOTSTRAP
 * ----------------------------------------
 * This file initializes the entire React system:
 * - Mounts root app
 * - Enables routing
 * - Enables theme system (dark/light)
 * - Loads global CSS system
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91
