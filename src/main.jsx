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
