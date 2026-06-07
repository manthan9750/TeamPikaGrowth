/**
 * =========================================================
 * TEAM PIKA GROWTH - POSTCSS CONFIGURATION
 * ---------------------------------------------------------
 * This file is required for Tailwind CSS processing in:
 * - Vite build system
 * - Vercel production deployment
 *
 * It ensures:
 * - Tailwind directives are compiled correctly
 * - Autoprefixer adds cross-browser support
 * - Production CSS optimization works properly
 * =========================================================
 */

export default {
  plugins: {
    /**
     * Tailwind CSS Processor
     * Converts Tailwind utility classes into final CSS
     */
    tailwindcss: {},

    /**
     * Autoprefixer
     * Adds vendor prefixes for cross-browser compatibility
     */
    autoprefixer: {}
  }
};
