export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        // BRAND CORE
        primary: "#7c3aed",      // Growth Purple (authority + premium)
        secondary: "#06b6d4",    // Tech Cyan (modern + trust)

        // BACKGROUNDS
        bgDark: "#0b0b12",
        bgLight: "#ffffff",

        // TEXT SYSTEM
        textPrimary: "#0f172a",
        textMuted: "#94a3b8",
        textSoft: "#cbd5e1",

        // STATUS COLORS (for UX states later)
        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444"
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },

      spacing: {
        128: "32rem",
        144: "36rem"
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.12)",
        glow: "0 0 25px rgba(124, 58, 237, 0.45)"
      },

      borderRadius: {
        xl2: "1.25rem"
      },

      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out",
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 2.5s infinite"
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },

        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },

        pulseSoft: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 }
        }
      }
    }
  },

  plugins: []
};
