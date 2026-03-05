import { useState, useEffect } from "react";
import { Menu as MenuIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useHaptics } from "../hooks/useHaptics";

interface HeaderProps {
  onMenuClick: () => void;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Header({ onMenuClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const { hapticMedium } = useHaptics();

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

  const handleMenuClick = () => {
    hapticMedium();
    onMenuClick();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#060608]/75 backdrop-blur-2xl saturate-150 border-b border-white/6"
          : "bg-transparent"
      }`}
    >
      <motion.div
        layout
        transition={{ layout: { duration: 0.35, ease } }}
        className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5"
      >
        <motion.p
          layout="position"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-xs sm:text-sm tracking-wider flex items-baseline gap-4 sm:gap-8"
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
                PAUL ROUBINET
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
                GRENOBLE, FRANCE
              </motion.span>
            )}
          </AnimatePresence>
          <span className="tabular-nums">{time}</span>
        </motion.p>

        <motion.p
          layout="position"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="hidden md:block text-xs sm:text-sm tracking-wider"
        >
          Développeur Full-Stack
        </motion.p>

        <motion.button
          layout="position"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          whileTap={{ scale: 0.94 }}
          onClick={handleMenuClick}
          className="flex items-center gap-2.5 text-xs sm:text-sm tracking-wider hover:opacity-100 transition-opacity cursor-pointer"
        >
          MENU
          <MenuIcon size={20} strokeWidth={1.5} />
        </motion.button>
      </motion.div>
    </header>
  );
}
