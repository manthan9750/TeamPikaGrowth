import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { 
  AlertTriangle, RefreshCw, Terminal, Layers, CornerDownRight, 
  Flame, CheckCircle2, Copy 
} from "lucide-react";

/**
 * PRODUCTION GLOBAL CONFIGURATION
 */
const SYSTEM_CONFIG = {
  env: "production",
  version: "2.5.0-delta",
  telemetryLog: true,
};

/**
 * GLOBAL ERROR BOUNDARY
 */
class GlobalErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null, copied: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
  }

  handleSystemRecovery = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-zinc-950 text-white flex items-center justify-center p-8">
          <div className="max-w-xl text-center">
            <h1 className="text-2xl font-bold mb-4">A runtime error occurred</h1>
            <button onClick={this.handleSystemRecovery} className="bg-white text-black px-4 py-2 rounded">
              Reload Application
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * ROOT HYDRATION
 */
const containerElement = document.getElementById("root");
const appHydrationRoot = ReactDOM.createRoot(containerElement);

appHydrationRoot.render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <ThemeProvider>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </GlobalErrorBoundary>
  </React.StrictMode>
);