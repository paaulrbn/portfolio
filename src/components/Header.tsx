import { useState, useEffect } from "react";
import { Menu as MenuIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onMenuClick: () => void;
  siteReady?: boolean;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Header({ onMenuClick, siteReady = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [time, setTime] = useState(
    new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#060608]/0 backdrop-blur-xl outline-1 outline-[#e8e8e0]/6 shadow-2xl shadow-blue-500/8"
          : "bg-transparent outline-1 outline-[#e8e8e0]/0"
      }`}
      style={
        scrolled
          ? {
              // boxShadow:
              //   "0 20px 48px -20px rgba(6, 6, 8, 0.35)",
            }
          : undefined
      }
    >
      <motion.div
        layout
        transition={{ layout: { duration: 0.35, ease } }}
        className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-6 sm:py-8"
      >
        <motion.p
          layout="position"
          initial={{ opacity: 0, y: -10 }}
          animate={siteReady ? { opacity: 0.8, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-sm sm:text-base tracking-wider flex items-baseline gap-4 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {scrolled ? (
              <motion.span
                key="name"
                layout="position"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.9, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
              >
                Paul Roubinet
              </motion.span>
            ) : (
              <motion.span
                key="location"
                layout="position"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.9, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
              >
                Grenoble, France
              </motion.span>
            )}
          </AnimatePresence>
          <span className="tabular-nums">{time}</span>
        </motion.p>

        <motion.p
          layout="position"
          initial={{ opacity: 0, y: -10 }}
          animate={siteReady ? { opacity: 0.8, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="hidden md:block text-sm sm:text-base tracking-wider"
        >
          Développeur Full-Stack
        </motion.p>

        <motion.button
          layout="position"
          data-haptic="impact-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={siteReady ? { opacity: 0.8, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          whileTap={{ scale: 0.94 }}
          onClick={onMenuClick}
          className="flex items-center gap-2.5 text-sm sm:text-base tracking-wider rounded-md px-1 -mx-1 py-1 hover:opacity-100 opacity-90 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8e8e0]/45"
        >
          Menu
          <MenuIcon size={22} strokeWidth={1.5} />
        </motion.button>
      </motion.div>
    </header>
  );
}
