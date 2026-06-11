import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

<<<<<<< HEAD
export default defineConfig({
  plugins: [react()],
=======
/**
 * TEAM PIKA GROWTH - VITE ARCHITECTURE CONFIG
 * -------------------------------------------
 * Production-grade Vite setup for:
 * - React SaaS architecture
 * - Vercel deployment compatibility
 * - Scalable folder aliasing
 * - Optimized build performance
 */

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic"
    })
  ],
>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
<<<<<<< HEAD
=======
      "@styles": path.resolve(__dirname, "./src/styles"),
>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91
      "@utils": path.resolve(__dirname, "./src/utils")
    }
  },

  server: {
<<<<<<< HEAD
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false
=======
    port: 5173,
    strictPort: true,
    open: true,
    cors: true,
    host: true
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",

    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"]
        }
>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91
      }
    }
  },

<<<<<<< HEAD
  build: {
    outDir: "dist"
  }
});
=======
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"]
  }
});
>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91
