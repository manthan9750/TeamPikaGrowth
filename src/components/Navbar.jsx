import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Moon, Sun, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Industries",
    path: "/industries",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Referral Rewards",
    path: "/referral-rewards",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");

    if (stored) {
      return stored === "dark";
    }

    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl border-b border-white/10 bg-black/60"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}

            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <div
                className="
                w-11
                h-11
                rounded-2xl
                bg-gradient-to-br
                from-violet-600
                to-cyan-500
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-lg
                shadow-lg
                group-hover:scale-105
                transition-all
              "
              >
                PG
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  TEAM PIKA GROWTH
                </h3>

                <p className="text-xs opacity-70">
                  Digital Growth Team
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    text-sm
                    font-medium
                    transition-all
                    hover:text-violet-400
                    ${
                      isActive
                        ? "text-violet-400"
                        : ""
                    }
                  `
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Side */}

            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() =>
                  setDarkMode(!darkMode)
                }
                className="
                w-11
                h-11
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:scale-105
                transition-all
              "
              >
                {darkMode ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>

              <a
                href="https://wa.me/9769710678"
                target="_blank"
                rel="noreferrer"
                className="
                btn-primary
                gap-2
              "
              >
                Book Free Consultation

                <ArrowRight size={16} />
              </a>
            </div>

            {/* Mobile Button */}

            <button
              className="lg:hidden"
              onClick={() =>
                setIsOpen(!isOpen)
              }
            >
              {isOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="
            fixed
            top-20
            left-0
            right-0
            z-40
            backdrop-blur-2xl
            bg-black/95
            border-b
            border-white/10
            lg:hidden
          "
          >
            <div className="container-custom py-6">
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className="
                    text-base
                    font-medium
                    py-2
                  "
                  >
                    {item.name}
                  </NavLink>
                ))}

                <button
                  onClick={() =>
                    setDarkMode(!darkMode)
                  }
                  className="
                  mt-3
                  border
                  border-white/10
                  rounded-xl
                  p-3
                "
                >
                  {darkMode
                    ? "Switch To Light Mode"
                    : "Switch To Dark Mode"}
                </button>

                <a
                  href="https://wa.me/9769710678"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-2"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-20" />
    </>
  );
}
